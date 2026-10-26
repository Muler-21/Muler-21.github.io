/* ================= EDIT YOUR CONTENT HERE ================= */
const CONFIG = {
  name: "Mulusew Kassa Bitew",
  short: "Muler",
  email: "myhoby3@gmail.com",           // shown publicly; change if you prefer another address
  orcid: "https://orcid.org/0000-0001-6223-0037",
  github: "https://github.com/Muler-21",
  facebook: "https://www.facebook.com/mlo.kmo.btwo",
  youtube: "https://www.youtube.com/@Edu-Sc21",
  tiktok: "https://www.tiktok.com/@mulusew_kb",
  location: "Campobasso, Italy"
};

/* url: link to the running app. live:false shows "Soon" and no button. */
const APPS = [
  { icon:"🌡️", title:"AdaptFit: will it thrive here?", tag:"Climate & Genomics", color:"#14c9a4", live:true,
    desc:"For farmers, breeders and planners. Pick places and a livestock type or crop, get a Good / Watch / Risky verdict from 35 years of climate, test warming and tolerance, and print a one-page brief. Adds climate-model projections, country context, research partners and mapped services for innovators. Phenotype, genome and gene tools for researchers. Open data, no keys.",
    url:"apps/adaptfit/" },
  { icon:"⭐", title:"AMBKidsJoy: Learning Hub, Grades 1 to 8", tag:"Education", color:"#F4B400", live:true,
    desc:"Free, bilingual (Amharic and English) interactive lessons for children, with Kokeb the star as guide. Grades 1 to 4 and Grade 7 are ready now: 257 chapters, a one-picture summary per chapter, experiments, exam practice and Young Innovator challenges. Joyful English (8 levels, Grade 1 to the workplace) has started; more grades are coming. Works on phones and offline.",
    url:"AMBKidsJoy/" }
];

const POSTS = [];

const PATH = [
  { cc:"IT", place:"University of Molise", role:"Postdoctoral Research Fellow (MultiOmics): multi-omic adaptive response in ruminants", yr:"2026 – now", now:true },
  { cc:"ET", place:"ILRI, Addis Ababa", role:"Research Fellow: African cattle genomics, admixture and adaptation", yr:"2024 – 25" },
  { cc:"IT", place:"University of Molise", role:"PhD, Agricultural Technologies and Biotechnologies", yr:"2022 – 26" },
  { cc:"ET", place:"Debre Markos University", role:"Lecturer and researcher", yr:"2014 – 22" },
  { cc:"NL", place:"Wageningen University & Research", role:"MSc, Plant Breeding and Genetic Resources", yr:"2012 – 14" },
  { cc:"ET", place:"Mekelle University", role:"Lecturer", yr:"2010 – 12" },
  { cc:"ET", place:"Aksum University", role:"BSc, Plant Science and Protection", yr:"2008 – 10" }
];

/* ================= SHARED LAYOUT ================= */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const page = document.body.dataset.page;
const NAV = [["home","#home","Home"],["about","#about","About"],["research","#research","Research"],
             ["apps","#applications","Applications"],["contact","#contact","Contact"]];

document.getElementById('nav').outerHTML = `
<header class="nav"><div class="wrap">
  <a class="logo" href="#home">${esc(CONFIG.short)}<span>.</span></a>
  <nav class="links" id="links" aria-label="Main">
    ${NAV.map(([k,h,t])=>`<a href="${h}" data-k="${k}">${t}</a>`).join('')}
  </nav>
  <span><button class="icon-btn" id="theme" aria-label="Toggle light and dark theme">☀</button>
  <button class="icon-btn" id="menu" aria-label="Open menu" aria-expanded="false">☰</button></span>
</div></header>`;

document.getElementById('foot').outerHTML = `
<footer><div class="wrap">
  <a class="logo" href="#home">${esc(CONFIG.short)}<span>.</span></a>
  <nav aria-label="Footer">${NAV.map(([k,h,t])=>`<a href="${h}">${t}</a>`).join('')}</nav>
  <span class="social"><a href="${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a><a href="${CONFIG.youtube}" target="_blank" rel="noopener">YouTube</a><a href="${CONFIG.tiktok}" target="_blank" rel="noopener">TikTok</a></span>
  <span>© ${new Date().getFullYear()} ${esc(CONFIG.name)}</span>
</div></footer>`;

const root = document.documentElement, themeBtn = document.getElementById('theme');
const syncTheme = () => themeBtn.textContent = root.dataset.theme === 'light' ? '☾' : '☀';
syncTheme();
themeBtn.onclick = () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('theme', root.dataset.theme) } catch(e){}
  syncTheme();
};
const menu = document.getElementById('menu'), links = document.getElementById('links');
menu.onclick = () => { const o = links.classList.toggle('open'); menu.setAttribute('aria-expanded', o) };

/* ================= RENDERERS ================= */
const appCard = a => `
<article class="card accent app" style="--c:${a.color}">
  <div class="top"><span class="ico" aria-hidden="true">${a.icon}</span>
    <div class="tags"><span class="tag">${esc(a.tag)}</span><span class="live ${a.live?'':'off'}">● ${a.live?'Live':'Soon'}</span></div></div>
  <h3>${esc(a.title)}</h3><p>${esc(a.desc)}</p>
  ${a.live ? `<a class="open" href="${esc(a.url)}" target="_blank" rel="noopener">Open app →</a>` : ''}
</article>`;

const $ = id => document.getElementById(id);
if ($('path')) $('path').innerHTML = PATH.map(p => `
  <div class="stop ${p.now?'now':''}"><span class="cc">${p.cc}</span><span class="yr">${p.yr}</span>
  <b>${esc(p.place)}</b><span>${esc(p.role)}</span></div>`).join('');

if ($('featured')) $('featured').innerHTML = APPS.slice(0,3).map(appCard).join('');
if ($('appcount')) $('appcount').textContent = APPS.filter(a=>a.live).length;

if ($('apps')) {
  let cur = 'All';
  const draw = () => {
    const tags = ['All', ...new Set(APPS.map(a=>a.tag))];
    $('filters').innerHTML = tags.map(t=>`<button aria-pressed="${t===cur}" data-t="${esc(t)}">${esc(t)}</button>`).join('');
    $('apps').innerHTML = APPS.filter(a=>cur==='All'||a.tag===cur).map(appCard).join('');
  };
  $('filters').onclick = e => { const b = e.target.closest('button'); if(b){ cur = b.dataset.t; draw() } };
  draw();
}

if ($('posts')) $('posts').innerHTML = POSTS.map(p => `
  <article class="card"><div class="tags"><span class="tag">${esc(p.tag)}</span><span class="muted">${esc(p.date)}</span></div>
  <h3 style="margin-top:10px">${p.url?`<a href="${esc(p.url)}">${esc(p.title)}</a>`:esc(p.title)}</h3><p>${esc(p.desc)}</p></article>`).join('');

document.querySelectorAll('[data-email]').forEach(a => { a.href = 'mailto:' + CONFIG.email; a.textContent = a.dataset.email === 'text' ? CONFIG.email : a.textContent });
document.querySelectorAll('[data-link]').forEach(a => { a.href = CONFIG[a.dataset.link] });

const form = $('contact-form');
if (form) form.onsubmit = e => {
  e.preventDefault();
  const d = new FormData(form);
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(d.get('subject')||'Message from your website')}&body=${encodeURIComponent((d.get('message')||'')+'\n\n— '+(d.get('name')||''))}`;
};

/* nav: close mobile menu on click + highlight current section while scrolling */
links.addEventListener('click', e => { if (e.target.closest('a')) { links.classList.remove('open'); menu.setAttribute('aria-expanded', false) } });
const spy = [...document.querySelectorAll('[data-nav]')];
const setActive = () => {
  let cur = spy.length ? spy[0].dataset.nav : '';
  spy.forEach(s => { if (s.getBoundingClientRect().top < 140) cur = s.dataset.nav });
  document.querySelectorAll('.links a').forEach(a => a.classList.toggle('active', a.dataset.k === cur));
};
addEventListener('scroll', setActive, { passive:true }); setActive();
