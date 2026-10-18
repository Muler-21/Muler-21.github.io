/* English · Unit 1 · My School */
(function(){
const I=window.IC;
const ic=(k,label)=>({svg:I[k],label});
Unit.start({
 id:'english-1',subject:'english',
 subjectName:{en:'English',am:'እንግሊዝኛ'},
 chapter:{en:'Unit 1',am:'ክፍል 1'},
 title:{en:'My School',am:'ትምህርት ቤቴ (My School)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 1. Tap the speaker buttons to hear English words.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 1 ላይ የተመሰረተ። የእንግሊዝኛ ቃላትን ለመስማት የድምፅ ምልክቱን ንኩ።'},
 missions:[
 {title:{en:'School places',am:'የትምህርት ቤት ቦታዎች'},type:'quiz',
  tip:{en:'A school has many places. Each place has a job. Read the question and choose the right place.',am:'ትምህርት ቤት ብዙ ቦታዎች አሉት። እያንዳንዱ ቦታ የራሱ ሥራ አለው። ጥያቄውን አንብቡና ትክክለኛውን ቦታ ምረጡ።'},
  items:[
   {q:'Where do we borrow and read books?',say:'Where do we borrow and read books?',o:['laboratory','library','gate','café'],a:1,e:{en:'library = ቤተ መጻሕፍት. It has many books.',am:'library = ቤተ መጻሕፍት። ብዙ መጻሕፍት አሉት።'},fig:I.book},
   {q:'Where do we do experiments with chemicals?',say:'Where do we do experiments with chemicals?',o:['hall','café','laboratory','library'],a:2,e:{en:'laboratory = ቤተ ሙከራ. Scientists use it for experiments.',am:'laboratory = ቤተ ሙከራ። ሙከራዎች የሚሰሩበት ቦታ ነው።'},fig:I.flask},
   {q:'Where do many people meet for a big meeting?',say:'Where do many people meet for a big meeting?',o:['hall','rest-room','gate','library'],a:0,e:{en:'hall = አዳራሽ. Halls are used for meetings.',am:'hall = አዳራሽ። አዳራሾች ለስብሰባ ያገለግላሉ።'},fig:I.hall},
   {q:'Where can we drink tea at school?',say:'Where can we drink tea at school?',o:['laboratory','gate','café','hall'],a:2,e:{en:'café = ካፌ. We drink tea and milk there.',am:'café = ካፌ። ሻይና ወተት እንጠጣበታለን።'},fig:I.cup},
   {q:'Where do we enter the school compound?',say:'Where do we enter the school compound?',o:['gate','hall','café','library'],a:0,e:{en:'gate = በር. A school can have many gates, but one is the main gate.',am:'gate = በር። ትምህርት ቤት ብዙ በሮች ሊኖሩት ይችላሉ፤ አንዱ ዋና በር ነው።'},fig:I.gate},
   {q:'Where do we wash our hands after the toilet?',say:'Where do we wash our hands after the toilet?',o:['library','rest-room','hall','café'],a:1,e:{en:'rest-room = መጸዳጃና መታጠቢያ ክፍል. Always wash your hands with soap!',am:'rest-room = መጸዳጃና መታጠቢያ ክፍል። ሁልጊዜ እጃችሁን በሳሙና ታጠቡ!'},fig:I.tap}
  ]},
 {title:{en:'Classroom objects',am:'የክፍል ዕቃዎች'},type:'match',sayRight:'en-US',
  tip:{en:'Match each picture with its English name. When you match it, you will hear the word!',am:'እያንዳንዱን ሥዕል ከእንግሊዝኛ ስሙ ጋር አዛምዱ። ስታዛምዱ ቃሉን ትሰማላችሁ!'},
  rounds:[
   [[{svg:I.ruler,label:''},'ruler'],[{svg:I.pencil},'pencil'],[{svg:I.schoolbag},'schoolbag'],[{svg:I.desk},'desk'],[{svg:I.board},'blackboard']],
   [[{svg:I.setsquare},'set square'],[{svg:I.compass},'compass'],[{svg:I.clip},'clip'],[{svg:I.funnel},'funnel'],[{svg:I.testtube},'test tube']]
  ].map(r=>r.map(([a,b])=>[a,b]))},
 {title:{en:'Spelling',am:'የቃላት አጻጻፍ'},type:'spell',lang:'en-US',
  tip:{en:'Listen to the word, then fill in the missing letters. Good spellers listen carefully to every sound.',am:'ቃሉን አዳምጡ፤ ከዚያ የጎደሉትን ፊደላት ሙሉ። ጎበዝ ጸሐፊዎች እያንዳንዱን ድምፅ በጥንቃቄ ያዳምጣሉ።'},
  words:[
   {w:'desk',blanks:[1],hint:{en:'desk',am:'ጠረጴዛ'},fig:I.desk},
   {w:'ruler',blanks:[1,3],hint:{en:'ruler',am:'ማስመሪያ'},fig:I.ruler},
   {w:'pencil',blanks:[1,4],hint:{en:'pencil',am:'እርሳስ'},fig:I.pencil},
   {w:'school',blanks:[2,4],hint:{en:'school',am:'ትምህርት ቤት'}},
   {w:'teacher',blanks:[1,4,6],hint:{en:'teacher',am:'መምህር'}},
   {w:'library',blanks:[1,3,6],hint:{en:'library',am:'ቤተ መጻሕፍት'},fig:I.book},
   {w:'classroom',blanks:[2,5,7],hint:{en:'classroom',am:'የመማሪያ ክፍል'}}
  ]},
 {title:{en:'Reading: Our school',am:'ንባብ፦ ትምህርት ቤታችን'},type:'quiz',
  tip:{en:'Read the story first. Then answer. If you are not sure, look back at the story. Good readers check!',am:'መጀመሪያ ታሪኩን አንብቡ። ከዚያ መልሱ። እርግጠኛ ካልሆናችሁ ታሪኩን መልሳችሁ እዩ። ጎበዝ አንባቢዎች ያረጋግጣሉ!'},
  passage:{title:'Our School',say:'Our School. My name is Selam. I am in Grade 3. Our school is near the river. It has a big green gate and a small café. Every morning, my friend Dawit and I walk to school. We take our books to the library on Tuesday. In the laboratory, we look at seeds and leaves. I love my school because the teachers are kind.',
   paras:['My name is Selam. I am in Grade 3. Our school is near the river. It has a big green gate and a small café.','Every morning, my friend Dawit and I walk to school. We take our books to the library on Tuesday. In the laboratory, we look at seeds and leaves.','I love my school because the teachers are kind.']},
  items:[
   {q:'What grade is Selam in?',o:['Grade 2','Grade 3','Grade 4','Grade 5'],a:1,e:{en:'"I am in Grade 3."',am:'"I am in Grade 3." ይላል።'}},
   {q:'Where is the school?',o:['near the market','near the river','in the city','on a mountain'],a:1,e:{en:'"Our school is near the river."',am:'"Our school is near the river." ይላል።'}},
   {q:'What colour is the gate?',o:['red','blue','green','yellow'],a:2,e:{en:'"It has a big green gate."',am:'"a big green gate" ይላል።'}},
   {q:'When do they go to the library?',o:['on Monday','on Tuesday','every morning','on Friday'],a:1,e:{en:'"We take our books to the library on Tuesday."',am:'"on Tuesday" ይላል፤ ማክሰኞ ማለት ነው።'}},
   {q:'Why does Selam love her school?',o:['It has a café','It is big','The teachers are kind','It is near the river'],a:2,e:{en:'Look for the word "because". It tells us the reason.',am:'"because" (ምክንያቱም) የሚለውን ቃል ፈልጉ። ምክንያቱን ይነግረናል።'}}
  ]},
 {title:{en:'Asking permission',am:'ፈቃድ መጠየቅ'},type:'quiz',
  tip:{en:'We ask permission with May I…? Can I…? Could I…? "Could" and "May" are the most polite. The answer can be "Yes, you may" or "No, you may not."',am:'ፈቃድ የምንጠይቀው በ May I…? Can I…? Could I…? ነው። "Could" እና "May" በጣም ትሁት ናቸው። መልሱ "Yes, you may" ወይም "No, you may not" ሊሆን ይችላል።'},
  items:[
   {q:{en:'You want to use your friend\'s ruler. What do you say?',am:'የጓደኛችሁን ማስመሪያ መጠቀም ትፈልጋላችሁ። ምን ትላላችሁ?'},o:['Give me ruler!','May I use your ruler, please?','Ruler, now.','I use ruler.'],a:1,e:{en:'"May I … please?" is a polite way to ask.',am:'"May I … please?" ትሁት የአጠያየቅ መንገድ ነው።'},say:'May I use your ruler, please?'},
   {q:{en:'The teacher says yes. Choose the right answer:',am:'መምህሩ ፈቀዱ። ትክክለኛውን መልስ ምረጡ፦'},o:['Yes, you may.','Yes, you mays.','Yes, may you.','You yes may.'],a:0,e:{en:'"Yes, you may." We never add s to may.',am:'"Yes, you may." ብለን እንመልሳለን። may ላይ s አንጨምርም።'}},
   {q:{en:'The teacher says no. Choose the right answer:',am:'መምህሩ አልፈቀዱም። ትክክለኛውን መልስ ምረጡ፦'},o:['No, you not may.','No, may not you.','No, you may not.','No you no may.'],a:2,e:{en:'"No, you may not."',am:'"No, you may not." ብለን እንመልሳለን።'}},
   {q:{en:'Which question is the MOST polite?',am:'በጣም ትሁት የሆነው ጥያቄ የትኛው ነው?'},o:['Can I go out?','Could I go out, please?','I go out.','Go out?'],a:1,e:{en:'"Could" is more formal and polite than "can". "Please" makes it even kinder.',am:'"Could" ከ"can" የበለጠ ትሁት ነው። "please" ደግሞ የበለጠ ደግ ያደርገዋል።'},say:'Could I go out, please?'},
   {q:{en:'Fill the blank: "___ I ask a question, please?"',am:'ክፍት ቦታውን ሙሉ፦ "___ I ask a question, please?"'},o:['Am','Can','Is','Do'],a:1,e:{en:'"Can I ask a question, please?" is correct.',am:'"Can I ask a question, please?" ትክክል ነው።'}},
   {q:{en:'Which sentence ASKS for permission?',am:'ፈቃድ የሚጠይቀው ዓረፍተ ነገር የትኛው ነው?'},o:['You may sit down.','May I sit down?','Sit down.','She sits down.'],a:1,e:{en:'A question with "May I…?" asks. "You may…" gives permission.',am:'"May I…?" ይጠይቃል። "You may…" ደግሞ ይፈቅዳል።'}}
  ]},
 {title:{en:'Capital letters',am:'ትልልቅ ፊደላት'},type:'tapwords',
  tip:{en:'Use a capital letter to start a sentence, for names of people and places, for days and months, and for the word I. Be a detective: find every word that needs a capital!',am:'ትልቅ ፊደል የምንጠቀመው ዓረፍተ ነገር ለመጀመር፣ ለሰዎችና ለቦታዎች ስም፣ ለቀናትና ለወራት እንዲሁም ለ"I" ነው። መርማሪ ሁኑ፦ ትልቅ ፊደል የሚያስፈልገውን ቃል ሁሉ ፈልጉ!'},
  help:{en:'Tap every word that needs a capital letter, then Check.',am:'ትልቅ ፊደል የሚያስፈልገውን ቃል ሁሉ ንኩ፤ ከዚያ አረጋግጡ።'},
  rounds:[
   {text:'my friend lives in gondar.',targets:[0,4],fixed:'My friend lives in Gondar.'},
   {text:'on monday i go to the library.',targets:[0,1,2],fixed:'On Monday I go to the library.',e:{en:'Days of the week and "I" always take capitals.',am:'የሳምንቱ ቀናትና "I" ሁልጊዜ በትልቅ ፊደል ይጻፋሉ።'}},
   {text:'abebe and almaz study english.',targets:[0,2,4],fixed:'Abebe and Almaz study English.',e:{en:'Names of languages take capitals too: English, Amharic.',am:'የቋንቋ ስሞችም በትልቅ ፊደል ይጻፋሉ፦ English, Amharic።'}},
   {text:'we visited lake tana in june.',targets:[0,2,3,5],fixed:'We visited Lake Tana in June.'},
   {text:'the river abay starts in ethiopia.',targets:[0,2,5],fixed:'The river Abay starts in Ethiopia.'}
  ]},
 {title:{en:'Full stop or question mark?',am:'ነጥብ ወይስ የጥያቄ ምልክት?'},type:'sort',
  tip:{en:'A telling sentence ends with a full stop (.). A question ends with a question mark (?). Read each sentence and choose.',am:'የሚነግር ዓረፍተ ነገር በነጥብ (.) ያልቃል። ጥያቄ በጥያቄ ምልክት (?) ያልቃል። እያንዳንዱን ዓረፍተ ነገር አንብቡና ምረጡ።'},
  buckets:[{en:'Full stop  .',am:'ነጥብ  .'},{en:'Question mark  ?',am:'የጥያቄ ምልክት  ?'}],
  items:[
   {t:'We ate a nice breakfast',b:0,short:'breakfast'},
   {t:'Will you go to school tomorrow',b:1,short:'tomorrow'},
   {t:'What is your name',b:1,short:'name'},
   {t:'I respect all my classmates',b:0,short:'classmates'},
   {t:'Can I use your pen',b:1,short:'pen'},
   {t:'The library has many books',b:0,short:'books'},
   {t:'Where is the café',b:1,short:'café'},
   {t:'My teacher is kind',b:0,short:'kind'}
  ]},
 {title:{en:'Build sentences',am:'ዓረፍተ ነገር መመስረት'},type:'order',
  tip:{en:'The words are mixed up. Put them in the right order to make a sentence. Start with the capital letter!',am:'ቃላቱ ተደበላልቀዋል። ዓረፍተ ነገር እንዲሆኑ በትክክለኛው ቅደም ተከተል አስቀምጡ። በትልቅ ፊደል በሚጀምረው ቃል ጀምሩ!'},
  help:{en:'Tap the words in order. Tap a placed word to take it back.',am:'ቃላቱን በቅደም ተከተል ንኩ። የተቀመጠ ቃል ለመመለስ ንኩት።'},
  rounds:[
   {items:['I','have','a','ruler.'],say:'I have a ruler.'},
   {items:['My','school','has','a','gate.'],say:'My school has a gate.'},
   {items:['We','drink','tea','at','the','café.'],say:'We drink tea at the café.'},
   {items:['May','I','use','your','pencil?'],say:'May I use your pencil?'},
   {items:['The','library','has','many','books.'],say:'The library has many books.'}
  ]},
 {type:'notes',notes:{
 big:{en:'I can name places and objects at school, ask for permission politely, and write correct sentences.',am:'የትምህርት ቤት ቦታዎችንና ዕቃዎችን መሰየም፣ በትህትና ፈቃድ መጠየቅና ትክክለኛ ዓረፍተ ነገር መጻፍ እችላለሁ።'},
 points:[{en:'School places: library (books), laboratory (experiments), hall (meetings), café (tea), gate (entrance), rest-room (washing).',am:'የትምህርት ቤት ቦታዎች፦ library (መጻሕፍት)፣ laboratory (ሙከራ)፣ hall (ስብሰባ)፣ café (ሻይ)፣ gate (መግቢያ)፣ rest-room (መታጠቢያ)።'},{en:'Ask permission with May I…? Can I…? Could I…? Answer: Yes, you may. / No, you may not.',am:'ፈቃድ በ May I…? Can I…? Could I…? ይጠየቃል። መልስ፦ Yes, you may. / No, you may not.'},{en:'Capital letters: start of a sentence, names, places, days, months, languages, and the word I.',am:'ትልቅ ፊደል፦ የዓረፍተ ነገር መጀመሪያ፣ ስሞች፣ ቦታዎች፣ ቀናት፣ ወራት፣ ቋንቋዎችና I።'},{en:'A telling sentence ends with a full stop (.), a question with a question mark (?).',am:'የሚነግር ዓረፍተ ነገር በ(.)፣ ጥያቄ በ(?) ያልቃል።'}],
 words:[['library',{en:'place for books',am:'ቤተ መጻሕፍት'}],['laboratory',{en:'place for experiments',am:'ቤተ ሙከራ'}],['protractor',{en:'tool to measure angles',am:'ማዕዘን መለኪያ'}],['permission',{en:'being allowed',am:'ፈቃድ'}]],
 remember:{en:'"Could I…, please?" is the most polite way to ask.',am:'"Could I…, please?" በጣም ትሁት የአጠያየቅ መንገድ ነው።'},
 exam:[[{en:'Correct this: "on monday i go to gondar."',am:'አስተካክሉ፦ "on monday i go to gondar."'},'On Monday I go to Gondar.'],[{en:'Ask to use a ruler politely.',am:'ማስመሪያ ለመጠቀም በትህትና ጠይቁ።'},'May I use your ruler, please?'],[{en:'Where do we do experiments?',am:'ሙከራ የምንሠራው የት ነው?'},'In the laboratory.'],[{en:'. or ? → "What is your name"',am:'. ወይስ ? → "What is your name"'},'?']],
 innovate:{title:{en:'School welcome guide',am:'የትምህርት ቤት መምሪያ'},text:{en:'Visitors and new students get lost. Make an English and Amharic welcome guide with a map of your school.',am:'እንግዶችና አዲስ ተማሪዎች ይጠፋሉ። የትምህርት ቤታችሁ ካርታ ያለው የእንግሊዝኛና የአማርኛ መምሪያ ሥሩ።'},
  steps:[{en:'Walk around and list every place in your school.',am:'ዞር ብላችሁ የትምህርት ቤቱን ቦታዎች ሁሉ ዘርዝሩ።'},{en:'Draw a map and label it in English.',am:'ካርታ ሳሉና በእንግሊዝኛ ሰይሙት።'},{en:'Add one polite sentence for each place: "May I borrow a book?"',am:'ለእያንዳንዱ ቦታ አንድ ትሁት ዓረፍተ ነገር ጨምሩ፦ "May I borrow a book?"'},{en:'Give it to a new student and ask for feedback.',am:'ለአዲስ ተማሪ ስጡና አስተያየት ጠይቁ።'}]}}}
 ]});
})();
