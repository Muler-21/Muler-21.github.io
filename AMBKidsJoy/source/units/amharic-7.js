/* አማርኛ · ምዕራፍ 7 · ግብርና */
Unit.start({
 id:'amharic-7',subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 7',am:'ምዕራፍ 7'},
 title:{en:'Agriculture (ግብርና)',am:'ግብርና'},
 footer:{en:'Built on the Grade 3 Amharic student book, Chapter 7. The story here is new, written for this unit.',am:'በ3ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 7 ላይ የተመሰረተ። ታሪኩ ለዚህ ክፍል አዲስ የተጻፈ ነው።'},
 missions:[
 {title:{en:'Reading',am:'አንብቦ መረዳት'},type:'quiz',
  tip:{en:'Read about a smart farmer. What made her harvest better?',am:'ስለ አንዲት ብልህ አርሶ አደር አንብቡ። ምርቷን የተሻለ ያደረገው ምንድን ነው?'},
  passage:{title:'ብልኋ አርሶ አደር',paras:[
   'ወይዘሮ አልማዝ በተራራ ጎን ያለ ትንሽ ማሳ አላቸው። ቀደም ሲል ዝናብ ሲዘንብ ጎርፍ አፈሩን ጠራርጎ ይወስደው ነበር።',
   'የግብርና ባለሙያው መክሯቸው በማሳቸው ላይ እርከን ሠሩ። ከቤት የሚወጣውን ቆሻሻ በጥንቃቄ ሰብስበው ብስባሽ (ኮምፖስት) አዘጋጁ።',
   'ዘሩን በመስመር ዘሩ፤ አረሙን ቶሎ ቶሎ አረሙ። በመኸር ወቅት ከበፊቱ እጥፍ ምርት አገኙ።',
   'ወይዘሮ አልማዝ “በብልሃት ያረሰ እንደልቡ ይጎርሳል” እያሉ ልምዳቸውን ለጎረቤቶቻቸው አካፈሉ።']},
  items:[
   {q:'ቀደም ሲል የማሳው ችግር ምን ነበር?',o:['ጎርፍ አፈሩን ይወስድ ነበር','ፀሐይ አልነበረም','ዘር አልነበረም'],a:0},
   {q:'አፈሩን ለመጠበቅ ምን ሠሩ?',o:['እርከን','ቤት','መንገድ'],a:0},
   {q:'ብስባሽ የተዘጋጀው ከምንድን ነው?',o:['ከቤት ከሚወጣ ቆሻሻ','ከድንጋይ','ከፕላስቲክ'],a:0},
   {q:'“አረሙን ቶሎ ቶሎ አረሙ” — ድርጊቱ እንዴት እንደተፈጸመ የሚገልጸው ቃል?',o:['ቶሎ ቶሎ','አረሙን','አረሙ'],a:0,e:'“ቶሎ ቶሎ” ተውሳከ ግስ ነው።'},
   {q:'ውጤቱ ምን ሆነ?',o:['ከበፊቱ እጥፍ ምርት አገኙ','ማሳው ጠፋ','ምንም አልተለወጠም'],a:0}
  ]},
 {title:{en:'Adverbs',am:'ተውሳከ ግስ'},type:'quiz',
  tip:{en:'An adverb (ተውሳከ ግስ) tells WHEN, WHERE or HOW an action happens: ቶሎ, ሁልጊዜ, ጠዋት, ትናንት, እንደገና, ክፉኛ.',am:'ተውሳከ ግስ ድርጊት መቼ፣ የት፣ እንዴት እንደተፈጸመ ይገልጻል፦ ቶሎ፣ ሁልጊዜ፣ ጠዋት፣ ትናንት፣ እንደገና፣ ክፉኛ።'},
  items:[
   {q:'ጥሩነሽ ሩጫውን ___ ጨረሰች።',o:['ቶሎ','ቀይ','በሬ'],a:0},
   {q:'___ ወደ ትምህርት ቤት እሄዳለሁ።',o:['ሁልጊዜ','ትልቅ','ማሳ'],a:0},
   {q:'የቤት ሥራውን ለማስተካከል ___ ሠራን።',o:['እንደገና','ወፍራም','ገበሬ'],a:0},
   {q:'“ሰውዬው ክፉኛ ወደቀ።” ተውሳከ ግሱ?',o:['ክፉኛ','ሰውዬው','ወደቀ'],a:0},
   {q:'“ትናንት ዘር ዘራን።” “ትናንት” ምን ይገልጻል?',o:['መቼ','የት','ማን'],a:0}
  ]},
 {title:{en:'Adjective or adverb?',am:'ቅጽል ወይስ ተውሳከ ግስ?'},type:'sort',
  tip:{en:'Adjectives describe NOUNS (ትልቅ በሬ). Adverbs describe ACTIONS (ቶሎ ሄደ).',am:'ቅጽሎች ስሞችን ይገልጻሉ (ትልቅ በሬ)። ተውሳከ ግሶች ድርጊቶችን ይገልጻሉ (ቶሎ ሄደ)።'},
  buckets:['ቅጽል','ተውሳከ ግስ'],
  items:[{t:'ትልቅ',b:0},{t:'ሰማያዊ',b:0},{t:'ጀግና',b:0},{t:'ለም',b:0},{t:'ሁልጊዜ',b:1},{t:'ቶሎ',b:1},{t:'ጠዋት',b:1},{t:'ትናንት',b:1}]},
 {title:{en:'Farm tools',am:'የእርሻ መሣሪያዎች'},type:'match',
  tip:{en:'Match each farm tool or animal with its job.',am:'እያንዳንዱን የእርሻ መሣሪያ ወይም እንስሳ ከሥራው ጋር አዛምዱ።'},
  rounds:[[['ማረሻ','መሬትን ለማረስ'],['ማጭድ','ሰብል ለማጨድ'],['ቀንበር','በሬዎችን ለማጣመር'],['መንሽ','እህል ለማበጠር'],['በሬ','ማረሻ ለመሳብ']]]},
 {title:{en:'From seed to harvest',am:'ከዘር እስከ ምርት'},type:'order',vertical:true,
  tip:{en:'Put the farming steps in order.',am:'የእርሻ ደረጃዎችን በቅደም ተከተል አስቀምጡ።'},help:{en:'Tap from first to last.',am:'ከመጀመሪያው እስከ መጨረሻው ንኩ።'},
  rounds:[{items:['መሬቱን ማረስ','ዘር መዝራት','አረም ማረም','ሰብሉን ማጨድ','እህሉን መውቃት','በጎተራ ማስቀመጥ']}]},
 {type:'exam',items:[
   {q:'ተውሳከ ግስ ምንን ይገልጻል?',o:['ድርጊት መቼ፣ የት፣ እንዴት እንደተፈጸመ','የስም ቀለም','የነገር ስም'],a:0},
   {q:'“ገበሬው ጠዋት አረሰ።” ተውሳከ ግሱ?',o:['ጠዋት','ገበሬው','አረሰ'],a:0},
   {q:'ጎርፍ አፈርን እንዳይወስድ…',o:['እርከን መሥራት','ዛፍ መቁረጥ','ማሳውን መተው'],a:0},
   {q:'ሰብል ለማጨድ የሚያገለግለው?',o:['ማጭድ','ቀንበር','ማረሻ'],a:0},
   {q:'“ለም መሬት” — ለም?',o:['ቅጽል','ተውሳከ ግስ','ግስ'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Smart farming protects the soil and gives more harvest. Adverbs tell when, where and how actions happen.',am:'ብልህ ግብርና አፈርን ይጠብቃል፤ ተጨማሪ ምርት ይሰጣል። ተውሳከ ግሶች ድርጊቶች መቼ፣ የትና እንዴት እንደሚፈጸሙ ይነግራሉ።'},
  points:[{en:'Terraces stop floods from washing soil away.',am:'እርከን ጎርፍ አፈርን እንዳይወስድ ይከላከላል።'},{en:'Compost makes the soil fertile.',am:'ብስባሽ አፈርን ለም ያደርጋል።'},{en:'Steps: plough → sow → weed → harvest → thresh → store.',am:'ደረጃዎች፦ ማረስ → መዝራት → ማረም → ማጨድ → መውቃት → ማስቀመጥ።'},{en:'Adverbs: ቶሎ, ሁልጊዜ, ጠዋት, ትናንት, እንደገና.',am:'ተውሳከ ግሶች፦ ቶሎ፣ ሁልጊዜ፣ ጠዋት፣ ትናንት፣ እንደገና።'}],
  words:[['ተውሳከ ግስ',{en:'adverb',am:'ድርጊትን የሚገልጽ'}],['እርከን',{en:'terrace',am:'በተራራ ጎን የሚሠራ ደረጃ'}],['ብስባሽ',{en:'compost',am:'ከበሰበሰ ቆሻሻ የሚሠራ ማዳበሪያ'}]],
  remember:'በብልሃት ያረሰ እንደልቡ ይጎርሳል።',
  exam:[['“ሁልጊዜ” የቃል ክፍሉ?','ተውሳከ ግስ'],['ከመዝራት በፊት ምን ይደረጋል?','ማረስ'],['ብስባሽ ምን ይጠቅማል?','አፈርን ለም ያደርጋል']],
  innovate:{title:{en:'Compost for sale',am:'ብስባሽ ለሽያጭ'},text:{en:'Kitchen waste can become valuable compost. Plan a small compost project.',am:'የማዕድ ቤት ቆሻሻ ዋጋ ያለው ብስባሽ ሊሆን ይችላል። ትንሽ የብስባሽ ፕሮጀክት አቅዱ።'},
   steps:[{en:'Collect peels and leaves (no plastic!) in a pit or box.',am:'ልጣጭና ቅጠል (ፕላስቲክ ሳይሆን!) በጉድጓድ ወይም በሣጥን ሰብስቡ።'},{en:'Mix with soil, keep it damp, turn it every week.',am:'ከአፈር ጋር አቀላቅሉ፣ እርጥብ አድርጉ፣ በየሳምንቱ ገልብጡ።'},{en:'Use it in a garden and compare plant growth.',am:'በጓሮ ተጠቀሙበት፤ የተክሎችን እድገት አነጻጽሩ።'},{en:'Who might buy compost? Make an Amharic advert.',am:'ብስባሽ ማን ሊገዛ ይችላል? የአማርኛ ማስታወቂያ ሥሩ።'}]}}}
 ]});
