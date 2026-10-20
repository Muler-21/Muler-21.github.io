/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 10 · የኢትዮጵያ ገንዘብ */
(function(){
const {tx,rnd,shuffle,numOpts}=G3;const {coin,coins}=K1;
const NAME={1:{en:'1 cent',am:'አንድ ሳንቲም'},5:{en:'5 cents',am:'አምስት ሳንቲም'},10:{en:'10 cents',am:'አስር ሳንቲም'},25:{en:'25 cents',am:'ሃያ አምስት ሳንቲም'},50:{en:'50 cents',am:'አምሳ ሳንቲም'},100:{en:'1 birr',am:'አንድ ብር'}};
const ITEMS=[{en:'🎈 balloon',am:'🎈 ፊኛ',p:20},{en:'🍬 sweet',am:'🍬 ከረሜላ',p:10},{en:'✏️ pencil',am:'✏️ እርሳስ',p:50},{en:'🔵 marble',am:'🔵 ብይ',p:15},{en:'📒 exercise book',am:'📒 ደብተር',p:100}];
Unit.start({
 id:'g1-math-10',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 10',am:'ምዕራፍ 10'},
 title:{en:'Ethiopian money',am:'የኢትዮጵያ ገንዘብ'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 10: Ethiopian coins and counting amounts of money.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 10 ላይ የተመሰረተ፦ የኢትዮጵያ ሳንቲሞችና የገንዘብ መጠንን መቁጠር።'},
 missions:[
 {title:{en:'Know the coins',am:'ሳንቲሞችን ማወቅ'},type:'match',
  tip:{en:'Ethiopian coins: 1, 5, 10, 25 and 50 cents, and the 1 birr coin. 100 cents = 1 birr.',am:'የኢትዮጵያ ሳንቲሞች፦ 1፣ 5፣ 10፣ 25 እና 50 ሳንቲም፣ እንዲሁም አንድ ብር። 100 ሳንቲም = 1 ብር።'},
  rounds:[[[{en:'1 ሳ',am:'1 ሳ'},NAME[1]],[{en:'5 ሳ',am:'5 ሳ'},NAME[5]],[{en:'10 ሳ',am:'10 ሳ'},NAME[10]]],[[{en:'25 ሳ',am:'25 ሳ'},NAME[25]],[{en:'50 ሳ',am:'50 ሳ'},NAME[50]],[{en:'1 ብር',am:'1 ብር'},NAME[100]]]]},
 {title:{en:'Which coin?',am:'የትኛው ሳንቲም ነው?'},type:'drill',need:5,
  tip:{en:'Look at the number on the coin. ሳ means cents.',am:'በሳንቲሙ ላይ ያለውን ቁጥር ተመልከቱ። ሳ ማለት ሳንቲም ነው።'},
  gen(){const c=[1,5,10,25,50,100][rnd(0,5)];const set=new Set([c]);while(set.size<3)set.add([1,5,10,25,50,100][rnd(0,5)]);const o=shuffle([...set]);
   return{fig:coin(c,1.8),q:{en:'What is this coin?',am:'ይህ ሳንቲም ስንት ነው?'},o:o.map(v=>NAME[v]),a:o.indexOf(c)}}},
 {title:{en:'Count the coins',am:'ሳንቲሞችን ቁጠሩ'},type:'drill',need:6,
  tip:{en:'Start with the biggest coin, then count on: 10, 20, 25, 30…',am:'ከትልቁ ሳንቲም ጀምሩ፤ ከዚያ ወደፊት ቁጠሩ፦ 10፣ 20፣ 25፣ 30…'},
  gen(){const pool=[5,5,10,10,25,1];const k=rnd(2,4);let list=Array.from({length:k},()=>pool[rnd(0,pool.length-1)]).sort((a,b)=>b-a);const s=list.reduce((a,b)=>a+b,0);
   return{fig:coins(list),q:{en:'How many cents in all?',am:'በአጠቃላይ ስንት ሳንቲም ነው?'},...numOpts(s,[5,-5,10,1]),e:list.join(' + ')+' = '+s}}},
 {title:{en:'Coins that make 50',am:'50 የሚሆኑ ሳንቲሞች'},type:'quiz',
  tip:{en:'Different coins can make the same amount. Two 25s make 50!',am:'የተለያዩ ሳንቲሞች አንድ ዓይነት መጠን ሊሆኑ ይችላሉ። ሁለት 25 ሳንቲሞች 50 ይሆናሉ!'},
  items:[{q:{en:'How many 10-cent coins make 50 cents?',am:'ስንት 10 ሳንቲሞች 50 ሳንቲም ይሆናሉ?'},o:['5','10','2','50'],a:0},
   {q:{en:'How many 25-cent coins make 50 cents?',am:'ስንት 25 ሳንቲሞች 50 ሳንቲም ይሆናሉ?'},o:['2','5','25','4'],a:0},
   {q:{en:'How many 50-cent coins make 1 birr?',am:'ስንት 50 ሳንቲሞች 1 ብር ይሆናሉ?'},o:['2','5','50','10'],a:0}]},
 {title:{en:'Do you have enough?',am:'በቂ ገንዘብ አላችሁ?'},type:'drill',need:5,
  tip:{en:'Count your coins. If you have the price or more, you can buy it!',am:'ሳንቲሞቻችሁን ቁጠሩ። ዋጋው ወይም ከዚያ በላይ ካላችሁ መግዛት ትችላላችሁ!'},
  gen(){const it=ITEMS[rnd(0,3)];const list=Array.from({length:rnd(2,4)},()=>[5,10,10,25][rnd(0,3)]).sort((a,b)=>b-a);const s=list.reduce((a,b)=>a+b,0);
   return{fig:coins(list),q:{en:`A ${it.en.slice(3)} costs ${it.p} cents. Do you have enough?`,am:`${it.am} ዋጋው ${it.p} ሳንቲም ነው። በቂ ገንዘብ አላችሁ?`},o:[{en:'Yes, I have enough',am:'አዎ፣ አለኝ'},{en:'No, not enough',am:'የለኝም'}],a:s>=it.p?0:1,e:{en:`You have ${s} cents.`,am:`ያላችሁ ${s} ሳንቲም ነው።`}}}},
 {type:'exam',items:[
   {q:{en:'How many cents make 1 birr?',am:'ስንት ሳንቲም 1 ብር ይሆናል?'},o:['10','50','100','25'],a:2},
   {fig:coins([25,10,5]),q:{en:'How much money?',am:'ስንት ገንዘብ ነው?'},o:['40 ሳ','35 ሳ','30 ሳ','45 ሳ'],a:0},
   {q:{en:'A sweet costs 10 cents. You have 5 cents. Enough?',am:'ከረሜላ 10 ሳንቲም ነው። 5 ሳንቲም አላችሁ። በቂ ነው?'},o:[{en:'Yes',am:'አዎ'},{en:'No',am:'አይደለም'}],a:1},
   {q:{en:'Which coin is worth the most?',am:'ከፍተኛ ዋጋ ያለው ሳንቲም?'},o:[NAME[1],NAME[25],NAME[100]],a:2},
   {q:{en:'One cabbage costs 6 birr 50 cents. 2 cabbages cost…',am:'አንድ ጥቅል ጎመን 6 ብር ከ50 ሳንቲም ነው። 2 ጥቅል ጎመን…'},o:[{en:'13 birr',am:'13 ብር'},{en:'12 birr',am:'12 ብር'},{en:'8 birr',am:'8 ብር'}],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'Money helps us buy and sell. We count coins to know how much we have.',am:'ገንዘብ ለመግዛትና ለመሸጥ ይረዳናል። ምን ያህል እንዳለን ለማወቅ ሳንቲሞችን እንቆጥራለን።'},
  points:[{en:'Coins: 1, 5, 10, 25, 50 cents and 1 birr.',am:'ሳንቲሞች፦ 1፣ 5፣ 10፣ 25፣ 50 ሳንቲምና 1 ብር።'},
   {en:'100 cents = 1 birr. Two 50s, four 25s or ten 10s make 1 birr.',am:'100 ሳንቲም = 1 ብር። ሁለት 50፣ አራት 25 ወይም አስር 10 ሳንቲሞች 1 ብር ይሆናሉ።'},
   {en:'Count from the biggest coin, then count on.',am:'ከትልቁ ሳንቲም ጀምራችሁ ወደፊት ቁጠሩ።'},
   {en:'Compare your money with the price before you buy.',am:'ከመግዛታችሁ በፊት ገንዘባችሁን ከዋጋው ጋር አወዳድሩ።'}],
  words:[['ሳንቲም',{en:'cent / coin',am:'ትንሽ ገንዘብ'}],['ብር',{en:'birr',am:'100 ሳንቲም'}],['ዋጋ',{en:'price',am:'የአንድ ዕቃ ገንዘብ'}]],
  remember:{en:'Biggest coin first, then count on!',am:'መጀመሪያ ትልቁ ሳንቲም፣ ከዚያ ወደፊት ቁጠሩ!'},
  exam:[[{en:'25 + 25 = ? cents',am:'25 + 25 = ? ሳንቲም'},'50'],[{en:'How many 10-cent coins in 1 birr?',am:'በ1 ብር ውስጥ ስንት 10 ሳንቲሞች?'},'10'],[{en:'Price 30 cents, you have 25. Enough?',am:'ዋጋ 30 ሳንቲም፣ 25 አላችሁ። በቂ ነው?'},{en:'No, 5 cents short',am:'አይደለም፤ 5 ሳንቲም ይጎድላል'}]],
  innovate:{title:{en:'Little shop day',am:'የትንሽ ሱቅ ቀን'},text:{en:'Every big business starts small! Open a pretend class shop, set prices and count coins carefully.',am:'እያንዳንዱ ትልቅ ንግድ በትንሹ ይጀምራል! የሙከራ የክፍል ሱቅ ክፈቱ፣ ዋጋ አውጡና ሳንቲሞችን በጥንቃቄ ቁጠሩ።'},
   steps:[{en:'Make paper coins: 5, 10, 25, 50 cents.',am:'የወረቀት ሳንቲሞች ሥሩ፦ 5፣ 10፣ 25፣ 50 ሳንቲም።'},{en:'Bring things to sell: pencils, leaves, stones.',am:'የሚሸጡ ነገሮችን አምጡ፦ እርሳስ፣ ቅጠል፣ ጠጠር።'},{en:'Put a price card on each one.',am:'በእያንዳንዱ ላይ የዋጋ ካርድ አድርጉ።'},{en:'Take turns to be shopkeeper and customer.',am:'በተራ ሻጭና ገዢ ሁኑ።'}]}
 }}
 ]});
})();
