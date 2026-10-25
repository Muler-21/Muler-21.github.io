import sys;sys.path.insert(0,'.')
from common4 import *
SN=E('Mathematics','ሒሳብ');B='(d=>K4.drills(d))'
def U(n,title,drills,extra,exam,nt,summ,foot):
    unit(f'g4-math-{n}','math',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 4 Mathematics student book (ANRS), Chapter {n}: {foot[0]}.',f'በ4ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ {n} ላይ የተመሰረተ፦ {foot[1]}።'),B,drills,extra,exam,nt,summ)
def inn(t,x,steps): return (t,x,steps)

U(1,('Whole numbers','ሙሉ ቁጥሮች'),[
 D('place',('Place value to 100,000s','የቁጥር ቤት ዋጋ እስከ መቶ ሺህ'),('A 6-digit number has hundred thousands, ten thousands, thousands, hundreds, tens and ones. Value = digit × its place.','ባለ 6 ሆሄ ቁጥር መቶ ሺዎች፣ አስር ሺዎች፣ ሺዎች፣ መቶዎች፣ አስሮችና አንዶች አሉት። ዋጋ = ሆሄ × የቤቱ ዋጋ።'),6),
 D('compare',('Compare big numbers','ትልልቅ ቁጥሮችን ማወዳደር'),('Start from the left. The first place where digits differ decides which number is bigger.','ከግራ ጀምሩ። ሆሄዎቹ የሚለያዩበት የመጀመሪያው ቤት የትኛው እንደሚበልጥ ይወስናል።')),
 D('round',('Round numbers','ቁጥሮችን ማጠጋጋት'),('To round, look at the digit just right of the place. 0–4: keep; 5–9: go up.','ለማጠጋጋት ከቤቱ በስተቀኝ ያለውን ሆሄ ተመልከቱ። 0–4 ከሆነ ባለበት፤ 5–9 ከሆነ ወደ ላይ።'),6),
 D('eth',('Ethiopic numerals to 100','እስከ 100 ያሉ የኢትዮጵያ አሃዞች'),('Ethiopic numerals: ፩ ፪ ፫ ፬ ፭ ፮ ፯ ፰ ፱ for 1–9, ፲ ፳ ፴ ፵ ፶ ፷ ፸ ፹ ፺ for tens and ፻ for 100. 35 = ፴፭.','የኢትዮጵያ አሃዞች፦ ፩–፱ ለ1–9፣ ፲ ፳ ፴ ፵ ፶ ፷ ፸ ፹ ፺ ለአስሮች፣ ፻ ለ100። 35 = ፴፭።'),6)],
 [quiz(('Counting and big numbers','መቁጠርና ትልልቅ ቁጥሮች'),('10 thousands = 1 ten thousand, 10 ten thousands = 1 hundred thousand, 10 hundred thousands = 1 million.','10 ሺዎች = 1 አስር ሺህ፣ 10 አስር ሺዎች = 1 መቶ ሺህ፣ 10 መቶ ሺዎች = 1 ሚሊዮን።'),[
   q('Count by 10,000: 40,000, 50,000, 60,000, ?','በ10,000 ቁጠሩ፦ 40,000፣ 50,000፣ 60,000፣ ?',['70,000','61,000','600,000']),
   q('10 hundred thousands make…','10 መቶ ሺዎች…',[('1 million','1 ሚሊዮን'),('1 thousand','1 ሺህ'),('100,000','100,000')]),
   q('Which shows "three hundred four thousand fifty"?','"ሦስት መቶ አራት ሺህ ሃምሳ" የሚያሳየው?',['304,050','340,050','304,500']),
   q('Expanded form of 52,307 is…','የ52,307 ዝርዝር አጻጻፍ…',['50,000 + 2,000 + 300 + 7','5,000 + 200 + 30 + 7','50,000 + 2,000 + 30 + 7']),
   q('Order from smallest: 45,210; 45,120; 54,012','ከትንሹ ጀምሮ፦ 45,210፤ 45,120፤ 54,012',['45,120; 45,210; 54,012','54,012; 45,210; 45,120','45,210; 45,120; 54,012'])])],
 [q('The value of 7 in 372,145 is…','በ372,145 ውስጥ ያለው 7 ዋጋው…',['70,000','7,000','700,000']),q('Round 46,782 to the nearest 1,000.','46,782ን ወደ ቅርብ 1,000 አጠጋጉ።',['47,000','46,000','46,800']),
  q('Which is greater?','የትኛው ይበልጣል?',['910,000','901,999','99,999']),q('፵፯ is…','፵፯ ማለት…',['47','74','407']),q('10 × 100,000 = ?','10 × 100,000 = ?',['1,000,000','100,000','10,000,000'])],
 notes(('Every digit has a value that depends on its place. Ten of one place make one of the next place.','እያንዳንዱ ሆሄ እንደ ቤቱ የሚወሰን ዋጋ አለው። የአንድ ቤት 10ሩ የቀጣዩን ቤት 1 ያደርጋሉ።'),
  [('Places: ones, tens, hundreds, thousands, ten thousands, hundred thousands.','ቤቶች፦ አንዶች፣ አስሮች፣ መቶዎች፣ ሺዎች፣ አስር ሺዎች፣ መቶ ሺዎች።'),('Compare from the left; use > , < , =.','ከግራ ጀምራችሁ አወዳድሩ፤ >፣ <፣ = ተጠቀሙ።'),('Round: 0–4 stay, 5–9 go up.','ማጠጋጋት፦ 0–4 ባለበት፣ 5–9 ወደ ላይ።'),('Ethiopic numerals: ፩…፱, ፲…፺, ፻.','የኢትዮጵያ አሃዞች፦ ፩…፱፣ ፲…፺፣ ፻።')],
  [('የቁጥር ቤት ዋጋ','place value','ሆሄ በቤቱ ምክንያት የሚያገኘው ዋጋ'),('ማጠጋጋት','rounding','ወደ ቅርብ ቁጥር መውሰድ'),('ሚሊዮን','million','1,000,000')],('Ten of a place make one of the next place.','የአንድ ቤት አስሩ የቀጣዩን ቤት አንድ ይሆናሉ።'),
  [('Write 600,000 + 40,000 + 5,000 + 20 + 1','645,021'),(('Round 8,349 to the nearest 100','8,349ን ወደ ቅርብ 100 አጠጋጉ'),'8,300'),(('Write 68 in Ethiopic numerals','68ን በኢትዮጵያ አሃዝ ጻፉ'),'፷፰')],
  inn(('Population fact cards','የሕዝብ ቁጥር ካርዶች'),('Data experts work with big numbers. Make fact cards with the population of your town, zone and region (ask your teacher or look them up), then round each to the nearest 1,000.','የመረጃ ባለሙያዎች በትልልቅ ቁጥሮች ይሠራሉ። የከተማችሁን፣ የዞናችሁንና የክልላችሁን የሕዝብ ቁጥር (መምህራችሁን ጠይቁ) የሚያሳዩ ካርዶች ሥሩ፤ እያንዳንዱን ወደ ቅርብ 1,000 አጠጋጉ።'),
   [('Find 3 big numbers about your area.','ስለ አካባቢያችሁ 3 ትልልቅ ቁጥሮችን ፈልጉ።'),('Write each in digits and in words.','እያንዳንዱን በአሃዝና በፊደል ጻፉ።'),('Round them to the nearest 1,000.','ወደ ቅርብ 1,000 አጠጋጉ።'),('Put the cards on the class wall from smallest to largest.','ካርዶቹን ከትንሽ ወደ ትልቅ በክፍሉ ግድግዳ ላይ ለጥፉ።')])),
 sm(('A digit\'s value depends on its place','የሆሄ ዋጋ በቤቱ ይወሰናል'),[('Place value','የቁጥር ቤት ዋጋ'),('Comparing','ማወዳደር'),('Rounding','ማጠጋጋት'),('Ethiopic numerals','የኢትዮጵያ አሃዞች')]),
 ('whole numbers to 1,000,000, place value, comparing, rounding and Ethiopic numerals to 100','እስከ 1,000,000 ያሉ ሙሉ ቁጥሮች፣ የቁጥር ቤት ዋጋ፣ ማወዳደር፣ ማጠጋጋትና እስከ 100 ያሉ የኢትዮጵያ አሃዞች'))

U(2,('Adding and subtracting whole numbers','ሙሉ ቁጥሮችን መደመርና መቀነስ'),[
 D('add',('Add up to 1,000,000','እስከ 1,000,000 መደመር'),('Line up the places. Add from the ones; when a column makes 10 or more, carry 1 to the next place.','ቤቶቹን አሰልፉ። ከአንዶች ጀምራችሁ ደምሩ፤ ድምሩ 10 ወይም ከዚያ በላይ ከሆነ 1 ወደ ቀጣዩ ቤት ውሰዱ (አለኝታ)።'),5),
 D('sub',('Subtract up to 1,000,000','እስከ 1,000,000 መቀነስ'),('Start from the ones. If the top digit is smaller, borrow 1 from the next place (it becomes 10).','ከአንዶች ጀምሩ። የላይኛው ሆሄ ካነሰ ከቀጣዩ ቤት 1 ተበደሩ (10 ይሆናል)።'),5),
 D('word',('Word problems','የቃል ፕሮብሌሞች'),('Read carefully: "in all, total" means add; "left, how many more" means subtract.','በጥንቃቄ አንብቡ፦ "በአጠቃላይ፣ ድምር" መደመር ነው፤ "ቀረ፣ በስንት ይበልጣል" መቀነስ ነው።'),5)],
 [quiz(('Estimate and check','መገመትና ማረጋገጥ'),('Round first to estimate, then check your exact answer. Subtraction can be checked by adding.','ለመገመት መጀመሪያ አጠጋጉ፤ ከዚያ ትክክለኛውን መልስ አረጋግጡ። መቀነስን በመደመር ማረጋገጥ ይቻላል።'),[
   q('Estimate 39,870 + 20,150 (round to 10,000s).','39,870 + 20,150ን ገምቱ (ወደ 10,000 አጠጋግታችሁ)።',['60,000','50,000','70,000']),
   q('645,000 − 245,000 = 400,000. Check: 400,000 + 245,000 = ?','645,000 − 245,000 = 400,000። ማረጋገጫ፦ 400,000 + 245,000 = ?',['645,000','445,000','600,000']),
   q('Which property: 3,500 + 2,000 = 2,000 + 3,500?','የትኛው ባሕሪ ነው፦ 3,500 + 2,000 = 2,000 + 3,500?',[('Order does not change the sum','ቅደም ተከተል ድምሩን አይለውጠውም'),('Adding zero','ዜሮ መደመር'),('Subtracting','መቀነስ')]),
   q('500,000 − 1 = ?','500,000 − 1 = ?',['499,999','499,000','400,999'])])],
 [q('234,567 + 100,000 = ?','234,567 + 100,000 = ?',['334,567','244,567','234,667']),q('800,000 − 350,000 = ?','800,000 − 350,000 = ?',['450,000','550,000','350,000']),
  q('A town has 86,450 people. 12,300 more come. Total?','አንድ ከተማ 86,450 ሰዎች አሉት። 12,300 ተጨመሩ። ጠቅላላ?',['98,750','74,150','97,750']),q('To check 9,000 − 2,750 = 6,250 we compute…','9,000 − 2,750 = 6,250ን ለማረጋገጥ…',['6,250 + 2,750','6,250 − 2,750','9,000 + 2,750'])],
 notes(('Add and subtract big numbers place by place, carrying and borrowing when needed.','ትልልቅ ቁጥሮችን በየቤቱ ደምሩና ቀንሱ፤ ሲያስፈልግ አለኝታና ብድር ተጠቀሙ።'),
  [('Line up ones under ones, tens under tens…','አንዶችን ከአንዶች፣ አስሮችን ከአስሮች በታች አሰልፉ።'),('Carry when a column sum is 10 or more.','የአንድ ረድፍ ድምር 10 ወይም ከዚያ በላይ ሲሆን አለኝታ ውሰዱ።'),('Borrow when the top digit is smaller.','የላይኛው ሆሄ ሲያንስ ተበደሩ።'),('Estimate first, check after: subtraction ↔ addition.','መጀመሪያ ገምቱ፣ በኋላ አረጋግጡ፦ መቀነስ ↔ መደመር።')],
  [('ድምር','sum','የመደመር ውጤት'),('ልዩነት','difference','የመቀነስ ውጤት'),('አለኝታ','carrying','ወደ ቀጣዩ ቤት የሚተላለፍ')],('Check subtraction by adding back!','መቀነስን መልሳችሁ በመደመር አረጋግጡ!'),
  [('405,280 + 94,720','500,000'),('700,000 − 1,250','698,750'),(('Estimate 61,200 − 19,800','61,200 − 19,800ን ገምቱ'),'≈ 40,000')],
  inn(('School budget planner','የትምህርት ቤት በጀት አቅጣጫ'),('Schools and businesses plan budgets. Make a pretend school budget: income from 3 sources and 4 costs, then find what is left.','ትምህርት ቤቶችና ድርጅቶች በጀት ያቅዳሉ። የሙከራ የትምህርት ቤት በጀት ሥሩ፦ ከ3 ምንጮች ገቢና 4 ወጪዎች፤ ከዚያ የቀረውን አስሉ።'),
   [('Choose income: e.g. 250,000 birr from the government.','ገቢ ምረጡ፦ ለምሳሌ ከመንግሥት 250,000 ብር።'),('List 4 costs: books, chairs, water, paint.','4 ወጪዎችን ዘርዝሩ፦ መጻሕፍት፣ ወንበሮች፣ ውኃ፣ ቀለም።'),('Add the costs and subtract from the income.','ወጪዎቹን ደምሩና ከገቢው ቀንሱ።'),('Decide how to use what is left.','የቀረውን እንዴት እንደምትጠቀሙ ወስኑ።')])),
 sm(('Add and subtract place by place','በየቤቱ መደመርና መቀነስ'),[('Line up places','ቤቶችን ማሰለፍ'),('Carrying','አለኝታ'),('Borrowing','ብድር'),('Estimate and check','መገመትና ማረጋገጥ')]),
 ('adding and subtracting whole numbers up to 1,000,000','እስከ 1,000,000 ያሉ ሙሉ ቁጥሮችን መደመርና መቀነስ'))

U(3,('Fractions and decimals','ክፍልፋዮችና አስርዮሻዊ ቁጥሮች'),[
 D('frac',('Name the fraction','ክፍልፋዩን ሰይሙ'),('The numerator (ጠሪ) tells how many parts are taken; the denominator (ቆጣሪ) tells how many equal parts the whole has.','ጠሪው ስንት ክፍሎች እንደተወሰዱ ይነግራል፤ ቆጣሪው ሙሉው ስንት እኩል ክፍሎች እንዳሉት ይነግራል።'),5),
 D('nline',('Fractions and decimals on a number line','ክፍልፋዮችና አስርዮሾች በቁጥር መስመር'),('Count the small steps between whole numbers to find each step\'s size.','የእያንዳንዱን ደረጃ መጠን ለማወቅ በሙሉ ቁጥሮች መካከል ያሉትን ትናንሽ ደረጃዎች ቁጠሩ።'),4),
 D('fraccmp',('Compare fractions (same denominator)','ተመሳሳይ ቆጣሪ ያላቸውን ክፍልፋዮች ማወዳደር'),('Same denominator: compare the numerators.','ቆጣሪው ተመሳሳይ ሲሆን ጠሪዎቹን አወዳድሩ።'),4),
 D('fracadd',('Add and subtract fractions','ክፍልፋዮችን መደመርና መቀነስ'),('Same denominator: add or subtract the numerators only.','ቆጣሪው ተመሳሳይ ሲሆን ጠሪዎቹን ብቻ ደምሩ ወይም ቀንሱ።'),5),
 D('equiv',('Equivalent fractions','አቻ ክፍልፋዮች'),('Multiply the numerator and denominator by the same number: 1/2 = 2/4 = 3/6.','ጠሪውንና ቆጣሪውን በአንድ ዓይነት ቁጥር አባዙ፦ 1/2 = 2/4 = 3/6።'),4),
 D('dec',('Tenths and hundredths','አስረኛና መቶኛ'),('1 tenth = 0.1 (1 of 10 parts). 1 hundredth = 0.01 (1 of 100 parts).','1 አስረኛ = 0.1 (ከ10 ክፍሎች 1)። 1 መቶኛ = 0.01 (ከ100 ክፍሎች 1)።'),5),
 D('deccmp',('Compare decimals','አስርዮሾችን ማወዳደር'),('Compare tenths first, then hundredths.','መጀመሪያ አስረኛዎችን፣ ከዚያ መቶኛዎችን አወዳድሩ።'),4)],
 [],
 [q('3/8 + 4/8 = ?','3/8 + 4/8 = ?',['7/8','7/16','1/8']),q('Which is equal to 1/2?','ከ1/2 ጋር እኩል የሆነው?',['4/8','1/4','2/3']),q('0.7 means…','0.7 ማለት…',[('7 tenths','7 አስረኛ'),('7 hundredths','7 መቶኛ'),('70 wholes','70 ሙሉ')]),
  q('Which is bigger?','የትኛው ይበልጣል?',['0.45','0.39','0.4']),q('25 hundredths = ?','25 መቶኛ = ?',['0.25','2.5','0.025'])],
 notes(('A fraction names equal parts of a whole; a decimal is a fraction with 10 or 100 parts.','ክፍልፋይ የአንድ ሙሉ እኩል ክፍሎችን ይሰይማል፤ አስርዮሽ ደግሞ 10 ወይም 100 ክፍሎች ያሉት ክፍልፋይ ነው።'),
  [('Numerator (ጠሪ) = parts taken; denominator (ቆጣሪ) = equal parts in the whole.','ጠሪ = የተወሰዱ ክፍሎች፤ ቆጣሪ = የሙሉው እኩል ክፍሎች።'),('Same denominator: compare, add and subtract the numerators.','ተመሳሳይ ቆጣሪ፦ ጠሪዎቹን አወዳድሩ፣ ደምሩ፣ ቀንሱ።'),('Equivalent fractions: multiply top and bottom by the same number.','አቻ ክፍልፋዮች፦ ጠሪና ቆጣሪን በአንድ ቁጥር አባዙ።'),('0.1 = 1/10, 0.01 = 1/100; compare tenths then hundredths.','0.1 = 1/10፣ 0.01 = 1/100፤ መጀመሪያ አስረኛ፣ ከዚያ መቶኛ አወዳድሩ።')],
  [('ክፍልፋይ','fraction','የሙሉ እኩል ክፍል'),('ጠሪ','numerator','የተወሰዱ ክፍሎች ብዛት'),('ቆጣሪ','denominator','የእኩል ክፍሎች ብዛት'),('አስርዮሽ','decimal','በነጥብ የሚጻፍ ክፍልፋይ')],('Same bottom? Work with the top!','ቆጣሪው አንድ ከሆነ በጠሪው ሥሩ!'),
  [('5/9 − 2/9','3/9'),(('Write 3/10 as a decimal','3/10ን በአስርዮሽ ጻፉ'),'0.3'),(('Give an equivalent of 2/3','የ2/3 አቻ ስጡ'),'4/6')],
  inn(('Fair-share injera shop','የእኩል ድርሻ የእንጀራ ሱቅ'),('Cooks and bakers cut food into equal parts to sell. Plan how to cut and price an injera into halves, quarters and eighths.','ምግብ አብሳዮችና ዳቦ ጋጋሪዎች ለመሸጥ ምግብን በእኩል ይቆርጣሉ። አንድ እንጀራን ወደ ግማሽ፣ ሩብና ስምንተኛ እንዴት እንደምትቆርጡና ዋጋ እንደምታወጡ አቅዱ።'),
   [('Draw a big circle as an injera.','ትልቅ ክብ እንደ እንጀራ ሳሉ።'),('Cut paper copies into 2, 4 and 8 equal parts.','የወረቀት ቅጂዎችን በ2፣ 4ና 8 እኩል ክፍሎች ቁረጡ።'),('If a whole injera costs 16 birr, price each part.','አንድ ሙሉ እንጀራ 16 ብር ከሆነ የእያንዳንዱን ክፍል ዋጋ አውጡ።'),('Show that 2/4 and 4/8 cost the same as 1/2.','2/4 እና 4/8 ከ1/2 ጋር እኩል ዋጋ እንዳላቸው አሳዩ።')])),
 sm(('Fractions and decimals name equal parts of a whole','ክፍልፋዮችና አስርዮሾች የሙሉውን እኩል ክፍሎች ይሰይማሉ'),[('Numerator and denominator','ጠሪና ቆጣሪ'),('Same denominator','ተመሳሳይ ቆጣሪ'),('Equivalent fractions','አቻ ክፍልፋዮች'),('Decimals','አስርዮሾች')]),
 ('fractions as parts of a whole, on a number line, comparing, adding and subtracting with the same denominator, equivalent fractions and decimals','ክፍልፋዮች እንደ ሙሉ ክፍሎች፣ በቁጥር መስመር፣ ተመሳሳይ ቆጣሪ ያላቸውን ማወዳደር፣ መደመርና መቀነስ፣ አቻ ክፍልፋዮችና አስርዮሾች'))

U(4,('Multiplying and dividing whole numbers','ሙሉ ቁጥሮችን ማባዛትና ማካፈል'),[
 D('mul10',('Multiply by thousands','የሺዎች ብዜቶችን ማባዛት'),('Multiply the front digits, then write all the zeros: 3,000 × 4 → 3 × 4 = 12 → 12,000.','የፊት ሆሄዎቹን አባዙ፤ ከዚያ ዜሮዎቹን በሙሉ ጻፉ፦ 3,000 × 4 → 3 × 4 = 12 → 12,000።'),5),
 D('mul',('Multiply by a 1-digit number','በባለ አንድ ሆሄ ማባዛት'),('Multiply each place from the ones and carry.','ከአንዶች ጀምራችሁ እያንዳንዱን ቤት አባዙ፤ አለኝታ ውሰዱ።'),5),
 D('mul2',('Multiply by a 2-digit number','በባለ ሁለት ሆሄ ማባዛት'),('Split the 2-digit number: 34 × 23 = 34 × 20 + 34 × 3.','ባለ ሁለት ሆሄውን ቁጥር ክፈሉ፦ 34 × 23 = 34 × 20 + 34 × 3።'),4),
 D('div',('Divide','ማካፈል'),('Division shares equally. Think of multiplication facts: 56 ÷ 7 = 8 because 7 × 8 = 56.','ማካፈል በእኩል ማከፋፈል ነው። የብዜት እውነታዎችን አስቡ፦ 56 ÷ 7 = 8 ምክንያቱም 7 × 8 = 56።'),5),
 D('divr',('Division with a remainder','ቀሪ ያለው ማካፈል'),('If it does not share exactly, the amount left over is the remainder. It must be smaller than the divisor.','በትክክል ካልተካፈለ የሚተርፈው ቀሪ ነው። ቀሪው ከአካፋዩ ማነስ አለበት።'),4)],
 [quiz(('Multiply or divide?','ማባዛት ወይስ ማካፈል?'),('Equal groups put together: multiply. Sharing or grouping equally: divide.','እኩል ቡድኖችን ማሰባሰብ፦ ማባዛት። በእኩል ማከፋፈል ወይም መቧደን፦ ማካፈል።'),[
   q('6 trucks each carry 2,500 kg of coffee. Total kg?','6 መኪኖች እያንዳንዳቸው 2,500 ኪ.ግ ቡና ጫኑ። ጠቅላላ ኪ.ግ?',['15,000','8,500','12,500']),
   q('840 exercise books are shared equally by 7 classes. Each class gets?','840 ደብተሮች ለ7 ክፍሎች በእኩል ተከፋፈሉ። እያንዳንዱ ክፍል?',['120','140','107']),
   q('A bus seats 45. How many seats in 12 buses?','አንድ አውቶቡስ 45 ይይዛል። 12 አውቶቡሶች ስንት?',['540','450','57']),
   q('100 eggs are packed in trays of 30. How many full trays and eggs left?','100 እንቁላሎች በ30 በ30 ትሪ ታሸጉ። ስንት ሙሉ ትሪና ስንት ቀሪ?',[('3 trays, 10 left','3 ትሪ፣ 10 ቀሪ'),('4 trays, 0 left','4 ትሪ፣ 0 ቀሪ'),('3 trays, 3 left','3 ትሪ፣ 3 ቀሪ')])])],
 [q('40,000 × 5 = ?','40,000 × 5 = ?',['200,000','20,000','45,000']),q('1,203 × 4 = ?','1,203 × 4 = ?',['4,812','4,802','1,207']),q('72 ÷ 8 = ?','72 ÷ 8 = ?',['9','8','64']),
  q('50 ÷ 6 = ?','50 ÷ 6 = ?',['8 r 2','8 r 6','9 r 2']),q('25 × 12 = ?','25 × 12 = ?',['300','250','37'])],
 notes(('Multiplication adds equal groups quickly; division shares into equal groups.','ማባዛት እኩል ቡድኖችን በፍጥነት ይደምራል፤ ማካፈል በእኩል ቡድኖች ያከፋፍላል።'),
  [('Multiples of 1,000s: multiply the digits, add the zeros.','የሺዎች ብዜቶች፦ ሆሄዎቹን አባዙ፣ ዜሮዎቹን ጨምሩ።'),('Multiply place by place and carry.','በየቤቱ አባዙ፤ አለኝታ ውሰዱ።'),('2-digit multipliers: split into tens and ones.','ባለ 2 ሆሄ አባዢ፦ ወደ አስሮችና አንዶች ክፈሉ።'),('Divide using multiplication facts; remainder < divisor.','በብዜት እውነታዎች አካፍሉ፤ ቀሪ < አካፋይ።')],
  [('ብዜት','product','የማባዛት ውጤት'),('ድርሻ','quotient','የማካፈል ውጤት'),('ቀሪ','remainder','የሚተርፈው')],('Division is multiplication backwards.','ማካፈል የማባዛት ተገላቢጦሽ ነው።'),
  [('3,000 × 7','21,000'),('96 ÷ 4','24'),('47 ÷ 5','9 r 2')],
  inn(('Packaging business','የማሸጊያ ሥራ'),('Packing goods in equal packs is a real business. Plan packing 1,000 pencils in packs of 12 and price each pack.','ዕቃዎችን በእኩል ማሸግ እውነተኛ ሥራ ነው። 1,000 እርሳሶችን በ12 በ12 ለማሸግ አቅዱና የእያንዳንዱን ጥቅል ዋጋ አውጡ።'),
   [('Divide 1,000 by 12: how many full packs?','1,000ን በ12 አካፍሉ፦ ስንት ሙሉ ጥቅል?'),('How many pencils are left over?','ስንት እርሳሶች ይቀራሉ?'),('If a pencil costs 5 birr, what does a pack cost?','አንድ እርሳስ 5 ብር ከሆነ የአንድ ጥቅል ዋጋ?'),('How much money do all the full packs make?','ሙሉ ጥቅሎቹ በአጠቃላይ ስንት ብር ያስገኛሉ?')])),
 sm(('Multiply equal groups; divide to share equally','እኩል ቡድኖችን አባዙ፤ በእኩል ለማከፋፈል አካፍሉ'),[('Thousands','ሺዎች'),('Multiplying','ማባዛት'),('2-digit multipliers','ባለ 2 ሆሄ አባዢ'),('Dividing and remainders','ማካፈልና ቀሪ')]),
 ('multiplying and dividing whole numbers, including multiples of 10,000 and 100,000','ሙሉ ቁጥሮችን ማባዛትና ማካፈል፤ የ10,000ና የ100,000 ብዜቶችን ጨምሮ'))

LINES='<svg viewBox="0 0 260 120" style="width:260px;height:auto" role="img" aria-label="line, ray, segment"><line x1="10" y1="20" x2="250" y2="20" stroke="var(--ink)" stroke-width="3"/><polygon points="10,20 22,13 22,27" fill="var(--ink)"/><polygon points="250,20 238,13 238,27" fill="var(--ink)"/><line x1="10" y1="60" x2="250" y2="60" stroke="var(--ink)" stroke-width="3"/><circle cx="10" cy="60" r="5" fill="var(--accent)"/><polygon points="250,60 238,53 238,67" fill="var(--ink)"/><line x1="10" y1="100" x2="250" y2="100" stroke="var(--ink)" stroke-width="3"/><circle cx="10" cy="100" r="5" fill="var(--accent)"/><circle cx="250" cy="100" r="5" fill="var(--accent)"/><text x="130" y="14" text-anchor="middle" font-size="12" fill="var(--ink)">A</text><text x="130" y="54" text-anchor="middle" font-size="12" fill="var(--ink)">B</text><text x="130" y="94" text-anchor="middle" font-size="12" fill="var(--ink)">C</text></svg>'
U(5,('Geometric figures','ጂኦሜትሪያዊ ምስሎች'),[
 D('angle',('Kinds of angles','የአንግል ዓይነቶች'),('Right angle = 90° (a square corner). Acute is smaller, obtuse is bigger than a right angle, straight = 180°.','ማዕዘናዊ አንግል = 90° (የካሬ ጥግ)። ሹል ያንሳል፤ ዝርጥ ከማዕዘናዊ ይበልጣል፤ ዝርግ = 180°።'),6),
 D('tri',('Kinds of triangles','የጎነ-ሶስት ዓይነቶች'),('Look at the sides (equal or not) and the angles (a right angle?).','ጎኖቹን (እኩል ናቸው ወይ) እና አንግሎቹን (ማዕዘናዊ አለ ወይ) ተመልከቱ።'),5),
 D('quad',('Kinds of quadrilaterals','የጎነ-አራት ዓይነቶች'),('Square: 4 equal sides, 4 right angles. Rectangle: 4 right angles. Parallelogram: 2 pairs of parallel sides. Trapezium: 1 pair. Rhombus: 4 equal sides.','ካሬ፦ 4 እኩል ጎኖች፣ 4 ማዕዘናዊ አንግሎች። ሬክታንግል፦ 4 ማዕዘናዊ አንግሎች። ፓራሌሎግራም፦ 2 ጥንድ ትይዩ ጎኖች። ትራፒዚየም፦ 1 ጥንድ። ሮምበስ፦ 4 እኩል ጎኖች።'),5)],
 [quiz(('Lines, rays and segments','ቀጥታ መስመር፣ ጨረርና ውስን ቀጥታ መስመር'),('A line goes on forever both ways; a ray has one end point; a segment has two end points. Lines can be parallel, intersecting or perpendicular.','ቀጥታ መስመር በሁለቱም አቅጣጫ ያለገደብ ይቀጥላል፤ ጨረር አንድ መነሻ ነጥብ አለው፤ ውስን ቀጥታ መስመር ሁለት ጫፍ ነጥቦች አሉት። መስመሮች ትይዩ፣ ተቋራጭ ወይም ቀጤ ነክ ሊሆኑ ይችላሉ።'),[
   q('Which one is a ray?','ጨረሩ የትኛው ነው?',['A','B','C'],1,fig=LINES),q('Which one is a segment?','ውስን ቀጥታ መስመሩ የትኛው ነው?',['C','A','B'],0,fig=LINES),
   q('Railway lines that never meet are…','ፈጽሞ የማይገናኙ የባቡር ሀዲዶች…',[('parallel','ትይዩ'),('perpendicular','ቀጤ ነክ'),('a ray','ጨረር')]),
   q('Two lines meeting at a right angle are…','በማዕዘናዊ አንግል የሚገናኙ ሁለት መስመሮች…',[('perpendicular','ቀጤ ነክ'),('parallel','ትይዩ'),('curved','ጎባጣ')])])],
 [q('An angle of 90° is…','90° የሆነ አንግል…',[('a right angle','ማዕዘናዊ አንግል'),('acute','ሹል'),('obtuse','ዝርጥ')]),q('A triangle with 3 equal sides is…','3 እኩል ጎኖች ያሉት ጎነ-ሶስት…',[('equilateral','እኩል ጎን ጎነ-ሶስት'),('scalene','ሶስቱም ጎኖች እኩል ያልሆኑ'),('right-angled','ማዕዘናዊ አንግል ጎነ-ሶስት')]),
  q('A quadrilateral with only one pair of parallel sides is…','አንድ ጥንድ ትይዩ ጎን ብቻ ያለው ጎነ-አራት…',[('a trapezium','ትራፒዚየም'),('a square','ካሬ'),('a rhombus','ሮምበስ')]),q('A ray has how many end points?','ጨረር ስንት መነሻ/ጫፍ ነጥብ አለው?',['1','2','0']),q('An angle of 120° is…','120° የሆነ አንግል…',[('obtuse','ዝርጥ'),('acute','ሹል'),('straight','ዝርግ')])],
 notes(('Shapes are built from lines and angles; we name them by their sides and angles.','ምስሎች ከመስመሮችና ከአንግሎች ይሠራሉ፤ በጎኖቻቸውና በአንግሎቻቸው እንሰይማቸዋለን።'),
  [('Line, ray, segment; parallel, intersecting, perpendicular.','ቀጥታ መስመር፣ ጨረር፣ ውስን ቀጥታ መስመር፤ ትይዩ፣ ተቋራጭ፣ ቀጤ ነክ።'),('Angles: acute < 90° = right < obtuse < 180° = straight.','አንግሎች፦ ሹል < 90° = ማዕዘናዊ < ዝርጥ < 180° = ዝርግ።'),('Triangles by sides and by angles.','ጎነ-ሶስቶች በጎንና በአንግል።'),('Quadrilaterals: square, rectangle, parallelogram, trapezium, rhombus.','ጎነ-አራቶች፦ ካሬ፣ ሬክታንግል፣ ፓራሌሎግራም፣ ትራፒዚየም፣ ሮምበስ።')],
  [('ጨረር','ray','አንድ መነሻ ያለው መስመር'),('ትይዩ','parallel','የማይገናኙ'),('ቀጤ ነክ','perpendicular','በ90° የሚገናኙ')],('Use a book corner to test for a right angle!','ማዕዘናዊ አንግልን በመጽሐፍ ጥግ ፈትሹ!'),
  [(('Name an obtuse angle in your classroom','በክፍላችሁ ዝርጥ አንግል ጥቀሱ'),('An open door, a laptop screen','የተከፈተ በር፣ የላፕቶፕ ማያ')),(('How many right angles in a rectangle?','ሬክታንግል ስንት ማዕዘናዊ አንግሎች አሉት?'),'4')],
  inn(('Shape-spotting walk','የምስሎች ፍለጋ ጉዞ'),('Architects and builders use these shapes. Walk around your village and photograph or draw 10 shapes in buildings, then make a poster.','አርክቴክቶችና ገንቢዎች እነዚህን ምስሎች ይጠቀማሉ። በመንደራችሁ ተዘዋውራችሁ በሕንጻዎች ላይ ያሉ 10 ምስሎችን ሳሉ ወይም ፎቶ አንሱ፤ ፖስተር ሥሩ።'),
   [('Look at doors, windows, roofs, fences.','በሮችን፣ መስኮቶችን፣ ጣሪያዎችን፣ አጥሮችን ተመልከቱ።'),('Draw each shape and name it.','እያንዳንዱን ምስል ሳሉና ሰይሙ።'),('Mark the right angles in red.','ማዕዘናዊ አንግሎችን በቀይ ምልክት አድርጉ።'),('Present your poster to the class.','ፖስተራችሁን ለክፍሉ አቅርቡ።')])),
 sm(('Lines and angles build every shape','መስመሮችና አንግሎች ሁሉንም ምስል ይሠራሉ'),[('Lines','መስመሮች'),('Angles','አንግሎች'),('Triangles','ጎነ-ሶስቶች'),('Quadrilaterals','ጎነ-አራቶች')]),
 ('lines, rays and segments, kinds of angles, triangles and quadrilaterals','ቀጥታ መስመሮች፣ ጨረሮችና ውስን ቀጥታ መስመሮች፣ የአንግል ዓይነቶች፣ ጎነ-ሶስቶችና ጎነ-አራቶች'))

DOTS=lambda n:'<div class="row" style="justify-content:center;gap:18px;align-items:flex-end">'+''.join(f'<div class="cnt" style="--per:{k}"><span class="emo" style="font-size:1.1rem">'+'🟦'*(k*k)+'</span></div>' for k in range(1,n+1))+'</div>'
U(6,('Patterns','ፓተርን'),[
 D('pattern',('Find any term','ማንኛውንም ቃል ማግኘት'),('Find the rule (how much it grows each time and where it starts), then use it for any term.','ሕጉን ፈልጉ (በየጊዜው በስንት እንደሚጨምርና ከየት እንደሚጀምር)፤ ከዚያ ለማንኛውም ቃል ተጠቀሙበት።'),5),
 D('rule',('Write the rule with a variable','ሕጉን በተለዋዋጭ መጻፍ'),('Use n for the term number. If a pattern grows by 3 each time, the rule starts with 3n.','ለቃሉ ተራ ቁጥር n ተጠቀሙ። ፓተርኑ በየጊዜው በ3 ካደገ ሕጉ በ3n ይጀምራል።'),5)],
 [quiz(('Shape and number patterns','የምስልና የቁጥር ፓተርኖች'),('Patterns repeat or grow by a rule.','ፓተርኖች ይደጋገማሉ ወይም በሕግ ያድጋሉ።'),[
   q('Square patterns: 1, 4, 9, … next?','የካሬ ፓተርን፦ 1፣ 4፣ 9፣ … ቀጣዩ?',['16','12','13'],fig=DOTS(3)),
   q('Each table seats 4 people more than the last: 6, 10, 14, … The 5th?','6፣ 10፣ 14፣ … 5ኛው?',['22','18','26']),
   q('Rule "2n + 1" for n = 10 gives…','"2n + 1" ሕግ ለn = 10…',['21','12','30']),
   q('Pattern: 5, 10, 20, 40, … next?','ፓተርን፦ 5፣ 10፣ 20፣ 40፣ … ቀጣዩ?',['80','60','45'])])],
 [q('3, 7, 11, 15, … next?','3፣ 7፣ 11፣ 15፣ … ቀጣዩ?',['19','18','20']),q('Rule 5n: 10th term?','ሕግ 5n፦ 10ኛው ቃል?',['50','15','105']),q('Which rule gives 4, 7, 10, 13?','4፣ 7፣ 10፣ 13ን የሚሰጠው?',['3n + 1','4n','n + 3']),q('100, 90, 80, … the 6th term?','100፣ 90፣ 80፣ … 6ኛው ቃል?',['50','40','60'])],
 notes(('A pattern follows a rule; with a variable we can find any term.','ፓተርን ሕግን ይከተላል፤ በተለዋዋጭ ማንኛውንም ቃል ማግኘት እንችላለን።'),
  [('Find how much the pattern grows each step.','ፓተርኑ በእያንዳንዱ ደረጃ በስንት እንደሚያድግ ፈልጉ።'),('Write the rule with n: e.g. 3n + 1.','ሕጉን በn ጻፉ፦ ለምሳሌ 3n + 1።'),('Use the rule to find far terms (the 20th, 100th).','የራቁ ቃላትን (20ኛ፣ 100ኛ) በሕጉ ፈልጉ።'),('Patterns appear in tiles, seats, savings and nature.','ፓተርኖች በንጣፍ፣ በወንበር፣ በቁጠባና በተፈጥሮ ይገኛሉ።')],
  [('ፓተርን','pattern','በሕግ የሚቀጥል ቅደም ተከተል'),('ተለዋዋጭ','variable','ለቁጥር የሚቆም ፊደል (n)'),('ቃል','term','በፓተርኑ ያለ እያንዳንዱ ቁጥር')],('Grows by 3 → the rule starts with 3n.','በ3 ያድጋል → ሕጉ በ3n ይጀምራል።'),
  [(('Rule 4n − 1, 5th term?','ሕግ 4n − 1፣ 5ኛ ቃል?'),'19'),(('Next: 2, 6, 18, …','ቀጣዩ፦ 2፣ 6፣ 18፣ …'),'54')],
  inn(('Savings pattern plan','የቁጠባ ፓተርን ዕቅድ'),('Saving a little more each week grows fast. Plan a savings pattern (e.g. 5, 7, 9 birr …) and find the total after 10 weeks.','በየሳምንቱ ትንሽ ጨምሮ መቆጠብ በፍጥነት ያድጋል። የቁጠባ ፓተርን አቅዱ (ለምሳሌ 5፣ 7፣ 9 ብር …) እና ከ10 ሳምንት በኋላ ያለውን ድምር አስሉ።'),
   [('Choose a start amount and a weekly increase.','የመነሻ መጠንና ሳምንታዊ ጭማሪ ምረጡ።'),('Write the rule with n.','ሕጉን በn ጻፉ።'),('Make a table for 10 weeks and add it up.','ለ10 ሳምንታት ሰንጠረዥ ሥሩና ደምሩ።'),('Decide what you could buy or start with it.','በዚህ ምን መግዛት ወይም መጀመር እንደምትችሉ ወስኑ።')])),
 sm(('A pattern follows a rule you can write with n','ፓተርን በn መጻፍ የሚቻል ሕግ ይከተላል'),[('How it grows','እንዴት ያድጋል'),('Rule with n','ሕግ በn'),('Far terms','የራቁ ቃላት'),('Patterns in life','በሕይወት ያሉ ፓተርኖች')]),
 ('generalising patterns, describing them with a variable and applying them','ፓተርኖችን ማጠቃለል፣ በተለዋዋጭ መግለጽና በሥራ ላይ ማዋል'))

U(7,('Measurement','ልኬት'),[
 D('units',('Change units','መለኪያ ምድቦችን መለወጥ'),('Big to small unit: multiply (1 m = 100 cm). Small to big: divide.','ከትልቅ ወደ ትንሽ ምድብ፦ አባዙ (1 ሜ = 100 ሴ.ሜ)። ከትንሽ ወደ ትልቅ፦ አካፍሉ።'),6),
 D('perim',('Perimeter of a rectangle','የሬክታንግል ዙሪያ'),('Perimeter is the distance around: P = 2 × (length + width).','ዙሪያ በዙሪያው ያለው ርቀት ነው፦ ዙሪያ = 2 × (ርዝመት + ወርድ)።'),5),
 D('area',('Area of a rectangle','የሬክታንግል ስፋት'),('Area is the space inside, in square units: A = length × width.','ስፋት በውስጡ ያለው ቦታ ነው፤ በካሬ ምድብ ይለካል፦ ስፋት = ርዝመት × ወርድ።'),5)],
 [quiz(('Choose the right unit','ትክክለኛውን ምድብ ምረጡ'),('mm for tiny things, cm for short, m for rooms and fields, km for long roads. g and kg for mass, mL and L for liquids.','ሚ.ሜ ለጥቃቅን፣ ሴ.ሜ ለአጭር፣ ሜ ለክፍልና ለማሳ፣ ኪ.ሜ ለረጅም መንገድ። ግ እና ኪ.ግ ለመጠነ ቁስ፣ ሚ.ሊ እና ሊ ለፈሳሽ።'),[
   q('Distance from Bahir Dar to Gondar','ከባሕር ዳር እስከ ጎንደር ያለው ርቀት',[('km','ኪ.ሜ'),('cm','ሴ.ሜ'),('mm','ሚ.ሜ')]),q('Thickness of a coin','የሳንቲም ውፍረት',[('mm','ሚ.ሜ'),('m','ሜ'),('km','ኪ.ሜ')]),
   q('Mass of a sack of teff','የአንድ ኩንታል ጤፍ መጠነ ቁስ',[('kg','ኪ.ግ'),('g','ግ'),('mL','ሚ.ሊ')]),q('Medicine in a spoon','በማንኪያ ያለ መድኃኒት',[('mL','ሚ.ሊ'),('L','ሊ'),('kg','ኪ.ግ')]),
   q('A jerrycan holds 20 L. How many mL?','አንድ ጀሪካን 20 ሊ ይይዛል። ስንት ሚ.ሊ?',['20,000 mL','2,000 mL','200 mL'])])],
 [q('3 km = ? m','3 ኪ.ሜ = ? ሜ',['3,000 m','300 m','30,000 m']),q('A field is 20 m by 15 m. Perimeter?','ማሳው 20 ሜ በ15 ሜ ነው። ዙሪያው?',['70 m','300 m','35 m']),q('A room is 5 m by 4 m. Area?','ክፍሉ 5 ሜ በ4 ሜ ነው። ስፋቱ?',['20 m²','18 m²','9 m²']),
  q('2,500 g = ? kg','2,500 ግ = ? ኪ.ግ',['2.5 kg','25 kg','250 kg']),q('Which is longest?','ረጅሙ የትኛው ነው?',['2 m','150 cm','1,500 mm'])],
 notes(('We measure length, mass and capacity with standard units and find perimeter and area of rectangles.','ርዝመትን፣ መጠነ ቁስንና ይዘትን በመደበኛ ምድቦች እንለካለን፤ የሬክታንግልን ዙሪያና ስፋት እናገኛለን።'),
  [('Length: 10 mm = 1 cm, 100 cm = 1 m, 1,000 m = 1 km.','ርዝመት፦ 10 ሚ.ሜ = 1 ሴ.ሜ፣ 100 ሴ.ሜ = 1 ሜ፣ 1,000 ሜ = 1 ኪ.ሜ።'),('Perimeter = 2 × (length + width).','ዙሪያ = 2 × (ርዝመት + ወርድ)።'),('Area = length × width (square units).','ስፋት = ርዝመት × ወርድ (ካሬ ምድብ)።'),('Mass: 1,000 g = 1 kg. Capacity: 1,000 mL = 1 L.','መጠነ ቁስ፦ 1,000 ግ = 1 ኪ.ግ። ይዘት፦ 1,000 ሚ.ሊ = 1 ሊ።')],
  [('ዙሪያ','perimeter','በዙሪያው ያለ ርቀት'),('ስፋት','area','በውስጥ ያለ ቦታ'),('ይዘት','capacity','የሚይዘው የፈሳሽ መጠን')],('Perimeter goes AROUND, area fills IN.','ዙሪያ ይዞራል፣ ስፋት ይሞላል።'),
  [(('Area of a 9 m × 6 m garden','የ9 ሜ × 6 ሜ ጓሮ ስፋት'),'54 m²'),(('4 L = ? mL','4 ሊ = ? ሚ.ሊ'),'4,000 mL')],
  inn(('Fence and seed planner','የአጥርና የዘር ዕቅድ'),('Farmers must know perimeter for fencing and area for seeds. Measure a school garden bed and work out the fence length and how many seedlings fit.','ገበሬዎች ለአጥር ዙሪያን፣ ለዘር ስፋትን ማወቅ አለባቸው። የትምህርት ቤት የአትክልት መደብ ለኩና የአጥሩን ርዝመትና ስንት ችግኝ እንደሚገባ አስሉ።'),
   [('Measure length and width with a rope or tape.','ርዝመትና ወርዱን በገመድ ወይም በሜትር ለኩ።'),('Perimeter = fence length.','ዙሪያ = የአጥሩ ርዝመት።'),('Area ÷ space for one seedling = number of seedlings.','ስፋት ÷ የአንድ ችግኝ ቦታ = የችግኞች ብዛት።'),('Estimate the cost of fence and seedlings.','የአጥሩንና የችግኞቹን ወጪ ገምቱ።')])),
 sm(('Measure with standard units; perimeter goes around, area fills inside','በመደበኛ ምድቦች ለኩ፤ ዙሪያ ይዞራል፣ ስፋት ይሞላል'),[('Length units','የርዝመት ምድቦች'),('Perimeter','ዙሪያ'),('Area','ስፋት'),('Mass and capacity','መጠነ ቁስና ይዘት')]),
 ('length, perimeter and area of a rectangle, mass and capacity','ርዝመት፣ የሬክታንግል ዙሪያና ስፋት፣ መጠነ ቁስና ይዘት'))

U(8,('Data handling','መረጃ አያያዝ'),[
 D('bar',('Read bar graphs','ባር ግራፍ ማንበብ'),('Read the bar\'s top against the scale on the left. Compare bars to find most, least and differences.','የባሩን ጫፍ ከግራ ባለው መለኪያ ጋር አንብቡ። ብዙውን፣ ትንሹንና ልዩነቱን ለማግኘት ባሮችን አወዳድሩ።'),7)],
 [order(('Steps to make a bar graph','ባር ግራፍ የመሥራት ደረጃዎች'),('Collect data with a tally, then draw the graph carefully.','በታሊ መረጃ ሰብስቡ፤ ከዚያ ግራፉን በጥንቃቄ ሳሉ።'),('Tap the steps in order.','ደረጃዎቹን በቅደም ተከተል ንኩ።'),[(('Order the steps:','ደረጃዎቹን አስቀምጡ፦'),[('Ask a question','ጥያቄ ጠይቁ'),('Collect data with tally marks','በታሊ ምልክት መረጃ ሰብስቡ'),('Draw axes and choose a scale','ዘንጎችን ሳሉ፣ መለኪያ ምረጡ'),('Draw a bar for each group','ለእያንዳንዱ ቡድን ባር ሳሉ'),('Give the graph a title','ለግራፉ ርዕስ ስጡ')])]),
  quiz(('Collecting data','መረጃ መሰብሰብ'),('A tally groups marks in fives: 卌 = 5. A frequency table shows how many in each group.','ታሊ ምልክቶችን በአምስት ይቧድናል፦ 卌 = 5። የድግግሞሽ ሰንጠረዥ በእያንዳንዱ ቡድን ስንት እንዳሉ ያሳያል።'),[
   q('卌 卌 ||| means…','卌 卌 ||| ማለት…',['13','8','3']),q('To find the favourite fruit of your class you should…','የክፍላችሁን ተወዳጅ ፍራፍሬ ለማወቅ…',[('ask every student and tally','እያንዳንዱን ተማሪ ጠይቆ በታሊ መመዝገብ'),('guess','መገመት'),('ask only one friend','አንድ ጓደኛ ብቻ መጠየቅ')]),
   q('The scale on a bar graph goes up by 5. A bar halfway between 10 and 15 shows…','የባር ግራፉ መለኪያ በ5 ያድጋል። በ10ና በ15 መሃል ያለ ባር…',['12.5 → about 12 or 13','15','10'])])],
 [q('The tallest bar shows…','ረጅሙ ባር የሚያሳየው…',[('the biggest number','ትልቁን ቁጥር'),('the smallest number','ትንሹን ቁጥር'),('the title','ርዕሱን')]),q('卌 卌 卌 | = ?','卌 卌 卌 | = ?',['16','4','15']),
  q('Every bar graph needs…','እያንዳንዱ ባር ግራፍ… ያስፈልገዋል',[('a title, labels and a scale','ርዕስ፣ መለያዎችና መለኪያ'),('colours only','ቀለም ብቻ'),('no numbers','ቁጥር አያስፈልገውም')]),q('Teff 12 quintals, maize 7. How many more teff?','ጤፍ 12 ኩንታል፣ በቆሎ 7። ጤፍ በስንት ይበልጣል?',['5','19','7'])],
 notes(('Data are facts we collect; bar graphs show them so we can compare quickly.','መረጃ የምንሰበስባቸው እውነታዎች ናቸው፤ ባር ግራፎች በፍጥነት እንድናወዳድር ያሳዩናል።'),
  [('Read a bar against the scale.','ባርን ከመለኪያው ጋር አንብቡ።'),('Collect data by asking and tallying.','በመጠየቅና በታሊ መረጃ ሰብስቡ።'),('Make a frequency table, then a bar graph.','የድግግሞሽ ሰንጠረዥ፣ ከዚያ ባር ግራፍ ሥሩ።'),('Title, labels and scale make a graph clear.','ርዕስ፣ መለያና መለኪያ ግራፍን ግልጽ ያደርጋሉ።')],
  [('መረጃ','data','የተሰበሰበ እውነታ'),('ባር ግራፍ','bar graph','በባሮች የሚታይ መረጃ'),('መለኪያ','scale','በዘንጉ ያሉ ቁጥሮች')],('Tally in fives, graph with care.','በአምስት ቁጠሩ፣ በጥንቃቄ ሳሉ።'),
  [(('What does a bar graph need?','ባር ግራፍ ምን ያስፈልገዋል?'),('Title, labels, scale','ርዕስ፣ መለያ፣ መለኪያ')),(('卌 卌 || = ?','卌 卌 || = ?'),'12')],
  inn(('Class survey reporter','የክፍል ቅኝት ዘጋቢ'),('Companies pay for surveys to know what people want. Run a survey ("Which school club should we start?"), graph it and present the result to the director.','ድርጅቶች ሰዎች የሚፈልጉትን ለማወቅ ለቅኝት ይከፍላሉ። ቅኝት አካሂዱ ("የትኛውን ክበብ እንጀምር?")፣ በግራፍ አሳዩና ውጤቱን ለርዕሰ መምህሩ አቅርቡ።'),
   [('Write a question with 4 choices.','4 ምርጫዎች ያሉት ጥያቄ ጻፉ።'),('Ask 30 students and tally.','30 ተማሪዎችን ጠይቁና በታሊ መዝግቡ።'),('Draw a bar graph with a title and scale.','ርዕስና መለኪያ ያለው ባር ግራፍ ሳሉ።'),('Write 2 sentences about what you found.','ስላገኛችሁት 2 ዓረፍተ ነገሮች ጻፉ።')])),
 sm(('Collect data, then show it in a bar graph to compare','መረጃ ሰብስቡ፤ ለማወዳደር በባር ግራፍ አሳዩ'),[('Reading graphs','ግራፍ ማንበብ'),('Collecting data','መረጃ መሰብሰብ'),('Making graphs','ግራፍ መሥራት'),('Clear graphs','ግልጽ ግራፍ')]),
 ('reading bar graphs, collecting data and making bar graphs','ባር ግራፍ ማንበብ፣ መረጃ መሰብሰብና ባር ግራፍ መሥራት'))

U(9,('Time','ጊዜ'),[
 D('time',('Units of time','የጊዜ መስፈሪያ ምድቦች'),('1 minute = 60 seconds, 1 hour = 60 minutes, 1 day = 24 hours, 1 week = 7 days.','1 ደቂቃ = 60 ሰከንድ፣ 1 ሰዓት = 60 ደቂቃ፣ 1 ቀን = 24 ሰዓት፣ 1 ሳምንት = 7 ቀን።'),6),
 D('elapsed',('How long? When does it end?','ምን ያህል ጊዜ? መቼ ያልቃል?'),('Add hours to hours and minutes to minutes. 60 minutes make 1 more hour.','ሰዓትን ከሰዓት፣ ደቂቃን ከደቂቃ ደምሩ። 60 ደቂቃ 1 ሰዓት ይሆናል።'),5)],
 [quiz(('Compare times','ጊዜዎችን ማወዳደር'),('Change to the same unit before you compare.','ከማወዳደራችሁ በፊት ወደ አንድ ዓይነት ምድብ ቀይሩ።'),[
   q('Which is longer: 2 hours or 100 minutes?','የትኛው ይረዝማል፦ 2 ሰዓት ወይስ 100 ደቂቃ?',[('2 hours','2 ሰዓት'),('100 minutes','100 ደቂቃ'),('Equal','እኩል')]),
   q('Which is shorter: 3 minutes or 200 seconds?','የትኛው ያጥራል፦ 3 ደቂቃ ወይስ 200 ሰከንድ?',[('3 minutes','3 ደቂቃ'),('200 seconds','200 ሰከንድ'),('Equal','እኩል')]),
   q('A runner ran 1 min 20 s. In seconds?','አንድ ሯጭ 1 ደቂቃ ከ20 ሰከንድ ሮጠ። በሰከንድ?',['80 s','120 s','21 s']),
   q('Ethiopian time: 1:00 in the morning (ጠዋት) is international time…','የኢትዮጵያ ሰዓት፦ ጠዋት 1:00 በዓለም አቀፍ ሰዓት…',['7:00','1:00','6:00'])])],
 [q('3 hours = ? minutes','3 ሰዓት = ? ደቂቃ',['180','300','90']),q('2 days = ? hours','2 ቀን = ? ሰዓት',['48','24','60']),q('Class starts 8:30, lasts 45 min. Ends at…','ክፍል 8:30 ጀምሮ 45 ደቂቃ ይቆያል። ያልቀው…',['9:15','9:45','8:75']),q('Which is longer?','የትኛው ይረዝማል?',[('90 minutes','90 ደቂቃ'),('1 hour','1 ሰዓት'),('3,000 seconds','3,000 ሰከንድ')])],
 notes(('Time is measured in seconds, minutes, hours, days and weeks; we convert to compare and calculate.','ጊዜ በሰከንድ፣ በደቂቃ፣ በሰዓት፣ በቀንና በሳምንት ይለካል፤ ለማወዳደርና ለማስላት እንለውጣለን።'),
  [('60 s = 1 min, 60 min = 1 h.','60 ሰከንድ = 1 ደቂቃ፣ 60 ደቂቃ = 1 ሰዓት።'),('24 h = 1 day, 7 days = 1 week.','24 ሰዓት = 1 ቀን፣ 7 ቀን = 1 ሳምንት።'),('Add times: minutes with minutes, hours with hours.','ጊዜን ስትደምሩ ደቂቃን ከደቂቃ፣ ሰዓትን ከሰዓት።'),('Convert to one unit before comparing.','ከማወዳደር በፊት ወደ አንድ ምድብ ለውጡ።')],
  [('ሰከንድ','second','የደቂቃ 1/60'),('ደቂቃ','minute','60 ሰከንድ'),('ሰዓት','hour','60 ደቂቃ')],('Same unit first, then compare!','መጀመሪያ አንድ ዓይነት ምድብ፣ ከዚያ አወዳድሩ!'),
  [(('5 min = ? s','5 ደቂቃ = ? ሰከንድ'),'300'),(('Start 2:40, 50 min later?','2:40 ጀምሮ ከ50 ደቂቃ በኋላ?'),'3:30')],
  inn(('Daily timetable designer','የዕለት የጊዜ ሰሌዳ ንድፍ'),('Good managers plan time. Design a weekday timetable for yourself: school, study, chores, play and sleep, adding up to 24 hours.','ጥሩ ሥራ አስኪያጆች ጊዜያቸውን ያቅዳሉ። ለራሳችሁ የትምህርት ቀን የጊዜ ሰሌዳ ንደፉ፦ ትምህርት፣ ጥናት፣ የቤት ሥራ፣ ጨዋታና እንቅልፍ፤ ድምሩ 24 ሰዓት ይሁን።'),
   [('List your activities.','ተግባራችሁን ዘርዝሩ።'),('Give each a start and end time.','ለእያንዳንዱ መጀመሪያና መጨረሻ ሰዓት ስጡ።'),('Check the total is 24 hours.','ድምሩ 24 ሰዓት መሆኑን አረጋግጡ።'),('Follow it for a week and improve it.','ለአንድ ሳምንት ተከተሉትና አሻሽሉት።')])),
 sm(('Convert time units to compare and calculate','ለማወዳደርና ለማስላት የጊዜ ምድቦችን ለውጡ'),[('Seconds and minutes','ሰከንድና ደቂቃ'),('Hours, days, weeks','ሰዓት፣ ቀን፣ ሳምንት'),('Adding times','ጊዜ መደመር'),('Comparing','ማወዳደር')]),
 ('hours, minutes and seconds, calculations with and comparison of time units','ሰዓት፣ ደቂቃና ሰከንድ፣ በጊዜ ምድቦች ማስላትና ማወዳደር'))
dump('math')
