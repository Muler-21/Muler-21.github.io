/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 10 · ገንዘብ */
(function(){
const {rnd,numOpts}=G3;const {coins,note}=K1;const SM={en:'Mathematics',am:'ሒሳብ'};
const notes=l=>`<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">${l.map(v=>note(v)).join('')}</div>`;
Unit.start({id:'g2-math-10',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 10',am:'ምዕራፍ 10'},
 title:{en:'Money',am:'ገንዘብ'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 10: counting coins, counting birr notes and how coins and notes relate.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 10 ላይ የተመሰረተ፦ ሳንቲሞችን መቁጠር፣ የብር ኖቶችን መቁጠርና የሳንቲምና የኖት ዝምድና።'},
 missions:[
 {title:{en:'Count the coins',am:'ሳንቲሞችን ቁጠሩ'},type:'drill',need:6,
  tip:{en:'Start with the coin worth the most and count on.',am:'ከፍተኛ ዋጋ ካለው ሳንቲም ጀምራችሁ ወደፊት ቁጠሩ።'},
  gen(){const l=Array.from({length:rnd(3,5)},()=>[50,25,10,5][rnd(0,3)]).sort((a,b)=>b-a);const s=l.reduce((a,b)=>a+b,0);return{fig:coins(l),q:{en:'How many cents?',am:'ስንት ሳንቲም ነው?'},...numOpts(s,[5,-5,10,-10]),e:l.join(' + ')+' = '+s}}},
 {title:{en:'Count the notes',am:'የብር ኖቶችን ቁጠሩ'},type:'drill',need:6,
  tip:{en:'Ethiopian notes: 10, 50, 100 and 200 birr. Add them up.',am:'የኢትዮጵያ የብር ኖቶች፦ 10፣ 50፣ 100 እና 200 ብር። ደምሯቸው።'},
  gen(){const l=Array.from({length:rnd(2,4)},()=>[10,10,50,100][rnd(0,3)]).sort((a,b)=>b-a);const s=l.reduce((a,b)=>a+b,0);return{fig:notes(l),q:{en:'How many birr?',am:'ስንት ብር ነው?'},...numOpts(s,[10,-10,50,100]),e:l.join(' + ')+' = '+s+' birr'}}},
 {title:{en:'Coins and notes',am:'የሳንቲምና የኖት ዝምድና'},type:'quiz',
  tip:{en:'100 cents = 1 birr. 10 ten-birr notes = 100 birr.',am:'100 ሳንቲም = 1 ብር። 10 የ10 ብር ኖቶች = 100 ብር።'},
  items:[{q:{en:'How many 50-cent coins make 1 birr?',am:'ስንት የ50 ሳንቲም ሳንቲሞች 1 ብር ይሆናሉ?'},o:['2','5','50','10'],a:0},{q:{en:'How many 10-birr notes make 50 birr?',am:'ስንት የ10 ብር ኖቶች 50 ብር ይሆናሉ?'},o:['5','10','50','2'],a:0},{q:{en:'How many 100-birr notes make 200 birr?',am:'ስንት የ100 ብር ኖቶች 200 ብር ይሆናሉ?'},o:['2','20','1','4'],a:0},{q:{en:'4 coins of 25 cents = ?',am:'4 የ25 ሳንቲም ሳንቲሞች = ?'},o:[{en:'1 birr',am:'1 ብር'},{en:'4 birr',am:'4 ብር'},{en:'25 cents',am:'25 ሳንቲም'}],a:0}]},
 {title:{en:'Shopping and change',am:'ግብይትና መልስ'},type:'drill',need:5,
  tip:{en:'Change = money given − price.',am:'መልስ = የተሰጠ ገንዘብ − ዋጋ።'},
  gen(){const items=[[{en:'exercise book',am:'ደብተር'},rnd(15,40)],[{en:'pen',am:'እስክሪብቶ'},rnd(8,25)],[{en:'kilo of tomatoes',am:'ኪሎ ቲማቲም'},rnd(30,60)]];const [n,p]=items[rnd(0,2)];const give=[50,100][p>45?1:rnd(0,1)];return{fig:notes([give]),q:{en:`A ${n.en} costs ${p} birr. You pay ${give} birr. Change?`,am:`${n.am} ${p} ብር ነው። ${give} ብር ከፈላችሁ። መልሱ?`},...numOpts(give-p,[1,-1,10,-10]),e:`${give} − ${p} = ${give-p}`}}},
 {type:'exam',items:[{fig:coins([50,25,10]),q:{en:'How much?',am:'ስንት ነው?'},o:['85 ሳ','75 ሳ','95 ሳ'],a:0},{fig:notes([100,50,10]),q:{en:'How much?',am:'ስንት ነው?'},o:['160','150','170'],a:0},{q:{en:'100 cents = ?',am:'100 ሳንቲም = ?'},o:[{en:'1 birr',am:'1 ብር'},{en:'10 birr',am:'10 ብር'}],a:0},{q:{en:'Price 35 birr, you pay 50. Change?',am:'ዋጋ 35 ብር፣ 50 ከፈላችሁ። መልስ?'},o:['15','25','85'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Ethiopian money has coins (cents and 1 birr) and notes (10, 50, 100, 200 birr). We count them to buy, sell and save.',am:'የኢትዮጵያ ገንዘብ ሳንቲሞች (ሳንቲምና 1 ብር) እና ኖቶች (10፣ 50፣ 100፣ 200 ብር) አሉት። ለመግዛት፣ ለመሸጥና ለመቆጠብ እንቆጥራቸዋለን።'},
  points:[{en:'Coins: 5, 10, 25, 50 cents and 1 birr.',am:'ሳንቲሞች፦ 5፣ 10፣ 25፣ 50 ሳንቲምና 1 ብር።'},{en:'Notes: 10, 50, 100, 200 birr.',am:'ኖቶች፦ 10፣ 50፣ 100፣ 200 ብር።'},{en:'100 cents = 1 birr.',am:'100 ሳንቲም = 1 ብር።'},{en:'Change = money paid − price.',am:'መልስ = የተከፈለ − ዋጋ።'}],
  words:[['ኖት',{en:'banknote',am:'የወረቀት ገንዘብ'}],['መልስ',{en:'change',am:'የሚመለስ ገንዘብ'}],['ቁጠባ',{en:'saving',am:'ገንዘብ ማስቀመጥ'}]],
  remember:{en:'Count your change before you leave the shop!',am:'ከሱቅ ከመውጣታችሁ በፊት መልሳችሁን ቁጠሩ!'},
  exam:[[{en:'How many 50-birr notes in 200 birr?',am:'በ200 ብር ውስጥ ስንት የ50 ብር ኖቶች?'},'4'],[{en:'Price 72 birr, paid 100. Change?',am:'ዋጋ 72 ብር፣ የተከፈለ 100። መልስ?'},'28']],
  innovate:{title:{en:'My savings plan',am:'የቁጠባ ዕቅዴ'},text:{en:'Savers become investors! Choose something useful to buy, find its price, and plan how many weeks you need to save.',am:'ቆጣቢዎች ባለሀብት ይሆናሉ! የሚጠቅም ነገር ምረጡ፣ ዋጋውን እወቁ፣ ስንት ሳምንት መቆጠብ እንዳለባችሁ አቅዱ።'},
   steps:[{en:'Choose a goal: a book, a ball, school shoes.',am:'ግብ ምረጡ፦ መጽሐፍ፣ ኳስ፣ የትምህርት ቤት ጫማ።'},{en:'Find the price.',am:'ዋጋውን ፈልጉ።'},{en:'Decide how much you can save each week.',am:'በሳምንት ምን ያህል መቆጠብ እንደምትችሉ ወስኑ።'},{en:'Count how many weeks you need and track it.',am:'ስንት ሳምንት እንደሚያስፈልጋችሁ ቁጠሩና ተከታተሉ።'}]}}}
 ]});
})();
