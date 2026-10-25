/* Grade 1 chapters (from the Grade 1 student books) */
SUBJECTS.length=0;
SUBJECTS.push(
 {key:'math',mark:'123',name:{en:'Mathematics',am:'ሒሳብ'},chs:[
  [{en:'Numbers up to 20',am:'እስከ 20 ያሉ ቁጥሮች'}],[{en:'Comparing numbers up to 20',am:'እስከ 20 ያሉ ቁጥሮችን ማወዳደር'}],
  [{en:'Adding up to 10',am:'እስከ 10 ያሉ ቁጥሮችን መደመር'}],[{en:'Subtracting up to 10',am:'እስከ 10 ያሉ ቁጥሮችን መቀነስ'}],
  [{en:'Time',am:'ጊዜ'}],[{en:'Numbers up to 100',am:'እስከ 100 ያሉ ቁጥሮች'}],
  [{en:'Adding and subtracting two-digit numbers',am:'ባለ ሁለት ሆሄ ቁጥሮችን መደመርና መቀነስ'}],[{en:'Shapes',am:'የጂኦሜትሪ ምስሎች'}],
  [{en:'Measurement',am:'ልኬት'}],[{en:'Ethiopian money',am:'የኢትዮጵያ ገንዘብ'}]]},
 {key:'amharic',mark:'ሀ',name:{en:'Amharic',am:'አማርኛ'},chs:[
  [{en:'Family',am:'ቤተሰብ'}],[{en:'Our home',am:'መኖሪያ ቤት'}],[{en:'School',am:'ትምህርት ቤት'}],[{en:'Friendship',am:'ጓደኝነት'}],[{en:'Plants',am:'ተክሎች'}],
  [{en:'Road traffic',am:'የመንገድ ትራፊክ'}],[{en:'Stories',am:'ታሪኮች'}],[{en:'Food',am:'ምግብ'}],[{en:'Personal hygiene',am:'የግል ንጽሕና'}],[{en:'Domestic animals',am:'ለማዳ እንስሳት'}]]},
 {key:'english',mark:'Aa',name:{en:'English',am:'እንግሊዝኛ'},chs:[
  [{en:'My Family',am:'ቤተሰቤ'}],[{en:'Times of the Day',am:'የቀኑ ጊዜያት'}],[{en:'Colours',am:'ቀለማት'}],[{en:'Plants',am:'ተክሎች'}],
  [{en:'Domestic Animals',am:'የቤት እንስሳት'}],[{en:'Hot and Cold Weather',am:'ሞቃትና ቀዝቃዛ የአየር ጠባይ'}],[{en:'My Role Model',am:'አርአያዬ'}],[{en:'Caring for Body Parts',am:'የሰውነት ክፍሎችን መንከባከብ'}]]},
 {key:'env',mark:'🌍',name:{en:'Environmental Science',am:'አካባቢ ሳይንስ'},chs:[
  [{en:'Understanding science: my body',am:'ሳይንስን መረዳት'}],[{en:'Our social environment',am:'ማህበራዊ አካባቢ'}],[{en:'Where we live: directions',am:'የአካባቢያችን መገኛ'}],
  [{en:'Our natural environment',am:'ተፈጥሯዊ አካባቢ'}],[{en:'Important issues for everyone',am:'ሁሉን አቀፍና ትኩረት የሚሹ ጉዳዮች'}]]},
 {key:'moral',mark:'♥',name:{en:'Moral Education',am:'ግብረገብ'},chs:[[{en:'Coming soon: book not yet added',am:'በቅርቡ፦ መጽሐፉ ገና አልተጨመረም'}]]},
 {key:'health',mark:'🏃',name:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chs:[
  [{en:'Basic movement skills',am:'መሠረታዊ የእንቅስቃሴ ክህሎት'}],[{en:'Rhythmic movement',am:'ሪትሚካዊ (የምት) እንቅስቃሴ'}],[{en:'Games for feelings and friendship',am:'ማህበራዊ መስተጋብርና ስሜታዊነት'}],
  [{en:'Health and fitness',am:'ጤናና የአካል ብቃት'}],[{en:'Gymnastics',am:'ጅምናስቲክስ'}],[{en:'Ethiopian traditional dances and games',am:'የኢትዮጵያ ባህላዊ ጭፈራና ጨዋታዎች'}]]},
 {key:'art',mark:'🎨',name:{en:'Performing & Visual Arts',am:'ሥነ ጥበባት'},chs:[[{en:'Coming soon: book not yet added',am:'በቅርቡ፦ መጽሐፉ ገና አልተጨመረም'}]]}
);
Object.assign(T,{
 g3:{en:'Grade 1',am:'1ኛ ክፍል'},
 g3sub:{en:'5 subjects ready · 39 chapters',am:'5 ትምህርቶች ዝግጁ · 39 ምዕራፎች'},
 ready:{en:'Grade 1: {a} of {b} chapters ready',am:'1ኛ ክፍል፦ ከ{b} ምዕራፎች {a} ዝግጁ'},
 tag:{en:'Grade 1: learn to count, read, write and explore with Kokeb the star. Big pictures, finger tracing, counting games and songs, in Amharic and English.',am:'1ኛ ክፍል፦ ከኮከብ ጋር መቁጠር፣ ማንበብ፣ መጻፍና ማሰስ ተማሩ። ትልልቅ ስዕሎች፣ በጣት መጻፍ፣ የቁጥር ጨዋታዎችና መዝሙሮች በአማርኛና በእንግሊዝኛ።'},
 srcIntro:{en:'Grade 1 follows these student books. Thank you to their writers.',am:'1ኛ ክፍል እነዚህን የተማሪ መጻሕፍት ይከተላል። አዘጋጆቻቸውን እናመሰግናለን።'},
 books:[
  {en:'Mathematics: Bire Gete. © ANRS Education Bureau, 2015 E.C.',am:'ሒሳብ፦ ብሬ ጌቴ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Amharic: Hawaz Woldeyes, Getachew Tefera, Zinet Ahmed. © ANRS Education Bureau, 2015 E.C.',am:'አማርኛ፦ ሐዋዝ ወልደየስ፣ ጌታቸው ተፈራ፣ ዚነት አህመድ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'English for Ethiopia, Grade 1. © FDRE Ministry of Education.',am:'English for Ethiopia፣ 1ኛ ክፍል። © የኢፌዴሪ ትምህርት ሚኒስቴር።'},
  {en:'Environmental Science: Ketemaw Wubet, Worku Melese. © ANRS Education Bureau, 2015 E.C.',am:'አካባቢ ሳይንስ፦ ከተማው ውበት፣ ወርቁ መለሰ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'},
  {en:'Health & PE: Adane Eshetu, Mesfin Ketema. © ANRS Education Bureau, 2015 E.C.',am:'ጤናና ሰውነት ማጎልመሻ፦ አዳነ እሸቱ፣ መስፍን ከተማ። © አብክመ ትምህርት ቢሮ፣ 2015 ዓ.ም.'}],
 teacher:{en:'For teachers and parents: Grade 1 children learn best with you beside them. Read the instructions aloud, let them tap and trace, and ask "how do you know?". Stars are saved on this device only.',am:'ለመምህራንና ለወላጆች፦ የ1ኛ ክፍል ልጆች እናንተ አጠገባቸው ስትሆኑ በደንብ ይማራሉ። መመሪያውን ጮክ ብላችሁ አንብቡላቸው፣ እንዲነኩና እንዲጽፉ ፍቀዱላቸው፤ "እንዴት አወቅህ/ሽ?" ብላችሁ ጠይቁ። ኮከቦቹ የሚቀመጡት በዚህ መሣሪያ ላይ ብቻ ነው።'}
});
