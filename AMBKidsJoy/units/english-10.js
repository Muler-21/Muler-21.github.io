/* English · Unit 10 · Pottery */
Unit.start({
 id:'english-10',subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 10',am:'ክፍል 10'},
 title:{en:'Pottery',am:'የሸክላ ሥራ (Pottery)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 10.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 10 ላይ የተመሰረተ።'},
 missions:[
 {title:{en:'Clay objects',am:'የሸክላ ዕቃዎች'},type:'match',sayLeft:'',
  tip:{en:'Pottery means making objects from clay. Match each clay object with its use.',am:'የሸክላ ሥራ ከሸክላ ዕቃዎችን መሥራት ነው። እያንዳንዱን የሸክላ ዕቃ ከጥቅሙ ጋር አዛምዱ።'},
  rounds:[[['coffee pot (jebena)','for preparing coffee'],['clay tray','for eating food'],['cooking dish','for cooking food'],['flower pot','for growing flowers'],['water pot','for keeping drinking water']]]},
 {title:{en:'Reading: A potter\'s business',am:'ንባብ፦ የሸክላ ሠሪዋ ሥራ'},type:'quiz',
  tip:{en:'Read about a woman who built a business from clay.',am:'ከሸክላ ሥራ ስለገነባች ሴት አንብቡ።'},
  passage:{title:'Woizero Haregua and Her Pottery',say:'Woizero Haregua and Her Pottery. Woizero Haregua lives in a rural area. Before, she did not have any income. Then she learned how to make pots from other potters. She buys clay soil from farmers and makes coffee pots, flower pots, clay trays and water pots. She sells them at the Saturday market. Now she earns money and sends her two daughters to school.',
   paras:['Woizero Haregua lives in a rural area. Before, she did not have any income.','Then she learned how to make pots from other potters. She buys clay soil from farmers and makes coffee pots, flower pots, clay trays and water pots.','She sells them at the Saturday market. Now she earns money and sends her two daughters to school.']},
  items:[
   {q:'Where does Woizero Haregua live?',o:['in a rural area','in a big city','in another country'],a:0},
   {q:'How did she learn pottery?',o:['from other potters','from TV','she did not learn'],a:0},
   {q:'Where does she sell her pots?',o:['at the Saturday market','online only','she gives them free'],a:0},
   {q:'How did pottery change her life?',o:['She earns money and sends her daughters to school','Nothing changed','She stopped working'],a:0,e:{en:'A skill can become a business that changes a whole family\'s life!',am:'ክህሎት የቤተሰብን ሕይወት የሚቀይር ሥራ ሊሆን ይችላል!'}}
  ]},
 {title:{en:'Comparisons',am:'ማነጻጸር'},type:'quiz',shuffle:true,
  tip:{en:'Compare two things with -er + than: "Fufa is shorter than Ahmed." Long words use more: "more intelligent than". Equal: "as tall as".',am:'ሁለት ነገሮችን በ-er + than እናነጻጽራለን፦ "Fufa is shorter than Ahmed." ረጅም ቃላት more ይጠቀማሉ፦ "more intelligent than"። እኩል፦ "as tall as"።'},
  items:[
   {q:'An elephant is ___ than a buffalo.',o:['bigger','big','biggest'],a:0,say:'An elephant is bigger than a buffalo.'},
   {q:'Honey is ___ than oil. (expensive)',o:['more expensive','expensiver','expensive'],a:0},
   {q:'Taye is as tall ___ Teklay.',o:['as','than','like'],a:0},
   {q:'Today is ___ than yesterday. (cold)',o:['colder','more cold','coldest'],a:0},
   {q:'Beshatu is 9. Semira is 8. Beshatu is ___ than Semira.',o:['older','younger','as old'],a:0}
  ]},
 {title:{en:'Clay or plastic?',am:'ሸክላ ወይስ ፕላስቲክ?'},type:'sort',
  tip:{en:'Compare a clay pot and a plastic bucket. Which facts describe each?',am:'የሸክላ ማሰሮና የፕላስቲክ ባልዲን አነጻጽሩ። የትኛው እውነታ የትኛውን ይገልጻል?'},
  buckets:['Clay pot','Plastic bucket'],
  items:[{t:'made from soil',b:0,say:'made from soil'},{t:'keeps water cool',b:0,say:'keeps water cool'},{t:'made in a factory',b:1,say:'made in a factory'},{t:'can break easily if dropped',b:0,say:'can break easily if dropped'},{t:'very light',b:1,say:'very light'},{t:'traditional craft',b:0,say:'traditional craft'}]},
 {type:'exam',items:[
   {q:'A jebena is used for…',o:['preparing coffee','growing flowers'],a:0},{q:'A lion is ___ than a cat.',o:['stronger','strong'],a:0},
   {q:'Hiwot is ___ intelligent than Hagos.',o:['more','most'],a:0},{q:'Pottery is made from…',o:['clay','plastic','metal'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Pottery turns clay into useful objects, and a skill can become a business. Comparatives help us compare things.',am:'የሸክላ ሥራ ሸክላን ወደ ጠቃሚ ዕቃ ይቀይራል፤ ክህሎትም ሥራ ሊሆን ይችላል። ማነጻጸሪያዎች ነገሮችን ለማነጻጸር ይረዱናል።'},
  points:[{en:'Clay objects: coffee pot, water pot, flower pot, clay tray, cooking dish.',am:'የሸክላ ዕቃዎች፦ ጀበና፣ እንስራ፣ የአበባ ማስቀመጫ፣ ሸክላ ሳህን፣ ድስት።'},{en:'Short adjectives: + er than (taller than). Long adjectives: more … than.',am:'አጭር ቅጽሎች፦ + er than (taller than)። ረጅም ቅጽሎች፦ more … than።'},{en:'Equal: as … as (as tall as).',am:'እኩል፦ as … as (as tall as)።'}],
  words:[['potter',{en:'a person who makes pots',am:'ሸክላ ሠሪ'}],['income',{en:'money you earn',am:'ገቢ'}],['rural',{en:'in the countryside',am:'ገጠር'}]],
  remember:{en:'big → bigger, tall → taller, beautiful → more beautiful.',am:'big → bigger, tall → taller, beautiful → more beautiful.'},
  exam:[['A giraffe is ___ (tall) than a horse.','taller'],[{en:'What does a potter make?',am:'ሸክላ ሠሪ ምን ይሠራል?'},'pots and clay objects'],['as ___ as','tall (as tall as)']],
  innovate:{title:{en:'Craft business plan',am:'የዕደ ጥበብ ንግድ እቅድ'},text:{en:'Like Woizero Haregua, turn a local skill into a small business. Plan it in English.',am:'እንደ ወይዘሮ ሀረጓ የአካባቢ ክህሎትን ወደ ትንሽ ሥራ ቀይሩ። በእንግሊዝኛ አቅዱት።'},
   steps:[{en:'Choose a craft (pottery, baskets, weaving).',am:'ዕደ ጥበብ ምረጡ (ሸክላ፣ ሰፌድ፣ ሽመና)።'},{en:'List materials, costs and where to sell.',am:'ዕቃዎችን፣ ወጪዎችንና የሚሸጥበትን ቦታ ዘርዝሩ።'},{en:'Compare your product with a factory one: "My pot is cheaper than…"',am:'ምርታችሁን ከፋብሪካ ምርት ጋር አነጻጽሩ፦ "My pot is cheaper than…"'},{en:'Present a 1-minute English pitch.',am:'የ1 ደቂቃ የእንግሊዝኛ ገለጻ አቅርቡ።'}]}}}
 ]});
