import sys;sys.path.insert(0,'.')
from common4 import *
SN=E("Ge'ez",'ግእዝ')
def G(q_en,q_am,opts,a=0,e=None):
    d={'q':E(q_en,q_am),'o':[o if isinstance(o,str) else E(*o) for o in opts],'a':a}
    if e: d['e']=E(*e)
    return d
def vm(title,tip,rounds): return {'title':E(*title),'type':'match','tip':E(*tip),'rounds':[[[a,E(*b) if isinstance(b,tuple) else b] for a,b in r] for r in rounds]}
def U(n,title,extra,exam,nt,summ,foot):
    unit(f'g4-geez-{n}','geez',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f"Built on the Grade 4 Ge'ez student book (ልሳነ ግእዝ, ANRS 2017 E.C.), Chapter {n}: {foot}.",f'በ4ኛ ክፍል የልሳነ ግእዝ መጽሐፍ ምዕራፍ {n} ({title[1]}) ላይ የተመሰረተ።'),'(d=>[])',{},extra,exam,nt,summ)
VT=('Ge\'ez words','የግእዝ ቃላት');VTIP=('Match each Ge\'ez word with its meaning. Say each word aloud.','እያንዳንዱን የግእዝ ቃል ከትርጉሙ ጋር አዛምዱ። እያንዳንዱን ቃል ጮክ ብላችሁ በሉ።')
INN=lambda t,x,s:(t,x,s)

U(1,("Reading Ge'ez","ንባበ ግእዝ"),[
 quiz(('Kinds of reading','የንባብ ዓይነቶች'),('Ge\'ez words are read in four main ways: ተንሣኢ (rising, in five orders), ወዳቂ (falling, in all seven orders), ሰያፍ (6th order read high, e.g. ያሬድ, ግበር) and ግዱፍ (6th order read low, e.g. ምድር, ቤት).','የግእዝ ቃላት በአራት ዋና መንገዶች ይነበባሉ፦ ተንሣኢ (በአምስቱ ፊደላት በከፍታ)፣ ወዳቂ (በሰባቱም ፊደላት በዝቅታ)፣ ሰያፍ (ሳድስ በከፍታ፣ ለምሳሌ ያሬድ፣ ግበር) እና ግዱፍ (ሳድስ በዝቅታ፣ ለምሳሌ ምድር፣ ቤት)።'),[
  G('"ምድር, ቤት, ግብር" are read as…','"ምድር፣ ቤት፣ ግብር" የሚነበቡት…',['ግዱፍ','ሰያፍ','ተንሣኢ']),G('"ያሬድ, ግበር, ንበር" are read as…','"ያሬድ፣ ግበር፣ ንበር" የሚነበቡት…',['ሰያፍ','ግዱፍ','ወዳቂ']),
  G('"ነገደ, ነበረ, መሀረ" are read as…','"ነገደ፣ ነበረ፣ መሀረ" የሚነበቡት…',['ተንሣኢ','ግዱፍ','ሰያፍ']),G('"አሐደ, ብእሲ, ሐዋርያ" are read as…','"አሐደ፣ ብእሲ፣ ሐዋርያ" የሚነበቡት…',['ወዳቂ','ሰያፍ','ግዱፍ']),
  G('Ge\'ez has how many orders (ፊደላት) in each family?','ግእዝ በእያንዳንዱ ቤት ስንት ፊደላት አሉት?',['7','5','10'])]),
 quiz(('Active and passive verbs','ግሰ ገቢርና ግሰ ተገብሮ'),('Passive verbs (ተገብሮ) usually begin with ተ-: ገብረ (he did) → ተገብረ (it was done).','የተገብሮ ግሦች በአብዛኛው በ"ተ-" ይጀምራሉ፦ ገብረ (ሠራ) → ተገብረ (ተሠራ)።'),[
  G('Passive of ገብረ','የገብረ ተገብሮ',['ተገብረ','ገብሩ','አግበረ']),G('Passive of በልዐ','የበልዐ ተገብሮ',['ተበልዐ','በልዑ','አብልዐ']),G('Passive of ፈወሰ','የፈወሰ ተገብሮ',['ተፈወሰ','ፈወሱ','ፈዋሲ']),
  G('Passive of መርሐ','የመርሐ ተገብሮ',['ተመርሐ','መርሑ','መራሒ']),G('Passive of ፈነወ','የፈነወ ተገብሮ',['ተፈነወ','ፈነዉ','ፈናዊ']),G('Active of ተሐንጸ','የተሐንጸ ገቢር',['ሐነጸ','ሐናጺ','ሕንጻ'])]),
 quiz(('Noun as object','ስም እንደ ተሰሓቢ'),('When a noun ending in the 6th order becomes the object (ገቢር), its last letter changes to the 1st order: ቤት → ቤተ, ግብር → ግብረ.','በሳድስ የሚጨርስ ስም ተሰሓቢ (ገቢር) ሲሆን የመጨረሻ ፊደሉ ወደ ግእዝ ይለወጣል፦ ቤት → ቤተ፣ ግብር → ግብረ።'),[
  G('ቤት as object →','ቤት በገቢር →',['ቤተ','ቤቱ','ቤቲ']),G('ሥርዐት as object →','ሥርዐት በገቢር →',['ሥርዐተ','ሥርዐቱ','ሥርዐቶ']),G('መርዔት as object →','መርዔት በገቢር →',['መርዔተ','መርዔቱ','መርዔቶ'])])],
 [G('"ሀገር, ንብረት, ፍቅር" are read as…','"ሀገር፣ ንብረት፣ ፍቅር" የሚነበቡት…',['ግዱፍ','ሰያፍ']),G('Passive of ከሠተ','የከሠተ ተገብሮ',['ተከሥተ','ከሠቱ','ከሣቲ']),G('ግብር as object →','ግብር በገቢር →',['ግብረ','ግብሩ']),G('Passive verbs usually begin with…','የተገብሮ ግሦች በአብዛኛው የሚጀምሩት በ…',['ተ-','አ-','ይ-'])],
 notes(('Reading Ge\'ez correctly needs the right reading type; verbs change for active and passive.','ግእዝን በትክክል ለማንበብ ትክክለኛውን የንባብ ዓይነት ማወቅ ያስፈልጋል፤ ግሦች ለገቢርና ለተገብሮ ይለወጣሉ።'),
  [('Four reading types: ተንሣኢ, ወዳቂ, ሰያፍ, ግዱፍ.','አራቱ የንባብ ዓይነቶች፦ ተንሣኢ፣ ወዳቂ፣ ሰያፍ፣ ግዱፍ።'),('ሰያፍ and ግዱፍ happen on the 6th order (ሳድስ).','ሰያፍና ግዱፍ በሳድስ ፊደል ይከሰታሉ።'),('Passive verbs add ተ-: ገብረ → ተገብረ.','ተገብሮ ግሥ ተ- ይጨምራል፦ ገብረ → ተገብረ።'),('Object nouns change ሳድስ → ግእዝ: ቤት → ቤተ.','ተሰሓቢ ስም ሳድስን ወደ ግእዝ ይለውጣል፦ ቤት → ቤተ።')],
  [('ንባብ','reading','ማንበብ'),('ገቢር','active','ፈጻሚ'),('ተገብሮ','passive','ተቀባይ')],('Ge\'ez is the ancient language of Ethiopia\'s books.','ግእዝ የኢትዮጵያ መጻሕፍት ጥንታዊ ቋንቋ ነው።'),
  [(('Passive of ሠርዐ','የሠርዐ ተገብሮ'),'ተሠርዐ'),(('Which reading type is "ምድር"?','"ምድር" ምን ዓይነት ንባብ ነው?'),'ግዱፍ')],
  INN(('Ge\'ez reading club','የግእዝ ንባብ ክበብ'),('Ge\'ez manuscripts are a treasure, and people who can read them work in museums, churches and universities. Start a reading club that records short Ge\'ez readings on a phone.','የግእዝ ብራና መጻሕፍት ሀብት ናቸው፤ የሚያነቧቸው ሰዎች በሙዚየም፣ በቤተ ክርስቲያንና በዩኒቨርሲቲ ይሠራሉ። አጫጭር የግእዝ ንባቦችን በስልክ የሚቀዳ የንባብ ክበብ ጀምሩ።'),
   [('Choose 5 short sentences from your book.','ከመጽሐፋችሁ 5 አጫጭር ዓረፍተ ነገሮችን ምረጡ።'),('Mark the reading type of each word.','የእያንዳንዱን ቃል የንባብ ዓይነት ምልክት አድርጉ።'),('Practise with your teacher.','ከመምህራችሁ ጋር ተለማመዱ።'),('Record and share with younger students.','ቀድታችሁ ለትናንሽ ተማሪዎች አጋሩ።')])),
 sm(('Read Ge\'ez with the right reading type; verbs change for active and passive','ግእዝን በትክክለኛ ንባብ አንብቡ፤ ግሦች ለገቢርና ለተገብሮ ይለወጣሉ'),[('Four reading types','አራቱ ንባቦች'),('ሳድስ readings','የሳድስ ንባቦች'),('Passive ተ-','ተገብሮ ተ-'),('Object nouns','ተሰሓቢ ስም')]),'kinds of Ge\'ez reading and active and passive forms')

NUM=[('፩','አሐዱ',1),('፪','ክልኤቱ',2),('፫','ሠለስቱ',3),('፬','አርባዕቱ',4),('፭','ኀምስቱ',5),('፮','ስድስቱ',6),('፯','ሰብዐቱ',7),('፰','ሰመንቱ',8),('፱','ተስዐቱ',9),('፲','ዐሠርቱ',10)]
U(2,('Numerals','አኃዝ'),[
 vm(('Number words 1–10','የቁጥር ቃላት ከ1–10'),('Ge\'ez numbers: አሐዱ (1), ክልኤቱ (2), ሠለስቱ (3), አርባዕቱ (4), ኀምስቱ (5), ስድስቱ (6), ሰብዐቱ (7), ሰመንቱ (8), ተስዐቱ (9), ዐሠርቱ (10).','የግእዝ ቁጥሮች፦ አሐዱ (1)፣ ክልኤቱ (2)፣ ሠለስቱ (3)፣ አርባዕቱ (4)፣ ኀምስቱ (5)፣ ስድስቱ (6)፣ ሰብዐቱ (7)፣ ሰመንቱ (8)፣ ተስዐቱ (9)፣ ዐሠርቱ (10)።'),[[(w,f'{g} ({n})') for g,w,n in NUM[i:i+3]] for i in (0,3,6)]+[[(NUM[9][1],'፲ (10)'),('ዕሥራ','፳ (20)'),('ምእት','፻ (100)')]]),
 quiz(('Read the numeral','አኃዙን አንብቡ'),('Tens: ዕሥራ (20), ሠላሳ (30), አርብዓ (40), ኀምሳ (50), ስሳ (60), ሰብዓ (70), ሰማንያ (80), ተስዓ (90), ምእት (100). 81 = ሰማንያ ወአሐዱ.','አስሮች፦ ዕሥራ (20)፣ ሠላሳ (30)፣ አርብዓ (40)፣ ኀምሳ (50)፣ ስሳ (60)፣ ሰብዓ (70)፣ ሰማንያ (80)፣ ተስዓ (90)፣ ምእት (100)። 81 = ሰማንያ ወአሐዱ።'),[
  G('፬ in Ge\'ez words','፬ በግእዝ ቃል',['አርባዕቱ','ኀምስቱ','ሠለስቱ']),G('ሰብዐቱ is…','ሰብዐቱ…',['፯ (7)','፮ (6)','፰ (8)']),G('፶ in Ge\'ez words','፶ በግእዝ ቃል',['ኀምሳ','ስሳ','ዕሥራ']),
  G('ሰማንያ ወአሐዱ is…','ሰማንያ ወአሐዱ…',['81','18','80']),G('ምእት is…','ምእት…',['100','1000','10']),G('፳፭ = ?','፳፭ = ?',['ዕሥራ ወኀምስቱ','ኀምሳ ወክልኤቱ','ዕሥራ ወሠለስቱ'])]),
 order(('The dialogue','ተዋሥኦ'),('In the book a teacher meets a student on the way to school. Put the greeting in order.','በመጽሐፉ መምህር ወደ ትምህርት ቤት በሚሄድ መርድእ ይገናኛል። ሰላምታውን በቅደም ተከተል አስቀምጡ።'),('Tap in order.','በቅደም ተከተል ንኩ።'),[(('Order the dialogue:','ተዋሥኦውን አስቀምጡ፦'),['እፎ ኀደርከ መርድእ።','ፈጣሪ ይሰባሕ ወእፎ ኀደርከ መምህርየ።','አይቴ ተሐውር።','አነ አሐውር ኀበ ቤተ ትምህርት።'])])],
 [G('ክልኤቱ = ?','ክልኤቱ = ?',['2','3','10']),G('፲ in words','፲ በቃል',['ዐሠርቱ','ዕሥራ','ምእት']),G('፹ = ?','፹ = ?',['ሰማንያ','ሰብዓ','ተስዓ']),G('"እፎ ኀደርከ" is a…','"እፎ ኀደርከ"…',[('morning greeting','የጠዋት ሰላምታ'),('number','ቁጥር'),('farewell','የስንብት ቃል')])],
 notes(('Ge\'ez has its own number words and numerals, still used in calendars and books.','ግእዝ የራሱ የቁጥር ቃላትና አኃዞች አሉት፤ ዛሬም በቀን መቁጠሪያና በመጻሕፍት ያገለግላሉ።'),
  [('1–10: አሐዱ, ክልኤቱ, ሠለስቱ, አርባዕቱ, ኀምስቱ, ስድስቱ, ሰብዐቱ, ሰመንቱ, ተስዐቱ, ዐሠርቱ.','1–10፦ አሐዱ፣ ክልኤቱ፣ ሠለስቱ፣ አርባዕቱ፣ ኀምስቱ፣ ስድስቱ፣ ሰብዐቱ፣ ሰመንቱ፣ ተስዐቱ፣ ዐሠርቱ።'),('Tens: ዕሥራ, ሠላሳ, አርብዓ, ኀምሳ, ስሳ, ሰብዓ, ሰማንያ, ተስዓ; ምእት = 100.','አስሮች፦ ዕሥራ፣ ሠላሳ፣ አርብዓ፣ ኀምሳ፣ ስሳ፣ ሰብዓ፣ ሰማንያ፣ ተስዓ፤ ምእት = 100።'),('Join with ወ: ዕሥራ ወኀምስቱ = 25.','በ"ወ" አገናኙ፦ ዕሥራ ወኀምስቱ = 25።'),('Greeting: እፎ ኀደርከ — ፈጣሪ ይሰባሕ.','ሰላምታ፦ እፎ ኀደርከ — ፈጣሪ ይሰባሕ።')],
  [('አኃዝ','numeral','ቁጥር'),('ኈልቍ','counting','መቁጠር'),('ወ','and','እና')],('Count in Ge\'ez every morning!','በየጠዋቱ በግእዝ ቁጠሩ!'),
  [(('Say 1–5 in Ge\'ez','ከ1–5 በግእዝ በሉ'),'አሐዱ፣ ክልኤቱ፣ ሠለስቱ፣ አርባዕቱ፣ ኀምስቱ'),(('Write 30 in Ge\'ez numeral','30ን በግእዝ አኃዝ ጻፉ'),'፴')],
  INN(('Ge\'ez calendar maker','የግእዝ ቀን መቁጠሪያ ሠሪ'),('Calendars with Ge\'ez numerals are sold every New Year. Design a one-month calendar using Ge\'ez numerals and day names.','የግእዝ አኃዝ ያላቸው ቀን መቁጠሪያዎች በየዘመን መለወጫ ይሸጣሉ። በግእዝ አኃዝ የአንድ ወር ቀን መቁጠሪያ ንደፉ።'),
   [('Draw 30 boxes.','30 ሳጥኖችን ሳሉ።'),('Write ፩ to ፴ in the boxes.','ከ፩ እስከ ፴ በሳጥኖቹ ጻፉ።'),('Mark holidays.','በዓላትን ምልክት አድርጉ።'),('Decorate and give it to your family.','አስጊጡና ለቤተሰባችሁ ስጡ።')])),
 sm(('Ge\'ez numbers: words and numerals','የግእዝ ቁጥሮች፦ ቃላትና አኃዞች'),[('1 to 10','ከ1 እስከ 10'),('Tens','አስሮች'),('Joining with ወ','በ"ወ" ማገናኘት'),('Greetings','ሰላምታ')]),'Ge\'ez numerals')

U(3,('School','ቤተ ትምህርት'),[
 vm(VT,VTIP,[[('ቤተ ትምህርት',('school','ትምህርት ቤት')),('መምህር',('teacher','መምህር')),('መርድእ',('student','ተማሪ'))],[('መጽሐፍ',('book','መጽሐፍ')),('ብርዕ',('pen','እስክሪብቶ / ብዕር')),('መንበር',('chair, seat','ወንበር'))]]),
 quiz(('Pronouns','ተውላጠ ስሞች'),('አነ = I, አንተ = you (m), አንቲ = you (f), ውእቱ = he, ይእቲ = she, ንሕነ = we, ውእቶሙ = they.','አነ = እኔ፣ አንተ = አንተ፣ አንቲ = አንቺ፣ ውእቱ = እሱ፣ ይእቲ = እሷ፣ ንሕነ = እኛ፣ ውእቶሙ = እነሱ።'),[
  G('"አነ" means…','"አነ" ማለት…',[('I','እኔ'),('he','እሱ'),('we','እኛ')]),G('"ንሕነ" means…','"ንሕነ" ማለት…',[('we','እኛ'),('they','እነሱ'),('you','አንተ')]),G('"ይእቲ" means…','"ይእቲ" ማለት…',[('she','እሷ'),('he','እሱ'),('I','እኔ')]),
  G('"ውእቶሙ" means…','"ውእቶሙ" ማለት…',[('they','እነሱ'),('we','እኛ'),('she','እሷ')]),G('"አነ አሐውር ኀበ ቤተ ትምህርት" means…','"አነ አሐውር ኀበ ቤተ ትምህርት" ማለት…',[('I go to school','ወደ ትምህርት ቤት እሄዳለሁ'),('I read a book','መጽሐፍ አነባለሁ'),('He sleeps','ይተኛል')])]),
 quiz(('Possessive endings','የባለቤትነት ቅጥያዎች'),('Add an ending for "my, your, his": መምህርየ = my teacher, ቤትከ = your house, ቤቱ = his house.','"የእኔ፣ ያንተ፣ የእሱ" ለማለት ቅጥያ ጨምሩ፦ መምህርየ = መምህሬ፣ ቤትከ = ቤትህ፣ ቤቱ = ቤቱ።'),[
  G('"መምህርየ" means…','"መምህርየ" ማለት…',[('my teacher','መምህሬ'),('your teacher','መምህርህ'),('his teacher','መምህሩ')]),G('"my book" →','"መጽሐፌ" →',['መጽሐፍየ','መጽሐፉ','መጽሐፍከ']),G('"ክፍልየ" means…','"ክፍልየ" ማለት…',[('my class','ክፍሌ'),('your class','ክፍልህ'),('their class','ክፍላቸው')])])],
 [G('መርድእ = ?','መርድእ = ?',[('student','ተማሪ'),('teacher','መምህር')]),G('"ውእቱ" means…','"ውእቱ" ማለት…',[('he','እሱ'),('she','እሷ')]),G('"my house" in Ge\'ez','"ቤቴ" በግእዝ',['ቤትየ','ቤቱ','ቤትከ']),G('ብርዕ is used for…','ብርዕ የሚያገለግለው ለ…',[('writing','ለመጻፍ'),('eating','ለመብላት')])],
 notes(('We name school things and people in Ge\'ez and use pronouns and possessive endings.','የትምህርት ቤት ነገሮችንና ሰዎችን በግእዝ እንሰይማለን፤ ተውላጠ ስሞችንና የባለቤትነት ቅጥያዎችን እንጠቀማለን።'),
  [('School words: ቤተ ትምህርት, መምህር, መርድእ, መጽሐፍ, ብርዕ.','የትምህርት ቤት ቃላት፦ ቤተ ትምህርት፣ መምህር፣ መርድእ፣ መጽሐፍ፣ ብርዕ።'),('Pronouns: አነ, አንተ, አንቲ, ውእቱ, ይእቲ, ንሕነ, ውእቶሙ.','ተውላጠ ስሞች፦ አነ፣ አንተ፣ አንቲ፣ ውእቱ፣ ይእቲ፣ ንሕነ፣ ውእቶሙ።'),('Possessive: -የ (my), -ከ (your), -ሁ/-ቱ (his).','ባለቤትነት፦ -የ (የእኔ)፣ -ከ (ያንተ)፣ -ሁ/-ቱ (የእሱ)።'),('Sentence: አነ አሐውር ኀበ ቤተ ትምህርት.','ዓረፍተ ነገር፦ አነ አሐውር ኀበ ቤተ ትምህርት።')],
  [('መርድእ','student','ተማሪ'),('መምህር','teacher','መምህር'),('ብርዕ','pen','ብዕር')],('ብርዕ ይበቊዕ ለጽሒፍ — a pen is useful for writing.','ብርዕ ይበቊዕ ለጽሒፍ — ብዕር ለመጻፍ ይጠቅማል።'),
  [(('Say "I go to school" in Ge\'ez','"ወደ ትምህርት ቤት እሄዳለሁ" በግእዝ'),'አነ አሐውር ኀበ ቤተ ትምህርት'),(('"we" in Ge\'ez','"እኛ" በግእዝ'),'ንሕነ')],
  INN(('Ge\'ez label cards','የግእዝ ስም ካርዶች'),('Make Ge\'ez name cards for objects in your classroom; sell sets to other classes for a small price.','በክፍላችሁ ላሉ ዕቃዎች የግእዝ ስም ካርዶች ሥሩ፤ ለሌሎች ክፍሎች በትንሽ ዋጋ ሽጡ።'),
   [('List 10 classroom objects.','10 የክፍል ዕቃዎችን ዘርዝሩ።'),('Find their Ge\'ez names with your teacher.','የግእዝ ስማቸውን ከመምህራችሁ ጋር ፈልጉ።'),('Write neat cards.','ንጹህ ካርዶች ጻፉ።'),('Stick them on the objects.','በዕቃዎቹ ላይ ለጥፉ።')])),
 sm(('Name school things; use pronouns and "my, your, his"','የትምህርት ቤት ነገሮችን ሰይሙ፤ ተውላጠ ስምና ባለቤትነት'),[('School words','የትምህርት ቤት ቃላት'),('Pronouns','ተውላጠ ስሞች'),('Possessive endings','የባለቤትነት ቅጥያ'),('Sentences','ዓረፍተ ነገር')]),'school words, pronouns and possession')

U(4,('People and family','ውሉደ ሰብእ'),[
 vm(VT,VTIP,[[('አብ',('father','አባት')),('እም',('mother','እናት')),('እኍ',('brother','ወንድም'))],[('እኅት',('sister','እኅት')),('ወልድ',('son, child','ልጅ (ወንድ)')),('ወለት',('daughter','ልጅ (ሴት)'))],[('ብእሲ',('man','ወንድ ሰው')),('ብእሲት',('woman','ሴት')),('ፈጣሪ',('Creator','ፈጣሪ'))]]),
 quiz(('Fill in the family sentences','የቤተሰብ ዓረፍተ ነገሮችን አሟሉ'),('The book says: አብ ወእም መሠረተ ሰብአ ቤት እሙንቱ — father and mother are the foundation of the household.','መጽሐፉ፦ አብ ወእም መሠረተ ሰብአ ቤት እሙንቱ — አባትና እናት የቤተሰብ መሠረት ናቸው።'),[
  G('"አብ ወእም መሠረተ ሰብአ ቤት እሙንቱ" means…','"አብ ወእም መሠረተ ሰብአ ቤት እሙንቱ" ማለት…',[('Father and mother are the foundation of the home','አባትና እናት የቤተሰብ መሠረት ናቸው'),('Father goes to school','አባት ወደ ትምህርት ቤት ይሄዳል')]),
  G('___ goes to school with his sister.','___ ከእኅቱ ጋር ወደ ትምህርት ቤት ይሄዳል።',['እኍ','እም','አብ']),G('Opposite of ብእሲ','የብእሲ ተቃራኒ',['ብእሲት','ወልድ','አብ']),G('ውሉደ ሰብእ means…','ውሉደ ሰብእ ማለት…',[('human beings','የሰው ልጆች'),('wild animals','የዱር እንስሳት'),('food','ምግብ')])]),
 quiz(('Humans and other creatures','የሰው ልጅና ሌሎች ፍጥረታት'),('The reading says humans are thinking, wise beings; domestic animals help them carry loads and plough fields.','ምንባቡ የሰው ልጅ አሳቢና ጠቢብ ፍጥረት እንደሆነ፣ የቤት እንስሳት ጭነት በመሸከምና በማረስ እንደሚረዱት ይገልጻል።'),[
  G('How do domestic animals help people?','የቤት እንስሳት ሰዎችን እንዴት ይረዳሉ?',[('carry loads and plough','ጭነት በመሸከምና በማረስ'),('by writing books','መጽሐፍ በመጻፍ')]),G('What makes humans different?','የሰው ልጅን የሚለየው ምንድን ነው?',[('thinking and wisdom','ማሰብና ጥበብ'),('four legs','አራት እግር')])])],
 [G('እም = ?','እም = ?',[('mother','እናት'),('sister','እኅት')]),G('ወለት = ?','ወለት = ?',[('daughter','ሴት ልጅ'),('son','ወንድ ልጅ')]),G('Opposite of ብእሲት','የብእሲት ተቃራኒ',['ብእሲ','እኅት']),G('እኍ = ?','እኍ = ?',[('brother','ወንድም'),('father','አባት')])],
 notes(('We name family members in Ge\'ez and learn that humans are thinking beings who care for others.','የቤተሰብ አባላትን በግእዝ እንሰይማለን፤ የሰው ልጅ ሌሎችን የሚንከባከብ አሳቢ ፍጥረት መሆኑን እንማራለን።'),
  [('Family: አብ, እም, እኍ, እኅት, ወልድ, ወለት.','ቤተሰብ፦ አብ፣ እም፣ እኍ፣ እኅት፣ ወልድ፣ ወለት።'),('ብእሲ (man) ↔ ብእሲት (woman).','ብእሲ (ወንድ) ↔ ብእሲት (ሴት)።'),('Father and mother are the foundation of the home.','አባትና እናት የቤተሰብ መሠረት ናቸው።'),('Humans are wise; animals help them.','የሰው ልጅ ጠቢብ ነው፤ እንስሳት ይረዱታል።')],
  [('ውሉደ ሰብእ','human beings','የሰው ልጆች'),('ብእሲ','man','ወንድ'),('ብእሲት','woman','ሴት')],('Respect father and mother!','አባትና እናትን አክብሩ!'),
  [(('"father" and "mother" in Ge\'ez','"አባት" እና "እናት" በግእዝ'),'አብ፣ እም'),(('Opposite of ብእሲ','የብእሲ ተቃራኒ'),'ብእሲት')],
  INN(('Family tree in Ge\'ez','የቤተሰብ ዛፍ በግእዝ'),('Draw your family tree and label it in Ge\'ez and Amharic. Family-history books and frames are popular gifts.','የቤተሰባችሁን ዛፍ ሳሉና በግእዝና በአማርኛ ሰይሙት። የቤተሰብ ታሪክ መጻሕፍትና ፍሬሞች ተወዳጅ ስጦታዎች ናቸው።'),
   [('Draw 3 generations.','3 ትውልዶችን ሳሉ።'),('Label each person: አብ, እም, እኍ…','እያንዳንዱን ሰይሙ፦ አብ፣ እም፣ እኍ…'),('Add Amharic names.','የአማርኛ ስሞችን ጨምሩ።'),('Frame it as a gift for grandparents.','ለአያቶች ስጦታ አድርጋችሁ ፍሬም አድርጉት።')])),
 sm(('Name family members in Ge\'ez','የቤተሰብ አባላትን በግእዝ ሰይሙ'),[('Family words','የቤተሰብ ቃላት'),('Man and woman','ወንድና ሴት'),('The home\'s foundation','የቤት መሠረት'),('Humans','የሰው ልጅ')]),'human beings and family')

U(5,('Wild animals','እንስሳ ገዳም'),[
 vm(VT,VTIP,[[('አንበሳ',('lion','አንበሳ')),('ነምር',('leopard','ነብር')),('ዝእብ',('hyena','ጅብ'))],[('ሆባይ',('baboon/monkey','ዝንጀሮ')),('ዖፍ',('bird','ወፍ')),('ገዳም',('wilderness','ዱር'))]]),
 quiz(('Plurals of animals','የእንስሳት ብዙ ቁጥር'),('Ge\'ez often makes plurals by changing the inside of the word: አንበሳ → አናብስት, ነምር → አናምርት, ሆባይ → ሆባያት.','ግእዝ ብዙ ጊዜ ብዙ ቁጥርን የሚሠራው የቃሉን ውስጥ በመለወጥ ነው፦ አንበሳ → አናብስት፣ ነምር → አናምርት፣ ሆባይ → ሆባያት።'),[
  G('Plural of አንበሳ','የአንበሳ ብዙ ቁጥር',['አናብስት','አንበሳት','አንበሶች']),G('Plural of ነምር','የነምር ብዙ ቁጥር',['አናምርት','ነምሮች','ነምራት']),G('Plural of ሆባይ','የሆባይ ብዙ ቁጥር',['ሆባያት','ሆባዮች','አሆብይ']),G('Plural of ዝእብ','የዝእብ ብዙ ቁጥር',['አዝእብት','ዝእቦች','ዝእባት'])]),
 quiz(('Opposites','ተቃራኒ ቃላት'),('From the book: ብዙኅ ↔ ዋሕድ, ጽድቅ ↔ ሐሰት, ክብር ↔ ሐሣር, ምሴት ↔ ነግህ, መዓልት ↔ ሌሊት, ጸብእ ↔ ፍቅር.','ከመጽሐፉ፦ ብዙኅ ↔ ዋሕድ፣ ጽድቅ ↔ ሐሰት፣ ክብር ↔ ሐሣር፣ ምሴት ↔ ነግህ፣ መዓልት ↔ ሌሊት፣ ጸብእ ↔ ፍቅር።'),[
  G('Opposite of ጽድቅ (truth)','የጽድቅ (እውነት) ተቃራኒ',['ሐሰት','ክብር','ፍቅር']),G('Opposite of መዓልት (day)','የመዓልት (ቀን) ተቃራኒ',['ሌሊት','ነግህ','ምሴት']),G('Opposite of ጸብእ (fight)','የጸብእ (ጠብ) ተቃራኒ',['ፍቅር','ሞት','ሐሣር']),G('Opposite of ብዙኅ (many)','የብዙኅ (ብዙ) ተቃራኒ',['ዋሕድ','ክብር','ነግህ'])]),
 quiz(('The hyena story','የዝእብ ታሪክ'),('In the reading a father and son meet hyenas at night. Hyenas live in holes, hide by day and come out in the evening to find food.','በምንባቡ አባትና ልጅ በሌሊት ጅቦችን ያገኛሉ። ጅቦች በጉድጓድ ይኖራሉ፤ ቀን ይደበቃሉ፤ ምግብ ለመፈለግ ማታ ይወጣሉ።'),[
  G('When does the hyena come out?','ጅብ መቼ ይወጣል?',[('in the evening','ማታ'),('at noon','ቀትር')]),G('Where does the hyena hide by day?','ጅብ ቀን የት ይደበቃል?',[('in a hole','በጉድጓድ'),('in a tree top','በዛፍ ጫፍ')])])],
 [G('ዝእብ = ?','ዝእብ = ?',[('hyena','ጅብ'),('lion','አንበሳ')]),G('Plural of አንበሳ','የአንበሳ ብዙ ቁጥር',['አናብስት','አንበሶች']),G('Opposite of ሌሊት','የሌሊት ተቃራኒ',['መዓልት','ምሴት']),G('ነምር = ?','ነምር = ?',[('leopard','ነብር'),('monkey','ዝንጀሮ')])],
 notes(('We name wild animals in Ge\'ez, form inner plurals and learn opposites.','የዱር እንስሳትን በግእዝ እንሰይማለን፤ ብዙ ቁጥርና ተቃራኒ ቃላትን እንማራለን።'),
  [('Animals: አንበሳ, ነምር, ዝእብ, ሆባይ, ዖፍ.','እንስሳት፦ አንበሳ፣ ነምር፣ ዝእብ፣ ሆባይ፣ ዖፍ።'),('Inner plurals: አንበሳ → አናብስት, ነምር → አናምርት.','ብዙ ቁጥር፦ አንበሳ → አናብስት፣ ነምር → አናምርት።'),('Opposites: ጽድቅ ↔ ሐሰት, መዓልት ↔ ሌሊት.','ተቃራኒ፦ ጽድቅ ↔ ሐሰት፣ መዓልት ↔ ሌሊት።'),('Hyenas hide by day and hunt in the evening.','ጅቦች ቀን ይደበቃሉ፤ ማታ ያድናሉ።')],
  [('እንስሳ ገዳም','wild animals','የዱር እንስሳት'),('ዋሕድ','one, single','አንድ'),('ብዙኅ','many','ብዙ')],('ጽድቅ ↔ ሐሰት: always choose truth.','ጽድቅ ↔ ሐሰት፦ ሁልጊዜ እውነትን ምረጡ።'),
  [(('Plural of ሆባይ','የሆባይ ብዙ ቁጥር'),'ሆባያት'),(('"hyena" in Ge\'ez','"ጅብ" በግእዝ'),'ዝእብ')],
  INN(('Wildlife flashcards','የዱር እንስሳት ካርዶች'),('Make Ge\'ez–Amharic–English wildlife flashcards that tourists and students could buy at a park.','ጎብኚዎችና ተማሪዎች በፓርክ ሊገዟቸው የሚችሉ በግእዝ–አማርኛ–እንግሊዝኛ የዱር እንስሳት ካርዶች ሥሩ።'),
   [('Draw 8 animals.','8 እንስሳትን ሳሉ።'),('Write the name in 3 languages.','ስሙን በ3 ቋንቋ ጻፉ።'),('Add the Ge\'ez plural.','የግእዝ ብዙ ቁጥሩን ጨምሩ።'),('Play a memory game with friends.','ከጓደኞች ጋር የማስታወስ ጨዋታ ተጫወቱ።')])),
 sm(('Name wild animals; inner plurals and opposites','የዱር እንስሳትን ሰይሙ፤ ብዙ ቁጥርና ተቃራኒ'),[('Animal words','የእንስሳት ቃላት'),('Plurals','ብዙ ቁጥር'),('Opposites','ተቃራኒ'),('The hyena story','የዝእብ ታሪክ')]),'wild animals, plurals and opposites')

U(6,('Food and drink','ምግብ ወስቴ'),[
 vm(VT,VTIP,[[('ምግብ',('food','ምግብ')),('ስቴ',('drink','መጠጥ')),('ማይ',('water','ውኃ'))],[('ኅብስት',('bread','ዳቦ / እንጀራ')),('ሐሊብ',('milk','ወተት')),('መዓር',('honey','ማር'))]]),
 quiz(('Plurals','ብዙ ቁጥር'),('From the book: ምግብ → ምግባት, ስቴ → ስቴያት, ፍጥረት → ፍጥረታት, ከልብ → ከለባት, አድግ → አእዱግ.','ከመጽሐፉ፦ ምግብ → ምግባት፣ ስቴ → ስቴያት፣ ፍጥረት → ፍጥረታት፣ ከልብ → ከለባት፣ አድግ → አእዱግ።'),[
  G('Plural of ምግብ','የምግብ ብዙ ቁጥር',['ምግባት','ምግቦች','አምግብ']),G('Plural of ስቴ','የስቴ ብዙ ቁጥር',['ስቴያት','ስቴዎች','አስቴ']),G('Plural of ፍጥረት','የፍጥረት ብዙ ቁጥር',['ፍጥረታት','ፍጥረቶች','አፍጥር']),G('Plural of አድግ (donkey)','የአድግ (አህያ) ብዙ ቁጥር',['አእዱግ','አድጎች','አድጋት'])]),
 quiz(('Food sentences','የምግብ ዓረፍተ ነገሮች'),('Read each Ge\'ez sentence and choose its meaning.','እያንዳንዱን የግእዝ ዓረፍተ ነገር አንብቡና ትርጉሙን ምረጡ።'),[
  G('"ማይ ሕይወት ውእቱ" means…','"ማይ ሕይወት ውእቱ" ማለት…',[('Water is life','ውኃ ሕይወት ነው'),('Bread is sweet','ዳቦ ጣፋጭ ነው')]),G('"ኅብስት" is…','"ኅብስት"…',[('bread','ዳቦ'),('water','ውኃ')])])],
 [G('ማይ = ?','ማይ = ?',[('water','ውኃ'),('milk','ወተት')]),G('Plural of ምግብ','የምግብ ብዙ ቁጥር',['ምግባት','ምግቦች']),G('መዓር = ?','መዓር = ?',[('honey','ማር'),('salt','ጨው')]),G('ስቴ = ?','ስቴ = ?',[('drink','መጠጥ'),('food','ምግብ')])],
 notes(('We name food and drink in Ge\'ez and make their plurals.','ምግብና መጠጥን በግእዝ እንሰይማለን፤ ብዙ ቁጥራቸውን እንሠራለን።'),
  [('Food words: ምግብ, ኅብስት, ሐሊብ, መዓር.','የምግብ ቃላት፦ ምግብ፣ ኅብስት፣ ሐሊብ፣ መዓር።'),('Drinks: ስቴ, ማይ.','መጠጦች፦ ስቴ፣ ማይ።'),('Plurals with -ት/-ያት: ምግባት, ስቴያት.','ብዙ ቁጥር በ-ት/-ያት፦ ምግባት፣ ስቴያት።'),('Water is life: ማይ ሕይወት ውእቱ.','ማይ ሕይወት ውእቱ።')],
  [('ምግብ','food','ምግብ'),('ስቴ','drink','መጠጥ'),('ኅብስት','bread','ዳቦ')],('ማይ ሕይወት ውእቱ — water is life.','ማይ ሕይወት ውእቱ — ውኃ ሕይወት ነው።'),
  [(('"milk" in Ge\'ez','"ወተት" በግእዝ'),'ሐሊብ'),(('Plural of ስቴ','የስቴ ብዙ ቁጥር'),'ስቴያት')],
  INN(('Bilingual menu','ባለ ሁለት ቋንቋ ሜኑ'),('Cafés near churches and tourist sites like special menus. Write a small menu in Ge\'ez and Amharic with prices.','በአብያተ ክርስቲያናትና በቱሪስት ቦታዎች አጠገብ ያሉ ካፌዎች ልዩ ሜኑ ይወዳሉ። በግእዝና በአማርኛ ዋጋ ያለው ትንሽ ሜኑ ጻፉ።'),
   [('Choose 5 foods and drinks.','5 ምግቦችንና መጠጦችን ምረጡ።'),('Write the Ge\'ez and Amharic names.','የግእዝና የአማርኛ ስማቸውን ጻፉ።'),('Add prices with Ge\'ez numerals.','በግእዝ አኃዝ ዋጋ ጨምሩ።'),('Show it to a local café owner.','ለአካባቢው የካፌ ባለቤት አሳዩ።')])),
 sm(('Name food and drink; make plurals','ምግብና መጠጥ ሰይሙ፤ ብዙ ቁጥር ሥሩ'),[('Food','ምግብ'),('Drinks','መጠጥ'),('Plurals','ብዙ ቁጥር'),('Water is life','ውኃ ሕይወት ነው')]),'food and drink')

U(7,('Clothes','አልባሳት'),[
 vm(VT,VTIP,[[('ልብስ',('clothes','ልብስ')),('ዐይን',('eye','ዓይን')),('አንፍ',('nose','አፍንጫ'))],[('ክሳድ',('neck','አንገት')),('ስን',('tooth','ጥርስ')),('ርእስ',('head','ራስ'))]]),
 quiz(('Colours and sentences','ቀለማትና ዓረፍተ ነገሮች'),('ፀዓዳ = white, ጸሊም = black, ቀይሕ = red. The book example: ፀዓዳ ልብስ ሀለወኒ — I have white clothes.','ፀዓዳ = ነጭ፣ ጸሊም = ጥቁር፣ ቀይሕ = ቀይ። የመጽሐፉ ምሳሌ፦ ፀዓዳ ልብስ ሀለወኒ — ነጭ ልብስ አለኝ።'),[
  G('"ፀዓዳ ልብስ ሀለወኒ" means…','"ፀዓዳ ልብስ ሀለወኒ" ማለት…',[('I have white clothes','ነጭ ልብስ አለኝ'),('I wash my face','ፊቴን እታጠባለሁ')]),G('ፀዓዳ = ?','ፀዓዳ = ?',[('white','ነጭ'),('black','ጥቁር'),('red','ቀይ')]),G('ጸሊም = ?','ጸሊም = ?',[('black','ጥቁር'),('white','ነጭ'),('green','አረንጓዴ')]),
  G('"አልባሳት" is the plural of…','"አልባሳት" የ… ብዙ ቁጥር ነው',['ልብስ','ርእስ','ዐይን'])]),
 quiz(('Clothes and the body','ልብስና አካል'),('Clothes (አልባሳት) cover and protect the body (ክዳነ አካል).','አልባሳት ሰውነትን ይሸፍናሉ፣ ይጠብቃሉ (ክዳነ አካል)።'),[
  G('Clothes are for…','ልብስ የሚያገለግለው…',[('covering and protecting the body','ሰውነትን ለመሸፈንና ለመጠበቅ'),('eating','ለመብላት')]),G('We see with our…','የምናየው በ…',['ዐይን','አንፍ','ስን']),G('We smell with our…','የምናሸተው በ…',['አንፍ','ክሳድ','ዐይን'])])],
 [G('ርእስ = ?','ርእስ = ?',[('head','ራስ'),('neck','አንገት')]),G('ፀዓዳ = ?','ፀዓዳ = ?',[('white','ነጭ'),('black','ጥቁር')]),G('Plural of ልብስ','የልብስ ብዙ ቁጥር',['አልባሳት','ልብሶች']),G('ስን = ?','ስን = ?',[('tooth','ጥርስ'),('eye','ዓይን')])],
 notes(('We name clothes, colours and body parts in Ge\'ez.','ልብሶችን፣ ቀለማትንና የአካል ክፍሎችን በግእዝ እንሰይማለን።'),
  [('ልብስ → አልባሳት (plural).','ልብስ → አልባሳት (ብዙ ቁጥር)።'),('Body: ርእስ, ዐይን, አንፍ, ክሳድ, ስን.','አካል፦ ርእስ፣ ዐይን፣ አንፍ፣ ክሳድ፣ ስን።'),('Colours: ፀዓዳ, ጸሊም, ቀይሕ.','ቀለማት፦ ፀዓዳ፣ ጸሊም፣ ቀይሕ።'),('ፀዓዳ ልብስ ሀለወኒ = I have white clothes.','ፀዓዳ ልብስ ሀለወኒ = ነጭ ልብስ አለኝ።')],
  [('ልብስ','clothes','ልብስ'),('ፀዓዳ','white','ነጭ'),('ርእስ','head','ራስ')],('Clean clothes, healthy body.','ንጹህ ልብስ፣ ጤናማ ሰውነት።'),
  [(('"eye" in Ge\'ez','"ዓይን" በግእዝ'),'ዐይን'),(('Meaning of "ጸሊም"','የ"ጸሊም" ትርጉም'),'ጥቁር')],
  INN(('Traditional clothes design','የባህል ልብስ ንድፍ'),('Ethiopian traditional clothes (ጥበብ) are a big business. Design a scarf pattern with a Ge\'ez word woven in, and describe it in Ge\'ez colours.','የኢትዮጵያ የባህል ልብስ (ጥበብ) ትልቅ ሥራ ነው። የግእዝ ቃል የተሸመነበት የሻርፕ ንድፍ ሥሩና በግእዝ የቀለም ስሞች ግለጹት።'),
   [('Draw a scarf with a border pattern.','ጥለት ያለው ሻርፕ ሳሉ።'),('Choose 3 colours and name them in Ge\'ez.','3 ቀለማትን ምረጡና በግእዝ ሰይሙ።'),('Add a Ge\'ez word like ፍቅር (love).','እንደ ፍቅር ያለ የግእዝ ቃል ጨምሩ።'),('Show it to a local weaver.','ለአካባቢው ሸማኔ አሳዩ።')])),
 sm(('Name clothes, colours and body parts','ልብሶችን፣ ቀለማትንና የአካል ክፍሎችን ሰይሙ'),[('Clothes','ልብስ'),('Body parts','የአካል ክፍሎች'),('Colours','ቀለማት'),('Sentences','ዓረፍተ ነገር')]),'clothes and the body')

U(8,('Times and seasons','ጊዜያት'),[
 vm(VT,VTIP,[[('ዕለት',('day (24 hours)','ቀን (24 ሰዓት)')),('ሳምንት',('week (7 days)','ሳምንት (7 ቀን)')),('ወርኅ',('month (30 days)','ወር (30 ቀን)'))],[('ዓመት',('year','ዓመት')),('ነግህ',('morning','ጠዋት')),('ምሴት',('evening','ማታ'))]]),
 quiz(('Same meaning','ተመሳሳይ ቃላት'),('From the book: ሳብዕት = ሱባዔ (a week of seven), አመ = ጊዜ (time, when), ዮም = ይእዜ (today, now).','ከመጽሐፉ፦ ሳብዕት = ሱባዔ፣ አመ = ጊዜ፣ ዮም = ይእዜ።'),[
  G('Same as ሱባዔ','ከሱባዔ ጋር ተመሳሳይ',['ሳብዕት','ዓመት','ሌሊት']),G('Same as ጊዜ','ከጊዜ ጋር ተመሳሳይ',['አመ','ወርኅ','ነግህ']),G('Same as ዮም','ከዮም ጋር ተመሳሳይ',['ይእዜ','ምሴት','ዓመት'])]),
 quiz(('Counting time','ጊዜን መቁጠር'),('፩ ዕለት = ፳፬ ሰዓታት, ሳምንት = ፯ ዕለታት, ወርኅ = ፴ ዕለታት, ዓመት = ፫፻፷፭ ዕለታት.','፩ ዕለት = ፳፬ ሰዓታት፣ ሳምንት = ፯ ዕለታት፣ ወርኅ = ፴ ዕለታት፣ ዓመት = ፫፻፷፭ ዕለታት።'),[
  G('One ዕለት has how many hours?','አንድ ዕለት ስንት ሰዓት አለው?',['፳፬ (24)','፲፪ (12)','፴ (30)']),G('One ሳምንት has…','አንድ ሳምንት…',['፯ ዕለታት','፲ ዕለታት','፴ ዕለታት']),G('One ወርኅ (Ethiopian month) has…','አንድ ወርኅ…',['፴ ዕለታት','፯ ዕለታት','፳፬ ዕለታት']),G('Opposite of ነግህ (morning)','የነግህ ተቃራኒ',['ምሴት','ዕለት','ዓመት'])])],
 [G('ዓመት = ?','ዓመት = ?',[('year','ዓመት'),('week','ሳምንት')]),G('Same as ይእዜ','ከይእዜ ጋር ተመሳሳይ',['ዮም','አመ']),G('ሳምንት = how many days?','ሳምንት ስንት ቀን?',['፯','፴']),G('ምሴት = ?','ምሴት = ?',[('evening','ማታ'),('morning','ጠዋት')])],
 notes(('We name units of time in Ge\'ez and count days, weeks, months and years.','የጊዜ ክፍሎችን በግእዝ እንሰይማለን፤ ቀናትን፣ ሳምንታትን፣ ወራትንና ዓመታትን እንቆጥራለን።'),
  [('ዕለት = 24 hours; ሳምንት = 7 days.','ዕለት = 24 ሰዓት፤ ሳምንት = 7 ቀን።'),('ወርኅ = 30 days; ዓመት = 365 days.','ወርኅ = 30 ቀን፤ ዓመት = 365 ቀን።'),('ነግህ (morning) ↔ ምሴት (evening).','ነግህ ↔ ምሴት።'),('Synonyms: ሳብዕት = ሱባዔ, ዮም = ይእዜ.','ተመሳሳይ፦ ሳብዕት = ሱባዔ፣ ዮም = ይእዜ።')],
  [('ጊዜ','time','ጊዜ'),('ዕለት','day','ቀን'),('ዓመት','year','ዓመት')],('Use every ዕለት well!','እያንዳንዱን ዕለት በአግባቡ ተጠቀሙበት!'),
  [(('How many days in ወርኅ?','ወርኅ ስንት ቀን አለው?'),'፴ (30)'),(('"today" in Ge\'ez','"ዛሬ" በግእዝ'),'ዮም')],
  INN(('Ge\'ez daily planner','የግእዝ የዕለት ዕቅድ'),('Make a weekly planner with Ge\'ez time words and numerals that you could sell to classmates.','የግእዝ የጊዜ ቃላትና አኃዞች ያሉት ሳምንታዊ ዕቅድ ሥሩ፤ ለክፍል ጓደኞች ልትሸጡት ትችላላችሁ።'),
   [('Draw 7 columns for the days.','ለቀናት 7 ዓምዶች ሳሉ።'),('Label ነግህ and ምሴት rows.','የነግህና የምሴት ረድፎችን ሰይሙ።'),('Number the days with Ge\'ez numerals.','ቀናቱን በግእዝ አኃዝ ቁጠሩ።'),('Fill in your study plan.','የጥናት ዕቅዳችሁን ሙሉ።')])),
 sm(('Count time in Ge\'ez: day, week, month, year','ጊዜን በግእዝ ቁጠሩ፦ ዕለት፣ ሳምንት፣ ወርኅ፣ ዓመት'),[('Day and week','ዕለትና ሳምንት'),('Month and year','ወርኅና ዓመት'),('Morning and evening','ነግህና ምሴት'),('Synonyms','ተመሳሳይ ቃላት')]),'times and units of time')

U(9,('Cleanliness','ንጽሕና'),[
 vm(('Opposites','ተቃራኒ ቃላት'),('Match each Ge\'ez word with its opposite from the book.','እያንዳንዱን የግእዝ ቃል ከመጽሐፉ ካለው ተቃራኒው ጋር አዛምዱ።'),[[('ርስሐት (dirt)','ንጽሐት (cleanliness)'),('ፍሥሓ (joy)','ሐዘን (sadness)'),('ጥዒና (health)','ሕመም (sickness)')],[('ሕይወት (life)','ሞት (death)'),('ልቡና (wisdom)','እንባዜ (foolishness)'),('ክብር (honour)','ሐሣር (shame)')]]),
 quiz(('Personal cleanliness','የግል ንጽሕና'),('The reading says cleanliness is from head to foot, and water has the biggest place. Dirty clothes cause disease; the one who washes regularly stays healthy and lives long.','ምንባቡ ንጽሕና ከራስ እስከ እግር እንደሆነና ውኃ ትልቅ ቦታ እንዳለው ይገልጻል። ቆሻሻ ልብስ በሽታ ያመጣል፤ በየጊዜው የሚታጠብ ጤናማ ይሆናል፤ ዕድሜው ይረዝማል።'),[
  G('Cleanliness is from…','ንጽሕና ከ… ነው',[('head to foot','ከራስ እስከ እግር'),('the hands only','ከእጅ ብቻ')]),G('What is most important for cleanliness?','ለንጽሕና በጣም አስፈላጊው?',[('water','ውኃ'),('fire','እሳት')]),
  G('Dirty clothes can cause…','ቆሻሻ ልብስ የሚያመጣው…',[('disease','በሽታ'),('long life','ረጅም ዕድሜ')]),G('ጥዒና means…','ጥዒና ማለት…',[('health','ጤና'),('sickness','ሕመም')])]),
 sortm(('Clean habit or not?','የንጽሕና ልማድ ነው?'),('Keep your body, home and surroundings clean.','ሰውነታችሁን፣ ቤታችሁንና አካባቢያችሁን ንጹህ አድርጉ።'),[('🧼 ንጽሐት','🧼 ንጽሐት'),('🟤 ርስሐት','🟤 ርስሐት')],[(('Washing hands with water and soap','እጅን በውኃና በሳሙና መታጠብ'),0),(('Washing clothes often','ልብስን በየጊዜው ማጠብ'),0),(('Sweeping the house','ቤትን መጥረግ'),0),(('Wearing dirty clothes for weeks','ቆሻሻ ልብስ ለሳምንታት መልበስ'),1),(('Throwing waste near the house','ቆሻሻን ከቤት አጠገብ መጣል'),1)])],
 [G('Opposite of ርስሐት','የርስሐት ተቃራኒ',['ንጽሐት','ሕመም']),G('Opposite of ጥዒና','የጥዒና ተቃራኒ',['ሕመም','ፍሥሓ']),G('ፍሥሓ = ?','ፍሥሓ = ?',[('joy','ደስታ'),('sadness','ሐዘን')]),G('Cleanliness needs mainly…','ንጽሕና በዋናነት የሚያስፈልገው…',[('water','ውኃ'),('salt','ጨው')])],
 notes(('Cleanliness of body, home and surroundings brings health and joy.','የሰውነት፣ የቤትና የአካባቢ ንጽሕና ጤናና ደስታ ያመጣል።'),
  [('Personal cleanliness: from head to foot, with water.','የግል ንጽሕና፦ ከራስ እስከ እግር በውኃ።'),('Wash clothes regularly to avoid disease.','በሽታን ለመከላከል ልብስን በየጊዜው እጠቡ።'),('Opposites: ርስሐት ↔ ንጽሐት, ጥዒና ↔ ሕመም.','ተቃራኒ፦ ርስሐት ↔ ንጽሐት፣ ጥዒና ↔ ሕመም።'),('More: ፍሥሓ ↔ ሐዘን, ሕይወት ↔ ሞት.','ሌሎች፦ ፍሥሓ ↔ ሐዘን፣ ሕይወት ↔ ሞት።')],
  [('ንጽሕና','cleanliness','ንጽህና'),('ጥዒና','health','ጤና'),('ርስሐት','dirt','ቆሻሻ')],('ንጽሕና ጥዒና ውእቱ — cleanliness is health.','ንጽሕና ጥዒና ውእቱ — ንጽህና ጤና ነው።'),
  [(('Opposite of ሕይወት','የሕይወት ተቃራኒ'),'ሞት'),(('"health" in Ge\'ez','"ጤና" በግእዝ'),'ጥዒና')],
  INN(('Soap-making club','የሳሙና መሥሪያ ክበብ'),('Simple soap-making is a small business in many towns. With a trained adult, learn how local soap is made and design a Ge\'ez–Amharic label.','ቀላል የሳሙና ሥራ በብዙ ከተሞች ትንሽ ሥራ ነው። ከሰለጠነ አዋቂ ጋር የአካባቢ ሳሙና እንዴት እንደሚሠራ ተማሩና በግእዝና በአማርኛ መለያ ንደፉ።'),
   [('Visit a local soap maker with an adult.','ከአዋቂ ጋር የአካባቢ ሳሙና ሠሪን ጎብኙ።'),('Write the steps you saw.','ያያችሁትን ደረጃዎች ጻፉ።'),('Design a label: ንጽሐት = cleanliness.','መለያ ንደፉ፦ ንጽሐት።'),('Plan a price and a name.','ዋጋና ስም አቅዱ።')])),
 sm(('Cleanliness brings health and joy','ንጽሕና ጤናና ደስታ ያመጣል'),[('Head to foot','ከራስ እስከ እግር'),('Clean clothes','ንጹህ ልብስ'),('Dirt and cleanliness','ቆሻሻና ንጽህና'),('More opposites','ሌሎች ተቃራኒዎች')]),'personal, home and environmental cleanliness')

U(10,('Directions','መኣዝን'),[
 vm(('Opposite directions','ተቃራኒ አቅጣጫዎች'),('Match each direction with its opposite (from the book).','እያንዳንዱን አቅጣጫ ከተቃራኒው ጋር አዛምዱ (ከመጽሐፉ)።'),[[('ምሥራቅ (east)','ምዕራብ (west)'),('ሰሜን (north)','ደቡብ (south)'),('መስዕ','አዜብ')],[('ምእታው (sunset)','ሙፃእ (sunrise)'),('ሊባ','ባሕር'),('ትዕይንት','ጰራልዩ')]]),
 quiz(('Where is it?','የት ነው?'),('The book: ማእዘን ብሂል ዘያርኢ ወያሌቡ አንጻረ — a direction is what shows and tells which way. መስዕ is between north and east.','መጽሐፉ፦ ማእዘን ብሂል ዘያርኢ ወያሌቡ አንጻረ — አቅጣጫ ወደ የት እንደሆነ የሚያሳይ ነው። መስዕ በሰሜንና በምሥራቅ መካከል ይገኛል።'),[
  G('መስዕ is between…','መስዕ የሚገኘው በ…',[('north and east','ሰሜንና ምሥራቅ መካከል'),('south and west','ደቡብና ምዕራብ መካከል')]),G('The sun rises in the…','ፀሐይ የምትወጣው በ…',['ምሥራቅ','ምዕራብ','ሰሜን']),
  G('Opposite of ሰሜን','የሰሜን ተቃራኒ',['ደቡብ','ምሥራቅ','መስዕ']),G('ምእታው means…','ምእታው ማለት…',[('sunset (west)','ፀሐይ መግቢያ'),('sunrise','ፀሐይ መውጫ')])]),
 order(('Greeting dialogue','የሰላምታ ተዋሥኦ'),('From the book\'s dialogue between teacher and student.','በመምህርና በመርድእ መካከል ካለው የመጽሐፉ ተዋሥኦ።'),('Tap in order.','በቅደም ተከተል ንኩ።'),[(('Order:','አስቀምጡ፦'),['ሰላም ለከ መርድእ።','ወሰላም ለከ መምህር።','ታአምርኑ በእንተ ማእዘን።','እዎ ኣአምር።'])])],
 [G('Opposite of ምሥራቅ','የምሥራቅ ተቃራኒ',['ምዕራብ','ደቡብ']),G('Opposite of መስዕ','የመስዕ ተቃራኒ',['አዜብ','ሊባ']),G('"ሰላም ለከ" is a…','"ሰላም ለከ"…',[('greeting','ሰላምታ'),('direction','አቅጣጫ')]),G('Sunrise in Ge\'ez','"ፀሐይ መውጫ" በግእዝ',['ሙፃእ','ምእታው'])],
 notes(('Directions help us find our way; Ge\'ez has its own direction words.','አቅጣጫዎች መንገዳችንን እንድናገኝ ይረዱናል፤ ግእዝ የራሱ የአቅጣጫ ቃላት አሉት።'),
  [('ምሥራቅ ↔ ምዕራብ, ሰሜን ↔ ደቡብ.','ምሥራቅ ↔ ምዕራብ፣ ሰሜን ↔ ደቡብ።'),('መስዕ (between north and east) ↔ አዜብ.','መስዕ (በሰሜንና በምሥራቅ መካከል) ↔ አዜብ።'),('ሙፃእ (sunrise) ↔ ምእታው (sunset).','ሙፃእ ↔ ምእታው።'),('Greeting: ሰላም ለከ — ወሰላም ለከ.','ሰላምታ፦ ሰላም ለከ — ወሰላም ለከ።')],
  [('ማእዘን','direction','አቅጣጫ'),('ሙፃእ','sunrise','ፀሐይ መውጫ'),('ምእታው','sunset','ፀሐይ መግቢያ')],('Find the sunrise, find the east!','ፀሐይ መውጫውን ፈልጉ፣ ምሥራቅን ታገኛላችሁ!'),
  [(('Opposite of ሊባ','የሊባ ተቃራኒ'),'ባሕር'),(('Reply to "ሰላም ለከ"','ለ"ሰላም ለከ" መልስ'),'ወሰላም ለከ')],
  INN(('Ge\'ez compass rose','የግእዝ የአቅጣጫ ጠቋሚ'),('Make a wooden or cardboard compass rose with Ge\'ez direction names for your school garden or a church compound.','ለትምህርት ቤታችሁ የአትክልት ቦታ የግእዝ የአቅጣጫ ስሞች ያሉት የእንጨት ወይም የካርቶን የአቅጣጫ ጠቋሚ ሥሩ።'),
   [('Find east by watching sunrise.','የፀሐይ መውጫን በማየት ምሥራቅን ፈልጉ።'),('Draw an 8-point star.','ባለ 8 ጫፍ ኮከብ ሳሉ።'),('Write Ge\'ez and Amharic names.','የግእዝና የአማርኛ ስሞችን ጻፉ።'),('Fix it in the right position.','በትክክለኛው አቅጣጫ ትከሉት።')])),
 sm(('Find your way with Ge\'ez direction words','በግእዝ የአቅጣጫ ቃላት መንገዳችሁን ፈልጉ'),[('Main directions','ዋና አቅጣጫዎች'),('መስዕ and አዜብ','መስዕና አዜብ'),('Sunrise and sunset','ሙፃእና ምእታው'),('Greetings','ሰላምታ')]),'directions')

U(11,('Abba Gebre Hanna','አባ ገብረ ሐና'),[
 quiz(('Who was Aleqa Gebre Hanna?','አለቃ ገብረ ሐና ማን ነበሩ?'),('The book: Aleqa Gebre Hanna was one of the great scholars of the Ethiopian Orthodox Church, learned in books, qene (poetry) and zema (chant), famous for his witty sayings (ተውኔት), and was not afraid to speak wisely even before kings.','መጽሐፉ፦ አለቃ ገብረ ሐና ከኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን ታላላቅ ሊቃውንት አንዱ ነበሩ፤ በመጻሕፍት፣ በቅኔና በዜማ የተማሩ፣ በቀልዳቸው (ተውኔት) የታወቁ፣ በነገሥታት ፊትም በጥበብ ከመናገር የማይፈሩ ነበሩ።'),[
  G('Aleqa Gebre Hanna is famous for…','አለቃ ገብረ ሐና የሚታወቁት በ…',[('witty sayings and scholarship','በቀልድና በሊቅነት'),('running races','በሩጫ'),('farming only','በእርሻ ብቻ')]),
  G('He studied…','የተማሩት…',[('qene, zema and the books','ቅኔ፣ ዜማና መጻሕፍት'),('only mathematics','ሒሳብ ብቻ')]),
  G('Was he afraid to speak before kings?','በነገሥታት ፊት ለመናገር ይፈሩ ነበር?',[('No','አይፈሩም ነበር'),('Yes','ይፈሩ ነበር')]),
  G('ተውኔት here means…','"ተውኔት" እዚህ ማለት…',[('wit, humorous wise sayings','ቀልድ፣ ጥበብ ያለው ጨዋታ'),('a song for war','የጦር ዘፈን')])]),
 vm(('Same meaning','ተመሳሳይ ቃላት'),('From the book\'s word list: words with the same meaning.','ከመጽሐፉ የቃላት ዝርዝር፦ ተመሳሳይ ትርጉም ያላቸው ቃላት።'),[[('በዝኀ','አመክዐበ'),('ዖቀ','አእመረ'),('ተዋነየ','ተላሐየ')],[('ተናገረ','ተናበበ'),('ፈርሀ','ደንገጸ'),('ኀብረ','ተዋሐደ')]]),
 quiz(('Word meanings','የቃላት ትርጉም'),('Learn the meanings of the new words.','የአዳዲሶቹን ቃላት ትርጉም ተማሩ።'),[
  G('"ፈርሀ" means…','"ፈርሀ" ማለት…',[('was afraid','ፈራ'),('ate','በላ')]),G('"ተናገረ" means…','"ተናገረ" ማለት…',[('spoke','ተናገረ'),('slept','ተኛ')]),G('"አእመረ" means…','"አእመረ" ማለት…',[('knew','አወቀ'),('walked','ሄደ')]),G('"ሊቅ" (ሊቃውንት) means…','"ሊቅ" ማለት…',[('scholar','ምሁር'),('farmer','ገበሬ')])])],
 [G('Aleqa Gebre Hanna was a…','አለቃ ገብረ ሐና…',[('church scholar','የቤተ ክርስቲያን ሊቅ'),('soldier','ወታደር')]),G('Same as ዖቀ','ከዖቀ ጋር ተመሳሳይ',['አእመረ','ፈርሀ']),G('Same as ፈርሀ','ከፈርሀ ጋር ተመሳሳይ',['ደንገጸ','ተናበበ']),G('ቅኔ is a kind of…','ቅኔ…',[('poetry','ቅኔ/ግጥም'),('food','ምግብ')])],
 notes(('Aleqa Gebre Hanna shows that learning, wisdom and humour can go together.','አለቃ ገብረ ሐና ትምህርት፣ ጥበብና ቀልድ አብረው እንደሚሄዱ ያሳያሉ።'),
  [('A great scholar of the Ethiopian Orthodox Church.','የኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን ታላቅ ሊቅ።'),('Learned in books, qene and zema.','በመጻሕፍት፣ በቅኔና በዜማ የተማሩ።'),('Famous for wise, witty sayings (ተውኔት).','በጥበብ የተሞላ ቀልዳቸው (ተውኔት) የታወቁ።'),('Synonyms: ዖቀ = አእመረ, ፈርሀ = ደንገጸ.','ተመሳሳይ፦ ዖቀ = አእመረ፣ ፈርሀ = ደንገጸ።')],
  [('ሊቅ','scholar','ምሁር'),('ቅኔ','qene poetry','ቅኔ'),('ተውኔት','wit, witty saying','ቀልድ')],('Wisdom with a smile teaches best.','በፈገግታ የተነገረ ጥበብ በደንብ ያስተምራል።'),
  [(('What is Aleqa Gebre Hanna famous for?','አለቃ ገብረ ሐና በምን ይታወቃሉ?'),'በሊቅነትና በቀልዳቸው'),(('Same as ተናገረ','ከተናገረ ጋር ተመሳሳይ'),'ተናበበ')],
  INN(('Wise-sayings storybook','የጥበብ ጨዋታዎች መጽሐፍ'),('Collect short, kind wise sayings from elders in your area and make an illustrated booklet in Ge\'ez and Amharic. Storybooks of local wit can be printed and sold.','ከአካባቢያችሁ ሽማግሌዎች አጫጭርና ደግ የጥበብ ጨዋታዎችን ሰብስቡና በግእዝና በአማርኛ ሥዕላዊ መጽሐፍ ሥሩ። የአካባቢ ጥበብ ያላቸው የታሪክ መጻሕፍት ታትመው ሊሸጡ ይችላሉ።'),
   [('Ask 3 elders for a wise saying.','3 ሽማግሌዎችን የጥበብ አባባል ጠይቁ።'),('Write each one neatly.','እያንዳንዱን በንጽህና ጻፉ።'),('Draw a picture for each.','ለእያንዳንዱ ሥዕል ሳሉ።'),('Read them to your class.','ለክፍላችሁ አንብቡ።')])),
 sm(('Aleqa Gebre Hanna: learning, wisdom and wit','አለቃ ገብረ ሐና፦ ትምህርት፣ ጥበብና ቀልድ'),[('A great scholar','ታላቅ ሊቅ'),('Qene and zema','ቅኔና ዜማ'),('Witty sayings','ተውኔት'),('Synonyms','ተመሳሳይ ቃላት')]),'the life and wit of Aleqa Gebre Hanna')
dump('gz')
