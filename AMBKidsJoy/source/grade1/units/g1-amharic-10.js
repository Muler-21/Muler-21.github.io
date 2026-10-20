/* 1ኛ ክፍል አማርኛ · ምዕራፍ 10 · ለማዳ እንስሳት */
(function(){
const M=K1.readMissions({
 vocab:[[['ላም','🐄'],['በግ','🐑'],['ፍየል','🐐'],['ዶሮ','🐓']],[['ፈረስ','🐴'],['ግመል','🐪'],['ውሻ','🐕'],['ድመት','🐈']]],
 build:['ፍየል','ግመል','እንስሳት','ዶሮ'],trace:['ኳ','ጓ','ቧ','ሿ'],
 story:{title:'ታማኟ ውሻ',paras:['ቡቺ የአበበ ውሻ ናት።','ሌሊት ቤቱን ትጠብቃለች።','አንድ ቀን ጅብ ወደ በጎቹ መጣ።','ቡቺ ጮኸች፤ አበበ ነቃ።','በጎቹ ዳኑ። አበበ ቡቺን አመሰገናት።'],qs:[
  {q:{en:'What does Buchi do at night?',am:'ቡቺ ሌሊት ምን ታደርጋለች?'},o:[{en:'Guards the house',am:'ቤቱን ትጠብቃለች'},{en:'Eats the sheep',am:'በጎቹን ትበላለች'}],a:0},
  {q:{en:'Who came to the sheep?',am:'ወደ በጎቹ የመጣው ማን ነው?'},o:[{en:'A hyena',am:'ጅብ'},{en:'A cat',am:'ድመት'}],a:0},
  {q:{en:'Why did Abebe thank Buchi?',am:'አበበ ቡቺን ለምን አመሰገናት?'},o:[{en:'She saved the sheep',am:'በጎቹን አዳነች'},{en:'She slept',am:'ተኛች'}],a:0}]},
 sort:{title:{en:'What animals give us',am:'እንስሳት የሚሰጡን'},tip:{en:'Domestic animals help people: milk, eggs, wool, and carrying loads.',am:'ለማዳ እንስሳት ሰዎችን ይረዳሉ፦ ወተት፣ እንቁላል፣ ፀጉር (ሱፍ)፣ ጭነት መሸከም።'},
  buckets:[{en:'🥛 Milk',am:'🥛 ወተት'},{en:'🥚 Eggs',am:'🥚 እንቁላል'},{en:'📦 Carry loads',am:'📦 ጭነት ይሸከማሉ'}],
  items:[{t:'🐄 ላም',b:0},{t:'🐐 ፍየል',b:0},{t:'🐓 ዶሮ',b:1},{t:'🐴 ፈረስ',b:2},{t:'🐪 ግመል',b:2},{t:'🫏 አህያ',b:2}]},
 spell:[{w:'ላም',blanks:[0],e:'🐄',en:'cow'},{w:'ውሻ',blanks:[1],e:'🐕',en:'dog'},{w:'ግመል',blanks:[0],e:'🐪',en:'camel'}],
 alphabet:'ላምውሻግመልበፍ',
 sentences:[['ላም','ወተት','ትሰጣለች።'],['እንስሳትን','በደግነት','እንይዛለን።']]
});
M.push({title:{en:'Animal homes and babies',am:'የእንስሳት ልጆች'},type:'match',
 tip:{en:'Animal babies have special names. Match the animal with its baby.',am:'የእንስሳት ልጆች ልዩ ስም አላቸው። እንስሳውን ከልጁ ጋር አዛምዱ።'},
 rounds:[[[{en:'🐄 Cow',am:'🐄 ላም'},{en:'Calf',am:'ጥጃ'}],[{en:'🐑 Sheep',am:'🐑 በግ'},{en:'Lamb',am:'ጠቦት'}],[{en:'🐓 Hen',am:'🐓 ዶሮ'},{en:'Chick',am:'ጫጩት'}],[{en:'🐕 Dog',am:'🐕 ውሻ'},{en:'Puppy',am:'ቡችላ'}]]]});
M.push({type:'exam',items:[
  {q:{en:'🐐 is…',am:'🐐 …'},o:['ፍየል','በግ','ላም'],a:0},
  {q:{en:'Which animal gives eggs?',am:'እንቁላል የሚሰጠው እንስሳ?'},o:[{en:'🐓 Hen',am:'🐓 ዶሮ'},{en:'🐴 Horse',am:'🐴 ፈረስ'}],a:0},
  {q:{en:'A baby cow is a…',am:'የላም ልጅ…'},o:[{en:'calf',am:'ጥጃ'},{en:'chick',am:'ጫጩት'}],a:0},
  {q:{en:'How should we treat animals?',am:'እንስሳትን እንዴት መያዝ አለብን?'},o:[{en:'Kindly: food, water, shelter',am:'በደግነት፦ ምግብ፣ ውኃ፣ መጠለያ'},{en:'Beat them',am:'መደብደብ'}],a:0},
  {q:{en:'Join ፍ + የ + ል',am:'ፍ + የ + ል አጣምሩ'},o:['ፍየል','የልፍ','ልፍየ'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Domestic animals live with us and help us. We care for them kindly.',am:'ለማዳ እንስሳት ከእኛ ጋር ይኖራሉ፤ ይረዱናል። በደግነት እንንከባከባቸዋለን።'},
 points:[{en:'Animal words: ላም, በግ, ፍየል, ዶሮ, ፈረስ, ግመል, ውሻ, ድመት.',am:'የእንስሳት ቃላት፦ ላም፣ በግ፣ ፍየል፣ ዶሮ፣ ፈረስ፣ ግመል፣ ውሻ፣ ድመት።'},{en:'Animals give milk, eggs and wool, and carry loads.',am:'እንስሳት ወተት፣ እንቁላልና ሱፍ ይሰጣሉ፤ ጭነትም ይሸከማሉ።'},{en:'Baby names: ጥጃ, ጠቦት, ጫጩት, ቡችላ.',am:'የልጆች ስሞች፦ ጥጃ፣ ጠቦት፣ ጫጩት፣ ቡችላ።'},{en:'Give animals food, water and shelter; never beat them.',am:'ለእንስሳት ምግብ፣ ውኃና መጠለያ ስጡ፤ በፍጹም አትደብድቧቸው።'}],
 words:[['ለማዳ እንስሳት',{en:'domestic animals',am:'ከሰው ጋር የሚኖሩ'}],['ጥጃ',{en:'calf',am:'የላም ልጅ'}],['ታማኝ',{en:'loyal',am:'የማይከዳ'}]],
 remember:{en:'Kind to animals, kind to people.',am:'ለእንስሳት ደግ፣ ለሰው ደግ።'},
 exam:[[{en:'Name 4 domestic animals',am:'4 ለማዳ እንስሳትን ጥቀሱ'},'ላም፣ በግ፣ ፍየል፣ ዶሮ'],[{en:'Read: ላም ወተት ትሰጣለች።',am:'አንብቡ፦ ላም ወተት ትሰጣለች።'},{en:'A cow gives milk.',am:'ላም ወተት ትሰጣለች።'}],[{en:'What is a baby hen called?',am:'የዶሮ ልጅ ምን ይባላል?'},'ጫጩት']],
 innovate:{title:{en:'Chicken-care chart',am:'የዶሮ እንክብካቤ ሰንጠረዥ'},text:{en:'Many families earn money from hens and eggs. Make a chart to feed, water and count eggs every day.',am:'ብዙ ቤተሰቦች ከዶሮና ከእንቁላል ገቢ ያገኛሉ። በየቀኑ ለመመገብ፣ ውኃ ለመስጠትና እንቁላል ለመቁጠር ሰንጠረዥ ሥሩ።'},
  steps:[{en:'Draw a table with 7 days.',am:'7 ቀናት ያሉት ሰንጠረዥ ሳሉ።'},{en:'Tick when you give food and water.',am:'ምግብና ውኃ ስትሰጡ ምልክት አድርጉ።'},{en:'Write how many eggs you collect.',am:'ስንት እንቁላል እንደሰበሰባችሁ ጻፉ።'},{en:'At the end of the week, add up the eggs.',am:'በሳምንቱ መጨረሻ እንቁላሎቹን ደምሩ።'}]}}});
Unit.start({id:'g1-amharic-10',grade:1,subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 10',am:'ምዕራፍ 10'},
 title:{en:'Domestic animals',am:'ለማዳ እንስሳት'},footer:{en:'Built on the Grade 1 Amharic student book, Chapter 10 (Domestic animals): animal words, fluent reading and caring for animals.',am:'በ1ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 10 (ለማዳ እንስሳት) ላይ የተመሰረተ፦ የእንስሳት ቃላት፣ አቀላጥፎ ማንበብና እንስሳትን መንከባከብ።'},missions:M});
})();
