/* English · Unit 4 · Rivers */
Unit.start({
 id:'english-4',subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 4',am:'ክፍል 4'},
 title:{en:'Rivers',am:'ወንዞች (Rivers)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 4.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 4 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'River words',am:'የወንዝ ቃላት'},type:'match',sayLeft:'',
  tip:{en:'Learn the words we use to talk about rivers.',am:'ስለ ወንዞች ለመናገር የምንጠቀምባቸውን ቃላት ተማሩ።'},
  rounds:[[['stream','a very small river'],['tributary','a small river that joins a big river'],['originate','to begin, to start'],['merge','to join together'],['generate','to produce (e.g. electricity)']]]},
 {title:{en:'Reading: The Abay',am:'ንባብ፦ ዓባይ'},type:'quiz',
  tip:{en:'Read about Ethiopia\'s most famous river, then answer.',am:'ስለ ኢትዮጵያ በጣም ታዋቂ ወንዝ አንብቡ፤ ከዚያ መልሱ።'},
  passage:{title:'The Abay River',say:'The Abay River. The Abay River, also called the Blue Nile, flows out of Lake Tana. It flows through deep valleys and is joined by many tributaries. Near Sudan, Ethiopia has built the Grand Ethiopian Renaissance Dam on the Abay. The dam generates electricity for homes, schools and factories. In Sudan, the Blue Nile merges with the White Nile to form the Nile.',
   paras:['The Abay River, also called the Blue Nile, flows out of Lake Tana. It flows through deep valleys and is joined by many tributaries.','Near Sudan, Ethiopia has built the Grand Ethiopian Renaissance Dam on the Abay. The dam generates electricity for homes, schools and factories.','In Sudan, the Blue Nile merges with the White Nile to form the Nile.']},
  items:[
   {q:'Where does the Abay flow out of?',o:['Lake Tana','the sea','a mountain in Kenya'],a:0},
   {q:'What is another name for the Abay?',o:['the Blue Nile','the Awash','the White Nile'],a:0},
   {q:'What does the dam generate?',o:['electricity','milk','rain'],a:0},
   {q:'Where does the Blue Nile merge with the White Nile?',o:['in Sudan','in Lake Tana','in Gondar'],a:0}
  ]},
 {title:{en:'Present continuous',am:'Present Continuous'},type:'quiz',shuffle:true,
  tip:{en:'We use the present continuous for actions happening NOW: am / is / are + verb-ing. "I am reading." "She is cooking." "They are playing."',am:'አሁን እየተፈጸሙ ላሉ ድርጊቶች፦ am / is / are + ግስ-ing። "I am reading." "She is cooking." "They are playing."'},
  items:[
   {q:'The students ___ playing football.',o:['is','are','am'],a:1,say:'The students are playing football.'},
   {q:'My mother ___ cooking food.',o:['is','are','am'],a:0},
   {q:'I ___ reading a book.',o:['is','are','am'],a:2},
   {q:'Chaltu is ___ tennis.',o:['play','playing','plays'],a:1},
   {q:'Hagos is ___ a bicycle.',o:['riding','ride','rided'],a:0,e:{en:'ride → riding (drop the e).',am:'ride → riding (e ትወድቃለች)።'}},
   {q:'They ___ planting seedlings.',o:['is','are','am'],a:1}
  ]},
 {title:{en:'Countable or uncountable?',am:'የሚቆጠር ወይስ የማይቆጠር?'},type:'sort',
  tip:{en:'Countable nouns can be counted (one chair, two chairs). Uncountable nouns cannot: water, milk, sugar. We measure them: a litre of milk, a kilo of sugar.',am:'የሚቆጠሩ ስሞች ይቆጠራሉ (one chair, two chairs)። የማይቆጠሩ አይቆጠሩም፦ water, milk, sugar። በመለኪያ እንገልጻቸዋለን፦ a litre of milk።'},
  buckets:['Countable','Uncountable'],
  items:[{t:'chair',b:0,say:'chair'},{t:'book',b:0,say:'book'},{t:'student',b:0,say:'student'},{t:'desk',b:0,say:'desk'},{t:'water',b:1,say:'water'},{t:'milk',b:1,say:'milk'},{t:'sugar',b:1,say:'sugar'},{t:'oil',b:1,say:'oil'}]},
 {title:{en:'Quantifiers',am:'የመጠን ቃላት'},type:'quiz',
  tip:{en:'many / few → countable nouns (many students). much / little → uncountable nouns (little milk). some / a lot of → both.',am:'many / few → ለሚቆጠሩ (many students)። much / little → ለማይቆጠሩ (little milk)። some / a lot of → ለሁለቱም።'},
  items:[
   {q:'There are ___ students in class.',o:['many','much','little'],a:0},{q:'There is ___ milk in the bottle.',o:['little','many','few'],a:0},
   {q:'There are ___ books in the library.',o:['a lot of','much','little'],a:0},{q:'Is there ___ water in the jug?',o:['much','many','few'],a:0}
  ]},
 {type:'exam',items:[
   {q:'A small river that joins a big river is a…',o:['tributary','dam','lake'],a:0},{q:'She ___ washing clothes.',o:['is','are','am'],a:0},
   {q:'Which is uncountable?',o:['water','pen','tree'],a:0},{q:'There are ___ cows in the field.',o:['many','much'],a:0},{q:'The Abay flows out of…',o:['Lake Tana','Lake Abaya','the Red Sea'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Rivers give us water, food and electricity. Present continuous tells what is happening now.',am:'ወንዞች ውኃ፣ ምግብና ኤሌክትሪክ ይሰጡናል። Present continuous አሁን እየሆነ ያለውን ይነግራል።'},
  points:[{en:'Abay (Blue Nile) starts from Lake Tana and merges with the White Nile in Sudan.',am:'ዓባይ ከጣና ሐይቅ ይነሳል፤ በሱዳን ከነጭ ዓባይ ጋር ይገናኛል።'},{en:'Other rivers: Awash, Tekeze, Baro, Genale, Wabe Shebele.',am:'ሌሎች ወንዞች፦ አዋሽ፣ ተከዜ፣ ባሮ፣ ገናሌ፣ ዋቢ ሸበሌ።'},{en:'am/is/are + verb-ing: She is cooking.',am:'am/is/are + ግስ-ing፦ She is cooking.'},{en:'many/few + countable; much/little + uncountable.',am:'many/few + የሚቆጠር፤ much/little + የማይቆጠር።'}],
  words:[['tributary',{en:'a small river joining a big one',am:'ገባር ወንዝ'}],['generate',{en:'produce',am:'ማመንጨት'}],['dam',{en:'a wall that holds water',am:'ግድብ'}]],
  remember:{en:'Countable: How MANY? Uncountable: How MUCH?',am:'የሚቆጠር፦ How MANY? የማይቆጠር፦ How MUCH?'},
  exam:[['They ___ swimming. (be)','are'],['___ sugar (much/many)','much'],[{en:'What does a dam generate?',am:'ግድብ ምን ያመነጫል?'},'electricity']],
  innovate:{title:{en:'Save river water',am:'የወንዝ ውኃን መቆጠብ'},text:{en:'Water is precious. Design a simple idea to save or clean water at home or school, and describe it in English.',am:'ውኃ ውድ ነው። ቤት ወይም ትምህርት ቤት ውኃ የሚቆጥብ ወይም የሚያጸዳ ቀላል ሐሳብ አውጡ፤ በእንግሊዝኛ ግለጹት።'},
   steps:[{en:'Observe: where is water wasted?',am:'አስተውሉ፦ ውኃ የሚባክነው የት ነው?'},{en:'Idea: e.g. collect rainwater from the roof in a barrel.',am:'ሐሳብ፦ ለምሳሌ የዝናብ ውኃን ከጣሪያ በበርሜል መሰብሰብ።'},{en:'Draw it and write 4 present continuous sentences: "The water is flowing into the barrel."',am:'ሳሉትና 4 present continuous ዓረፍተ ነገሮችን ጻፉ።'},{en:'Present it to your class.',am:'ለክፍላችሁ አቅርቡ።'}]}}}
 ]});
