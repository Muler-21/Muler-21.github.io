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
  return P;
}
let CHOREO = null;
function kidsUpdate(t) {
  if (!CHOREO) { saba.visible = dawit.visible = false; bubbles.forEach(b => b.visible = false); return; }
  [saba, dawit].forEach((kid, i) => {
    const c = CHOREO.kids[i]; kid.visible = !!c; bubbles[i].visible = false; if (!c) return;
    const inner = c.x < 0 ? 1 : -1;
    kid.position.set(c.x, 0, c.z ?? 3.4); kid.scale.setScalar(c.s ?? 1); kid.rotation.y = (c.turn ?? .32) * inner + Math.sin(t * .7 + i) * .04;
    const acts = (CHOREO.acts || []).filter(a => a.k === i && t >= a.t0 && t < a.t0 + a.d);
    const a = acts[acts.length - 1];
    const id = pose('idle', t + i, inner).idle; let tgt = id, wgt = 0;
    if (a) { tgt = pose(a.a, t - a.t0, inner).x; wgt = Math.min(clamp((t - a.t0) / .3), clamp((a.t0 + a.d - t) / .3)); }
    const v = id.map((x, j) => lerp(x, tgt[j], ease(wgt)));
    const u = kid.userData; const [L, R] = u.arms;
    L.rotation.set(-v[1], 0, -v[0]); R.rotation.set(-v[3], 0, v[2]);
    u.body.position.y = v[4] + Math.sin(t * 2.4 + i) * .02; u.head.rotation.z = v[5];
    u.head.rotation.x = a && a.a === 'nod' ? Math.sin((t - a.t0) * 9) * .18 : Math.sin(t * .9 + i) * .03;
    u.head.rotation.y = a && (a.a === 'point' || a.a === 'think') ? .25 * inner : 0;
    const bl = ((t + i * 1.7) % 4.1) < .12 ? .1 : 1; u.eyes.forEach(e => e.scale.y = bl);
    const b = (CHOREO.bubbles || []).filter(x => x.k === i && t >= x.t0 && t < x.t0 + x.d).pop();
    if (b) { setBubble(i, b.text); const g = bubbles[i]; g.visible = true; const p = pop(t, b.t0, .45) * Math.min(1, clamp((b.t0 + b.d - t) / .25));
      g.scale.setScalar(Math.max(p, .001) * (c.s ?? 1)); g.position.set(c.x + inner * 1.3 * (c.s ?? 1), 4.15 * (c.s ?? 1) + v[4], (c.z ?? 3.4) + .2); }
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
  intro() {
    const title = board(9.4, 3.4, CTX.story.title[CTX.lang] + '\n ', { size: 150 }); title.position.set(3.4, 6.2, 0); root.add(title);
    const sub = label(CTX.story.subtitle[CTX.lang], .7, { color: C.blue, size: 90 }); sub.position.set(3.4, 5.25, .2); root.add(sub);
    const icons = ['645,021', '7 < 9', '≈ 8,300', '፴፭'].map((s, i) => { const b = block(2.4, 1.4, .7, COLS[i + 1], s, { size: 120 }); b.position.set(-1.0 + i * 2.9, 2.2, 0); root.add(b); return b; });
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
  S(t); kidsUpdate(t);
  const cap = CTX.caps.find(c => t >= c.t0 && t < c.t1); setCaption(cap ? cap.text : null);
  const f = Math.min(clamp(t / .3), clamp((CTX.dur - t) / .3)); fade.material.opacity = (1 - f) * (CTX.fadeIn || t > 1 ? 1 : 0);
  renderer.clear(); renderer.render(scene, camera); renderer.clearDepth(); renderer.render(hud, hudCam);
  return renderer.domElement.toDataURL('image/jpeg', .92);
};
window.wrapText = wrap;
window.renderOnly = (t) => { S(t); renderer.clear(); renderer.render(scene, camera); renderer.clearDepth(); renderer.render(hud, hudCam); renderer.getContext().finish(); };
window.READY = true;
