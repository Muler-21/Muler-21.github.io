/* English · Unit 2 · Months of the Year */
(function(){
const M=['January','February','March','April','May','June','July','August','September','October','November','December'];
const D=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
Unit.start({
 id:'english-2',subject:'english',
 subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 2',am:'ክፍል 2'},
 title:{en:'Months of the Year',am:'የዓመቱ ወራት (Months)'},
 footer:{en:'Built on Grade 3 English for Ethiopia, Unit 2. Tap the speaker buttons to hear English words.',am:'በ3ኛ ክፍል የእንግሊዝኛ መጽሐፍ ክፍል 2 ላይ የተመሰረተ። ቃላትን ለመስማት የድምፅ ምልክቱን ንኩ።'},
 missions:[
 {title:{en:'Months in order',am:'ወራት በቅደም ተከተል'},type:'order',
  tip:{en:'There are 12 months in the English (Gregorian) calendar. Put them in order. Say each month aloud as you tap it!',am:'በእንግሊዝኛ (በጎርጎርሳውያን) አቆጣጠር 12 ወራት አሉ። በቅደም ተከተል አስቀምጧቸው። እያንዳንዱን ወር ስትነኩ ጮክ ብላችሁ በሉ!'},
  help:{en:'Tap the months in order.',am:'ወራቱን በቅደም ተከተል ንኩ።'},
  rounds:[{prompt:{en:'The first six months:',am:'የመጀመሪያዎቹ ስድስት ወራት፦'},items:M.slice(0,6),say:M.slice(0,6).join(', ')},{prompt:{en:'The last six months:',am:'የመጨረሻዎቹ ስድስት ወራት፦'},items:M.slice(6),say:M.slice(6).join(', ')}]},
 {title:{en:'Spell the months',am:'የወራት አጻጻፍ'},type:'spell',lang:'en-US',
  tip:{en:'Months always start with a capital letter. Listen, then fill in the missing letters.',am:'የወራት ስሞች ሁልጊዜ በትልቅ ፊደል ይጀምራሉ። አዳምጡ፤ ከዚያ የጎደሉትን ፊደላት ሙሉ።'},
  words:[{w:'May',blanks:[1],hint:'May'},{w:'June',blanks:[1,3],hint:'June'},{w:'April',blanks:[2,4],hint:'April'},{w:'March',blanks:[2,4],hint:'March'},{w:'August',blanks:[1,4],hint:'August'},{w:'October',blanks:[1,4,6],hint:'October'},{w:'September',blanks:[2,5,7],hint:'September'}]},
 {title:{en:'Days of the week',am:'የሳምንቱ ቀናት'},type:'quiz',shuffle:true,
  tip:{en:'A week has 7 days. Yesterday is the day before today. Tomorrow is the day after today. Count on your fingers!',am:'ሳምንት 7 ቀናት አሉት። ትናንት ከዛሬ በፊት ያለው ቀን ነው። ነገ ከዛሬ በኋላ ያለው ቀን ነው። በጣቶቻችሁ ቁጠሩ!'},
  items:[
   {q:'Today is Monday. What will the day be tomorrow?',say:'Today is Monday. What will the day be tomorrow?',o:['Sunday','Tuesday','Wednesday','Friday'],a:1},
   {q:'Today is Wednesday. What was the day yesterday?',say:'Today is Wednesday. What was the day yesterday?',o:['Tuesday','Thursday','Monday','Saturday'],a:0},
   {q:'Today is Friday. What will the day be after tomorrow?',say:'Today is Friday. What will the day be after tomorrow?',o:['Saturday','Sunday','Monday','Thursday'],a:1,e:{en:'Tomorrow is Saturday, so after tomorrow is Sunday.',am:'ነገ ቅዳሜ ነው፤ ስለዚህ ከነገ ወዲያ እሁድ ነው።'}},
   {q:'Yesterday was Tuesday. What is the day today?',say:'Yesterday was Tuesday. What is the day today?',o:['Monday','Wednesday','Thursday','Tuesday'],a:1},
   {q:'Which day comes before Monday?',say:'Which day comes before Monday?',o:['Tuesday','Saturday','Sunday','Friday'],a:2},
   {q:'How many days are there in a week?',say:'How many days are there in a week?',o:['5','6','7','30'],a:2}
  ]},
 {title:{en:'Reading: Seasons',am:'ንባብ፦ ወቅቶች'},type:'quiz',
  tip:{en:'Read about the year in Ethiopia. Look back at the text to find each answer.',am:'በኢትዮጵያ ስላለው ዓመት አንብቡ። እያንዳንዱን መልስ ለማግኘት ጽሑፉን መልሳችሁ እዩ።'},
  passage:{title:'A Year in Ethiopia',say:'A Year in Ethiopia. The Ethiopian calendar has thirteen months. Twelve months have thirty days each. The last month, Pagume, has five days, or six days every fourth year. Ethiopian New Year comes in September. Families celebrate with flowers and songs. From June to August there is heavy rain. Farmers plant crops and rivers can flood. From October to January it is mostly dry and sunny. This is the time for harvesting crops.',
   paras:['The Ethiopian calendar has thirteen months. Twelve months have thirty days each. The last month, Pagume, has five days, or six days every fourth year.','Ethiopian New Year comes in September. Families celebrate with flowers and songs.','From June to August there is heavy rain. Farmers plant crops and rivers can flood. From October to January it is mostly dry and sunny. This is the time for harvesting crops.']},
  items:[
   {q:'How many months does the Ethiopian calendar have?',o:['12','13','10','30'],a:1},
   {q:'How many days does Pagume usually have?',o:['30','5','28','7'],a:1,e:{en:'5 days, or 6 days every fourth year.',am:'5 ቀናት፤ በየአራት ዓመቱ ደግሞ 6 ቀናት።'}},
   {q:'When is Ethiopian New Year?',o:['January','June','September','December'],a:2},
   {q:'Which months have heavy rain?',o:['June to August','October to January','only May','February'],a:0},
   {q:'What do farmers do from October to January?',o:['They plant crops','They harvest crops','They sleep','They swim in floods'],a:1,e:{en:'"This is the time for harvesting crops."',am:'"This is the time for harvesting crops." ይላል፤ ምርት የሚሰበሰብበት ጊዜ ነው።'}}
  ]},
 {title:{en:'30 or 31 days?',am:'30 ወይስ 31 ቀን?'},type:'sort',
  tip:{en:'An old rhyme helps us remember: "Thirty days have September, April, June and November. All the rest have thirty-one, except February alone, which has 28, and 29 each leap year."',am:'አንድ የቆየ ግጥም እንድናስታውስ ይረዳናል፦ "Thirty days have September, April, June and November. All the rest have thirty-one, except February alone…" ፌብሩዋሪ 28 ቀናት አሉት፤ በየአራት ዓመቱ 29።'},
  intro:{en:'Use the rhyme. Sort each month by how many days it has.',am:'ግጥሙን ተጠቀሙ። እያንዳንዱን ወር እንደ ቀኖቹ ብዛት መድቡ።'},
  buckets:['30 days','31 days','28 or 29 days'],
  items:[{t:'September',b:0,say:'September'},{t:'April',b:0,say:'April'},{t:'June',b:0,say:'June'},{t:'November',b:0,say:'November'},{t:'January',b:1,say:'January'},{t:'March',b:1,say:'March'},{t:'July',b:1,say:'July'},{t:'December',b:1,say:'December'},{t:'February',b:2,say:'February'}]},
 {title:{en:'Weather words',am:'የአየር ሁኔታ ቃላት'},type:'match',sayRight:'',
  tip:{en:'Match each word with its meaning. These words help you talk about the seasons.',am:'እያንዳንዱን ቃል ከትርጉሙ ጋር አዛምዱ። እነዚህ ቃላት ስለ ወቅቶች ለመናገር ይረዷችኋል።'},
  rounds:[[['shower rain','a little rain'],['heavy','difficult to lift'],['flood','water covering the land after heavy rain'],['dry','without water or rain'],['harvesting','gathering crops']]]},
 {title:{en:'Before and after',am:'Before እና After'},type:'quiz',
  tip:{en:'"Before" means earlier. "After" means later. September comes before October. January comes after December.',am:'"Before" ማለት በፊት ነው። "After" ማለት በኋላ ነው። September ከOctober በፊት ይመጣል። January ከDecember በኋላ ይመጣል።'},
  items:[
   {q:'Which month comes after March?',say:'Which month comes after March?',o:['February','April','May','June'],a:1},
   {q:'Which month comes before July?',say:'Which month comes before July?',o:['June','August','May','September'],a:0},
   {q:'Number 8 comes before …',o:['7','9','6','8'],a:1},
   {q:'Complete: "______ you go to class, you should eat your breakfast."',o:['After','Before','Then','Because'],a:1,e:{en:'We eat breakfast first, so: Before you go to class…',am:'ቁርስ መጀመሪያ ይበላል፤ ስለዚህ Before you go to class… ነው።'}},
   {q:'Complete: "______ a short break, we went back to our class."',o:['Before','After','May','Can'],a:1},
   {q:'Which month comes after December?',say:'Which month comes after December?',o:['November','January','February','October'],a:1,e:{en:'The year starts again: December → January.',am:'ዓመቱ እንደገና ይጀምራል፦ December → January።'}}
  ]},
 {title:{en:'Build sentences',am:'ዓረፍተ ነገር መመስረት'},type:'order',
  tip:{en:'Put the words in order. Remember the capital letter at the start and the full stop at the end.',am:'ቃላቱን በቅደም ተከተል አስቀምጡ። በመጀመሪያ ትልቅ ፊደልና በመጨረሻ ነጥብ አስታውሱ።'},
  help:{en:'Tap the words in order.',am:'ቃላቱን በቅደም ተከተል ንኩ።'},
  rounds:[
   {items:['Every','September,','my','parents','buy','shoes','for','me.'],say:'Every September, my parents buy shoes for me.'},
   {items:['June','is','a','rainy','month.'],say:'June is a rainy month.'},
   {items:['There','are','seven','days','in','a','week.'],say:'There are seven days in a week.'},
   {items:['Farmers','harvest','crops','in','December.'],say:'Farmers harvest crops in December.'}
  ]},
 {type:'notes',notes:{
 big:{en:'I can name the 12 months and 7 days in order, talk about seasons, and use before and after.',am:'12ቱን ወራትና 7ቱን ቀናት በቅደም ተከተል መሰየም፣ ስለ ወቅቶች መናገርና before እና after መጠቀም እችላለሁ።'},
 points:[{en:'Months: January, February, March, April, May, June, July, August, September, October, November, December.',am:'ወራት፦ January, February, March, April, May, June, July, August, September, October, November, December.'},{en:'Days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',am:'ቀናት፦ Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.'},{en:'30 days: September, April, June, November. February: 28 (29 in a leap year). The rest: 31.',am:'30 ቀን፦ September, April, June, November። February፦ 28 (በየአራት ዓመቱ 29)። ሌሎቹ፦ 31።'},{en:'The Ethiopian calendar has 13 months; Pagume has 5 or 6 days. New Year is in September.',am:'የኢትዮጵያ አቆጣጠር 13 ወራት አሉት፤ ጳጉሜ 5 ወይም 6 ቀን አላት። አዲስ ዓመት በመስከረም ነው።'}],
 words:[['harvesting',{en:'gathering crops',am:'ምርት መሰብሰብ'}],['flood',{en:'water covering land after heavy rain',am:'ጎርፍ'}],['dry',{en:'without rain',am:'ደረቅ'}],['before / after',{en:'earlier / later',am:'በፊት / በኋላ'}]],
 remember:'Thirty days have September, April, June and November.',
 exam:[[{en:'Which month comes after June?',am:'ከJune በኋላ የሚመጣው ወር?'},'July'],[{en:'Today is Thursday. Tomorrow is…?',am:'ዛሬ Thursday ነው። ነገ…?'},'Friday'],[{en:'How many days does April have?',am:'April ስንት ቀን አለው?'},'30'],[{en:'Complete: "___ you eat, wash your hands."',am:'ሙሉ፦ "___ you eat, wash your hands."'},'Before']],
 innovate:{title:{en:'Family calendar maker',am:'የቤተሰብ ቀን መቁጠሪያ'},text:{en:'Families need to remember birthdays, holidays and planting days. Design a calendar that shows both Ethiopian and English months.',am:'ቤተሰቦች የልደት ቀኖችን፣ በዓላትንና የዘር ጊዜን ማስታወስ ይፈልጋሉ። የኢትዮጵያና የእንግሊዝኛ ወራትን የሚያሳይ ቀን መቁጠሪያ ንድፍ አውጡ።'},
  steps:[{en:'Ask your family which dates are important to them.',am:'ቤተሰባችሁን የትኞቹ ቀናት አስፈላጊ እንደሆኑ ጠይቁ።'},{en:'Draw 12 boxes, one for each month, with both names.',am:'ለእያንዳንዱ ወር አንድ ሳጥን፣ 12 ሳጥኖች ሳሉ፤ ሁለቱንም ስሞች ጻፉ።'},{en:'Add pictures for rainy, dry and harvest seasons.',am:'ለዝናብ፣ ለበጋና ለመከር ወቅቶች ሥዕሎችን ጨምሩ።'},{en:'Could you make copies for neighbours? What would they pay or trade?',am:'ለጎረቤቶች ቅጂ መሥራት ትችላላችሁ? ምን ይከፍላሉ ወይም ይለዋወጣሉ?'}]}}}
 ]});
})();
