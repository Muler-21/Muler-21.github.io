/* AMBKidsJoy Learning Hub (Grades 1-8) — shared unit engine.
   A unit page calls Unit.start(config). Each mission has a type:
   quiz | match | sort | order | tapwords | spell | custom
   Text values can be a plain string (same in both languages) or {en:'…', am:'…'}. */
(function(){
'use strict';
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},
             set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const G={lang:store.get('g3-lang','am'),sound:store.get('g3-sound',true)};
const $=s=>document.querySelector(s);
const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function tx(o,v){if(o==null)return'';let s=typeof o==='string'||typeof o==='number'?String(o):(o[G.lang]??o.en??o.am??'');
  if(Array.isArray(s))s=s[Math.floor(Math.random()*s.length)];if(v)for(const k in v)s=s.split('{'+k+'}').join(v[k]);return s}

const UI={
 good:{en:['Great thinking!','Excellent!','You got it!','Super!'],am:['ጎበዝ!','በጣም ጥሩ!','ትክክል ነው!','ድንቅ ነው!']},
 bad:{en:'Not yet. Think again!',am:'ገና ነው። እንደገና አስቡ!'},
 next:{en:'Next',am:'ቀጣይ'},check:{en:'Check',am:'አረጋግጡ'},again:{en:'Try again',am:'እንደገና ሞክሩ'},clear:{en:'Clear',am:'አጥፉ'},undo:{en:'Undo',am:'መልስ'},
 home:{en:'All subjects',am:'ሁሉም ትምህርቶች'},
 soundOn:{en:'Sound on',am:'ድምፅ አለ'},soundOff:{en:'Sound off',am:'ድምፅ የለም'},
 reset:{en:'Start this unit over',am:'ይህን ክፍል እንደገና ጀምሩ'},resetAsk:{en:'Tap again to erase the stars',am:'ኮከቦቹን ለማጥፋት እንደገና ንኩ'},
 done:{en:'Mission complete! You earned a star.',am:'ተልዕኮው ተጠናቀቀ! ኮከብ አገኛችሁ።'},
 winTitle:{en:'Unit complete!',am:'ክፍሉ ተጠናቀቀ!'},
 winText:{en:'You collected every star in this unit. Go back to All subjects and pick your next adventure.',am:'በዚህ ክፍል ያሉትን ኮከቦች ሁሉ ሰበሰባችሁ። ወደ ሁሉም ትምህርቶች ተመልሳችሁ ቀጣዩን ጀብዱ ምረጡ።'},
 item:{en:'Question {i} of {n}',am:'ጥያቄ {i} ከ{n}'},round:{en:'Round {i} of {n}',am:'ዙር {i} ከ{n}'},
 sortLeft:{en:'Cards left: {n}',am:'የቀሩ ካርዶች፦ {n}'},
 matchHelp:{en:'Tap a card on the left, then its partner on the right.',am:'በግራ አንድ ካርድ፣ ከዚያ በቀኝ አቻውን ንኩ።'},
 orderHelp:{en:'Tap the cards in the right order. Tap a placed card to take it back.',am:'ካርዶቹን በትክክለኛው ቅደም ተከተል ንኩ። የተቀመጠ ካርድ ለመመለስ ንኩት።'},
 tapHelp:{en:'Tap every word that should change, then Check.',am:'መለወጥ ያለባቸውን ቃላት ሁሉ ንኩ፤ ከዚያ አረጋግጡ።'},
 spellHelp:{en:'Tap the missing letters in order.',am:'የጎደሉትን ፊደላት በቅደም ተከተል ንኩ።'},
 listen:{en:'Listen',am:'አዳምጡ'},
 allDone:{en:'You finished this mission. Pick another one from the map!',am:'ይህን ተልዕኮ ጨርሳችኋል። ከካርታው ሌላ ምረጡ!'},
 playAgain:{en:'Play again',am:'እንደገና ተጫወቱ'},
 notesTitle:{en:'Take-home notes',am:'የቤት ማስታወሻ'},
 notesTip:{en:'Read these notes with your family. Can you answer every exam question without looking? Then try the Young Innovator challenge: great thinkers turn what they learn into ideas that help people.',am:'እነዚህን ማስታወሻዎች ከቤተሰባችሁ ጋር አንብቡ። ሳታዩ እያንዳንዱን የፈተና ጥያቄ መመለስ ትችላላችሁ? ከዚያ የወጣት ፈጣሪ ፈተናውን ሞክሩ፦ ታላላቅ አሳቢዎች የተማሩትን ሰዎችን ወደሚረዳ ሐሳብ ይቀይራሉ።'},
 examTitle:{en:'Exam practice',am:'የፈተና ዝግጅት'},
 examTip:{en:'This is like a real exam. Read each question twice. Answer first in your head, then choose. Every answer comes with a reason.',am:'ይህ እንደ እውነተኛ ፈተና ነው። እያንዳንዱን ጥያቄ ሁለት ጊዜ አንብቡ። መጀመሪያ በአእምሯችሁ መልሱ፤ ከዚያ ምረጡ። እያንዳንዱ መልስ ምክንያት አለው።'},
 nBig:{en:'Big idea',am:'ዋና ሐሳብ'},nPoints:{en:'Key points',am:'ቁልፍ ነጥቦች'},nWords:{en:'Key words',am:'ቁልፍ ቃላት'},nRemember:{en:'Remember',am:'አስታውሱ'},
 nExam:{en:'Exam ready? Check yourself',am:'ለፈተና ዝግጁ ናችሁ? ራሳችሁን ፈትሹ'},nExamHelp:{en:'Say your answer aloud first, then tap to see if you were right.',am:'መጀመሪያ መልሳችሁን ጮክ ብላችሁ ተናገሩ፤ ከዚያ ትክክል መሆናችሁን ለማየት ንኩ።'},
 nShow:{en:'Show answer',am:'መልሱን አሳይ'},nInnov:{en:'Young innovator challenge',am:'የወጣት ፈጣሪ ፈተና'},
 nGot:{en:'I can explain this chapter',am:'ይህን ምዕራፍ ማስረዳት እችላለሁ'},nDone:{en:'Well done! Teach it to someone at home today.',am:'ጎበዝ! ዛሬ ቤት ውስጥ ላለ ሰው አስተምሩት።'}
};

/* ---------- sound & speech ---------- */
let AC=null;
function tone(fr,dur=.12,type='triangle',vol=.18){if(!G.sound)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();
  fr.forEach((f,i)=>{const o=AC.createOscillator(),g=AC.createGain(),t0=AC.currentTime+i*dur;o.type=type;o.frequency.value=f;
   g.gain.setValueAtTime(.0001,t0);g.gain.exponentialRampToValueAtTime(vol,t0+.02);g.gain.exponentialRampToValueAtTime(.0001,t0+dur*1.6);
   o.connect(g);g.connect(AC.destination);o.start(t0);o.stop(t0+dur*2)})}catch(e){}}
const S={yay:()=>tone([523,659,784]),nope:()=>tone([300,240],.15),tick:()=>tone([700],.05),fanfare:()=>tone([523,659,784,1047,784,1047],.13),tone};
function say(text,lang){try{const u=new SpeechSynthesisUtterance(text);u.lang=lang||'en-US';u.rate=.85;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
const SPEAK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>';
const sayBtn=(text,lang)=>`<button class="say" data-say="${esc(text)}" data-lang="${lang||'en-US'}" aria-label="Listen">${SPEAK}</button>`;
document.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b){e.stopPropagation();say(b.dataset.say,b.dataset.lang)}},true);

function starPoints(cx,cy,R,r){let p=[];for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r:R;p.push((cx+rr*Math.cos(a)).toFixed(1)+','+(cy+rr*Math.sin(a)).toFixed(1))}return p.join(' ')}
const KOKEB=`<polygon points="${starPoints(50,54,46,22)}" fill="#F4B400" stroke="#C98F00" stroke-width="3" stroke-linejoin="round"/>
<circle cx="41" cy="52" r="5" fill="#1B2A4A"/><circle cx="59" cy="52" r="5" fill="#1B2A4A"/><circle cx="43" cy="50" r="1.6" fill="#fff"/><circle cx="61" cy="50" r="1.6" fill="#fff"/>
<path d="M42 63 Q50 71 58 63" stroke="#1B2A4A" stroke-width="3.5" fill="none" stroke-linecap="round"/><circle cx="34" cy="62" r="4" fill="#F28B6B" opacity=".7"/><circle cx="66" cy="62" r="4" fill="#F28B6B" opacity=".7"/>`;
const STAR=`<polygon points="${starPoints(50,52,46,20)}" fill="#F4B400" stroke="#C98F00" stroke-width="4" stroke-linejoin="round"/>`;
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const cols=['#2F6FDE','#1E8A5B','#F4B400','#D9483B','#8A4FBF'];
 for(let i=0;i<40;i++){const c=document.createElement('div');c.className='confetti';c.style.left=Math.random()*100+'vw';c.style.background=cols[i%5];c.style.animationDelay=Math.random()*.5+'s';document.body.appendChild(c);setTimeout(()=>c.remove(),2300)}}

/* show a value that may be text, {en,am}, or {svg,label} */
function show(v){if(v&&typeof v==='object'&&v.svg)return v.svg+(v.label?`<span>${esc(tx(v.label))}</span>`:'');return esc(tx(v))}
const key=v=>typeof v==='object'?JSON.stringify(v):String(v);

/* ---------- mission types ---------- */
const T={};

T.quiz={init(m,st){st.i=0;st.picked=null;st.order=m.items.map((_,i)=>i);if(m.shuffle)st.order=shuffle(st.order)},
 render(m,p,api,st){
  if(st.i>=m.items.length){p.innerHTML=(m.passage?passage(m.passage):'')+`<div class="explain">${tx(UI.allDone)}</div><div><button class="btn" data-act="restart">${tx(UI.playAgain)}</button></div>`;
   p.onclick=e=>{if(e.target.closest('[data-act=restart]')){this.init(m,st);api.rerender()}};return}
  const it=m.items[st.order[st.i]];const solved=st.picked===it.a;
  p.innerHTML=`${m.passage?passage(m.passage):''}
  <div class="progress">${tx(UI.item,{i:st.i+1,n:m.items.length})}</div>
  ${it.fig?`<div class="qfig">${it.fig}</div>`:''}
  <div class="q">${it.say?sayBtn(it.say,it.sayLang):''}<span class="qt">${tx(it.q)}</span></div>
  <div class="opts ${it.o.some(o=>tx(o).length>18)?'long':''}">${it.o.map((o,j)=>`<button class="opt ${st.picked===j?(j===it.a?'right':'wrong'):''}" data-j="${j}" ${solved?'disabled':''}>${show(o)}</button>`).join('')}</div>
  <div class="feedback ${st.picked===null?'':solved?'good':'bad'}" aria-live="polite">${st.picked===null?'':solved?tx(UI.good):tx(it.hint||UI.bad)}</div>
  ${solved&&it.e?`<div class="explain">${tx(it.e)}</div>`:''}
  ${solved?`<div><button class="btn primary" data-act="next">${tx(UI.next)}</button></div>`:''}`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled||b.dataset.say)return;
   if(b.dataset.j!==undefined){st.picked=+b.dataset.j;st.picked===it.a?S.yay():S.nope()}
   if(b.dataset.act==='next'){st.i++;st.picked=null;if(st.i>=m.items.length)api.complete()}
   api.rerender()}}};
function passage(ps){return`<div class="passage">${ps.title?`<h3>${ps.say?sayBtn(ps.say,ps.sayLang)+' ':''}${esc(tx(ps.title))}</h3>`:''}${(Array.isArray(ps.paras)?ps.paras:(ps.paras[G.lang]||ps.paras.en)).map(x=>`<p>${esc(tx(x))}</p>`).join('')}</div>`}

T.match={init(m,st){st.r=0;this.round(m,st)},
 round(m,st){const pairs=m.rounds[st.r];st.L=shuffle(pairs.map((_,i)=>i));st.R=shuffle(pairs.map((_,i)=>i));st.ok=[];st.sel=null;st.shake=null},
 render(m,p,api,st){
  if(st.r>=m.rounds.length){p.innerHTML=`<div class="explain">${tx(UI.allDone)}</div><div><button class="btn" data-act="restart">${tx(UI.playAgain)}</button></div>`;
   p.onclick=e=>{if(e.target.closest('[data-act=restart]')){this.init(m,st);api.rerender()}};return}
  const pairs=m.rounds[st.r];
  p.innerHTML=`${m.intro?`<div class="note">${tx(m.intro)}</div>`:''}<div class="sub small">${tx(UI.matchHelp)}</div>
  <div class="match">${st.L.map((li,k)=>{const ri=st.R[k];return`<button class="mt ${st.ok.includes(li)?'ok':''} ${st.sel===li?'sel':''}" data-l="${li}">${show(pairs[li][0])}</button>
   <button class="mt ${st.ok.includes(ri)?'ok':''} ${st.shake===ri?'shake':''}" data-r="${ri}">${show(pairs[ri][1])}</button>`}).join('')}</div>
  <div class="progress">${tx(UI.round,{i:st.r+1,n:m.rounds.length})}</div>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b)return;st.shake=null;
   if(b.dataset.l!==undefined){st.sel=+b.dataset.l;S.tick()}
   else if(b.dataset.r!==undefined&&st.sel!==null){const r=+b.dataset.r;
    if(r===st.sel){st.ok.push(r);st.sel=null;S.yay();if(m.sayRight)say(tx(pairs[r][1]),m.sayRight);
     if(st.ok.length===pairs.length){st.r++;api.rerender();setTimeout(()=>{if(st.r<m.rounds.length){this.round(m,st)}else api.complete();api.rerender()},650);return}}
    else{st.shake=r;S.nope()}}
   api.rerender()}}};

T.sort={init(m,st){st.q=shuffle(m.items.map((_,i)=>i));st.placed=m.buckets.map(()=>[]);st.msg='';st.cls=''},
 render(m,p,api,st){
  const cur=st.q[0],it=cur!==undefined?m.items[cur]:null;
  p.innerHTML=`${m.intro?`<div class="note">${tx(m.intro)}</div>`:''}
  ${it?`<div class="card-item pop">${it.fig||''}<span>${it.say?sayBtn(it.say,it.sayLang)+' ':''}${esc(tx(it.t))}</span></div>`:`<div class="explain">${tx(m.end||UI.allDone)}</div>`}
  <div class="buckets">${m.buckets.map((b,bi)=>`<button class="bucket" data-b="${bi}" ${it?'':'disabled'}><span>${esc(tx(b))}</span><span class="in">${st.placed[bi].map(i=>`<span>${esc(tx(m.items[i].short||m.items[i].t))}</span>`).join('')}</span></button>`).join('')}</div>
  <div class="feedback ${st.cls}" aria-live="polite">${st.msg}</div>
  <div class="row"><span class="progress">${tx(UI.sortLeft,{n:st.q.length})}</span>${!it?`<button class="btn" data-act="restart">${tx(UI.playAgain)}</button>`:''}</div>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b||b.dataset.say)return;
   if(b.dataset.act==='restart'){this.init(m,st);api.rerender();return}
   if(b.dataset.b!==undefined&&it){const bi=+b.dataset.b;
    if(bi===it.b){st.placed[bi].push(cur);st.q.shift();st.msg=tx(UI.good)+(it.why?' '+tx(it.why):'');st.cls='good';S.yay();if(!st.q.length)api.complete()}
    else{st.msg=tx(UI.bad)+(it.hint?' '+tx(it.hint):'');st.cls='bad';S.nope()}
    api.rerender()}}}};

T.order={init(m,st){st.r=0;this.round(m,st)},
 round(m,st){const R=m.rounds[st.r];let o;do{o=shuffle(R.items.map((_,i)=>i))}while(R.items.length>1&&o.every((v,i)=>v===i));st.pool=o;st.line=[];st.res=null},
 render(m,p,api,st){
  if(st.r>=m.rounds.length){p.innerHTML=`<div class="explain">${tx(UI.allDone)}</div><div><button class="btn" data-act="restart">${tx(UI.playAgain)}</button></div>`;
   p.onclick=e=>{if(e.target.closest('[data-act=restart]')){this.init(m,st);api.rerender()}};return}
  const R=m.rounds[st.r];const full=st.line.length===R.items.length;const vertical=m.vertical;
  p.innerHTML=`${R.prompt?`<div class="q"><span class="qt">${R.say?sayBtn(R.say,R.sayLang)+' ':''}${tx(R.prompt)}</span></div>`:''}
  <div class="sub small">${tx(m.help||UI.orderHelp)}</div>
  <div class="line-out ${vertical?'steps':''}" aria-live="polite">${st.line.map((i,k)=>`<button class="tile" data-back="${k}">${vertical?(k+1)+'. ':''}${show(R.items[i])}</button>`).join('')}</div>
  <div class="tiles">${st.pool.map(i=>`<button class="tile" data-i="${i}" ${st.line.includes(i)?'disabled':''}>${show(R.items[i])}</button>`).join('')}</div>
  <div class="row"><button class="btn primary" data-act="check" ${full&&st.res!=='good'?'':'disabled'}>${tx(UI.check)}</button>
   <span class="feedback ${st.res||''}">${st.res==='good'?tx(UI.good):st.res==='bad'?tx(UI.bad):''}</span></div>
  ${st.res==='good'&&R.e?`<div class="explain">${tx(R.e)}</div>`:''}
  ${st.res==='good'?`<div><button class="btn primary" data-act="next">${tx(UI.next)}</button></div>`:''}
  <div class="progress">${tx(UI.round,{i:st.r+1,n:m.rounds.length})}</div>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled||b.dataset.say)return;
   if(b.dataset.i!==undefined&&st.res!=='good'){st.line.push(+b.dataset.i);st.res=null;S.tick()}
   if(b.dataset.back!==undefined&&st.res!=='good'){st.line.splice(+b.dataset.back,1);st.res=null}
   if(b.dataset.act==='check'){const ok=st.line.every((v,k)=>key(R.items[v])===key(R.items[k]));st.res=ok?'good':'bad';ok?S.yay():S.nope()}
   if(b.dataset.act==='next'){st.r++;if(st.r<m.rounds.length)this.round(m,st);else api.complete()}
   api.rerender()}}};

T.tapwords={init(m,st){st.r=0;st.sel=[];st.res=null},
 render(m,p,api,st){
  if(st.r>=m.rounds.length){p.innerHTML=`<div class="explain">${tx(UI.allDone)}</div><div><button class="btn" data-act="restart">${tx(UI.playAgain)}</button></div>`;
   p.onclick=e=>{if(e.target.closest('[data-act=restart]')){this.init(m,st);api.rerender()}};return}
  const R=m.rounds[st.r];const words=R.text.split(' ');
  p.innerHTML=`<div class="sub small">${tx(m.help||UI.tapHelp)}</div>
  <div class="row" style="gap:6px">${words.map((w,k)=>{let c='';if(st.res){if(R.targets.includes(k)&&st.sel.includes(k))c='hit';else if(R.targets.includes(k)||st.sel.includes(k))c='miss'}else if(st.sel.includes(k))c='on';
    return`<button class="word ${c}" data-k="${k}" ${st.res==='good'?'disabled':''}>${esc(w)}</button>`}).join('')}</div>
  <div class="row"><button class="btn primary" data-act="check" ${st.res==='good'?'disabled':''}>${tx(UI.check)}</button><span class="feedback ${st.res||''}">${st.res==='good'?tx(UI.good):st.res==='bad'?tx(UI.bad):''}</span></div>
  ${st.res==='good'?`<div class="explain"><b>${esc(R.fixed)}</b>${R.e?'<br>'+tx(R.e):''}</div><div><button class="btn primary" data-act="next">${tx(UI.next)}</button></div>`:''}
  <div class="progress">${tx(UI.round,{i:st.r+1,n:m.rounds.length})}</div>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
   if(b.dataset.k!==undefined){const k=+b.dataset.k;if(st.res==='bad')st.res=null;st.sel=st.sel.includes(k)?st.sel.filter(x=>x!==k):[...st.sel,k];S.tick()}
   if(b.dataset.act==='check'){const ok=st.sel.length===R.targets.length&&R.targets.every(t=>st.sel.includes(t));st.res=ok?'good':'bad';ok?S.yay():S.nope()}
   if(b.dataset.act==='next'){st.r++;st.sel=[];st.res=null;if(st.r>=m.rounds.length)api.complete()}
   api.rerender()}}};

T.spell={init(m,st){st.i=0;this.word(m,st)},
 word(m,st){const W=m.words[st.i];if(!W)return;const miss=W.blanks.map(b=>W.w[b]);const pool=new Set(miss);const abc=m.alphabet||'abcdefghijklmnopqrstuvwxyz';
  while(pool.size<Math.min(miss.length+3,8))pool.add(abc[rnd(0,abc.length-1)]);st.letters=shuffle([...pool]);st.filled=[];st.msg='';st.cls=''},
 render(m,p,api,st){
  if(st.i>=m.words.length){p.innerHTML=`<div class="explain">${tx(UI.allDone)}</div><div><button class="btn" data-act="restart">${tx(UI.playAgain)}</button></div>`;
   p.onclick=e=>{if(e.target.closest('[data-act=restart]')){this.init(m,st);api.rerender()}};return}
  const W=m.words[st.i];const done=st.filled.length===W.blanks.length;
  let bi=0;const shown=W.w.split('').map((ch,k)=>{if(W.blanks.includes(k)){const f=st.filled[bi++];return`<span class="blank">${f??''}</span>`}return`<span class="letter">${esc(ch)}</span>`}).join('');
  p.innerHTML=`${W.fig?`<div class="qfig">${W.fig}</div>`:''}
  <div class="row center">${sayBtn(W.w,m.lang||'en-US')}<span class="sub">${esc(tx(W.hint))}</span></div>
  <div class="row center" aria-live="polite">${shown}</div>
  <div class="sub small center">${tx(UI.spellHelp)}</div>
  <div class="tiles" style="justify-content:center">${st.letters.map(l=>`<button class="tile" data-l="${esc(l)}" ${done?'disabled':''} style="font-size:1.6rem;min-width:54px">${esc(l)}</button>`).join('')}</div>
  <div class="feedback center ${st.cls}">${st.msg}</div>
  ${done?`<div class="row center"><button class="btn primary" data-act="next">${tx(UI.next)}</button></div>`:''}
  <div class="progress">${tx(UI.item,{i:st.i+1,n:m.words.length})}</div>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled||b.dataset.say)return;
   if(b.dataset.l!==undefined){const need=W.w[W.blanks[st.filled.length]];
    if(b.dataset.l===need){st.filled.push(need);S.tick();if(st.filled.length===W.blanks.length){st.msg=tx(UI.good);st.cls='good';S.yay();say(W.w,m.lang||'en-US')}else{st.msg='';st.cls=''}}
    else{st.msg=tx(UI.bad);st.cls='bad';S.nope()}}
   if(b.dataset.act==='next'){st.i++;if(st.i>=m.words.length)api.complete();else this.word(m,st)}
   api.rerender()}}};

/* drill: endless generated questions; m.gen() -> {q,o,a,e?,fig?}; complete after m.need correct */
T.drill={init(m,st){st.n=0;st.cur=m.gen();st.picked=null},
 render(m,p,api,st){const it=st.cur;const solved=st.picked===it.a;const need=m.need||5;
  p.innerHTML=`${m.intro?`<div class="note">${tx(m.intro)}</div>`:''}
  ${it.fig?`<div class="qfig">${it.fig}</div>`:''}
  <div class="q"><span class="qt">${tx(it.q)}</span></div>
  <div class="opts">${it.o.map((o,j)=>`<button class="opt ${st.picked===j?(j===it.a?'right':'wrong'):''}" data-j="${j}" ${solved?'disabled':''}>${show(o)}</button>`).join('')}</div>
  <div class="feedback ${st.picked===null?'':solved?'good':'bad'}">${st.picked===null?'':solved?tx(UI.good):tx(it.hint||UI.bad)}</div>
  ${solved&&it.e?`<div class="explain">${tx(it.e)}</div>`:''}
  ${solved?`<div><button class="btn primary" data-act="next">${tx(UI.next)}</button></div>`:''}
  <div class="progress">${tx({en:'Correct: {n}/{m}',am:'ትክክል፦ {n}/{m}'},{n:st.n,m:need})}</div>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled||b.dataset.say)return;
   if(b.dataset.j!==undefined){st.picked=+b.dataset.j;if(st.picked===it.a){st.n++;S.yay();if(st.n>=need)api.complete()}else S.nope()}
   if(b.dataset.act==='next'){st.cur=m.gen();st.picked=null}
   api.rerender()}}};
/* helper for drills: make 4 unique numeric options around an answer */
function numOpts(ans,deltas){const set=new Set([ans]);for(const d of deltas){if(set.size>=4)break;const v=ans+d;if(v>=0)set.add(v)}let k=1;while(set.size<4){set.add(ans+k*7);k++}
 const o=shuffle([...set]);return{o:o.map(v=>v.toLocaleString('en-US')),a:o.indexOf(ans)}}

T.custom={init(m,st){m.init&&m.init(st)},render(m,p,api,st){m.render(p,api,st)}};
T.summary={init(m,st){},render(m,p,api,st){if(!window.AMBSummary){p.textContent='';return}
 AMBSummary.render(p,m.d,{lang:G.lang,st,tick:S.tick,yay:S.yay,done:()=>api.complete(),rerender:()=>api.rerender()})}};

/* take-home notes: big idea, key points, key words, remember box, exam self-check, young innovator challenge */
T.notes={init(m,st){st.open={};st.steps={}},
 render(m,p,api,st){const N=m.notes;const L=a=>(Array.isArray(a)?a:(a[G.lang]||a.en));
  p.innerHTML=`<article class="notes">
   <div class="n-big"><span class="n-tag">${tx(UI.nBig)}</span><p>${esc(tx(N.big))}</p></div>
   <section><h3>${tx(UI.nPoints)}</h3><ol>${N.points.map(x=>`<li>${esc(tx(x))}</li>`).join('')}</ol></section>
   ${N.words?`<section><h3>${tx(UI.nWords)}</h3><dl>${N.words.map(w=>`<div><dt>${esc(tx(w[0]))}</dt><dd>${esc(tx(w[1]))}</dd></div>`).join('')}</dl></section>`:''}
   ${N.remember?`<div class="n-remember"><span class="n-tag">${tx(UI.nRemember)}</span><p>${esc(tx(N.remember))}</p></div>`:''}
   <section><h3>${tx(UI.nExam)}</h3><p class="small" style="margin:0 0 6px;color:var(--ink-soft)">${tx(UI.nExamHelp)}</p>
    <div class="n-exam">${N.exam.map((q,i)=>`<div class="n-q"><span>${i+1}. ${esc(tx(q[0]))}</span><button class="btn" data-ans="${i}">${st.open[i]?esc(tx(q[1])):tx(UI.nShow)}</button></div>`).join('')}</div></section>
   <section class="n-innov"><h3>${tx(UI.nInnov)}: ${esc(tx(N.innovate.title))}</h3><p>${esc(tx(N.innovate.text))}</p>
    <ul class="n-steps">${L(N.innovate.steps).map((s,i)=>`<li><button class="n-check ${st.steps[i]?'on':''}" data-step="${i}" aria-pressed="${!!st.steps[i]}">${st.steps[i]?'✓':''}</button><span>${esc(tx(s))}</span></li>`).join('')}</ul></section>
   <div class="row"><button class="btn primary" data-act="got">${tx(UI.nGot)}</button><span class="feedback good">${st.got?tx(UI.nDone):''}</span></div>
  </article>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
   if(b.dataset.ans!==undefined){st.open[b.dataset.ans]=!st.open[b.dataset.ans];S.tick()}
   if(b.dataset.step!==undefined){st.steps[b.dataset.step]=!st.steps[b.dataset.step];S.tick()}
   if(b.dataset.act==='got'){st.got=true;api.complete()}
   api.rerender()}}};

/* ---------- unit shell ---------- */
const Unit={start(cfg){
 const SUM=(window.AMB_SUMMARY||{})[cfg.id];const NM=cfg.missions.find(m=>m.type==='notes');
 if(SUM&&NM&&!cfg.missions.some(m=>m.type==='summary')){const N0=NM.notes;
  cfg.missions.unshift({type:'summary',title:{en:'The chapter in one picture',am:'ምዕራፉ በአንድ ስዕል'},
   tip:{en:'Start here! This is the whole chapter in one picture: one big idea and its branches. Tap each branch, then come back at the end to check you can explain it all.',am:'ከዚህ ጀምሩ! ይህ ምዕራፉ በሙሉ በአንድ ስዕል ነው፦ አንድ ዋና ሐሳብና ቅርንጫፎቹ። እያንዳንዱን ቅርንጫፍ ንኩ፤ በመጨረሻ ተመልሳችሁ ሁሉንም ማስረዳት እንደምትችሉ አረጋግጡ።'},
   d:Object.assign({points:N0.points,words:N0.words,exam:N0.exam,innovate:N0.innovate,title:cfg.title},SUM)})}
 cfg.missions.forEach(m=>{if(m.type==='notes'){m.title=m.title||UI.notesTitle;m.tip=m.tip||UI.notesTip}if(m.type==='exam'){m.type='quiz';m.title=m.title||UI.examTitle;m.tip=m.tip||UI.examTip}});
 const KEY='g3-done-'+cfg.id;let done=store.get(KEY,{});const N=cfg.missions.length;let cur=1;
 const states=cfg.missions.map(()=>null);
 document.body.dataset.subject=cfg.subject;
 document.body.insertAdjacentHTML('afterbegin',`<div class="wrap">
  <header class="top">
   <a class="brand" href="home.html"><svg viewBox="0 0 100 100" aria-hidden="true">${KOKEB}</svg><div><h1 id="u-title"></h1><p id="u-sub"></p></div></a>
   <div class="tools">
    <a class="pill home-link" href="home.html" id="u-home"></a>
    <div class="pill lang" role="group" aria-label="Language"><button data-lang="am">አማርኛ</button><button data-lang="en">English</button></div>
    <button class="pill" id="u-sound"></button>
    <span class="pill"><svg viewBox="0 0 100 100" aria-hidden="true">${STAR}</svg><span id="u-stars" class="num">0</span>/${N}</span>
   </div></header>
  <div id="u-win"></div>
  <nav class="map" id="u-map" aria-label="Missions"></nav>
  <section class="board"><div class="guide"><svg viewBox="0 0 100 100" aria-hidden="true">${KOKEB}</svg><div class="bubble"><h2 id="m-title"></h2><p id="m-tip"></p></div></div><div class="panel" id="panel"></div></section>
  <footer><span id="u-foot"></span><button id="u-reset"></button></footer></div>`);
 const api={get mission(){return cur},visible(n){return cur===n},complete(){if(done[cur])return;done[cur]=true;store.set(KEY,done);S.fanfare();confetti();chrome()},rerender(){mission()},
  t:tx,say,sayBtn,S,rnd,shuffle,esc,get lang(){return G.lang},UI};
 function chrome(){
  document.documentElement.lang=G.lang;document.title=tx(cfg.title)+' · '+tx(cfg.subjectName)+' · AMBKidsJoy';
  $('#u-title').textContent=tx(cfg.title);$('#u-sub').textContent=tx({en:'Grade '+(cfg.grade||3),am:(cfg.grade||3)+'ኛ ክፍል'})+' · '+tx(cfg.subjectName)+' · '+tx(cfg.chapter);
  $('#u-home').textContent='← '+tx(UI.home);
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===G.lang));
  $('#u-sound').textContent=G.sound?tx(UI.soundOn):tx(UI.soundOff);
  const n=cfg.missions.filter((_,i)=>done[i+1]).length;$('#u-stars').textContent=n;
  $('#u-map').innerHTML=cfg.missions.map((m,i)=>`<button class="chip ${done[i+1]?'done':''}" data-m="${i+1}" aria-current="${cur===i+1}"><span class="n">${done[i+1]?'★':i+1}</span><span class="lbl">${esc(tx(m.title))}</span></button>`).join('');
  $('#u-win').innerHTML=n===N?`<div class="winner"><svg viewBox="0 0 100 100" aria-hidden="true">${KOKEB}</svg><div><h2>${tx(UI.winTitle)}</h2><p style="margin:0">${tx(UI.winText)}</p></div></div>`:'';
  $('#u-foot').textContent=tx(cfg.footer||'');$('#u-reset').textContent=tx(UI.reset)}
 function mission(){const m=cfg.missions[cur-1];
  $('#m-title').textContent=cur+'. '+tx(m.title);$('#m-tip').textContent=tx(m.tip);
  if(!states[cur-1]){states[cur-1]={};T[m.type].init(m,states[cur-1])}
  $('#panel').dataset.mission=cur;T[m.type].render(m,$('#panel'),api,states[cur-1])}
 function all(){chrome();mission()}
 $('#u-map').addEventListener('click',e=>{const b=e.target.closest('[data-m]');if(!b)return;cur=+b.dataset.m;S.tick();try{history.replaceState(null,'','#m'+cur)}catch(_){}all();$('.board').scrollIntoView({behavior:'smooth',block:'nearest'})});
 document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{G.lang=b.dataset.lang;store.set('g3-lang',G.lang);all()}));
 $('#u-sound').addEventListener('click',()=>{G.sound=!G.sound;store.set('g3-sound',G.sound);chrome();S.tick()});
 let arm=false;$('#u-reset').addEventListener('click',e=>{if(!arm){arm=true;e.target.textContent=tx(UI.resetAsk);setTimeout(()=>{arm=false;chrome()},3000);return}
  arm=false;done={};store.set(KEY,done);states.fill(null);all()});
 const h=(location.hash||'').match(/^#m(\d+)$/);if(h&&+h[1]>=1&&+h[1]<=N)cur=+h[1];
 all();
}};
window.Unit=Unit;window.G3={tx,say,sayBtn,S,store,G,KOKEB,STAR,shuffle,rnd,esc,numOpts};
})();
