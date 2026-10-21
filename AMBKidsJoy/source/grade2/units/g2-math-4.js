/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 4 · እስከ 100 ያሉ ቁጥሮችን ማባዛት */
(function(){
const {rnd,numOpts,objs}=G3;const {array}=K1;const SM={en:'Mathematics',am:'ሒሳብ'};
const groups=(g,n,e)=>`<div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center">${Array.from({length:g},()=>`<div class="cnt" style="--per:${Math.min(n,5)};border:2px dashed var(--accent)">${Array.from({length:n},()=>`<span class="emo" style="font-size:1.6rem">${e}</span>`).join('')}</div>`).join('')}</div>`;
Unit.start({id:'g2-math-4',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Multiplying up to 100',am:'እስከ 100 ያሉ ቁጥሮችን ማባዛት'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 4: repeated addition, arrays and multiplication.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 4 ላይ የተመሰረተ፦ ደጋግሞ መደመር፣ ድርድሮችና ማባዛት።'},
 missions:[
 {title:{en:'Equal groups',am:'እኩል ቡድኖች'},type:'drill',need:6,
  tip:{en:'3 groups of 4 is 4 + 4 + 4 = 12. Adding the same number again and again is multiplying!',am:'የ4 3 ቡድኖች 4 + 4 + 4 = 12 ነው። አንድን ቁጥር ደጋግሞ መደመር ማባዛት ነው!'},
  gen(){const g=rnd(2,4),n=rnd(2,5);const e=['🥚','🍊','✏️','🌼'][rnd(0,3)];return{fig:groups(g,n,e),q:{en:`${g} groups of ${n}. How many in all?`,am:`የ${n} ${g} ቡድኖች። በአጠቃላይ ስንት ናቸው?`},...numOpts(g*n,[1,-1,n,-n]),e:`${Array(g).fill(n).join(' + ')} = ${g} × ${n} = ${g*n}`}}},
 {title:{en:'Repeated addition = multiplication',am:'ደጋግሞ መደመር = ማባዛት'},type:'drill',need:6,
  tip:{en:'5 + 5 + 5 is the same as 3 × 5.',am:'5 + 5 + 5 ከ3 × 5 ጋር አንድ ነው።'},
  gen(){const g=rnd(2,5),n=rnd(2,10);const ok=`${g} × ${n}`;const o=G3.shuffle([ok,`${n} + ${g}`,`${g} + ${n}`]);return{q:`${Array(g).fill(n).join(' + ')} = ?`,o,a:o.indexOf(ok)}}},
 {title:{en:'Arrays',am:'ድርድሮች'},type:'drill',need:6,
  tip:{en:'An array has equal rows. Rows × things in each row = total.',am:'ድርድር እኩል ረድፎች አሉት። ረድፎች × በእያንዳንዱ ረድፍ ያሉ = ድምር።'},
  gen(){const r=rnd(2,5),c=rnd(2,6);return{fig:array(r,c,'🟡'),q:{en:`${r} rows of ${c}. ${r} × ${c} = ?`,am:`የ${c} ${r} ረድፎች። ${r} × ${c} = ?`},...numOpts(r*c,[1,-1,c,r])}}},
 {title:{en:'Times tables 2, 5, 10',am:'የ2፣ የ5 እና የ10 ማባዣ'},type:'drill',need:8,
  tip:{en:'Skip count! ×2: 2, 4, 6… ×5: 5, 10, 15… ×10: 10, 20, 30…',am:'እያለፋችሁ ቁጠሩ! ×2፦ 2፣ 4፣ 6… ×5፦ 5፣ 10፣ 15… ×10፦ 10፣ 20፣ 30…'},
  gen(){const a=[2,5,10][rnd(0,2)],b=rnd(1,10);return{q:`${b} × ${a} = ?`,...numOpts(a*b,[a,-a,1,10])}}},
 {title:{en:'Story problems',am:'የቃላት ፕሮብሌሞች'},type:'quiz',
  tip:{en:'Look for equal groups in the story.',am:'በታሪኩ ውስጥ እኩል ቡድኖችን ፈልጉ።'},
  items:[{q:{en:'A hen lays 2 eggs a day. How many eggs in 5 days?',am:'አንዲት ዶሮ በቀን 2 እንቁላል ትጥላለች። በ5 ቀን ስንት እንቁላል?'},o:['10','7','25','52'],a:0,e:'5 × 2 = 10'},
   {q:{en:'There are 4 tables. 3 children sit at each. How many children?',am:'4 ጠረጴዛዎች አሉ። በእያንዳንዱ 3 ልጆች ይቀመጣሉ። ስንት ልጆች ናቸው?'},o:['12','7','43','16'],a:0},
   {q:{en:'A goat has 4 legs. How many legs do 6 goats have?',am:'ፍየል 4 እግሮች አሏት። 6 ፍየሎች ስንት እግሮች አሏቸው?'},o:['24','10','20','28'],a:0}]},
 {type:'exam',items:[{q:'4 + 4 + 4 = ?',o:['3 × 4','4 + 3','3 + 4'],a:0},{q:'6 × 2 = ?',o:['12','8','62','3'],a:0},{q:'7 × 5 = ?',o:['35','12','30','40'],a:0},{q:'9 × 10 = ?',o:['90','19','80','100'],a:0},{fig:array(3,4,'🟡'),q:{en:'How many dots?',am:'ስንት ነጥቦች?'},o:['12','7','10','14'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Multiplying is a fast way to add equal groups.',am:'ማባዛት እኩል ቡድኖችን የመደመሪያ ፈጣን መንገድ ነው።'},
  points:[{en:'Equal groups: 3 groups of 4 = 12.',am:'እኩል ቡድኖች፦ የ4 3 ቡድኖች = 12።'},{en:'Repeated addition: 4 + 4 + 4 = 3 × 4.',am:'ደጋግሞ መደመር፦ 4 + 4 + 4 = 3 × 4።'},{en:'Arrays: rows × columns.',am:'ድርድር፦ ረድፎች × ዓምዶች።'},{en:'Learn ×2, ×5 and ×10 by skip counting.',am:'×2፣ ×5 እና ×10ን እያለፋችሁ በመቁጠር ተማሩ።'}],
  words:[['ማባዛት (×)',{en:'multiply',am:'እኩል ቡድኖችን መደመር'}],['ድርድር',{en:'array',am:'በእኩል ረድፎች የተደረደረ'}],['ውጤት',{en:'product',am:'የማባዛት ውጤት'}]],
  remember:{en:'3 × 4 = 4 × 3: turn the array, the total is the same!',am:'3 × 4 = 4 × 3፦ ድርድሩን አዙሩ፤ ድምሩ አይለወጥም!'},
  exam:[['8 × 5 = ?','40'],['3 × 10 = ?','30'],[{en:'Write 6 + 6 + 6 as multiplication',am:'6 + 6 + 6ን በማባዛት ጻፉ'},'3 × 6 = 18']],
  innovate:{title:{en:'Egg-tray times table',am:'የእንቁላል ትሪ ማባዣ'},text:{en:'Egg sellers pack eggs in rows. Use an egg tray (5 × 6) to explore multiplication and plan how many trays a farm needs.',am:'እንቁላል ሻጮች እንቁላልን በረድፍ ያሽጋሉ። በእንቁላል ትሪ (5 × 6) ማባዛትን መርምሩ፤ አንድ እርሻ ስንት ትሪ እንደሚያስፈልገው አቅዱ።'},
   steps:[{en:'Count rows and columns in an egg tray.',am:'በእንቁላል ትሪ ውስጥ ረድፎችንና ዓምዶችን ቁጠሩ።'},{en:'Write: rows × columns = total.',am:'ጻፉ፦ ረድፎች × ዓምዶች = ድምር።'},{en:'A farm gets 60 eggs. How many trays of 30?',am:'አንድ እርሻ 60 እንቁላል ያገኛል። ስንት የ30 ትሪ?'},{en:'Explain your plan to a farmer or a shopkeeper.',am:'ዕቅዳችሁን ለገበሬ ወይም ለሱቅ ነጋዴ አስረዱ።'}]}}}
 ]});
})();
