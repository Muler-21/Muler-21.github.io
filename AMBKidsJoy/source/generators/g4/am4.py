import sys;sys.path.insert(0,'.')
from common4 import *
SN=E('Amharic','አማርኛ')
def A(q_en,q_am,opts,a=0): return {'q':E(q_en,q_am),'o':[o if isinstance(o,str) else E(*o) for o in opts],'a':a}
def W(sent,opts,a=0): return {'q':sent,'o':opts,'a':a}
def read(ptitle,paras,items): return {'title':E('Read and understand','አንብቦ መረዳት'),'type':'quiz','tip':E('Read the passage fluently, then answer. Think about the main idea.','ምንባቡን አቀላጥፋችሁ አንብቡ፤ ከዚያ መልሱ። ስለ ዋናው ሐሳብ አስቡ።'),'passage':{'title':ptitle,'paras':paras},'items':items}
def build(rounds): return order(('Build the sentence','ዓረፍተ ነገር መሥርቱ'),('Put the words in the right order. Amharic sentences end with the verb and "።".','ቃላቱን በትክክለኛ ቅደም ተከተል አስቀምጡ። የአማርኛ ዓረፍተ ነገር በግሥና በ"።" ይጨርሳል።'),('Tap the words in order.','ቃላቱን በቅደም ተከተል ንኩ።'),[(('Build:','መሥርቱ፦'),w) for w in rounds])
def vmatch(title,tip,pairs): return {'title':E(*title),'type':'match','tip':E(*tip),'rounds':[[[a,b] for a,b in r] for r in pairs]}
def U(n,title,extra,exam,nt,summ,foot):
    unit(f'g4-amharic-{n}','amharic',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 4 Amharic student book (ANRS), Chapter {n}: {foot}.',f'በ4ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ {n} ({title[1]}) ላይ የተመሰረተ።'),'(d=>[])',{},extra,exam,nt,summ)
VOC=('Word meanings','የቃላት ፍቺ');VTIP=('Match each word with its meaning.','እያንዳንዱን ቃል ከፍቺው ጋር አዛምዱ።')

U(1,('Protecting the environment','አካባቢ ጥበቃ'),[
 read('ጣናን እንታደግ',['ጣና የኢትዮጵያ ትልቁ ሐይቅ ነው። በውስጡ ዓሣዎች ይኖራሉ፤ በዳርቻው ደግሞ ብዙ አዕዋፍ ይሰፍራሉ።','ዛሬ ግን እምቦጭ የተባለ መጤ አረም ሐይቁን እየሸፈነው ነው። አረሙ ዉኃውን ያደርቃል፤ ዓሣዎችንም ያጠፋል።','ተማሪዎችና አርሶ አደሮች በዘመቻ አረሙን እየነቀሉ ነው። "ጣና የእኛ ነው፤ እንታደገው!" ይላሉ።'],[
  A('What is covering Lake Tana?','ጣናን እየሸፈነው ያለው ምንድን ነው?',['እምቦጭ አረም','ዓሣ','በረዶ']),A('What does the weed do?','አረሙ ምን ያደርጋል?',['ዉኃውን ያደርቃል፤ ዓሣዎችን ያጠፋል','ዝናብ ያዘንባል','ዓሣዎችን ያበዛል']),
  A('Who is removing the weed?','አረሙን እየነቀሉ ያሉት እነማን ናቸው?',['ተማሪዎችና አርሶ አደሮች','ቱሪስቶች ብቻ','ማንም']),A('What is the main idea?','የምንባቡ ዋና ሐሳብ ምንድን ነው?',['ጣናን ከአረም መታደግ','ዓሣ ማጥመድ','የአዕዋፍ ዓይነቶች'])]),
 vmatch(VOC,VTIP,[[('መታደግ','ከአደጋ ማዳን'),('ደን','በዛፎች የተሸፈነ ቦታ'),('መመንጠር','ዛፍን ከሥሩ መቁረጥ')],[('ብክለት','ማቆሸሽ'),('ዘመቻ','የጋራ ሥራ'),('በረሃማነት','ምድር ደረቅ መሆን')]]),
 quiz(('Same or opposite meaning?','ተመሳሳይ ወይስ ተቃራኒ?'),('Synonyms have the same meaning (ንጹህ = ጽዱ); antonyms have opposite meanings (ንጹህ ↔ ቆሻሻ).','ተመሳሳይ ፍቺ ያላቸው ቃላት አንድ ትርጉም አላቸው (ንጹህ = ጽዱ)፤ ተቃራኒ ቃላት የተለያየ ትርጉም አላቸው (ንጹህ ↔ ቆሻሻ)።'),[
  A('Opposite of "መትከል"','የ"መትከል" ተቃራኒ',['መንቀል','መዝራት','ማጠጣት']),A('Same meaning as "መጠበቅ"','ከ"መጠበቅ" ጋር ተመሳሳይ',['መንከባከብ','ማጥፋት','መጣል']),A('Opposite of "ለም"','የ"ለም" ተቃራኒ',['ደረቅ (ጠፍ)','ጥሩ','አረንጓዴ']),A('Opposite of "መጨመር"','የ"መጨመር" ተቃራኒ',['መቀነስ','ማብዛት','መሙላት'])]),
 build([['ተማሪዎች','ዛፍ','ተከሉ።'],['ደኖች','ዝናብ','እንዲዘንብ','ያደርጋሉ።'],['ቆሻሻን','በተገቢው','ቦታ','እንጣል።']])],
 [A('Which helps the environment?','አካባቢን የሚጠቅመው?',['ዛፍ መትከል','ደን መመንጠር','ቆሻሻ በወንዝ መጣል']),A('Opposite of "ንጹህ"','የ"ንጹህ" ተቃራኒ',['ቆሻሻ','ጽዱ','ውብ']),A('Forests help…','ደኖች…',['ዝናብ እንዲዘንብ','በረሃማነት እንዲጨምር','ዉኃ እንዲደርቅ']),A('"መታደግ" means…','"መታደግ" ማለት…',['ማዳን','ማጥፋት','መሸጥ'])],
 notes(('Our environment is our life; we must protect forests, water and soil.','አካባቢያችን ሕይወታችን ነው፤ ደንን፣ ዉኃንና አፈርን መጠበቅ አለብን።'),
  [('Lake Tana is threatened by the water hyacinth weed (እምቦጭ).','ጣና በእምቦጭ አረም ስጋት ላይ ነው።'),('Forests bring rain, protect soil and shelter animals.','ደኖች ዝናብ ያመጣሉ፣ አፈርን ይጠብቃሉ፣ እንስሳትን ያስጠልላሉ።'),('Synonyms and antonyms: መጠበቅ = መንከባከብ; መትከል ↔ መንቀል.','ተመሳሳይና ተቃራኒ፦ መጠበቅ = መንከባከብ፤ መትከል ↔ መንቀል።'),('Sentences end with the verb and "።".','ዓረፍተ ነገር በግሥና በ"።" ይጨርሳል።')],
  [('እምቦጭ','water hyacinth','ሐይቅን የሚሸፍን መጤ አረም'),('ጥበቃ','protection','መንከባከብ'),('ብክለት','pollution','ማቆሸሽ')],('One child, one tree!','አንድ ልጅ፣ አንድ ዛፍ!'),
  [(('Give the opposite of "መቁረጥ" (a tree)','የ"መቁረጥ" (ዛፍ) ተቃራኒ'),'መትከል'),(('Why are forests important?','ደኖች ለምን ይጠቅማሉ?'),'ዝናብ ያመጣሉ፣ አፈርን ይጠብቃሉ')],
  (('Hyacinth crafts','የእምቦጭ የእጅ ሥራ'),('In some places the dried water hyacinth is woven into baskets and mats, turning a problem into income. Plan a small craft group.','በአንዳንድ ቦታዎች የደረቀ እምቦጭ ቅርጫትና ምንጣፍ ይሠራበታል፤ ችግርን ወደ ገቢ ይለውጣል። ትንሽ የእጅ ሥራ ቡድን አቅዱ።'),
   [('Ask an adult to collect and dry the weed safely.','አዋቂ ሰው አረሙን በደህንነት ሰብስቦ እንዲያደርቅ ጠይቁ።'),('Learn a simple weave from a basket maker.','ከቅርጫት ሠሪ ቀላል ስፌት ተማሩ።'),('Make a small mat or coaster.','ትንሽ ምንጣፍ ወይም የብርጭቆ ማስቀመጫ ሥሩ።'),('Write a short advertisement in Amharic.','በአማርኛ አጭር ማስታወቂያ ጻፉ።')])),
 sm(('Protect forests, water and soil; they are our life','ደንን፣ ዉኃንና አፈርን ጠብቁ፤ ሕይወታችን ናቸው'),[('Save Lake Tana','ጣናን መታደግ'),('Forests','ደኖች'),('Synonyms and antonyms','ተመሳሳይና ተቃራኒ'),('Sentences','ዓረፍተ ነገር')]),'protecting the environment')

U(2,('Road safety','የመንገድ ደህንነት'),[
 read('ፍጥነትና መዘዙ',['ሾፌሩ ቶሎ ለመድረስ ፈልጎ መኪናውን በከፍተኛ ፍጥነት ይነዳ ነበር። ተሳፋሪዎቹ "እባክህ ቀስ በል!" ብለው ለመኑት።','በመታጠፊያው ላይ መኪናው መቆጣጠር አቃተውና ከመንገዱ ወጣ። እንደ እድል ሆኖ ሰው አልሞተም፤ ግን ብዙዎች ተጎዱ።','የትራፊክ ፖሊሱ "ፍጥነት ይገድላል፤ ሕግን አክብሩ" አለ።'],[
  A('Why was the driver going fast?','ሾፌሩ ለምን በፍጥነት ይነዳ ነበር?',['ቶሎ ለመድረስ','ስለደከመው','ፖሊስ ስላዘዘው']),A('What did the passengers ask?','ተሳፋሪዎቹ ምን ለመኑ?',['ቀስ እንዲል','እንዲፈጥን','እንዲቆም ብቻ']),
  A('What happened at the bend?','በመታጠፊያው ላይ ምን ሆነ?',['መኪናው ከመንገድ ወጣ','መኪናው ቆመ','ዝናብ ዘነበ']),A('The lesson of the story is…','የታሪኩ ትምህርት…',['ፍጥነት ይገድላል','ፍጥነት ጥሩ ነው','ፖሊስ አያስፈልግም'])]),
 vmatch(VOC,VTIP,[[('ተሳፋሪ','በመኪና የሚጓዝ ሰው'),('እግረኛ','በእግሩ የሚሄድ ሰው'),('መዘዝ','መጥፎ ውጤት')],[('ማቋረጫ','የመሻገሪያ ቦታ'),('አደጋ','ጉዳት የሚያደርስ ክስተት'),('ጥንቃቄ','በሐሳብ መጠበቅ')]]),
 quiz(('Opposites','ተቃራኒ ቃላት'),('Antonyms help us describe safe and unsafe behaviour.','ተቃራኒ ቃላት ደህናና አደገኛ ባህሪን ለመግለጽ ይረዱናል።'),[
  A('Opposite of "ፈጣን"','የ"ፈጣን" ተቃራኒ',['ቀርፋፋ','ፈጣሪ','ብልህ']),A('Opposite of "ብልህ"','የ"ብልህ" ተቃራኒ',['ሞኝ','ጎበዝ','ትጉህ']),A('Opposite of "ዳር"','የ"ዳር" ተቃራኒ',['መሃል','ጠርዝ','ጥግ']),A('Opposite of "ማቆም"','የ"ማቆም" ተቃራኒ',['ማስነሳት (መንቀሳቀስ)','መቆም','መያዝ'])]),
 sortm(('Safe or dangerous?','ደህና ወይስ አደገኛ?'),('Road users must obey traffic rules.','የመንገድ ተጠቃሚዎች የትራፊክ ሕግ ማክበር አለባቸው።'),[('✅ ደህና','✅ ደህና'),('⚠️ አደገኛ','⚠️ አደገኛ')],[
  (('በእግረኛ ማቋረጫ መሻገር','በእግረኛ ማቋረጫ መሻገር'),0),(('የመቀመጫ ቀበቶ ማሰር','የመቀመጫ ቀበቶ ማሰር'),0),(('በግራ በኩል መሄድ (ፊት ለፊት መኪናን እያዩ)','በግራ በኩል መሄድ (ፊት ለፊት መኪናን እያዩ)'),0),(('በመንገድ ላይ ኳስ መጫወት','በመንገድ ላይ ኳስ መጫወት'),1),(('ሰክሮ መንዳት','ሰክሮ መንዳት'),1),(('ከቆመ መኪና ጀርባ መሻገር','ከቆመ መኪና ጀርባ መሻገር'),1)]),
 build([['መንገድ','ከማቋረጣችሁ','በፊት','ግራና','ቀኝ','ተመልከቱ።'],['ፍጥነት','ይገድላል።'],['ሾፌሩ','የትራፊክ','ሕግን','አከበረ።']])],
 [A('A person who walks on the road is…','በመንገድ በእግሩ የሚሄድ ሰው…',['እግረኛ','ሾፌር','ተሳፋሪ']),A('Opposite of "ቀርፋፋ"','የ"ቀርፋፋ" ተቃራኒ',['ፈጣን','ደካማ','ዘገምተኛ']),A('Which is safe?','ደህናው የትኛው ነው?',['በማቋረጫ መሻገር','በመንገድ ላይ መጫወት']),A('"መዘዝ" means…','"መዘዝ" ማለት…',['መጥፎ ውጤት','ጥሩ ሽልማት','መንገድ'])],
 notes(('Obeying traffic rules saves lives; speed causes accidents.','የትራፊክ ሕግን ማክበር ሕይወትን ያድናል፤ ፍጥነት አደጋ ያስከትላል።'),
  [('Speed and carelessness cause accidents.','ፍጥነትና ቸልተኝነት አደጋ ያስከትላሉ።'),('Pedestrians: use crossings, look left and right.','እግረኞች፦ ማቋረጫ ተጠቀሙ፣ ግራና ቀኝ ተመልከቱ።'),('Passengers: wear seat belts, warn careless drivers.','ተሳፋሪዎች፦ ቀበቶ እሰሩ፣ ቸልተኛ ሾፌርን አስጠንቅቁ።'),('Antonyms: ፈጣን ↔ ቀርፋፋ, ብልህ ↔ ሞኝ.','ተቃራኒ፦ ፈጣን ↔ ቀርፋፋ፣ ብልህ ↔ ሞኝ።')],
  [('ተሳፋሪ','passenger','በመኪና የሚጓዝ'),('እግረኛ','pedestrian','በእግር የሚሄድ'),('ማቋረጫ','crossing','የመሻገሪያ ቦታ')],('Slow down; life has no spare!','ቀስ በሉ፤ ሕይወት መለዋወጫ የላትም!'),
  [(('Opposite of "ዳር"','የ"ዳር" ተቃራኒ'),'መሃል'),(('Give 2 road safety rules','2 የመንገድ ደህንነት ሕጎች'),'በማቋረጫ መሻገር፣ ቀበቶ ማሰር')],
  (('Safety-song jingle','የደህንነት መዝሙር'),('Radio stations pay for good jingles. Write a short Amharic road-safety song and perform it at the school assembly.','ሬዲዮ ጣቢያዎች ለጥሩ ማስታወቂያ መዝሙሮች ይከፍላሉ። አጭር የአማርኛ የመንገድ ደህንነት መዝሙር ጻፉና በሰልፍ ላይ አቅርቡ።'),
   [('Choose 3 rules.','3 ሕጎችን ምረጡ።'),('Write 4 short rhyming lines.','4 አጫጭር ቤት የሚመቱ መስመሮች ጻፉ።'),('Add a clap rhythm.','የጭብጨባ ምት ጨምሩ።'),('Perform it and teach others.','አቅርቡና ሌሎችን አስተምሩ።')])),
 sm(('Obey traffic rules; speed causes accidents','የትራፊክ ሕግ አክብሩ፤ ፍጥነት አደጋ ያመጣል'),[('Speed and accidents','ፍጥነትና አደጋ'),('Pedestrians','እግረኞች'),('Passengers','ተሳፋሪዎች'),('Antonyms','ተቃራኒ ቃላት')]),'road safety')

U(3,('Helping each other','መረዳዳት'),[
 read('ድር ቢያብር',['በአንድ መንደር የሚኖሩ አርሶ አደሮች የአንዱ ጎረቤታቸው ቤት በዝናብ ፈረሰበት። ጎረቤቶቹ ተሰብስበው "ብቻውን አይቻለውም፤ እንርዳው" ተባባሉ።','አንዱ እንጨት፣ ሌላው ሣር፣ ሌላው ጭቃ አመጣ። በሦስት ቀን ውስጥ አዲስ ቤት ቆመ።','ባለቤቱም "ድር ቢያብር አንበሳ ያስር ማለት ይህ ነው!" ብሎ አመሰገናቸው።'],[
  A('What happened to the farmer\'s house?','የአርሶ አደሩ ቤት ምን ሆነ?',['በዝናብ ፈረሰ','ተሸጠ','በእሳት ነደደ']),A('What did the neighbours do?','ጎረቤቶቹ ምን አደረጉ?',['ተሰብስበው አዲስ ቤት ሠሩ','ዝም አሉ','ሄዱ']),
  A('How long did it take?','ምን ያህል ጊዜ ወሰደ?',['ሦስት ቀን','አንድ ዓመት','አንድ ሰዓት']),A('"ድር ቢያብር አንበሳ ያስር" means…','"ድር ቢያብር አንበሳ ያስር" ማለት…',['አንድነት ኃይል ነው','ሸረሪት ጠንካራ ነው','አንበሳ ደካማ ነው'])]),
 quiz(('Plural: -ኦች or -ዎች','ብዙ ቁጥር፦ -ኦች ወይስ -ዎች'),('Words ending in a consonant sound add -ኦች (በግ → በጎች); words ending in a vowel add -ዎች (ተማሪ → ተማሪዎች).','በተነባቢ ድምፅ የሚጨርሱ ቃላት -ኦች ይጨምራሉ (በግ → በጎች)፤ በአናባቢ የሚጨርሱ -ዎች ይጨምራሉ (ተማሪ → ተማሪዎች)።'),[
  A('ዶሮ → ?','ዶሮ → ?',['ዶሮዎች','ዶሮች','ዶሮኦች']),A('በግ → ?','በግ → ?',['በጎች','በግዎች','በጋች']),A('ተማሪ → ?','ተማሪ → ?',['ተማሪዎች','ተማሮች','ተማሪኦች']),A('ወፍ → ?','ወፍ → ?',['ወፎች','ወፍዎች','ወፋች']),A('ሰው → ?','ሰው → ?',['ሰዎች','ሰውዎች','ሰዋች'])]),
 match(('Proverbs about helping','ስለ መረዳዳት ምሳሌያዊ አነጋገሮች'),('Proverbs teach wisdom in few words.','ምሳሌያዊ አነጋገሮች ጥበብን በጥቂት ቃላት ያስተምራሉ።'),[[('ድር ቢያብር','አንበሳ ያስር'),('ያገር ልጅ','የማር እጅ'),('አንድ እጅ','አያጨበጭብም')]]),
 build([['ጎረቤቶቹ','በደቦ','ቤት','ሠሩ።'],['መረዳዳት','ሥራን','ያቀላል።'],['ድር','ቢያብር','አንበሳ','ያስር።']])],
 [A('መምህር → ?','መምህር → ?',['መምህራን (መምህሮች)','መምህርዎች','መምህሪዎች']),A('Helping each other makes work…','መረዳዳት ሥራን…',['ቀላል ያደርጋል','ከባድ ያደርጋል']),A('"አንድ እጅ አያጨበጭብም" teaches…','"አንድ እጅ አያጨበጭብም" የሚያስተምረው…',['መተባበርን','ብቻ መሥራትን','መጫወትን']),A('ልጅ → ?','ልጅ → ?',['ልጆች','ልጅዎች','ልጃች'])],
 notes(('Helping each other makes hard work easy and builds strong communities.','መረዳዳት ከባድ ሥራን ያቀላል፤ ጠንካራ ማህበረሰብ ይገነባል።'),
  [('Traditions of helping: debo, wenfel, idir.','የመረዳዳት ባህሎች፦ ደቦ፣ ወንፈል፣ እድር።'),('Proverb: ድር ቢያብር አንበሳ ያስር (unity is strength).','ምሳሌያዊ አነጋገር፦ ድር ቢያብር አንበሳ ያስር።'),('Plural with -ኦች: በግ → በጎች.','ብዙ ቁጥር በ-ኦች፦ በግ → በጎች።'),('Plural with -ዎች: ተማሪ → ተማሪዎች.','ብዙ ቁጥር በ-ዎች፦ ተማሪ → ተማሪዎች።')],
  [('ደቦ','work party','ጎረቤቶች በጋራ የሚሠሩት ሥራ'),('እድር','community help group','በችግር ጊዜ የሚረዳዳ ማህበር'),('ምሳሌያዊ አነጋገር','proverb','ጥበብ ያዘለ አጭር አባባል')],('Unity is strength.','አንድነት ኃይል ነው።'),
  [(('Plural of "ቤት"','የ"ቤት" ብዙ ቁጥር'),'ቤቶች'),(('Complete: ድር ቢያብር …','አሟሉ፦ ድር ቢያብር …'),'አንበሳ ያስር')],
  (('Class savings group','የክፍል የቁጠባ ቡድን'),('Many Ethiopian businesses started with an equb. Start a tiny class savings group (1 birr a week) to buy shared books.','ብዙ የኢትዮጵያ ሥራዎች በእቁብ ጀምረዋል። የጋራ መጻሕፍት ለመግዛት ትንሽ የክፍል የቁጠባ ቡድን (በሳምንት 1 ብር) ጀምሩ።'),
   [('Agree on rules with your teacher.','ከመምህራችሁ ጋር በሕግ ተስማሙ።'),('Choose a treasurer and a record keeper.','ገንዘብ ያዥና መዝጋቢ ምረጡ።'),('Record every saving in a book.','እያንዳንዱን ቁጠባ በደብተር መዝግቡ።'),('Decide together what to buy.','የሚገዛውን በጋራ ወስኑ።')])),
 sm(('Helping each other makes hard work easy','መረዳዳት ከባድ ሥራን ያቀላል'),[('Traditions of helping','የመረዳዳት ባህሎች'),('Proverbs','ምሳሌያዊ አነጋገር'),('Plural -ኦች','ብዙ ቁጥር -ኦች'),('Plural -ዎች','ብዙ ቁጥር -ዎች')]),'helping each other')

U(4,('Gender equality','ሥርዓተ ፆታ'),[
 read('እኩል ተሳትፎ',['በአልማዝ ቤት ውስጥ ሁሉም ይሠራል። አባቷ ምግብ ያበስላል፤ እናቷ የቤተሰቡን የንግድ ሒሳብ ትይዛለች።','አልማዝና ወንድሟ ዳዊት ተራ በተራ ዉኃ ይቀዳሉ፤ ልብስ ያጥባሉ። ኹለቱም ጊዜ አግኝተው ያጠናሉ።','በትምህርት ቤትም አልማዝ የክፍሉ አለቃ ናት። መምህሯ "ሴትም ወንድም እኩል ችሎታ አላቸው" ትላለች።'],[
  A('Who cooks in Almaz\'s home?','በአልማዝ ቤት ምግብ የሚያበስለው ማን ነው?',['አባቷ','ጎረቤት','ማንም']),A('How do Almaz and Dawit share chores?','አልማዝና ዳዊት ሥራን እንዴት ይካፈላሉ?',['ተራ በተራ','አልማዝ ብቻ ትሠራለች','ዳዊት ብቻ ይሠራል']),
  A('What is Almaz at school?','አልማዝ በትምህርት ቤት ምንድን ናት?',['የክፍል አለቃ','ዘበኛ','እንግዳ']),A('The main message is…','ዋናው መልእክት…',['ሴትም ወንድም እኩል ናቸው','ሴቶች መማር የለባቸውም','ወንዶች ብቻ ይመራሉ'])]),
 quiz(('Verbs and adjectives','ግሥና ቅጽል'),('A verb shows an action (ሠራች, አነበቡ). An adjective describes a noun (ጎበዝ, ረጅም, ነጭ).','ግሥ ድርጊትን ያሳያል (ሠራች፣ አነበቡ)። ቅጽል ስምን ይገልጻል (ጎበዝ፣ ረጅም፣ ነጭ)።'),[
  A('Which word is a verb?','ግሥ የሆነው ቃል?',['አነበቡ','ጎበዝ','ረጅም']),A('Which word is an adjective?','ቅጽል የሆነው ቃል?',['ጎበዝ','ጀመረ','ገቡ']),W('ጎበዝ ካፒቴን ናት። — Which word is the adjective?',['ጎበዝ','ካፒቴን','ናት']),W('ትልቅ አውሮፕላን አበረረች። — Which word is the verb?',['አበረረች','ትልቅ','አውሮፕላን']),A('"ነጩ በግ ተሸጠ" — the adjective is…','"ነጩ በግ ተሸጠ" — ቅጽሉ…',['ነጩ','በግ','ተሸጠ'])]),
 sortm(('Fair or unfair?','ፍትሃዊ ነው ወይስ አይደለም?'),('Girls and boys have equal rights and abilities.','ሴቶችና ወንዶች እኩል መብትና ችሎታ አላቸው።'),[('⚖️ ፍትሃዊ','⚖️ ፍትሃዊ'),('🚫 ፍትሃዊ ያልሆነ','🚫 ፍትሃዊ ያልሆነ')],[
  (('ሴትና ወንድ ልጅ እኩል ይማራሉ','ሴትና ወንድ ልጅ እኩል ይማራሉ'),0),(('የቤት ሥራን ሁሉም ይካፈላል','የቤት ሥራን ሁሉም ይካፈላል'),0),(('ሴት ልጅ የክፍል አለቃ ትሆናለች','ሴት ልጅ የክፍል አለቃ ትሆናለች'),0),(('ሴት ልጅ ከትምህርት ቀርታ ዉኃ ትቀዳለች','ሴት ልጅ ከትምህርት ቀርታ ዉኃ ትቀዳለች'),1),(('"ሴት ከበዛ ጎመን ጠነዛ" ማለት','"ሴት ከበዛ ጎመን ጠነዛ" ማለት'),1),(('ልጃገረድን ያለ እድሜዋ መዳር','ልጃገረድን ያለ እድሜዋ መዳር'),1)]),
 build([['ሴቶችና','ወንዶች','እኩል','ናቸው።'],['አልማዝ','ጎበዝ','ተማሪ','ናት።'],['ዳዊት','ልብስ','አጠበ።']])],
 [A('Which is an adjective?','ቅጽል የትኛው ነው?',['ቀይ','ሄደ','በላ']),A('Which is fair?','ፍትሃዊው የትኛው ነው?',['ሥራን መካፈል','ሴትን ከትምህርት ማስቀረት']),A('Which is a verb?','ግሥ የትኛው ነው?',['ተረዳዱ','ወፍራም','የዋህ']),A('Girls and boys have…','ሴቶችና ወንዶች…',['እኩል ችሎታ','የተለያየ መብት'])],
 notes(('Girls and boys have equal rights, abilities and responsibilities.','ሴቶችና ወንዶች እኩል መብት፣ ችሎታና ኃላፊነት አላቸው።'),
  [('Share home tasks fairly.','የቤት ሥራን በፍትሃዊነት ተካፈሉ።'),('Girls lead as captains, judges and presidents.','ሴቶች እንደ ካፒቴን፣ ዳኛና ፕሬዚዳንት ይመራሉ።'),('Verbs show actions: ሠራች, አነበቡ.','ግሥ ድርጊት ያሳያል፦ ሠራች፣ አነበቡ።'),('Adjectives describe nouns: ጎበዝ, ረጅም, ቀይ.','ቅጽል ስምን ይገልጻል፦ ጎበዝ፣ ረጅም፣ ቀይ።')],
  [('እኩልነት','equality','አንድ ዓይነት መብት'),('ግሥ','verb','ድርጊት የሚያሳይ ቃል'),('ቅጽል','adjective','ስምን የሚገልጽ ቃል')],('Equal chance, equal success!','እኩል ዕድል፣ እኩል ስኬት!'),
  [(('Find the adjective: "ረጅም ዛፍ"','ቅጽሉን ፈልጉ፦ "ረጅም ዛፍ"'),'ረጅም'),(('Name a fair home habit','ፍትሃዊ የቤት ልማድ ጥቀሱ'),'ሥራን በተራ መሥራት')],
  (('Role-model posters','የአርአያ ሰዎች ፖስተር'),('Make posters of Ethiopian women and men in surprising jobs (a woman pilot, a man nurse) to inspire classmates.','ያልተለመደ ሥራ የሚሠሩ ኢትዮጵያውያን ሴቶችና ወንዶች (ሴት አብራሪ፣ ወንድ ነርስ) ፖስተር ሥሩ፤ ጓደኞቻችሁን አነሳሱ።'),
   [('Ask families about people they know.','ቤተሰቦችን ስለሚያውቋቸው ሰዎች ጠይቁ።'),('Write 3 sentences about each person.','ስለ እያንዳንዱ 3 ዓረፍተ ነገሮች ጻፉ።'),('Underline the adjectives you used.','የተጠቀማችሁባቸውን ቅጽሎች አስምሩ።'),('Hang the posters in class.','ፖስተሮቹን በክፍል ስቀሉ።')])),
 sm(('Girls and boys are equal in rights and abilities','ሴቶችና ወንዶች በመብትና በችሎታ እኩል ናቸው'),[('Sharing tasks','ሥራን መካፈል'),('Women leaders','ሴት መሪዎች'),('Verbs','ግሦች'),('Adjectives','ቅጽሎች')]),'gender equality')

U(5,('Visits','ጉብኝት'),[
 read('ጢስ ዓባይ ፏፏቴ',['በዕረፍት ቀን ቤተሰባችን ጢስ ዓባይን ጎበኘ። ፏፏቴው ከባሕር ዳር ብዙም አይርቅም።','ዉኃው ከከፍታ ሲወርድ ጢስ የመሰለ ጭጋግ ይፈጥራል፤ በፀሐይ ብርሃን ቀስተ ደመና ይታያል።','አስጎብኚያችን "ፏፏቴውን ለትውልድ እንጠብቀው" አለን። እኔም ፎቶ አንስቼ ማስታወሻ ጻፍኩ።'],[
  A('Where did the family go?','ቤተሰቡ የት ሄደ?',['ጢስ ዓባይ','ላሊበላ','አዲስ አበባ']),A('Why is it called "ጢስ ዓባይ"?','ለምን "ጢስ ዓባይ" ተባለ?',['ዉኃው ጢስ የመሰለ ጭጋግ ስለሚፈጥር','እሳት ስላለበት','ጭስ ስለሚወጣ ከፋብሪካ']),
  A('What appears in the sunlight?','በፀሐይ ብርሃን ምን ይታያል?',['ቀስተ ደመና','በረዶ','ጨረቃ']),A('What did the guide say?','አስጎብኚው ምን አለ?',['ፏፏቴውን እንጠብቀው','ዉኃውን እንሽጠው','አትጎብኙ'])]),
 vmatch(('Places to visit','የሚጎበኙ ቦታዎች'),('Match each place with what it is famous for.','እያንዳንዱን ቦታ ከሚታወቅበት ጋር አዛምዱ።'),[[('ጢስ ዓባይ','ፏፏቴ'),('ላሊበላ','ውቅር አብያተ ክርስቲያናት'),('ጎንደር','የፋሲል ግንብ')],[('ጣና','የደሴት ገዳማት'),('ጎዜ','ጥንታዊ መስጊድ'),('ሰሜን ተራሮች','ዋልያ')]]),
 quiz(('Describing words','ገላጭ ቃላት'),('Adjectives make descriptions beautiful: ውብ፣ ታሪካዊ፣ ረጅም፣ ጥንታዊ.','ቅጽሎች ገለጻን ያሳምራሉ፦ ውብ፣ ታሪካዊ፣ ረጅም፣ ጥንታዊ።'),[
  W('___ ግንብ ጎበኘን። (very old)',['ጥንታዊ','አዲስ','ትንሽ']),W('ፏፏቴው በጣም ___ ነው። (beautiful)',['ውብ','አስቀያሚ','ደረቅ']),A('Which word describes a place?','ቦታን የሚገልጸው ቃል?',['ታሪካዊ','ሄድን','ጎበኘን']),A('Opposite of "ጥንታዊ"','የ"ጥንታዊ" ተቃራኒ',['ዘመናዊ','ታሪካዊ','ውብ'])]),
 build([['ቤተሰባችን','ጢስ','ዓባይን','ጎበኘ።'],['ላሊበላ','ታሪካዊ','ቦታ','ነው።'],['ቅርሶቻችንን','እንጠብቅ።']])],
 [A('Lalibela is famous for…','ላሊበላ የሚታወቀው በ…',['ውቅር አብያተ ክርስቲያናት','ፏፏቴ','ሐይቅ']),A('Opposite of "ዘመናዊ"','የ"ዘመናዊ" ተቃራኒ',['ጥንታዊ','ውብ','ፈጣን']),A('A person who shows visitors around is…','ጎብኚዎችን የሚያስጎበኝ ሰው…',['አስጎብኚ','ሾፌር','ነጋዴ']),A('Which is a describing word?','ገላጭ ቃል የትኛው ነው?',['ውብ','ሄደ','ጻፈ'])],
 notes(('Visiting historic and natural places teaches us our history and makes us proud.','ታሪካዊና ተፈጥሯዊ ቦታዎችን መጎብኘት ታሪካችንን ያስተምረናል፤ ያኮራናል።'),
  [('Famous places: Tis Abay, Lalibela, Gondar, Lake Tana, Simien.','ታዋቂ ቦታዎች፦ ጢስ ዓባይ፣ ላሊበላ፣ ጎንደር፣ ጣና፣ ሰሜን ተራሮች።'),('Visitors should protect what they see.','ጎብኚዎች ያዩትን መጠበቅ አለባቸው።'),('Write a visit report: where, when, what you saw.','የጉብኝት ዘገባ ጻፉ፦ የት፣ መቼ፣ ምን አያችሁ።'),('Adjectives: ውብ, ታሪካዊ, ጥንታዊ, ዘመናዊ.','ቅጽሎች፦ ውብ፣ ታሪካዊ፣ ጥንታዊ፣ ዘመናዊ።')],
  [('ጉብኝት','visit','ቦታን ሄዶ ማየት'),('አስጎብኚ','tour guide','ጎብኚዎችን የሚመራ'),('ቅርስ','heritage','ከቀደምቶች የተወረሰ')],('Take only photos, leave only footprints.','ፎቶ ብቻ አንሱ፣ የእግር ዱካ ብቻ ተዉ።'),
  [(('Name 2 places in the Amhara Region to visit','በአማራ ክልል የሚጎበኙ 2 ቦታዎች'),'ላሊበላ፣ ጎንደር'),(('Opposite of "ውብ"','የ"ውብ" ተቃራኒ'),'አስቀያሚ')],
  (('Junior tour guide','ጀማሪ አስጎብኚ'),('Tour guides earn money explaining heritage. Prepare a 2-minute Amharic tour talk about a place near you and practise guiding your family.','አስጎብኚዎች ቅርስን በማስረዳት ገቢ ያገኛሉ። ስለ አቅራቢያችሁ ቦታ የ2 ደቂቃ የአማርኛ የማስጎብኘት ንግግር አዘጋጁና ቤተሰባችሁን በማስጎብኘት ተለማመዱ።'),
   [('Collect 5 facts about the place.','ስለ ቦታው 5 እውነታዎችን ሰብስቡ።'),('Write an opening greeting.','የመክፈቻ ሰላምታ ጻፉ።'),('Use 3 beautiful describing words.','3 ውብ ገላጭ ቃላት ተጠቀሙ።'),('Guide your family and ask for feedback.','ቤተሰባችሁን አስጎብኙና አስተያየት ጠይቁ።')])),
 sm(('Visiting places teaches history and pride','ቦታዎችን መጎብኘት ታሪክና ኩራት ያስተምራል'),[('Famous places','ታዋቂ ቦታዎች'),('Responsible visitors','ኃላፊነት ያለው ጎብኚ'),('Visit reports','የጉብኝት ዘገባ'),('Describing words','ገላጭ ቃላት')]),'visits')

U(6,('Sport','ስፖርት'),[
 read('ስፖርትና ጥቅሙ',['ስፖርት ሰውነትን ያጠነክራል፤ አእምሮን ያድሳል። በየቀኑ ትንሽ የሚንቀሳቀስ ሰው በቀላሉ አይታመምም።','ኢትዮጵያ በረጅም ርቀት ሩጫ በዓለም ትታወቃለች። አበበ ቢቂላ በባዶ እግሩ ሮጦ በኦሎምፒክ አሸንፏል።','ስፖርት ጓደኝነትን፣ ሕግ ማክበርንና ትዕግሥትን ያስተምራል።'],[
  A('What does sport do for the body?','ስፖርት ለሰውነት ምን ያደርጋል?',['ያጠነክራል','ያደክማል','ያሳምማል']),A('Ethiopia is famous for…','ኢትዮጵያ የምትታወቀው በ…',['ረጅም ርቀት ሩጫ','በበረዶ ሸርተቴ','በዋና']),
  A('How did Abebe Bikila run?','አበበ ቢቂላ እንዴት ሮጠ?',['በባዶ እግሩ','በብስክሌት','በመኪና']),A('Sport also teaches…','ስፖርት በተጨማሪ ያስተምራል…',['ጓደኝነትንና ሕግ ማክበርን','ጠብን','ስንፍናን'])]),
 quiz(('Past, present, future','ኃላፊ፣ የአሁንና የወደፊት ጊዜ'),('ሮጠ (past), ይሮጣል (present/habit), ይሮጣል/ሊሮጥ ነው (future). Time words help: ትናንት, ዛሬ, ነገ.','ሮጠ (ኃላፊ)፣ ይሮጣል (የአሁን/ልማድ)፣ ሊሮጥ ነው (የወደፊት)። የጊዜ ቃላት ይረዳሉ፦ ትናንት፣ ዛሬ፣ ነገ።'),[
  W('ትናንት ኳስ ___። (we played)',['ተጫወትን','እንጫወታለን','ልንጫወት ነው']),W('ነገ ውድድር ___። (we will run)',['እንሮጣለን','ሮጥን','ሮጠ']),W('በየቀኑ ጠዋት ___። (I exercise)',['እንቀሳቀሳለሁ','ተንቀሳቀስኩ','ተንቀሳቀሰ']),A('Which word shows past time?','ኃላፊ ጊዜን የሚያሳየው ቃል?',['ትናንት','ነገ','ወደፊት'])]),
 sortm(('Good sport habits?','ጥሩ የስፖርት ልማድ?'),('Good sportspeople play fair and stay healthy.','ጥሩ ስፖርተኞች በፍትሃዊነት ይጫወታሉ፤ ጤናቸውን ይጠብቃሉ።'),[('👍 ጥሩ','👍 ጥሩ'),('👎 መጥፎ','👎 መጥፎ')],[
  (('ከጨዋታ በፊት ሰውነትን ማሟሟቅ','ከጨዋታ በፊት ሰውነትን ማሟሟቅ'),0),(('ተቃራኒ ቡድንን ማክበር','ተቃራኒ ቡድንን ማክበር'),0),(('ውኃ መጠጣት','ውኃ መጠጣት'),0),(('ዳኛን መሳደብ','ዳኛን መሳደብ'),1),(('ለማሸነፍ ማጭበርበር','ለማሸነፍ ማጭበርበር'),1),(('ደጋፊ ሆኖ ድንጋይ መወርወር','ደጋፊ ሆኖ ድንጋይ መወርወር'),1)]),
 build([['ስፖርት','ሰውነትን','ያጠነክራል።'],['ትናንት','ኳስ','ተጫወትን።'],['ደጋፊዎች','ቡድናቸውን','በሰላም','አበረታቱ።']])],
 [A('Which word shows future?','የወደፊት ጊዜን የሚያሳየው?',['ነገ','ትናንት','ባለፈው ዓመት']),A('Abebe Bikila was a…','አበበ ቢቂላ…',['ሯጭ','ዋናተኛ','ሾፌር']),A('A good fan…','ጥሩ ደጋፊ…',['በሰላም ያበረታታል','ዳኛን ይሳደባል']),W('ዛሬ ጠዋት ___። (she ran)',['ሮጠች','ትሮጣለች','ልትሮጥ ነው'])],
 notes(('Sport builds healthy bodies, fresh minds and good character.','ስፖርት ጤናማ ሰውነት፣ የታደሰ አእምሮና መልካም ሥነምግባር ይገነባል።'),
  [('Exercise every day keeps us healthy.','በየቀኑ መንቀሳቀስ ጤናማ ያደርገናል።'),('Ethiopian athletes are famous in long-distance running.','የኢትዮጵያ አትሌቶች በረጅም ርቀት ሩጫ ይታወቃሉ።'),('Fans and players should be peaceful and fair.','ደጋፊዎችና ተጫዋቾች ሰላማዊና ፍትሃዊ መሆን አለባቸው።'),('Tenses: ሮጠ (past), ይሮጣል (present), ሊሮጥ ነው (future).','ጊዜ፦ ሮጠ (ኃላፊ)፣ ይሮጣል (የአሁን)፣ ሊሮጥ ነው (የወደፊት)።')],
  [('ደጋፊ','fan','ቡድንን የሚያበረታታ'),('ውድድር','competition','ለማሸነፍ መፎካከር'),('ማሟሟቅ','warm-up','ሰውነትን ማዘጋጀት')],('Win with respect, lose with respect.','በክብር አሸንፉ፣ በክብር ተሸነፉ።'),
  [(('Change to past: "ይጫወታል"','ወደ ኃላፊ ለውጡ፦ "ይጫወታል"'),'ተጫወተ'),(('Name 2 benefits of sport','2 የስፖርት ጥቅሞች'),'ሰውነትን ያጠነክራል፣ ጓደኝነት ያስተምራል')],
  (('School sports day organiser','የትምህርት ቤት የስፖርት ቀን አዘጋጅ'),('Event organisers plan, budget and advertise. Plan a class sports day with races, rules and a small prize budget.','የዝግጅት አዘጋጆች ያቅዳሉ፣ በጀት ያወጣሉ፣ ያስተዋውቃሉ። ሩጫ፣ ሕግና ትንሽ የሽልማት በጀት ያለው የክፍል የስፖርት ቀን አቅዱ።'),
   [('Choose 3 events and write fair rules.','3 ውድድሮችን ምረጡና ፍትሃዊ ሕግ ጻፉ።'),('Make a poster in Amharic.','በአማርኛ ፖስተር ሥሩ።'),('Plan small prizes (pencils, certificates).','ትናንሽ ሽልማቶችን አቅዱ (እርሳስ፣ የምስክር ወረቀት)።'),('Write a short report afterwards.','ከዚያ አጭር ዘገባ ጻፉ።')])),
 sm(('Sport builds healthy bodies and good character','ስፖርት ጤናማ ሰውነትና መልካም ጠባይ ይገነባል'),[('Exercise daily','በየቀኑ መንቀሳቀስ'),('Ethiopian athletes','የኢትዮጵያ አትሌቶች'),('Fair play','ፍትሃዊ ጨዋታ'),('Tenses','ጊዜዎች')]),'sport')

U(7,('Water','ውኃ'),[
 read('ዉኃና ጥቅሙ',['ዉኃ ሕይወት ነው። ሰዎች፣ እንስሳትና ዕፅዋት ያለ ዉኃ መኖር አይችሉም።','ንጹህ ዉኃ ጤናን ይጠብቃል፤ የተበከለ ዉኃ ግን ተቅማጥና ሌሎች በሽታዎችን ያመጣል። ስለዚህ ዉኃን አፍልቶ ወይም አጣርቶ መጠጣት ይገባል።','በብዙ መንደሮች ልጆች ሩቅ ሄደው ዉኃ ይቀዳሉ። ዉኃን መቆጠብ ለሁሉም ይጠቅማል።'],[
  A('"ዉኃ ሕይወት ነው" means…','"ዉኃ ሕይወት ነው" ማለት…',['ያለ ዉኃ መኖር አይቻልም','ዉኃ እንስሳ ነው','ዉኃ ብቻ ይበቃል']),A('Polluted water can cause…','የተበከለ ዉኃ የሚያመጣው…',['ተቅማጥና በሽታ','ጥንካሬ','ዝናብ']),
  A('How can we make water safe?','ዉኃን እንዴት ደህና እናደርጋለን?',['በማፍላት ወይም በማጣራት','ጨው በመጨመር','ክፍት በመተው']),A('Saving water helps…','ዉኃን መቆጠብ የሚጠቅመው…',['ሁሉንም','ማንንም','አንድን ሰው ብቻ'])]),
 quiz(('Plural nouns','ብዙ ቁጥር ስሞች'),('Add -ኦች or -ዎች: አባት → አባቶች, ተማሪ → ተማሪዎች. Some plurals are special: መምህር → መምህራን.','-ኦች ወይም -ዎች ጨምሩ፦ አባት → አባቶች፣ ተማሪ → ተማሪዎች። አንዳንዶቹ ልዩ ናቸው፦ መምህር → መምህራን።'),[
  A('ወንዝ → ?','ወንዝ → ?',['ወንዞች','ወንዝዎች','ወንዛች']),A('ምንጭ → ?','ምንጭ → ?',['ምንጮች','ምንጭዎች','ምንጫች']),A('ጉድጓድ → ?','ጉድጓድ → ?',['ጉድጓዶች','ጉድጓድዎች','ጉድጓዳች']),A('ገበሬ → ?','ገበሬ → ?',['ገበሬዎች','ገበሮች','ገበሬኦች'])]),
 vmatch(VOC,VTIP,[[('ማፍላት','እስኪንተከተክ ማሞቅ'),('ማጣራት','ቆሻሻን መለየት'),('መቆጠብ','አለማባከን')],[('ምንጭ','ዉኃ የሚፈልቅበት ቦታ'),('ተቅማጥ','የሆድ በሽታ'),('ጭላጭ','በጣም ትንሽ')]]),
 build([['ዉኃ','ሕይወት','ነው።'],['ዉኃን','አፍልተን','እንጠጣ።'],['የዉኃ','መያዣዎችን','ክደኑ።']])],
 [A('Which water is safe to drink?','ለመጠጥ ደህና የሆነው ዉኃ?',['የፈላ ዉኃ','የኩሬ ዉኃ']),A('ሐይቅ → ?','ሐይቅ → ?',['ሐይቆች','ሐይቅዎች']),A('"መቆጠብ" means…','"መቆጠብ" ማለት…',['አለማባከን','ማፍሰስ','መሸጥ']),A('Polluted water causes…','የተበከለ ዉኃ የሚያመጣው…',['በሽታ','ጤና'])],
 notes(('Water is life: keep it clean and use it wisely.','ዉኃ ሕይወት ነው፤ ንጹህ አድርጉት፣ በጥበብ ተጠቀሙበት።'),
  [('All living things need water.','ሕይወት ያላቸው ሁሉ ዉኃ ያስፈልጋቸዋል።'),('Polluted water causes diarrhoea and disease.','የተበከለ ዉኃ ተቅማጥና በሽታ ያመጣል።'),('Make water safe: boil, filter, cover.','ዉኃን ደህና አድርጉ፦ አፍሉ፣ አጣሩ፣ ክደኑ።'),('Plurals: ወንዝ → ወንዞች, ገበሬ → ገበሬዎች.','ብዙ ቁጥር፦ ወንዝ → ወንዞች፣ ገበሬ → ገበሬዎች።')],
  [('ምንጭ','spring','ዉኃ የሚፈልቅበት'),('መቆጠብ','to save','አለማባከን'),('ማጣራት','to filter','ቆሻሻን መለየት')],('Every drop counts!','እያንዳንዷ ጠብታ ዋጋ አላት!'),
  [(('Plural of "ምንጭ"','የ"ምንጭ" ብዙ ቁጥር'),'ምንጮች'),(('How do we make water safe?','ዉኃን እንዴት ደህና እናደርጋለን?'),'በማፍላት፣ በማጣራት')],
  (('Water-saving campaign','የዉኃ ቁጠባ ዘመቻ'),('Count how many litres your family uses in a day, find 3 ways to save, and make a family pledge card.','ቤተሰባችሁ በቀን ስንት ሊትር እንደሚጠቀም ቁጠሩ፣ የመቆጠቢያ 3 መንገዶችን ፈልጉና የቤተሰብ ቃል ኪዳን ካርድ ሥሩ።'),
   [('Count jerrycans used in one day.','በአንድ ቀን የሚጠቀሙትን ጀሪካን ቁጠሩ።'),('Find 3 ways to save water.','ዉኃን የመቆጠቢያ 3 መንገዶችን ፈልጉ።'),('Write a pledge in Amharic.','ቃል ኪዳኑን በአማርኛ ጻፉ።'),('Count again after a week.','ከአንድ ሳምንት በኋላ እንደገና ቁጠሩ።')])),
 sm(('Water is life: keep it clean, use it wisely','ዉኃ ሕይወት ነው፤ ንጹህ አድርጉት፣ በጥበብ ተጠቀሙበት'),[('Water for all life','ዉኃ ለሕይወት'),('Polluted water','የተበከለ ዉኃ'),('Safe water','ደህና ዉኃ'),('Plurals','ብዙ ቁጥር')]),'water')

U(8,('Negotiation','ድርድር'),[
 read('እርቅ ማውረድ',['ሁለት ጎረቤቶች በማሳ ድንበር ተጣሉ። ጠቡ እየከረረ ሄደ።','የአካባቢው ሽማግሌዎች ሁለቱንም ጠርተው አዳመጡ። እያንዳንዱ ሐሳቡን ሲገልጽ ሌላው በትዕግሥት አደመጠ።','ሽማግሌዎቹ ፍትሃዊ መፍትሄ ሰጡ፤ ጎረቤቶቹም ይቅር ተባብለው ታረቁ። "ሰማይ ቢቀደድ ሽማግሌ ይሰፋዋል" የተባለው ለዚህ ነው።'],[
  A('Why did the neighbours quarrel?','ጎረቤቶቹ ለምን ተጣሉ?',['በማሳ ድንበር','በገንዘብ','በእግር ኳስ']),A('Who helped them?','ማን ረዳቸው?',['ሽማግሌዎች','ፖሊስ ብቻ','ልጆች']),
  A('What did each one do while the other spoke?','አንዱ ሲናገር ሌላው ምን አደረገ?',['በትዕግሥት አደመጠ','ጮኸ','ሄደ']),A('"ሰማይ ቢቀደድ ሽማግሌ ይሰፋዋል" means…','"ሰማይ ቢቀደድ ሽማግሌ ይሰፋዋል" ማለት…',['ሽማግሌዎች ከባድ ጠብን ያስታርቃሉ','ሰማይ ይቀደዳል','ሽማግሌዎች ልብስ ይሰፋሉ'])]),
 quiz(('Same meaning','ተመሳሳይ ፍቺ'),('Choose the word with the same meaning as the underlined one.','ከተሰመረበት ቃል ጋር ተመሳሳይ ፍቺ ያለውን ምረጡ።'),[
  A('"ይቅርታ" ≈','"ይቅርታ" ≈',['ምሕረት','ጠብ','ቁጣ']),A('"ማስታረቅ" ≈','"ማስታረቅ" ≈',['ማግባባት','ማጣላት','መሸሽ']),A('"ሽማግሌ" ≈','"ሽማግሌ" ≈',['አዛውንት','ሕጻን','ወጣት']),A('"መፍትሄ" ≈','"መፍትሄ" ≈',['መላ','ችግር','ጥያቄ'])]),
 order(('Steps to solve a quarrel','ጠብን የመፍቻ ደረጃዎች'),('Good negotiation follows calm steps.','ጥሩ ድርድር የተረጋጉ ደረጃዎችን ይከተላል።'),('Tap the steps in order.','ደረጃዎቹን በቅደም ተከተል ንኩ።'),[(('Order:','አስቀምጡ፦'),['ተረጋጉ','አንዱ ሌላውን ያዳምጥ','ችግሩን ግልጽ አድርጉ','መፍትሄ በጋራ ፈልጉ','ይቅር ተባባሉ'])]),
 build([['ሽማግሌዎቹ','ጎረቤቶቹን','አስታረቁ።'],['በትዕግሥት','እናዳምጥ።'],['ይቅርታ','ሰላም','ያመጣል።']])],
 [A('Same meaning as "አዛውንት"','ከ"አዛውንት" ጋር ተመሳሳይ',['ሽማግሌ','ልጅ','ተማሪ']),A('The first step in solving a quarrel is…','ጠብን ለመፍታት የመጀመሪያው ደረጃ…',['መረጋጋት','መጮህ','መሸሽ']),A('Elders solve disputes by…','ሽማግሌዎች ጠብን የሚፈቱት…',['በማዳመጥና በፍትሃዊነት','በቁጣ','በኃይል']),A('"መፍትሄ" ≈','"መፍትሄ" ≈',['መላ','ጠብ'])],
 notes(('Negotiation solves problems peacefully through listening and fairness.','ድርድር በማዳመጥና በፍትሃዊነት ችግሮችን በሰላም ይፈታል።'),
  [('Elders (ሽማግሌዎች) have a long tradition of making peace.','ሽማግሌዎች ሰላም የማውረድ ረጅም ባህል አላቸው።'),('Steps: calm down, listen, explain, find a solution, forgive.','ደረጃዎች፦ መረጋጋት፣ ማዳመጥ፣ ማስረዳት፣ መፍትሄ መፈለግ፣ ይቅር መባባል።'),('Proverb: ሰማይ ቢቀደድ ሽማግሌ ይሰፋዋል.','ምሳሌያዊ አነጋገር፦ ሰማይ ቢቀደድ ሽማግሌ ይሰፋዋል።'),('Synonyms: ይቅርታ ≈ ምሕረት, መፍትሄ ≈ መላ.','ተመሳሳይ፦ ይቅርታ ≈ ምሕረት፣ መፍትሄ ≈ መላ።')],
  [('ድርድር','negotiation','በመነጋገር መስማማት'),('እርቅ','reconciliation','ከጠብ በኋላ መስማማት'),('ይቅርታ','forgiveness','ጥፋትን መተው')],('Listen first, speak second.','መጀመሪያ አዳምጡ፣ ቀጥሎ ተናገሩ።'),
  [(('Same meaning as "መላ"','ከ"መላ" ጋር ተመሳሳይ'),'መፍትሄ'),(('What do elders do in a dispute?','ሽማግሌዎች በጠብ ጊዜ ምን ያደርጋሉ?'),'ያዳምጣሉ፣ ያስታርቃሉ')],
  (('Class peace committee','የክፍል የሰላም ኮሚቴ'),('Mediators are paid professionals in many countries. Form a class peace committee that helps classmates solve small quarrels using the 5 steps.','በብዙ አገሮች አስታራቂዎች የሚከፈላቸው ባለሙያዎች ናቸው። 5ቱን ደረጃዎች ተጠቅሞ የክፍል ጓደኞችን ትናንሽ ጠቦች የሚፈታ የክፍል የሰላም ኮሚቴ አቋቁሙ።'),
   [('Choose 3 calm, fair students.','3 የተረጋጉ ፍትሃዊ ተማሪዎችን ምረጡ።'),('Write the 5 steps on a card.','5ቱን ደረጃዎች በካርድ ጻፉ።'),('Practise with a role play.','በትወና ተለማመዱ።'),('Record how many quarrels you solved.','ስንት ጠብ እንደፈታችሁ መዝግቡ።')])),
 sm(('Negotiate peacefully: listen, be fair, forgive','በሰላም ተደራደሩ፦ አዳምጡ፣ ፍትሃዊ ሁኑ፣ ይቅር በሉ'),[('Elders make peace','ሽማግሌዎች ያስታርቃሉ'),('Steps','ደረጃዎች'),('Proverb','ምሳሌያዊ አነጋገር'),('Synonyms','ተመሳሳይ ቃላት')]),'negotiation')

U(9,('Mass media','ብዙኃን መገናኛ'),[
 read('የመጀመሪያው ጋዜጣ',['ጋዜጣ፣ ሬዲዮ፣ ቴሌቪዥንና ኢንተርኔት ብዙኃን መገናኛ ይባላሉ። ዜናን ለብዙ ሰዎች በአንድ ጊዜ ያደርሳሉ።','በኢትዮጵያ ጋዜጣ መታተም የጀመረው ከአንድ መቶ ዓመት በፊት ነው። "አዕምሮ" የተባለው ጋዜጣ ከቀደምቶቹ አንዱ ነው።','ዛሬ ብዙ ሰዎች ዜናን በስልካቸው ያነባሉ። ነገር ግን ሁሉም ዜና እውነት ስላልሆነ ምንጩን ማረጋገጥ ያስፈልጋል።'],[
  A('Which is NOT mass media?','ብዙኃን መገናኛ ያልሆነው?',['ደብዳቤ ለአንድ ሰው','ሬዲዮ','ቴሌቪዥን']),A('Mass media brings news to…','ብዙኃን መገናኛ ዜናን የሚያደርሰው ለ…',['ብዙ ሰዎች በአንድ ጊዜ','አንድ ሰው ብቻ','ማንም']),
  A('Name an early Ethiopian newspaper.','ከቀደምት የኢትዮጵያ ጋዜጦች አንዱ?',['አዕምሮ','ቢቢሲ','ፌስቡክ']),A('Before believing news we should…','ዜናን ከማመናችን በፊት…',['ምንጩን ማረጋገጥ','ወዲያው ማጋራት','መሳቅ'])]),
 quiz(('Words with two meanings','ሁለት ፍቺ ያላቸው ቃላት'),('Some words change meaning in different sentences. Read the whole sentence.','አንዳንድ ቃላት በተለያዩ ዓረፍተ ነገሮች ትርጉማቸው ይለወጣል። ሙሉውን ዓረፍተ ነገር አንብቡ።'),[
  A('"ዜናውን አወጣ" — here "አወጣ" means…','"ዜናውን አወጣ" — "አወጣ" እዚህ ማለት…',['አሳተመ (አሳወቀ)','ከቤት ወጣ','ገንዘብ አወጣ']),A('"ጋዜጣ አዟሪ" is a person who…','"ጋዜጣ አዟሪ" ማለት…',['ጋዜጣ እየዞረ የሚሸጥ','ጋዜጣ የሚጽፍ','ጋዜጣ የሚያነብ']),A('"ጋዜጠኛ" is a person who…','"ጋዜጠኛ" ማለት…',['ዜና የሚሰበስብና የሚዘግብ','ጋዜጣ የሚገዛ','ሬዲዮ የሚጠግን'])]),
 sortm(('True news habit?','ጥሩ የዜና ልማድ?'),('Smart readers check facts before sharing.','ብልህ አንባቢዎች ከማጋራታቸው በፊት እውነታውን ያረጋግጣሉ።'),[('✅ ጥሩ','✅ ጥሩ'),('❌ መጥፎ','❌ መጥፎ')],[
  (('ምንጩን ማረጋገጥ','ምንጩን ማረጋገጥ'),0),(('ከብዙ ጣቢያዎች ማዳመጥ','ከብዙ ጣቢያዎች ማዳመጥ'),0),(('ለትልቅ ሰው መጠየቅ','ለትልቅ ሰው መጠየቅ'),0),(('ያልተረጋገጠ ወሬ ማጋራት','ያልተረጋገጠ ወሬ ማጋራት'),1),(('ሐሰተኛ ዜና መጻፍ','ሐሰተኛ ዜና መጻፍ'),1),(('ርዕሱን ብቻ አንብቦ ማመን','ርዕሱን ብቻ አንብቦ ማመን'),1)]),
 build([['ጋዜጠኛዋ','ዜናውን','ዘገበች።'],['ሬዲዮ','ዜናን','ለብዙ','ሰዎች','ያደርሳል።'],['ዜናውን','ከማጋራታችሁ','በፊት','አረጋግጡ።']])],
 [A('A person who reports news is a…','ዜና የሚዘግብ ሰው…',['ጋዜጠኛ','ገበሬ','ዘበኛ']),A('Which is mass media?','ብዙኃን መገናኛ የትኛው ነው?',['ቴሌቪዥን','ማንኪያ','ወንበር']),A('Before sharing news…','ዜና ከማጋራታችሁ በፊት…',['አረጋግጡ','ፍጠኑ']),A('"ማስታወቂያ" informs people about…','"ማስታወቂያ" ሰዎችን የሚያሳውቀው…',['ዕቃ፣ አገልግሎት ወይም ዝግጅት','ብቻ ስፖርት','ምንም'])],
 notes(('Mass media informs many people at once; check facts before believing or sharing.','ብዙኃን መገናኛ ብዙ ሰዎችን በአንድ ጊዜ ያሳውቃል፤ ከማመንና ከማጋራት በፊት አረጋግጡ።'),
  [('Media: newspaper, radio, TV, internet.','መገናኛዎች፦ ጋዜጣ፣ ሬዲዮ፣ ቴሌቪዥን፣ ኢንተርኔት።'),('Ethiopian newspapers began over a hundred years ago.','የኢትዮጵያ ጋዜጦች ከመቶ ዓመት በፊት ጀምረዋል።'),('Journalists collect and report news.','ጋዜጠኞች ዜና ይሰበስባሉ፣ ይዘግባሉ።'),('Words can have different meanings in context.','ቃላት በአውዱ የተለያየ ፍቺ ሊኖራቸው ይችላል።')],
  [('ጋዜጠኛ','journalist','ዜና ዘጋቢ'),('ማስታወቂያ','advertisement','ማሳወቂያ'),('ምንጭ','source','መረጃው የመጣበት')],('Think before you share!','ከማጋራታችሁ በፊት አስቡ!'),
  [(('Name 3 mass media','3 ብዙኃን መገናኛዎች'),'ጋዜጣ፣ ሬዲዮ፣ ቴሌቪዥን'),(('What does a journalist do?','ጋዜጠኛ ምን ይሠራል?'),'ዜና ይሰበስባል፣ ይዘግባል')],
  (('Class wall newspaper','የክፍል ግድግዳ ጋዜጣ'),('Start a monthly wall newspaper with school news, a sports corner, an advertisement and a puzzle. Check every fact before you print.','የትምህርት ቤት ዜና፣ የስፖርት አምድ፣ ማስታወቂያና እንቆቅልሽ ያለው ወርሃዊ የግድግዳ ጋዜጣ ጀምሩ። ከመለጠፋችሁ በፊት እያንዳንዱን እውነታ አረጋግጡ።'),
   [('Choose an editor and reporters.','አርታኢና ዘጋቢዎችን ምረጡ።'),('Interview teachers and students.','መምህራንንና ተማሪዎችን ጠይቁ።'),('Write short news in Amharic.','በአማርኛ አጭር ዜና ጻፉ።'),('Sell advertising space to the school shop for 5 birr.','ለትምህርት ቤቱ ሱቅ የማስታወቂያ ቦታ በ5 ብር ሽጡ።')])),
 sm(('Media informs many; check before you share','መገናኛ ብዙዎችን ያሳውቃል፤ ከማጋራት በፊት አረጋግጡ'),[('Kinds of media','የመገናኛ ዓይነቶች'),('History','ታሪክ'),('Journalists','ጋዜጠኞች'),('Word meanings','የቃል ፍቺዎች')]),'mass media')

U(10,('Trade','ንግድ'),[
 read('ዶሮ ነጋዴው',['ከበደ ከገበያ ዶሮ በ300 ብር ገዝቶ በ350 ብር ይሸጣል። ትርፉን ይቆጥባል።','አንድ ቀን አንድ ሰው "የታመመ ዶሮ በርካሽ ገዝተህ በውድ ሽጥ" አለው። ከበደ ግን "ደንበኞቼን ማታለል አልፈልግም" አለ።','በታማኝነቱ ደንበኞቹ በዙ፤ ትንሹ ንግዱም አደገ። "አተርፍ ባይ አጉዳይ" የሚባለው ለአታላዮች ነው።'],[
  A('How much profit does Kebede make on a hen?','ከበደ በአንድ ዶሮ ስንት ብር ያተርፋል?',['50 ብር','300 ብር','350 ብር']),A('Why did Kebede refuse the advice?','ከበደ ምክሩን ለምን አልተቀበለም?',['ደንበኞቹን ማታለል ስላልፈለገ','ዶሮ ስላልወደደ','ገንዘብ ስላልፈለገ']),
  A('What happened because of his honesty?','በታማኝነቱ ምን ሆነ?',['ደንበኞቹ በዙ','ንግዱ ከሰረ','ገበያ ዘጋ']),A('"አተርፍ ባይ አጉዳይ" describes…','"አተርፍ ባይ አጉዳይ" የሚገልጸው…',['ለማትረፍ ብሎ የሚከስር አታላይ','ታማኝ ነጋዴ','ገበሬ'])]),
 quiz(('Idioms','ፈሊጣዊ አነጋገሮች'),('Idioms have special meanings: "ባዶ እጅ" = with nothing, "አየር ባየር" = without proper agreement or proof.','ፈሊጣዊ አነጋገሮች ልዩ ፍቺ አላቸው፦ "ባዶ እጅ" = ምንም ሳይዙ፣ "አየር ባየር" = ያለ ማረጋገጫ።'),[
  A('"ባዶ እጅ" means…','"ባዶ እጅ" ማለት…',['ምንም ሳይዝ','ንጹህ እጅ','ብዙ ገንዘብ']),A('"የጧት ጤዛ" means something that…','"የጧት ጤዛ" ማለት…',['ቶሎ የሚጠፋ','ለዘላለም የሚኖር','ጣፋጭ']),A('"ሲራራ ነጋዴ" was a trader who…','"ሲራራ ነጋዴ" ማለት…',['በረጅም ርቀት በቅፍለት የሚነግድ','በአንድ ሱቅ የሚሸጥ','ዓሣ የሚያጠምድ'])]),
 vmatch(VOC,VTIP,[[('ትርፍ','ከወጪ በላይ የሚገኝ'),('ኪሳራ','ገንዘብ ማጣት'),('ደንበኛ','አዘውትሮ የሚገዛ')],[('ዋጋ','የዕቃ ገንዘብ'),('ቁጠባ','ገንዘብን ማስቀመጥ'),('ግብር','ለመንግሥት የሚከፈል')]]),
 build([['ከበደ','ዶሮ','ገዝቶ','ይሸጣል።'],['ታማኝ','ነጋዴ','ደንበኛ','ያበዛል።'],['ነጋዴዎች','ግብር','ይከፍላሉ።']])],
 [A('Buy at 200, sell at 260. Profit?','በ200 ገዝቶ በ260 ሸጠ። ትርፍ?',['60 ብር','260 ብር','460 ብር']),A('"ደንበኛ" means…','"ደንበኛ" ማለት…',['አዘውትሮ የሚገዛ','ሻጭ','ዘበኛ']),A('An honest trader…','ታማኝ ነጋዴ…',['ደንበኛ ያበዛል','ደንበኛ ያጣል']),A('"ባዶ እጅ" means…','"ባዶ እጅ" ማለት…',['ምንም ሳይዝ','ብዙ ይዞ'])],
 notes(('Honest trade brings profit and trust; dishonest trade loses both.','ታማኝ ንግድ ትርፍና አመኔታ ያመጣል፤ አታላይ ንግድ ሁለቱንም ያሳጣል።'),
  [('Profit = selling price − buying price.','ትርፍ = የሽያጭ ዋጋ − የግዢ ዋጋ።'),('Honesty grows customers.','ታማኝነት ደንበኛን ያበዛል።'),('Traders follow the law and pay tax.','ነጋዴዎች ሕግን ያከብራሉ፤ ግብር ይከፍላሉ።'),('Idioms: ባዶ እጅ, የጧት ጤዛ, አየር ባየር.','ፈሊጣዊ አነጋገሮች፦ ባዶ እጅ፣ የጧት ጤዛ፣ አየር ባየር።')],
  [('ትርፍ','profit','ከወጪ በላይ'),('ደንበኛ','customer','አዘውትሮ ገዢ'),('ግብር','tax','ለመንግሥት የሚከፈል')],('Honest trade is lasting trade.','ታማኝ ንግድ ዘላቂ ንግድ ነው።'),
  [(('Buy 150, sell 200. Profit?','በ150 ገዝቶ በ200 ሸጠ። ትርፍ?'),'50 ብር'),(('Meaning of "አተርፍ ባይ አጉዳይ"','የ"አተርፍ ባይ አጉዳይ" ፍቺ'),'ለማትረፍ ብሎ የሚከስር')],
  (('Mini honest shop','ትንሽ ታማኝ ሱቅ'),('Plan a tiny business: buy pencils in bulk, sell them at a fair price, and keep a profit book in Amharic.','ትንሽ ሥራ አቅዱ፦ እርሳሶችን በጅምላ ገዝታችሁ በፍትሃዊ ዋጋ ሽጡ፤ በአማርኛ የትርፍ መዝገብ ያዙ።'),
   [('Find the bulk price of 12 pencils.','የ12 እርሳሶችን የጅምላ ዋጋ ፈልጉ።'),('Set a fair selling price.','ፍትሃዊ የሽያጭ ዋጋ አውጡ።'),('Record every sale and profit.','እያንዳንዱን ሽያጭና ትርፍ መዝግቡ።'),('Save part of the profit.','ከትርፉ ከፊሉን ቆጥቡ።')])),
 sm(('Honest trade brings profit and trust','ታማኝ ንግድ ትርፍና አመኔታ ያመጣል'),[('Profit','ትርፍ'),('Honesty','ታማኝነት'),('Law and tax','ሕግና ግብር'),('Idioms','ፈሊጣዊ አነጋገር')]),'trade')
dump('am')
