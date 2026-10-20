/* 1ኛ ክፍል አካባቢ ሳይንስ · ምዕራፍ 3 · የአካባቢያችን መገኛ */
(function(){
const row=(a)=>`<div class="cnt" style="--per:${a.length}">${a.map(e=>`<span class="emo" style="font-size:3rem">${e}</span>`).join('')}</div>`;
const L={en:'Left',am:'ግራ'},R={en:'Right',am:'ቀኝ'};
Unit.start({id:'g1-env-3',grade:1,subject:'env',subjectName:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Where we live: directions',am:'የአካባቢያችን መገኛ'},
 footer:{en:'Built on the Grade 1 Environmental Science student book, Chapter 3: location, left, right, front, behind, routes and neighbours.',am:'በ1ኛ ክፍል የአካባቢ ሳይንስ መጽሐፍ ምዕራፍ 3 ላይ የተመሰረተ፦ መገኛ፣ ግራ፣ ቀኝ፣ ፊት ለፊት፣ ኋላ፣ መንገዶችና ጎረቤቶች።'},
 missions:[
 {title:{en:'My left and right hand',am:'ግራና ቀኝ እጄ'},type:'quiz',
  tip:{en:'Most people write with the right hand. Raise your right hand! Now your left!',am:'አብዛኞቹ ሰዎች በቀኝ እጃቸው ይጽፋሉ። ቀኝ እጃችሁን አንሱ! አሁን ግራውን!'},
  items:[{fig:row(['🍎','👧','🍌']),q:{en:'As you look at the picture, which fruit is on the right of the girl?',am:'ሥዕሉን ስትመለከቱ ከልጅቷ በስተቀኝ ያለው ፍሬ የትኛው ነው?'},o:[{en:'🍌 Banana',am:'🍌 ሙዝ'},{en:'🍎 Apple',am:'🍎 ፖም'}],a:0},
   {fig:row(['🐈','👧','🐓']),q:{en:'As you look at the picture, where is the cat?',am:'ሥዕሉን ስትመለከቱ ድመቷ የት ናት?'},o:[{en:'On the left of the girl',am:'ከልጅቷ በስተግራ'},{en:'On the right of the girl',am:'ከልጅቷ በስተቀኝ'}],a:0},
   {fig:row(['🌳','🏠','🚗']),q:{en:'What is on the right of the house?',am:'ከቤቱ በስተቀኝ ያለው ምንድን ነው?'},o:[{en:'🚗 The car',am:'🚗 መኪናው'},{en:'🌳 The tree',am:'🌳 ዛፉ'}],a:0},
   {fig:row(['📘','✏️','🎒']),q:{en:'What is in the middle?',am:'መካከል ያለው ምንድን ነው?'},o:[{en:'✏️ Pencil',am:'✏️ እርሳስ'},{en:'🎒 Bag',am:'🎒 ቦርሳ'}],a:0}]},
 {title:{en:'In front or behind?',am:'ፊት ለፊት ወይስ ኋላ?'},type:'quiz',
  tip:{en:'In front means facing you. Behind means at your back.',am:'ፊት ለፊት ማለት ከፊታችሁ ማለት ነው። ኋላ ማለት ከጀርባችሁ ማለት ነው።'},
  items:[{q:{en:'The teacher faces the class. The blackboard is…',am:'መምህሯ ወደ ክፍሉ ዞራለች። ጥቁር ሰሌዳው…'},o:[{en:'behind the teacher',am:'ከመምህሯ በስተኋላ'},{en:'in front of the teacher',am:'ከመምህሯ ፊት ለፊት'}],a:0},
   {q:{en:'A mother carries her baby on her back. The baby is…',am:'እናት ልጇን አዝላለች። ልጁ…'},o:[{en:'behind the mother',am:'ከእናቱ በስተኋላ'},{en:'in front of the mother',am:'ከእናቱ ፊት ለፊት'}],a:0},
   {q:{en:'A farmer ploughs. The oxen walk…',am:'ገበሬው ያርሳል። በሬዎቹ የሚሄዱት…'},o:[{en:'in front of the farmer',am:'ከገበሬው ፊት ለፊት'},{en:'behind the farmer',am:'ከገበሬው በስተኋላ'}],a:0}]},
 {title:{en:'Follow the road',am:'መንገዱን ተከተሉ'},type:'order',vertical:true,
  tip:{en:'Roads and paths connect home, school and the kebele office.',am:'መንገዶች ቤትን፣ ትምህርት ቤትንና የቀበሌ ጽሕፈት ቤትን ያገናኛሉ።'},
  help:{en:'Tap the places in the order you pass them.',am:'ቦታዎቹን በምታልፏቸው ቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'Walk from home to school:',am:'ከቤት ወደ ትምህርት ቤት ሂዱ፦'},items:[{en:'🏠 Leave home',am:'🏠 ከቤት መውጣት'},{en:'🌳 Pass the big tree',am:'🌳 ትልቁን ዛፍ ማለፍ'},{en:'🌉 Cross the bridge',am:'🌉 ድልድዩን መሻገር'},{en:'🏫 Arrive at school',am:'🏫 ትምህርት ቤት መድረስ'}]},
   {prompt:{en:'From school to the kebele office:',am:'ከትምህርት ቤት ወደ ቀበሌ ጽ/ቤት፦'},items:[{en:'🏫 Leave school',am:'🏫 ከትምህርት ቤት መውጣት'},{en:'🛒 Pass the market',am:'🛒 ገበያውን ማለፍ'},{en:'🏢 Reach the kebele office',am:'🏢 ቀበሌ ጽ/ቤት መድረስ'}]}]},
 {title:{en:'My neighbours',am:'ጎረቤቶቼ'},type:'quiz',
  tip:{en:'Neighbours live near us. We can say where their homes are: left, right, in front, behind.',am:'ጎረቤቶች በአጠገባችን ይኖራሉ። ቤታቸው የት እንዳለ መናገር እንችላለን፦ ግራ፣ ቀኝ፣ ፊት ለፊት፣ ኋላ።'},
  items:[{fig:row(['🏠','🏡','🏘️']),q:{en:'Our home is 🏡 in the middle. Almaz lives in 🏘️. Where is her home?',am:'ቤታችን 🏡 መካከል ያለው ነው። አልማዝ የምትኖረው 🏘️ ውስጥ ነው። ቤቷ የት ነው?'},o:[{en:'On the right of our home',am:'ከቤታችን በስተቀኝ'},{en:'On the left of our home',am:'ከቤታችን በስተግራ'}],a:0},
   {q:{en:'Why is it good to know our neighbours?',am:'ጎረቤቶቻችንን ማወቅ ለምን ይጠቅማል?'},o:[{en:'We help each other',am:'እንረዳዳለን'},{en:'It is not good',am:'አይጠቅምም'}],a:0}]},
 {type:'exam',items:[
  {q:{en:'We usually write with the…',am:'በአብዛኛው የምንጽፈው በ…'},o:[{en:'right hand',am:'ቀኝ እጅ'},{en:'foot',am:'እግር'}],a:0},
  {fig:row(['🐕','🧒','🐐']),q:{en:'As you look, what is on the right of the child?',am:'ስትመለከቱ ከልጁ በስተቀኝ ያለው ምንድን ነው?'},o:[{en:'🐐 Goat',am:'🐐 ፍየል'},{en:'🐕 Dog',am:'🐕 ውሻ'}],a:0},
  {q:{en:'Your back is…',am:'ጀርባችሁ…'},o:[{en:'behind you',am:'ከኋላችሁ'},{en:'in front of you',am:'ከፊታችሁ'}],a:0},
  {q:{en:'What connects home and school?',am:'ቤትንና ትምህርት ቤትን የሚያገናኘው?'},o:[{en:'Roads and paths',am:'መንገዶች'},{en:'Clouds',am:'ደመና'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Location tells where something is. We use left, right, in front and behind to describe places.',am:'መገኛ አንድ ነገር የት እንዳለ ይናገራል። ቦታዎችን ለመግለጽ ግራ፣ ቀኝ፣ ፊት ለፊትና ኋላ እንጠቀማለን።'},
  points:[{en:'Our surroundings are the places and things around us.',am:'አካባቢ በዙሪያችን ያሉ ቦታዎችና ነገሮች ናቸው።'},{en:'Directions: left, right, in front, behind.',am:'አቅጣጫዎች፦ ግራ፣ ቀኝ፣ ፊት ለፊት፣ ኋላ።'},{en:'Roads connect home, school and the kebele.',am:'መንገዶች ቤትን፣ ትምህርት ቤትንና ቀበሌን ያገናኛሉ።'},{en:'Know where your neighbours live; we help each other.',am:'ጎረቤቶቻችሁ የት እንደሚኖሩ እወቁ፤ እንረዳዳለን።'}],
  words:[['መገኛ',{en:'location',am:'አንድ ነገር ያለበት ቦታ'}],['አቅጣጫ',{en:'direction',am:'ግራ፣ ቀኝ፣ ፊት፣ ኋላ'}],['ጎረቤት',{en:'neighbour',am:'በአጠገባችን የሚኖር'}]],
  remember:{en:'Right hand up! Left hand up! Turn around: now your front is your back!',am:'ቀኝ እጅ ወደ ላይ! ግራ እጅ ወደ ላይ! ዞር በሉ፦ አሁን ፊታችሁ ጀርባ ሆነ!'},
  exam:[[{en:'What is on your right in class?',am:'በክፍል ውስጥ በቀኛችሁ ያለው ምንድን ነው?'},{en:'Say what you see',am:'የምታዩትን ተናገሩ'}],[{en:'Describe the way from home to school',am:'ከቤት ወደ ትምህርት ቤት ያለውን መንገድ ግለጹ'},{en:'e.g. past the tree, over the bridge',am:'ለምሳሌ ዛፉን አልፎ፣ ድልድዩን ተሻግሮ'}]],
  innovate:{title:{en:'My village map',am:'የመንደሬ ካርታ'},text:{en:'Map-makers help people find their way. Draw a map of your home, school and neighbours with arrows and labels.',am:'ካርታ ሠሪዎች ሰዎች መንገዳቸውን እንዲያገኙ ይረዳሉ። ቤታችሁን፣ ትምህርት ቤታችሁንና ጎረቤቶቻችሁን በቀስትና በስም ያሳየ ካርታ ሳሉ።'},
   steps:[{en:'Draw your home in the middle.',am:'ቤታችሁን መካከል ላይ ሳሉ።'},{en:'Draw neighbours on the left and right.',am:'ጎረቤቶችን በግራና በቀኝ ሳሉ።'},{en:'Draw the road to school with arrows.',am:'ወደ ትምህርት ቤት የሚወስደውን መንገድ በቀስት ሳሉ።'},{en:'Explain the way to a friend.',am:'መንገዱን ለጓደኛችሁ አስረዱ።'}]}}}
 ]});
})();
