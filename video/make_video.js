// AMBKidsJoy video maker: storyboard + voices -> 3D rendered MP4 with captions (.srt) and music.
// usage: node make_video.js <story.json> <voices_dir> <lang> <out_dir> [--preview t1,t2,...] [--only s3]
const fs = require('fs'), path = require('path'), http = require('http'), { spawn, execFileSync } = require('child_process');
const { chromium } = require('playwright');
const [storyF, voiceDir, lang, outDir] = process.argv.slice(2);
const arg = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const FPS = 30, LEAD = 0.5, TAIL = 0.9, QUIZ_PAUSE = 5.5;
const story = JSON.parse(fs.readFileSync(storyF, 'utf8'));
fs.mkdirSync(outDir, { recursive: true });

const dur = f => parseFloat(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).toString());
function envelope(f) { // mouth movement: RMS per video frame
  const pcm = execFileSync('ffmpeg', ['-v', 'error', '-i', f, '-ac', '1', '-ar', '8000', '-f', 's16le', '-'], { maxBuffer: 1 << 28 });
  const ns = pcm.length >> 1, out = [];
  for (let f = 0; Math.floor((f + 1) * 8000 / FPS) <= ns; f++) { const a = Math.floor(f * 8000 / FPS), z = Math.floor((f + 1) * 8000 / FPS); let s = 0; for (let k = a; k < z; k++) { const v = pcm.readInt16LE(k * 2) / 32768; s += v * v; } out.push(Math.sqrt(s / (z - a))); }
  const mx = Math.max(...out, 1e-6); return out.map(v => Math.min(1, (v / mx) * 1.4)).map((v, i, a) => (v + (a[i - 1] || v)) / 2);
}
// sentences with times: split the voice's boundary chunks at sentence ends, share time by length
function sentences(meta, total) {
  const chunks = meta.marks.length ? meta.marks : [{ start: 0, dur: total, text: meta.text }];
  const out = [];
  for (const c of chunks) {
    const parts = c.text.match(/[^።!?.]+[።!?.]*(\s|$)|[^\s]+$/g)?.map(s => s.trim()).filter(Boolean) || [c.text];
    const merged = []; parts.forEach(p => { if (/^\d/.test(p) && merged.length && /\d[.]$/.test(merged[merged.length - 1])) merged[merged.length - 1] += ' ' + p; else merged.push(p); });
    const L = merged.reduce((a, s) => a + s.length, 0); let t = c.start;
    merged.forEach(s => { const d = c.dur * s.length / L; out.push({ text: s, t0: t, t1: t + d }); t += d; });
  }
  return out;
}
function captions(sents, offset, maxChars) {
  const caps = [];
  for (const s of sents) {
    const words = s.text.split(/\s+/); const lines = []; let cur = '';
    for (const w of words) { if ((cur + ' ' + w).trim().length > maxChars && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); }
    if (cur) lines.push(cur);
    const groups = []; for (let i = 0; i < lines.length; i += 2) groups.push(lines.slice(i, i + 2).join('\n'));
    const L = groups.reduce((a, g) => a + g.length, 0); let t = s.t0;
    groups.forEach(g => { const d = (s.t1 - s.t0) * g.length / L; caps.push({ text: g, t0: offset + t, t1: offset + t + d + .25 }); t += d; });
  }
  for (let i = 0; i + 1 < caps.length; i++) caps[i].t1 = Math.min(caps[i].t1, caps[i + 1].t0);
  return caps;
}

// tiny static server for the renderer page
const ROOT = path.join(__dirname, 'render');
const srv = http.createServer((q, r) => { const p = path.join(ROOT, decodeURIComponent(q.url.split('?')[0])); fs.readFile(p, (e, d) => { if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'content-type': p.endsWith('.js') ? 'text/javascript' : p.endsWith('.html') ? 'text/html' : 'application/octet-stream' }); r.end(d); }); });

(async () => {
  await new Promise(ok => srv.listen(0, ok)); const port = srv.address().port;
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('pageerror', e => console.log('PAGE ERROR', e.message));
  await page.goto(`http://127.0.0.1:${port}/index.html`); await page.waitForFunction(() => window.READY); await page.evaluate(() => document.fonts.ready);
  const chip = story.subtitle[lang];
  const plan = []; let clock = 0; const srt = [];
  for (const s of story.scenes) {
    const mp3 = path.join(voiceDir, lang, s.id + '.mp3'), meta = JSON.parse(fs.readFileSync(path.join(voiceDir, lang, s.id + '.json'), 'utf8'));
    const vd = dur(mp3), sents = sentences(meta, vd);
    let phases = sents.map(x => LEAD + x.t0);
    const pm = s.phaseMap && s.phaseMap[lang]; if (pm) phases = pm.map(i => phases[i]);
    const d = LEAD + vd + TAIL + (s.kind === 'quiz' ? QUIZ_PAUSE : 0);
    const caps = captions(sents, LEAD, lang === 'am' ? 46 : 56);
    caps.forEach(c => c.text = c.text.replace(/አምቢ ኪድስ ጆይ/g, 'AMBKidsJoy'));
    plan.push({ s, mp3, d, ctx: { kind: s.kind, lang, story, chip, dur: d, phases, voiceStart: LEAD, voiceEnd: LEAD + vd, ampArr: envelope(mp3), caps, fadeIn: plan.length > 0 } });
    caps.forEach(c => srt.push({ ...c, t0: c.t0 + clock, t1: c.t1 + clock })); clock += d;
  }
  console.log('total', clock.toFixed(1), 's');
  const prev = arg('--preview');
  if (prev) { // still frames at chosen global times, for checking
    for (const tg of prev.split(',').map(Number)) { let acc = 0; for (const p of plan) { if (tg < acc + p.d) { await page.evaluate(c => window.setupScene(c), p.ctx); const url = await page.evaluate(t => window.renderAt(t), tg - acc); fs.writeFileSync(path.join(outDir, `prev_${lang}_${tg}.jpg`), Buffer.from(url.split(',')[1], 'base64')); console.log('preview', tg, p.s.id); break; } acc += p.d; } }
    await b.close(); srv.close(); return;
  }
  const only = arg('--only');
  const parts = [];
  for (const [i, p] of plan.entries()) {
    const out = path.join(outDir, `${lang}_${String(i).padStart(2, '0')}_${p.s.id}.mp4`); parts.push(out);
    if (only && only !== p.s.id && fs.existsSync(out)) continue;
    const tmp = out.replace(/\.mp4$/, '.part.mp4');
    const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-pix_fmt', 'yuv420p', '-r', String(FPS), tmp], { stdio: ['pipe', 'inherit', 'inherit'] });
    await page.evaluate(c => window.setupScene(c), p.ctx);
    const n = Math.round(p.d * FPS), t0 = Date.now();
    for (let f = 0; f < n; f++) {
      const url = await page.evaluate(t => window.renderAt(t), f / FPS);
      if (!ff.stdin.write(Buffer.from(url.slice(url.indexOf(',') + 1), 'base64'))) await new Promise(ok => ff.stdin.once('drain', ok));
    }
    ff.stdin.end(); const code = await new Promise(ok => ff.on('close', ok)); if (code !== 0) throw new Error('ffmpeg failed ' + p.s.id);
    fs.renameSync(tmp, out); console.log('scene', p.s.id, n, 'frames', ((Date.now() - t0) / 1000).toFixed(0) + 's');
  }
  await b.close(); srv.close();
  // narration track: each voice placed after its lead-in, padded to the scene length
  const aparts = [];
  for (const [i, p] of plan.entries()) {
    const a = path.join(outDir, `${lang}_a${i}.wav`);
    execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', p.mp3, '-af', `adelay=${LEAD * 1000}|${LEAD * 1000},apad`, '-t', p.d.toFixed(3), '-ar', '48000', '-ac', '2', a]); aparts.push(a);
  }
  const al = path.join(outDir, `${lang}_alist.txt`); fs.writeFileSync(al, aparts.map(a => `file '${path.resolve(a)}'`).join('\n'));
  const voice = path.join(outDir, `${lang}_voice.wav`); execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', al, '-c', 'copy', voice]);
  const vl = path.join(outDir, `${lang}_vlist.txt`); fs.writeFileSync(vl, parts.map(a => `file '${path.resolve(a)}'`).join('\n'));
  const silent = path.join(outDir, `${lang}_video.mp4`); execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', vl, '-c', 'copy', silent]);
  const music = path.join(__dirname, 'music.wav');
  const final = path.join(outDir, `${story.id}-${lang}.mp4`);
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', silent, '-i', voice, '-stream_loop', '-1', '-i', music, '-filter_complex',
    `[2:a]volume=0.16,afade=t=in:d=1.5,afade=t=out:st=${(clock - 3).toFixed(2)}:d=3[m];[m][1:a]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=400[md];[1:a][md]amix=inputs=2:duration=first:normalize=0,loudnorm=I=-16:TP=-1.5[a]`,
    '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k', '-t', clock.toFixed(2), '-movflags', '+faststart', final]);
  const ts = x => { const ms = Math.round(x * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60; return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`; };
  fs.writeFileSync(path.join(outDir, `${story.id}-${lang}.srt`), srt.map((c, i) => `${i + 1}\n${ts(c.t0)} --> ${ts(c.t1)}\n${c.text}\n`).join('\n'));
  console.log('done', final);
})();
