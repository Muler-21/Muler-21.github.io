/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 2 · እስከ 1000 ያሉ ቁጥሮችን መደመርና መቀነስ (ያለ አለኝታ/ብድር) */
(function(){
const {rnd,numOpts}=G3;const SM={en:'Mathematics',am:'ሒሳብ'};
const vcol=(a,b,op)=>`<div class="vcol"><span>${a}</span><span>${op} ${b}</span><span class="ln">?</span></div>`;
const noCarry=()=>{const a=[rnd(1,5),rnd(0,5),rnd(0,5)],b=[rnd(1,8-a[0]>0?Math.min(4,9-a[0]):1),rnd(0,9-a[1]),rnd(0,9-a[2])];return[a[0]*100+a[1]*10+a[2],b[0]*100+b[1]*10+b[2]]};
const noBorrow=()=>{const a=[rnd(3,9),rnd(2,9),rnd(2,9)],b=[rnd(1,a[0]-1),rnd(0,a[1]),rnd(0,a[2])];return[a[0]*100+a[1]*10+a[2],b[0]*100+b[1]*10+b[2]]};
Unit.start({id:'g2-math-2',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 2',am:'ምዕራፍ 2'},
 title:{en:'Adding and subtracting up to 1,000',am:'እስከ 1000 ያሉ ቁጥሮችን መደመርና መቀነስ'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 2: review to 100, then adding without carrying and subtracting without borrowing up to 1,000.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 2 ላይ የተመሰረተ፦ እስከ 100 ክለሳ፣ ከዚያ እስከ 1000 ያለ አለኝታ መደመርና ያለ ብድር መቀነስ።'},
 missions:[
 {title:{en:'Warm-up to 100',am:'እስከ 100 ክለሳ'},type:'drill',need:6,
  tip:{en:'Add or subtract the ones, then the tens.',am:'አንዶቹን፣ ከዚያ አስሮቹን ደምሩ ወይም ቀንሱ።'},
  gen(){const add=Math.random()<.5;if(add){const a=rnd(10,60),b=rnd(10,99-a);return{q:`${a} + ${b} = ?`,...numOpts(a+b,[10,-10,1,-1])}}const a=rnd(30,99),b=rnd(10,a-5);return{q:`${a} − ${b} = ?`,...numOpts(a-b,[10,-10,1,-1])}}},
 {title:{en:'Add hundreds, tens, ones',am:'መቶዎችን፣ አስሮችንና አንዶችን መደመር'},type:'drill',need:6,
  tip:{en:'Line up the houses. Add ones, then tens, then hundreds. No house goes over 9 here!',am:'ቤቶቹን አሰልፉ። አንዶችን፣ ከዚያ አስሮችን፣ ከዚያ መቶዎችን ደምሩ። እዚህ የትኛውም ቤት ከ9 አያልፍም!'},
  gen(){const [a,b]=noCarry();return{fig:vcol(a,b,'+'),q:`${a} + ${b} = ?`,...numOpts(a+b,[10,-10,100,-100,1])}}},
 {title:{en:'Subtract without borrowing',am:'ያለ ብድር መቀነስ'},type:'drill',need:6,
  tip:{en:'Subtract ones from ones, tens from tens, hundreds from hundreds.',am:'አንዶችን ከአንዶች፣ አስሮችን ከአስሮች፣ መቶዎችን ከመቶዎች ቀንሱ።'},
  gen(){const [a,b]=noBorrow();return{fig:vcol(a,b,'−'),q:`${a} − ${b} = ?`,...numOpts(a-b,[10,-10,100,-100,1])}}},
 {title:{en:'Word problems',am:'የቃላት ፕሮብሌሞች'},type:'quiz',
  tip:{en:'Together or more → add. Taken away, left, how many more → subtract.',am:'በአንድ ላይ፣ ተጨመረ → ደምሩ። ተወሰደ፣ ቀረ፣ ስንት ይበልጣል → ቀንሱ።'},
  items:[{q:{en:'A school has 324 boys and 452 girls. How many students in all?',am:'አንድ ትምህርት ቤት 324 ወንዶችና 452 ሴቶች አሉት። በአጠቃላይ ስንት ተማሪዎች ናቸው?'},o:['776','128','766','786'],a:0,e:'324 + 452 = 776'},
   {q:{en:'A farmer had 587 seedlings and planted 345. How many are left?',am:'አንድ ገበሬ 587 ችግኞች ነበሩት፤ 345 ተከለ። ስንት ቀሩ?'},o:['242','932','252','142'],a:0,e:'587 − 345 = 242'},
   {q:{en:'Abebe has 630 birr. Kidist has 210 birr. How much more does Abebe have?',am:'አበበ 630 ብር አለው። ቅድስት 210 ብር አላት። አበበ ስንት ብር ይበልጣል?'},o:['420','840','400','320'],a:0}]},
 {title:{en:'Check with the opposite',am:'በተቃራኒ ማረጋገጥ'},type:'quiz',
  tip:{en:'Check subtraction by adding: 587 − 345 = 242 because 242 + 345 = 587.',am:'መቀነስን በመደመር አረጋግጡ፦ 587 − 345 = 242 ምክንያቱም 242 + 345 = 587።'},
  items:[{q:{en:'765 − 432 = 333. Which addition checks it?',am:'765 − 432 = 333። የሚያረጋግጠው መደመር?'},o:['333 + 432 = 765','333 + 765 = 1098','432 − 333 = 99'],a:0},
   {q:{en:'214 + 523 = 737. So 737 − 523 = ?',am:'214 + 523 = 737። ስለዚህ 737 − 523 = ?'},o:['214','523','737','314'],a:0}]},
 {type:'exam',items:[
  {q:'402 + 375 = ?',o:['777','787','677','767'],a:0},{q:'869 − 524 = ?',o:['345','355','245','1393'],a:0},
  {q:'600 + 300 = ?',o:['900','800','9000','630'],a:0},{q:'985 − 100 = ?',o:['885','975','895','785'],a:0},
  {q:{en:'There were 456 eggs. 230 were sold. Left?',am:'456 እንቁላሎች ነበሩ። 230 ተሸጡ። ቀሩ?'},o:['226','686','236','216'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Add and subtract big numbers house by house: ones, tens, then hundreds.',am:'ትልልቅ ቁጥሮችን ቤት በቤት ደምሩና ቀንሱ፦ አንዶች፣ አስሮች፣ ከዚያ መቶዎች።'},
  points:[{en:'Line up ones under ones, tens under tens, hundreds under hundreds.',am:'አንዶችን ከአንዶች፣ አስሮችን ከአስሮች፣ መቶዎችን ከመቶዎች በታች አሰልፉ።'},{en:'Add: 324 + 452 = 776.',am:'መደመር፦ 324 + 452 = 776።'},{en:'Subtract: 587 − 345 = 242.',am:'መቀነስ፦ 587 − 345 = 242።'},{en:'Check subtraction by adding.',am:'መቀነስን በመደመር አረጋግጡ።'}],
  words:[['ድምር',{en:'sum',am:'የመደመር ውጤት'}],['ልዩነት',{en:'difference',am:'የመቀነስ ውጤት'}]],
  remember:{en:'Always start with the ones house!',am:'ሁልጊዜ ከአንዶች ቤት ጀምሩ!'},
  exam:[['531 + 246 = ?','777'],['948 − 615 = ?','333'],[{en:'Check 777 − 246',am:'777 − 246ን አረጋግጡ'},'531 + 246 = 777']],
  innovate:{title:{en:'Shop stock book',am:'የሱቅ ዕቃ መዝገብ'},text:{en:'Shopkeepers add what comes in and subtract what is sold. Keep a pretend stock book for a class shop.',am:'ሱቅ ነጋዴዎች የገባውን ይደምራሉ፤ የተሸጠውን ይቀንሳሉ። ለክፍል ሱቅ የሙከራ የዕቃ መዝገብ ያዙ።'},
   steps:[{en:'Start: 250 pencils in the shop.',am:'መነሻ፦ በሱቁ 250 እርሳሶች።'},{en:'Add a delivery: + 120.',am:'የገባውን ደምሩ፦ + 120።'},{en:'Subtract what was sold: − 130.',am:'የተሸጠውን ቀንሱ፦ − 130።'},{en:'Check your book by counting real items.',am:'መዝገባችሁን እውነተኛ ዕቃ በመቁጠር አረጋግጡ።'}]}}}
 ]});
})();
