import sys;sys.path.insert(0,'.')
from common7 import *
SN=E('Mathematics','ሒሳብ');B='(d=>K7.drills(d))'
def U(n,title,drills,extra,exam,nt,summ,foot):
    unit(f'g7-math-{n}','math',SN,E(f'Unit {n}',f'ክፍል {n}'),E(*title),E(f'Built on the Grade 7 Mathematics student textbook (ANRS), Unit {n}: {foot[0]}.',f'በ7ኛ ክፍል የሒሳብ መጽሐፍ ክፍል {n} ላይ የተመሰረተ፦ {foot[1]}።'),B,drills,extra,exam,nt,summ)
INN=lambda t,x,s:(t,x,s)

U(1,('Introduction to sets','የስብስብ መግቢያ'),[
 D('settype',('Empty, finite or infinite?','ባዶ፣ ውሱን ወይስ ኢ-ውሱን?'),('A set is a well-defined collection. Empty set ∅ has no elements; a finite set can be counted to the end; an infinite set never ends.','ስብስብ በግልጽ የተለየ ስብስብ ነው። ባዶ ስብስብ ∅ አባል የለውም፤ ውሱን ስብስብ እስከ መጨረሻ ይቆጠራል፤ ኢ-ውሱን ስብስብ አያልቅም።'),5),
 D('setops',('Union and intersection','ውህደትና የጋራ'),('Use the Venn diagram. A ∪ B: everything in A or B. A ∩ B: only what is in both.','የቬን ንድፉን ተጠቀሙ። A ∪ B፦ በA ወይም በB ያለ ሁሉ። A ∩ B፦ በሁለቱም ያለ ብቻ።'),6),
 D('subsets',('Counting subsets','ንዑስ ስብስቦችን መቁጠር'),('Every set is a subset of itself, and ∅ is a subset of every set. A set with n elements has 2ⁿ subsets.','እያንዳንዱ ስብስብ የራሱ ንዑስ ስብስብ ነው፤ ∅ የሁሉም ንዑስ ስብስብ ነው። n አባላት ያሉት ስብስብ 2ⁿ ንዑስ ስብስቦች አሉት።'),4)],
 [quiz(('Well-defined or not?','በግልጽ የተለየ ነው?'),('A collection is a set only if we can say for sure whether something belongs to it.','አንድ ስብስብ ሴት የሚሆነው አንድ ነገር አባል መሆኑን በእርግጠኝነት መናገር ስንችል ብቻ ነው።'),[
   q('"The vowels of the English alphabet"','"የእንግሊዝኛ አናባቢዎች"',[('a set (well-defined)','ስብስብ ነው (በግልጽ የተለየ)'),('not a set','ስብስብ አይደለም')]),q('"The tall students in a school"','"በትምህርት ቤቱ ያሉ ረጃጅም ተማሪዎች"',[('not a set (tall is relative)','ስብስብ አይደለም (ረጅም አንፃራዊ ነው)'),('a set','ስብስብ ነው')]),
   q('"x ∈ A" means…','"x ∈ A" ማለት…',[('x is an element of A','x የA አባል ነው'),('x is not in A','x በA ውስጥ የለም')]),q('{1, 2, 3} and {3, 1, 2} are…','{1, 2, 3} እና {3, 1, 2}…',[('equal sets','እኩል ስብስቦች'),('different sets','የተለያዩ ስብስቦች')]),
   q('The set of days in a week written by listing is…','የሳምንቱ ቀናት ስብስብ በዝርዝር ሲጻፍ…',[('{Monday, Tuesday, …, Sunday}','{ሰኞ፣ ማክሰኞ፣ …፣ እሁድ}'),('{x | x is a day}','{x | x ቀን ነው}')])])],
 [q('A = {2, 4, 6}, B = {4, 6, 8}. A ∩ B = ?','A = {2, 4, 6}፣ B = {4, 6, 8}። A ∩ B = ?',['{4, 6}','{2, 4, 6, 8}','{2, 8}']),q('A ∪ B for the same sets = ?','ለተመሳሳዮቹ A ∪ B = ?',['{2, 4, 6, 8}','{4, 6}','{2, 8}']),
  q('How many subsets does {a, b, c} have?','{a, b, c} ስንት ንዑስ ስብስቦች አሉት?',['8','6','3']),q('{x | x is a natural number} is…','{x | x የተፈጥሮ ቁጥር}…',[('infinite','ኢ-ውሱን'),('empty','ባዶ'),('finite','ውሱን')]),q('The empty set is written…','ባዶ ስብስብ የሚጻፈው…',['∅ or { }','{0}','0'])],
 notes(('A set is a well-defined collection; we combine sets with union and intersection.','ስብስብ በግልጽ የተለየ ስብስብ ነው፤ ስብስቦችን በውህደትና በየጋራ እናጣምራለን።'),
  [('Describe sets by listing {…} or by a rule {x | …}.','ስብስብን በዝርዝር {…} ወይም በሕግ {x | …} ግለጹ።'),('Empty ∅, finite and infinite sets.','ባዶ ∅፣ ውሱንና ኢ-ውሱን ስብስቦች።'),('Subsets: n elements → 2ⁿ subsets; equal sets have the same elements.','ንዑስ ስብስብ፦ n አባላት → 2ⁿ ንዑስ ስብስቦች፤ እኩል ስብስቦች አንድ ዓይነት አባላት አሏቸው።'),('A ∪ B (in either) and A ∩ B (in both), shown in Venn diagrams.','A ∪ B (በአንዱ) እና A ∩ B (በሁለቱም)፣ በቬን ንድፍ።')],
  [('ስብስብ','set','በግልጽ የተለየ ስብስብ'),('አባል','element','በስብስቡ ያለ ነገር'),('የጋራ (∩)','intersection','በሁለቱም ያለ')],('∪ = Unite everything, ∩ = In both!','∪ = ሁሉንም አዋህድ፣ ∩ = በሁለቱም!'),
  [('A = {1, 3, 5}, B = {1, 2, 3}: A ∩ B','{1, 3}'),(('Subsets of a 4-element set','የ4 አባላት ስብስብ ንዑስ ስብስቦች'),'16')],
  INN(('Survey with Venn diagrams','በቬን ንድፍ ቅኝት'),('Market researchers use Venn diagrams. Ask 20 classmates whether they like football, athletics or both, and draw the result.','የገበያ ተመራማሪዎች የቬን ንድፍ ይጠቀማሉ። 20 የክፍል ጓደኞችን እግር ኳስ፣ አትሌቲክስ ወይም ሁለቱንም እንደሚወዱ ጠይቁና ውጤቱን ሳሉ።'),[('Write the question clearly.','ጥያቄውን በግልጽ ጻፉ።'),('Record each name in A, B or both.','እያንዳንዱን ስም በA፣ በB ወይም በሁለቱም መዝግቡ።'),('Draw the Venn diagram.','የቬን ንድፉን ሳሉ።'),('Write 2 findings for the sports teacher.','ለስፖርት መምህሩ 2 ግኝቶች ጻፉ።')])),
 sm(('Sets: well-defined collections joined by ∪ and ∩','ስብስቦች፦ በ∪ እና በ∩ የሚጣመሩ በግልጽ የተለዩ ስብስቦች'),[('Describing sets','ስብስብን መግለጽ'),('Kinds of sets','የስብስብ ዓይነቶች'),('Subsets','ንዑስ ስብስቦች'),('Union and intersection','ውህደትና የጋራ')]),
 ('sets, ways to describe sets, special sets, relationships and operations','ስብስቦች፣ የአገላለጽ መንገዶች፣ ልዩ ስብስቦች፣ ግንኙነቶችና ስሌቶች'))

U(2,('Integers','ኢንቲጀሮች'),[
 D('intline',('Integers on the number line','ኢንቲጀሮች በቁጥር መስመር'),('Integers are …, −3, −2, −1, 0, 1, 2, 3, … Negatives are left of 0.','ኢንቲጀሮች …፣ −3፣ −2፣ −1፣ 0፣ 1፣ 2፣ 3፣ … ናቸው። አሉታዊዎቹ ከ0 በስተግራ ናቸው።'),4),
 D('intcmp',('Compare integers','ኢንቲጀሮችን ማወዳደር'),('The number further right on the number line is greater: −2 > −7.','በቁጥር መስመሩ በቀኝ ያለው ይበልጣል፦ −2 > −7።'),5),
 D('intadd',('Add and subtract','መደመርና መቀነስ'),('a − b = a + (−b). Same signs: add; different signs: subtract and keep the sign of the larger absolute value.','a − b = a + (−b)። ተመሳሳይ ምልክት፦ ደምሩ፤ የተለያየ፦ ቀንሱና የትልቁን ፍጹም ዋጋ ምልክት ውሰዱ።'),7),
 D('intmul',('Multiply and divide','ማባዛትና ማካፈል'),('(+)(+) = +, (−)(−) = +, (+)(−) = −. The same rules work for division.','(+)(+) = +፣ (−)(−) = +፣ (+)(−) = −። ለማካፈልም ተመሳሳይ ሕግ ነው።'),6)],
 [quiz(('Integers in real life','ኢንቲጀሮች በሕይወት'),('Negative numbers describe temperatures below zero, debts and places below sea level.','አሉታዊ ቁጥሮች ከዜሮ በታች ሙቀትን፣ ዕዳንና ከባሕር ወለል በታች ያሉ ቦታዎችን ይገልጻሉ።'),[
   q('The Danakil Depression is about 125 m below sea level. As an integer:','የዳናኪል ዝቅተኛ ቦታ ከባሕር ወለል በታች 125 ሜ ገደማ ነው። በኢንቲጀር፦',['−125','125','0']),q('A debt of 300 birr is…','የ300 ብር ዕዳ…',['−300','+300','3']),
   q('The temperature was −2 °C and rose 7 °C. Now it is…','ሙቀቱ −2 °C ነበር፤ 7 °C ጨመረ። አሁን…',['5 °C','−9 °C','9 °C']),q('Is −8 even or odd?','−8 ጥንድ ነው ወይስ ጎዶሎ?',[('even','ጥንድ'),('odd','ጎዶሎ')]),
   q('The opposite of −15 is…','የ−15 ተቃራኒ…',['15','−15','0'])])],
 [q('(−6) + (−4) = ?','(−6) + (−4) = ?',['−10','10','−2']),q('5 − (−3) = ?','5 − (−3) = ?',['8','2','−8']),q('(−7) × (−3) = ?','(−7) × (−3) = ?',['21','−21','−10']),q('(−36) ÷ 4 = ?','(−36) ÷ 4 = ?',['−9','9','−32']),q('Which is greatest?','የትኛው ይበልጣል?',['−1','−5','−12'])],
 notes(('Integers extend whole numbers to the left of zero; sign rules guide every operation.','ኢንቲጀሮች ሙሉ ቁጥሮችን ከዜሮ በስተግራ ያራዝማሉ፤ የምልክት ሕጎች እያንዳንዱን ስሌት ይመራሉ።'),
  [('Integers: …, −2, −1, 0, 1, 2, …; opposites like 4 and −4.','ኢንቲጀሮች፦ …፣ −2፣ −1፣ 0፣ 1፣ 2፣ …፤ ተቃራኒዎች እንደ 4 እና −4።'),('Compare on the number line: right is greater.','በቁጥር መስመር አወዳድሩ፦ ቀኝ ይበልጣል።'),('Subtracting = adding the opposite.','መቀነስ = ተቃራኒውን መደመር።'),('Multiply/divide: same signs +, different signs −.','ማባዛት/ማካፈል፦ ተመሳሳይ ምልክት +፣ የተለያየ −።')],
  [('ኢንቲጀር','integer','ሙሉ ቁጥርና አሉታዊዎቹ'),('አሉታዊ','negative','ከዜሮ ያነሰ'),('ተቃራኒ','opposite','በእኩል ርቀት በሌላ ጎን')],('Minus times minus is a plus!','አሉታዊ በአሉታዊ አዎንታዊ ነው!'),
  [('(−12) + 20','8'),('(−4) × 6 × (−1)','24'),(('Order: 3, −5, 0, −1','አስቀምጡ፦ 3፣ −5፣ 0፣ −1'),'−5, −1, 0, 3')],
  INN(('Shop cash-flow book','የሱቅ የገንዘብ ፍሰት መዝገብ'),('Businesses record money in (+) and money out (−). Keep a 1-week cash book for a pretend kiosk and find the final balance.','ድርጅቶች የገቢ (+) እና የወጪ (−) ገንዘብ ይመዘግባሉ። ለሙከራ ኪዮስክ የ1 ሳምንት የገንዘብ መዝገብ ያዙና የመጨረሻውን ቀሪ አስሉ።'),[('Start with 200 birr.','በ200 ብር ጀምሩ።'),('Write sales as +, purchases as −.','ሽያጭን +፣ ግዢን − አድርጋችሁ ጻፉ።'),('Add all the integers.','ሁሉንም ኢንቲጀሮች ደምሩ።'),('Was the week a profit or a loss?','ሳምንቱ ትርፍ ነበር ወይስ ኪሳራ?')])),
 sm(('Integers and their sign rules','ኢንቲጀሮችና የምልክት ሕጎቻቸው'),[('What integers are','ኢንቲጀር ምንድን ነው'),('Comparing','ማወዳደር'),('Add and subtract','መደመርና መቀነስ'),('Multiply and divide','ማባዛትና ማካፈል')]),
 ('integers, comparing and ordering, the four operations, even and odd integers','ኢንቲጀሮች፣ ማወዳደርና መደርደር፣ አራቱ ስሌቶች፣ ጥንድና ጎዶሎ ኢንቲጀሮች'))

U(3,('Ratio, proportion and percentage','ምጣኔ፣ ተመጣጣኝነትና መቶኛ'),[
 D('ratio',('Simplify ratios','ምጣኔን ማቅለል'),('A ratio compares two quantities. Divide both terms by their greatest common factor.','ምጣኔ ሁለት መጠኖችን ያወዳድራል። ሁለቱንም ቃላት በታላቁ የጋራ አካፋይ አካፍሉ።'),5),
 D('share',('Share in a ratio','በምጣኔ ማካፈል'),('Add the parts, find one part, then multiply.','ክፍሎቹን ደምሩ፣ አንዱን ክፍል ፈልጉ፣ ከዚያ አባዙ።'),4),
 D('proport',('Direct proportion','ቀጥተኛ ተመጣጣኝነት'),('When one quantity doubles, the other doubles too.','አንዱ መጠን እጥፍ ሲሆን ሌላውም እጥፍ ይሆናል።'),4),
 D('inverse',('Inverse proportion','ተገላቢጦሽ ተመጣጣኝነት'),('When one quantity doubles, the other halves; their product stays the same.','አንዱ እጥፍ ሲሆን ሌላው ግማሽ ይሆናል፤ ብዜታቸው አይለወጥም።'),3),
 D('pct',('Percentages','መቶኛ'),('Percent means "out of 100": 25% = 25/100.','መቶኛ ማለት "ከ100" ነው፦ 25% = 25/100።'),5),
 D('profit',('Profit and loss percent','የትርፍና የኪሳራ መቶኛ'),('Profit % = profit ÷ cost price × 100.','የትርፍ % = ትርፍ ÷ የግዢ ዋጋ × 100።'),4),
 D('interest',('Simple interest','ቀላል ወለድ'),('I = P × R × T ÷ 100 (P principal, R rate %, T years).','ወለድ = P × R × T ÷ 100 (P ዋና ገንዘብ፣ R መጣኝ %፣ T ዓመታት)።'),4)],
 [quiz(('Tax and compound interest','ግብርና ድርብ ወለድ'),('Taxes fund roads, schools and hospitals. Compound interest earns interest on interest.','ግብር መንገድን፣ ትምህርት ቤትንና ሆስፒታልን ያስገነባል። ድርብ ወለድ በወለድ ላይ ወለድ ያስገኛል።'),[
   q('VAT of 15% on a 200-birr item is…','በ200 ብር ዕቃ ላይ 15% ተ.እ.ታ…',['30 birr','15 birr','215 birr']),q('1,000 birr at 10% compound interest for 2 years becomes…','1,000 ብር በ10% ድርብ ወለድ ለ2 ዓመት…',['1,210 birr','1,200 birr','1,100 birr']),
   q('Why do citizens pay tax?','ዜጎች ለምን ግብር ይከፍላሉ?',[('to fund public services','ለሕዝብ አገልግሎት'),('to punish workers','ሠራተኞችን ለመቅጣት')])])],
 [q('Simplify 18 : 24','18 : 24ን አቅልሉ',['3 : 4','4 : 3','6 : 8']),q('20% of 350 = ?','የ350 20% = ?',['70','35','175']),q('Cost 400, sold 460. Profit %?','ግዢ 400፣ ሽያጭ 460። የትርፍ %?',['15%','60%','13%']),
  q('Simple interest: P = 2,000, R = 5%, T = 3 years','ቀላል ወለድ፦ P = 2,000፣ R = 5%፣ T = 3',['300 birr','100 birr','3,000 birr']),q('6 workers take 10 days. 12 workers take…','6 ሠራተኞች 10 ቀን። 12 ሠራተኞች…',['5 days','20 days','12 days'])],
 notes(('Ratios compare, proportions scale, percentages compare out of 100.','ምጣኔ ያወዳድራል፣ ተመጣጣኝነት ያሰፋል፣ መቶኛ ከ100 ያወዳድራል።'),
  [('Ratio a : b; simplify by dividing by the GCF.','ምጣኔ a : b፤ በታላቁ የጋራ አካፋይ አካፍላችሁ አቅልሉ።'),('Direct proportion (same direction) and inverse proportion (opposite).','ቀጥተኛ (በአንድ አቅጣጫ) እና ተገላቢጦሽ (በተቃራኒ) ተመጣጣኝነት።'),('Percent = out of 100; profit % = profit ÷ cost × 100.','መቶኛ = ከ100፤ የትርፍ % = ትርፍ ÷ ግዢ × 100።'),('Simple interest I = PRT/100; compound adds interest to principal.','ቀላል ወለድ = PRT/100፤ ድርብ ወለድ ወለዱን ወደ ዋናው ይጨምራል።')],
  [('ምጣኔ','ratio','የሁለት መጠኖች ንጽጽር'),('መቶኛ','percent','ከ100'),('ወለድ','interest','ለገንዘብ የሚከፈል ጭማሪ')],('Percent = per hundred.','መቶኛ = በመቶ።'),
  [(('Share 600 in 1 : 2','600ን በ1 : 2 አካፍሉ'),'200 and 400'),(('35% as a fraction','35% በክፍልፋይ'),'7/20')],
  INN(('Savings and loan planner','የቁጠባና የብድር ዕቅድ'),('Banks and microfinance work with interest. Compare saving 5,000 birr for 3 years at simple vs compound interest of 8%, and present the best choice.','ባንኮችና አነስተኛ ብድር ተቋማት በወለድ ይሠራሉ። 5,000 ብርን ለ3 ዓመት በ8% በቀላልና በድርብ ወለድ መቆጠብን አወዳድሩና ምርጡን ምርጫ አቅርቡ።'),[('Calculate simple interest.','ቀላል ወለዱን አስሉ።'),('Calculate compound interest year by year.','ድርብ ወለዱን በየዓመቱ አስሉ።'),('Make a small table.','ትንሽ ሰንጠረዥ ሥሩ።'),('Explain which is better and why.','የትኛው እንደሚሻልና ለምን አስረዱ።')])),
 sm(('Ratio compares, proportion scales, percent is per hundred','ምጣኔ ያወዳድራል፣ ተመጣጣኝነት ያሰፋል፣ መቶኛ በመቶ ነው'),[('Ratio','ምጣኔ'),('Proportion','ተመጣጣኝነት'),('Percent and profit','መቶኛና ትርፍ'),('Interest and tax','ወለድና ግብር')]),
 ('ratio, direct and inverse proportion, percentages, profit and loss, simple and compound interest, taxes','ምጣኔ፣ ቀጥተኛና ተገላቢጦሽ ተመጣጣኝነት፣ መቶኛ፣ ትርፍና ኪሳራ፣ ቀላልና ድርብ ወለድ፣ ግብር'))

U(4,('Linear equations','ቀጥተኛ እኩልታዎች'),[
 D('simplify',('Simplify expressions','መግለጫዎችን ማቅለል'),('Like terms have the same variable: 3x and 5x. Add their coefficients.','ተመሳሳይ ቃላት አንድ ዓይነት ተለዋዋጭ አላቸው፦ 3x እና 5x። ኮፊሸንቶቻቸውን ደምሩ።'),5),
 D('solve',('Solve ax + b = c','ax + b = c መፍታት'),('Do the same to both sides: undo + or − first, then × or ÷.','በሁለቱም ጎን አንድ ዓይነት ነገር አድርጉ፦ መጀመሪያ +ን ወይም −ን፣ ከዚያ ×ን ወይም ÷ን ቀልብሱ።'),6),
 D('brackets',('Equations with brackets','ቅንፍ ያላቸው እኩልታዎች'),('Open brackets first using a(b + c) = ab + ac.','መጀመሪያ a(b + c) = ab + ac በመጠቀም ቅንፉን ክፈቱ።'),4),
 D('fraceq',('Equations with fractions','ክፍልፋይ ያላቸው እኩልታዎች'),('Multiply both sides by the denominator to clear the fraction.','ክፍልፋዩን ለማጥፋት ሁለቱንም ጎኖች በቆጣሪው አባዙ።'),4),
 D('quad',('The four quadrants','አራቱ ሩብ ክፍሎች'),('I: (+,+), II: (−,+), III: (−,−), IV: (+,−).','I፦ (+,+)፣ II፦ (−,+)፣ III፦ (−,−)፣ IV፦ (+,−)።'),4),
 D('coord',('Read coordinates','ኮኦርዲኔቶችን ማንበብ'),('A point is (x, y): x across, y up or down.','ነጥብ (x, y) ነው፦ x ወደ ጎን፣ y ወደ ላይ ወይም ወደ ታች።'),4)],
 [quiz(('Write the equation','እኩልታውን ጻፉ'),('Turn word problems into equations: let x be the unknown.','የቃል ፕሮብሌሞችን ወደ እኩልታ ቀይሩ፦ የማይታወቀውን x በሉት።'),[
   q('"A number plus 7 is 15"','"አንድ ቁጥር ሲደመር 7 15 ነው"',['x + 7 = 15','7x = 15','x − 7 = 15']),q('"Three times a number is 27"','"የአንድ ቁጥር ሦስት እጥፍ 27 ነው"',['3x = 27','x + 3 = 27','x/3 = 27']),
   q('Abebe is x years old; his father is 3 times older and their total age is 48. Equation?','አበበ x ዓመቱ ነው፤ አባቱ 3 እጥፍ ነው፤ ድምራቸው 48 ነው። እኩልታ?',['x + 3x = 48','3x = 48','x + 3 = 48']),
   q('Which point lies on y = 2x?','በy = 2x ላይ ያለው ነጥብ የትኛው ነው?',['(3, 6)','(6, 3)','(2, 2)'])])],
 [q('Solve 4x − 5 = 23','4x − 5 = 23ን ፍቱ',['x = 7','x = 4.5','x = 18']),q('Solve 2(x + 3) = 14','2(x + 3) = 14ን ፍቱ',['x = 4','x = 7','x = 5.5']),q('Simplify 6a − 2a + 5','6a − 2a + 5ን አቅልሉ',['4a + 5','9a','8a + 5']),
  q('(−3, 4) is in quadrant…','(−3, 4) በሩብ…',['II','I','IV']),q('x/5 = 3, x = ?','x/5 = 3፣ x = ?',['15','8','0.6'])],
 notes(('A linear equation is a balance: do the same to both sides to find the unknown.','ቀጥተኛ እኩልታ ሚዛን ነው፤ የማይታወቀውን ለማግኘት በሁለቱም ጎን አንድ ዓይነት አድርጉ።'),
  [('Collect like terms to simplify expressions.','መግለጫዎችን ለማቅለል ተመሳሳይ ቃላትን አሰባስቡ።'),('Solve by inverse operations; open brackets; clear fractions.','በተገላቢጦሽ ስሌት ፍቱ፤ ቅንፍ ክፈቱ፤ ክፍልፋይ አጥፉ።'),('Cartesian plane: four quadrants, points (x, y).','የካርቴዥያን ገጽ፦ አራት ሩብ ክፍሎች፣ ነጥቦች (x, y)።'),('Graph y = mx + c by plotting points.','y = mx + cን ነጥቦችን በማስቀመጥ ሳሉ።')],
  [('እኩልታ','equation','በ= የተገናኘ'),('ተለዋዋጭ','variable','ለማይታወቅ የሚቆም ፊደል'),('ኮኦርዲኔት','coordinate','የነጥብ መገኛ (x, y)')],('What you do to one side, do to the other!','በአንዱ ጎን ያደረጋችሁትን በሌላውም አድርጉ!'),
  [(('Solve 5x + 2 = 3x + 10','5x + 2 = 3x + 10ን ፍቱ'),'x = 4'),(('Quadrant of (2, −5)','የ(2, −5) ሩብ'),'IV')],
  INN(('Phone-plan chooser','የስልክ ጥቅል መምረጫ'),('Companies price with equations like cost = 50 + 2x. Compare two plans and find when they cost the same.','ድርጅቶች በእኩልታ ዋጋ ያወጣሉ፦ ወጪ = 50 + 2x። ሁለት ጥቅሎችን አወዳድሩና መቼ እኩል እንደሚሆኑ ፈልጉ።'),[('Plan A: 50 + 2x; Plan B: 20 + 5x.','ጥቅል A፦ 50 + 2x፤ ጥቅል B፦ 20 + 5x።'),('Set them equal and solve.','አስተካክላችሁ ፍቱ።'),('Draw both lines on a grid.','ሁለቱንም መስመሮች በግሪድ ሳሉ።'),('Advise a family which to choose.','ለቤተሰብ የትኛውን እንዲመርጡ ምከሩ።')])),
 sm(('Balance equations and plot points on the plane','እኩልታን አመጣጥኑ፣ ነጥቦችን በገጹ ላይ አስቀምጡ'),[('Simplifying','ማቅለል'),('Solving','መፍታት'),('Quadrants','ሩብ ክፍሎች'),('Graphs','ግራፎች')]),
 ('algebraic expressions, solving linear equations, the Cartesian coordinate system and applications','አልጀብራዊ መግለጫዎች፣ ቀጥተኛ እኩልታዎችን መፍታት፣ የካርቴዥያን ኮኦርዲኔት ሥርዓትና ተግባራዊነት'))

U(5,('Perimeter and area of plane figures','የጠለል ምስሎች ዙሪያና ስፋት'),[
 D('anglesum',('Angles of a triangle','የጎነ-ሶስት አንግሎች'),('The three angles of a triangle add up to 180°.','የጎነ-ሶስት ሦስቱ አንግሎች ድምር 180° ነው።'),4),
 D('polygon',('Angles of polygons','የፖሊጎን አንግሎች'),('Interior angle sum = (n − 2) × 180°.','የውስጥ አንግሎች ድምር = (n − 2) × 180°።'),4),
 D('area',('Area of triangles and quadrilaterals','የጎነ-ሶስትና የጎነ-አራት ስፋት'),('Triangle ½bh, parallelogram bh, trapezium ½(a + b)h.','ጎነ-ሶስት ½bh፣ ፓራሌሎግራም bh፣ ትራፒዚየም ½(a + b)h።'),6),
 D('circle',('Circumference and area of a circle','የክብ ዙሪያና ስፋት'),('C = 2πr, A = πr², with π ≈ 3.14.','ዙሪያ = 2πr፣ ስፋት = πr²፣ π ≈ 3.14።'),5)],
 [],
 [q('Area of a triangle, b = 10, h = 6','የጎነ-ሶስት ስፋት፣ b = 10፣ h = 6',['30','60','16']),q('Angle sum of a hexagon','የስድስት ጎን የአንግሎች ድምር',['720°','540°','360°']),q('Circumference, r = 5 (π ≈ 3.14)','ዙሪያ፣ r = 5 (π ≈ 3.14)',['31.4','78.5','15.7']),
  q('Trapezium a = 4, b = 8, h = 5. Area?','ትራፒዚየም a = 4፣ b = 8፣ h = 5። ስፋት?',['30','60','17']),q('Area of a circle, r = 10 (π ≈ 3.14)','የክብ ስፋት፣ r = 10',['314','62.8','31.4'])],
 notes(('Perimeter measures the boundary; area measures the surface inside.','ዙሪያ ድንበሩን ይለካል፤ ስፋት በውስጥ ያለውን ገጽ ይለካል።'),
  [('Triangle angles = 180°; polygon = (n − 2) × 180°.','የጎነ-ሶስት አንግሎች = 180°፤ ፖሊጎን = (n − 2) × 180°።'),('Areas: triangle ½bh, parallelogram bh, trapezium ½(a + b)h.','ስፋቶች፦ ጎነ-ሶስት ½bh፣ ፓራሌሎግራም bh፣ ትራፒዚየም ½(a + b)h።'),('Circle: C = 2πr, A = πr².','ክብ፦ ዙሪያ = 2πr፣ ስፋት = πr²።'),('Always write units: cm, cm².','ሁልጊዜ ምድብ ጻፉ፦ ሴ.ሜ፣ ሴ.ሜ²።')],
  [('ዙሪያ','perimeter','የድንበር ርዝመት'),('ስፋት','area','የገጽ መጠን'),('ራዲየስ','radius','ከመሃል እስከ ክብ ጠርዝ')],('Area of a circle: pie are squared (πr²)!','የክብ ስፋት፦ πr²!'),
  [(('Area of a parallelogram b = 9, h = 4','የፓራሌሎግራም ስፋት b = 9፣ h = 4'),'36'),(('Each angle of a regular pentagon','የመደበኛ ባለ አምስት ጎን እያንዳንዱ አንግል'),'108°')],
  INN(('Round garden designer','የክብ አትክልት ንድፍ'),('Landscape designers quote by area and fencing by perimeter. Design a circular school garden of radius 3 m and cost its fence and soil.','የአትክልት ንድፍ አውጪዎች ዋጋን በስፋት፣ አጥርን በዙሪያ ያሰላሉ። ራዲየሱ 3 ሜ የሆነ ክብ የትምህርት ቤት አትክልት ንደፉና የአጥሩንና የአፈሩን ወጪ አስሉ።'),[('Find the circumference for the fence.','ለአጥሩ ዙሪያውን ፈልጉ።'),('Find the area for soil and seeds.','ለአፈርና ለዘር ስፋቱን ፈልጉ።'),('Use local prices per metre and per m².','በሜትርና በሜ² የአካባቢ ዋጋ ተጠቀሙ።'),('Present a cost plan.','የወጪ ዕቅድ አቅርቡ።')])),
 sm(('Perimeter goes around; area covers the inside','ዙሪያ ይዞራል፤ ስፋት ውስጡን ይሸፍናል'),[('Angles','አንግሎች'),('Triangles and quadrilaterals','ጎነ-ሶስትና ጎነ-አራት'),('Circles','ክብ'),('Units','ምድቦች')]),
 ('angles, triangles and polygons, perimeter and area of quadrilaterals and circles','አንግሎች፣ ጎነ-ሶስቶችና ፖሊጎኖች፣ የጎነ-አራትና የክብ ዙሪያና ስፋት'))

TRI2='<svg viewBox="0 0 260 110" style="width:260px;height:auto" role="img" aria-label="two triangles"><polygon points="10,95 110,95 40,15" fill="var(--accent-soft)" stroke="var(--ink)" stroke-width="3"/><polygon points="150,95 250,95 180,15" fill="var(--accent-soft)" stroke="var(--ink)" stroke-width="3"/><text x="60" y="108" font-size="12" text-anchor="middle" fill="var(--ink)">ABC</text><text x="200" y="108" font-size="12" text-anchor="middle" fill="var(--ink)">DEF</text></svg>'
U(6,('Congruency of plane figures','የጠለል ምስሎች ተመሳሳይነት'),[
 D('cong',('Congruence tests','የተመሳሳይነት ፈተናዎች'),('Two triangles are congruent (≅) if they have exactly the same size and shape. Tests: SSS, SAS, ASA, RHS.','ሁለት ጎነ-ሶስቶች በትክክል አንድ ዓይነት መጠንና ቅርጽ ካላቸው ኮንግሩየንት (≅) ናቸው። ፈተናዎች፦ SSS፣ SAS፣ ASA፣ RHS።'),6),
 D('anglesum',('Find the missing angle','የጎደለውን አንግል ፈልጉ'),('Use the 180° rule to find matching angles in congruent triangles.','በኮንግሩየንት ጎነ-ሶስቶች ተዛማጅ አንግሎችን ለማግኘት የ180° ሕግን ተጠቀሙ።'),4)],
 [quiz(('Congruent or similar?','ኮንግሩየንት ወይስ ተመሳሳይ (similar)?'),('Congruent: same shape AND same size. Similar: same shape, sizes in proportion (angles equal).','ኮንግሩየንት፦ አንድ ዓይነት ቅርጽና መጠን። ሲሚላር፦ አንድ ዓይነት ቅርጽ፣ መጠኑ በምጣኔ (አንግሎች እኩል)።'),[
   q('Two photos of the same size from one negative are…','ከአንድ ኔጋቲቭ የታተሙ አንድ ዓይነት መጠን ያላቸው ፎቶዎች…',[('congruent','ኮንግሩየንት'),('only similar','ሲሚላር ብቻ')]),q('A map and the real land are…','ካርታና እውነተኛው መሬት…',[('similar','ሲሚላር'),('congruent','ኮንግሩየንት')]),
   q('If △ABC ≅ △DEF, then AB equals…','△ABC ≅ △DEF ከሆነ AB እኩል ነው ከ…',['DE','EF','DF'],fig=TRI2),q('Is AAA (three equal angles) a congruence test?','AAA (ሦስት እኩል አንግሎች) የኮንግሩየንስ ፈተና ነው?',[('No: it only shows similarity','አይደለም፤ ሲሚላርነትን ብቻ ያሳያል'),('Yes','አዎ')]),
   q('Similar triangles with sides 3, 4, 5 and 6, 8, ?','ጎኖቻቸው 3፣ 4፣ 5 እና 6፣ 8፣ ? የሆኑ ሲሚላር ጎነ-ሶስቶች',['10','9','7'])])],
 [q('Three pairs of equal sides → test…','ሦስት ጥንድ እኩል ጎኖች → ፈተና…',['SSS','SAS','ASA']),q('Right angle + hypotenuse + side → test…','ማዕዘናዊ አንግል + ሃይፖቴኑስ + ጎን → ፈተና…',['RHS','SSS','AAA']),
  q('Congruent figures have…','ኮንግሩየንት ምስሎች…',[('same shape and size','አንድ ዓይነት ቅርጽና መጠን'),('same colour','አንድ ዓይነት ቀለም')]),q('Scale factor from 4 cm to 12 cm','ከ4 ሴ.ሜ ወደ 12 ሴ.ሜ የማስፋፊያ ብዜት',['3','8','16'])],
 notes(('Congruent figures match exactly; similar figures match in shape with sides in proportion.','ኮንግሩየንት ምስሎች በትክክል ይገጣጠማሉ፤ ሲሚላር ምስሎች በቅርጽ ይመሳሰላሉ፣ ጎኖቻቸው በምጣኔ ናቸው።'),
  [('Congruent (≅): same shape and size; corresponding parts are equal.','ኮንግሩየንት (≅)፦ አንድ ዓይነት ቅርጽና መጠን፤ ተዛማጅ ክፍሎች እኩል።'),('Tests: SSS, SAS, ASA, RHS.','ፈተናዎች፦ SSS፣ SAS፣ ASA፣ RHS።'),('AAA does not prove congruence.','AAA ኮንግሩየንስን አያረጋግጥም።'),('Similar triangles: equal angles, sides in the same ratio.','ሲሚላር ጎነ-ሶስቶች፦ እኩል አንግሎች፣ ጎኖች በአንድ ምጣኔ።')],
  [('ኮንግሩየንት','congruent','በትክክል የሚገጣጠም'),('ሲሚላር','similar','በቅርጽ የሚመሳሰል'),('ተዛማጅ','corresponding','በተመሳሳይ ቦታ ያለ')],('Same shape + same size = congruent.','አንድ ቅርጽ + አንድ መጠን = ኮንግሩየንት።'),
  [(('Name the 4 congruence tests','4ቱን የኮንግሩየንስ ፈተናዎች ጥቀሱ'),'SSS, SAS, ASA, RHS'),(('Is every pair of similar triangles congruent?','ሁሉም ሲሚላር ጎነ-ሶስቶች ኮንግሩየንት ናቸው?'),('No','አይደሉም'))],
  INN(('Mass-production template','የጅምላ ምርት አብነት'),('Factories make thousands of congruent parts from one template. Make a cardboard template for a book cover or tile and produce 5 congruent copies.','ፋብሪካዎች ከአንድ አብነት በሺዎች የሚቆጠሩ ኮንግሩየንት ክፍሎችን ያመርታሉ። ለመጽሐፍ ሽፋን ወይም ለንጣፍ የካርቶን አብነት ሥሩና 5 ኮንግሩየንት ቅጂዎችን አምርቱ።'),[('Design a shape with measurements.','በልኬት ቅርጽ ንደፉ።'),('Cut a strong template.','ጠንካራ አብነት ቁረጡ።'),('Trace and cut 5 copies.','5 ቅጂዎችን አስምራችሁ ቁረጡ።'),('Check they are congruent by overlaying.','በመደራረብ ኮንግሩየንት መሆናቸውን አረጋግጡ።')])),
 sm(('Congruent: same shape and size; similar: same shape','ኮንግሩየንት፦ አንድ ቅርጽና መጠን፤ ሲሚላር፦ አንድ ቅርጽ'),[('Congruence','ኮንግሩየንስ'),('Tests','ፈተናዎች'),('Not AAA','AAA አይደለም'),('Similarity','ሲሚላርነት')]),
 ('congruency of plane figures and triangles, tests for congruency, introduction to similarity','የጠለል ምስሎችና የጎነ-ሶስቶች ኮንግሩየንስ፣ የኮንግሩየንስ ፈተናዎች፣ የሲሚላርነት መግቢያ'))

U(7,('Data handling','መረጃ አያያዝ'),[
 D('stats',('Mean, median, mode and range','አማካይ፣ መካከለኛ፣ ሞድና ክልል'),('Mean = sum ÷ count. Median = middle value. Mode = most frequent. Range = max − min.','አማካይ = ድምር ÷ ብዛት። መካከለኛ = መሃል ያለው። ሞድ = በብዛት የሚደጋገመው። ክልል = ትልቁ − ትንሹ።'),8)],
 [quiz(('Frequency tables and charts','የድግግሞሽ ሰንጠረዥና ቻርቶች'),('A frequency table counts how often each value appears. Pie charts show parts of a whole (360°); line graphs show change over time.','የድግግሞሽ ሰንጠረዥ እያንዳንዱ ዋጋ ስንት ጊዜ እንደሚደጋገም ይቆጥራል። የፓይ ቻርት የሙሉውን ክፍሎች (360°) ያሳያል፤ የመስመር ግራፍ በጊዜ ሂደት ለውጥን ያሳያል።'),[
   q('Best chart to show rainfall each month over a year','የዓመቱን ወርሃዊ ዝናብ ለማሳየት ምርጡ',[('line graph','የመስመር ግራፍ'),('pie chart','የፓይ ቻርት')]),q('Best chart to show how a family spends its budget','የቤተሰብ በጀት አጠቃቀምን ለማሳየት ምርጡ',[('pie chart','የፓይ ቻርት'),('line graph','የመስመር ግራፍ')]),
   q('In a pie chart, 25% of the data takes…','በፓይ ቻርት 25% የሚይዘው…',['90°','25°','45°']),q('Out of 40 students, 10 walk to school. Angle in a pie chart?','ከ40 ተማሪዎች 10 በእግር ይመጣሉ። በፓይ ቻርት አንግል?',['90°','10°','40°']),
   q('Frequencies 3, 5, 2 add to the…','ድግግሞሾች 3፣ 5፣ 2 ድምራቸው…',[('total number of data values','የመረጃ ዋጋዎች ጠቅላላ ብዛት'),('mean','አማካይ')])])],
 [q('Mean of 4, 6, 8, 10','የ4፣ 6፣ 8፣ 10 አማካይ',['7','6','28']),q('Median of 3, 9, 1, 7, 5','የ3፣ 9፣ 1፣ 7፣ 5 መካከለኛ',['5','7','9']),q('Mode of 2, 3, 3, 5, 3, 6','የ2፣ 3፣ 3፣ 5፣ 3፣ 6 ሞድ',['3','5','6']),q('Range of 12, 4, 19, 7','የ12፣ 4፣ 19፣ 7 ክልል',['15','19','11']),q('A full pie chart is…','ሙሉ የፓይ ቻርት…',['360°','100°','180°'])],
 notes(('Organise data in tables and charts, then describe it with mean, median, mode and range.','መረጃን በሰንጠረዥና በቻርት አደራጁ፤ ከዚያ በአማካይ፣ በመካከለኛ፣ በሞድና በክልል ግለጹ።'),
  [('Frequency tables count each value.','የድግግሞሽ ሰንጠረዥ እያንዳንዱን ዋጋ ይቆጥራል።'),('Pie chart: angle = fraction × 360°.','የፓይ ቻርት፦ አንግል = ክፍልፋይ × 360°።'),('Line graphs show change over time.','የመስመር ግራፍ በጊዜ ለውጥን ያሳያል።'),('Mean, median, mode and range describe data.','አማካይ፣ መካከለኛ፣ ሞድና ክልል መረጃን ይገልጻሉ።')],
  [('አማካይ','mean','ድምር ÷ ብዛት'),('መካከለኛ','median','መሃል ያለ ዋጋ'),('ድግግሞሽ','frequency','የመደጋገም ብዛት')],('Mode = most; median = middle; mean = share equally.','ሞድ = ብዙ፤ መካከለኛ = መሃል፤ አማካይ = በእኩል ማካፈል።'),
  [(('Mean of 10, 20, 30','የ10፣ 20፣ 30 አማካይ'),'20'),(('Angle for 1/3 of a pie chart','የፓይ ቻርት 1/3 አንግል'),'120°')],
  INN(('School data dashboard','የትምህርት ቤት የመረጃ ሰሌዳ'),('Data analysts are in high demand. Collect attendance for 4 weeks, make a line graph and a pie chart, and present the mean attendance to the director.','የመረጃ ተንታኞች በጣም ይፈለጋሉ። ለ4 ሳምንታት የመገኘት መረጃ ሰብስቡ፣ የመስመር ግራፍና የፓይ ቻርት ሥሩ፣ አማካይ መገኘቱን ለርዕሰ መምህሩ አቅርቡ።'),[('Collect daily attendance.','የዕለት መገኘትን ሰብስቡ።'),('Make a frequency table.','የድግግሞሽ ሰንጠረዥ ሥሩ።'),('Draw a line graph and a pie chart.','የመስመር ግራፍና የፓይ ቻርት ሳሉ።'),('Report mean, median and range.','አማካይ፣ መካከለኛና ክልል ዘግቡ።')])),
 sm(('Organise data, then summarise it with averages','መረጃን አደራጁ፤ ከዚያ በአማካዮች አጠቃሉ'),[('Frequency tables','የድግግሞሽ ሰንጠረዥ'),('Pie charts','የፓይ ቻርት'),('Line graphs','የመስመር ግራፍ'),('Averages and range','አማካዮችና ክልል')]),
 ('frequency tables, pie charts and line graphs, mean, mode, median and range','የድግግሞሽ ሰንጠረዥ፣ የፓይ ቻርትና የመስመር ግራፍ፣ አማካይ፣ ሞድ፣ መካከለኛና ክልል'))
dump('math')
