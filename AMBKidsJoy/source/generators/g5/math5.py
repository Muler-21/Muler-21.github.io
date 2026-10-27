import sys;sys.path.insert(0,'.')
from common5 import *
SN=E('Mathematics','ሒሳብ');B='(d=>K5.drills(d))'
def U(n,title,drills,extra,exam,nt,summ,foot):
    unit(f'g5-math-{n}','math',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 5 Mathematics student book (ANRS), Chapter {n}: {foot[0]}.',f'በ5ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ {n} ላይ የተመሰረተ፦ {foot[1]}።'),B,drills,extra,exam,nt,summ)

# 1 Fractions
U(1,('Fractions','ክፍልፋዮች'),[
 D('ftype',('Kinds of fractions','የክፍልፋይ ዓይነቶች'),('Proper: numerator smaller than denominator (3/5). Improper: numerator equal or bigger (7/4). Mixed number: a whole and a fraction (1 3/4).','መደበኛ፦ ጠሪው ከቆጣሪው ያንሳል (3/5)። ኢ-መደበኛ፦ ጠሪው ይበልጣል ወይም እኩል ነው (7/4)። ድብልቅ ቁጥር፦ ሙሉና ክፍልፋይ (1 3/4)።'),5),
 D('mixed',('Improper ↔ mixed','ኢ-መደበኛ ↔ ድብልቅ'),('Divide the numerator by the denominator: the quotient is the whole, the remainder stays over the denominator.','ጠሪውን በቆጣሪው አካፍሉ፦ ድርሻው ሙሉ ቁጥር ይሆናል፣ ቀሪው በቆጣሪው ላይ ይቀመጣል።'),5),
 D('fcmp',('Compare fractions','ክፍልፋዮችን ማወዳደር'),('Different denominators? Cross-multiply or change both to a common denominator, then compare the numerators.','ቆጣሪዎቹ ከተለያዩ በመስቀል አባዙ ወይም የጋራ ቆጣሪ ፈልጉ፤ ከዚያ ጠሪዎቹን አወዳድሩ።'),5),
 D('fadd',('Add and subtract fractions','ክፍልፋዮችን መደመርና መቀነስ'),('Find the least common denominator (LCD), rename both fractions, then add or subtract the numerators.','ትንሹን የጋራ ቆጣሪ ፈልጉ፣ ሁለቱንም ክፍልፋዮች ቀይሩ፣ ከዚያ ጠሪዎቹን ደምሩ ወይም ቀንሱ።'),5),
 D('fmul',('Multiply fractions','ክፍልፋዮችን ማባዛት'),('Multiply numerator by numerator and denominator by denominator. "3/4 of 20" means 3/4 × 20.','ጠሪን በጠሪ፣ ቆጣሪን በቆጣሪ አባዙ። "የ20 3/4" ማለት 3/4 × 20 ነው።'),5),
 D('fdiv',('Divide fractions','ክፍልፋዮችን ማካፈል'),('Keep the first fraction, flip the second (its reciprocal), and multiply.','የመጀመሪያውን አቆዩ፣ ሁለተኛውን ገልብጡ (ተገላቢጦሹን)፣ ከዚያ አባዙ።'),4)],
 [quiz(('Fractions in daily life','ክፍልፋይ በዕለት ኑሮ'),('Fractions share things fairly: injera, land, time and money.','ክፍልፋዮች ነገሮችን በፍትሐዊነት ለማከፋፈል ይረዳሉ፦ እንጀራ፣ መሬት፣ ጊዜና ገንዘብ።'),[
   q('Almaz ate 1/4 of an injera and Kebede ate 2/4. How much did they eat together?','አልማዝ የእንጀራ 1/4 ኬበደ ደግሞ 2/4 በሉ። አብረው ስንት በሉ?',['3/4','3/8','1/2']),
   q('A farmer planted teff on 2/3 of his land. What fraction is left?','አንድ ገበሬ በመሬቱ 2/3 ላይ ጤፍ ዘራ። የቀረው ስንት ነው?',['1/3','2/3','1/2']),
   q('3/4 of 40 students passed. How many passed?','ከ40 ተማሪዎች 3/4ቱ አለፉ። ስንት አለፉ?',['30','10','34']),
   q('How many 1/2-litre cups can be filled from 3 litres?','ከ3 ሊትር ስንት የ1/2 ሊትር ኩባያ ይሞላል?',['6','3','1 1/2'])]),
  sortm(('Proper, improper or mixed?','መደበኛ፣ ኢ-መደበኛ ወይስ ድብልቅ?'),('Look at the numerator and denominator.','ጠሪውንና ቆጣሪውን ተመልከቱ።'),[('Proper','መደበኛ'),('Improper','ኢ-መደበኛ'),('Mixed','ድብልቅ')],[('2/7',0),('5/9',0),('11/6',1),('8/8',1),('3 1/2',2),('1 5/8',2)])],
 [q('Which is an improper fraction?','ኢ-መደበኛ ክፍልፋይ የትኛው ነው?',['9/4','4/9','2 1/4']),q('2 3/5 = ?','2 3/5 = ?',['13/5','6/5','23/5']),q('1/2 + 1/3 = ?','1/2 + 1/3 = ?',['5/6','2/5','1/6']),
  q('2/3 × 3/4 = ?','2/3 × 3/4 = ?',['1/2','5/7','8/9']),q('1/2 ÷ 1/4 = ?','1/2 ÷ 1/4 = ?',['2','1/8','1/2']),q('Which is bigger: 3/5 or 2/3?','የትኛው ይበልጣል፦ 3/5 ወይስ 2/3?',['2/3','3/5',('They are equal','እኩል ናቸው')])],
 notes(('Fractions can be proper, improper or mixed, and we can compare, add, subtract, multiply and divide them.','ክፍልፋዮች መደበኛ፣ ኢ-መደበኛ ወይም ድብልቅ ሊሆኑ ይችላሉ፤ ማወዳደር፣ መደመር፣ መቀነስ፣ ማባዛትና ማካፈል እንችላለን።'),
  [('Proper < 1; improper ≥ 1; mixed = whole + fraction.','መደበኛ < 1፤ ኢ-መደበኛ ≥ 1፤ ድብልቅ = ሙሉ + ክፍልፋይ።'),('Compare and add with a common denominator.','በጋራ ቆጣሪ አወዳድሩና ደምሩ።'),('Multiply: top × top, bottom × bottom.','ማባዛት፦ ጠሪ × ጠሪ፣ ቆጣሪ × ቆጣሪ።'),('Divide: flip the second fraction and multiply.','ማካፈል፦ ሁለተኛውን ገልብጡና አባዙ።')],
  [('መደበኛ ክፍልፋይ','proper fraction','ጠሪው ከቆጣሪው ያነሰ'),('ኢ-መደበኛ ክፍልፋይ','improper fraction','ጠሪው ከቆጣሪው የበለጠ ወይም እኩል'),('ድብልቅ ቁጥር','mixed number','ሙሉ ቁጥርና ክፍልፋይ'),('ተገላቢጦሽ','reciprocal','የተገለበጠ ክፍልፋይ (3/4 → 4/3)')],('Same bottom to add; flip to divide!','ለመደመር ቆጣሪውን አመሳስሉ፤ ለማካፈል ገልብጡ!'),
  [('17/5 as a mixed number','3 2/5'),('3/4 − 1/2','1/4'),('2/5 of 25','10'),('3/4 ÷ 3','1/4')],
  (('Recipe scaler','የምግብ አዘገጃጀት መጠን አስተካካይ'),('Cooks change recipes for more or fewer people using fractions. Take a family recipe and scale it for half or double the people.','ምግብ አብሳዮች ለብዙ ወይም ለጥቂት ሰዎች ክፍልፋይ ተጠቅመው መጠን ይለውጣሉ። የቤተሰብ የምግብ አዘገጃጀት ወስዳችሁ ለግማሽ ወይም ለእጥፍ ሰዎች አስተካክሉ።'),
   [('Write a recipe with fractions (e.g. 3/4 cup of flour).','ክፍልፋይ ያለበት የምግብ አዘገጃጀት ጻፉ (ለምሳሌ 3/4 ኩባያ ዱቄት)።'),('Multiply each amount by 2 for double.','ለእጥፍ እያንዳንዱን መጠን በ2 አባዙ።'),('Multiply by 1/2 for half.','ለግማሽ በ1/2 አባዙ።'),('Make a neat recipe card to share.','ለማጋራት የሚያምር የምግብ ካርድ ሥሩ።')])),
 sm(('Name, compare and calculate with fractions','ክፍልፋዮችን መሰየም፣ ማወዳደርና ማስላት'),[('Kinds of fractions','የክፍልፋይ ዓይነቶች'),('Comparing and adding','ማወዳደርና መደመር'),('Multiplying','ማባዛት'),('Dividing','ማካፈል')]),
 ('kinds of fractions, comparing fractions and the four operations on fractions','የክፍልፋይ ዓይነቶች፣ ክፍልፋዮችን ማወዳደርና አራቱ መሠረታዊ ስሌቶች'))

# 2 Decimals
U(2,('Decimal numbers','አስርዮሽ ቁጥሮች'),[
 D('decpv',('Place value to thousandths','የቁጥር ቤት ዋጋ እስከ ሺኛ'),('After the point: tenths (0.1), hundredths (0.01), thousandths (0.001).','ከነጥቡ በኋላ፦ አስረኛ (0.1)፣ መቶኛ (0.01)፣ ሺኛ (0.001)።'),5),
 D('nline',('Decimals on a number line','አስርዮሽ በቁጥር መስመር'),('Count the small steps between whole numbers to find each step.','የእያንዳንዱን ደረጃ መጠን ለማወቅ በሙሉ ቁጥሮች መካከል ያሉትን ትናንሽ ደረጃዎች ቁጠሩ።'),4),
 D('dcmp',('Compare decimals','አስርዮሾችን ማወዳደር'),('Compare the whole part first, then tenths, then hundredths. 0.5 = 0.50.','መጀመሪያ ሙሉውን፣ ከዚያ አስረኛውን፣ ከዚያ መቶኛውን አወዳድሩ። 0.5 = 0.50።'),5),
 D('dadd',('Add and subtract decimals','አስርዮሽ መደመርና መቀነስ'),('Line up the decimal points. Fill empty places with zeros.','የአስርዮሽ ነጥቦቹን አሰልፉ። ባዶ ቤቶችን በዜሮ ሙሉ።'),5),
 D('dmul',('Multiply decimals','አስርዮሽ ማባዛት'),('Multiply as whole numbers, then count all decimal places in both numbers.','እንደ ሙሉ ቁጥር አባዙ፤ ከዚያ በሁለቱም ቁጥሮች ያሉትን የአስርዮሽ ቤቶች ቁጠሩ።'),5),
 D('ddiv',('Divide decimals','አስርዮሽ ማካፈል'),('Divide as usual and put the point in the answer above the point in the number.','እንደተለመደው አካፍሉ፤ በመልሱ ውስጥ ነጥቡን ከቁጥሩ ነጥብ በላይ አስቀምጡ።'),4)],
 [quiz(('Money and measures','ገንዘብና ልኬት'),('Birr and santim, metres and centimetres use decimals.','ብርና ሳንቲም፣ ሜትርና ሴንቲሜትር አስርዮሽ ይጠቀማሉ።'),[
   q('A pen costs 12.50 birr and a book 35.75 birr. Total?','እስክሪብቶ 12.50 ብር፣ መጽሐፍ 35.75 ብር ነው። ጠቅላላ?',['48.25 birr','47.25 birr','48.75 birr']),
   q('You pay 50 birr for an item of 37.40 birr. Change?','ለ37.40 ብር ዕቃ 50 ብር ከፈላችሁ። መልሱ?',['12.60 birr','13.60 birr','12.40 birr']),
   q('1.25 m = ? cm','1.25 ሜ = ? ሳ.ሜ',['125','12.5','1,250']),
   q('One kg of sugar costs 85.5 birr. 4 kg cost?','አንድ ኪ.ግ ስኳር 85.5 ብር ነው። 4 ኪ.ግ?',['342 birr','340.5 birr','89.5 birr'])])],
 [q('The digit 7 in 3.072 is in the… place','በ3.072 ውስጥ 7 ያለው በ… ቤት ነው',[('hundredths','መቶኛ'),('tenths','አስረኛ'),('thousandths','ሺኛ')]),q('Which is greatest?','ከሁሉ የሚበልጠው?',['0.8','0.75','0.709']),q('4.6 + 2.75 = ?','4.6 + 2.75 = ?',['7.35','6.81','7.25']),
  q('0.3 × 0.4 = ?','0.3 × 0.4 = ?',['0.12','1.2','0.7']),q('6.4 ÷ 8 = ?','6.4 ÷ 8 = ?',['0.8','8','0.08']),q('2.5 × 100 = ?','2.5 × 100 = ?',['250','25','2,500'])],
 notes(('Decimals are fractions with 10, 100 or 1,000 parts; we line up the points to add or subtract.','አስርዮሾች 10፣ 100 ወይም 1,000 ክፍሎች ያሏቸው ክፍልፋዮች ናቸው፤ ለመደመርና ለመቀነስ ነጥቦቹን እናሰልፋለን።'),
  [('0.1 = 1/10, 0.01 = 1/100, 0.001 = 1/1,000.','0.1 = 1/10፣ 0.01 = 1/100፣ 0.001 = 1/1,000።'),('Compare place by place from the left.','ከግራ ጀምራችሁ ቤት በቤት አወዳድሩ።'),('Add and subtract with points lined up.','ነጥቦቹን አሰልፋችሁ ደምሩና ቀንሱ።'),('× 10 moves the point right; ÷ 10 moves it left.','× 10 ነጥቡን ወደ ቀኝ፣ ÷ 10 ወደ ግራ ያንቀሳቅሳል።')],
  [('አስርዮሽ','decimal','በነጥብ የሚጻፍ ቁጥር'),('ሺኛ','thousandth','ከ1,000 ክፍሎች 1'),('የአስርዮሽ ነጥብ','decimal point','ሙሉውን ከክፍልፋዩ የሚለይ ነጥብ')],('Line up the points!','ነጥቦቹን አሰልፉ!'),
  [('9.4 − 3.65','5.75'),('1.2 × 0.5','0.6'),('Write 3/1000 as a decimal','0.003')],
  (('Shop price tags','የሱቅ የዋጋ መለያዎች'),('Shopkeepers add, subtract and multiply decimals every day. Run a pretend shop with price tags in birr and santim.','ባለሱቆች በየቀኑ አስርዮሽ ይደምራሉ፣ ይቀንሳሉ፣ ያባዛሉ። በብርና በሳንቲም ዋጋ የተለጠፈበት የሙከራ ሱቅ አካሂዱ።'),
   [('Make 6 price tags, e.g. 7.25 birr.','6 የዋጋ መለያዎችን ሥሩ፤ ለምሳሌ 7.25 ብር።'),('A "customer" buys 3 items; add the total.','"ገዢ" 3 ዕቃዎችን ይገዛል፤ ጠቅላላውን ደምሩ።'),('Give change from 50 or 100 birr.','ከ50 ወይም 100 ብር መልስ ስጡ።'),('Offer "buy 3, pay for 2.5" deals and check them.','"3 ግዙ፣ የ2.5 ክፈሉ" ቅናሽ አቅርቡና አረጋግጡ።')])),
 sm(('Decimals: line up the points','አስርዮሽ፦ ነጥቦቹን አሰልፉ'),[('Place value','የቁጥር ቤት ዋጋ'),('Comparing','ማወዳደር'),('Adding and subtracting','መደመርና መቀነስ'),('× and ÷ by 10s','በ10 ብዜቶች ማባዛትና ማካፈል')]),
 ('decimal numbers to thousandths: place value, number line, comparing and the four operations','እስከ ሺኛ ያሉ አስርዮሽ ቁጥሮች፦ የቁጥር ቤት ዋጋ፣ የቁጥር መስመር፣ ማወዳደርና አራቱ ስሌቶች'))

# 3 Percent
U(3,('Percentage','ፐርሰንት'),[
 D('pct',('Fractions, decimals and percent','ክፍልፋይ፣ አስርዮሽና ፐርሰንት'),('Percent means "out of 100". 1/4 = 25/100 = 0.25 = 25%.','ፐርሰንት ማለት "ከ100" ማለት ነው። 1/4 = 25/100 = 0.25 = 25%።'),6),
 D('pctof',('Percent of a number','የቁጥር ፐርሰንት'),('To find 20% of 150: 20/100 × 150 = 30.','የ150 20%ን ለማግኘት፦ 20/100 × 150 = 30።'),5),
 D('pctis',('What percent?','ስንት ፐርሰንት?'),('Compare: part ÷ whole × 100%. 6 out of 24 = 6/24 × 100% = 25%.','አነጻጽሩ፦ ክፍል ÷ ሙሉ × 100%። ከ24 6 = 6/24 × 100% = 25%።'),5)],
 [quiz(('Percent around us','ፐርሰንት በዙሪያችን'),('Exam results, discounts, savings and votes are often given in percent.','የፈተና ውጤት፣ ቅናሽ፣ ቁጠባና ድምፅ ብዙ ጊዜ በፐርሰንት ይገለጻሉ።'),[
   q('Selam scored 45 out of 50. Her percentage is…','ሰላም ከ50 45 አመጣች። ፐርሰንቷ…',['90%','45%','95%']),
   q('A shirt costs 400 birr with 25% off. You save…','ሸሚዝ 400 ብር ሲሆን 25% ቅናሽ አለው። የምትቆጥቡት…',['100 birr','25 birr','300 birr']),
   q('60% of a class are girls. What percent are boys?','የክፍሉ 60% ሴቶች ናቸው። ወንዶች ስንት ፐርሰንት ናቸው?',['40%','60%','100%']),
   q('Which is the same as 50%?','ከ50% ጋር እኩል የሆነው?',['1/2','1/5','5/100'])]),
  match(('Equal values','እኩል ዋጋዎች'),('Match each fraction with its percent.','እያንዳንዱን ክፍልፋይ ከፐርሰንቱ ጋር አዛምዱ።'),[[('1/2','50%'),('1/4','25%'),('3/4','75%')],[('1/10','10%'),('1/5','20%'),('2/5','40%')]])],
 [q('0.07 = ?','0.07 = ?',['7%','70%','0.7%']),q('35% as a decimal is…','35% በአስርዮሽ…',['0.35','3.5','35']),q('10% of 250 = ?','የ250 10% = ?',['25','2.5','250']),
  q('9 is what percent of 36?','9 የ36 ስንት ፐርሰንት ነው?',['25%','9%','4%']),q('3/5 = ?','3/5 = ?',['60%','35%','53%'])],
 notes(('Percent means out of 100; we can change fractions and decimals into percent and find percent of amounts.','ፐርሰንት ማለት ከ100 ማለት ነው፤ ክፍልፋዮችንና አስርዮሾችን ወደ ፐርሰንት መቀየርና የመጠኖችን ፐርሰንት ማግኘት እንችላለን።'),
  [('% = out of 100; 100% is the whole.','% = ከ100፤ 100% ሙሉው ነው።'),('Fraction → percent: make the denominator 100.','ክፍልፋይ → ፐርሰንት፦ ቆጣሪውን 100 አድርጉ።'),('Percent of a number: p/100 × number.','የቁጥር ፐርሰንት፦ p/100 × ቁጥሩ።'),('What percent: part ÷ whole × 100%.','ስንት ፐርሰንት፦ ክፍል ÷ ሙሉ × 100%።')],
  [('ፐርሰንት','percent','ከመቶ'),('ቅናሽ','discount','ከዋጋ የሚቀነስ'),('ሙሉ','whole','100%')],('Percent = per hundred.','ፐርሰንት = በመቶ።'),
  [('Write 0.4 as a percent','40%'),('Find 15% of 200','30'),('12 is what % of 48?','25%')],
  (('Savings goal chart','የቁጠባ ግብ ሰንጠረዥ'),('Banks and savings groups (እቁብ) track progress in percent. Set a small savings goal and colour a 100-square chart as you save.','ባንኮችና የቁጠባ ቡድኖች (እቁብ) እድገትን በፐርሰንት ይከታተላሉ። ትንሽ የቁጠባ ግብ አስቀምጡና ስትቆጥቡ 100 ካሬዎችን ቀልሙ።'),
   [('Choose a goal, e.g. 200 birr for books.','ግብ ምረጡ፤ ለምሳሌ ለመጻሕፍት 200 ብር።'),('Draw a 10 × 10 grid: each square = 1%.','10 × 10 ሰንጠረዥ ሳሉ፤ እያንዳንዱ ካሬ = 1%።'),('Each time you save, colour the right percent.','በቆጠባችሁ ቁጥር ትክክለኛውን ፐርሰንት ቀልሙ።'),('Celebrate at 50% and at 100%!','በ50% እና በ100% አክብሩ!')])),
 sm(('Percent means out of 100','ፐርሰንት ማለት ከ100 ማለት ነው'),[('Meaning of %','የ% ትርጉም'),('Fraction to %','ክፍልፋይ ወደ %'),('Percent of a number','የቁጥር ፐርሰንት'),('What percent?','ስንት ፐርሰንት?')]),
 ('the meaning of percent, writing fractions as percent and comparing quantities in percent','የፐርሰንት ፅንሰ ሀሳብ፣ ክፍልፋዮችን በፐርሰንት መግለጽና መጠኖችን በፐርሰንት ማነጻጸር'))

# 4 Working with variables
U(4,('Working with variables','በተለዋዋጮች መሥራት'),[
 D('pattern',('Growing patterns','አዳጊ ፓተርኖች'),('Find the rule: what is added each time? Term = (step × n) + start value.','ሕጉን ፈልጉ፦ በየጊዜው ምን ይጨመራል? ቃል = (ልዩነት × n) + መነሻ።'),5),
 D('rule',('Write the rule with a variable','ሕጉን በተለዋዋጭ ጻፉ'),('A variable (like n or x) stands for any number in the pattern.','ተለዋዋጭ (እንደ n ወይም x) በፓተርኑ ውስጥ ማንኛውንም ቁጥር ይወክላል።'),4),
 D('expr',('Evaluate expressions','አልጀብራዊ መግለጫዎችን ማስላት'),('Replace the variable with its value, then calculate: multiply first, then add or subtract.','ተለዋዋጩን በዋጋው ተኩ፣ ከዚያ አስሉ፦ መጀመሪያ ማባዛት፣ ከዚያ መደመር ወይም መቀነስ።'),5),
 D('simp',('Simplify expressions','መግለጫዎችን ማቃለል'),('Like terms have the same variable: 3x + 2x = 5x. Numbers stay separate.','ተመሳሳይ ቁሞች አንድ ዓይነት ተለዋዋጭ አላቸው፦ 3x + 2x = 5x። ቁጥሮች ለብቻቸው ይቀራሉ።'),5),
 D('solve',('Solve equations','እኩልነቶችን መፍታት'),('Do the opposite operation on both sides: x + 5 = 12 → x = 12 − 5 = 7.','በሁለቱም በኩል ተቃራኒውን ስሌት አድርጉ፦ x + 5 = 12 → x = 12 − 5 = 7።'),6)],
 [quiz(('Words into algebra','ቃላትን ወደ አልጀብራ'),('Turn words into expressions: "5 more than a number" = n + 5.','ቃላትን ወደ መግለጫ ቀይሩ፦ "ከአንድ ቁጥር 5 የበለጠ" = n + 5።'),[
   q('"Five times a number plus twenty" is…','"የአንድ ቁጥር አምስት እጥፍ ሲደመር ሃያ"…',['5n + 20','5 + 20n','20n − 5']),
   q('"A number decreased by 8" is…','"አንድ ቁጥር ሲቀነስ 8"…',['n − 8','8 − n','8n']),
   q('Dawit read 40, 37, 34 pages… How many on day 4?','ዳዊት 40፣ 37፣ 34 ገጾች አነበበ… በ4ኛው ቀን ስንት?',['31','33','30']),
   q('A pen costs x birr. 6 pens cost…','አንድ እስክሪብቶ x ብር ነው። 6 እስክሪብቶዎች…',['6x birr','x + 6 birr','6 birr']),
   q('In 7y, the number 7 is called the…','በ7y ውስጥ 7…ይባላል',[('coefficient','ተባባሪ (ኮፊሸንት)'),('variable','ተለዋዋጭ'),('term','ቁም')])]),
  sortm(('Like terms','ተመሳሳይ ቁሞች'),('Put terms with x together and terms with y together.','x ያላቸውን በአንድ፣ y ያላቸውን በአንድ ላይ አስቀምጡ።'),[('x terms','x ቁሞች'),('y terms','y ቁሞች'),('Numbers','ቁጥሮች')],[('4x',0),('x',0),('9x',0),('2y',1),('7y',1),('15',2),('3',2)])],
 [q('If n = 4, 3n + 2 = ?','n = 4 ቢሆን 3n + 2 = ?',['14','9','32']),q('5a + 3a − 2a = ?','5a + 3a − 2a = ?',['6a','10a','6']),q('Solve: x − 9 = 15','ፍቱ፦ x − 9 = 15',['24','6','135']),
  q('Solve: 4y = 36','ፍቱ፦ 4y = 36',['9','32','40']),q('Pattern 3, 7, 11, 15 … rule?','ፓተርን 3፣ 7፣ 11፣ 15 … ሕጉ?',['4n − 1','3n + 4','n + 4'])],
 notes(('A variable is a letter that stands for a number; we use it to write rules, expressions and equations.','ተለዋዋጭ ቁጥርን የሚወክል ፊደል ነው፤ ሕጎችን፣ መግለጫዎችንና እኩልነቶችን ለመጻፍ እንጠቀምበታለን።'),
  [('Patterns: find what changes each step and write it with n.','ፓተርን፦ በየደረጃው የሚቀየረውን ፈልጉና በn ጻፉ።'),('Expression: numbers, variables and operations (3x + 5).','መግለጫ፦ ቁጥሮች፣ ተለዋዋጮችና ስሌቶች (3x + 5)።'),('Simplify by combining like terms.','ተመሳሳይ ቁሞችን በማዋሃድ አቃልሉ።'),('Solve by undoing: + ↔ −, × ↔ ÷.','በተቃራኒ ስሌት ፍቱ፦ + ↔ −፣ × ↔ ÷።')],
  [('ተለዋዋጭ','variable','ቁጥርን የሚወክል ፊደል'),('አልጀብራዊ መግለጫ','algebraic expression','ቁጥር፣ ተለዋዋጭና የስሌት ምልክት የያዘ'),('ቁም','term','በ+ ወይም − ያልተለየ ክፍል'),('እኩልነት','equation','በ= ምልክት የተያያዘ ዓረፍተ ነገር')],('What you do to one side, do to the other!','በአንዱ በኩል የምታደርጉትን በሌላውም አድርጉ!'),
  [('Simplify 8m − 3m + 4','5m + 4'),('Solve 2x + 3 = 15','x = 6'),('If a = 5, find a × a − 5','20')],
  (('Mystery number game','የሚስጥር ቁጥር ጨዋታ'),('Programmers and puzzle makers use variables. Invent "think of a number" puzzles and solve them with equations.','ፕሮግራመሮችና የእንቆቅልሽ ሠሪዎች ተለዋዋጭ ይጠቀማሉ። "አንድ ቁጥር አስቡ" እንቆቅልሾችን ፍጠሩና በእኩልነት ፍቱ።'),
   [('Make a puzzle: "I think of n, × 3, + 4, I get 19."','እንቆቅልሽ ሥሩ፦ "n አስቤ በ3 አባዝቼ 4 ደመርኩ፤ 19 አገኘሁ።"'),('Write it as an equation: 3n + 4 = 19.','በእኩልነት ጻፉት፦ 3n + 4 = 19።'),('Solve it step by step.','ደረጃ በደረጃ ፍቱት።'),('Swap puzzles with a friend.','ከጓደኛችሁ ጋር እንቆቅልሾችን ተለዋወጡ።')])),
 sm(('Letters can stand for numbers','ፊደላት ቁጥርን ሊወክሉ ይችላሉ'),[('Patterns and rules','ፓተርንና ሕግ'),('Expressions','መግለጫዎች'),('Simplifying','ማቃለል'),('Solving equations','እኩልነት መፍታት')]),
 ('variables in growing patterns, algebraic expressions and terms, simplifying and solving equations','በአዳጊ ፓተርኖች ተለዋዋጮች፣ አልጀብራዊ መግለጫዎችና ቁሞች፣ ማቃለልና እኩልነቶችን መፍታት'))

# 5 Data handling
U(5,('Data handling','መረጃ አያያዝ'),[
 D('bar',('Read bar graphs','ባር ግራፍ ማንበብ'),('Read the scale on the side carefully. Each bar shows the amount for one group.','በጎን ያለውን ሚዛን በጥንቃቄ አንብቡ። እያንዳንዱ ባር የአንድን ቡድን መጠን ያሳያል።'),5),
 D('dotplot',('Dot plots','ነጥብ ግራፍ'),('Each dot is one piece of data. The tallest column is the most common value.','እያንዳንዱ ነጥብ አንድ መረጃ ነው። ረጅሙ ዓምድ በብዛት የተደጋገመው ዋጋ ነው።'),4),
 D('mean',('Find the mean','አማካይ መፈለግ'),('Mean = sum of all values ÷ number of values.','አማካይ = የሁሉም ዋጋዎች ድምር ÷ የዋጋዎቹ ብዛት።'),5),
 D('prob',('Chance and simple experiments','ዕድልና ቀላል ሙከራዎች'),('Probability = favourable outcomes ÷ all possible outcomes. It is between 0 (impossible) and 1 (certain).','ዕድል = ተፈላጊ ውጤቶች ÷ ሁሉም ውጤቶች። ከ0 (የማይቻል) እስከ 1 (እርግጠኛ) ነው።'),5)],
 [quiz(('Collecting data','መረጃ መሰብሰብ'),('We collect data by asking (survey), counting or measuring, and record it in a tally table.','መረጃን በመጠየቅ (ቅኝት)፣ በመቁጠር ወይም በመለካት እንሰበስባለን፤ በምልክት ሰንጠረዥ እንመዘግባለን።'),[
   q('The best way to find the favourite fruit of your class is…','የክፍላችሁን ተወዳጅ ፍራፍሬ ለማወቅ ምርጡ መንገድ…',[('ask every student (survey)','ሁሉንም ተማሪ መጠየቅ (ቅኝት)'),('guess','መገመት'),('ask one friend','አንድ ጓደኛ መጠየቅ')]),
   q('卌 卌 || in tally marks means…','卌 卌 || በምልክት…',['12','7','22']),
   q('Rainfall of 12 months is best shown with a…','የ12 ወራት የዝናብ መጠን በተሻለ የሚታየው በ…',[('bar graph','ባር ግራፍ'),('single number','አንድ ቁጥር'),('picture of a cloud','የደመና ስዕል')]),
   q('A coin is tossed. Possible outcomes are…','ሳንቲም ሲወረወር ሊሆኑ የሚችሉ ውጤቶች…',[('head or tail','ጭንቅላት ወይም ጅራት'),('1 to 6','ከ1 እስከ 6'),('only head','ጭንቅላት ብቻ')])])],
 [q('Mean of 4, 6, 8 = ?','የ4፣ 6፣ 8 አማካይ = ?',['6','18','8']),q('A bag has 3 red and 1 blue ball. P(blue) = ?','ከረጢቱ 3 ቀይና 1 ሰማያዊ ኳስ አለው። ሰማያዊ የመውጣት ዕድል = ?',['1/4','1/3','3/4']),
  q('Rolling a 7 on a normal die is…','በተለመደ ዳይስ 7 ማግኘት…',[('impossible','የማይቻል'),('certain','እርግጠኛ'),('likely','ሊሆን የሚችል')]),q('The total of scores 5, 7, 9, 3 is…','የ5፣ 7፣ 9፣ 3 ድምር…',['24','6','21'])],
 notes(('We collect data, show it in bar graphs and dot plots, find the mean, and predict chances.','መረጃ እንሰበስባለን፣ በባርና በነጥብ ግራፍ እናሳያለን፣ አማካይ እናገኛለን፣ ዕድልን እንተነብያለን።'),
  [('Collect by survey, counting or measuring; record with tallies.','በቅኝት፣ በመቁጠር ወይም በመለካት ሰብስቡ፤ በምልክት መዝግቡ።'),('Bar graph and dot plot show data at a glance.','ባር ግራፍና ነጥብ ግራፍ መረጃን በአንድ እይታ ያሳያሉ።'),('Mean = total ÷ how many.','አማካይ = ድምር ÷ ብዛት።'),('Probability: 0 impossible … 1 certain.','ዕድል፦ 0 የማይቻል … 1 እርግጠኛ።')],
  [('አማካይ','mean (average)','ድምር ÷ ብዛት'),('ሙከራ','experiment','ውጤትን ለማየት የሚደረግ ተግባር'),('መተንበይ','predict','አስቀድሞ መገመት')],('Data tells a story; graphs make it easy to read.','መረጃ ታሪክ ይናገራል፤ ግራፍ በቀላሉ እንዲነበብ ያደርገዋል።'),
  [('Mean of 10, 20, 30, 40','25'),('P(even number on a die)','3/6 = 1/2')],
  (('Class data reporter','የክፍል መረጃ ዘጋቢ'),('Data analysts help businesses decide. Run a survey in your class and present the result like a news report.','የመረጃ ተንታኞች ድርጅቶች እንዲወስኑ ይረዳሉ። በክፍላችሁ ቅኝት አድርጉና ውጤቱን እንደ ዜና አቅርቡ።'),
   [('Pick a question: "How do you come to school?"','ጥያቄ ምረጡ፦ "ወደ ትምህርት ቤት እንዴት ትመጣላችሁ?"'),('Tally every answer.','እያንዳንዱን መልስ በምልክት መዝግቡ።'),('Draw a bar graph and find the most common answer.','ባር ግራፍ ሳሉና በብዛት የተሰጠውን መልስ ፈልጉ።'),('Suggest one improvement based on the data.','በመረጃው መሠረት አንድ ማሻሻያ ጠቁሙ።')])),
 sm(('Collect, show, average and predict','መሰብሰብ፣ ማሳየት፣ አማካይና መተንበይ'),[('Collecting data','መረጃ መሰብሰብ'),('Graphs','ግራፎች'),('Mean','አማካይ'),('Probability','ዕድል')]),
 ('collecting data, bar graphs, dot plots, the mean and simple probability experiments','መረጃ መሰብሰብ፣ ባር ግራፍ፣ ነጥብ ግራፍ፣ አማካይና ቀላል የዕድል ሙከራዎች'))

# 6 Lines, angles and measurement
U(6,('Lines, angles and their measurement','መስመሮች፣ አንግሎችና ልኬታቸው'),[
 D('atype',('Name the angle','አንግሉን ሰይሙ'),('Acute < 90°, right = 90°, obtuse between 90° and 180°, straight = 180°, reflex > 180°.','ሹል < 90°፣ ማዕዘናዊ = 90°፣ ዝርጥ ከ90° እስከ 180°፣ ዝርግ = 180°፣ ገልባጭ > 180°።'),6)],
 [quiz(('Lines, rays and segments','መስመር፣ ጨረርና ውስን መስመር'),('A line segment has two endpoints; a ray has one endpoint; a line goes on forever both ways.','ውስን መስመር ሁለት ጫፎች አሉት፤ ጨረር አንድ መነሻ አለው፤ መስመር በሁለቱም በኩል ያለገደብ ይቀጥላል።'),[
   q('A straight line with a start point and an end point is a…','መነሻና መድረሻ ነጥብ ያለው ቀጥታ መስመር…',[('line segment','ውስን ቀጥታ መስመር'),('ray','ጨረር'),('line','መስመር')]),
   q('A straight line with a start point but no end point is a…','መነሻ ነጥብ እንጂ መድረሻ የሌለው ቀጥታ መስመር…',[('ray','ጨረር'),('line segment','ውስን መስመር'),('angle','አንግል')]),
   q('Two rays with a common starting point form an…','የጋራ መነሻ ያላቸው ሁለት ጨረሮች…ይመሰርታሉ',[('angle','አንግል'),('circle','ክብ'),('square','ካሬ')]),
   q('Angles are measured in…','አንግሎች የሚለኩት በ…',[('degrees (°)','ዲግሪ (°)'),('centimetres','ሳንቲሜትር'),('litres','ሊትር')]),
   q('The tool used to measure angles is a…','አንግል ለመለካት የሚያገለግለው መሣሪያ…',[('protractor','ፕሮትራክተር (የአንግል መለኪያ)'),('ruler only','ማስመሪያ ብቻ'),('compass rose','የአቅጣጫ ጠቋሚ')])]),
  quiz(('Symmetry','ምጥጥን'),('A line of symmetry folds a shape into two matching halves.','የምጥጥን መስመር ምስልን ወደ ሁለት ተመሳሳይ ግማሾች ያጥፈዋል።'),[
   q('How many lines of symmetry does a square have?','ካሬ ስንት የምጥጥን መስመሮች አሉት?',['4','2','1']),
   q('How many lines of symmetry does a rectangle (not a square) have?','ሬክታንግል (ካሬ ያልሆነ) ስንት የምጥጥን መስመሮች አሉት?',['2','4','0']),
   q('An equilateral triangle has … lines of symmetry.','ባለ እኩል ጎን ትሪያንግል … የምጥጥን መስመሮች አሉት።',['3','1','6']),
   q('Which letter has a vertical line of symmetry?','ቀጥ ያለ የምጥጥን መስመር ያለው ፊደል?',['A','F','G']),
   q('Shapes that fold into two equal halves are called…','ሲታጠፉ ወደ ሁለት እኩል የሚከፈሉ ምስሎች…ይባላሉ',[('symmetrical','ምጥጥናዊ'),('acute','ሹል'),('parallel','ትይዩ')])]),
  sortm(('Sort the angles','አንግሎቹን መድቡ'),('Compare each angle with 90° and 180°.','እያንዳንዱን አንግል ከ90° እና ከ180° ጋር አነጻጽሩ።'),[('Acute','ሹል'),('Obtuse','ዝርጥ'),('Reflex','ገልባጭ')],[('35°',0),('69°',0),('105°',1),('167°',1),('249°',2),('300°',2)])],
 [q('An angle of 90° is…','90° የሆነ አንግል…',[('right','ማዕዘናዊ'),('acute','ሹል'),('obtuse','ዝርጥ')]),q('An angle of 180° is…','180° የሆነ አንግል…',[('straight','ዝርግ'),('reflex','ገልባጭ'),('right','ማዕዘናዊ')]),
  q('An angle of 249° is…','249° የሆነ አንግል…',[('reflex','ገልባጭ'),('obtuse','ዝርጥ'),('straight','ዝርግ')]),q('A circle has … lines of symmetry.','ክብ … የምጥጥን መስመሮች አሉት።',[('many (infinite)','ስፍር ቁጥር የሌላቸው'),('2','2'),('0','0')]),
  q('A ray has … endpoint(s).','ጨረር … ጫፍ አለው።',['1','2','0'])],
 notes(('Lines, rays and segments make angles; we measure angles in degrees and use symmetry to draw shapes.','መስመሮች፣ ጨረሮችና ውስን መስመሮች አንግል ይፈጥራሉ፤ አንግልን በዲግሪ እንለካለን፤ ምስሎችን ለመሳል ምጥጥን እንጠቀማለን።'),
  [('Segment: 2 endpoints; ray: 1; line: none.','ውስን መስመር፦ 2 ጫፎች፤ ጨረር፦ 1፤ መስመር፦ የለውም።'),('Angles are measured in degrees with a protractor.','አንግሎች በፕሮትራክተር በዲግሪ ይለካሉ።'),('Acute, right, obtuse, straight, reflex.','ሹል፣ ማዕዘናዊ፣ ዝርጥ፣ ዝርግ፣ ገልባጭ።'),('A line of symmetry makes two matching halves.','የምጥጥን መስመር ሁለት ተመሳሳይ ግማሾችን ይፈጥራል።')],
  [('ጨረር','ray','አንድ መነሻ ያለው መስመር'),('ዲግሪ','degree','የአንግል መለኪያ አሃድ'),('ምጥጥን','symmetry','በእኩል የሚታጠፍ ቅርጽ'),('ፕሮትራክተር','protractor','አንግል መለኪያ')],('Right angle = square corner = 90°.','ማዕዘናዊ አንግል = የካሬ ጥግ = 90°።'),
  [('Name an angle of 135°','ዝርጥ (obtuse)'),('Lines of symmetry of a regular hexagon','6')],
  (('Symmetry pattern designer','የምጥጥን ንድፍ አውጪ'),('Textile and tile designers use symmetry. Design a symmetrical pattern for a traditional dress (ጥበብ) border.','የጨርቅና የወለል ንጣፍ ዲዛይነሮች ምጥጥን ይጠቀማሉ። ለባህላዊ ልብስ (ጥበብ) ጥለት ምጥጥናዊ ንድፍ አውጡ።'),
   [('Fold a paper in half.','ወረቀት በግማሽ አጥፉ።'),('Draw half a pattern next to the fold.','ከእጥፋቱ አጠገብ የንድፉን ግማሽ ሳሉ።'),('Cut or trace to make the other half.','ሌላውን ግማሽ ለመሥራት ቁረጡ ወይም ቅዱ።'),('Colour it and mark the line of symmetry.','ቀልሙትና የምጥጥን መስመሩን ምልክት አድርጉ።')])),
 sm(('Lines make angles; angles are measured in degrees','መስመሮች አንግል ይፈጥራሉ፤ አንግል በዲግሪ ይለካል'),[('Segment, ray, line','ውስን መስመር፣ ጨረር፣ መስመር'),('Measuring in degrees','በዲግሪ መለካት'),('Kinds of angles','የአንግል ዓይነቶች'),('Symmetry','ምጥጥን')]),
 ('line segments, rays, angles and their measurement, and lines of symmetry','ውስን ቀጥታ መስመሮች፣ ጨረሮች፣ አንግሎችና ልኬታቸው እንዲሁም የምጥጥን መስመሮች'))

# 7 Solid figures
U(7,('Common solid figures','የተለመዱ ጥጥር ምስሎች'),[
 D('solid',('Faces, edges and vertices','ገጾች፣ ጠርዞችና መለያያዎች'),('Face = flat surface; edge = where two faces meet; vertex = corner point where edges meet.','ገጽ = ዝርግ ገጽታ፤ ጠርዝ = ሁለት ገጾች የሚገናኙበት፤ መለያያ (ጫፍ) = ጠርዞች የሚገናኙበት ነጥብ።'),6)],
 [match(('Real objects and solids','እውነተኛ ዕቃዎችና ጥጥር ምስሎች'),('Match each everyday object with its solid shape.','እያንዳንዱን የዕለት ዕቃ ከጥጥር ምስሉ ጋር አዛምዱ።'),[[(('a tin can 🥫','ቆርቆሮ 🥫'),('cylinder','ሲሊንደር')),(('a ball ⚽','ኳስ ⚽'),('sphere','ሉል')),(('an ice-cream cone 🍦','የአይስክሬም ኮን 🍦'),('cone','ኮን'))],[(('a dice 🎲','ዳይስ 🎲'),('cube','ኩብ')),(('a matchbox','የክብሪት ሳጥን'),('rectangular prism','ሬክታንግላዊ ፕሪዝም')),(('a tent ⛺','ድንኳን ⛺'),('triangular prism','ትሪያንግላዊ ፕሪዝም'))]]),
  sortm(('Flat or curved surfaces?','ዝርግ ወይስ ጎባጣ ገጽ?'),('Prisms and pyramids have only flat faces; cylinders, cones and spheres have curved surfaces.','ፕሪዝሞችና ፒራሚዶች ዝርግ ገጾች ብቻ አሏቸው፤ ሲሊንደር፣ ኮንና ሉል ጎባጣ ገጽ አላቸው።'),[('Only flat faces','ዝርግ ገጾች ብቻ'),('Has a curved surface','ጎባጣ ገጽ ያለው')],[(('cube','ኩብ'),0),(('square pyramid','ካሬ ፒራሚድ'),0),(('triangular prism','ትሪያንግላዊ ፕሪዝም'),0),(('cylinder','ሲሊንደር'),1),(('cone','ኮን'),1),(('sphere','ሉል'),1)]),
  quiz(('Prism or pyramid?','ፕሪዝም ወይስ ፒራሚድ?'),('A prism has two equal bases joined by rectangles. A pyramid has one base and triangle faces that meet at one point (apex).','ፕሪዝም በሬክታንግሎች የተያያዙ ሁለት እኩል መሠረቶች አሉት። ፒራሚድ አንድ መሠረትና በአንድ ጫፍ የሚገናኙ ትሪያንግላዊ ገጾች አሉት።'),[
   q('Joining every corner of a square to one point above it makes a…','የካሬን እያንዳንዱን ጥግ ከላዩ ካለ አንድ ነጥብ ጋር ማገናኘት…ይፈጥራል',[('square pyramid','ካሬ ፒራሚድ'),('cube','ኩብ'),('cylinder','ሲሊንደር')]),
   q('A cube has … faces.','ኩብ … ገጾች አሉት።',['6','4','8']),
   q('Which solid has no edges and no vertices?','ጠርዝም መለያያም የሌለው ጥጥር ምስል?',[('sphere','ሉል'),('cube','ኩብ'),('pyramid','ፒራሚድ')]),
   q('A cone has … vertex (apex).','ኮን … ጫፍ አለው።',['1','0','2'])])],
 [q('A rectangular prism has … edges.','ሬክታንግላዊ ፕሪዝም … ጠርዞች አሉት።',['12','8','6']),q('A triangular pyramid has … faces.','ትሪያንግላዊ ፒራሚድ … ገጾች አሉት።',['4','3','5']),
  q('A football is shaped like a…','እግር ኳስ ቅርጹ…',[('sphere','ሉል'),('cone','ኮን'),('cylinder','ሲሊንደር')]),q('A cube has … vertices.','ኩብ … መለያያዎች አሉት።',['8','6','12'])],
 notes(('Solid figures are 3-dimensional; we describe them by their faces, edges and vertices.','ጥጥር ምስሎች ባለ ሦስት ስፍረት ናቸው፤ በገጾቻቸው፣ በጠርዞቻቸውና በመለያያዎቻቸው እንገልጻቸዋለን።'),
  [('Prisms: two equal bases (cube, rectangular, triangular).','ፕሪዝም፦ ሁለት እኩል መሠረቶች (ኩብ፣ ሬክታንግላዊ፣ ትሪያንግላዊ)።'),('Pyramids: one base, triangle faces meeting at the apex.','ፒራሚድ፦ አንድ መሠረት፣ በጫፍ የሚገናኙ ትሪያንግሎች።'),('Cylinder, cone and sphere have curved surfaces.','ሲሊንደር፣ ኮንና ሉል ጎባጣ ገጽ አላቸው።'),('Cube: 6 faces, 12 edges, 8 vertices.','ኩብ፦ 6 ገጾች፣ 12 ጠርዞች፣ 8 መለያያዎች።')],
  [('ጥጥር ምስል','solid figure','ባለ ሦስት ስፍረት ምስል'),('ገጽ','face','ዝርግ ገጽታ'),('ጠርዝ','edge','ገጾች የሚገናኙበት'),('መለያያ','vertex','ጠርዞች የሚገናኙበት ጫፍ')],('Faces are flat, edges are lines, vertices are corners.','ገጾች ዝርግ፣ ጠርዞች መስመር፣ መለያያዎች ጥግ ናቸው።'),
  [('Faces + vertices − edges for a cube','6 + 8 − 12 = 2'),('Solid with 2 circles and a curved surface','ሲሊንደር (cylinder)')],
  (('Gift box maker','የስጦታ ሳጥን ሠሪ'),('Packaging designers draw "nets" that fold into boxes. Make a net for a cube box and sell it as a gift box.','የማሸጊያ ዲዛይነሮች ወደ ሳጥን የሚታጠፉ "መረቦች" ይሥላሉ። ለኩብ ሳጥን መረብ ሥሩና እንደ ስጦታ ሳጥን ሽጡት።'),
   [('Draw 6 equal squares in a cross shape.','6 እኩል ካሬዎችን በመስቀል ቅርጽ ሳሉ።'),('Add small tabs for glue.','ለሙጫ ትናንሽ ማጣበቂያዎችን ጨምሩ።'),('Cut, fold and glue.','ቁረጡ፣ አጥፉ፣ አጣብቁ።'),('Decorate it and count its faces, edges and vertices.','አስጊጡትና ገጾቹን፣ ጠርዞቹንና መለያያዎቹን ቁጠሩ።')])),
 sm(('Solids have faces, edges and vertices','ጥጥር ምስሎች ገጾች፣ ጠርዞችና መለያያዎች አሏቸው'),[('Prisms','ፕሪዝሞች'),('Pyramids','ፒራሚዶች'),('Curved solids','ጎባጣ ጥጥሮች'),('Counting parts','ክፍሎችን መቁጠር')]),
 ('classifying solid figures and describing their properties','ጥጥር ምስሎችን መመደብና ባህሪያቸውን መግለጽ'))

# 8 Area and volume
U(8,('Measuring area and volume','የስፋትና የይዘት ልኬት'),[
 D('area',('Area of a rectangle','የሬክታንግል ስፋት'),('Area = length × width. It is measured in square units (cm², m²).','ስፋት = ርዝመት × ወርድ። በካሬ አሃድ ይለካል (ሳ.ሜ²፣ ሜ²)።'),5),
 D('vol',('Volume of a box','የሳጥን ይዘት'),('Volume = length × width × height, measured in cubic units (cm³).','ይዘት = ርዝመት × ወርድ × ከፍታ፣ በኩብ አሃድ ይለካል (ሳ.ሜ³)።'),5),
 D('areau',('Area units','የስፋት አሃዶች'),('1 m² = 10,000 cm²; 1 hectare = 10,000 m²; 1 km² = 100 ha.','1 ሜ² = 10,000 ሳ.ሜ²፤ 1 ሄክታር = 10,000 ሜ²፤ 1 ኪ.ሜ² = 100 ሄክታር።'),5),
 D('volu',('Volume and capacity units','የይዘት አሃዶች'),('1 L = 1,000 mL = 1,000 cm³; 1 m³ = 1,000 L.','1 ሊትር = 1,000 ሚ.ሊ = 1,000 ሳ.ሜ³፤ 1 ሜ³ = 1,000 ሊትር።'),5)],
 [quiz(('Area and volume at home','ስፋትና ይዘት በቤት'),('Area covers a surface; volume fills a space.','ስፋት ገጽን ይሸፍናል፤ ይዘት ቦታን ይሞላል።'),[
   q('A bedroom is 4 m long and 3 m wide. Floor area?','መኝታ ቤት 4 ሜ ርዝመትና 3 ሜ ወርድ አለው። የወለሉ ስፋት?',['12 m²','7 m²','14 m²']),
   q('A square has sides of 30 cm. Its area in m² is…','የካሬ ጎን 30 ሳ.ሜ ነው። ስፋቱ በሜ²…',['0.09 m²','0.9 m²','900 m²']),
   q('A rectangle 4 cm × 16 cm has the same area as a square with side…','4 ሳ.ሜ × 16 ሳ.ሜ ሬክታንግል ስፋቱ ጎኑ … የሆነ ካሬ ይመስላል',['8 cm','10 cm','20 cm']),
   q('A water tank holds 2 m³. That is … litres.','የውኃ ታንከር 2 ሜ³ ይይዛል። ይህ … ሊትር ነው።',['2,000','200','20,000']),
   q('To find how much soil fills a box, we need its…','ሳጥን የሚሞላውን አፈር መጠን ለማወቅ … ያስፈልገናል',[('volume','ይዘት'),('perimeter','ዙሪያ'),('area of one face only','የአንድ ገጽ ስፋት ብቻ')])]),
  sortm(('Area or volume?','ስፋት ወይስ ይዘት?'),('Square units measure area; cubic units measure volume.','የካሬ አሃዶች ስፋትን፣ የኩብ አሃዶች ይዘትን ይለካሉ።'),[('Area','ስፋት'),('Volume','ይዘት')],[(('paint for a wall','ለግድግዳ የሚያስፈልግ ቀለም'),0),(('a farm in hectares','በሄክታር የሚለካ እርሻ'),0),(('tiles for a floor','ለወለል ንጣፍ'),0),(('water in a jerrycan','በጀሪካን ያለ ውኃ'),1),(('sand in a truck','በመኪና የተጫነ አሸዋ'),1),(('air in a room','በክፍል ውስጥ ያለ አየር'),1)])],
 [q('Area of a 6 m by 5 m garden = ?','6 ሜ በ5 ሜ የሆነ የአትክልት ቦታ ስፋት = ?',['30 m²','22 m²','11 m²']),q('Volume of a 3 × 2 × 4 cm box = ?','3 × 2 × 4 ሳ.ሜ ሳጥን ይዘት = ?',['24 cm³','9 cm³','26 cm³']),
  q('32,000 m² = ? ha','32,000 ሜ² = ? ሄክታር',['3.2','32','320']),q('5 L = ? mL','5 ሊትር = ? ሚ.ሊ',['5,000','500','50']),q('1 cm³ = ?','1 ሳ.ሜ³ = ?',['1 mL','1 L','10 mL'])],
 notes(('Area is measured in square units and volume in cubic units; we change between units by multiplying or dividing.','ስፋት በካሬ አሃድ፣ ይዘት በኩብ አሃድ ይለካል፤ አሃዶችን በማባዛት ወይም በማካፈል እንለውጣለን።'),
  [('Area of rectangle = length × width.','የሬክታንግል ስፋት = ርዝመት × ወርድ።'),('Volume of box = length × width × height.','የሳጥን ይዘት = ርዝመት × ወርድ × ከፍታ።'),('1 m² = 10,000 cm²; 1 ha = 10,000 m².','1 ሜ² = 10,000 ሳ.ሜ²፤ 1 ሄክታር = 10,000 ሜ²።'),('1 L = 1,000 cm³; 1 m³ = 1,000 L.','1 ሊትር = 1,000 ሳ.ሜ³፤ 1 ሜ³ = 1,000 ሊትር።')],
  [('ስፋት','area','የገጽ መጠን'),('ይዘት','volume','የቦታ መጠን'),('ሄክታር','hectare','10,000 ሜ²'),('ካሬ አሃድ','square unit','የስፋት መለኪያ')],('Square units cover; cubic units fill.','የካሬ አሃድ ይሸፍናል፤ የኩብ አሃድ ይሞላል።'),
  [('A 10 m × 10 m plot in m²','100 m²'),('0.65 km² = ? m²','650,000 m²'),('How many 1 cm cubes fill a 5 × 5 × 5 cm box?','125')],
  (('Water tank planner','የውኃ ታንከር እቅድ'),('Engineers design tanks to store rainwater. Plan a rainwater tank for your school and work out how many litres it holds.','መሐንዲሶች የዝናብ ውኃ ለማጠራቀም ታንከር ይቀርጻሉ። ለትምህርት ቤታችሁ የዝናብ ውኃ ታንከር አቅዱና ስንት ሊትር እንደሚይዝ አስሉ።'),
   [('Choose sizes, e.g. 2 m × 1 m × 1.5 m.','መጠን ምረጡ፤ ለምሳሌ 2 ሜ × 1 ሜ × 1.5 ሜ።'),('Find the volume in m³.','ይዘቱን በሜ³ ፈልጉ።'),('Change it to litres (× 1,000).','ወደ ሊትር ቀይሩ (× 1,000)።'),('How many 20 L jerrycans is that?','ይህ ስንት የ20 ሊትር ጀሪካን ይሆናል?')])),
 sm(('Area covers, volume fills','ስፋት ይሸፍናል፣ ይዘት ይሞላል'),[('Area = l × w','ስፋት = ር × ወ'),('Volume = l × w × h','ይዘት = ር × ወ × ከ'),('Area units','የስፋት አሃዶች'),('Volume units','የይዘት አሃዶች')]),
 ('measuring area with square units and a ruler, measuring volume, converting units and their uses','ስፋትን በካሬ አሃድና በማስመሪያ መለካት፣ ይዘትን መለካት፣ አሃዶችን መለዋወጥና ጠቀሜታቸው'))
dump('math')
