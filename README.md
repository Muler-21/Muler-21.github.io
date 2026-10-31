# AMBKidsJoy 3D lesson videos

Turns an AMBKidsJoy chapter storyboard into finished 3D animated lesson videos, in Amharic and in English, using only free tools.

1. Write a storyboard: `tts/requests/<chapter-id>.json` (scenes, Amharic and English narration, scene kinds).
2. Push it to this branch (`video-tts`).
3. GitHub Actions (`.github/workflows/video.yml`) then:
   - makes the narration with free neural voices (edge-tts: `am-ET-MekdesNeural`, `en-GB-LibbyNeural`) into `tts/out/`;
   - renders every scene in 3D with Three.js in headless Chromium (`video/render/scenes.js`), with Kokeb the star, lip movement from the voice, captions and a chapter label;
   - mixes voice and a home-made music bed (`video/music.py`) with ffmpeg;
   - publishes `<id>-am.mp4`, `<id>-en.mp4` and `.srt` caption files as a GitHub Release named `video-<id>`.

Run locally: `node video/make_video.js tts/requests/<id>.json tts/out/<id> am build/<id>` (needs ffmpeg, Node, Playwright Chromium, three.js linked at `video/render/three`).
