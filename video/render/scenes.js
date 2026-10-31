// AMBKidsJoy 3D lesson renderer (Three.js). Deterministic: every frame is a pure function of scene time t.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const W = 1920, H = 1080;
const FONT = "'Baloo 2','Noto Sans Ethiopic',sans-serif";
const C = { ink: '#1d2b53', yellow: '#ffc93c', blue: '#4a7fc1', green: '#4f9d69', orange: '#e8873d', red: '#d9534f', purple: '#8a6bbf', teal: '#2aa198', pink: '#ef7fa6', cream: '#fffaf0' };
const COLS = [C.purple, C.blue, C.green, C.orange, C.red, C.teal];

const QS = new URLSearchParams(location.search);
const renderer = new THREE.WebGLRenderer({ antialias: QS.get('aa') !== '0', preserveDrawingBuffer: true });
const RS = parseFloat(QS.get('rs') || '1'); renderer.setSize(W * RS, H * RS, false); renderer.setPixelRatio(1);
renderer.shadowMap.enabled = QS.get('sh') !== '0'; renderer.shadowMap.type = QS.get('sh') === 'soft' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.autoClear = false;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 200);
const hud = new THREE.Scene();
const hudCam = new THREE.OrthographicCamera(0, W, H, 0, -10, 10);

// ---------- helpers ----------
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const ease = x => { x = clamp(x); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
const back = x => { x = clamp(x); const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const pr = (t, t0, d = .6) => clamp((t - t0) / d);
const pop = (t, t0, d = .55) => back(pr(t, t0, d));
const lerp = (a, b, x) => a + (b - a) * x;
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

const texCache = new Map();
function textTex(text, o = {}) {
  const key = JSON.stringify([text, o]);
  if (texCache.has(key)) return texCache.get(key);
  const lines = String(text).split('\n');
  const size = o.size || 140, pad = o.pad ?? 30, lh = size * 1.18;
  const cv = document.createElement('canvas'); const g = cv.getContext('2d');
  g.font = `${o.weight || 800} ${size}px ${FONT}`;
  const tw = Math.max(...lines.map(l => g.measureText(l).width));
  cv.width = Math.ceil(o.w || tw + pad * 2); cv.height = Math.ceil(o.h || lh * lines.length + pad * 2);
  if (o.bg) { g.fillStyle = o.bg; const r = Math.min(cv.height / 2, o.radius ?? 40); g.beginPath(); g.roundRect(0, 0, cv.width, cv.height, r); g.fill(); }
  let fs = size; g.font = `${o.weight || 800} ${fs}px ${FONT}`;
  while (Math.max(...lines.map(l => g.measureText(l).width)) > cv.width - pad * 2 && fs > 20) { fs -= 4; g.font = `${o.weight || 800} ${fs}px ${FONT}`; }
  const flh = fs * 1.18;
  g.fillStyle = o.color || C.ink; g.textAlign = 'center'; g.textBaseline = 'middle';
  if (o.stroke) { g.lineWidth = o.stroke; g.strokeStyle = o.strokeColor || '#fff'; g.lineJoin = 'round'; }
  lines.forEach((l, i) => { const y = cv.height / 2 + (i - (lines.length - 1) / 2) * flh + fs * .06; if (o.stroke) g.strokeText(l, cv.width / 2, y); g.fillText(l, cv.width / 2, y); });
  const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; tx.anisotropy = 4;
  const r = { tex: tx, aspect: cv.width / cv.height }; texCache.set(key, r); return r;
}
function label(text, h, o = {}) {
  const { tex, aspect } = textTex(text, o);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(h * aspect, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
  m.userData.w = h * aspect; return m;
}
function mat(color, o = {}) {
  if (QS.get('mat') === 'lambert') { const { roughness, metalness, ...rest } = o; return new THREE.MeshLambertMaterial({ color, ...rest }); }
  return new THREE.MeshStandardMaterial({ color, roughness: .5, metalness: .05, ...o }); }
function block(w, h, d, color, text, o = {}) {
  const g = new THREE.Group();
  const b = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, Math.min(w, h, d) * .16), mat(color, o.mat));
  b.castShadow = true; b.receiveShadow = true; g.add(b); g.userData.body = b;
  if (text != null) { const l = label(text, o.th || h * .72, { color: o.tc || '#fff', size: o.size || 150, pad: 10, stroke: o.stroke, strokeColor: o.strokeColor }); if (l.userData.w > w * .9) l.scale.setScalar(w * .9 / l.userData.w); l.position.z = d / 2 + .02; l.position.y = o.ty || 0; g.add(l); g.userData.label = l; }
  return g;
}
function board(w, h, text, o = {}) {
  const g = new THREE.Group();
  const b = new THREE.Mesh(new RoundedBoxGeometry(w, h, .3, 4, .12), mat(o.color || C.cream, { emissive: o.color || C.cream, emissiveIntensity: .35 })); b.castShadow = true; g.add(b);
  const { tex } = textTex(text, { w: Math.round(w * 160), h: Math.round(h * 160), size: o.size || 120, color: o.tc || C.ink, pad: 40 });
  const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true })); p.position.z = .16; g.add(p);
  return g;
}
function gridTex(nx, ny, color) {
  const cv = document.createElement('canvas'); cv.width = nx * 32; cv.height = ny * 32; const g = cv.getContext('2d');
  g.fillStyle = color; g.fillRect(0, 0, cv.width, cv.height); g.strokeStyle = 'rgba(0,0,0,.28)'; g.lineWidth = 3;
  for (let i = 0; i <= nx; i++) { g.beginPath(); g.moveTo(i * 32, 0); g.lineTo(i * 32, cv.height); g.stroke(); }
  for (let j = 0; j <= ny; j++) { g.beginPath(); g.moveTo(0, j * 32); g.lineTo(cv.width, j * 32); g.stroke(); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function gridBox(w, h, d, nx, ny, nz, color) {
  const mats = [gridTex(nz, ny, color), gridTex(nz, ny, color), gridTex(nx, nz, color), gridTex(nx, nz, color), gridTex(nx, ny, color), gridTex(nx, ny, color)].map(t => mat('#fff', { map: t }));
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mats); m.castShadow = true; m.receiveShadow = true; return m;
}
const show = (o, s) => { o.visible = s > .001; o.scale.setScalar(Math.max(s, .0001)); };

// ---------- world ----------
const world = new THREE.Group(); scene.add(world);
(function makeWorld() {
  const cv = document.createElement('canvas'); cv.width = 16; cv.height = 512; const g = cv.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 512); gr.addColorStop(0, '#8fd3ff'); gr.addColorStop(.62, '#d9f1ff'); gr.addColorStop(1, '#fff6df');
  g.fillStyle = gr; g.fillRect(0, 0, 16, 512); const bg = new THREE.CanvasTexture(cv); bg.colorSpace = THREE.SRGBColorSpace; scene.background = bg;
  scene.add(new THREE.HemisphereLight('#ffffff', '#c9b28a', 1.25));
  const sun = new THREE.DirectionalLight('#fff3dc', 2.1); sun.position.set(-8, 18, 14); sun.castShadow = true;
  sun.shadow.mapSize.set(+(QS.get('sm') || 2048), +(QS.get('sm') || 2048)); Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -6, near: 1, far: 60 }); sun.shadow.bias = -.0006; scene.add(sun);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(60, 64), mat('#b8e3a0', { roughness: .95 })); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const stage = new THREE.Mesh(new THREE.CylinderGeometry(13, 13.4, .25, 64), mat('#fff1cf', { roughness: .8 })); stage.position.y = .12; stage.receiveShadow = true; scene.add(stage);
  // distant hills and clouds
  const r = rng(7);
  for (let i = 0; i < 9; i++) { const h = new THREE.Mesh(new THREE.SphereGeometry(6 + r() * 5, 24, 16), mat(i % 2 ? '#9fd38a' : '#8cc97a', { roughness: 1 })); h.position.set(-40 + i * 10 + r() * 4, -2.5, -38 - r() * 6); h.scale.y = .55; scene.add(h); }
  const clouds = new THREE.Group(); clouds.name = 'clouds';
  for (let i = 0; i < 6; i++) { const c = new THREE.Group(); for (let k = 0; k < 4; k++) { const s = new THREE.Mesh(new THREE.SphereGeometry(1.2 + r() * .9, 16, 12), mat('#ffffff', { roughness: 1, emissive: '#ffffff', emissiveIntensity: .45 })); s.position.set(k * 1.5 - 2.2, r() * .6, r() * .5); c.add(s); } c.position.set(-34 + i * 13, 14 + r() * 5, -30 - r() * 5); c.userData.v = .25 + r() * .3; clouds.add(c); }
  scene.add(clouds);
})();

// ---------- Kokeb the star ----------
function makeKokeb() {
  const g = new THREE.Group(); const body = new THREE.Group(); g.add(body);
  const sh = new THREE.Shape(); for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? .46 : 1; const x = Math.cos(a) * r, y = Math.sin(a) * r; i ? sh.lineTo(x, y) : sh.moveTo(x, y); } sh.closePath();
  const star = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: .32, bevelEnabled: true, bevelThickness: .14, bevelSize: .1, bevelSegments: 5 }), mat(C.yellow, { emissive: '#ff9d00', emissiveIntensity: .18, roughness: .35 }));
  star.position.z = -.16; star.castShadow = true; body.add(star);
  const eyeW = mat('#ffffff', { roughness: .3 }), eyeB = mat('#1d2b53', { roughness: .2 });
  const eyes = [];
  for (const sx of [-.22, .22]) { const e = new THREE.Group(); const w = new THREE.Mesh(new THREE.SphereGeometry(.15, 20, 14), eyeW); w.scale.z = .5; const p = new THREE.Mesh(new THREE.SphereGeometry(.085, 16, 12), eyeB); p.position.z = .06; p.scale.z = .5; const hl = new THREE.Mesh(new THREE.SphereGeometry(.03, 8, 6), eyeW); hl.position.set(.03, .04, .1); e.add(w, p, hl); e.position.set(sx, .12, .33); body.add(e); eyes.push(e); }
  for (const sx of [-.4, .4]) { const ch = new THREE.Mesh(new THREE.CircleGeometry(.08, 16), new THREE.MeshBasicMaterial({ color: '#ff8fa3', transparent: true, opacity: .7 })); ch.position.set(sx, -.08, .335); body.add(ch); }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(.14, .032, 10, 24, Math.PI), mat('#7a2236', { roughness: .6 }));
  smile.rotation.z = Math.PI; smile.position.set(0, -.06, .335); body.add(smile);
  const mouth = new THREE.Mesh(new THREE.CircleGeometry(.12, 24, Math.PI, Math.PI), new THREE.MeshBasicMaterial({ color: '#7a2236' }));
  mouth.position.set(0, -.07, .34); mouth.scale.set(1, .2, 1); body.add(mouth);
  const tongue = new THREE.Mesh(new THREE.CircleGeometry(.05, 16), new THREE.MeshBasicMaterial({ color: '#ff7a8a' })); tongue.position.set(0, -.14, .345); body.add(tongue);
  g.userData = { body, eyes, mouth, tongue };
  g.update = (t, talk = 0, o = {}) => {
    const b = g.userData; body.position.y = Math.sin(t * 2.2) * .12 + (o.jump || 0);
    body.rotation.z = Math.sin(t * 1.3) * .08 + (o.wave ? Math.sin(t * 9) * .18 : 0);
    body.rotation.y = Math.sin(t * .9) * .25 + (o.spin || 0);
    const bl = (t % 3.7) < .13 ? .12 : 1; b.eyes.forEach(e => e.scale.y = bl);
    const o2 = clamp(talk); b.mouth.scale.y = .15 + o2 * .95; b.mouth.scale.x = .9 + o2 * .1; b.tongue.visible = o2 > .35; b.tongue.position.y = -.07 - .1 * o2;
  };
  return g;
}
const kokeb = makeKokeb(); scene.add(kokeb);
// ---------- Saba and Dawit: cartoon kids in Ethiopian cultural dress ----------
const SKIN = '#8a5a3b', HAIR = '#1b1310';
// tibeb: the woven coloured border of Ethiopian cotton clothing (habesha kemis, netela, gabi)
function tibebStrip(g, x, y, w, h, vertical) {
  const cols = ['#1f8a4c', '#f2c230', '#d23b2f', '#1f8a4c'];
  g.save(); g.translate(x, y); if (vertical) { g.translate(w, 0); g.rotate(Math.PI / 2); [w, h] = [h, w]; }
  g.fillStyle = '#1f8a4c'; g.fillRect(0, 0, w, h * .14); g.fillRect(0, h * .86, w, h * .14);
  g.fillStyle = '#f2c230'; g.fillRect(0, h * .14, w, h * .08); g.fillRect(0, h * .78, w, h * .08);
  const n = Math.max(2, Math.round(w / (h * .62)));
  for (let i = 0; i < n; i++) { const cx = (i + .5) * w / n, s = h * .26; g.fillStyle = cols[i % 3 === 0 ? 2 : i % 3 === 1 ? 0 : 1];
    g.beginPath(); g.moveTo(cx, h / 2 - s); g.lineTo(cx + s * .9, h / 2); g.lineTo(cx, h / 2 + s); g.lineTo(cx - s * .9, h / 2); g.closePath(); g.fill();
    g.fillStyle = '#ffffff'; g.beginPath(); g.arc(cx, h / 2, s * .28, 0, 7); g.fill(); }
  g.restore();
}
function clothTex(kind) {
  const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 512; const g = cv.getContext('2d');
  g.fillStyle = '#fbfaf4'; g.fillRect(0, 0, 1024, 512);
  g.globalAlpha = .05; g.fillStyle = '#8a7f60'; for (let i = 0; i < 512; i += 4) g.fillRect(0, i, 1024, 1); g.globalAlpha = 1; // cotton weave
  if (kind === 'kemis') { tibebStrip(g, 0, 512 - 80, 1024, 64); tibebStrip(g, 0, 6, 1024, 34); tibebStrip(g, -34, 30, 68, 400, true); tibebStrip(g, 1024 - 34, 30, 68, 400, true); }
  if (kind === 'tunic') { tibebStrip(g, 0, 512 - 54, 1024, 40); tibebStrip(g, 0, 4, 1024, 30); tibebStrip(g, -20, 30, 40, 250, true); tibebStrip(g, 1024 - 20, 30, 40, 250, true); }
  if (kind === 'netela') { tibebStrip(g, 0, 512 - 90, 1024, 70); }
  if (kind === 'sleeve') { tibebStrip(g, 0, 512 - 90, 1024, 70); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
const CLOTH = {}; ['kemis', 'tunic', 'netela', 'sleeve', 'plain'].forEach(k => CLOTH[k] = mat('#ffffff', { map: clothTex(k), roughness: .85 }));
function lathe(profile, m) { const g = new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), 40); const o = new THREE.Mesh(g, m); o.castShadow = true; return o; }

function makeKid(girl) {
  const kid = new THREE.Group(), body = new THREE.Group(); kid.add(body);
  const skin = mat(SKIN, { roughness: .6 }), dark = mat('#3b2418', { roughness: .7 });
  if (girl) {
    body.add(lathe([[.001, .18], [.78, .18], [.7, .5], [.5, 1.05], [.36, 1.38], [.38, 1.62], [.4, 1.86], [.3, 2.02], [.13, 2.08], [.001, 2.08]], CLOTH.kemis));
    const shawl = new THREE.Mesh(new THREE.CylinderGeometry(.47, .6, .95, 32, 1, true, Math.PI * .55, Math.PI * .9), CLOTH.netela); shawl.position.y = 1.62; shawl.castShadow = true; body.add(shawl);
  } else {
    for (const sx of [-.18, .18]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(.15, .17, .95, 16), CLOTH.plain); leg.position.set(sx, .58, 0); leg.castShadow = true; body.add(leg); }
    body.add(lathe([[.001, .98], [.56, .98], [.5, 1.3], [.4, 1.6], [.42, 1.86], [.32, 2.02], [.13, 2.08], [.001, 2.08]], CLOTH.tunic));
    const sash = new THREE.Mesh(new RoundedBoxGeometry(.24, 1.15, .08, 2, .03), CLOTH.netela); sash.position.set(0, 1.68, .4); sash.rotation.z = .62; sash.castShadow = true; body.add(sash);
  }
  for (const sx of [-.2, .2]) { const sh = new THREE.Mesh(new THREE.SphereGeometry(.16, 16, 10), dark); sh.scale.set(1, .55, 1.5); sh.position.set(sx, .1, .06); body.add(sh); }
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(.12, .13, .25, 12), skin); neck.position.y = 2.12; body.add(neck);
  const head = new THREE.Group(); head.position.y = 2.62; body.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(.52, 32, 24), skin); skull.castShadow = true; head.add(skull);
  for (const sx of [-.51, .51]) { const ear = new THREE.Mesh(new THREE.SphereGeometry(.1, 12, 10), skin); ear.position.set(sx, -.02, 0); ear.scale.z = .6; head.add(ear); }
  const hairM = mat(HAIR, { roughness: .9 });
  const cap = new THREE.Mesh(new THREE.SphereGeometry(.555, 32, 16, 0, Math.PI * 2, 0, Math.PI * (girl ? .5 : .44)), hairM); cap.rotation.x = -.32; cap.position.set(0, .04, -.04); head.add(cap);
  if (girl) { // shuruba: braided cornrows running back, and a small bun of braids
    for (let i = -2; i <= 2; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(.53, .045, 8, 30, Math.PI * 1.05), hairM); r.rotation.set(0, Math.PI / 2 + i * .2, 0); r.position.set(i * .002, .06, -.04); r.rotation.x = -.35; head.add(r); }
    const bun = new THREE.Mesh(new THREE.SphereGeometry(.2, 16, 12), hairM); bun.position.set(0, .18, -.56); head.add(bun);
    for (const sx of [-.15, 0, .15]) { const bead = new THREE.Mesh(new THREE.SphereGeometry(.045, 10, 8), mat(sx ? '#f2c230' : '#d23b2f')); bead.position.set(sx, -.06, -.66); head.add(bead); }
  } else { const top = new THREE.Mesh(new THREE.SphereGeometry(.5, 24, 16, 0, Math.PI * 2, 0, Math.PI * .4), hairM); top.position.set(0, .11, -.02); top.scale.set(1.08, 1, 1.08); head.add(top); }
  const eyes = [];
  const eyeW = mat('#ffffff', { roughness: .3 }), eyeB = mat('#1a1a1a', { roughness: .2 });
  for (const sx of [-.18, .18]) { const e = new THREE.Group(); const w = new THREE.Mesh(new THREE.SphereGeometry(.12, 18, 12), eyeW); w.scale.z = .55; const p = new THREE.Mesh(new THREE.SphereGeometry(.075, 14, 10), eyeB); p.position.z = .05; p.scale.z = .5; const hl = new THREE.Mesh(new THREE.SphereGeometry(.025, 8, 6), eyeW); hl.position.set(.03, .035, .085); e.add(w, p, hl); e.position.set(sx, .06, .45); head.add(e); eyes.push(e);
    const brow = new THREE.Mesh(new RoundedBoxGeometry(.16, .035, .03, 2, .012), hairM); brow.position.set(sx, .22, .48); brow.rotation.z = sx > 0 ? -.12 : .12; head.add(brow); }
  const nose = new THREE.Mesh(new THREE.SphereGeometry(.06, 12, 10), mat('#7a4c31')); nose.position.set(0, -.06, .52); head.add(nose);
  const smile = new THREE.Mesh(new THREE.TorusGeometry(.13, .025, 8, 20, Math.PI), mat('#5a1e24')); smile.rotation.z = Math.PI; smile.position.set(0, -.17, .47); head.add(smile);
  if (girl) for (const sx of [-.3, .3]) { const ch = new THREE.Mesh(new THREE.CircleGeometry(.07, 14), new THREE.MeshBasicMaterial({ color: '#c96f6a', transparent: true, opacity: .45 })); ch.position.set(sx, -.08, .44); ch.lookAt(sx * 3, -.2, 3); head.add(ch); }
  const arms = [-1, 1].map(side => { const a = new THREE.Group(); a.position.set(side * .42, 1.95, 0); body.add(a);
    const sl = new THREE.Mesh(new THREE.CylinderGeometry(.13, .15, .78, 14), CLOTH.sleeve); sl.position.y = -.39; sl.castShadow = true; a.add(sl);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(.12, 14, 10), skin); hand.position.y = -.86; a.add(hand); a.userData.side = side; return a; });
  kid.userData = { body, head, eyes, arms };
  return kid;
}
const saba = makeKid(true), dawit = makeKid(false); scene.add(saba, dawit);
const bubbles = [0, 1].map(() => { const g = new THREE.Group(); scene.add(g); return g; });
function setBubble(i, text) {
  const g = bubbles[i]; if (g.userData.text === text) return; g.userData.text = text; g.clear(); if (!text) return;
  const l = label(text, .62, { color: C.ink, size: 110, bg: '#ffffff', pad: 34, radius: 60 }); g.add(l);
  const tail = new THREE.Mesh(new THREE.CircleGeometry(.22, 3), new THREE.MeshBasicMaterial({ color: '#ffffff' })); tail.rotation.z = -Math.PI / 2; tail.position.set(i ? .35 : -.35, -.42, -.01); g.add(tail);
}
// poses: [left arm raise, left arm forward, right arm raise, right arm forward, body lift, head tilt]
function pose(kind, t, inner) {
  const w = Math.sin(t * 10), s = Math.sin(t * 2);
  const P = { idle: [.14, .05 + s * .03, .14, .05 - s * .03, 0, s * .04] };
  if (kind === 'wave') P.x = inner > 0 ? [.14, .05, 2.6 + w * .3, .2, 0, .12] : [2.6 + w * .3, .2, .14, .05, 0, -.12];
  if (kind === 'point') P.x = inner > 0 ? [.14, .05, 1.45, .35, 0, -.1 * inner] : [1.45, .35, .14, .05, 0, -.1 * inner];
  if (kind === 'pointCam') P.x = inner > 0 ? [.14, .05, .25, 1.45, 0, 0] : [.25, 1.45, .14, .05, 0, 0];
  if (kind === 'clap') { const c = Math.abs(Math.sin(t * 9)); P.x = [-.25 - c * .2, 1.25, -.25 - c * .2, 1.25, 0, .05]; }
  if (kind === 'cheer') P.x = [2.7 + w * .15, .2, 2.7 - w * .15, .2, Math.abs(Math.sin(t * 6)) * .45, 0];
  if (kind === 'think') P.x = inner > 0 ? [.14, .05, -.35, 2.35, 0, .18] : [-.35, 2.35, .14, .05, 0, -.18];
  if (kind === 'eskista') { const b = Math.abs(Math.sin(t * 8)); P.x = [.55 + b * .2, .25, .55 + b * .2, .25, b * .12, Math.sin(t * 8) * .12]; }
  if (kind === 'nod') P.x = [.14, .05, .14, .05, 0, 0];
  if (kind === 'walk') { const q = Math.sin(t * 7); P.x = [.18, q * .55, .18, -q * .55, Math.abs(q) * .1, 0]; }
  if (kind === 'beat') { const bp = BEAT(t), b = Math.abs(Math.sin(Math.PI * bp)); P.x = [.42 + b * .18, .3, .42 + b * .18, .3, b * .14, Math.sin(Math.PI * bp) * .14]; }
  return P;
}
let CHOREO = null;
const BEAT = t => CTX && CTX.song ? (t - CTX.song.start) / (60 / CTX.song.bpm) : t * 1.6;
function kidsUpdate(t) {
  if (!CHOREO) { saba.visible = dawit.visible = false; bubbles.forEach(b => b.visible = false); return; }
  [saba, dawit].forEach((kid, i) => {
    const c = CHOREO.kids[i]; kid.visible = !!c; bubbles[i].visible = false; if (!c) return;
    const cx = typeof c.x === 'function' ? c.x(t) : c.x, inner = cx < 0 ? 1 : -1;
    kid.position.set(cx, 0, c.z ?? 3.4); kid.scale.setScalar(c.s ?? 1); kid.rotation.y = (c.turn ?? .32) * inner + Math.sin(t * .7 + i) * .04;
    const acts = (CHOREO.acts || []).filter(a => a.k === i && t >= a.t0 && t < a.t0 + a.d);
    const a = acts[acts.length - 1];
    const id = pose('idle', t + i, inner).idle; let tgt = id, wgt = 0;
    const sg = CTX.song, dance = sg && t > sg.start && t < sg.end;
    if (a) { tgt = pose(a.a, t - a.t0, inner).x; wgt = Math.min(clamp((t - a.t0) / .3), clamp((a.t0 + a.d - t) / .3)); }
    else if (dance) { tgt = pose('beat', t, inner).x; wgt = Math.min(clamp((t - sg.start) / .4), clamp((sg.end - t) / .4)); }
    const v = id.map((x, j) => lerp(x, tgt[j], ease(wgt)));
    const u = kid.userData; const [L, R] = u.arms;
    L.rotation.set(-v[1], 0, -v[0]); R.rotation.set(-v[3], 0, v[2]);
    const sh = dance ? Math.sin(Math.PI * BEAT(t) * 2) * .09 : 0; L.position.y = 1.95 + sh; R.position.y = 1.95 - sh; u.head.position.z = dance ? Math.sin(Math.PI * BEAT(t) * 2) * .07 : 0; // eskista: shoulders and neck on the beat
    u.body.position.y = v[4] + Math.sin(t * 2.4 + i) * .02; u.head.rotation.z = v[5];
    u.head.rotation.x = a && a.a === 'nod' ? Math.sin((t - a.t0) * 9) * .18 : Math.sin(t * .9 + i) * .03;
    u.head.rotation.y = a && (a.a === 'point' || a.a === 'think') ? .25 * inner : 0;
    const bl = ((t + i * 1.7) % 4.1) < .12 ? .1 : 1; u.eyes.forEach(e => e.scale.y = bl);
    const b = (CHOREO.bubbles || []).filter(x => x.k === i && t >= x.t0 && t < x.t0 + x.d).pop();
    if (b) { setBubble(i, b.text); const g = bubbles[i]; g.visible = true; const p = pop(t, b.t0, .45) * Math.min(1, clamp((b.t0 + b.d - t) / .25));
      g.scale.setScalar(Math.max(p, .001) * (c.s ?? 1)); g.position.set(cx + inner * 1.3 * (c.s ?? 1), 4.15 * (c.s ?? 1) + v[4], (c.z ?? 3.4) + .2); }
  });
}
// scene choreography: where the kids stand, what they do (synced to the narration) and what they say in speech bubbles
function choreo(kind) {
  const L = (en, am) => CTX.lang === 'am' ? am : en, ve = CTX.voiceEnd;
  const K = (x, o = {}) => ({ x, ...o });
  const A = (k, a, t0, d = 2.2) => ({ k, a, t0, d }), Bb = (k, text, t0, d = 2.6) => ({ k, text, t0, d });
  const base = { kids: [K(-8.4, { s: 1.08 }), K(8.4, { s: 1.08 })] };
  const m = {
    intro: { kids: [K(-7.3, { z: 3 }), K(7.3, { z: 3 })], acts: [A(0, 'eskista', .2, 3), A(1, 'eskista', .2, 3), A(0, 'wave', P(0), 2.6), A(1, 'wave', P(0) + .3, 2.6), A(0, 'clap', P(3) + .5, 2), A(1, 'point', P(3) + .3, 2.4)],
      bubbles: [Bb(0, L('Hello!', 'ሰላም!'), P(0) + .2, 2.4), Bb(1, L("Let's learn!", 'እንማር!'), P(2), 2.6)] },
    blocks: { acts: [A(0, 'point', P(1), 2.4), A(1, 'point', P(2) + 1, 2.4), A(0, 'nod', P(3) + 1.2, 1.5), A(1, 'cheer', P(4) + 2.2, 2.4), A(0, 'clap', P(5) + .5, 2.5)],
      bubbles: [Bb(0, L('One!', 'አንድ!'), P(1) + .4), Bb(1, L('Ten!', 'አስር!'), P(2) + 1.6), Bb(0, L('A hundred!', 'መቶ!'), P(3) + 2), Bb(1, L('A thousand!', 'ሺህ!'), P(4) + 2.8)] },
    placevalue: { acts: [A(1, 'think', P(0) + .5, 2.5), A(0, 'point', P(1) + .5, 3), A(1, 'point', P(2) + .6, 2.8), A(0, 'clap', P(2) + 2.6, 2)],
      bubbles: [Bb(1, '4 → 40,000!', P(2) + 1.4, 3)] },
    expanded: { acts: [A(0, 'point', P(0) + 1, 3), A(1, 'nod', P(0) + 3, 1.6), A(1, 'point', P(1) + .4, 2.6), A(0, 'clap', P(1) + 2.6, 2)],
      bubbles: [Bb(1, L('Zero adds nothing!', '0 ምንም አይጨምርም!'), P(1) + .8, 3)] },
    compare: { acts: [A(0, 'think', P(0), 2.5), A(1, 'point', P(1), 2.4), A(0, 'nod', P(2) + .5, 1.4), A(0, 'nod', P(3) + .5, 1.4), A(1, 'point', P(4) + .5, 2.5), A(0, 'cheer', P(5) + 1, 2.4), A(1, 'clap', P(5) + 1, 2.4)],
      bubbles: [Bb(0, '= ✓', P(2) + .6, 1.6), Bb(1, '9 > 7!', P(4) + 1, 2.4), Bb(0, L('359,104 is bigger!', '359,104 ይበልጣል!'), P(5) + 1.4, 3)] },
    round: { acts: [A(1, 'think', P(1) + .3, 2.5), A(0, 'point', P(3) + .4, 2.6), A(1, 'point', P(4), 2.6), A(0, 'cheer', P(5) + 2.2, 2.4)],
      bubbles: [Bb(0, '4 < 5', P(3) + 1, 2.6), Bb(1, '8,300!', P(5) + 2.4, 2.8)] },
    ethiopic: { acts: [A(0, 'wave', P(0), 2), A(1, 'point', P(1) + .5, 3), A(0, 'point', P(2) + .5, 3), A(1, 'clap', P(3) + 2, 2.2), A(0, 'nod', P(4) + .3, 1.6)],
      bubbles: [Bb(1, '፩ ፪ ፫!', P(1) + 1.2, 2.6), Bb(0, '፴ + ፭ = ፴፭', P(3) + 2.2, 3)] },
    quiz: { kids: [K(-7.7, { z: 3.2, s: 1.1 }), K(7.7, { z: 3.2, s: 1.1 })], acts: [A(0, 'pointCam', P(0) + .2, 2.6), A(1, 'pointCam', P(0) + .4, 2.6), A(0, 'think', ve - .3, 6), A(1, 'think', ve, 6)],
      bubbles: [Bb(0, L('Your turn!', 'ተራችሁ!'), P(0) + .3, 2.6), Bb(1, L('Hmm…', 'እምም…'), ve + .4, 3.5), Bb(0, '?', ve + 1.5, 3.5)] },
    answer: { kids: [K(-7.7, { z: 3.2, s: 1.1 }), K(7.7, { z: 3.2, s: 1.1 })], acts: [A(0, 'cheer', .2, 3.2), A(1, 'cheer', .4, 3.2), A(0, 'clap', 3.6, 2), A(1, 'clap', 3.6, 2)],
      bubbles: [Bb(0, '፷፰!', .6, 2.8), Bb(1, L('Yay!', 'ጎበዝ!'), 1, 2.6)] },

    g3intro: { kids: [K(-7.3, { z: 3 }), K(7.3, { z: 3 })], acts: [A(0, 'eskista', .2, 3), A(1, 'eskista', .2, 3), A(0, 'wave', P(0), 2.6), A(1, 'wave', P(0) + .3, 2.6), A(0, 'point', P(1) + .2, 2.4), A(1, 'point', P(1) + .4, 2.4), A(0, 'cheer', P(3) + .3, 2.6), A(1, 'cheer', P(3) + .5, 2.6)],
      bubbles: [Bb(0, L('Hello!', 'ሰላም!'), P(0) + .2, 2.4), Bb(1, L("Let's sing!", 'እንዘምር!'), P(3) + .2, 2.6)],
      abubbles: AORDER.map((k, i) => Bb(k, CTX.lang === 'am' ? ANAMES[k][1] + ' · ' + ANAMES[k][0] : ANAMES[k][0], P(1) + .4 + i * Math.max(.7, (SEGEND(1) - P(1) - .6) / 5), 1.8)),
      alay: { to: 'intro', t0: P(1) - 1.4 },
      ahops: AORDER.map((k, i) => ({ k, t0: P(1) + .4 + i * Math.max(.7, (SEGEND(1) - P(1) - .6) / 5), d: 1 })).concat(AORDER.map((k, i) => ({ k, t0: P(3) + .3 + i * .15, d: 1.2 }))) },
    places: { acts: [1, 2, 3, 4, 5, 6].map(i => A(i % 2, 'point', P(i) + .2, 2.2)).concat([A(0, 'wave', P(1) - 1.4, 1.2), A(1, 'clap', ve - 1.5, 1.6)]),
      bubbles: ['gate!', 'library!', 'laboratory!', 'hall!', 'café!', 'rest-room!'].map((w, i) => Bb((i + 1) % 2, w, P(i + 1) + 1.2, 2.2)),
      ahops: [{ k: 'chicken', t0: P(5) + .5, d: 1 }, { k: 'cow', t0: P(5) + .8, d: 1 }] },
    song: !CTX.song ? {} : { kids: [K(-2.8, { z: 3.6, s: 1.0, turn: .1 }), K(2.8, { z: 3.6, s: 1.0, turn: .1 })], acts: [A(0, 'wave', .4, 2.4), A(1, 'wave', .6, 2.4), A(0, 'cheer', CTX.song.end - .3, 2), A(1, 'cheer', CTX.song.end - .3, 2)],
      bubbles: [Bb(0, L('Eskista!', 'እስክስታ!'), CTX.song.start + .2, 2), Bb(1, L('Yay!', 'ጎበዝ!'), CTX.song.end - .2, 1.8)],
      abubbles: AORDER.map((k, i) => Bb(k, ASOUND[k], CTX.song.start + .3 + i * .55, 1.2)) },
    classroom: { acts: [A(0, 'point', P(1) + .3, 2.4), A(1, 'point', P(2) + .3, 2.4), A(0, 'nod', P(3) + .6, 1.6), A(1, 'think', P(4) + .3, 2.4), A(0, 'clap', P(5) + 1, 2.4), A(1, 'clap', ve - 1.8, 2)],
      bubbles: [Bb(1, 'desk!', P(1) + 1.2, 2), Bb(0, 'pencil!', P(2) + 2, 2), Bb(1, L('My schoolbag!', 'ቦርሳዬ!'), P(3) + 1, 2.4), Bb(0, 'R-U-L-E-R!', P(5) + 3, 2.4)] },
    story: { kids: [K(t => t < P(2) || t > P(3) + 1.5 ? -8.4 : lerp(-8.4, -4.4, ease(pr(t, P(2) + .2, 2.2))) * (1 - ease(pr(t, P(3) - .5, 1.6))) + -8.4 * ease(pr(t, P(3) - .5, 1.6)), { s: 1.08 }),
        K(t => t < P(2) || t > P(3) + 1.5 ? 8.4 : lerp(8.4, 2.4, ease(pr(t, P(2) + .2, 2.2))) * (1 - ease(pr(t, P(3) - .5, 1.6))) + 8.4 * ease(pr(t, P(3) - .5, 1.6)), { s: 1.08 })],
      acts: [A(0, 'wave', P(1) + .2, 2.2), A(0, 'walk', P(2) + .2, 2.2), A(1, 'walk', P(2) + .2, 2.2), A(0, 'walk', P(3) - .5, 1.6), A(1, 'walk', P(3) - .5, 1.6), A(1, 'nod', P(4) + .4, 1.6), A(0, 'think', P(5) + .2, 2.2), A(0, 'cheer', P(5) + (SEGEND(5) - P(5)) * .62, 2.4), A(1, 'cheer', P(5) + (SEGEND(5) - P(5)) * .62, 2.4)],
      bubbles: [Bb(0, L("I'm Selam!", 'ሰላም ነኝ!'), P(1) + .3, 2.4), Bb(1, L("Let's walk!", 'እንሂድ!'), P(2) + .4, 2), Bb(0, L('Kind!', 'ደግ!'), P(4) + .8, 2), Bb(0, L('Green!', 'አረንጓዴ!'), P(5) + (SEGEND(5) - P(5)) * .62 + .2, 2.4)] },
    months: { acts: [A(0, 'point', P(1) + .3, 2.4), A(1, 'point', P(2) + .3, 2.4), A(1, 'think', P(3) + .3, 2.2), A(0, 'clap', P(3) + 2.4, 2), A(0, 'point', P(4) + .3, 2), A(1, 'point', (P(4) + ve) / 2, 2)],
      bubbles: [Bb(1, L('Capital J!', 'ትልቅ J!'), P(3) + 2.4, 2.4), Bb(0, L('First!', 'መጀመሪያ!'), P(4) + .6, 2), Bb(1, L('Last!', 'መጨረሻ!'), (P(4) + ve) / 2 + .3, 2)] },
    days: { acts: [A(0, 'point', P(1) + .3, 2.4), A(1, 'point', P(2) + .3, 2.4), A(0, 'clap', ve - 1.4, 1.6)],
      bubbles: [Bb(0, L('Today: Monday', 'ዛሬ፦ Monday'), P(1) + 1, 2.6), Bb(1, L('Tomorrow: Thursday', 'ነገ፦ Thursday'), P(2) + 2.4, 2.8)] },
    quizg: { kids: [K(-8.6, { z: 3.2, s: 1.08 }), K(8.8, { z: 3.2, s: 1.08 })], acts: [A(0, 'pointCam', P(0) + .2, 2.6), A(1, 'pointCam', P(0) + .4, 2.6), A(0, 'think', ve - .3, 6), A(1, 'think', ve, 6)],
      bubbles: [Bb(0, L('Your turn!', 'ተራችሁ!'), P(0) + .3, 2.6), Bb(1, L('Hmm…', 'እምም…'), ve + .4, 3.5)] },
    answerg: { kids: [K(-8.6, { z: 3.2, s: 1.08 }), K(8.8, { z: 3.2, s: 1.08 })], acts: [A(0, 'cheer', .2, 3.2), A(1, 'cheer', .4, 3.2), A(0, 'clap', 3.6, 2), A(1, 'clap', 3.6, 2)],
      bubbles: [Bb(0, 'Saturday!', .6, 2.8), Bb(1, L('Yay!', 'ጎበዝ!'), 1, 2.6)], ahops: AORDER.map((k, i) => ({ k, t0: .3 + i * .2, d: 1.4 })) },
    ethcal: { acts: [A(0, 'wave', P(0) + .2, 2), A(1, 'point', P(1) + .3, 2.4), A(0, 'point', P(2) + .3, 2.4), A(0, 'cheer', P(3) + .8, 2.6), A(1, 'eskista', P(3) + .8, 2.6), A(1, 'point', P(4) + .3, 2.4)],
      bubbles: [Bb(1, '12 × 30', P(1) + .8, 2.4), Bb(0, L('Happy New Year!', 'እንኳን አደረሳችሁ!'), P(3) + 1.2, 2.8)],
      ahops: [{ k: 'cow', t0: (P(4) + ve) / 2 + .5, d: 1.2 }, { k: 'chicken', t0: (P(4) + ve) / 2 + .8, d: 1.2 }] },
    recapg: { acts: [A(0, 'nod', P(0) + .3, 1.5), A(1, 'nod', P(1) + .3, 1.5), A(0, 'point', P(2) + .3, 2.4), A(0, 'wave', ve - 2.6, 3), A(1, 'wave', ve - 2.5, 3)],
      bubbles: [Bb(0, L('Good job!', 'ጎበዝ!'), P(2) + 1, 2.4), Bb(1, L('Bye!', 'ቻው!'), ve - 2.4, 3)], alay: { to: 'finale', t0: P(3) - .3 }, ahops: AORDER.map((k, i) => ({ k, t0: ve - 2.6 + i * .2, d: 1.6 })) },
    thumb: { kids: [K(1.0, { z: 3.6, s: 1.25, turn: -.2 }), K(8.2, { z: 1.6, s: 1.25, turn: .3 })], acts: [A(0, 'cheer', 0, 99), A(1, 'wave', 0, 99)] },
    recap: { acts: [A(0, 'nod', P(0) + .3, 1.5), A(1, 'nod', P(1) + .3, 1.5), A(0, 'point', P(3) + .3, 3), A(1, 'clap', P(4) + .5, 2.4), A(0, 'wave', P(5) - .2, 3.5), A(1, 'wave', P(5) - .1, 3.5)],
      bubbles: [Bb(0, L('Good job!', 'ጎበዝ!'), P(2) + .5, 2.4), Bb(1, L('Bye!', 'ቻው!'), P(5), 3)] },
  }[kind] || {};
  return { ...base, ...m };
}


// ---------- HUD (captions, chip, fade) ----------
const hudChip = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ transparent: true })); hud.add(hudChip);
const hudBrand = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ transparent: true })); hud.add(hudBrand);
const capMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ transparent: true })); hud.add(capMesh);
const fade = new THREE.Mesh(new THREE.PlaneGeometry(W, H), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0 })); fade.position.set(W / 2, H / 2, 5); hud.add(fade);
function setHudTex(mesh, text, o, x, y, anchor = 'left') {
  const { tex, aspect } = textTex(text, o); mesh.material.map = tex; mesh.material.needsUpdate = true;
  const h = o.hpx; mesh.scale.set(h * aspect, h, 1); mesh.position.set(anchor === 'left' ? x + h * aspect / 2 : anchor === 'right' ? x - h * aspect / 2 : x, y, 0);
}
const lyr = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ transparent: true })); hud.add(lyr);
const lyrNext = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ transparent: true, opacity: .85 })); hud.add(lyrNext);
const lyrBar = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: '#ffd23f' })); hud.add(lyrBar);
function lyrics(t) { // karaoke panel at the top: the line being sung (blue = English, green = Amharic) and the next line
  const sg = CTX.song; lyr.visible = lyrNext.visible = lyrBar.visible = false; if (!sg || t < sg.start - .1 || t > sg.end + .2) return;
  let li = -1; sg.lines.forEach((l, i) => { if (t >= l.bar0 - .15) li = i; });
  const cur = li < 0 ? { text: sg.title, lang: 'title' } : sg.lines[li], nxt = sg.lines[li + 1];
  const bg = cur.lang === 'en' ? 'rgba(46,96,170,.92)' : cur.lang === 'am' ? 'rgba(31,138,76,.92)' : 'rgba(224,120,40,.92)';
  const s = pop(t, li < 0 ? sg.start : cur.bar0 - .15, .35);
  const a = textTex(cur.text, { size: 92, weight: 800, color: '#ffffff', bg, pad: 40, radius: 46 }); lyr.material.map = a.tex; lyr.material.needsUpdate = true;
  const h = Math.min(132, 1500 / a.aspect); lyr.scale.set(h * a.aspect * Math.max(s, .01), h * Math.max(s, .01), 1); lyr.position.set(W / 2, H - 210, 2); lyr.visible = true;
  if (nxt) { const b = textTex(nxt.text, { size: 60, weight: 700, color: '#1d2b53', bg: 'rgba(255,255,255,.85)', pad: 26, radius: 30 }); lyrNext.material.map = b.tex; lyrNext.material.needsUpdate = true;
    const h2 = Math.min(70, 1100 / b.aspect); lyrNext.scale.set(h2 * b.aspect, h2, 1); lyrNext.position.set(W / 2, H - 210 - h / 2 - 50, 2); lyrNext.visible = true; }
  if (li >= 0) { const p = clamp((t - cur.t0) / (cur.t1 - cur.t0)); const bw = h * a.aspect * .86; lyrBar.scale.set(Math.max(1, bw * p), 8, 1); lyrBar.position.set(W / 2 - bw / 2 + bw * p / 2, H - 210 - h / 2 + 18, 3); lyrBar.visible = p > 0 && s > .9; }
}
let capText = null;
function setCaption(text) {
  if (text === capText) return; capText = text; capMesh.visible = !!text; if (!text) return;
  const { tex, aspect } = textTex(text, { size: 58, weight: 700, color: '#ffffff', bg: 'rgba(20,28,60,.78)', pad: 34, radius: 30 });
  capMesh.material.map = tex; capMesh.material.needsUpdate = true; const h = Math.min(150, 1700 / aspect); capMesh.scale.set(h * aspect, h, 1); capMesh.position.set(W / 2, 30 + h / 2, 1);
}
// split long text into caption lines
function wrap(text, max) {
  const words = text.split(/\s+/); const lines = []; let cur = '';
  for (const w of words) { if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); }
  if (cur) lines.push(cur); return lines;
}

// ---------- scenes ----------
const root = new THREE.Group(); scene.add(root);
let S = null, CTX = null;
function camTo(px, py, pz, lx, ly, lz) { camera.position.set(px, py, pz); camera.lookAt(lx, ly, lz); }
const T = (en, am) => CTX.lang === 'am' ? am : en;
const P = i => CTX.phases[Math.min(i, CTX.phases.length - 1)] ?? 0;
const XS = [-7.5, -4.5, -1.5, 1.5, 4.5, 7.5];

const SCENES = {
  thumb() {
    const r = rng(5); const fl = [];
    ['6', '4', '5', '0', '2', '1', '፩', '፴'].forEach((d, i) => { const b = block(1.3, 1.3, 1.1, COLS[i % 6], d, { size: 170 }); b.position.set(-1.5 + (i % 4) * 3.2 + r() * .8, 6.4 + Math.floor(i / 4) * 2.2 + r() * .6, -2.5 - r() * 2); b.rotation.set(r() * .6 - .3, r() * .8 - .4, r() * .4 - .2); root.add(b); });
    const big = block(4.6, 1.7, 1, '#ffffff', '645,021', { tc: C.blue, size: 160 }); big.position.set(4.4, 1.2, 2.6); big.rotation.y = -.15; root.add(big);
    return t => { camTo(0, 4.6, 17.5, 0, 4.4, 0); kokeb.position.set(5.0, 5.9, 2.2); kokeb.scale.setScalar(2.2); kokeb.update(1.3, .55, { wave: false }); };
  },
  intro() {
    const title = board(9.4, 3.4, CTX.story.title[CTX.lang] + '\n ', { size: 150 }); title.position.set(3.4, 6.2, 0); root.add(title);
    const sub = label(CTX.story.subtitle[CTX.lang], .7, { color: C.blue, size: 90 }); sub.position.set(3.4, 5.25, .2); root.add(sub);
    const icons = ['645,021', '7 < 9', '≈ 8,300', '፴፭'].map((s, i) => { const b = block(2.4, 1.4, .7, COLS[i + 1], s, { size: 120 }); b.position.set(-3.0 + i * 2.6, 2.2, 0); root.add(b); return b; });
    const floaters = []; const r = rng(3);
    for (let i = 0; i < 10; i++) { const b = block(.9, .9, .9, COLS[i % 6], String(i), { size: 140 }); b.userData.p = [r() * 22 - 11, 3 + r() * 6, -6 - r() * 6, r() * 6]; root.add(b); floaters.push(b); }
    return t => {
      camTo(0, 4.6, 18 - pr(t, 0, CTX.dur) * 1.5, 0, 4.2, 0);
      const k = ease(pr(t, 0, 1.4)); kokeb.position.set(lerp(12, -6.4, k), lerp(9, 5.2, k), 1); kokeb.scale.setScalar(1.9);
      kokeb.update(t, CTX.amp(t), { wave: t < 3.2, spin: (1 - k) * 6 });
      show(title, pop(t, .9)); show(sub, pop(t, 1.3));
      icons.forEach((b, i) => { show(b, pop(t, P(3) + i * .35)); b.rotation.y = Math.sin(t * 1.5 + i) * .15; });
      floaters.forEach((b, i) => { const [x, y, z, ph] = b.userData.p; b.position.set(x + Math.sin(t * .4 + ph) * .8, y + Math.sin(t * .9 + ph) * .5, z); b.rotation.set(t * .3 + ph, t * .4 + ph, 0); show(b, pop(t, .2 + i * .08) * .9); });
    };
  },
  blocks() {
    const words = [T('one', 'አንድ'), T('ten', 'አስር'), T('hundred', 'መቶ'), T('thousand', 'ሺህ')];
    const zx = [-6.3, -4.7, -1.3, 5.0];
    const unit = block(.45, .45, .45, C.yellow, null); unit.position.set(zx[0], .5, 0); root.add(unit);
    const rodCubes = []; for (let i = 0; i < 10; i++) { const c = block(.45, .45, .45, C.blue, null); c.position.set(zx[1], .5 + i * .46, 0); root.add(c); rodCubes.push(c); }
    const rods = []; for (let i = 0; i < 10; i++) { const r = gridBox(.45, 4.5, .45, 1, 10, 1, C.green); r.position.set(zx[2] - 2.03 + i * .45, .27 + 2.25, 0); root.add(r); rods.push(r); }
    const cube = new THREE.Group(); cube.position.set(zx[3], .27 + 2.25, -1); root.add(cube);
    const slabs = []; for (let i = 0; i < 10; i++) { const s = gridBox(4.5, 4.5, .45, 10, 10, 1, C.orange); s.position.z = 2.03 - i * .45; cube.add(s); slabs.push(s); }
    const labs = ['1', '10', '100', '1,000'].map((n, i) => { const l = label(n + '\n' + words[i], 1.5, { color: C.ink, size: 120, stroke: 18 }); l.position.set(zx[i] + (i === 3 ? .2 : 0), i === 0 ? 1.6 : 5.9, .6); root.add(l); return l; });
    const times = ['×10', '×10', '×10'].map((s, i) => { const l = label(s, .8, { color: C.red, size: 120, stroke: 16 }); l.position.set((zx[i] + zx[i + 1]) / 2 + (i === 2 ? .3 : 0), 7.4, .6); root.add(l); return l; });
    const rule = board(15, 1.5, T('Ten of one place make one of the next place!', 'የአንድ ቤት አስሩ የቀጣዩን ቤት አንድ ያደርጋሉ!'), { size: 100, color: '#fff3c4' }); rule.position.set(0, 8.9, 0); root.add(rule);
    return t => {
      camTo(0, 5, 19.5, .3, 4.2, 0);
      kokeb.position.set(lerp(6.4, 8.4, ease(pr(t, P(4), 2))), 8.0, 1); kokeb.scale.setScalar(1.0); kokeb.update(t, CTX.amp(t));
      show(unit, pop(t, P(0) + .6)); unit.rotation.y = t * .6;
      rodCubes.forEach((c, i) => { const s = P(2) + i * .16; const k = ease(pr(t, s, .35)); c.visible = t > s; c.position.y = lerp(9, .5 + i * .46, k); });
      rods.forEach((r, i) => { const s = P(3) + i * .18; const k = pr(t, s, .4); r.visible = t > s; r.position.x = zx[2] - 2.03 + i * .45; r.position.y = 2.52 + (1 - k * k) * 8; });
      slabs.forEach((s, i) => { const s0 = P(4) + i * .2; const k = ease(pr(t, s0, .4)); s.visible = t > s0; s.position.y = lerp(7, 0, k); });
      cube.rotation.y = -.55 + Math.sin(t * .5) * .08;
      labs.forEach((l, i) => show(l, pop(t, P(i + 1) + (i ? 1.0 : .2))));
      times.forEach((l, i) => show(l, pop(t, P(5) + i * .3)));
      show(rule, pop(t, P(5) + .9));
    };
  },
  placevalue() {
    const heads = CTX.lang === 'am' ? ['መቶ\nሺዎች', 'አስር\nሺዎች', 'ሺዎች', 'መቶዎች', 'አስሮች', 'አንዶች'] : ['Hundred\nthousands', 'Ten\nthousands', 'Thousands', 'Hundreds', 'Tens', 'Ones'];
    const pillars = XS.map((x, i) => { const p = new THREE.Mesh(new RoundedBoxGeometry(2.7, 6.2, .3, 3, .1), mat(COLS[i], { transparent: true, opacity: .22 })); p.position.set(x, 3.4, -.6); root.add(p); return p; });
    const hd = heads.map((h, i) => { const b = block(2.7, 1.3, .4, COLS[i], h, { size: 100, th: 1.15 }); b.position.set(x0(i), 7.25, 0); root.add(b); return b; });
    function x0(i) { return XS[i]; }
    const digits = '645021'.split('').map((d, i) => { const b = block(1.7, 1.9, 1, '#ffffff', d, { tc: COLS[i], size: 170 }); b.position.set(XS[i], 1.2, .3); root.add(b); return b; });
    const num = board(6.2, 1.5, '645,021', { size: 140, color: '#fff3c4' }); num.position.set(0, 9.1, 0); root.add(num);
    const val = board(8.2, 1.4, '4 × 10,000 = 40,000', { size: 120, color: '#e6f4ea' }); val.position.set(-1, 4.3, 1.4); root.add(val);
    return t => {
      camTo(0, 5.2, 19.5, 0, 4.6, 0);
      kokeb.position.set(-10.3, 8.8, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      show(num, pop(t, .3));
      digits.forEach((b, i) => { const s = P(0) + 1.4 + i * .28; const k = pr(t, s, .45); b.visible = t > s; b.position.y = lerp(10, 1.2, k * k) + (k >= 1 ? 0 : 0); });
      const span = Math.max(1.2, (P(2) - P(1)) * .85);
      hd.forEach((b, i) => { show(b, pop(t, .5 + i * .12)); const hi = t > P(1) + i * span / 6 && t < P(1) + (i + 1) * span / 6 + .2; b.position.y = 7.25 + (hi ? .35 : 0); });
      const g4 = ease(pr(t, P(2), .6)); digits[1].position.y += g4 * 1.3; digits[1].rotation.y = g4 * Math.PI * 2;
      digits[1].userData.body.material.emissive = new THREE.Color('#ffd23f'); digits[1].userData.body.material.emissiveIntensity = g4 * .6;
      pillars[1].material.opacity = .22 + g4 * .35;
      show(val, pop(t, P(2) + 1.2));
    };
  },
  expanded() {
    const parts = ['600,000', '40,000', '5,000', '20', '1'], ci = [0, 1, 2, 4, 5];
    const row = []; let x = -9.2; const ws = [3.6, 3.1, 2.8, 1.8, 1.4];
    parts.forEach((p, i) => { const b = block(ws[i], 1.5, .7, COLS[ci[i]], p, { size: 140 }); b.position.set(x + ws[i] / 2, 4.6, 0); root.add(b); row.push(b); x += ws[i]; if (i < 4) { const pl = label('+', 1.1, { color: C.ink, size: 160 }); pl.position.set(x + .45, 4.6, .4); root.add(pl); row.push(pl); x += .9; } });
    const dig = '645021'.split('').map((d, i) => { const b = block(1.2, 1.35, .6, '#ffffff', d, { tc: COLS[i], size: 170 }); b.position.set(-3.6 + i * 1.45, 8.3, 0); root.add(b); return b; });
    const zero = block(3.6, 1.3, .6, '#c9ced6', T('0 hundreds = 0', '0 መቶዎች = 0'), { size: 100, tc: '#5a6270' }); zero.position.set(0, 2.2, .5); root.add(zero);
    return t => {
      camTo(0, 5.3, 19, 0, 4.9, 0);
      kokeb.position.set(9.6, 7.9, 0); kokeb.scale.setScalar(.95); kokeb.update(t, CTX.amp(t));
      dig.forEach((b, i) => show(b, pop(t, .2 + i * .1)));
      const s0 = P(0) + .9, s1 = Math.max(s0 + 3, P(1) - .4);
      row.forEach((b, j) => { const k = Math.floor(j / 2); const s = s0 + k * (s1 - s0) / 5 + (j % 2 ? .35 : 0); show(b, pop(t, s)); });
      const zk = ease(pr(t, P(1), .6)); dig[3].userData.body.material.color.set(zk > .5 ? '#c9ced6' : '#ffffff'); dig[3].position.y = 8.3 - zk * .4;
      show(zero, pop(t, P(1) + .5));
    };
  },
  compare() {
    const A = '357812', B = '359104';
    const ra = A.split('').map((d, i) => { const b = block(1.6, 1.8, .9, '#ffffff', d, { tc: C.blue, size: 170 }); b.position.set(XS[i], 6.0, 0); root.add(b); return b; });
    const rb = B.split('').map((d, i) => { const b = block(1.6, 1.8, .9, '#ffffff', d, { tc: C.orange, size: 170 }); b.position.set(XS[i], 3.2, 0); root.add(b); return b; });
    for (const y of [6.0, 3.2]) { const c = label(',', 1.2, { color: C.ink, size: 200 }); c.position.set(0, y - .7, .6); root.add(c); }
    const frame = new THREE.Mesh(new RoundedBoxGeometry(2.3, 5.0, .2, 3, .1), mat('#ffe066', { transparent: true, opacity: .45, emissive: '#ffd000', emissiveIntensity: .4 })); frame.position.set(XS[0], 4.6, -.6); root.add(frame);
    const marks = [0, 1, 2].map(i => { const l = block(i < 2 ? 1.2 : 2.6, 1.0, .4, i < 2 ? C.green : C.red, i < 2 ? '=' : '7 < 9', { size: 150 }); l.position.set(XS[i], 1.45, .8); root.add(l); return l; });
    const arrow = label('→', 1.2, { color: C.red, size: 200, stroke: 14 }); arrow.position.set(-9.4, 7.9, .6); root.add(arrow);
    const ans = board(10.5, 1.6, '357,812 < 359,104', { size: 140, color: '#fff3c4' }); ans.position.set(0, 9.1, 0); root.add(ans);
    return t => {
      camTo(0, 5.2, 19.5, 0, 4.7, 0);
      kokeb.position.set(-10.2, 8.7, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      ra.forEach((b, i) => show(b, pop(t, .2 + i * .1))); rb.forEach((b, i) => show(b, pop(t, .6 + i * .1)));
      const ax = ease(pr(t, P(1), 1.6)); arrow.position.x = lerp(-9.4, -6, ax); arrow.visible = t > P(1) && t < P(4) + 1;
      let col = 0; if (t > P(3)) col = 1; if (t > P(4)) col = 2;
      frame.visible = t > P(2) - .2; frame.position.x = lerp(frame.position.x, XS[col], 1); frame.material.color.set(col === 2 ? '#ff9a8a' : '#ffe066');
      marks.forEach((m, i) => show(m, pop(t, P(i + 2) + .8)));
      const bz = t > P(4) + .5 ? Math.abs(Math.sin((t - P(4)) * 6)) * .35 * (t < P(4) + 2.5 ? 1 : 0) : 0; ra[2].position.y = 6 + bz; rb[2].position.y = 3.2 + bz;
      const win = ease(pr(t, P(5), .8)); rb.forEach(b => { b.userData.body.material.emissive = new THREE.Color('#ffc400'); b.userData.body.material.emissiveIntensity = win * .45; b.position.z = win * .5; });
      show(ans, pop(t, P(5) + 1.2));
    };
  },
  round() {
    const x0 = -7.5, step = 1.5, xOf = v => x0 + (v - 8300) / 10 * step;
    const line = new THREE.Mesh(new RoundedBoxGeometry(16.2, .25, .5, 3, .1), mat(C.ink)); line.position.set(0, 3, 0); line.castShadow = true; root.add(line);
    for (let i = 0; i <= 10; i++) { const big = i % 5 === 0; const tk = new THREE.Mesh(new THREE.BoxGeometry(.12, big ? 1 : .55, .3), mat(C.ink)); tk.position.set(x0 + i * step, 3, 0); root.add(tk); }
    const lbl = [8300, 8350, 8400].map((v, i) => { const l = label(v.toLocaleString('en-US'), i === 1 ? .7 : 1, { color: i === 1 ? '#6b7280' : C.ink, size: 130, stroke: 14 }); l.position.set(xOf(v), 1.75, .5); root.add(l); return l; });
    const hump = new THREE.Mesh(new THREE.TorusGeometry(1.3, .18, 12, 40, Math.PI), mat('#f4a261')); hump.position.set(xOf(8350), 3.1, 0); root.add(hump);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(.42, 32, 20), mat(C.red, { roughness: .3 })); ball.castShadow = true; root.add(ball);
    const pin = label('8,349', .8, { color: C.red, size: 120, stroke: 14 }); root.add(pin);
    const digs = '8349'.split('').map((d, i) => { const b = block(1.3, 1.5, .7, '#ffffff', d, { tc: i === 2 ? C.red : C.ink, size: 170 }); b.position.set(-4.6 + i * 1.5, 8.6, 0); root.add(b); return b; });
    const q = label(T('→ nearest 100', '→ ወደ ቅርብ 100'), .95, { color: C.ink, size: 110, stroke: 14 }); q.position.set(3.6, 8.6, .4); root.add(q);
    const stay = block(4.2, 1.2, .5, C.green, T('0–4: stay ↓', '0–4፦ ባለበት ↓'), { size: 110 }); stay.position.set(-4.6, 5.6, 0); root.add(stay);
    const up = block(4.2, 1.2, .5, C.orange, T('5–9: go up ↑', '5–9፦ ወደ ላይ ↑'), { size: 110 }); up.position.set(4.6, 5.6, 0); root.add(up);
    const ans = board(7.6, 1.4, '8,349 ≈ 8,300', { size: 140, color: '#fff3c4' }); ans.position.set(0, 5.6, .8); root.add(ans);
    return t => {
      camTo(0, 5, 19, 0, 4.6, 0);
      kokeb.position.set(9.8, 8.2, 0); kokeb.scale.setScalar(.95); kokeb.update(t, CTX.amp(t));
      digs.forEach((b, i) => show(b, pop(t, P(1) + i * .12))); show(q, pop(t, P(1) + .6));
      const g = ease(pr(t, P(3), .5)); digs[2].position.y = 8.6 + g * .5; digs[2].rotation.z = Math.sin(t * 8) * .08 * g * (t < P(4) ? 1 : 0);
      lbl.forEach((l, i) => show(l, i === 1 ? pop(t, P(4)) : pop(t, P(2) + i * .2)));
      show(hump, pop(t, P(4)));
      show(stay, pop(t, P(4) + .6) * (1 - ease(pr(t, P(5) + 1, .4)))); show(up, pop(t, P(4) + 1.4) * (1 - ease(pr(t, P(5) + 1, .4))));
      const roll = ease(pr(t, P(5), 2.2)); const bx = lerp(xOf(8349), xOf(8300), roll);
      const by = 3.55 + Math.abs(Math.sin(roll * Math.PI * 3)) * .6 * (1 - roll);
      ball.position.set(bx, by, 0); ball.rotation.z = roll * 12; show(ball, pop(t, P(1) + .4));
      pin.position.set(bx, by + .95, .3); show(pin, pop(t, P(1) + .6) * (1 - ease(pr(t, P(5), .4))));
      show(ans, pop(t, P(5) + 2.0));
    };
  },
  ethiopic() {
    const one = '፩፪፫፬፭፮፯፰፱'.split(''), ten = '፲፳፴፵፶፷፸፹፺'.split('');
    const tile = (g, n, col) => { const b = block(1.75, 2.0, .6, col, g, { size: 160, th: 1.25, ty: .2 }); const s = label(String(n), .5, { color: '#fff', size: 110 }); s.position.set(0, -.68, .32); b.add(s); return b; };
    const r1 = one.map((g, i) => { const b = tile(g, i + 1, C.blue); b.position.set(-8.4 + i * 2.1, 7.2, 0); root.add(b); return b; });
    const r2 = ten.map((g, i) => { const b = tile(g, (i + 1) * 10, C.green); b.position.set(-8.4 + i * 2.1, 4.6, 0); root.add(b); return b; });
    const hun = tile('፻', 100, C.purple); hun.position.set(-8.4, 2.0, 0); root.add(hun);
    const zero = block(1.75, 2.0, .6, '#c9ced6', '0', { size: 160, tc: '#7a828e' }); zero.position.set(-6.3, 2.0, 0); root.add(zero);
    const xx = label('✕', 1.8, { color: C.red, size: 200 }); xx.position.set(-6.3, 2.0, .5); root.add(xx);
    const eq = [tile('፴', 30, C.green), label('+', 1, { size: 160 }), tile('፭', 5, C.blue), label('=', 1, { size: 160 }), block(3.0, 2.0, .6, C.orange, '፴፭', { size: 160 })];
    let ex = -2.6; eq.forEach((b, i) => { const w = i === 4 ? 3 : i % 2 ? 1 : 1.75; b.position.set(ex + w / 2, 2.0, i % 2 ? .4 : 0); ex += w + .35; root.add(b); });
    const n35 = label('= 35', .9, { color: C.ink, size: 120, stroke: 14 }); n35.position.set(ex + .45, 2.0, .5); root.add(n35);
    return t => {
      camTo(0, 5.2, 19.5, 0, 4.7, 0);
      kokeb.position.set(10.4, 9.3, 0); kokeb.scale.setScalar(.75); kokeb.update(t, CTX.amp(t));
      const d1 = Math.max(.15, (P(2) - P(1) - .4) / 9);
      r1.forEach((b, i) => show(b, pop(t, P(1) + i * d1)));
      r2.forEach((b, i) => show(b, pop(t, P(2) + i * .22)));
      show(hun, pop(t, P(2) + 2.4));
      eq.forEach((b, i) => show(b, pop(t, P(3) + .5 + i * .35))); show(n35, pop(t, P(3) + 2.4));
      show(zero, pop(t, P(4))); show(xx, pop(t, P(4) + .5));
      [...r1, ...r2].forEach((b, i) => { if (b.visible) b.rotation.y = Math.sin(t * 1.2 + i * .5) * .12; });
    };
  },
  quiz() {
    const q = board(9, 3, T('Write 68 in\nEthiopic numerals', '68ን በኢትዮጵያ\nአሃዝ ጻፉ'), { size: 120 }); q.position.set(2.2, 6.3, 0); root.add(q);
    const big = block(3.6, 2.2, .8, C.purple, '68 = ?', { size: 150 }); big.position.set(2.2, 2.6, 0); root.add(big);
    const ring = new THREE.Group(); ring.position.set(8.8, 6.4, 0); root.add(ring);
    const bgR = new THREE.Mesh(new THREE.TorusGeometry(1.1, .16, 12, 64), mat('#dfe5ee')); ring.add(bgR);
    let arc = null; const nums = [5, 4, 3, 2, 1].map(n => { const l = label(String(n), 1.3, { color: C.red, size: 180 }); l.position.z = .1; ring.add(l); return l; });
    const tEnd = CTX.voiceEnd;
    return t => {
      camTo(0, 5, 18.5, 0, 4.6, 0);
      kokeb.position.set(-5.4, 6.0, 0); kokeb.scale.setScalar(1.5); kokeb.update(t, CTX.amp(t), { spin: Math.sin(t * .7) * .3 });
      show(q, pop(t, .3)); show(big, pop(t, .8)); big.rotation.y = Math.sin(t * 1.4) * .12;
      const c = t - tEnd; show(ring, pop(t, tEnd - .2));
      const k = clamp(c / 5);
      if (arc) { ring.remove(arc); arc.geometry.dispose(); }
      arc = new THREE.Mesh(new THREE.TorusGeometry(1.1, .17, 12, 64, Math.max(.001, (1 - k) * Math.PI * 2)), mat(C.red)); arc.rotation.z = Math.PI / 2; arc.position.z = .05; ring.add(arc);
      nums.forEach((l, i) => l.visible = c >= i && c < i + 1);
    };
  },
  answer() {
    const big = block(6.5, 2.4, .8, C.purple, '68 = ፷፰', { size: 160 }); big.position.set(2.5, 6.6, 0); root.add(big);
    const a = block(2.0, 2.2, .6, C.green, '፷', { size: 160, ty: .2 }); a.add(Object.assign(label('60', .5, { color: '#fff', size: 110 }), {})); a.children[a.children.length - 1].position.set(0, -.75, .32); a.position.set(.6, 3.2, 0); root.add(a);
    const pl = label('+', 1, { size: 160 }); pl.position.set(2.5, 3.2, .4); root.add(pl);
    const b = block(2.0, 2.2, .6, C.blue, '፰', { size: 160, ty: .2 }); b.add(label('8', .5, { color: '#fff', size: 110 })); b.children[b.children.length - 1].position.set(0, -.75, .32); b.position.set(4.4, 3.2, 0); root.add(b);
    const conf = []; const r = rng(11);
    for (let i = 0; i < 90; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(.18, .3, .04), new THREE.MeshStandardMaterial({ color: COLS[i % 6], roughness: .6 })); m.userData.p = [r() * 22 - 11, 10 + r() * 6, r() * 4 - 2, r() * 6, .8 + r() * 1.2]; root.add(m); conf.push(m); }
    return t => {
      camTo(0, 5, 18.5, 0, 4.6, 0);
      kokeb.position.set(-5.4, 6.0, 0); kokeb.scale.setScalar(1.5);
      kokeb.update(t, CTX.amp(t), { jump: Math.abs(Math.sin(t * 5)) * .9 * (t < 2.4 ? 1 : 0), spin: ease(pr(t, 0, 1.2)) * Math.PI * 2 });
      show(big, pop(t, .2)); show(a, pop(t, .9)); show(pl, pop(t, 1.2)); show(b, pop(t, 1.5));
      conf.forEach(m => { const [x, y, z, ph, v] = m.userData.p; const yy = y - t * v * 2.4; m.visible = yy > -.5; m.position.set(x + Math.sin(t * 2 + ph) * .5, yy, z); m.rotation.set(t * 3 + ph, t * 2 + ph, ph); });
    };
  },
  recap() {
    const cards = [
      [T('Place value', 'የቁጥር ቤት ዋጋ'), '645,021', C.blue],
      [T('Compare from the left', 'ከግራ አወዳድሩ'), '357,812 < 359,104', C.green],
      [T('Rounding', 'ማጠጋጋት'), T('0–4 stay · 5–9 up', '0–4 ባለበት · 5–9 ወደ ላይ'), C.orange],
      [T('Ethiopic numerals', 'የኢትዮጵያ አሃዞች'), '፴፭ = 35', C.purple]
    ].map(([h, b, col], i) => { const g = new THREE.Group(); const c = board(7.4, 2.5, h + '\n' + b, { size: 92, color: '#ffffff' }); g.add(c); const strip = new THREE.Mesh(new RoundedBoxGeometry(.35, 2.5, .34, 3, .1), mat(col)); strip.position.x = -3.7; g.add(strip); g.position.set(i % 2 ? 4.2 : -4.2, i < 2 ? 7.0 : 4.1, 0); root.add(g); return g; });
    const proj = board(12, 2.6, T('Project: find your town\'s population\nand round it to the nearest 1,000', 'ፕሮጀክት፦ የከተማችሁን የሕዝብ ቁጥር ፈልጉ\nወደ ቅርብ 1,000 አጠጋጉ'), { size: 92, color: '#fff3c4' }); proj.position.set(0, 5.4, 1); root.add(proj);
    const end = new THREE.Group(); end.position.set(1.6, 5.6, 1.2); root.add(end);
    const brand = board(9.5, 2.0, 'AMBKidsJoy', { size: 160, color: '#ffffff', tc: C.blue }); end.add(brand);
    const sub = block(5.2, 1.4, .5, '#e62117', T('▶ Subscribe', '▶ ሰብስክራይብ'), { size: 120 }); sub.position.set(0, -2.1, .2); end.add(sub);
    return t => {
      camTo(0, 5.1, 19, 0, 4.8, 0);
      const fin = t > P(4) - .3;
      kokeb.position.set(fin ? -5.2 : 10.2, fin ? 6.0 : 9.0, 0); kokeb.scale.setScalar(fin ? 1.4 : .75);
      kokeb.update(t, CTX.amp(t), { wave: t > P(5) - .2, jump: fin ? Math.abs(Math.sin(t * 3)) * .25 : 0 });
      const out = ease(pr(t, P(3) - .3, .5));
      cards.forEach((c, i) => { show(c, pop(t, P(Math.min(i, 2)) + (i === 3 ? 1.6 : .3)) * (1 - out)); c.rotation.y = Math.sin(t + i) * .05; });
      show(proj, pop(t, P(3)) * (1 - ease(pr(t, P(4) - .3, .4))));
      show(end, pop(t, P(4))); sub.scale.setScalar(1 + Math.max(0, Math.sin(t * 5)) * .06 * (t > P(4) + .5 ? 1 : 0));
    };
  }
};

// ---------- Ethiopian animal friends (all built from simple shapes) ----------
const M = c => mat(c, { roughness: .8 });
function part(geo, m, x = 0, y = 0, z = 0, sx = 1, sy = 1, sz = 1) { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.scale.set(sx, sy, sz); o.castShadow = true; return o; }
const SPH = r => new THREE.SphereGeometry(r, 24, 16), CYL = (a, b, h) => new THREE.CylinderGeometry(a, b, h, 16), CAP = (r, l) => new THREE.CapsuleGeometry(r, l, 8, 16);
function eyePair(head, x, y, z, r = .09) {
  const eyes = []; const w = mat('#ffffff', { roughness: .3 }), b = mat('#141414', { roughness: .2 });
  for (const sx of [-x, x]) { const e = new THREE.Group(); e.add(part(SPH(r), w, 0, 0, 0, 1, 1, .6), part(SPH(r * .62), b, 0, 0, r * .45, 1, 1, .5), part(SPH(r * .2), w, r * .25, r * .3, r * .78)); e.position.set(sx, y, z); head.add(e); eyes.push(e); }
  return eyes;
}
// a four-legged animal: body along x (head end at +x), face turned to the camera (+z)
function quad(o) {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const fur = M(o.fur), belly = M(o.belly || o.fur);
  const torso = part(CAP(o.r, o.len), fur, 0, o.legH + o.r * .8, 0); torso.rotation.z = Math.PI / 2; body.add(torso);
  body.add(part(SPH(o.r * .9), belly, 0, o.legH + o.r * .55, 0, o.len * .9, .55, .9));
  const legs = [];
  for (const [lx, lz] of [[o.len / 2, o.r * .5], [o.len / 2, -o.r * .5], [-o.len / 2, o.r * .5], [-o.len / 2, -o.r * .5]]) {
    const leg = new THREE.Group(); leg.position.set(lx, o.legH + .1, lz); body.add(leg);
    leg.add(part(CYL(o.legR, o.legR * .85, o.legH + .1), fur, 0, -(o.legH + .1) / 2, 0));
    leg.add(part(SPH(o.legR * 1.15), M(o.hoof || o.fur), 0, -o.legH - .05, .03, 1, .6, 1.2)); legs.push(leg);
  }
  const head = new THREE.Group(); head.position.set(o.len / 2 + o.r * .7, o.legH + o.r * 1.6 + (o.neck || 0), 0); body.add(head);
  head.add(part(SPH(o.headR), fur, 0, 0, 0, 1, 1, 1));
  const tail = new THREE.Group(); tail.position.set(-o.len / 2 - o.r * .8, o.legH + o.r * 1.1, 0); body.add(tail);
  tail.add(part(CYL(.04, .05, o.tailL || .8), fur, 0, -(o.tailL || .8) / 2, 0)); tail.rotation.z = -.6;
  g.userData = { body, head, legs, tail, eyes: eyePair(head, o.headR * .38, o.headR * .25, o.headR * .78, o.headR * .2) };
  return g;
}
function makeLion() {
  const g = quad({ fur: '#d9a35b', belly: '#f0d3a0', r: .55, len: 1.3, legH: .7, legR: .15, headR: .46, hoof: '#f0d3a0', tailL: .9 });
  const { head, tail } = g.userData, mane = M('#3b2416'), lt = M('#f3dcb0');
  head.add(part(SPH(.72), mane, 0, .02, -.22, 1, 1, .7));
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; head.add(part(SPH(.2), mane, Math.cos(a) * .66, Math.sin(a) * .66, -.12)); }
  head.add(part(SPH(.22), lt, 0, -.17, .36, 1.25, .8, .9), part(SPH(.08), M('#2a1a12'), 0, -.06, .56, 1.3, .8, .8));
  for (const sx of [-.32, .32]) head.add(part(SPH(.13), M('#d9a35b'), sx, .38, .02, 1, 1, .5));
  tail.add(part(SPH(.13), mane, 0, -.95, 0));
  g.userData.kind = 'lion'; return g;
}
function makeCow() { // zebu: the humped cattle of Ethiopian farms
  const g = quad({ fur: '#a8683c', belly: '#f1e3cf', r: .62, len: 1.45, legH: .72, legR: .15, headR: .4, hoof: '#3a2a20', tailL: 1 });
  const { head, body, tail } = g.userData, w = M('#f1e3cf');
  body.add(part(SPH(.42), M('#a8683c'), .55, 2.0, 0, 1, .9, 1));                 // the hump
  body.add(part(SPH(.36), w, -.2, 1.6, .42, 1.3, 1, .4));                       // white patch
  head.add(part(SPH(.3), M('#f2c6b6'), 0, -.2, .3, 1.15, .75, .8));           // pink nose
  for (const sx of [-.12, .12]) head.add(part(SPH(.05), M('#5a2a24'), sx, -.18, .53));
  for (const s of [-1, 1]) { const h = part(new THREE.TorusGeometry(.26, .06, 8, 16, Math.PI * .6), M('#f4ead8'), s * .3, .34, 0); h.rotation.set(0, 0, s > 0 ? -.2 : Math.PI * .4 + .2); head.add(h);
    head.add(part(SPH(.14), M('#a8683c'), s * .48, .08, 0, 1.4, .6, .6)); }
  tail.add(part(SPH(.1), M('#3a2a20'), 0, -1.05, 0, 1, 1.6, 1));
  g.userData.kind = 'cow'; return g;
}
function makeIbex() { // walia ibex: wild goat of the Simien Mountains, with big ridged horns
  const g = quad({ fur: '#8a6440', belly: '#e6d6bd', r: .45, len: 1.1, legH: .85, legR: .1, headR: .34, hoof: '#2b2018', tailL: .3, neck: .25 });
  const { head } = g.userData, horn = M('#5a4a3a');
  head.add(part(SPH(.2), M('#e6d6bd'), 0, -.16, .25, 1, .8, 1));
  for (const s of [-1, 1]) {
    const curve = new THREE.CatmullRomCurve3([[0, 0, 0], [s * .03, .32, -.04], [s * .07, .58, -.22], [s * .1, .7, -.52], [s * .12, .62, -.82], [s * .13, .45, -.98]].map(v => new THREE.Vector3(...v)));
    const h = new THREE.Group(); h.position.set(s * .14, .26, -.05); head.add(h);
    h.add(part(new THREE.TubeGeometry(curve, 24, .075, 10), horn));
    for (let i = 1; i < 10; i++) { const p = curve.getPointAt(i / 10), tg = curve.getTangentAt(i / 10); const r = part(new THREE.TorusGeometry(.078, .022, 6, 14), horn, p.x, p.y, p.z); r.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tg); h.add(r); }
    head.add(part(SPH(.1), M('#8a6440'), s * .36, .12, -.05, 1.5, .5, .6));
  }
  head.add(part(new THREE.ConeGeometry(.07, .3, 8), M('#4a3626'), 0, -.42, .2)); // beard
  g.userData.kind = 'ibex'; return g;
}
function makeGelada() { // gelada: the bleeding-heart monkey of the Ethiopian highlands, sits like a person
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const fur = M('#8b6a48'), cape = M('#b89468'), face = M('#3a2a22');
  body.add(part(SPH(.55), fur, 0, .75, 0, 1, 1.15, .9));
  body.add(part(SPH(.62), cape, 0, 1.25, -.08, 1.1, .8, .9));
  const chest = part(new THREE.CircleGeometry(.24, 24), new THREE.MeshStandardMaterial({ color: '#e0444b', roughness: .6 }), 0, 1.0, .5, .85, 1.15, 1); body.add(chest); // the red "heart" patch
  for (const sx of [-.3, .3]) body.add(part(SPH(.2), fur, sx, .2, .3, 1, .7, 1.5));
  const head = new THREE.Group(); head.position.set(0, 1.85, .12); body.add(head);
  head.add(part(SPH(.36), cape, 0, .05, -.05, 1.1, 1, 1));
  head.add(part(SPH(.26), face, 0, -.05, .22, 1, 1.15, .9));
  head.add(part(SPH(.17), face, 0, -.2, .38, 1, .8, 1.1));
  for (const sx of [-.06, .06]) head.add(part(SPH(.03), M('#120c08'), sx, -.18, .53));
  const eyes = eyePair(head, .09, .06, .42, .065);
  const arms = [-1, 1].map(s => { const a = new THREE.Group(); a.position.set(s * .5, 1.35, .05); body.add(a); a.add(part(CYL(.1, .12, .75), fur, 0, -.35, 0), part(SPH(.12), face, 0, -.75, 0)); return a; });
  g.userData = { body, head, eyes, arms, legs: [], kind: 'gelada' };
  return g;
}
function makeChicken() {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const red = M('#d6342c'), feather = M('#c8642c');
  body.add(part(SPH(.36), feather, 0, .62, 0, 1.15, 1, .9));
  const head = new THREE.Group(); head.position.set(.3, 1.05, .05); body.add(head);
  head.add(part(SPH(.2), feather));
  for (let i = 0; i < 3; i++) head.add(part(SPH(.07), red, -.06 + i * .07, .2 + (i === 1 ? .04 : 0), 0));
  const beak = part(new THREE.ConeGeometry(.06, .16, 8), M('#f2b632'), 0, -.02, .24); beak.rotation.x = Math.PI / 2; head.add(beak);
  head.add(part(SPH(.05), red, 0, -.12, .17, 1, 1.4, 1));
  const eyes = eyePair(head, .1, .06, .14, .05);
  const tail = new THREE.Group(); tail.position.set(-.35, .78, 0); body.add(tail);
  for (let i = 0; i < 3; i++) { const f = part(SPH(.12), M(i === 1 ? '#2b5a3a' : '#1f3d2a'), -.05, .1 + i * .08, (i - 1) * .1, .6, 1.8, .4); f.rotation.z = .5; tail.add(f); }
  const legs = [-.1, .1].map(z => { const l = new THREE.Group(); l.position.set(0, .3, z); body.add(l); l.add(part(CYL(.025, .025, .3), M('#f2b632'), 0, -.15, 0), part(SPH(.05), M('#f2b632'), .05, -.3, 0, 1.6, .4, 1)); return l; });
  g.userData = { body, head, eyes, tail, legs, kind: 'chicken' };
  return g;
}
const ANIMALS = { lion: makeLion(), gelada: makeGelada(), ibex: makeIbex(), cow: makeCow(), chicken: makeChicken() };
const ANAMES = { lion: ['lion', 'አንበሳ'], gelada: ['gelada', 'ጭላዳ'], ibex: ['walia ibex', 'ዋልያ'], cow: ['cow', 'ላም'], chicken: ['chicken', 'ዶሮ'] };
const ASOUND = { lion: 'Roar!', gelada: 'Hoo-hoo!', ibex: 'Meh-eh!', cow: 'Moo!', chicken: 'Cluck!' };
const AORDER = ['lion', 'gelada', 'ibex', 'cow', 'chicken'];
Object.entries(ANIMALS).forEach(([k, a]) => { a.scale.setScalar(k === 'lion' ? 1.15 : 1); a.userData.base = a.scale.x; scene.add(a); a.visible = false; });
const aBubbles = {}; AORDER.forEach(k => { const g = new THREE.Group(); scene.add(g); aBubbles[k] = g; });
function setABubble(k, text) {
  const g = aBubbles[k]; if (g.userData.text === text) return; g.userData.text = text; g.clear(); if (!text) return;
  const l = label(text, .85, { color: C.ink, size: 100, bg: '#fff7d6', pad: 30, radius: 50 }); g.add(l);
}
// [x, z, turn, mirrored] per animal; songs bring them close to dance
const ALAYOUT = {
  bg: { lion: [-12.6, -2.6, -.55], chicken: [-10.9, 1.2, .25], cow: [-15.2, -7.4, -.55], gelada: [11.9, -1.2, -.3], ibex: [13.8, -5.2, .55, 1] },
  intro: { lion: [-3.4, -1.6, -.35], gelada: [-.2, -1.2, -.1], ibex: [3.0, -2.2, .4, 1], cow: [6.0, -3.0, .45, 1], chicken: [-1.8, 1.2, .2] },
  finale: { lion: [-4.8, .4, -.3], gelada: [-1.7, 1.0, 0], chicken: [.5, 2.6, .2], ibex: [2.6, .2, .35, 1], cow: [5.6, -.8, .45, 1] },
  song: { lion: [-6.9, .4, -.35], cow: [-10.6, -2.8, -.45], chicken: [-4.7, 4.6, .3], gelada: [6.7, .4, -.2], ibex: [10.6, -2.8, .45, 1] },
};
function animalsUpdate(t) {
  const on = CTX && CTX.animals && !CTX.noAnimals;
  const song = CTX && CTX.song, dancing = song && t > song.start - .2 && t < song.end + .3;
  const al = CHOREO && CHOREO.alay, mv = al ? ease(pr(t, al.t0, 1.6)) : 0, lay = song ? ALAYOUT.song : ALAYOUT.bg, lay2 = al ? ALAYOUT[al.to] : lay;
  const bubs = (CHOREO && CHOREO.abubbles) || [], hops = (CHOREO && CHOREO.ahops) || [];
  AORDER.forEach((k, i) => {
    const a = ANIMALS[k], u = a.userData; a.visible = !!on; aBubbles[k].visible = false; if (!on) return;
    const A0 = lay[k], A1 = lay2[k], walking = mv > 0 && mv < 1; const x = lerp(A0[0], A1[0], mv), z = lerp(A0[1], A1[1], mv), turn = lerp(A0[2], A1[2], mv), mir = mv < .5 ? A0[3] : A1[3]; a.position.set(x, .12, z); a.rotation.y = turn; a.scale.set(u.base * (mir ? -1 : 1), u.base, u.base);
    const bp = song ? (t - song.start) / (60 / song.bpm) : 0, b = Math.abs(Math.sin(Math.PI * bp));
    let bob = Math.sin(t * 2 + i) * .02, nod = Math.sin(t * .8 + i) * .05, sway = 0, hop = 0;
    if (dancing) { bob = b * (k === 'chicken' ? .35 : .18); nod = Math.sin(Math.PI * bp) * .22; sway = Math.sin(Math.PI * bp * .5) * .12; }
    const h = hops.find(x => x.k === k && t >= x.t0 && t < x.t0 + x.d);
    if (walking) { bob = Math.abs(Math.sin(t * 9 + i)) * .14; u.legs.forEach((l, j) => l.rotation.z = Math.sin(t * 9 + j * 1.6) * .35); }
    if (h) { const p = (t - h.t0) / h.d; hop = Math.abs(Math.sin(p * Math.PI * 2)) * .7 * (1 - p * .3); nod += Math.sin(p * Math.PI * 4) * .2; }
    u.body.position.y = bob + hop; u.body.rotation.z = sway * (k === 'gelada' ? 1 : .5); u.head.rotation.x = nod;
    u.head.rotation.y = k === 'gelada' || k === 'chicken' ? Math.sin(t * .6 + i) * .25 : 0;
    if (u.tail) u.tail.rotation.x = Math.sin(t * 3 + i) * .4;
    if (u.arms) u.arms.forEach((ar, j) => { ar.rotation.z = (j ? 1 : -1) * (dancing ? .6 + b * .5 : .15); ar.rotation.x = dancing ? -.5 : 0; ar.position.y = 1.35 + (dancing ? Math.sin(Math.PI * bp * 2 + j * Math.PI) * .06 : 0); });
    if (k === 'chicken' && !dancing) { u.head.position.y = 1.05 - Math.max(0, Math.sin(t * 2.3)) * .25 * (Math.sin(t * .5) > 0 ? 1 : 0); }
    if (!walking) u.legs.forEach((l, j) => l.rotation.z = dancing ? Math.sin(Math.PI * bp + j * Math.PI) * .15 : 0);
    const bl = ((t + i * 1.3) % 3.9) < .12 ? .1 : 1; u.eyes.forEach(e => e.scale.y = bl);
    const bb = bubs.filter(x => x.k === k && t >= x.t0 && t < x.t0 + x.d).pop();
    if (bb) { setABubble(k, bb.text); const g = aBubbles[k]; g.visible = true; const s = pop(t, bb.t0, .4) * Math.min(1, clamp((bb.t0 + bb.d - t) / .25));
      g.scale.setScalar(Math.max(s, .001)); g.position.set(x, (k === 'chicken' ? 1.9 : 3.3) + hop, z + .6); }
  });
}

// ---------- props ----------
function flower(s = 1) { // adey abeba: the yellow Meskel daisy of the Ethiopian New Year
  const g = new THREE.Group(); const pm = mat('#ffd21f', { roughness: .6, side: THREE.DoubleSide });
  for (let i = 0; i < 10; i++) { const p = part(SPH(.16), pm, Math.cos(i / 10 * Math.PI * 2) * .22, Math.sin(i / 10 * Math.PI * 2) * .22, 0, 1.4, .55, .25); p.rotation.z = i / 10 * Math.PI * 2; g.add(p); }
  g.add(part(SPH(.12), M('#c26a12'), 0, 0, .05, 1, 1, .6));
  const st = part(CYL(.025, .025, 1), M('#3f8a3a'), 0, -.55, -.03); g.add(st); g.scale.setScalar(s); return g;
}
function note3d(col) { const g = new THREE.Group(); const m = mat(col, { roughness: .4 }); g.add(part(SPH(.22), m, 0, 0, 0, 1.25, .9, .6), part(CYL(.04, .04, .9), m, .24, .45, 0), part(new THREE.BoxGeometry(.32, .1, .06), m, .38, .86, 0)); g.children[2].rotation.z = -.5; return g; }
function cloud3d(s = 1, dark) { const g = new THREE.Group(); const m = mat(dark ? '#8d99ae' : '#ffffff', { roughness: 1, emissive: dark ? '#56627a' : '#ffffff', emissiveIntensity: .25 }); [[-.7, 0, .5], [0, .25, .7], [.7, 0, .5], [0, -.1, .55]].forEach(([x, y, r]) => g.add(part(SPH(r), m, x, y, 0, 1, .85, .8))); g.scale.setScalar(s); return g; }
function sun3d(s = 1) { const g = new THREE.Group(); g.add(part(SPH(.6), mat('#ffcb2f', { emissive: '#ffb300', emissiveIntensity: .6 }))); for (let i = 0; i < 10; i++) { const r = part(new THREE.ConeGeometry(.13, .4, 8), mat('#ffb300', { emissive: '#ff9d00', emissiveIntensity: .5 }), Math.cos(i * .628) * .9, Math.sin(i * .628) * .9, 0); r.rotation.z = i * .628 - Math.PI / 2; g.add(r); } g.scale.setScalar(s); return g; }
function heart3d(col = '#ef4b6c') { const s = new THREE.Shape(); s.moveTo(0, -.9); s.bezierCurveTo(-1.6, .1, -.8, 1.3, 0, .55); s.bezierCurveTo(.8, 1.3, 1.6, .1, 0, -.9); const m = part(new THREE.ExtrudeGeometry(s, { depth: .3, bevelEnabled: true, bevelThickness: .1, bevelSize: .08, bevelSegments: 4 }), mat(col, { roughness: .35 })); m.position.z = -.15; const g = new THREE.Group(); g.add(m); return g; }
function bunting(w, y, z, n) { const g = new THREE.Group(); const cols = ['#1f8a4c', '#f2c230', '#d23b2f', C.blue, C.purple];
  for (let i = 0; i < n; i++) { const x = -w / 2 + (i + .5) * w / n, sag = -Math.sin((i + .5) / n * Math.PI) * .8; const tri = part(new THREE.ConeGeometry(.32, .7, 3), mat(cols[i % 5], { side: THREE.DoubleSide }), x, y + sag - .3, z); tri.rotation.set(Math.PI, 0, 0); tri.scale.z = .25; g.add(tri); }
  return g; }
// mini school buildings
function house(w, h, d, wall, roof, o = {}) {
  const g = new THREE.Group();
  g.add(part(new RoundedBoxGeometry(w, h, d, 2, .08), mat(wall), 0, h / 2, 0));
  const rf = part(new THREE.CylinderGeometry(.01, w * .62, h * .45, 4, 1), mat(roof), 0, h + h * .22, 0, 1, 1, d / w * 1.25); rf.rotation.y = Math.PI / 4; g.add(rf);
  const door = part(new RoundedBoxGeometry(w * .22, h * .5, .1, 2, .04), mat(o.door || '#7a4a2a'), 0, h * .25, d / 2); g.add(door);
  if (o.win !== false) for (const sx of [-1, 1]) g.add(part(new RoundedBoxGeometry(w * .2, h * .22, .08, 2, .03), mat('#bfe6ff', { emissive: '#bfe6ff', emissiveIntensity: .3 }), sx * w * .3, h * .6, d / 2));
  return g;
}
function signBoard(text, w = 2.6) { const g = new THREE.Group(); const b = board(w, .75, text, { size: 96, color: '#ffffff' }); g.add(b); g.add(part(CYL(.05, .05, .8), M('#6b4a2a'), -w * .35, -.7, -.1), part(CYL(.05, .05, .8), M('#6b4a2a'), w * .35, -.7, -.1)); return g; }
const MODELS = {
  gate() { const g = new THREE.Group(); const gm = mat('#2f9a4f', { roughness: .4 }), st = M('#e9dcc4');
    for (const s of [-1, 1]) { g.add(part(new RoundedBoxGeometry(.55, 3.0, .55, 2, .06), st, s * 1.6, 1.5, 0)); g.add(part(SPH(.32), st, s * 1.6, 3.1, 0)); }
    for (const s of [-1, 1]) { const p = new THREE.Group(); p.position.set(s * 1.32, 0, .1); g.add(p); p.add(part(new RoundedBoxGeometry(1.3, 2.2, .12, 2, .04), gm, -s * .65, 1.25, 0)); for (let i = 0; i < 4; i++) p.add(part(new THREE.BoxGeometry(.06, 2.0, .16), M('#1d6b35'), -s * (.2 + i * .3), 1.25, .02)); }
    const arch = part(new THREE.TorusGeometry(1.6, .12, 8, 24, Math.PI), M('#1d6b35'), 0, 2.9, 0); g.add(arch);
    return g; },
  library() { const g = house(3.2, 2.2, 1.8, '#f6d8a8', '#c0503a', { win: false }); const cols = [C.red, C.blue, C.green, C.orange, C.purple, C.teal];
    for (let r = 0; r < 2; r++) for (let i = 0; i < 6; i++) g.add(part(new THREE.BoxGeometry(.16, .5, .12), mat(cols[(i + r * 2) % 6]), (i < 3 ? -1.15 : .55) + (i % 3) * .2, .75 + r * .62, .92));
    const bk = part(new RoundedBoxGeometry(.9, .7, .18, 2, .04), mat(C.blue), 0, 2.15, 1.0); bk.rotation.z = .1; g.add(bk); return g; },
  lab() { const g = house(3.0, 2.2, 1.8, '#dff1f7', '#3d7ea6'); const glass = mat('#9fe3ff', { transparent: true, opacity: .55, roughness: .1 });
    const fl = new THREE.Group(); fl.position.set(2.0, 0, .6); g.add(fl); fl.add(part(new THREE.ConeGeometry(.5, .9, 24), glass, 0, .5, 0), part(CYL(.14, .14, .5), glass, 0, 1.15, 0), part(new THREE.ConeGeometry(.42, .5, 24), mat('#58d68d', { emissive: '#2ecc71', emissiveIntensity: .4 }), 0, .3, 0));
    return g; },
  hall() { const g = new THREE.Group(); g.add(part(new RoundedBoxGeometry(4.0, .3, 2, 2, .05), M('#e9dcc4'), 0, .15, 0), part(new RoundedBoxGeometry(4.0, .35, 2, 2, .05), M('#e9dcc4'), 0, 2.6, 0));
    const pd = part(new THREE.CylinderGeometry(.01, 2.4, 1.0, 3, 1), M('#d27d48'), 0, 3.2, 0, 1, 1, .5); pd.rotation.z = 0; pd.rotation.y = Math.PI / 2 * 0; g.add(pd);
    for (let i = 0; i < 5; i++) g.add(part(CYL(.14, .16, 2.2), M('#fffaf0'), -1.6 + i * .8, 1.4, .7)); g.add(part(new RoundedBoxGeometry(3.6, 2.1, 1.2, 2, .05), M('#f4b860'), 0, 1.4, -.3)); return g; },
  cafe() { const g = new THREE.Group(); g.add(part(new RoundedBoxGeometry(2.6, 1.2, 1.4, 2, .06), M('#c78a4a'), 0, .6, 0), part(new RoundedBoxGeometry(2.8, .12, 1.6, 2, .04), M('#7a4a2a'), 0, 1.25, 0));
    for (let i = 0; i < 6; i++) { const a = part(new THREE.BoxGeometry(.47, .08, 1.0), mat(i % 2 ? '#ffffff' : C.red), -1.17 + i * .47, 2.45, .3); a.rotation.x = .35; g.add(a); }
    for (const s of [-1, 1]) g.add(part(CYL(.05, .05, 1.2), M('#7a4a2a'), s * 1.25, 1.85, .7));
    const jb = new THREE.Group(); jb.position.set(-.6, 1.31, .2); g.add(jb); const cl = M('#2b1d16'); // jebena coffee pot
    jb.add(part(SPH(.28), cl, 0, .28, 0), part(CYL(.06, .1, .45), cl, 0, .72, 0), part(CYL(.04, .04, .35), cl, .22, .45, 0)); jb.children[2].rotation.z = -.9;
    const cup = new THREE.Group(); cup.position.set(.5, 1.31, .3); g.add(cup); cup.add(part(CYL(.22, .16, .35), M('#ffffff'), 0, .18, 0), part(new THREE.TorusGeometry(.1, .03, 8, 16), M('#ffffff'), .25, .2, 0), part(CYL(.19, .19, .02), M('#8a4b20'), 0, .34, 0));
    return g; },
  restroom() { const g = house(2.4, 2.1, 1.6, '#cfe8ff', '#4a7fc1', { door: '#4a7fc1', win: false }); const sink = new THREE.Group(); sink.position.set(1.7, 0, .7); g.add(sink);
    sink.add(part(CYL(.12, .16, .9), M('#e6eef5'), 0, .45, 0), part(CYL(.42, .3, .25, 24), M('#ffffff'), 0, .98, 0), part(CYL(.04, .04, .4), M('#9aa5b1'), 0, 1.3, -.2), part(CYL(.035, .035, .3), M('#9aa5b1'), 0, 1.48, -.08));
    sink.children[3].rotation.x = Math.PI / 2; const drop = part(SPH(.06), mat('#58b4ff', { emissive: '#58b4ff', emissiveIntensity: .4 }), 0, 1.3, .05, 1, 1.5, 1); drop.name = 'drop'; sink.add(drop); return g; },
  school() { const g = house(4.2, 2.4, 2.0, '#fff1cf', '#d9534f'); const f = new THREE.Group(); f.position.set(0, 2.4 + 1.3, 0); g.add(f); f.add(part(CYL(.03, .03, 1.4), M('#666'), 0, .7, 0));
    ['#1f8a4c', '#f2c230', '#d23b2f'].forEach((c, i) => f.add(part(new THREE.BoxGeometry(.9, .2, .03), mat(c), .47, 1.3 - i * .2, 0))); return g; },
};
function wordBlock(word, sub, col) { const g = new THREE.Group(); const lines = word.split('\n').length;
  const b = block(Math.min(7.4, Math.max(3.4, Math.max(...word.split('\n').map(l => l.length)) * .52 + 1)), 1.2 + lines * .75, .6, col, word, { size: 130, th: .75 * lines + .1, ty: sub ? .28 : 0 });
  g.add(b); if (sub) { const s = label(sub, .62, { color: '#ffffff', size: 90 }); s.position.set(0, -.62 * lines + .1, .32); g.add(s); } return g; }
function confetti(n, seed) { const conf = []; const r = rng(seed); for (let i = 0; i < n; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(.18, .3, .04), new THREE.MeshStandardMaterial({ color: COLS[i % 6], roughness: .6 })); m.userData.p = [r() * 22 - 11, 10 + r() * 6, r() * 4 - 2, r() * 6, .8 + r() * 1.2]; root.add(m); conf.push(m); }
  return (t, t0) => conf.forEach(m => { const [x, y, z, ph, v] = m.userData.p; const yy = y - (t - t0) * v * 2.4; m.visible = t > t0 && yy > -.5; m.position.set(x + Math.sin(t * 2 + ph) * .5, yy, z); m.rotation.set(t * 3 + ph, t * 2 + ph, ph); }); }
// the week wheel: seven days on a ring, today at the top
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], DAYS_AM = ['ሰኞ', 'ማክሰኞ', 'ረቡዕ', 'ሐሙስ', 'ዓርብ', 'ቅዳሜ', 'እሑድ'];
function weekWheel(cx, cy, R) {
  const g = new THREE.Group(); g.position.set(cx, cy, 0); root.add(g);
  const ring = part(new THREE.TorusGeometry(R, .12, 10, 64), M('#e9dcc4')); g.add(ring);
  const hub = block(2.3, 1.1, .5, C.ink, T('1 week', '1 ሳምንት'), { size: 90 }); g.add(hub);
  const days = DAYS.map((d, i) => { const b = block(2.6, 1.15, .5, COLS[i % 6], d + (CTX.lang === 'am' ? '\n' + DAYS_AM[i] : ''), { size: CTX.lang === 'am' ? 70 : 92, th: CTX.lang === 'am' ? 1.0 : .8 }); g.add(b); return b; });
  const tags = [[T('Yesterday', 'Yesterday · ትናንት'), C.blue], [T('Today', 'Today · ዛሬ'), '#e0a100'], [T('Tomorrow', 'Tomorrow · ነገ'), C.green]].map(([s, c]) => { const l = block(CTX.lang === 'am' ? 3.6 : 2.5, .75, .3, c, s, { size: 80 }); root.add(l); return l; });
  const frame = part(new RoundedBoxGeometry(3.2, 1.75, .3, 3, .16), mat('#ffe066', { emissive: '#ffd000', emissiveIntensity: .6 })); root.add(frame);
  return { g, days, tags, frame, hub,
    set(t, rot, appear, tagsOn, today) { // rot: wheel turn in day steps (today at top)
      days.forEach((b, i) => { const a = Math.PI / 2 - (i - rot) * Math.PI * 2 / 7; b.position.set(Math.cos(a) * R, Math.sin(a) * R, .2); show(b, appear(i)); b.rotation.y = 0; });
      const top = [cx, cy + R], L2 = [cx + Math.cos(Math.PI / 2 + 2 * Math.PI / 7) * R, cy + Math.sin(Math.PI / 2 + 2 * Math.PI / 7) * R], R2 = [cx + Math.cos(Math.PI / 2 - 2 * Math.PI / 7) * R, cy + Math.sin(Math.PI / 2 - 2 * Math.PI / 7) * R];
      frame.position.set(top[0], top[1], -.15); show(frame, tagsOn);
      tags[0].position.set(L2[0] - 2.2, L2[1] + .9, .6); tags[1].position.set(top[0], top[1] + 1.25, .6); tags[2].position.set(R2[0] + 2.2, R2[1] + .9, .6);
      tags.forEach((l, i) => show(l, tagsOn)); show(hub, appear(0));
    } };
}
const ETH_MONTHS = [['መስከረም', 'Meskerem'], ['ጥቅምት', 'Tikimt'], ['ኅዳር', 'Hidar'], ['ታኅሣሥ', 'Tahsas'], ['ጥር', 'Tir'], ['የካቲት', 'Yekatit'], ['መጋቢት', 'Megabit'], ['ሚያዝያ', 'Miyazia'], ['ግንቦት', 'Ginbot'], ['ሰኔ', 'Sene'], ['ሐምሌ', 'Hamle'], ['ነሐሴ', 'Nehase'], ['ጳጉሜ', 'Pagume']];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// a segment's progress: 0 at its start, 1 when the next segment starts
const SEGP = (t, i) => clamp((t - P(i)) / Math.max(.5, (i + 1 < CTX.phases.length ? P(i + 1) : CTX.voiceEnd) - P(i)));
const SEGEND = i => i + 1 < CTX.phases.length ? P(i + 1) : CTX.voiceEnd;

Object.assign(SCENES, {
  g3intro() {
    const title = board(10.4, 3.4, CTX.story.title[CTX.lang] + '\n ', { size: 120 }); title.position.set(3.0, 6.3, 0); root.add(title);
    const sub = label(CTX.story.subtitle[CTX.lang], .7, { color: C.blue, size: 90 }); sub.position.set(3.0, 5.3, .2); root.add(sub);
    const fl = []; for (let i = 0; i < 8; i++) { const f = flower(.9); f.position.set(-11 + i * 3.1, 1.0, -3.5 - (i % 2)); root.add(f); fl.push(f); }
    return t => {
      camTo(0, 4.6, 18.4 - pr(t, 0, CTX.dur) * 1.2, 0, 4.2, 0);
      const k = ease(pr(t, 0, 1.4)); kokeb.position.set(lerp(12, -6.2, k), lerp(9, 5.4, k), 1); kokeb.scale.setScalar(1.8);
      kokeb.update(t, CTX.amp(t), { wave: t < 3.2, spin: (1 - k) * 6 });
      show(title, pop(t, .9)); show(sub, pop(t, 1.3));
      fl.forEach((f, i) => { show(f, pop(t, .4 + i * .1) * .9); f.rotation.z = Math.sin(t * 1.4 + i) * .08; });
    };
  },
  places() {
    const names = ['gate', 'library', 'laboratory', 'hall', 'café', 'rest-room'], am = ['በር', 'ቤተ መጻሕፍት', 'ቤተ ሙከራ', 'አዳራሽ', 'ካፌ', 'መታጠቢያ ቤት'], keys = ['gate', 'library', 'lab', 'hall', 'cafe', 'restroom'];
    const ring = new THREE.Group(); ring.position.set(0, .25, -4.2); root.add(ring); const R = 5.8;
    const items = keys.map((k, i) => { const g = new THREE.Group(); const m = MODELS[k](); g.add(m); const s = signBoard(names[i], 2.6); s.position.set(0, k === 'gate' ? 4.3 : 4.0, .3); g.add(s); g.userData.sign = s; ring.add(g); const a = i / 6 * Math.PI * 2; g.position.set(Math.sin(a) * R, 0, Math.cos(a) * R); g.rotation.y = a; return g; });
    const word = new THREE.Group(); word.position.set(0, 9.0, 1); root.add(word); let wcur = -1;
    const title = board(8.4, 1.5, T('Unit 1: My School', 'ምዕራፍ 1፦ My School'), { size: 110, color: '#fff3c4' }); title.position.set(0, 9.0, 1); root.add(title);
    return t => {
      camTo(0, 5.4, 19.5, 0, 4.4, 0);
      kokeb.position.set(-10.3, 8.6, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      let cur = -1; for (let i = 1; i < CTX.phases.length; i++) if (t >= P(i) - .3) cur = i - 1;
      let ang; if (cur < 0) ang = -t * .35; else { const prevA = cur === 0 ? -P(1) * .35 : -(cur - 1) / 6 * Math.PI * 2; const tgt = -cur / 6 * Math.PI * 2; let d = ((tgt - prevA) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI; ang = prevA + d * ease(pr(t, P(cur + 1) - .3, 1.3)); }
      ring.rotation.y = ang;
      items.forEach((g, i) => { show(g, pop(t, .2 + i * .15)); const hi = i === cur; g.userData.sign.scale.setScalar(hi ? 1.25 : .9); g.position.y = hi ? Math.abs(Math.sin(t * 3)) * .15 * clamp((t - P(cur + 1)) / .5) : 0;
        const dr = g.getObjectByName('drop'); if (dr) dr.position.y = 1.3 - ((t * .9) % 1) * .5; });
      show(title, pop(t, .3) * (1 - ease(pr(t, P(1) - .4, .4))));
      if (cur !== wcur) { wcur = cur; word.clear(); if (cur >= 0) word.add(wordBlock(names[cur], CTX.lang === 'am' ? am[cur] : null, COLS[cur % 6])); }
      show(word, cur >= 0 ? pop(t, P(cur + 1) + .2) : 0);
    };
  },
  song() {
    const sg = CTX.song, pairs = (CTX.data.pairs || []);
    const title = board(9.0, 2.0, sg.title, { size: 120, color: '#fff3c4' }); title.position.set(1.2, 5.6, 0); root.add(title);
    root.add(bunting(26, 11.2, -3, 22)); root.add(bunting(22, 10.2, -1.5, 18));
    const fl = []; for (let i = 0; i < 12; i++) { const f = flower(.8); const a = Math.PI * (.08 + i / 11 * .84); f.position.set(-Math.cos(a) * 12.5, .9, -Math.sin(a) * 6 - 1); root.add(f); fl.push(f); }
    const notes = []; const r = rng(sg.seed || 3); for (let i = 0; i < 10; i++) { const n = note3d(COLS[i % 6]); n.userData.p = [r() * 20 - 10, r() * 6, r() * 4 - 4, r()]; root.add(n); notes.push(n); }
    const words = pairs.map(([w, am, model], i) => { const g = new THREE.Group(); const wb = wordBlock(w, am, COLS[(i + 1) % 6]); g.add(wb); if (model && MODELS[model]) { const m = MODELS[model](); m.scale.setScalar(.5); m.position.set(4.6, -.4, -1.2); g.add(m); } g.position.set(0, 4.7, 0); root.add(g); return g; });
    const floor = part(new THREE.CylinderGeometry(6.5, 6.5, .06, 64), mat('#ffe9b0', { emissive: '#ffcc33', emissiveIntensity: .2 }), 0, .27, 2); root.add(floor);
    const conf = confetti(70, 5);
    return t => {
      const on = t > sg.start - .1, bp = (t - sg.start) / (60 / sg.bpm), b = Math.abs(Math.sin(Math.PI * bp));
      camTo(Math.sin(t * .15) * 1.2 * (on ? 1 : 0), 5.0, 18.5, 0, 4.4, 0);
      kokeb.position.set(-6.6, 5.2 + (on ? b * .25 : 0), 0); kokeb.scale.setScalar(1.15); kokeb.update(t, CTX.amp(t), { spin: on ? Math.sin(Math.PI * bp * .5) * .5 : 0 });
      show(title, pop(t, .3) * (1 - ease(pr(t, sg.start - .2, .4))));
      let li = -1; sg.lines.forEach((l, i) => { if (t >= l.bar0 - .15) li = i; });
      const pi = li < 0 ? -1 : Math.floor(li / 2);
      words.forEach((g, i) => { const s = i === pi ? pop(t, sg.lines[i * 2].bar0 - .15, .45) * (1 - ease(pr(t, (sg.lines[i * 2 + 2] || { bar0: sg.end + 9 }).bar0 - .35, .25))) : 0; show(g, s); g.rotation.y = Math.sin(t * 2) * .12; g.position.y = 4.7 + b * .12; });
      fl.forEach((f, i) => { show(f, pop(t, .2 + i * .06) * .9); f.rotation.z = Math.sin(Math.PI * bp * (on ? 1 : .2) + i) * .15; });
      notes.forEach((n, i) => { const [x, y0, z, ph] = n.userData.p; const y = ((t * .8 + y0 + ph * 7) % 7) + 3.5; n.position.set(x + Math.sin(t + ph * 6) * .5, y, z); n.rotation.y = t + ph; show(n, on ? clamp((t - sg.start) / .6) * (y < 9.5 ? 1 : 0) * .9 : 0); });
      floor.material.emissiveIntensity = on ? .15 + b * .35 : .1;
      conf(t, sg.end - .5);
    };
  },
  classroom() {
    const bb = new THREE.Group(); bb.position.set(0, 6.6, -2.2); root.add(bb);
    bb.add(part(new RoundedBoxGeometry(11, 4.6, .3, 3, .1), M('#8a5a34'))); const slate = part(new THREE.PlaneGeometry(10.4, 4.0), new THREE.MeshStandardMaterial({ color: '#23453a', roughness: .9 }), 0, 0, .16); bb.add(slate);
    const chalk = new THREE.Group(); chalk.position.z = .2; bb.add(chalk); let ccur = null;
    const desk = new THREE.Group(); desk.position.set(0, .25, 1.4); root.add(desk);
    desk.add(part(new RoundedBoxGeometry(6.4, .25, 2.2, 2, .06), M('#c58a52'), 0, 1.55, 0)); for (const sx of [-2.9, 2.9]) for (const sz of [-.9, .9]) desk.add(part(CYL(.09, .09, 1.5), M('#6b6b6b'), sx, .75, sz));
    const Y = 3.5;
    const ruler = (() => { const g = new THREE.Group(); const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 96; const c = cv.getContext('2d'); c.fillStyle = '#ffd34d'; c.fillRect(0, 0, 1024, 96); c.fillStyle = '#333'; for (let i = 0; i <= 30; i++) { c.fillRect(20 + i * 32.6, 0, 3, i % 5 ? 26 : 46); if (i % 5 === 0) { c.font = '28px sans-serif'; c.fillText(String(i), 12 + i * 32.6, 80); } } const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace;
      g.add(part(new THREE.BoxGeometry(3.4, .34, .06), [M('#e0b53c'), M('#e0b53c'), M('#e0b53c'), M('#e0b53c'), mat('#fff', { map: tx }), M('#e0b53c')])); return g; })();
    const pencil = (() => { const g = new THREE.Group(); g.add(part(new THREE.CylinderGeometry(.13, .13, 2.4, 6), M('#f2b632'))); g.add(part(new THREE.ConeGeometry(.13, .4, 6), M('#f0d3a0'), 0, 1.4, 0), part(new THREE.ConeGeometry(.045, .14, 6), M('#333'), 0, 1.55, 0), part(CYL(.135, .135, .2), M('#b0b6bd'), 0, -1.3, 0), part(CYL(.13, .13, .25), M('#f07a8a'), 0, -1.52, 0)); g.rotation.z = -Math.PI / 2; return g; })();
    const bag = (() => { const g = new THREE.Group(); g.add(part(new RoundedBoxGeometry(1.8, 2.0, .9, 4, .3), mat(C.blue)), part(new RoundedBoxGeometry(1.84, .9, .95, 3, .25), mat('#2f5fa0'), 0, .55, .05), part(new RoundedBoxGeometry(1.1, .7, .3, 3, .12), mat('#2f5fa0'), 0, -.4, .5)); const h = part(new THREE.TorusGeometry(.35, .07, 8, 20, Math.PI), M('#333'), 0, 1.0, 0); g.add(h); return g; })();
    const setsq = (() => { const s = new THREE.Shape(); s.moveTo(0, 0); s.lineTo(1.6, 0); s.lineTo(0, 1.6); s.closePath(); const hole = new THREE.Path(); hole.moveTo(.3, .25); hole.lineTo(.95, .25); hole.lineTo(.3, .9); hole.closePath(); s.holes.push(hole); const g = new THREE.Group(); g.add(part(new THREE.ExtrudeGeometry(s, { depth: .06, bevelEnabled: false }), mat('#7fd3ff', { transparent: true, opacity: .75 }), -.8, -.8, 0)); return g; })();
    const compass = (() => { const g = new THREE.Group(); const m = M('#9aa5b1'); for (const s of [-1, 1]) { const l = part(CYL(.06, .03, 1.7), m, s * .32, -.1, 0); l.rotation.z = s * .38; g.add(l); } g.add(part(CYL(.12, .12, .3), M('#d9534f'), 0, .85, 0), part(new THREE.ConeGeometry(.05, .2, 8), M('#333'), .63, -.95, 0)); return g; })();
    const tube = (() => { const g = new THREE.Group(); g.add(part(CYL(.22, .22, 1.6), mat('#bfefff', { transparent: true, opacity: .45, roughness: .1 })), part(SPH(.22), mat('#bfefff', { transparent: true, opacity: .45 }), 0, -.8, 0), part(CYL(.2, .2, .7), mat('#ef4b6c', { emissive: '#ef4b6c', emissiveIntensity: .3 }), 0, -.45, 0)); return g; })();
    const funnel = (() => { const g = new THREE.Group(); g.add(part(new THREE.CylinderGeometry(.75, .1, .9, 24, 1, true), mat('#58c48b', { side: THREE.DoubleSide }), 0, .3, 0), part(CYL(.1, .08, .8), mat('#58c48b'), 0, -.55, 0)); return g; })();
    const groups = [[], [], [[ruler, 'ruler', -1.9], [pencil, 'pencil', 2.0]], [[bag, 'schoolbag', 0]], [[setsq, 'set square', -3.6], [compass, 'compass', -1.2], [tube, 'test tube', 1.2], [funnel, 'funnel', 3.6]]].map(list => list.map(([o, w, x]) => { const g = new THREE.Group(); g.add(o); const l = label(w, .75, { color: C.ink, size: 90, bg: '#ffffff', pad: 22, radius: 30 }); l.position.set(0, -1.5, .9); g.add(l); o.scale.setScalar(list.length > 2 ? 1.25 : list.length > 1 ? 1.3 : 1.6); g.position.set(x * (list.length > 2 ? 1 : 1.45), Y, 1.6); root.add(g); return g; }));
    const deskTag = label('desk', .55, { color: C.ink, size: 90, bg: '#ffffff', pad: 22, radius: 30 }); deskTag.position.set(3.6, 1.2, 2.7); root.add(deskTag);
    const letters = [...'RULER'].map((c, i) => block(1.0, 1.1, .3, COLS[i % 6], c, { size: 140 })).concat([...'PENCIL'].map((c, i) => block(1.0, 1.1, .3, COLS[(i + 2) % 6], c, { size: 140 })));
    letters.forEach((b, i) => { b.position.set(i < 5 ? -2.2 + i * 1.1 : -2.75 + (i - 5) * 1.1, i < 5 ? 7.6 : 6.1, -1.7); root.add(b); });
    const boardText = [T('My Classroom', 'My Classroom'), 'desk  ·  blackboard', 'ruler  ·  pencil', 'schoolbag', 'set square · compass\ntest tube · funnel', ''];
    return t => {
      camTo(0, 5.2, 19, 0, 4.6, 0);
      kokeb.position.set(9.9, 8.7, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      let cur = 0; for (let i = 0; i < CTX.phases.length; i++) if (t >= P(i) - .2) cur = i;
      show(bb, pop(t, .2)); show(desk, pop(t, .5)); show(deskTag, pop(t, P(1) + .4) * (cur === 1 ? 1 : 0));
      const txt = boardText[cur] ?? ''; if (txt !== ccur) { ccur = txt; chalk.clear(); if (txt) chalk.add(label(txt, txt.includes('\n') ? 1.9 : 1.3, { color: '#f4f4ec', size: 120, weight: 600 })); }
      chalk.scale.setScalar(Math.max(.001, pop(t, P(cur) + .1, .4)));
      groups.forEach((list, gi) => list.forEach((g, j) => { const s = gi === cur ? pop(t, P(gi) + .5 + j * .5) * (1 - ease(pr(t, SEGEND(gi) - .3, .3))) : 0; show(g, s); g.rotation.y = Math.sin(t * 1.3 + j) * .35; g.children[0].rotation.x = gi === 3 ? 0 : .25; }));
      const sp = SEGP(t, 5), n = letters.length;
      letters.forEach((b, i) => show(b, cur >= 5 ? pop(t, P(5) + 1.0 + (i < 5 ? i : i + 1.4) * Math.max(.35, (SEGEND(5) - P(5) - 2) / 13)) : 0));
    };
  },
  story() {
    const book = board(7.6, 2.0, T('Our School', 'Our School\nትምህርት ቤታችን'), { size: 120, color: '#fff3c4' }); book.position.set(0, 8.4, 0); root.add(book);
    const river = new THREE.Group(); river.position.set(0, .2, -6); root.add(river);
    river.add(part(new THREE.BoxGeometry(30, .06, 2.4), mat('#4fb3e8', { roughness: .2, emissive: '#2a8fd0', emissiveIntensity: .2 })));
    const waves = []; for (let i = 0; i < 18; i++) { const w = part(new THREE.BoxGeometry(.8, .05, .08), mat('#ffffff', { emissive: '#ffffff', emissiveIntensity: .5 }), -14 + i * 1.7, .06, (i % 3 - 1) * .6); river.add(w); waves.push(w); }
    const rl = label(T('river', 'river · ወንዝ'), .6, { color: '#ffffff', size: 90, bg: '#2a8fd0', pad: 20, radius: 30 }); rl.position.set(-7.5, 1.4, -5.5); root.add(rl);
    const school = MODELS.school(); school.position.set(-1.0, .25, -3.4); root.add(school);
    const gate = MODELS.gate(); gate.position.set(-1.0, .25, .2); gate.scale.setScalar(.85); root.add(gate);
    const cafe = MODELS.cafe(); cafe.position.set(4.6, .25, -1.5); cafe.scale.setScalar(.75); root.add(cafe);
    const g3 = block(2.2, 1.0, .4, C.purple, 'Grade 3', { size: 100 }); g3.position.set(-5.6, 5.0, 0); root.add(g3);
    const sun = sun3d(.9); sun.position.set(-7.2, 7.4, -3); root.add(sun);
    const tue = block(3.0, 1.6, .4, C.blue, 'Tuesday\n' + T('library', 'library · ቤተ መጻሕፍት'), { size: 90, th: 1.3 }); tue.position.set(-4.4, 5.6, .5); root.add(tue);
    const lib = MODELS.library(); lib.position.set(-4.6, .25, -1.0); lib.scale.setScalar(.75); root.add(lib);
    const leaves = []; for (let i = 0; i < 6; i++) { const l = part(SPH(.35), mat(i % 2 ? '#4f9d69' : '#7cc46b'), 0, 0, 0, 1.6, .5, .15); const s2 = part(SPH(.14), M('#8a5a34'), 0, 0, 0, 1.2, .8, .8); const g = new THREE.Group(); g.add(i < 4 ? l : s2); g.position.set(2.6 + (i % 3) * 1.1, 5.4 + Math.floor(i / 3) * .9, .5); root.add(g); leaves.push(g); }
    const ll = label(T('seeds and leaves', 'seeds and leaves · ዘርና ቅጠል'), .55, { color: C.ink, size: 90, bg: '#ffffff', pad: 20, radius: 30 }); ll.position.set(3.7, 4.4, .6); root.add(ll);
    const heart = heart3d(); heart.position.set(0, 5.6, .5); root.add(heart);
    const kind = label(T('kind teachers', 'kind teachers · ደግ መምህራን'), .7, { color: '#ffffff', size: 100, bg: '#ef4b6c', pad: 26, radius: 40 }); kind.position.set(0, 3.9, .8); root.add(kind);
    const q = board(9.4, 1.6, 'What colour is the gate?', { size: 110, color: '#ffffff' }); q.position.set(0, 8.3, .4); root.add(q);
    const ans = block(3.2, 1.2, .5, '#2f9a4f', 'green ✓', { size: 120 }); ans.position.set(0, 6.4, 1); root.add(ans);
    const conf = confetti(60, 9);
    return t => {
      camTo(0, 5.4, 19.5, 0, 4.4, 0);
      kokeb.position.set(9.9, 8.7, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      const aT = P(5) + (SEGEND(5) - P(5)) * .62;
      show(book, pop(t, .3) * (1 - ease(pr(t, P(1) - .2, .3))));
      waves.forEach((w, i) => w.position.x = ((-14 + i * 1.7 + t * .8) % 30 + 30) % 30 - 15);
      show(river, pop(t, P(1) + .3)); show(rl, pop(t, P(1) + .8) * (t < P(3) ? 1 : 0));
      show(school, pop(t, P(1) + 1.0)); show(gate, pop(t, P(1) + 1.6)); show(cafe, pop(t, P(1) + 2.4)); show(g3, pop(t, P(1) + .5) * (1 - ease(pr(t, P(2) - .3, .3))));
      const gb = t > aT ? Math.abs(Math.sin((t - aT) * 5)) * .3 : 0; gate.position.y = .25 + gb;
      show(sun, pop(t, P(2)) * (1 - ease(pr(t, P(3) - .2, .3)))); sun.rotation.z = t * .5; sun.position.y = 6.4 + ease(pr(t, P(2), 2)) * 1.2;
      show(tue, pop(t, P(3) + .4) * (1 - ease(pr(t, P(4) - .3, .3)))); show(lib, pop(t, P(3) + .2));
      leaves.forEach((l, i) => { show(l, pop(t, (P(3) + SEGEND(3)) / 2 + i * .15) * (1 - ease(pr(t, P(4) - .3, .3)))); l.rotation.z = Math.sin(t * 2 + i) * .3; });
      show(ll, pop(t, (P(3) + SEGEND(3)) / 2 + .5) * (1 - ease(pr(t, P(4) - .3, .3))));
      show(heart, pop(t, P(4) + .3) * (1 - ease(pr(t, P(5) - .3, .3))) * (1 + Math.max(0, Math.sin(t * 6)) * .1)); heart.rotation.y = Math.sin(t * 1.5) * .3;
      show(kind, pop(t, P(4) + .8) * (1 - ease(pr(t, P(5) - .3, .3))));
      show(q, pop(t, P(5) + .2)); show(ans, pop(t, aT)); conf(t, aT);
    };
  },
  months() {
    const tiles = MONTHS.map((m, i) => { const b = block(2.4, 1.25, .5, COLS[i % 6], m, { size: 92, th: .62, ty: .14 }); const n = label(String(i + 1), .38, { color: '#ffffff', size: 90 }); n.position.set(0, -.38, .27); b.add(n); b.position.set(-6.25 + (i % 6) * 2.5, i < 6 ? 6.5 : 4.6, 0); root.add(b); return b; });
    const head = board(8.4, 1.4, '12 months = 1 year', { size: 110, color: '#fff3c4' }); head.position.set(0, 8.7, 0); root.add(head);
    const wrong = block(3.6, 1.2, .4, '#c9ced6', 'january ✗', { size: 110, tc: '#7a828e' }); wrong.position.set(-2.6, 2.2, .8); root.add(wrong);
    const right = block(3.6, 1.2, .4, C.green, 'January ✓', { size: 110 }); right.position.set(2.6, 2.2, .8); root.add(right);
    const bigJ = label('J', 2.2, { color: C.red, size: 220, stroke: 18 }); bigJ.position.set(-6.25 - 1.6, 7.4, 1); root.add(bigJ);
    const first = block(2.4, .8, .3, C.ink, T('first', 'first · የመጀመሪያው'), { size: 70 }), last = block(2.4, .8, .3, C.ink, T('last', 'last · የመጨረሻው'), { size: 70 });
    first.position.set(-6.25, 7.65, .6); last.position.set(6.25, 3.45, .6); root.add(first, last);
    return t => {
      camTo(0, 5.2, 19.5, 0, 4.8, 0);
      kokeb.position.set(-10.1, 8.7, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      show(head, pop(t, .4));
      tiles.forEach((b, i) => { const sI = i < 6 ? 1 : 2, j = i % 6, d = Math.max(.3, (SEGEND(sI) - P(sI) - .3) / 6); const s0 = P(sI) + .1 + j * d; show(b, pop(t, s0)); b.position.y = (i < 6 ? 6.5 : 4.6) + (t > s0 && t < s0 + d ? .3 : 0); b.rotation.y = Math.sin(t * 1.1 + i) * .08; });
      show(wrong, pop(t, P(3) + .3) * (1 - ease(pr(t, P(4) - .3, .3)))); show(right, pop(t, P(3) + 1.2) * (1 - ease(pr(t, P(4) - .3, .3))));
      show(bigJ, pop(t, P(3) + 2.0) * (1 - ease(pr(t, P(4) - .3, .3))));
      const h4 = t > P(4); tiles[0].position.z = h4 ? .6 : 0; tiles[11].position.z = h4 ? .6 : 0;
      show(first, pop(t, P(4) + .3)); show(last, pop(t, (P(4) + SEGEND(4)) / 2));
    };
  },
  days() {
    const w = weekWheel(0, 4.9, 3.4);
    const ex = [null, 0, 2];
    return t => {
      camTo(0, 5.2, 19.5, 0, 5.0, 0);
      kokeb.position.set(-10.1, 8.7, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      let cur = 0; for (let i = 0; i < CTX.phases.length; i++) if (t >= P(i) - .2) cur = i;
      const d0 = Math.max(.3, (SEGEND(0) - P(0) - 1.2) / 7);
      let rot = 0; if (cur >= 1) rot = lerp(0, ex[1], 1); if (cur >= 2) rot = lerp(0, 2, ease(pr(t, P(2) - .1, 1.2)));
      w.set(t, rot, i => pop(t, P(0) + 1.0 + i * d0), cur >= 1 ? pop(t, P(1) + .2) : 0);
      w.g.rotation.y = Math.sin(t * .6) * .06;
    };
  },
  quizg() {
    const w = weekWheel(3.4, 4.9, 3.2);
    const q = board(6.6, 2.4, CTX.lang === 'am' ? CTX.data.q + '\n' + CTX.data.qam : CTX.data.q, { size: 100 }); q.position.set(-4.6, 7.2, 0); root.add(q);
    const ring = new THREE.Group(); ring.position.set(-4.6, 3.4, 0); root.add(ring);
    ring.add(part(new THREE.TorusGeometry(1.0, .15, 12, 64), M('#dfe5ee')));
    let arc = null; const nums = [5, 4, 3, 2, 1].map(n => { const l = label(String(n), 1.2, { color: C.red, size: 180 }); l.position.z = .1; ring.add(l); return l; });
    const tEnd = CTX.voiceEnd, td = CTX.data.today;
    return t => {
      camTo(0, 5.2, 19.5, 0, 5.0, 0);
      kokeb.position.set(-10.1, 8.7, 0); kokeb.scale.setScalar(.85); kokeb.update(t, CTX.amp(t));
      w.set(t, td, i => pop(t, .3 + i * .08), pop(t, 1.0)); w.days[(td + 1) % 7].userData.label.visible = false;
      w.days[(td + 1) % 7].userData.body.material.color.set('#c9ced6'); w.tags[0].visible = false;
      show(q, pop(t, .4));
      const c = t - tEnd; show(ring, pop(t, tEnd - .2));
      if (arc) { ring.remove(arc); arc.geometry.dispose(); }
      arc = part(new THREE.TorusGeometry(1.0, .16, 12, 64, Math.max(.001, (1 - clamp(c / 5)) * Math.PI * 2)), M(C.red)); arc.rotation.z = Math.PI / 2; arc.position.z = .05; ring.add(arc);
      nums.forEach((l, i) => l.visible = c >= i && c < i + 1);
    };
  },
  answerg() {
    const w = weekWheel(3.4, 4.9, 3.2), td = CTX.data.today;
    const a = board(6.6, 2.0, CTX.data.a, { size: 110, color: '#e6f4ea' }); a.position.set(-4.6, 6.6, 0); root.add(a);
    const conf = confetti(90, 11);
    return t => {
      camTo(0, 5.2, 19.5, 0, 5.0, 0);
      kokeb.position.set(-10.1, 8.4, 0); kokeb.scale.setScalar(1.0); kokeb.update(t, CTX.amp(t), { jump: Math.abs(Math.sin(t * 5)) * .6 * (t < 2.4 ? 1 : 0) });
      const k = ease(pr(t, .3, 1.2)); w.set(t, td, () => 1, 1); w.tags[0].visible = false;
      const sat = w.days[(td + 1) % 7]; sat.position.z = .2 + k * .8; sat.scale.setScalar(1 + Math.abs(Math.sin(t * 4)) * .12 * (t < 3 ? 1 : 0));
      show(a, pop(t, .5)); conf(t, .2);
    };
  },
  ethcal() {
    const tiles = ETH_MONTHS.map(([am, en], i) => { const pg = i === 12; const b = block(2.0, 1.55, .5, pg ? C.orange : COLS[(i + 1) % 6], am + '\n' + en, { size: 72, th: 1.0, ty: .18 }); const d = block(.95, .5, .2, '#ffffff', pg ? '5/6' : '30', { size: 80, tc: C.ink }); d.position.set(0, -.52, .35); d.name = 'days'; b.add(d); b.position.set(i < 7 ? -6.3 + i * 2.1 : -5.25 + (i - 7) * 2.1, i < 7 ? 6.6 : 3.9, 0); root.add(b); return b; });
    const head = board(7.6, 1.4, T('13 months!', '13 ወራት!'), { size: 120, color: '#fff3c4' }); head.position.set(0, 8.9, 0); root.add(head);
    const pag = block(5.4, 1.1, .4, C.orange, T('Pagume: 5 days (6 every 4th year)', 'ጳጉሜ፦ 5 ቀን (በ4 ዓመት 6)'), { size: 80 }); pag.position.set(3.6, 1.9, .8); root.add(pag);
    const fl = []; for (let i = 0; i < 10; i++) { const f = flower(.7); const a = i / 10 * Math.PI * 2; f.userData.a = a; root.add(f); fl.push(f); }
    const ny = block(4.6, 1.0, .4, '#e0a100', T('New Year · Enkutatash', 'አዲስ ዓመት · እንቁጣጣሽ'), { size: 80 }); ny.position.set(-3.0, 9.0, .6); root.add(ny);
    const rain = cloud3d(.75, true); rain.position.set(1.05, 5.45, 1.5); root.add(rain);
    const drops = []; for (let i = 0; i < 16; i++) { const d = part(SPH(.06), mat('#58b4ff', { emissive: '#58b4ff', emissiveIntensity: .4 }), 0, 0, 0, 1, 2.2, 1); d.userData.p = [(i % 8) * .5 - 1.9, i * .37]; root.add(d); drops.push(d); }
    const sun = sun3d(.75); sun.position.set(-2.1, 8.4, .8); root.add(sun);
    const wheat = []; for (let i = 0; i < 4; i++) { const g = new THREE.Group(); g.add(part(CYL(.03, .03, .9), M('#c9a23a'), 0, .45, 0), part(SPH(.12), M('#e3b448'), 0, .95, 0, .7, 1.8, .7)); g.position.set(-4.2 + i * 2.1, 7.4, .1); root.add(g); wheat.push(g); }
    const lab = [block(5.0, .9, .3, '#4a7fc1', T('June – August: rain', 'ሰኔ – ነሐሴ፦ ዝናብ'), { size: 70 }), block(6.4, .9, .3, '#e0a100', T('October – January: sunny, harvest', 'ጥቅምት – ጥር፦ ፀሐይ፣ መከር'), { size: 70 })];
    lab[0].position.set(4.2, 1.9, .9); lab[1].position.set(-3.6, 1.9, .9); root.add(...lab);
    return t => {
      camTo(0, 5.2, 19.5, 0, 5.0, 0);
      kokeb.position.set(9.9, 8.9, 0); kokeb.scale.setScalar(.8); kokeb.update(t, CTX.amp(t));
      show(head, pop(t, .3) * (1 - ease(pr(t, P(3) - .3, .3))));
      const d0 = Math.max(.2, (SEGEND(0) - P(0) - 1) / 13);
      tiles.forEach((b, i) => { show(b, pop(t, P(0) + .6 + i * d0)); const dd = b.getObjectByName('days'); show(dd, i === 12 ? pop(t, P(2) + .3) : pop(t, P(1) + .3 + i * .12)); b.rotation.y = Math.sin(t + i) * .06; });
      const pg = tiles[12]; pg.position.y = 3.9 + (t > P(2) && t < SEGEND(2) ? Math.abs(Math.sin((t - P(2)) * 5)) * .4 : 0);
      show(pag, pop(t, P(2) + .8) * (1 - ease(pr(t, P(3) - .3, .3))));
      const m0 = tiles[0], ns = t > P(3); m0.position.z = ns ? .7 : 0; m0.userData.body.material.emissive = new THREE.Color('#ffd000'); m0.userData.body.material.emissiveIntensity = ns && t < P(4) ? .4 + Math.sin(t * 6) * .15 : 0;
      fl.forEach((f, i) => { const a = f.userData.a + t * .5; f.position.set(m0.position.x + Math.cos(a) * 1.35, 6.6 + Math.sin(a) * 1.15, -.5); show(f, pop(t, P(3) + .4 + i * .08) * (1 - ease(pr(t, P(4) - .2, .4)))); });
      show(ny, pop(t, P(3) + 1) * (1 - ease(pr(t, P(4) - .3, .3))));
      const s4 = t > P(4) - .2;
      [9, 10, 11].forEach(i => { tiles[i].userData.body.material.emissive = new THREE.Color('#2a8fd0'); tiles[i].userData.body.material.emissiveIntensity = s4 ? .35 : 0; });
      [1, 2, 3, 4].forEach(i => { tiles[i].userData.body.material.emissive = new THREE.Color('#ffb300'); tiles[i].userData.body.material.emissiveIntensity = s4 && t > (P(4) + SEGEND(4)) / 2 ? .35 : 0; });
      show(rain, pop(t, P(4) + .3)); drops.forEach(d => { const [x, ph] = d.userData.p; const y = 5.0 - ((t * 1.6 + ph) % 1.4); d.position.set(rain.position.x + x, y, 1.3); d.visible = t > P(4) + .5; });
      const half = (P(4) + SEGEND(4)) / 2; show(sun, pop(t, half)); sun.rotation.z = t * .6;
      wheat.forEach((w, i) => { show(w, pop(t, half + .4 + i * .15)); w.rotation.z = Math.sin(t * 2 + i) * .15; });
      show(lab[0], pop(t, P(4) + .6) * (1 - ease(pr(t, half, .3)))); show(lab[1], pop(t, half + .3));
    };
  },
  recapg() {
    const cards = [
      [T('My School', 'My School · ትምህርት ቤቴ'), 'gate · library · laboratory\nhall · café · rest-room', C.green],
      [T('Months and days', 'ወራትና ቀናት'), T('12 months = 1 year · 7 days = 1 week\nCapital letters: January, Monday', '12 ወራት = 1 ዓመት · 7 ቀናት = 1 ሳምንት\nትልቅ ፊደል፦ January, Monday'), C.blue],
      [T('Ethiopian calendar', 'የኢትዮጵያ ዘመን አቆጣጠር'), T('13 months · New Year in September', '13 ወራት · አዲስ ዓመት በመስከረም'), C.orange]
    ].map(([h, b, col], i) => { const g = new THREE.Group(); const c = board(11.2, 2.0, h + '\n' + b, { size: 74, color: '#ffffff' }); g.add(c); const strip = new THREE.Mesh(new RoundedBoxGeometry(.35, 2.0, .34, 3, .1), mat(col)); strip.position.x = -5.6; g.add(strip); g.position.set(0, 8.4 - i * 2.35, 0); root.add(g); return g; });
    const end = new THREE.Group(); end.position.set(1.6, 6.2, 1.2); root.add(end);
    const brand = board(9.5, 2.0, 'AMBKidsJoy', { size: 160, color: '#ffffff', tc: C.blue }); end.add(brand);
    const sub = block(5.2, 1.4, .5, '#e62117', T('▶ Subscribe', '▶ ሰብስክራይብ'), { size: 120 }); sub.position.set(0, -2.1, .2); end.add(sub);
    const conf = confetti(80, 13);
    return t => {
      camTo(0, 5.1, 19, 0, 4.8, 0);
      const fin = t > P(3) - .3;
      kokeb.position.set(fin ? -5.2 : 10.2, fin ? 6.4 : 9.0, 0); kokeb.scale.setScalar(fin ? 1.4 : .75);
      kokeb.update(t, CTX.amp(t), { wave: t > CTX.voiceEnd - 2.5, jump: fin ? Math.abs(Math.sin(t * 3)) * .25 : 0 });
      const out = ease(pr(t, P(3) - .3, .5));
      cards.forEach((c, i) => { show(c, pop(t, P(i) + .3) * (1 - out)); c.rotation.y = Math.sin(t + i) * .04; });
      show(end, pop(t, P(3))); sub.scale.setScalar(1 + Math.max(0, Math.sin(t * 5)) * .06 * (t > P(3) + .5 ? 1 : 0));
      conf(t, CTX.voiceEnd - 2.5);
    };
  },
});

// ---------- API used by the node driver ----------
window.setupScene = (ctx) => {
  CTX = ctx; for (const c of [...root.children]) root.remove(c);
  const amp = ctx.ampArr; CTX.amp = t => { const i = Math.floor((t - ctx.voiceStart) * 30); return i >= 0 && i < amp.length ? amp[i] : 0; };
  CTX.phases = ctx.phases;
  S = SCENES[ctx.kind](); CHOREO = choreo(ctx.kind);
  setHudTex(hudChip, ctx.chip, { size: 64, weight: 700, color: '#ffffff', bg: 'rgba(29,43,83,.82)', pad: 26, radius: 40, hpx: 64 }, 40, H - 62);
  setHudTex(hudBrand, 'AMBKidsJoy', { size: 64, weight: 800, color: C.blue, bg: 'rgba(255,255,255,.88)', pad: 22, radius: 40, hpx: 60 }, W - 40, H - 62, 'right');
  capText = undefined; setCaption(null);
  return true;
};
window.renderAt = (t) => {
  const clouds = scene.getObjectByName('clouds'); clouds.children.forEach(c => { c.position.x = ((c.position.x + 40 + c.userData.v / 30) % 80) - 40; });
  S(t); kidsUpdate(t); animalsUpdate(t); lyrics(t);
  const cap = CTX.song && t >= CTX.song.start - .1 ? null : CTX.caps.find(c => t >= c.t0 && t < c.t1); setCaption(cap ? cap.text : null);
  const f = Math.min(clamp(t / .3), clamp((CTX.dur - t) / .3)); fade.material.opacity = (1 - f) * (CTX.fadeIn || t > 1 ? 1 : 0);
  renderer.clear(); renderer.render(scene, camera); renderer.clearDepth(); if (!CTX.noHud) renderer.render(hud, hudCam);
  return renderer.domElement.toDataURL(CTX.noHud ? 'image/png' : 'image/jpeg', .92);
};
window.wrapText = wrap;
window.renderOnly = (t) => { S(t); renderer.clear(); renderer.render(scene, camera); renderer.clearDepth(); renderer.render(hud, hudCam); renderer.getContext().finish(); };
window.READY = true;
