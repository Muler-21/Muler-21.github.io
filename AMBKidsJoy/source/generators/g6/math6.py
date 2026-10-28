import sys;sys.path.insert(0,'.')
from common6 import *
SN=E('Mathematics','ሒሳብ');B='(d=>K6.drills(d))'
def U(n,title,drills,extra,exam,nt,summ,foot):
    unit(f'g6-math-{n}','math',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 6 Mathematics student book (ANRS), Chapter {n}: {foot[0]}.',f'በ6ኛ ክፍል የሒሳብ መጽሐፍ ምዕራፍ {n} ላይ የተመሰረተ፦ {foot[1]}።'),B,drills,extra,exam,nt,summ)

# 1 Divisibility
U(1,('Divisibility of whole numbers','የሙሉ ቁጥሮች ተከፋይነት'),[
 D('divis',('Divisibility tests','የተከፋይነት ሕጎች'),('2: last digit even. 3: digit sum divisible by 3. 4: last two digits divisible by 4. 5: ends in 0 or 5. 6: by 2 and 3. 9: digit sum divisible by 9. 10: ends in 0.','ለ2፦ የመጨረሻው አኃዝ ጥንድ። ለ3፦ የአኃዞቹ ድምር ለ3 ይከፈላል። ለ4፦ የመጨረሻዎቹ ሁለት አኃዞች ለ4 ይከፈላሉ። ለ5፦ በ0 ወይም በ5 ያልቃል። ለ6፦ ለ2ም ለ3ም። ለ9፦ የአኃዞቹ ድምር ለ9 ይከፈላል። ለ10፦ በ0 ያልቃል።'),6),
 D('prime',('Prime or composite?','ብቸኛ ወይስ ተተንታኝ?'),('A prime number has exactly two factors, 1 and itself (2, 3, 5, 7, 11…). A composite number has more than two. 1 is neither.','ብቸኛ ቁጥር ሁለት አብዥዎች ብቻ አሉት፦ 1 እና ራሱ (2፣ 3፣ 5፣ 7፣ 11…)። ተተንታኝ ቁጥር ከሁለት በላይ አብዥዎች አሉት። 1 ሁለቱንም አይደለም።'),5),
 D('pfact',('Prime factorisation','በብቸኛ አብዥዎች መተንተን'),('Use a factor tree: keep splitting into factors until every branch ends in a prime. 36 = 2 × 2 × 3 × 3.','የአብዥ ዛፍ ተጠቀሙ፦ እያንዳንዱ ቅርንጫፍ ብቸኛ ቁጥር ላይ እስኪደርስ ድረስ ተንትኑ። 36 = 2 × 2 × 3 × 3።'),4),
 D('gcf',('Greatest common factor (GCF)','ታላቁ የጋራ አብዥ (ታጋአ)'),('List the factors of each number and choose the biggest one they share. GCF(12, 18) = 6.','የእያንዳንዱን ቁጥር አብዥዎች ዘርዝሩና የሚጋሩትን ትልቁን ምረጡ። ታጋአ(12፣ 18) = 6።'),5),
 D('lcm',('Least common multiple (LCM)','ትንሹ የጋራ ብዜት (ትጋብ)'),('List multiples of each number and choose the smallest one they share. LCM(4, 6) = 12.','የእያንዳንዱን ቁጥር ብዜቶች ዘርዝሩና የሚጋሩትን ትንሹን ምረጡ። ትጋብ(4፣ 6) = 12።'),5)],
 [quiz(('Factors and multiples in life','አብዥና ብዜት በዕለት ኑሮ'),('GCF helps us share things into equal groups; LCM tells us when repeating events meet again.','ታጋአ ነገሮችን በእኩል ቡድን ለመከፋፈል ይረዳል፤ ትጋብ የሚደጋገሙ ክስተቶች መቼ እንደገና እንደሚገናኙ ይነግረናል።'),[
   q('24 pencils and 36 erasers are packed into equal kits with nothing left. What is the greatest number of kits?','24 እርሳሶችና 36 ላጲሶች ምንም ሳይቀር በእኩል ጥቅል ይታሸጋሉ። ከፍተኛው የጥቅል ቁጥር ስንት ነው?',['12','6','72']),
   q('One bus leaves every 6 minutes and another every 8 minutes. They leave together now. After how many minutes do they leave together again?','አንዱ አውቶቡስ በየ6 ደቂቃ ሌላው በየ8 ደቂቃ ይነሳል። አሁን አብረው ተነሱ። ከስንት ደቂቃ በኋላ እንደገና አብረው ይነሳሉ?',['24','14','48']),
   q('Is 2,346 divisible by 3?','2,346 ለ3 ይከፈላል?',[('Yes, 2+3+4+6 = 15','አዎ፣ 2+3+4+6 = 15'),('No, it is even','አይ፣ ጥንድ ስለሆነ')]),
   q('Which number is neither prime nor composite?','ብቸኛም ተተንታኝም ያልሆነው ቁጥር?',['1','2','9']),
   q('The only even prime number is…','ብቸኛ የሆነው ብቸኛው ጥንድ ቁጥር…',['2','4','0'])]),
  sortm(('Prime or composite?','ብቸኛ ወይስ ተተንታኝ?'),('Count the factors: exactly two means prime.','አብዥዎቹን ቁጠሩ፦ ሁለት ብቻ ከሆኑ ብቸኛ ነው።'),[('Prime','ብቸኛ'),('Composite','ተተንታኝ')],[('7',0),('13',0),('29',0),('41',0),('9',1),('15',1),('21',1),('51',1)]),
  match(('Words and meanings','ቃላትና ትርጉማቸው'),('Match each word with an example.','እያንዳንዱን ቃል ከምሳሌው ጋር አዛምዱ።'),[[(('factor of 12','የ12 አብዥ'),'4'),(('multiple of 12','የ12 ብዜት'),'36'),(('prime','ብቸኛ'),'17')],[(('GCF(8, 12)','ታጋአ(8፣ 12)'),'4'),(('LCM(8, 12)','ትጋብ(8፣ 12)'),'24'),(('composite','ተተንታኝ'),'27')]])],
 [q('Which number is divisible by 9?','ለ9 የሚከፈለው ቁጥር?',['4,527','4,526','4,528']),q('GCF of 16 and 24','የ16ና የ24 ታጋአ',['8','4','48']),q('LCM of 3 and 5','የ3ና የ5 ትጋብ',['15','8','1']),q('Prime factorisation of 18','የ18 ብቸኛ አብዥዎች',['2 × 3 × 3','2 × 9','3 × 6']),q('Which is prime?','ብቸኛ የትኛው ነው?',['31','33','35'])],
 notes(('Divisibility tests, primes, GCF and LCM help us split numbers into their building blocks.','የተከፋይነት ሕጎች፣ ብቸኛ ቁጥሮች፣ ታጋአና ትጋብ ቁጥሮችን ወደ መሠረታዊ ክፍሎቻቸው ለመተንተን ይረዱናል።'),
  [('Tests: 2 (even), 3 and 9 (digit sum), 5 (0 or 5), 10 (0).','ሕጎች፦ 2 (ጥንድ)፣ 3 እና 9 (የአኃዝ ድምር)፣ 5 (0 ወይም 5)፣ 10 (0)።'),('Prime: exactly 2 factors. Composite: more than 2.','ብቸኛ፦ 2 አብዥዎች ብቻ። ተተንታኝ፦ ከ2 በላይ።'),('GCF: the biggest shared factor.','ታጋአ፦ ትልቁ የጋራ አብዥ።'),('LCM: the smallest shared multiple.','ትጋብ፦ ትንሹ የጋራ ብዜት።')],
  [('አብዥ','factor','ቁጥሩን ያለቀሪ የሚያካፍል'),('ብዜት','multiple','የቁጥሩ ማባዣ ውጤት'),('ብቸኛ ቁጥር','prime number','1ና ራሱን ብቻ አብዥ ያለው'),('ተተንታኝ ቁጥር','composite number','ከሁለት በላይ አብዥ ያለው')],('Factors divide in; multiples grow out!','አብዥ ይከፍላል፤ ብዜት ያድጋል!'),
  [('Is 135 divisible by 5 and 9?','Yes: ends in 5; 1+3+5 = 9'),('GCF(20, 30)','10'),('LCM(6, 9)','18'),('Prime factors of 30','2 × 3 × 5')],
  (('Fair packing planner','ፍትሐዊ የማሸጊያ ዕቅድ'),('Shops pack goods into equal bundles. Use GCF to plan gift bags for a school event.','ሱቆች ዕቃዎችን በእኩል ጥቅል ያሸጋሉ። ለትምህርት ቤት ዝግጅት የስጦታ ቦርሳዎችን በታጋአ አቅዱ።'),[('Count two kinds of items (e.g. 30 sweets, 45 biscuits).','ሁለት ዓይነት ዕቃዎችን ቁጠሩ (ለምሳሌ 30 ከረሜላ፣ 45 ብስኩት)።'),('Find their GCF.','ታጋአቸውን ፈልጉ።'),('Work out how many of each go in one bag.','በአንድ ቦርሳ ስንት እንደሚገባ አስሉ።'),('Draw your plan and share it.','ዕቅዳችሁን ሳሉና አካፍሉ።')])),
 sm(('Break numbers into factors and multiples','ቁጥሮችን ወደ አብዥና ብዜት ተንትኑ'),[('Divisibility tests','የተከፋይነት ሕጎች'),('Prime and composite','ብቸኛና ተተንታኝ'),('GCF','ታጋአ'),('LCM','ትጋብ')]),
 ('divisibility, factors and multiples, prime and composite numbers, GCF and LCM','ተከፋይነት፣ አብዥና ብዜት፣ ብቸኛና ተተንታኝ ቁጥሮች፣ ታጋአና ትጋብ'))

# 2 Fractions, decimals, percent
U(2,('Fractions, decimals and percent','ክፍልፋዮች፣ አስርዮሾች እና ፐርሰንት'),[
 D('fsimp',('Simplest form','ዝቅተኛ ሂሳባዊ ቃል'),('Divide the numerator and denominator by their GCF. 12/18 → ÷6 → 2/3.','ላዕላይንና ታህታይን በታጋአቸው አካፍሉ። 12/18 → ÷6 → 2/3።'),5),
 D('fdp',('Fraction ↔ decimal ↔ percent','ክፍልፋይ ↔ አስርዮሽ ↔ ፐርሰንት'),('Fraction to decimal: divide top by bottom. Decimal to percent: × 100. Percent to fraction: put it over 100 and simplify.','ክፍልፋይ ወደ አስርዮሽ፦ ላይኛውን በታችኛው አካፍሉ። አስርዮሽ ወደ ፐርሰንት፦ × 100። ፐርሰንት ወደ ክፍልፋይ፦ በ100 ላይ አድርጉና አቅልሉ።'),6),
 D('dcmp',('Compare decimals','አስርዮሾችን ማወዳደር'),('Compare whole parts first, then tenths, hundredths and thousandths.','መጀመሪያ ሙሉውን፣ ከዚያ አስረኛ፣ መቶኛና ሺኛ አወዳድሩ።'),4),
 D('tax',('Sales tax and discount','የንግድ ቀረጥና የዋጋ ቅናሽ'),('Tax adds a percent to the price; a discount takes a percent away. Find the percent of the price first.','ቀረጥ በዋጋው ላይ ፐርሰንት ይጨምራል፤ ቅናሽ ፐርሰንት ይቀንሳል። መጀመሪያ የዋጋውን ፐርሰንት ፈልጉ።'),5),
 D('dround',('Rounding decimals','አስርዮሾችን ማጠጋጋት'),('Look at the digit after the place you round to: 5 or more → round up; less than 5 → keep.','ከምታጠጋጉበት ቤት ቀጥሎ ያለውን አኃዝ ተመልከቱ፦ 5 ወይም በላይ → ጨምሩ፤ ከ5 በታች → አቆዩ።'),5)],
 [quiz(('Money and percent','ገንዘብና ፐርሰንት'),('Shops, banks and the government use percent every day.','ሱቆች፣ ባንኮችና መንግሥት ፐርሰንትን በየቀኑ ይጠቀማሉ።'),[
   q('A laptop costs 30,000 birr with 4.25% tax. How much is the tax?','ላፕቶፕ 30,000 ብር ሲሆን 4.25% ቀረጥ አለው። ቀረጡ ስንት ነው?',[('1,275 birr','1,275 ብር'),('4,250 birr','4,250 ብር'),('127.5 birr','127.5 ብር')]),
   q('6% tax on 12,500 birr is…','የ12,500 ብር 6% ቀረጥ…',[('750 birr','750 ብር'),('75 birr','75 ብር'),('7,500 birr','7,500 ብር')]),
   q('A dress was 800 birr and now has 25% off. New price?','ቀሚስ 800 ብር ነበር፤ አሁን 25% ቅናሽ አለው። አዲሱ ዋጋ?',[('600 birr','600 ብር'),('775 birr','775 ብር'),('200 birr','200 ብር')]),
   q('Which is the same as 0.45?','ከ0.45 ጋር እኩል የሆነው?',['45%','4.5%','450%']),
   q('Which is largest: 0.6, 5/8 or 62%?','ትልቁ የትኛው ነው፦ 0.6፣ 5/8 ወይስ 62%?',['5/8','0.6','62%'],e=('5/8 = 0.625, 62% = 0.62, so 5/8 is largest.','5/8 = 0.625፣ 62% = 0.62፤ ስለዚህ 5/8 ትልቁ ነው።'))]),
  match(('Same value, three ways','አንድ ዋጋ በሦስት መንገድ'),('Match the fraction with its decimal and percent.','ክፍልፋዩን ከአስርዮሹና ከፐርሰንቱ ጋር አዛምዱ።'),[[('1/2','50%'),('1/4','0.25'),('3/5','60%')],[('3/4','0.75'),('1/5','20%'),('7/10','0.7')]]),
  order(('Order from smallest to largest','ከትንሹ ወደ ትልቁ አስቀምጡ'),('Change them all to decimals first.','መጀመሪያ ሁሉንም ወደ አስርዮሽ ቀይሩ።'),('Tap from smallest to largest.','ከትንሹ ወደ ትልቁ ንኩ።'),[(('Order:','አስቀምጡ፦'),['0.3','2/5','45%','0.5']),(('Order:','አስቀምጡ፦'),['1/8','0.2','25%','3/10'])])],
 [q('Simplest form of 15/25','የ15/25 ዝቅተኛ ቃል',['3/5','5/3','1/5']),q('3/8 as a decimal','3/8 በአስርዮሽ',['0.375','0.38','3.8']),q('Round 7.468 to the nearest hundredth','7.468ን ወደ ቅርብ መቶኛ አጠጋጉ',['7.47','7.46','7.5']),q('10% discount on 450 birr. New price?','በ450 ብር ላይ 10% ቅናሽ። አዲሱ ዋጋ?',[('405 birr','405 ብር'),('440 birr','440 ብር'),('45 birr','45 ብር')]),q('35% as a fraction','35% በክፍልፋይ',['7/20','35/10','3/5'])],
 notes(('Fractions, decimals and percents are three ways to write the same amount; we use them for tax and discounts.','ክፍልፋይ፣ አስርዮሽና ፐርሰንት አንድን መጠን የሚጽፉ ሦስት መንገዶች ናቸው፤ ለቀረጥና ለቅናሽ እንጠቀምባቸዋለን።'),
  [('Simplest form: divide top and bottom by the GCF.','ዝቅተኛ ቃል፦ ላይና ታችን በታጋአ አካፍሉ።'),('Fraction → decimal → percent: ÷, then × 100.','ክፍልፋይ → አስርዮሽ → ፐርሰንት፦ ÷፣ ከዚያ × 100።'),('Tax adds; discount subtracts a percent of the price.','ቀረጥ ይጨምራል፤ ቅናሽ የዋጋውን ፐርሰንት ይቀንሳል።'),('Rounding: 5 or more rounds up.','ማጠጋጋት፦ 5 ወይም በላይ ከፍ ይላል።')],
  [('ላዕላይ','numerator','የክፍልፋዩ ላይኛው ቁጥር'),('ታህታይ','denominator','የክፍልፋዩ ታችኛው ቁጥር'),('ቀረጥ','tax','በዋጋ ላይ የሚጨመር ክፍያ'),('ቅናሽ','discount','ከዋጋ የሚቀነስ')],('Percent means "out of 100".','ፐርሰንት ማለት "ከ100" ማለት ነው።'),
  [('4/5 as a percent','80%'),('0.08 as a percent','8%'),('15% of 200','30'),('Round 3.14159 to the nearest tenth','3.1')],
  (('Price-tag checker','የዋጋ መለያ አረጋጋጭ'),('Shoppers save money by checking discounts. Make a price table for a pretend shop.','ገዢዎች ቅናሽን በማረጋገጥ ገንዘብ ይቆጥባሉ። ለምናባዊ ሱቅ የዋጋ ሠንጠረዥ ሥሩ።'),[('List 5 items with prices.','5 ዕቃዎችን ከዋጋቸው ጋር ዘርዝሩ።'),('Give each a discount (10%, 20%, 25%).','ለእያንዳንዳቸው ቅናሽ ስጡ (10%፣ 20%፣ 25%)።'),('Add 15% VAT to the new prices.','በአዲሶቹ ዋጋዎች ላይ 15% ተ.እ.ታ ጨምሩ።'),('Check your answers with a partner.','መልሶቻችሁን ከጓደኛ ጋር አረጋግጡ።')])),
 sm(('One amount, three forms','አንድ መጠን፣ ሦስት መልክ'),[('Simplest form','ዝቅተኛ ቃል'),('Converting','መለዋወጥ'),('Tax and discount','ቀረጥና ቅናሽ'),('Rounding','ማጠጋጋት')]),
 ('simplest form, converting fractions, decimals and percents, comparing, tax and discount, rounding','ዝቅተኛ ቃል፣ ክፍልፋይ፣ አስርዮሽና ፐርሰንትን መለዋወጥ፣ ማወዳደር፣ ቀረጥና ቅናሽ፣ ማጠጋጋት'))

# 3 Operations with fractions and decimals
U(3,('Operations with fractions and decimals','መሠረታዊ የሒሳብ ስሌቶች በክፍልፋይና በአስርዮሽ'),[
 D('fadd',('Add and subtract fractions','ክፍልፋዮችን መደመርና መቀነስ'),('Use the LCM of the denominators as the common denominator.','የታህታዮቹን ትጋብ እንደ የጋራ ታህታይ ተጠቀሙ።'),5),
 D('dadd',('Add and subtract decimals','አስርዮሾችን መደመርና መቀነስ'),('Line up the decimal points, fill gaps with zeros, then calculate.','የአስርዮሽ ነጥቦችን አሰልፉ፣ ባዶ ቦታን በዜሮ ሙሉ፣ ከዚያ አስሉ።'),4),
 D('fmul',('Multiply fractions','ክፍልፋዮችን ማባዛት'),('Top × top, bottom × bottom, then simplify.','ላይ × ላይ፣ ታች × ታች፣ ከዚያ አቅልሉ።'),4),
 D('fdiv',('Divide fractions','ክፍልፋዮችን ማካፈል'),('Multiply by the reciprocal of the divisor.','በአካፋዩ ተገላቢጦሽ አባዙ።'),4),
 D('dmul',('Multiply decimals','አስርዮሾችን ማባዛት'),('Multiply as whole numbers, then count the decimal places in both numbers.','እንደ ሙሉ ቁጥር አባዙ፣ ከዚያ በሁለቱም ቁጥሮች ያሉትን የአስርዮሽ ቤቶች ቁጠሩ።'),4),
 D('sci',('Scientific notation','ሳይንሳዊ አፃፃፍ'),('Write a number as a × 10ⁿ where a is between 1 and 10. 754.25 = 7.5425 × 10².','ቁጥርን a × 10ⁿ አድርጋችሁ ጻፉ፤ a ከ1 እስከ 10 መካከል ይሁን። 754.25 = 7.5425 × 10²።'),5)],
 [quiz(('Calculations in daily life','ስሌቶች በዕለት ኑሮ'),('We add fractions for recipes and land, and decimals for money and length.','ክፍልፋዮችን ለምግብ አዘገጃጀትና ለመሬት፣ አስርዮሾችን ለገንዘብና ለርዝመት እንደምራለን።'),[
   q('Abebe walked 1 1/2 km and then 2 3/4 km. Total distance?','አበበ 1 1/2 ኪ.ሜ ከዚያ 2 3/4 ኪ.ሜ ተጓዘ። ጠቅላላ ርቀት?',[('4 1/4 km','4 1/4 ኪ.ሜ'),('3 4/6 km','3 4/6 ኪ.ሜ'),('4 3/4 km','4 3/4 ኪ.ሜ')]),
   q('A metre of cloth costs 125.50 birr. Cost of 4 m?','አንድ ሜትር ጨርቅ 125.50 ብር ነው። የ4 ሜ ዋጋ?',[('502 birr','502 ብር'),('500.50 birr','500.50 ብር'),('129.50 birr','129.50 ብር')]),
   q('How many 3/4-litre bottles can be filled from 6 litres?','ከ6 ሊትር ስንት የ3/4 ሊትር ጠርሙሶች ይሞላሉ?',['8','4 1/2','18']),
   q('The Sun is about 150,000,000 km from Earth. In scientific notation:','ፀሐይ ከምድር 150,000,000 ኪ.ሜ ያህል ትርቃለች። በሳይንሳዊ አፃፃፍ፦',['1.5 × 10⁸','15 × 10⁷','1.5 × 10⁶']),
   q('0.4 × 0.3 = ?','0.4 × 0.3 = ?',['0.12','1.2','0.7'])]),
  match(('Reciprocals','ተገላቢጦሾች'),('A number times its reciprocal equals 1.','ቁጥር በተገላቢጦሹ ሲባዛ 1 ይሆናል።'),[[('2/3','3/2'),('5','1/5'),('1/7','7')],[('4/9','9/4'),('1 1/2','2/3'),('0.25','4')]])],
 [q('2/5 + 1/3 = ?','2/5 + 1/3 = ?',['11/15','3/8','3/15']),q('3.6 − 1.25 = ?','3.6 − 1.25 = ?',['2.35','2.45','1.11']),q('3/4 × 8 = ?','3/4 × 8 = ?',['6','24','3/32']),q('2/3 ÷ 4/9 = ?','2/3 ÷ 4/9 = ?',['1 1/2','8/27','2/3']),q('6,300 in scientific notation','6,300 በሳይንሳዊ አፃፃፍ',['6.3 × 10³','63 × 10²','6.3 × 10²'])],
 notes(('We can add, subtract, multiply and divide fractions and decimals, and write big numbers in scientific notation.','ክፍልፋዮችንና አስርዮሾችን መደመር፣ መቀነስ፣ ማባዛትና ማካፈል እንችላለን፤ ትላልቅ ቁጥሮችን በሳይንሳዊ አፃፃፍ እንጽፋለን።'),
  [('+ and − fractions: common denominator (LCM).','ክፍልፋይ + እና −፦ የጋራ ታህታይ (ትጋብ)።'),('Decimals: line up the points; count decimal places when multiplying.','አስርዮሽ፦ ነጥቦችን አሰልፉ፤ ስታባዙ የአስርዮሽ ቤቶችን ቁጠሩ።'),('× fractions: top × top, bottom × bottom; ÷: multiply by the reciprocal.','× ክፍልፋይ፦ ላይ × ላይ፣ ታች × ታች፤ ÷፦ በተገላቢጦሹ አባዙ።'),('Scientific notation: a × 10ⁿ, 1 ≤ a < 10.','ሳይንሳዊ አፃፃፍ፦ a × 10ⁿ፣ 1 ≤ a < 10።')],
  [('ተገላቢጦሽ','reciprocal','የተገለበጠ ክፍልፋይ'),('የጋራ ታህታይ','common denominator','ለሁለቱም ክፍልፋዮች አንድ ታህታይ'),('ሳይንሳዊ አፃፃፍ','scientific notation','a × 10ⁿ')],('Keep, change, flip to divide!','አቆይ፣ ቀይር፣ ገልብጥ!'),
  [('1/2 − 1/6','1/3'),('2.5 × 0.4','1'),('3/5 ÷ 3','1/5'),('4.2 × 10⁴ as a number','42,000')],
  (('Space facts poster','የሕዋ እውነታዎች ፖስተር'),('Scientists write huge distances in scientific notation. Make a poster of space distances.','ሳይንቲስቶች ግዙፍ ርቀቶችን በሳይንሳዊ አፃፃፍ ይጽፋሉ። የሕዋ ርቀቶች ፖስተር ሥሩ።'),[('Find 4 distances (Earth–Moon, Earth–Sun…).','4 ርቀቶችን ፈልጉ (ምድር–ጨረቃ፣ ምድር–ፀሐይ…)።'),('Write each in ordinary form and in scientific notation.','እያንዳንዱን በተራ ቁጥርና በሳይንሳዊ አፃፃፍ ጻፉ።'),('Order them from nearest to farthest.','ከቅርብ ወደ ሩቅ አስቀምጧቸው።'),('Present your poster.','ፖስተራችሁን አቅርቡ።')])),
 sm(('Calculate with parts of a whole','በሙሉ ክፍሎች አስሉ'),[('Adding and subtracting','መደመርና መቀነስ'),('Decimals','አስርዮሾች'),('× and ÷ fractions','ክፍልፋይ × እና ÷'),('Scientific notation','ሳይንሳዊ አፃፃፍ')]),
 ('adding, subtracting, multiplying and dividing fractions and decimals, and scientific notation','ክፍልፋይና አስርዮሽን መደመር፣ መቀነስ፣ ማባዛትና ማካፈል፣ ሳይንሳዊ አፃፃፍ'))

# 4 Equations, inequalities, proportion
U(4,('Linear equations, inequalities and proportion','መስመራዊ እኩልታ፣ ያለእኩልነትና ወደረኛነት'),[
 D('lineq',('Solve linear equations','መስመራዊ እኩልታ መፍታት'),('Do the same thing to both sides: undo + with −, undo × with ÷.','በሁለቱም ጎኖች ተመሳሳይ ነገር አድርጉ፦ +ን በ−፣ ×ን በ÷ ቀልብሱ።'),6),
 D('ineq',('Solve inequalities','ያለእኩልነት መፍታት'),('Solve like an equation but keep the sign <, >, ≤ or ≥. A solution is any number that makes it true.','እንደ እኩልታ ፍቱ ግን <፣ >፣ ≤ ወይም ≥ ምልክቱን አቆዩ። መፍትሔ እውነት የሚያደርገው ማንኛውም ቁጥር ነው።'),5),
 D('prop',('Direct and inverse proportion','ርቱዕና ኢ-ርቱዕ ወደረኛነት'),('Direct: y = kx (both grow together). Inverse: x × y = k (one grows, the other shrinks).','ርቱዕ፦ y = kx (አብረው ያድጋሉ)። ኢ-ርቱዕ፦ x × y = k (አንዱ ሲጨምር ሌላው ይቀንሳል)።'),6)],
 [quiz(('Equations and proportion in life','እኩልታና ወደረኛነት በዕለት ኑሮ'),('Letters stand for unknown numbers; proportion compares two quantities that change together.','ፊደላት ያልታወቁ ቁጥሮችን ይወክላሉ፤ ወደረኛነት አብረው የሚለዋወጡ ሁለት መጠኖችን ያወዳድራል።'),[
   q('A worker earns 60 birr in 15 hours and 80 birr in 20 hours. What is k in y = kx?','ሠራተኛ በ15 ሰዓት 60 ብር፣ በ20 ሰዓት 80 ብር ያገኛል። በy = kx k ስንት ነው?',['4','45','1/4']),
   q('Which shows inverse proportion?','ኢ-ርቱዕ ወደረኛነትን የሚያሳየው?',[('more workers, fewer days','ብዙ ሠራተኛ፣ ጥቂት ቀን'),('more kilos, more cost','ብዙ ኪሎ፣ ብዙ ዋጋ'),('more hours, more pay','ብዙ ሰዓት፣ ብዙ ክፍያ')]),
   q('You must be at least 18 to vote: age ___ 18','ለመምረጥ ቢያንስ 18 ዓመት መሆን አለባችሁ፦ ዕድሜ ___ 18',['≥','<','≤']),
   q('Three times a number plus 4 is 19. The number is…','የአንድ ቁጥር ሦስት እጥፍ ሲደመር 4 = 19። ቁጥሩ…',['5','7','15']),
   q('In which quadrant is the point (3, 2)?','ነጥቡ (3፣ 2) በየትኛው ሩብ ይገኛል?',[('first (I)','አንደኛ (I)'),('second (II)','ሁለተኛ (II)'),('third (III)','ሦስተኛ (III)')])]),
  sortm(('Direct or inverse?','ርቱዕ ወይስ ኢ-ርቱዕ?'),('Direct: both go up together. Inverse: one goes up, the other goes down.','ርቱዕ፦ ሁለቱም አብረው ይጨምራሉ። ኢ-ርቱዕ፦ አንዱ ሲጨምር ሌላው ይቀንሳል።'),[('Direct','ርቱዕ'),('Inverse','ኢ-ርቱዕ')],
   [(('kilos of teff and price','የጤፍ ኪሎና ዋጋ'),0),(('distance and petrol used','ርቀትና የተጠቀመው ነዳጅ'),0),(('number of notebooks and cost','የደብተር ብዛትና ዋጋ'),0),(('speed and travel time','ፍጥነትና የጉዞ ጊዜ'),1),(('workers and days to finish','ሠራተኞችና የሚጨርሱበት ቀን'),1),(('people sharing a cake and size of each piece','ኬክ የሚካፈሉ ሰዎችና የቁራሹ መጠን'),1)])],
 [q('Solve 4x − 7 = 13','4x − 7 = 13 ፍቱ',['5','1.5','20']),q('Solve x + 6 > 10','x + 6 > 10 ፍቱ',['x > 4','x > 16','x < 4']),q('y = 3x. If x = 7, y = ?','y = 3x። x = 7 ከሆነ y = ?',['21','10','7/3']),q('4 taps fill a tank in 6 hours. 8 taps take…','4 ቧንቧዎች ታንክ በ6 ሰዓት ይሞላሉ። 8 ቧንቧዎች…',[('3 hours','3 ሰዓት'),('12 hours','12 ሰዓት'),('6 hours','6 ሰዓት')]),q('Which number is a solution of 2x ≤ 10?','2x ≤ 10 መፍትሔ የሆነው?',['5','6','7'])],
 notes(('Equations balance two sides; inequalities show a range; proportion links two changing quantities.','እኩልታ ሁለት ጎኖችን ያመዛዝናል፤ ያለእኩልነት ክልልን ያሳያል፤ ወደረኛነት የሚለዋወጡ መጠኖችን ያገናኛል።'),
  [('Equation: do the same to both sides.','እኩልታ፦ ለሁለቱም ጎኖች ተመሳሳይ አድርጉ።'),('Inequality: <, >, ≤, ≥ have many solutions.','ያለእኩልነት፦ <፣ >፣ ≤፣ ≥ ብዙ መፍትሔ አላቸው።'),('Coordinates (x, y): across, then up.','ውቅር (x፣ y)፦ መጀመሪያ ወደ ጎን፣ ከዚያ ወደ ላይ።'),('Direct y = kx; inverse xy = k.','ርቱዕ y = kx፤ ኢ-ርቱዕ xy = k።')],
  [('እኩልታ','equation','= ያለው ዓረፍተ ነገር'),('ያለእኩልነት','inequality','< ወይም > ያለው'),('ርቱዕ ወደረኛነት','direct proportion','አብረው የሚጨምሩ'),('ኢ-ርቱዕ ወደረኛነት','inverse proportion','አንዱ ሲጨምር ሌላው የሚቀንስ')],('Balance the scale!','ሚዛኑን አስተካክሉ!'),
  [('Solve 5x = 45','x = 9'),('Solve x − 3 < 8','x < 11'),('y ∝ x, y = 12 when x = 4. k = ?','3'),('6 people take 4 days. 12 people take?','2 days')],
  (('Fair pay calculator','የፍትሐዊ ክፍያ ማስያ'),('Employers use direct proportion to pay by the hour. Make a pay table.','አሠሪዎች በሰዓት ለመክፈል ርቱዕ ወደረኛነትን ይጠቀማሉ። የክፍያ ሠንጠረዥ ሥሩ።'),[('Choose a pay rate (e.g. 25 birr per hour).','የክፍያ መጠን ምረጡ (ለምሳሌ በሰዓት 25 ብር)።'),('Fill in pay for 1 to 8 hours.','ከ1 እስከ 8 ሰዓት ክፍያን ሙሉ።'),('Plot the points on a grid.','ነጥቦቹን በፍርግርግ ላይ አመልክቱ።'),('Check: is the line straight?','አረጋግጡ፦ መስመሩ ቀጥ ነው?')])),
 sm(('Balance, compare and relate','አመዛዝኑ፣ አወዳድሩ፣ አገናኙ'),[('Equations','እኩልታ'),('Inequalities','ያለእኩልነት'),('Coordinates','ውቅር'),('Proportion','ወደረኛነት')]),
 ('linear equations and inequalities, the coordinate plane, and direct and inverse proportion','መስመራዊ እኩልታና ያለእኩልነት፣ ሥርዓተ ውቅር፣ ርቱዕና ኢ-ርቱዕ ወደረኛነት'))

# 5 Plane and solid figures
U(5,('Plane and solid figures','የጠለል እና ጥጥር ምስሎች'),[
 D('atype',('Kinds of angles','የአንግል ዓይነቶች'),('Acute < 90°, right = 90°, obtuse between 90° and 180°, straight = 180°, reflex > 180°.','ሹል < 90°፣ ቀጥ = 90°፣ ዝርጥ ከ90° እስከ 180°፣ ዝርግ = 180°፣ ገልባጭ > 180°።'),4),
 D('apair',('Complementary and supplementary','ተሟያና ተደጋጋፊ አንግሎች'),('Complementary angles add to 90°; supplementary angles add to 180°.','ተሟያ አንግሎች ድምራቸው 90°፤ ተደጋጋፊ አንግሎች ድምራቸው 180° ነው።'),5),
 D('tsum',('Angles in a triangle','የጎነ ሶስት አንግሎች'),('The three angles of any triangle add up to 180°.','የማንኛውም ጎነ ሶስት ሦስት አንግሎች ድምር 180° ነው።'),4),
 D('circle',('Circle: radius, diameter, circumference','ክብ፦ ራዲየስ፣ ዲያሜትር፣ ዙሪያ'),('d = 2r. Circumference C = 2πr = πd, with π ≈ 3.14.','d = 2r። ዙሪያ C = 2πr = πd፣ π ≈ 3.14።'),5),
 D('solid6',('Solid figures','ጥጥር ምስሎች'),('Prisms and pyramids have flat faces, edges and vertices. Cylinders and cones have curved surfaces.','ፕሪዝምና ፒራሚድ ጠፍጣፋ ገጾች፣ ጠርዞችና ጫፎች አሏቸው። ሲሊንደርና ኮን ጎባጣ ገጽ አላቸው።'),5)],
 [quiz(('Shapes around us','በዙሪያችን ያሉ ምስሎች'),('Triangles, rectangles and circles are flat (plane) figures; boxes, cans and cones are solids.','ጎነ ሶስት፣ ሬክታንግልና ክብ ጠፍጣፋ (የጠለል) ምስሎች ናቸው፤ ሳጥን፣ ቆርቆሮና ኮን ጥጥር ናቸው።'),[
   q('A triangle with all sides equal is…','ሁሉም ጎኖቹ እኩል የሆኑ ጎነ ሶስት…',[('equilateral','ባለእኩል ጎን'),('scalene','ሁሉም ጎኖቹ የተለያዩ'),('right-angled','ቀጥ አንግል ያለው')]),
   q('A line segment joining two points on a circle is a…','በክብ ላይ ያሉ ሁለት ነጥቦችን የሚያገናኝ ውስን መስመር…',[('chord','ደጋን'),('radius','ራዲየስ'),('centre','መሀል')]),
   q('A tin of tomato paste is shaped like a…','የቲማቲም ድልህ ቆርቆሮ ቅርጹ…',[('cylinder','ሲሊንደር'),('cone','ኮን'),('pyramid','ፒራሚድ')]),
   q('All angles of a rectangle are…','የሬክታንግል ሁሉም አንግሎች…',['90°','60°','45°']),
   q('Diagonals of a square…','የካሬ ሰያፍ መስመሮች…',[('are equal and cross at right angles','እኩል ናቸው፤ በቀጥ አንግል ይቆራረጣሉ'),('are never equal','በፍጹም እኩል አይደሉም'),('are parallel','ትይዩ ናቸው')])]),
  sortm(('Plane or solid?','የጠለል ወይስ ጥጥር?'),('Plane figures are flat; solids have length, width and height.','የጠለል ምስሎች ጠፍጣፋ ናቸው፤ ጥጥሮች ርዝመት፣ ወርድና ከፍታ አላቸው።'),[('Plane','የጠለል'),('Solid','ጥጥር')],[(('circle','ክብ'),0),(('triangle','ጎነ ሶስት'),0),(('square','ካሬ'),0),(('cone','ኮን'),1),(('cylinder','ሲሊንደር'),1),(('square pyramid','ካሬ ፒራሚድ'),1)])],
 [q('An angle of 120° is…','የ120° አንግል…',[('obtuse','ዝርጥ'),('acute','ሹል'),('right','ቀጥ')]),q('Supplement of 70°','የ70° ተደጋጋፊ',['110°','20°','290°']),q('Triangle angles 90° and 35°. Third?','የጎነ ሶስት አንግሎች 90° እና 35°። ሦስተኛው?',['55°','65°','145°']),q('Radius 7 cm. Diameter?','ራዲየስ 7 ሳ.ሜ። ዲያሜትር?',[('14 cm','14 ሳ.ሜ'),('3.5 cm','3.5 ሳ.ሜ'),('49 cm','49 ሳ.ሜ')]),q('How many faces does a triangular prism have?','ትሪያንግላዊ ፕሪዝም ስንት ገጾች አሉት?',['5','6','9'])],
 notes(('Plane figures are measured by their angles and sides; circles by radius and diameter; solids by faces, edges and vertices.','የጠለል ምስሎች በአንግልና በጎናቸው፣ ክብ በራዲየስና በዲያሜትር፣ ጥጥሮች በገጽ፣ በጠርዝና በጫፍ ይገለጻሉ።'),
  [('Angles: acute, right, obtuse, straight, reflex.','አንግሎች፦ ሹል፣ ቀጥ፣ ዝርጥ፣ ዝርግ፣ ገልባጭ።'),('Triangle angles = 180°; complementary = 90°; supplementary = 180°.','የጎነ ሶስት አንግሎች = 180°፤ ተሟያ = 90°፤ ተደጋጋፊ = 180°።'),('Circle: d = 2r; C = 2πr.','ክብ፦ d = 2r፤ C = 2πr።'),('Solids: prism, pyramid, cylinder, cone.','ጥጥሮች፦ ፕሪዝም፣ ፒራሚድ፣ ሲሊንደር፣ ኮን።')],
  [('ራዲየስ','radius','ከመሀል እስከ ዙሪያ'),('ዲያሜትር','diameter','በመሀል የሚያልፍ ደጋን'),('ደጋን','chord','በክብ ላይ ሁለት ነጥቦችን የሚያገናኝ'),('ጥጥር ምስል','solid figure','ባለሦስት ልኬት ምስል')],('Triangle 180°, circle 360°!','ጎነ ሶስት 180°፣ ክብ 360°!'),
  [('Complement of 25°','65°'),('Circumference when r = 10 cm',('62.8 cm','62.8 ሳ.ሜ')),('Edges of a cube','12'),('An angle of 200° is…','reflex')],
  (('Shape hunt photo book','የምስል ፍለጋ የፎቶ መጽሐፍ'),('Architects use shapes everywhere. Make a book of shapes you find at home and school.','አርክቴክቶች ምስሎችን በሁሉም ቦታ ይጠቀማሉ። በቤትና በትምህርት ቤት የምታገኟቸውን ምስሎች መጽሐፍ ሥሩ።'),[('Find 3 plane shapes and 3 solids.','3 የጠለልና 3 ጥጥር ምስሎችን ፈልጉ።'),('Draw or photograph each.','እያንዳንዱን ሳሉ ወይም ፎቶ አንሱ።'),('Label sides, angles, faces or radius.','ጎኖችን፣ አንግሎችን፣ ገጾችን ወይም ራዲየስን ሰይሙ።'),('Share your book with the class.','መጽሐፋችሁን ለክፍሉ አካፍሉ።')])),
 sm(('Shapes: flat and solid','ምስሎች፦ ጠፍጣፋና ጥጥር'),[('Angles','አንግሎች'),('Triangles and quadrilaterals','ጎነ ሶስትና አራት ጎኖች'),('Circles','ክብ'),('Solids','ጥጥሮች')]),
 ('angles, triangles, squares and rectangles, circles and solid figures','አንግል፣ ጎነ ሶስት፣ ካሬና ሬክታንግል፣ ክብና ጥጥር ምስሎች'))

# 6 Data handling
U(6,('Data handling','መረጃ አያያዝ'),[
 D('mean',('Mean','አማካይ'),('Mean = sum of the values ÷ number of values.','አማካይ = የዋጋዎቹ ድምር ÷ የዋጋዎቹ ብዛት።'),4),
 D('mmm',('Median, mode and range','መሃል ከፋይ፣ ድግግሞሽና ክልል'),('Median: middle value after ordering. Mode: most frequent value. Range: largest − smallest.','መሃል ከፋይ፦ ከተደረደሩ በኋላ መሀል ያለው። ድግግሞሽ (mode)፦ በብዛት የተደጋገመው። ክልል፦ ትልቁ − ትንሹ።'),6),
 D('piec',('Pie charts','የክብ ቻርት'),('A pie chart is a circle (360°) split into parts. Each 1% is 3.6°; 25% is a quarter (90°).','የክብ ቻርት በክፍሎች የተከፈለ ክብ (360°) ነው። እያንዳንዱ 1% 3.6° ነው፤ 25% ሩብ (90°) ነው።'),5),
 D('bar',('Read a bar graph','የአሞሌ ግራፍ ማንበብ'),('Read the height of each bar against the scale.','የእያንዳንዱን አሞሌ ቁመት በመለኪያው አንብቡ።'),3)],
 [quiz(('Collecting and organising data','መረጃ መሰብሰብና ማደራጀት'),('Good questions get clear answers. Tally the answers, then show them in a table or chart.','ጥሩ ጥያቄዎች ግልጽ መልስ ያስገኛሉ። መልሶቹን በቆጠራ ምልክት ቁጠሩ፤ ከዚያ በሠንጠረዥ ወይም በቻርት አሳዩ።'),[
   q('Which is a good survey question?','ጥሩ የቅኝት ጥያቄ የትኛው ነው?',[('Which is your favourite fruit: banana, mango or orange?','ተወዳጅ ፍራፍሬያችሁ የትኛው ነው፦ ሙዝ፣ ማንጎ ወይስ ብርቱካን?'),('Don\'t you think mango is the best?','ማንጎ ምርጥ አይደለም ብላችሁ አታስቡም?'),('Fruit?','ፍራፍሬ?')]),
   q('A list of questions used to collect data is a…','መረጃ ለመሰብሰብ የሚጠቅሙ የጥያቄዎች ዝርዝር…',[('questionnaire','መጠይቅ'),('pie chart','የክብ ቻርት'),('mean','አማካይ')]),
   q('Marks 6, 8, 8, 9, 4. The mode is…','ውጤቶች 6፣ 8፣ 8፣ 9፣ 4። ድግግሞሹ…',['8','7','5']),
   q('Marks 6, 8, 8, 9, 4. The mean is…','ውጤቶች 6፣ 8፣ 8፣ 9፣ 4። አማካዩ…',['7','8','35']),
   q('Half of a pie chart is…','የክብ ቻርት ግማሹ…',['180°','90°','50°'])]),
  match(('Measures of data','የመረጃ መለኪያዎች'),('Match the word to its meaning.','ቃሉን ከትርጉሙ ጋር አዛምዱ።'),[[(('mean','አማካይ'),('sum ÷ count','ድምር ÷ ብዛት')),(('median','መሃል ከፋይ'),('middle value','መሀል ያለው ዋጋ')),(('mode','ድግግሞሽ'),('most common value','በብዛት የተደጋገመ'))],[(('range','ክልል'),('largest − smallest','ትልቁ − ትንሹ')),(('tally','ቆጠራ ምልክት'),('||||','||||')),(('pie chart','የክብ ቻርት'),('parts of 360°','የ360° ክፍሎች'))]])],
 [q('Median of 3, 9, 5, 7, 1','የ3፣ 9፣ 5፣ 7፣ 1 መሃል ከፋይ',['5','7','9']),q('Range of 12, 4, 20, 9','የ12፣ 4፣ 20፣ 9 ክልል',['16','20','24']),q('Mean of 10, 20, 30','የ10፣ 20፣ 30 አማካይ',['20','30','60']),q('In a pie chart, 50% takes…','በክብ ቻርት 50%…',['180°','50°','90°']),q('Mode of 2, 3, 3, 5, 5, 5','የ2፣ 3፣ 3፣ 5፣ 5፣ 5 ድግግሞሽ',['5','3','4'])],
 notes(('We collect data with good questions, organise it in tables and charts, and describe it with mean, median, mode and range.','መረጃን በጥሩ ጥያቄ እንሰበስባለን፣ በሠንጠረዥና በቻርት እናደራጃለን፣ በአማካይ፣ በመሃል ከፋይ፣ በድግግሞሽና በክልል እንገልጻለን።'),
  [('Questionnaires: clear, fair questions.','መጠይቅ፦ ግልጽና ፍትሐዊ ጥያቄዎች።'),('Tables and tallies organise data.','ሠንጠረዥና ቆጠራ መረጃን ያደራጃሉ።'),('Pie chart: parts of 360°; 1% = 3.6°.','የክብ ቻርት፦ የ360° ክፍሎች፤ 1% = 3.6°።'),('Mean, median, mode and range.','አማካይ፣ መሃል ከፋይ፣ ድግግሞሽና ክልል።')],
  [('መጠይቅ','questionnaire','የጥያቄዎች ዝርዝር'),('አማካይ','mean','ድምር ÷ ብዛት'),('መሃል ከፋይ','median','መሀል ያለው ዋጋ'),('ድግግሞሽ','mode','በብዛት የተደጋገመ')],('Order first, then find the middle!','መጀመሪያ አደራጁ፣ ከዚያ መሀሉን ፈልጉ!'),
  [('Mean of 4, 6, 8','6'),('Median of 2, 9, 4, 7','5.5'),('25% of a pie chart in degrees','90°'),('Range of 15, 3, 11','12')],
  (('Class survey report','የክፍል ቅኝት ሪፖርት'),('Researchers survey people to make decisions. Survey your class and report the results.','ተመራማሪዎች ውሳኔ ለመስጠት ሰዎችን ይቃኛሉ። ክፍላችሁን ቃኙና ውጤቱን ሪፖርት አድርጉ።'),[('Write one clear question with 3–4 choices.','3–4 ምርጫ ያለው አንድ ግልጽ ጥያቄ ጻፉ።'),('Tally the answers in a table.','መልሶቹን በሠንጠረዥ ቁጠሩ።'),('Draw a bar graph or pie chart.','የአሞሌ ግራፍ ወይም የክብ ቻርት ሳሉ።'),('Find the mode and present what you learned.','ድግግሞሹን ፈልጉና የተማራችሁትን አቅርቡ።')])),
 sm(('Collect, organise, describe','ሰብስቡ፣ አደራጁ፣ ግለጹ'),[('Questionnaires','መጠይቅ'),('Tables','ሠንጠረዥ'),('Pie charts','የክብ ቻርት'),('Mean, median, mode','አማካይ፣ መሃል ከፋይ፣ ድግግሞሽ')]),
 ('questionnaires, organising data in tables, pie charts, and mean, mode and median','መጠይቅ፣ መረጃን በሠንጠረዥ ማደራጀት፣ የክብ ቻርትና አማካይ፣ ድግግሞሽና መሃል ከፋይ'))
dump('math')
