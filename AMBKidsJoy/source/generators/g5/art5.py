import sys;sys.path.insert(0,'.')
from common5 import *
SN=E('Performing & Visual Arts','ሥነ ጥበባት')
def H(en,am,opts,a=0,fig=None):
    d={'q':E(en,am),'o':[o if isinstance(o,str) else E(*o) for o in opts],'a':a}
    if fig: d['fig']=fig
    return d
def U(n,title,extra,exam,nt,summ,foot):
    unit(f'g5-art-{n}','art',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 5 Performing & Visual Arts student book (ANRS), Chapter {n}: {foot[0]}.',f'በ5ኛ ክፍል የሥነ ጥበባት መጽሐፍ ምዕራፍ {n} ላይ የተመሰረተ፦ {foot[1]}።'),'(d=>[])',{},extra,exam,nt,summ)
I='var(--ink)'
def note(kind):
    head={'whole':f'<ellipse cx="40" cy="70" rx="16" ry="11" fill="none" stroke="{I}" stroke-width="5"/>',
     'half':f'<ellipse cx="34" cy="74" rx="14" ry="10" fill="none" stroke="{I}" stroke-width="5" transform="rotate(-20 34 74)"/><line x1="47" y1="72" x2="47" y2="14" stroke="{I}" stroke-width="4"/>',
     'quarter':f'<ellipse cx="34" cy="74" rx="14" ry="10" fill="{I}" transform="rotate(-20 34 74)"/><line x1="47" y1="72" x2="47" y2="14" stroke="{I}" stroke-width="4"/>',
     'eighth':f'<ellipse cx="34" cy="74" rx="14" ry="10" fill="{I}" transform="rotate(-20 34 74)"/><line x1="47" y1="72" x2="47" y2="14" stroke="{I}" stroke-width="4"/><path d="M47 14 Q66 30 62 50" fill="none" stroke="{I}" stroke-width="4"/>'}[kind]
    return f'<svg viewBox="0 0 80 100" style="width:90px;height:auto" role="img" aria-label="{kind} note">{head}</svg>'
def wheel():
    cols=['#E53935','#FB8C00','#FDD835','#43A047','#1E88E5','#8E24AA'];import math
    g=''
    for i,c in enumerate(cols):
        a0=-math.pi/2+i*math.pi/3;a1=a0+math.pi/3
        g+=f'<path d="M70 70L{70+60*math.cos(a0):.1f} {70+60*math.sin(a0):.1f}A60 60 0 0 1 {70+60*math.cos(a1):.1f} {70+60*math.sin(a1):.1f}Z" fill="{c}" stroke="#fff" stroke-width="2"/>'
    return f'<svg viewBox="0 0 140 140" style="width:140px;height:auto" role="img" aria-label="colour wheel">{g}</svg>'
LINES='<svg viewBox="0 0 260 70" style="width:260px;height:auto" role="img" aria-label="kinds of lines"><g stroke="var(--ink)" stroke-width="4" fill="none" stroke-linecap="round"><line x1="20" y1="8" x2="20" y2="60"/><line x1="40" y1="34" x2="90" y2="34"/><line x1="105" y1="60" x2="135" y2="8"/><polyline points="150,50 162,18 174,50 186,18 198,50"/><path d="M210 50 Q222 10 234 34 T256 22"/></g></svg>'

# 1 Elements of the arts
U(1,('Elements of the arts','የሥነ ጥበባት አለባውያን'),[
 quiz(('Elements of visual art','የዕይታዊ ጥበብ አለባውያን'),('The elements of visual art are line, shape, form, texture, space, value and colour. Lines carry feelings: vertical = strength, horizontal = calm, diagonal = movement, zigzag = anger or breaking, curved = slow movement.','የዕይታዊ ጥበብ አለባውያን መስመር፣ ዝርግ ቅርጽ፣ ፎርም፣ ቴክስቸር፣ ቦታ፣ ፍካትና ቀለም ናቸው። መስመሮች ስሜት ይዘዋል፦ ቋሚ = ጥንካሬ፣ አግድም = ሰላም፣ ሰያፍ = እንቅስቃሴ፣ ዚግዛግ = ቁጣ/መሰበር፣ ጎባጣ = ዝግ ያለ እንቅስቃሴ።'),[
  H('A horizontal line gives a feeling of…','አግድም መስመር የሚሰጠው ስሜት…',[('rest and calm','እረፍትና ሰላም'),('anger','ቁጣ'),('falling','መውደቅ')],fig=LINES),
  H('A zigzag line shows…','ዚግዛግ መስመር የሚያሳየው…',[('breaking, anger, ups and downs','መሰበር፣ ቁጣ፣ ውጣ ውረድ'),('peace','ሰላም'),('sleep','እንቅልፍ')]),
  H('A flat shape with length and width but no depth is…','ርዝመትና ወርድ ያለው ጥልቀት የሌለው…',[('shape (2-D)','ዝርግ ቅርጽ (ባለ 2 አውታር)'),('form (3-D)','ፎርም (ባለ 3 አውታር)'),('texture','ቴክስቸር')]),
  H('How a surface feels (rough, smooth) is…','የአንድ ገጽ ስሜት (ሻካራ፣ ለስላሳ)…',[('texture','ቴክስቸር'),('value','ፍካት'),('space','ቦታ')]),
  H('Lightness or darkness of a colour is…','የቀለም ብርሃናማነት ወይም ጨለማነት…',[('value','ፍካት (ቫሊዩ)'),('line','መስመር'),('form','ፎርም')])]),
 quiz(('The colour wheel','የቀለማት ቻርት (ቀለበታዊ ቀለማት)'),('Primary colours: red, yellow, blue. Mixing two primaries makes a secondary colour: red + yellow = orange, yellow + blue = green, blue + red = violet.','መሠረታዊ ቀለማት፦ ቀይ፣ ቢጫ፣ ሰማያዊ። ሁለት መሠረታዊ ቀለማትን መቀላቀል ሁለተኛ ደረጃ ቀለም ይሰጣል፦ ቀይ + ቢጫ = ብርቱካናማ፣ ቢጫ + ሰማያዊ = አረንጓዴ፣ ሰማያዊ + ቀይ = ወይን ጠጅ።'),[
  H('Which is a primary colour?','መሠረታዊ ቀለም የትኛው ነው?',[('blue','ሰማያዊ'),('green','አረንጓዴ'),('orange','ብርቱካናማ')],fig=wheel()),
  H('Yellow + blue = ?','ቢጫ + ሰማያዊ = ?',[('green','አረንጓዴ'),('orange','ብርቱካናማ'),('violet','ወይን ጠጅ')]),
  H('Red + yellow = ?','ቀይ + ቢጫ = ?',[('orange','ብርቱካናማ'),('green','አረንጓዴ'),('brown','ቡናማ')]),
  H('Mixing a primary with a secondary colour gives a…','መሠረታዊን ከሁለተኛ ደረጃ ቀለም ጋር መቀላቀል…ይሰጣል',[('tertiary colour','ሦስተኛ ደረጃ ቀለም'),('primary colour','መሠረታዊ ቀለም'),('no colour','ቀለም አይሰጥም')])]),
 quiz(('Notes, rests and dynamics','ኖታ፣ የእረፍት ምልክትና ተለዋዋጭ ምልክቶች'),('Whole note = 4 beats, half = 2, quarter = 1, eighth = ½. Dynamics show loudness: p (piano) soft, pp very soft, f (forte) loud, ff very loud.','ሙሉ ኖታ = 4 ምት፣ ግማሽ = 2፣ ሩብ = 1፣ ስምንተኛ = ½። ተለዋዋጭ ምልክቶች የድምፅ መጠንን ያሳያሉ፦ p (ፒያኖ) ዝቅተኛ፣ pp በጣም ዝቅተኛ፣ f (ፎርቴ) ከፍተኛ፣ ff በጣም ከፍተኛ።'),[
  H('How many beats?','ስንት ምት?',['4','2','1'],fig=note('whole')),H('How many beats?','ስንት ምት?',['2','4','1'],fig=note('half')),H('How many beats?','ስንት ምት?',['1','2','½'],fig=note('quarter')),H('How many beats?','ስንት ምት?',['½','1','2'],fig=note('eighth')),
  H('"f" (forte) means…','"f" (ፎርቴ) ማለት…',[('loud','ከፍተኛ ድምፅ'),('soft','ዝቅተኛ ድምፅ'),('fast','ፈጣን')]),
  H('"pp" (pianissimo) means…','"pp" ማለት…',[('very soft','በጣም ዝቅተኛ ድምፅ'),('very loud','በጣም ከፍተኛ ድምፅ'),('stop','ቁም')])]),
 match(('Note names','የድምፆች ስያሜ'),('The seven basic sounds have letter names and sol-fa names.','ሰባቱ መሠረታዊ ድምፆች የፊደልና የሶል-ፋ ስያሜ አላቸው።'),[[('C','Do'),('D','Re'),('E','Mi')],[('F','Fa'),('G','Sol'),('A','La')]]),
 quiz(('Theatre and video','ቴያትርና ቪዲዮ'),('Theatre needs actors, a story (script), a stage and an audience. When filming: hold the camera steady, use good light behind the camera, and keep the subject in the frame.','ቴያትር ተዋንያን፣ ታሪክ (ድርሰት)፣ መድረክና ተመልካች ይፈልጋል። ቪዲዮ ስትቀርጹ፦ ካሜራውን አትነቅንቁ፣ ብርሃኑ ከካሜራው ጀርባ ይሁን፣ ጉዳዩን በምስሉ ውስጥ አቆዩ።'),[
  H('The people who watch a play are the…','ተውኔት የሚመለከቱ ሰዎች…',[('audience','ተመልካች'),('actors','ተዋንያን'),('script','ድርሰት')]),
  H('Ideas for a play can come from…','የተውኔት ሐሳብ ሊገኝ የሚችለው ከ…',[('daily life, stories and history','ከዕለት ኑሮ፣ ከተረትና ከታሪክ'),('nowhere','ከየትም'),('only books from abroad','ከውጭ መጻሕፍት ብቻ')]),
  H('For a clear video, the light should be…','ለጥራት ያለው ቪዲዮ ብርሃኑ…',[('behind the camera, on the subject','ከካሜራው ጀርባ፣ በጉዳዩ ላይ'),('behind the subject','ከጉዳዩ ጀርባ'),('off','የጠፋ')])])],
 [H('Which is NOT an element of visual art?','የዕይታዊ ጥበብ አለባ ያልሆነው?',[('rhythm of a drum','የከበሮ ምት'),('line','መስመር'),('colour','ቀለም')]),H('Blue + red = ?','ሰማያዊ + ቀይ = ?',[('violet','ወይን ጠጅ'),('green','አረንጓዴ'),('yellow','ቢጫ')]),
  H('A half note lasts…','ግማሽ ኖታ…ይቆያል',[('2 beats','2 ምት'),('4 beats','4 ምት'),('1 beat','1 ምት')]),H('"Sol" is the note…','"ሶል" የሚለው ድምፅ…',['G','C','E']),H('A vertical line suggests…','ቋሚ መስመር የሚጠቁመው…',[('strength and dignity','ጥንካሬና ክብር'),('sleep','እንቅልፍ'),('falling','መውደቅ')])],
 notes(('Art is built from elements: lines, shapes, colours in pictures; notes and dynamics in music; actors, story and audience in theatre.','ጥበብ ከአለባውያን ይገነባል፦ በስዕል መስመር፣ ቅርጽ፣ ቀለም፤ በሙዚቃ ኖታና ተለዋዋጭ ምልክት፤ በቴያትር ተዋናይ፣ ታሪክና ተመልካች።'),
  [('Visual elements: line, shape, form, texture, space, value, colour.','የዕይታ አለባውያን፦ መስመር፣ ቅርጽ፣ ፎርም፣ ቴክስቸር፣ ቦታ፣ ፍካት፣ ቀለም።'),('Primary: red, yellow, blue; mix for secondary colours.','መሠረታዊ፦ ቀይ፣ ቢጫ፣ ሰማያዊ፤ ሲቀላቀሉ ሁለተኛ ደረጃ ቀለም።'),('Notes: whole 4, half 2, quarter 1, eighth ½; p soft, f loud.','ኖታ፦ ሙሉ 4፣ ግማሽ 2፣ ሩብ 1፣ ስምንተኛ ½፤ p ዝቅተኛ፣ f ከፍተኛ።'),('Theatre: actors, script, stage, audience.','ቴያትር፦ ተዋናይ፣ ድርሰት፣ መድረክ፣ ተመልካች።')],
  [('አለባውያን','elements','የጥበብ መሠረታዊ ክፍሎች'),('ቴክስቸር','texture','የገጽ ስሜት'),('ተለዋዋጭ ምልክት','dynamics','የድምፅ መጠን ምልክት')],('Primary colours make all the others.','መሠረታዊ ቀለማት ሌሎቹን ሁሉ ይፈጥራሉ።'),
  [(('Mix to get green','አረንጓዴ ለማግኘት ቀላቅሉ'),('yellow + blue','ቢጫ + ሰማያዊ')),(('Beats in 2 half notes','የ2 ግማሽ ኖታዎች ምት'),'4')],
  (('Colour-mixing chart for sale','የቀለም ውህደት ቻርት'),('Art teachers and shops use colour charts. Paint a neat colour wheel chart to sell or give to younger classes.','የሥነ ጥበብ መምህራንና ሱቆች የቀለም ቻርት ይጠቀማሉ። ለመሸጥ ወይም ለታናናሽ ክፍሎች ለመስጠት ጥሩ የቀለም ቀለበት ቻርት ቀልሙ።'),
   [('Draw a circle divided into 12 parts.','12 ክፍሎች ያሉት ክብ ሳሉ።'),('Paint red, yellow and blue first.','መጀመሪያ ቀይ፣ ቢጫና ሰማያዊ ቀልሙ።'),('Mix and add secondary and tertiary colours.','ቀላቅላችሁ ሁለተኛና ሦስተኛ ደረጃ ቀለሞችን ጨምሩ።'),('Label each colour in Amharic and English.','እያንዳንዱን ቀለም በአማርኛና በእንግሊዝኛ ሰይሙ።')])),
 sm(('Every art form has its building blocks','እያንዳንዱ ጥበብ የራሱ መሠረቶች አሉት'),[('Visual elements','የዕይታ አለባውያን'),('Colour wheel','የቀለም ቀለበት'),('Music elements','የሙዚቃ አለባውያን'),('Theatre and video','ቴያትርና ቪዲዮ')]),
 ('elements of visual art, the colour wheel, music notes and dynamics, theatre elements and simple video recording','የዕይታዊ ጥበብ አለባውያን፣ የቀለም ቻርት፣ የሙዚቃ ኖታና ተለዋዋጭ ምልክቶች፣ የቴያትር አካላትና ቀላል የቪዲዮ ቀረጻ'))

# 2 Showing creativity
U(2,('Showing creativity','የፈጠራ ችሎታን መግለጽ'),[
 quiz(('Reading and writing notes','ኖታ ማንበብና መጻፍ'),('Music is written on a staff of 5 lines and 4 spaces. Notes higher on the staff sound higher. A time signature like 4/4 means 4 quarter-note beats in each bar.','ሙዚቃ 5 መስመሮችና 4 ክፍተቶች ባሉት ስታፍ ላይ ይጻፋል። በስታፉ ላይ ከፍ ያሉ ኖታዎች ከፍ ያለ ድምፅ ያሰማሉ። 4/4 ማለት በእያንዳንዱ መስፈርያ 4 የሩብ ኖታ ምቶች ማለት ነው።'),[
  H('A staff has … lines.','ስታፍ … መስመሮች አሉት።',['5','4','7']),
  H('In 4/4 time, a bar holds…','በ4/4 አንድ መስፈርያ…ይይዛል',[('4 quarter-note beats','4 የሩብ ኖታ ምቶች'),('2 beats','2 ምቶች'),('8 whole notes','8 ሙሉ ኖታዎች')]),
  H('Which fills one 4/4 bar?','አንድን የ4/4 መስፈርያ የሚሞላው?',[('2 half notes','2 ግማሽ ኖታዎች'),('3 quarter notes','3 የሩብ ኖታዎች'),('1 half note','1 ግማሽ ኖታ')]),
  H('A note placed higher on the staff sounds…','በስታፉ ላይ ከፍ ብሎ የተቀመጠ ኖታ…',[('higher','ከፍ ያለ ድምፅ'),('louder only','ጮክ ያለ ብቻ'),('the same','ተመሳሳይ')])]),
 order(('Making a potato print','የድንች ህትመት መሥራት'),('Relief (block) printing: the raised part takes the ink and prints.','የሪሊፍ (ብሎክ) ህትመት፦ ከፍ ያለው ክፍል ቀለም ይይዝና ያትማል።'),('Tap the steps in order.','ደረጃዎቹን በቅደም ተከተል ንኩ።'),[(('Put in order:','በቅደም ተከተል፦'),[('cut a potato in half','ድንቹን ለሁለት ቁረጡ'),('draw a simple shape on it','ቀላል ቅርጽ ሳሉበት'),('cut away around the shape','በቅርጹ ዙሪያ ያለውን ቁረጡ'),('dip it in paint','በቀለም ንከሩት'),('press it on paper','በወረቀት ላይ ተጫኑት')])]),
 sortm(('Which art activity?','የትኛው የጥበብ ተግባር?'),('Mosaic uses small pieces; printing repeats an image; modelling shapes clay into 3-D forms; calligraphy is beautiful writing.','ሞዛይክ ትናንሽ ቁርጥራጮችን ይጠቀማል፤ ህትመት ምስልን ይደግማል፤ ሞዴሊንግ ጭቃን ባለ 3 አውታር ቅርጽ ያደርጋል፤ ኪነ-ጽሕፈት ውብ አጻጻፍ ነው።'),[('Mosaic','ሞዛይክ'),('Printing','ህትመት'),('Modelling','ሞዴሊንግ')],[(('gluing torn paper pieces into a picture','የተቀደዱ ወረቀቶችን አጣብቆ ስዕል መሥራት'),0),(('small coloured stones on a wall','በግድግዳ ላይ ትናንሽ ባለቀለም ጠጠሮች'),0),(('a soap-carved stamp','ከሳሙና የተቀረጸ ማተሚያ'),1),(('a potato print','የድንች ህትመት'),1),(('a clay pot','የሸክላ ማሰሮ'),2),(('a clay animal','የሸክላ እንስሳ'),2)]),
 quiz(('Calligraphy and theatre making','ኪነ-ጽሕፈትና ቴያትር መሥራት'),('Calligraphy starts with warm-up strokes, then single letters and numbers, then joined letters. A play grows from an idea → characters → conflict → ending.','ኪነ-ጽሕፈት በእጅ ማፍታቻ መስመሮች ይጀምራል፤ ከዚያ ነጠላ ፊደላትና ቁጥሮች፣ ከዚያ ድርብ ፊደላት። ተውኔት ከሐሳብ → ገጸ ባሕርያት → ግጭት → መቋጫ ያድጋል።'),[
  H('Calligraphy is…','ኪነ-ጽሕፈት…',[('the art of beautiful writing','የውብ አጻጻፍ ጥበብ'),('a type of dance','የዳንስ ዓይነት'),('a music note','የሙዚቃ ኖታ')]),
  H('Before writing letters, calligraphers practise…','ፊደል ከመጻፋቸው በፊት የሚለማመዱት…',[('warm-up lines and strokes','የእጅ ማፍታቻ መስመሮች'),('running','ሩጫ'),('singing','ዘፈን')]),
  H('The problem or struggle in a play is the…','በተውኔት ውስጥ ያለው ችግር ወይም ትግል…',[('conflict','ግጭት'),('audience','ተመልካች'),('stage','መድረክ')]),
  H('Clay models must be … before painting.','የሸክላ ሞዴሎች ከመቀለማቸው በፊት…አለባቸው',[('dried','መድረቅ'),('wet again','እንደገና መርጠብ'),('broken','መሰበር')])])],
 [H('A whole note fills a 4/4 bar because it lasts…','ሙሉ ኖታ የ4/4 መስፈርያ የሚሞላው … ስለሚቆይ ነው',[('4 beats','4 ምት'),('2 beats','2 ምት'),('1 beat','1 ምት')]),H('Printing with a carved block is…','በተቀረጸ ብሎክ ማተም…',[('relief printing','የሪሊፍ ህትመት'),('modelling','ሞዴሊንግ'),('calligraphy','ኪነ-ጽሕፈት')]),
  H('A picture made of small pieces is a…','ከትናንሽ ቁርጥራጮች የተሠራ ስዕል…',[('mosaic','ሞዛይክ'),('sculpture','ቅርጻ ቅርጽ'),('poster','ፖስተር')]),H('Modelling uses…','ሞዴሊንግ የሚጠቀመው…',[('clay','ጭቃ (ሸክላ)'),('ink only','ቀለም ብቻ'),('a drum','ከበሮ')])],
 notes(('We show creativity by writing music, beautiful writing, mosaics, printing, clay modelling and making plays.','ፈጠራን ሙዚቃ በመጻፍ፣ በውብ አጻጻፍ፣ በሞዛይክ፣ በህትመት፣ በሸክላ ሞዴሊንግና ተውኔት በመሥራት እናሳያለን።'),
  [('Staff: 5 lines, 4 spaces; 4/4 = 4 beats per bar.','ስታፍ፦ 5 መስመሮች፣ 4 ክፍተቶች፤ 4/4 = በመስፈርያ 4 ምት።'),('Calligraphy: strokes → single letters → joined letters.','ኪነ-ጽሕፈት፦ ማፍታቻ → ነጠላ ፊደል → ድርብ ፊደል።'),('Mosaic and relief printing (potato, soap).','ሞዛይክና የሪሊፍ ህትመት (ድንች፣ ሳሙና)።'),('Clay modelling and making a play: idea, characters, conflict, ending.','የሸክላ ሞዴሊንግና ተውኔት፦ ሐሳብ፣ ገጸ ባሕርይ፣ ግጭት፣ መቋጫ።')],
  [('ኪነ-ጽሕፈት','calligraphy','ውብ አጻጻፍ'),('ሞዛይክ','mosaic','በቁርጥራጭ የሚሠራ ስዕል'),('ህትመት','printing','ምስልን ደጋግሞ ማተም'),('ሞዴሊንግ','modelling','በጭቃ ቅርጽ መሥራት')],('Make it, print it, perform it!','ሥሩት፣ አትሙት፣ አቅርቡት!'),
  [(('How many beats in a quarter + a half note?','ሩብ + ግማሽ ኖታ ስንት ምት?'),'3'),(('What carves into a stamp easily at home?','በቤት በቀላሉ ማተሚያ የሚቀረጸው?'),('a potato or soap','ድንች ወይም ሳሙና'))],
  (('Printed gift wrap','የታተመ የስጦታ መጠቅለያ'),('Designers sell printed paper and cloth. Print gift-wrap paper with potato stamps and sell it before holidays.','ዲዛይነሮች የታተመ ወረቀትና ጨርቅ ይሸጣሉ። በድንች ማተሚያ የስጦታ መጠቅለያ ወረቀት አትሙና ከበዓላት በፊት ሽጡ።'),
   [('Design 2 small shapes (star, cross, flower).','2 ትናንሽ ቅርጾች ንደፉ (ኮከብ፣ መስቀል፣ አበባ)።'),('Carve them into potatoes.','በድንች ላይ ቅረጹ።'),('Print a repeating pattern on large paper.','በትልቅ ወረቀት ላይ ተደጋጋሚ ንድፍ አትሙ።'),('Fold and sell or give as gifts.','አጥፉና ሽጡ ወይም በስጦታ ስጡ።')])),
 sm(('Creativity: write, print, model, perform','ፈጠራ፦ መጻፍ፣ ማተም፣ መቅረጽ፣ ማቅረብ'),[('Music notation','የሙዚቃ ጽሑፍ'),('Calligraphy','ኪነ-ጽሕፈት'),('Mosaic and printing','ሞዛይክና ህትመት'),('Modelling and theatre','ሞዴሊንግና ቴያትር')]),
 ('writing and reading notes, calligraphy, paper mosaic and relief printing, clay modelling and theatre making','ኖታ መጻፍና ማንበብ፣ ኪነ-ጽሕፈት፣ የወረቀት ሞዛይክና የሪሊፍ ህትመት፣ የጭቃ ሞዴሊንግና ቴያትር መሥራት'))

# 3 History and culture
U(3,('History and culture','ታሪክና ባህል'),[
 quiz(('Cave art','የዋሻ ውስጥ ጥበብ'),('Long before writing, people painted animals on cave walls. Famous caves: Lascaux (south-west France) and Altamira (Spain), about 40,000 years ago; in Ethiopia, Porc-Epic and Laga Oda near Dire Dawa.','ጽሕፈት ከመጀመሩ ብዙ ዘመን በፊት ሰዎች በዋሻ ግድግዳ ላይ እንስሳትን ይሥሉ ነበር። ታዋቂ ዋሻዎች፦ ላስኮ (ደቡብ ምዕራብ ፈረንሳይ) እና አልታሚራ (ስፔን)፣ ከ40,000 ዓመት ገደማ በፊት፤ በኢትዮጵያ በድሬዳዋ አቅራቢያ ፖርክ ኤፒክና ለጋ ኦዳ።'),[
  H('Cave paintings mostly show…','የዋሻ ስዕሎች በብዛት የሚያሳዩት…',[('animals','እንስሳትን'),('cars','መኪናዎችን'),('computers','ኮምፒውተሮችን')]),
  H('Lascaux cave is in…','የላስኮ ዋሻ የሚገኘው በ…',[('France','ፈረንሳይ'),('Ethiopia','ኢትዮጵያ'),('Kenya','ኬንያ')]),
  H('Ethiopian cave art sites Porc-Epic and Laga Oda are near…','የኢትዮጵያ የዋሻ ጥበብ ቦታዎች ፖርክ ኤፒክና ለጋ ኦዳ የሚገኙት በ… አቅራቢያ ነው',[('Dire Dawa','ድሬዳዋ'),('Gondar','ጎንደር'),('Bahir Dar','ባሕር ዳር')]),
  H('Cave paintings were made…','የዋሻ ስዕሎች የተሠሩት…',[('before writing began','ጽሕፈት ከመጀመሩ በፊት'),('last year','ባለፈው ዓመት'),('by computers','በኮምፒውተር')])]),
 match(('Ethiopian traditional instruments','የኢትዮጵያ ባህላዊ የሙዚቃ መሣሪያዎች'),('Traditional instruments are grouped as string, wind and percussion.','ባህላዊ የሙዚቃ መሣሪያዎች በክር፣ በትንፋሽና በምት ይመደባሉ።'),[[(('masinko','ማሲንቆ'),('one-string, played with a bow','ባለ አንድ ክር፣ በቀስት የሚጫወቱት')),(('kirar','ክራር'),('five or six strings, plucked','ባለ 5 ወይም 6 ክር፣ የሚገረፍ')),(('washint','ዋሽንት'),('bamboo flute','የቀርከሃ ዋሽንት'))],[(('kebero','ከበሮ'),('drum','የምት መሣሪያ')),(('begena','በገና'),('large lyre for spiritual songs','ለመንፈሳዊ ዜማ ትልቅ ባለክር')),(('embilta','እምቢልታ'),('long wind pipe','ረጅም የትንፋሽ መሣሪያ'))]]),
 sortm(('String, wind or percussion?','የክር፣ የትንፋሽ ወይስ የምት?'),('String instruments use strings; wind instruments use breath; percussion is struck or shaken.','የክር መሣሪያዎች ክር፣ የትንፋሽ መሣሪያዎች ትንፋሽ ይጠቀማሉ፤ የምት መሣሪያዎች ይመታሉ ወይም ይነቀነቃሉ።'),[('String','ክር'),('Wind','ትንፋሽ'),('Percussion','ምት')],[(('kirar','ክራር'),0),(('masinko','ማሲንቆ'),0),(('washint','ዋሽንት'),1),(('embilta','እምቢልታ'),1),(('kebero','ከበሮ'),2),(('tsenatsel (sistrum)','ጸናጽል'),2)]),
 quiz(('Traditional visual arts and crafts','ባህላዊ የዕይታ ጥበብና የእጅ ሥራ'),('Ethiopia has a long tradition of church painting, weaving, basketry (mesob), pottery, metalwork and wood carving.','ኢትዮጵያ የቤተ ክርስቲያን ስዕል፣ ሽመና፣ የሞሰብ ሥራ፣ የሸክላ ሥራ፣ የብረታ ብረትና የእንጨት ቅርጻ ቅርጽ ረጅም ባህል አላት።'),[
  H('A mesob is made by…','ሞሰብ የሚሠራው በ…',[('basket weaving','የሰፌድ/የቅርጫት ሥራ'),('metal casting','ብረት ቀልጦ'),('painting only','በስዕል ብቻ')]),
  H('Handwoven cotton cloth with coloured borders is…','ባለቀለም ጥለት ያለው በእጅ የተሸመነ የጥጥ ልብስ…',[('tibeb (ጥበብ)','ጥበብ'),('plastic','ፕላስቲክ'),('leather only','ቆዳ ብቻ')]),
  H('Traditional music and dance express a people\'s…','ባህላዊ ሙዚቃና ውዝዋዜ የሕዝብን … ይገልጻሉ',[('culture and history','ባህልና ታሪክ'),('car brands','የመኪና ምርቶች'),('weather only','የአየር ሁኔታ ብቻ')])])],
 [H('Altamira cave is in…','የአልታሚራ ዋሻ የሚገኘው በ…',[('Spain','ስፔን'),('Egypt','ግብፅ'),('Ethiopia','ኢትዮጵያ')]),H('The kirar is a … instrument.','ክራር … መሣሪያ ነው',[('string','የክር'),('wind','የትንፋሽ'),('percussion','የምት')]),
  H('The washint is a…','ዋሽንት…',[('flute','የትንፋሽ መሣሪያ (ዋሽንት)'),('drum','ከበሮ'),('lyre','ባለክር')]),H('Cave art is evidence that art began…','የዋሻ ጥበብ ጥበብ መጀመሩን የሚያሳየው…',[('very long ago','በጣም ቀደም ብሎ'),('in 2000','በ2000'),('with phones','በስልክ')])],
 notes(('Art has a long history, from cave paintings to Ethiopia\'s rich traditional music, instruments and crafts.','ጥበብ ከዋሻ ስዕሎች እስከ ኢትዮጵያ ባለጸጋ ባህላዊ ሙዚቃ፣ መሣሪያዎችና የእጅ ሥራዎች ረጅም ታሪክ አለው።'),
  [('Cave art: Lascaux, Altamira; in Ethiopia Porc-Epic and Laga Oda.','የዋሻ ጥበብ፦ ላስኮ፣ አልታሚራ፤ በኢትዮጵያ ፖርክ ኤፒክና ለጋ ኦዳ።'),('Instruments: string (kirar, masinko, begena), wind (washint), percussion (kebero).','መሣሪያዎች፦ ክር (ክራር፣ ማሲንቆ፣ በገና)፣ ትንፋሽ (ዋሽንት)፣ ምት (ከበሮ)።'),('Crafts: weaving, mesob, pottery, carving.','የእጅ ሥራ፦ ሽመና፣ ሞሰብ፣ ሸክላ፣ ቅርጻ ቅርጽ።'),('Traditional music and dance carry culture.','ባህላዊ ሙዚቃና ውዝዋዜ ባህልን ይሸከማሉ።')],
  [('የዋሻ ጥበብ','cave art','በዋሻ ግድግዳ ላይ የተሠራ ስዕል'),('ባህላዊ ሙዚቃ','traditional music','ከትውልድ ወደ ትውልድ የተላለፈ ሙዚቃ'),('የእጅ ሥራ','handicraft','በእጅ የሚሠራ ጥበብ')],('Our ancestors were artists too.','አባቶቻችንም ጠቢባን ነበሩ።'),
  [(('Name 2 Ethiopian string instruments','2 የኢትዮጵያ የክር መሣሪያዎችን ጥቀሱ'),('kirar, masinko','ክራር፣ ማሲንቆ')),(('Where is Laga Oda?','ለጋ ኦዳ የት ነው?'),('near Dire Dawa','በድሬዳዋ አቅራቢያ'))],
  (('Instrument maker','የሙዚቃ መሣሪያ ሠሪ'),('Instrument makers earn by building and repairing instruments. Make a simple shaker or a one-string box instrument.','የሙዚቃ መሣሪያ ሠሪዎች መሣሪያ በመሥራትና በመጠገን ገቢ ያገኛሉ። ቀላል የሚነቀነቅ መሣሪያ ወይም ባለ አንድ ክር የሳጥን መሣሪያ ሥሩ።'),
   [('For a shaker: fill a bottle with seeds.','ለሚነቀነቅ መሣሪያ፦ ጠርሙስን በዘር ሙሉ።'),('For a string box: stretch a rubber band over a box.','ለክር ሳጥን፦ በሳጥን ላይ ላስቲክ ዘርጉ።'),('Decorate it with traditional patterns.','በባህላዊ ንድፍ አስጊጡት።'),('Play a rhythm for the class.','ለክፍሉ ምት ተጫወቱ።')])),
 sm(('Art has deep roots in history and culture','ጥበብ በታሪክና በባህል ጥልቅ ሥር አለው'),[('Cave art','የዋሻ ጥበብ'),('Instruments','የሙዚቃ መሣሪያዎች'),('Traditional music and dance','ባህላዊ ሙዚቃና ውዝዋዜ'),('Crafts','የእጅ ሥራዎች')]),
 ('traditional music and dances, cave art, and the history of Ethiopian traditional arts and crafts','ባህላዊ ሙዚቃና ውዝዋዜዎች፣ የዋሻ ውስጥ ጥበብና የኢትዮጵያ ባህላዊ ጥበባትና የእጅ ሥራዎች ታሪክ'))

# 4 Presenting art
U(4,('Presenting art','ጥበብን ማስተዋወቅ'),[
 quiz(('Fukera, shilela and songs','ፉከራ፣ ሽለላና ዘፈን'),('Fukera and shilela (qererto) are traditional chants of courage; songs express love, work, joy and sorrow. Through them people show shared and different ideas.','ፉከራና ሽለላ (ቀረርቶ) የጀግንነት ባህላዊ ቃል ግጥሞች ናቸው፤ ዘፈኖች ፍቅርን፣ ሥራን፣ ደስታንና ኀዘንን ይገልጻሉ። በእነዚህ ሰዎች የጋራና የተለያዩ ሐሳቦችን ያሳያሉ።'),[
  H('Fukera is mainly about…','ፉከራ በዋናነት ስለ…',[('courage and heroism','ጀግንነትና ወኔ'),('cooking','ምግብ ማብሰል'),('sleeping','እንቅልፍ')]),
  H('Shilela is also called…','ሽለላ በሌላ ስሙ…',[('qererto','ቀረርቶ'),('eskista','እስክስታ'),('mesob','ሞሰብ')]),
  H('Work songs help people…','የሥራ ዘፈኖች ሰዎችን የሚረዱት…',[('work together with energy','በብርታት በጋራ እንዲሠሩ'),('stop working','ሥራ እንዲያቆሙ'),('fight','እንዲጣሉ')])]),
 sortm(('Visual art or handicraft?','የምስል ጥበብ ወይስ የእጅ ሥራ?'),('Visual arts are made mainly to be seen and enjoyed (painting, drawing). Handicrafts are useful objects made by hand (mesob, pots, baskets).','የምስል ጥበባት በዋናነት እንዲታዩና እንዲደነቁ ይሠራሉ (ቅብ፣ ስዕል)። የእጅ ሥራዎች በእጅ የሚሠሩ ጠቃሚ ዕቃዎች ናቸው (ሞሰብ፣ ማሰሮ፣ ቅርጫት)።'),[('Visual art','የምስል ጥበብ'),('Handicraft','የእጅ ሥራ')],[(('a painting of Lake Tana','የጣና ሐይቅ ቅብ'),0),(('a portrait drawing','የሰው ምስል ስዕል'),0),(('a poster','ፖስተር'),0),(('a mesob','ሞሰብ'),1),(('a clay jebena','የሸክላ ጀበና'),1),(('a woven basket','የተሰፋ ቅርጫት'),1)]),
 quiz(('Why arts matter to the community','ጥበባት ለማኅበረሰቡ ያላቸው ጠቀሜታ'),('Arts and crafts give income, keep culture alive, attract tourists, teach messages and bring people together.','ጥበባትና የእጅ ሥራዎች ገቢ ያስገኛሉ፣ ባህልን ይጠብቃሉ፣ ቱሪስቶችን ይስባሉ፣ መልእክት ያስተምራሉ፣ ሰዎችን ያቀራርባሉ።'),[
  H('Selling handmade baskets to tourists brings…','በእጅ የተሠሩ ቅርጫቶችን ለቱሪስቶች መሸጥ … ያመጣል',[('income','ገቢ'),('pollution','ብክለት'),('nothing','ምንም')]),
  H('A play about clean water mainly…','ስለ ንጹሕ ውኃ የሚቀርብ ተውኔት በዋናነት…',[('teaches a message','መልእክት ያስተምራል'),('wastes time','ጊዜ ያባክናል'),('hides facts','እውነትን ይደብቃል')]),
  H('Discussing a play\'s different ideas teaches us…','በተውኔት የተለያዩ ሐሳቦች ላይ መወያየት የሚያስተምረን…',[('to respect different views','የተለያዩ ሐሳቦችን ማክበር'),('to shout','መጮህ'),('to agree always','ሁልጊዜ መስማማት')])])],
 [H('Qererto is another name for…','ቀረርቶ የ… ሌላ ስም ነው',[('shilela','ሽለላ'),('mesob','ሞሰብ'),('kirar','ክራር')]),H('A clay jebena is a…','የሸክላ ጀበና…',[('handicraft','የእጅ ሥራ'),('cave painting','የዋሻ ስዕል'),('song','ዘፈን')]),
  H('Arts help tourism because they…','ጥበባት ቱሪዝምን የሚረዱት…',[('attract visitors','ጎብኚዎችን ስለሚስቡ'),('stop visitors','ጎብኚዎችን ስለሚከለክሉ'),('cost nothing','ምንም ስለማያስወጡ')]),H('Songs can express…','ዘፈኖች … ሊገልጹ ይችላሉ',[('love, work, joy and sorrow','ፍቅር፣ ሥራ፣ ደስታና ኀዘን'),('only numbers','ቁጥሮችን ብቻ'),('nothing','ምንም')])],
 notes(('We present ideas through fukera, songs, theatre, visual arts and crafts, which also serve the community.','ሐሳብን በፉከራ፣ በዘፈን፣ በቴያትር፣ በምስል ጥበብና በእጅ ሥራ እናቀርባለን፤ እነዚህም ማኅበረሰቡን ያገለግላሉ።'),
  [('Fukera and shilela (qererto) express courage.','ፉከራና ሽለላ (ቀረርቶ) ጀግንነትን ይገልጻሉ።'),('Theatre lets us discuss shared and different ideas.','ቴያትር በጋራና በተለያዩ ሐሳቦች ላይ እንድንወያይ ያስችላል።'),('Visual art is for seeing; handicrafts are useful objects.','የምስል ጥበብ ለእይታ፤ የእጅ ሥራ ጠቃሚ ዕቃ ነው።'),('Arts give income, culture, tourism and messages.','ጥበባት ገቢ፣ ባህል፣ ቱሪዝምና መልእክት ይሰጣሉ።')],
  [('ፉከራ','fukera','የጀግንነት ቃል ግጥም'),('የእጅ ሥራ','handicraft','በእጅ የሚሠራ ዕቃ'),('ማኅበረሰብ','community','በአንድ አካባቢ የሚኖሩ ሰዎች')],('Art speaks when words are not enough.','ቃል ሲያንስ ጥበብ ይናገራል።'),
  [(('Give one use of handicrafts','የእጅ ሥራ አንድ ጠቀሜታ'),('income','ገቢ')),(('What does fukera express?','ፉከራ ምን ይገልጻል?'),('courage','ጀግንነት'))],
  (('Craft market stall','የእጅ ሥራ መሸጫ'),('Artisans sell crafts at markets and to tourists. Plan a school craft stall with prices and a short story card for each item.','የእጅ ጥበብ ባለሙያዎች በገበያና ለቱሪስቶች ይሸጣሉ። ዋጋና ለእያንዳንዱ ዕቃ አጭር ታሪክ ካርድ ያለው የትምህርት ቤት የእጅ ሥራ መሸጫ አቅዱ።'),
   [('Make 3 small crafts (bookmark, mini mesob, clay bead).','3 ትናንሽ የእጅ ሥራዎች ሥሩ (መጽሐፍ ምልክት፣ ትንሽ ሞሰብ፣ የሸክላ ዶቃ)።'),('Write a card telling where the craft comes from.','የእጅ ሥራው ከየት እንደመጣ የሚነግር ካርድ ጻፉ።'),('Set fair prices.','ተገቢ ዋጋ አውጡ።'),('Sell at a school event and count the profit.','በትምህርት ቤት ዝግጅት ሽጡና ትርፉን ቁጠሩ።')])),
 sm(('Present ideas through art; art serves the community','ሐሳብን በጥበብ አቅርቡ፤ ጥበብ ማኅበረሰብን ያገለግላል'),[('Fukera and songs','ፉከራና ዘፈን'),('Theatre discussion','የቴያትር ውይይት'),('Visual arts and crafts','የምስል ጥበብና የእጅ ሥራ'),('Value to community','ለማኅበረሰብ ያለው ጠቀሜታ')]),
 ('expressing ideas through art (fukera, shilela, songs and theatre) and the value of visual arts and crafts to the community','ሐሳብን በጥበብ መግለጽ (ፉከራ፣ ሽለላ፣ ዘፈንና ቴያትር) እና የምስል ጥበብና የእጅ ሥራዎች ለማኅበረሰቡ ያላቸው ጠቀሜታ'))

# 5 Arts with other subjects
U(5,('Arts, other subjects and current issues','ሥነ ጥበባትን ከሌሎች ትምህርቶችና ወቅታዊ ጉዳዮች ጋር ማስተሳሰር'),[
 quiz(('Learning other subjects through art','ሌሎች ትምህርቶችን በጥበብ መማር'),('Songs help memory, drawings explain science, drama brings history alive, and patterns teach maths.','ዘፈኖች ለማስታወስ፣ ስዕሎች ሳይንስን ለማብራራት፣ ድራማ ታሪክን ሕያው ለማድረግ፣ ንድፎች ሒሳብን ለማስተማር ይረዳሉ።'),[
  H('Drawing the parts of a plant helps you learn…','የተክል ክፍሎችን መሳል የሚረዳው…ለመማር',[('science','ሳይንስ'),('cooking only','ምግብ ማብሰል ብቻ'),('nothing','ምንም')]),
  H('A song with the times tables helps…','የማባዛት ሰንጠረዥ ያለው ዘፈን የሚረዳው…',[('memory in maths','በሒሳብ ለማስታወስ'),('sleep','እንቅልፍ'),('running','ሩጫ')]),
  H('Acting out the Battle of Adwa helps you learn…','የዓድዋን ጦርነት በድራማ ማቅረብ የሚረዳው…ለመማር',[('history','ታሪክ'),('swimming','ዋና'),('music notes only','የሙዚቃ ኖታ ብቻ')])]),
 quiz(('Logos','አርማ'),('A logo is a simple symbol that identifies an organisation. Good logos are simple, memorable, meaningful and work in one colour.','አርማ ድርጅትን የሚለይ ቀላል ምልክት ነው። ጥሩ አርማ ቀላል፣ የሚታወስ፣ ትርጉም ያለውና በአንድ ቀለምም የሚሠራ ነው።'),[
  H('A logo should be…','አርማ … መሆን አለበት',[('simple and easy to remember','ቀላልና የሚታወስ'),('very crowded','በጣም የተጨናነቀ'),('without meaning','ትርጉም የሌለው')]),
  H('A school logo might show…','የትምህርት ቤት አርማ ሊያሳይ የሚችለው…',[('a book and a star','መጽሐፍና ኮከብ'),('a random scribble','የዘፈቀደ ሞነጫጨር'),('a phone number only','ስልክ ቁጥር ብቻ')])]),
 order(('Making a poster','ፖስተር መሥራት'),('A poster shares one message quickly: a big heading, a strong picture and a short slogan.','ፖስተር አንድን መልእክት በፍጥነት ያስተላልፋል፦ ትልቅ ርዕስ፣ ጠንካራ ስዕልና አጭር መፈክር።'),('Tap the steps in order.','ደረጃዎቹን በቅደም ተከተል ንኩ።'),[(('Put in order:','በቅደም ተከተል፦'),[('choose one message','አንድ መልእክት ምረጡ'),('sketch the layout','ንድፉን ሳሉ'),('write a big, clear heading','ትልቅና ግልጽ ርዕስ ጻፉ'),('add a strong picture','ጠንካራ ስዕል ጨምሩ'),('colour and check spelling','ቀልሙና ፊደል አረጋግጡ')])]),
 sortm(('Current issues art can teach','ጥበብ ሊያስተምራቸው የሚችሉ ወቅታዊ ጉዳዮች'),('Art can raise awareness about health, environment, peace and safety.','ጥበብ ስለ ጤና፣ አካባቢ፣ ሰላምና ደህንነት ግንዛቤ ማስጨበጥ ይችላል።'),[('Health','ጤና'),('Environment','አካባቢ'),('Peace and safety','ሰላምና ደህንነት')],[(('a song about washing hands','ስለ እጅ መታጠብ ዘፈን'),0),(('a drama about HIV prevention','ስለ ኤች አይ ቪ መከላከል ድራማ'),0),(('a poster: plant a tree','ፖስተር፦ ዛፍ ትከሉ'),1),(('a mural against plastic waste','የፕላስቲክ ቆሻሻን የሚቃወም የግድግዳ ስዕል'),1),(('a play about solving conflict','ግጭትን ስለመፍታት ተውኔት'),2),(('a road-safety poster','የመንገድ ደህንነት ፖስተር'),2)])],
 [H('A logo identifies…','አርማ የሚለየው…',[('an organisation','ድርጅትን'),('the weather','የአየር ሁኔታን'),('a river','ወንዝን')]),H('The first step in making a poster is to…','ፖስተር የመሥራት የመጀመሪያው ደረጃ…',[('choose one message','አንድ መልእክት መምረጥ'),('colour it','መቀለም'),('sell it','መሸጥ')]),
  H('Art can raise awareness about…','ጥበብ ግንዛቤ ሊያስጨብጥ የሚችለው ስለ…',[('health and the environment','ጤናና አካባቢ'),('nothing','ምንም'),('only money','ገንዘብ ብቻ')]),H('A good poster heading is…','ጥሩ የፖስተር ርዕስ…',[('big and clear','ትልቅና ግልጽ'),('tiny','በጣም ትንሽ'),('hidden','የተደበቀ')])],
 notes(('Art connects with every subject and helps solve current problems through songs, drama, logos and posters.','ጥበብ ከእያንዳንዱ ትምህርት ጋር ይገናኛል፤ በዘፈን፣ በድራማ፣ በአርማና በፖስተር ወቅታዊ ችግሮችን ለመፍታት ይረዳል።'),
  [('Songs, drawings and drama help us learn other subjects.','ዘፈን፣ ስዕልና ድራማ ሌሎች ትምህርቶችን እንድንማር ይረዱናል።'),('Art raises awareness on health, environment and peace.','ጥበብ በጤና፣ በአካባቢና በሰላም ላይ ግንዛቤ ያስጨብጣል።'),('Logo: simple, memorable symbol of an organisation.','አርማ፦ ቀላልና የሚታወስ የድርጅት ምልክት።'),('Poster: one message, big heading, strong picture, slogan.','ፖስተር፦ አንድ መልእክት፣ ትልቅ ርዕስ፣ ጠንካራ ስዕል፣ መፈክር።')],
  [('አርማ','logo','የድርጅት መለያ ምልክት'),('ፖስተር','poster','መልእክት የሚያስተላልፍ ትልቅ ስዕላዊ ጽሑፍ'),('መፈክር','slogan','አጭር የሚታወስ አባባል')],('One poster, one message.','አንድ ፖስተር፣ አንድ መልእክት።'),
  [(('Name 3 qualities of a good logo','የጥሩ አርማ 3 ባሕርያት'),('simple, memorable, meaningful','ቀላል፣ የሚታወስ፣ ትርጉም ያለው')),(('Give a current issue art can teach','ጥበብ ሊያስተምረው የሚችል ወቅታዊ ጉዳይ'),('saving water','ውኃ መቆጠብ'))],
  (('Logo design service','የአርማ ዲዛይን አገልግሎት'),('Graphic designers earn money designing logos. Design a logo for a small local business or your class club.','ግራፊክ ዲዛይነሮች አርማ በመንደፍ ገቢ ያገኛሉ። ለአንድ ትንሽ የአካባቢ ንግድ ወይም ለክፍላችሁ ክበብ አርማ ንደፉ።'),
   [('Interview the owner: what do they sell? what do they value?','ባለቤቱን ጠይቁ፦ ምን ይሸጣሉ? ምን ያከብራሉ?'),('Sketch 3 simple ideas.','3 ቀላል ሐሳቦችን ሳሉ።'),('Choose the best and draw it neatly in 2 colours.','ምርጡን መርጣችሁ በ2 ቀለም በጥራት ሳሉ።'),('Present it and ask for feedback.','አቅርቡና አስተያየት ጠይቁ።')])),
 sm(('Art links subjects and serves society','ጥበብ ትምህርቶችን ያገናኛል፣ ማኅበረሰብን ያገለግላል'),[('Learning through art','በጥበብ መማር'),('Current issues','ወቅታዊ ጉዳዮች'),('Logos','አርማ'),('Posters','ፖስተር')]),
 ('connecting the arts with other subjects, teaching current issues through art, and making logos and posters','ሥነ ጥበባትን ከሌሎች ትምህርቶች ጋር ማስተሳሰር፣ ወቅታዊ ጉዳዮችን በጥበብ ማስተማርና አርማና ፖስተር መሥራት'))
dump('art')
