/* አማርኛ · ምዕራፍ 3 · ታሪኮች */
Unit.start({
 id:'amharic-3',subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Stories (ታሪኮች)',am:'ታሪኮች'},
 footer:{en:'Built on the Grade 3 Amharic student book, Chapter 3. The story here is new, written for this unit.',am:'በ3ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 3 ላይ የተመሰረተ። ታሪኩ ለዚህ ክፍል አዲስ የተጻፈ ነው።'},
 missions:[
 {title:{en:'Reading',am:'አንብቦ መረዳት'},type:'quiz',
  tip:{en:'Read the fable. While you read, ask: Who? Where? What problem? What did they do? How did it end?',am:'ተረቱን አንብቡ። ስታነቡ ጠይቁ፦ ማን? የት? ምን ችግር? ምን አደረጉ? እንዴት አለቀ?'},
  passage:{title:'ትንሿ ወፍና ክረምቱ',paras:[
   'በአንድ ትልቅ ጫካ ውስጥ ትንሽ ወፍ፣ ጦጣና ጥንቸል ይኖሩ ነበር። በበጋው መጨረሻ ትንሿ ወፍ በየቀኑ ዘር ትሰበስብ ነበር።',
   'ጦጣና ጥንቸል “ምግብ በየቦታው አለ፤ ለምን ትደክሚያለሽ?” ብለው ሳቁባት። ወፏም “ክረምት እየመጣ ነው፤ ዛሬ ካልሰበሰብን ነገ እንራባለን” አለቻቸው።',
   'ክረምቱ ሲገባ ኃይለኛ ዝናብ ብዙ ቀን ዘነበ። ጦጣና ጥንቸል የሚበሉት አጡ። ትንሿ ወፍ ግን የሰበሰበችውን ዘር ከእነሱ ጋር ተካፈለች።',
   'ጦጣና ጥንቸል አፈሩ። “ከአሁን ጀምሮ እኛም አስቀድመን እናቅዳለን” አሉ።']},
  items:[
   {q:'የታሪኩ ገፀባሕርያት እነማን ናቸው?',o:['ወፍ፣ ጦጣና ጥንቸል','አንበሳና አይጥ','ገበሬና ልጁ','ዝሆንና ድንቢጥ'],a:0},
   {q:'ታሪኩ የተፈፀመው የት ነው?',o:['በከተማ','በጫካ ውስጥ','በትምህርት ቤት','በወንዝ ዳር'],a:1},
   {q:'ወፏ በበጋው መጨረሻ ምን ታደርግ ነበር?',o:['ትጫወት ነበር','ዘር ትሰበስብ ነበር','ትተኛ ነበር','ትዘፍን ነበር'],a:1},
   {q:'ጦጣና ጥንቸል ምን ችግር ገጠማቸው?',o:['ቤታቸው ፈረሰ','በክረምት የሚበሉት አጡ','ታመሙ','ጠፉ'],a:1},
   {q:'ወፏ ችግሩን ለመፍታት ምን አደረገች?',o:['ሸሸች','ምግቧን አካፈለች','ሳቀችባቸው','ተቆጣች'],a:1,e:'ወፏ አስቀድማ አቀደች፣ በኋላም ለጋስ ሆነች።'},
   {q:'የተረቱ ዋና ትምህርት ምንድን ነው?',o:['ዘር መብላት ጎጂ ነው','አስቀድሞ ማቀድና ማካፈል ይጠቅማል','ዝናብ መጥፎ ነው','ጫካ ውስጥ መኖር የለብንም'],a:1}
  ]},
 {title:{en:'Parts of a story',am:'የታሪክ ክፍሎች'},type:'sort',
  tip:{en:'Every story has: setting (when and where), characters, a problem, actions to solve it, and a result. Sort each part of "The Little Bird and the Rainy Season".',am:'እያንዳንዱ ታሪክ መቼት (መቼና የት)፣ ገፀባሕርያት፣ ችግር፣ ድርጊትና ውጤት አለው። የ“ትንሿ ወፍና ክረምቱ” ክፍሎችን መድቡ።'},
  buckets:['መቼት','ገፀባሕርያት','ችግር','ድርጊት','ውጤት'],
  items:[{t:'በጫካ ውስጥ፣ በበጋው መጨረሻ',b:0,short:'ጫካ፣ በጋ'},{t:'ወፍ፣ ጦጣና ጥንቸል',b:1,short:'ወፍ፣ ጦጣ፣ ጥንቸል'},{t:'በክረምት የሚበላ ምግብ ጠፋ',b:2,short:'ምግብ ጠፋ'},{t:'ወፏ ዘሩን አካፈለች',b:3,short:'አካፈለች'},{t:'ሁሉም አስቀድመው ለማቀድ ወሰኑ',b:4,short:'ለማቀድ ወሰኑ'}]},
 {title:{en:'Nouns',am:'ስም'},type:'sort',
  tip:{en:'A noun (ስም) is a word that names a person, animal, place or thing: ሰው, ዛፍ, ድመት. Other words show actions. Sort them!',am:'ስም የነገሮች መጠሪያ የሆነ ቃል ነው፦ ሰው፣ ዛፍ፣ ድመት። ሌሎች ቃላት ድርጊትን ያሳያሉ። መድቧቸው!'},
  buckets:[{en:'Noun (ስም)',am:'ስም'},{en:'Not a noun',am:'ስም ያልሆነ'}],
  items:[{t:'ወፍ',b:0},{t:'ጫካ',b:0},{t:'ዘር',b:0},{t:'ጥንቸል',b:0},{t:'ዝናብ',b:0},{t:'ሰበሰበች',b:1},{t:'ሳቁ',b:1},{t:'ተካፈለች',b:1},{t:'ዘነበ',b:1}]},
 {title:{en:'Opposites from the story',am:'ተቃራኒ ቃላት'},type:'match',
  tip:{en:'Match each word from the story with its opposite.',am:'ከታሪኩ የተወሰዱ ቃላትን ከተቃራኒያቸው ጋር አዛምዱ።'},
  rounds:[[['ትንሽ','ትልቅ'],['በጋ','ክረምት'],['ሳቀ','አለቀሰ'],['ሰበሰበ','በተነ'],['ለጋስ','ስስታም']]]},
 {title:{en:'Story order',am:'የታሪክ ቅደም ተከተል'},type:'order',vertical:true,
  tip:{en:'Retell the fable in the right order.',am:'ተረቱን በትክክለኛው ቅደም ተከተል መልሳችሁ ተርኩ።'},help:{en:'Tap the events from first to last.',am:'ድርጊቶቹን ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[{items:['ወፏ በበጋ ዘር ሰበሰበች','ጦጣና ጥንቸል ሳቁባት','ክረምት ገባ፤ ብዙ ዝናብ ዘነበ','ወፏ ዘሩን አካፈለች','ሁሉም ለማቀድ ወሰኑ']}]},
 {type:'exam',items:[
   {q:'“መቼት” የሚያመለክተው ምንን ነው?',o:['ታሪኩ የተፈፀመበትን ጊዜና ቦታ','የታሪኩን መጨረሻ','ገፀባሕርያትን'],a:0},
   {q:'ከሚከተሉት ስም የሆነው የትኛው ነው?',o:['በላ','ዛፍ','ሮጠ','ተኛ'],a:1},
   {q:'“ገፀባሕርያት” ማለት…',o:['በታሪኩ ውስጥ ድርጊቱን የሚፈጽሙ ሰዎች ወይም እንስሳት','የታሪኩ ርዕስ','ቦታው'],a:0},
   {q:'የ“ለጋስ” ተቃራኒ?',o:['ስስታም','ደግ','ጎበዝ'],a:0},
   {q:'ታሪክ የሚጀምረው በ…',o:['ውጤት','መቼትና ገፀባሕርያት','ትምህርት'],a:1}]},
 {type:'notes',notes:{
  big:{en:'Every story has a setting, characters, a problem, actions and a result. Nouns are naming words.',am:'እያንዳንዱ ታሪክ መቼት፣ ገፀባሕርያት፣ ችግር፣ ድርጊትና ውጤት አለው። ስም የመጠሪያ ቃል ነው።'},
  points:[{en:'Setting = when and where the story happens.',am:'መቼት = ታሪኩ የተፈፀመበት ጊዜና ቦታ።'},{en:'Characters = the people or animals in the story.',am:'ገፀባሕርያት = በታሪኩ ውስጥ ያሉ ሰዎች ወይም እንስሳት።'},{en:'Problem → actions → result.',am:'ችግር → ድርጊት → ውጤት።'},{en:'Fables teach a lesson (ትምህርት).',am:'ተረቶች ትምህርት ያስተላልፋሉ።'},{en:'Nouns name things: ሰው, ዛፍ, ወፍ.',am:'ስሞች ነገሮችን ይሰይማሉ፦ ሰው፣ ዛፍ፣ ወፍ።'}],
  words:[['መቼት',{en:'setting',am:'ጊዜና ቦታ'}],['ገፀባሕርይ',{en:'character',am:'ባለታሪክ'}],['ስም',{en:'noun',am:'የነገር መጠሪያ'}]],
  remember:{en:'Who? Where? When? What problem? What happened? How did it end?',am:'ማን? የት? መቼ? ምን ችግር? ምን ሆነ? እንዴት አለቀ?'},
  exam:[['የተረቱ ገፀባሕርያት?','ወፍ፣ ጦጣና ጥንቸል'],['ተረቱ ምን ያስተምራል?','አስቀድሞ ማቀድና ማካፈል'],['“ጫካ” ስም ነው?','አዎ']],
  innovate:{title:{en:'Make a storybook',am:'የታሪክ መጽሐፍ ሥሩ'},text:{en:'Young children love stories. Write and illustrate your own short Amharic fable, then share or sell it.',am:'ሕጻናት ታሪክ ይወዳሉ። የራሳችሁን አጭር የአማርኛ ተረት ጽፋችሁ በሥዕል አስውቡ፤ ከዚያ አጋሩ ወይም ሽጡ።'},
   steps:[{en:'Plan: setting, characters, problem, actions, result.',am:'አቅዱ፦ መቼት፣ ገፀባሕርያት፣ ችግር፣ ድርጊት፣ ውጤት።'},{en:'Write 6–8 sentences and draw a picture for each page.',am:'ከ6–8 ዓረፍተ ነገር ጻፉ፤ ለእያንዳንዱ ገጽ ሥዕል ሳሉ።'},{en:'Read it to a younger child. What did they like?',am:'ለታናሽ ልጅ አንብቡለት። ምን ወደደ?'},{en:'Could your class make a small library of storybooks?',am:'ክፍላችሁ ትንሽ የታሪክ መጻሕፍት ቤት መሥራት ይችላል?'}]}}}
 ]});
