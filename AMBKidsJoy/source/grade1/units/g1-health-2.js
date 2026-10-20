/* 1ኛ ክፍል ጤናና ሰ/ማጎልመሻ · ምዕራፍ 2 · ሪትሚካዊ እንቅስቃሴ */
(function(){
const SN={en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'};
const {tx,esc}=G3;
Unit.start({id:'g1-health-2',grade:1,subject:'health',subjectName:SN,chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Rhythmic movement',am:'ሪትሚካዊ (የምት) እንቅስቃሴ'},
 footer:{en:'Built on the Grade 1 Health & PE student book, Chapter 2: simple and repeated rhythmic movements with counting and clapping.',am:'በ1ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ፦ በመቁጠርና በማጨብጨብ የሚሠሩ ቀላልና ተከታታይ የምት እንቅስቃሴዎች።'},
 missions:[
 {title:{en:'Copy the beat',am:'ምቱን ድገሙ'},type:'custom',
  tip:{en:'Rhythm is a pattern that repeats. Listen to the beat, then tap the same pattern: 👏 = clap, 🦶 = stamp.',am:'ምት የሚደጋገም ቅደም ተከተል ነው። ምቱን አዳምጡ፣ ከዚያ ያንኑ ድገሙ፦ 👏 = ማጨብጨብ፣ 🦶 = መርገጥ።'},
  init(st){st.r=0;st.tap=[];st.msg='';st.cls=''},
  render(p,api,st){const R=[['👏','👏','🦶'],['👏','🦶','👏','🦶'],['🦶','🦶','👏','👏'],['👏','👏','👏','🦶']];
   if(st.r>=R.length){p.innerHTML=`<div class="explain">${tx({en:'You are a rhythm star! Now try it with music.',am:'የምት ኮከብ ናችሁ! አሁን በሙዚቃ ሞክሩ።'})}</div>`;return}
   const pat=R[st.r];
   p.innerHTML=`<div class="progress">${tx({en:'Pattern {i} of {n}',am:'ቅደም ተከተል {i} ከ{n}'},{i:st.r+1,n:R.length})}</div>
    <div class="bigq" style="letter-spacing:8px">${pat.join(' ')}</div>
    <div class="row" style="justify-content:center"><button class="btn" data-act="play">▶ ${tx({en:'Hear the beat',am:'ምቱን ስሙ'})}</button></div>
    <div class="bigq" style="min-height:64px;letter-spacing:8px">${st.tap.join(' ')||'…'}</div>
    <div class="opts" data-pat="${pat.join(',')}" data-done="${st.tap.length}"><button class="opt" data-b="👏"><span class="emo">👏</span></button><button class="opt" data-b="🦶"><span class="emo">🦶</span></button></div>
    <div class="feedback center ${st.cls}">${st.msg}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.act==='play'){pat.forEach((x,i)=>setTimeout(()=>api.S.tick(),i*450));return}
    if(b.dataset.b){st.tap.push(b.dataset.b);api.S.tick();const k=st.tap.length-1;
     if(st.tap[k]!==pat[k]){st.msg=tx({en:'Oops! Start again.',am:'ኧረ! እንደገና ጀምሩ።'});st.cls='bad';st.tap=[]}
     else if(st.tap.length===pat.length){st.r++;st.tap=[];st.msg=tx({en:'Perfect rhythm!',am:'ፍጹም ምት!'});st.cls='good';api.S.yay();if(st.r>=R.length)api.complete()}
     else{st.msg='';st.cls=''}
     api.rerender()}}}},
 K1.moveMission({en:'Count and move',am:'እየቆጠራችሁ ተንቀሳቀሱ'},{en:'Count 1, 2, 3, 4 out loud and move to the count.',am:'1፣ 2፣ 3፣ 4 ጮክ ብላችሁ እየቆጠራችሁ ተንቀሳቀሱ።'},[
  {pose:'stand',en:'March on the spot: 1, 2, 3, 4',am:'በቦታ ላይ ተራመዱ፦ 1፣ 2፣ 3፣ 4',n:8},{pose:'squat',en:'Sit, clap the ground with both hands, stand',am:'ቁጭ በሉ፣ በሁለት እጅ መሬቱን ምቱ፣ ተነሱ',n:4},{pose:'side',en:'Step right, together, left, together',am:'ወደ ቀኝ ውጡ፣ አገጣጥሙ፣ ወደ ግራ፣ አገጣጥሙ',n:4}]),
 {title:{en:'What comes next?',am:'ቀጥሎ ምን ይመጣል?'},type:'quiz',
  tip:{en:'Rhythmic patterns repeat. Find the next move.',am:'የምት ቅደም ተከተሎች ይደጋገማሉ። ቀጣዩን እንቅስቃሴ ፈልጉ።'},
  items:[{q:'👏 🦶 👏 🦶 👏 ?',o:['🦶','👏'],a:0},{q:'👏 👏 🦶 👏 👏 ?',o:['🦶','👏'],a:0},{q:'⬆️ ⬇️ ⬆️ ⬇️ ?',o:['⬆️','⬇️'],a:0},{q:'👈 👉 👉 👈 👉 ?',o:['👉','👈'],a:0}]},
 {type:'exam',items:[
  {q:{en:'Rhythm is a pattern that…',am:'ምት… ቅደም ተከተል ነው'},o:[{en:'repeats',am:'የሚደጋገም'},{en:'never repeats',am:'የማይደጋገም'}],a:0},
  {q:'👏 🦶 👏 🦶 ?',o:['👏','🦶'],a:0},
  {q:{en:'Moving to music helps our…',am:'በሙዚቃ መንቀሳቀስ… ይረዳል'},o:[{en:'body and mood',am:'ለሰውነትና ለስሜት'},{en:'nothing',am:'ለምንም'}],a:0},
  {q:{en:'We keep the rhythm by…',am:'ምቱን የምንጠብቀው…'},o:[{en:'counting 1, 2, 3, 4',am:'1፣ 2፣ 3፣ 4 በመቁጠር'},{en:'shouting randomly',am:'ያለ ሥርዓት በመጮህ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Rhythmic movement is moving to a steady beat. It trains our body, memory and teamwork.',am:'የምት እንቅስቃሴ በቋሚ ምት መንቀሳቀስ ነው። ሰውነታችንን፣ የማስታወስ ችሎታችንንና ትብብራችንን ያዳብራል።'},
  points:[{en:'A rhythm is a repeating pattern: clap, clap, stamp.',am:'ምት የሚደጋገም ቅደም ተከተል ነው፦ ማጨብጨብ፣ ማጨብጨብ፣ መርገጥ።'},{en:'Count 1-2-3-4 to keep time.',am:'ጊዜውን ለመጠበቅ 1-2-3-4 ቁጠሩ።'},{en:'Simple moves: march, clap, step, bend, turn.',am:'ቀላል እንቅስቃሴዎች፦ መራመድ፣ ማጨብጨብ፣ መውጣት፣ ማጠፍ፣ መዞር።'},{en:'Moving together to music builds teamwork and joy.',am:'በሙዚቃ አብሮ መንቀሳቀስ ትብብርና ደስታ ይፈጥራል።'}],
  words:[['ምት (ሪትም)',{en:'rhythm',am:'የሚደጋገም ቅደም ተከተል'}],['ማጨብጨብ',{en:'clap',am:'እጅ መምታት'}]],
  remember:{en:'Listen first, then move!',am:'መጀመሪያ አዳምጡ፣ ከዚያ ተንቀሳቀሱ!'},
  exam:[[{en:'Clap a pattern for a friend to copy',am:'ጓደኛችሁ እንዲደግመው የጭብጨባ ቅደም ተከተል አሳዩ'},{en:'e.g. 👏👏🦶',am:'ለምሳሌ 👏👏🦶'}],[{en:'March and count to 8',am:'እስከ 8 እየቆጠራችሁ ተራመዱ'},'1, 2, 3 … 8']],
  innovate:{title:{en:'Bottle-cap shaker band',am:'የጠርሙስ ክዳን ማንቀጥቀጫ ባንድ'},text:{en:'Make shakers from bottles and stones and start a class rhythm band.',am:'ከጠርሙስና ከጠጠር ማንቀጥቀጫ ሥሩና የክፍል የምት ባንድ ጀምሩ።'},
   steps:[{en:'Put small stones in a plastic bottle.',am:'በፕላስቲክ ጠርሙስ ውስጥ ትናንሽ ጠጠሮችን አድርጉ።'},{en:'Close it tightly and decorate it.',am:'በደንብ ዝጉትና አስጊጡት።'},{en:'Shake a 4-beat pattern together.',am:'ባለ 4 ምት ቅደም ተከተል አብራችሁ አንቀጥቅጡ።'},{en:'Perform for another class.',am:'ለሌላ ክፍል አቅርቡ።'}]}}}
 ]});
})();
