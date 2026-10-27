import sys;sys.path.insert(0,'.')
from common5 import *
SN=E('Health & Physical Education','ጤናና ሰውነት ማጎልመሻ')
B="(d=>[...(d.beat?[K1.beat(d.beat.title,d.beat.tip,d.beat.R)]:[]),...d.moves.map(m=>K1.moveMission(m.title,m.tip,m.steps))])"
def mv(title,tip,steps): return {'title':E(*title),'tip':E(*tip),'steps':[{'e':e,'en':en,'am':am,'n':n} for e,en,am,n in steps]}
def H(en,am,opts,a=0): return {'q':E(en,am),'o':[o if isinstance(o,str) else E(*o) for o in opts],'a':a}
def U(n,title,data,extra,exam,nt,summ,foot):
    unit(f'g5-health-{n}','health',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 5 Health & PE student book (ANRS), Chapter {n}: {foot[0]}.',f'በ5ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ {n} ላይ የተመሰረተ፦ {foot[1]}።'),B,data,extra,exam,nt,summ)
SAFE=quiz(('Safety first','ደህንነት ቅድሚያ'),('Warm up, use a flat safe space, check equipment, and cool down and drink water after exercise.','ሰውነትን አሟሙቁ፣ ደህንነቱ የተጠበቀ ሜዳ ተጠቀሙ፣ መሳሪያውን ፈትሹ፣ ከእንቅስቃሴ በኋላ ሰውነትን አቀዝቅዙና ውኃ ጠጡ።'),[
 H('Before exercise we…','ከእንቅስቃሴ በፊት…',[('warm up','ሰውነትን እናሟሙቃለን'),('eat a big meal','ብዙ እንበላለን'),('sleep','እንተኛለን')]),H('If a classmate falls and is hurt, we…','የክፍል ጓደኛ ወድቆ ቢጎዳ…',[('stop and tell the teacher','አቁመን ለመምህሩ እንነግራለን'),('keep playing','መጫወታችንን እንቀጥላለን'),('laugh','እንስቃለን')])])

# 1 PE and sport
U(1,('Physical education and sport','የሰውነት ማጎልመሻ ትምህርትና ስፖርት'),
 {'moves':[mv(('Olympic-style warm-up','የኦሎምፒክ ዓይነት ማሟሟቂያ'),('Every good session starts with a warm-up: light jogging, arm circles and gentle stretches.','ጥሩ የእንቅስቃሴ ክፍለ ጊዜ በማሟሟቂያ ይጀምራል፦ ቀላል ሩጫ፣ ክንድ ማሽከርከርና ቀላል መዘርጋት።'),
   [('🏃','Jog gently on the spot','በቦታችሁ ቀስ ብላችሁ ሩጡ',30),('🔄','Circle your arms forward, then backward','ክንዶቻችሁን ወደ ፊት፣ ከዚያ ወደ ኋላ አሽከርክሩ',10),('🙆','Reach up high, then touch your knees','ወደ ላይ ተዘርጉ፣ ከዚያ ጉልበታችሁን ንኩ',8),('🦵','Lift your knees high while marching','እየተራመዳችሁ ጉልበታችሁን ከፍ አድርጉ',20)])]},
 [quiz(('History of PE and the Olympics','የሰውነት ማጎልመሻና የኦሎምፒክ ታሪክ'),('The ancient Olympic Games began in Olympia, Greece, in 776 BC, every four years. Baron Pierre de Coubertin founded the modern Olympics; the first modern Games were held in Athens in 1896.','የጥንቱ ኦሎምፒክ በ776 ዓ.ዓ. በግሪክ ኦሎምፒያ በየአራት ዓመቱ ተጀመረ። ዘመናዊውን ኦሎምፒክ ባሮን ፒየር ዲ ኩበርቲን መሠረቱ፤ የመጀመሪያው ዘመናዊ ውድድር በ1896 በአቴንስ ተካሄደ።'),[
   H('The Olympic Games got their name from…','የኦሎምፒክ ጨዋታ ስያሜውን ያገኘው ከ…',[('Olympia, a place in Greece','በግሪክ ካለችው ኦሎምፒያ'),('a river','ከአንድ ወንዝ'),('a king\'s horse','ከንጉሥ ፈረስ')]),
   H('The first modern Olympics were held in…','የመጀመሪያው ዘመናዊ ኦሎምፒክ የተካሄደው በ…',[('Athens, 1896','በአቴንስ፣ 1896'),('Addis Ababa, 1960','በአዲስ አበባ፣ 1960'),('Rome, 776','በሮም፣ 776')]),
   H('The Olympic Games are held every…','የኦሎምፒክ ጨዋታ የሚካሄደው በየ…',[('4 years','4 ዓመቱ'),('year','ዓመቱ'),('10 years','10 ዓመቱ')]),
   H('Who founded the modern Olympics?','ዘመናዊውን ኦሎምፒክ የመሠረቱት?',[('Pierre de Coubertin','ፒየር ዲ ኩበርቲን'),('Abebe Bikila','አበበ ቢቂላ'),('Zeus','ዙስ')])]),
  quiz(('Famous Ethiopian athletes','ዝነኛ የኢትዮጵያ ስፖርተኞች'),('Ethiopian runners have raised the flag around the world in African, World and Olympic championships.','የኢትዮጵያ ሯጮች በአፍሪካ፣ በዓለምና በኦሎምፒክ ውድድሮች ሰንደቅ ዓላማችንን ከፍ አድርገዋል።'),[
   H('Who won the 1960 Rome marathon running barefoot?','በ1960 የሮም ማራቶንን በባዶ እግር ሮጦ ያሸነፈው?',[('Abebe Bikila','አበበ ቢቂላ'),('Haile Gebrselassie','ኃይሌ ገብረሥላሴ'),('Kenenisa Bekele','ቀነኒሳ በቀለ')]),
   H('Meselech Melkamu was born in…','አትሌት መሰለች መልካሙ የተወለደችው በ…',[('Debre Markos','ደብረ ማርቆስ'),('Gondar','ጎንደር'),('Dessie','ደሴ')]),
   H('Derartu Tulu (1992) was the first … to win Olympic gold.','ደራርቱ ቱሉ (1992) የኦሎምፒክ ወርቅ ያሸነፈች የመጀመሪያዋ … ናት',[('Black African woman','ጥቁር አፍሪካዊት ሴት'),('Asian woman','እስያዊት ሴት'),('swimmer','ዋናተኛ')])]),
  SAFE],
 [H('The ancient Olympics began in…','የጥንቱ ኦሎምፒክ የተጀመረው በ…',[('776 BC','776 ዓ.ዓ.'),('1896','1896'),('2000','2000')]),H('A warm-up before exercise…','ከእንቅስቃሴ በፊት ማሟሟቅ…',[('prevents injury','ጉዳትን ይከላከላል'),('causes injury','ጉዳት ያስከትላል'),('is not needed','አያስፈልግም')]),
  H('Silesh Sihine is a … runner.','ስለሽ ስሂን … ሯጭ ነው።',[('long-distance','የረጅም ርቀት'),('swimming','የዋና'),('short sprint only','የአጭር ርቀት ብቻ')]),H('The spirit of the modern Olympics is…','የዘመናዊ ኦሎምፒክ መንፈስ…',[('friendship and peace through sport','በስፖርት ወዳጅነትና ሰላም'),('war','ጦርነት'),('money only','ገንዘብ ብቻ')])],
 notes(('Physical education keeps us healthy, and sport brings nations together through the Olympic spirit.','የሰውነት ማጎልመሻ ጤናችንን ይጠብቃል፤ ስፖርት በኦሎምፒክ መንፈስ አገሮችን ያቀራርባል።'),
  [('PE develops body, mind and teamwork.','ሰ/ማጎልመሻ አካልን፣ አእምሮንና ቡድናዊነትን ያዳብራል።'),('Safety: warm up, check the field, cool down.','ደህንነት፦ ማሟሟቅ፣ ሜዳን መፈተሽ፣ ማቀዝቀዝ።'),('Ancient Olympics 776 BC; modern Olympics Athens 1896.','ጥንታዊ ኦሎምፒክ 776 ዓ.ዓ.፤ ዘመናዊ ኦሎምፒክ አቴንስ 1896።'),('Ethiopian heroes: Abebe Bikila, Derartu, Haile, Meselech.','የኢትዮጵያ ጀግኖች፦ አበበ ቢቂላ፣ ደራርቱ፣ ኃይሌ፣ መሰለች።')],
  [('ኦሎምፒክ','Olympics','ዓለም አቀፍ የስፖርት ውድድር'),('ማሟሟቅ','warm-up','ሰውነትን ለእንቅስቃሴ ማዘጋጀት'),('ስፖርተኛ','athlete','ስፖርት የሚሠራ')],('Faster, higher, stronger, together!','ፈጣን፣ ከፍ ያለ፣ ጠንካራ፣ በጋራ!'),
  [(('Where were the first modern Olympics?','የመጀመሪያው ዘመናዊ ኦሎምፒክ የት ነበር?'),('Athens, 1896','አቴንስ፣ 1896')),(('Name 2 Ethiopian Olympic champions','2 የኢትዮጵያ የኦሎምፒክ አሸናፊዎችን ጥቀሱ'),('Abebe Bikila, Derartu Tulu','አበበ ቢቂላ፣ ደራርቱ ቱሉ'))],
  (('Athlete profile cards','የአትሌቶች መረጃ ካርዶች'),('Sports journalists write profiles of athletes. Make profile cards of two Ethiopian athletes.','የስፖርት ጋዜጠኞች ስለ አትሌቶች መገለጫ ይጽፋሉ። የሁለት ኢትዮጵያውያን አትሌቶች መገለጫ ካርዶችን ሥሩ።'),
   [('Choose two athletes (one woman, one man).','ሁለት አትሌቶችን ምረጡ (አንዲት ሴት፣ አንድ ወንድ)።'),('Find birthplace, event and best results.','የትውልድ ቦታ፣ የውድድር ዓይነትና ምርጥ ውጤት ፈልጉ።'),('Draw them and write 3 facts.','ሳሏቸውና 3 እውነታዎችን ጻፉ።'),('Present them on a "heroes wall".','በ"የጀግኖች ግድግዳ" ላይ አቅርቡ።')])),
 sm(('PE for health; sport for unity','ሰ/ማጎልመሻ ለጤና፤ ስፖርት ለአንድነት'),[('PE and its history','ሰ/ማጎልመሻና ታሪኩ'),('Safety','ደህንነት'),('Olympic Games','ኦሎምፒክ'),('Ethiopian athletes','የኢትዮጵያ ስፖርተኞች')]),
 ('the history of PE, safety during exercise, the Olympic Games and famous Ethiopian athletes','የሰ/ማጎልመሻ ታሪክ፣ በእንቅስቃሴ ወቅት ጥንቃቄ፣ የኦሎምፒክ ጨዋታና ዝነኛ የኢትዮጵያ ስፖርተኞች'))

# 2 Social-emotional games
U(2,('Games for social and emotional growth','ማኅበራዊና ስሜታዊ እድገትን የሚያዳብሩ ጨዋታዎች'),
 {'moves':[mv(('Mirror and trust games','የመስታወትና የመተማመን ጨዋታዎች'),('Work with a partner: copy each other\'s moves like a mirror, then lead a blindfolded friend safely with words only.','ከአጋራችሁ ጋር ሥሩ፦ እንደ መስታወት አንዳችሁ የሌላውን እንቅስቃሴ ኮርጁ፤ ከዚያ ዓይኑ የተሸፈነ ጓደኛችሁን በቃል ብቻ በደህና ምሩ።'),
   [('🪞','Mirror your partner\'s slow arm moves','የአጋራችሁን ቀስ ያሉ የክንድ እንቅስቃሴዎች ኮርጁ',10),('🙈','Guide a blindfolded partner around 3 cones by voice','ዓይኑ የተሸፈነ አጋራችሁን በድምፅ በ3 ኮኖች ዙሪያ ምሩ',3),('🤝','Pass a ball in a circle and say one kind word each','በክብ ኳስ እየተቀባበላችሁ እያንዳንዳችሁ አንድ ደግ ቃል ተናገሩ',8),('🧠','Freeze when the leader says "stop", then name a feeling','መሪው "ቁም" ሲል ቁሙ፤ ከዚያ አንድ ስሜት ሰይሙ',5)])]},
 [quiz(('Skills that games build','ጨዋታዎች የሚያዳብሯቸው ክህሎቶች'),('Games help us know ourselves, control our feelings, understand others, make responsible decisions and cooperate.','ጨዋታዎች ራሳችንን እንድናውቅ፣ ስሜታችንን እንድንቆጣጠር፣ ሌሎችን እንድንረዳ፣ ኃላፊነት የተሞላበት ውሳኔ እንድንወስንና እንድንተባበር ይረዱናል።'),[
   H('Knowing your strengths and feelings is…','ጥንካሬንና ስሜትን ማወቅ…',[('self-awareness','ራስን ማወቅ'),('teamwork','ቡድናዊነት'),('speed','ፍጥነት')]),
   H('Staying calm when you lose a game shows…','በጨዋታ ስትሸነፉ መረጋጋት የሚያሳየው…',[('self-management','ራስን መምራት'),('anger','ቁጣ'),('cheating','ማጭበርበር')]),
   H('Thinking of the results before acting is…','ከማድረግ በፊት ውጤቱን ማሰብ…',[('responsible decision-making','ኃላፊነት የተሞላበት ውሳኔ'),('guessing','መገመት'),('running','መሮጥ')]),
   H('Helping a team-mate who falls shows…','የወደቀ የቡድን አባልን መርዳት የሚያሳየው…',[('empathy and cooperation','መተሳሰብና ትብብር'),('selfishness','ራስ ወዳድነት'),('fear','ፍርሃት')])]),
  sortm(('Good sport or not?','ጥሩ ስፖርታዊ ጨዋነት ወይስ አይደለም?'),('Fair play means respecting rules, team-mates and opponents.','ፍትሐዊ ጨዋታ ደንቦችን፣ የቡድን አባላትንና ተቃዋሚዎችን ማክበር ነው።'),[('✅ Fair play','✅ ፍትሐዊ'),('⚠️ Unfair','⚠️ ኢፍትሐዊ')],[(('shaking hands after the game','ከጨዋታ በኋላ መጨባበጥ'),0),(('waiting for your turn','ተራን መጠበቅ'),0),(('encouraging a weak player','ደካማ ተጫዋችን ማበረታታት'),0),(('cheating to win','ለማሸነፍ ማጭበርበር'),1),(('shouting at the referee','በዳኛው ላይ መጮህ'),1),(('leaving others out','ሌሎችን ማግለል'),1)])],
 [H('A game that builds trust…','መተማመንን የሚገነባ ጨዋታ…',[('guiding a blindfolded friend','ዓይኑ የተሸፈነ ጓደኛን መምራት'),('running alone','ብቻ መሮጥ'),('sleeping','መተኛት')]),H('Accepting defeat calmly is…','ሽንፈትን በእርጋታ መቀበል…',[('good sportsmanship','ጥሩ ስፖርታዊ ጨዋነት'),('weakness','ድክመት'),('cheating','ማጭበርበር')]),
  H('Cooperation means…','ትብብር ማለት…',[('working together','በጋራ መሥራት'),('working against others','ሌሎችን መቃወም'),('doing nothing','ምንም አለማድረግ')]),H('Critical thinking games help us…','በጥልቀት የማሰብ ጨዋታዎች የሚረዱን…',[('solve problems','ችግር ለመፍታት'),('forget','ለመርሳት'),('cry','ለማልቀስ')])],
 notes(('Games teach us to know ourselves, manage feelings, respect others, decide wisely and cooperate.','ጨዋታዎች ራሳችንን እንድናውቅ፣ ስሜታችንን እንድንመራ፣ ሌሎችን እንድናከብር፣ በጥበብ እንድንወስንና እንድንተባበር ያስተምሩናል።'),
  [('Self-awareness and self-management.','ራስን ማወቅና ራስን መምራት።'),('Social awareness and respect.','ማኅበራዊ ግንዛቤና መከባበር።'),('Responsible decisions and critical thinking.','ኃላፊነት ያለው ውሳኔና በጥልቀት ማሰብ።'),('Cooperation and fair play.','ትብብርና ፍትሐዊ ጨዋታ።')],
  [('ራስን ማወቅ','self-awareness','ስሜትንና ችሎታን መረዳት'),('መተሳሰብ','empathy','የሌላውን ስሜት መረዳት'),('ትብብር','cooperation','በጋራ መሥራት')],('Win with grace, lose with grace.','በጨዋነት አሸንፉ፣ በጨዋነት ተሸነፉ።'),
  [(('Name one social-emotional skill','አንድ ማኅበራዊ-ስሜታዊ ክህሎት ጥቀሱ'),('empathy / cooperation','መተሳሰብ / ትብብር')),(('What do you do after losing a match?','ከተሸነፋችሁ በኋላ ምን ታደርጋላችሁ?'),('congratulate the winners','አሸናፊዎችን እንኳን ደስ አላችሁ ማለት'))],
  (('Break-time games leader','የእረፍት ሰዓት ጨዋታ መሪ'),('Camp leaders and coaches run games that build character. Lead a weekly cooperative game at break time.','የካምፕ መሪዎችና አሰልጣኞች ባሕርይ የሚገነቡ ጨዋታዎችን ይመራሉ። በእረፍት ሰዓት ሳምንታዊ የትብብር ጨዋታ ምሩ።'),
   [('Choose a cooperative game.','የትብብር ጨዋታ ምረጡ።'),('Explain the rules clearly.','ደንቦቹን በግልጽ አስረዱ።'),('Make sure everyone is included.','ሁሉም መካተቱን አረጋግጡ።'),('Ask players what they learnt.','ተጫዋቾቹ ምን እንደተማሩ ጠይቁ።')])),
 sm(('Games grow the heart and mind','ጨዋታዎች ልብንና አእምሮን ያሳድጋሉ'),[('Know yourself','ራስን ማወቅ'),('Respect others','ሌሎችን ማክበር'),('Decide wisely','በጥበብ መወሰን'),('Cooperate','መተባበር')]),
 ('games that develop self-awareness, social skills, responsible decisions, critical thinking and cooperation','ራስን ማወቅን፣ ማኅበራዊ ክህሎትን፣ ኃላፊነት ያለው ውሳኔን፣ በጥልቀት ማሰብንና ትብብርን የሚያዳብሩ ጨዋታዎች'))

# 3 Health and fitness
U(3,('Health and fitness','ጤናና የአካል ብቃት'),
 {'moves':[mv(('Heart and lungs (endurance)','ልብና ሳንባ (ብርታት)'),('Endurance exercises make the heart and lungs strong. Keep a steady pace you can talk at.','የብርታት እንቅስቃሴዎች ልብንና ሳንባን ያጠነክራሉ። እየተነጋገራችሁ መሮጥ የምትችሉበትን ፍጥነት ጠብቁ።'),
   [('🏃','Jog around the field','ሜዳውን ዙሩ',2),('🪢','Skip rope continuously','ያለማቋረጥ ገመድ ዝለሉ',30),('⭐','Do star jumps','የኮከብ ዝላይ ሥሩ',15)]),
  mv(('Muscle strength','የጡንቻ ብርታት'),('Work the upper body, the stomach and back, and the legs.','ከወገብ በላይ፣ የሆድና የጀርባ፣ እንዲሁም የእግር ጡንቻዎችን አሠሩ።'),
   [('💪','Wall or knee push-ups','የግድግዳ ወይም የጉልበት ፑሽአፕ',8),('🧘','Sit-ups with bent knees','ጉልበት አጥፍቶ ሲትአፕ',10),('🦵','Squats','ስኳት (ቁጢጥ ብሎ መነሳት)',10)]),
  mv(('Flexibility and agility','መተጣጠፍና ቅልጥፍና'),('Stretch slowly without bouncing; then move quickly and change direction.','ሳትንጠራሩ ቀስ ብላችሁ ተዘርጉ፤ ከዚያ በፍጥነት ተንቀሳቀሱና አቅጣጫ ቀይሩ።'),
   [('🙆','Reach to touch your toes and hold','የእግር ጣታችሁን ለመንካት ተዘርግታችሁ ቆዩ',10),('↔️','Shuttle run between two lines','በሁለት መስመሮች መካከል ተመላለሱ',6),('🔀','Zigzag run through cones','በኮኖች መካከል በዚግዛግ ሩጡ',3)])]},
 [quiz(('Parts of fitness','የአካል ብቃት ክፍሎች'),('Health-related fitness: heart–lung endurance, muscle strength and endurance, flexibility, and body composition. Agility is moving fast and changing direction.','ከጤና ጋር የተያያዘ ብቃት፦ የልብና ሳንባ ብርታት፣ የጡንቻ ጥንካሬና ብርታት፣ መተጣጠፍና የሰውነት ቅንብር። ቅልጥፍና በፍጥነት መንቀሳቀስና አቅጣጫ መቀየር ነው።'),[
   H('Long, steady running builds…','ረጅምና ቋሚ ሩጫ የሚያዳብረው…',[('heart and lung endurance','የልብና የሳንባ ብርታት'),('flexibility only','መተጣጠፍን ብቻ'),('height','ቁመትን')]),
   H('Push-ups mainly build…','ፑሽአፕ በዋናነት የሚያዳብረው…',[('upper-body muscles','ከወገብ በላይ ጡንቻዎችን'),('eyesight','የዓይን እይታን'),('memory','ትውስታን')]),
   H('Touching your toes trains…','የእግር ጣትን መንካት የሚያለማምደው…',[('flexibility','መተጣጠፍን'),('speed','ፍጥነትን'),('balance only','ሚዛንን ብቻ')]),
   H('A zigzag run trains…','የዚግዛግ ሩጫ የሚያለማምደው…',[('agility','ቅልጥፍናን'),('strength only','ጥንካሬን ብቻ'),('sleep','እንቅልፍን')])]),
  quiz(('Doping','የስፖርት አበረታች ቅመሞች (ዶፒንግ)'),('Doping is using banned drugs or methods to improve performance. It is cheating and can damage health or even cause early death.','ዶፒንግ ብቃትን ለማሻሻል የተከለከሉ መድኃኒቶችን ወይም ዘዴዎችን መጠቀም ነው። ማጭበርበር ነው፤ ጤናን ይጎዳል፣ ያለጊዜ ሞትም ሊያስከትል ይችላል።'),[
   H('Doping is…','ዶፒንግ…',[('using banned substances to perform better','ለተሻለ ብቃት የተከለከሉ ነገሮችን መጠቀም'),('normal training','የተለመደ ልምምድ'),('eating vegetables','አትክልት መብላት')]),
   H('Athletes caught doping…','በዶፒንግ የተያዙ ስፖርተኞች…',[('are banned and lose medals','ይታገዳሉ፣ ሜዳሊያ ያጣሉ'),('get more prizes','ተጨማሪ ሽልማት ያገኛሉ'),('are praised','ይመሰገናሉ')]),
   H('The healthy way to improve is…','ለማሻሻል ጤናማው መንገድ…',[('training, good food and rest','ልምምድ፣ ጥሩ ምግብና እረፍት'),('taking pills secretly','በድብቅ ክኒን መውሰድ'),('not sleeping','አለመተኛት')])]),
  SAFE],
 [H('Fitness that lets you run for a long time is…','ለረጅም ጊዜ ለመሮጥ የሚያስችል ብቃት…',[('endurance','ብርታት'),('flexibility','መተጣጠፍ'),('agility','ቅልጥፍና')]),H('Sit-ups strengthen the…','ሲትአፕ የሚያጠነክረው…',[('stomach muscles','የሆድ ጡንቻዎችን'),('eyes','ዓይንን'),('ears','ጆሮን')]),
  H('Stretch slowly and…','ቀስ ብላችሁ ተዘርጉና…',[('do not bounce','አትንጠራሩ'),('bounce hard','በኃይል ተንጠራሩ'),('hold your breath','ትንፋሽ ያዙ')]),H('Doping is…','ዶፒንግ…',[('cheating and harmful','ማጭበርበርና ጎጂ'),('allowed','የተፈቀደ'),('healthy','ጤናማ')])],
 notes(('Regular exercise builds endurance, strength, flexibility and agility; clean sport means no doping.','መደበኛ እንቅስቃሴ ብርታትን፣ ጥንካሬን፣ መተጣጠፍንና ቅልጥፍናን ይገነባል፤ ንጹሕ ስፖርት ማለት ዶፒንግ የሌለበት ነው።'),
  [('Endurance: jogging, skipping, star jumps.','ብርታት፦ ቀላል ሩጫ፣ ገመድ፣ የኮከብ ዝላይ።'),('Strength: push-ups, sit-ups, squats.','ጥንካሬ፦ ፑሽአፕ፣ ሲትአፕ፣ ስኳት።'),('Flexibility and agility: stretches, shuttle and zigzag runs.','መተጣጠፍና ቅልጥፍና፦ መዘርጋት፣ የምልልስና የዚግዛግ ሩጫ።'),('Doping is cheating and dangerous.','ዶፒንግ ማጭበርበርና አደገኛ ነው።')],
  [('የአካል ብቃት','physical fitness','ሥራን ያለድካም የመሥራት ችሎታ'),('ቅልጥፍና','agility','በፍጥነት አቅጣጫ መቀየር'),('ዶፒንግ','doping','የተከለከለ አበረታች መጠቀም')],('Train hard, play clean.','በርትታችሁ ተለማመዱ፣ በንጽሕና ተጫወቱ።'),
  [(('Give one exercise for flexibility','ለመተጣጠፍ አንድ እንቅስቃሴ ጥቀሱ'),('touching toes','የእግር ጣት መንካት')),(('Why is doping banned?','ዶፒንግ ለምን ተከለከለ?'),('it is cheating and harms health','ማጭበርበርና ጤናን የሚጎዳ ስለሆነ'))],
  (('Family fitness challenge','የቤተሰብ የአካል ብቃት ፈተና'),('Personal trainers design programmes. Create a 2-week fitness challenge for your family and track progress.','የግል አሰልጣኞች ፕሮግራም ይቀርጻሉ። ለቤተሰባችሁ የ2 ሳምንት የአካል ብቃት ፈተና ፍጠሩና እድገቱን ተከታተሉ።'),
   [('Pick one exercise for each fitness part.','ለእያንዳንዱ የብቃት ክፍል አንድ እንቅስቃሴ ምረጡ።'),('Make a chart with days and counts.','ቀንና ብዛት ያለው ሰንጠረዥ ሥሩ።'),('Do it together for 10 minutes a day.','በቀን ለ10 ደቂቃ አብራችሁ ሥሩ።'),('Compare day 1 and day 14.','ቀን 1ን ከቀን 14 ጋር አነጻጽሩ።')])),
 sm(('Fit body: endurance, strength, flexibility, agility','ብቁ አካል፦ ብርታት፣ ጥንካሬ፣ መተጣጠፍ፣ ቅልጥፍና'),[('Heart and lungs','ልብና ሳንባ'),('Muscle strength','የጡንቻ ጥንካሬ'),('Flexibility and agility','መተጣጠፍና ቅልጥፍና'),('No doping','ዶፒንግ የለም')]),
 ('physical fitness: endurance, muscle strength, flexibility, agility, and the dangers of doping','የአካል ብቃት፦ ብርታት፣ የጡንቻ ጥንካሬ፣ መተጣጠፍ፣ ቅልጥፍናና የዶፒንግ አደጋ'))

# 4 Athletics
U(4,('Athletics','አትሌቲክስ'),
 {'moves':[mv(('Sprint start and finish','የፍጥነት ሩጫ አጀማመርና አጨራረስ'),('For a sprint: "On your marks – set – go!" Drive your arms, run on the balls of your feet and run through the finish line.','ለፍጥነት ሩጫ፦ "በቦታችሁ – ተዘጋጁ – ሂድ!" ክንዳችሁን አወዛውዙ፣ በእግር ጫፍ ሩጡ፣ የመጨረሻውን መስመር አልፋችሁ ሩጡ።'),
   [('🚦','Practise the 3-command start','የ3 ትእዛዝ አጀማመርን ተለማመዱ',5),('💨','Sprint 30 m at full speed','30 ሜትር በሙሉ ፍጥነት ሩጡ',3),('🏁','Lean through the finish line','የመጨረሻውን መስመር ጎንበስ ብላችሁ እለፉ',3)]),
  mv(('Throwing and long jump','ውርወራና የርዝመት ዝላይ'),('Throw a small ball far with a long arm swing; for the long jump, run, take off from one foot and land on two.','ትንሽ ኳስ ክንድን ረጅም አድርጋችሁ አርቃችሁ ወርውሩ፤ ለርዝመት ዝላይ ሮጣችሁ በአንድ እግር ተነሱና በሁለት እግር አርፉ።'),
   [('⚾','Throw a small ball for distance','ትንሽ ኳስ ለርቀት ወርውሩ',5),('🎯','Throw a light stick (javelin-style) at a target area','ቀላል ዘንግ (እንደ ጦር) ወደ ኢላማ ቦታ ወርውሩ',5),('🦘','Long jump into sand: run, take off, land on two feet','በአሸዋ ላይ ርዝመት ዝለሉ፦ ሩጡ፣ ተነሱ፣ በሁለት እግር አርፉ',4)])]},
 [quiz(('Running, throwing and jumping','ሩጫ፣ ውርወራና ዝላይ'),('Sprints are short and very fast; distance (timed) running needs steady pace. Throws and jumps are measured for distance.','የፍጥነት ሩጫ አጭርና በጣም ፈጣን ነው፤ የሰዓት ሩጫ ቋሚ ፍጥነት ይፈልጋል። ውርወራና ዝላይ በርቀት ይለካሉ።'),[
   H('100 m is a…','100 ሜትር…',[('sprint','የፍጥነት ሩጫ'),('marathon','ማራቶን'),('throw','ውርወራ')]),
   H('The correct sprint commands are…','ትክክለኛው የፍጥነት ሩጫ ትእዛዝ…',[('On your marks – set – go','በቦታችሁ – ተዘጋጁ – ሂድ'),('Go – set – stop','ሂድ – ተዘጋጅ – ቁም'),('Jump – throw – run','ዝለል – ወርውር – ሩጥ')]),
   H('In the long jump you take off from…','በርዝመት ዝላይ የምትነሱት በ…',[('one foot','አንድ እግር'),('two hands','ሁለት እጅ'),('sitting','በመቀመጥ')]),
   H('For long timed runs, the key is…','ለረጅም የሰዓት ሩጫ ቁልፉ…',[('a steady pace','ቋሚ ፍጥነት'),('sprinting at the start','በጅምሩ መሽቀዳደም'),('stopping often','ደጋግሞ መቆም')]),
   H('A javelin throw is measured by…','የጦር ውርወራ የሚለካው በ…',[('distance','ርቀት'),('time','ጊዜ'),('height','ከፍታ')])]),
  order(('Long jump phases','የርዝመት ዝላይ ደረጃዎች'),('A long jump has four phases in order.','የርዝመት ዝላይ አራት ተከታታይ ደረጃዎች አሉት።'),('Tap the phases in order.','ደረጃዎቹን በቅደም ተከተል ንኩ።'),[(('Put in order:','በቅደም ተከተል፦'),[('approach run','የመንደርደሪያ ሩጫ'),('take-off','መነሳት'),('flight','በአየር መብረር'),('landing','ማረፍ')])]),SAFE],
 [H('A short, very fast race is a…','አጭርና በጣም ፈጣን ውድድር…',[('sprint','የፍጥነት ሩጫ'),('marathon','ማራቶን'),('relay only','ዱላ ቅብብል ብቻ')]),H('Land in the long jump on…','በርዝመት ዝላይ የምታርፉት በ…',[('two feet','ሁለት እግር'),('your head','ራስ'),('one hand','አንድ እጅ')]),
  H('Throws are measured in…','ውርወራዎች የሚለኩት በ…',[('metres','ሜትር'),('minutes','ደቂቃ'),('kilograms','ኪሎግራም')]),H('Sprinters run on the…','ፈጣን ሯጮች የሚሮጡት በ…',[('balls of their feet','የእግር ጫፍ'),('heels only','ተረከዝ ብቻ'),('flat whole foot slowly','ቀስ ብለው በሙሉ እግር')])],
 notes(('Athletics is running, throwing and jumping; good technique makes us faster, stronger and safer.','አትሌቲክስ ሩጫ፣ ውርወራና ዝላይ ነው፤ ጥሩ ቴክኒክ ፈጣን፣ ጠንካራና ደህንነቱ የተጠበቀ ያደርገናል።'),
  [('Sprint: 3 commands, arms drive, run through the line.','ፍጥነት ሩጫ፦ 3 ትእዛዝ፣ ክንድ ማወዛወዝ፣ መስመሩን አልፎ መሮጥ።'),('Timed runs: steady pace and breathing.','የሰዓት ሩጫ፦ ቋሚ ፍጥነትና አተነፋፈስ።'),('Throws: long arm swing; measure the distance.','ውርወራ፦ ረጅም የክንድ ውዝዋዜ፤ ርቀቱን መለካት።'),('Long jump: approach, take-off, flight, landing.','የርዝመት ዝላይ፦ መንደርደር፣ መነሳት፣ መብረር፣ ማረፍ።')],
  [('አትሌቲክስ','athletics','ሩጫ፣ ውርወራና ዝላይ'),('የፍጥነት ሩጫ','sprint','አጭር ፈጣን ሩጫ'),('የርዝመት ዝላይ','long jump','ለርቀት መዝለል')],('Practice makes progress.','ልምምድ እድገትን ያመጣል።'),
  [(('Name the 4 long jump phases','4ቱን የርዝመት ዝላይ ደረጃዎች ጥቀሱ'),('approach, take-off, flight, landing','መንደርደር፣ መነሳት፣ መብረር፣ ማረፍ')),(('Give the sprint commands','የፍጥነት ሩጫ ትእዛዞችን ስጡ'),('On your marks, set, go','በቦታችሁ፣ ተዘጋጁ፣ ሂድ'))],
  (('Mini athletics meet','አነስተኛ የአትሌቲክስ ውድድር'),('Sports officials organise competitions. Run a class athletics meet with timers, measurers and a results board.','የስፖርት ኃላፊዎች ውድድሮችን ያዘጋጃሉ። የሰዓት ቆጣሪ፣ የርቀት ለኪና የውጤት ሰሌዳ ያለው የክፍል አትሌቲክስ ውድድር አካሂዱ።'),
   [('Mark a 50 m track and a sand pit.','የ50 ሜትር መሮጫና የአሸዋ ጉድጓድ ምልክት አድርጉ።'),('Give jobs: starter, timer, measurer, recorder.','ሥራ ስጡ፦ አስጀማሪ፣ ሰዓት ቆጣሪ፣ ለኪ፣ መዝጋቢ።'),('Record times and distances.','ሰዓትና ርቀት መዝግቡ።'),('Present certificates for best effort.','ለምርጥ ጥረት የምስክር ወረቀት ስጡ።')])),
 sm(('Run, throw and jump with good technique','በጥሩ ቴክኒክ ሩጡ፣ ወርውሩ፣ ዝለሉ'),[('Sprinting','የፍጥነት ሩጫ'),('Timed running','የሰዓት ሩጫ'),('Throwing','ውርወራ'),('Long jump','የርዝመት ዝላይ')]),
 ('sprinting, timed running, throwing small balls and sticks, and the long jump','የፍጥነት ሩጫ፣ የሰዓት ሩጫ፣ ትንንሽ ኳሶችንና ዘንግ መወርወር እንዲሁም የርዝመት ዝላይ'))

# 5 Gymnastics
U(5,('Gymnastics','ጅምናስቲክስ'),
 {'beat':{'title':E('Rhythmic gymnastics beat','የሪትሚክ ጅምናስቲክስ ምት'),'tip':E('Rhythmic gymnastics moves to music. Listen, then tap the pattern: 👏 = clap, 🦶 = step.','ሪትሚክ ጅምናስቲክስ በሙዚቃ ይሠራል። አዳምጡ፣ ከዚያ ድገሙ፦ 👏 = ማጨብጨብ፣ 🦶 = መርገጥ።'),'R':[['👏','🦶','👏','🦶','👏','👏'],['🦶','🦶','👏','🦶','🦶','👏'],['👏','👏','🦶','👏','🦶','🦶','👏']]},
  'moves':[mv(('Floor (free) gymnastics','ነፃ ጅምናስቲክስ'),('Free gymnastics uses the body only, on a soft mat: rolls, balances and jumps.','ነፃ ጅምናስቲክስ በለስላሳ ፍራሽ ላይ ሰውነትን ብቻ ይጠቀማል፦ መንከባለል፣ ሚዛንና ዝላይ።'),
   [('🔄','Forward roll with chin tucked in','አገጭን ደረት ላይ አድርጎ ወደ ፊት መንከባለል',3),('🧍','Stand on one leg with arms out (balance)','ክንድ ዘርግቶ በአንድ እግር መቆም (ሚዛን)',10),('🌉','Make a bridge or a "candle" shoulder stand','ድልድይ ወይም "ሻማ" (በትከሻ መቆም) ሥሩ',3),('🤸','Straight jump with a soft landing','ቀጥ ያለ ዝላይ በለስላሳ ማረፍ',5)]),
  mv(('Rhythmic gymnastics','ሪትሚክ ጅምናስቲክስ'),('Rhythmic gymnastics joins dance-like moves with a ribbon, ball, hoop or rope.','ሪትሚክ ጅምናስቲክስ ዳንስ መሰል እንቅስቃሴዎችን ከሪባን፣ ኳስ፣ ቀለበት ወይም ገመድ ጋር ያጣምራል።'),
   [('🎀','Wave a ribbon in circles and zigzags','ሪባንን በክብና በዚግዛግ አውለብልቡ',10),('⭕','Roll a hoop and jump through it','ቀለበት አንከባላችሁ በውስጡ ዝለሉ',3),('🏐','Roll a ball along your arms','ኳስን በክንዳችሁ ላይ አንከባልሉ',5)])]},
 [quiz(('Types of gymnastics','የጅምናስቲክስ ዓይነቶች'),('Free (floor) gymnastics uses the body only; apparatus gymnastics uses equipment like bars, beam and vault; rhythmic gymnastics uses music and hand apparatus.','ነፃ ጅምናስቲክስ ሰውነትን ብቻ ይጠቀማል፤ የመሳሪያ ጅምናስቲክስ እንደ ዘንግ፣ ሚዛን ጣውላና መዝለያ ያሉ መሳሪያዎችን ይጠቀማል፤ ሪትሚክ ሙዚቃንና የእጅ መሳሪያዎችን ይጠቀማል።'),[
   H('A forward roll on a mat is…','በፍራሽ ላይ ወደ ፊት መንከባለል…',[('free gymnastics','ነፃ ጅምናስቲክስ'),('apparatus gymnastics','የመሳሪያ ጅምናስቲክስ'),('athletics','አትሌቲክስ')]),
   H('Walking on a balance beam is…','በሚዛን ጣውላ ላይ መራመድ…',[('apparatus gymnastics','የመሳሪያ ጅምናስቲክስ'),('free gymnastics','ነፃ ጅምናስቲክስ'),('football','እግር ኳስ')]),
   H('Ribbon and hoop with music is…','ሪባንና ቀለበት ከሙዚቃ ጋር…',[('rhythmic gymnastics','ሪትሚክ ጅምናስቲክስ'),('long jump','የርዝመት ዝላይ'),('volleyball','መረብ ኳስ')]),
   H('In a forward roll, keep your chin…','ወደ ፊት ስትንከባለሉ አገጫችሁን…',[('tucked to your chest','ደረታችሁ ላይ'),('up high','ወደ ላይ'),('on the floor','መሬት ላይ')])]),SAFE],
 [H('Gymnastics improves…','ጅምናስቲክስ የሚያሻሽለው…',[('balance, strength and flexibility','ሚዛንን፣ ጥንካሬንና መተጣጠፍን'),('only eyesight','የዓይን እይታን ብቻ'),('nothing','ምንም')]),H('Gymnastics should be done on…','ጅምናስቲክስ መሠራት ያለበት በ…',[('a soft mat','ለስላሳ ፍራሽ'),('rocks','ድንጋይ'),('a road','መንገድ')]),
  H('Rhythmic gymnastics uses…','ሪትሚክ ጅምናስቲክስ የሚጠቀመው…',[('music and hand apparatus','ሙዚቃና የእጅ መሳሪያዎች'),('bicycles','ብስክሌት'),('nothing at all','ምንም')]),H('The vault is…','መዝለያ (vault)…',[('apparatus gymnastics','የመሳሪያ ጅምናስቲክስ'),('free gymnastics','ነፃ ጅምናስቲክስ'),('a dance','ዳንስ')])],
 notes(('Gymnastics builds balance, strength and flexibility through free, apparatus and rhythmic movements.','ጅምናስቲክስ በነፃ፣ በመሳሪያና በሪትሚክ እንቅስቃሴዎች ሚዛንን፣ ጥንካሬንና መተጣጠፍን ይገነባል።'),
  [('Free gymnastics: rolls, balances, bridges, jumps.','ነፃ ጅምናስቲክስ፦ መንከባለል፣ ሚዛን፣ ድልድይ፣ ዝላይ።'),('Apparatus: bars, beam, vault.','መሳሪያ፦ ዘንግ፣ ሚዛን ጣውላ፣ መዝለያ።'),('Rhythmic: music with ribbon, ball, hoop, rope.','ሪትሚክ፦ ሙዚቃ ከሪባን፣ ኳስ፣ ቀለበት፣ ገመድ ጋር።'),('Use a mat and a spotter for safety.','ለደህንነት ፍራሽና ረዳት ተጠቀሙ።')],
  [('ጅምናስቲክስ','gymnastics','የሰውነት ቅልጥፍና እንቅስቃሴ'),('ሚዛን','balance','ሳይወድቁ መቆም'),('ረዳት','spotter','ጉዳትን የሚከላከል ተጠባባቂ')],('Tuck, roll, stand tall!','ተጣጠፉ፣ ተንከባለሉ፣ ቀጥ ብላችሁ ቁሙ!'),
  [(('Name the 3 kinds of gymnastics','3ቱን የጅምናስቲክስ ዓይነቶች ጥቀሱ'),('free, apparatus, rhythmic','ነፃ፣ መሳሪያ፣ ሪትሚክ')),(('Why use a mat?','ፍራሽ ለምን?'),('to prevent injury','ጉዳትን ለመከላከል'))],
  (('Gymnastics show routine','የጅምናስቲክስ ትርዒት'),('Performers earn from shows at festivals. Create a 1-minute group routine for a school event.','ትርዒት አቅራቢዎች በፌስቲቫሎች ገቢ ያገኛሉ። ለትምህርት ቤት ዝግጅት የ1 ደቂቃ የቡድን ትርዒት ፍጠሩ።'),
   [('Choose music and 5 safe moves.','ሙዚቃና 5 ደህንነታቸው የተጠበቀ እንቅስቃሴዎችን ምረጡ።'),('Make ribbons from old cloth.','ከአሮጌ ጨርቅ ሪባን ሥሩ።'),('Practise with a spotter.','ከረዳት ጋር ተለማመዱ።'),('Perform and collect feedback.','አቅርቡና አስተያየት ሰብስቡ።')])),
 sm(('Gymnastics: balance, strength, flexibility','ጅምናስቲክስ፦ ሚዛን፣ ጥንካሬ፣ መተጣጠፍ'),[('Free gymnastics','ነፃ ጅምናስቲክስ'),('Apparatus','የመሳሪያ'),('Rhythmic','ሪትሚክ'),('Safety','ደህንነት')]),
 ('the meaning and types of gymnastics: free, apparatus and rhythmic','የጅምናስቲክስ ምንነትና ዓይነቶች፦ ነፃ፣ የመሳሪያና ሪትሚክ'))

# 6 Ball games
U(6,('Ball game skills','የኳስ ጨዋታዎች መሠረታዊ ክህሎት'),
 {'moves':[mv(('Volleyball: dig, set, pass','መረብ ኳስ፦ በክንድና በጣት ማቀበል'),('Dig (forearm pass) for low balls, set with fingertips for high balls.','ዝቅተኛ ኳስን በክንድ (ዲግ)፣ ከፍተኛ ኳስን በጣት ጫፍ (ሴት) አቀብሉ።'),
   [('🏐','Forearm pass (dig) to a partner','በክንድ ለአጋራችሁ አቀብሉ',10),('👐','Fingertip set above your forehead','ከግንባር በላይ በጣት ጫፍ ሴት አድርጉ',10)]),
  mv(('Football: inside and outside of the foot','እግር ኳስ፦ በውስጥና በውጭ የጎን እግር'),('Pass and receive with the inside of the foot for accuracy, the outside for quick changes.','ለትክክለኛነት በውስጥ የጎን እግር፣ ለፈጣን ለውጥ በውጭ የጎን እግር አቀብሉና ተቀበሉ።'),
   [('⚽','Inside-foot pass to a partner 5 m away','በ5 ሜትር ላለ አጋራችሁ በውስጥ እግር አቀብሉ',10),('↪️','Outside-foot pass around a cone','በውጭ የጎን እግር በኮን ዙሪያ አቀብሉ',8)]),
  mv(('Handball/basketball: chest and bounce pass','የእጅ/ቅርጫት ኳስ፦ የደረት ትይዩና የማንጠር ቅብብል'),('Chest pass: push the ball from the chest. Bounce pass: bounce it once before your partner.','የደረት ትይዩ፦ ኳሱን ከደረት ግፉ። በማንጠር፦ ከአጋራችሁ ፊት አንድ ጊዜ አንጥሩ።'),
   [('🤲','Chest pass with a partner','ከአጋራችሁ ጋር የደረት ትይዩ ቅብብል',10),('⬇️','Bounce pass with a partner','ከአጋራችሁ ጋር የማንጠር ቅብብል',10),('🏀','Dribble while walking','እየተራመዳችሁ ኳስ አንጥሩ',20)])]},
 [quiz(('Which skill?','የትኛው ክህሎት?'),('Each ball game has its own passing and receiving skills.','እያንዳንዱ የኳስ ጨዋታ የራሱ የማቀበልና የመቀበል ክህሎቶች አሉት።'),[
   H('A forearm pass in volleyball is called a…','በመረብ ኳስ በክንድ ማቀበል…ይባላል',[('dig','ዲግ'),('dribble','ድሪብል'),('header','ራስ ምታ')]),
   H('Setting the ball for a spike uses the…','ለመደፈቅ ኳስ ማመቻቸት የሚጠቀመው…',[('fingertips','የጣት ጫፎችን'),('feet','እግርን'),('head','ራስን')]),
   H('The most accurate short football pass uses the…','በጣም ትክክለኛው አጭር የእግር ኳስ ቅብብል የሚጠቀመው…',[('inside of the foot','የውስጥ የጎን እግርን'),('toes','የእግር ጣትን'),('heel','ተረከዝን')]),
   H('A pass that hits the floor once before the receiver is…','ከተቀባዩ ፊት አንድ ጊዜ መሬት የሚነካ ቅብብል…',[('bounce pass','የማንጠር ቅብብል'),('chest pass','የደረት ትይዩ ቅብብል'),('dig','ዲግ')])]),
  match(('Games and skills','ጨዋታዎችና ክህሎቶች'),('Match each ball game with one of its skills.','እያንዳንዱን የኳስ ጨዋታ ከአንዱ ክህሎቱ ጋር አዛምዱ።'),[[(('volleyball','መረብ ኳስ'),('dig and set','ዲግና ሴት')),(('football','እግር ኳስ'),('inside-foot pass','የውስጥ እግር ቅብብል')),(('basketball','ቅርጫት ኳስ'),('dribbling with the hand','በእጅ ማንጠር'))]]),SAFE],
 [H('In volleyball, high balls are played with the…','በመረብ ኳስ ከፍ ያሉ ኳሶች የሚጫወቱት በ…',[('fingertips (set)','የጣት ጫፍ (ሴት)'),('feet','እግር'),('elbows','ክርን')]),H('Small-sided games help players…','አነስተኛ ጨዋታዎች ተጫዋቾችን የሚረዱት…',[('touch the ball more and learn','ብዙ ኳስ እንዲነኩና እንዲማሩ'),('rest more','ብዙ እንዲያርፉ'),('fight','እንዲጣሉ')]),
  H('Chest pass starts from the…','የደረት ትይዩ ቅብብል የሚጀምረው ከ…',[('chest','ደረት'),('knees','ጉልበት'),('head','ራስ')]),H('To receive a football, you…','የእግር ኳስ ለመቀበል…',[('cushion it with the foot','በእግር አለስልሶ ማቆም'),('kick it hard away','አጥብቆ መምታት'),('catch it with hands','በእጅ መያዝ')])],
 notes(('Ball games need good passing and receiving; practise each skill, then use it in small games.','የኳስ ጨዋታዎች ጥሩ ማቀበልና መቀበል ይፈልጋሉ፤ እያንዳንዱን ክህሎት ተለማመዱ፤ ከዚያ በአነስተኛ ጨዋታ ተጠቀሙበት።'),
  [('Volleyball: dig (forearms), set (fingertips).','መረብ ኳስ፦ ዲግ (ክንድ)፣ ሴት (ጣት ጫፍ)።'),('Football: inside and outside of the foot.','እግር ኳስ፦ ውስጥና ውጭ የጎን እግር።'),('Handball/basketball: chest pass, bounce pass, dribbling.','የእጅ/ቅርጫት ኳስ፦ የደረት ትይዩ፣ የማንጠር ቅብብል፣ ማንጠር።'),('Small-sided games give more touches.','አነስተኛ ጨዋታዎች ብዙ ንክኪ ይሰጣሉ።')],
  [('ቅብብል','pass','ኳስ ማቀበል'),('ማንጠር','dribble','ኳስን እያነጠሩ መሄድ'),('ዲግ','dig','በክንድ ማቀበል')],('Pass, move, receive!','አቀብሉ፣ ተንቀሳቀሱ፣ ተቀበሉ!'),
  [(('Which part of the hand sets a volleyball?','መረብ ኳስ በየትኛው የእጅ ክፍል ይመቻቻል?'),('fingertips','የጣት ጫፍ')),(('Name 2 basketball passes','2 የቅርጫት ኳስ ቅብብሎች'),('chest pass, bounce pass','የደረት ትይዩ፣ የማንጠር'))],
  (('Homemade ball workshop','በቤት የሚሠራ ኳስ'),('Make strong balls from plastic bags and string and sell or donate them to younger pupils.','ከፕላስቲክ ከረጢትና ከክር ጠንካራ ኳሶችን ሥሩና ለታናናሽ ተማሪዎች ሽጡ ወይም ለግሱ።'),
   [('Collect clean plastic bags.','ንጹሕ የፕላስቲክ ከረጢቶችን ሰብስቡ።'),('Roll them tightly into a ball.','አጥብቃችሁ ጠቅልሉ።'),('Tie with string in a net pattern.','በመረብ ቅርጽ በክር እሰሩ።'),('Test bounce and kick; improve.','ማንጠርና መምታትን ፈትኑ፤ አሻሽሉ።')])),
 sm(('Pass and receive well in ball games','በኳስ ጨዋታዎች በደንብ አቀብሉና ተቀበሉ'),[('Volleyball','መረብ ኳስ'),('Football','እግር ኳስ'),('Hand passes','የእጅ ቅብብሎች'),('Small games','አነስተኛ ጨዋታዎች')]),
 ('passing and receiving skills in volleyball, football, handball and basketball, and small-sided games','በመረብ፣ በእግር፣ በእጅና በቅርጫት ኳስ የማቀበልና የመቀበል ክህሎቶችና አነስተኛ ጨዋታዎች'))

# 7 Traditional dances and games
U(7,('Traditional dances and games','የኢትዮጵያ ባህላዊ ጭፈራዎችና ጨዋታዎች'),
 {'beat':{'title':E('Eskista and dance beats','የእስክስታና የጭፈራ ምቶች'),'tip':E('Traditional dances follow strong beats. Listen, then copy: 👏 = clap, 🦶 = stamp.','ባህላዊ ጭፈራዎች ጠንካራ ምት ይከተላሉ። አዳምጡ፣ ከዚያ ድገሙ፦ 👏 = ማጨብጨብ፣ 🦶 = መርገጥ።'),'R':[['🦶','👏','🦶','👏','👏','🦶'],['👏','👏','🦶','🦶','👏','🦶','🦶'],['🦶','🦶','👏','🦶','👏','👏','🦶']]},
  'moves':[mv(('Dance moves','የጭፈራ እንቅስቃሴዎች'),('Dances of the Amhara region use the shoulders, neck, chest and feet. Practise gently.','የአማራ ክልል ጭፈራዎች ትከሻን፣ አንገትን፣ ደረትንና እግርን ይጠቀማሉ። ቀስ ብላችሁ ተለማመዱ።'),
   [('💃','Shoulder shakes (eskista) to the beat','በምቱ የትከሻ ውዝዋዜ (እስክስታ)',16),('🦶','Step-and-stamp in a circle','በክብ እየረገጣችሁ ተራመዱ',16),('👏','Clap and turn with a partner','እያጨበጨባችሁ ከአጋራችሁ ጋር ዙሩ',8)]),
  mv(('Traditional games','ባህላዊ ጨዋታዎች'),('Gudib jump is the root of the long jump; Gite trains aiming; Suzi trains jumping.','የጉድብ ዝላይ የርዝመት ዝላይ መነሻ ነው፤ ጊጤ ማነጣጠርን፣ ሱዚ መዝለልን ያለማምዳሉ።'),
   [('🏞️','Gudib jump over a marked "stream" (2 lines)','በተሰመረ "ወንዝ" (2 መስመሮች) ላይ የጉድብ ዝላይ',5),('🎯','Gite: throw a stick at a target','ጊጤ፦ ዘንግ ወደ ኢላማ ወርውሩ',6),('🦘','Suzi: hop through squares on the ground','ሱዚ፦ መሬት ላይ በተሳሉ ካሬዎች ውስጥ ዝለሉ',3)])]},
 [match(('Dances of the Amhara region','የአማራ ክልል ባህላዊ ጭፈራዎች'),('Each zone has its own dance style.','እያንዳንዱ ዞን የራሱ የጭፈራ ስልት አለው።'),[[(('Gondar','ጎንደር'),('Gondar dance','የጎንደር ጭፈራ')),(('Gojjam','ጎጃም'),('Gojjam dance','የጎጃም ጭፈራ')),(('Wollo','ወሎ'),('Wollo dance','የወሎ ጭፈራ'))],[(('North Shewa','ሰሜን ሸዋ'),('Shewa dance','የሰሜን ሸዋ ጭፈራ')),(('Wag Hemra','ዋግ ኽምራ'),('Wag Hemra dance','የዋግኽምራ ጭፈራ')),(('Awi','አዊ'),('Awi dance','የአዊ ጭፈራ'))]]),
  quiz(('Dances and games for fitness','ጭፈራና ጨዋታ ለአካል ብቃት'),('Traditional dances and games keep culture alive and build fitness, rhythm and teamwork.','ባህላዊ ጭፈራዎችና ጨዋታዎች ባህልን ሕያው ያደርጋሉ፤ የአካል ብቃትን፣ ምትንና ቡድናዊነትን ይገነባሉ።'),[
   H('Eskista mainly moves the…','እስክስታ በዋናነት የሚያንቀሳቅሰው…',[('shoulders, neck and chest','ትከሻን፣ አንገትንና ደረትን'),('only the feet','እግርን ብቻ'),('only the eyes','ዓይንን ብቻ')]),
   H('Gudib jump was the base for the modern…','የጉድብ ዝላይ ለዘመናዊው … መነሻ ነው',[('long jump','የርዝመት ዝላይ'),('high jump only','የከፍታ ዝላይ ብቻ'),('swimming','ዋና')]),
   H('Gite trains…','ጊጤ የሚያለማምደው…',[('aiming and throwing','ማነጣጠርና መወርወርን'),('sleeping','መተኛትን'),('singing','መዝፈንን')]),
   H('Traditional games are important because they…','ባህላዊ ጨዋታዎች አስፈላጊ የሆኑት…',[('keep culture alive and build fitness','ባህልን ስለሚጠብቁና ብቃትን ስለሚገነቡ'),('are expensive','ውድ ስለሆኑ'),('need machines','ማሽን ስለሚፈልጉ')])]),SAFE],
 [H('Gojjam and Gondar dances are from the … region.','የጎጃምና የጎንደር ጭፈራዎች የ… ክልል ናቸው',[('Amhara','አማራ'),('Afar','አፋር'),('Somali','ሶማሌ')]),H('A traditional game that jumps over a stream is…','ወንዝን የሚዘለል ባህላዊ ጨዋታ…',[('Gudib jump','የጉድብ ዝላይ'),('Gebeta','ገበጣ'),('Gite','ጊጤ')]),
  H('Traditional dances develop…','ባህላዊ ጭፈራዎች የሚያዳብሩት…',[('rhythm and fitness','ምትንና የአካል ብቃትን'),('laziness','ስንፍናን'),('nothing','ምንም')]),H('Traditional games have…','ባህላዊ ጨዋታዎች…አሏቸው',[('their own rules','የራሳቸው ደንብ'),('no rules','ደንብ የላቸውም'),('only one player','አንድ ተጫዋች ብቻ')])],
 notes(('Traditional dances and games of the Amhara region express culture and build fitness.','የአማራ ክልል ባህላዊ ጭፈራዎችና ጨዋታዎች ባህልን ይገልጻሉ፣ የአካል ብቃትን ይገነባሉ።'),
  [('Dances: Gondar, Gojjam, North Shewa, Wollo, Kemise, Wag Hemra, Awi.','ጭፈራዎች፦ ጎንደር፣ ጎጃም፣ ሰሜን ሸዋ፣ ወሎ፣ ከሚሴ፣ ዋግ ኽምራ፣ አዊ።'),('Eskista uses shoulders, neck and chest.','እስክስታ ትከሻን፣ አንገትንና ደረትን ይጠቀማል።'),('Games: Gudib jump, ball snatching, Gite, Suzi.','ጨዋታዎች፦ የጉድብ ዝላይ፣ ኳስ ማስጣል፣ ጊጤ፣ ሱዚ።'),('They build fitness, rhythm and unity.','የአካል ብቃትን፣ ምትንና አንድነትን ይገነባሉ።')],
  [('ባህላዊ ጭፈራ','traditional dance','የማኅበረሰብ ባህላዊ ውዝዋዜ'),('እስክስታ','eskista','የትከሻ ውዝዋዜ'),('ባህላዊ ጨዋታ','traditional game','በባህል የሚጫወቱት ጨዋታ')],('Our dances, our identity.','ጭፈራችን ማንነታችን።'),
  [(('Name 3 Amhara dances','3 የአማራ ጭፈራዎችን ጥቀሱ'),('Gondar, Gojjam, Wollo','ጎንደር፣ ጎጃም፣ ወሎ')),(('Which modern event comes from Gudib jump?','ከጉድብ ዝላይ የመጣው ዘመናዊ ውድድር?'),('long jump','የርዝመት ዝላይ'))],
  (('Culture night performance','የባህል ምሽት ትርዒት'),('Cultural groups earn from performances. Prepare a dance and games show for parents.','የባህል ቡድኖች በትርዒት ገቢ ያገኛሉ። ለወላጆች የጭፈራና የጨዋታ ትርዒት አዘጋጁ።'),
   [('Choose one local dance and one game.','አንድ የአካባቢ ጭፈራና አንድ ጨዋታ ምረጡ።'),('Ask an elder to teach the steps.','እርምጃዎቹን እንዲያስተምሩ አረጋዊን ጠይቁ።'),('Practise in groups each week.','በየሳምንቱ በቡድን ተለማመዱ።'),('Perform at a school culture night.','በትምህርት ቤት የባህል ምሽት አቅርቡ።')])),
 sm(('Dance and play the traditional way','በባህላዊ መንገድ ጨፍሩ፣ ተጫወቱ'),[('Amhara dances','የአማራ ጭፈራዎች'),('Eskista','እስክስታ'),('Traditional games','ባህላዊ ጨዋታዎች'),('Fitness and unity','ብቃትና አንድነት')]),
 ('traditional dances of the Amhara region and traditional games such as Gudib jump, Gite and Suzi','የአማራ ክልል ባህላዊ ጭፈራዎችና እንደ ጉድብ ዝላይ፣ ጊጤና ሱዚ ያሉ ባህላዊ ጨዋታዎች'))
dump('hpe')
