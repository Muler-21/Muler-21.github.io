"""Free neural voices (Microsoft Edge read-aloud, via edge-tts) for AMBKidsJoy videos.
Each sentence is voiced separately and slowly for children, so the video can leave a short pause after it.

Storyboard text per language is a string, or a list of segments (one animation step each).
Inside the Amharic text, words in {braces} are spoken by the English voice, so English words
in an Amharic lesson sound English. Song scenes have "song": {"lines": [{"en": ...}, {"am": ...}]}:
each line is chanted by the voice of its language and shared by both versions of the video.

Set CHAPTER=<id> to voice one storyboard only.
Writes tts/out/<id>/<lang>/<scene>.json + mp3 files, and tts/out/<id>/song/<scene>.json for songs."""
import asyncio, json, glob, os, re
import edge_tts

VERSION = 3
RATE = {"am": "-24%", "en": "-12%"}   # slower than normal speech: easier for young learners
SONG_RATE = {"am": "-8%", "en": "+0%"}  # chant lines: livelier
SONG_PITCH = "+12Hz"

def sentences(text):
    """split at sentence ends, but never inside {English} braces"""
    out, cur, depth = [], "", 0
    for i, ch in enumerate(text.strip()):
        depth += ch == "{"; depth -= ch == "}"
        cur += ch
        nxt = text.strip()[i + 1:i + 2]
        if depth == 0 and (ch in "።!?." or (ch == "}" and cur.rstrip("}")[-1:] in "።!?.")) and (nxt == "" or nxt.isspace()):
            out.append(cur.strip()); cur = ""
    if cur.strip(): out.append(cur.strip())
    return out

def parts(sentence, lang):
    """[(lang, text)] runs: {..} is English, the rest is the scene language"""
    runs = []
    for m in re.finditer(r"\{([^}]*)\}|([^{}]+)", sentence):
        if m.group(1) is not None: runs.append(("en", m.group(1).strip()))
        elif m.group(2).strip(" ፣፤,"): runs.append((lang, m.group(2).strip()))
    return runs

async def speak(text, voice, rate, mp3, pitch="+0Hz"):
    for attempt in range(5):
        try:
            com = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch)
            with open(mp3, "wb") as f:
                async for ch in com.stream():
                    if ch["type"] == "audio":
                        f.write(ch["data"])
            if os.path.getsize(mp3) > 0: return
        except Exception as e:
            print("retry", text[:30], e)
        await asyncio.sleep(4)
    raise RuntimeError("voice failed: " + text)

def fresh(meta_f, want):
    if not os.path.exists(meta_f): return False
    old = json.load(open(meta_f))
    return all(old.get(k) == v for k, v in want.items())

async def main():
    only = os.environ.get("CHAPTER")
    for req in sorted(glob.glob("tts/requests/*.json")):
        d = json.load(open(req))
        if only and d["id"] != only: continue
        voices = d["voices"]
        for lang, voice in voices.items():
            rate = d.get("rate", {}).get(lang, RATE.get(lang, "+0%"))
            out = f"tts/out/{d['id']}/{lang}"
            os.makedirs(out, exist_ok=True)
            for s in d["scenes"]:
                meta_f = f"{out}/{s['id']}.json"
                want = {"v": VERSION, "voice": voice, "rate": rate, "text": s[lang]}
                if fresh(meta_f, want): continue
                segs = s[lang] if isinstance(s[lang], list) else [s[lang]]
                sdir = f"{out}/{s['id']}"; os.makedirs(sdir, exist_ok=True)
                for f in glob.glob(sdir + "/*.mp3"): os.remove(f)
                sents = []; n = 0
                for si, seg in enumerate(segs):
                    for st in sentences(seg):
                        files = []
                        for pl, pt in parts(st, lang):
                            mp3 = f"{sdir}/{n:03d}.mp3"; n += 1
                            await speak(pt, voices[pl], rate if pl == lang else RATE.get(pl, "+0%"), mp3)
                            files.append(mp3.split(f"{out}/")[1])
                        sents.append({"text": st.replace("{", "").replace("}", ""), "seg": si, "files": files})
                json.dump({**want, "sentences": sents}, open(meta_f, "w"), ensure_ascii=False, indent=1)
                print("ok", d["id"], lang, s["id"], len(sents))
        for s in d["scenes"]:
            if "song" not in s: continue
            out = f"tts/out/{d['id']}/song"; os.makedirs(f"{out}/{s['id']}", exist_ok=True)
            meta_f = f"{out}/{s['id']}.json"
            want = {"v": VERSION, "voices": voices, "lines": s["song"]["lines"], "pitch": SONG_PITCH}
            if fresh(meta_f, want): continue
            files = []
            for i, line in enumerate(s["song"]["lines"]):
                (ll, txt), = line.items()
                mp3 = f"{out}/{s['id']}/{i:02d}.mp3"
                await speak(txt, voices[ll], SONG_RATE.get(ll, "+0%"), mp3, SONG_PITCH)
                files.append(f"{s['id']}/{i:02d}.mp3")
            json.dump({**want, "files": files}, open(meta_f, "w"), ensure_ascii=False, indent=1)
            print("ok song", d["id"], s["id"], len(files))

asyncio.run(main())
