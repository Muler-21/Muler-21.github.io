/* ሒሳብ · ምዕራፍ 10 · ልኬት፦ ርዝመት፣ መጠነ ቁስ እና ይዘት */
(function(){
const {rnd,numOpts}=G3;
const CONV=[
 {from:{en:'m',am:'ሜ'},to:{en:'cm',am:'ሳ.ሜ'},k:100,max:9},{from:{en:'kg',am:'ኪ.ግ'},to:{en:'g',am:'ግ'},k:1000,max:9},{from:{en:'g',am:'ግ'},to:{en:'mg',am:'ሚ.ግ'},k:1000,max:5},
 {from:{en:'quintal',am:'ኩንታል'},to:{en:'kg',am:'ኪ.ግ'},k:100,max:9},{from:{en:'L',am:'ሊ'},to:{en:'mL',am:'ሚ.ሊ'},k:1000,max:9}];
const L=o=>G3.tx(o);
Unit.start({
 id:'math-10',subject:'math',subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 10',am:'ምዕራፍ 10'},
 title:{en:'Length, Mass & Capacity',am:'ርዝመት፣ መጠነ ቁስና ይዘት'},
 footer:{en:'Built on the Grade 3 Mathematics student book, Chapter 10: measurement.',am:'በ3ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 10 ላይ የተመሰረተ፦ ልኬት።'},
 missions:[
 {title:{en:'Best unit',am:'ተስማሚ አሃድ'},type:'sort',
  tip:{en:'Choose a unit that fits the size. Small things: cm, g, mL. Bigger things: m, kg, L. Very heavy loads of grain: quintals.',am:'ከመጠኑ ጋር የሚስማማ አሃድ ምረጡ። ትናንሽ ነገሮች፦ ሳ.ሜ፣ ግ፣ ሚ.ሊ። ትልልቅ ነገሮች፦ ሜ፣ ኪ.ግ፣ ሊ። በጣም ከባድ የእህል ጭነት፦ ኩንታል።'},
  buckets:[{en:'Length (m, cm)',am:'ርዝመት (ሜ፣ ሳ.ሜ)'},{en:'Mass (kg, g, quintal)',am:'መጠነ ቁስ (ኪ.ግ፣ ግ፣ ኩንታል)'},{en:'Capacity (L, mL)',am:'ይዘት (ሊ፣ ሚ.ሊ)'}],
  items:[{t:{en:'How tall a door is',am:'የበር ቁመት'},b:0},{t:{en:'How heavy a sack of teff is',am:'የጤፍ ጆንያ ክብደት'},b:1},{t:{en:'Milk in a jug',am:'በማሰሮ ያለ ወተት'},b:2},{t:{en:'Length of a pencil',am:'የእርሳስ ርዝመት'},b:0},{t:{en:'Water in a jerrycan',am:'በጀሪካን ያለ ውኃ'},b:2},{t:{en:'Weight of a baby',am:'የሕጻን ክብደት'},b:1},{t:{en:'Medicine in a spoon',am:'በማንኪያ ያለ መድሃኒት'},b:2},{t:{en:'Distance across the classroom',am:'የመማሪያ ክፍሉ ስፋት'},b:0}]},
 {title:{en:'Convert units',am:'አሃድ መቀየር'},type:'drill',need:8,
  tip:{en:'Remember: 1 m = 100 cm. 1 kg = 1,000 g. 1 g = 1,000 mg. 1 quintal = 100 kg. 1 L = 1,000 mL. Going to a smaller unit → the number gets bigger.',am:'አስታውሱ፦ 1 ሜ = 100 ሳ.ሜ። 1 ኪ.ግ = 1,000 ግ። 1 ግ = 1,000 ሚ.ግ። 1 ኩንታል = 100 ኪ.ግ። 1 ሊ = 1,000 ሚ.ሊ። ወደ ትንሽ አሃድ ስንቀይር ቁጥሩ ይጨምራል።'},
  gen(){const c=CONV[rnd(0,CONV.length-1)];const n=rnd(1,c.max);const ans=n*c.k;return{q:`${n} ${L(c.from)} = ? ${L(c.to)}`,...numOpts(ans,[c.k/10*n-ans,ans*9,c.k,-c.k].map(d=>d)),e:`${n} × ${c.k.toLocaleString('en-US')} = ${ans.toLocaleString('en-US')}`}}},
 {title:{en:'Mixed units',am:'ድብልቅ አሃዶች'},type:'drill',need:5,
  tip:{en:'2 m 35 cm means 2 metres and 35 centimetres = 200 cm + 35 cm = 235 cm.',am:'2 ሜ 35 ሳ.ሜ ማለት 2 ሜትርና 35 ሳንቲ ሜትር = 200 ሳ.ሜ + 35 ሳ.ሜ = 235 ሳ.ሜ።'},
  gen(){const back=Math.random()<.5;const m=rnd(1,9),c=rnd(1,99);const tot=m*100+c;
   if(!back)return{q:{en:`${m} m ${c} cm = ? cm`,am:`${m} ሜ ${c} ሳ.ሜ = ? ሳ.ሜ`},...numOpts(tot,[100,-100,c*9,90]),e:`${m*100} + ${c} = ${tot}`};
   const o=G3.shuffle([`${m} m ${c} cm`,`${c} m ${m} cm`,`${m+1} m ${c} cm`,`${m} m ${(c+10)%100} cm`]);return{q:{en:`${tot} cm = ?`,am:`${tot} ሳ.ሜ = ?`},o,a:o.indexOf(`${m} m ${c} cm`),e:`${tot} = ${m*100} + ${c}`}}},
 {title:{en:'Measuring problems',am:'የልኬት ፕሮብሌሞች'},type:'quiz',
  tip:{en:'Make the units the same before you add or subtract!',am:'ከመደመራችሁ ወይም ከመቀነሳችሁ በፊት አሃዶቹን አንድ ዓይነት አድርጉ!'},
  items:[
   {q:{en:'A jug has 1 L of milk. Mother pours out 350 mL. How much is left?',am:'አንድ ማሰሮ 1 ሊ ወተት አለው። እናት 350 ሚ.ሊ ቀዱ። የቀረው ስንት ነው?'},o:['650 mL','750 mL','350 mL','1,350 mL'],a:0,e:'1,000 − 350 = 650 mL'},
   {q:{en:'A farmer has 3 quintals of maize. How many kg is that?',am:'አንድ ገበሬ 3 ኩንታል በቆሎ አለው። በኪሎ ግራም ስንት ነው?'},o:['300 kg','30 kg','3,000 kg','103 kg'],a:0},
   {q:{en:'A ribbon is 1 m 20 cm. Another is 80 cm. Total length?',am:'አንድ ሪባን 1 ሜ 20 ሳ.ሜ ነው። ሌላው 80 ሳ.ሜ ነው። ጠቅላላ ርዝመት?'},o:['2 m','1 m 100 cm','180 cm','1 m 28 cm'],a:0,e:'120 + 80 = 200 cm = 2 m'},
   {q:{en:'Which is heavier: 1 kg of cotton or 1 kg of stones?',am:'የቱ ይከብዳል፦ 1 ኪ.ግ ጥጥ ወይስ 1 ኪ.ግ ድንጋይ?'},o:[{en:'Stones',am:'ድንጋይ'},{en:'Cotton',am:'ጥጥ'},{en:'They are the same',am:'እኩል ናቸው'}],a:2,e:{en:'Both are 1 kg! The stones are just smaller in size.',am:'ሁለቱም 1 ኪ.ግ ናቸው! ድንጋዩ በመጠን ብቻ ያንሳል።'}},
   {q:{en:'You need 2 L of water. Your cup holds 250 mL. How many cups?',am:'2 ሊ ውኃ ያስፈልጋችኋል። ኩባያችሁ 250 ሚ.ሊ ይይዛል። ስንት ኩባያ?'},o:['8','4','6','10'],a:0,e:'2,000 ÷ 250 = 8'}
  ]},
 {type:'exam',items:[
   {q:'5 kg = ? g',o:['5,000','500','50','50,000'],a:0},{q:'4 m = ? cm',o:['400','40','4,000','104'],a:0},{q:'3 L = ? mL',o:['3,000','300','30','3,300'],a:0},
   {q:{en:'2 quintals = ? kg',am:'2 ኩንታል = ? ኪ.ግ'},o:['200','2,000','20','102'],a:0},{q:'450 mL + 550 mL = ?',o:['1 L','900 mL','10 L','100 mL'],a:0}]},
 {type:'notes',notes:{
  big:{en:'We measure length, mass and capacity with standard units. Convert to the same unit before calculating.',am:'ርዝመትን፣ መጠነ ቁስንና ይዘትን በመደበኛ አሃዶች እንለካለን። ከማስላታችን በፊት ወደ አንድ ዓይነት አሃድ እንቀይራለን።'},
  points:[{en:'Length: 1 m = 100 cm.',am:'ርዝመት፦ 1 ሜ = 100 ሳ.ሜ።'},{en:'Mass: 1 g = 1,000 mg; 1 kg = 1,000 g; 1 quintal = 100 kg.',am:'መጠነ ቁስ፦ 1 ግ = 1,000 ሚ.ግ፤ 1 ኪ.ግ = 1,000 ግ፤ 1 ኩንታል = 100 ኪ.ግ።'},{en:'Capacity: 1 L = 1,000 mL.',am:'ይዘት፦ 1 ሊ = 1,000 ሚ.ሊ።'},{en:'Mixed units: 2 m 35 cm = 235 cm.',am:'ድብልቅ አሃዶች፦ 2 ሜ 35 ሳ.ሜ = 235 ሳ.ሜ።'}],
  words:[['መጠነ ቁስ',{en:'mass',am:'የአንድ ነገር ክብደት'}],['ይዘት',{en:'capacity',am:'አንድ ዕቃ የሚይዘው ፈሳሽ መጠን'}],['ኩንታል',{en:'quintal (100 kg)',am:'100 ኪሎ ግራም'}]],
  remember:{en:'Bigger unit → smaller number. Smaller unit → bigger number.',am:'ትልቅ አሃድ → ትንሽ ቁጥር። ትንሽ አሃድ → ትልቅ ቁጥር።'},
  exam:[['7 kg = ? g','7,000 g'],['3 m 5 cm = ? cm','305 cm'],['1 L − 400 mL = ?','600 mL'],[{en:'5 quintals = ? kg',am:'5 ኩንታል = ? ኪ.ግ'},'500 kg']],
  innovate:{title:{en:'Juice stall recipe',am:'የጭማቂ መሸጫ አሰራር'},text:{en:'Juice sellers must measure carefully to make profit. Plan a mango juice stall.',am:'ጭማቂ ሻጮች ለማትረፍ በጥንቃቄ መለካት አለባቸው። የማንጎ ጭማቂ መሸጫ አቅዱ።'},
   steps:[{en:'One glass holds 250 mL. How many glasses from 5 L?',am:'አንድ ብርጭቆ 250 ሚ.ሊ ይይዛል። ከ5 ሊ ስንት ብርጭቆ?'},{en:'1 kg of mango makes 1 L of juice. How many kg for 5 L?',am:'1 ኪ.ግ ማንጎ 1 ሊ ጭማቂ ይሠራል። ለ5 ሊ ስንት ኪ.ግ?'},{en:'Mango costs 40 birr per kg. Total cost?',am:'ማንጎ በኪ.ግ 40 ብር ነው። ጠቅላላ ወጪ?'},{en:'Choose a glass price so you make a fair profit.',am:'ፍትሐዊ ትርፍ እንድታገኙ የብርጭቆ ዋጋ ምረጡ።'}]}}}
 ]});
})();
