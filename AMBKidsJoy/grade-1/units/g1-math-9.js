/* 1ኛ ክፍል ሒሳብ · ምዕራፍ 9 · ልኬት */
(function(){
const {tx,rnd,numOpts}=G3;
const bar=(len,col,lab)=>`<g><text x="4" y="0" dy="16" font-family="Baloo 2" font-weight="800" font-size="16" fill="var(--ink)">${lab}</text><rect x="30" y="2" width="${len}" height="18" rx="9" fill="${col}"/></g>`;
const lens=(a,b,ea,eb)=>`<svg viewBox="0 0 330 64" style="width:min(420px,100%);height:auto" role="img" aria-label="lengths"><g transform="translate(0 6)">${bar(a,'var(--blue)','A')}</g><g transform="translate(0 38)">${bar(b,'var(--clay)','B')}</g></svg>`;
const clips=n=>`<div style="display:grid;gap:6px;justify-items:start"><div style="height:16px;width:${n*36}px;max-width:100%;border-radius:8px;background:var(--green)"></div><div style="display:flex">${Array.from({length:n},()=>'<span class="emo" style="font-size:1.6rem;width:36px;text-align:center">📎</span>').join('')}</div></div>`;
Unit.start({
 id:'g1-math-9',grade:1,subject:'math',
 subjectName:{en:'Mathematics',am:'ሒሳብ'},chapter:{en:'Chapter 9',am:'ምዕራፍ 9'},
 title:{en:'Measurement',am:'ልኬት'},
 footer:{en:'Built on the Grade 1 Mathematics student book, Chapter 9: comparing length, weight and capacity, and measuring with everyday (non-standard) units.',am:'በ1ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ 9 ላይ የተመሰረተ፦ ርዝመትን፣ ክብደትንና ይዘትን ማወዳደርና መደበኛ ባልሆኑ መለኪያዎች መለካት።'},
 missions:[
 {title:{en:'Longer or shorter?',am:'ረጅም ወይስ አጭር?'},type:'drill',need:5,
  tip:{en:'Line things up at the same start. The one that goes further is longer.',am:'ነገሮቹን ከአንድ መነሻ አሰልፉ። ርቆ የሚሄደው ረጅም ነው።'},
  gen(){let a=rnd(60,280),b=rnd(60,280);if(Math.abs(a-b)<30)b=a>170?a-80:a+80;const long=Math.random()<.5;return{fig:lens(a,b),q:long?{en:'Which is longer?',am:'ረጅሙ የትኛው ነው?'}:{en:'Which is shorter?',am:'አጭሩ የትኛው ነው?'},o:['A','B'],a:long?(a>b?0:1):(a<b?0:1)}}},
 {title:{en:'Measure with paper clips',am:'በአግራፍ መለካት'},type:'drill',need:5,
  tip:{en:'Put paper clips end to end with no gaps. Count them: that is the length.',am:'አግራፎችን ክፍተት ሳይኖር ጫፍ ለጫፍ አስቀምጡ። ቁጠሯቸው፦ ያ ርዝመቱ ነው።'},
  gen(){const n=rnd(2,8);return{fig:clips(n),q:{en:'How many paper clips long is the green strip?',am:'አረንጓዴው ወረቀት ስንት አግራፍ ርዝመት አለው?'},...numOpts(n,[1,-1,2])}}},
 {title:{en:'Heavier or lighter?',am:'ከባድ ወይስ ቀላል?'},type:'quiz',shuffle:true,
  tip:{en:'Hold one thing in each hand. The heavier one pulls your hand down.',am:'በእያንዳንዱ እጃችሁ አንድ ነገር ያዙ። ከባዱ እጃችሁን ወደ ታች ይስባል።'},
  items:[
   {q:{en:'Which is heavier?',am:'ከባዱ የትኛው ነው?'},o:[{en:'🐘 Elephant',am:'🐘 ዝሆን'},{en:'🐭 Mouse',am:'🐭 አይጥ'}],a:0},
   {q:{en:'Which is lighter?',am:'ቀላሉ የትኛው ነው?'},o:[{en:'🪶 Feather',am:'🪶 ላባ'},{en:'🪨 Stone',am:'🪨 ድንጋይ'}],a:0},
   {q:{en:'Which is heavier?',am:'ከባዱ የትኛው ነው?'},o:[{en:'🍉 Watermelon',am:'🍉 ሐብሐብ'},{en:'🍋 Lemon',am:'🍋 ሎሚ'}],a:0},
   {q:{en:'Which is lighter?',am:'ቀላሉ የትኛው ነው?'},o:[{en:'✏️ Pencil',am:'✏️ እርሳስ'},{en:'🎒 Full school bag',am:'🎒 የሞላ የትምህርት ቦርሳ'}],a:0},
   {fig:'<div class="cnt" style="--per:3"><span class="emo">🍎</span><span class="emo">⚖️</span><span class="emo">🍎🍎🍎</span></div>',q:{en:'One side has 1 apple, the other 3 apples. Which side goes down?',am:'አንዱ ወገን 1 ፖም፣ ሌላው 3 ፖሞች አሉት። የትኛው ወገን ወደ ታች ይወርዳል?'},o:[{en:'The side with 3 apples',am:'3 ፖሞች ያሉበት'},{en:'The side with 1 apple',am:'1 ፖም ያለበት'}],a:0}]},
 {title:{en:'Holds more or less?',am:'ብዙ ወይስ ትንሽ ይይዛል?'},type:'quiz',shuffle:true,
  tip:{en:'Capacity is how much a container holds. Fill one with cups of water and count.',am:'ይዘት አንድ ዕቃ ምን ያህል እንደሚይዝ ነው። በስኒ ውኃ ሞልታችሁ ቁጠሩ።'},
  items:[
   {q:{en:'Which holds more water?',am:'ብዙ ውኃ የሚይዘው የትኛው ነው?'},o:[{en:'🪣 Bucket',am:'🪣 ባልዲ'},{en:'☕ Cup',am:'☕ ስኒ'}],a:0},
   {q:{en:'Which holds less?',am:'ትንሽ የሚይዘው የትኛው ነው?'},o:[{en:'🥄 Spoon',am:'🥄 ማንኪያ'},{en:'🫙 Jar',am:'🫙 ማሰሮ'}],a:0},
   {q:{en:'A jug fills 4 cups. A bottle fills 2 cups. Which holds more?',am:'ማንቆርቆሪያ 4 ስኒዎችን ይሞላል። ጠርሙስ 2 ስኒዎችን ይሞላል። ብዙ የሚይዘው?'},o:[{en:'The jug',am:'ማንቆርቆሪያው'},{en:'The bottle',am:'ጠርሙሱ'}],a:0}]},
 {title:{en:'Which tool to measure?',am:'በምን እንለካለን?'},type:'sort',
  tip:{en:'Choose a good unit: clips or hand spans for length, cups for capacity, a balance for weight.',am:'ጥሩ መለኪያ ምረጡ፦ ለርዝመት አግራፍ ወይም ስንዝር፣ ለይዘት ስኒ፣ ለክብደት ሚዛን።'},
  buckets:[{en:'📏 Length',am:'📏 ርዝመት'},{en:'⚖️ Weight',am:'⚖️ ክብደት'},{en:'🥛 Capacity',am:'🥛 ይዘት'}],
  items:[{t:{en:'How long is my desk?',am:'ጠረጴዛዬ ምን ያህል ይረዝማል?'},b:0},{t:{en:'How tall is the door?',am:'በሩ ምን ያህል ይረዝማል?'},b:0},{t:{en:'Is the bag of teff heavy?',am:'የጤፍ ከረጢቱ ይከብዳል?'},b:1},{t:{en:'Which goat is heavier?',am:'የትኛው ፍየል ይከብዳል?'},b:1},{t:{en:'How much water fills the pot?',am:'ድስቱን ምን ያህል ውኃ ይሞላዋል?'},b:2},{t:{en:'How many cups of milk in the jug?',am:'በማንቆርቆሪያው ስንት ስኒ ወተት አለ?'},b:2}]},
 {type:'exam',items:[
   {q:{en:'A pencil is ___ than an eraser.',am:'እርሳስ ከላጲስ ___።'},o:[{en:'longer',am:'ይረዝማል'},{en:'shorter',am:'ያጥራል'}],a:0},
   {q:{en:'Which is heavier?',am:'ከባዱ የትኛው ነው?'},o:[{en:'🐄 Cow',am:'🐄 ላም'},{en:'🐓 Hen',am:'🐓 ዶሮ'}],a:0},
   {fig:clips(5),q:{en:'How many clips long?',am:'ስንት አግራፍ ይረዝማል?'},o:['5','4','6','3'],a:0},
   {q:{en:'We measure water in a pot with…',am:'በድስት ያለ ውኃን የምንለካው በ…'},o:[{en:'cups',am:'ስኒ'},{en:'paper clips',am:'አግራፍ'}],a:0},
   {q:{en:'Which holds more?',am:'ብዙ የሚይዘው?'},o:[{en:'🛢️ Barrel',am:'🛢️ በርሜል'},{en:'🥛 Glass',am:'🥛 ብርጭቆ'}],a:0}
  ]},
 {type:'notes',notes:{
  big:{en:'We measure to compare: how long, how heavy, and how much a container holds.',am:'ለማወዳደር እንለካለን፦ ምን ያህል እንደሚረዝም፣ እንደሚከብድና አንድ ዕቃ ምን ያህል እንደሚይዝ።'},
  points:[{en:'Length: longer, shorter. Start at the same line.',am:'ርዝመት፦ ይረዝማል፣ ያጥራል። ከአንድ መስመር ጀምሩ።'},
   {en:'Measure length with clips, hand spans or pencils, end to end.',am:'ርዝመትን በአግራፍ፣ በስንዝር ወይም በእርሳስ ጫፍ ለጫፍ ለኩ።'},
   {en:'Weight: heavier, lighter. A balance goes down on the heavier side.',am:'ክብደት፦ ይከብዳል፣ ይቀላል። ሚዛን በከባዱ ወገን ይወርዳል።'},
   {en:'Capacity: holds more, holds less. Count cups to compare.',am:'ይዘት፦ ብዙ ይይዛል፣ ትንሽ ይይዛል። ለማወዳደር ስኒዎችን ቁጠሩ።'}],
  words:[['ርዝመት',{en:'length',am:'ምን ያህል እንደሚረዝም'}],['ክብደት',{en:'weight',am:'ምን ያህል እንደሚከብድ'}],['ይዘት',{en:'capacity',am:'ምን ያህል እንደሚይዝ'}],['ሚዛን',{en:'balance',am:'ክብደት ማወዳደሪያ'}]],
  remember:{en:'No gaps, no overlaps when you measure!',am:'ስትለኩ ክፍተትም መደራረብም አይኑር!'},
  exam:[[{en:'Measure your book with your hand span. How many?',am:'መጽሐፋችሁን በስንዝር ለኩ። ስንት ነው?'},{en:'About 2 spans',am:'በግምት 2 ስንዝር'}],[{en:'Which is heavier: a brick or a leaf?',am:'የሚከብደው፦ ጡብ ወይስ ቅጠል?'},{en:'A brick',am:'ጡብ'}]],
  innovate:{title:{en:'Coat-hanger balance',am:'የልብስ መስቀያ ሚዛን'},text:{en:'Traders weigh goods to sell fairly. Build a simple balance and compare beans, stones and fruit.',am:'ነጋዴዎች በፍትሐዊነት ለመሸጥ ዕቃዎችን ይመዝናሉ። ቀላል ሚዛን ሥሩና ባቄላ፣ ጠጠርና ፍራፍሬ አወዳድሩ።'},
   steps:[{en:'Hang a coat hanger or stick from its middle.',am:'የልብስ መስቀያ ወይም በትር ከመሃሉ አንጠልጥሉ።'},{en:'Tie a small bag or cup on each end.',am:'በእያንዳንዱ ጫፍ ትንሽ ከረጢት ወይም ኩባያ እሰሩ።'},{en:'Put things in each side: which goes down?',am:'በእያንዳንዱ ወገን ነገሮችን አድርጉ፦ የትኛው ይወርዳል?'},{en:'Use stones as "weights" to sell beans fairly.',am:'ባቄላን በፍትሐዊነት ለመሸጥ ጠጠሮችን እንደ "መመዘኛ" ተጠቀሙ።'}]}
 }}
 ]});
})();
