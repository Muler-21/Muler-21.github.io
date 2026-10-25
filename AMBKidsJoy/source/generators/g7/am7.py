import sys;sys.path.insert(0,'.')
from common7 import *
SN=E('Amharic','አማርኛ')
def A(q_en,q_am,opts,a=0): return {'q':E(q_en,q_am),'o':[o if isinstance(o,str) else E(*o) for o in opts],'a':a}
def W(sent,opts,a=0): return {'q':sent,'o':opts,'a':a}
def read(ptitle,paras,items): return {'title':E('Read and understand','አንብቦ መረዳት'),'type':'quiz','tip':E('Read the passage fluently, then answer. Think about the main idea and the writer\'s message.','ምንባቡን አቀላጥፋችሁ አንብቡ፤ ከዚያ መልሱ። ስለ ዋናው ሐሳብና ስለ ጸሐፊው መልእክት አስቡ።'),'passage':{'title':ptitle,'paras':paras},'items':items}
def build(rounds): return order(('Build the sentence','ዓረፍተ ነገር መሥርቱ'),('Put the words in the right order. Amharic sentences end with the verb and "።".','ቃላቱን በትክክለኛ ቅደም ተከተል አስቀምጡ። የአማርኛ ዓረፍተ ነገር በግሥና በ"።" ይጨርሳል።'),('Tap the words in order.','ቃላቱን በቅደም ተከተል ንኩ።'),[(('Build:','መሥርቱ፦'),w) for w in rounds])
def vmatch(pairs): return {'title':E('Word meanings','የቃላት ፍቺ'),'type':'match','tip':E('Match each word with its meaning.','እያንዳንዱን ቃል ከፍቺው ጋር አዛምዱ።'),'rounds':[[[a,b] for a,b in pairs]]}
def gram(title,tip,items): return quiz(title,tip,items)
def U(n,title,extra,exam,nt,summ,foot):
    unit(f'g7-amharic-{n}','amharic',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 7 Amharic student book (ANRS), Chapter {n}: {foot}.',f'በ7ኛ ክፍል የአማርኛ መጽሐፍ ምዕራፍ {n} ({title[1]}) ላይ የተመሰረተ።'),'(d=>[])',{},extra,exam,nt,summ)

U(1,('Appreciating nature','ተፈጥሮን ማድነቅ'),[
 read('የራስ ዳሽን ማለዳ',['በሰሜን ተራሮች ብሔራዊ ፓርክ ማለዳ ጭጋግ ሸለቆውን ይሸፍናል። ፀሐይ ስትወጣ ጭጋጉ ቀስ ብሎ ይገፈፋል፤ ከፍተኛዎቹ ጫፎችም አንድ በአንድ ይገለጣሉ።','በገደሉ ጠርዝ ላይ የጌላዳ ዝንጀሮዎች ሣር እየነጩ ይመገባሉ። ዋልያዎችም በቋጥኙ ላይ በጥንቃቄ ይራመዳሉ። እነዚህ እንስሳት በዓለም ላይ በኢትዮጵያ ብቻ የሚገኙ ብርቅዬዎች ናቸው።','ጎብኚዎች ይህን ውበት አይተው ይደነቃሉ። ተፈጥሮን ማድነቅ ብቻ ሳይሆን መጠበቅም የሁላችንም ግዴታ ነው።'],[
  A('Where does the passage take place?','ምንባቡ የተፈጸመው የት ነው?',['በሰሜን ተራሮች ብሔራዊ ፓርክ','በጣና ሐይቅ','በአዲስ አበባ']),A('Which animals are found only in Ethiopia?','በኢትዮጵያ ብቻ የሚገኙት እንስሳት የትኞቹ ናቸው?',['ጌላዳና ዋልያ','አንበሳና ዝሆን','ፈረስና አህያ']),A('What is the writer\'s main message?','የጸሐፊው ዋና መልእክት ምንድን ነው?',['ተፈጥሮን ማድነቅና መጠበቅ ግዴታችን ነው','ተራራ መውጣት አደገኛ ነው','ጭጋግ ጎጂ ነው'])]),
 vmatch([('ብርቅዬ','በጣም ጥቂት የሆነ፣ የማይገኝ'),('ጭጋግ','ደመና መሰል ጉም'),('ገደል','ቁልቁል የሆነ ጥልቅ ቦታ'),('ማድነቅ','መደነቅ፣ ማወደስ')]),
 gram(('Subject and predicate; conjunctions','ባለቤትና ማሰሪያ አንቀጽ፤ አያያዦች'),('Every sentence has a subject (ባለቤት) and a predicate verb (ማሰሪያ አንቀጽ). Conjunctions (አያያዦች) like እና, ግን, ስለዚህ join two simple sentences into one.','እያንዳንዱ ዓረፍተ ነገር ባለቤትና ማሰሪያ አንቀጽ አለው። እንደ እና፣ ግን፣ ስለዚህ ያሉ አያያዦች ኹለት ነጠላ ዓረፍተ ነገሮችን ወደ አንድ ያጣምራሉ።'),[
  A('Subject of: "ዋልያዎቹ በቋጥኙ ላይ ይራመዳሉ።"','"ዋልያዎቹ በቋጥኙ ላይ ይራመዳሉ።" ባለቤቱ',['ዋልያዎቹ','ቋጥኙ','ይራመዳሉ']),A('Predicate (main verb) of: "ፀሐይ በማለዳ ወጣች።"','"ፀሐይ በማለዳ ወጣች።" ማሰሪያ አንቀጹ',['ወጣች','ፀሐይ','ማለዳ']),
  W('ጭጋጉ ተገፈፈ፤ ___ ተራሮቹ ታዩ።',['ስለዚህ','ግን','ወይም']),W('ፓርኩ ውብ ነው፤ ___ ብዙ ሰዎች አይጎበኙትም።',['ግን','ስለዚህ','እና'])]),
 build([['ጎብኚዎቹ','የተራራውን','ውበት','አደነቁ።'],['ተፈጥሮን','መጠበቅ','የሁላችንም','ግዴታ','ነው።']])],
 [A('Which word is a conjunction?','አያያዥ የትኛው ነው?',['ግን','ተራራ','ውብ']),A('The subject of "ልጆቹ ዛፍ ተከሉ።"','የ"ልጆቹ ዛፍ ተከሉ።" ባለቤት',['ልጆቹ','ዛፍ','ተከሉ']),A('The meaning of ብርቅዬ','የ"ብርቅዬ" ፍቺ',['የማይገኝ፣ ጥቂት','ብዙ፣ የተለመደ','ትልቅ']),A('Where is Ras Dashen?','ራስ ዳሽን የሚገኘው የት ነው?',['በሰሜን ተራሮች','በአፋር በረሃ','በጣና ደሴት'])],
 notes(('We read about the beauty of nature, learn new words, and use subjects, predicates and conjunctions.','ስለ ተፈጥሮ ውበት እናነባለን፤ አዳዲስ ቃላትን እንማራለን፤ ባለቤትን፣ ማሰሪያ አንቀጽንና አያያዦችን እንጠቀማለን።'),
  [('Reading: descriptive passages about nature.','ንባብ፦ ስለ ተፈጥሮ ገላጭ ምንባቦች።'),('Vocabulary: meanings from context.','ቃላት፦ ከዐውዱ ፍቺ መረዳት።'),('Grammar: subject (ባለቤት) and predicate (ማሰሪያ አንቀጽ).','ሰዋስው፦ ባለቤትና ማሰሪያ አንቀጽ።'),('Conjunctions join sentences: እና, ግን, ስለዚህ.','አያያዦች ዓረፍተ ነገሮችን ያጣምራሉ፦ እና፣ ግን፣ ስለዚህ።')],
  [('ብርቅዬ','rare','የማይገኝ'),('ገደል','cliff','ቁልቁል ቦታ'),('አያያዥ','conjunction','የሚያገናኝ ቃል')],('Subject first, verb last.','ባለቤት ቀድሞ፣ ግሥ በመጨረሻ።'),
  [(('Join: "ዝናብ ዘነበ። ወንዙ ሞላ።"','አጣምሩ፦ "ዝናብ ዘነበ። ወንዙ ሞላ።"'),'ዝናብ ዘነበ፤ ስለዚህ ወንዙ ሞላ።'),(('Name 2 endemic animals','2 ብርቅዬ እንስሳት'),'ዋልያ፣ ጌላዳ')],
  (('Nature photo calendar','የተፈጥሮ ፎቶ የቀን መቁጠሪያ'),('Calendars with local nature photos sell well and promote tourism. Take 12 photos of nature near you and write a short Amharic caption for each.','የአካባቢ ተፈጥሮ ፎቶ ያላቸው የቀን መቁጠሪያዎች በደንብ ይሸጣሉ፤ ቱሪዝምንም ያስተዋውቃሉ። በአካባቢያችሁ 12 የተፈጥሮ ፎቶዎችን አንሱና ለእያንዳንዱ አጭር የአማርኛ መግለጫ ጻፉ።'),[('Choose 12 beautiful places or plants.','12 ውብ ቦታዎችን ወይም ተክሎችን ምረጡ።'),('Write a 1-sentence caption for each.','ለእያንዳንዱ ባለ 1 ዓረፍተ ነገር መግለጫ ጻፉ።'),('Arrange them by month.','በወር አደራጁ።'),('Print and show at school.','አትሙና በትምህርት ቤት አሳዩ።')])),
 sm(('Admire and protect nature in words','ተፈጥሮን በቃላት አድንቁ፣ ጠብቁ'),[('Reading','ንባብ'),('Vocabulary','ቃላት'),('Subject and predicate','ባለቤትና ማሰሪያ'),('Conjunctions','አያያዦች')]),'Appreciating nature')

U(2,('Family planning','የቤተሰብ ምጣኔ'),[
 read('የአልማዝ ውሳኔ',['አልማዝ የስምንተኛ ክፍል ተማሪ ናት። ትልቅ እህቷ በአሥራ ስድስት ዓመቷ ተድራ ትምህርቷን አቋረጠች። በተከታታይ ሦስት ልጆችን ስለወለደች ጤናዋ ተጎዳ።','አልማዝ ይህን አይታ "እኔ መጀመሪያ ትምህርቴን እጨርሳለሁ" ብላ ወሰነች። በጤና ኬላ ስለ ቤተሰብ ምጣኔ ተማረች፤ ልጆችን አራርቆ መውለድ እናትንም ልጅንም እንደሚጠቅም ተረዳች።','ዛሬ አልማዝ ነርስ የመሆን ሕልም አላት። "የተመጠነ ቤተሰብ የተሻለ ሕይወት ይኖረዋል" ትላለች።'],[
  A('Why did Almaz\'s sister stop school?','የአልማዝ እህት ትምህርቷን ለምን አቋረጠች?',['በልጅነቷ ስለተዳረች','ስለታመመች','ስለተዛወረች']),A('What did Almaz learn at the health post?','አልማዝ በጤና ኬላ ምን ተማረች?',['ስለ ቤተሰብ ምጣኔ','ስለ እግር ኳስ','ስለ ሙዚቃ']),A('What is Almaz\'s dream?','የአልማዝ ሕልም ምንድን ነው?',['ነርስ መሆን','ነጋዴ መሆን','ሯጭ መሆን'])]),
 vmatch([('ምጣኔ','መጠንን መወሰን'),('አራርቆ','በጊዜ አራርቆ፣ እንዳይቀራረብ'),('መዳር','ማጋባት'),('ኬላ','ትንሽ የጤና ተቋም')]),
 gram(('Joining sentences','ዓረፍተ ነገሮችን ማጣመር'),('Two simple sentences can be joined with conjunctions: እና (and), ግን/ነገር ግን (but), ስለዚህ (so), ምክንያቱም (because).','ኹለት ነጠላ ዓረፍተ ነገሮች በአያያዦች ሊጣመሩ ይችላሉ፦ እና፣ ግን/ነገር ግን፣ ስለዚህ፣ ምክንያቱም።'),[
  W('አልማዝ ትምህርቷን ትወዳለች፤ ___ ጠንክራ ታጠናለች።',['ስለዚህ','ግን','ወይም']),W('እህቷ ጎበዝ ነበረች፤ ___ ትምህርቷን አቋረጠች።',['ነገር ግን','ስለዚህ','እና']),W('አልማዝ ደስተኛ ናት ___ ፈተናውን አልፋለች።',['ምክንያቱም','ግን','ወይም']),
  A('Which conjunction shows contrast?','ተቃርኖን የሚያሳየው አያያዥ?',['ግን','ስለዚህ','እና'])]),
 build([['ቤተሰብን','መመጠን','ለጤና','ይጠቅማል።'],['አልማዝ','መጀመሪያ','ትምህርቷን','ለመጨረስ','ወሰነች።']])],
 [A('Which conjunction shows a result?','ውጤትን የሚያሳየው አያያዥ?',['ስለዚህ','ግን','ወይም']),A('Spacing births helps…','አራርቆ መውለድ የሚጠቅመው…',['እናትንና ልጅን','ማንንም','አባትን ብቻ']),A('The meaning of ምጣኔ','የ"ምጣኔ" ፍቺ',['መጠንን መወሰን','መብላት','መሮጥ']),W('ዝናብ ዘነበ ___ አልበረደም።',['ግን','ስለዚህ','እና'])],
 notes(('Family planning protects health and education; conjunctions help us join ideas clearly.','የቤተሰብ ምጣኔ ጤናንና ትምህርትን ይጠብቃል፤ አያያዦች ሐሳቦችን በግልጽ እንድናጣምር ይረዱናል።'),
  [('Reading: a story about family planning and education.','ንባብ፦ ስለ ቤተሰብ ምጣኔና ትምህርት ታሪክ።'),('Listening: reproductive health.','ማዳመጥ፦ ሥነ ተዋልዶና ጤና።'),('Joining sentences with conjunctions.','ዓረፍተ ነገሮችን በአያያዥ ማጣመር።'),('Conjunction types: addition, contrast, result, reason.','የአያያዥ ዓይነቶች፦ መደመር፣ ተቃርኖ፣ ውጤት፣ ምክንያት።')],
  [('ምጣኔ','planning (size)','መጠን መወሰን'),('ኬላ','health post','የጤና ተቋም'),('ሕልም','dream','ምኞት')],('እና adds, ግን contrasts, ስለዚህ concludes.','እና ይደምራል፣ ግን ይቃረናል፣ ስለዚህ ይደመድማል።'),
  [(('Join with ምክንያቱም','በ"ምክንያቱም" አጣምሩ'),'አልማዝ ተደሰተች ምክንያቱም ፈተናውን አለፈች።'),(('One benefit of family planning','አንድ የቤተሰብ ምጣኔ ጥቅም'),'የእናትና የልጅ ጤና')],
  (('Health awareness radio drama','የጤና ግንዛቤ የሬዲዮ ድራማ'),('Radio dramas reach many families. Write a 3-minute Amharic drama about finishing school before marriage.','የሬዲዮ ድራማዎች ብዙ ቤተሰቦችን ይደርሳሉ። ከትዳር በፊት ትምህርትን ስለመጨረስ የ3 ደቂቃ የአማርኛ ድራማ ጻፉ።'),[('Create 3 characters.','3 ገፀ ባሕርያትን ፍጠሩ።'),('Write a clear problem and solution.','ግልጽ ችግርና መፍትሄ ጻፉ።'),('Use at least 4 conjunctions.','ቢያንስ 4 አያያዦችን ተጠቀሙ።'),('Record and share with permission.','ቅዱና በፈቃድ አጋሩ።')])),
 sm(('Plan families, join ideas','ቤተሰብን መጥኑ፣ ሐሳቦችን አጣምሩ'),[('Reading','ንባብ'),('Listening','ማዳመጥ'),('Joining sentences','ማጣመር'),('Conjunction types','የአያያዥ ዓይነቶች')]),'Family planning')

U(3,('Volunteering','በጎ ፈቃድ'),[
 read('የክረምት በጎ ፈቃደኞች',['ክረምት ሲገባ የመንደራችን ወጣቶች ይሰባሰባሉ። ለአረጋውያን ቤት ይጠግናሉ፤ ለአቅመ ደካሞች እህል ያጭዳሉ፤ ለታናናሽ ተማሪዎችም ማጠናከሪያ ትምህርት ይሰጣሉ።','ሥራው ክፍያ የለውም። ነገር ግን ወጣቶቹ ብዙ ያተርፋሉ፤ ክህሎት ይማራሉ፣ ጓደኝነት ያጠናክራሉ፣ የኅብረተሰቡን ፍቅር ያገኛሉ።','ኢትዮጵያውያን እንደ ደቦና ጅጊ ባሉ የመረዳዳት ባህሎች ይታወቃሉ። የዛሬው በጎ ፈቃድ የዚያ ጥንታዊ ባህል ቀጣይ ነው።'],[
  A('What do the youth do for the elderly?','ወጣቶቹ ለአረጋውያን ምን ያደርጋሉ?',['ቤት ይጠግናሉ','ገንዘብ ይወስዳሉ','ይጫወታሉ']),A('What do the volunteers gain?','በጎ ፈቃደኞቹ ምን ያተርፋሉ?',['ክህሎት፣ ጓደኝነትና ፍቅር','ብዙ ደመወዝ','ምንም']),A('Which is a traditional way of helping each other?','ባህላዊ የመረዳዳት መንገድ የትኛው ነው?',['ደቦ','ቁማር','ስርቆት'])]),
 vmatch([('በጎ ፈቃድ','ያለክፍያ በፍላጎት ማገልገል'),('አረጋዊ','በዕድሜ የገፋ ሰው'),('ደቦ','በኅብረት ተረዳድቶ መሥራት'),('ዕጓለ ማውታ','ወላጆቹን ያጣ ልጅ')]),
 gram(('Plural agreement and demonstratives','የቁጥር ስምምነትና ጠቋሚዎች'),('The verb must agree with the subject in number: ልጁ ሠራ → ልጆቹ ሠሩ. Demonstratives (ይህ, ያ, እነዚህ, እነዚያ) point to nouns.','ግሡ ከባለቤቱ ጋር በቁጥር መስማማት አለበት፦ ልጁ ሠራ → ልጆቹ ሠሩ። ጠቋሚዎች (ይህ፣ ያ፣ እነዚህ፣ እነዚያ) ስሞችን ይጠቁማሉ።'),[
  W('ወጣቶቹ ቤቱን ___።',['ጠገኑ','ጠገነ','ጠገነች']),W('በጎ ፈቃደኛዋ ተማሪዎችን ___።',['አስተማረች','አስተማሩ','አስተማረ']),W('___ ልጆች በጣም ታታሪዎች ናቸው።',['እነዚህ','ይህ','ይቺ']),A('Plural of "አረጋዊው ደስ አለው።"','የ"አረጋዊው ደስ አለው።" ብዙ ቁጥር',['አረጋውያኑ ደስ አላቸው።','አረጋዊው ደስ አላቸው።','አረጋውያኑ ደስ አለው።'])]),
 build([['በጎ','ፈቃደኞቹ','ለአረጋውያን','ቤት','ሠሩ።'],['እነዚህ','ወጣቶች','ኅብረተሰቡን','ያገለግላሉ።']])],
 [W('ተማሪዎቹ ዛፍ ___።',['ተከሉ','ተከለ','ተከለች']),A('Which is a plural demonstrative?','የብዙ ቁጥር ጠቋሚ የትኛው ነው?',['እነዚህ','ይህ','ያ']),A('The meaning of በጎ ፈቃድ','የ"በጎ ፈቃድ" ፍቺ',['ያለክፍያ ማገልገል','በክፍያ መሥራት','መተኛት']),A('Volunteering in Ethiopia continues the tradition of…','በኢትዮጵያ በጎ ፈቃድ የሚቀጥለው ባህል…',['ደቦና መረዳዳት','ጠብ','ብቸኝነት'])],
 notes(('Volunteering continues our culture of helping; verbs must agree with their subjects.','በጎ ፈቃድ የመረዳዳት ባህላችንን ይቀጥላል፤ ግሦች ከባለቤታቸው ጋር መስማማት አለባቸው።'),
  [('Reading: summer volunteers and traditions like debo.','ንባብ፦ የክረምት በጎ ፈቃደኞችና እንደ ደቦ ያሉ ባህሎች።'),('Vocabulary of service and care.','የአገልግሎትና የእንክብካቤ ቃላት።'),('Subject–verb agreement in number.','የባለቤትና የግሥ የቁጥር ስምምነት።'),('Demonstratives: ይህ, ያ, እነዚህ, እነዚያ.','ጠቋሚዎች፦ ይህ፣ ያ፣ እነዚህ፣ እነዚያ።')],
  [('ደቦ','work party','የኅብረት ሥራ'),('ጠቋሚ','demonstrative','የሚጠቁም ቃል'),('ስምምነት','agreement','መጣጣም')],('One subject, one verb form; many subjects, plural verb.','አንድ ባለቤት ነጠላ ግሥ፤ ብዙ ባለቤት የብዙ ግሥ።'),
  [(('Make plural: "ልጁ መጣ።"','ብዙ ቁጥር አድርጉ፦ "ልጁ መጣ።"'),'ልጆቹ መጡ።'),(('Name 2 volunteer activities','2 የበጎ ፈቃድ ተግባራት'),'ቤት መጠገን፣ ማስጠናት')],
  (('Volunteer matching board','የበጎ ፈቃድ ማገናኛ ሰሌዳ'),('Many people want to help but do not know where. Make a board listing local needs and volunteers who can help.','ብዙ ሰዎች መርዳት ይፈልጋሉ ግን የት እንደሆነ አያውቁም። የአካባቢ ፍላጎቶችንና ሊረዱ የሚችሉ በጎ ፈቃደኞችን የሚዘረዝር ሰሌዳ ሥሩ።'),[('List 5 needs in your area.','በአካባቢያችሁ 5 ፍላጎቶችን ዘርዝሩ።'),('List volunteers and their skills.','በጎ ፈቃደኞችንና ክህሎታቸውን ዘርዝሩ።'),('Match them on the board.','በሰሌዳው ላይ አገናኙ።'),('Report what was done.','የተሠራውን ሪፖርት አድርጉ።')])),
 sm(('Serve others; make verbs agree','ሌሎችን አገልግሉ፤ ግሦችን አስማሙ'),[('Reading','ንባብ'),('Vocabulary','ቃላት'),('Agreement','ስምምነት'),('Demonstratives','ጠቋሚዎች')]),'Volunteering')

U(4,('Biographies of famous people','የታዋቂ ሰዎች የሕይወት ታሪክ'),[
 read('ሐዲስ ዓለማየሁ',['ሐዲስ ዓለማየሁ በ1902 ዓ.ም በጎጃም ተወለዱ። በልጅነታቸው የቤተ ክህነት ትምህርት ተማሩ፤ ከዚያም በዘመናዊ ትምህርት ቤት ገፉ።','በጣሊያን ወረራ ወቅት ለሀገራቸው ተዋግተው ተማርከው ታሰሩ። ከነጻነት በኋላ በዲፕሎማትነትና በሚኒስትርነት አገለገሉ።','ሐዲስ ዓለማየሁ በይበልጥ የሚታወቁት "ፍቅር እስከ መቃብር" በተሰኘው ልብ ወለዳቸው ነው። መጽሐፉ ከአማርኛ ሥነ ጽሑፍ ታላላቅ ሥራዎች አንዱ ነው።'],[
  A('Where was Haddis Alemayehu born?','ሐዲስ ዓለማየሁ የት ተወለዱ?',['በጎጃም','በሐረር','በትግራይ']),A('His most famous book is…','በጣም የታወቀው መጽሐፋቸው…',['ፍቅር እስከ መቃብር','ኦሮማይ','ዴርቶጋዳ']),A('What happened to him during the Italian invasion?','በጣሊያን ወረራ ወቅት ምን ደረሰባቸው?',['ተዋግተው ተማርከው ታሰሩ','ወደ ውጭ ሄዱ','ነጋዴ ሆኑ'])]),
 vmatch([('የሕይወት ታሪክ','የአንድ ሰው የሕይወት ጉዞ ጽሑፍ'),('ልብ ወለድ','በምናብ የተጻፈ ታሪክ'),('ወረራ','የጠላት ሀገርን መውረር'),('ተማረከ','በጠላት እጅ ተያዘ')]),
 gram(('Adjectives and grammatical person','ቅፅልና መደብ'),('An adjective (ቅፅል) describes a noun: ታላቅ ደራሲ. Amharic has three persons (መደብ): 1st (እኔ, እኛ), 2nd (አንተ, አንቺ, እናንተ), 3rd (እሱ, እሷ, እነሱ).','ቅፅል ስምን ይገልጻል፦ ታላቅ ደራሲ። አማርኛ ሦስት መደቦች አሉት፦ 1ኛ (እኔ፣ እኛ)፣ 2ኛ (አንተ፣ አንቺ፣ እናንተ)፣ 3ኛ (እሱ፣ እሷ፣ እነሱ)።'),[
  A('The adjective in "ታላቁ ደራሲ መጽሐፍ ጻፉ።"','በ"ታላቁ ደራሲ መጽሐፍ ጻፉ።" ቅፅሉ',['ታላቁ','ደራሲ','ጻፉ']),A('"እናንተ" is which person?','"እናንተ" ስንተኛ መደብ ነው?',['2ኛ መደብ','1ኛ መደብ','3ኛ መደብ']),A('"እኛ" is which person?','"እኛ" ስንተኛ መደብ ነው?',['1ኛ መደብ','2ኛ መደብ','3ኛ መደብ']),W('እሷ ጎበዝ ደራሲ ___።',['ናት','ነኝ','ናችሁ'])]),
 build([['ሐዲስ','ዓለማየሁ','ታዋቂ','ደራሲ','ነበሩ።'],['የሕይወት','ታሪክ','ስለ','አንድ','ሰው','ይነግረናል።']])],
 [A('A biography is…','የሕይወት ታሪክ…',['የአንድ ሰው የሕይወት ጉዞ ጽሑፍ','የሂሳብ ቀመር','ካርታ']),A('Which word is an adjective?','ቅፅል የትኛው ነው?',['ቆንጆ','ሮጠ','ቤት']),A('"እሱ" is…','"እሱ"…',['3ኛ መደብ','1ኛ መደብ','2ኛ መደብ']),A('"ፍቅር እስከ መቃብር" was written by…','"ፍቅር እስከ መቃብር"ን የጻፉት…',['ሐዲስ ዓለማየሁ','ብርሃኑ ዘርይሁን','ጸጋዬ ገብረ መድኅን'])],
 notes(('Biographies teach us from great lives; adjectives describe and person (መደብ) shows who acts.','የሕይወት ታሪኮች ከታላላቅ ሕይወቶች ያስተምሩናል፤ ቅፅሎች ይገልጻሉ፣ መደብ ማን እንደሚሠራ ያሳያል።'),
  [('Reading: Haddis Alemayehu, Berhanu Zerihun.','ንባብ፦ ሐዲስ ዓለማየሁ፣ ብርሃኑ ዘርይሁን።'),('Biography structure: birth, education, work, legacy.','የሕይወት ታሪክ አወቃቀር፦ ልደት፣ ትምህርት፣ ሥራ፣ ውርስ።'),('Adjectives describe nouns.','ቅፅሎች ስሞችን ይገልጻሉ።'),('Three persons: 1st, 2nd, 3rd.','ሦስት መደቦች፦ 1ኛ፣ 2ኛ፣ 3ኛ።')],
  [('ደራሲ','author','መጽሐፍ የሚጽፍ'),('ቅፅል','adjective','ስምን የሚገልጽ'),('መደብ','person (grammar)','ተናጋሪ/ተደማጭ/ተነጋሪ')],('Born → learned → worked → remembered.','ተወለደ → ተማረ → ሠራ → ይታወሳል።'),
  [(('Parts of a biography','የሕይወት ታሪክ ክፍሎች'),'ልደት፣ ትምህርት፣ ሥራ፣ ውርስ'),(('Give the 3 persons','3ቱን መደቦች ስጡ'),'እኔ፣ አንተ፣ እሱ')],
  (('Local heroes book','የአካባቢ ጀግኖች መጽሐፍ'),('Every town has people worth remembering. Interview an elder or a respected person and write a one-page biography in Amharic.','እያንዳንዱ ከተማ የሚታወሱ ሰዎች አሉት። አንድ አዛውንት ወይም የተከበረ ሰው ጠይቃችሁ የአንድ ገጽ የአማርኛ የሕይወት ታሪክ ጻፉ።'),[('Prepare questions: birth, school, work, lessons.','ጥያቄዎችን አዘጋጁ፦ ልደት፣ ትምህርት፣ ሥራ፣ ትምህርቶች።'),('Interview with respect.','በአክብሮት ጠይቁ።'),('Write in time order with adjectives.','በጊዜ ቅደም ተከተልና በቅፅሎች ጻፉ።'),('Collect classmates\' work into a booklet.','የክፍል ጓደኞችን ሥራ በመጽሐፍ ሰብስቡ።')])),
 sm(('Learn from great lives; describe with adjectives','ከታላላቅ ሕይወቶች ተማሩ፤ በቅፅል ግለጹ'),[('Biography reading','የሕይወት ታሪክ ንባብ'),('Structure','አወቃቀር'),('Adjectives','ቅፅሎች'),('Person','መደብ')]),'Biographies of famous people')

U(5,('Water and its uses','ውኃና ጥቅሙ'),[
 read('የዓባይ ተስፋ',['ዓባይ ከጣና ሐይቅ ተነሥቶ ረጅም መንገድ ይጓዛል። ለዘመናት ለም አፈራችንን ተሸክሞ ወደ ሌሎች ሀገሮች ይሄድ ነበር።','ዛሬ ኢትዮጵያውያን በጋራ ገንዘብና በጋራ ተስፋ ታላቁን የኢትዮጵያ ሕዳሴ ግድብ ገነቡ። ግድቡ ኤሌክትሪክ ያመነጫል፤ ለሚሊዮኖች ብርሃን ይሰጣል።','ውኃ ሕይወት ነው። ለመጠጥ፣ ለግብርና፣ ለኃይልና ለንጽሕና እንጠቀምበታለን። ስለዚህ ውኃን መቆጠብና ከብክለት መጠበቅ አለብን።'],[
  A('Where does the Abay start?','ዓባይ ከየት ይነሣል?',['ከጣና ሐይቅ','ከቀይ ባሕር','ከአዋሽ']),A('What does the dam produce?','ግድቡ ምን ያመነጫል?',['ኤሌክትሪክ','ነዳጅ','ወርቅ']),A('What should we do with water?','በውኃ ምን ማድረግ አለብን?',['መቆጠብና ከብክለት መጠበቅ','ማባከን','መበከል'])]),
 vmatch([('ግድብ','ውኃን የሚያቆም ግንብ'),('ብክለት','መቆሸሽ፣ መበላሸት'),('ማመንጨት','ማስገኘት፣ ማውጣት'),('ለም','ፍሬያማ (አፈር)')]),
 gram(('Transitive verbs and objects','ሳቢ ግሥና ተሳቢ'),('A transitive verb (ሳቢ ግሥ) needs a direct object (ተሳቢ): "ልጁ ውኃ ጠጣ" — ውኃ is the object. An intransitive verb does not: "ልጁ ተኛ".','ሳቢ ግሥ ቀጥተኛ ተሳቢ ይፈልጋል፦ "ልጁ ውኃ ጠጣ" — ውኃ ተሳቢ ነው። ኢ-ሳቢ ግሥ ተሳቢ አይፈልግም፦ "ልጁ ተኛ"።'),[
  A('The object in "እናቴ ውኃ ቀዳች።"','በ"እናቴ ውኃ ቀዳች።" ተሳቢው',['ውኃ','እናቴ','ቀዳች']),A('Which verb is transitive?','ሳቢ ግሥ የትኛው ነው?',['ገነባ (ግድብ ገነባ)','ተኛ','ሄደ']),A('Which verb is intransitive?','ኢ-ሳቢ ግሥ የትኛው ነው?',['ተቀመጠ','ጠጣ','ገዛ']),W('ገበሬው ማሳውን በውኃ ___።',['አጠጣ','ተኛ','ሄደ'])]),
 build([['ኢትዮጵያውያን','ታላቁን','ግድብ','በጋራ','ገነቡ።'],['ውኃን','ከብክለት','መጠበቅ','አለብን።']])],
 [A('A direct object is called…','ቀጥተኛ ተሳቢ የሚባለው…',['ተሳቢ','ባለቤት','ቅፅል']),A('Which needs an object?','ተሳቢ የሚፈልገው?',['ገዛ','ተኛ','ቆመ']),A('The meaning of ብክለት','የ"ብክለት" ፍቺ',['መቆሸሽ','ንጽሕና','ውበት']),A('The GERD produces…','ሕዳሴ ግድቡ የሚያመነጨው…',['ኤሌክትሪክ','ዘይት','ዱቄት'])],
 notes(('Water is life; we read about the Abay and learn transitive verbs and objects.','ውኃ ሕይወት ነው፤ ስለ ዓባይ እናነባለን፣ ሳቢ ግሥንና ተሳቢን እንማራለን።'),
  [('Reading and poetry about the Abay.','ስለ ዓባይ ንባብና ግጥም።'),('Uses of water: drink, farming, power, hygiene.','የውኃ ጥቅሞች፦ መጠጥ፣ ግብርና፣ ኃይል፣ ንጽሕና።'),('Transitive verbs need an object.','ሳቢ ግሦች ተሳቢ ይፈልጋሉ።'),('Intransitive verbs do not.','ኢ-ሳቢ ግሦች ተሳቢ አይፈልጉም።')],
  [('ግድብ','dam','ውኃ የሚያቆም'),('ተሳቢ','object','ድርጊቱን የሚቀበል'),('ሳቢ ግሥ','transitive verb','ተሳቢ የሚፈልግ ግሥ')],('Who did what to what?','ማን ምን ላይ ምን አደረገ?'),
  [(('Find the object: "ልጅቷ መጽሐፍ አነበበች።"','ተሳቢውን ፈልጉ፦ "ልጅቷ መጽሐፍ አነበበች።"'),'መጽሐፍ'),(('2 uses of water','2 የውኃ ጥቅሞች'),'መጠጥ፣ ግብርና')],
  (('Water-saving campaign','የውኃ ቁጠባ ዘመቻ'),('Water shortages affect many towns. Make Amharic posters with 5 water-saving tips and measure how much water your family saves in a week.','የውኃ እጥረት ብዙ ከተሞችን ይነካል። 5 የውኃ ቁጠባ ምክሮች ያሉት የአማርኛ ፖስተር ሥሩና ቤተሰባችሁ በሳምንት የሚቆጥበውን ውኃ ለኩ።'),[('Write 5 tips with clear verbs.','5 ምክሮችን በግልጽ ግሦች ጻፉ።'),('Design a poster.','ፖስተር ንደፉ።'),('Count jerrycans used before and after.','በፊትና በኋላ የተጠቀማችሁትን ጀሪካን ቁጠሩ።'),('Share the results.','ውጤቱን አጋሩ።')])),
 sm(('Water is life; verbs need objects','ውኃ ሕይወት ነው፤ ግሦች ተሳቢ ይፈልጋሉ'),[('Abay reading','የዓባይ ንባብ'),('Uses of water','የውኃ ጥቅም'),('Transitive verbs','ሳቢ ግሦች'),('Intransitive verbs','ኢ-ሳቢ ግሦች')]),'Water and its uses')

U(6,('Human trafficking','ሕገ ወጥ የሰዎች ዝውውር'),[
 read('ያልጠረጠረ ተመነጠረ',['ሰላም አሥራ ሰባት ዓመቷ ነው። አንድ ደላላ "በውጭ ሀገር ጥሩ ሥራ አለ፤ ፓስፖርትም አያስፈልግሽም" አላት። ቤተሰቧም ሳያውቅ ልትሄድ ተዘጋጀች።','አክስቷ ይህን ሰምታ "ሕጋዊ ሥራ ሰነድ ይጠይቃል፤ ይህ ማታለያ ነው" ብላ መከረቻት። አብረውም ወደ ሠራተኛና ማኅበራዊ ጉዳይ ቢሮ ሄደው ጠየቁ።','ደላላው ብዙ ወጣቶችን በማታለል ሲያዘዋውር እንደነበር ተደረሰበት። ሰላም ዛሬ ስለ ሕገ ወጥ ዝውውር ለጓደኞቿ ታስተምራለች።'],[
  A('What did the broker promise?','ደላላው ምን ቃል ገባ?',['ያለ ሰነድ በውጭ ሀገር ጥሩ ሥራ','ነጻ ትምህርት','ቤት']),A('Who warned Selam?','ሰላምን ያስጠነቀቀቻት ማን ናት?',['አክስቷ','ደላላው','ጓደኛዋ']),A('What does the title "ያልጠረጠረ ተመነጠረ" teach?','"ያልጠረጠረ ተመነጠረ" የሚለው ርዕስ የሚያስተምረው?',['ጥንቃቄ የማያደርግ ይጎዳል','ሁሉንም እመኑ','ቶሎ ሂዱ'])]),
 vmatch([('ደላላ','ሰዎችን የሚያገናኝ አማላጅ'),('ማታለል','ማጭበርበር፣ ማሳሳት'),('ሰነድ','ሕጋዊ ወረቀት'),('ዝውውር','ከቦታ ቦታ ማዘዋወር')]),
 gram(('Sentence types by function','የዓረፍተ ነገር ዓይነቶች በአገልግሎት'),('Sentences have four functions: declarative (ሀተታዊ), interrogative (ጥያቄያዊ), imperative (ትዕዛዛዊ) and exclamatory (አጋኖአዊ).','ዓረፍተ ነገሮች በአገልግሎት በአራት ይከፈላሉ፦ ሀተታዊ፣ ጥያቄያዊ፣ ትዕዛዛዊና አጋኖአዊ።'),[
  A('"ሰነድሽን አሳዪኝ።" is…','"ሰነድሽን አሳዪኝ።"…',['ትዕዛዛዊ','ጥያቄያዊ','ሀተታዊ']),A('"ይህ ሥራ ሕጋዊ ነው?" is…','"ይህ ሥራ ሕጋዊ ነው?"…',['ጥያቄያዊ','ትዕዛዛዊ','አጋኖአዊ']),A('"ሰላም ለጓደኞቿ ታስተምራለች።" is…','"ሰላም ለጓደኞቿ ታስተምራለች።"…',['ሀተታዊ','ትዕዛዛዊ','ጥያቄያዊ']),A('"ወይ ጉድ! እንዴት ያለ ማታለያ ነው!" is…','"ወይ ጉድ! እንዴት ያለ ማታለያ ነው!"…',['አጋኖአዊ','ሀተታዊ','ጥያቄያዊ'])]),
 build([['ሕጋዊ','ሥራ','ሁልጊዜ','ሰነድ','ይጠይቃል።'],['ከመሄድሽ','በፊት','ቤተሰብሽን','አማክሪ።']])],
 [A('An imperative sentence…','ትዕዛዛዊ ዓረፍተ ነገር…',['ያዛል','ይጠይቃል','ይገልጻል ብቻ']),A('Which ends with "?"','በ"?" የሚጨርሰው?',['ጥያቄያዊ','ሀተታዊ','ትዕዛዛዊ']),A('A warning sign of trafficking','የሕገ ወጥ ዝውውር ምልክት',['ያለ ሰነድ የሚቀርብ ሥራ','በሕጋዊ ቢሮ የሚደረግ ቅጥር','ትምህርት']),A('The meaning of ማታለል','የ"ማታለል" ፍቺ',['ማጭበርበር','መርዳት','ማስተማር'])],
 notes(('Human trafficking deceives people; know the signs. Sentences can state, ask, command or exclaim.','ሕገ ወጥ ዝውውር ሰዎችን ያታልላል፤ ምልክቶቹን እወቁ። ዓረፍተ ነገሮች ሊገልጹ፣ ሊጠይቁ፣ ሊያዙ ወይም ሊያጋንኑ ይችላሉ።'),
  [('Reading: definition and dangers of trafficking.','ንባብ፦ የሕገ ወጥ ዝውውር ትርጉምና አደጋዎች።'),('Warning signs: no papers, too-good offers, secrecy.','ምልክቶች፦ ሰነድ አለመጠየቅ፣ ከመጠን ያለፈ ቃል፣ ምስጢራዊነት።'),('Four sentence types by function.','በአገልግሎት አራት የዓረፍተ ነገር ዓይነቶች።'),('Punctuation: ። ? !','ሥርዓተ ነጥብ፦ ። ? !')],
  [('ደላላ','broker','አማላጅ'),('ሀተታዊ','declarative','የሚገልጽ'),('አጋኖአዊ','exclamatory','ስሜትን የሚያጋንን')],('State ። Ask ? Command ። Exclaim !','ግለጹ ። ጠይቁ ? እዘዙ ። አጋንኑ !'),
  [(('Change to a question: "ሥራው ሕጋዊ ነው።"','ወደ ጥያቄ ቀይሩ፦ "ሥራው ሕጋዊ ነው።"'),'ሥራው ሕጋዊ ነው?'),(('Name the 4 sentence types','4ቱን ዓይነቶች ጥሩ'),'ሀተታዊ፣ ጥያቄያዊ፣ ትዕዛዛዊ፣ አጋኖአዊ')],
  (('Peer awareness talk','የእኩያ ግንዛቤ ንግግር'),('Young people listen to peers. Prepare a 3-minute Amharic talk using all four sentence types to warn friends about trafficking.','ወጣቶች እኩያቸውን ያዳምጣሉ። ጓደኞችን ስለ ሕገ ወጥ ዝውውር ለማስጠንቀቅ አራቱንም የዓረፍተ ነገር ዓይነቶች የሚጠቀም የ3 ደቂቃ የአማርኛ ንግግር አዘጋጁ።'),[('Open with a question.','በጥያቄ ጀምሩ።'),('Give facts (declarative).','እውነታዎችን ስጡ (ሀተታዊ)።'),('End with clear advice (imperative).','በግልጽ ምክር ጨርሱ (ትዕዛዛዊ)።'),('Present at a school club.','በትምህርት ቤት ክበብ አቅርቡ።')])),
 sm(('Know the signs; use four sentence types','ምልክቶቹን እወቁ፤ አራት ዓይነት ዓረፍተ ነገሮችን ተጠቀሙ'),[('Reading','ንባብ'),('Warning signs','ምልክቶች'),('Sentence types','የዓረፍተ ነገር ዓይነቶች'),('Punctuation','ሥርዓተ ነጥብ')]),'Human trafficking')

U(7,('Social relations','ማኅበራዊ ግንኙነት'),[
 read('የቆሻሻ መጣያ አንሁን',['አንዳንድ ሰዎች ንዴታቸውንና ስድባቸውን በሌሎች ላይ ይጥላሉ። ልክ እንደ ቆሻሻ መኪና የሚያራግፉበት ቦታ ይፈልጋሉ።','ብልህ ሰው ግን ክፉ ቃል ሲደርሰው በቁጣ አይመልስም። ፈገግ ብሎ ያልፋል፤ የራሱን ሰላም ይጠብቃል።','መልካም ማኅበራዊ ግንኙነት በመከባበር፣ በማዳመጥና በይቅርታ ይገነባል። ለሌሎች መልካም ስንሆን ሌሎችም መልካም ይሆኑልናል።'],[
  A('What do some people "dump" on others?','አንዳንድ ሰዎች በሌሎች ላይ ምን "ያራግፋሉ"?',['ንዴትና ስድብ','ስጦታ','ምግብ']),A('How does a wise person respond?','ብልህ ሰው እንዴት ይመልሳል?',['በቁጣ ሳይመልስ ያልፋል','ይሰድባል','ይጣላል']),A('Good relations are built on…','መልካም ግንኙነት የሚገነባው በ…',['መከባበር፣ ማዳመጥና ይቅርታ','ጠብ','ዝምታ ብቻ'])]),
 vmatch([('ስድብ','ክፉ ቃል'),('ይቅርታ','በደልን መተው'),('መከባበር','እርስ በርስ ማክበር'),('ብልህ','አስተዋይ')]),
 gram(('Questions and commands','ጥያቄያዊና ትዕዛዛዊ ዓረፍተ ነገሮች'),('Change statements into questions with question words (ማን, ምን, የት, መቼ, ለምን, እንዴት) or into commands addressed to አንተ/አንቺ/እናንተ.','ዓረፍተ ነገሮችን በመጠይቅ ቃላት (ማን፣ ምን፣ የት፣ መቼ፣ ለምን፣ እንዴት) ወደ ጥያቄ፣ ወይም ለአንተ/ለአንቺ/ለእናንተ ወደ ትዕዛዝ ቀይሩ።'),[
  W('___ ተቆጣህ? (ምክንያት ለመጠየቅ)',['ለምን','የት','ማን']),W('ስብሰባው ___ ነው? (ጊዜ ለመጠየቅ)',['መቼ','ማን','ምን']),
  A('Command to "እናንተ": "ጓደኞቻችሁን ___።"','ለ"እናንተ" ትዕዛዝ፦ "ጓደኞቻችሁን ___።"',['አክብሩ','አከበረ','አከበረች']),A('Command to "አንቺ": "በጥሞና ___።"','ለ"አንቺ" ትዕዛዝ፦ "በጥሞና ___።"',['አዳምጪ','አዳምጡ','አዳመጠ'])]),
 build([['መልካም','ግንኙነት','በመከባበር','ይገነባል።'],['ጓደኛህን','በጥሞና','አዳምጠው።']])],
 [A('Which word asks about place?','ቦታን የሚጠይቀው ቃል?',['የት','መቼ','ማን']),A('Command to እናንተ','ለእናንተ ትዕዛዝ',['ተቀመጡ','ተቀመጠ','ተቀመጠች']),A('The meaning of ይቅርታ','የ"ይቅርታ" ፍቺ',['በደልን መተው','መበቀል','መሸሽ']),A('A wise response to insults','ለስድብ ብልህ ምላሽ',['በሰላም ማለፍ','መልሶ መሳደብ','መደባደብ'])],
 notes(('Good social relations need respect and calm; questions and commands help us communicate.','መልካም ማኅበራዊ ግንኙነት መከባበርና መረጋጋትን ይፈልጋል፤ ጥያቄና ትዕዛዝ ለመግባባት ይረዱናል።'),
  [('Reading: do not be a dumping place for anger.','ንባብ፦ የንዴት መጣያ አንሁን።'),('Listening: a fable about kindness.','ማዳመጥ፦ ስለ ደግነት ተረት።'),('Question words: ማን, ምን, የት, መቼ, ለምን, እንዴት.','መጠይቅ ቃላት፦ ማን፣ ምን፣ የት፣ መቼ፣ ለምን፣ እንዴት።'),('Commands change with person: አንተ/አንቺ/እናንተ.','ትዕዛዝ በመደብ ይለወጣል፦ አንተ/አንቺ/እናንተ።')],
  [('መከባበር','respect','እርስ በርስ ማክበር'),('መጠይቅ','question word','የሚጠይቅ ቃል'),('ትዕዛዝ','command','የሚያዝ ቃል')],('Ask kindly, command politely.','በደግነት ጠይቁ፣ በትሕትና እዘዙ።'),
  [(('6 question words','6 መጠይቅ ቃላት'),'ማን፣ ምን፣ የት፣ መቼ፣ ለምን፣ እንዴት'),(('Command "ማንበብ" to አንቺ','"ማንበብ"ን ለአንቺ እዘዙ'),'አንብቢ')],
  (('Kindness week','የደግነት ሳምንት'),('Kind schools are better places to learn. Plan a kindness week with one small action each day and a class message board.','ደግ ትምህርት ቤቶች ለመማር የተሻሉ ናቸው። በየቀኑ አንድ ትንሽ ተግባርና የክፍል መልእክት ሰሌዳ ያለው የደግነት ሳምንት አቅዱ።'),[('Choose 5 daily kind actions.','5 ዕለታዊ የደግነት ተግባራትን ምረጡ።'),('Write polite command posters.','ትሑት የትዕዛዝ ፖስተሮች ጻፉ።'),('Collect thank-you notes.','የምስጋና ማስታወሻዎችን ሰብስቡ።'),('Discuss what changed.','ምን እንደተለወጠ ተወያዩ።')])),
 sm(('Respect builds relations; ask and command politely','መከባበር ግንኙነትን ይገነባል፤ በትሕትና ጠይቁ፣ እዘዙ'),[('Reading','ንባብ'),('Listening','ማዳመጥ'),('Question words','መጠይቆች'),('Commands','ትዕዛዞች')]),'Social relations')

U(8,('Addiction','ሱስ'),[
 read('የሱስ ተጠቂው',['ዮናስ ጎበዝ ተማሪ ነበር። ጓደኞቹ ጫት እንዲቅም ገፋፉት፤ "ለማጥናት ይረዳሃል" አሉት። ቀስ በቀስ ያለ ጫት መቀመጥ አቃተው።','ገንዘቡ አለቀ፤ ውጤቱ ወረደ፤ እንቅልፍ ማጣትና ጭንቀት ጀመረው። ወላጆቹ ተጨነቁ።','በመጨረሻ ዮናስ ለአማካሪ መምህሩ ተናገረ። በቤተሰቡና በባለሙያ ድጋፍ ቀስ በቀስ ሱሱን ተወ። "እምቢ ማለት ብርታት ነው" ይላል።'],[
  A('How did Yonas start chewing khat?','ዮናስ ጫት መቃም እንዴት ጀመረ?',['ጓደኞቹ ገፋፉት','ሐኪም አዘዘለት','በራሱ ማጥናት ስለፈለገ ብቻ']),A('What happened to his results?','ውጤቱ ምን ሆነ?',['ወረደ','ጨመረ','አልተለወጠም']),A('How did he quit?','ሱሱን እንዴት ተወ?',['በቤተሰብና በባለሙያ ድጋፍ','ብቻውን በአንድ ቀን','ትምህርቱን በማቋረጥ'])]),
 vmatch([('ሱስ','ማቆም የሚያቅት ልማድ'),('ጫና','ግፊት'),('አማካሪ','ምክር የሚሰጥ'),('ብርታት','ጥንካሬ')]),
 gram(('Compound and complex sentences','ድርብና ድብልቅ ዓረፍተ ነገሮች'),('A compound sentence (ድርብ) joins two independent clauses with a conjunction. A complex sentence (ድብልቅ) has a main clause and a dependent clause, often with -ስለ, ከ...በኋላ, ቢ...','ድርብ ዓረፍተ ነገር ኹለት ራሳቸውን የቻሉ ሐረጎችን በአያያዥ ያጣምራል። ድብልቅ ዓረፍተ ነገር ዋና ሐረግና ጥገኛ ሐረግ አለው፤ ብዙ ጊዜ በስለ-፣ ከ...በኋላ፣ ቢ- ይመጣል።'),[
  A('Which is a complex sentence?','ድብልቅ ዓረፍተ ነገር የትኛው ነው?',['ሱስ ጤናን ስለሚጎዳ መራቅ አለብን።','ዮናስ ተማሪ ነው።','ጫት ቅጠል ነው።']),A('Which is a compound sentence?','ድርብ ዓረፍተ ነገር የትኛው ነው?',['ዮናስ ተቸገረ፤ ነገር ግን አገገመ።','ዮናስ ተቸገረ።','ተቸግሮ ስለነበር።']),
  W('ሱስ ጤናን ___ መራቅ ይገባል።',['ስለሚጎዳ','ጎዳ','ይጎዳል']),W('ዮናስ ምክር ___ በኋላ ሱሱን ተወ።',['ካገኘ','አገኘ','ያገኛል'])]),
 build([['ሱስ','ጤናን','ስለሚጎዳ','እምቢ','እንበል።'],['ዮናስ','ድጋፍ','ካገኘ','በኋላ','አገገመ።']])],
 [A('A dependent clause cannot…','ጥገኛ ሐረግ… አይችልም',['ብቻውን መቆም','ግሥ መያዝ','መጻፍ']),A('Which is a compound sentence?','ድርብ የትኛው ነው?',['ዝናብ ዘነበ፤ ስለዚህ ቤት ቆየን።','ዝናብ ስለዘነበ','ዝናብ']),A('Saying no to addiction is…','ለሱስ እምቢ ማለት…',['ብርታት','ድክመት','ስህተት']),A('The meaning of ሱስ','የ"ሱስ" ፍቺ',['ማቆም የሚያቅት ልማድ','ስፖርት','ጨዋታ'])],
 notes(('Addiction harms health, money and learning; saying no is strength. We build compound and complex sentences.','ሱስ ጤናን፣ ገንዘብንና ትምህርትን ይጎዳል፤ እምቢ ማለት ብርታት ነው። ድርብና ድብልቅ ዓረፍተ ነገሮችን እንመሠርታለን።'),
  [('Reading: how peer pressure leads to addiction.','ንባብ፦ የጓደኛ ግፊት ወደ ሱስ እንዴት ይመራል።'),('Effects: health, money, school, family.','ውጤቶች፦ ጤና፣ ገንዘብ፣ ትምህርት፣ ቤተሰብ።'),('Compound sentence: two independent clauses.','ድርብ ዓረፍተ ነገር፦ ኹለት ራሳቸውን የቻሉ ሐረጎች።'),('Complex sentence: main + dependent clause.','ድብልቅ ዓረፍተ ነገር፦ ዋና + ጥገኛ ሐረግ።')],
  [('ሱስ','addiction','የማይቆም ልማድ'),('ድርብ','compound','ኹለት ነጻ ሐረጎች'),('ድብልቅ','complex','ዋናና ጥገኛ ሐረግ')],('Say no, stay strong.','እምቢ በሉ፣ ጠንክሩ።'),
  [(('Make complex: "ሱስ ይጎዳል። እንራቀው።"','ድብልቅ አድርጉ፦ "ሱስ ይጎዳል። እንራቀው።"'),'ሱስ ስለሚጎዳ እንራቀው።'),(('2 effects of addiction','2 የሱስ ጉዳቶች'),'የጤና መጓደል፣ የውጤት መቀነስ')],
  (('Healthy hobby club','የጤናማ መዝናኛ ክበብ'),('Young people with good hobbies are less likely to fall into addiction. Start a club offering sport, reading or crafts after school.','ጥሩ የትርፍ ጊዜ ልማድ ያላቸው ወጣቶች ወደ ሱስ የመግባት ዕድላቸው ያነሰ ነው። ከትምህርት በኋላ ስፖርት፣ ንባብ ወይም የእጅ ሥራ የሚሰጥ ክበብ ጀምሩ።'),[('Ask classmates which hobbies they like.','የክፍል ጓደኞችን የሚወዱትን ጠይቁ።'),('Plan a weekly timetable.','ሳምንታዊ የጊዜ ሰሌዳ አቅዱ።'),('Invite a counsellor to talk once.','አማካሪን አንድ ጊዜ እንዲያነጋግር ጋብዙ።'),('Track attendance for a month.','ለአንድ ወር ተሳትፎን ተከታተሉ።')])),
 sm(('Say no to addiction; build longer sentences','ለሱስ እምቢ በሉ፤ ረጃጅም ዓረፍተ ነገሮችን መሥርቱ'),[('Reading','ንባብ'),('Effects','ጉዳቶች'),('Compound','ድርብ'),('Complex','ድብልቅ')]),'Addiction')

U(9,('Love of country','የሀገር ፍቅር'),[
 read('ደጃዝማች በላይ ዘለቀ',['በላይ ዘለቀ በጎጃም የተወለዱ የኢትዮጵያ ጀግና ናቸው። በጣሊያን ወረራ ዘመን (1928–1933 ዓ.ም) ብዙ አርበኞችን አስተባብረው ለሀገራቸው ነጻነት ተዋጉ።','ደፋርነታቸውና ለሕዝባቸው ያላቸው ፍቅር በሕዝብ ዘንድ ዝነኛ አደረጋቸው። ስማቸውም በብዙ ግጥሞችና ዘፈኖች ይወደሳል።','የሀገር ፍቅር በጦር ሜዳ ብቻ አይገለጽም። ዛሬ በትጋት በመማር፣ በታማኝነት በመሥራትና አካባቢን በመጠበቅ ሀገራችንን መውደድ እንችላለን።'],[
  A('What did Belay Zeleke do during the Italian invasion?','በጣሊያን ወረራ ዘመን በላይ ዘለቀ ምን አደረጉ?',['አርበኞችን አስተባብረው ተዋጉ','ወደ ውጭ ሄዱ','ነጋዴ ሆኑ']),A('Where was he born?','የት ተወለዱ?',['በጎጃም','በባሌ','በሐረር']),A('How can students show love of country today?','ተማሪዎች ዛሬ የሀገር ፍቅርን እንዴት ያሳያሉ?',['በትጋት በመማርና አካባቢን በመጠበቅ','ትምህርት በማቋረጥ','ዛፍ በመቁረጥ'])]),
 vmatch([('አርበኛ','ለሀገሩ ነጻነት የተዋጋ'),('ወረራ','የጠላት መውረር'),('ደፋር','የማይፈራ'),('ነጻነት','ከባርነት መላቀቅ')]),
 gram(('Tense and complex sentences','ጊዜና ድብልቅ ዓረፍተ ነገር'),('Amharic verbs show time: past (ኃላፊ) — ተዋጋ, present/future (የአሁን/የወደፊት) — ይዋጋል, and continuous — እየተዋጋ ነው.','የአማርኛ ግሦች ጊዜን ያሳያሉ፦ ኃላፊ — ተዋጋ፣ የአሁን/የወደፊት — ይዋጋል፣ ቀጣይ — እየተዋጋ ነው።'),[
  A('"ተዋጉ" shows which tense?','"ተዋጉ" ምን ጊዜ ያሳያል?',['ኃላፊ ጊዜ','የወደፊት ጊዜ','ቀጣይ ጊዜ']),A('"እንማራለን" shows…','"እንማራለን"…',['የአሁን/የወደፊት ጊዜ','ኃላፊ ጊዜ','ትዕዛዝ']),W('ተማሪዎቹ አሁን ___ ነው።',['እያጠኑ','አጠኑ','ያጠናሉ']),W('ነገ ዛፍ ___።',['እንተክላለን','ተከልን','እየተከልን'])]),
 build([['አርበኞቹ','ለሀገራቸው','ነጻነት','ተዋጉ።'],['ሀገራችንን','በትጋት','በመማር','እንወዳለን።']])],
 [A('Past tense of ይማራል','የ"ይማራል" ኃላፊ ጊዜ',['ተማረ','ይማር','እየተማረ']),A('An አርበኛ is…','አርበኛ…',['ለሀገሩ ነጻነት የተዋጋ','ነጋዴ','ተማሪ']),A('"እየሠራ ነው" shows…','"እየሠራ ነው"…',['ቀጣይ ጊዜ','ኃላፊ ጊዜ','ትዕዛዝ']),A('A peaceful way to love your country','ሀገርን የመውደድ ሰላማዊ መንገድ',['በታማኝነት መሥራት','ሕግ መጣስ','ቆሻሻ መጣል'])],
 notes(('Love of country was shown by heroes like Belay Zeleke and is shown today by study, honesty and care; verbs show time.','የሀገር ፍቅር እንደ በላይ ዘለቀ ባሉ ጀግኖች ታይቷል፤ ዛሬ በትምህርት፣ በታማኝነትና በእንክብካቤ ይታያል፤ ግሦች ጊዜን ያሳያሉ።'),
  [('Reading/listening: patriots during the Italian invasion.','ንባብ/ማዳመጥ፦ በጣሊያን ወረራ ዘመን አርበኞች።'),('Modern patriotism: study, work, protect.','ዘመናዊ የሀገር ፍቅር፦ መማር፣ መሥራት፣ መጠበቅ።'),('Tenses: past, present/future, continuous.','ጊዜዎች፦ ኃላፊ፣ የአሁን/የወደፊት፣ ቀጣይ።'),('Complex sentences with time clauses.','የጊዜ ሐረግ ያላቸው ድብልቅ ዓረፍተ ነገሮች።')],
  [('አርበኛ','patriot','ለሀገር የተዋጋ'),('ኃላፊ ጊዜ','past tense','ያለፈ ጊዜ'),('ነጻነት','freedom','መላቀቅ')],('Yesterday ተዋጋ, today ይማራል, now እየሠራ ነው.','ትናንት ተዋጋ፣ ዛሬ ይማራል፣ አሁን እየሠራ ነው።'),
  [(('Give 3 tenses of "መሥራት"','የ"መሥራት" 3 ጊዜዎች'),'ሠራ፣ ይሠራል፣ እየሠራ ነው'),(('One modern way to love your country','ሀገርን የመውደድ አንድ ዘመናዊ መንገድ'),'በትጋት መማር')],
  (('Heritage clean-up day','የቅርስ ጽዳት ቀን'),('Protecting heritage sites is patriotism in action and supports tourism. Organise a clean-up of a local monument or church compound with permission.','ቅርሶችን መጠበቅ በተግባር የሀገር ፍቅር ሲሆን ቱሪዝምንም ይደግፋል። በፈቃድ የአካባቢ ሐውልት ወይም የቤተ እምነት ግቢ ጽዳት አዘጋጁ።'),[('Choose a site and get permission.','ቦታ ምረጡና ፈቃድ አግኙ።'),('Invite volunteers.','በጎ ፈቃደኞችን ጋብዙ።'),('Clean and plant flowers.','አጽዱና አበባ ትከሉ።'),('Write a short report in Amharic.','አጭር የአማርኛ ሪፖርት ጻፉ።')])),
 sm(('Love your country in deeds; use tenses correctly','ሀገራችሁን በተግባር ውደዱ፤ ጊዜዎችን በትክክል ተጠቀሙ'),[('Patriots','አርበኞች'),('Modern patriotism','ዘመናዊ የሀገር ፍቅር'),('Tenses','ጊዜዎች'),('Complex sentences','ድብልቅ ዓረፍተ ነገሮች')]),'Love of country')

U(10,('Oral poetry','ቃላዊ ግጥሞች'),[
 read('ቃላዊ ግጥም',['ቃላዊ ግጥሞች ከአፍ ወደ አፍ የሚተላለፉ የሕዝብ ግጥሞች ናቸው። ደራሲያቸው ብዙ ጊዜ አይታወቅም፤ ሕዝቡ በበዓል፣ በሥራና በሐዘን ጊዜ ያዜማቸዋል።','ለምሳሌ ሽለላና ፉከራ ጀግንነትን ይገልጻሉ። የሥራ ዘፈኖች በአጨዳና በውቂያ ጊዜ ድካምን ያቀልላሉ። ሙሾ ደግሞ የሐዘን ግጥም ነው።','ቃላዊ ግጥሞች የሕዝቡን ታሪክ፣ እምነትና ስሜት ይይዛሉ። ስለዚህ ልንሰበስባቸውና ልንጠብቃቸው ይገባል።'],[
  A('How is oral poetry passed on?','ቃላዊ ግጥም እንዴት ይተላለፋል?',['ከአፍ ወደ አፍ','በኢንተርኔት ብቻ','በመጽሐፍ ብቻ']),A('Which oral poems express heroism?','ጀግንነትን የሚገልጹ ቃላዊ ግጥሞች?',['ሽለላና ፉከራ','ሙሾ','የልጆች ጨዋታ']),A('ሙሾ is a poem of…','ሙሾ የ… ግጥም ነው',['ሐዘን','ደስታ','ሥራ'])]),
 vmatch([('ሽለላ','የጀግንነት ግጥም'),('ሙሾ','የሐዘን ግጥም'),('ቃላዊ','በአፍ የሚነገር'),('ሀገርኛ','የሀገር ውስጥ፣ ባህላዊ')]),
 gram(('Adverbs and sentence structure','ተውሳከ ግሥና የዓረፍተ ነገር መዋቅር'),('Adverbs (ተውሳከ ግሥ) tell when, where or how an action happens: ዘወትር, ማታ, ወደዚያ, ቶሎ. A sentence has a noun phrase (ስማዊ ሐረግ) and a verb phrase (ግሣዊ ሐረግ).','ተውሳከ ግሦች ድርጊቱ መቼ፣ የትና እንዴት እንደተፈጸመ ይነግራሉ፦ ዘወትር፣ ማታ፣ ወደዚያ፣ ቶሎ። ዓረፍተ ነገር ስማዊ ሐረግና ግሣዊ ሐረግ አለው።'),[
  A('The adverb in "ገበሬዎቹ ማታ ዘፈኑ።"','በ"ገበሬዎቹ ማታ ዘፈኑ።" ተውሳከ ግሡ',['ማታ','ገበሬዎቹ','ዘፈኑ']),W('እናቴ ___ ቡና ታፈላለች። (ሁልጊዜ)',['ዘወትር','ወደዚያ','ትልቅ']),
  A('The noun phrase in "ትልቁ ልጅ እየሮጠ መጣ።"','በ"ትልቁ ልጅ እየሮጠ መጣ።" ስማዊ ሐረጉ',['ትልቁ ልጅ','እየሮጠ መጣ','መጣ']),A('The verb phrase in "ትልቁ ልጅ እየሮጠ መጣ።"','በ"ትልቁ ልጅ እየሮጠ መጣ።" ግሣዊ ሐረጉ',['እየሮጠ መጣ','ትልቁ ልጅ','ትልቁ'])]),
 build([['ቃላዊ','ግጥሞች','ከአፍ','ወደ','አፍ','ይተላለፋሉ።'],['አርሶ','አደሮቹ','ማታ','የሥራ','ዘፈን','ዘፈኑ።']])],
 [A('Oral poetry is…','ቃላዊ ግጥም…',['ከአፍ ወደ አፍ የሚተላለፍ','በኮምፒውተር የተጻፈ','የሂሳብ ቀመር']),A('Which is an adverb?','ተውሳከ ግሥ የትኛው ነው?',['ቶሎ','ቤት','ሰማያዊ']),A('ፉከራ expresses…','ፉከራ የሚገልጸው…',['ጀግንነት','ሐዘን','ረሃብ']),A('Why collect oral poems?','ቃላዊ ግጥሞችን ለምን እንሰበስባለን?',['ታሪክንና ባህልን ለመጠበቅ','ለመጣል','ለመርሳት'])],
 notes(('Oral poems carry our history and feelings; adverbs and phrases build rich sentences.','ቃላዊ ግጥሞች ታሪካችንንና ስሜታችንን ይይዛሉ፤ ተውሳከ ግሦችና ሐረጎች ሀብታም ዓረፍተ ነገሮችን ይገነባሉ።'),
  [('Oral poetry: passed by mouth, author often unknown.','ቃላዊ ግጥም፦ በአፍ የሚተላለፍ፣ ደራሲው ብዙ ጊዜ የማይታወቅ።'),('Types: ሽለላ, ፉከራ, work songs, ሙሾ.','ዓይነቶች፦ ሽለላ፣ ፉከራ፣ የሥራ ዘፈን፣ ሙሾ።'),('Adverbs: when, where, how.','ተውሳከ ግሥ፦ መቼ፣ የት፣ እንዴት።'),('Sentence = noun phrase + verb phrase.','ዓረፍተ ነገር = ስማዊ ሐረግ + ግሣዊ ሐረግ።')],
  [('ሽለላ','heroic chant','የጀግንነት ግጥም'),('ተውሳከ ግሥ','adverb','ግሥን የሚገልጽ'),('ሐረግ','phrase','የቃላት ቡድን')],('Who/what + did how/when.','ማን/ምን + እንዴት/መቼ አደረገ።'),
  [(('2 types of oral poetry','2 የቃላዊ ግጥም ዓይነቶች'),'ሽለላ፣ ሙሾ'),(('Find the adverb: "ልጁ ቶሎ ሮጠ።"','ተውሳከ ግሡን ፈልጉ፦ "ልጁ ቶሎ ሮጠ።"'),'ቶሎ')],
  (('Oral poetry archive','የቃላዊ ግጥም ማኅደር'),('Oral poems disappear when elders pass away. Record 5 oral poems from elders (with permission), write them down and explain their occasion.','አዛውንቶች ሲያልፉ ቃላዊ ግጥሞች ይጠፋሉ። ከአዛውንቶች 5 ቃላዊ ግጥሞችን (በፈቃድ) ቅዱ፣ ጻፏቸውና የሚባሉበትን ጊዜ አብራሩ።'),[('Ask elders for poems for work, joy or bravery.','አዛውንቶችን የሥራ፣ የደስታ ወይም የጀግንነት ግጥም ጠይቁ።'),('Record and write them accurately.','በትክክል ቅዱና ጻፉ።'),('Note the occasion and meaning.','ጊዜውንና ትርጉሙን መዝግቡ።'),('Make a class booklet or audio file.','የክፍል መጽሐፍ ወይም የድምፅ ፋይል ሥሩ።')])),
 sm(('Oral poetry keeps our voice; adverbs enrich sentences','ቃላዊ ግጥም ድምፃችንን ይጠብቃል፤ ተውሳከ ግሥ ዓረፍተ ነገርን ያበለጽጋል'),[('What oral poetry is','ምንነቱ'),('Types','ዓይነቶች'),('Adverbs','ተውሳከ ግሥ'),('Phrases','ሐረጎች')]),'Oral poetry')
dump('am')
