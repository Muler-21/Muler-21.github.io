/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 3 · ግማሽና ሩብ */
(function(){
const {rnd,shuffle,numOpts}=G3;const {frac}=K1;const SM={en:'Mathematics',am:'ሒሳብ'};
const NAME={'1/2':{en:'one half (1/2)',am:'ግማሽ (1/2)'},'1/4':{en:'one quarter (1/4)',am:'ሩብ (1/4)'},'2/4':{en:'two quarters (2/4)',am:'ሁለት ሩብ (2/4)'},'3/4':{en:'three quarters (3/4)',am:'ሦስት ሩብ (3/4)'},'1':{en:'one whole',am:'ሙሉ'}};
Unit.start({id:'g2-math-3',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Halves and quarters',am:'ግማሽና ሩብ'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 3: halves, quarters and half of a quantity.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 3 ላይ የተመሰረተ፦ ግማሽ፣ ሩብና የመጠን ግማሽ።'},
 missions:[
 {title:{en:'Equal parts?',am:'እኩል ክፍሎች?'},type:'quiz',
  tip:{en:'A half means 2 EQUAL parts. If the parts are not equal, it is not a half.',am:'ግማሽ ማለት 2 እኩል ክፍሎች ነው። ክፍሎቹ እኩል ካልሆኑ ግማሽ አይደለም።'},
  items:[{fig:'<svg viewBox="0 0 120 120" width="130"><rect x="10" y="20" width="50" height="80" fill="var(--accent)" stroke="var(--ink)" stroke-width="3"/><rect x="60" y="20" width="50" height="80" fill="var(--surface)" stroke="var(--ink)" stroke-width="3"/></svg>',q:{en:'Is the shaded part a half?',am:'የቀለመው ክፍል ግማሽ ነው?'},o:[{en:'Yes, 2 equal parts',am:'አዎ፣ 2 እኩል ክፍሎች'},{en:'No',am:'አይደለም'}],a:0},
   {fig:'<svg viewBox="0 0 120 120" width="130"><rect x="10" y="20" width="25" height="80" fill="var(--accent)" stroke="var(--ink)" stroke-width="3"/><rect x="35" y="20" width="75" height="80" fill="var(--surface)" stroke="var(--ink)" stroke-width="3"/></svg>',q:{en:'Is the shaded part a half?',am:'የቀለመው ክፍል ግማሽ ነው?'},o:[{en:'No, the parts are not equal',am:'አይደለም፣ ክፍሎቹ እኩል አይደሉም'},{en:'Yes',am:'አዎ'}],a:0}]},
 {title:{en:'Name the part',am:'ክፍሉን ሰይሙ'},type:'drill',need:6,
  tip:{en:'Count all equal parts (bottom number) and the shaded parts (top number).',am:'ሁሉንም እኩል ክፍሎች (የታችኛው ቁጥር) እና የቀለሙትን ክፍሎች (የላይኛው ቁጥር) ቁጠሩ።'},
  gen(){const opts=[['1/2',2,1],['1/4',4,1],['2/4',4,2],['3/4',4,3]];const [k,p,sh]=opts[rnd(0,3)];const kind=Math.random()<.5?'circle':'bar';const o=shuffle(['1/2','1/4','3/4','2/4'].filter(x=>x!==k).slice(0,2).concat([k]));
   return{fig:frac(kind,p,sh),q:{en:'What part is coloured?',am:'የቀለመው ክፍል ምን ያህል ነው?'},o:o.map(x=>NAME[x]),a:o.indexOf(k),e:{en:'2/4 is the same as 1/2!',am:'2/4 ከ1/2 ጋር እኩል ነው!'}}}},
 {title:{en:'Share the injera',am:'እንጀራውን አካፍሉ'},type:'quiz',
  tip:{en:'Sharing fairly means equal parts. Halves for 2 people, quarters for 4 people.',am:'በፍትሐዊነት ማካፈል ማለት እኩል ክፍሎች ነው። ለ2 ሰዎች ግማሽ፣ ለ4 ሰዎች ሩብ።'},
  items:[{fig:frac('circle',4,0),q:{en:'4 friends share 1 injera equally. Each gets…',am:'4 ጓደኞች 1 እንጀራ በእኩል ተካፈሉ። እያንዳንዳቸው የሚያገኙት…'},o:[NAME['1/4'],NAME['1/2'],NAME['1']],a:0},
   {q:{en:'How many quarters make a whole?',am:'ስንት ሩብ አንድ ሙሉ ይሆናሉ?'},o:['4','2','3','1'],a:0},{q:{en:'How many halves make a whole?',am:'ስንት ግማሽ አንድ ሙሉ ይሆናሉ?'},o:['2','4','1','3'],a:0}]},
 {title:{en:'Half of a number',am:'የመጠን ግማሽ'},type:'drill',need:6,
  tip:{en:'To find half of a group, share it into 2 equal groups. Half of 8 is 4.',am:'የአንድ ቡድንን ግማሽ ለማግኘት በ2 እኩል ቡድኖች አካፍሉ። የ8 ግማሽ 4 ነው።'},
  gen(){const h=rnd(1,10);const quarter=Math.random()<.35&&h%2===0;const n=quarter?h*2:h*2;return quarter?{fig:G3.objs(n,'🍊',8),q:{en:`What is a quarter of ${n*1}?`,am:`የ${n} ሩብ ስንት ነው?`},...numOpts(n/4|0,[1,-1,2]),e:`${n} ÷ 4`}:{fig:G3.objs(n,'🥚',6),q:{en:`Half of ${n} = ?`,am:`የ${n} ግማሽ = ?`},...numOpts(h,[1,-1,2,h]),e:`${h} + ${h} = ${n}`}}},
 {type:'exam',items:[
  {q:{en:'A half has how many equal parts?',am:'ግማሽ ስንት እኩል ክፍሎች አሉት?'},o:['2','4','3','1'],a:0},
  {fig:frac('circle',4,3),q:{en:'What part is coloured?',am:'የቀለመው ክፍል?'},o:[NAME['3/4'],NAME['1/4'],NAME['1/2']],a:0},
  {q:{en:'Half of 12 = ?',am:'የ12 ግማሽ = ?'},o:['6','4','24','3'],a:0},
  {q:{en:'A quarter of 20 = ?',am:'የ20 ሩብ = ?'},o:['5','10','4','15'],a:0},
  {q:{en:'2/4 is equal to…',am:'2/4 ከ… ጋር እኩል ነው'},o:[NAME['1/2'],NAME['1/4'],NAME['1']],a:0}]},
 {type:'notes',notes:{
  big:{en:'Fractions are equal parts of a whole: a half is 1 of 2 equal parts, a quarter is 1 of 4.',am:'ክፍልፋይ የአንድ ሙሉ እኩል ክፍሎች ነው፦ ግማሽ ከ2 እኩል ክፍሎች 1፣ ሩብ ከ4 እኩል ክፍሎች 1 ነው።'},
  points:[{en:'Parts must be EQUAL.',am:'ክፍሎቹ እኩል መሆን አለባቸው።'},{en:'1/2 = one of 2 equal parts; 1/4 = one of 4 equal parts.',am:'1/2 = ከ2 እኩል ክፍሎች አንዱ፤ 1/4 = ከ4 እኩል ክፍሎች አንዱ።'},{en:'2 halves or 4 quarters make one whole; 2/4 = 1/2.',am:'2 ግማሾች ወይም 4 ሩቦች አንድ ሙሉ ይሆናሉ፤ 2/4 = 1/2።'},{en:'Half of a number: share into 2 equal groups.',am:'የቁጥር ግማሽ፦ በ2 እኩል ቡድኖች ማካፈል።'}],
  words:[['ግማሽ',{en:'half',am:'1/2'}],['ሩብ',{en:'quarter',am:'1/4'}],['ሙሉ',{en:'whole',am:'ያልተከፋፈለ'}]],
  remember:{en:'Fair share = equal parts!',am:'ፍትሐዊ ድርሻ = እኩል ክፍሎች!'},
  exam:[[{en:'Half of 16?',am:'የ16 ግማሽ?'},'8'],[{en:'How many quarters in 1 whole?',am:'በ1 ሙሉ ውስጥ ስንት ሩብ?'},'4'],[{en:'Draw a square and colour 3/4',am:'ካሬ ሳሉና 3/4ኛውን ቀለም ቀቡ'},{en:'4 equal parts, 3 coloured',am:'4 እኩል ክፍሎች፣ 3ቱ ቀለም'}]],
  innovate:{title:{en:'Fair snack sharing',am:'ፍትሐዊ የመክሰስ ክፍፍል'},text:{en:'Plan how to cut bread, an orange or a mango into equal halves and quarters for your family, so everyone gets a fair share.',am:'ሁሉም ፍትሐዊ ድርሻ እንዲያገኝ ዳቦ፣ ብርቱካን ወይም ማንጎ ለቤተሰባችሁ እንዴት በእኩል ግማሽና ሩብ እንደምትቆርጡ አቅዱ።'},
   steps:[{en:'Count how many people will share.',am:'ስንት ሰዎች እንደሚካፈሉ ቁጠሩ።'},{en:'Draw lines on paper to plan equal cuts.',am:'እኩል ቁርጥ ለማቀድ በወረቀት ላይ መስመር አስምሩ።'},{en:'With an adult, cut the food.',am:'ከትልቅ ሰው ጋር ምግቡን ቁረጡ።'},{en:'Check that all parts are equal.',am:'ሁሉም ክፍሎች እኩል መሆናቸውን አረጋግጡ።'}]}}}
 ]});
})();
