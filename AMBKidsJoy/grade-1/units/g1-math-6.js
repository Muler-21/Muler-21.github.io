/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 6 · እስከ 100 ያሉ ቁጥሮች */
(function(){
const {tx,rnd,numOpts}=G3;const {blocks}=K1;
const TENS=['','አስር','ሃያ','ሠላሳ','አርባ','ሃምሳ','ስልሳ','ሰባ','ሰማንያ','ዘጠና','መቶ'];
const TENS_EN=['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','one hundred'];
Unit.start({
 id:'g1-math-6',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 6',am:'ምዕራፍ 6'},
 title:{en:'Numbers up to 100',am:'እስከ 100 ያሉ ቁጥሮች'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 6: counting by tens and ones, skip counting, tens and ones, place value, comparing and ordering up to 100.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 6 ላይ የተመሰረተ፦ በአስርና በአንድ መቁጠር፣ እያለፉ መቁጠር፣ አስሮችና አንዶች፣ የቁጥር ቤት ዋጋ፣ ማወዳደርና በቅደም ተከተል ማስቀመጥ።'},
 missions:[
 {title:{en:'Count by tens',am:'በአስር መቁጠር'},type:'drill',need:5,
  tip:{en:'Each blue stick is a ten. Count the sticks: ten, twenty, thirty…',am:'እያንዳንዱ ሰማያዊ በትር አስር ነው። በትሮቹን ቁጠሩ፦ አስር፣ ሃያ፣ ሠላሳ…'},
  gen(){const t=rnd(1,9);return{fig:blocks(t*10),q:{en:'How many?',am:'ስንት ናቸው?'},...numOpts(t*10,[10,-10,1,20]),e:{en:`${t} tens = ${t*10} (${TENS_EN[t]})`,am:`${t} አስሮች = ${t*10} (${TENS[t]})`}}}},
 {title:{en:'Tens and ones',am:'አስሮችና አንዶች'},type:'drill',need:6,
  tip:{en:'Count the tens first, then the ones. 3 tens and 4 ones is 34.',am:'መጀመሪያ አስሮቹን፣ ከዚያ አንዶቹን ቁጠሩ። 3 አስሮችና 4 አንዶች 34 ነው።'},
  gen(){const t=rnd(1,9),o=rnd(1,9);const n=t*10+o;return{fig:blocks(n),q:{en:'What number is shown?',am:'የሚታየው ቁጥር ስንት ነው?'},...numOpts(n,[10,-10,o*9-t*9,1]),e:{en:`${t} tens and ${o} ones = ${n}`,am:`${t} አስሮችና ${o} አንዶች = ${n}`}}}},
 {title:{en:'Place value',am:'የቁጥር ቤት ዋጋ'},type:'drill',need:6,
  tip:{en:'In 47, the 4 is in the tens house (40) and the 7 is in the ones house (7).',am:'በ47 ውስጥ 4 በአስሮች ቤት (40)፣ 7 ደግሞ በአንዶች ቤት (7) ይገኛሉ።'},
  gen(){const t=rnd(1,9),o=rnd(0,9),n=t*10+o;const askT=Math.random()<.5;
   return{q:askT?{en:`How many tens are in ${n}?`,am:`በ${n} ውስጥ ስንት አስሮች አሉ?`}:{en:`How many ones are in ${n}?`,am:`በ${n} ውስጥ ስንት አንዶች አሉ?`},...numOpts(askT?t:o,[1,-1,2,3]),e:`${n} = ${t*10} + ${o}`}}},
 {title:{en:'Skip counting',am:'እያለፉ መቁጠር'},type:'drill',need:6,
  tip:{en:'Skip counting is fast counting. By 2s: 2, 4, 6. By 5s: 5, 10, 15. By 10s: 10, 20, 30.',am:'እያለፉ መቁጠር ፈጣን መቁጠር ነው። በ2፦ 2፣ 4፣ 6። በ5፦ 5፣ 10፣ 15። በ10፦ 10፣ 20፣ 30።'},
  gen(){const s=[2,5,10][rnd(0,2)];const a=s*rnd(1,s===10?6:8);return{q:`${a}, ${a+s}, ${a+2*s}, ?`,...numOpts(a+3*s,[1,-1,s,-s]),e:{en:`Counting by ${s}s`,am:`በ${s} እያለፍን መቁጠር`}}}},
 {title:{en:'Bigger or smaller?',am:'ይበልጣል ወይስ ያንሳል?'},type:'drill',need:6,
  tip:{en:'Compare the tens first. If the tens are the same, compare the ones.',am:'መጀመሪያ አስሮቹን አወዳድሩ። አስሮቹ እኩል ከሆኑ አንዶቹን አወዳድሩ።'},
  gen(){let a=rnd(10,99),b=rnd(10,99);if(a===b)b=a+1;const big=Math.random()<.5;return{q:big?{en:'Which number is bigger?',am:'የትኛው ቁጥር ይበልጣል?'}:{en:'Which number is smaller?',am:'የትኛው ቁጥር ያንሳል?'},o:[String(a),String(b)],a:big?(a>b?0:1):(a<b?0:1)}}},
 {title:{en:'Order to 100',am:'እስከ 100 በቅደም ተከተል'},type:'order',
  tip:{en:'Look at the tens house first to put numbers in order.',am:'ቁጥሮችን በቅደም ተከተል ለማስቀመጥ መጀመሪያ የአስሮችን ቤት ተመልከቱ።'},
  help:{en:'Tap from smallest to biggest.',am:'ከትንሹ እስከ ትልቁ ንኩ።'},
  rounds:[{prompt:{en:'Smallest to biggest:',am:'ከትንሹ እስከ ትልቁ፦'},items:['18','35','52','79','96']},{prompt:{en:'Smallest to biggest:',am:'ከትንሹ እስከ ትልቁ፦'},items:['41','44','47','70','74']}]},
 {type:'exam',items:[
   {fig:blocks(52),q:{en:'What number is shown?',am:'የሚታየው ቁጥር?'},o:['52','25','7','520'],a:0},
   {q:{en:'How many tens in 80?',am:'በ80 ውስጥ ስንት አስሮች?'},o:['8','80','0','10'],a:0},
   {q:'20, 30, 40, ?',o:['41','50','60','45'],a:1},
   {q:{en:'Which is bigger: 63 or 36?',am:'የትኛው ይበልጣል፦ 63 ወይስ 36?'},o:['63','36'],a:0},
   {q:{en:'What comes after 99?',am:'ከ99 ቀጥሎ የሚመጣው?'},o:['100','90','98','999'],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'Big numbers are made of tens and ones. Ten tens make one hundred.',am:'ትልልቅ ቁጥሮች ከአስሮችና ከአንዶች ይሠራሉ። አስር አስሮች መቶ ይሆናሉ።'},
  points:[{en:'Count by tens: 10, 20, 30 … 100.',am:'በአስር ቁጠሩ፦ 10፣ 20፣ 30 … 100።'},
   {en:'A two-digit number has tens and ones: 34 = 3 tens and 4 ones.',am:'ባለ ሁለት ሆሄ ቁጥር አስሮችና አንዶች አሉት፦ 34 = 3 አስሮችና 4 አንዶች።'},
   {en:'Skip count by 2s, 5s and 10s.',am:'በ2፣ በ5 እና በ10 እያለፋችሁ ቁጠሩ።'},
   {en:'To compare, look at the tens first, then the ones.',am:'ለማወዳደር መጀመሪያ አስሮቹን፣ ከዚያ አንዶቹን ተመልከቱ።'}],
  words:[['አስሮች',{en:'tens',am:'የ10 ቡድኖች'}],['አንዶች',{en:'ones',am:'ነጠላዎች'}],['መቶ (100)',{en:'one hundred',am:'አስር አስሮች'}]],
  remember:{en:'Tens house on the left, ones house on the right.',am:'የአስሮች ቤት በግራ፣ የአንዶች ቤት በቀኝ።'},
  exam:[[{en:'How many tens and ones in 58?',am:'በ58 ውስጥ ስንት አስሮችና አንዶች?'},{en:'5 tens, 8 ones',am:'5 አስሮች፣ 8 አንዶች'}],['5, 10, 15, ?','20'],[{en:'Bigger: 47 or 74?',am:'የሚበልጠው፦ 47 ወይስ 74?'},'74']],
  innovate:{title:{en:'Bundle-of-ten stick counter',am:'የአስር አስር በትር መቁጠሪያ'},text:{en:'Farmers count big harvests in bundles. Bundle 100 sticks or straws in tens to count quickly, and count your class\'s plastic bottles for recycling.',am:'ገበሬዎች ብዙ ምርትን በእስር ይቆጥራሉ። 100 በትሮችን ወይም ገለባዎችን በአስር በአስር እሰሩ፤ ለመልሶ መጠቀም የክፍላችሁን የፕላስቲክ ጠርሙሶች ቁጠሩ።'},
   steps:[{en:'Collect 100 small sticks or straws.',am:'100 ትናንሽ በትሮችን ወይም ገለባዎችን ሰብስቡ።'},{en:'Tie them in bundles of 10 with string.',am:'በገመድ በ10 በ10 እሰሯቸው።'},{en:'Show 46: 4 bundles and 6 single sticks.',am:'46ን አሳዩ፦ 4 እስሮችና 6 ነጠላ በትሮች።'},{en:'Count plastic bottles at school the same way.',am:'በትምህርት ቤት ያሉ የፕላስቲክ ጠርሙሶችን በዚሁ መንገድ ቁጠሩ።'}]}
 }}
 ]});
})();
