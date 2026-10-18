/* አማርኛ · ምዕራፍ 5 · መጓጓዣ */
Unit.start({
 id:'amharic-5',subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 5',am:'ምዕራፍ 5'},
 title:{en:'Transport (መጓጓዣ)',am:'መጓጓዣ'},
 footer:{en:'Built on the Grade 3 Amharic student book, Chapter 5. The story here is new, written for this unit.',am:'በ3ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 5 ላይ የተመሰረተ። ታሪኩ ለዚህ ክፍል አዲስ የተጻፈ ነው።'},
 missions:[
 {title:{en:'Reading',am:'አንብቦ መረዳት'},type:'quiz',
  tip:{en:'Read about Jemila\'s trip, then answer. Look for the transport words!',am:'ስለ ጀሚላ ጉዞ አንብቡ፤ ከዚያ መልሱ። የመጓጓዣ ቃላትን ፈልጉ!'},
  passage:{title:'የጀሚላ ጉዞ',paras:[
   'ጀሚላ ከአባቷ ጋር አያቷን ለመጠየቅ ወደ ባሕር ዳር ሄደች። ከመንደራቸው እስከ ዋናው መንገድ በበቅሎ ተጓዙ።',
   'ከዚያ ትልቅ ሰማያዊ አውቶቡስ ተሳፈሩ። በመንገድ ላይ አባቷ “መንገድ ስትሻገሪ ግራና ቀኝ ተመልከቺ፤ በእግረኛ ማቋረጫ ተጠቀሚ” ብለው መከሯት።',
   'ባሕር ዳር ሲደርሱ በጣና ሐይቅ ላይ በጀልባ ተዝናኑ። ጀሚላ ፈጣን ጀልባዎችንና ቀስ ብለው የሚሄዱ የታንኳ ጀልባዎችን አየች።',
   'ጀሚላ “መጓጓዣዎች ሰዎችንና ዕቃዎችን ያገናኛሉ” አለች።']},
  items:[
   {q:'ጀሚላ ወደ ባሕር ዳር የሄደችው ለምንድን ነው?',o:['አያቷን ለመጠየቅ','ለመማር','ለመገበያየት'],a:0},
   {q:'እስከ ዋናው መንገድ በምን ተጓዙ?',o:['በአውቶቡስ','በበቅሎ','በጀልባ'],a:1},
   {q:'አባቷ ምን መከሯት?',o:['በፍጥነት እንድትሮጥ','መንገድ ስትሻገር ግራና ቀኝ እንድትመለከት','እንድትተኛ'],a:1},
   {q:'በጣና ሐይቅ ላይ በምን ተዝናኑ?',o:['በጀልባ','በባቡር','በአውሮፕላን'],a:0},
   {q:'“ትልቅ ሰማያዊ አውቶቡስ” በሚለው ሐረግ ውስጥ አውቶቡሱን የሚገልጹት ቃላት?',o:['ትልቅ፣ ሰማያዊ','አውቶቡስ','ተሳፈሩ'],a:0,e:'እነዚህ ቅጽሎች ናቸው።'}
  ]},
 {title:{en:'Land, water or air?',am:'የየብስ፣ የውኃ ወይስ የአየር?'},type:'sort',
  tip:{en:'Transport moves people and goods on land, on water or in the air. Sort each one.',am:'መጓጓዣዎች ሰዎችንና ዕቃዎችን በየብስ፣ በውኃ ወይም በአየር ያጓጉዛሉ። እያንዳንዱን መድቡ።'},
  buckets:['የየብስ','የውኃ','የአየር'],
  items:[{t:'መኪና',b:0},{t:'ባቡር',b:0},{t:'በቅሎ',b:0},{t:'ብስክሌት',b:0},{t:'ጀልባ',b:1},{t:'መርከብ',b:1},{t:'ታንኳ',b:1},{t:'አውሮፕላን',b:2},{t:'ሄሊኮፕተር',b:2}]},
 {title:{en:'Adjectives',am:'ቅጽል'},type:'quiz',
  tip:{en:'An adjective (ቅጽል) describes a noun: its kind, quality or size. In "ቀይ በሬ", the adjective ቀይ comes before the noun በሬ.',am:'ቅጽል የስሞችን ዓይነት፣ ባሕርይ ወይም መጠን የሚገልጽ ቃል ነው። “ቀይ በሬ” በሚለው ውስጥ ቅጽሉ ቀይ ከስሙ (በሬ) በፊት ይመጣል።'},
  items:[
   {q:'“ፈጣን ባቡር” — ቅጽሉ የትኛው ነው?',o:['ፈጣን','ባቡር'],a:0},
   {q:'“ወፍራም በግ” — ቅጽሉ የትኛው ነው?',o:['በግ','ወፍራም'],a:1},
   {q:'“የዋህ ልጅ” — ቅጽሉ ምንን ይገልጻል?',o:['ባሕርይን','ቀለምን','መጠንን'],a:0},
   {q:'ለ“መርከብ” ተስማሚ ቅጽል የትኛው ነው?',o:['ግዙፍ','ሮጠ','ትናንት'],a:0},
   {q:'ከሚከተሉት ቅጽል ያልሆነው?',o:['ረጅም','ቀይ','ተሳፈረ'],a:2,e:'ተሳፈረ ግስ ነው።'}
  ]},
 {title:{en:'Road safety',am:'የመንገድ ደህንነት'},type:'sort',
  tip:{en:'Pedestrians must be careful. Sort the actions: safe or dangerous?',am:'እግረኞች መጠንቀቅ አለባቸው። ተግባራቱን መድቡ፦ ደህንነቱ የተጠበቀ ወይስ አደገኛ?'},
  buckets:[{en:'Safe',am:'ደህንነቱ የተጠበቀ'},{en:'Dangerous',am:'አደገኛ'}],
  items:[{t:'በእግረኛ ማቋረጫ መሻገር',b:0},{t:'ግራና ቀኝ አይቶ መሻገር',b:0},{t:'በመንገድ ላይ ኳስ መጫወት',b:1},{t:'በመኪና መካከል መሮጥ',b:1},{t:'በመንገዱ ዳር በግራ በኩል መሄድ',b:0},{t:'ከሚንቀሳቀስ መኪና መውረድ',b:1}]},
 {title:{en:'Making plurals with እነ-',am:'በ“እነ-” ብዙ ቁጥር'},type:'quiz',
  tip:{en:'Adding እነ- before a name means "that person and their group": ጀሚላ → እነጀሚላ.',am:'ከስም በፊት እነ- ሲጨመር “እሱ/እሷና አብረውት ያሉት” ማለት ነው፦ ጀሚላ → እነጀሚላ።'},
  items:[
   {q:'“ካሳሁን” በእነ- ቅጥያ?',o:['እነካሳሁን','ካሳሁኖች','ካሳሁናት'],a:0},
   {q:'“እነጀሚላ የሰፈራችን ልጆች ናቸው።” እነጀሚላ ማለት…',o:['ጀሚላ ብቻ','ጀሚላና ጓደኞቿ','የጀሚላ ቤት'],a:1},
   {q:'“አውቶቡስ” ብዙ ቁጥሩ?',o:['አውቶቡሶች','እነአውቶቡስ','አውቶቡሳት'],a:0}
  ]},
 {type:'exam',items:[
   {q:'ጀልባ የምን መጓጓዣ ነው?',o:['የውኃ','የአየር','የየብስ'],a:0},{q:'ቅጽል ማለት…',o:['ስምን የሚገልጽ ቃል','ድርጊት','ምልክት'],a:0},
   {q:'“ረጅም ባቡር” — ቅጽሉ?',o:['ረጅም','ባቡር'],a:0},{q:'መንገድ ከመሻገር በፊት…',o:['ግራና ቀኝ ማየት','መሮጥ','ዓይን መጨፈን'],a:0},{q:'“ዮናስ” በእነ-?',o:['እነዮናስ','ዮናሶች'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Transport connects people and goods by land, water and air. Adjectives describe nouns. Safety first on the road!',am:'መጓጓዣዎች ሰዎችንና ዕቃዎችን በየብስ፣ በውኃና በአየር ያገናኛሉ። ቅጽሎች ስሞችን ይገልጻሉ። በመንገድ ላይ ደህንነት ይቅደም!'},
  points:[{en:'Land: መኪና, ባቡር, በቅሎ. Water: ጀልባ, መርከብ. Air: አውሮፕላን.',am:'የየብስ፦ መኪና፣ ባቡር፣ በቅሎ። የውኃ፦ ጀልባ፣ መርከብ። የአየር፦ አውሮፕላን።'},{en:'Adjective + noun: ፈጣን ባቡር, ቀይ በሬ.',am:'ቅጽል + ስም፦ ፈጣን ባቡር፣ ቀይ በሬ።'},{en:'እነ- + name = the person and their group.',am:'እነ- + ስም = ሰውየውና አብረውት ያሉት።'},{en:'Cross at the crossing, look left and right, walk on the side of the road.',am:'በማቋረጫ ተሻገሩ፣ ግራና ቀኝ እዩ፣ በመንገዱ ዳር ሂዱ።'}],
  words:[['መጓጓዣ',{en:'transport',am:'ማጓጓዣ መንገድ ወይም ዕቃ'}],['ቅጽል',{en:'adjective',am:'ስምን የሚገልጽ ቃል'}],['እግረኛ',{en:'pedestrian',am:'በእግሩ የሚሄድ ሰው'}]],
  remember:{en:'Stop, look left, look right, then cross.',am:'ቁሙ፣ ግራ እዩ፣ ቀኝ እዩ፣ ከዚያ ተሻገሩ።'},
  exam:[['አውሮፕላን የምን መጓጓዣ ነው?','የአየር'],['“ትንሽ ጀልባ” ቅጽሉ?','ትንሽ'],['እነ + ሐና = ?','እነሐና']],
  innovate:{title:{en:'Safer school route',am:'ደህንነቱ የተጠበቀ የትምህርት ቤት መንገድ'},text:{en:'Traffic accidents hurt many children. Design a safer route to school and a safety sign.',am:'የትራፊክ አደጋዎች ብዙ ልጆችን ይጎዳሉ። ወደ ትምህርት ቤት ደህንነቱ የተጠበቀ መንገድና የደህንነት ምልክት ንድፍ አውጡ።'},
   steps:[{en:'Draw your route and mark dangerous spots.',am:'መንገዳችሁን ሳሉ፤ አደገኛ ቦታዎችን ምልክት አድርጉ።'},{en:'Suggest one change: a crossing, a sign, or walking in groups.',am:'አንድ ለውጥ አቅርቡ፦ ማቋረጫ፣ ምልክት ወይም በቡድን መሄድ።'},{en:'Make an Amharic sign with adjectives (e.g. “ጥንቃቄ! አደገኛ መታጠፊያ”).',am:'ቅጽሎች ያሉበት የአማርኛ ምልክት ሥሩ (ለምሳሌ “ጥንቃቄ! አደገኛ መታጠፊያ”)።'},{en:'Present it to your school director.',am:'ለትምህርት ቤቱ ርዕሰ መምህር አቅርቡ።'}]}}}
 ]});
