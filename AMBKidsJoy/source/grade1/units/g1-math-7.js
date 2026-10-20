/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 7 · ባለ ሁለት ሆሄ ቁጥሮችን መደመርና መቀነስ */
(function(){
const {tx,rnd,numOpts}=G3;const {blocks}=K1;
const vcol=(a,b,op)=>`<div class="vcol"><span>${a}</span><span>${op} ${b}</span><span class="ln">?</span></div>`;
Unit.start({
 id:'g1-math-7',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 7',am:'ምዕራፍ 7'},
 title:{en:'Adding and subtracting two-digit numbers',am:'ባለ ሁለት ሆሄ ቁጥሮችን መደመርና መቀነስ'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 7: adding and subtracting tens, two-digit numbers, and estimating.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 7 ላይ የተመሰረተ፦ አስሮችን መደመርና መቀነስ፣ ባለ ሁለት ሆሄ ቁጥሮችና መገመት።'},
 missions:[
 {title:{en:'Add and subtract tens',am:'አስሮችን መደመርና መቀነስ'},type:'drill',need:6,
  tip:{en:'3 tens + 2 tens = 5 tens. So 30 + 20 = 50. Just like 3 + 2 = 5!',am:'3 አስሮች + 2 አስሮች = 5 አስሮች። ስለዚህ 30 + 20 = 50። ልክ እንደ 3 + 2 = 5!'},
  gen(){const a=rnd(1,8),b=rnd(1,9-a);const add=Math.random()<.5;return add?{fig:blocks(a*10)+'<span class="bigq">+</span>'+blocks(b*10),q:`${a*10} + ${b*10} = ?`,...numOpts((a+b)*10,[10,-10,1])}:{fig:blocks((a+b)*10),q:`${(a+b)*10} − ${b*10} = ?`,...numOpts(a*10,[10,-10,1])}}},
 {title:{en:'Add ones to a two-digit number',am:'ከባለ ሁለት ሆሄ ቁጥር ጋር መደመር'},type:'drill',need:6,
  tip:{en:'Add the ones to the ones. The tens stay the same: 42 + 5 = 47.',am:'አንዶቹን ከአንዶቹ ጋር ደምሩ። አስሮቹ አይለወጡም፦ 42 + 5 = 47።'},
  gen(){const t=rnd(1,8),o=rnd(0,6),b=rnd(1,9-o);const n=t*10+o;return{fig:vcol(n,b,'+'),q:`${n} + ${b} = ?`,...numOpts(n+b,[1,-1,10,-10])}}},
 {title:{en:'Take ones from a two-digit number',am:'ከባለ ሁለት ሆሄ ቁጥር ላይ መቀነስ'},type:'drill',need:6,
  tip:{en:'Take the ones from the ones. 58 − 3: 8 − 3 = 5, so 55.',am:'አንዶቹን ከአንዶቹ ቀንሱ። 58 − 3፦ 8 − 3 = 5፤ ስለዚህ 55።'},
  gen(){const t=rnd(1,9),o=rnd(2,9),b=rnd(1,o);const n=t*10+o;return{fig:vcol(n,b,'−'),q:`${n} − ${b} = ?`,...numOpts(n-b,[1,-1,10,-10])}}},
 {title:{en:'Two-digit + two-digit',am:'ባለ ሁለት ሆሄ ቁጥሮችን መደመር'},type:'drill',need:5,
  tip:{en:'Add ones with ones, then tens with tens. 23 + 14: 3 + 4 = 7, 2 + 1 = 3 → 37.',am:'አንዶችን ከአንዶች፣ ከዚያ አስሮችን ከአስሮች ደምሩ። 23 + 14፦ 3 + 4 = 7፣ 2 + 1 = 3 → 37።'},
  gen(){const a1=rnd(1,5),a0=rnd(0,5),b1=rnd(1,9-a1),b0=rnd(0,9-a0);const a=a1*10+a0,b=b1*10+b0;return{fig:vcol(a,b,'+'),q:`${a} + ${b} = ?`,...numOpts(a+b,[1,-1,10,-10]),e:{en:`ones: ${a0}+${b0}=${a0+b0}, tens: ${a1}+${b1}=${a1+b1}`,am:`አንዶች፦ ${a0}+${b0}=${a0+b0}፣ አስሮች፦ ${a1}+${b1}=${a1+b1}`}}}},
 {title:{en:'Two-digit − two-digit',am:'ባለ ሁለት ሆሄ ቁጥሮችን መቀነስ'},type:'drill',need:5,
  tip:{en:'Subtract ones from ones, then tens from tens. 68 − 25: 8 − 5 = 3, 6 − 2 = 4 → 43.',am:'አንዶችን ከአንዶች፣ ከዚያ አስሮችን ከአስሮች ቀንሱ። 68 − 25፦ 8 − 5 = 3፣ 6 − 2 = 4 → 43።'},
  gen(){const a1=rnd(3,9),a0=rnd(3,9),b1=rnd(1,a1-1),b0=rnd(0,a0);const a=a1*10+a0,b=b1*10+b0;return{fig:vcol(a,b,'−'),q:`${a} − ${b} = ?`,...numOpts(a-b,[1,-1,10,-10])}}},
 {title:{en:'Estimate',am:'መገመት'},type:'drill',need:5,
  tip:{en:'Estimating is a smart guess. Round each number to the nearest ten, then add: 38 + 21 is about 40 + 20 = 60.',am:'መገመት ብልህ ግምት ነው። እያንዳንዱን ቁጥር ወደ ቅርብ አስር አጠጋጉ፣ ከዚያ ደምሩ፦ 38 + 21 በግምት 40 + 20 = 60 ነው።'},
  gen(){const a=rnd(11,48),b=rnd(11,48);const r=n=>Math.round(n/10)*10;const est=r(a)+r(b);return{q:{en:`About how much is ${a} + ${b}?`,am:`${a} + ${b} በግምት ስንት ነው?`},...numOpts(est,[10,-10,20,-20]),e:`${r(a)} + ${r(b)} = ${est}`}}},
 {type:'exam',items:[
   {q:'40 + 30 = ?',o:['70','7','43','60'],a:0},
   {q:'56 + 3 = ?',o:['59','86','53','69'],a:0},
   {q:'79 − 5 = ?',o:['74','29','84','75'],a:0},
   {q:{en:'Lemlem had 35 birr and got 12 more. How much now?',am:'ለምለም 35 ብር ነበራት፤ 12 ብር አገኘች። አሁን ስንት አላት?'},o:['47','23','37','57'],a:0},
   {q:{en:'About how much is 29 + 31?',am:'29 + 31 በግምት ስንት ነው?'},o:['60','50','40','80'],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'To add or subtract two-digit numbers, work house by house: ones with ones, tens with tens.',am:'ባለ ሁለት ሆሄ ቁጥሮችን ለመደመርና ለመቀነስ ቤት በቤት ሥሩ፦ አንዶችን ከአንዶች፣ አስሮችን ከአስሮች።'},
  points:[{en:'Adding tens is like adding ones: 30 + 20 = 50.',am:'አስሮችን መደመር አንዶችን እንደ መደመር ነው፦ 30 + 20 = 50።'},
   {en:'Add or take the ones; the tens stay: 42 + 5 = 47.',am:'አንዶቹን ደምሩ ወይም ቀንሱ፤ አስሮቹ አይለወጡም፦ 42 + 5 = 47።'},
   {en:'Ones with ones, then tens with tens: 23 + 14 = 37.',am:'አንዶች ከአንዶች፣ ከዚያ አስሮች ከአስሮች፦ 23 + 14 = 37።'},
   {en:'Estimate by rounding to the nearest ten.',am:'ወደ ቅርብ አስር በማጠጋጋት ገምቱ።'}],
  words:[['መገመት',{en:'estimate',am:'ብልህ ግምት'}],['ማጠጋጋት',{en:'round',am:'ወደ ቅርብ አስር መውሰድ'}]],
  remember:{en:'Ones first, then tens!',am:'መጀመሪያ አንዶች፣ ከዚያ አስሮች!'},
  exam:[['25 + 31 = ?','56'],['87 − 42 = ?','45'],[{en:'Estimate 19 + 42',am:'19 + 42ን ገምቱ'},'20 + 40 = 60']],
  innovate:{title:{en:'Class savings box',am:'የክፍል የቁጠባ ሳጥን'},text:{en:'Saving small amounts adds up! Make a class savings box and add each week\'s savings.',am:'ትንሽ ትንሽ መቆጠብ ይደመራል! የክፍል የቁጠባ ሳጥን ሥሩና የየሳምንቱን ቁጠባ ደምሩ።'},
   steps:[{en:'Decorate a box with a slot.',am:'ቀዳዳ ያለው ሳጥን አስጊጡ።'},{en:'Each week count the coins (or paper birr).',am:'በየሳምንቱ ሳንቲሞቹን (ወይም የወረቀት ብሮችን) ቁጠሩ።'},{en:'Add this week to last week: 24 + 13 = 37.',am:'የዚህን ሳምንት ካለፈው ጋር ደምሩ፦ 24 + 13 = 37።'},{en:'Decide together what useful thing to buy.',am:'ምን ጠቃሚ ነገር እንደምትገዙ በጋራ ወስኑ።'}]}
 }}
 ]});
})();
