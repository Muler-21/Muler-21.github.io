/* Grade 7 chapters (from the Grade 7 student books) */
SUBJECTS.length=0;
SUBJECTS.push(
 {key:'math',mark:'123',name:{en:'Mathematics',am:'ሒሳብ'},chs:[
  [{en:'Introduction to sets',am:'የስብስብ መግቢያ'}],[{en:'Integers',am:'ኢንቲጀሮች'}],[{en:'Ratio, proportion and percentage',am:'ምጣኔ፣ ተመጣጣኝነትና መቶኛ'}],[{en:'Linear equations',am:'ቀጥተኛ እኩልታዎች'}],
  [{en:'Perimeter and area',am:'ዙሪያና ስፋት'}],[{en:'Congruency of plane figures',am:'የጠለል ምስሎች ተመሳሳይነት'}],[{en:'Data handling',am:'መረጃ አያያዝ'}]]},
 {key:'amharic',mark:'ሀ',name:{en:'Amharic',am:'አማርኛ'},chs:[
  [{en:'Appreciating nature',am:'ተፈጥሮን ማድነቅ'}],[{en:'Family planning',am:'የቤተሰብ ምጣኔ'}],[{en:'Volunteering',am:'በጎ ፈቃድ'}],[{en:'Biographies of famous people',am:'የታዋቂ ሰዎች የሕይወት ታሪክ'}],[{en:'Water and its uses',am:'ውኃና ጥቅሙ'}],
  [{en:'Human trafficking',am:'ሕገ ወጥ የሰዎች ዝውውር'}],[{en:'Social relations',am:'ማኅበራዊ ግንኙነት'}],[{en:'Addiction',am:'ሱስ'}],[{en:'Love of country',am:'የሀገር ፍቅር'}],[{en:'Oral poetry',am:'ቃላዊ ግጥሞች'}]]},
 {key:'english',mark:'Aa',name:{en:'English',am:'እንግሊዝኛ'},chs:[
  [{en:'Living in Rural Area',am:'የገጠር ኑሮ'}],[{en:'History of Calendar',am:'የቀን መቁጠሪያ ታሪክ'}],[{en:'Road Safety',am:'የመንገድ ደህንነት'}],[{en:'Endemic Animals in Ethiopia',am:'የኢትዮጵያ ብርቅዬ እንስሳት'}],[{en:'Diary',am:'የዕለት ማስታወሻ'}],
  [{en:'Land Conservation',am:'የመሬት ጥበቃ'}],[{en:'Volunteerism',am:'በጎ ፈቃደኝነት'}],[{en:'Fitness',am:'የአካል ብቃት'}],[{en:'Self-expressions',am:'ራስን መግለጽ'}],[{en:'Computer Development',am:'የኮምፒውተር እድገት'}]]},
 {key:'science',mark:'🔬',name:{en:'General Science',am:'ጠቅላላ ሳይንስ'},chs:[
  [{en:'Basic concepts of science',am:'የሳይንስ መሠረታዊ ጽንሰ ሐሳቦች'}],[{en:'Matter in our surroundings',am:'በዙሪያችን ያለ ቁስ አካል'}],[{en:'Elements, compounds and reactions',am:'ንጥረ ነገሮች፣ ውሁዶችና ኬሚካዊ ግብረ መልሶች'}],[{en:'Cell as the basis of life',am:'ሴል የሕይወት መሠረት'}],
  [{en:'Living things and their diversity',am:'ሕያዋን ነገሮችና ብዝሃነታቸው'}],[{en:'The Earth',am:'መሬት'}],[{en:'Force, motion and energy',am:'ኃይል፣ እንቅስቃሴና ጉልበት'}]]},
 {key:'social',mark:'🌍',name:{en:'Social Studies',am:'ኅብረተሰብ ትምህርት'},chs:[
  [{en:'Social studies, the universe and the solar system',am:'ኅብረተሰብ ትምህርት፣ ሁለንታና ሥርዓተ ፀሐይ'}],[{en:'World population, transport and maps',am:'የዓለም ሕዝብ፣ መጓጓዣና ካርታ'}],[{en:'People and natural resources',am:'የሰውና የተፈጥሮ ሀብቶች መስተጋብር'}],
  [{en:'Ancient and medieval Ethiopia',am:'ጥንታዊና የመካከለኛው ዘመን የኢትዮጵያ ታሪክ'}],[{en:'African history to 1500',am:'የአፍሪካ ታሪክ እስከ 1500'}],[{en:'Ancient civilisations and the Middle Ages',am:'የዓለም ጥንታዊ ሥልጣኔዎችና የመካከለኛው ዘመን'}],[{en:'Current global issues',am:'ወቅታዊ ዓለም አቀፋዊ ሁኔታዎች'}]]},
 {key:'cte',mark:'🛠️',name:{en:'Career & Technical Education',am:'የሙያና ቴክኒክ ትምህርት'},chs:[
  [{en:'Introduction to CTE',am:'የሙያና ቴክኒክ ትምህርት መግቢያ'}],[{en:'Personal career selection',am:'የግል ሙያ ምርጫ'}],[{en:'Self-employment: agriculture',am:'የግል ሥራ፦ ግብርና'}],[{en:'Self-employment: beauty care',am:'የግል ሥራ፦ የውበት እንክብካቤ'}],
  [{en:'Self-employment: garment making',am:'የግል ሥራ፦ የልብስ ስፌት'}],[{en:'Employment opportunities',am:'የሥራ ዕድሎች'}],[{en:'Employability',am:'የመቀጠር ብቃት'}],[{en:'Preparing for employment',am:'ለቅጥር መዘጋጀት'}]]},
 {key:'it',mark:'💻',name:{en:'Information Technology',am:'ኢንፎርሜሽን ቴክኖሎጂ'},chs:[
  [{en:'Introduction to ICT',am:'የአይሲቲ መግቢያ'}],[{en:'Computer hardware',am:'የኮምፒውተር ሃርድዌር'}],[{en:'Computer software',am:'የኮምፒውተር ሶፍትዌር'}],[{en:'The Internet',am:'ኢንተርኔት'}],[{en:'Security and safety',am:'ደህንነትና ጥበቃ'}],[{en:'LOGO programming',am:'የሎጎ ፕሮግራሚንግ'}]]},
 {key:'health',mark:'🏃',name:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chs:[
  [{en:'Physical education and sport',am:'ሰውነት ማጎልመሻና ስፖርት'}],[{en:'Social and emotional learning',am:'ማኅበራዊ መስተጋብርና ስሜታዊነት'}],[{en:'Health and fitness',am:'ጤናና የአካል ብቃት'}],[{en:'Athletics',am:'አትሌቲክስ'}],
  [{en:'Gymnastics',am:'ጅምናስቲክስ'}],[{en:'Basic ball-game skills',am:'መሠረታዊ የኳስ ጨዋታ ክህሎቶች'}],[{en:'Ethiopian and African traditional games',am:'የኢትዮጵያና የአፍሪካ ባህላዊ ጨዋታዎች'}]]},
 {key:'art',mark:'🎨',name:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chs:[
  [{en:'Artistic perception',am:'ጥበባዊ ግንዛቤ'}],[{en:'Creative expression',am:'የፈጠራ ችሎታን መግለጽ'}],[{en:'History and culture',am:'ታሪክና ባህል'}],[{en:'Aesthetic value',am:'ሥነ ውበታዊ ጠቀሜታ'}],[{en:'Arts and other subjects',am:'ሥነ ጥበባትና ሌሎች ትምህርቶች'}]]}
);
Object.assign(T,{
 g3:{en:'Grade 7',am:'7ኛ ክፍል'},
 g3sub:{en:'9 subjects · 67 chapters',am:'9 ትምህርቶች · 67 ምዕራፎች'},
 ready:{en:'Grade 7: {a} of {b} chapters ready',am:'7ኛ ክፍል፦ ከ{b} ምዕራፎች {a} ዝግጁ'},
 tag:{en:'Grade 7: sets and equations, science experiments, our history and world, careers and IT, sport and the arts, all with Kokeb the star. In Amharic and English.',am:'7ኛ ክፍል፦ ስብስቦችና እኩልታዎች፣ የሳይንስ ሙከራዎች፣ ታሪካችንና ዓለማችን፣ ሙያና አይቲ፣ ስፖርትና ሥነ ጥበባት፤ ከኮከብ ጋር በአማርኛና በእንግሊዝኛ።'},
 srcIntro:{en:'Grade 7 follows these student books. Thank you to their writers.',am:'7ኛ ክፍል እነዚህን የተማሪ መጻሕፍት ይከተላል። አዘጋጆቻቸውን እናመሰግናለን።'},
 books:[
  {en:'Mathematics: Zelalem Addis, Atalel Alameneh. © ANRS Education Bureau, 2015 E.C.',am:'ሒሳብ፦ ዘላለም አዲስ፣ አታለል አላምነህ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Amharic: Zewdu Milkit, Meaza Legesse. © ANRS Education Bureau, 2015 E.C.',am:'አማርኛ፦ ዘውዱ ምልክት፣ መዓዛ ለገሰ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'English: Dr. Haile Shibabaw, Dr. Zewudie Tamiru.',am:'እንግሊዝኛ፦ ዶ/ር ኃይሌ ሽባባው፣ ዶ/ር ዘውዴ ታምሩ።'},
  {en:'General Science: Hassen Worku (PhD), Awoke Debebe, Seid Mohammed, Muluneh Workie. © ANRS Education Bureau, 2015 E.C.',am:'ጠቅላላ ሳይንስ፦ ሐሰን ወርቁ (ዶ/ር)፣ አወቀ ደበበ፣ ሰይድ መሐመድ፣ ሙሉነህ ወርቅዬ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Social Studies: Shewanesseh Fisseha, Seid Hussen. © ANRS Education Bureau, 2015 E.C.',am:'ኅብረተሰብ ትምህርት፦ ሸዋነሰህ ፍስሐ፣ ሠይድ ሁሴን። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Career & Technical Education: Getachew Habtamu (PhD), Ashenafi Kebede (PhD). © FDRE Ministry of Education.',am:'የሙያና ቴክኒክ ትምህርት፦ ጌታቸው ሀብታሙ (ዶ/ር)፣ አሸናፊ ከበደ (ዶ/ር)። © የኢፌዴሪ ትምህርት ሚኒስቴር።'},
  {en:'Information Technology: Birhanu Hailu (PhD), Belete Biazen. © FDRE Ministry of Education.',am:'ኢንፎርሜሽን ቴክኖሎጂ፦ ብርሃኑ ኃይሉ (ዶ/ር)፣ በለጠ ቢያዝን። © የኢፌዴሪ ትምህርት ሚኒስቴር።'},
  {en:'Health & PE: Dr. Demisse Gashu, Yimam Arage, Dr. Ambachew Amede. © ANRS Education Bureau, 2015 E.C.',am:'ጤናና ሰውነት ማጎልመሻ፦ ዶ/ር ደምሴ ጋሹ፣ ይማም አራጌ፣ ዶ/ር አምባቸው አመዴ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Performing & Visual Arts: Mastewal Geta, Yohannes Tadesse. © ANRS Education Bureau, 2015 E.C.',am:'ሥነ ጥበባት፦ ማስተዋል ጌታ፣ ዮሐንስ ታደሰ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'}],
 teacher:{en:'For teachers and parents: Grade 7 students can work on their own. Ask them to explain each answer and to try the Young Innovator challenge as a real small project. Stars are saved on this device only.',am:'ለመምህራንና ለወላጆች፦ የ7ኛ ክፍል ተማሪዎች በራሳቸው መሥራት ይችላሉ። እያንዳንዱን መልስ እንዲያስረዱና የወጣት ፈጣሪ ፈተናውን እንደ እውነተኛ ትንሽ ፕሮጀክት እንዲሞክሩ ጠይቋቸው። ኮከቦቹ የሚቀመጡት በዚህ መሣሪያ ላይ ብቻ ነው።'}
});
