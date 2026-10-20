/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 4 · እስከ 10 ያሉ ቁጥሮችን መቀነስ */
(function(){
const {tx,rnd,numOpts}=G3;const {pick,minus}=K1;
const STORIES=[
 {en:'There are {n} birds on a tree. {k} fly away. How many are left?',am:'በዛፍ ላይ {n} ወፎች አሉ። {k} በረሩ። ስንት ቀሩ?',e:'🐦'},
 {en:'Abebe has {n} oranges. He eats {k}. How many are left?',am:'አበበ {n} ብርቱካኖች አሉት። {k} በላ። ስንት ቀሩ?',e:'🍊'},
 {en:'{n} balloons. {k} pop! How many balloons are left?',am:'{n} ፊኛዎች። {k} ፈነዱ! ስንት ፊኛዎች ቀሩ?',e:'🎈'},
 {en:'A farmer has {n} sheep. He sells {k}. How many are left?',am:'አንድ ገበሬ {n} በጎች አሉት። {k} ሸጠ። ስንት ቀሩ?',e:'🐑'}];
const fill=(s,n,k)=>({en:s.en.replace('{n}',n).replace('{k}',k),am:s.am.replace('{n}',n).replace('{k}',k)});
Unit.start({
 id:'g1-math-4',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Subtracting up to 10',am:'እስከ 10 ያሉ ቁጥሮችን መቀነስ'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 4: subtraction stories, sentences, zero, counting back and how adding and subtracting are related.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 4 ላይ የተመሰረተ፦ የመቀነስ ተረት፣ ዓረፍተ ነገር፣ ዜሮ፣ ወደኋላ መቁጠርና የመደመርና የመቀነስ ዝምድና።'},
 missions:[
 {title:{en:'Subtraction stories',am:'የመቀነስ ተረቶች'},type:'drill',need:5,
  tip:{en:'Subtracting means taking away. Cross out the ones that go away, then count what is left.',am:'መቀነስ ማለት ማስወገድ ነው። የሄዱትን ሰርዙ፤ ከዚያ የቀሩትን ቁጠሩ።'},
  gen(){const n=rnd(3,10),k=rnd(1,n-1);const s=STORIES[rnd(0,STORIES.length-1)];return{fig:minus(n,k,s.e),q:fill(s,n,k),...numOpts(n-k,[1,-1,2]),e:`${n} − ${k} = ${n-k}`}}},
 {title:{en:'Subtraction sentences',am:'የመቀነስ ዓረፍተ ነገር'},type:'drill',need:6,
  tip:{en:'7 − 2 = 5 is a subtraction sentence. "−" means take away.',am:'7 − 2 = 5 የመቀነስ ዓረፍተ ነገር ነው። "−" ቀንሱ ማለት ነው።'},
  gen(){const n=rnd(2,10),k=rnd(0,n);return{fig:minus(n,k,pick('fruit')),q:`${n} − ${k} = ?`,...numOpts(n-k,[1,-1,2])}}},
 {title:{en:'Take away zero or all',am:'ዜሮንና ሁሉንም መቀነስ'},type:'quiz',
  tip:{en:'Take away 0: nothing changes. Take away all: 0 is left.',am:'0 ብትቀንሱ ምንም አይለወጥም። ሁሉንም ብትቀንሱ 0 ይቀራል።'},
  items:[{q:'8 − 0 = ?',o:['8','0','7','80'],a:0},{q:'5 − 5 = ?',o:['5','10','0','1'],a:2},{q:'9 − 9 = ?',o:['0','9','18','1'],a:0},{fig:minus(4,4,'🍌'),q:{en:'4 bananas, all 4 eaten. How many left?',am:'4 ሙዞች፣ 4ቱም ተበሉ። ስንት ቀሩ?'},o:['4','0','8','1'],a:1}]},
 {title:{en:'Count back',am:'ወደኋላ በመቁጠር መቀነስ'},type:'drill',need:6,
  tip:{en:'Start at the big number and count back. 9 − 3: say 9… then 8, 7, 6!',am:'ከትልቁ ቁጥር ጀምራችሁ ወደኋላ ቁጠሩ። 9 − 3፦ 9 በሉ… ቀጥሎ 8፣ 7፣ 6!'},
  gen(){const n=rnd(5,10),k=rnd(1,3);return{q:`${n} − ${k} = ?`,...numOpts(n-k,[1,-1,2]),e:{en:`Start at ${n}, count back ${k}: ${Array.from({length:k},(_,i)=>n-i-1).join(', ')}`,am:`ከ${n} ጀምሩ፣ ${k} ወደኋላ ቁጠሩ፦ ${Array.from({length:k},(_,i)=>n-i-1).join('፣ ')}`}}}},
 {title:{en:'Add or subtract?',am:'መደመር ወይስ መቀነስ?'},type:'sort',
  tip:{en:'More things coming: add. Things going away: subtract.',am:'ነገሮች ሲጨመሩ፦ ደምሩ። ነገሮች ሲሄዱ፦ ቀንሱ።'},
  buckets:[{en:'Add (+)',am:'መደመር (+)'},{en:'Subtract (−)',am:'መቀነስ (−)'}],
  items:[{t:{en:'3 more children came',am:'3 ልጆች ተጨመሩ'},b:0},{t:{en:'2 cups broke',am:'2 ስኒዎች ተሰበሩ'},b:1},{t:{en:'Mother bought 4 more eggs',am:'እናት 4 ተጨማሪ እንቁላሎች ገዛች'},b:0},
   {t:{en:'5 birds flew away',am:'5 ወፎች በረሩ'},b:1},{t:{en:'We ate 3 breads',am:'3 ዳቦዎች በላን'},b:1},{t:{en:'Put 2 books with 6 books',am:'2 መጻሕፍትን ከ6 መጻሕፍት ጋር አድርጉ'},b:0}]},
 {title:{en:'Number families',am:'የመደመርና የመቀነስ ዝምድና'},type:'quiz',
  tip:{en:'3, 4 and 7 are a family: 3 + 4 = 7, so 7 − 4 = 3 and 7 − 3 = 4.',am:'3፣ 4 እና 7 ቤተሰብ ናቸው፦ 3 + 4 = 7፤ ስለዚህ 7 − 4 = 3፣ 7 − 3 = 4።'},
  items:[{q:{en:'2 + 6 = 8. So 8 − 6 = ?',am:'2 + 6 = 8። ስለዚህ 8 − 6 = ?'},o:['2','6','8','14'],a:0},
   {q:{en:'5 + 4 = 9. So 9 − 5 = ?',am:'5 + 4 = 9። ስለዚህ 9 − 5 = ?'},o:['4','5','9','1'],a:0},
   {q:{en:'Which sentence is in the family of 3, 7, 10?',am:'የ3፣ 7፣ 10 ቤተሰብ የሆነው ዓረፍተ ነገር የትኛው ነው?'},o:['10 − 7 = 3','10 − 3 = 6','7 − 3 = 10'],a:0}]},
 {type:'exam',items:[
   {q:'9 − 4 = ?',o:['5','4','13','6'],a:0},
   {q:'6 − 0 = ?',o:['0','6','5','60'],a:1},
   {q:{en:'Meron has 10 birr and spends 3. How much is left?',am:'ሜሮን 10 ብር አላት፤ 3 ብር አወጣች። ስንት ቀራት?'},o:['7','13','3','6'],a:0},
   {q:'7 − 7 = ?',o:['7','14','0','1'],a:2},
   {q:{en:'4 + 5 = 9. So 9 − 4 = ?',am:'4 + 5 = 9። ስለዚህ 9 − 4 = ?'},o:['5','4','9','13'],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'Subtracting means taking away to find how many are left.',am:'መቀነስ ማለት ስንት እንደቀረ ለማወቅ ማስወገድ ነው።'},
  points:[{en:'Subtraction story: some were there, some went away. Find what is left.',am:'የመቀነስ ተረት፦ ጥቂት ነበሩ፤ ጥቂቶች ሄዱ። የቀሩትን ፈልጉ።'},
   {en:'8 − 3 = 5: "−" means take away.',am:'8 − 3 = 5፦ "−" ቀንሱ ማለት ነው።'},
   {en:'Take away 0: the same. Take away all: 0.',am:'0 ቀንሱ፦ አይለወጥም። ሁሉንም ቀንሱ፦ 0።'},
   {en:'Count back from the bigger number.',am:'ከትልቁ ቁጥር ወደኋላ ቁጠሩ።'},
   {en:'Adding and subtracting are a family: 3 + 4 = 7, 7 − 4 = 3.',am:'መደመርና መቀነስ ቤተሰብ ናቸው፦ 3 + 4 = 7፣ 7 − 4 = 3።'}],
  words:[['መቀነስ (−)',{en:'subtract / take away',am:'ማስወገድ'}],['ልዩነት',{en:'difference',am:'የመቀነስ ውጤት'}],['ቀረ',{en:'left',am:'የተረፈ'}]],
  remember:{en:'Check subtraction with adding: 9 − 4 = 5 because 5 + 4 = 9.',am:'መቀነስን በመደመር አረጋግጡ፦ 9 − 4 = 5 ምክንያቱም 5 + 4 = 9።'},
  exam:[['10 − 6 = ?','4'],['5 − 5 = ?','0'],[{en:'8 birds, 2 fly away. Left?',am:'8 ወፎች፣ 2 በረሩ። ቀሩ?'},'6'],[{en:'Check 7 − 3 = 4 by adding',am:'7 − 3 = 4ን በመደመር አረጋግጡ'},'4 + 3 = 7']],
  innovate:{title:{en:'Shop change helper',am:'የሱቅ መልስ ረዳት'},text:{en:'Shopkeepers subtract every day to give change. Make birr cards 1 to 10 and practise giving change in a pretend shop.',am:'ሱቅ ነጋዴዎች መልስ ለመስጠት በየቀኑ ይቀንሳሉ። ከ1 እስከ 10 የብር ካርዶች ሥሩና በሙከራ ሱቅ መልስ መስጠት ተለማመዱ።'},
   steps:[{en:'Draw 10 paper "birr" notes.',am:'10 የወረቀት "ብሮች" ሳሉ።'},{en:'Price things: pencil 3 birr, bread 2 birr.',am:'ዋጋ ስጡ፦ እርሳስ 3 ብር፣ ዳቦ 2 ብር።'},{en:'Your friend pays 10 birr. Take away the price.',am:'ጓደኛችሁ 10 ብር ይከፍላል። ዋጋውን ቀንሱ።'},{en:'Give the change and check by adding.',am:'መልሱን ስጡና በመደመር አረጋግጡ።'}]}
 }}
 ]});
})();
