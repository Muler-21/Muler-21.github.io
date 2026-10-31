"""Free neural voices (Microsoft Edge read-aloud, via edge-tts) for AMBKidsJoy videos.
Each sentence is voiced separately and slowly for children, so the video can leave a short pause after it.
For every tts/requests/<id>.json writes tts/out/<id>/<lang>/<scene>/<NN>.mp3 and tts/out/<id>/<lang>/<scene>.json."""
import asyncio, json, glob, os, re
import edge_tts

VERSION = 2
RATE = {"am": "-24%", "en": "-12%"}   # slower than normal speech: easier for young learners

def split(text):
    return [s.strip() for s in re.split(r"(?<=[።!?.])\s+", text.strip()) if s.strip()]

async def speak(text, voice, rate, mp3):
    com = edge_tts.Communicate(text, voice, rate=rate)
    with open(mp3, "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio":
                f.write(ch["data"])

async def main():
    for req in sorted(glob.glob("tts/requests/*.json")):
        d = json.load(open(req))
        for lang, voice in d["voices"].items():
            rate = d.get("rate", {}).get(lang, RATE.get(lang, "+0%"))
            out = f"tts/out/{d['id']}/{lang}"
            os.makedirs(out, exist_ok=True)
            for s in d["scenes"]:
                meta_f = f"{out}/{s['id']}.json"
                want = {"v": VERSION, "voice": voice, "rate": rate, "text": s[lang]}
                if os.path.exists(meta_f):
                    old = json.load(open(meta_f))
                    if all(old.get(k) == v for k, v in want.items()):
                        continue
                sents = split(s[lang]); sdir = f"{out}/{s['id']}"
                os.makedirs(sdir, exist_ok=True)
                for f in glob.glob(sdir + "/*.mp3"):
                    os.remove(f)
                files = []
                for i, t in enumerate(sents):
                    mp3 = f"{sdir}/{i:02d}.mp3"
                    for attempt in range(4):
                        try:
                            await speak(t, voice, rate, mp3); break
                        except Exception as e:
                            print("retry", s["id"], lang, e); await asyncio.sleep(5)
                    files.append(f"{s['id']}/{i:02d}.mp3")
                json.dump({**want, "sentences": [{"text": t, "file": f} for t, f in zip(sents, files)]}, open(meta_f, "w"), ensure_ascii=False, indent=1)
                print("ok", d["id"], lang, s["id"], len(sents))

asyncio.run(main())
