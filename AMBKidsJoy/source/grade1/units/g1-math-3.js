/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 3 · እስከ 10 ያሉ ቁጥሮችን መደመር */
(function(){
const {tx,rnd,numOpts}=G3;const {pick,plus,tenframe}=K1;
const STORIES=[
 {en:'{a} hens are eating. {b} more hens come. How many hens now?',am:'{a} ዶሮዎች እየበሉ ነው። {b} ዶሮዎች መጡ። አሁን ስንት ዶሮዎች ናቸው?',e:'🐓'},
 {en:'Almaz has {a} mangoes. Her mother gives her {b} more. How many mangoes now?',am:'አልማዝ {a} ማንጎዎች አሏት። እናቷ {b} ጨመረችላት። አሁን ስንት ማንጎዎች አሏት?',e:'🥭'},
 {en:'{a} children play football. {b} more join. How many children play?',am:'{a} ልጆች እግር ኳስ ይጫወታሉ። {b} ልጆች ተቀላቀሉ። ስንት ልጆች ይጫወታሉ?',e:'🧒'},
 {en:'There are {a} flowers in a pot and {b} in another. How many flowers in all?',am:'በአንድ ማስቀመጫ {a} አበቦች፣ በሌላው {b} አሉ። በአጠቃላይ ስንት አበቦች ናቸው?',e:'🌼'}];
const fill=(s,a,b)=>({en:s.en.replace('{a}',a).replace('{b}',b),am:s.am.replace('{a}',a).replace('{b}',b)});
Unit.start({
 id:'g1-math-3',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Adding up to 10',am:'እስከ 10 ያሉ ቁጥሮችን መደመር'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 3: addition stories, sentences, zero, vertical addition, any order, counting on, making ten and doubles.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 3 ላይ የተመሰረተ፦ የመደመር ተረት፣ ዓረፍተ ነገር፣ ዜሮን መደመር፣ ቁልቁል መደመር፣ በማንኛውም ቅደም ተከተል፣ ወደፊት መቁጠር፣ አስር መሙላትና እጥፍ።'},
 missions:[
 {title:{en:'Addition stories',am:'የመደመር ተረቶች'},type:'drill',need:5,
  tip:{en:'Adding means putting together. Count all the things in both groups.',am:'መደመር ማለት ማሰባሰብ ነው። በሁለቱም ቡድኖች ያሉትን ነገሮች በሙሉ ቁጠሩ።'},
  gen(){const a=rnd(2,6),b=rnd(2,10-a);const s=STORIES[rnd(0,STORIES.length-1)];return{fig:plus(a,b,s.e),q:fill(s,a,b),...numOpts(a+b,[1,-1,2]),e:`${a} + ${b} = ${a+b}`}}},
 {title:{en:'Number sentences',am:'የመደመር ዓረፍተ ነገር'},type:'drill',need:6,
  tip:{en:'3 + 2 = 5 is an addition sentence. "+" means add, "=" means is the same as.',am:'3 + 2 = 5 የመደመር ዓረፍተ ነገር ነው። "+" ደምሩ ማለት ነው፤ "=" እኩል ነው ማለት ነው።'},
  gen(){const a=rnd(0,9),b=rnd(0,10-a);const e=pick('fruit');return{fig:plus(a,b,e),q:`${a} + ${b} = ?`,...numOpts(a+b,[1,-1,2])}}},
 {title:{en:'Adding zero',am:'ዜሮን መደመር'},type:'quiz',
  tip:{en:'Adding 0 adds nothing. The number stays the same!',am:'0 መደመር ምንም አይጨምርም። ቁጥሩ አይለወጥም!'},
  items:[{q:'6 + 0 = ?',o:['0','6','7','60'],a:1},{q:'0 + 9 = ?',o:['9','0','10','1'],a:0},{q:'0 + 0 = ?',o:['1','0','2','10'],a:1},
   {fig:plus(4,0,'🍞'),q:{en:'4 breads and 0 more breads. How many?',am:'4 ዳቦዎችና 0 ተጨማሪ ዳቦዎች። ስንት ናቸው?'},o:['4','5','0','40'],a:0}]},
 {title:{en:'Count on',am:'ወደፊት በመቁጠር መደመር'},type:'drill',need:6,
  tip:{en:'Start with the bigger number in your head, then count on. 6 + 3: say 6… then 7, 8, 9!',am:'ትልቁን ቁጥር በአእምሯችሁ ያዙ፤ ከዚያ ወደፊት ቁጠሩ። 6 + 3፦ 6 በሉ… ቀጥሎ 7፣ 8፣ 9!'},
  gen(){const a=rnd(4,8),b=rnd(1,Math.min(3,10-a));return{q:`${a} + ${b} = ?`,...numOpts(a+b,[1,-1,2]),e:{en:`Start at ${a}, count on ${b}: ${Array.from({length:b},(_,i)=>a+i+1).join(', ')}`,am:`ከ${a} ጀምሩ፣ ${b} ወደፊት ቁጠሩ፦ ${Array.from({length:b},(_,i)=>a+i+1).join('፣ ')}`}}}},
 {title:{en:'Make ten',am:'አስር መሙላት'},type:'drill',need:5,
  tip:{en:'A ten-frame holds 10. How many empty boxes? That is what you add to make 10.',am:'የአስር ሳጥን 10 ይይዛል። ስንት ባዶ ሳጥኖች አሉ? 10 ለማድረግ የምትጨምሩት ያን ያህል ነው።'},
  gen(){const a=rnd(1,9);return{fig:tenframe(a),q:`${a} + ? = 10`,...numOpts(10-a,[1,-1,2]),e:`${a} + ${10-a} = 10`}}},
 {title:{en:'Doubles and any order',am:'እጥፍና በማንኛውም ቅደም ተከተል'},type:'quiz',
  tip:{en:'Doubles add the same number twice: 4 + 4 = 8. And 2 + 5 is the same as 5 + 2!',am:'እጥፍ ማለት አንድን ቁጥር ሁለት ጊዜ መደመር ነው፦ 4 + 4 = 8። 2 + 5 ደግሞ ከ5 + 2 ጋር አንድ ነው!'},
  items:[{fig:'<div class="cnt" style="--per:1"><span class="emo">🖐️🖐️</span></div>',q:{en:'5 fingers + 5 fingers = ?',am:'5 ጣቶች + 5 ጣቶች = ?'},o:['10','5','55','8'],a:0},
   {q:'3 + 3 = ?',o:['6','3','9','5'],a:0},{q:'4 + 4 = ?',o:['8','4','6','10'],a:0},
   {q:{en:'2 + 7 = 9. So 7 + 2 = ?',am:'2 + 7 = 9። ስለዚህ 7 + 2 = ?'},o:['9','5','27','7'],a:0},
   {q:{en:'Which is the same as 1 + 6?',am:'ከ1 + 6 ጋር የሚመሳሰለው የትኛው ነው?'},o:['6 + 1','6 + 6','1 + 1'],a:0}]},
 {title:{en:'Add down (vertical)',am:'ቁልቁል መደመር'},type:'drill',need:5,
  tip:{en:'We can also write addition from top to bottom. Add the two numbers and write the answer under the line.',am:'መደመርን ከላይ ወደ ታች መጻፍም እንችላለን። ሁለቱን ቁጥሮች ደምሩና መልሱን ከመስመሩ በታች ጻፉ።'},
  gen(){const a=rnd(1,8),b=rnd(1,10-a);return{fig:`<div class="vcol"><span>${a}</span><span>+ ${b}</span><span class="ln">?</span></div>`,q:{en:'What goes under the line?',am:'ከመስመሩ በታች ምን ይጻፋል?'},...numOpts(a+b,[1,-1,2])}}},
 {type:'exam',items:[
   {q:'5 + 3 = ?',o:['8','7','2','53'],a:0},
   {q:'0 + 7 = ?',o:['0','7','8','70'],a:1},
   {q:{en:'Tsehay has 4 pencils and gets 4 more. How many?',am:'ፀሐይ 4 እርሳሶች አሏት፤ 4 ተጨማሪ አገኘች። ስንት ሆኑ?'},o:['8','4','6','44'],a:0},
   {q:'6 + ? = 10',o:['3','4','5','16'],a:1},
   {q:{en:'Which is the same as 3 + 6?',am:'ከ3 + 6 ጋር እኩል የሆነው?'},o:['6 + 3','3 + 3','6 − 3'],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'Adding means putting groups together to find how many in all.',am:'መደመር ማለት በአጠቃላይ ስንት እንደሆኑ ለማወቅ ቡድኖችን ማሰባሰብ ነው።'},
  points:[{en:'Addition story: some, then some more. Find the total.',am:'የመደመር ተረት፦ ጥቂት ነበሩ፤ ተጨማሪ መጡ። ድምሩን ፈልጉ።'},
   {en:'3 + 2 = 5: "+" means add and "=" means equals.',am:'3 + 2 = 5፦ "+" ደምሩ፣ "=" እኩል ነው ማለት ነው።'},
   {en:'Adding 0 keeps the number the same.',am:'0 መደመር ቁጥሩን አይለውጠውም።'},
   {en:'Count on from the bigger number.',am:'ከትልቁ ቁጥር ጀምራችሁ ወደፊት ቁጠሩ።'},
   {en:'Make ten and use doubles: 5 + 5 = 10.',am:'አስር ሙሉ፤ እጥፍ ተጠቀሙ፦ 5 + 5 = 10።'},
   {en:'Order does not change the sum: 2 + 5 = 5 + 2.',am:'ቅደም ተከተል ድምሩን አይለውጠውም፦ 2 + 5 = 5 + 2።'}],
  words:[['መደመር (+)',{en:'add',am:'ማሰባሰብ'}],['ድምር',{en:'sum / total',am:'የመደመር ውጤት'}],['እኩል (=)',{en:'equals',am:'አንድ ዓይነት'}],['እጥፍ',{en:'double',am:'ሁለት ጊዜ'}]],
  remember:{en:'Big number in your head, count on with your fingers!',am:'ትልቁን ቁጥር በአእምሯችሁ፣ በጣቶቻችሁ ወደፊት ቁጠሩ!'},
  exam:[['4 + 5 = ?','9'],['7 + 0 = ?','7'],['8 + ? = 10','2'],[{en:'Double 3?',am:'የ3 እጥፍ?'},'6']],
  innovate:{title:{en:'Egg-tray adding machine',am:'የእንቁላል ትሪ የመደመሪያ ማሽን'},text:{en:'An empty egg tray can become a ten-frame! Use it with beans to add and to sell beans in bags of 10.',am:'ባዶ የእንቁላል ትሪ የአስር ሳጥን ሊሆን ይችላል! በባቄላ ደምሩበት፤ ባቄላን በ10 በ10 በከረጢት ሽጡበት።'},
   steps:[{en:'Cut an egg tray to 10 cups (2 rows of 5).',am:'የእንቁላል ትሪን 10 ጉድጓዶች (2 ረድፍ በ5) እንዲኖሩት ቁረጡ።'},{en:'Put red beans and white beans in the cups.',am:'ቀይና ነጭ ባቄላዎችን በጉድጓዶቹ ውስጥ አስቀምጡ።'},{en:'Say the sentence: 6 red + 4 white = 10.',am:'ዓረፍተ ነገሩን በሉ፦ 6 ቀይ + 4 ነጭ = 10።'},{en:'Pack beans in bags of 10 for a pretend shop.',am:'ለሙከራ ሱቅ ባቄላን በ10 በ10 አሽጉ።'}]}
 }}
 ]});
})();
