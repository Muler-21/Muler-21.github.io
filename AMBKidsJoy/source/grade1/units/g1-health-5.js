/* 1ኛ ክፍል ጤናና ሰ/ማጎልመሻ · ምዕራፍ 5 · ጅምናስቲክስ */
(function(){
const SN={en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'};
Unit.start({id:'g1-health-5',grade:1,subject:'health',subjectName:SN,chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Gymnastics',am:'ጅምናስቲክስ'},
 footer:{en:'Built on the Grade 1 Health & PE student book, Chapter 5: basic gymnastics, balancing and upper-body (calisthenics) exercises.',am:'በ1ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ 5 ላይ የተመሰረተ፦ መሠረታዊ ጅምናስቲክስ፣ ሚዛን መጠበቅና ከወገብ በላይ የሚሠሩ እንቅስቃሴዎች።'},
 missions:[
 K1.moveMission({en:'Balance like a stork',am:'እንደ ሽመላ ሚዛን ጠብቁ'},{en:'Balance means keeping your body steady. Stand on one foot and count to 5 each time.',am:'ሚዛን መጠበቅ ሰውነትን ሳይወድቁ መቆጣጠር ነው። በአንድ እግር ቁሙና በእያንዳንዱ ጊዜ እስከ 5 ቁጠሩ።'},[
  {pose:'side',en:'One foot, arms out to the sides (count to 5)',am:'በአንድ እግር፣ እጅ ወደ ጎን ዘርግታችሁ (እስከ 5 ቁጠሩ)',n:3},{pose:'stand',en:'One foot, hands on your waist (count to 5)',am:'በአንድ እግር፣ እጅ ወገብ ላይ (እስከ 5 ቁጠሩ)',n:3},{pose:'sit',en:'Sit and lift both legs (count to 5)',am:'ተቀምጣችሁ ሁለት እግር አንሱ (እስከ 5 ቁጠሩ)',n:3}]),
 K1.moveMission({en:'Arm circles',am:'የእጅ ማሽከርከር'},{en:'Upper-body exercises make arms, shoulders and chest strong.',am:'ከወገብ በላይ የሚሠሩ እንቅስቃሴዎች እጅን፣ ትከሻንና ደረትን ያጠነክራሉ።'},[
  {pose:'side',en:'Arms out, small circles forward',am:'እጅ ዘርግታችሁ ወደ ፊት በትንሹ አሽከርክሩ',n:8},{pose:'side',en:'Small circles backward',am:'ወደ ኋላ አሽከርክሩ',n:8},{pose:'up',en:'Hands on shoulders, push up to the sky',am:'እጅ ትከሻ ላይ፣ ወደ ሰማይ ግፉ',n:6}]),
 {title:{en:'What helps balance?',am:'ሚዛን የሚረዳው ምንድን ነው?'},type:'quiz',
  tip:{en:'Spread your arms, look at one point and tighten your tummy to balance better.',am:'የተሻለ ሚዛን ለመጠበቅ እጃችሁን ዘርጉ፣ አንድ ነጥብ ላይ እዩ፣ ሆዳችሁን አጥብቁ።'},
  items:[{q:{en:'Which helps you balance on one foot?',am:'በአንድ እግር ሚዛን ለመጠበቅ የሚረዳው?'},o:[{en:'Arms out to the sides',am:'እጅን ወደ ጎን መዘርጋት'},{en:'Closing eyes and spinning',am:'ዓይን ጨፍኖ መሽከርከር'}],a:0},
   {q:{en:'Where should you look?',am:'የት ማየት አለባችሁ?'},o:[{en:'At one point in front',am:'ከፊት ባለ አንድ ነጥብ ላይ'},{en:'All around quickly',am:'በፍጥነት ዙሪያውን'}],a:0},
   {q:{en:'Where should we do gymnastics?',am:'ጅምናስቲክስ የት መሥራት አለብን?'},o:[{en:'On soft grass or a mat',am:'ለስላሳ ሳር ወይም ምንጣፍ ላይ'},{en:'On rocks',am:'በድንጋይ ላይ'}],a:0}]},
 {title:{en:'Balance with a friend',am:'ከጓደኛ ጋር ሚዛን'},type:'order',vertical:true,
  tip:{en:'Pairs can balance together on a line or a log: hold hands and walk slowly.',am:'ጥንዶች በመስመር ወይም በግንድ ላይ አብረው ሚዛን መጠበቅ ይችላሉ፦ እጅ ተያይዘው በቀስታ ይሄዳሉ።'},
  help:{en:'Tap the steps in order.',am:'ደረጃዎቹን በቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'Walking on a log together:',am:'በግንድ ላይ አብሮ መራመድ፦'},items:[{en:'🤝 Hold your friend\'s hand',am:'🤝 የጓደኛችሁን እጅ ያዙ'},{en:'🦶 Step onto the log',am:'🦶 ግንዱ ላይ ውጡ'},{en:'👀 Look ahead, arms out',am:'👀 ወደ ፊት እዩ፣ እጅ ዘርጉ'},{en:'🐢 Walk slowly to the end',am:'🐢 በቀስታ እስከ ጫፉ ሂዱ'}]}]},
 {type:'exam',items:[
  {q:{en:'Keeping the body steady is called…',am:'ሰውነትን ሳይወድቁ መቆጣጠር… ይባላል'},o:[{en:'balance',am:'ሚዛን መጠበቅ'},{en:'running',am:'መሮጥ'}],a:0},
  {q:{en:'Arm circles make strong…',am:'እጅ ማሽከርከር… ያጠነክራል'},o:[{en:'shoulders and arms',am:'ትከሻና እጅ'},{en:'ears',am:'ጆሮ'}],a:0},
  {q:{en:'A safe place for gymnastics is…',am:'ለጅምናስቲክስ ደህና ቦታ…'},o:[{en:'soft grass',am:'ለስላሳ ሳር'},{en:'a busy road',am:'የተጨናነቀ መንገድ'}],a:0},
  {q:{en:'To balance, spread your…',am:'ሚዛን ለመጠበቅ… ዘርጉ'},o:[{en:'arms',am:'እጃችሁን'},{en:'books',am:'መጻሕፍታችሁን'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Gymnastics builds balance, strength and control of our body.',am:'ጅምናስቲክስ ሚዛንን፣ ጥንካሬንና ሰውነትን የመቆጣጠር ችሎታን ይገነባል።'},
  points:[{en:'Basic gymnastics: rolling, bending, stretching on soft ground.',am:'መሠረታዊ ጅምናስቲክስ፦ ለስላሳ መሬት ላይ መንከባለል፣ ማጠፍ፣ መሳሳብ።'},{en:'Balance on one foot: arms out, look at one point.',am:'በአንድ እግር ሚዛን፦ እጅ ዘርግቶ አንድ ነጥብ ላይ ማየት።'},{en:'Upper-body moves: arm circles, push up, bend and stretch.',am:'ከወገብ በላይ፦ እጅ ማሽከርከር፣ ወደ ላይ መግፋት፣ ማጠፍና መዘርጋት።'},{en:'Always practise in a safe, soft place.',am:'ሁልጊዜ ደህና፣ ለስላሳ ቦታ ላይ ተለማመዱ።'}],
  words:[['ሚዛን',{en:'balance',am:'ሳይወድቁ መቆም'}],['ጅምናስቲክስ',{en:'gymnastics',am:'የሰውነት ቁጥጥር እንቅስቃሴ'}]],
  remember:{en:'Slow and steady keeps you balanced.',am:'ቀስ ብሎና ተረጋግቶ ሚዛን ይጠበቃል።'},
  exam:[[{en:'Balance on one foot for 10 seconds',am:'ለ10 ሰከንድ በአንድ እግር ቁሙ'},{en:'Arms out, look ahead!',am:'እጅ ዘርጉ፣ ወደ ፊት እዩ!'}],[{en:'Name one upper-body exercise',am:'ከወገብ በላይ አንድ እንቅስቃሴ ጥቀሱ'},'እጅ ማሽከርከር']],
  innovate:{title:{en:'Balance beam from planks',am:'ከጣውላ የሚዛን መለማመጃ'},text:{en:'With an adult, lay a safe plank or a row of bricks on the ground and create balance challenges for your friends.',am:'ከትልቅ ሰው ጋር ደህና ጣውላ ወይም የጡብ ረድፍ መሬት ላይ አንጥፉና ለጓደኞቻችሁ የሚዛን ፈተና ፍጠሩ።'},
   steps:[{en:'Lay a plank flat on soft ground.',am:'ጣውላ ለስላሳ መሬት ላይ አንጥፉ።'},{en:'Walk forwards, then backwards.',am:'ወደ ፊት፣ ከዚያ ወደ ኋላ ተራመዱ።'},{en:'Try carrying a book on your head.',am:'በራሳችሁ ላይ መጽሐፍ ይዛችሁ ሞክሩ።'},{en:'Time each friend and cheer them on.',am:'የእያንዳንዱን ጓደኛ ጊዜ ለኩና አበረታቱ።'}]}}}
 ]});
})();
