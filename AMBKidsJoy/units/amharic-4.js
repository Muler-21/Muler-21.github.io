/* አማርኛ · ምዕራፍ 4 · የጊዜ አጠቃቀም */
Unit.start({
 id:'amharic-4',subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 4',am:'ምዕራፍ 4'},
 title:{en:'Using Time (የጊዜ አጠቃቀም)',am:'የጊዜ አጠቃቀም'},
 footer:{en:'Built on the Grade 3 Amharic student book, Chapter 4. The story here is new, written for this unit.',am:'በ3ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 4 ላይ የተመሰረተ። ታሪኩ ለዚህ ክፍል አዲስ የተጻፈ ነው።'},
 missions:[
 {title:{en:'Reading',am:'አንብቦ መረዳት'},type:'quiz',
  tip:{en:'Read about Haset and how she plans her day. Then answer.',am:'ሐሴት ቀኗን እንዴት እንደምታቅድ አንብቡ። ከዚያ መልሱ።'},
  passage:{title:'የሐሴት የጊዜ ሰሌዳ',paras:[
   'ሐሴት የሦስተኛ ክፍል ተማሪ ናት። ቀደም ሲል ጊዜዋን በአግባቡ ስለማትጠቀም የቤት ሥራዋን ሳትሠራ ትቀር ነበር።',
   'አንድ ቀን መምህሯ የጊዜ ሰሌዳ እንድታዘጋጅ መከሯት። ሐሴትም ጠዋት ተነስታ ፊቷን ትታጠባለች፤ ቁርስ በልታ ወደ ትምህርት ቤት ትሄዳለች።',
   'ከሰዓት በኋላ መጀመሪያ የቤት ሥራዋን ትሠራለች፤ ቀጥሎ እናቷን ትረዳለች። ከዚያ ከጓደኞቿ ጋር ትጫወታለች። ማታ ቀድማ ትተኛለች።',
   'አሁን ሐሴት ጎበዝ ተማሪ ሆናለች። “ጊዜ ወርቅ ነው” ትላለች።']},
  items:[
   {q:'ሐሴት ቀደም ሲል ምን ችግር ነበረባት?',o:['ታመመች','የቤት ሥራዋን ሳትሠራ ትቀር ነበር','ትምህርት ቤት አልሄደችም','ጓደኛ አልነበራትም'],a:1},
   {q:'ሐሴት የጊዜ ሰሌዳ እንድታዘጋጅ የመከራት ማን ነው?',o:['እናቷ','መምህሯ','ጓደኛዋ','ወንድሟ'],a:1},
   {q:'ከሰዓት በኋላ መጀመሪያ የምትሠራው ምንድን ነው?',o:['ትጫወታለች','የቤት ሥራዋን','ትተኛለች','ቴሌቪዥን ታያለች'],a:1,e:'አስፈላጊውን ሥራ አስቀድማ ትሠራለች፤ ጨዋታ በኋላ ይመጣል።'},
   {q:'“ጊዜ ወርቅ ነው” ማለት ምን ማለት ነው?',o:['ጊዜ በገንዘብ ይገዛል','ጊዜ እንደ ወርቅ ውድ ስለሆነ በአግባቡ መጠቀም አለብን','ወርቅ ጊዜ ይቆጥራል'],a:1},
   {q:'የጊዜ ሰሌዳ ሐሴትን እንዴት ረዳት?',o:['ጎበዝ ተማሪ ሆነች','ብዙ ተኛች','ትምህርት አቋረጠች'],a:0}
  ]},
 {title:{en:'Verbs',am:'ግስ'},type:'sort',
  tip:{en:'A verb (ግስ) shows an action and usually comes at the end of an Amharic sentence: ተማረ, ሄደ, ተኛ. Nouns name things. Sort the words.',am:'ግስ ድርጊትን የሚያመላክትና በዓረፍተ ነገር መጨረሻ የሚመጣ ቃል ነው፦ ተማረ፣ ሄደ፣ ተኛ። ስም ነገሮችን ይሰይማል። ቃላቱን መድቡ።'},
  buckets:[{en:'Verb (ግስ)',am:'ግስ'},{en:'Noun (ስም)',am:'ስም'}],
  items:[{t:'ታጠበች',b:0},{t:'ተጫወተ',b:0},{t:'አጠናች',b:0},{t:'ተኛ',b:0},{t:'ሰዓት',b:1},{t:'ቁርስ',b:1},{t:'መምህር',b:1},{t:'ደብተር',b:1},{t:'ሄደች',b:0}]},
 {title:{en:'Find the verb',am:'ግሱን ፈልጉ'},type:'quiz',
  tip:{en:'Look at the end of the sentence. That is usually where the verb lives!',am:'የዓረፍተ ነገሩን መጨረሻ እዩ። ግሱ ብዙ ጊዜ እዚያ ይገኛል!'},
  items:[
   {q:'ሐሴት የቤት ሥራዋን ሠራች።',o:['ሐሴት','የቤት ሥራዋን','ሠራች'],a:2},
   {q:'ልጆቹ በሜዳ ተጫወቱ።',o:['ልጆቹ','በሜዳ','ተጫወቱ'],a:2},
   {q:'አባቴ ማለዳ ወደ እርሻ ሄደ።',o:['አባቴ','ማለዳ','ሄደ'],a:2},
   {q:'ትህትና በሰፈራችን አለፈች።',o:['ትህትና','ሰፈራችን','አለፈች'],a:2}
  ]},
 {title:{en:'Times of day',am:'የቀን ክፍሎች'},type:'match',
  tip:{en:'Match each time of day with what Haset does then.',am:'እያንዳንዱን የቀን ክፍል ሐሴት በዚያን ጊዜ ከምታደርገው ጋር አዛምዱ።'},
  rounds:[[['ጠዋት','ፊቷን ታጥባ ቁርስ ትበላለች'],['ረፋድ','ትምህርት ቤት ትማራለች'],['ከሰዓት በኋላ','የቤት ሥራ ትሠራለች'],['ማታ','ቀድማ ትተኛለች']]]},
 {title:{en:'Plan a good day',am:'መልካም ቀን ማቀድ'},type:'order',vertical:true,
  tip:{en:'Put Haset\'s day in order. Notice: important work comes before play.',am:'የሐሴትን ቀን በቅደም ተከተል አስቀምጡ። አስተውሉ፦ አስፈላጊ ሥራ ከጨዋታ ይቀድማል።'},help:{en:'Tap from morning to night.',am:'ከጠዋት እስከ ማታ ንኩ።'},
  rounds:[{items:['ከእንቅልፍ መነሳት','ፊት መታጠብና ቁርስ መብላት','ትምህርት ቤት መሄድ','የቤት ሥራ መሥራት','እናትን መርዳት','ከጓደኞች ጋር መጫወት','ቀድሞ መተኛት']}]},
 {type:'exam',items:[
   {q:'ግስ ማለት…',o:['ድርጊትን የሚያመላክት ቃል','የነገር ስም','ምልክት'],a:0},
   {q:'ከሚከተሉት ግስ የሆነው?',o:['ሮጠች','ሰዓት','መጽሐፍ'],a:0},
   {q:'“ጊዜ ወርቅ ነው” ምን ያስተምራል?',o:['ጊዜን በአግባቡ መጠቀም','ወርቅ መግዛት','ብዙ መተኛት'],a:0},
   {q:'ከሰዓት በኋላ መጀመሪያ መሠራት ያለበት?',o:['የቤት ሥራ','ጨዋታ','እንቅልፍ'],a:0},
   {q:'“ልጁ ወደ ቤት ሮጠ።” ግሱ?',o:['ልጁ','ቤት','ሮጠ'],a:2}]},
 {type:'notes',notes:{
  big:{en:'Using time well makes us successful. Verbs (ግስ) are action words.',am:'ጊዜን በአግባቡ መጠቀም ስኬታማ ያደርገናል። ግስ የድርጊት ቃል ነው።'},
  points:[{en:'Make a timetable: important work first, then play, then rest.',am:'የጊዜ ሰሌዳ አዘጋጁ፦ አስፈላጊ ሥራ መጀመሪያ፣ ከዚያ ጨዋታ፣ ከዚያ እረፍት።'},{en:'Times of day: ጠዋት, ረፋድ, ቀትር, ከሰዓት በኋላ, ማታ, ሌሊት.',am:'የቀን ክፍሎች፦ ጠዋት፣ ረፋድ፣ ቀትር፣ ከሰዓት በኋላ፣ ማታ፣ ሌሊት።'},{en:'A verb shows action and usually ends the sentence: ሠራች, ሄደ.',am:'ግስ ድርጊትን ያሳያል፤ ብዙ ጊዜ ዓረፍተ ነገሩን ይጨርሳል፦ ሠራች፣ ሄደ።'}],
  words:[['ግስ',{en:'verb',am:'የድርጊት ቃል'}],['የጊዜ ሰሌዳ',{en:'timetable',am:'የሥራዎች የጊዜ እቅድ'}]],
  remember:'ጊዜ ወርቅ ነው።',
  exam:[['“ተማሪዋ መጽሐፍ አነበበች።” ግሱ?','አነበበች'],['የቀን ክፍሎችን በቅደም ተከተል ጥቀሱ።','ጠዋት፣ ቀትር፣ ማታ፣ ሌሊት'],['ሐሴት ምን ለውጥ አመጣች?','የጊዜ ሰሌዳ አዘጋጅታ ጎበዝ ሆነች']],
  innovate:{title:{en:'Timetable maker',am:'የጊዜ ሰሌዳ ሠሪ'},text:{en:'Many families struggle to organise time. Design a colourful family timetable poster.',am:'ብዙ ቤተሰቦች ጊዜያቸውን ማደራጀት ይቸገራሉ። ባለ ቀለም የቤተሰብ የጊዜ ሰሌዳ ፖስተር ንድፍ አውጡ።'},
   steps:[{en:'Interview family members: what must each person do daily?',am:'የቤተሰብ አባላትን ጠይቁ፦ እያንዳንዱ በየቀኑ ምን መሥራት አለበት?'},{en:'Draw a table with times of day and tasks.',am:'የቀን ክፍሎችና ሥራዎች ያሉት ሰንጠረዥ ሳሉ።'},{en:'Use verbs to describe each task.',am:'እያንዳንዱን ሥራ በግስ ግለጹ።'},{en:'After a week, ask: did it help? Improve it.',am:'ከሳምንት በኋላ ጠይቁ፦ ረዳ? አሻሽሉት።'}]}}}
 ]});
