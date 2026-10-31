"""Free neural voices (Microsoft Edge read-aloud, via edge-tts) for AMBKidsJoy videos.
For every tts/requests/<id>.json, writes tts/out/<id>/<lang>/<scene>.mp3 and <scene>.json (sentence timings)."""
import asyncio, json, glob, os
import edge_tts

RATE = {"am": "-6%", "en": "-8%"}

async def speak(text, voice, lang, mp3, meta):
    try:
        com = edge_tts.Communicate(text, voice, rate=RATE.get(lang, "+0%"), boundary="SentenceBoundary")
    except TypeError:
        com = edge_tts.Communicate(text, voice, rate=RATE.get(lang, "+0%"))
    marks = []
    with open(mp3, "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio":
                f.write(ch["data"])
            elif ch["type"] in ("WordBoundary", "SentenceBoundary"):
                marks.append({"type": ch["type"], "start": ch["offset"] / 1e7, "dur": ch["duration"] / 1e7, "text": ch["text"]})
    json.dump({"voice": voice, "text": text, "marks": marks}, open(meta, "w"), ensure_ascii=False, indent=1)

async def main():
    for req in sorted(glob.glob("tts/requests/*.json")):
        d = json.load(open(req))
        for lang, voice in d["voices"].items():
            out = f"tts/out/{d['id']}/{lang}"
            os.makedirs(out, exist_ok=True)
            for s in d["scenes"]:
                mp3, meta = f"{out}/{s['id']}.mp3", f"{out}/{s['id']}.json"
                if os.path.exists(meta) and json.load(open(meta))["text"] == s[lang]:
                    continue
                for attempt in range(4):
                    try:
                        await speak(s[lang], voice, lang, mp3, meta); break
                    except Exception as e:
                        print("retry", s["id"], lang, e); await asyncio.sleep(5)
                print("ok", d["id"], lang, s["id"])

asyncio.run(main())
