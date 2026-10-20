/* AMBKidsJoy — "The chapter in one picture": interactive concept map + key-word flip cards + teacher/parent guide.
   AMBSummary.render(panel, data, ctx)  data: {concept, labels[], points[], words[], exam[], innovate, title}
   ctx: {lang, st (state object), tick(), yay(), done(), rerender()} */
(function(){
const COLS=['#2F6FDE','#1E8A5B','#E59A00','#D9483B','#8A4FBF','#0F8C8C'];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const css=`.sm-hero{display:flex;gap:16px;align-items:center;padding:18px 22px;border-radius:22px;background:linear-gradient(135deg,var(--accent-soft),var(--sun-soft));border:3px solid var(--accent)}
.sm-hero svg{width:72px;height:72px;flex:none}
.sm-tag{display:inline-block;font-family:var(--display);font-weight:800;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;padding:3px 12px;border-radius:999px;background:var(--accent);color:var(--on-accent)}
.sm-big{font-family:var(--display);font-weight:800;font-size:clamp(1.35rem,3.4vw,2rem);line-height:1.2;margin-top:6px}
.sm-map{width:100%;height:auto;display:block}
.sm-map .br{cursor:pointer}
.sm-map .br:focus{outline:none}.sm-map .br:focus-visible rect{stroke-width:5}
.sm-ring{animation:smpulse 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center}
@keyframes smpulse{50%{opacity:.25}}
.sm-tree{display:grid;gap:10px;position:relative;padding-left:22px}
.sm-tree::before{content:"";position:absolute;left:8px;top:6px;bottom:6px;width:4px;border-radius:4px;background:var(--line)}
.sm-node{display:flex;gap:10px;align-items:center;text-align:left;padding:12px 14px;border-radius:16px;border:3px solid var(--c);background:var(--surface);font-family:var(--display);font-weight:700;font-size:1.05rem;position:relative}
.sm-node::before{content:"";position:absolute;left:-17px;top:50%;width:14px;height:4px;background:var(--c)}
.sm-node .k{flex:none;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:var(--c);color:#fff;font-weight:800}
.sm-node.on{background:var(--c);color:#fff}.sm-node.on .k{background:#fff;color:var(--c)}
.sm-center{justify-self:start;padding:10px 18px;border-radius:999px;background:var(--ink);color:var(--bg);font-family:var(--display);font-weight:800;font-size:1.1rem;margin-left:-22px}
.sm-detail{padding:16px 18px;border-radius:18px;border:3px solid var(--c);background:var(--surface);display:flex;gap:14px;align-items:flex-start}
.sm-detail .k{flex:none;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:var(--c);color:#fff;font-family:var(--display);font-weight:800;font-size:1.2rem}
.sm-detail h3{font-size:1.25rem;margin:0 0 4px}.sm-detail p{margin:0;font-size:1.12rem;line-height:1.6}
.sm-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px}
.sm-card{min-height:96px;padding:12px;border-radius:16px;border:2px solid var(--line);background:var(--surface-2);font-family:var(--display);font-weight:800;font-size:1.15rem;display:grid;place-items:center;text-align:center;box-shadow:var(--shadow)}
.sm-card.f{background:var(--accent-soft);border-color:var(--accent);font-weight:600;font-size:1rem;font-family:var(--body)}
.sm-guide{border-radius:18px;border:2px dashed var(--accent);background:var(--surface);padding:4px 18px}
.sm-guide summary{cursor:pointer;font-family:var(--display);font-weight:800;font-size:1.15rem;padding:10px 0;list-style:none}
.sm-guide summary::-webkit-details-marker{display:none}
.sm-guide h4{margin:12px 0 4px;font-family:var(--display);font-size:1.02rem}
.sm-guide ul{margin:0;padding-left:20px;display:grid;gap:4px}
.sm-guide .ans{color:var(--ink-soft);font-size:.95rem}
.sm-done{padding:14px 18px;border-radius:16px;background:var(--green-soft);border:2px solid var(--green);font-weight:700}`;
let styled=false;
function L(o,lang){return o==null?'':typeof o==='string'?o:(o[lang]??o.en)}
function wrap(t,max){const w=String(t).split(/\s+/);const out=[];let cur='';for(const x of w){if((cur+' '+x).trim().length>max&&cur){out.push(cur);cur=x}else cur=(cur+' '+x).trim()}if(cur)out.push(cur);
 if(out.length>3){out.length=3;out[2]=out[2].replace(/\s*\S*$/,'')+'…'}return out}
const KOKEB=`<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="50,8 62.9,36.2 93.7,39.8 70.9,60.8 77,91.2 50,75.9 23,91.2 29.1,60.8 6.3,39.8 37.1,36.2" fill="#F4B400" stroke="#C98F00" stroke-width="3" stroke-linejoin="round"/><circle cx="41" cy="52" r="5" fill="#1B2A4A"/><circle cx="59" cy="52" r="5" fill="#1B2A4A"/><path d="M42 63 Q50 71 58 63" stroke="#1B2A4A" stroke-width="3.5" fill="none" stroke-linecap="round"/></svg>`;
const T={tag:{en:'One big idea',am:'አንድ ዋና ሐሳብ'},
 help:{en:'Tap every branch to light up the map. Each one opens a key point.',am:'ካርታውን ለማብራት እያንዳንዱን ቅርንጫፍ ንኩ። እያንዳንዱ ቁልፍ ነጥብ ይከፍታል።'},
 lit:{en:'Lit up: {a} of {b}',am:'የበሩ፦ {a} ከ{b}'},
 all:{en:'The whole map is lit! Now close your eyes and tell someone the big idea in your own words.',am:'ካርታው በሙሉ በራ! አሁን ዓይናችሁን ጨፍናችሁ ዋናውን ሐሳብ በራሳችሁ ቃላት ለአንድ ሰው ንገሩ።'},
 words:{en:'Key words: tap to flip',am:'ቁልፍ ቃላት፦ ለመገልበጥ ንኩ'},
 guide:{en:'For teachers and parents',am:'ለመምህራንና ለወላጆች'},
 can:{en:'After this chapter, your child can explain:',am:'ከዚህ ምዕራፍ በኋላ ልጃችሁ ማስረዳት ይችላል፦'},
 ask:{en:'Ask your child (answers in grey):',am:'ልጃችሁን ጠይቁ (መልሶቹ በግራጫ)፦'},
 doit:{en:'Do it together at home:',am:'ቤት ውስጥ አብራችሁ ሥሩ፦'},
 tip:{en:'Tip: let your child be the teacher. Ask them to explain this map to you in one minute, and praise good reasons, not only right answers.',am:'ምክር፦ ልጃችሁ መምህር ይሁን። ይህን ካርታ በአንድ ደቂቃ እንዲያስረዳችሁ ጠይቁ፤ ትክክለኛ መልስ ብቻ ሳይሆን ጥሩ ምክንያትንም አመስግኑ።'}};
function fill(s,v){for(const k in v)s=s.split('{'+k+'}').join(v[k]);return s}
function render(p,d,ctx){
 if(!styled){const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);styled=true}
 const lang=ctx.lang,st=ctx.st;st.seen=st.seen||{};st.flip=st.flip||{};
 const n=d.labels.length,seen=Object.keys(st.seen).length,sel=st.sel;
 const title=L(d.title,lang).replace(/\s*\(.*\)\s*$/,'');
 const wide=(p.clientWidth||900)>=600;
 let map;
 if(wide){const W=760,H=440,cx=380,cy=220,rx=n<=3?255:270,ry=n<=3?150:160;
  const pos=d.labels.map((_,i)=>{const a=-Math.PI/2+i*2*Math.PI/n+(n===4?Math.PI/4:0);return[cx+rx*Math.cos(a),cy+ry*Math.sin(a)]});
  const lines=pos.map(([x,y],i)=>`<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="${st.seen[i]?COLS[i%6]:'var(--line)'}" stroke-width="${st.seen[i]?6:4}" ${st.seen[i]?'':'stroke-dasharray="8 8"'} stroke-linecap="round"/>`).join('');
  const ct=wrap(title,14);
  const center=`<circle cx="${cx}" cy="${cy}" r="84" fill="var(--ink)"/><circle cx="${cx}" cy="${cy}" r="92" fill="none" stroke="#F4B400" stroke-width="5" ${seen===n?'':'stroke-dasharray="6 10"'}/>
   ${ct.map((l,i)=>`<text x="${cx}" y="${cy+(i-(ct.length-1)/2)*24+8}" text-anchor="middle" font-family="var(--display)" font-weight="800" font-size="21" fill="var(--bg)">${esc(l)}</text>`).join('')}`;
  const nodes=pos.map(([x,y],i)=>{const c=COLS[i%6],on=st.seen[i],lb=wrap(L(d.labels[i],lang),15),w=196,h=lb.length>1?74:58;
   return`<g class="br" data-br="${i}" tabindex="0" role="button" aria-label="${esc(L(d.labels[i],lang))}">
    ${on?'':`<rect class="sm-ring" x="${(x-w/2-7).toFixed(1)}" y="${(y-h/2-7).toFixed(1)}" width="${w+14}" height="${h+14}" rx="22" fill="none" stroke="${c}" stroke-width="3"/>`}
    <rect x="${(x-w/2).toFixed(1)}" y="${(y-h/2).toFixed(1)}" width="${w}" height="${h}" rx="18" fill="${on?c:'var(--surface)'}" stroke="${c}" stroke-width="${sel===i?6:3}"/>
    <circle cx="${(x-w/2+22).toFixed(1)}" cy="${y.toFixed(1)}" r="14" fill="${on?'#fff':c}"/><text x="${(x-w/2+22).toFixed(1)}" y="${(y+6).toFixed(1)}" text-anchor="middle" font-family="var(--display)" font-weight="800" font-size="16" fill="${on?c:'#fff'}">${on?'✓':i+1}</text>
    ${lb.map((l,k)=>`<text x="${(x-w/2+44).toFixed(1)}" y="${(y+(k-(lb.length-1)/2)*20+6).toFixed(1)}" font-family="var(--display)" font-weight="700" font-size="16" fill="${on?'#fff':'var(--ink)'}">${esc(l)}</text>`).join('')}</g>`}).join('');
  map=`<svg class="sm-map" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(L(d.concept,lang))}">${lines}${center}${nodes}</svg>`}
 else{map=`<div class="sm-tree"><div class="sm-center">${esc(title)}</div>${d.labels.map((lb,i)=>`<button class="sm-node ${st.seen[i]?'on':''}" style="--c:${COLS[i%6]}" data-br="${i}"><span class="k">${st.seen[i]?'✓':i+1}</span>${esc(L(lb,lang))}</button>`).join('')}</div>`}
 const det=sel!=null?`<div class="sm-detail" style="--c:${COLS[sel%6]}"><span class="k">${sel+1}</span><div><h3>${esc(L(d.labels[sel],lang))}</h3><p>${esc(L(d.points[sel],lang))}</p></div></div>`:'';
 const words=(d.words||[]).length?`<h3 style="margin:0">${L(T.words,lang)}</h3><div class="sm-cards">${d.words.map((w,i)=>`<button class="sm-card ${st.flip[i]?'f':''}" data-fl="${i}">${esc(L(st.flip[i]?w[1]:w[0],lang))}</button>`).join('')}</div>`:'';
 const inv=d.innovate?`<h4>${L(T.doit,lang)}</h4><p style="margin:0"><b>${esc(L(d.innovate.title,lang))}</b> · ${esc(L(d.innovate.text,lang))}</p>`:'';
 const guide=`<details class="sm-guide" ${st.gopen?'open':''}><summary>▸ ${L(T.guide,lang)}</summary>
  <h4>${L(T.can,lang)}</h4><ul>${d.labels.map(l=>`<li>${esc(L(l,lang))}</li>`).join('')}</ul>
  ${(d.exam||[]).length?`<h4>${L(T.ask,lang)}</h4><ul>${d.exam.slice(0,3).map(q=>`<li>${esc(L(q[0],lang))} <span class="ans">→ ${esc(L(q[1],lang))}</span></li>`).join('')}</ul>`:''}
  ${inv}<p style="margin:12px 0">${L(T.tip,lang)}</p></details>`;
 p.innerHTML=`<div class="sm-hero">${KOKEB}<div><span class="sm-tag">${L(T.tag,lang)}</span><div class="sm-big">${esc(L(d.concept,lang))}</div></div></div>
  <div class="row" style="justify-content:space-between"><span class="sub small" style="margin:0">${L(T.help,lang)}</span><span class="pill">${fill(L(T.lit,lang),{a:seen,b:n})}</span></div>
  ${map}${det}${seen===n?`<div class="sm-done">★ ${L(T.all,lang)}</div>`:''}${words}${guide}`;
 const det2=p.querySelector('details');if(det2)det2.ontoggle=()=>{st.gopen=det2.open};
 const act=el=>{if(el.dataset.br!==undefined){const i=+el.dataset.br;const fresh=!st.seen[i];st.seen[i]=1;st.sel=i;fresh?ctx.yay():ctx.tick();
   if(fresh&&Object.keys(st.seen).length===n)ctx.done();ctx.rerender();return true}
  if(el.dataset.fl!==undefined){st.flip[el.dataset.fl]=!st.flip[el.dataset.fl];ctx.tick();ctx.rerender();return true}};
 p.onclick=e=>{const el=e.target.closest('[data-br],[data-fl]');if(el)act(el)};
 p.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){const el=e.target.closest('[data-br]');if(el){e.preventDefault();act(el)}}};
}
window.AMBSummary={render,COLS};
})();
