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
  await page.goto(`http://127.0.0.1:${port}/index.html${process.env.RENDER_QS || ''}`); await page.waitForFunction(() => window.READY); await page.evaluate(() => document.fonts.ready);
  const chip = story.subtitle[lang];
  const plan = []; let clock = 0; const srt = [];
  for (const s of story.scenes) {
    const meta = JSON.parse(fs.readFileSync(path.join(voiceDir, lang, s.id + '.json'), 'utf8'));
    let mp3 = path.join(voiceDir, lang, s.id + '.mp3'), vd, sents;
    if (meta.v >= 2) { // one file per sentence (v3: several parts, e.g. English words inside Amharic): calm pause after each sentence
      const GAP = lang === 'am' ? 0.75 : 0.55, PG = 0.12; sents = []; let t = 0, k = 0; const ins = [], filt = [], seq = [];
      meta.sentences.forEach((x, i) => {
        const files = x.files || [x.file]; const t0 = t;
        files.forEach((f0, j) => { const f = path.join(voiceDir, lang, f0), dd = dur(f); t += dd; const pad = j === files.length - 1 ? GAP : PG; t += pad;
          ins.push('-i', f); filt.push(`[${k}:a]aresample=48000,aformat=channel_layouts=mono,apad=pad_dur=${pad}[a${k}]`); seq.push(`[a${k}]`); k++; });
        sents.push({ text: x.text, seg: x.seg ?? i, t0, t1: t - GAP });
      });
      mp3 = path.join(outDir, `voice_${lang}_${s.id}.wav`);
      execFileSync('ffmpeg', ['-y', '-v', 'error', ...ins, '-filter_complex', filt.join(';') + ';' + seq.join('') + `concat=n=${k}:v=0:a=1[o]`, '-map', '[o]', mp3]);
      vd = dur(mp3) - GAP;
    } else { vd = dur(mp3); sents = sentences(meta, vd); }
    // phases: the moment each segment (animation step) starts
    let phases = [];
    sents.forEach((x, i) => { const sg = x.seg ?? i; if (phases[sg] === undefined) phases[sg] = LEAD + x.t0; });
    phases = phases.filter(v => v !== undefined);
    const pm = s.phaseMap && s.phaseMap[lang]; if (pm) phases = pm.map(i => phases[i]);
    const caps = captions(sents, LEAD, lang === 'am' ? 46 : 56);
    let d = LEAD + vd + TAIL + (s.kind === 'quiz' || s.kind === 'quizg' ? QUIZ_PAUSE : 0), song = null;
    if (s.song) { // the song: chant lines (shared by both versions) placed on the beat after the spoken introduction
      const sm = JSON.parse(fs.readFileSync(path.join(voiceDir, 'song', s.id + '.json'), 'utf8'));
      const bpm = s.song.bpm, barL = 240 / bpm, start = LEAD + vd + 0.6;
      let t = start + (s.song.intro_bars ?? 2) * barL; const lines = [];
      const ins = ['-i', mp3], filt = ['[0:a]aresample=48000,aformat=channel_layouts=mono[v0]'], mixin = ['[v0]'];
      s.song.lines.forEach((ln, i) => {
        const [[ll, text]] = Object.entries(ln), f = path.join(voiceDir, 'song', sm.files[i]), dl = dur(f);
        const nb = Math.max(1, Math.ceil((dl + 0.2) / barL)), t0 = t + 0.04;
        lines.push({ text, lang: ll, t0, t1: t0 + dl, bar0: t, bar1: t + nb * barL });
        ins.push('-i', f); filt.push(`[${i + 1}:a]aresample=48000,aformat=channel_layouts=mono,adelay=${Math.round((t0 - LEAD) * 1000)}[v${i + 1}]`); mixin.push(`[v${i + 1}]`);
        caps.push({ text: text, t0, t1: Math.min(t0 + dl + .5, t + nb * barL), song: true });
        t += nb * barL;
      });
      const end = t + (s.song.outro_bars ?? 1) * barL;
      mp3 = path.join(outDir, `voice_${lang}_${s.id}_song.wav`);
      execFileSync('ffmpeg', ['-y', '-v', 'error', ...ins, '-filter_complex', filt.join(';') + ';' + mixin.join('') + `amix=inputs=${mixin.length}:duration=longest:normalize=0[o]`, '-map', '[o]', mp3]);
      vd = end - LEAD; d = end + TAIL;
      song = { bpm, start, end, barL, seed: s.song.seed || 1, lines, title: s.song.title ? s.song.title[lang] : '' };
    }
    caps.forEach(c => c.text = c.text.replace(/አምቢ ኪድስ ጆይ/g, 'AMBKidsJoy'));
    plan.push({ s, mp3, d, song, ctx: { kind: s.kind, lang, story, chip, dur: d, phases, voiceStart: LEAD, voiceEnd: LEAD + vd, ampArr: envelope(mp3), caps, fadeIn: plan.length > 0, data: s.data || {}, song, animals: !!story.animals } });
    caps.forEach(c => srt.push({ ...c, t0: c.t0 + clock, t1: c.t1 + clock })); clock += d;
  }
  console.log('total', clock.toFixed(1), 's'); { let a = 0; console.log(plan.map(p => { const r = `${p.s.id}@${a.toFixed(1)}(${p.d.toFixed(1)})`; a += p.d; return r; }).join(' ')); }
  const prev = arg('--preview');
  if (prev) { // still frames at chosen global times, for checking
    for (const tg of prev.split(',').map(Number)) { let acc = 0; for (const p of plan) { if (tg < acc + p.d) { await page.evaluate(c => window.setupScene(c), p.ctx); const url = await page.evaluate(t => window.renderAt(t), tg - acc); fs.writeFileSync(path.join(outDir, `prev_${lang}_${tg}.jpg`), Buffer.from(url.split(',')[1], 'base64')); console.log('preview', tg, p.s.id); break; } acc += p.d; } }
    await b.close(); srv.close(); return;
  }
  const only = arg('--only'), range = (arg('--range') || '0:999').split(':').map(Number), assembleOnly = process.argv.includes('--assemble');
  const parts = [];
  for (const [i, p] of plan.entries()) {
    const out = path.join(outDir, `${lang}_${String(i).padStart(2, '0')}_${p.s.id}.mp4`); parts.push(out);
    if (assembleOnly || i < range[0] || i >= range[1] || (only && only !== p.s.id && fs.existsSync(out))) continue;
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
  if (process.argv.includes('--range')) { console.log('rendered range', range.join(':')); return; }
  // audio per scene: narration over the quiet lesson bed (ducked under the voice); song scenes add their dance groove
  const music = path.join(__dirname, 'music.wav'), bedLen = dur(music), mixes = []; let at = 0;
  for (const [i, p] of plan.entries()) {
    const a = path.join(outDir, `${lang}_mix${i}.wav`), D = p.d.toFixed(3);
    const voice = `[0:a]aresample=48000,adelay=${LEAD * 1000}|${LEAD * 1000},apad,atrim=0:${D},aformat=channel_layouts=stereo[v];[v]asplit=2[v1][v2]`;
    const bedF = `[1:a]atrim=${(at % bedLen).toFixed(3)}:${((at % bedLen) + p.d).toFixed(3)},asetpts=PTS-STARTPTS,volume=0.07`;
    const args = ['-y', '-v', 'error', '-i', p.mp3, '-stream_loop', '-1', '-i', music];
    let fc;
    if (p.song) {
      const sw = path.join(outDir, `song_${p.s.id}.wav`), sl = p.d - p.song.start;
      if (!fs.existsSync(sw)) execFileSync('python3', [path.join(__dirname, 'music.py'), 'song', String(p.song.bpm), sl.toFixed(3), String(p.song.seed), sw]);
      args.push('-i', sw);
      fc = `${voice};${bedF},afade=t=out:st=${Math.max(0, p.song.start - .8).toFixed(3)}:d=0.8[m];[m][v1]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=400[md];` +
        `[2:a]aresample=48000,volume=0.3,adelay=${Math.round(p.song.start * 1000)}|${Math.round(p.song.start * 1000)},apad,atrim=0:${D}[s];[v2]volume=1.25[vv];[vv][md][s]amix=inputs=3:duration=first:normalize=0[o]`;
    } else fc = `${voice};${bedF}[m];[m][v1]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=400[md];[v2][md]amix=inputs=2:duration=first:normalize=0[o]`;
    execFileSync('ffmpeg', [...args, '-filter_complex', fc, '-map', '[o]', '-t', D, '-ar', '48000', '-ac', '2', a]);
    mixes.push(a); at += p.d;
  }
  const al = path.join(outDir, `${lang}_alist.txt`); fs.writeFileSync(al, mixes.map(a => `file '${path.resolve(a)}'`).join('\n'));
  const mix = path.join(outDir, `${lang}_mix.wav`); execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', al, '-c', 'copy', mix]);
  const vl = path.join(outDir, `${lang}_vlist.txt`); fs.writeFileSync(vl, parts.map(a => `file '${path.resolve(a)}'`).join('\n'));
  const silent = path.join(outDir, `${lang}_video.mp4`); execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', vl, '-c', 'copy', silent]);
  const final = path.join(outDir, `${story.id}-${lang}.mp4`);
  // loudness: measure, then one steady gain (with a peak limiter) for the whole video (songs and speech keep their balance)
  const fades = `afade=t=in:d=0.3,afade=t=out:st=${(clock - .8).toFixed(2)}:d=0.8`;
  const meas = require('child_process').spawnSync('ffmpeg', ['-v', 'info', '-i', mix, '-af', `${fades},loudnorm=I=-16:TP=-1.5:print_format=json`, '-f', 'null', '-']).stderr.toString();
  const J = JSON.parse(meas.slice(meas.lastIndexOf('{'), meas.lastIndexOf('}') + 1));
  const ln = `volume=${(-16 - parseFloat(J.input_i)).toFixed(2)}dB,alimiter=limit=0.84:level=false`;
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', silent, '-i', mix, '-filter_complex',
    `[1:a]${fades},${ln}[a]`,
    '-map', '0:v', '-map', '[a]', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '160k', '-ar', '48000', '-t', clock.toFixed(2), '-movflags', '+faststart', final]);
  const ts = x => { const ms = Math.round(x * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60; return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')},${String(ms % 1000).padStart(3, '0')}`; };
  fs.writeFileSync(path.join(outDir, `${story.id}-${lang}.srt`), srt.map((c, i) => `${i + 1}\n${ts(c.t0)} --> ${ts(c.t1)}\n${c.text}\n`).join('\n'));
  console.log('done', final);
})();
