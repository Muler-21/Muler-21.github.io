/* ================= EDIT YOUR CONTENT HERE ================= */
const CONFIG = {
  name: "Mulusew Kassa Bitew",
  short: "Muler",
  email: "myhoby3@gmail.com",           // shown publicly; change if you prefer another address
  orcid: "https://orcid.org/0000-0001-6223-0037",
  github: "https://github.com/Muler-21",
  location: "Campobasso, Italy"
};

/* url: link to the running app. live:false shows "Soon" and no button. */
const APPS = [
  { icon:"🤖", title:"AI Genomics MVP", tag:"Genomics", color:"#14c9a4", live:true,
    desc:"Streamlit app that summarizes research papers and helps interpret genomic data.",
    url:"https://github.com/Muler-21/ai-genomics-mvp" },
  { icon:"🧬", title:"Genomic Prediction Explorer (GBLUP)", tag:"Quantitative Genetics", color:"#1ea7e8", live:false,
    desc:"Planned: compare GBLUP and Bayesian genomic prediction on your own SNP data.", url:"" },
  { icon:"📈", title:"Selection Signature Viewer", tag:"Population Genomics", color:"#a855f7", live:false,
    desc:"Planned: browse selection scans and candidate regions along the genome.", url:"" },
  { icon:"🌍", title:"Genome–Environment Association Map", tag:"Climate", color:"#ef4444", live:false,
    desc:"Planned: link allele frequencies to climate variables across populations.", url:"" }
];

const POSTS = [
  { date:"Planned", title:"What ABC-RF can and cannot tell you about admixture timing", tag:"Methods",
    desc:"A practical walk-through of using Approximate Bayesian Computation with Random Forest for demographic inference.", url:"" },
  { date:"Planned", title:"Reading selection signatures in African cattle", tag:"Genomics",
    desc:"How selection scans connect to environmental resilience, and where interpretation gets tricky.", url:"" }
];

const PATH = [
  { cc:"IT", place:"University of Molise", role:"Research Fellow, multi-omic adaptive response in ruminants", yr:"2026 – now", now:true },
  { cc:"ET", place:"ILRI, Addis Ababa", role:"Research Fellow, African cattle genomics", yr:"2024 – 25" },
  { cc:"IT", place:"University of Molise", role:"PhD, Agricultural Technologies and Biotechnologies", yr:"2022 – 26" },
  { cc:"ET", place:"Debre Markos University", role:"Lecturer and researcher", yr:"2014 – 22" },
  { cc:"NL", place:"Wageningen University & Research", role:"MSc, Plant Breeding and Genetic Resources", yr:"2012 – 14" },
  { cc:"ET", place:"Mekelle University", role:"Lecturer", yr:"2010 – 12" },
  { cc:"ET", place:"Aksum University", role:"BSc, Plant Science and Protection", yr:"2008 – 10" }
];

/* ================= SHARED LAYOUT ================= */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const page = document.body.dataset.page;
const NAV = [["home","index.html","Home"],["about","about.html","About"],["research","research.html","Research"],
             ["apps","applications.html","Applications"],["blog","blog.html","Blog"],["contact","contact.html","Contact"]];

document.getElementById('nav').outerHTML = `
<header class="nav"><div class="wrap">
  <a class="logo" href="index.html">${esc(CONFIG.short)}<span>.</span></a>
  <nav class="links" id="links" aria-label="Main">
    ${NAV.map(([k,h,t])=>`<a href="${h}" ${k===page?'class="active" aria-current="page"':''}>${t}</a>`).join('')}
  </nav>
  <span><button class="icon-btn" id="theme" aria-label="Toggle light and dark theme">☀</button>
  <button class="icon-btn" id="menu" aria-label="Open menu" aria-expanded="false">☰</button></span>
</div></header>`;

document.getElementById('foot').outerHTML = `
<footer><div class="wrap">
  <a class="logo" href="index.html">${esc(CONFIG.short)}<span>.</span></a>
  <nav aria-label="Footer">${NAV.map(([k,h,t])=>`<a href="${h}">${t}</a>`).join('')}</nav>
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
