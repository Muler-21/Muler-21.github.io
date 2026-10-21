/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 8 · መረጃ አያያዝ */
(function(){
const {rnd,shuffle,numOpts}=G3;const {pict}=K1;const SM={en:'Mathematics',am:'ሒሳብ'};
const TAL=n=>{let g='',x=6;for(let i=0;i<Math.floor(n/5);i++){for(let j=0;j<4;j++)g+=`<line x1="${x+j*9}" y1="6" x2="${x+j*9}" y2="46" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>`;g+=`<line x1="${x-4}" y1="40" x2="${x+31}" y2="12" stroke="var(--clay)" stroke-width="4" stroke-linecap="round"/>`;x+=50}for(let j=0;j<n%5;j++)g+=`<line x1="${x+j*9}" y1="6" x2="${x+j*9}" y2="46" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/>`;const w=x+(n%5)*9+6;return`<svg viewBox="0 0 ${w} 52" style="width:${Math.min(w*1.6,340)}px;height:auto" role="img" aria-label="${n}">${g}</svg>`};
const FR=[[{en:'Mango',am:'ማንጎ'},'🥭'],[{en:'Banana',am:'ሙዝ'},'🍌'],[{en:'Orange',am:'ብርቱካን'},'🍊'],[{en:'Avocado',am:'አቮካዶ'},'🥑']];
Unit.start({id:'g2-math-8',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 8',am:'ምዕራፍ 8'},
 title:{en:'Data handling',am:'መረጃ አያያዝ'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 8: reading picture graphs and collecting data.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 8 ላይ የተመሰረተ፦ ሥዕላዊ ግራፎችን ማንበብና መረጃ መሰብሰብ።'},
 missions:[
 {title:{en:'Read the picture graph',am:'ሥዕላዊ ግራፉን አንብቡ'},type:'drill',need:6,
  tip:{en:'Each picture stands for one child. Count the pictures in a row.',am:'እያንዳንዱ ሥዕል አንድ ልጅን ይወክላል። በአንድ ረድፍ ያሉትን ሥዕሎች ቁጠሩ።'},
  gen(){const d=FR.map(([n,e])=>[n,e,rnd(1,8)]);const lang=G3.G.lang;const rows=d.map(([n,e,c])=>[G3.tx(n),e,c]);const t=rnd(0,2);
   if(t===0){const k=rnd(0,3);return{fig:pict(rows,G3.tx({en:'Favourite fruit of Grade 2 · 1 picture = 1 child',am:'የ2ኛ ክፍል ተወዳጅ ፍራፍሬ · 1 ሥዕል = 1 ልጅ'})),q:{en:`How many children like ${d[k][0].en}?`,am:`${d[k][0].am} የሚወዱ ስንት ልጆች ናቸው?`},...numOpts(d[k][2],[1,-1,2])}}
   if(t===1){const mx=Math.max(...d.map(x=>x[2]));const win=d.filter(x=>x[2]===mx);if(win.length>1)return this.gen();const o=shuffle(d.map(x=>x[0]));return{fig:pict(rows),q:{en:'Which fruit is the most popular?',am:'በብዛት የተወደደው ፍራፍሬ የትኛው ነው?'},o,a:o.indexOf(win[0][0])}}
   const tot=d.reduce((a,x)=>a+x[2],0);return{fig:pict(rows),q:{en:'How many children answered in all?',am:'በአጠቃላይ ስንት ልጆች መለሱ?'},...numOpts(tot,[1,-1,2,-2])}}},
 {title:{en:'Tally marks',am:'የመቁጠሪያ ምልክቶች'},type:'drill',need:5,
  tip:{en:'Tally marks group by 5: four lines and a line across = 5.',am:'የመቁጠሪያ ምልክቶች በ5 ይቧደናሉ፦ አራት መስመሮችና አንድ አቋራጭ = 5።'},
  gen(){const n=rnd(3,18);return{fig:TAL(n),q:{en:'How many tally marks?',am:'ስንት ምልክቶች ናቸው?'},...numOpts(n,[1,-1,5,-5])}}},
 {title:{en:'Collect data',am:'መረጃ መሰብሰብ'},type:'order',vertical:true,
  tip:{en:'To answer a question with data: ask, count, record, show, explain.',am:'በመረጃ ጥያቄ ለመመለስ፦ ጠይቁ፣ ቁጠሩ፣ መዝግቡ፣ አሳዩ፣ አብራሩ።'},
  help:{en:'Tap the steps in order.',am:'ደረጃዎቹን በቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'Which game does our class like most?',am:'ክፍላችን በብዛት የሚወደው ጨዋታ የትኛው ነው?'},items:[{en:'❓ Ask each friend',am:'❓ እያንዳንዱን ጓደኛ ጠይቁ'},{en:'✏️ Record with tally marks',am:'✏️ በምልክት መዝግቡ'},{en:'📊 Draw a picture graph',am:'📊 ሥዕላዊ ግራፍ ሳሉ'},{en:'🗣️ Tell what the graph shows',am:'🗣️ ግራፉ የሚያሳየውን ተናገሩ'}]}]},
 {type:'exam',items:[{fig:pict([['🐄','🐄',5],['🐐','🐐',3],['🐔','🐔',7]]),q:{en:'How many more hens than goats?',am:'ዶሮዎች ከፍየሎች በስንት ይበልጣሉ?'},o:['4','3','7','10'],a:0},{fig:TAL(12),q:{en:'How many tally marks?',am:'ስንት ምልክቶች?'},o:['12','7','10','22'],a:0},{q:{en:'A picture graph uses…',am:'ሥዕላዊ ግራፍ የሚጠቀመው…'},o:[{en:'pictures to show numbers',am:'ቁጥሮችን ለማሳየት ሥዕሎችን'},{en:'only words',am:'ቃላትን ብቻ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Data are facts we collect. Graphs show data as pictures so we can compare quickly.',am:'መረጃ የምንሰበስባቸው እውነታዎች ናቸው። ግራፎች መረጃን በሥዕል ያሳያሉ፤ በፍጥነት እንድናወዳድር ይረዱናል።'},
  points:[{en:'Ask a question, collect answers.',am:'ጥያቄ ጠይቁ፣ መልሶችን ሰብስቡ።'},{en:'Record with tally marks: 4 lines and a line across = 5.',am:'በምልክት መዝግቡ፦ 4 መስመሮችና አንድ አቋራጭ = 5።'},{en:'A picture graph: each picture stands for 1 (or more).',am:'ሥዕላዊ ግራፍ፦ እያንዳንዱ ሥዕል 1ን (ወይም ከዚያ በላይ) ይወክላል።'},{en:'Read graphs: most, least, how many more.',am:'ግራፍ ማንበብ፦ ብዙ፣ ጥቂት፣ በስንት ይበልጣል።'}],
  words:[['መረጃ',{en:'data',am:'የተሰበሰቡ እውነታዎች'}],['ግራፍ',{en:'graph',am:'መረጃን በሥዕል ማሳያ'}]],
  remember:{en:'Count carefully, record neatly, explain clearly.',am:'በጥንቃቄ ቁጠሩ፣ በንጽህና መዝግቡ፣ በግልጽ አብራሩ።'},
  exam:[[{en:'Show 13 with tally marks',am:'13ን በምልክት አሳዩ'},{en:'2 bundles of 5 and 3 lines',am:'2 የ5 ቡድኖችና 3 መስመሮች'}],[{en:'What does a picture graph show?',am:'ሥዕላዊ ግራፍ ምን ያሳያል?'},{en:'How many of each thing',am:'የእያንዳንዱ ነገር ብዛት'}]],
  innovate:{title:{en:'Class survey report',am:'የክፍል ጥናት ሪፖርት'},text:{en:'Researchers collect data to solve problems. Survey your class: "How do you come to school?" and suggest a safety idea from the results.',am:'ተመራማሪዎች ችግር ለመፍታት መረጃ ይሰበስባሉ። ክፍላችሁን አጥኑ፦ "ወደ ትምህርት ቤት እንዴት ትመጣላችሁ?" ከውጤቱ የደህንነት ሐሳብ አቅርቡ።'},
   steps:[{en:'Ask everyone: walk, bus, horse cart, bajaj?',am:'ሁሉንም ጠይቁ፦ በእግር፣ በአውቶቡስ፣ በጋሪ፣ በባጃጅ?'},{en:'Record with tally marks.',am:'በምልክት መዝግቡ።'},{en:'Draw a picture graph.',am:'ሥዕላዊ ግራፍ ሳሉ።'},{en:'Suggest one road-safety idea for the largest group.',am:'ለብዙው ቡድን አንድ የመንገድ ደህንነት ሐሳብ አቅርቡ።'}]}}}
 ]});
})();
