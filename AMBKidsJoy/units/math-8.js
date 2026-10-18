/* ሒሳብ · ምዕራፍ 8 · መረጃ አያያዝ */
(function(){
const {tx,esc,rnd,shuffle}=G3;
const FRUIT=[{en:'Banana',am:'ሙዝ'},{en:'Orange',am:'ብርቱካን'},{en:'Mango',am:'ማንጎ'},{en:'Avocado',am:'አቮካዶ'}];
const sym=(half)=>`<svg viewBox="0 0 30 30" style="width:26px;height:26px" aria-hidden="true">${half?'<path d="M15 3a12 12 0 0 0 0 24z" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/>':'<circle cx="15" cy="15" r="12" fill="var(--sun)" stroke="var(--ink)" stroke-width="1.5"/><path d="M10 13h1M19 13h1M10 19q5 4 10 0" stroke="var(--ink)" stroke-width="2" fill="none"/>'}</svg>`;
const graph=(vals,per)=>`<div style="display:grid;gap:6px;padding:12px;border-radius:14px;border:2px solid var(--line);background:var(--surface);max-width:460px;margin:0 auto">${vals.map((v,i)=>`<div style="display:grid;grid-template-columns:90px 1fr;gap:8px;align-items:center"><b style="font-family:var(--display)">${esc(tx(FRUIT[i]))}</b><span style="display:flex;flex-wrap:wrap;gap:2px">${Array(Math.floor(v/per)).fill(sym()).join('')}${v%per?sym(true):''}</span></div>`).join('')}<div class="small" style="border-top:1px solid var(--line);padding-top:6px">${sym()} = ${per} ${tx({en:'students',am:'ተማሪዎች'})}</div></div>`;
const TL=n=>{let h='',x=4;const g=Math.floor(n/5),r=n%5;for(let k=0;k<g;k++){for(let i=0;i<4;i++)h+=`<line x1="${x+i*7}" y1="4" x2="${x+i*7}" y2="30"/>`;h+=`<line x1="${x-3}" y1="26" x2="${x+24}" y2="8"/>`;x+=40}for(let i=0;i<r;i++)h+=`<line x1="${x+i*7}" y1="4" x2="${x+i*7}" y2="30"/>`;return `<svg viewBox="0 0 ${x+r*7+6} 34" style="height:30px;width:auto;vertical-align:middle" stroke="currentColor" stroke-width="3" stroke-linecap="round" role="img" aria-label="tally ${n}">${h}</svg>`};
function mkData(){const per=[1,2,2,5][rnd(0,3)];return{per,vals:FRUIT.map(()=>per*rnd(1,7)+(per===2&&Math.random()<.3?1:0))}}
Unit.start({
 id:'math-8',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 8',am:'ምዕራፍ 8'},
 title:{en:'Data Handling',am:'መረጃ አያያዝ'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 8: reading, collecting and drawing picture graphs.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 8 ላይ የተመሰረተ፦ የሥዕል ግራፍ ማንበብ፣ መረጃ መሰብሰብና መሥራት።'},
 missions:[
 {title:{en:'Read a picture graph',am:'የሥዕል ግራፍ ማንበብ'},type:'drill',need:6,
  tip:{en:'Always read the KEY first! If one face = 2 students, then 3 faces = 6 students, and half a face = 1 student.',am:'ሁልጊዜ መጀመሪያ ማብራሪያውን (key) አንብቡ! አንድ ፊት = 2 ተማሪዎች ከሆነ 3 ፊቶች = 6 ተማሪዎች፣ ግማሽ ፊት = 1 ተማሪ ነው።'},
  gen(){const d=mkData();const k=rnd(0,2);let q,ans;
   if(k===0){const i=rnd(0,3);ans=d.vals[i];q={en:`How many students like ${FRUIT[i].en}?`,am:`${FRUIT[i].am} የሚወዱ ስንት ተማሪዎች ናቸው?`}}
   else if(k===1){const i=d.vals.indexOf(Math.max(...d.vals));const o=FRUIT.map(x=>x);return{fig:graph(d.vals,d.per),q:{en:'Which fruit is the favourite?',am:'በጣም የተወደደው ፍራፍሬ የትኛው ነው?'},o,a:i}}
   else{let i=rnd(0,3),j;do{j=rnd(0,3)}while(j===i);ans=Math.abs(d.vals[i]-d.vals[j]);q={en:`How many more students chose ${(d.vals[i]>=d.vals[j]?FRUIT[i]:FRUIT[j]).en} than ${(d.vals[i]>=d.vals[j]?FRUIT[j]:FRUIT[i]).en}?`,am:`${(d.vals[i]>=d.vals[j]?FRUIT[i]:FRUIT[j]).am}ን የመረጡ ከ${(d.vals[i]>=d.vals[j]?FRUIT[j]:FRUIT[i]).am} ስንት ይበልጣሉ?`}}
   return{fig:graph(d.vals,d.per),q,...G3.numOpts(ans,[d.per,-d.per,1,-1])}}},
 {title:{en:'Tally marks',am:'የቆጠራ ምልክቶች'},type:'quiz',
  tip:{en:'When we collect data we use tally marks. Each line is 1. The fifth line crosses the other four to make a group of 5. Count in fives!',am:'መረጃ ስንሰበስብ የቆጠራ ምልክቶችን እንጠቀማለን። እያንዳንዱ መስመር 1 ነው። አምስተኛው መስመር አራቱን ያቋርጣል = 5። በአምስት በአምስት ቁጠሩ!'},
  items:[
   {q:{en:'How many? '+TL(8),am:'ስንት ነው? '+TL(8)},o:['8','5','3','35'],a:0,e:'5 + 3 = 8'},
   {q:{en:'How many? '+TL(12),am:'ስንት ነው? '+TL(12)},o:['12','7','10','22'],a:0,e:'5 + 5 + 2 = 12'},
   {q:{en:'Which shows 6?',am:'6ን የሚያሳየው የትኛው ነው?'},o:[{svg:TL(6)},{svg:TL(4)},{svg:TL(7)}],a:0},
   {q:{en:'Why do we cross every fifth line?',am:'አምስተኛውን መስመር ለምን እናቋርጣለን?'},o:[{en:'To count quickly in fives',am:'በአምስት በአምስት በፍጥነት ለመቁጠር'},{en:'To make it pretty',am:'ለማሳመር'},{en:'It means zero',am:'ዜሮ ማለት ነው'}],a:0}
  ]},
 {title:{en:'Make a picture graph',am:'የሥዕል ግራፍ መሥራት'},type:'custom',
  tip:{en:'A class voted for their favourite fruit. Build the picture graph: one face = 2 students. Use half a face for 1.',am:'አንድ ክፍል የሚወዱትን ፍራፍሬ መረጠ። የሥዕል ግራፉን ሥሩ፦ አንድ ፊት = 2 ተማሪዎች። ለ1 ግማሽ ፊት ተጠቀሙ።'},
  init(st){st.target=FRUIT.map(()=>rnd(1,12));st.v=FRUIT.map(()=>0);st.msg='';st.cls='';st.done=0},
  render(p,api,st){
   p.innerHTML=`<div class="explain"><b>${tx({en:'Votes:',am:'ድምፆች፦'})}</b> ${FRUIT.map((x,i)=>`${esc(tx(x))} ${st.target[i]}`).join(' · ')}</div>
    <div style="display:grid;gap:8px;max-width:560px">${FRUIT.map((x,i)=>`<div style="display:grid;grid-template-columns:90px 1fr auto;gap:8px;align-items:center"><b style="font-family:var(--display)">${esc(tx(x))}</b>
     <span style="display:flex;flex-wrap:wrap;gap:2px;min-height:30px;border-bottom:2px dashed var(--line)">${Array(Math.floor(st.v[i]/2)).fill(sym()).join('')}${st.v[i]%2?sym(true):''}</span>
     <span class="row" style="gap:4px"><button class="btn" data-r="${i}" data-d="-1" style="padding:4px 10px">−</button><button class="btn" data-r="${i}" data-d="1" style="padding:4px 10px">+½</button><button class="btn" data-r="${i}" data-d="2" style="padding:4px 10px">+1</button></span></div>`).join('')}</div>
    <div class="small">${sym()} = 2 · ${sym(true)} = 1</div>
    <div class="row"><button class="btn primary" data-act="check">${tx(api.UI.check)}</button></div><div class="feedback ${st.cls}">${st.msg}</div>
    <div class="progress">${tx({en:'Graphs made: {n}/2',am:'የተሠሩ ግራፎች፦ {n}/2'},{n:st.done})}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b)return;
    if(b.dataset.r!==undefined){const i=+b.dataset.r;st.v[i]=Math.max(0,st.v[i]+ +b.dataset.d);api.S.tick();st.msg=''}
    if(b.dataset.act==='check'){const bad=FRUIT.filter((x,i)=>st.v[i]!==st.target[i]);
     if(!bad.length){st.done++;st.cls='good';st.msg=tx(api.UI.good)+' '+tx({en:'New votes are in!',am:'አዲስ ድምፆች መጥተዋል!'});api.S.yay();if(st.done>=2)api.complete();st.target=FRUIT.map(()=>rnd(1,12));st.v=FRUIT.map(()=>0)}
     else{st.cls='bad';st.msg=tx({en:'Check: ',am:'ፈትሹ፦ '})+bad.map(x=>tx(x)).join(', ');api.S.nope()}}
    api.rerender()}}},
 {title:{en:'Ask a good question',am:'ጥሩ ጥያቄ መጠየቅ'},type:'quiz',
  tip:{en:'Data helps people decide. A shopkeeper, a teacher or a farmer can use data to make smart choices.',am:'መረጃ ሰዎች እንዲወስኑ ይረዳል። ባለሱቅ፣ መምህር ወይም ገበሬ መረጃን ተጠቅሞ ብልህ ውሳኔ ማድረግ ይችላል።'},
  items:[
   {q:{en:'A shopkeeper sold 40 breads on Monday, 25 on Tuesday and 60 on Saturday. On which day should she bake the most?',am:'አንዲት ባለሱቅ ሰኞ 40፣ ማክሰኞ 25፣ ቅዳሜ 60 ዳቦ ሸጠች። በየትኛው ቀን ብዙ መጋገር አለባት?'},o:[{en:'Saturday',am:'ቅዳሜ'},{en:'Tuesday',am:'ማክሰኞ'},{en:'Monday',am:'ሰኞ'}],a:0},
   {q:{en:'You want to know the favourite sport in your class. What do you do first?',am:'የክፍላችሁን ተወዳጅ ስፖርት ማወቅ ትፈልጋላችሁ። መጀመሪያ ምን ታደርጋላችሁ?'},o:[{en:'Ask everyone and record tally marks',am:'ሁሉንም ጠይቆ በቆጠራ ምልክት መመዝገብ'},{en:'Guess',am:'መገመት'},{en:'Ask only one friend',am:'አንድ ጓደኛ ብቻ መጠየቅ'}],a:0},
   {q:{en:'In a picture graph, one symbol = 5 cows. A farmer has 4 symbols. How many cows?',am:'በሥዕል ግራፍ አንድ ምልክት = 5 ላሞች። አንድ ገበሬ 4 ምልክቶች አሉት። ስንት ላሞች?'},o:['20','4','9','45'],a:0}
  ]},
 {type:'exam',items:[
   {q:{en:'Key: one symbol = 2. A row has 5 symbols. Total?',am:'ማብራሪያ፦ አንድ ምልክት = 2። አንድ ረድፍ 5 ምልክቶች አሉት። ድምሩ?'},o:['10','5','7','12'],a:0},
   {q:{en:'Key: one symbol = 2. How do you show 7?',am:'ማብራሪያ፦ አንድ ምልክት = 2። 7ን እንዴት ታሳያላችሁ?'},o:[{en:'3 and a half symbols',am:'3 ተኩል ምልክቶች'},{en:'7 symbols',am:'7 ምልክቶች'},{en:'2 symbols',am:'2 ምልክቶች'}],a:0},
   {q:{en:'Tally '+TL(16)+' = ?',am:'ቆጠራ '+TL(16)+' = ?'},o:['16','4','15','31'],a:0},
   {q:{en:'What must every picture graph have?',am:'እያንዳንዱ የሥዕል ግራፍ ምን ሊኖረው ይገባል?'},o:[{en:'A title and a key',am:'ርዕስና ማብራሪያ'},{en:'Colours only',am:'ቀለም ብቻ'},{en:'Nothing',am:'ምንም'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Data are facts we collect. Graphs show data so we can compare quickly and make smart decisions.',am:'መረጃ የምንሰበስባቸው እውነታዎች ነው። ግራፎች መረጃን ስለሚያሳዩ በፍጥነት አነጻጽረን ብልህ ውሳኔ እንወስናለን።'},
  points:[{en:'Collect data by asking a question and recording tally marks.',am:'መረጃ የሚሰበሰበው ጥያቄ በመጠየቅና በቆጠራ ምልክት በመመዝገብ ነው።'},{en:'Tally marks are grouped in fives.',am:'የቆጠራ ምልክቶች በአምስት በአምስት ይቧደናሉ።'},{en:'A picture graph needs a title, labels and a key (1 symbol = ? items).',am:'የሥዕል ግራፍ ርዕስ፣ መለያና ማብራሪያ (1 ምልክት = ? ነገሮች) ይፈልጋል።'},{en:'Half a symbol = half the key value.',am:'ግማሽ ምልክት = የማብራሪያው ግማሽ።'}],
  words:[['መረጃ',{en:'data',am:'የተሰበሰቡ እውነታዎች'}],['ማብራሪያ',{en:'key',am:'አንድ ምልክት ስንት እንደሚወክል'}],['የሥዕል ግራፍ',{en:'picture graph',am:'መረጃን በሥዕል ማሳያ'}]],
  remember:{en:'Read the key before you count!',am:'ከመቁጠራችሁ በፊት ማብራሪያውን አንብቡ!'},
  exam:[[{en:'Key 1 = 10. Three and a half symbols = ?',am:'ማብራሪያ 1 = 10። ሦስት ተኩል ምልክቶች = ?'},'35'],[{en:'How do you write 9 in tally marks?',am:'9ን በቆጠራ ምልክት እንዴት ትጽፋላችሁ?'},{en:'One crossed group of five, then 4 lines',am:'አንድ የተቋረጠ የአምስት ቡድን፣ ከዚያ 4 መስመሮች'}],[{en:'Why use a graph?',am:'ግራፍ ለምን ይጠቅማል?'},{en:'To compare data quickly.',am:'መረጃን በፍጥነት ለማነጻጸር።'}]],
  innovate:{title:{en:'Market research',am:'የገበያ ጥናት'},text:{en:'Before starting a business, smart entrepreneurs ask customers what they want. Do real market research!',am:'ብልህ ሥራ ፈጣሪዎች ንግድ ከመጀመራቸው በፊት ደንበኞች የሚፈልጉትን ይጠይቃሉ። እውነተኛ የገበያ ጥናት አድርጉ!'},
   steps:[{en:'Idea: a snack stall at school. Which snack should you sell?',am:'ሐሳብ፦ በትምህርት ቤት የመክሰስ መሸጫ። የትኛውን መክሰስ ትሸጣላችሁ?'},{en:'Ask 20 classmates to choose from 4 snacks. Use tally marks.',am:'20 የክፍል ጓደኞችን ከ4 መክሰሶች እንዲመርጡ ጠይቁ። የቆጠራ ምልክት ተጠቀሙ።'},{en:'Draw a picture graph with a key.',am:'ማብራሪያ ያለው የሥዕል ግራፍ ሳሉ።'},{en:'Decide what to sell and explain using your data.',am:'ምን እንደምትሸጡ ወስኑ፤ መረጃችሁን ተጠቅማችሁ አስረዱ።'}]}}}
 ]});
})();
