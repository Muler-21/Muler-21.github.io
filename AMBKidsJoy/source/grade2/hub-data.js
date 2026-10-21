/* Grade 2 chapters (from the Grade 2 student books) */
SUBJECTS.length=0;
SUBJECTS.push(
 {key:'math',mark:'123',name:{en:'Mathematics',am:'ሒሳብ'},chs:[
  [{en:'Numbers up to 1,000',am:'እስከ 1000 ያሉ ቁጥሮች'}],[{en:'Adding and subtracting up to 1,000',am:'እስከ 1000 ያሉ ቁጥሮችን መደመርና መቀነስ'}],
  [{en:'Halves and quarters',am:'ግማሽና ሩብ'}],[{en:'Multiplying up to 100',am:'እስከ 100 ያሉ ቁጥሮችን ማባዛት'}],[{en:'Patterns',am:'ፓተርን'}],[{en:'Measurement',am:'ልኬት'}],
  [{en:'Adding and subtracting with regrouping',am:'ባለ ሦስት ሆሄ ቁጥሮችን በአለኝታና በብድር'}],[{en:'Data handling',am:'መረጃ አያያዝ'}],[{en:'Shapes',am:'የጂኦሜትሪ ምስሎች'}],[{en:'Money',am:'ገንዘብ'}],[{en:'Time',am:'ጊዜ'}]]},
 {key:'amharic',mark:'ሀ',name:{en:'Amharic',am:'አማርኛ'},chs:[
  [{en:'Clothes',am:'አልባሳት'}],[{en:'Seasons',am:'ወቅቶች'}],[{en:'Stories',am:'ታሪኮች'}],[{en:'The home garden',am:'የጓሮ አትክልት'}],[{en:'A clean environment',am:'የአካባቢ ንጽህና'}],
  [{en:'Traditional music',am:'ባህላዊ ሙዚቃ'}],[{en:'Good manners',am:'መልካም ሥነምግባር'}],[{en:'Preparing food',am:'የምግብ አዘገጃጀት'}],[{en:'Digital devices',am:'ዲጂታል መሣሪያዎች'}],[{en:'Wild animals',am:'የዱር እንስሳት'}]]},
 {key:'english',mark:'Aa',name:{en:'English',am:'እንግሊዝኛ'},chs:[
  [{en:'Our Surroundings',am:'አካባቢያችን'}],[{en:'Days of the Week',am:'የሳምንቱ ቀናት'}],[{en:'Traffic Lights',am:'የትራፊክ መብራቶች'}],[{en:'Forest',am:'ደን'}],
  [{en:'Food Crops',am:'የምግብ ሰብሎች'}],[{en:'Foods',am:'ምግቦች'}],[{en:'Polluted Environment',am:'የተበከለ አካባቢ'}],[{en:'Good Manners',am:'መልካም ሥነምግባር'}]]},
 {key:'env',mark:'🌍',name:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chs:[[{en:'Coming soon: book not yet added',am:'በቅርቡ፦ መጽሐፉ ገና አልተጨመረም'}]]},
 {key:'moral',mark:'♥',name:{en:'Moral Education',am:'ግብረገብ'},chs:[
  [{en:'Self-respect and safety',am:'የራስን ክብርና ደህንነት መጠበቅ'}],[{en:'Truthfulness and honesty',am:'እውነተኛነትና ታማኝነት'}],[{en:'Fairness and justice',am:'ፍትህ'}],
  [{en:'Good social relations',am:'መልካም ማህበራዊ ግንኙነት'}],[{en:'Caring for common property',am:'ለጋራ ንብረት መጠንቀቅ'}],[{en:'Cultural heritage',am:'ባህላዊ ቅርሶች'}]]},
 {key:'health',mark:'🏃',name:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chs:[
  [{en:'Basic movement skills',am:'መሠረታዊ የእንቅስቃሴ ክህሎት'}],[{en:'Rhythmic movement',am:'ሪትሚካዊ (የምት) እንቅስቃሴ'}],[{en:'Games for feelings and friendship',am:'ማህበራዊ መስተጋብርና ስሜታዊነት'}],
  [{en:'Health and fitness',am:'ጤናና የአካል ብቃት'}],[{en:'Gymnastics',am:'ጅምናስቲክስ'}],[{en:'Ethiopian traditional dances and games',am:'የኢትዮጵያ ባህላዊ ጭፈራና ጨዋታዎች'}]]},
 {key:'art',mark:'🎨',name:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chs:[[{en:'Coming soon: book not yet added',am:'በቅርቡ፦ መጽሐፉ ገና አልተጨመረም'}]]}
);
Object.assign(T,{
 g3:{en:'Grade 2',am:'2ኛ ክፍል'},
 g3sub:{en:'5 subjects ready · 41 chapters',am:'5 ትምህርቶች ዝግጁ · 41 ምዕራፎች'},
 ready:{en:'Grade 2: {a} of {b} chapters ready',am:'2ኛ ክፍል፦ ከ{b} ምዕራፎች {a} ዝግጁ'},
 tag:{en:'Grade 2: numbers to 1,000, reading stories, English conversations, being a good person and moving with joy, all with Kokeb the star. In Amharic and English. Created by Dr. Mulusew Kassa Bitew.',am:'2ኛ ክፍል፦ እስከ 1000 ያሉ ቁጥሮች፣ ታሪክ ማንበብ፣ የእንግሊዝኛ ንግግር፣ መልካም ሰው መሆንና በደስታ መንቀሳቀስ፤ ከኮከብ ጋር በአማርኛና በእንግሊዝኛ። የተዘጋጀው በዶ/ር ሙሉሰው ካሳ ቢተው።'},
 srcIntro:{en:'AMBKidsJoy Grade 2 follows the chapters and learning goals of these Grade 2 books. We thank their authors, editors, illustrators and the copyright holders: the Amhara National Regional State Education Bureau, the FDRE Ministry of Education and the regional bureaus that prepared the Moral Education books.',am:'AMBKidsJoy 2ኛ ክፍል የእነዚህን የ2ኛ ክፍል መጻሕፍት ምዕራፎችና የመማር ግቦች ይከተላል። ደራሲዎቹን፣ አርታኢዎቹን፣ ሠዓሊዎቹንና የቅጂ መብት ባለቤቶቹን፦ የአማራ ብሔራዊ ክልላዊ መንግሥት ትምህርት ቢሮን፣ የኢፌዴሪ ትምህርት ሚኒስቴርንና የግብረገብ መጻሕፍትን ያዘጋጁ የክልል ቢሮዎችን እናመሰግናለን።'},
 books:[
  {en:'Mathematics, Grade 2 Student Book. © ANRS Education Bureau, 2015 E.C.',am:'ሒሳብ፣ የ2ኛ ክፍል የተማሪ መጽሐፍ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Amharic, Grade 2 Student Book. © ANRS Education Bureau, 2015 E.C.',am:'አማርኛ፣ የ2ኛ ክፍል የተማሪ መጽሐፍ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'English for Ethiopia, Student\'s Book, Grade 2. FDRE Ministry of Education.',am:'English for Ethiopia፣ የ2ኛ ክፍል የተማሪ መጽሐፍ። የኢፌዴሪ ትምህርት ሚኒስቴር።'},
  {en:'Moral Education, Grade 2 Student Book and Teacher\'s Guide (Amharic edition, prepared under the FDRE Ministry of Education; teacher\'s guide © Oromia Education Bureau, 2015 E.C.).',am:'የግብረገብ ትምህርት፣ የ2ኛ ክፍል የተማሪ መጽሐፍና የመምህር መምሪያ (በኢፌዴሪ ትምህርት ሚኒስቴር አስተባባሪነት የተዘጋጀ፤ የመምህር መምሪያ © የኦሮሚያ ትምህርት ቢሮ፣ 2015 ዓ.ም.)።'},
  {en:'Health & Physical Education, Grade 2 Student Book. © ANRS Education Bureau, 2015 E.C.',am:'ጤናና ሰውነት ማጎልመሻ፣ የ2ኛ ክፍል የተማሪ መጽሐፍ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'}],
 teacher:{en:'For teachers and parents: Grade 2 children can read short texts on their own. Let them read the instructions, then ask them to explain their answers. Stars are saved on this device only.',am:'ለመምህራንና ለወላጆች፦ የ2ኛ ክፍል ልጆች አጫጭር ጽሑፎችን በራሳቸው ማንበብ ይችላሉ። መመሪያውን እንዲያነቡ ፍቀዱላቸው፤ ከዚያ መልሳቸውን እንዲያስረዱ ጠይቋቸው። ኮከቦቹ የሚቀመጡት በዚህ መሣሪያ ላይ ብቻ ነው።'}
});
