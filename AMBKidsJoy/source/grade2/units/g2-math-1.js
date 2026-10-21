/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 1 · እስከ 1000 ያሉ ቁጥሮች */
(function(){
const {rnd,numOpts}=G3;
const H=['','አንድ መቶ','ሁለት መቶ','ሦስት መቶ','አራት መቶ','አምስት መቶ','ስድስት መቶ','ሰባት መቶ','ስምንት መቶ','ዘጠኝ መቶ'];
const flats=(h,t,o)=>`<div class="pv">${'<span class="fl"></span>'.repeat(h)}${'<span class="rd"></span>'.repeat(t)}${'<span class="un"></span>'.repeat(o)}</div>`;
const SM={en:'Mathematics',am:'ሒሳብ'};
Unit.start({id:'g2-math-1',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Numbers up to 1,000',am:'እስከ 1000 ያሉ ቁጥሮች'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 1: reading, writing, place value, comparing and ordering numbers to 1,000.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 1 ላይ የተመሰረተ፦ እስከ 1000 ያሉ ቁጥሮችን ማንበብ፣ መጻፍ፣ የቁጥር ቤት ዋጋ፣ ማወዳደርና በቅደም ተከተል ማስቀመጥ።'},
 missions:[
 {title:{en:'Hundreds, tens, ones',am:'መቶዎች፣ አስሮች፣ አንዶች'},type:'drill',need:6,
  tip:{en:'A big square is 100, a stick is 10, a small cube is 1. Count hundreds first, then tens, then ones.',am:'ትልቁ ካሬ 100፣ በትሩ 10፣ ትንሹ ኩብ 1 ነው። መጀመሪያ መቶዎችን፣ ከዚያ አስሮችን፣ ከዚያ አንዶችን ቁጠሩ።'},
  gen(){const h=rnd(1,4),t=rnd(0,6),o=rnd(0,9);const n=h*100+t*10+o;return{fig:flats(h,t,o),q:{en:'What number is shown?',am:'የሚታየው ቁጥር ስንት ነው?'},...numOpts(n,[10,-10,100,-100,1]),e:`${h}×100 + ${t}×10 + ${o} = ${n}`}}},
 {title:{en:'Place value',am:'የቁጥር ቤት ዋጋ'},type:'drill',need:6,
  tip:{en:'In 352, the 3 means 300, the 5 means 50 and the 2 means 2.',am:'በ352 ውስጥ 3 ማለት 300፣ 5 ማለት 50፣ 2 ማለት 2 ነው።'},
  gen(){let n,d,k;do{n=rnd(101,999);d=String(n);k=rnd(0,2)}while(d[k]==='0');const val=+d[k]*[100,10,1][k];const O=G3.shuffle([+d[k],+d[k]*10,+d[k]*100]);return{q:{en:`In ${n}, what is the value of the digit ${d[k]} in the ${['hundreds','tens','ones'][k]} place?`,am:`በ${n} ውስጥ በ${['መቶዎች','አስሮች','አንዶች'][k]} ቤት ያለው ${d[k]} ዋጋው ስንት ነው?`},o:O.map(String),a:O.indexOf(val),e:`${n} = ${+d[0]*100} + ${+d[1]*10} + ${d[2]}`}}},
 {title:{en:'Read number names',am:'የቁጥር ስሞችን ማንበብ'},type:'match',
  tip:{en:'Read the hundreds name first: "three hundred and forty".',am:'መጀመሪያ የመቶውን ስም አንብቡ፦ "ሦስት መቶ አርባ"።'},
  rounds:[[['300',{en:'three hundred',am:'ሦስት መቶ'}],['450',{en:'four hundred fifty',am:'አራት መቶ ሃምሳ'}],['706',{en:'seven hundred six',am:'ሰባት መቶ ስድስት'}],['1000',{en:'one thousand',am:'አንድ ሺህ'}]]]},
 {title:{en:'Count on by 10s and 100s',am:'በ10ና በ100 መቁጠር'},type:'drill',need:6,
  tip:{en:'Adding 10 changes the tens digit. Adding 100 changes the hundreds digit.',am:'10 መደመር የአስሮችን ሆሄ ይለውጣል። 100 መደመር የመቶዎችን ሆሄ ይለውጣል።'},
  gen(){const s=Math.random()<.5?10:100;const a=rnd(100,s===10?950:600);return{q:`${a}, ${a+s}, ${a+2*s}, ?`,...numOpts(a+3*s,[10,-10,100,-100,1])}}},
 {title:{en:'Compare and order',am:'ማወዳደርና በቅደም ተከተል ማስቀመጥ'},type:'drill',need:6,
  tip:{en:'Compare the hundreds first. If they are the same, compare the tens, then the ones.',am:'መጀመሪያ መቶዎችን አወዳድሩ። እኩል ከሆኑ አስሮችን፣ ከዚያ አንዶችን አወዳድሩ።'},
  gen(){let a=rnd(100,999),b=Math.random()<.5?a+rnd(1,9)*(Math.random()<.5?1:10):rnd(100,999);if(b>999)b=a-5;if(a===b)b++;return{q:`${a} ___ ${b}`,o:['>','<','='],a:a>b?0:a<b?1:2,e:{en:'> means greater than, < means less than.',am:'> ይበልጣል፣ < ያንሳል ማለት ነው።'}}}},
 {title:{en:'Smallest to biggest',am:'ከትንሹ እስከ ትልቁ'},type:'order',
  tip:{en:'Look at the hundreds first to order the numbers.',am:'ቁጥሮችን ለማስቀመጥ መጀመሪያ መቶዎችን ተመልከቱ።'},
  help:{en:'Tap from smallest to biggest.',am:'ከትንሹ እስከ ትልቁ ንኩ።'},
  rounds:[{prompt:{en:'Order:',am:'አስቀምጡ፦'},items:['189','318','381','813','831']},{prompt:{en:'Order:',am:'አስቀምጡ፦'},items:['405','450','504','540','999']}]},
 {type:'exam',items:[
  {q:{en:'What is 6 hundreds, 2 tens and 5 ones?',am:'6 መቶዎች፣ 2 አስሮችና 5 አንዶች ስንት ነው?'},o:['625','526','265','652'],a:0},
  {q:{en:'The value of 7 in 472 is…',am:'በ472 ውስጥ የ7 ዋጋ…'},o:['70','7','700','47'],a:0},
  {q:'598, 599, 600, ?',o:['601','610','700','591'],a:0},
  {q:'738 ___ 783',o:['<','>','='],a:0},
  {q:{en:'One thousand is written…',am:'አንድ ሺህ እንዲህ ይጻፋል…'},o:['1000','100','10000','1100'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Every three-digit number has hundreds, tens and ones. Ten hundreds make one thousand.',am:'እያንዳንዱ ባለ ሦስት ሆሄ ቁጥር መቶዎች፣ አስሮችና አንዶች አሉት። አስር መቶዎች አንድ ሺህ ይሆናሉ።'},
  points:[{en:'100 = ten tens. 1000 = ten hundreds.',am:'100 = አስር አስሮች። 1000 = አስር መቶዎች።'},{en:'In 352: 3 hundreds (300), 5 tens (50), 2 ones (2).',am:'በ352፦ 3 መቶዎች (300)፣ 5 አስሮች (50)፣ 2 አንዶች (2)።'},{en:'Read numbers aloud: 706 is "seven hundred six".',am:'ቁጥሮችን ጮክ ብላችሁ አንብቡ፦ 706 "ሰባት መቶ ስድስት" ነው።'},{en:'Compare hundreds, then tens, then ones. Use > and <.',am:'መቶዎችን፣ ከዚያ አስሮችን፣ ከዚያ አንዶችን አወዳድሩ። > እና < ተጠቀሙ።'}],
  words:[['መቶ',{en:'hundred',am:'100'}],['ሺህ',{en:'thousand',am:'1000'}],['የቁጥር ቤት',{en:'place value',am:'የሆሄው ቦታ'}]],
  remember:{en:'The crocodile mouth (>) eats the bigger number!',am:'የአዞው አፍ (>) ትልቁን ቁጥር ይበላል!'},
  exam:[[{en:'Write 9 hundreds, 0 tens, 4 ones',am:'9 መቶዎች፣ 0 አስሮች፣ 4 አንዶች ጻፉ'},'904'],['560 + 100 = ?','660'],[{en:'Bigger: 409 or 490?',am:'የሚበልጠው፦ 409 ወይስ 490?'},'490']],
  innovate:{title:{en:'Bottle-cap bank',am:'የጠርሙስ ክዳን ባንክ'},text:{en:'Recyclers count large numbers. Collect bottle caps for recycling and keep count in bags of 10 and boxes of 100.',am:'መልሶ ጠቃሚዎች ብዙ ቁጥሮችን ይቆጥራሉ። ለመልሶ መጠቀም የጠርሙስ ክዳኖችን ሰብስቡ፤ በ10 ከረጢትና በ100 ሳጥን ቁጠሩ።'},
   steps:[{en:'Collect caps from home and school.',am:'ከቤትና ከትምህርት ቤት ክዳኖችን ሰብስቡ።'},{en:'Put 10 caps in each small bag.',am:'በእያንዳንዱ ትንሽ ከረጢት 10 ክዳኖች አድርጉ።'},{en:'Put 10 bags in a box = 100.',am:'10 ከረጢቶችን በሳጥን አድርጉ = 100።'},{en:'Write your total each week. Can you reach 1000?',am:'በየሳምንቱ ድምሩን ጻፉ። 1000 ትደርሳላችሁ?'}]}}}
 ]});
})();
