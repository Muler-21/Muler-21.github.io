/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 1 · እስከ 20 ያሉ ቁጥሮች */
(function(){
const {tx,rnd,shuffle,numOpts,objs}=G3;const {pick,tenframe}=K1;
const W=[['0','ዜሮ','zero'],['1','አንድ','one'],['2','ሁለት','two'],['3','ሦስት','three'],['4','አራት','four'],['5','አምስት','five'],['6','ስድስት','six'],['7','ሰባት','seven'],['8','ስምንት','eight'],['9','ዘጠኝ','nine'],['10','አስር','ten'],
 ['11','አስራ አንድ','eleven'],['12','አስራ ሁለት','twelve'],['13','አስራ ሦስት','thirteen'],['14','አስራ አራት','fourteen'],['15','አስራ አምስት','fifteen'],['16','አስራ ስድስት','sixteen'],['17','አስራ ሰባት','seventeen'],['18','አስራ ስምንት','eighteen'],['19','አስራ ዘጠኝ','nineteen'],['20','ሃያ','twenty']];
const word=n=>({en:W[n][2],am:W[n][1]});
const countQ=(a,b)=>()=>{const n=rnd(a,b);const e=pick('fruit');return{fig:objs(n,e,5),q:{en:'How many are there?',am:'ስንት ናቸው?'},...numOpts(n,[1,-1,2,-2]),e:{en:`${n}: ${W[n][2]}`,am:`${n}፦ ${W[n][1]}`}}};
Unit.start({
 id:'g1-math-1',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Numbers up to 20',am:'እስከ 20 ያሉ ቁጥሮች'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 1: counting, reading and writing numbers up to 20.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 1 ላይ የተመሰረተ፦ እስከ 20 ያሉ ቁጥሮችን መቁጠር፣ ማንበብና መጻፍ።'},
 missions:[
 {title:{en:'Count 1 to 5',am:'ከ1 እስከ 5 መቁጠር'},type:'drill',need:5,
  tip:{en:'Touch each thing once and say the number: one, two, three… The last number you say tells how many.',am:'እያንዳንዱን ነገር አንድ ጊዜ ንኩና ቁጥሩን በሉ፦ አንድ፣ ሁለት፣ ሦስት… የመጨረሻው ቁጥር ስንት እንደሆኑ ይነግራችኋል።'},
  gen:countQ(1,5)},
 {title:{en:'Count 6 to 9',am:'ከ6 እስከ 9 መቁጠር'},type:'drill',need:5,
  tip:{en:'Count in rows. Five in the top row, then keep counting: six, seven, eight, nine.',am:'በረድፍ ቁጠሩ። ከላይ አምስት ናቸው፤ ከዚያ መቁጠር ቀጥሉ፦ ስድስት፣ ሰባት፣ ስምንት፣ ዘጠኝ።'},
  gen:countQ(6,9)},
 {title:{en:'Write 1 to 5',am:'ከ1 እስከ 5 መጻፍ'},type:'trace',items:['1','2','3','4','5'],
  tip:{en:'Put your finger on the dotted number and draw over it. Start at the top.',am:'ጣታችሁን በነጠብጣቡ ቁጥር ላይ አድርጉና በላዩ ላይ ጻፉ። ከላይ ጀምሩ።'}},
 {title:{en:'Write 6 to 9 and 0',am:'ከ6 እስከ 9 እና 0 መጻፍ'},type:'trace',items:['6','7','8','9','0'],
  tip:{en:'Zero means nothing at all. It is a round shape, like an egg.',am:'ዜሮ ማለት ምንም የለም ማለት ነው። እንደ እንቁላል ክብ ቅርጽ ነው።'}},
 {title:{en:'Number names',am:'የቁጥር ስሞች'},type:'match',
  tip:{en:'Every number has a name. Match the number with its name.',am:'እያንዳንዱ ቁጥር ስም አለው። ቁጥሩን ከስሙ ጋር አዛምዱ።'},
  rounds:[[1,2,3,4,5].map(n=>[String(n),word(n)]),[6,7,8,9,0].map(n=>[String(n),word(n)])]},
 {title:{en:'Zero: nothing left',am:'ዜሮ፦ ምንም አልቀረም'},type:'quiz',
  tip:{en:'When there is nothing, we say zero and write 0.',am:'ምንም ነገር በሌለ ጊዜ ዜሮ እንላለን፤ 0 ብለን እንጽፋለን።'},
  items:[
   {fig:'<div class="cnt" style="--per:1"><span class="emo">🧺</span></div>',q:{en:'The basket is empty. How many mangoes are in it?',am:'ቅርጫቱ ባዶ ነው። በውስጡ ስንት ማንጎ አለ?'},o:['0','1','2','10'],a:0},
   {fig:objs(3,'🐓',3),q:{en:'3 hens run away. How many hens are left?',am:'3 ዶሮዎች ሸሹ። ስንት ዶሮዎች ቀሩ?'},o:['3','0','1','6'],a:1,e:{en:'All 3 ran away, so 0 are left.',am:'3ቱም ሸሹ፤ ስለዚህ 0 ቀሩ።'}},
   {q:{en:'Which number is the smallest?',am:'ከሁሉም ትንሹ ቁጥር የትኛው ነው?'},o:['1','0','5','9'],a:1}
  ]},
 {title:{en:'Ten and more: 10 to 20',am:'አስርና ከዚያ በላይ፦ ከ10 እስከ 20'},type:'drill',need:6,
  tip:{en:'A full frame has 10. Count on from ten: eleven, twelve, thirteen…',am:'ሙሉ ሳጥን 10 ይይዛል። ከአስር ቀጥሎ ቁጠሩ፦ አስራ አንድ፣ አስራ ሁለት፣ አስራ ሦስት…'},
  gen(){const n=rnd(10,20);return{fig:tenframe(n),q:{en:'How many dots?',am:'ስንት ነጥቦች ናቸው?'},...numOpts(n,[1,-1,10,-10,2]),e:{en:`10 and ${n-10} make ${n} (${W[n][2]}).`,am:`10 እና ${n-10} ${n} (${W[n][1]}) ይሆናሉ።`}}}},
 {title:{en:'What comes next?',am:'ቀጥሎ የሚመጣው?'},type:'drill',need:5,
  tip:{en:'Say the numbers in order. Which number comes just after?',am:'ቁጥሮቹን በቅደም ተከተል በሉ። ወዲያው ቀጥሎ የሚመጣው የትኛው ነው?'},
  gen(){const n=rnd(1,18);return{q:`${n}, ${n+1}, ?`,...numOpts(n+2,[1,-1,2,-2]),e:`${n}, ${n+1}, ${n+2}`}}},
 {type:'exam',items:[
   {fig:objs(4,'🐑',4),q:{en:'How many sheep?',am:'ስንት በጎች?'},o:['3','4','5','6'],a:1},
   {q:{en:'Which is the number "seven"?',am:'"ሰባት" የትኛው ቁጥር ነው?'},o:['6','7','9','1'],a:1},
   {fig:tenframe(13),q:{en:'How many dots?',am:'ስንት ነጥቦች?'},o:['13','3','10','31'],a:0},
   {q:{en:'What comes after 15?',am:'ከ15 ቀጥሎ የሚመጣው?'},o:['14','16','17','51'],a:1},
   {q:{en:'How many fingers are on two hands?',am:'በሁለት እጆች ላይ ስንት ጣቶች አሉ?'},o:['5','10','20','2'],a:1},
   {q:{en:'An empty plate has how many breads?',am:'ባዶ ሳህን ላይ ስንት ዳቦ አለ?'},o:['0','1','10','5'],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'Numbers tell us how many. We can count, read and write numbers from 0 to 20.',am:'ቁጥሮች ስንት እንደሆኑ ይነግሩናል። ከ0 እስከ 20 ያሉ ቁጥሮችን መቁጠር፣ ማንበብና መጻፍ እንችላለን።'},
  points:[{en:'Touch each thing once when you count. The last number tells how many.',am:'ስትቆጥሩ እያንዳንዱን ነገር አንድ ጊዜ ንኩ። የመጨረሻው ቁጥር ስንት እንደሆኑ ይናገራል።'},
   {en:'We write numbers 1 to 9 with one digit and start each one at the top.',am:'ከ1 እስከ 9 ያሉትን ቁጥሮች በአንድ ሆሄ እንጽፋለን፤ እያንዳንዱን ከላይ እንጀምራለን።'},
   {en:'Zero (0) means nothing.',am:'ዜሮ (0) ማለት ምንም የለም ማለት ነው።'},
   {en:'10 and 1 more is 11, 10 and 2 more is 12, … up to 20.',am:'10 እና 1 ተጨማሪ 11 ነው፤ 10 እና 2 ተጨማሪ 12 ነው፤ … እስከ 20።'}],
  words:[['ቁጥር',{en:'number',am:'ስንት እንደሆኑ የሚገልጽ'}],['ዜሮ (0)',{en:'zero',am:'ምንም'}],['አስር (10)',{en:'ten',am:'የሁለት እጆች ጣቶች'}]],
  remember:{en:'Count slowly, touch each one, say the last number loudly!',am:'በቀስታ ቁጠሩ፣ እያንዳንዱን ንኩ፣ የመጨረሻውን ቁጥር ጮክ ብላችሁ በሉ!'},
  exam:[[{en:'Count the cups at home. How many?',am:'በቤት ያሉትን ስኒዎች ቁጠሩ። ስንት ናቸው?'},{en:'Count and touch each one.',am:'እያንዳንዱን እየነካችሁ ቁጠሩ።'}],[{en:'Write the number after 9.',am:'ከ9 ቀጥሎ ያለውን ቁጥር ጻፉ።'},'10'],[{en:'What does 0 mean?',am:'0 ምን ማለት ነው?'},{en:'Nothing',am:'ምንም'}],[{en:'10 and 5 more?',am:'10 እና 5 ተጨማሪ?'},'15']],
  innovate:{title:{en:'Bottle-cap counting set',am:'የጠርሙስ ክዳን መቁጠሪያ'},text:{en:'Turn rubbish into a learning tool! Collect 20 bottle caps and make your own counting set to teach a younger child.',am:'ቆሻሻን ወደ መማሪያ ቀይሩ! 20 የጠርሙስ ክዳኖችን ሰብስቡና ታናሽ ልጅን የምታስተምሩበት የራሳችሁን መቁጠሪያ ሥሩ።'},
   steps:[{en:'Collect 20 clean bottle caps.',am:'20 ንጹህ የጠርሙስ ክዳኖችን ሰብስቡ።'},{en:'Write a number 1 to 20 on paper cards.',am:'በወረቀት ካርዶች ላይ ከ1 እስከ 20 ቁጥሮችን ጻፉ።'},{en:'Put the right number of caps on each card.',am:'በእያንዳንዱ ካርድ ላይ ትክክለኛውን ብዛት ክዳኖች አስቀምጡ።'},{en:'Teach a brother, sister or friend to count.',am:'ወንድማችሁን፣ እህታችሁን ወይም ጓደኛችሁን መቁጠር አስተምሩ።'}]}
 }}
 ]});
})();
