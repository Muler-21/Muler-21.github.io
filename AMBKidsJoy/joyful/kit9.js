/* Joyful English kit: speaking practice with the browser's speech recognition (falls back to self-check) */
(function(){
const norm=s=>String(s).toLowerCase().replace(/[’']/g,"'").replace(/[^a-z0-9' ]+/g,' ').split(/\s+/).filter(Boolean);
function score(target,heard){const T=norm(target),H=norm(heard);if(!T.length)return 0;const pool=H.slice();let hit=0;
 for(const w of T){const k=pool.indexOf(w);if(k>=0){hit++;pool.splice(k,1)}}return hit/T.length}
function speak(title,tip,lines){const {tx,esc}=G3;const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 return{title,tip,type:'custom',
 init(st){st.i=0;st.msg='';st.cls='';st.busy=false},
 render(p,api,st){
  if(st.i>=lines.length){p.innerHTML=`<div class="explain">${tx({en:'Well spoken! Say these sentences to a friend or family member today.',am:'በደንብ ተናገራችሁ! እነዚህን ዓረፍተ ነገሮች ዛሬ ለጓደኛ ወይም ለቤተሰብ ተናገሩ።'})}</div><div class="row" style="justify-content:center"><button class="btn" data-act="again">${tx({en:'Practise again',am:'እንደገና ተለማመዱ'})}</button></div>`;
   p.onclick=e=>{if(e.target.closest('[data-act=again]')){st.i=0;st.msg='';api.rerender()}};return}
  const L=lines[st.i];
  p.innerHTML=`<div class="progress">${tx({en:'Sentence {i} of {n}',am:'ዓረፍተ ነገር {i} ከ{n}'},{i:st.i+1,n:lines.length})}</div>
   <div class="qfig" style="min-height:70px;align-items:center"><span class="emo" style="font-size:3.2rem">${L.e||'🗣️'}</span></div>
   <div class="q" style="text-align:center"><span class="qt" style="font-size:1.35rem">${esc(L.t)}</span></div>
   ${L.am?`<p class="small center" style="color:var(--ink-soft);margin:0">${esc(L.am)}</p>`:''}
   <div class="row" style="justify-content:center;gap:10px;flex-wrap:wrap;margin-top:12px">
    <button class="btn" data-act="hear">🔊 ${tx({en:'Listen',am:'አዳምጡ'})}</button>
    ${SR?`<button class="btn primary" data-act="mic"${st.busy?' disabled':''}>🎤 ${tx(st.busy?{en:'Listening…',am:'እያዳመጥኩ ነው…'}:{en:'Speak',am:'ተናገሩ'})}</button>`:''}
    <button class="btn" data-act="did">✓ ${tx({en:'I said it aloud',am:'ጮክ ብዬ ተናገርኩ'})}</button></div>
   <div class="feedback center ${st.cls}" aria-live="polite">${st.msg||tx(SR?{en:'Tap Listen, then tap Speak and say the sentence.',am:'አዳምጡን ንኩ፤ ከዚያ ተናገሩን ንኩና ዓረፍተ ነገሩን ተናገሩ።'}:{en:'Listen, then say the sentence aloud and tap "I said it aloud".',am:'አዳምጡ፤ ከዚያ ዓረፍተ ነገሩን ጮክ ብላችሁ ተናገሩና "ጮክ ብዬ ተናገርኩ"ን ንኩ።'})}</div>`;
  const next=()=>{st.i++;st.msg='';st.cls='';api.S.yay();if(st.i>=lines.length)api.complete();api.rerender()};
  p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;const a=b.dataset.act;
   if(a==='hear'){api.say(L.t,'en-US');return}
   if(a==='did'){next();return}
   if(a==='mic'){let r;try{r=new SR()}catch(err){st.msg=tx({en:'This browser cannot listen. Say it aloud and tap "I said it aloud".',am:'ይህ ብራውዘር ማዳመጥ አይችልም። ጮክ ብላችሁ ተናገሩና "ጮክ ብዬ ተናገርኩ"ን ንኩ።'});api.rerender();return}
    r.lang='en-US';r.interimResults=false;r.maxAlternatives=4;st.busy=true;st.msg='';api.rerender();
    r.onresult=ev=>{const alts=[...ev.results[0]].map(x=>x.transcript);const sc=Math.max(...alts.map(h=>score(L.t,h)));st.busy=false;
     if(sc>=0.7){st.msg=tx({en:'Great! I understood you: "{h}"',am:'በጣም ጥሩ! ተረዳኋችሁ፦ "{h}"'},{h:alts[0]});st.cls='good';api.S.tick();setTimeout(next,1100);api.rerender()}
     else{st.msg=tx({en:'I heard: "{h}". Listen again and say every word clearly.',am:'የሰማሁት፦ "{h}"። እንደገና አዳምጡና እያንዳንዱን ቃል በግልጽ ተናገሩ።'},{h:alts[0]||'…'});st.cls='bad';api.rerender()}};
    r.onerror=ev=>{st.busy=false;st.cls='bad';
     st.msg=tx(/not-allowed|service-not-allowed|audio-capture/.test(ev.error)?{en:'The microphone is not available here. Say it aloud and tap "I said it aloud".',am:'ማይክሮፎኑ እዚህ አይሠራም። ጮክ ብላችሁ ተናገሩና "ጮክ ብዬ ተናገርኩ"ን ንኩ።'}:{en:'I did not hear you. Tap Speak and try again.',am:'አልሰማኋችሁም። ተናገሩን ንኩና እንደገና ሞክሩ።'});api.rerender()};
    r.onend=()=>{if(st.busy){st.busy=false;api.rerender()}};
    setTimeout(()=>{if(st.busy){st.busy=false;try{r.abort()}catch(e){}st.msg=tx({en:'I did not hear you. Tap Speak and try again.',am:'አልሰማኋችሁም። ተናገሩን ንኩና እንደገና ሞክሩ።'});st.cls='bad';api.rerender()}},12000);
    try{r.start()}catch(err){st.busy=false;api.rerender()}}}}}}
window.KJ={speak,score};
})();
