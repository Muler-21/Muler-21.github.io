import sys;sys.path.insert(0,'.')
from common6 import *
SN=E('Health & Physical Education','ጤናና ሰውነት ማጎልመሻ')
B="(d=>[...(d.beat?[K1.beat(d.beat.title,d.beat.tip,d.beat.R)]:[]),...d.moves.map(m=>K1.moveMission(m.title,m.tip,m.steps))])"
def mv(title,tip,steps): return {'title':E(*title),'tip':E(*tip),'steps':[{'e':e,'en':en,'am':am,'n':n} for e,en,am,n in steps]}
def H(en,am,opts,a=0): return {'q':E(en,am),'o':[o if isinstance(o,str) else E(*o) for o in opts],'a':a}
def U(n,title,data,extra,exam,nt,summ,foot):
    unit(f'g6-health-{n}','health',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 6 Health & PE student book (ANRS), Chapter {n}: {foot[0]}.',f'በ6ኛ ክፍል የጤናና ሰ/ማጎልመሻ መጽሐፍ ምዕራፍ {n} ላይ የተመሰረተ፦ {foot[1]}።'),B,data,extra,exam,nt,summ)
SAFE=quiz(('Safety first','ደህንነት ቅድሚያ'),('Warm up, check the ground and equipment, wear suitable clothes, and cool down and drink water after exercise.','ሰውነትን አሟሙቁ፣ ሜዳውንና መሳሪያውን ፈትሹ፣ ተስማሚ ልብስ ልበሱ፣ ከእንቅስቃሴ በኋላ አቀዝቅዙና ውኃ ጠጡ።'),[
 H('Before exercise we…','ከእንቅስቃሴ በፊት…',[('warm up','ሰውነትን እናሟሙቃለን'),('eat a big meal','ብዙ እንበላለን'),('sleep','እንተኛለን')]),H('If a classmate is hurt, we…','የክፍል ጓደኛ ቢጎዳ…',[('stop and tell the teacher','አቁመን ለመምህሩ እንነግራለን'),('keep playing','መጫወታችንን እንቀጥላለን'),('laugh','እንስቃለን')])])

# 1 PE and sport
U(1,('Physical education and sport','የሰውነት ማጎልመሻ ትምህርትና ስፖርት'),
 {'moves':[mv(('Warm-up before sport','ከስፖርት በፊት ማሟሟቂያ'),('A warm-up raises your heart rate and loosens muscles, which prevents injury.','ማሟሟቂያ የልብ ምትን ከፍ ያደርጋል፣ ጡንቻን ያላላል፤ ጉዳትን ይከላከላል።'),
   [('🏃','Jog gently on the spot','በቦታችሁ ቀስ ብላችሁ ሩጡ',30),('🔄','Circle your arms forward and back','ክንዶቻችሁን ወደ ፊትና ወደ ኋላ አሽከርክሩ',10),('🦵','Swing each leg forward and back','እያንዳንዱን እግር ወደ ፊትና ወደ ኋላ አወዛውዙ',8),('🙆','Stretch up high, then touch your toes','ወደ ላይ ተዘርጉ፣ ከዚያ የእግር ጣታችሁን ንኩ',6)])]},
 [quiz(('The Olympic flag, emblem and motto','የኦሎምፒክ ሰንደቅ ዓላማ፣ አርማና መሪ ቃል'),('The Olympic flag is white with five rings (blue, yellow, black, green, red) that stand for five continents. The motto "Citius, Altius, Fortius" means faster, higher, stronger.','የኦሎምፒክ ሰንደቅ ዓላማ ነጭ ሲሆን አምስት አህጉራትን የሚወክሉ አምስት ቀለበቶች (ሰማያዊ፣ ቢጫ፣ ጥቁር፣ አረንጓዴ፣ ቀይ) አሉት። መሪ ቃሉ "ሲቲየስ፣ አልቲየስ፣ ፎርቲየስ" ማለት ፈጣን፣ ከፍ ያለ፣ ጠንካራ ነው።'),[
   H('The five Olympic rings stand for…','አምስቱ የኦሎምፒክ ቀለበቶች የሚወክሉት…',[('five continents','አምስት አህጉራትን'),('five sports','አምስት ስፖርቶችን'),('five winners','አምስት አሸናፊዎችን')]),
   H('"Citius, Altius, Fortius" means…','"ሲቲየስ፣ አልቲየስ፣ ፎርቲየስ" ማለት…',[('faster, higher, stronger','ፈጣን፣ ከፍ ያለ፣ ጠንካራ'),('run, jump, swim','ሩጥ፣ ዝለል፣ ዋኝ'),('gold, silver, bronze','ወርቅ፣ ብር፣ ነሐስ')]),
   H('The background of the Olympic flag is…','የኦሎምፒክ ሰንደቅ ዓላማ መደብ…',[('white','ነጭ'),('green','አረንጓዴ'),('blue','ሰማያዊ')]),
   H('Sport injuries can be prevented by…','የስፖርት ጉዳትን መከላከል የሚቻለው…',[('warming up and using safe equipment','በማሟሟቅና ደህንነቱ የተጠበቀ መሳሪያ በመጠቀም'),('skipping rest','እረፍት ባለመውሰድ'),('playing when injured','ተጎድቶ በመጫወት')])]),
  quiz(('Famous Ethiopian sports people','ዝነኛ የኢትዮጵያ ስፖርተኞች'),('Besides winning, famous athletes help the country through investment, jobs and community work. Kenenisa Bekele was born in Bekoji, Arsi; coach Sewnet Bishaw was born in Bure, West Gojjam.','ዝነኛ ስፖርተኞች ከማሸነፍ በተጨማሪ በኢንቨስትመንት፣ በሥራ ፈጠራና በማኅበራዊ ተሳትፎ ሀገርን ይጠቅማሉ። ቀነኒሳ በቀለ በበቆጂ፣ አርሲ፤ አሰልጣኝ ሰውነት ቢሻው በቡሬ፣ ምዕራብ ጎጃም ተወለዱ።'),[
   H('Kenenisa Bekele is known for…','ቀነኒሳ በቀለ የሚታወቀው…',[('a very fast finish in long races','በረጅም ርቀት መጨረሻ ላይ በፍጥነት'),('swimming','በዋና'),('boxing','በቦክስ')]),
   H('Sewnet Bishaw is a famous…','ሰውነት ቢሻው ታዋቂ … ነው',[('football coach','የእግር ኳስ አሰልጣኝ'),('runner','ሯጭ'),('singer','ዘፋኝ')]),
   H('How do athletes help society besides sport?','ስፖርተኞች ከስፖርት ውጪ ማኅበረሰቡን እንዴት ይጠቅማሉ?',[('by investing and creating jobs','ኢንቨስት በማድረግና ሥራ በመፍጠር'),('by stopping school','ትምህርት በማቆም'),('they don\'t','አይጠቅሙም')])]),
  SAFE],
 [H('How many Olympic rings are there?','የኦሎምፒክ ቀለበቶች ስንት ናቸው?',['5','4','6']),H('"Fortius" means…','"ፎርቲየስ" ማለት…',[('stronger','ጠንካራ'),('faster','ፈጣን'),('higher','ከፍ ያለ')]),
  H('Kenenisa Bekele was born in…','ቀነኒሳ በቀለ የተወለደው በ…',[('Bekoji','በቆጂ'),('Bure','ቡሬ'),('Gondar','ጎንደር')]),H('One aim of PE is…','የሰ/ማጎልመሻ አንዱ ዓላማ…',[('healthy body and teamwork','ጤናማ አካልና ቡድናዊነት'),('making money only','ገንዘብ ብቻ'),('avoiding friends','ጓደኛን መራቅ')])],
 notes(('PE builds a healthy body and mind; the Olympic symbols remind us of unity, and our athletes serve the nation on and off the track.','ሰ/ማጎልመሻ ጤናማ አካልና አእምሮ ይገነባል፤ የኦሎምፒክ ምልክቶች አንድነትን ያስታውሱናል፤ ስፖርተኞቻችን በሜዳም ከሜዳ ውጪም ሀገርን ያገለግላሉ።'),
  [('Aims of PE: health, fitness, skills, teamwork.','የሰ/ማጎልመሻ ዓላማዎች፦ ጤና፣ ብቃት፣ ክህሎት፣ ቡድናዊነት።'),('Prevent injury: warm up, safe ground, rest.','ጉዳትን መከላከል፦ ማሟሟቅ፣ ደህና ሜዳ፣ እረፍት።'),('Olympic flag: five rings = five continents; motto: faster, higher, stronger.','የኦሎምፒክ ሰንደቅ፦ አምስት ቀለበቶች = አምስት አህጉራት፤ መሪ ቃል፦ ፈጣን፣ ከፍ ያለ፣ ጠንካራ።'),('Athletes like Kenenisa invest and create jobs.','እንደ ቀነኒሳ ያሉ ስፖርተኞች ኢንቨስት ያደርጋሉ፣ ሥራ ይፈጥራሉ።')],
  [('ስፖርት','sport','በሕግ የሚመራ የአካል ውድድር'),('መሪ ቃል','motto','አጭር የዓላማ መግለጫ'),('ኢንቨስትመንት','investment','ገንዘብን ለልማት ማዋል')],('Faster, higher, stronger — together!','ፈጣን፣ ከፍ ያለ፣ ጠንካራ — በጋራ!'),
  [(('Colours of the Olympic rings','የኦሎምፒክ ቀለበቶች ቀለማት'),('blue, yellow, black, green, red','ሰማያዊ፣ ቢጫ፣ ጥቁር፣ አረንጓዴ፣ ቀይ')),(('Name an Ethiopian athlete who invests','ኢንቨስት የሚያደርግ ኢትዮጵያዊ ስፖርተኛ ጥቀሱ'),('Kenenisa Bekele','ቀነኒሳ በቀለ'))],
  (('School mini-Olympics','የትምህርት ቤት አነስተኛ ኦሎምፒክ'),('Event organisers plan sports days that bring communities together. Plan a class mini-Olympics.','የዝግጅት አስተባባሪዎች ማኅበረሰቡን የሚያቀራርቡ የስፖርት ቀናትን ያቅዳሉ። የክፍል አነስተኛ ኦሎምፒክ አቅዱ።'),
   [('Make a flag with five rings.','አምስት ቀለበት ያለው ሰንደቅ ሥሩ።'),('Choose 4 safe events.','4 ደህንነታቸው የተጠበቀ ውድድሮችን ምረጡ።'),('Write fair rules and a safety plan.','ፍትሐዊ ሕጎችና የደህንነት ዕቅድ ጻፉ።'),('Hold it and award fair-play prizes.','አካሂዱትና የጨዋነት ሽልማት ስጡ።')])),
 sm(('PE, the Olympics and our heroes','ሰ/ማጎልመሻ፣ ኦሎምፒክና ጀግኖቻችን'),[('Aims of PE','የሰ/ማጎልመሻ ዓላማዎች'),('Preventing injury','ጉዳትን መከላከል'),('Olympic symbols','የኦሎምፒክ ምልክቶች'),('Athletes in society','ስፖርተኞች በማኅበረሰብ')]),
 ('the aims of PE, sport, injury prevention, the Olympic flag, emblem and motto, and Ethiopian athletes in society','የሰ/ማጎልመሻ ዓላማዎች፣ ስፖርት፣ ጉዳትን መከላከል፣ የኦሎምፒክ ሰንደቅ፣ አርማና መሪ ቃል፣ ስፖርተኞች በማኅበረሰብ'))

# 2 Social-emotional games
U(2,('Games for social and emotional growth','ማኅበራዊና ስሜታዊ እድገትን የሚያዳብሩ ጨዋታዎች'),
 {'moves':[mv(('Mirror and trust games','የመስታወትና የመተማመን ጨዋታዎች'),('Copy a partner like a mirror, then guide them gently. These games build self-control and trust.','ጓደኛችሁን እንደ መስታወት ኮርጁ፣ ከዚያ በጥንቃቄ ምሩት። እነዚህ ጨዋታዎች ራስን መቆጣጠርንና መተማመንን ያዳብራሉ።'),
   [('🪞','Mirror your partner\'s slow arm moves','የጓደኛችሁን ቀስ ያሉ የክንድ እንቅስቃሴዎች ኮርጁ',10),('🧘','Freeze like a statue and breathe slowly','እንደ ሐውልት ቁሙና ቀስ ብላችሁ ተንፍሱ',5),('🤝','Hold hands in a circle and pass a squeeze','በክብ እጅ ለእጅ ተያይዛችሁ ጭምቅታ አስተላልፉ',3),('👏','Clap a rhythm, the group copies it','ምት አጨብጭቡ፣ ቡድኑ ይድገመው',4)])]},
 [quiz(('Skills these games build','ጨዋታዎቹ የሚያዳብሯቸው ክህሎቶች'),('Self-awareness (knowing your feelings), self-management (controlling them), social awareness (understanding others), relationship skills (working together) and responsible decisions.','ራስን ማወቅ (ስሜትን መረዳት)፣ ራስን መምራት (መቆጣጠር)፣ ማኅበራዊ ግንዛቤ (ሌሎችን መረዳት)፣ የግንኙነት ክህሎት (አብሮ መሥራት) እና ኃላፊነት ያለበት ውሳኔ።'),[
   H('Knowing your own feelings is…','የራስን ስሜት ማወቅ…',[('self-awareness','ራስን ማወቅ'),('teamwork','ቡድናዊነት'),('speed','ፍጥነት')]),
   H('You lose a game and feel angry. The best choice is…','ጨዋታ ተሸንፋችሁ ተናደዳችሁ። ምርጡ ምርጫ…',[('breathe, calm down and shake hands','ተንፍሳችሁ ተረጋጉና እጅ ተጨባበጡ'),('shout at the winner','አሸናፊውን መጮህ'),('break the ball','ኳሱን መስበር')]),
   H('A teammate is left out. You should…','አንድ የቡድን ጓደኛ ተገለለ። …',[('invite them to join','እንዲቀላቀል ጋብዙት'),('ignore them','ችላ በሉት'),('laugh','ሳቁ')]),
   H('Thinking about results before acting is…','ከመሥራት በፊት ውጤቱን ማሰብ…',[('responsible decision-making','ኃላፊነት ያለበት ውሳኔ'),('guessing','መገመት'),('luck','ዕድል')])]),
  sortm(('Good team player?','ጥሩ የቡድን ተጫዋች?'),('Good players help, encourage and follow the rules.','ጥሩ ተጫዋቾች ይረዳሉ፣ ያበረታታሉ፣ ሕግ ያከብራሉ።'),[('Good','ጥሩ'),('Not good','ጥሩ ያልሆነ')],[(('encourages others','ሌሎችን ያበረታታል'),0),(('shares the ball','ኳስ ያቀብላል'),0),(('accepts the referee\'s decision','የዳኛውን ውሳኔ ይቀበላል'),0),(('cheats','ያጭበረብራል'),1),(('blames others','ሌሎችን ይወቅሳል'),1),(('plays alone','ብቻውን ይጫወታል'),1)]),
  SAFE],
 [H('Working well with others is a…','ከሌሎች ጋር በደንብ መሥራት…',[('relationship skill','የግንኙነት ክህሎት'),('weakness','ድክመት'),('rule','ሕግ')]),H('Controlling anger is…','ቁጣን መቆጣጠር…',[('self-management','ራስን መምራት'),('self-harm','ራስን መጉዳት'),('cheating','ማጭበርበር')]),
  H('Thinking games develop…','የማሰብ ጨዋታዎች … ያዳብራሉ',[('critical thinking','በጥልቀት ማሰብ'),('only muscles','ጡንቻ ብቻ'),('nothing','ምንም')]),H('After a game, good players…','ከጨዋታ በኋላ ጥሩ ተጫዋቾች…',[('shake hands','እጅ ይጨባበጣሉ'),('fight','ይጣላሉ'),('run away','ይሸሻሉ')])],
 notes(('Games can teach us to know ourselves, control our feelings, understand others and decide wisely.','ጨዋታዎች ራሳችንን እንድናውቅ፣ ስሜታችንን እንድንቆጣጠር፣ ሌሎችን እንድንረዳና በጥበብ እንድንወስን ያስተምሩናል።'),
  [('Self-awareness and self-management.','ራስን ማወቅና ራስን መምራት።'),('Social awareness: understand and include others.','ማኅበራዊ ግንዛቤ፦ ሌሎችን መረዳትና ማካተት።'),('Responsible decisions and critical thinking.','ኃላፊነት ያለበት ውሳኔና በጥልቀት ማሰብ።'),('Cooperation: win and lose with respect.','ትብብር፦ በአክብሮት ማሸነፍና መሸነፍ።')],
  [('ራስን ማወቅ','self-awareness','የራስን ስሜት መረዳት'),('ትብብር','cooperation','አብሮ መሥራት'),('ውሳኔ','decision','ምርጫ ማድረግ')],('Play fair, play together.','በፍትሐዊነት፣ በጋራ ተጫወቱ።'),
  [(('One way to calm down','ለመረጋጋት አንድ መንገድ'),('breathe slowly','ቀስ ብሎ መተንፈስ')),(('What does a good loser do?','ጥሩ ተሸናፊ ምን ያደርጋል?'),('congratulates the winner','አሸናፊውን ያመሰግናል'))],
  (('Playground peace helpers','የመጫወቻ ሜዳ ሰላም አስከባሪዎች'),('Mediators help people solve conflicts. Train a team of playground peace helpers.','አስታራቂዎች ሰዎች ግጭትን እንዲፈቱ ይረዳሉ። የመጫወቻ ሜዳ ሰላም አስከባሪ ቡድን አሠልጥኑ።'),[('Choose 4 volunteers.','4 በጎ ፈቃደኞችን ምረጡ።'),('Practise "stop, listen, solve".','"አቁም፣ አዳምጥ፣ ፍታ"ን ተለማመዱ።'),('Make badges.','ባጅ ሥሩ።'),('Help at break time each week.','በየሳምንቱ በእረፍት ሰዓት እርዱ።')])),
 sm(('Games grow good hearts and minds','ጨዋታዎች መልካም ልብና አእምሮ ያሳድጋሉ'),[('Knowing myself','ራሴን ማወቅ'),('Understanding others','ሌሎችን መረዳት'),('Wise decisions','ጥበበኛ ውሳኔ'),('Cooperation','ትብብር')]),
 ('games that build self-awareness, social awareness, responsible decisions, critical thinking and cooperation','ራስን ማወቅን፣ ማኅበራዊ ግንዛቤን፣ ኃላፊነት ያለበት ውሳኔን፣ በጥልቀት ማሰብንና ትብብርን የሚያዳብሩ ጨዋታዎች'))

# 3 Health and fitness
U(3,('Health and fitness','ጤናና የአካል ብቃት'),
 {'moves':[mv(('Heart and lungs','ልብና ሳንባ'),('Endurance activities make the heart and lungs stronger.','የብርታት እንቅስቃሴዎች ልብንና ሳንባን ያጠነክራሉ።'),[('🏃','Jog on the spot','በቦታችሁ ሩጡ',40),('⭐','Star jumps','የኮከብ ዝላይ',15),('🦘','Skip with an imaginary rope','በምናባዊ ገመድ ዝለሉ',30)]),
   mv(('Muscles, flexibility and agility','ጡንቻ፣ መተጣጠፍና ቅልጥፍና'),('Build strong muscles, bend safely and change direction quickly.','ጡንቻን አጠንክሩ፣ በደህንነት ተጣጠፉ፣ አቅጣጫን በፍጥነት ቀይሩ።'),[('💪','Wall push-ups','በግድግዳ ላይ ፑሽ አፕ',10),('🪑','Squats','ቁጢጥ ብድግ',10),('🙇','Sit and reach for your toes','ተቀምጣችሁ የእግር ጣታችሁን ለመንካት ተዘርጉ',5),('↔️','Side steps left and right fast','ወደ ግራና ቀኝ በፍጥነት ተራመዱ',20)])]},
 [quiz(('Kinds of fitness','የአካል ብቃት ዓይነቶች'),('Health-related fitness: heart-lung endurance, muscle strength and endurance, flexibility and body composition. Skill-related fitness includes agility, speed and balance.','ከጤና ጋር የተያያዘ ብቃት፦ የልብና የአተነፋፈስ ብርታት፣ የጡንቻ ጥንካሬና ብርታት፣ መተጣጠፍና የሰውነት ውህደት። ከክህሎት ጋር የተያያዘ ብቃት ቅልጥፍና፣ ፍጥነትና ሚዛንን ያካትታል።'),[
   H('Running for a long time builds…','ረጅም ጊዜ መሮጥ … ያዳብራል',[('heart-lung endurance','የልብና የአተነፋፈስ ብርታት'),('flexibility only','መተጣጠፍ ብቻ'),('nothing','ምንም')]),
   H('Push-ups build…','ፑሽ አፕ … ያዳብራል',[('muscle strength','የጡንቻ ጥንካሬ'),('flexibility','መተጣጠፍ'),('hearing','መስማት')]),
   H('Touching your toes tests…','የእግር ጣትን መንካት … ይፈትሻል',[('flexibility','መተጣጠፍ'),('speed','ፍጥነት'),('strength','ጥንካሬ')]),
   H('Quickly changing direction is…','አቅጣጫን በፍጥነት መቀየር…',[('agility','ቅልጥፍና'),('endurance','ብርታት'),('balance','ሚዛን')])]),
  quiz(('The harm of doping','የአበረታች ቅመሞች (ዶፒንግ) ጉዳት'),('Doping means using banned drugs to win. It is cheating and damages health: heart disease, high blood pressure, joint pain and more. Athletes who dope are punished.','ዶፒንግ ለማሸነፍ የተከለከሉ መድኃኒቶችን መጠቀም ነው። ማጭበርበር ሲሆን ጤናን ይጎዳል፦ የልብ ሕመም፣ የደም ግፊት፣ የመገጣጠሚያ ሕመምና ሌሎች። ዶፒንግ የሚጠቀሙ ስፖርተኞች ይቀጣሉ።'),[
   H('Doping is…','ዶፒንግ…',[('cheating with banned drugs','በተከለከሉ መድኃኒቶች ማጭበርበር'),('healthy training','ጤናማ ልምምድ'),('a type of food','የምግብ ዓይነት')]),
   H('Doping can cause…','ዶፒንግ … ሊያስከትል ይችላል',[('heart disease','የልብ ሕመም'),('better health','የተሻለ ጤና'),('longer life','ረጅም ዕድሜ')]),
   H('The honest way to win is…','በሐቀኝነት ለማሸነፍ…',[('training, good food and rest','ልምምድ፣ ጥሩ ምግብና እረፍት'),('secret pills','ሚስጥራዊ ኪኒኖች'),('cheating','ማጭበርበር')])]),
  SAFE],
 [H('Which builds heart-lung endurance?','የልብና የአተነፋፈስ ብርታትን የሚያዳብረው?',[('long-distance running','የረጅም ርቀት ሩጫ'),('sitting','መቀመጥ'),('sleeping','መተኛት')]),H('Stretching improves…','መዘርጋት … ያሻሽላል',[('flexibility','መተጣጠፍ'),('hunger','ረሃብ'),('noise','ድምፅ')]),
  H('An athlete caught doping…','ዶፒንግ ሲጠቀም የተገኘ ስፖርተኛ…',[('is punished','ይቀጣል'),('gets a prize','ይሸለማል'),('nothing happens','ምንም አይሆንም')]),H('Agility helps in…','ቅልጥፍና በ… ይረዳል',[('football and dodging games','በእግር ኳስና በማምለጥ ጨዋታዎች'),('sleeping','በእንቅልፍ'),('reading','በንባብ')])],
 notes(('Fitness has several parts we can train safely; doping is cheating that harms health.','የአካል ብቃት በደህንነት ልናሠለጥናቸው የምንችላቸው ብዙ ክፍሎች አሉት፤ ዶፒንግ ጤናን የሚጎዳ ማጭበርበር ነው።'),
  [('Heart-lung endurance: running, skipping.','የልብና የአተነፋፈስ ብርታት፦ ሩጫ፣ ገመድ ዝላይ።'),('Muscle strength: push-ups, squats.','የጡንቻ ጥንካሬ፦ ፑሽ አፕ፣ ቁጢጥ ብድግ።'),('Flexibility and agility: stretching, quick steps.','መተጣጠፍና ቅልጥፍና፦ መዘርጋት፣ ፈጣን እርምጃ።'),('Doping: banned, unfair and harmful.','ዶፒንግ፦ የተከለከለ፣ ፍትሐዊ ያልሆነና ጎጂ።')],
  [('ብርታት','endurance','ለረጅም ጊዜ የመቆየት አቅም'),('መተጣጠፍ','flexibility','በቀላሉ የመታጠፍ ችሎታ'),('ዶፒንግ','doping','የተከለከለ አበረታች መጠቀም')],('Train hard, play clean!','ጠንክራችሁ ተለማመዱ፣ በንጽሕና ተወዳደሩ!'),
  [(('Exercise for muscle strength','ለጡንቻ ጥንካሬ እንቅስቃሴ'),('push-ups','ፑሽ አፕ')),(('Why is doping wrong?','ዶፒንግ ለምን ስሕተት ነው?'),('it is cheating and harms health','ማጭበርበር ነው፤ ጤናን ይጎዳል'))],
  (('Family fitness challenge','የቤተሰብ የአካል ብቃት ውድድር'),('Fitness coaches design programmes for families. Make a 4-week family fitness card.','የአካል ብቃት አሰልጣኞች ለቤተሰብ ፕሮግራም ይቀርጻሉ። የ4 ሳምንት የቤተሰብ የአካል ብቃት ካርድ አዘጋጁ።'),[('Pick one exercise for each fitness type.','ለእያንዳንዱ የብቃት ዓይነት አንድ እንቅስቃሴ ምረጡ።'),('Set small weekly goals.','ትናንሽ ሳምንታዊ ግቦችን አስቀምጡ።'),('Record everyone\'s progress.','የሁሉንም እድገት መዝግቡ።'),('Celebrate together at the end.','በመጨረሻ በጋራ አክብሩ።')])),
 sm(('Fit, healthy and fair','ብቁ፣ ጤናማና ፍትሐዊ'),[('Endurance','ብርታት'),('Muscle strength','የጡንቻ ጥንካሬ'),('Flexibility and agility','መተጣጠፍና ቅልጥፍና'),('No to doping','ለዶፒንግ እምቢ')]),
 ('kinds of fitness, endurance, muscle strength, flexibility, agility and the harm of doping','የአካል ብቃት ዓይነቶች፣ ብርታት፣ የጡንቻ ጥንካሬ፣ መተጣጠፍ፣ ቅልጥፍናና የዶፒንግ ጉዳት'))

# 4 Athletics
U(4,('Athletics','አትሌቲክስ'),
 {'moves':[mv(('Sprint start and running form','የአጭር ርቀት አጀማመርና የሩጫ አቋም'),('Sprinters start low, push hard, and pump their arms. Distance runners pace themselves.','የአጭር ርቀት ሯጮች ዝቅ ብለው ይጀምራሉ፣ በኃይል ይገፋሉ፣ ክንዳቸውን ያወዛውዛሉ። የረጅም ርቀት ሯጮች ፍጥነታቸውን ይመጥናሉ።'),
   [('🧎','"On your marks": kneel, hands behind the line','"ቦታ ያዙ"፦ ተንበርከኩ፣ እጃችሁን ከመስመሩ ኋላ አድርጉ',3),('🏃','"Set", then "Go!": burst forward 10 steps','"ተዘጋጁ"፣ ከዚያ "ሂድ!"፦ 10 እርምጃ በኃይል ወደፊት',3),('💪','Pump your arms while running on the spot','በቦታችሁ እየሮጣችሁ ክንዳችሁን አወዛውዙ',20)]),
   mv(('Throwing and triple jump','ውርወራና ስሉስ ዝላይ'),('The triple jump is hop, step and jump. Throw with a strong push from the legs and body.','ስሉስ ዝላይ በአንድ እግር መዝለል፣ ማራመድና መዝለል ነው። ከእግርና ከሰውነት በሚመጣ ኃይል ወርውሩ።'),
   [('🦶','Hop on the same foot','በአንድ እግር ዝለሉ',3),('👣','Step onto the other foot','በሌላው እግር ተራመዱ',3),('🦘','Jump and land on both feet','ዝለሉና በሁለቱም እግር አርፉ',3),('🤾','Practise a throwing action (no ball)','የውርወራ እንቅስቃሴ ተለማመዱ (ያለ ኳስ)',8)])]},
 [quiz(('Running, throwing and jumping','ሩጫ፣ ውርወራና ዝላይ'),('Athletics has running (sprints, middle and long distance), throwing (shot put, discus, javelin) and jumping (long jump, high jump, triple jump).','አትሌቲክስ ሩጫ (አጭር፣ መካከለኛና ረጅም ርቀት)፣ ውርወራ (አሎሎ፣ ዲስከስ፣ ጦር) እና ዝላይ (ርዝመት፣ ከፍታ፣ ስሉስ ዝላይ) አለው።'),[
   H('The three sprint commands are…','ሦስቱ የአጭር ርቀት ትእዛዞች…',[('On your marks, set, go','ቦታ ያዙ፣ ተዘጋጁ፣ ሂድ'),('Ready, steady, stop','ዝግጁ፣ ቋሚ፣ ቁም'),('One, two, three','አንድ፣ ሁለት፣ ሦስት')]),
   H('The triple jump order is…','የስሉስ ዝላይ ቅደም ተከተል…',[('hop, step, jump','በአንድ እግር ዝላይ፣ እርምጃ፣ ዝላይ'),('jump, jump, jump','ዝላይ፣ ዝላይ፣ ዝላይ'),('run, sit, jump','ሩጫ፣ ቁጭ፣ ዝላይ')]),
   H('Which is a throwing event?','የውርወራ ውድድር የትኛው ነው?',[('javelin','ጦር ውርወራ'),('marathon','ማራቶን'),('high jump','ከፍታ ዝላይ')]),
   H('In long-distance running it is important to…','በረጅም ርቀት ሩጫ አስፈላጊው…',[('control your pace','ፍጥነትን መመጠን'),('sprint from the start to the end','ከመጀመሪያ እስከ መጨረሻ በከፍተኛ ፍጥነት መሮጥ'),('stop often','ብዙ ጊዜ ማቆም')])]),
  order(('Triple jump steps','የስሉስ ዝላይ ደረጃዎች'),('Put the phases in order.','ደረጃዎቹን በቅደም ተከተል አስቀምጡ።'),('Tap in order.','በቅደም ተከተል ንኩ።'),[(('Order:','አስቀምጡ፦'),[('run-up','መንደርደር'),('hop','በአንድ እግር ዝላይ'),('step','እርምጃ'),('jump','ዝላይ'),('landing','ማረፍ')])]),
  SAFE],
 [H('Shot put is a … event.','አሎሎ ውርወራ … ውድድር ነው',[('throwing','የውርወራ'),('running','የሩጫ'),('jumping','የዝላይ')]),H('Sprinters start…','የአጭር ርቀት ሯጮች የሚጀምሩት…',[('low, crouching','ዝቅ ብለው'),('lying down','ተኝተው'),('sitting on a chair','ወንበር ላይ ተቀምጠው')]),
  H('The last phase of the triple jump is…','የስሉስ ዝላይ የመጨረሻው ደረጃ…',[('jump and landing','ዝላይና ማረፍ'),('hop','በአንድ እግር ዝላይ'),('run-up','መንደርደር')]),H('Before throwing, check that…','ከመወርወር በፊት … አረጋግጡ',[('nobody is in the throwing area','በውርወራ ቦታ ማንም አለመኖሩን'),('the sun is up','ፀሐይ መውጣቷን'),('you are hungry','መራባችሁን')])],
 notes(('Athletics is running, throwing and jumping, done with good technique and safety.','አትሌቲክስ ሩጫ፣ ውርወራና ዝላይ ነው፤ በጥሩ ቴክኒክና በደህንነት ይሠራል።'),
  [('Sprints: low start, strong arms.','አጭር ርቀት፦ ዝቅ ያለ አጀማመር፣ ጠንካራ ክንድ።'),('Distance: steady pace.','ረጅም ርቀት፦ የተመጠነ ፍጥነት።'),('Throws: shot, discus, javelin — clear the area.','ውርወራ፦ አሎሎ፣ ዲስከስ፣ ጦር — ቦታውን አጽዱ።'),('Triple jump: hop, step, jump.','ስሉስ ዝላይ፦ በአንድ እግር ዝላይ፣ እርምጃ፣ ዝላይ።')],
  [('ስሉስ ዝላይ','triple jump','ሦስት ደረጃ ያለው ዝላይ'),('ውርወራ','throwing','ነገርን በኃይል መላክ'),('መንደርደር','run-up','ከዝላይ በፊት መሮጥ')],('Hop, step, jump — and land safely!','ዝለሉ፣ ተራመዱ፣ ዝለሉ — በደህና አርፉ!'),
  [(('Three sprint commands','ሦስቱ የሩጫ ትእዛዞች'),('On your marks, set, go','ቦታ ያዙ፣ ተዘጋጁ፣ ሂድ')),(('Name a jumping event','የዝላይ ውድድር ጥቀሱ'),('long jump','ርዝመት ዝላይ'))],
  (('Measure your best jump','ምርጥ ዝላያችሁን ለኩ'),('Coaches record results to track progress. Keep a jump log for 3 weeks.','አሰልጣኞች እድገትን ለመከታተል ውጤቶችን ይመዘግባሉ። ለ3 ሳምንት የዝላይ መዝገብ ያዙ።'),[('Mark a safe sandy landing area.','ደህንነቱ የተጠበቀ አሸዋማ ማረፊያ አዘጋጁ።'),('Measure 3 standing long jumps.','3 የቆመ ርዝመት ዝላዮችን ለኩ።'),('Record the best each week.','በየሳምንቱ ምርጡን መዝግቡ።'),('Draw a bar graph of your progress.','የእድገታችሁን የአሞሌ ግራፍ ሳሉ።')])),
 sm(('Run, throw, jump','ሩጥ፣ ወርውር፣ ዝለል'),[('Sprints','አጭር ርቀት'),('Distance running','ረጅም ርቀት'),('Throwing','ውርወራ'),('Triple jump','ስሉስ ዝላይ')]),
 ('running, throwing and jumping events, including the triple jump','የሩጫ፣ የውርወራና የዝላይ ውድድሮች፣ ስሉስ ዝላይን ጨምሮ'))

# 5 Gymnastics
U(5,('Gymnastics','ጅምናስቲክስ'),
 {'beat':{'title':E('Rhythmic gymnastics beat','የሪትሚክ ጅምናስቲክስ ምት'),'tip':E('Rhythmic gymnastics moves to music. Listen, then tap the pattern: 👏 = clap, 🦶 = step.','ሪትሚክ ጅምናስቲክስ በሙዚቃ ይሠራል። አዳምጡ፣ ከዚያ ድገሙ፦ 👏 = ማጨብጨብ፣ 🦶 = መርገጥ።'),'R':[['👏','🦶','👏','🦶','👏','👏'],['🦶','🦶','👏','🦶','👏','🦶'],['👏','👏','🦶','🦶','👏','🦶','👏']]},
  'moves':[mv(('Floor (free) gymnastics','የነጻ ጅምናስቲክስ'),('Free gymnastics uses the body only, on a soft mat.','የነጻ ጅምናስቲክስ ሰውነትን ብቻ ይጠቀማል፤ በለስላሳ ፍራሽ ላይ።'),
   [('🦩','Balance on one leg (stork stand)','በአንድ እግር ሚዛን ጠብቁ',10),('🌉','Make a bridge shape carefully','በጥንቃቄ የድልድይ ቅርጽ ሥሩ',3),('🔄','Log roll on the mat','በፍራሹ ላይ እንደ ግንድ ተንከባለሉ',4),('🙆','Stretch into a star and hold','እንደ ኮከብ ተዘርግታችሁ ቆዩ',5)])]},
 [quiz(('Types and benefits of gymnastics','የጅምናስቲክስ ዓይነቶችና ጥቅሞች'),('Gymnastics builds strength, flexibility, balance and confidence. Types: free (floor) gymnastics, apparatus gymnastics (beam, bars, vault) and rhythmic gymnastics with music (ribbon, ball, hoop).','ጅምናስቲክስ ጥንካሬን፣ መተጣጠፍን፣ ሚዛንንና በራስ መተማመንን ያዳብራል። ዓይነቶች፦ የነጻ (የወለል)፣ በመሳሪያ (ሚዛን ጣውላ፣ ዘንግ፣ መዝለያ) እና በሙዚቃ የሚሠራ ሪትሚክ (ሪቫን፣ ኳስ፣ ቀለበት)።'),[
   H('Gymnastics with ribbons and music is…','በሪቫንና በሙዚቃ የሚሠራ ጅምናስቲክስ…',[('rhythmic','ሪትሚክ'),('apparatus','በመሳሪያ'),('swimming','ዋና')]),
   H('A balance beam is used in…','ሚዛን ጣውላ የሚያገለግለው በ…',[('apparatus gymnastics','በመሳሪያ ጅምናስቲክስ'),('football','በእግር ኳስ'),('running','በሩጫ')]),
   H('Gymnastics improves…','ጅምናስቲክስ … ያሻሽላል',[('balance and flexibility','ሚዛንና መተጣጠፍ'),('only eyesight','የዓይን እይታን ብቻ'),('nothing','ምንም')]),
   H('For safety, gymnastics should be done…','ለደህንነት ጅምናስቲክስ መሠራት ያለበት…',[('on mats with a spotter','በፍራሽ ላይ ከረዳት ጋር'),('on rocks','በድንጋይ ላይ'),('alone in the dark','ብቻ በጨለማ')])]),
  sortm(('Which type?','የትኛው ዓይነት?'),('Sort each move.','እያንዳንዱን እንቅስቃሴ መድቡ።'),[('Free','የነጻ'),('Apparatus','በመሳሪያ'),('Rhythmic','ሪትሚክ')],[(('forward roll','ወደፊት መንከባለል'),0),(('bridge','ድልድይ'),0),(('walking on a beam','በሚዛን ጣውላ መራመድ'),1),(('swinging on bars','በዘንግ መወዛወዝ'),1),(('ribbon spirals','የሪቫን ሽክርክሪት'),2),(('hoop rolling to music','በሙዚቃ ቀለበት ማንከባለል'),2)]),
  SAFE],
 [H('Floor gymnastics uses…','የወለል ጅምናስቲክስ የሚጠቀመው…',[('the body only','ሰውነትን ብቻ'),('a horse','ፈረስ'),('a ball only','ኳስ ብቻ')]),H('A person who supports a gymnast for safety is a…','ለደህንነት ጅምናስቲኩን የሚደግፍ ሰው…',[('spotter','ረዳት'),('referee','ዳኛ'),('coach only','አሰልጣኝ ብቻ')]),
  H('Rhythmic gymnastics is performed with…','ሪትሚክ ጅምናስቲክስ የሚሠራው በ…',[('music','ሙዚቃ'),('silence only','ዝምታ ብቻ'),('water','ውኃ')]),H('Gymnastics builds…','ጅምናስቲክስ … ይገነባል',[('confidence','በራስ መተማመን'),('fear','ፍርሃት'),('laziness','ስንፍና')])],
 notes(('Gymnastics builds strength, balance and confidence through free, apparatus and rhythmic moves.','ጅምናስቲክስ በነጻ፣ በመሳሪያና በሪትሚክ እንቅስቃሴዎች ጥንካሬን፣ ሚዛንንና በራስ መተማመንን ይገነባል።'),
  [('Benefits: strength, flexibility, balance, confidence.','ጥቅሞች፦ ጥንካሬ፣ መተጣጠፍ፣ ሚዛን፣ በራስ መተማመን።'),('Free gymnastics: rolls, bridges, balances.','የነጻ ጅምናስቲክስ፦ መንከባለል፣ ድልድይ፣ ሚዛን።'),('Apparatus: beam, bars, vault.','በመሳሪያ፦ ሚዛን ጣውላ፣ ዘንግ፣ መዝለያ።'),('Rhythmic: ribbon, ball, hoop with music.','ሪትሚክ፦ ሪቫን፣ ኳስ፣ ቀለበት በሙዚቃ።')],
  [('ጅምናስቲክስ','gymnastics','የሰውነት ቅልጥፍና ስፖርት'),('ሚዛን','balance','ሳይወድቁ መቆም'),('ሪትሚክ','rhythmic','በምት የሚሠራ')],('Mat, warm-up, spotter — then flip!','ፍራሽ፣ ማሟሟቅ፣ ረዳት — ከዚያ ተገለባበጡ!'),
  [(('Name the three types of gymnastics','ሦስቱን የጅምናስቲክስ ዓይነቶች ጥቀሱ'),('free, apparatus, rhythmic','የነጻ፣ በመሳሪያ፣ ሪትሚክ')),(('One rhythmic tool','አንድ የሪትሚክ መሳሪያ'),('ribbon','ሪቫን'))],
  (('Homemade ribbon stick','በቤት የተሠራ የሪቫን ዘንግ'),('Sports-equipment makers turn simple materials into gear. Make a ribbon stick and a routine.','የስፖርት መሳሪያ ሠሪዎች ቀላል ቁሳቁስን ወደ መሳሪያ ይለውጣሉ። የሪቫን ዘንግና የእንቅስቃሴ ቅደም ተከተል ሥሩ።'),[('Tie 2 m of light cloth to a stick.','2 ሜትር ቀላል ጨርቅ በዘንግ አስሩ።'),('Practise circles, spirals and snakes.','ክብ፣ ሽክርክሪትና የእባብ ቅርጽ ተለማመዱ።'),('Make a 1-minute routine to a song.','በአንድ ዘፈን የ1 ደቂቃ ቅደም ተከተል አዘጋጁ።'),('Perform it for your class.','ለክፍላችሁ አቅርቡ።')])),
 sm(('Strength, balance and rhythm','ጥንካሬ፣ ሚዛንና ምት'),[('Benefits','ጥቅሞች'),('Free gymnastics','የነጻ ጅምናስቲክስ'),('Apparatus','በመሳሪያ'),('Rhythmic','ሪትሚክ')]),
 ('the benefits and types of gymnastics: free, apparatus and rhythmic','የጅምናስቲክስ ጥቅምና ዓይነቶች፦ የነጻ፣ በመሳሪያና ሪትሚክ'))

# 6 Ball games
U(6,('Ball game skills','የኳስ ጨዋታዎች መሠረታዊ ክህሎት'),
 {'moves':[mv(('Volleyball: underarm serve and forearm pass','መረብ ኳስ፦ ከታች ወደ ላይ መለጋትና በክንድ መቀበል'),('Underarm serve: hold the ball low, swing the other arm and hit with the heel of the hand. Forearm pass: join hands, straight arms, bend knees.','ከታች ወደ ላይ መለጋት፦ ኳሱን ዝቅ አድርጋችሁ ያዙ፣ ሌላውን ክንድ አወዛውዛችሁ በእጅ መዳፍ ሥር ምቱ። በክንድ መቀበል፦ እጆችን አጣምሩ፣ ክንዶችን አቅኑ፣ ጉልበትን አጥፉ።'),
   [('🏐','Hold the ball low and swing the hitting arm','ኳሱን ዝቅ አድርጋችሁ የምትመቱበትን ክንድ አወዛውዙ',8),('🙏','Join your hands and straighten your arms','እጃችሁን አጣምራችሁ ክንዳችሁን አቅኑ',8),('🦵','Bend knees and "bump" upward','ጉልበታችሁን አጥፍታችሁ ወደ ላይ ግፉ',8)]),
   mv(('Football: dribbling with different parts of the foot','እግር ኳስ፦ በተለያዩ የእግር ክፍሎች ኳስ መንዳት'),('Dribble with the inside, outside and sole of the foot, keeping the ball close.','በእግር ውስጠኛ፣ ውጫዊና በእግር ሥር ኳሱን በቅርበት እየጠበቃችሁ ንዱ።'),
   [('⚽','Tap the ball with the inside of the foot','በእግር ውስጠኛ ክፍል ኳሱን ንኩ',10),('↪️','Push with the outside of the foot','በእግር ውጫዊ ክፍል ግፉ',10),('🦶','Roll the ball back with the sole','በእግር ሥር ኳሱን ወደ ኋላ አንከባልሉ',6)]),
   mv(('Bouncing (dribbling) the ball by hand','በእጅ ኳስ ማንጠር'),('Low dribble to protect the ball; high dribble to move fast. Use the fingertips, not the palm.','ኳስን ለመጠበቅ ዝቅ አድርጎ ማንጠር፤ በፍጥነት ለመሄድ ከፍ አድርጎ ማንጠር። በጣት ጫፍ እንጂ በመዳፍ አይደለም።'),
   [('🏀','Low dribble at knee height','በጉልበት ከፍታ ዝቅ ብሎ ማንጠር',10),('⬆️','High dribble at waist height while walking','እየተራመዳችሁ በወገብ ከፍታ ማንጠር',10),('🔁','Switch hands every 3 bounces','በየ3 ንጠራ እጅ ቀይሩ',6)])]},
 [quiz(('Ball skills','የኳስ ክህሎቶች'),('Good ball skills come from the right body position, eyes on the ball and lots of practice. Team games need passing and communication.','ጥሩ የኳስ ክህሎት ከትክክለኛ የሰውነት አቋም፣ ዓይንን ኳሱ ላይ ከማድረግና ከብዙ ልምምድ ይመጣል። የቡድን ጨዋታዎች ማቀበልና መግባባት ይፈልጋሉ።'),[
   H('In a forearm pass, the arms should be…','በክንድ ሲቀበሉ ክንዶች…',[('straight and together','የቀኑና የተጣመሩ'),('bent and apart','የታጠፉና የተራራቁ'),('behind the back','ከጀርባ')]),
   H('A low dribble is used to…','ዝቅ ብሎ ማንጠር የሚጠቅመው…',[('protect the ball from opponents','ኳሱን ከተጋጣሚ ለመጠበቅ'),('score from far','ከሩቅ ለማግባት'),('rest','ለማረፍ')]),
   H('When dribbling a football, keep the ball…','የእግር ኳስ ስትነዱ ኳሱን…',[('close to your feet','ከእግራችሁ አጠገብ'),('far ahead','ሩቅ ወደፊት'),('in your hands','በእጃችሁ')]),
   H('To bounce a ball well, use your…','ኳስን በደንብ ለማንጠር…',[('fingertips','የጣት ጫፍ'),('palm only','መዳፍ ብቻ'),('fist','ቡጢ')])]),
  match(('Skill and sport','ክህሎትና ስፖርት'),('Match each skill with its sport.','እያንዳንዱን ክህሎት ከስፖርቱ ጋር አዛምዱ።'),[[(('underarm serve','ከታች ወደ ላይ መለጋት'),('volleyball','መረብ ኳስ')),(('dribbling with the foot','በእግር መንዳት'),('football','እግር ኳስ')),(('bouncing by hand','በእጅ ማንጠር'),('basketball / handball','ቅርጫት/የእጅ ኳስ'))]]),
  SAFE],
 [H('In volleyball, an underarm serve is hit with…','በመረብ ኳስ ከታች ወደ ላይ መለጋት የሚመታው በ…',[('the heel of the hand','በእጅ መዳፍ ሥር'),('the foot','በእግር'),('the head','በራስ')]),H('A high dribble helps you…','ከፍ ብሎ ማንጠር … ይረዳል',[('move fast in open space','በክፍት ቦታ በፍጥነት ለመሄድ'),('sit down','ለመቀመጥ'),('stop the game','ጨዋታ ለማቆም')]),
  H('Team games need…','የቡድን ጨዋታዎች … ይፈልጋሉ',[('passing and communication','ማቀበልና መግባባት'),('playing alone','ብቻ መጫወት'),('silence always','ሁልጊዜ ዝምታ')]),H('The outside of the foot helps you…','የእግር ውጫዊ ክፍል … ይረዳል',[('change direction while dribbling','እየነዱ አቅጣጫ ለመቀየር'),('catch the ball','ኳስ ለመያዝ'),('throw in','ለመወርወር')])],
 notes(('Ball games need good technique — serving, passing, dribbling and bouncing — and teamwork.','የኳስ ጨዋታዎች ጥሩ ቴክኒክ — መለጋት፣ መቀበል፣ መንዳትና ማንጠር — እና ቡድናዊነት ይፈልጋሉ።'),
  [('Volleyball: underarm serve and forearm pass.','መረብ ኳስ፦ ከታች ወደ ላይ መለጋትና በክንድ መቀበል።'),('Football: dribble with inside, outside and sole.','እግር ኳስ፦ በውስጠኛ፣ በውጫዊና በእግር ሥር መንዳት።'),('Bouncing: low to protect, high to move.','ማንጠር፦ ለመጠበቅ ዝቅ፣ ለመሄድ ከፍ።'),('Team games: pass, talk, support.','የቡድን ጨዋታ፦ አቀብሉ፣ ተነጋገሩ፣ ተደጋገፉ።')],
  [('መለጋት','serve','ኳስን ማስጀመር'),('ማንጠር','dribble (bounce)','ኳስን ደጋግሞ መምታት'),('መንዳት','dribble (foot)','ኳስን በእግር ይዞ መሄድ')],('Eyes on the ball, talk to your team!','ዓይናችሁ ኳሱ ላይ፣ ከቡድናችሁ ጋር ተነጋገሩ!'),
  [(('Which part of the hand serves?','በየትኛው የእጅ ክፍል ይለጋል?'),('heel of the hand','የእጅ መዳፍ ሥር')),(('Name 3 parts of the foot for dribbling','ለመንዳት 3 የእግር ክፍሎችን ጥቀሱ'),('inside, outside, sole','ውስጠኛ፣ ውጫዊ፣ እግር ሥር'))],
  (('Recycled ball workshop','ከአሮጌ ዕቃ ኳስ መሥሪያ'),('Many great players learned with homemade balls. Make a safe ball from plastic bags and string.','ብዙ ታላላቅ ተጫዋቾች በቤት በተሠራ ኳስ ተምረዋል። ከፕላስቲክ ከረጢትና ከክር ደህንነቱ የተጠበቀ ኳስ ሥሩ።'),[('Collect clean plastic bags and old cloth.','ንጹሕ የፕላስቲክ ከረጢትና አሮጌ ጨርቅ ሰብስቡ።'),('Roll them tightly into a ball.','በጥብቅ ጠቅልላችሁ ኳስ አድርጉ።'),('Wrap with string in a net pattern.','በክር እንደ መረብ ጠቅልሉ።'),('Test it with dribbling drills.','በመንዳት ልምምድ ፈትሹት።')])),
 sm(('Skills plus teamwork win games','ክህሎትና ቡድናዊነት ጨዋታን ያሸንፋሉ'),[('Volleyball serve and pass','የመረብ ኳስ መለጋትና መቀበል'),('Football dribbling','የእግር ኳስ መንዳት'),('Bouncing the ball','ኳስ ማንጠር'),('Team games','የቡድን ጨዋታዎች')]),
 ('volleyball underarm serve and forearm pass, football dribbling, low and high bouncing, and team games','የመረብ ኳስ መለጋትና በክንድ መቀበል፣ የእግር ኳስ መንዳት፣ ዝቅና ከፍ ብሎ ማንጠር እና የቡድን ጨዋታዎች'))

# 7 Traditional dances and games
U(7,('Traditional dances and games','ባህላዊ ጭፈራዎችና ጨዋታዎች'),
 {'beat':{'title':E('Eskista and dance beats','የእስክስታና የጭፈራ ምቶች'),'tip':E('Amhara dances from Gondar, Gojjam, Wollo and other areas follow strong beats. Listen, then copy: 👏 = clap, 🦶 = stamp.','የጎንደር፣ የጎጃም፣ የወሎና የሌሎች አካባቢዎች ጭፈራዎች ጠንካራ ምት ይከተላሉ። አዳምጡ፣ ከዚያ ድገሙ፦ 👏 = ማጨብጨብ፣ 🦶 = መርገጥ።'),'R':[['🦶','👏','🦶','👏','👏','🦶'],['👏','👏','🦶','🦶','👏','🦶','🦶'],['🦶','🦶','👏','🦶','👏','👏','🦶']]},
  'moves':[mv(('Eskista shoulders','የእስክስታ ትከሻ'),('Eskista moves the shoulders, neck and chest to the beat.','እስክስታ ትከሻን፣ አንገትንና ደረትን በምቱ ያንቀሳቅሳል።'),
   [('🤷','Lift and drop both shoulders','ሁለቱንም ትከሻ ከፍና ዝቅ አድርጉ',16),('🔁','Roll shoulders forward and back','ትከሻን ወደ ፊትና ወደ ኋላ አሽከርክሩ',8),('💃','Add small steps side to side','ወደ ጎን ትናንሽ እርምጃዎችን ጨምሩ',16)])]},
 [quiz(('Traditional dances','ባህላዊ ጭፈራዎች'),('Traditional dances show how a community lives. People dance in joy and sorrow, at holidays, and while ploughing, harvesting and threshing. Gondar, Gojjam and Wollo have well-known dances.','ባህላዊ ጭፈራ የአንድን ማኅበረሰብ አኗኗር ያሳያል። ሰዎች በደስታና በሐዘን፣ በበዓላት፣ ሲያርሱ፣ ሲያጭዱና ሲወቁ ይጨፍራሉ። ጎንደር፣ ጎጃምና ወሎ የታወቁ ጭፈራዎች አሏቸው።'),[
   H('Traditional dances reflect…','ባህላዊ ጭፈራዎች … ያንጸባርቃሉ',[('a community\'s way of life','የማኅበረሰቡን አኗኗር'),('only city life','የከተማ ኑሮን ብቻ'),('nothing','ምንም')]),
   H('Eskista mainly moves the…','እስክስታ በዋናነት የሚያንቀሳቅሰው…',[('shoulders and neck','ትከሻና አንገት'),('toes only','የእግር ጣት ብቻ'),('eyes','ዓይን')]),
   H('Dancing is good PE because it…','ጭፈራ ጥሩ ሰ/ማጎልመሻ ነው ምክንያቱም…',[('moves muscles above and below the waist','ከወገብ በላይና በታች ጡንቻዎችን ያንቀሳቅሳል'),('makes us sleepy','ያስተኛል'),('needs no movement','እንቅስቃሴ አያስፈልገውም')])]),
  quiz(('Traditional games','ባህላዊ ጨዋታዎች'),('Gebeta has been played in Ethiopia for over 2,000 years; the 12-hole version is called ቅንጭቦሽ. Genna is a stick-and-ball game played around Christmas. ትግል (wrestling) and ፈረስ ሸርጥ (horse racing) are also traditional sports.','ገበጣ በኢትዮጵያ ከ2,000 ዓመት በላይ ተጫውቷል፤ ባለ12 ጉድጓዱ ቅንጭቦሽ ይባላል። ገና በገና በዓል አካባቢ በዱላና በጥንግ የሚጫወት ነው። ትግልና ፈረስ ሸርጥም ባህላዊ ስፖርቶች ናቸው።'),[
   H('Gebeta with 12 holes is called…','ባለ12 ጉድጓድ ገበጣ … ይባላል',[('ቅንጭቦሽ','ቅንጭቦሽ'),('ገና','ገና'),('ትግል','ትግል')]),
   H('Genna is played around…','ገና የሚጫወተው በ… አካባቢ ነው',[('Christmas','የገና በዓል'),('Easter','ፋሲካ'),('New Year','አዲስ ዓመት')]),
   H('Gebeta mainly develops…','ገበጣ በዋናነት … ያዳብራል',[('thinking and social skills','የማሰብና የማኅበራዊ ክህሎት'),('swimming','ዋና'),('jumping','ዝላይ')]),
   H('ፈረስ ሸርጥ is…','ፈረስ ሸርጥ…',[('horse racing','የፈረስ ሽቅድድም'),('wrestling','ትግል'),('a board game','የሰሌዳ ጨዋታ')])]),
  SAFE],
 [H('ትግል is…','ትግል…',[('wrestling','ግብግብ (ሬስሊንግ)'),('running','ሩጫ'),('singing','ዘፈን')]),H('People dance when…','ሰዎች የሚጨፍሩት…',[('celebrating and at work like harvest','ሲያከብሩና እንደ አጨዳ ባሉ ሥራዎች'),('only at school','በትምህርት ቤት ብቻ'),('never','በፍጹም')]),
  H('Genna is played with…','ገና የሚጫወተው በ…',[('a stick and a small ball','በዱላና በትንሽ ጥንግ'),('cards','በካርድ'),('a net','በመረብ')]),H('Traditional games should be…','ባህላዊ ጨዋታዎች…',[('kept and passed to new generations','ሊጠበቁና ለአዲሱ ትውልድ ሊተላለፉ ይገባል'),('forgotten','መረሳት አለባቸው'),('banned','መከልከል አለባቸው')])],
 notes(('Amhara traditional dances and games are fun exercise and a living heritage we should keep.','የአማራ ባህላዊ ጭፈራዎችና ጨዋታዎች አስደሳች እንቅስቃሴና ልንጠብቀው የሚገባ ሕያው ቅርስ ናቸው።'),
  [('Dances show life: joy, sorrow, holidays, farm work.','ጭፈራዎች ኑሮን ያሳያሉ፦ ደስታ፣ ሐዘን፣ በዓል፣ የእርሻ ሥራ።'),('Gondar, Gojjam, Wollo dances; eskista works shoulders.','የጎንደር፣ የጎጃም፣ የወሎ ጭፈራዎች፤ እስክስታ ትከሻን ያሠራል።'),('Gebeta (ቅንጭቦሽ) trains thinking.','ገበጣ (ቅንጭቦሽ) ማሰብን ያሠለጥናል።'),('Genna, wrestling and horse racing build fitness.','ገና፣ ትግልና ፈረስ ሸርጥ ብቃትን ይገነባሉ።')],
  [('ባህላዊ ጭፈራ','traditional dance','የማኅበረሰብ ጭፈራ'),('ገበጣ','gebeta','በጉድጓድና በጠጠር የሚጫወት'),('ገና','genna','በዱላና በጥንግ የሚጫወት')],('Dance, play, and pass it on!','ጨፍሩ፣ ተጫወቱ፣ አስተላልፉ!'),
  [(('Name two Amhara dance areas','ሁለት የአማራ የጭፈራ አካባቢዎችን ጥቀሱ'),('Gondar, Gojjam','ጎንደር፣ ጎጃም')),(('What is ቅንጭቦሽ?','ቅንጭቦሽ ምንድን ነው?'),('12-hole gebeta','ባለ12 ጉድጓድ ገበጣ'))],
  (('Gebeta board making','የገበጣ ሰሌዳ መሥራት'),('Craftspeople sell carved gebeta boards to tourists. Make a gebeta board from an egg tray or clay.','የእጅ ሙያተኞች የተቀረጹ የገበጣ ሰሌዳዎችን ለቱሪስቶች ይሸጣሉ። ከእንቁላል ትሪ ወይም ከሸክላ የገበጣ ሰሌዳ ሥሩ።'),[('Make 2 rows of 6 holes.','2 ረድፍ 6 ጉድጓዶችን ሥሩ።'),('Collect 48 small seeds or stones.','48 ትናንሽ ፍሬዎች ወይም ጠጠሮች ሰብስቡ።'),('Learn the rules from an elder.','ሕጉን ከአዛውንት ተማሩ።'),('Hold a class tournament.','የክፍል ውድድር አካሂዱ።')])),
 sm(('Dance and play our heritage','ቅርሳችንን ጨፍሩ፣ ተጫወቱ'),[('Traditional dances','ባህላዊ ጭፈራዎች'),('Eskista','እስክስታ'),('Gebeta','ገበጣ'),('Genna, wrestling, horse racing','ገና፣ ትግል፣ ፈረስ ሸርጥ')]),
 ('traditional dances of the Amhara region and traditional games such as gebeta, genna, wrestling and horse racing','የአማራ ክልል ባህላዊ ጭፈራዎችና እንደ ገበጣ፣ ገና፣ ትግልና ፈረስ ሸርጥ ያሉ ባህላዊ ጨዋታዎች'))
dump('hpe')
