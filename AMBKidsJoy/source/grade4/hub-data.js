/* Grade 4 chapters (from the Grade 4 student books) */
SUBJECTS.length=0;
SUBJECTS.push(
 {key:'math',mark:'123',name:{en:'Mathematics',am:'ሒሳብ'},chs:[
  [{en:'Whole numbers',am:'ሙሉ ቁጥሮች'}],[{en:'Adding and subtracting whole numbers',am:'ሙሉ ቁጥሮችን መደመርና መቀነስ'}],[{en:'Fractions and decimals',am:'ክፍልፋዮችና አስርዮሻዊ ቁጥሮች'}],
  [{en:'Multiplying and dividing',am:'ሙሉ ቁጥሮችን ማባዛትና ማካፈል'}],[{en:'Geometric figures',am:'ጂኦሜትሪያዊ ምስሎች'}],[{en:'Patterns',am:'ፓተርን'}],[{en:'Measurement',am:'ልኬት'}],[{en:'Data handling',am:'መረጃ አያያዝ'}],[{en:'Time',am:'ጊዜ'}]]},
 {key:'amharic',mark:'ሀ',name:{en:'Amharic',am:'አማርኛ'},chs:[
  [{en:'Protecting the environment',am:'አካባቢ ጥበቃ'}],[{en:'Road safety',am:'የመንገድ ደህንነት'}],[{en:'Helping each other',am:'መረዳዳት'}],[{en:'Gender equality',am:'ሥርዓተ ፆታ'}],[{en:'Visits',am:'ጉብኝት'}],
  [{en:'Sport',am:'ስፖርት'}],[{en:'Water',am:'ውኃ'}],[{en:'Negotiation',am:'ድርድር'}],[{en:'Mass media',am:'ብዙኃን መገናኛ'}],[{en:'Trade',am:'ንግድ'}]]},
 {key:'english',mark:'Aa',name:{en:'English',am:'እንግሊዝኛ'},chs:[
  [{en:'People and Their Work',am:'ሰዎችና ሥራቸው'}],[{en:'Rainy Season',am:'የዝናብ ወቅት'}],[{en:'Traffic Safety',am:'የትራፊክ ደህንነት'}],[{en:'Soil',am:'አፈር'}],[{en:'Vegetables',am:'አትክልቶች'}],
  [{en:'Clean Water',am:'ንጹህ ውኃ'}],[{en:'My Country, Ethiopia',am:'አገሬ ኢትዮጵያ'}],[{en:'Health and Safety',am:'ጤናና ደህንነት'}],[{en:'Commonalities and Differences',am:'አንድነትና ልዩነቶቻችን'}],[{en:'Woodwork',am:'የእንጨት ሥራ'}]]},
 {key:'env',mark:'🌍',name:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chs:[
  [{en:'Where is the Amhara Region?',am:'የአማራ ክልል መገኛ'}],[{en:'Understanding science',am:'ሳይንስን መረዳት'}],[{en:'Natural environment',am:'ተፈጥሯዊ አካባቢ'}],[{en:'Social environment',am:'ማኅበራዊ አካባቢ'}],[{en:'Important issues',am:'ሁሉ አቀፍና አንገብጋቢ ጉዳዮች'}]]},
 {key:'geez',mark:'ግ',name:{en:'Ge\'ez',am:'ግእዝ'},chs:[
  [{en:'Reading Ge\'ez',am:'ንባበ ግእዝ'}],[{en:'Numerals',am:'አኃዝ'}],[{en:'School',am:'ቤተ ትምህርት'}],[{en:'People and family',am:'ውሉደ ሰብእ'}],[{en:'Wild animals',am:'እንስሳ ገዳም'}],[{en:'Food and drink',am:'ምግብ ወስቴ'}],
  [{en:'Clothes',am:'አልባሳት'}],[{en:'Times and seasons',am:'ጊዜያት'}],[{en:'Cleanliness',am:'ንጽሕና'}],[{en:'Directions',am:'መኣዝን'}],[{en:'Abba Gebre Hanna',am:'አባ ገብረ ሐና'}]]},
 {key:'health',mark:'🏃',name:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chs:[
  [{en:'Basic movement skills',am:'መሠረታዊ የእንቅስቃሴ ክህሎት'}],[{en:'Rhythmic movements',am:'የምት እንቅስቃሴዎች'}],[{en:'Games for feelings and friendship',am:'ማኅበራዊ ግንኙነትንና ስሜትን የሚያዳብሩ ጨዋታዎች'}],
  [{en:'Health and fitness',am:'ጤናና የአካል ብቃት'}],[{en:'Basic gymnastics',am:'መሠረታዊ ጅምናስቲክስ'}],[{en:'Traditional dances and games',am:'ባህላዊ ጭፈራዎችና ጨዋታዎች'}]]},
 {key:'art',mark:'🎨',name:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chs:[
  [{en:'Notes, shapes, theatre and photography',am:'ኖታ፣ ቅርጽ፣ ቴያትርና ፎቶግራፍ'}],[{en:'Arts practice',am:'የሥነ ጥበባት ተግባራት'}],[{en:'Arts, culture and heritage',am:'ሥነ ጥበባት፣ ባህልና ቅርስ'}],[{en:'Appreciating art',am:'ሥነ ጥበባትን ማድነቅ'}],[{en:'Arts and other subjects',am:'ሥነ ጥበባትና ሌሎች ትምህርቶች'}]]}
);
Object.assign(T,{
 g3:{en:'Grade 4',am:'4ኛ ክፍል'},
 g3sub:{en:'7 subjects · 56 chapters',am:'7 ትምህርቶች · 56 ምዕራፎች'},
 ready:{en:'Grade 4: {a} of {b} chapters ready',am:'4ኛ ክፍል፦ ከ{b} ምዕራፎች {a} ዝግጁ'},
 tag:{en:'Grade 4: big numbers, fractions and decimals, reading and writing, our region, Ge\'ez, sport and the arts, all with Kokeb the star. In Amharic and English.',am:'4ኛ ክፍል፦ ትልልቅ ቁጥሮች፣ ክፍልፋይና አስርዮሽ፣ ንባብና ጽሕፈት፣ ክልላችን፣ ግእዝ፣ ስፖርትና ሥነ ጥበባት፤ ከኮከብ ጋር በአማርኛና በእንግሊዝኛ።'},
 srcIntro:{en:'Grade 4 follows these student books. Thank you to their writers.',am:'4ኛ ክፍል እነዚህን የተማሪ መጻሕፍት ይከተላል። አዘጋጆቻቸውን እናመሰግናለን።'},
 books:[
  {en:'Mathematics: Kebede Alemu, Yilma Tsehayu. © ANRS Education Bureau, 2015 E.C.',am:'ሒሳብ፦ ከበደ ዓለሙ፣ ይልማ ፀሃዩ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Amharic: Tsegaye Beyene, Fasil Mekuanint. © ANRS Education Bureau, 2015 E.C.',am:'አማርኛ፦ ፀጋዬ በየነ፣ ፋሲል መኳንንት። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'English for Ethiopia: Melkamu Dumessa (PhD), Temesgen Mereba (PhD). © FDRE Ministry of Education.',am:'English for Ethiopia፦ መልካሙ ዱሜሳ (ዶ/ር)፣ ተመስገን መረባ (ዶ/ር)። © የኢፌዴሪ ትምህርት ሚኒስቴር።'},
  {en:'Environmental Science: Neknike Zewde, Assefa Yihune. © ANRS Education Bureau, 2015 E.C.',am:'አካባቢ ሳይንስ፦ ነቅንቄ ዘውዴ፣ አሰፋ ይሁኔ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Ge\'ez: Muluken Andualem (PhD), Gebre Ab Bogale. © ANRS Education Bureau, 2017 E.C.',am:'ልሳነ ግእዝ፦ ሙሉቀን አንዱዓለም (ዶ/ር)፣ ገብረ አብ ቦጋለ። © አብክመ ትምህርት ቢሮ፣ 2017 ዓ.ም.'},
  {en:'Health & PE: Abebe Dese, Belete Assefa. © ANRS Education Bureau, 2015 E.C.',am:'ጤናና ሰውነት ማጎልመሻ፦ አበበ ደሴ፣ በለጠ አሰፋ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Performing & Visual Arts: Hussen Assen, Asfaw Reta. © ANRS Education Bureau, 2015 E.C.',am:'ሥነ ጥበባት፦ ሁሴን አሰን፣ አስፋው ረታ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'}],
 teacher:{en:'For teachers and parents: let Grade 4 children read each task on their own, try it, and then explain their thinking aloud. Stars are saved on this device only.',am:'ለመምህራንና ለወላጆች፦ የ4ኛ ክፍል ልጆች እያንዳንዱን ተግባር በራሳቸው አንብበው እንዲሞክሩና ከዚያ አስተሳሰባቸውን ጮክ ብለው እንዲያስረዱ ፍቀዱላቸው። ኮከቦቹ የሚቀመጡት በዚህ መሣሪያ ላይ ብቻ ነው።'}
});
