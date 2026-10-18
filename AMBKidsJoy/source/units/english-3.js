/* English · Unit 3 · The Traffic Signs */
(function(){
const light=c=>`<svg viewBox="0 0 60 150" role="img" aria-label="${c} light" style="width:60px"><rect x="8" y="4" width="44" height="130" rx="10" fill="#222"/>${['red','yellow','green'].map((k,i)=>`<circle cx="30" cy="${28+i*42}" r="15" fill="${k===c?{red:'#E53935',yellow:'#FDD835',green:'#43A047'}[k]:'#444'}"/>`).join('')}<rect x="27" y="134" width="6" height="14" fill="#555"/></svg>`;
Unit.start({
 id:'english-3',subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 3',am:'ክፍል 3'},
 title:{en:'The Traffic Signs',am:'የትራፊክ ምልክቶች (Traffic Signs)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 3.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 3 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Traffic light colours',am:'የትራፊክ መብራት ቀለሞች'},type:'quiz',
  tip:{en:'Traffic lights keep everyone safe. Red = stop. Yellow = get ready to stop. Green = go.',am:'የትራፊክ መብራቶች ሁሉንም ይጠብቃሉ። ቀይ = ቁም። ቢጫ = ለመቆም ተዘጋጅ። አረንጓዴ = ሂድ።'},
  items:[
   {fig:light('red'),q:'What does the red light mean?',say:'What does the red light mean?',o:['Stop completely','Go','Get ready to stop'],a:0},
   {fig:light('green'),q:'What does the green light mean?',say:'What does the green light mean?',o:['Stop','Go / pass','Slow down'],a:1},
   {fig:light('yellow'),q:'What does the yellow light mean?',say:'What does the yellow light mean?',o:['Go fast','Get ready to stop','Turn around'],a:1},
   {q:'A flashing yellow light tells you to…',o:['slow down and be careful','go faster','sleep'],a:0},
   {q:'Who first used traffic lights, in 1868?',o:['Britain','Ethiopia','Brazil'],a:0,e:{en:'Before traffic lights, police officers controlled traffic with whistles.',am:'ከትራፊክ መብራት በፊት ፖሊሶች በፊሽካ ትራፊክ ይቆጣጠሩ ነበር።'}}
  ]},
 {title:{en:'Road users',am:'የመንገድ ተጠቃሚዎች'},type:'match',sayRight:'en-US',
  tip:{en:'Match each word with its meaning.',am:'እያንዳንዱን ቃል ከትርጉሙ ጋር አዛምዱ።'},
  rounds:[[['someone who walks on the road','pedestrian'],['someone who rides a bicycle','cyclist'],['someone who drives a car','driver'],['someone who repairs cars','mechanic'],['someone who controls traffic','traffic police']]]},
 {title:{en:'Reading: Traffic lights',am:'ንባብ፦ የትራፊክ መብራቶች'},type:'quiz',
  tip:{en:'Read the passage, then answer.',am:'ጽሑፉን አንብቡ፤ ከዚያ መልሱ።'},
  passage:{title:'Safe on the Road',say:'Safe on the Road. Traffic lights are signals that help drivers and walkers stay safe. People who walk are called pedestrians. People who drive cars are called motorists. Before traffic lights, police officers stood at busy places and used whistles. Today, many towns in Ethiopia have traffic lights. Always cross at a zebra crossing, and look left and right before you cross.',
   paras:['Traffic lights are signals that help drivers and walkers stay safe. People who walk are called pedestrians. People who drive cars are called motorists.','Before traffic lights, police officers stood at busy places and used whistles. Today, many towns in Ethiopia have traffic lights.','Always cross at a zebra crossing, and look left and right before you cross.']},
  items:[
   {q:'What are people who walk called?',o:['pedestrians','motorists','mechanics'],a:0},
   {q:'What did police use before traffic lights?',o:['whistles','phones','flags'],a:0},
   {q:'Where should you cross the road?',o:['at a zebra crossing','between cars','anywhere'],a:0},
   {q:'What is the passage mainly about?',o:['staying safe on the road','cooking food','farming'],a:0}
  ]},
 {title:{en:'Have or has?',am:'Have ወይስ Has?'},type:'quiz',shuffle:true,
  tip:{en:'Use "has" with he, she, it and one person. Use "have" with I, you, we, they and many people. Negative: does not have / do not have.',am:'"has" ለhe, she, it እና ለአንድ ሰው። "have" ለI, you, we, they እና ለብዙ ሰዎች። አሉታዊ፦ does not have / do not have።'},
  items:[
   {q:'Mesfin ___ an exercise book.',o:['has','have'],a:0,say:'Mesfin has an exercise book.'},
   {q:'The students ___ pens.',o:['has','have'],a:1,say:'The students have pens.'},
   {q:'I ___ a bicycle.',o:['has','have'],a:1},
   {q:'She ___ a laptop.',o:['has','have'],a:0},
   {q:'Hagos ___ a jacket. (negative)',o:['does not have','do not have','not has'],a:0},
   {q:'We ___ a car. (negative)',o:['does not have','do not have','not have'],a:1}
  ]},
 {title:{en:'A, an or the?',am:'A፣ An ወይስ The?'},type:'quiz',
  tip:{en:'Use "an" before a vowel sound (a, e, i, o, u): an apple, an ox. Use "a" before other sounds: a dog, a teacher. Use "the" for something specific. Use no article before names of people, towns and countries.',am:'"an" በአናባቢ ድምፅ (a, e, i, o, u) ፊት፦ an apple, an ox። "a" በሌሎች ፊት፦ a dog, a teacher። "the" ለተወሰነ ነገር። በሰዎች፣ በከተሞችና በሀገራት ስም ፊት ምንም አንጠቀምም።'},
  items:[
   {q:'I saw ___ ox.',o:['a','an','the'],a:1},{q:'My father is ___ engineer.',o:['a','an','—'],a:1},
   {q:'She is ___ teacher.',o:['a','an','—'],a:0},{q:'I want to meet you at ___ restaurant where we had lunch yesterday.',o:['a','the','an'],a:1,e:{en:'"the" because it is a specific restaurant.',am:'የተወሰነ ምግብ ቤት ስለሆነ "the"።'}},
   {q:'I work in ___ Kombolcha.',o:['a','the','— (no article)'],a:2}
  ]},
 {title:{en:'Opposites',am:'ተቃራኒ ቃላት'},type:'match',
  tip:{en:'Match each word with its opposite.',am:'እያንዳንዱን ቃል ከተቃራኒው ጋር አዛምዱ።'},
  rounds:[[['boring','interesting'],['before','after'],['old','modern'],['rapid','slow'],['frequently','rarely']]]},
 {type:'exam',items:[
   {q:'Red light means…',o:['stop','go','wait and go'],a:0},{q:'A person who rides a bicycle is a…',o:['cyclist','pedestrian','mechanic'],a:0},
   {q:'He ___ two brothers.',o:['has','have'],a:0},{q:'___ umbrella',o:['a','an'],a:1},{q:'Opposite of "before"?',o:['after','again','behind'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Traffic signs and lights keep everyone safe. In English we use has/have and a/an/the correctly.',am:'የትራፊክ ምልክቶችና መብራቶች ሁሉንም ይጠብቃሉ። በእንግሊዝኛ has/have እና a/an/the በትክክል እንጠቀማለን።'},
  points:[{en:'Red = stop, yellow = get ready to stop, green = go.',am:'ቀይ = ቁም፣ ቢጫ = ለመቆም ተዘጋጅ፣ አረንጓዴ = ሂድ።'},{en:'Road users: pedestrian, cyclist, driver, traffic police.',am:'የመንገድ ተጠቃሚዎች፦ pedestrian, cyclist, driver, traffic police።'},{en:'he/she/it has; I/you/we/they have.',am:'he/she/it has፤ I/you/we/they have።'},{en:'an + vowel sound; a + other sounds; the = specific.',am:'an + አናባቢ ድምፅ፤ a + ሌሎች፤ the = የተወሰነ።'}],
  words:[['pedestrian',{en:'a person walking',am:'እግረኛ'}],['signal',{en:'a sign that gives a message',am:'ምልክት'}],['accident',{en:'a crash',am:'አደጋ'}]],
  remember:{en:'Stop, look left, look right, then cross.',am:'ቁሙ፣ ግራ እዩ፣ ቀኝ እዩ፣ ከዚያ ተሻገሩ።'},
  exam:[['They ___ a dog.','have'],['___ egg','an'],[{en:'Meaning of green light?',am:'የአረንጓዴ መብራት ትርጉም?'},'Go'],[{en:'A person who walks on the road?',am:'በመንገድ በእግሩ የሚሄድ?'},'pedestrian']],
  innovate:{title:{en:'Road-safety campaign',am:'የመንገድ ደህንነት ዘመቻ'},text:{en:'Many accidents happen near schools. Create an English road-safety campaign for younger pupils.',am:'ብዙ አደጋዎች በትምህርት ቤቶች አካባቢ ይደርሳሉ። ለታናናሽ ተማሪዎች የእንግሊዝኛ የመንገድ ደህንነት ዘመቻ ሥሩ።'},
   steps:[{en:'Write 3 safety rules in English.',am:'3 የደህንነት ሕጎችን በእንግሊዝኛ ጻፉ።'},{en:'Make a cardboard traffic light to teach the colours.',am:'ቀለሞቹን ለማስተማር የካርቶን የትራፊክ መብራት ሥሩ።'},{en:'Teach a Grade 1 class for 5 minutes.',am:'የ1ኛ ክፍልን ለ5 ደቂቃ አስተምሩ።'},{en:'Ask them the rules the next day. What did they remember?',am:'በማግስቱ ሕጎቹን ጠይቋቸው። ምን አስታወሱ?'}]}}}
 ]});
})();
