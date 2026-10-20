/* 1ኛ ክፍል ጤናና ሰ/ማጎልመሻ · ምዕራፍ 1 · መሠረታዊ የእንቅስቃሴ ክህሎት */
(function(){
const SN={en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'};
Unit.start({id:'g1-health-1',grade:1,subject:'health',subjectName:SN,chapter:{en:'Chapter 1',am:'ምዕራፍ 1'},
 title:{en:'Basic movement skills',am:'መሠረታዊ የእንቅስቃሴ ክህሎት'},
 footer:{en:'Built on the Grade 1 Health & PE student book, Chapter 1: walking, running, jumping, hopping, sliding, stretching, ball skills and kicking.',am:'በ1ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ 1 ላይ የተመሰረተ፦ መራመድ፣ መሮጥ፣ መዝለል፣ መንጠር፣ መንሸራተት፣ መሳሳብ፣ የኳስ ክህሎትና ኳስ መምታት።'},
 missions:[
 {title:{en:'Name the movement',am:'እንቅስቃሴውን ሰይሙ'},type:'match',
  tip:{en:'We move from place to place by walking, running, jumping, hopping and sliding.',am:'ከቦታ ቦታ የምንንቀሳቀሰው በመራመድ፣ በመሮጥ፣ በመዝለል፣ በመንጠርና በመንሸራተት ነው።'},
  rounds:[[[{en:'🚶 Walk',am:'🚶 መራመድ'},{en:'one foot always on the ground',am:'አንድ እግር ሁልጊዜ መሬት ላይ'}],[{en:'🏃 Run',am:'🏃 መሮጥ'},{en:'fast steps, both feet leave the ground',am:'ፈጣን እርምጃ፣ ሁለቱም እግሮች ከመሬት ይነሳሉ'}],[{en:'🦘 Jump',am:'🦘 መዝለል'},{en:'take off and land on two feet',am:'በሁለት እግር ተነስቶ በሁለት እግር ማረፍ'}]],
   [[{en:'🦩 Hop',am:'🦩 መንጠር'},{en:'jump on one foot',am:'በአንድ እግር መዝለል'}],[{en:'↔️ Slide',am:'↔️ መንሸራተት'},{en:'step sideways, feet close together',am:'ወደ ጎን እግርን እያገጣጠሙ መሄድ'}],[{en:'⚽ Kick',am:'⚽ መምታት'},{en:'hit a ball with the foot',am:'ኳስን በእግር መምታት'}]]]},
 {title:{en:'Walk the shapes',am:'በቅርጾች ላይ መራመድ'},type:'quiz',
  tip:{en:'Walk on lines drawn on the ground: straight, square, circle and zigzag.',am:'መሬት ላይ በተሳሉ መስመሮች ላይ ተራመዱ፦ ቀጥ ያለ፣ አራት ማዕዘን፣ ክብና ዚግዛግ።'},
  items:[{fig:'<svg viewBox="0 0 200 60" width="220"><polyline points="10,50 50,10 90,50 130,10 170,50" fill="none" stroke="var(--accent)" stroke-width="6" stroke-linecap="round"/></svg>',q:{en:'Which line is this?',am:'ይህ የትኛው መስመር ነው?'},o:[{en:'Zigzag',am:'ዚግዛግ'},{en:'Circle',am:'ክብ'},{en:'Straight',am:'ቀጥ ያለ'}],a:0},
   {fig:'<svg viewBox="0 0 100 100" width="110"><circle cx="50" cy="50" r="40" fill="none" stroke="var(--accent)" stroke-width="6"/></svg>',q:{en:'Which line is this?',am:'ይህ የትኛው መስመር ነው?'},o:[{en:'Circle',am:'ክብ'},{en:'Square',am:'አራት ማዕዘን'}],a:0},
   {q:{en:'When walking we keep our head…',am:'ስንራመድ ራሳችንን…'},o:[{en:'up, looking ahead',am:'ቀና አድርገን ወደ ፊት እያየን'},{en:'down at our shoes',am:'ወደ ጫማችን አቀርቅረን'}],a:0}]},
 K1.moveMission({en:'Move with me!',am:'ከእኔ ጋር ተንቀሳቀሱ!'},{en:'Find a safe space. Do each move and tap the button each time.',am:'ደህና ቦታ ፈልጉ። እያንዳንዱን እንቅስቃሴ ሥሩና በእያንዳንዱ ጊዜ አዝራሩን ንኩ።'},[
  {pose:'jog',en:'Run on the spot',am:'በቦታ ላይ ሩጡ',n:10},{pose:'up',en:'Jump up like a kangaroo',am:'እንደ ካንጋሮ ወደ ላይ ዝለሉ',n:5},{pose:'stand',en:'Hop on one foot',am:'በአንድ እግር ንጠሩ',n:5},{pose:'side',en:'Slide left, then right',am:'ወደ ግራ፣ ከዚያ ወደ ቀኝ ተንሸራተቱ',n:4}]),
 {title:{en:'Kick the ball',am:'ኳስ መምታት'},type:'order',vertical:true,
  tip:{en:'Good kicking: look, step, swing, kick with the inside of your foot.',am:'ጥሩ ምት፦ ተመልከቱ፣ ተራመዱ፣ እግራችሁን አወዛውዙ፣ በእግራችሁ ውስጠኛ ክፍል ምቱ።'},
  help:{en:'Tap the steps in order.',am:'ደረጃዎቹን በቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'Kicking steps:',am:'የመምታት ደረጃዎች፦'},items:[{en:'👀 Look at the ball',am:'👀 ኳሱን ተመልከቱ'},{en:'🦶 Put your other foot beside the ball',am:'🦶 ሌላውን እግር ከኳሱ አጠገብ አድርጉ'},{en:'🦵 Swing your kicking leg back',am:'🦵 የምትመቱበትን እግር ወደ ኋላ አወዛውዙ'},{en:'⚽ Kick and follow through',am:'⚽ ምቱና እግራችሁን አስቀጥሉ'}]}]},
 {title:{en:'Play safe',am:'በደህንነት ተጫወቱ'},type:'sort',
  tip:{en:'Before exercise: safe clothes, safe place, warm up.',am:'ከእንቅስቃሴ በፊት፦ ተስማሚ ልብስ፣ ደህና ቦታ፣ ማሟሟቅ።'},
  buckets:[{en:'✅ Safe',am:'✅ ደህና'},{en:'⚠️ Unsafe',am:'⚠️ አደገኛ'}],
  items:[{t:{en:'Warm up first',am:'መጀመሪያ ማሟሟቅ'},b:0},{t:{en:'Play on a clear field',am:'ንጹህ ሜዳ ላይ መጫወት'},b:0},{t:{en:'Drink water after playing',am:'ከጨዋታ በኋላ ውኃ መጠጣት'},b:0},{t:{en:'Run on stones and broken glass',am:'በድንጋይና በተሰበረ ጠርሙስ ላይ መሮጥ'},b:1},{t:{en:'Push friends while running',am:'እየሮጡ ጓደኛን መግፋት'},b:1}]},
 {type:'exam',items:[
  {q:{en:'Jumping on ONE foot is called…',am:'በአንድ እግር መዝለል ምን ይባላል?'},o:[{en:'hopping',am:'መንጠር'},{en:'walking',am:'መራመድ'}],a:0},
  {q:{en:'Moving sideways with feet together is…',am:'እግርን እያገጣጠሙ ወደ ጎን መሄድ…'},o:[{en:'sliding',am:'መንሸራተት'},{en:'kicking',am:'መምታት'}],a:0},
  {q:{en:'Before exercise we…',am:'ከእንቅስቃሴ በፊት…'},o:[{en:'warm up',am:'እናሟሙቃለን'},{en:'sleep',am:'እንተኛለን'}],a:0},
  {q:{en:'We kick a ball with our…',am:'ኳስ የምንመታው በ…'},o:[{en:'foot',am:'እግር'},{en:'head only',am:'ራስ ብቻ'}],a:0},
  {q:{en:'Exercise makes our muscles…',am:'እንቅስቃሴ ጡንቻዎቻችንን…'},o:[{en:'strong',am:'ያጠነክራል'},{en:'weak',am:'ያደክማል'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Our body can move in many ways. Practising basic movements makes us strong, quick and healthy.',am:'ሰውነታችን በብዙ መንገድ ይንቀሳቀሳል። መሠረታዊ እንቅስቃሴዎችን መለማመድ ጠንካራ፣ ፈጣንና ጤናማ ያደርገናል።'},
  points:[{en:'Moving from place to place: walk, run, jump, hop, slide.',am:'ከቦታ ቦታ መንቀሳቀስ፦ መራመድ፣ መሮጥ፣ መዝለል፣ መንጠር፣ መንሸራተት።'},{en:'Moves on the spot: stretch, bend, twist, bounce a ball.',am:'በቦታ ላይ፦ መሳሳብ፣ ማጠፍ፣ መጠማዘዝ፣ ኳስ ማንጠር።'},{en:'Kick a ball: look, step, swing, kick.',am:'ኳስ መምታት፦ ማየት፣ መራመድ፣ ማወዛወዝ፣ መምታት።'},{en:'Play safe: warm up, clear field, water.',am:'በደህንነት ተጫወቱ፦ ማሟሟቅ፣ ንጹህ ሜዳ፣ ውኃ።'}],
  words:[['መንጠር',{en:'hop',am:'በአንድ እግር መዝለል'}],['መንሸራተት',{en:'slide',am:'ወደ ጎን መሄድ'}],['ማሟሟቅ',{en:'warm up',am:'ሰውነትን ማዘጋጀት'}]],
  remember:{en:'Move every day for at least one hour!',am:'በየቀኑ ቢያንስ ለአንድ ሰዓት ተንቀሳቀሱ!'},
  exam:[[{en:'Show 3 ways to move',am:'3 የመንቀሳቀሻ መንገዶችን አሳዩ'},'መራመድ፣ መሮጥ፣ መዝለል'],[{en:'Hop 5 times on each foot',am:'በእያንዳንዱ እግር 5 ጊዜ ንጠሩ'},{en:'Do it!',am:'ሥሩት!'}]],
  innovate:{title:{en:'Sock ball',am:'የካልሲ ኳስ'},text:{en:'No ball? Make one! Stuff old socks with plastic bags and cloth, tie it tight, and invent a kicking game.',am:'ኳስ የላችሁም? ሥሩ! አሮጌ ካልሲዎችን በፌስታልና በጨርቅ ሙሉ፣ አጥብቃችሁ እሰሩ፤ የመምታት ጨዋታ ፍጠሩ።'},
   steps:[{en:'Collect old socks, cloth and plastic bags.',am:'አሮጌ ካልሲ፣ ጨርቅና ፌስታል ሰብስቡ።'},{en:'Roll them into a tight ball.',am:'አጥብቃችሁ ኳስ አድርጉ።'},{en:'Cover with a sock and tie with string.',am:'በካልሲ ሸፍኑና በገመድ እሰሩ።'},{en:'Invent a game with rules and teach it.',am:'ሕግ ያለው ጨዋታ ፍጠሩና አስተምሩ።'}]}}}
 ]});
})();
