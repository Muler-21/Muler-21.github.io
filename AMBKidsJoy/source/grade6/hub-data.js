/* Grade 6 chapters (from the Grade 6 student books) */
SUBJECTS.length=0;
SUBJECTS.push(
 {key:'math',mark:'123',name:{en:'Mathematics',am:'ሒሳብ'},chs:[
  [{en:'Divisibility of whole numbers',am:'የሙሉ ቁጥሮች ተከፋይነት'}],[{en:'Fractions, decimals and percent',am:'ክፍልፋዮች፣ አስርዮሾች እና ፐርሰንት'}],[{en:'Operations with fractions and decimals',am:'መሠረታዊ ስሌቶች በክፍልፋይና በአስርዮሽ'}],
  [{en:'Equations, inequalities and proportion',am:'እኩልታ፣ ያለእኩልነትና ወደረኛነት'}],[{en:'Plane and solid figures',am:'የጠለል እና ጥጥር ምስሎች'}],[{en:'Data handling',am:'መረጃ አያያዝ'}]]},
 {key:'amharic',mark:'ሀ',name:{en:'Amharic',am:'አማርኛ'},chs:[
  [{en:'Traditional dress',am:'ባህላዊ አለባበስ'}],[{en:'Famous athletes',am:'ታዋቂ አትሌቶች'}],[{en:'Oral poetry',am:'ቃላዊ ግጥሞች'}],[{en:'Modern agriculture',am:'ዘመናዊ ግብርና'}],[{en:'Visits and tourism',am:'ጉብኝት'}],
  [{en:'Against addiction',am:'ፀረ ሱስ'}],[{en:'Hate speech',am:'የጥላቻ ንግግር'}],[{en:'HIV/AIDS',am:'ኤች አይ ቪ/ኤድስ'}],[{en:'Traditional customs',am:'ባህላዊ ልማዶች'}],[{en:'Empowering women',am:'ሴቶችን ማብቃት'}]]},
 {key:'english',mark:'Aa',name:{en:'English',am:'እንግሊዝኛ'},chs:[
  [{en:'Traditional Games',am:'ባህላዊ ጨዋታዎች'}],[{en:'Seasons and Human Activities',am:'ወቅቶችና የሰው እንቅስቃሴዎች'}],[{en:'Traffic Police Officers',am:'የትራፊክ ፖሊሶች'}],[{en:'Animals',am:'እንስሳት'}],[{en:'Poultry',am:'የዶሮ እርባታ'}],
  [{en:'Air Pollution',am:'የአየር ብክለት'}],[{en:'Hard Work',am:'ታታሪነት'}],[{en:'First Aid',am:'የመጀመሪያ ርዳታ'}],[{en:'Unity Is Strength',am:'አንድነት ኃይል ነው'}],[{en:'Mobile Phones',am:'ሞባይል ስልኮች'}]]},
 {key:'env',mark:'🌍',name:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chs:[
  [{en:'Where is East Africa?',am:'የምስራቅ አፍሪካ መገኛ'}],[{en:'Plants, animals and growing up',am:'ዕፅዋት፣ እንስሳትና ማደግ'}],[{en:'Matter and energy',am:'ቁስ አካልና ኃይል'}],
  [{en:'Natural environment of East Africa',am:'የምስራቅ አፍሪካ ተፈጥሯዊ አካባቢ'}],[{en:'Social environment of East Africa',am:'የምስራቅ አፍሪካ ማኅበራዊ አካባቢ'}],[{en:'Important issues',am:'ሁሉን አቀፍና አንገብጋቢ ጉዳዮች'}]]},
 {key:'health',mark:'🏃',name:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chs:[
  [{en:'Physical education and sport',am:'የሰውነት ማጎልመሻ ትምህርትና ስፖርት'}],[{en:'Games for social and emotional growth',am:'ማኅበራዊና ስሜታዊ እድገትን የሚያዳብሩ ጨዋታዎች'}],[{en:'Health and fitness',am:'ጤናና የአካል ብቃት'}],
  [{en:'Athletics',am:'አትሌቲክስ'}],[{en:'Gymnastics',am:'ጅምናስቲክስ'}],[{en:'Ball game skills',am:'የኳስ ጨዋታዎች መሠረታዊ ክህሎት'}],[{en:'Traditional dances and games',am:'ባህላዊ ጭፈራዎችና ጨዋታዎች'}]]},
 {key:'art',mark:'🎨',name:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chs:[
  [{en:'Elements of the arts',am:'የሥነ ጥበባት ምንነት'}],[{en:'Showing creativity',am:'የፈጠራ ችሎታን መግለጽ'}],[{en:'Telling our history through the arts',am:'ታሪካችንን በጥበብ መተረክ'}],[{en:'Appreciating indigenous knowledge',am:'ሀገር በቀል እውቀቶችን ማድነቅ'}],[{en:'Arts, other subjects and social issues',am:'ሥነ ጥበባት፣ ሌሎች ትምህርቶችና ማኅበራዊ ጉዳዮች'}]]}
);
Object.assign(T,{
 g3:{en:'Grade 6',am:'6ኛ ክፍል'},
 g3sub:{en:'6 subjects · 44 chapters',am:'6 ትምህርቶች · 44 ምዕራፎች'},
 ready:{en:'Grade 6: {a} of {b} chapters ready',am:'6ኛ ክፍል፦ ከ{b} ምዕራፎች {a} ዝግጁ'},
 tag:{en:'Grade 6: primes, GCF and LCM, percent with tax and discount, equations and proportion, circles and data, reading and grammar, English in a British voice, East Africa, science, sport and the arts, all with Kokeb the star. In Amharic and English.',am:'6ኛ ክፍል፦ ብቸኛ ቁጥሮች፣ ታጋአና ትጋብ፣ ፐርሰንት ከቀረጥና ከቅናሽ ጋር፣ እኩልታና ወደረኛነት፣ ክብና መረጃ፣ ንባብና ሰዋስው፣ እንግሊዝኛ በብሪቲሽ ድምፅ፣ ምስራቅ አፍሪካ፣ ሳይንስ፣ ስፖርትና ሥነ ጥበባት፤ ከኮከብ ጋር በአማርኛና በእንግሊዝኛ።'},
 srcIntro:{en:'Grade 6 follows these student books. Thank you to their writers.',am:'6ኛ ክፍል እነዚህን የተማሪ መጻሕፍት ይከተላል። አዘጋጆቻቸውን እናመሰግናለን።'},
 books:[
  {en:'Mathematics: Kumneger Yihune, Demewez Abebaw. © ANRS Education Bureau, 2015 E.C.',am:'ሒሳብ፦ ቁምነገር ይሁኔ፣ ደመወዝ አበባው። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Amharic: Nejm Fejr Mohammed, Tsegaye Girma Abraha. © ANRS Education Bureau, 2015 E.C.',am:'አማርኛ፦ ነጅም ፈጅር መሀመድ፣ ፀጋዬ ግርማ አብርሃ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'English for Ethiopia: Dr. Abebe Damtew, Dr. Hailu Gutema. © FDRE Ministry of Education, 2022.',am:'English for Ethiopia፦ ዶ/ር አበበ ዳምጠው፣ ዶ/ር ኃይሉ ጉተማ። © የኢፌዴሪ ትምህርት ሚኒስቴር፣ 2014 ዓ.ም.'},
  {en:'Environmental Science: Mulugeta Awayehu, Belete Kebede, Melese Sinu, Menelik Belay, Neknike Zewde. © ANRS Education Bureau, 2015 E.C.',am:'አካባቢ ሳይንስ፦ ሙሉጌታ አዋየሁ፣ በለጠ ከበደ፣ መለሰ ስኑ፣ ምኒልክ በላይ፣ ነቅንቄ ዘውዴ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Health & PE: Tesfahun Mebratu, Hunegn G/Kiristos. © ANRS Education Bureau, 2015 E.C.',am:'ጤናና ሰውነት ማጎልመሻ፦ ተስፋሁን መብራቱ፣ ሁነኝ ገ/ክርስቶስ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Performing & Visual Arts: Eshetu Tadesse, Desta Yitbarek. © ANRS Education Bureau, 2015 E.C.',am:'ሥነ ጥበባት፦ እሸቱ ታደሰ፣ ደስታ ይትባረክ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'}],
 teacher:{en:'For teachers and parents: let Grade 6 children read each task on their own, try it, and then explain their thinking aloud. English listening uses a British voice where the device has one. Stars are saved on this device only.',am:'ለመምህራንና ለወላጆች፦ የ6ኛ ክፍል ልጆች እያንዳንዱን ተግባር በራሳቸው አንብበው እንዲሞክሩና ከዚያ አስተሳሰባቸውን ጮክ ብለው እንዲያስረዱ ፍቀዱላቸው። የእንግሊዝኛ ማዳመጥ መሣሪያው ካለው የብሪቲሽ ድምፅ ይጠቀማል። ኮከቦቹ የሚቀመጡት በዚህ መሣሪያ ላይ ብቻ ነው።'}
});
