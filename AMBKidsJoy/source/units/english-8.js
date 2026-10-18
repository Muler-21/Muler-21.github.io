/* English · Unit 8 · Clean Surrounding */
Unit.start({
 id:'english-8',subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 8',am:'ክፍል 8'},
 title:{en:'Clean Surrounding',am:'ንጹህ አካባቢ (Clean Surrounding)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 8.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 8 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Clean or dirty habits',am:'ንጹህ ወይስ ቆሻሻ ልማድ'},type:'sort',
  tip:{en:'A clean environment keeps us healthy and attracts visitors. Sort each action.',am:'ንጹህ አካባቢ ጤናችንን ይጠብቃል፤ ጎብኚዎችን ይስባል። እያንዳንዱን ተግባር መድቡ።'},
  buckets:['Keeps it clean','Makes it dirty'],
  items:[{t:'Pick up litter',b:0,say:'Pick up litter'},{t:'Use a dustbin',b:0,say:'Use a dustbin'},{t:'Plant flowers',b:0,say:'Plant flowers'},{t:'Throw plastic on the road',b:1,say:'Throw plastic on the road'},{t:'Sweep the classroom',b:0,say:'Sweep the classroom'},{t:'Leave food on the floor',b:1,say:'Leave food on the floor'}]},
 {title:{en:'Wh- questions',am:'Wh- ጥያቄዎች'},type:'match',sayLeft:'',
  tip:{en:'Question words ask for different information. Match each question word with what it asks about.',am:'የጥያቄ ቃላት የተለያየ መረጃ ይጠይቃሉ። እያንዳንዱን የጥያቄ ቃል ከሚጠይቀው ጋር አዛምዱ።'},
  rounds:[[['What','a thing'],['Who','a person'],['Where','a place'],['When','a time'],['Why','a reason'],['How','a way or method']]]},
 {title:{en:'Ask the right question',am:'ትክክለኛውን ጥያቄ ጠይቁ'},type:'quiz',
  tip:{en:'Look at the answer, then choose the correct question word.',am:'መልሱን እዩ፤ ከዚያ ትክክለኛውን የጥያቄ ቃል ምረጡ።'},
  items:[
   {q:'___ animals are there in your area? — Cows, sheep and goats.',o:['What','Who','When'],a:0},
   {q:'___ cleans your house? — My sister.',o:['Who','Where','Why'],a:0},
   {q:'___ do you put rubbish? — In the dustbin.',o:['Where','When','Who'],a:0},
   {q:'___ do you clean the classroom? — Every Friday.',o:['When','What','Who'],a:0},
   {q:'___ should we keep clean? — Because dirt causes disease.',o:['Why','How','Where'],a:0}
  ]},
 {title:{en:'Reading: The running race',am:'ንባብ፦ የሩጫ ውድድሩ'},type:'quiz',
  tip:{en:'Read this famous old fable, then answer.',am:'ይህን ታዋቂ የቆየ ተረት አንብቡ፤ ከዚያ መልሱ።'},
  passage:{title:'The Running Race',say:'The Running Race. Once upon a time, a rabbit and a tortoise held a running race. The fox was the referee. The rabbit ran far ahead. Thinking the tortoise could not reach her, the rabbit lay down to rest and fell into a deep sleep. The tortoise walked slowly but never stopped. When the rabbit woke up, the tortoise was already receiving the trophy.',
   paras:['Once upon a time, a rabbit and a tortoise held a running race. The fox was the referee.','The rabbit ran far ahead. Thinking the tortoise could not reach her, the rabbit lay down to rest and fell into a deep sleep.','The tortoise walked slowly but never stopped. When the rabbit woke up, the tortoise was already receiving the trophy.']},
  items:[
   {q:'Who was the referee?',o:['the fox','the rabbit','the lion'],a:0},{q:'Why did the rabbit sleep?',o:['She thought she would win easily','She was ill','It was night'],a:0},
   {q:'Who won the race?',o:['the tortoise','the rabbit','the fox'],a:0},{q:'What is the lesson?',o:['Slow and steady wins the race','Always sleep','Run very fast only'],a:0}
  ]},
 {title:{en:'Build sentences',am:'ዓረፍተ ነገር መመስረት'},type:'order',
  tip:{en:'Reorder the words to make correct sentences.',am:'ትክክለኛ ዓረፍተ ነገር ለመሥራት ቃላቱን አስተካክሉ።'},help:{en:'Tap the words in order.',am:'ቃላቱን በቅደም ተከተል ንኩ።'},
  rounds:[{items:['The','teacher','is','coming','to','our','English','class.'],say:'The teacher is coming to our English class.'},{items:['Keep','your','environment','clean','always.'],say:'Keep your environment clean always.'},{items:['Tourists','like','clean','areas.'],say:'Tourists like clean areas.'}]},
 {type:'exam',items:[
   {q:'___ is your teacher? — Mr. Abebe.',o:['Who','What','Where'],a:0},{q:'___ do you live? — In Dessie.',o:['Where','When','Why'],a:0},
   {q:'Which keeps the school clean?',o:['using a dustbin','throwing plastic'],a:0},{q:'In the fable, who was faster but lost?',o:['the rabbit','the tortoise'],a:0}]},
 {type:'notes',notes:{
  big:{en:'A clean surrounding protects health and attracts visitors. Wh- questions help us get information.',am:'ንጹህ አካባቢ ጤናን ይጠብቃል፤ ጎብኚዎችን ይስባል። Wh- ጥያቄዎች መረጃ እንድናገኝ ይረዱናል።'},
  points:[{en:'What = thing, Who = person, Where = place, When = time, Why = reason, How = way.',am:'What = ነገር፣ Who = ሰው፣ Where = ቦታ፣ When = ጊዜ፣ Why = ምክንያት፣ How = መንገድ።'},{en:'Clean habits: pick up litter, use a dustbin, plant flowers and trees.',am:'የንጽህና ልማዶች፦ ቆሻሻ ማንሳት፣ የቆሻሻ ማጠራቀሚያ መጠቀም፣ አበባና ዛፍ መትከል።'},{en:'Fable lesson: slow and steady wins the race.',am:'የተረቱ ትምህርት፦ ቀስ ብሎ ሳያቋርጡ የሚሄድ ያሸንፋል።'}],
  words:[['litter',{en:'rubbish on the ground',am:'የተጣለ ቆሻሻ'}],['dustbin',{en:'a container for rubbish',am:'የቆሻሻ ማጠራቀሚያ'}],['referee',{en:'the judge of a game',am:'ዳኛ'}]],
  remember:{en:'Who? What? Where? When? Why? How?',am:'Who? What? Where? When? Why? How?'},
  exam:[['___ do you go to school? — At 7 o\'clock.','When'],[{en:'Give two clean habits.',am:'ሁለት የንጽህና ልማዶችን ጥቀሱ።'},'pick up litter, use a dustbin']],
  innovate:{title:{en:'Recycling project',am:'መልሶ የመጠቀም ፕሮጀክት'},text:{en:'Plastic bottles and paper are everywhere. Turn rubbish into something useful or saleable.',am:'የፕላስቲክ ጠርሙሶችና ወረቀት በየቦታው አሉ። ቆሻሻን ጠቃሚ ወይም ለሽያጭ የሚሆን ነገር አድርጉ።'},
   steps:[{en:'Collect clean plastic bottles and old paper.',am:'ንጹህ የፕላስቲክ ጠርሙሶችንና አሮጌ ወረቀት ሰብስቡ።'},{en:'Make pen holders, flower pots or paper bags.',am:'የእስክሪብቶ ማስቀመጫ፣ የአበባ ማስቀመጫ ወይም የወረቀት ቦርሳ ሥሩ።'},{en:'Write an English label: "Made from recycled bottles".',am:'የእንግሊዝኛ መለያ ጻፉ፦ "Made from recycled bottles"።'},{en:'Show or sell them at school. How much rubbish did you save?',am:'በትምህርት ቤት አሳዩ ወይም ሽጡ። ምን ያህል ቆሻሻ አዳናችሁ?'}]}}}
 ]});
