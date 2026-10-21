/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 7 · ባለ ሦስት ሆሄ ቁጥሮችን በአለኝታና በብድር */
(function(){
const {rnd,numOpts}=G3;const SM={en:'Mathematics',am:'ሒሳብ'};
const vcol=(a,b,op)=>`<div class="vcol"><span>${a}</span><span>${op} ${b}</span><span class="ln">?</span></div>`;
Unit.start({id:'g2-math-7',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 7',am:'ምዕራፍ 7'},
 title:{en:'Adding and subtracting with regrouping',am:'ባለ ሦስት ሆሄ ቁጥሮችን በአለኝታና በብድር'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 7: adding with carrying and subtracting with borrowing up to 1,000.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 7 ላይ የተመሰረተ፦ እስከ 1000 በአለኝታ መደመርና በብድር መቀነስ።'},
 missions:[
 {title:{en:'Make a ten',am:'አስር መሥራት'},type:'quiz',
  tip:{en:'When the ones make 10 or more, trade 10 ones for 1 ten (carry 1).',am:'አንዶቹ 10 ወይም ከዚያ በላይ ሲሆኑ 10 አንዶችን በ1 አስር ቀይሩ (1 ተሸከሙ)።'},
  items:[{q:{en:'7 ones + 5 ones = 12 ones = ?',am:'7 አንዶች + 5 አንዶች = 12 አንዶች = ?'},o:[{en:'1 ten and 2 ones',am:'1 አስርና 2 አንዶች'},{en:'12 tens',am:'12 አስሮች'},{en:'2 tens',am:'2 አስሮች'}],a:0},
   {q:{en:'In 248 + 135, what do we carry from the ones?',am:'በ248 + 135 ከአንዶች የምንሸከመው?'},o:['1','3','13','0'],a:0,e:'8 + 5 = 13 → write 3, carry 1'}]},
 {title:{en:'Add with carrying',am:'በአለኝታ መደመር'},type:'drill',need:6,
  tip:{en:'Add the ones. If it is 10 or more, write the ones and carry 1 to the tens.',am:'አንዶችን ደምሩ። 10 ወይም ከዚያ በላይ ከሆነ አንዶቹን ጻፉ፤ 1ን ወደ አስሮች ተሸከሙ።'},
  gen(){const a=rnd(105,600),b=rnd(105,900-a);return{fig:vcol(a,b,'+'),q:`${a} + ${b} = ?`,...numOpts(a+b,[10,-10,100,-100,1]),e:`${a} + ${b} = ${a+b}`}}},
 {title:{en:'Borrow to subtract',am:'ለመቀነስ መበደር'},type:'quiz',
  tip:{en:'If the top ones digit is smaller, borrow 1 ten = 10 ones.',am:'የላይኛው የአንዶች ሆሄ ካነሰ 1 አስር = 10 አንዶች ተበደሩ።'},
  items:[{q:{en:'In 52 − 7, can we take 7 from 2?',am:'በ52 − 7፣ ከ2 ላይ 7 መቀነስ እንችላለን?'},o:[{en:'No, borrow a ten: 12 − 7 = 5',am:'አንችልም፤ አስር እንበደራለን፦ 12 − 7 = 5'},{en:'Yes',am:'አዎ'}],a:0},{q:'52 − 7 = ?',o:['45','55','35','49'],a:0}]},
 {title:{en:'Subtract with borrowing',am:'በብድር መቀነስ'},type:'drill',need:6,
  tip:{en:'Start with the ones. Borrow when the top digit is smaller.',am:'ከአንዶች ጀምሩ። የላይኛው ሆሄ ሲያንስ ተበደሩ።'},
  gen(){const a=rnd(300,999),b=rnd(105,a-50);return{fig:vcol(a,b,'−'),q:`${a} − ${b} = ?`,...numOpts(a-b,[10,-10,100,-100,1]),e:`${a} − ${b} = ${a-b}`}}},
 {title:{en:'Word problems',am:'የቃላት ፕሮብሌሞች'},type:'quiz',
  items:[{q:{en:'A school planted 268 trees in Kiremt and 345 in Bega. How many in all?',am:'አንድ ትምህርት ቤት በክረምት 268፣ በበጋ 345 ዛፎች ተከለ። በአጠቃላይ ስንት ናቸው?'},o:['613','503','623','513'],a:0},
   {q:{en:'A cooperative had 900 kg of coffee and sold 456 kg. How much is left?',am:'አንድ ማህበር 900 ኪ.ግ ቡና ነበረው፤ 456 ኪ.ግ ሸጠ። ስንት ቀረ?'},o:['444','544','456','554'],a:0}],
  tip:{en:'Decide: add or subtract? Then regroup if needed.',am:'ወስኑ፦ መደመር ወይስ መቀነስ? ከዚያ ካስፈለገ አለኝታ/ብድር ተጠቀሙ።'}},
 {type:'exam',items:[{q:'367 + 258 = ?',o:['625','515','615','525'],a:0},{q:'503 − 278 = ?',o:['225','335','235','325'],a:0},{q:'199 + 1 = ?',o:['200','190','1100','210'],a:0},{q:'800 − 1 = ?',o:['799','709','810','899'],a:0}]},
 {type:'notes',notes:{
  big:{en:'When a house is too full, carry a ten. When a house is too small, borrow a ten.',am:'አንድ ቤት ሲሞላ አስር እንሸከማለን። አንድ ቤት ሲያንስ አስር እንበደራለን።'},
  points:[{en:'Carry: 10 ones = 1 ten, 10 tens = 1 hundred.',am:'አለኝታ፦ 10 አንዶች = 1 አስር፣ 10 አስሮች = 1 መቶ።'},{en:'Borrow: 1 ten = 10 ones, 1 hundred = 10 tens.',am:'ብድር፦ 1 አስር = 10 አንዶች፣ 1 መቶ = 10 አስሮች።'},{en:'Always start with the ones.',am:'ሁልጊዜ ከአንዶች ጀምሩ።'},{en:'Estimate first, then check.',am:'መጀመሪያ ገምቱ፣ ከዚያ አረጋግጡ።'}],
  words:[['አለኝታ',{en:'carrying',am:'ወደ ቀጣዩ ቤት መውሰድ'}],['ብድር',{en:'borrowing',am:'ከቀጣዩ ቤት መውሰድ'}]],
  remember:{en:'Carry up when adding, borrow when subtracting.',am:'ስትደምሩ ተሸከሙ፤ ስትቀንሱ ተበደሩ።'},
  exam:[['456 + 378 = ?','834'],['720 − 365 = ?','355']],
  innovate:{title:{en:'Coffee cooperative ledger',am:'የቡና ማህበር መዝገብ'},text:{en:'Ethiopian coffee cooperatives keep careful records. Make a ledger of kg collected and sold each week.',am:'የኢትዮጵያ የቡና ማህበራት ጥንቃቄ ያለው መዝገብ ይይዛሉ። በየሳምንቱ የተሰበሰበውንና የተሸጠውን ኪ.ግ መዝገብ ሥሩ።'},
   steps:[{en:'Draw columns: week, collected, sold, left.',am:'ዓምዶች ሳሉ፦ ሳምንት፣ የተሰበሰበ፣ የተሸጠ፣ የቀረ።'},{en:'Add what is collected.',am:'የተሰበሰበውን ደምሩ።'},{en:'Subtract what is sold.',am:'የተሸጠውን ቀንሱ።'},{en:'Check each line with the opposite operation.',am:'እያንዳንዱን መስመር በተቃራኒ ስሌት አረጋግጡ።'}]}}}
 ]});
})();
