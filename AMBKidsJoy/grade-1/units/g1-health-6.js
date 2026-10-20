/* 1ኛ ክፍል ጤናና ሰ/ማጎልመሻ · ምዕራፍ 6 · የኢትዮጵያ ባህላዊ ጭፈራና ጨዋታዎች */
(function(){
const SN={en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'};
Unit.start({id:'g1-health-6',grade:1,subject:'health',subjectName:SN,chapter:{en:'Chapter 6',am:'ምዕራፍ 6'},
 title:{en:'Ethiopian traditional dances and games',am:'የኢትዮጵያ ባህላዊ ጭፈራና ጨዋታዎች'},
 footer:{en:'Built on the Grade 1 Health & PE student book, Chapter 6: traditional dances and games of our area for girls, boys and everyone.',am:'በ1ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ 6 ላይ የተመሰረተ፦ በአካባቢያችን የሚዘወተሩ የሴቶች፣ የወንዶችና የሁሉም ባህላዊ ጭፈራዎችና ጨዋታዎች።'},
 missions:[
 {title:{en:'Dances of our area',am:'የአካባቢያችን ጭፈራዎች'},type:'match',
  tip:{en:'Traditional dances show who we are. They also exercise our shoulders, arms, legs and tummy!',am:'ባህላዊ ጭፈራዎች ማንነታችንን ያሳያሉ። ትከሻን፣ እጅን፣ እግርንና ሆድን ያንቀሳቅሳሉ!'},
  rounds:[[[{en:'💃 Eskista',am:'💃 እስክስታ'},{en:'shoulder dance of the Amhara',am:'የአማራ የትከሻ ጭፈራ'}],[{en:'🌼 Ashenda',am:'🌼 አሸንድዬ'},{en:'girls sing and dance in August',am:'ሴቶች በነሐሴ ይዘፍናሉ፣ ይጨፍራሉ'}],[{en:'🔥 Buhe (Hoya hoye)',am:'🔥 ቡሄ (ሆያ ሆዬ)'},{en:'boys sing from house to house',am:'ወንዶች ቤት ለቤት ይዘፍናሉ'}],[{en:'🌻 Abebayehosh',am:'🌻 አበባዬ ሆይ'},{en:'girls\' New Year song',am:'የሴቶች የአዲስ ዓመት ዘፈን'}]]]},
 {title:{en:'Traditional games',am:'ባህላዊ ጨዋታዎች'},type:'quiz',
  tip:{en:'Our grandparents played these games too. They need speed, skill and fair play.',am:'አያቶቻችንም እነዚህን ጨዋታዎች ይጫወቱ ነበር። ፍጥነት፣ ክህሎትና ታማኝነት ይፈልጋሉ።'},
  items:[{q:{en:'Which game is played with small stones thrown and caught?',am:'ትናንሽ ጠጠሮችን እየወረወሩ የሚቀልቡበት ጨዋታ?'},o:[{en:'Stone picking (ጠጠር ለቀማ)',am:'ጠጠር ለቀማ'},{en:'Swimming',am:'ዋና'}],a:0},
   {q:{en:'Which game is played on a board with holes and seeds?',am:'ጉድጓድ ባለው ሰሌዳና በጠጠር/ፍሬ የሚጫወቱት?'},o:[{en:'Gebeta',am:'ገበጣ'},{en:'Football',am:'እግር ኳስ'}],a:0},
   {q:{en:'Genna is played with…',am:'ገና የሚጫወቱት በ…'},o:[{en:'curved sticks and a small ball',am:'ጎባጣ ዱላና ትንሽ ሩር'},{en:'a rope',am:'ገመድ'}],a:0},
   {q:{en:'Why play traditional games?',am:'ባህላዊ ጨዋታዎችን ለምን እንጫወታለን?'},o:[{en:'Fun, fitness and keeping our culture',am:'ለደስታ፣ ለአካል ብቃትና ባህላችንን ለመጠበቅ'},{en:'To fight',am:'ለመጣላት'}],a:0}]},
 K1.moveMission({en:'Eskista practice',am:'የእስክስታ ልምምድ'},{en:'Stand tall, relax your shoulders and move them up and down to the beat.',am:'ቀጥ ብላችሁ ቁሙ፣ ትከሻችሁን አላሉና በምቱ ወደ ላይና ወደ ታች አንቀሳቅሱ።'},[
  {e:'🕺',en:'Bounce your shoulders up and down',am:'ትከሻችሁን ወደ ላይና ወደ ታች አንቀሳቅሱ',n:8},{e:'👏',en:'Clap and step side to side',am:'አጨብጭቡና ወደ ጎን ውጡ',n:6},{e:'💃',en:'Turn around slowly',am:'በቀስታ ዙሩ',n:2}]),
 {title:{en:'Everyone can play',am:'ሁሉም መጫወት ይችላል'},type:'sort',
  tip:{en:'Some dances are for girls, some for boys, and many are for everyone. Respect them all!',am:'አንዳንድ ጭፈራዎች የሴቶች፣ አንዳንዶቹ የወንዶች፣ ብዙዎቹ ደግሞ የሁሉም ናቸው። ሁሉንም አክብሩ!'},
  buckets:[{en:'👧 Girls',am:'👧 ሴቶች'},{en:'👦 Boys',am:'👦 ወንዶች'},{en:'👫 Everyone',am:'👫 ሁሉም'}],
  items:[{t:{en:'Ashenda',am:'አሸንድዬ'},b:0},{t:{en:'Abebayehosh',am:'አበባዬ ሆይ'},b:0},{t:{en:'Buhe (Hoya hoye)',am:'ቡሄ (ሆያ ሆዬ)'},b:1},{t:{en:'Genna',am:'ገና'},b:1},{t:{en:'Eskista',am:'እስክስታ'},b:2},{t:{en:'Akukulu',am:'አኩኩሉ'},b:2}]},
 {type:'exam',items:[
  {q:{en:'Eskista is a dance of the…',am:'እስክስታ የ… ጭፈራ ነው'},o:[{en:'shoulders',am:'ትከሻ'},{en:'fingers only',am:'ጣት ብቻ'}],a:0},
  {q:{en:'Ashenda is celebrated by…',am:'አሸንድዬን የሚያከብሩት…'},o:[{en:'girls',am:'ሴቶች'},{en:'only old men',am:'ሽማግሌዎች ብቻ'}],a:0},
  {q:{en:'Gebeta is played with…',am:'ገበጣ የሚጫወቱት በ…'},o:[{en:'a board with holes and seeds',am:'ጉድጓድ ያለው ሰሌዳና ፍሬ'},{en:'a ball',am:'ኳስ'}],a:0},
  {q:{en:'Traditional dances are good for…',am:'ባህላዊ ጭፈራዎች የሚጠቅሙት ለ…'},o:[{en:'health and culture',am:'ለጤናና ለባህል'},{en:'nothing',am:'ለምንም'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Traditional dances and games show our culture and keep us fit and happy together.',am:'ባህላዊ ጭፈራዎችና ጨዋታዎች ባህላችንን ያሳያሉ፤ ብቁና በአንድነት ደስተኛ ያደርጉናል።'},
  points:[{en:'Dances of our area: Eskista, Ashenda, Buhe (Hoya hoye), Abebayehosh.',am:'የአካባቢያችን ጭፈራዎች፦ እስክስታ፣ አሸንድዬ፣ ቡሄ (ሆያ ሆዬ)፣ አበባዬ ሆይ።'},{en:'Games: Gebeta, stone picking, Genna, Akukulu.',am:'ጨዋታዎች፦ ገበጣ፣ ጠጠር ለቀማ፣ ገና፣ አኩኩሉ።'},{en:'Dancing exercises shoulders, arms, legs and tummy.',am:'ጭፈራ ትከሻን፣ እጅን፣ እግርንና ሆድን ያንቀሳቅሳል።'},{en:'Respect every culture\'s dances and games.',am:'የሁሉንም ባህል ጭፈራዎችና ጨዋታዎች አክብሩ።'}],
  words:[['ባህላዊ',{en:'traditional',am:'ከአያቶች የመጣ'}],['ጭፈራ',{en:'dance',am:'በምት መንቀሳቀስ'}],['ገበጣ',{en:'gebeta (board game)',am:'የሰሌዳ ጨዋታ'}]],
  remember:{en:'Our culture is our wealth: dance it, play it, share it!',am:'ባህላችን ሀብታችን ነው፦ ጨፍሩት፣ ተጫወቱት፣ አጋሩት!'},
  exam:[[{en:'Name 2 dances and 2 games of our area',am:'የአካባቢያችንን 2 ጭፈራዎችና 2 ጨዋታዎች ጥቀሱ'},'እስክስታ፣ አሸንድዬ / ገበጣ፣ ገና'],[{en:'Show an Eskista shoulder move',am:'የእስክስታ የትከሻ እንቅስቃሴ አሳዩ'},{en:'Do it!',am:'አሳዩ!'}]],
  innovate:{title:{en:'Make your own gebeta',am:'የራሳችሁን ገበጣ ሥሩ'},text:{en:'Make a gebeta board from an egg tray or holes in the ground, play with seeds, and teach the game to a friend. Craftspeople sell carved gebeta boards!',am:'ከእንቁላል ትሪ ወይም መሬት ላይ ከተቆፈሩ ጉድጓዶች ገበጣ ሥሩ፣ በፍሬ ተጫወቱ፣ ጨዋታውን ለጓደኛችሁ አስተምሩ። የእጅ ባለሙያዎች የተቀረጹ ገበጣዎችን ይሸጣሉ!'},
   steps:[{en:'Use an egg tray with 2 rows of 6 cups.',am:'2 ረድፍ በ6 ጉድጓድ ያለው የእንቁላል ትሪ ተጠቀሙ።'},{en:'Put 4 seeds in each cup.',am:'በእያንዳንዱ ጉድጓድ 4 ፍሬ አድርጉ።'},{en:'Learn the rules from a grandparent.',am:'ሕጉን ከአያቶቻችሁ ተማሩ።'},{en:'Play and count the seeds you win.',am:'ተጫወቱና ያሸነፋችሁትን ፍሬ ቁጠሩ።'}]}}}
 ]});
})();
