/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 5 · ፓተርን */
(function(){
const {rnd,numOpts,shuffle}=G3;const SM={en:'Mathematics',am:'ሒሳብ'};
const SHAPES=[['🔺','🟦'],['🟡','🟡','🔷'],['⭐','🌙','🌙'],['🍎','🍌','🍊']];
Unit.start({id:'g2-math-5',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Patterns',am:'ፓተርን'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 5: shape patterns and number patterns up to 100.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 5 ላይ የተመሰረተ፦ የምስሎች ፓተርንና እስከ 100 የቁጥር ፓተርን።'},
 missions:[
 {title:{en:'What comes next? (shapes)',am:'ቀጥሎ ምን ይመጣል? (ምስሎች)'},type:'drill',need:6,
  tip:{en:'A pattern repeats. Find the part that repeats (the core), then continue it.',am:'ፓተርን ይደጋገማል። የሚደጋገመውን ክፍል ፈልጉ፤ ከዚያ ቀጥሉ።'},
  gen(){const core=SHAPES[rnd(0,SHAPES.length-1)];const L=core.length*2+rnd(0,core.length-1);const seq=Array.from({length:L},(_,i)=>core[i%core.length]);const ans=core[L%core.length];const o=shuffle([...new Set(core)]);
   return{fig:`<div class="bigq" style="font-size:2.2rem">${seq.join(' ')} ❓</div>`,q:{en:'What comes next?',am:'ቀጥሎ ምን ይመጣል?'},o,a:o.indexOf(ans)}}},
 {title:{en:'Find the core',am:'የሚደጋገመውን ፈልጉ'},type:'quiz',
  tip:{en:'The core is the smallest part that repeats.',am:'የሚደጋገመው ክፍል ከሁሉ ትንሹ የሚደጋገም ክፍል ነው።'},
  items:[{q:'👏 🦶 👏 🦶 👏 🦶',o:['👏 🦶','👏 👏','🦶 🦶'],a:0},{q:'🔴 🔴 🔵 🔴 🔴 🔵',o:['🔴 🔴 🔵','🔴 🔵','🔵 🔵'],a:0},{q:'A B C A B C A B C',o:['A B C','A B','B C'],a:0}]},
 {title:{en:'Number patterns',am:'የቁጥር ፓተርን'},type:'drill',need:8,
  tip:{en:'Find the rule: how much does it go up or down each time?',am:'ሕጉን ፈልጉ፦ በእያንዳንዱ ጊዜ በስንት ይጨምራል ወይም ይቀንሳል?'},
  gen(){const s=[2,3,5,10][rnd(0,3)]*(Math.random()<.25?-1:1);const a=s>0?rnd(1,40):rnd(60,100);return{q:`${a}, ${a+s}, ${a+2*s}, ${a+3*s}, ?`,...numOpts(a+4*s,[1,-1,s,-s]),e:{en:`Rule: ${s>0?'add':'subtract'} ${Math.abs(s)}`,am:`ሕግ፦ ${Math.abs(s)} ${s>0?'ደምሩ':'ቀንሱ'}`}}}},
 {title:{en:'Missing number',am:'የጎደለው ቁጥር'},type:'drill',need:6,
  tip:{en:'Use the rule to find the missing number in the middle.',am:'መሃል ላይ የጎደለውን ቁጥር ለማግኘት ሕጉን ተጠቀሙ።'},
  gen(){const s=[2,5,10][rnd(0,2)];const a=rnd(1,50);return{q:`${a}, ${a+s}, ?, ${a+3*s}, ${a+4*s}`,...numOpts(a+2*s,[1,-1,s,-s])}}},
 {type:'exam',items:[{q:'🔺 🟦 🔺 🟦 🔺 ?',o:['🟦','🔺'],a:0},{q:'10, 20, 30, 40, ?',o:['50','45','41','60'],a:0},{q:'95, 90, 85, 80, ?',o:['75','70','85','79'],a:0},{q:'4, 6, ?, 10, 12',o:['8','7','9','5'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Patterns repeat or grow by a rule. Finding the rule lets us predict what comes next.',am:'ፓተርኖች ይደጋገማሉ ወይም በሕግ ያድጋሉ። ሕጉን ማግኘት ቀጥሎ የሚመጣውን እንድንገምት ያስችለናል።'},
  points:[{en:'Shape patterns repeat a core: 🔺🟦 🔺🟦.',am:'የምስል ፓተርኖች የሚደጋገም ክፍል አላቸው፦ 🔺🟦 🔺🟦።'},{en:'Number patterns follow a rule: +2, +5, +10, −5.',am:'የቁጥር ፓተርኖች ሕግ ይከተላሉ፦ +2፣ +5፣ +10፣ −5።'},{en:'Use the rule to find missing numbers.',am:'የጎደሉ ቁጥሮችን ለማግኘት ሕጉን ተጠቀሙ።'},{en:'Patterns are everywhere: in mesob weaving, songs and days.',am:'ፓተርኖች በሁሉም ቦታ አሉ፦ በመሶብ ስፌት፣ በዘፈንና በቀናት።'}],
  words:[['ፓተርን',{en:'pattern',am:'የሚደጋገም ቅደም ተከተል'}],['ሕግ',{en:'rule',am:'የሚጨምርበት ወይም የሚቀንስበት መጠን'}]],
  remember:{en:'Find the rule, then continue!',am:'ሕጉን ፈልጉ፣ ከዚያ ቀጥሉ!'},
  exam:[['3, 6, 9, 12, ?','15'],[{en:'Make a pattern with 2 colours',am:'በ2 ቀለማት ፓተርን ሥሩ'},'🔴🔵🔴🔵'],['100, 90, 80, ?','70']],
  innovate:{title:{en:'Pattern bracelet business',am:'የፓተርን አምባር ንግድ'},text:{en:'Designers use patterns. Make bracelets from coloured beads or paper in a repeating pattern and price them.',am:'ዲዛይነሮች ፓተርን ይጠቀማሉ። በሚደጋገም ፓተርን ከቀለማት ዶቃ ወይም ከወረቀት አምባር ሥሩና ዋጋ አውጡላቸው።'},
   steps:[{en:'Choose a core: red, red, blue.',am:'የሚደጋገም ክፍል ምረጡ፦ ቀይ፣ ቀይ፣ ሰማያዊ።'},{en:'Thread beads (or paper rolls) on string.',am:'ዶቃዎችን (ወይም የወረቀት ጥቅልሎችን) በክር ውስጥ አስገቡ።'},{en:'Repeat the core 5 times.',am:'ክፍሉን 5 ጊዜ ድገሙት።'},{en:'Show your pattern rule on a label.',am:'የፓተርናችሁን ሕግ በምልክት ላይ ጻፉ።'}]}}}
 ]});
})();
