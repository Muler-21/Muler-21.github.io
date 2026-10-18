/* ሒሳብ · ምዕራፍ 3 · እስከ 1,000 ያሉ ቁጥሮችን ማባዛት */
(function(){
const {rnd,numOpts}=G3;const f=n=>n.toLocaleString('en-US');
const dots=(r,c)=>`<svg viewBox="0 0 ${c*22+8} ${r*22+8}" role="img" aria-label="${r} rows of ${c}" style="width:${Math.min(300,c*30)}px;height:auto">${Array.from({length:r},(_,i)=>Array.from({length:c},(_,j)=>`<circle cx="${15+j*22}" cy="${15+i*22}" r="8" fill="var(--${['blue','green','sun','clay','plum'][i%5]})"/>`).join('')).join('')}</svg>`;
Unit.start({
 id:'math-3',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Multiplication',am:'ማባዛት'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 3: multiplying numbers with answers up to 1,000.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 3 ላይ የተመሰረተ፦ ውጤታቸው እስከ 1,000 የሚደርስ ማባዛት።'},
 missions:[
 {title:{en:'Equal groups',am:'እኩል ቡድኖች'},type:'drill',need:5,
  tip:{en:'Multiplication is a fast way to add equal groups. 3 rows of 4 dots = 4 + 4 + 4 = 3 × 4 = 12.',am:'ማባዛት እኩል ቡድኖችን በፍጥነት የመደመር መንገድ ነው። 3 ረድፍ በ4 ነጥብ = 4 + 4 + 4 = 3 × 4 = 12።'},
  gen(){const r=rnd(2,6),c=rnd(2,9);const ans=r*c;return{fig:dots(r,c),q:{en:`${r} rows of ${c}. How many dots? (${r} × ${c})`,am:`${r} ረድፍ በ${c}። ስንት ነጥቦች ናቸው? (${r} × ${c})`},...numOpts(ans,[r,-r,c,-c,1]),e:`${Array(r).fill(c).join(' + ')} = ${ans}`}}},
 {title:{en:'Times 2, 5 and 10',am:'በ2፣ በ5 እና በ10'},type:'drill',need:6,
  tip:{en:'Patterns help! ×10: add a 0. ×5: half of ×10. ×2: double the number.',am:'ፓተርኖች ይረዳሉ! ×10፦ 0 ጨምሩ። ×5፦ የ×10 ግማሽ። ×2፦ ቁጥሩን እጥፍ አድርጉ።'},
  gen(){const m=[2,5,10][rnd(0,2)],n=rnd(3,99);const ans=m*n;return{q:`${n} × ${m} = ?`,...numOpts(ans,[m,-m,10,-10,1]),e:m===10?{en:`Add a zero: ${n} → ${ans}`,am:`ዜሮ ጨምሩ፦ ${n} → ${ans}`}:m===5?{en:`${n} × 10 = ${n*10}, half is ${ans}`,am:`${n} × 10 = ${n*10}፣ ግማሹ ${ans}`}:{en:`Double ${n}: ${n} + ${n} = ${ans}`,am:`${n}ን እጥፍ፦ ${n} + ${n} = ${ans}`}}}},
 {title:{en:'Tens and hundreds',am:'አስሮችና መቶዎች'},type:'drill',need:5,
  tip:{en:'30 × 4 is 3 tens × 4 = 12 tens = 120. 200 × 3 is 2 hundreds × 3 = 6 hundreds = 600. Multiply the digit, then keep the zeros.',am:'30 × 4 ማለት 3 አስሮች × 4 = 12 አስሮች = 120 ነው። 200 × 3 ማለት 2 መቶዎች × 3 = 6 መቶዎች = 600። ሆሄውን አባዙ፤ ዜሮዎቹን አስቀምጡ።'},
  gen(){const big=Math.random()<.5;const d=rnd(1,9),m=rnd(2,9);const a=big?d*100:d*10;const ans=a*m;if(ans>1000)return this.gen();return{q:`${f(a)} × ${m} = ?`,...numOpts(ans,[big?100:10,big?-100:-10,ans*9,-a]),e:`${d} × ${m} = ${d*m} → ${f(ans)}`}}},
 {title:{en:'Bigger numbers',am:'ትልልቅ ቁጥሮች'},type:'drill',need:5,
  tip:{en:'Split the big number by place value, multiply each part, then add: 124 × 3 = 100×3 + 20×3 + 4×3 = 300 + 60 + 12 = 372.',am:'ትልቁን ቁጥር በቁጥር ቤት ከፋፍሉ፣ እያንዳንዱን አባዙ፣ ከዚያ ደምሩ፦ 124 × 3 = 100×3 + 20×3 + 4×3 = 300 + 60 + 12 = 372።'},
  gen(){const m=rnd(3,9);const n=rnd(11,Math.floor(1000/m));const ans=n*m;const h=Math.floor(n/100)*100,t=Math.floor(n%100/10)*10,o=n%10;
   return{q:`${n} × ${m} = ?`,...numOpts(ans,[10,-10,m,-m,100]),e:[h,t,o].filter(Boolean).map(x=>`${x}×${m}`).join(' + ')+' = '+[h,t,o].filter(Boolean).map(x=>x*m).join(' + ')+` = ${f(ans)}`}}},
 {title:{en:'Word problems',am:'የቃላት ፕሮብሌሞች'},type:'quiz',
  tip:{en:'Look for "each", "every" or "groups of". These words often mean multiply.',am:'“እያንዳንዱ”፣ “በየ” ወይም “ቡድኖች” የሚሉ ቃላትን ፈልጉ። ብዙ ጊዜ ማባዛትን ያመለክታሉ።'},
  items:[
   {q:{en:'A truck carries 198 quintals of teff. How much do 4 trucks carry?',am:'አንድ መኪና 198 ኩንታል ጤፍ ይጭናል። 4 መኪናዎች ስንት ይጭናሉ?'},o:['792','692','802','198'],a:0,e:'198 × 4 = 200×4 − 2×4 = 800 − 8 = 792'},
   {q:{en:'Farmers grow 98 quintals of maize on one hectare. How much on 8 hectares?',am:'ገበሬዎች በአንድ ሄክታር 98 ኩንታል በቆሎ ያመርታሉ። በ8 ሄክታር ስንት?'},o:['784','794','684','106'],a:0,e:'98 × 8 = 100×8 − 2×8 = 800 − 16 = 784'},
   {q:{en:'One egg tray holds 30 eggs. How many eggs in 7 trays?',am:'አንድ የእንቁላል ትሪ 30 እንቁላል ይይዛል። በ7 ትሪ ስንት እንቁላል?'},o:['210','37','200','240'],a:0,e:'3 tens × 7 = 21 tens = 210'},
   {q:{en:'A notebook costs 25 birr. How much do 6 notebooks cost?',am:'አንድ ደብተር 25 ብር ነው። 6 ደብተሮች ስንት ብር ናቸው?'},o:['150','125','31','160'],a:0,e:'25 × 6 = 20×6 + 5×6 = 120 + 30 = 150'},
   {q:{en:'Which is the same as 6 × 4?',am:'ከ6 × 4 ጋር እኩል የሆነው የትኛው ነው?'},o:['4 × 6','6 + 4','64','6 − 4'],a:0,e:{en:'Order does not matter in multiplication: 6 × 4 = 4 × 6 = 24.',am:'በማባዛት ቅደም ተከተል አይለውጥም፦ 6 × 4 = 4 × 6 = 24።'}}
  ]},
 {type:'exam',items:[
   {q:'7 × 8 = ?',o:['54','56','63','48'],a:1},
   {q:'40 × 6 = ?',o:['240','24','2,400','46'],a:0,e:'4 × 6 = 24 → 240'},
   {q:'300 × 3 = ?',o:['600','900','90','303'],a:1},
   {q:'215 × 4 = ?',o:['860','820','840','8,060'],a:0,e:'800 + 40 + 20 = 860'},
   {q:{en:'Any number × 1 = ?',am:'ማንኛውም ቁጥር × 1 = ?'},o:[{en:'0',am:'0'},{en:'The same number',am:'ያው ቁጥር'},{en:'1',am:'1'}],a:1},
   {q:{en:'Any number × 0 = ?',am:'ማንኛውም ቁጥር × 0 = ?'},o:['0',{en:'The same number',am:'ያው ቁጥር'},'1'],a:0},
   {q:{en:'A class has 8 rows of 9 desks. How many desks?',am:'አንድ ክፍል 8 ረድፍ በ9 ጠረጴዛ አለው። ስንት ጠረጴዛዎች?'},o:['72','17','64','81'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Multiplication is quick adding of equal groups. Split big numbers by place value, multiply each part, then add.',am:'ማባዛት እኩል ቡድኖችን በፍጥነት መደመር ነው። ትልልቅ ቁጥሮችን በቁጥር ቤት ከፋፍሉ፣ እያንዳንዱን አባዙ፣ ከዚያ ደምሩ።'},
  points:[{en:'4 + 4 + 4 = 3 × 4 = 12.',am:'4 + 4 + 4 = 3 × 4 = 12።'},{en:'Order does not matter: 6 × 4 = 4 × 6.',am:'ቅደም ተከተል አይለውጥም፦ 6 × 4 = 4 × 6።'},{en:'× 10 adds a zero; × 100 adds two zeros.',am:'× 10 አንድ ዜሮ፣ × 100 ሁለት ዜሮ ይጨምራል።'},{en:'× 1 keeps the number; × 0 gives 0.',am:'× 1 ቁጥሩን አይለውጥም፤ × 0 ዜሮ ይሰጣል።'},{en:'124 × 3 = 300 + 60 + 12 = 372.',am:'124 × 3 = 300 + 60 + 12 = 372።'}],
  words:[['ማባዛት',{en:'multiplication',am:'እኩል ቡድኖችን መደመር'}],['ብዜት',{en:'multiple',am:'የአንድ ቁጥር የማባዛት ውጤት (10፣ 20፣ 30…)'}],['ውጤት',{en:'product',am:'የማባዛት መልስ'}]],
  remember:{en:'Learn the tables up to 10 × 10. They are the tools for everything else.',am:'የማባዛት ሰንጠረዥን እስከ 10 × 10 አጥኑ። ለሌሎቹ ሁሉ መሣሪያ ናቸው።'},
  exam:[['9 × 6 = ?','54'],['70 × 8 = ?','560'],['132 × 3 = ?','396'],[{en:'5 bags of 125 birr each. Total?',am:'5 ቦርሳ፣ እያንዳንዱ 125 ብር። ድምሩ?'},{en:'625 birr',am:'625 ብር'}]],
  innovate:{title:{en:'Egg-tray business plan',am:'የእንቁላል ንግድ እቅድ'},text:{en:'A family sells eggs at the market. Help them plan with multiplication.',am:'አንድ ቤተሰብ በገበያ እንቁላል ይሸጣል። በማባዛት እቅድ እንዲያወጡ እርዷቸው።'},
   steps:[{en:'If hens lay 6 eggs a day, how many in 7 days?',am:'ዶሮዎቹ በቀን 6 እንቁላል ቢጥሉ በ7 ቀን ስንት?'},{en:'If one egg sells for 12 birr, what do 42 eggs earn?',am:'አንድ እንቁላል 12 ብር ቢሸጥ 42 እንቁላሎች ስንት ያስገኛሉ?'},{en:'Feed costs 150 birr a week. What is the profit?',am:'መኖ በሳምንት 150 ብር ቢያስወጣ ትርፉ ስንት ነው?'},{en:'Suggest one idea to earn more (more hens? better price?).',am:'ተጨማሪ ለማግኘት አንድ ሐሳብ አቅርቡ (ተጨማሪ ዶሮ? የተሻለ ዋጋ?)።'}]}}}
 ]});
})();
