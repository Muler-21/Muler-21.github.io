/* 2ኛ ክፍል ሒሳብ · ምዕራፍ 6 · ልኬት */
(function(){
const {rnd,numOpts}=G3;const SM={en:'Mathematics',am:'ሒሳብ'};
function ruler(cm){let t='';for(let i=0;i<=12;i++)t+=`<line x1="${10+i*25}" y1="50" x2="${10+i*25}" y2="${i%5===0?30:38}" stroke="var(--ink)" stroke-width="2"/><text x="${10+i*25}" y="66" font-size="11" text-anchor="middle" fill="var(--ink)">${i}</text>`;
 return`<svg viewBox="0 0 320 76" style="width:min(340px,100%);height:auto"><rect x="10" y="8" width="${cm*25}" height="14" rx="2" fill="var(--clay)"/><rect x="2" y="26" width="316" height="46" rx="4" fill="#F4E3B5" stroke="var(--ink)"/>${t}</svg>`}
Unit.start({id:'g2-math-6',grade:2,subject:'math',subjectName:SM,chapter:{en:'Chapter 6',am:'ምዕራፍ 6'},
 title:{en:'Measurement',am:'ልኬት'},
 footer:{en:'Built on the Grade 2 Mathematics student book, Chapter 6: length in centimetres and metres, mass in grams and kilograms, capacity in litres.',am:'በ2ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 6 ላይ የተመሰረተ፦ ርዝመት በሳንቲ ሜትርና በሜትር፣ መጠነ ቁስ በግራምና በኪሎ ግራም፣ ይዘት በሊትር።'},
 missions:[
 {title:{en:'Read the ruler',am:'ማስመሪያውን አንብቡ'},type:'drill',need:6,
  tip:{en:'Start at 0. The end of the object shows its length in centimetres (cm).',am:'ከ0 ጀምሩ። የነገሩ ጫፍ ርዝመቱን በሳንቲ ሜትር (ሳ.ሜ) ያሳያል።'},
  gen(){const n=rnd(2,12);return{fig:ruler(n),q:{en:'How long is the red strip?',am:'ቀዩ ቁራጭ ስንት ሳ.ሜ ይረዝማል?'},...numOpts(n,[1,-1,2]),e:`${n} cm`}}},
 {title:{en:'cm or m? g or kg? L?',am:'ሳ.ሜ ወይስ ሜ? ግ ወይስ ኪ.ግ? ሊትር?'},type:'sort',
  tip:{en:'Small lengths: cm. Long lengths: m. Light things: g. Heavy things: kg. Liquids: litres.',am:'አጭር ርዝመት፦ ሳ.ሜ። ረጅም፦ ሜ። ቀላል ነገር፦ ግ። ከባድ፦ ኪ.ግ። ፈሳሽ፦ ሊትር።'},
  buckets:[{en:'📏 cm',am:'📏 ሳ.ሜ'},{en:'📐 m',am:'📐 ሜ'},{en:'⚖️ kg',am:'⚖️ ኪ.ግ'},{en:'🥛 L',am:'🥛 ሊትር'}],
  items:[{t:{en:'Length of a pencil',am:'የእርሳስ ርዝመት'},b:0},{t:{en:'Length of an eraser',am:'የላጲስ ርዝመት'},b:0},{t:{en:'Length of the classroom',am:'የክፍሉ ርዝመት'},b:1},{t:{en:'Height of a tree',am:'የዛፍ ቁመት'},b:1},{t:{en:'A sack of teff',am:'የጤፍ ከረጢት'},b:2},{t:{en:'A child\'s weight',am:'የልጅ ክብደት'},b:2},{t:{en:'Water in a jerrycan',am:'በጀሪካን ያለ ውኃ'},b:3},{t:{en:'Milk in a jug',am:'በማንቆርቆሪያ ያለ ወተት'},b:3}]},
 {title:{en:'Units facts',am:'የአሃድ እውነታዎች'},type:'quiz',
  tip:{en:'100 cm = 1 m. 1000 g = 1 kg.',am:'100 ሳ.ሜ = 1 ሜ። 1000 ግ = 1 ኪ.ግ።'},
  items:[{q:{en:'1 metre = ? centimetres',am:'1 ሜትር = ? ሳንቲ ሜትር'},o:['100','10','1000','50'],a:0},{q:{en:'1 kilogram = ? grams',am:'1 ኪሎ ግራም = ? ግራም'},o:['1000','100','10','500'],a:0},
   {q:{en:'Which is longer: 1 m or 80 cm?',am:'የሚረዝመው፦ 1 ሜ ወይስ 80 ሳ.ሜ?'},o:['1 m','80 cm'],a:0},{q:{en:'Which is heavier: 2 kg of sugar or 500 g of sugar?',am:'የሚከብደው፦ 2 ኪ.ግ ስኳር ወይስ 500 ግ ስኳር?'},o:['2 kg','500 g'],a:0}]},
 {title:{en:'Add measures',am:'ልኬቶችን መደመር'},type:'drill',need:5,
  tip:{en:'Add the numbers and keep the same unit.',am:'ቁጥሮቹን ደምሩ፤ አሃዱን አትለውጡ።'},
  gen(){const u=[['cm','ሳ.ሜ'],['kg','ኪ.ግ'],['L','ሊትር']][rnd(0,2)];const a=rnd(5,40),b=rnd(5,40);return{q:{en:`${a} ${u[0]} + ${b} ${u[0]} = ?`,am:`${a} ${u[1]} + ${b} ${u[1]} = ?`},...numOpts(a+b,[1,-1,10,-10]),e:`${a+b} ${u[0]}`}}},
 {type:'exam',items:[{q:{en:'We measure a pencil in…',am:'እርሳስን የምንለካው በ…'},o:['cm','kg','L'],a:0},{q:{en:'1 m = ? cm',am:'1 ሜ = ? ሳ.ሜ'},o:['100','1000','10'],a:0},{q:{en:'Water in a bucket is measured in…',am:'በባልዲ ያለ ውኃ የሚለካው በ…'},o:[{en:'litres',am:'ሊትር'},{en:'metres',am:'ሜትር'}],a:0},{q:'25 kg + 15 kg = ?',o:['40 kg','30 kg','10 kg'],a:0},{fig:ruler(7),q:{en:'Length?',am:'ርዝመት?'},o:['7 cm','8 cm','6 cm'],a:0}]},
 {type:'notes',notes:{
  big:{en:'We use standard units so everyone gets the same answer: cm and m for length, g and kg for mass, L for capacity.',am:'ሁሉም ተመሳሳይ መልስ እንዲያገኝ መደበኛ አሃዶችን እንጠቀማለን፦ ለርዝመት ሳ.ሜና ሜ፣ ለመጠነ ቁስ ግና ኪ.ግ፣ ለይዘት ሊትር።'},
  points:[{en:'Length: centimetre (cm), metre (m). 100 cm = 1 m.',am:'ርዝመት፦ ሳንቲ ሜትር (ሳ.ሜ)፣ ሜትር (ሜ)። 100 ሳ.ሜ = 1 ሜ።'},{en:'Mass: gram (g), kilogram (kg). 1000 g = 1 kg.',am:'መጠነ ቁስ፦ ግራም (ግ)፣ ኪሎ ግራም (ኪ.ግ)። 1000 ግ = 1 ኪ.ግ።'},{en:'Capacity: litre (L).',am:'ይዘት፦ ሊትር።'},{en:'Measure from 0 on the ruler.',am:'በማስመሪያው ላይ ከ0 ጀምሩ።'}],
  words:[['ሳንቲ ሜትር',{en:'centimetre',am:'ሳ.ሜ'}],['ኪሎ ግራም',{en:'kilogram',am:'ኪ.ግ'}],['ሊትር',{en:'litre',am:'የፈሳሽ መለኪያ'}]],
  remember:{en:'cm for small, m for big; g for light, kg for heavy.',am:'ሳ.ሜ ለትንሽ፣ ሜ ለትልቅ፤ ግ ለቀላል፣ ኪ.ግ ለከባድ።'},
  exam:[[{en:'Measure your book with a ruler',am:'መጽሐፋችሁን በማስመሪያ ለኩ'},{en:'about 25 cm',am:'በግምት 25 ሳ.ሜ'}],[{en:'How many grams in 2 kg?',am:'በ2 ኪ.ግ ውስጥ ስንት ግራም?'},'2000']],
  innovate:{title:{en:'Market fair-measure check',am:'የገበያ ልኬት ፍተሻ'},text:{en:'Fair traders measure correctly. With an adult, check how much water a 1-litre bottle holds and how long 1 metre of cloth is, using a ruler and a bottle.',am:'ፍትሐዊ ነጋዴዎች በትክክል ይለካሉ። ከትልቅ ሰው ጋር ባለ 1 ሊትር ጠርሙስ ምን ያህል ውኃ እንደሚይዝና 1 ሜትር ጨርቅ ምን ያህል እንደሚረዝም በማስመሪያና በጠርሙስ ፈትሹ።'},
   steps:[{en:'Mark 1 metre on the floor with a ruler (100 cm).',am:'በማስመሪያ መሬት ላይ 1 ሜትር (100 ሳ.ሜ) አስምሩ።'},{en:'Measure ropes or cloth against it.',am:'ገመድ ወይም ጨርቅ በዚህ ለኩ።'},{en:'Fill a 1 L bottle with cups of water. How many cups?',am:'ባለ 1 ሊትር ጠርሙስ በስኒ ውኃ ሙሉ። ስንት ስኒ?'},{en:'Teach your family to check measures at the market.',am:'በገበያ ልኬትን እንዲፈትሹ ቤተሰባችሁን አስተምሩ።'}]}}}
 ]});
})();
