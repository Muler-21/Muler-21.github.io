/* ሒሳብ · ምዕራፍ 4 · እስከ 100 ያሉ ቁጥሮችን ማካፈል */
(function(){
const {rnd,numOpts}=G3;
const groups=(g,n)=>`<svg viewBox="0 0 ${g*70+10} 80" role="img" aria-label="${g} groups of ${n}" style="width:${Math.min(320,g*70)}px;height:auto">${Array.from({length:g},(_,i)=>`<rect x="${6+i*70}" y="6" width="62" height="68" rx="12" fill="var(--surface-2)" stroke="var(--line)" stroke-width="2"/>${Array.from({length:n},(_,k)=>`<circle cx="${20+i*70+(k%3)*17}" cy="${20+Math.floor(k/3)*16}" r="6" fill="var(--sun)"/>`).join('')}`).join('')}</svg>`;
Unit.start({
 id:'math-4',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Division',am:'ማካፈል'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 4: dividing numbers up to 100.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 4 ላይ የተመሰረተ፦ እስከ 100 ያሉ ቁጥሮችን ማካፈል።'},
 missions:[
 {title:{en:'Fair sharing',am:'እኩል ክፍፍል'},type:'drill',need:5,
  tip:{en:'Division means sharing fairly. 12 oranges shared by 3 children: each gets 4. We write 12 ÷ 3 = 4.',am:'ማካፈል ማለት በእኩል ማከፋፈል ነው። 12 ብርቱካኖች ለ3 ልጆች ሲከፋፈሉ እያንዳንዱ 4 ያገኛል። 12 ÷ 3 = 4 ብለን እንጽፋለን።'},
  gen(){const g=rnd(2,4),n=rnd(2,9);const tot=g*n;return{fig:groups(g,n),q:{en:`${tot} oranges shared equally by ${g} children. How many each?`,am:`${tot} ብርቱካኖች ለ${g} ልጆች በእኩል ተከፋፈሉ። እያንዳንዱ ስንት ያገኛል?`},...numOpts(n,[1,-1,2,g]),e:`${tot} ÷ ${g} = ${n}`}}},
 {title:{en:'Repeated subtraction',am:'በተደጋጋሚ መቀነስ'},type:'drill',need:4,
  tip:{en:'How many 5s fit in 20? Take away 5 again and again: 20 → 15 → 10 → 5 → 0. Four times, so 20 ÷ 5 = 4.',am:'በ20 ውስጥ ስንት 5ቶች አሉ? 5ን ደጋግማችሁ ቀንሱ፦ 20 → 15 → 10 → 5 → 0። አራት ጊዜ፤ ስለዚህ 20 ÷ 5 = 4።'},
  gen(){const d=rnd(2,9),q=rnd(2,6);const tot=d*q;const steps=[];for(let v=tot;v>=0;v-=d)steps.push(v);return{q:{en:`How many times can you take ${d} from ${tot}?`,am:`ከ${tot} ላይ ${d}ን ስንት ጊዜ መቀነስ ትችላላችሁ?`},...numOpts(q,[1,-1,2]),e:steps.join(' → ')+` : ${q}`}}},
 {title:{en:'Division facts',am:'የማካፈል እውነታዎች'},type:'drill',need:8,
  tip:{en:'Use multiplication backwards! 56 ÷ 7 = ? Ask: 7 × ? = 56. The answer is 8.',am:'ማባዛትን ገልብጣችሁ ተጠቀሙ! 56 ÷ 7 = ? ጠይቁ፦ 7 × ? = 56። መልሱ 8 ነው።'},
  gen(){const d=[1,2,3,4,5,6,7,8,9,10][rnd(0,9)],q=rnd(1,10);const tot=d*q;return{q:`${tot} ÷ ${d} = ?`,...numOpts(q,[1,-1,2,-2,d]),e:`${d} × ${q} = ${tot}`}}},
 {title:{en:'Fact families',am:'የቁጥር ቤተሰቦች'},type:'sort',
  tip:{en:'3, 4 and 12 are a family: 3 × 4 = 12, 4 × 3 = 12, 12 ÷ 3 = 4, 12 ÷ 4 = 3. Which facts belong to the family of 6, 7 and 42?',am:'3፣ 4 እና 12 ቤተሰብ ናቸው፦ 3 × 4 = 12፣ 4 × 3 = 12፣ 12 ÷ 3 = 4፣ 12 ÷ 4 = 3። የ6፣ 7 እና 42 ቤተሰብ የሆኑት እውነታዎች የትኞቹ ናቸው?'},
  buckets:[{en:'In the family 6, 7, 42',am:'የ6፣ 7፣ 42 ቤተሰብ'},{en:'Not in the family',am:'የቤተሰቡ አይደለም'}],
  items:[{t:'6 × 7 = 42',b:0},{t:'7 × 6 = 42',b:0},{t:'42 ÷ 6 = 7',b:0},{t:'42 ÷ 7 = 6',b:0},{t:'6 + 7 = 13',b:1},{t:'42 ÷ 2 = 21',b:1},{t:'7 × 7 = 49',b:1}]},
 {title:{en:'Word problems',am:'የቃላት ፕሮብሌሞች'},type:'quiz',
  tip:{en:'"Share", "each" and "how many groups" often mean divide. Check by multiplying back.',am:'“ማከፋፈል”፣ “እያንዳንዱ” እና “ስንት ቡድኖች” ብዙ ጊዜ ማካፈልን ያመለክታሉ። መልሳችሁ በማባዛት አረጋግጡ።'},
  items:[
   {q:{en:'48 students sit in groups of 6. How many groups?',am:'48 ተማሪዎች በ6 በ6 ይቀመጣሉ። ስንት ቡድኖች ናቸው?'},o:['8','6','7','42'],a:0,e:'6 × 8 = 48'},
   {q:{en:'90 birr shared equally by 10 children. How much each?',am:'90 ብር ለ10 ልጆች በእኩል ተከፋፈለ። እያንዳንዱ ስንት?'},o:['9','10','80','900'],a:0},
   {q:{en:'A farmer packs 63 kg of coffee into 9 equal bags. How many kg in each bag?',am:'አንድ ገበሬ 63 ኪ.ግ ቡና በ9 እኩል ከረጢቶች አሸገ። በእያንዳንዱ ስንት ኪ.ግ?'},o:['7','8','6','54'],a:0},
   {q:{en:'25 ÷ 1 = ?',am:'25 ÷ 1 = ?'},o:['1','25','0','26'],a:1,e:{en:'Dividing by 1 does not change the number.',am:'በ1 ማካፈል ቁጥሩን አይለውጥም።'}},
   {q:{en:'There are 20 legs. Each chair has 4 legs. How many chairs?',am:'20 እግሮች አሉ። እያንዳንዱ ወንበር 4 እግር አለው። ስንት ወንበሮች?'},o:['5','4','16','24'],a:0}
  ]},
 {type:'exam',items:[
   {q:'36 ÷ 4 = ?',o:['8','9','32','40'],a:1},{q:'72 ÷ 8 = ?',o:['9','8','64','7'],a:0},{q:'50 ÷ 5 = ?',o:['5','10','45','25'],a:1},
   {q:{en:'If 7 × 9 = 63, then 63 ÷ 9 = ?',am:'7 × 9 = 63 ከሆነ 63 ÷ 9 = ?'},o:['7','9','54','6'],a:0},
   {q:{en:'Which is NOT true?',am:'እውነት ያልሆነው የትኛው ነው?'},o:['18 ÷ 3 = 6','18 ÷ 6 = 3','18 ÷ 2 = 8'],a:2,e:'18 ÷ 2 = 9'},
   {q:{en:'40 mangoes in bags of 8. How many bags?',am:'40 ማንጎዎች በ8 በ8 ከረጢት። ስንት ከረጢቶች?'},o:['5','4','32','48'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Division shares fairly or makes equal groups. It is multiplication backwards.',am:'ማካፈል በእኩል ያከፋፍላል ወይም እኩል ቡድኖችን ይሠራል። የማባዛት ተገላቢጦሽ ነው።'},
  points:[{en:'12 ÷ 3 = 4 because 3 × 4 = 12.',am:'12 ÷ 3 = 4 ነው፤ ምክንያቱም 3 × 4 = 12።'},{en:'Division is repeated subtraction: 20 − 5 − 5 − 5 − 5 = 0, so 20 ÷ 5 = 4.',am:'ማካፈል ተደጋጋሚ መቀነስ ነው፦ 20 − 5 − 5 − 5 − 5 = 0፤ ስለዚህ 20 ÷ 5 = 4።'},{en:'Any number ÷ 1 = the same number.',am:'ማንኛውም ቁጥር ÷ 1 = ያው ቁጥር።'},{en:'A fact family: 3 × 4, 4 × 3, 12 ÷ 3, 12 ÷ 4.',am:'የቁጥር ቤተሰብ፦ 3 × 4፣ 4 × 3፣ 12 ÷ 3፣ 12 ÷ 4።'}],
  words:[['ተካፋይ',{en:'the number being shared (dividend)',am:'የሚካፈለው ቁጥር'}],['አካፋይ',{en:'the number we divide by (divisor)',am:'የምናካፍልበት ቁጥር'}],['ድርሻ',{en:'the answer (quotient)',am:'የማካፈል መልስ'}]],
  remember:{en:'Check every division by multiplying: answer × divisor = the starting number.',am:'እያንዳንዱን ማካፈል በማባዛት አረጋግጡ፦ መልስ × አካፋይ = የመነሻው ቁጥር።'},
  exam:[['81 ÷ 9 = ?','9'],['60 ÷ 10 = ?','6'],[{en:'Write the fact family of 5, 8, 40.',am:'የ5፣ 8፣ 40ን ቤተሰብ ጻፉ።'},'5×8=40, 8×5=40, 40÷5=8, 40÷8=5'],[{en:'32 pencils for 4 children. Each?',am:'32 እርሳሶች ለ4 ልጆች። እያንዳንዱ?'},'8']],
  innovate:{title:{en:'Fair-share snack packs',am:'እኩል የመክሰስ ፓኬጆች'},text:{en:'Shops pack goods into equal packs to sell. Plan snack packs for a school event.',am:'ሱቆች ዕቃዎችን ለመሸጥ በእኩል ፓኬጅ ያሽጋሉ። ለትምህርት ቤት ዝግጅት የመክሰስ ፓኬጆችን አቅዱ።'},
   steps:[{en:'You have 60 roasted-chickpea bags (kolo). How many packs of 5? Of 6?',am:'60 የቆሎ ከረጢቶች አሏችሁ። በ5 ስንት ፓኬጅ? በ6?'},{en:'Which pack size is easiest to sell? Why?',am:'የትኛው የፓኬጅ መጠን ለመሸጥ ይቀላል? ለምን?'},{en:'Set a price per pack and work out the total income.',am:'ለአንድ ፓኬጅ ዋጋ ወስኑ፤ ጠቅላላ ገቢውን አስሉ።'},{en:'Present your plan to the class like a business pitch.',am:'እቅዳችሁን እንደ ንግድ ሐሳብ ለክፍሉ አቅርቡ።'}]}}}
 ]});
})();
