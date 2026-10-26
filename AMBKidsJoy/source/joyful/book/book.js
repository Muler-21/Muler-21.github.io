/* Joyful English Web Book — hash-routed single page, no build step, works offline (file://). */
(function(){
'use strict';
const CAT=window.CATALOG||[], CUR=window.CURRICULUM||{stages:[],map:[]};
const BYID=Object.fromEntries(CAT.map(r=>[r.id,r]));
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const store={get(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let lang=store.get('g3-lang','en');
let done=store.get('jeb-done',{}), bm=store.get('jeb-bm',{}), notes=store.get('jeb-notes',{});
const save=()=>{store.set('jeb-done',done);store.set('jeb-bm',bm);store.set('jeb-notes',notes)};

/* ---------- UI words (Amharic + English) ---------- */
const W={
 sub:['Web Book · from first words to work','የድር መጽሐፍ · ከመጀመሪያ ቃላት እስከ ሥራ'],lessons:['Interactive lessons','በይነ-ተግባራዊ ትምህርቶች'],menu:['Menu','ማውጫ'],
 foot:['Joyful English is part of AMBKidsJoy. External resources belong to their providers and open on their own websites.','እንግሊዝኛ በደስታ የAMBKidsJoy አካል ነው። የውጭ ምንጮች የባለቤቶቻቸው ናቸው፤ በራሳቸው ድረ ገጾች ይከፈታሉ።'],about:['About the sources','ስለ ምንጮቹ'],
 home:['Home','መነሻ'],start:['Start here: find your level','ከዚህ ጀምሩ፦ ደረጃችሁን ፈልጉ'],kinder:['Kindergarten and early literacy','ቅድመ መደበኛና የመጀመሪያ ንባብ'],primary:['Primary English','የአንደኛ ደረጃ እንግሊዝኛ'],
 teen:['Teen English','የታዳጊዎች እንግሊዝኛ'],adult:['Adult English','የአዋቂዎች እንግሊዝኛ'],advanced:['Advanced English','የላቀ እንግሊዝኛ'],pro:['Professional English','ሙያዊ እንግሊዝኛ'],
 reading:['Reading library','የንባብ ቤተ መጻሕፍት'],listening:['Listening library','የማዳመጥ ቤተ መጻሕፍት'],speaking:['Speaking practice','የንግግር ልምምድ'],writing:['Writing workshop','የጽሕፈት ወርክሾፕ'],
 grammar:['Grammar and vocabulary','ሰዋስውና ቃላት'],pron:['Pronunciation','አነባበብ'],quiz:['Quizzes and assessments','ጥያቄዎችና ምዘናዎች'],progress:['My learning progress','የትምህርት እድገቴ'],
 dir:['Resource directory','የምንጮች ማውጫ'],guide:['Teacher and parent guide','የመምህራንና የወላጆች መመሪያ'],
 learn:['Learn by stage','በደረጃ ተማሩ'],libs:['Libraries and skills','ቤተ መጻሕፍትና ክህሎቶች'],you:['You','እናንተ'],
 open:['Open ↗','ክፈቱ ↗'],save:['Bookmark','ዕልባት'],saved:['Bookmarked','ተቀምጧል'],mark:['Mark done','ጨርሻለሁ'],marked:['Done ✓','ተጠናቋል ✓'],
 objectives:['Objectives','ዓላማዎች'],assess:['Check yourself','ራሳችሁን ፈትሹ'],joy:['Joyful English lesson','የእንግሊዝኛ በደስታ ትምህርት'],next:['Next','ቀጣይ'],
 search:['Search title, topic or provider…','በርዕስ፣ በጉዳይ ወይም በአቅራቢ ፈልጉ…'],all:['All','ሁሉም'],results:['{n} resources','{n} ምንጮች'],
 prereq:['Before you start','ከመጀመራችሁ በፊት'],goal:['Goal','ግብ'],ages:['Ages','ዕድሜ'],grades:['Usual grades','የተለመዱ ክፍሎች'],
 notes:['My notes','ማስታወሻዎቼ'],note:['Note','ማስታወሻ'],noBm:['No bookmarks yet.','እስካሁን ዕልባት የለም።'],reset:['Reset my progress on this device','በዚህ መሣሪያ ያለውን እድገቴን አጥፋ'],
 showMore:['Show more','ተጨማሪ አሳይ'],level:['Level (CEFR)','ደረጃ (CEFR)'],skill:['Skill','ክህሎት'],age:['Age group','የዕድሜ ቡድን'],format:['Format','ቅርጽ'],variety:['English variety','የእንግሊዝኛ ዓይነት'],
 transcript:['Transcript','ጽሑፍ ቅጂ'],access:['Access','ተደራሽነት'],reuse:['Reuse','እንደገና መጠቀም'],ver:['Verification','ማረጋገጫ'],stage:['Stage','ደረጃ']
};
const t=k=>{const w=W[k];return w?(lang==='am'?w[1]:w[0]):k};
const tf=(k,v)=>t(k).replace(/\{(\w+)\}/g,(_,x)=>v[x]);

/* ---------- labels ---------- */
const VER={page_opened:['opened','Page opened by researcher','ገጹ ተከፍቶ ተረጋግጧል'],listed_on_opened_official_page:['listed','Listed on an official page we opened','በተከፈተ ይፋዊ ገጽ ላይ የተዘረዘረ'],secondary_source_only:['secondary','Described by a secondary source only','በሁለተኛ ምንጭ ብቻ የተገለጸ'],original_content:['original','Original Joyful English lesson','የእንግሊዝኛ በደስታ ኦሪጅናል ትምህርት']};
const verChip=v=>{const x=VER[v]||['','',''];return `<span class="chip v-${x[0]}" title="${esc(lang==='am'?x[2]:x[1])}">${esc(lang==='am'?x[2]:x[1])}</span>`};
const SK={listening:'Listening',reading:'Reading',writing:'Writing',speaking:'Speaking',grammar:'Grammar',vocabulary:'Vocabulary',pronunciation:'Pronunciation',phonics:'Phonics',academic:'Academic',professional:'Professional','exam-skills':'Exam skills'};
const AGE={'early-years':'Early years (2–5)',child:'Children (5–12)',teen:'Teens (13–17)',adult:'Adults',teacher:'Teachers / parents'};
const LV=['Pre-A1','A1','A2','B1','B2','C1','C2'];

/* ---------- navigation ---------- */
const STAGEPAGES={kinder:['0','1'],primary:['2'],teen:['2','3','4'],adult:['2','3','4'],advanced:['5','6'],pro:['W']};
const LIBS={reading:{sk:['reading']},listening:{sk:['listening']},speaking:{sk:['speaking']},writing:{sk:['writing']},grammar:{sk:['grammar','vocabulary']},pron:{sk:['pronunciation','phonics']},quiz:{fmt:['quiz','interactive']}};
function nav(){const cur=location.hash||'#/home';
 const a=(h,k,n)=>`<a href="${h}" ${cur===h?'aria-current="page"':''}><span>${esc(t(k))}</span>${n!=null?`<span class="n">${n}</span>`:''}</a>`;
 $('#nav').innerHTML=a('#/home','home')+a('#/start','start')+`<h2>${esc(t('learn'))}</h2>`+['kinder','primary','teen','adult','advanced','pro'].map(k=>a('#/stage/'+k,k)).join('')+
  `<h2>${esc(t('libs'))}</h2>`+Object.keys(LIBS).map(k=>a('#/lib/'+k,k,filterLib(LIBS[k]).length)).join('')+a('#/dir','dir',CAT.length)+
  `<h2>${esc(t('you'))}</h2>`+a('#/progress','progress',Object.keys(done).length)+a('#/guide','guide');
 document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
 document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
 document.documentElement.lang=lang}

/* ---------- resource card ---------- */
function card(r,opts={}){
 const ext=r.o!=='original';const href=ext?r.u:r.u;
 const chips=[...(r.c||[]).map(c=>`<span class="chip">${esc(c)}</span>`),...(r.sk||[]).map(s=>`<span class="chip">${esc(SK[s]||s)}</span>`),...(r.f||[]).map(f=>`<span class="chip">${esc(f)}</span>`)].join('');
 return `<article class="card res" data-id="${esc(r.id)}"><h3>${esc(r.t)}</h3>
  <div class="prov">${esc(r.p)}${r.va&&r.va!=='unknown'?' · '+esc(r.va)+' English':''}${r.pr&&r.pr!=='unknown'?' · '+esc(r.pr):''}</div>
  <div class="chips">${chips}${verChip(r.v)}</div>
  ${opts.brief?'':`<p class="note" style="margin:0">${esc(r.ob&&!/^not stated/.test(r.ob)?r.ob:r.to)}</p>`}
  ${r.li&&!opts.brief?`<div class="lim">⚠ ${esc(r.li)}</div>`:''}
  <div class="row"><a class="btn-s primary" href="${esc(href)}" ${ext?'target="_blank" rel="noopener noreferrer"':''} data-open="${esc(r.id)}">${ext?esc(t('open')):'▶ '+esc(t('joy'))}</a>
   <button class="btn-s" data-bm="${esc(r.id)}" aria-pressed="${!!bm[r.id]}">${esc(t(bm[r.id]?'saved':'save'))}</button>
   <button class="btn-s" data-done="${esc(r.id)}" aria-pressed="${!!done[r.id]}">${esc(t(done[r.id]?'marked':'mark'))}</button>
   <button class="btn-s" data-note="${esc(r.id)}" aria-expanded="false">✎ ${esc(t('note'))}</button></div>
  <div class="note-box" hidden><textarea rows="2" aria-label="${esc(t('note'))}" data-notefor="${esc(r.id)}">${esc(notes[r.id]||'')}</textarea></div>
 </article>`}

/* ---------- pages ---------- */
function stageProgress(s){const ids=[...new Set(s.modules.flatMap(m=>m.resources))];const n=ids.filter(i=>done[i]).length;return [n,ids.length]}
function pageHome(){
 const stages=CUR.stages;
 return `<h1>Joyful English Web Book</h1><p class="lead">${lang==='am'?'ከመጀመሪያ የእንግሊዝኛ ቃላት እስከ ሙያዊ እንግሊዝኛ ነጻና የተደራጀ መንገድ። ምንጮቹ በይፋዊ ገጾች ላይ ተፈትሸዋል፤ የእንግሊዝኛ በደስታ ትምህርቶች ደግሞ ለመናገርና ለማዳመጥ ይረዳሉ። መጽሐፉ በሙሉ የብሪቲሽ እንግሊዝኛን (አጻጻፍና አነባበብ) ይጠቀማል።':'A free, structured path from first English words to professional English. Every external resource was checked on the provider\'s official pages, and Joyful English lessons add speaking and listening practice. The book uses British English (spelling and accent) throughout; other varieties appear only when you choose them in the filters.'}</p>
 <p><a class="btn-s primary" href="#/start">${esc(t('start'))} →</a> <a class="btn-s" href="#/dir">${esc(t('dir'))}</a></p>
 <h2>${esc(t('learn'))}</h2><div class="grid">${stages.map(s=>{const [a,b]=stageProgress(s);return `<a class="card stage-card" href="#/s/${s.id}"><b>${esc(s.name)}</b><span class="meta">${esc(s.cefr)} · ${esc(s.grades)}</span><span>${esc(s.goal)}</span><div class="bar" aria-label="${a} of ${b} done"><i style="width:${b?a/b*100:0}%"></i></div><span class="meta">${a}/${b} ✓</span></a>`}).join('')}</div>
 <h2>${lang==='am'?'ደረጃ፣ ክፍልና CEFR':'Stages, grades and CEFR'}</h2>${mapTable()}
 <p class="note">${lang==='am'?'የትምህርት ቤት ክፍልና የCEFR ደረጃ አንድ አይደሉም። በክፍላችሁ ሳይሆን በእውነተኛ ደረጃችሁ ጀምሩ።':'School grade and CEFR level are not the same thing. Start at your real level, not your grade.'}</p>`}
function mapTable(){return `<div style="overflow-x:auto"><table class="map"><thead><tr><th>CEFR</th><th>${esc(t('grades'))}</th><th>Joyful English</th><th>${esc(t('stage'))}</th></tr></thead><tbody>${CUR.map.map(m=>`<tr><td>${esc(m.cefr)}</td><td>${esc(m.grades)}</td><td>${esc(m.joyful)}</td><td><a href="#/s/${esc(m.stage.split('–')[0])}">${esc(m.stage)}</a></td></tr>`).join('')}</tbody></table></div>`}
function pageStage(id){
 const s=CUR.stages.find(x=>x.id===id);if(!s)return pageHome();
 const idx=CUR.stages.indexOf(s),nx=CUR.stages[idx+1];
 return `<h1>${esc(s.name)}</h1><p class="lead">${esc(s.goal)}</p>
 <div class="chips"><span class="chip">CEFR ${esc(s.cefr)}</span><span class="chip">${esc(t('ages'))}: ${esc(s.ages)}</span><span class="chip">${esc(t('grades'))}: ${esc(s.grades)}</span><span class="chip">${esc(s.track)}</span></div>
 <p><b>${esc(t('prereq'))}:</b> ${esc(s.prereq)}</p>
 ${s.modules.map(m=>{const n=m.resources.filter(i=>done[i]).length;return `<section class="module card" id="m-${esc(m.id)}"><header><h2 style="margin:0">${esc(m.id)} · ${esc(m.title)}</h2><span class="note">${n}/${m.resources.length} ✓ · ${esc(m.time)}</span></header>
  <div class="bar"><i style="width:${n/m.resources.length*100}%"></i></div>
  <p style="margin:.6em 0 .2em"><b>${esc(t('objectives'))}</b></p><ul>${m.objectives.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>
  ${m.joyful?`<p><a class="btn-s primary" href="../l${m.joyful}-1.html">▶ ${esc(t('joy'))}: Level ${m.joyful}, Lesson 1</a></p>`:''}
  <div class="grid">${m.resources.map(i=>BYID[i]?card(BYID[i],{brief:true}):'').join('')}</div>
  <p class="note"><b>${esc(t('assess'))}:</b> ${esc(m.assessment)}</p></section>`}).join('')}
 <section class="card"><h2 style="margin-top:0">${esc(t('assess'))}</h2><p>${esc(s.assessment)}</p></section>
 ${nx?`<p class="more"><a class="btn-s primary" href="#/s/${nx.id}">${esc(t('next'))}: ${esc(nx.name)} →</a></p>`:''}`}
function pageStageGroup(k){
 const ids=STAGEPAGES[k];const ageF={teen:'teen',adult:'adult'}[k];
 const extra=ageF?`<h2>${lang==='am'?'ተጨማሪ ለ':'More for '}${esc(t(k))}</h2><div class="grid">${CAT.filter(r=>(r.age||[]).includes(ageF)&&r.ty!=='lesson').slice(0,12).map(r=>card(r,{brief:true})).join('')}</div>`:'';
 return `<h1>${esc(t(k))}</h1><p class="lead">${lang==='am'?'ደረጃ ምረጡ፦':'Choose a stage:'}</p><div class="grid">${ids.map(i=>{const s=CUR.stages.find(x=>x.id===i);const [a,b]=stageProgress(s);return `<a class="card stage-card" href="#/s/${s.id}"><b>${esc(s.name)}</b><span class="meta">${esc(s.cefr)} · ${esc(s.ages)}</span><span>${esc(s.goal)}</span><div class="bar"><i style="width:${b?a/b*100:0}%"></i></div></a>`}).join('')}</div>${extra}`}
/* directory with filters */
let F={q:'',c:'',sk:'',age:'',f:'',va:'British',tr:'',pr:'',pu:'',v:''},LIMIT=40;
function match(r,f){
 if(f.q){const q=f.q.toLowerCase();if(!(r.t+' '+r.to+' '+r.p).toLowerCase().includes(q))return false}
 if(f.c&&!(r.c||[]).includes(f.c))return false; if(f.sk&&!(r.sk||[]).includes(f.sk))return false; if(f.age&&!(r.age||[]).includes(f.age))return false;
 if(f.f&&!(r.f||[]).includes(f.f))return false; if(f.va&&r.va!==f.va)return false; if(f.v&&r.v!==f.v)return false;
 if(f.tr==='yes'&&!String(r.tr).startsWith('yes'))return false;
 if(f.pr==='free'&&!/^free/.test(String(r.pr)))return false;
 if(f.pu==='open'&&!/open licence|public domain|may be reused|free to copy/i.test(String(r.pu)))return false;
 if(f.pu==='link'&&!/^link only/.test(String(r.pu)))return false;
 return true}
function filterLib(L){return CAT.filter(r=>(!L.sk||(r.sk||[]).some(s=>L.sk.includes(s)))&&(!L.fmt||(r.f||[]).some(x=>L.fmt.includes(x))))}
const opts=(arr,cur)=>`<option value="">${esc(t('all'))}</option>`+arr.map(([v,l])=>`<option value="${esc(v)}" ${cur===v?'selected':''}>${esc(l)}</option>`).join('');
function filtersHTML(){const uniq=k=>[...new Set(CAT.flatMap(r=>[].concat(r[k]||[])))].sort();
 return `<input class="search" id="fq" type="search" placeholder="${esc(t('search'))}" value="${esc(F.q)}" aria-label="${esc(t('search'))}">
 <div class="filters">
  <label>${esc(t('level'))}<select data-f="c">${opts(LV.map(x=>[x,x]),F.c)}</select></label>
  <label>${esc(t('skill'))}<select data-f="sk">${opts(Object.entries(SK),F.sk)}</select></label>
  <label>${esc(t('age'))}<select data-f="age">${opts(Object.entries(AGE),F.age)}</select></label>
  <label>${esc(t('format'))}<select data-f="f">${opts(uniq('f').map(x=>[x,x]),F.f)}</select></label>
  <label>${esc(t('variety'))}<select data-f="va">${opts([['British','British'],['American','American'],['international','International']],F.va)}</select></label>
  <label>${esc(t('transcript'))}<select data-f="tr">${opts([['yes','Transcript available']],F.tr)}</select></label>
  <label>${esc(t('access'))}<select data-f="pr">${opts([['free','Free']],F.pr)}</select></label>
  <label>${esc(t('reuse'))}<select data-f="pu">${opts([['open','Open licence / public domain'],['link','Link only']],F.pu)}</select></label>
  <label>${esc(t('ver'))}<select data-f="v">${opts(Object.entries(VER).map(([k,v])=>[k,v[1]]),F.v)}</select></label>
 </div>`}
function pageList(title,lead,base){
 const list=base.filter(r=>match(r,F)).sort((a,b)=>(a.va!=='British')-(b.va!=='British'));
 return `<h1>${esc(title)}</h1><p class="lead">${esc(lead)}</p>${filtersHTML()}<p class="count" aria-live="polite">${esc(tf('results',{n:list.length}))}</p>
 <div class="grid" id="list">${list.slice(0,LIMIT).map(r=>card(r)).join('')}</div>${list.length>LIMIT?`<p class="more"><button class="btn-s" id="moreBtn">${esc(t('showMore'))} (${list.length-LIMIT})</button></p>`:''}`}
const LIBLEAD={reading:['Stories, articles and libraries from beginner to advanced. Open-licence libraries (StoryWeaver, African Storybook) can be printed and translated.','ከጀማሪ እስከ ላቀ ደረጃ ታሪኮች፣ ጽሑፎችና ቤተ መጻሕፍት።'],listening:['Audio and video lessons with tasks; filter for transcripts.','ተግባራት ያሏቸው የድምፅና የቪዲዮ ትምህርቶች፤ ጽሑፍ ቅጂ ያላቸውን አጣሩ።'],speaking:['Phrases for real conversations. Practise aloud with the Joyful English microphone lessons too.','ለእውነተኛ ውይይት አገላለጾች።'],writing:['Model texts, emails, essays and reports, plus Write & Improve for instant feedback.','የናሙና ጽሑፎች፣ ኢሜይሎች፣ ድርሰቶችና ሪፖርቶች።'],grammar:['Grammar explanations with tests, and topic vocabulary by level.','ሰዋስው ከፈተና ጋር፣ የቃላት ዝርዝሮች በደረጃ።'],pron:['Sounds, phonics and pronunciation. Joyful English lessons train the sounds Amharic speakers find hard.','ድምፆች፣ ፎኒክስና አነባበብ።'],quiz:['Activities with questions or interactive tasks.','ጥያቄዎችና በይነ-ተግባራዊ ተግባራት ያሏቸው።']};
function pageStart(){
 const P=store.get('jeb-place',null);
 const CAN=[['Pre-A1','I can say hello, my name and numbers to 10.','ሰላምታ፣ ስሜንና እስከ 10 ቁጥሮችን መናገር እችላለሁ።'],['A1','I can talk about my family and my day in simple sentences.','ስለ ቤተሰቤና ስለ ቀኔ በቀላል ዓረፍተ ነገሮች መናገር እችላለሁ።'],['A2','I can tell what happened yesterday and read short messages.','ትናንት የሆነውን መናገርና አጫጭር መልእክቶችን ማንበብ እችላለሁ።'],['B1','I can give my opinion with reasons and follow a short talk.','አስተያየቴን በምክንያት መስጠትና አጭር ንግግር መከተል እችላለሁ።'],['B2','I can argue a point, read newspaper articles and write a formal email.','ሐሳብን መከራከር፣ የጋዜጣ ጽሑፍ ማንበብና መደበኛ ኢሜይል መጻፍ እችላለሁ።'],['C1','I can follow lectures and write an academic essay with sources.','ሌክቸርን መከተልና ምንጭ ያለው አካዳሚያዊ ድርሰት መጻፍ እችላለሁ።']];
 const Q=[['She ___ to school every day.',['go','goes','going'],1,'A1'],['Yesterday we ___ to the market.',['go','went','gone'],1,'A2'],['If it rains, we ___ at home.',['stay','will stay','stayed'],1,'B1'],['I have lived here ___ 2019.',['for','since','from'],1,'B1'],['The report ___ by the manager last week.',['wrote','was written','has written'],1,'B2'],['Had I known, I ___ earlier.',['would come','would have come','will come'],1,'B2'],['Not only ___ late, but he also forgot the slides.',['he was','was he','he is'],1,'C1'],['The results ___ that more research is needed.',['suggest','suggesting','are suggest'],0,'B2']];
 return `<h1>${esc(t('start'))}</h1><p class="lead">${lang==='am'?'ሁለት አጭር ክፍሎች፦ ራስን መገምገምና 8 ጥያቄዎች። ውጤቱ የሚጀምሩበትን ደረጃ ይጠቁማል (ግምት እንጂ ይፋዊ ፈተና አይደለም)።':'Two short parts: a self-check and 8 questions. The result suggests where to start. It is a guide, not an official test.'}</p>
 <form id="place">${CAN.map(([l,en,am],i)=>`<div class="q"><fieldset><legend>${esc(lang==='am'?am:en)}</legend>${['Yes','Partly','Not yet'].map((o,j)=>`<label><input type="radio" name="c${i}" value="${2-j}" ${j===2?'checked':''}> ${esc(lang==='am'?['አዎ','በከፊል','ገና'][j]:o)}</label>`).join('')}</fieldset></div>`).join('')}
 <h2>${lang==='am'?'8 ጥያቄዎች':'8 questions'}</h2>${Q.map(([q,o],i)=>`<div class="q"><fieldset><legend>${i+1}. ${esc(q)}</legend>${o.map((x,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${esc(x)}</label>`).join('')}</fieldset></div>`).join('')}
 <button class="btn-s primary" type="submit">${lang==='am'?'ደረጃዬን አሳየኝ':'Show my starting point'}</button></form><div id="placeOut" aria-live="polite">${P?placeHTML(P):''}</div>`}
function placeHTML(P){const s=CUR.stages.find(x=>x.id===P.stage);const m=CUR.map.find(x=>x.cefr===P.cefr)||{};
 return `<section class="card" style="margin-top:14px"><h2 style="margin-top:0">${lang==='am'?'የምትጀምሩበት':'Your starting point'}: ${esc(P.cefr)}</h2><p>${lang==='am'?'የሚመከር ደረጃ':'Recommended stage'}: <a href="#/s/${esc(s.id)}">${esc(s.name)}</a>${m.joyful&&m.joyful!=='—'?` · Joyful English ${esc(m.joyful)}`:''}</p><p class="note">${lang==='am'?'የሚመስላችሁ ከሆነ አንድ ደረጃ ዝቅ ብላችሁ ጀምሩና በፍጥነት ውጡ።':'If unsure, start one stage lower and move up quickly.'}</p><p><a class="btn-s primary" href="#/s/${esc(s.id)}">${esc(t('next'))} →</a></p></section>`}
function scorePlace(form){
 const fd=new FormData(form);let self=0;for(let i=0;i<6;i++){const v=+fd.get('c'+i);if(v===2)self=i+1;else if(v===1&&self===i)self=i+0.5}
 const Q=[1,1,1,1,1,1,1,0],L=['A1','A2','B1','B1','B2','B2','C1','B2'];const ok={};L.forEach((l,i)=>{ok[l]=ok[l]||[0,0];ok[l][1]++;if(+fd.get('q'+i)===Q[i]&&fd.get('q'+i)!==null)ok[l][0]++});
 let q=0;['A1','A2','B1','B2','C1'].forEach((l,i)=>{if(ok[l]&&ok[l][0]/ok[l][1]>=.5&&q===i)q=i+1});
 const lvl=Math.max(0,Math.min(Math.floor(self),q+1));const cefr=['Pre-A1','Pre-A1','A1','A2','B1','B2','C1'][Math.min(6,lvl)];
 const stage={'Pre-A1':'1','A1':'2','A2':'2','B1':'3','B2':'4','C1':'5'}[cefr];return {cefr,stage,at:Date.now()}}
function pageProgress(){
 const ids=Object.keys(bm).filter(i=>BYID[i]);
 return `<h1>${esc(t('progress'))}</h1><div class="grid">${CUR.stages.map(s=>{const [a,b]=stageProgress(s);return `<a class="card stage-card" href="#/s/${s.id}"><b>${esc(s.name)}</b><div class="bar"><i style="width:${b?a/b*100:0}%"></i></div><span class="meta">${a}/${b} ✓</span></a>`}).join('')}</div>
 <h2>${esc(t('saved'))}</h2>${ids.length?`<div class="grid">${ids.map(i=>card(BYID[i],{brief:true})).join('')}</div>`:`<p class="note">${esc(t('noBm'))}</p>`}
 <h2>${esc(t('notes'))}</h2><textarea id="gnote" rows="6" style="width:100%;box-sizing:border-box" aria-label="${esc(t('notes'))}">${esc(notes._general||'')}</textarea>
 ${Object.keys(notes).filter(k=>k!=='_general'&&notes[k]&&BYID[k]).map(k=>`<p class="note"><b>${esc(BYID[k].t)}:</b> ${esc(notes[k])}</p>`).join('')}
 <p class="more"><button class="btn-s" id="resetBtn">${esc(t('reset'))}</button></p><p class="note">${lang==='am'?'እድገታችሁ፣ ዕልባቶችና ማስታወሻዎች የሚቀመጡት በዚህ መሣሪያ ላይ ብቻ ነው፤ መለያ አያስፈልግም።':'Progress, bookmarks and notes are saved on this device only. No account is needed.'}</p>`}
function pageGuide(){
 const c={};CAT.forEach(r=>c[r.v]=(c[r.v]||0)+1);
 return `<h1>${esc(t('guide'))}</h1>
 <h2>${lang==='am'?'እንዴት ይጠቀሙበታል':'How to use the web book'}</h2><ol><li>${lang==='am'?'ተማሪው «ከዚህ ጀምሩ» የሚለውን አጭር ምዘና እንዲሠራ ያድርጉ።':'Let the learner take the short "Start here" check.'}</li><li>${lang==='am'?'በተመከረው ደረጃ ሞጁሎችን በቅደም ተከተል ይሥሩ፤ የእንግሊዝኛ በደስታ ትምህርቱን ለንግግር ልምምድ ይጠቀሙ።':'Work through the modules of the recommended stage in order; use the Joyful English lesson for speaking practice.'}</li><li>${lang==='am'?'የተሠሩትን «ጨርሻለሁ» ብለው ምልክት ያድርጉ፤ በሞጁሉ መጨረሻ «ራሳችሁን ፈትሹ» የሚለውን ይሥሩ።':'Mark resources done and do the "Check yourself" task at the end of each module.'}</li><li>${lang==='am'?'ለተወሰነ ክህሎት ቤተ መጻሕፍቱንና ማውጫውን ይጠቀሙ።':'Use the libraries and the directory to practise one skill.'}</li></ol>
 <h2>${lang==='am'?'ምንጮቹ እንዴት ተረጋገጡ':'How resources were checked'}</h2>
 <p>${lang==='am'?'እያንዳንዱ ምንጭ የማረጋገጫ ምልክት አለው፦':'Every resource carries a verification label:'}</p><ul>${Object.entries(VER).map(([k,v])=>`<li>${verChip(k)} ${c[k]||0}</li>`).join('')}</ul>
 <p>${lang==='am'?'ጥናቱ የተካሄደው በ':'Research was carried out on '}${esc(CAT[0]?CAT[0].d:'')}. ${lang==='am'?'ተደራሽ ያልሆኑ ገጾች «አልተረጋገጠም» ተብለዋል፤ ያልታዩ መረጃዎች «not stated» ተብለዋል።':'Pages the research tool could not open are labelled as such, and details we did not see are recorded as "not stated", never guessed.'}</p>
 <h2>${lang==='am'?'የብሪቲሽ እንግሊዝኛ':'British English'}</h2><p>${lang==='am'?'መጽሐፉና የእንግሊዝኛ በደስታ ትምህርቶች የብሪቲሽ አጻጻፍና አነባበብ ይጠቀማሉ (colour, practise, centre)። የንግግር ልምምዱ የብሪቲሽ ድምፅና የብሪቲሽ የንግግር ማወቂያ ይጠቀማል። ቤተ መጻሕፍቱ በነባሪ የብሪቲሽ ምንጮችን ያሳያሉ፤ የአሜሪካ ምንጮችን ለማየት ማጣሪያውን «ሁሉም» አድርጉ። ጥቂት የአካዳሚያዊ አጻጻፍ መመሪያዎች (Purdue OWL) የአሜሪካ አጻጻፍ ይጠቀማሉ፤ በራሳችሁ ጽሑፍ የብሪቲሽ አጻጻፍ ተከተሉ።':'The book and the Joyful English lessons use British spelling and pronunciation (colour, practise, centre). Speaking practice uses a British voice and British speech recognition. Libraries show British resources by default; set the English variety filter to “All” to see American ones. A few academic writing guides (Purdue OWL) use American spelling: follow British spelling in your own writing.'}</p>
 <h2>${lang==='am'?'ደረጃና ክፍል':'Levels and grades'}</h2>${mapTable()}
 <h2>${lang==='am'?'የቅጂ መብት':'Copyright'}</h2><p>${lang==='am'?'የውጭ ትምህርቶች ይዘት እዚህ አልተቀዳም፤ ማገናኛ ብቻ ነው። በክፍት ፈቃድ ያሉ ቤተ መጻሕፍት (StoryWeaver, African Storybook, Project Gutenberg) ማተምና መተርጎም ይፈቅዳሉ፤ ለእያንዳንዱ ታሪክ ፈቃዱን ያረጋግጡ።':'No external lesson content is copied here; the book links to each provider. Open-licence libraries (StoryWeaver, African Storybook, Project Gutenberg) allow printing and translation; check the licence of each item.'}</p>
 <h2>${lang==='am'?'ሰነዶችና መረጃ':'Documents and data'}</h2><ul><li><a href="docs/research-report.md">Research report</a></li><li><a href="docs/curriculum-blueprint.md">Curriculum blueprint</a></li><li><a href="docs/expansion-plan.md">Expansion plan</a></li><li><a href="data/catalog.csv">Catalogue (CSV)</a> · <a href="data/catalog.json">Catalogue (JSON)</a> · <a href="data/curriculum.json">Curriculum (JSON)</a></li></ul>`}

/* ---------- router ---------- */
function route(){
 const h=(location.hash||'#/home').slice(2).split('/');let html;
 const key=h.slice(0,2).join('/');if(key!==route.last){if(h[0]==='lib'||h[0]==='dir'){F={q:'',c:'',sk:'',age:'',f:'',va:'British',tr:'',pr:'',pu:'',v:''};LIMIT=40}route.last=key}
 if(h[0]==='s')html=pageStage(h[1]);
 else if(h[0]==='stage')html=pageStageGroup(h[1]);
 else if(h[0]==='lib'&&LIBS[h[1]])html=pageList(t(h[1]),lang==='am'?LIBLEAD[h[1]][1]:LIBLEAD[h[1]][0],filterLib(LIBS[h[1]]));
 else if(h[0]==='dir')html=pageList(t('dir'),lang==='am'?'ሁሉም ምንጮች በአንድ ቦታ፤ በደረጃ፣ በክህሎት፣ በዕድሜና በሌሎችም አጣሩ።':'Every resource in one place. Filter by level, skill, age, format, transcript, access and reuse permission.',CAT);
 else if(h[0]==='start')html=pageStart();
 else if(h[0]==='progress')html=pageProgress();
 else if(h[0]==='guide')html=pageGuide();
 else html=pageHome();
 $('#main').innerHTML=html;nav();$('#nav').classList.remove('open');$('#menuBtn').setAttribute('aria-expanded','false');
 bind()}
function rerenderList(){const y=scrollY;route();scrollTo(0,y)}
function bind(){
 const fq=$('#fq');if(fq){fq.oninput=()=>{F.q=fq.value;LIMIT=40;const p=fq.selectionStart;route();const n=$('#fq');n.focus();n.setSelectionRange(p,p)}}
 document.querySelectorAll('[data-f]').forEach(s=>s.onchange=()=>{F[s.dataset.f]=s.value;LIMIT=40;rerenderList();const n=document.querySelector(`[data-f="${s.dataset.f}"]`);n&&n.focus()});
 const mb=$('#moreBtn');if(mb)mb.onclick=()=>{LIMIT+=40;rerenderList()};
 const pf=$('#place');if(pf)pf.onsubmit=e=>{e.preventDefault();const P=scorePlace(pf);store.set('jeb-place',P);$('#placeOut').innerHTML=placeHTML(P);$('#placeOut').scrollIntoView({behavior:'smooth'})};
 const gn=$('#gnote');if(gn)gn.oninput=()=>{notes._general=gn.value;save()};
 const rb=$('#resetBtn');if(rb)rb.onclick=()=>{done={};bm={};notes={};save();route()};
}
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-bm],[data-done],[data-note]');if(!b)return;
 if(b.dataset.bm){const i=b.dataset.bm;bm[i]?delete bm[i]:bm[i]=Date.now();save();b.setAttribute('aria-pressed',String(!!bm[i]));b.textContent=t(bm[i]?'saved':'save')}
 if(b.dataset.done){const i=b.dataset.done;done[i]?delete done[i]:done[i]=Date.now();save();b.setAttribute('aria-pressed',String(!!done[i]));b.textContent=t(done[i]?'marked':'mark');nav()}
 if(b.dataset.note){const box=b.closest('.res').querySelector('.note-box');box.hidden=!box.hidden;b.setAttribute('aria-expanded',String(!box.hidden));if(!box.hidden)box.querySelector('textarea').focus()}
});
document.addEventListener('input',e=>{const ta=e.target.closest('[data-notefor]');if(ta){notes[ta.dataset.notefor]=ta.value;save()}});
document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;store.set('g3-lang',lang);route()});
$('#menuBtn').onclick=()=>{const n=$('#nav');n.classList.toggle('open');$('#menuBtn').setAttribute('aria-expanded',String(n.classList.contains('open')))};
addEventListener('hashchange',()=>{route();$('#main').focus({preventScroll:true});scrollTo(0,0)});
route();
window.JEB={route,match,scorePlace,count:()=>CAT.length};
})();
