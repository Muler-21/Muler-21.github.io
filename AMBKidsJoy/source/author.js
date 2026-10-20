/* AMBKidsJoy — author & channel card, added to the bottom of every page. */
(function(){
const YT='https://www.youtube.com/@kidseducation9276';
const GH='https://muler-21.github.io/';
const T={
 by:{en:'Created by',am:'አዘጋጅ'},
 name:'Mulusew Kassa Bitew (PhD)',
 role:{en:'Founder of AMBKidsJoy · Researcher and educator',am:'የAMBKidsJoy መሥራች · ተመራማሪና መምህር'},
 bio:{en:'Dr. Mulusew Kassa Bitew holds a PhD in Agricultural Technologies and Biotechnologies from the University of Molise (Italy) and an MSc from Wageningen University (the Netherlands). He is a Postdoctoral Research Fellow in the area of MultiOmics at the University of Molise, was a fellow at ILRI in Addis Ababa, and taught at Debre Markos and Mekelle Universities. He created AMBKidsJoy so that every child can learn with joy, think sharply and grow up to build Ethiopia.',
      am:'ዶ/ር ሙሉሰው ካሳ ቢተው ከጣሊያን ሞሊዜ ዩኒቨርሲቲ በግብርና ቴክኖሎጂና ባዮቴክኖሎጂ የዶክትሬት (PhD) ዲግሪ፣ ከኔዘርላንድስ ዋገኒንገን ዩኒቨርሲቲ ደግሞ የማስተርስ ዲግሪ አላቸው። በሞሊዜ ዩኒቨርሲቲ በመልቲኦሚክስ (MultiOmics) ዘርፍ የድህረ ዶክትሬት ተመራማሪ (Postdoctoral Research Fellow) ናቸው፤ በአዲስ አበባ በILRI ፌሎው ነበሩ፤ በደብረ ማርቆስና በመቐለ ዩኒቨርሲቲዎች አስተምረዋል። እያንዳንዱ ልጅ በደስታ እንዲማር፣ በብልሃት እንዲያስብና ኢትዮጵያን እንዲገነባ AMBKidsJoyን አዘጋጁ።'},
 yt:{en:'Watch our lessons on YouTube',am:'ትምህርቶቻችንን በዩቲዩብ ይመልከቱ'},
 gh:{en:'GitHub',am:'GitHub'}};
const css=`.amb-author{max-width:1040px;margin:22px auto 0;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:start;padding:16px 18px;border-radius:20px;background:var(--surface,#fff);border:2px solid var(--line,#D3DDEB);color:var(--ink,#1B2A4A);font-family:var(--body,system-ui,sans-serif);box-sizing:border-box}
.amb-author .av{width:64px;height:64px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#1E8A5B,#2F6FDE);color:#fff;font-family:var(--display,system-ui);font-weight:800;font-size:1.4rem}
.amb-author .k{font-size:.78rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-soft,#4F5F7E)}
.amb-author h2{margin:2px 0 0;font-family:var(--display,system-ui);font-size:1.25rem;line-height:1.2}
.amb-author .role{margin:2px 0 6px;font-weight:700;color:var(--ink-soft,#4F5F7E);font-size:.95rem}
.amb-author p.bio{margin:0 0 10px;font-size:.95rem;line-height:1.55}
.amb-author .links{display:flex;flex-wrap:wrap;gap:8px}
.amb-author .links a{display:inline-flex;align-items:center;gap:6px;padding:7px 14px;border-radius:999px;text-decoration:none;font-weight:700;font-size:.92rem;border:2px solid var(--line,#D3DDEB);color:var(--ink,#1B2A4A)}
.amb-author .links a.yt{background:#D9302B;border-color:#D9302B;color:#fff}
@media (max-width:520px){.amb-author{grid-template-columns:1fr}}`;
function lang(){const l=document.documentElement.lang;return l==='en'?'en':'am'}
function tx(o){return typeof o==='string'?o:o[lang()]}
function render(){let el=document.getElementById('amb-author');
 if(!el){el=document.createElement('aside');el.id='amb-author';el.className='amb-author';el.setAttribute('aria-label','Author');document.body.appendChild(el)}
 el.innerHTML=`<div class="av" aria-hidden="true">MK</div><div><div class="k">AMBKidsJoy · ${tx(T.by)}</div><h2>${T.name}</h2><div class="role">${tx(T.role)}</div><p class="bio">${tx(T.bio)}</p>
  <div class="links"><a class="yt" href="${YT}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="1" y="4" width="22" height="16" rx="5" fill="#fff"/><path d="M10 8.5v7l6-3.5z" fill="#D9302B"/></svg>${tx(T.yt)}</a><a href="${GH}" target="_blank" rel="noopener">${tx(T.gh)}</a></div></div>`}
function init(){const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);render();
 new MutationObserver(render).observe(document.documentElement,{attributes:true,attributeFilter:['lang']})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
