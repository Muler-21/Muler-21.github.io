/* Grade 5 chapters (from the Grade 5 student books) */
SUBJECTS.length=0;
SUBJECTS.push(
 {key:'math',mark:'123',name:{en:'Mathematics',am:'ሒሳብ'},chs:[
  [{en:'Fractions',am:'ክፍልፋዮች'}],[{en:'Decimal numbers',am:'አስርዮሽ ቁጥሮች'}],[{en:'Percentage',am:'ፐርሰንት'}],[{en:'Working with variables',am:'በተለዋዋጮች መሥራት'}],
  [{en:'Data handling',am:'መረጃ አያያዝ'}],[{en:'Lines, angles and measurement',am:'መስመሮች፣ አንግሎችና ልኬታቸው'}],[{en:'Common solid figures',am:'የተለመዱ ጥጥር ምስሎች'}],[{en:'Area and volume',am:'የስፋትና የይዘት ልኬት'}]]},
 {key:'amharic',mark:'ሀ',name:{en:'Amharic',am:'አማርኛ'},chs:[
  [{en:'Friendship',am:'ጓደኝነት'}],[{en:'Cleanliness and hygiene',am:'ጽዳትና ንጽሕና'}],[{en:'Culture',am:'ባህል'}],[{en:'Traffic safety',am:'የትራፊክ ደህንነት'}],[{en:'Protecting the environment',am:'አካባቢ ጥበቃ'}],
  [{en:'Medicine',am:'መድኃኒት'}],[{en:'Food',am:'ምግብ'}],[{en:'Wild animals of Ethiopia',am:'የኢትዮጵያ የዱር እንስሳት'}],[{en:'Traditional games',am:'ባህላዊ ጨዋታዎች'}],[{en:'Oral literature',am:'ቃላዊ ሥነጽሑፍ'}]]},
 {key:'english',mark:'Aa',name:{en:'English',am:'እንግሊዝኛ'},chs:[
  [{en:'Holiday',am:'በዓል'}],[{en:'Dry Season',am:'የበጋ ወቅት'}],[{en:'Accidents',am:'አደጋዎች'}],[{en:'Minerals',am:'ማዕድናት'}],[{en:'Beekeeping',am:'ንብ ማነብ'}],
  [{en:'Water Pollution',am:'የውኃ ብክለት'}],[{en:'Good Citizens',am:'መልካም ዜጎች'}],[{en:'Healthcare Facilities',am:'የጤና ተቋማት'}],[{en:'Living With Differences',am:'ከልዩነት ጋር መኖር'}],[{en:'Assistive Technology',am:'አጋዥ ቴክኖሎጂ'}]]},
 {key:'env',mark:'🌍',name:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chs:[
  [{en:'Where is Ethiopia?',am:'የኢትዮጵያ መገኛ'}],[{en:'Living things',am:'ሕይወት ያላቸው ነገሮች'}],[{en:'Matter, motion and simple machines',am:'ቁስ አካል፣ እንቅስቃሴና ቀላል ማሽኖች'}],
  [{en:'Natural environment of Ethiopia',am:'የኢትዮጵያ ተፈጥሯዊ አካባቢ'}],[{en:'Social environment',am:'ማኅበራዊ አካባቢ'}],[{en:'Important issues',am:'ሁሉን አቀፍና አንገብጋቢ ጉዳዮች'}]]},
 {key:'health',mark:'🏃',name:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chs:[
  [{en:'Physical education and sport',am:'የሰውነት ማጎልመሻ ትምህርትና ስፖርት'}],[{en:'Games for social and emotional growth',am:'ማኅበራዊና ስሜታዊ እድገትን የሚያዳብሩ ጨዋታዎች'}],[{en:'Health and fitness',am:'ጤናና የአካል ብቃት'}],
  [{en:'Athletics',am:'አትሌቲክስ'}],[{en:'Gymnastics',am:'ጅምናስቲክስ'}],[{en:'Ball game skills',am:'የኳስ ጨዋታዎች መሠረታዊ ክህሎት'}],[{en:'Traditional dances and games',am:'የኢትዮጵያ ባህላዊ ጭፈራዎችና ጨዋታዎች'}]]},
 {key:'art',mark:'🎨',name:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chs:[
  [{en:'Elements of the arts',am:'የሥነ ጥበባት አለባውያን'}],[{en:'Showing creativity',am:'የፈጠራ ችሎታን መግለጽ'}],[{en:'History and culture',am:'ታሪክና ባህል'}],[{en:'Presenting art',am:'ጥበብን ማስተዋወቅ'}],[{en:'Arts, other subjects and current issues',am:'ሥነ ጥበባትን ከሌሎች ትምህርቶችና ወቅታዊ ጉዳዮች ጋር ማስተሳሰር'}]]}
);
Object.assign(T,{
 g3:{en:'Grade 5',am:'5ኛ ክፍል'},
 g3sub:{en:'6 subjects · 46 chapters',am:'6 ትምህርቶች · 46 ምዕራፎች'},
 ready:{en:'Grade 5: {a} of {b} chapters ready',am:'5ኛ ክፍል፦ ከ{b} ምዕራፎች {a} ዝግጁ'},
 tag:{en:'Grade 5: fractions, decimals and percent, algebra, reading and grammar, English in a British voice, Ethiopia\'s land and people, sport and the arts, all with Kokeb the star. In Amharic and English.',am:'5ኛ ክፍል፦ ክፍልፋይ፣ አስርዮሽና ፐርሰንት፣ አልጀብራ፣ ንባብና ሰዋስው፣ እንግሊዝኛ በብሪቲሽ ድምፅ፣ የኢትዮጵያ ምድርና ሕዝብ፣ ስፖርትና ሥነ ጥበባት፤ ከኮከብ ጋር በአማርኛና በእንግሊዝኛ።'},
 srcIntro:{en:'Grade 5 follows these student books. Thank you to their writers.',am:'5ኛ ክፍል እነዚህን የተማሪ መጻሕፍት ይከተላል። አዘጋጆቻቸውን እናመሰግናለን።'},
 books:[
  {en:'Mathematics: Yemataw Moges, Gebru Shimekaw. © ANRS Education Bureau, 2015 E.C.',am:'ሒሳብ፦ የማታው ሞገስ፣ ገብሩ ሽመካው። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Amharic: Bosena Jejaw Mekonnen, Kifle Siberew Shinkute. © ANRS Education Bureau, 2015 E.C.',am:'አማርኛ፦ ቦሰና ጀጃው መኮንን፣ ክፍሌ ስበረው ሽንቁጤ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'English for Ethiopia: Hailemariam Kekeba (PhD), Haregewoin Fantahun (PhD). © FDRE Ministry of Education, 2022.',am:'English for Ethiopia፦ ኃይለማርያም ቀከባ (ዶ/ር)፣ ሐረገወይን ፋንታሁን (ዶ/ር)። © የኢፌዴሪ ትምህርት ሚኒስቴር፣ 2014 ዓ.ም.'},
  {en:'Environmental Science: Menelik Belay Akalu, Getachew Dilnesa Gedebe, Melese Sinu W/Mariam. © ANRS Education Bureau, 2015 E.C.',am:'አካባቢ ሳይንስ፦ ምኒልክ በላይ አካሉ፣ ጌታቸው ድልነሳ ገደቤ፣ መለሰ ስኑ ወ/ማርያም። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Health & PE: Hunegn G/Kiristos, Tesfahun Mebratu. © ANRS Education Bureau, 2015 E.C.',am:'ጤናና ሰውነት ማጎልመሻ፦ ሁነኝ ገ/ክርስቶስ፣ ተስፋሁን መብራቱ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Performing & Visual Arts: Aragaw Yesuf, Destaye Yirga. © ANRS Education Bureau, 2015 E.C.',am:'ሥነ ጥበባት፦ አራጋው የሱፍ፣ ደስታዬ ይርጋ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'}],
 teacher:{en:'For teachers and parents: let Grade 5 children read each task on their own, try it, and then explain their thinking aloud. English listening uses a British voice where the device has one. Stars are saved on this device only.',am:'ለመምህራንና ለወላጆች፦ የ5ኛ ክፍል ልጆች እያንዳንዱን ተግባር በራሳቸው አንብበው እንዲሞክሩና ከዚያ አስተሳሰባቸውን ጮክ ብለው እንዲያስረዱ ፍቀዱላቸው። የእንግሊዝኛ ማዳመጥ መሣሪያው ካለው የብሪቲሽ ድምፅ ይጠቀማል። ኮከቦቹ የሚቀመጡት በዚህ መሣሪያ ላይ ብቻ ነው።'}
});
