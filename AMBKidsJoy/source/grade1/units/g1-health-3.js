/* 1ኛ ክፍል ጤናና ሰ/ማጎልመሻ · ምዕራፍ 3 · ማህበራዊ መስተጋብርና ስሜታዊነት */
(function(){
const SN={en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'};
Unit.start({id:'g1-health-3',grade:1,subject:'health',subjectName:SN,chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Games for feelings and friendship',am:'ማህበራዊ መስተጋብርና ስሜታዊነት'},
 footer:{en:'Built on the Grade 1 Health & PE student book, Chapter 3: games for self-control, getting along with others, and decision-making.',am:'በ1ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ 3 ላይ የተመሰረተ፦ ራስን የመቆጣጠር፣ ማህበራዊ ግንኙነትንና ውሳኔ ሰጭነትን የሚያዳብሩ ጨዋታዎች።'},
 missions:[
 {title:{en:'How do I feel?',am:'ምን ይሰማኛል?'},type:'match',
  tip:{en:'Everyone has feelings. Naming them helps us control them.',am:'ሁሉም ሰው ስሜት አለው። ስሜትን መሰየም እንድንቆጣጠረው ይረዳናል።'},
  rounds:[[['😊',{en:'happy',am:'ደስተኛ'}],['😢',{en:'sad',am:'ያዘነ'}],['😠',{en:'angry',am:'የተናደደ'}],['😨',{en:'scared',am:'የፈራ'}]]]},
 {title:{en:'Calm down steps',am:'የመረጋጋት ደረጃዎች'},type:'order',vertical:true,
  tip:{en:'When you are angry in a game: stop, breathe, then talk.',am:'በጨዋታ ስትናደዱ፦ ቁሙ፣ በረጅሙ ተንፍሱ፣ ከዚያ ተነጋገሩ።'},
  help:{en:'Tap the steps in order.',am:'ደረጃዎቹን በቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'When I feel angry:',am:'ስናደድ፦'},items:[{en:'✋ Stop',am:'✋ ቁም'},{en:'🌬️ Breathe in slowly 3 times',am:'🌬️ 3 ጊዜ በቀስታ ተንፍስ'},{en:'🗣️ Say how I feel',am:'🗣️ የሚሰማኝን ልናገር'},{en:'🤝 Fix it together',am:'🤝 በጋራ እናስተካክል'}]}]},
 {title:{en:'Our traditional games',am:'ባህላዊ ጨዋታዎቻችን'},type:'match',
  tip:{en:'Traditional games teach us to wait our turn, cooperate and decide quickly.',am:'ባህላዊ ጨዋታዎች ተራ መጠበቅን፣ መተባበርንና በፍጥነት መወሰንን ያስተምሩናል።'},
  rounds:[[[{en:'🙈 Akukulu',am:'🙈 አኩኩሉ'},{en:'hide, then the seeker finds you',am:'መደበቅ፤ ፈላጊው ያገኛችኋል'}],[{en:'🐭🐱 Mouse and cat',am:'🐭🐱 አይጥና ድመት'},{en:'the circle protects the mouse',am:'ክቡ አይጧን ይጠብቃል'}],[{en:'🧣 Mahirebe',am:'🧣 መሀረቤን ያያችሁ'},{en:'drop a cloth behind someone, run around the circle',am:'ከአንዱ ጀርባ መሀረብ ጥሎ በክቡ ዙሪያ መሮጥ'}]],
   [[{en:'🏠 Bet yeleš',am:'🏠 ቤት የለሽ'},{en:'find a "house" before others',am:'ከሌሎች በፊት "ቤት" ማግኘት'}],[{en:'🪨 Stone picking',am:'🪨 ጠጠር ለቀማ'},{en:'pick up stones quickly and fairly',am:'ጠጠሮችን በፍጥነትና በታማኝነት መልቀም'}],[{en:'📅 Segno-Maksegno',am:'📅 ሰኞ-ማክሰኞ'},{en:'hop through the boxes in order',am:'በሳጥኖቹ ውስጥ በቅደም ተከተል መንጠር'}]]]},
 {title:{en:'Good player?',am:'ጥሩ ተጫዋች?'},type:'sort',
  tip:{en:'Good players follow rules, wait their turn and are kind when they win or lose.',am:'ጥሩ ተጫዋቾች ሕግ ያከብራሉ፣ ተራቸውን ይጠብቃሉ፣ ሲያሸንፉም ሲሸነፉም ደግ ናቸው።'},
  buckets:[{en:'😊 Good player',am:'😊 ጥሩ ተጫዋች'},{en:'🙁 Needs to change',am:'🙁 መለወጥ ያለበት'}],
  items:[{t:{en:'Waits for their turn',am:'ተራውን ይጠብቃል'},b:0},{t:{en:'Says "well done" to the winner',am:'አሸናፊውን "ጎበዝ" ይላል'},b:0},{t:{en:'Lets new children join',am:'አዳዲስ ልጆች እንዲቀላቀሉ ይፈቅዳል'},b:0},{t:{en:'Cheats to win',am:'ለማሸነፍ ያጭበረብራል'},b:1},{t:{en:'Cries and quits when losing',am:'ሲሸነፍ እያለቀሰ ያቆማል'},b:1},{t:{en:'Pushes others',am:'ሌሎችን ይገፋል'},b:1}]},
 {title:{en:'Make a choice',am:'ውሳኔ ስጡ'},type:'quiz',
  tip:{en:'Games help us decide quickly and wisely.',am:'ጨዋታዎች በፍጥነትና በብልሃት እንድንወስን ይረዱናል።'},
  items:[{q:{en:'Two friends want the same ball. Best idea?',am:'ሁለት ጓደኛሞች አንድ ኳስ ይፈልጋሉ። ምርጡ ሐሳብ?'},o:[{en:'Take turns or play together',am:'በተራ ወይም አብሮ መጫወት'},{en:'Fight for it',am:'መጣላት'}],a:0},
   {q:{en:'You see a child sitting alone and sad.',am:'ብቻውን አዝኖ የተቀመጠ ልጅ አያችሁ።'},o:[{en:'Ask them to play with you',am:'አብሮ እንዲጫወት መጠየቅ'},{en:'Ignore them',am:'ችላ ማለት'}],a:0}]},
 {type:'exam',items:[
  {q:{en:'😠 means…',am:'😠 ማለት…'},o:[{en:'angry',am:'የተናደደ'},{en:'happy',am:'ደስተኛ'}],a:0},
  {q:{en:'When angry, first…',am:'ስትናደዱ መጀመሪያ…'},o:[{en:'stop and breathe',am:'ቁሙና ተንፍሱ'},{en:'hit someone',am:'ሰው ምቱ'}],a:0},
  {q:{en:'A good player…',am:'ጥሩ ተጫዋች…'},o:[{en:'waits for their turn',am:'ተራውን ይጠብቃል'},{en:'cheats',am:'ያጭበረብራል'}],a:0},
  {q:{en:'Akukulu is a game of…',am:'አኩኩሉ… ጨዋታ ነው'},o:[{en:'hide and seek',am:'መደበቅና መፈለግ'},{en:'swimming',am:'ዋና'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Games teach us to know our feelings, control ourselves, get along and make good choices.',am:'ጨዋታዎች ስሜታችንን እንድናውቅ፣ ራሳችንን እንድንቆጣጠር፣ ከሌሎች ጋር እንድንግባባና ጥሩ ውሳኔ እንድንሰጥ ያስተምሩናል።'},
  points:[{en:'Feelings: happy, sad, angry, scared. Name them.',am:'ስሜቶች፦ ደስታ፣ ሐዘን፣ ንዴት፣ ፍርሃት። ሰይሟቸው።'},{en:'Calm down: stop, breathe, talk, fix it together.',am:'ተረጋጉ፦ ቁሙ፣ ተንፍሱ፣ ተነጋገሩ፣ በጋራ አስተካክሉ።'},{en:'Traditional games: Akukulu, Mouse and cat, Mahirebe, Bet yeleš.',am:'ባህላዊ ጨዋታዎች፦ አኩኩሉ፣ አይጥና ድመት፣ መሀረቤን ያያችሁ፣ ቤት የለሽ።'},{en:'Good players follow rules and are kind.',am:'ጥሩ ተጫዋቾች ሕግ ያከብራሉ፤ ደግ ናቸው።'}],
  words:[['ስሜት',{en:'feeling',am:'ደስታ፣ ሐዘን…'}],['ተራ',{en:'turn',am:'የእኔ ጊዜ'}],['ውሳኔ',{en:'decision',am:'መምረጥ'}]],
  remember:{en:'Win with kindness, lose with a smile.',am:'በደግነት አሸንፉ፣ በፈገግታ ተሸነፉ።'},
  exam:[[{en:'Show 4 feelings with your face',am:'4 ስሜቶችን በፊታችሁ አሳዩ'},'😊 😢 😠 😨'],[{en:'Explain one traditional game',am:'አንድ ባህላዊ ጨዋታ አብራሩ'},{en:'e.g. Akukulu: hide and seek',am:'ለምሳሌ አኩኩሉ፦ መደበቅና መፈለግ'}]],
  innovate:{title:{en:'Feelings chart',am:'የስሜት ሰንጠረዥ'},text:{en:'Make a class chart where children put their name card on the face that shows how they feel today, and friends help those who are sad.',am:'ልጆች ዛሬ የሚሰማቸውን የሚያሳይ ፊት ላይ የስም ካርዳቸውን የሚያደርጉበት የክፍል ሰንጠረዥ ሥሩ፤ ጓደኞች ያዘኑትን ይረዳሉ።'},
   steps:[{en:'Draw 4 faces: happy, sad, angry, scared.',am:'4 ፊቶችን ሳሉ፦ ደስተኛ፣ ያዘነ፣ የተናደደ፣ የፈራ።'},{en:'Make a name card for each child.',am:'ለእያንዳንዱ ልጅ የስም ካርድ ሥሩ።'},{en:'Each morning, put your card on a face.',am:'በየጠዋቱ ካርዳችሁን በአንድ ፊት ላይ አድርጉ።'},{en:'Help a friend who feels sad.',am:'ያዘነ ጓደኛችሁን እርዱ።'}]}}}
 ]});
})();
