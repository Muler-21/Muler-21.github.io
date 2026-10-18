/* ሒሳብ · ምዕራፍ 6 · ክፍልፋይ */
(function(){
const {rnd,shuffle}=G3;
const fr=(a,b)=>`<span class="num" style="display:inline-grid;text-align:center;line-height:1;vertical-align:middle"><span>${a}</span><span style="border-top:2px solid currentColor">${b}</span></span>`;
const bar=(n,sh)=>`<svg viewBox="0 0 ${n*40+4} 54" role="img" aria-label="${sh} of ${n} parts shaded" style="width:min(320px,100%);height:auto">${Array.from({length:n},(_,i)=>`<rect x="${2+i*40}" y="2" width="40" height="50" fill="${i<sh?'var(--sun)':'var(--surface)'}" stroke="var(--ink)" stroke-width="2"/>`).join('')}</svg>`;
const injera=n=>{const r=60;let s=`<svg viewBox="0 0 140 140" role="img" aria-label="injera cut into ${n}" style="width:150px"><circle cx="70" cy="70" r="${r}" fill="#E9D7B5" stroke="#8A6A3C" stroke-width="3"/>`;for(let i=0;i<n;i++){const a=i*2*Math.PI/n-Math.PI/2;s+=`<line x1="70" y1="70" x2="${70+r*Math.cos(a)}" y2="${70+r*Math.sin(a)}" stroke="#8A6A3C" stroke-width="3"/>`}
 const a0=-Math.PI/2,a1=a0+2*Math.PI/n;s+=`<path d="M70 70L${70+r*Math.cos(a0)} ${70+r*Math.sin(a0)}A${r} ${r} 0 ${n<2?1:0} 1 ${70+r*Math.cos(a1)} ${70+r*Math.sin(a1)}z" fill="var(--sun)" opacity=".8"/>`;return s+'</svg>'};
const opt4=(ans,pool)=>{const o=shuffle([ans,...shuffle(pool.filter(x=>x!==ans)).slice(0,3)]);return{o:o.map(d=>({svg:fr(1,d)})),a:o.indexOf(ans)}};
Unit.start({
 id:'math-6',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 6',am:'ምዕራፍ 6'},
 title:{en:'Fractions',am:'ክፍልፋይ'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 6: halves, thirds, quarters and unit fractions.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 6 ላይ የተመሰረተ፦ ግማሽ፣ ሲሶ፣ ሩብና አሃዳዊ ክፍልፋዮች።'},
 missions:[
 {title:{en:'Sharing injera',am:'እንጀራ ማካፈል'},type:'drill',need:5,
  tip:{en:'When one whole is cut into EQUAL parts, each part is a unit fraction. 2 equal parts → each is one half (1/2). 3 → one third (1/3, ሲሶ). 4 → one quarter (1/4, ሩብ).',am:'አንድ ሙሉ ነገር በእኩል ክፍሎች ሲቆረጥ እያንዳንዱ ክፍል አሃዳዊ ክፍልፋይ ነው። 2 እኩል ክፍል → ግማሽ (1/2)። 3 → ሲሶ (1/3)። 4 → ሩብ (1/4)።'},
  gen(){const n=rnd(2,8);return{fig:injera(n),q:{en:`The injera is cut into ${n} equal parts. What fraction is the yellow part?`,am:`እንጀራው በ${n} እኩል ክፍሎች ተቆርጧል። ቢጫው ክፍል ስንት ነው?`},...opt4(n,[2,3,4,5,6,7,8,10]),e:{en:`1 part out of ${n} equal parts = 1/${n}`,am:`ከ${n} እኩል ክፍሎች 1 ክፍል = 1/${n}`}}}},
 {title:{en:'Name the fraction',am:'ክፍልፋዩን ሰይሙ'},type:'drill',need:5,
  tip:{en:'The bottom number tells how many equal parts. The top number tells how many we take.',am:'የታችኛው ቁጥር ስንት እኩል ክፍሎች እንዳሉ ይነግራል። የላይኛው ቁጥር ስንቱን እንደወሰድን ይነግራል።'},
  gen(){const n=rnd(2,10);return{fig:bar(n,1),q:{en:'What fraction is shaded?',am:'የተቀባው ክፍል ስንት ነው?'},...opt4(n,[2,3,4,5,6,7,8,9,10])}}},
 {title:{en:'Which is bigger?',am:'የትኛው ይበልጣል?'},type:'drill',need:6,
  tip:{en:'Surprise! 1/3 is BIGGER than 1/5. When you share an injera with more people, each piece gets smaller. Bigger bottom number → smaller piece.',am:'ያስገርማል! 1/3 ከ1/5 ይበልጣል። እንጀራን ለብዙ ሰዎች ስታካፍሉ እያንዳንዱ ቁራሽ ያንሳል። ትልቅ የታች ቁጥር → ትንሽ ቁራሽ።'},
  gen(){let a=rnd(2,10),b;do{b=rnd(2,10)}while(b===a);const big=Math.min(a,b);const o=[a,b];return{q:{en:'Which is the bigger fraction?',am:'የትኛው ክፍልፋይ ይበልጣል?'},fig:`<div class="row center" style="gap:30px">${bar(a,1)}${bar(b,1)}</div>`,o:o.map(d=>({svg:fr(1,d)})),a:o.indexOf(big),e:{en:`1/${big} is bigger: fewer parts, so each part is bigger.`,am:`1/${big} ይበልጣል፦ ክፍሎቹ ያነሱ ስለሆኑ እያንዳንዱ ክፍል ይበልጣል።`}}}},
 {title:{en:'Order the fractions',am:'ክፍልፋዮችን አስቀምጡ'},type:'order',
  tip:{en:'Put the unit fractions from SMALLEST to BIGGEST. Remember: the bigger the bottom number, the smaller the piece.',am:'አሃዳዊ ክፍልፋዮችን ከትንሹ ወደ ትልቁ አስቀምጡ። አስታውሱ፦ የታችኛው ቁጥር በበለጠ ቁጥር ቁራሹ ያንሳል።'},
  help:{en:'Tap from smallest to biggest.',am:'ከትንሹ ወደ ትልቁ ንኩ።'},
  rounds:[{items:['1/10','1/5','1/3','1/2']},{items:['1/8','1/6','1/4','1/2']},{items:['1/9','1/7','1/5','1/3','1/2']}]},
 {title:{en:'Half and quarter of numbers',am:'የቁጥሮች ግማሽና ሩብ'},type:'drill',need:6,
  tip:{en:'Half of a number: divide by 2. A quarter: divide by 4 (or halve, then halve again). Half of 20 = 10, a quarter of 20 = 5.',am:'የቁጥር ግማሽ፦ በ2 አካፍሉ። ሩብ፦ በ4 አካፍሉ (ወይም ግማሹን እንደገና ግማሽ አድርጉ)። የ20 ግማሽ = 10፣ ሩብ = 5።'},
  gen(){const q=Math.random()<.5;const n=(q?4:2)*rnd(2,25);const ans=q?n/4:n/2;return{q:{en:`What is ${q?'a quarter':'half'} of ${n}?`,am:`የ${n} ${q?'ሩብ':'ግማሽ'} ስንት ነው?`},...G3.numOpts(ans,[1,-1,ans,-2,2]),e:`${n} ÷ ${q?4:2} = ${ans}`}}},
 {type:'exam',items:[
   {q:{en:'An orange is cut into 4 equal parts. One part is…',am:'አንድ ብርቱካን በ4 እኩል ክፍሎች ተቆረጠ። አንዱ ክፍል…'},o:[{en:'one half',am:'ግማሽ'},{en:'one quarter',am:'ሩብ'},{en:'one third',am:'ሲሶ'}],a:1},
   {q:{en:'Which is bigger: 1/2 or 1/8?',am:'የቱ ይበልጣል፦ 1/2 ወይስ 1/8?'},o:['1/2','1/8',{en:'Equal',am:'እኩል'}],a:0},
   {q:{en:'Half of 36 = ?',am:'የ36 ግማሽ = ?'},o:['18','12','72','9'],a:0},
   {q:{en:'A quarter of 40 = ?',am:'የ40 ሩብ = ?'},o:['10','20','4','160'],a:0},
   {q:{en:'A bread is cut into 3 UNEQUAL pieces. Is each piece one third?',am:'አንድ ዳቦ በ3 እኩል ያልሆኑ ቁራሾች ተቆረጠ። እያንዳንዱ ቁራሽ ሲሶ ነው?'},o:[{en:'Yes',am:'አዎ'},{en:'No, the parts must be equal',am:'አይደለም፤ ክፍሎቹ እኩል መሆን አለባቸው'}],a:1}]},
 {type:'notes',notes:{
  big:{en:'A fraction is a part of a whole that is cut into EQUAL parts.',am:'ክፍልፋይ በእኩል ክፍሎች ከተቆረጠ ሙሉ ነገር የተወሰደ ክፍል ነው።'},
  points:[{en:'1/2 half (ግማሽ), 1/3 third (ሲሶ), 1/4 quarter (ሩብ).',am:'1/2 ግማሽ፣ 1/3 ሲሶ፣ 1/4 ሩብ።'},{en:'Bottom number = how many equal parts. Top number = how many we take.',am:'የታች ቁጥር = የእኩል ክፍሎች ብዛት። የላይ ቁጥር = የወሰድነው ብዛት።'},{en:'For unit fractions: bigger bottom number → smaller piece. 1/2 > 1/3 > 1/4.',am:'ለአሃዳዊ ክፍልፋዮች፦ ትልቅ የታች ቁጥር → ትንሽ ቁራሽ። 1/2 > 1/3 > 1/4።'},{en:'Half of a number = ÷ 2. Quarter = ÷ 4.',am:'የቁጥር ግማሽ = ÷ 2። ሩብ = ÷ 4።'}],
  words:[['ክፍልፋይ',{en:'fraction',am:'የሙሉ ነገር ክፍል'}],['አሃዳዊ ክፍልፋይ',{en:'unit fraction (top number 1)',am:'የላይኛው ቁጥሩ 1 የሆነ ክፍልፋይ'}]],
  remember:{en:'Two quarters make a half. Two halves make a whole.',am:'ሁለት ሩብ አንድ ግማሽ ይሆናሉ። ሁለት ግማሽ አንድ ሙሉ ይሆናሉ።'},
  exam:[[{en:'Order 1/4, 1/2, 1/10 from smallest.',am:'1/4፣ 1/2፣ 1/10ን ከትንሹ አስቀምጡ።'},'1/10, 1/4, 1/2'],[{en:'Half of 50?',am:'የ50 ግማሽ?'},'25'],[{en:'Quarter of 12?',am:'የ12 ሩብ?'},'3'],[{en:'How many thirds make a whole?',am:'ስንት ሲሶዎች አንድ ሙሉ ይሆናሉ?'},'3']],
  innovate:{title:{en:'Fair-price portions',am:'በፍትሐዊ ዋጋ ቁራሽ'},text:{en:'A café sells a whole cake for 400 birr. Should it sell slices? Work out fair slice prices.',am:'አንድ ካፌ ሙሉ ኬክ በ400 ብር ይሸጣል። በቁራሽ ቢሸጥ? ፍትሐዊ የቁራሽ ዋጋ አስሉ።'},
   steps:[{en:'Price of a half? A quarter? An eighth?',am:'የግማሽ ዋጋ? የሩብ? የስምንተኛ?'},{en:'If they charge 60 birr for an eighth, do they earn more than 400?',am:'ለአንድ ስምንተኛ 60 ብር ቢያስከፍሉ ከ400 በላይ ያገኛሉ?'},{en:'Why might customers prefer buying slices?',am:'ደንበኞች በቁራሽ መግዛትን ለምን ሊመርጡ ይችላሉ?'},{en:'Design a price board for the café.',am:'ለካፌው የዋጋ ሰሌዳ ንድፍ አውጡ።'}]}}}
 ]});
})();
