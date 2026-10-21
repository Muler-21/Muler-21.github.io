/* AMBKidsJoy Grade 1 picture kit: ten-frames, clocks, coins, shapes, emoji pools */
(function(){
const P={
 fruit:['🍎','🍊','🍌','🥭','🍋','🍐','🍇'],
 animal:['🐄','🐐','🐑','🐓','🐴','🐪','🐕','🐈','🐝','🐟'],
 school:['✏️','📘','🎒','🖍️','📏'],
 nature:['🌼','🌳','⭐','🌻','🍃','🐞'],
 toy:['⚽','🎈','🪀','🧸','🪁']};
const pick=k=>{const a=P[k]||P.fruit;return a[Math.floor(Math.random()*a.length)]};
const any=()=>{const ks=Object.keys(P);return pick(ks[Math.floor(Math.random()*ks.length)])};
/* ten-frame(s): n counters, filled frames of 10 */
function tenframe(n,color){const frames=Math.max(1,Math.ceil(n/10));let out='';
 for(let f=0;f<frames;f++){let cells='';for(let i=0;i<10;i++){const k=f*10+i;const x=8+(i%5)*44,y=8+Math.floor(i/5)*44;
  cells+=`<rect x="${x}" y="${y}" width="40" height="40" rx="6" fill="var(--surface)" stroke="var(--ink-soft)" stroke-width="2"/>`+(k<n?`<circle cx="${x+20}" cy="${y+20}" r="14" fill="${color||'var(--accent)'}"/>`:'')}
  out+=`<svg viewBox="0 0 236 104" style="width:min(236px,44vw);height:auto" aria-hidden="true">${cells}</svg>`}
 return`<div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center" role="img" aria-label="${n}">${out}</div>`}
/* tens rods and ones cubes */
function blocks(n){const t=Math.floor(n/10),o=n%10;let s='';
 for(let i=0;i<t;i++){s+=`<g transform="translate(${8+i*22} 8)">${Array.from({length:10},(_,j)=>`<rect x="0" y="${j*14}" width="16" height="14" fill="var(--blue)" stroke="#fff" stroke-width="1.5"/>`).join('')}</g>`}
 for(let i=0;i<o;i++){s+=`<rect x="${12+t*22+(i%3)*18}" y="${92+Math.floor(i/3)*-18+ (i>=6?0:0)}" width="16" height="14" fill="var(--sun)" stroke="#fff" stroke-width="1.5"/>`}
 const w=Math.max(80,24+t*22+60);return`<svg viewBox="0 0 ${w} 156" style="width:min(${w*1.4}px,100%);height:auto" role="img" aria-label="${n}">${s}</svg>`}
/* analogue clock */
function clock(h,m){const ha=((h%12)+m/60)*30,ma=m*6;
 const nums=Array.from({length:12},(_,i)=>{const a=(i+1)*30*Math.PI/180;return`<text x="${60+40*Math.sin(a)}" y="${64-40*Math.cos(a)}" font-size="12" text-anchor="middle" fill="var(--ink)" font-family="Baloo 2" font-weight="700">${i+1}</text>`}).join('');
 return`<svg viewBox="0 0 120 120" style="width:min(200px,60vw);height:auto" role="img" aria-label="clock"><circle cx="60" cy="60" r="56" fill="var(--surface)" stroke="var(--accent)" stroke-width="5"/>${nums}
 <line x1="60" y1="60" x2="${60+26*Math.sin(ha*Math.PI/180)}" y2="${60-26*Math.cos(ha*Math.PI/180)}" stroke="var(--ink)" stroke-width="6" stroke-linecap="round"/>
 <line x1="60" y1="60" x2="${60+40*Math.sin(ma*Math.PI/180)}" y2="${60-40*Math.cos(ma*Math.PI/180)}" stroke="var(--clay)" stroke-width="3.5" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="var(--ink)"/></svg>`}
/* Ethiopian coins (cents) and the 1 birr coin */
const COIN={1:['#C98A4B',30],5:['#C98A4B',34],10:['#D9B14A',36],25:['#C9CED6',38],50:['#C9CED6',42],100:['#D9B14A',46]};
function coin(c,size){const [col,r]=COIN[c];const lab=c===100?'1':String(c),un=c===100?'ብር':'ሳ';const s=size||1;
 return`<svg viewBox="0 0 100 100" style="width:${Math.round(r*2*s)}px;height:auto" role="img" aria-label="${c===100?'1 birr':c+' cents'}"><circle cx="50" cy="50" r="46" fill="${col}" stroke="#7a5a2a" stroke-width="3"/>${c===100?'<circle cx="50" cy="50" r="34" fill="#C9CED6" stroke="#7a5a2a" stroke-width="2"/>':''}<circle cx="50" cy="50" r="38" fill="none" stroke="#ffffff88" stroke-width="2" stroke-dasharray="3 4"/><text x="50" y="56" text-anchor="middle" font-family="Baloo 2" font-weight="800" font-size="34" fill="#1B2A4A">${lab}</text><text x="50" y="80" text-anchor="middle" font-family="Noto Sans Ethiopic" font-weight="700" font-size="15" fill="#1B2A4A">${un}</text></svg>`}
const coins=list=>`<div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;align-items:center">${list.map(c=>coin(c)).join('')}</div>`;
/* flat shapes and solids */
const C='var(--accent)';
const SH={
 circle:`<circle cx="50" cy="50" r="40" fill="${C}"/>`,
 square:`<rect x="12" y="12" width="76" height="76" rx="3" fill="${C}"/>`,
 rectangle:`<rect x="4" y="26" width="92" height="50" rx="3" fill="${C}"/>`,
 triangle:`<polygon points="50,8 94,90 6,90" fill="${C}"/>`,
 cube:`<polygon points="20,35 60,35 60,85 20,85" fill="${C}"/><polygon points="20,35 40,18 80,18 60,35" fill="#ffffff66" stroke="${C}" stroke-width="2"/><polygon points="60,35 80,18 80,68 60,85" fill="${C}" opacity=".7"/>`,
 sphere:`<circle cx="50" cy="52" r="40" fill="${C}"/><ellipse cx="36" cy="36" rx="12" ry="8" fill="#fff" opacity=".5"/>`,
 cylinder:`<rect x="24" y="22" width="52" height="60" fill="${C}"/><ellipse cx="50" cy="82" rx="26" ry="9" fill="${C}"/><ellipse cx="50" cy="22" rx="26" ry="9" fill="#ffffffaa" stroke="${C}" stroke-width="3"/>`,
 pyramid:`<polygon points="50,8 86,78 50,92" fill="${C}" opacity=".75"/><polygon points="50,8 14,78 50,92" fill="${C}"/>`,
 prism:`<polygon points="10,40 70,40 70,86 10,86" fill="${C}"/><polygon points="10,40 30,20 92,20 70,40" fill="#ffffff66" stroke="${C}" stroke-width="2"/><polygon points="70,40 92,20 92,66 70,86" fill="${C}" opacity=".7"/>`,
 cone:`<polygon points="50,8 78,80 22,80" fill="${C}"/><ellipse cx="50" cy="80" rx="28" ry="9" fill="${C}" opacity=".8"/>`};
const shape=(k,w)=>`<svg viewBox="0 0 100 100" style="width:${w||70}px;height:auto" role="img" aria-label="${k}">${SH[k]}</svg>`;
const row=(n,e,cls)=>Array.from({length:n},()=>`<span class="emo ${cls||''}">${e}</span>`).join('');
/* addition picture: a things + b things */
const plus=(a,b,e,e2)=>`<div class="eqfig"><div class="cnt" style="--per:${Math.min(5,Math.max(a,1))}">${a?row(a,e):'<span class="emo gone">⬜</span>'}</div><span class="op">+</span><div class="cnt" style="--per:${Math.min(5,Math.max(b,1))}">${b?row(b,e2||e):'<span class="emo gone">⬜</span>'}</div></div>`;
/* subtraction picture: n things, k crossed out */
const minus=(n,k,e)=>`<div class="cnt" style="--per:5">${row(n-k,e)}${row(k,e,'gone')}</div>`;
/* two rows to compare */
const two=(a,b,e1,e2,l1,l2)=>`<div class="cmp"><div><b>${l1||'A'}</b><div class="cnt" style="--per:10">${row(a,e1)}</div></div><div><b>${l2||'B'}</b><div class="cnt" style="--per:10">${row(b,e2||e1)}</div></div></div>`;
/* the seven orders of a fidel family: ሀ → ሀ ሁ ሂ ሃ ሄ ህ ሆ */
const fam=b=>Array.from({length:7},(_,i)=>String.fromCodePoint(b.codePointAt(0)+i));

/* Amharic letter-chapter missions (Grade 1 Amharic ch. 1-4)
   d = {letters:[base...], pics:[[emoji, word, firstLetterBase]], words:[[word,[syllables]]], spell:[{w,blanks,e}], story:{title,text,qs:[{q,o,a}]}, sentences:[[w1,w2,...]]} */
function letterMissions(d){const {tx,shuffle}=G3;const M=[];
 const L=d.letters;
 M.push({title:{en:'Meet the letters',am:'ፊደላቱን እንተዋወቅ'},type:'quiz',shuffle:true,
  tip:{en:'Look at the picture and say its name slowly. Which letter does it start with?',am:'ሥዕሉን ተመልከቱና ስሙን በቀስታ በሉ። በየትኛው ፊደል ይጀምራል?'},
  items:d.pics.map(([e,w,b])=>{const set=new Set([b]);for(const x of shuffle(L))if(set.size<3&&x!==b)set.add(x);const o=shuffle([...set]);
   return{fig:`<div class="cnt" style="--per:1"><span class="emo" style="font-size:4rem">${e}</span></div>`,q:{en:`${w}: which letter family does it start with?`,am:`${w}፦ በየትኛው ፊደል ቤተሰብ ይጀምራል?`},o:o.map(x=>({svg:`<span class="bigq" style="font-size:2.4rem">${x}</span>`,label:''})),a:o.indexOf(b),e:{en:`${w} starts with ${w[0]}, from the ${b} family.`,am:`${w} በ${w[0]} ይጀምራል፤ የ${b} ቤተሰብ ነው።`}}})});
 M.push({title:{en:'Write the letters',am:'ፊደላቱን እንጻፍ'},type:'trace',items:L.slice(0,8),
  tip:{en:'Trace each letter on the dots with your finger. Go slowly and keep on the dots.',am:'እያንዳንዱን ፊደል በነጥቦቹ ላይ በጣታችሁ ጻፉ። በቀስታ፣ በነጥቦቹ ላይ ብቻ።'}});
 M.push({title:{en:'Letter families',am:'የፊደል ቤቶች'},type:'order',
  tip:{en:'Each letter has 7 sounds (orders), like ሀ ሁ ሂ ሃ ሄ ህ ሆ. Put the family in order.',am:'እያንዳንዱ ፊደል 7 ድምፆች (ቤቶች) አሉት፤ ለምሳሌ ሀ ሁ ሂ ሃ ሄ ህ ሆ። ቤተሰቡን በቅደም ተከተል አስቀምጡ።'},
  help:{en:'Tap from the 1st order to the 7th.',am:'ከ1ኛ ቤት እስከ 7ኛ ቤት ንኩ።'},
  rounds:(d.famRounds||L.slice(0,3)).map(b=>({prompt:{en:`The ${b} family:`,am:`የ${b} ቤተሰብ፦`},items:fam(b)}))});
 M.push({title:{en:'Build the word',am:'ቃል እንመሥርት'},type:'order',
  tip:{en:'Join the sounds to make a word: ለ + ማ = ለማ. Read it aloud!',am:'ድምፆቹን አጣምራችሁ ቃል መሥርቱ፦ ለ + ማ = ለማ። ጮክ ብላችሁ አንብቡት!'},
  help:{en:'Tap the letters in order to build the word.',am:'ቃሉን ለመመሥረት ፊደላቱን በቅደም ተከተል ንኩ።'},
  rounds:d.words.map(([w,e])=>({prompt:{en:`Build: ${e} ${w}`,am:`መሥርቱ፦ ${e} ${w}`},items:[...w]}))});
 M.push({title:{en:'Word and picture',am:'ቃልና ሥዕል'},type:'match',
  tip:{en:'Read each word, then find its picture.',am:'እያንዳንዱን ቃል አንብቡ፤ ከዚያ ሥዕሉን ፈልጉ።'},
  rounds:d.match.map(r=>r.map(([w,e])=>[w,e]))});
 if(d.spell)M.push({title:{en:'Missing letter',am:'የጎደለው ፊደል'},type:'spell',alphabet:d.alphabet||L.join(''),
  tip:{en:'Look at the picture, read the word, and put in the missing letter.',am:'ሥዕሉን ተመልከቱ፣ ቃሉን አንብቡ፣ የጎደለውን ፊደል አስገቡ።'},
  words:d.spell.map(x=>({w:x.w,blanks:x.blanks,hint:{en:x.en,am:x.w},fig:`<span class="emo" style="font-size:3.4rem">${x.e}</span>`}))});
 if(d.story)M.push({title:{en:'Read and answer',am:'አንብቡና መልሱ'},type:'quiz',passage:d.story,
  tip:{en:'Read the little story with a grown-up, then answer.',am:'ትንሹን ታሪክ ከትልቅ ሰው ጋር አንብቡ፤ ከዚያ መልሱ።'},items:d.story.qs});
 if(d.sentences)M.push({title:{en:'Make a sentence',am:'ዓረፍተ ነገር እንሥራ'},type:'order',
  tip:{en:'Put the words in order to make a sentence. A sentence ends with ።',am:'ዓረፍተ ነገር ለመሥራት ቃላቱን በቅደም ተከተል አስቀምጡ። ዓረፍተ ነገር በ። ያልቃል።'},
  help:{en:'Tap the words in order.',am:'ቃላቱን በቅደም ተከተል ንኩ።'},
  rounds:d.sentences.map(ws=>({prompt:{en:'Make the sentence:',am:'ዓረፍተ ነገሩን ሥሩ፦'},items:ws}))});
 return M}

/* Amharic theme-reading chapters (Grade 1 Amharic ch. 5-10) */
function readMissions(d){const M=[];
 M.push({title:{en:'Theme words',am:'የምዕራፉ ቃላት'},type:'match',
  tip:{en:'Read each word, then find its picture. Say the word aloud!',am:'እያንዳንዱን ቃል አንብቡ፤ ከዚያ ሥዕሉን ፈልጉ። ቃሉን ጮክ ብላችሁ በሉ!'},rounds:d.vocab});
 M.push({title:{en:'Sound out long words',am:'ረጃጅም ቃላትን በድምፅ ማንበብ'},type:'order',
  tip:{en:'Long words are easy if you read them sound by sound: ች-ግ-ኝ → ችግኝ.',am:'ረጃጅም ቃላት ድምፅ በድምፅ ስታነቧቸው ቀላል ናቸው፦ ች-ግ-ኝ → ችግኝ።'},
  help:{en:'Tap the letters in order to build the word.',am:'ቃሉን ለመመሥረት ፊደላቱን በቅደም ተከተል ንኩ።'},
  rounds:d.build.map(w=>({prompt:{en:`Build: ${w} (${[...w].join('-')})`,am:`መሥርቱ፦ ${w} (${[...w].join('-')})`},items:[...w]}))});
 if(d.trace)M.push({title:{en:'Write special letters',am:'ልዩ ፊደላትን መጻፍ'},type:'trace',items:d.trace,
  tip:{en:'Trace each letter slowly on the dots.',am:'እያንዳንዱን ፊደል በነጥቦቹ ላይ በቀስታ ጻፉ።'}});
 M.push({title:{en:'Read the story',am:'ታሪኩን አንብቡ'},type:'quiz',passage:d.story,
  tip:{en:'Read the story fluently, like you are talking. Then answer.',am:'ታሪኩን እንደምታወሩ አቀላጥፋችሁ አንብቡ። ከዚያ መልሱ።'},items:d.story.qs});
 M.push(Object.assign({type:'sort'},d.sort));
 if(d.spell)M.push({title:{en:'Missing letter',am:'የጎደለው ፊደል'},type:'spell',alphabet:d.alphabet,
  tip:{en:'Look at the picture, read the word, and put in the missing letter.',am:'ሥዕሉን ተመልከቱ፣ ቃሉን አንብቡ፣ የጎደለውን ፊደል አስገቡ።'},
  words:d.spell.map(x=>({w:x.w,blanks:x.blanks,hint:{en:x.en,am:x.w},fig:`<span class="emo" style="font-size:3.4rem">${x.e}</span>`}))});
 M.push({title:{en:'Make a sentence',am:'ዓረፍተ ነገር እንሥራ'},type:'order',
  tip:{en:'Put the words in order to make a sentence that makes sense.',am:'ትርጉም ያለው ዓረፍተ ነገር ለመሥራት ቃላቱን በቅደም ተከተል አስቀምጡ።'},
  help:{en:'Tap the words in order.',am:'ቃላቱን በቅደም ተከተል ንኩ።'},
  rounds:d.sentences.map(ws=>({prompt:{en:'Make the sentence:',am:'ዓረፍተ ነገሩን ሥሩ፦'},items:ws}))});
 return M}

/* English (Grade 1) missions: listening, letter sounds, tracing, spelling, sentences */
function engMissions(d){const {shuffle}=G3;const M=[];const big=e=>`<span class="emo" style="font-size:2.8rem">${e}</span>`;
 M.push({title:{en:'Listen and choose',am:'አዳምጡና ምረጡ'},type:'quiz',shuffle:true,
  tip:{en:'Tap 🔊 to hear the word, say it after me, then tap the right picture.',am:'ቃሉን ለመስማት 🔊 ንኩ፣ ደግማችሁ በሉት፣ ከዚያ ትክክለኛውን ሥዕል ንኩ።'},
  items:d.listen.map(([w,e,am],i)=>{const others=shuffle(d.listen.filter((_,j)=>j!==i)).slice(0,2);const o=shuffle([[w,e,am],...others]);
   return{say:w,q:{en:'Listen. Which picture is it?',am:'አዳምጡ። የትኛው ሥዕል ነው?'},o:o.map(x=>({svg:big(x[1]),label:''})),a:o.findIndex(x=>x[0]===w),e:{en:`${e} ${w}`,am:`${e} ${w} (${am||''})`}}})});
 if(d.letters)M.push({title:{en:'First sounds',am:'የመጀመሪያ ድምፆች'},type:'quiz',shuffle:true,
  tip:{en:'Listen to the word. What sound does it start with? Find the letter.',am:'ቃሉን አዳምጡ። በምን ድምፅ ይጀምራል? ፊደሉን ፈልጉ።'},
  items:d.letters.map(([e,w])=>{const L=w[0].toLowerCase();const pool=shuffle(d.letters.map(x=>x[1][0].toLowerCase()).filter(x=>x!==L));const o=shuffle([L,...[...new Set(pool)].slice(0,2)]);
   return{say:w,fig:`<div class="cnt" style="--per:1">${big(e)}</div>`,q:{en:`${w}: which letter does it start with?`,am:`${w}፦ በየትኛው ፊደል ይጀምራል?`},o:o.map(x=>({svg:`<span class="bigq" style="font-size:2.2rem">${x.toUpperCase()} ${x}</span>`,label:''})),a:o.indexOf(L)}})});
 if(d.trace)M.push({title:{en:'Write the letters',am:'ፊደላቱን ጻፉ'},type:'trace',items:d.trace,say:'en-US',sayText:d.trace.map(x=>x.length===1?x:x),
  tip:{en:'Trace each letter on the dots. Say its name and its sound.',am:'እያንዳንዱን ፊደል በነጥቦቹ ላይ ጻፉ። ስሙንና ድምፁን በሉ።'}});
 if(d.spell)M.push({title:{en:'Spell the word',am:'ቃሉን ጻፉ'},type:'spell',lang:'en-US',
  tip:{en:'Tap 🔊, listen to every sound, then fill in the missing letters.',am:'🔊 ንኩ፣ እያንዳንዱን ድምፅ አዳምጡ፣ ከዚያ የጎደሉትን ፊደላት ሙሉ።'},
  words:d.spell.map(x=>({w:x.w,blanks:x.blanks,hint:{en:x.w,am:x.am},fig:big(x.e)}))});
 if(d.sentences)M.push({title:{en:'Make a sentence',am:'ዓረፍተ ነገር ሥሩ'},type:'order',
  tip:{en:'Put the words in order. A sentence starts with a capital letter and ends with a full stop (.) or question mark (?).',am:'ቃላቱን በቅደም ተከተል አስቀምጡ። የእንግሊዝኛ ዓረፍተ ነገር በትልቅ ፊደል ይጀምራል፤ በነጥብ (.) ወይም በጥያቄ ምልክት (?) ያልቃል።'},
  help:{en:'Tap the words in order. Tap 🔊 to hear it.',am:'ቃላቱን በቅደም ተከተል ንኩ። ለመስማት 🔊 ንኩ።'},
  rounds:d.sentences.map(ws=>({prompt:{en:'Make the sentence:',am:'ዓረፍተ ነገሩን ሥሩ፦'},say:ws.join(' '),sayLang:'en-US',items:ws}))});
 return M}

/* get-moving mission: children do each exercise and tap once per repetition */
function moveMission(title,tip,steps){const {tx,esc}=G3;return{title,tip,type:'custom',
 init(st){st.i=0;st.k=0},
 render(p,api,st){if(st.i>=steps.length){p.innerHTML=`<div class="explain">${tx({en:'Great workout! Drink some water and rest.',am:'ጥሩ እንቅስቃሴ! ውኃ ጠጡና አረፍ በሉ።'})}</div><div><button class="btn" data-act="again">${tx({en:'Do it again',am:'እንደገና'})}</button></div>`;
   p.onclick=e=>{if(e.target.closest('[data-act=again]')){st.i=0;st.k=0;api.rerender()}};return}
  const s=steps[st.i];const pic=s.pose&&window.POSE?`<div style="width:140px">${POSE(s.pose)}</div>`:`<span class="emo" style="font-size:4.4rem">${s.e||'🏃'}</span>`;
  p.innerHTML=`<div class="progress">${tx({en:'Move {i} of {n}',am:'እንቅስቃሴ {i} ከ{n}'},{i:st.i+1,n:steps.length})}</div>
   <div class="qfig" style="min-height:120px;align-items:center">${pic}</div>
   <div class="q"><span class="qt">${esc(tx(s))}</span></div>
   <div class="cnt wrap">${Array.from({length:s.n},(_,j)=>`<span class="emo" style="font-size:1.6rem;opacity:${j<st.k?1:.25}">⭐</span>`).join('')}</div>
   <div class="row" style="justify-content:center"><button class="btn primary" data-act="did" style="font-size:1.3rem;padding:14px 26px">${tx({en:'I did one! {k}/{n}',am:'አንዱን ሠራሁ! {k}/{n}'},{k:st.k,n:s.n})}</button></div>`;
  p.onclick=e=>{if(!e.target.closest('[data-act=did]'))return;st.k++;api.S.tick();
   if(st.k>=s.n){st.i++;st.k=0;api.S.yay();if(st.i>=steps.length)api.complete()}api.rerender()}}}}

/* Grade 2 pictures: fractions, arrays, pictographs, birr notes */
function frac(kind,parts,shaded){const A='var(--accent)',S='var(--surface)',I='var(--ink)';let g='';
 if(kind==='circle'){for(let i=0;i<parts;i++){const a0=i*2*Math.PI/parts-Math.PI/2,a1=(i+1)*2*Math.PI/parts-Math.PI/2;
   g+=`<path d="M60 60L${60+50*Math.cos(a0)} ${60+50*Math.sin(a0)}A50 50 0 ${parts===1?1:0} 1 ${60+50*Math.cos(a1)} ${60+50*Math.sin(a1)}Z" fill="${i<shaded?A:S}" stroke="${I}" stroke-width="3"/>`}}
 else{const w=100/parts;for(let i=0;i<parts;i++)g+=`<rect x="${10+i*w}" y="20" width="${w}" height="80" fill="${i<shaded?A:S}" stroke="${I}" stroke-width="3"/>`}
 return`<svg viewBox="0 0 120 120" style="width:130px;height:auto" role="img" aria-label="${shaded} of ${parts}">${g}</svg>`}
const array=(r,c,e)=>`<div class="cnt" style="--per:${c}">${Array.from({length:r*c},()=>`<span class="emo" style="font-size:1.8rem">${e}</span>`).join('')}</div>`;
function pict(rows,key){return`<table class="pict"><tbody>${rows.map(([lab,e,n])=>`<tr><th>${lab}</th><td>${Array.from({length:n},()=>`<span class="emo">${e}</span>`).join('')}</td></tr>`).join('')}</tbody></table>${key?`<div class="sub small center">${key}</div>`:''}`}
const NOTE={10:'#6E4B9E',50:'#B5652A',100:'#2E7D5B',200:'#5E7FA8'};
const note=v=>`<svg viewBox="0 0 160 80" style="width:150px;height:auto" role="img" aria-label="${v} birr"><rect x="2" y="2" width="156" height="76" rx="8" fill="${NOTE[v]}" stroke="#0004" stroke-width="2"/><rect x="10" y="10" width="140" height="60" rx="5" fill="none" stroke="#fff8" stroke-dasharray="4 3"/><circle cx="44" cy="40" r="18" fill="#fff3"/><text x="112" y="48" text-anchor="middle" font-family="Baloo 2" font-weight="800" font-size="30" fill="#fff">${v}</text><text x="112" y="66" text-anchor="middle" font-family="Noto Sans Ethiopic" font-weight="700" font-size="12" fill="#fff">ብር</text></svg>`;

/* Grade 2 Amharic chapter missions */
function am2(d){const {shuffle}=G3;const M=[];
 M.push({title:{en:'Words and pictures',am:'ቃላትና ሥዕሎች'},type:'match',tip:{en:'Read each word and find its picture.',am:'እያንዳንዱን ቃል አንብቡና ሥዕሉን ፈልጉ።'},rounds:d.vocab});
 M.push({title:{en:'Read and understand',am:'አንብቦ መረዳት'},type:'quiz',passage:d.story,tip:{en:'Before reading, guess from the title. Read fluently, then answer.',am:'ከማንበባችሁ በፊት ከርዕሱ ገምቱ። አቀላጥፋችሁ አንብቡ፤ ከዚያ መልሱ።'},items:d.story.qs});
 if(d.story2)M.push({title:{en:'Read another story',am:'ሌላ ታሪክ አንብቡ'},type:'quiz',passage:d.story2,tip:{en:'Read with expression, like a storyteller.',am:'እንደ ተራኪ በስሜት አንብቡ።'},items:d.story2.qs});
 M.push({title:{en:'Blend the sounds',am:'ድምፆችን አጣምሩ'},type:'order',tip:{en:'Join the letters to read long words: ይ-ዘ-ራ-ል → ይዘራል.',am:'ረጃጅም ቃላትን ለማንበብ ፊደላቱን አጣምሩ፦ ይ-ዘ-ራ-ል → ይዘራል።'},help:{en:'Tap the letters in order.',am:'ፊደላቱን በቅደም ተከተል ንኩ።'},
  rounds:d.blend.map(w=>({prompt:{en:`Build: ${[...w].join('-')}`,am:`መሥርቱ፦ ${[...w].join('-')}`},items:[...w]}))});
 if(d.opp)M.push({title:{en:d.oppTitle?d.oppTitle.en:'Opposites',am:d.oppTitle?d.oppTitle.am:'ተቃራኒ ቃላት'},type:'match',tip:d.oppTip||{en:'Match each word with its opposite.',am:'እያንዳንዱን ቃል ከተቃራኒው ጋር አዛምዱ።'},rounds:[d.opp]});
 if(d.plural)M.push({title:{en:'One and many',am:'ነጠላና ብዙ ቁጥር'},type:'quiz',shuffle:true,tip:{en:'To make many, we usually add -ኦች or -ዎች: ቀሚስ → ቀሚሶች, ልጅ → ልጆች.',am:'ብዙ ቁጥር ለመሥራት በአብዛኛው -ኦች ወይም -ዎች እንጨምራለን፦ ቀሚስ → ቀሚሶች፣ ልጅ → ልጆች።'},
  items:d.plural.map(([a,b,x,y])=>{const o=shuffle([b,x,y]);return{q:{en:`Many of "${a}"?`,am:`የ"${a}" ብዙ ቁጥር?`},o,a:o.indexOf(b)}})});
 if(d.sort)M.push(Object.assign({type:'sort'},d.sort));
 M.push({title:{en:'Build a sentence',am:'ዓረፍተ ነገር መሥርቱ'},type:'order',tip:{en:'Put the words in order. Amharic sentences usually end with the action word.',am:'ቃላቱን በቅደም ተከተል አስቀምጡ። የአማርኛ ዓረፍተ ነገር በአብዛኛው በድርጊት ቃል ያልቃል።'},help:{en:'Tap the words in order.',am:'ቃላቱን በቅደም ተከተል ንኩ።'},
  rounds:d.sentences.map(ws=>({prompt:{en:'Make the sentence:',am:'ዓረፍተ ነገሩን ሥሩ፦'},items:ws}))});
 return M}

/* rhythm copy game (patterns of 👏 and 🦶) */
function beat(title,tip,R){const {tx}=G3;return{title,tip,type:'custom',
 init(st){st.r=0;st.tap=[];st.msg='';st.cls=''},
 render(p,api,st){if(st.r>=R.length){p.innerHTML=`<div class="explain">${tx({en:'You are a rhythm star! Now try it with music.',am:'የምት ኮከብ ናችሁ! አሁን በሙዚቃ ሞክሩ።'})}</div>`;return}
  const pat=R[st.r];
  p.innerHTML=`<div class="progress">${tx({en:'Pattern {i} of {n}',am:'ቅደም ተከተል {i} ከ{n}'},{i:st.r+1,n:R.length})}</div>
   <div class="bigq" style="letter-spacing:6px">${pat.join(' ')}</div>
   <div class="row" style="justify-content:center"><button class="btn" data-act="play">▶ ${tx({en:'Hear the beat',am:'ምቱን ስሙ'})}</button></div>
   <div class="bigq" style="min-height:64px;letter-spacing:6px">${st.tap.join(' ')||'…'}</div>
   <div class="opts" data-pat="${pat.join(',')}" data-done="${st.tap.length}"><button class="opt" data-b="👏"><span class="emo">👏</span></button><button class="opt" data-b="🦶"><span class="emo">🦶</span></button></div>
   <div class="feedback center ${st.cls}">${st.msg}</div>`;
  p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
   if(b.dataset.act==='play'){pat.forEach((x,i)=>setTimeout(()=>api.S.tick(),i*450));return}
   if(b.dataset.b){st.tap.push(b.dataset.b);api.S.tick();const k=st.tap.length-1;
    if(st.tap[k]!==pat[k]){st.msg=tx({en:'Oops! Start again.',am:'ኧረ! እንደገና ጀምሩ።'});st.cls='bad';st.tap=[]}
    else if(st.tap.length===pat.length){st.r++;st.tap=[];st.msg=tx({en:'Perfect rhythm!',am:'ፍጹም ምት!'});st.cls='good';api.S.yay();if(st.r>=R.length)api.complete()}
    else{st.msg='';st.cls=''}
    api.rerender()}}}}}
window.K1={beat,am2,frac,array,pict,note,moveMission,engMissions,readMissions,letterMissions,fam,P,pick,any,tenframe,blocks,clock,coin,coins,shape,row,plus,minus,two};
})();
