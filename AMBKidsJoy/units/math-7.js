/* ሒሳብ · ምዕራፍ 7 · ፓተርኖች */
(function(){
const {rnd,shuffle,numOpts,tx}=G3;
const SH={T:'<path d="M20 4L36 34H4z" fill="var(--green)"/>',C:'<circle cx="20" cy="20" r="15" fill="var(--blue)"/>',S:'<rect x="6" y="6" width="28" height="28" fill="var(--clay)"/>',D:'<path d="M20 3L37 20 20 37 3 20z" fill="var(--sun)"/>'};
const NAME={T:{en:'Triangle',am:'ሦስት ማዕዘን'},C:{en:'Circle',am:'ክብ'},S:{en:'Square',am:'ካሬ'},D:{en:'Diamond',am:'አልማዝ ቅርጽ'}};
const icon=k=>`<svg viewBox="0 0 40 40" style="width:34px;height:34px" aria-label="${NAME[k].en}">${SH[k]}</svg>`;
const row=(seq,extra)=>`<div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center">${seq.map(icon).join('')}${extra||''}</div>`;
const UNITS=['TC','TCS','CSS','TCSS','DCD','SDT','CCT'];
Unit.start({
 id:'math-7',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 7',am:'ምዕራፍ 7'},
 title:{en:'Patterns',am:'ፓተርኖች'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 7: growing and repeating patterns.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 7 ላይ የተመሰረተ፦ አዳጊና ደጋሚ ፓተርኖች።'},
 missions:[
 {title:{en:'Growing patterns',am:'አዳጊ ፓተርኖች'},type:'drill',need:6,
  tip:{en:'A growing pattern changes by the same rule each time. Find the rule: what is added (or taken away) each step? Then continue.',am:'አዳጊ ፓተርን በእያንዳንዱ ደረጃ በአንድ ዓይነት ደንብ ይለወጣል። ደንቡን ፈልጉ፦ በእያንዳንዱ ደረጃ ምን ይጨመራል (ወይም ይቀነሳል)? ከዚያ ቀጥሉ።'},
  gen(){const step=[2,3,4,5,10,25,100][rnd(0,6)]*(Math.random()<.2?-1:1);let s=rnd(1,50)*(step<0?10:1);if(step<0)s+=Math.abs(step)*6;const seq=[0,1,2,3,4].map(i=>s+i*step);const ans=s+5*step;
   return{q:`${seq.join(', ')}, ?`,...numOpts(ans,[step,-step,1,-1]),e:{en:`Rule: ${step>0?'add '+step:'subtract '+(-step)} each time.`,am:`ደንብ፦ በየደረጃው ${step>0?step+' መጨመር':(-step)+' መቀነስ'}።`}}}},
 {title:{en:'Pattern unit',am:'የፓተርን አሃድ'},type:'drill',need:5,
  tip:{en:'In a repeating pattern, the smallest part that repeats is the pattern unit. Find it first!',am:'በደጋሚ ፓተርን ውስጥ የሚደጋገመው ትንሹ ክፍል የፓተርን አሃድ ይባላል። መጀመሪያ እሱን ፈልጉ!'},
  gen(){const u=UNITS[rnd(0,UNITS.length-1)];const seq=(u.repeat(4)).slice(0,u.length*3).split('');const wrong=shuffle(UNITS.filter(x=>x!==u&&x.length<=4)).slice(0,2);const o=shuffle([u,...wrong]);
   return{fig:row(seq,'<span class="big" style="font-size:1.4rem">…</span>'),q:{en:'Which is the pattern unit?',am:'የፓተርኑ አሃድ የትኛው ነው?'},o:o.map(x=>({svg:x.split('').map(icon).join('')})),a:o.indexOf(u)}}},
 {title:{en:'Predict far ahead',am:'ሩቅ አባልን መተንበይ'},type:'drill',need:5,
  tip:{en:'You don\'t need to draw 18 shapes! If the unit has 4 shapes, every 4th shape starts again. 18 = 4 + 4 + 4 + 4 + 2, so the 18th is the 2nd shape of the unit.',am:'18 ቅርጾችን መሳል አያስፈልግም! አሃዱ 4 ቅርጾች ካሉት በየ4ኛው እንደገና ይጀምራል። 18 = 4 + 4 + 4 + 4 + 2፤ ስለዚህ 18ኛው የአሃዱ 2ኛ ቅርጽ ነው።'},
  gen(){const u=UNITS[rnd(0,UNITS.length-1)];const n=rnd(9,40);const ans=u[(n-1)%u.length];const oo=shuffle(Object.keys(NAME));
   return{fig:row(u.repeat(2).split(''),'<span class="big" style="font-size:1.4rem">…</span>'),q:{en:`What is the ${n}th shape?`,am:`${n}ኛው ቅርጽ ምንድን ነው?`},o:oo.map(k=>({svg:icon(k),label:NAME[k]})),a:oo.indexOf(ans),e:{en:`The unit has ${u.length} shapes. ${n} = ${Math.floor((n-1)/u.length)} × ${u.length} + ${(n-1)%u.length+1}, so it is shape number ${(n-1)%u.length+1} of the unit.`,am:`አሃዱ ${u.length} ቅርጾች አሉት። ${n} = ${Math.floor((n-1)/u.length)} × ${u.length} + ${(n-1)%u.length+1}፤ ስለዚህ የአሃዱ ${(n-1)%u.length+1}ኛ ቅርጽ ነው።`}}}},
 {title:{en:'Repeating or growing?',am:'ደጋሚ ወይስ አዳጊ?'},type:'sort',
  tip:{en:'A repeating pattern goes round and round (A B A B). A growing pattern gets bigger or smaller each step (2, 4, 6, 8).',am:'ደጋሚ ፓተርን ይዞራል (ሀ ለ ሀ ለ)። አዳጊ ፓተርን በእያንዳንዱ ደረጃ ያድጋል ወይም ያንሳል (2፣ 4፣ 6፣ 8)።'},
  buckets:[{en:'Repeating',am:'ደጋሚ'},{en:'Growing',am:'አዳጊ'}],
  items:[{t:'9, 5, 8, 6, 9, 5, 8, 6…',b:0},{t:'5, 10, 15, 20…',b:1},{t:{en:'big pot, small pot, big pot, small pot…',am:'ትልቅ ማሰሮ፣ ትንሽ ማሰሮ፣ ትልቅ ማሰሮ…'},b:0},{t:'100, 90, 80, 70…',b:1},{t:{en:'clap, stamp, clap, stamp…',am:'ማጨብጨብ፣ መርገጥ፣ ማጨብጨብ፣ መርገጥ…'},b:0},{t:'1, 3, 6, 10, 15…',b:1},{t:{en:'Monday, Tuesday … Sunday, Monday…',am:'ሰኞ፣ ማክሰኞ … እሁድ፣ ሰኞ…'},b:0}]},
 {title:{en:'Pattern puzzles',am:'የፓተርን እንቆቅልሾች'},type:'quiz',
  tip:{en:'Patterns are everywhere: in calendars, music, savings and crops. Use the rule to answer.',am:'ፓተርኖች በሁሉም ቦታ አሉ፦ በቀን መቁጠሪያ፣ በሙዚቃ፣ በቁጠባና በሰብል። ደንቡን ተጠቅማችሁ መልሱ።'},
  items:[
   {q:{en:'Degsew lines up 18 pots: big, small, big, small… Is the last pot big or small?',am:'ደግሰው 18 ማሰሮዎችን ትልቅ፣ ትንሽ፣ ትልቅ፣ ትንሽ… ብሎ ደረደረ። የመጨረሻው ማሰሮ ትልቅ ነው ወይስ ትንሽ?'},o:[{en:'Big',am:'ትልቅ'},{en:'Small',am:'ትንሽ'}],a:1,e:{en:'Even positions are small. 18 is even.',am:'ጥንድ ተራ ቁጥሮች ትንሽ ናቸው። 18 ጥንድ ነው።'}},
   {q:{en:'Hana saves 15 birr every week. After 6 weeks she has?',am:'ሐና በየሳምንቱ 15 ብር ትቆጥባለች። ከ6 ሳምንት በኋላ ስንት ይኖራታል?'},o:['90','75','21','100'],a:0,e:'15, 30, 45, 60, 75, 90'},
   {q:{en:'If today is Monday, what day is it in 15 days?',am:'ዛሬ ሰኞ ከሆነ ከ15 ቀን በኋላ ምን ዕለት ይሆናል?'},o:[{en:'Monday',am:'ሰኞ'},{en:'Tuesday',am:'ማክሰኞ'},{en:'Sunday',am:'እሁድ'}],a:1,e:{en:'The week repeats every 7 days. 15 = 7 + 7 + 1.',am:'ሳምንት በየ7 ቀኑ ይደጋገማል። 15 = 7 + 7 + 1።'}},
   {q:{en:'A seedling grows 3 cm each week. It is 5 cm now. How tall after 4 weeks?',am:'አንድ ችግኝ በሳምንት 3 ሴ.ሜ ያድጋል። አሁን 5 ሴ.ሜ ነው። ከ4 ሳምንት በኋላ ቁመቱ?'},o:['17','12','20','9'],a:0,e:'5 + 3 + 3 + 3 + 3 = 17'}
  ]},
 {type:'exam',items:[
   {q:'4, 8, 12, 16, ?',o:['18','20','24','32'],a:1},{q:'500, 450, 400, ?',o:['350','300','450','390'],a:0},
   {q:{en:'Pattern unit of A, B, B, A, B, B, A…?',am:'የሀ፣ ለ፣ ለ፣ ሀ፣ ለ፣ ለ… አሃድ?'},o:['A B','A B B','B B A'],a:1},
   {q:{en:'In A, B, C, A, B, C… what is the 10th letter?',am:'በA፣ B፣ C፣ A፣ B፣ C… 10ኛው ፊደል?'},o:['A','B','C'],a:0,e:'10 = 3 + 3 + 3 + 1'}]},
 {type:'notes',notes:{
  big:{en:'A pattern follows a rule. Find the rule and you can predict what comes next, even far away.',am:'ፓተርን ደንብ ይከተላል። ደንቡን ካገኛችሁ ቀጣዩን፣ ሩቅ ያለውንም ቢሆን መተንበይ ትችላላችሁ።'},
  points:[{en:'Growing pattern: add or subtract the same amount each step.',am:'አዳጊ ፓተርን፦ በየደረጃው አንድ ዓይነት መጠን መጨመር ወይም መቀነስ።'},{en:'Repeating pattern: a pattern unit repeats again and again.',am:'ደጋሚ ፓተርን፦ የፓተርን አሃድ ደጋግሞ ይመጣል።'},{en:'To find the nth member, count how many full units fit, then look at what is left over.',am:'n-ኛውን አባል ለማግኘት ስንት ሙሉ አሃዶች እንደሚገቡ ቁጠሩ፤ ከዚያ የቀረውን እዩ።'}],
  words:[['ፓተርን',{en:'pattern',am:'ደንብ የሚከተል ድርድር'}],['የፓተርን አሃድ',{en:'pattern unit',am:'የሚደጋገመው ትንሹ ክፍል'}]],
  remember:{en:'Rule first, answer second.',am:'መጀመሪያ ደንቡ፣ ቀጥሎ መልሱ።'},
  exam:[['3, 6, 9, 12, ?','15'],[{en:'Unit of ▲●▲●▲●?',am:'የ▲●▲●▲● አሃድ?'},'▲●'],[{en:'In red, blue, red, blue…, the 9th is?',am:'በቀይ፣ ሰማያዊ፣ ቀይ፣ ሰማያዊ… 9ኛው?'},{en:'Red',am:'ቀይ'}]],
  innovate:{title:{en:'Savings pattern plan',am:'የቁጠባ ፓተርን እቅድ'},text:{en:'Successful entrepreneurs save regularly. Design a savings plan for something you want.',am:'ስኬታማ ሥራ ፈጣሪዎች በመደበኛነት ይቆጥባሉ። ለምትፈልጉት ነገር የቁጠባ እቅድ አውጡ።'},
   steps:[{en:'Choose a goal and its price (e.g. a ball for 300 birr).',am:'ግብና ዋጋውን ምረጡ (ለምሳሌ 300 ብር ኳስ)።'},{en:'Choose a weekly saving amount.',am:'በሳምንት የምትቆጥቡትን መጠን ምረጡ።'},{en:'Write the pattern: week 1, week 2… When do you reach the goal?',am:'ፓተርኑን ጻፉ፦ ሳምንት 1፣ ሳምንት 2… ግቡ ላይ መቼ ትደርሳላችሁ?'},{en:'What if you save 5 birr more each week? How much sooner?',am:'በሳምንት 5 ብር ብትጨምሩ? ምን ያህል ቀድማችሁ?'}]}}}
 ]});
})();
