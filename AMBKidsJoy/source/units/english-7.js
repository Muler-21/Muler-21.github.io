/* English · Unit 7 · The National Flag */
(function(){
const FLAG=`<svg viewBox="0 0 180 90" role="img" aria-label="Ethiopian flag" style="width:min(240px,100%)"><rect width="180" height="30" fill="#078930"/><rect y="30" width="180" height="30" fill="#FCDD09"/><rect y="60" width="180" height="30" fill="#DA121A"/><circle cx="90" cy="45" r="22" fill="#0F47AF"/><polygon points="${Array.from({length:5},(_,i)=>{const a=-Math.PI/2+i*4*Math.PI/5;return (90+17*Math.cos(a)).toFixed(1)+','+(45+17*Math.sin(a)).toFixed(1)}).join(' ')}" fill="none" stroke="#FCDD09" stroke-width="2.5"/></svg>`;
Unit.start({
 id:'english-7',subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 7',am:'ክፍል 7'},
 title:{en:'The National Flag',am:'ብሔራዊ ሰንደቅ ዓላማ (The National Flag)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 7.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 7 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Colours and meanings',am:'ቀለሞችና ትርጉማቸው'},type:'match',
  tip:{en:'Our flag has three colours (tri-colour) and an emblem. Match each part with its meaning.',am:'ሰንደቅ ዓላማችን ሦስት ቀለሞችና አርማ አለው። እያንዳንዱን ክፍል ከትርጉሙ ጋር አዛምዱ።'},
  intro:{en:FLAG,am:FLAG},
  rounds:[[['Green','labour, development and fertility'],['Yellow','hope, justice and equality'],['Red','sacrifice for freedom and equality'],['Blue disk','peace'],['Yellow star','unity and equality of all peoples']]]},
 {title:{en:'Reading: Our flag\'s story',am:'ንባብ፦ የሰንደቅ ዓላማችን ታሪክ'},type:'quiz',
  tip:{en:'Read the short history of the flag.',am:'የሰንደቅ ዓላማውን አጭር ታሪክ አንብቡ።'},
  passage:{title:'The Ethiopian National Flag',say:'The Ethiopian National Flag. The first official flag of Ethiopia was established by Emperor Menelik the Second on October 6, 1897. It had three colours: green, yellow and red. The flag changed a few times over the years. On February 6, 1996, a blue disk with a yellow star was added in the centre. The flag is a symbol of our country. We respect it at the flag ceremony every week.',
   paras:['The first official flag of Ethiopia was established by Emperor Menelik II on October 6, 1897. It had three colours: green, yellow and red.','The flag changed a few times over the years. On February 6, 1996, a blue disk with a yellow star was added in the centre.','The flag is a symbol of our country. We respect it at the flag ceremony every week.']},
  items:[
   {q:'Who established the first official flag?',o:['Emperor Menelik II','a teacher','a farmer'],a:0},
   {q:'When was the first official flag established?',o:['October 6, 1897','February 6, 1996','in 2021'],a:0},
   {q:'What was added in 1996?',o:['a blue disk with a yellow star','a red stripe','a picture of a lion'],a:0},
   {q:'How many colours make the tri-colour?',o:['3','2','5'],a:0}
  ]},
 {title:{en:'Simple present',am:'Simple Present'},type:'quiz',shuffle:true,
  tip:{en:'Use the simple present for habits and facts. Add -s/-es with he, she, it: "She eats." Negative: doesn\'t + verb. Question: Does she…?',am:'ለልማዶችና ለእውነታዎች simple present እንጠቀማለን። ከhe, she, it ጋር -s/-es ይጨመራል፦ "She eats." አሉታዊ፦ doesn\'t + ግስ። ጥያቄ፦ Does she…?'},
  items:[
   {q:'The sun ___ in the west.',o:['sets','set','setting'],a:0,say:'The sun sets in the west.'},
   {q:'Water ___ at 100 degrees.',o:['boils','boil','boiling'],a:0},
   {q:'I ___ to school every day.',o:['walk','walks','walking'],a:0},
   {q:'He ___ (not) like milk.',o:["doesn't","don't","isn't"],a:0},
   {q:'___ she live in Gondar?',o:['Does','Do','Is'],a:0},
   {q:'Green ___ development.',o:['represents','represent','representing'],a:0}
  ]},
 {title:{en:'Telling the time',am:'ሰዓት መናገር'},type:'match',sayRight:'en-US',
  tip:{en:'In English: 7:00 = seven o\'clock, 7:15 = a quarter past seven, 7:30 = half past seven, 7:45 = a quarter to eight.',am:'በእንግሊዝኛ፦ 7:00 = seven o\'clock፣ 7:15 = a quarter past seven፣ 7:30 = half past seven፣ 7:45 = a quarter to eight።'},
  rounds:[[['7:00',"seven o'clock"],['7:15','a quarter past seven'],['7:30','half past seven'],['7:45','a quarter to eight']]]},
 {title:{en:'Where are you from?',am:'ከየት ነህ/ነሽ?'},type:'quiz',
  tip:{en:'Ask: "Where are you from?" Answer: "I am from Ethiopia."',am:'ጠይቁ፦ "Where are you from?" መልስ፦ "I am from Ethiopia."'},
  items:[
   {q:'"Where are you from?" — "I am ___ Ethiopia."',o:['from','in','at'],a:0,say:'Where are you from? I am from Ethiopia.'},
   {q:'A person from Ethiopia is…',o:['Ethiopian','Ethiopia','Ethiopish'],a:0},
   {q:'Which country\'s flag is red and white with a maple leaf?',o:['Canada','Kenya','Ethiopia'],a:0}
  ]},
 {type:'exam',items:[
   {q:'Yellow in our flag means…',o:['hope, justice and equality','sacrifice','labour'],a:0},{q:'She ___ to school.',o:['goes','go','going'],a:0},
   {q:'8:30 = ?',o:['half past eight','a quarter to eight','eight o\'clock'],a:0},{q:'The star in the emblem shows…',o:['unity and equality','war','rain'],a:0}]},
 {type:'notes',notes:{
  big:{en:'The national flag is a symbol of our country. Green, yellow, red and the emblem each have a meaning.',am:'ብሔራዊ ሰንደቅ ዓላማ የሀገራችን ምልክት ነው። አረንጓዴ፣ ቢጫ፣ ቀይና አርማው እያንዳንዳቸው ትርጉም አላቸው።'},
  points:[{en:'Green: labour, development, fertility. Yellow: hope, justice, equality. Red: sacrifice for freedom.',am:'አረንጓዴ፦ ሥራ፣ ልማት፣ ለምነት። ቢጫ፦ ተስፋ፣ ፍትሕ፣ እኩልነት። ቀይ፦ ለነጻነት የተከፈለ መስዋዕትነት።'},{en:'Blue disk = peace; star = unity of nations and peoples.',am:'ሰማያዊ ክብ = ሰላም፤ ኮከብ = የብሔሮችና ሕዝቦች አንድነት።'},{en:'Simple present: habits and facts. He/she/it + -s.',am:'Simple present፦ ልማዶችና እውነታዎች። He/she/it + -s።'},{en:'Time: o\'clock, quarter past, half past, quarter to.',am:'ሰዓት፦ o\'clock, quarter past, half past, quarter to።'}],
  words:[['symbol',{en:'a sign that stands for something',am:'ምልክት'}],['tri-colour',{en:'three colours',am:'ሦስት ቀለም'}],['emblem',{en:'a special badge or sign',am:'አርማ'}]],
  remember:{en:'he/she/it + verb-s: He plays. She eats. It rains.',am:'he/she/it + ግስ-s፦ He plays. She eats. It rains.'},
  exam:[['Red means…','sacrifice for freedom and equality'],['My sister ___ (read) every day.','reads'],['9:45 = ?','a quarter to ten']],
  innovate:{title:{en:'Design a club flag',am:'የክበብ ሰንደቅ ንድፍ'},text:{en:'Every club or company has a symbol. Design a flag for your class club where each colour has a meaning.',am:'እያንዳንዱ ክበብ ወይም ኩባንያ ምልክት አለው። እያንዳንዱ ቀለም ትርጉም ያለው ለክፍላችሁ ክበብ ሰንደቅ ንድፍ አውጡ።'},
   steps:[{en:'Choose 3 colours and decide what each means.',am:'3 ቀለሞችን ምረጡ፤ እያንዳንዱ ምን ማለት እንደሆነ ወስኑ።'},{en:'Add a symbol in the centre.',am:'በመሃል ምልክት ጨምሩ።'},{en:'Write 4 simple present sentences: "Blue represents…"',am:'4 simple present ዓረፍተ ነገሮችን ጻፉ፦ "Blue represents…"'},{en:'Present it and let the class vote.',am:'አቅርቡትና ክፍሉ ድምፅ ይስጥበት።'}]}}}
 ]});
})();
