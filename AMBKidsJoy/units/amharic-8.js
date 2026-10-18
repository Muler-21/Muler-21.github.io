/* አማርኛ · ምዕራፍ 8 · ሥራ */
Unit.start({
 id:'amharic-8',subject:'amharic',subjectName:{en:'Amharic',am:'አማርኛ'},chapter:{en:'Chapter 8',am:'ምዕራፍ 8'},
 title:{en:'Work (ሥራ)',am:'ሥራ'},
 footer:{en:'Built on the Grade 3 Amharic student book, Chapter 8. The text here is new, written for this unit.',am:'በ3ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ 8 ላይ የተመሰረተ። ጽሑፉ ለዚህ ክፍል አዲስ የተጻፈ ነው።'},
 missions:[
 {title:{en:'Reading',am:'አንብቦ መረዳት'},type:'quiz',
  tip:{en:'Read about a community famous for hard work. What can we learn from them?',am:'በትጋት ስለሚታወቅ ማኅበረሰብ አንብቡ። ከእነሱ ምን እንማራለን?'},
  passage:{title:'የሥራ ባህል',paras:[
   'በደቡብ ጎንደር ዞን የሚገኘው የአውራምባ ማኅበረሰብ በሥራ ባህሉ ይታወቃል። አባላቱ ሁሉንም ሥራ በጋራና በትጋት ይሠራሉ።',
   'በዚህ ማኅበረሰብ ውስጥ ሴቶችም ወንዶችም ሁሉንም ዓይነት ሥራ ይሠራሉ። ሽመና፣ እርሻና ምግብ ማብሰል የሁሉም ሥራ ነው።',
   'ልጆች ይማራሉ፤ አረጋውያን ይከበራሉ፤ ሥራ ያለ ምንም ልዩነት ይከፋፈላል።',
   'ይህ ማኅበረሰብ “ሥራ ክብር ነው” የሚለውን አስተሳሰብ በተግባር ያሳያል።']},
  items:[
   {q:'የአውራምባ ማኅበረሰብ የሚገኘው በየትኛው ዞን ነው?',o:['ደቡብ ጎንደር','ምዕራብ ጎጃም','ሰሜን ወሎ'],a:0},
   {q:'ማኅበረሰቡ በምን ይታወቃል?',o:['በሥራ ባህሉ','በጦርነት','በስፖርት'],a:0},
   {q:'በማኅበረሰቡ ውስጥ ሥራ የሚከፋፈለው እንዴት ነው?',o:['ሴቶችም ወንዶችም ሁሉንም ሥራ ይሠራሉ','ሴቶች ብቻ ይሠራሉ','ወንዶች ብቻ ይሠራሉ'],a:0},
   {q:'“ሥራ ክብር ነው” ማለት…',o:['ሥራ መሥራት የሚያስከብር ነው','ሥራ ማፈር ነው','ሥራ አያስፈልግም'],a:0}
  ]},
 {title:{en:'Who does what?',am:'ማን ምን ይሠራል?'},type:'match',
  tip:{en:'Every job is important. Match each worker with their work.',am:'እያንዳንዱ ሥራ አስፈላጊ ነው። እያንዳንዱን ባለሙያ ከሥራው ጋር አዛምዱ።'},
  rounds:[[['አናጺ','ከእንጨት ወንበርና በር ይሠራል'],['ሸማኔ','ጥጥን ፈትሎ ልብስ ይሸምናል'],['ሀኪም','ህሙማንን ያክማል'],['መምህር','ተማሪዎችን ያስተምራል']],[['አርሶ አደር','እህል ያመርታል'],['አንጥረኛ','ከብረት መሣሪያ ይሠራል'],['ሸክላ ሠሪ','ከአፈር ድስትና ጀበና ይሠራል'],['ነጋዴ','ዕቃ ይገዛል፣ ይሸጣል']]]},
 {title:{en:'Possessive endings',am:'የባለቤትነት ቅጥያ'},type:'quiz',
  tip:{en:'Amharic shows "my, your, his, her" with endings: ቤት → ቤቴ (my), ቤትህ (your, boy), ቤትሽ (your, girl), ቤቱ (his), ቤቷ (her).',am:'አማርኛ ባለቤትነትን በቅጥያ ያሳያል፦ ቤት → ቤቴ (የኔ)፣ ቤትህ (ያንተ)፣ ቤትሽ (ያንቺ)፣ ቤቱ (የሱ)፣ ቤቷ (የሷ)።'},
  items:[
   {q:'ወደ ___ ሂጂ። (ቤት — ያንቺ)',o:['ቤትሽ','ቤትህ','ቤቴ'],a:0},
   {q:'ይህ ___ ነው። (መጽሐፍ — የኔ)',o:['መጽሐፌ','መጽሐፉ','መጽሐፍሽ'],a:0},
   {q:'አናጺው ___ አነሳ። (መዶሻ — የሱ)',o:['መዶሻውን','መዶሻሽን','መዶሻዬን'],a:0,e:'መዶሻ + ው = መዶሻው (የሱ)'},
   {q:'መምህሯ ___ ከፈተች። (ደብተር — የሷ)',o:['ደብተሯን','ደብተሩን','ደብተሬን'],a:0}
  ]},
 {title:{en:'Good work habits',am:'መልካም የሥራ ልምዶች'},type:'sort',
  tip:{en:'Which habits make a great worker? Sort them.',am:'ጎበዝ ሠራተኛ የሚያደርጉት ልምዶች የትኞቹ ናቸው? መድቧቸው።'},
  buckets:[{en:'Good habit',am:'መልካም ልምድ'},{en:'Bad habit',am:'መጥፎ ልምድ'}],
  items:[{t:'ሰዓት አክባሪ መሆን',b:0},{t:'ሥራን በጥራት መሥራት',b:0},{t:'ሥራን ማዘግየት',b:1},{t:'በጋራ መሥራት',b:0},{t:'ሥራን መናቅ',b:1},{t:'መሣሪያዎችን በጥንቃቄ መያዝ',b:0},{t:'ሌሎችን ብቻ መጠበቅ',b:1}]},
 {type:'exam',items:[
   {q:'ልብስ የሚሸምነው ማን ነው?',o:['ሸማኔ','አናጺ','ሀኪም'],a:0},{q:'“ቤቴ” ማለት…',o:['የኔ ቤት','ያንተ ቤት','የሱ ቤት'],a:0},
   {q:'የአውራምባ ማኅበረሰብ ምን ያስተምረናል?',o:['ሥራ ክብር ነው','ሥራ ለወንዶች ብቻ ነው','መሥራት አያስፈልግም'],a:0},
   {q:'መልካም የሥራ ልምድ?',o:['ሰዓት ማክበር','ሥራ ማዘግየት','ሥራ መናቅ'],a:0}]},
 {type:'notes',notes:{
  big:{en:'Every honest job is valuable. Hard work, teamwork and equality build strong communities.',am:'እያንዳንዱ ሐቀኛ ሥራ ዋጋ አለው። ትጋት፣ የቡድን ሥራና እኩልነት ጠንካራ ማኅበረሰብ ይገነባሉ።'},
  points:[{en:'Jobs: አናጺ, ሸማኔ, ሀኪም, መምህር, አርሶ አደር, አንጥረኛ, ሸክላ ሠሪ, ነጋዴ.',am:'ሙያዎች፦ አናጺ፣ ሸማኔ፣ ሀኪም፣ መምህር፣ አርሶ አደር፣ አንጥረኛ፣ ሸክላ ሠሪ፣ ነጋዴ።'},{en:'Possessive endings: -ኤ (my), -ህ (your m.), -ሽ (your f.), -ው/-ኡ (his), -ዋ (her).',am:'የባለቤትነት ቅጥያ፦ -ኤ (የኔ)፣ -ህ (ያንተ)፣ -ሽ (ያንቺ)፣ -ው/-ኡ (የሱ)፣ -ዋ (የሷ)።'},{en:'Good habits: being on time, quality work, teamwork.',am:'መልካም ልምዶች፦ ሰዓት ማክበር፣ በጥራት መሥራት፣ በጋራ መሥራት።'}],
  words:[['ሙያ',{en:'profession, skill',am:'የሥራ ዓይነትና ክህሎት'}],['ትጋት',{en:'diligence',am:'በርትቶ መሥራት'}]],
  remember:'ሥራ ክብር ነው።',
  exam:[['ከብረት መሣሪያ የሚሠራው?','አንጥረኛ'],['መጽሐፍ + የሷ = ?','መጽሐፏ'],['ሁለት መልካም የሥራ ልምዶች?','ሰዓት ማክበር፣ በጥራት መሥራት']],
  innovate:{title:{en:'Interview a worker',am:'ባለሙያን ቃለ መጠይቅ'},text:{en:'Every business starts with a skill. Interview a worker in your community and find out how they built their work.',am:'እያንዳንዱ ንግድ በክህሎት ይጀምራል። በማኅበረሰባችሁ ያለን ባለሙያ ቃለ መጠይቅ አድርጉ፤ ሥራቸውን እንዴት እንደገነቡ ጠይቁ።'},
   steps:[{en:'Prepare 5 questions (How did you learn? What is hard? What do customers want?).',am:'5 ጥያቄዎችን አዘጋጁ (እንዴት ተማሩ? ምን ይከብዳል? ደንበኞች ምን ይፈልጋሉ?)።'},{en:'Interview politely and write the answers.',am:'በትህትና ጠይቁ፤ መልሶቹን ጻፉ።'},{en:'What problem do they face? Suggest one idea to help.',am:'ምን ችግር ይገጥማቸዋል? ለመርዳት አንድ ሐሳብ አቅርቡ።'},{en:'Share the story with your class.',am:'ታሪኩን ለክፍላችሁ አካፍሉ።'}]}}}
 ]});
