import sys;sys.path.insert(0,'.')
from common6 import *
SN=E('Performing & Visual Arts','ሥነ ጥበባት')
def H(en,am,opts,a=0,fig=None):
    d={'q':E(en,am),'o':[o if isinstance(o,str) else E(*o) for o in opts],'a':a}
    if fig: d['fig']=fig
    return d
def U(n,title,extra,exam,nt,summ,foot):
    unit(f'g6-art-{n}','art',SN,E(f'Chapter {n}',f'ምዕራፍ {n}'),E(*title),E(f'Built on the Grade 6 Performing & Visual Arts student book (ANRS), Chapter {n}: {foot[0]}.',f'በ6ኛ ክፍል የሥነ ጥበባት መጽሐፍ ምዕራፍ {n} ላይ የተመሰረተ፦ {foot[1]}።'),'(d=>[])',{},extra,exam,nt,summ)
I='var(--ink)'
def scale(notes,halves,label):
    g=''
    for i,nm in enumerate(notes):
        x=8+i*36
        g+=f'<rect x="{x}" y="30" width="32" height="44" rx="5" fill="var(--surface)" stroke="{I}" stroke-width="2"/><text x="{x+16}" y="58" text-anchor="middle" font-size="15" font-weight="800" fill="{I}">{nm}</text><text x="{x+16}" y="92" text-anchor="middle" font-size="11" fill="{I}">{i+1}</text>'
    for h in halves:
        x=8+(h-1)*36+16;g+=f'<path d="M{x} 28 Q{x+18} 6 {x+36} 28" fill="none" stroke="var(--accent)" stroke-width="3"/><text x="{x+18}" y="14" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">½</text>'
    return f'<svg viewBox="0 0 300 100" style="width:100%;max-width:310px;height:auto" role="img" aria-label="{label}">{g}</svg>'
CMAJ=scale(['C','D','E','F','G','A','B','C'],[3,7],'C major scale')
AMIN=scale(['A','B','C','D','E','F','G','A'],[2,5],'A natural minor scale')
def note(kind):
    head={'whole':f'<ellipse cx="40" cy="70" rx="16" ry="11" fill="none" stroke="{I}" stroke-width="5"/>',
     'half':f'<ellipse cx="34" cy="74" rx="14" ry="10" fill="none" stroke="{I}" stroke-width="5" transform="rotate(-20 34 74)"/><line x1="47" y1="72" x2="47" y2="14" stroke="{I}" stroke-width="4"/>',
     'quarter':f'<ellipse cx="34" cy="74" rx="14" ry="10" fill="{I}" transform="rotate(-20 34 74)"/><line x1="47" y1="72" x2="47" y2="14" stroke="{I}" stroke-width="4"/>',
     'eighth':f'<ellipse cx="34" cy="74" rx="14" ry="10" fill="{I}" transform="rotate(-20 34 74)"/><line x1="47" y1="72" x2="47" y2="14" stroke="{I}" stroke-width="4"/><path d="M47 14 Q66 30 62 50" fill="none" stroke="{I}" stroke-width="4"/>'}[kind]
    return f'<svg viewBox="0 0 80 100" style="width:80px;height:auto" role="img" aria-label="{kind} note">{head}</svg>'

# 1 Elements of the arts
U(1,('Elements of the arts','የሥነ ጥበባት ምንነት'),[
 quiz(('Major and minor scales','አብይና ንዑስ ቅኝቶች'),('A major scale has 8 notes with half steps only between notes 3–4 and 7–8; all the others are whole steps. The 8th note is the octave. C major uses no sharps or flats. A natural minor scale has half steps between 2–3 and 5–6 and sounds softer; count back three notes from the major (C major → A minor).','አብይ ቅኝት 8 ድምፆች አሉት፤ ግማሽ ርቀት ያለው ከ3 ወደ 4 እና ከ7 ወደ 8 ብቻ ነው፤ ሌሎቹ ሙሉ ርቀት ናቸው። 8ኛው ድምፅ ኦክታቭ ይባላል። የሲ አብይ ቅኝት ሻርፕም ፍላትም የለውም። ናቹራል ንዑስ ቅኝት ከ2 ወደ 3 እና ከ5 ወደ 6 ግማሽ ርቀት አለው፤ ለስለስ ያለ ቃና አለው፤ ከአብዩ ወደ ኋላ ሦስት ድምፅ በመቁጠር ይገኛል (ሲ አብይ → ኤ ንዑስ)።'),[
  H('In a major scale, the half steps are between…','በአብይ ቅኝት ግማሽ ርቀቶች ያሉት…',[('3–4 and 7–8','3–4 እና 7–8'),('1–2 and 5–6','1–2 እና 5–6'),('2–3 and 5–6','2–3 እና 5–6')],fig=CMAJ),
  H('In a natural minor scale, the half steps are between…','በናቹራል ንዑስ ቅኝት ግማሽ ርቀቶች ያሉት…',[('2–3 and 5–6','2–3 እና 5–6'),('3–4 and 7–8','3–4 እና 7–8'),('4–5 and 6–7','4–5 እና 6–7')],fig=AMIN),
  H('The 8th note of a scale is called the…','የቅኝት 8ኛው ድምፅ … ይባላል',[('octave','ኦክታቭ'),('rest','እረፍት'),('chord','ኮርድ')]),
  H('The relative minor of C major is…','የሲ አብይ ቅኝት ተዛማጅ ንዑስ…',[('A minor','ኤ ንዑስ'),('G minor','ጂ ንዑስ'),('F minor','ኤፍ ንዑስ')]),
  H('Minor scales usually sound…','ንዑስ ቅኝቶች ብዙ ጊዜ … ቃና አላቸው',[('soft and gentle','ለስላሳ'),('very loud only','በጣም ኃይለኛ ብቻ'),('silent','ዝምታ')])]),
 quiz(('Pitch and key signatures','የድምፅ ቃናና የቁልፍ አመልካቾች'),('Pitch is how high or low a sound is. A sharp (#) raises a note by a half step; a flat (♭) lowers it by a half step. They are written after the clef as the key signature. G major has one sharp: F#.','የድምፅ ቃና አንድ ድምፅ ምን ያህል ከፍ ወይም ዝቅ እንደሚል ያሳያል። ሻርፕ (#) ድምፅን በግማሽ ርቀት ከፍ ያደርጋል፤ ፍላት (♭) በግማሽ ርቀት ዝቅ ያደርጋል። ከቁልፉ ቀጥሎ እንደ ቁልፍ አመልካች ይጻፋሉ። የጂ አብይ ቅኝት አንድ ሻርፕ አለው፦ ኤፍ#።'),[
  H('A sharp (#)…','ሻርፕ (#)…',[('raises a note by a half step','ድምፅን በግማሽ ርቀት ከፍ ያደርጋል'),('lowers a note','ድምፅን ዝቅ ያደርጋል'),('stops the music','ሙዚቃውን ያቆማል')]),
  H('A flat (♭)…','ፍላት (♭)…',[('lowers a note by a half step','ድምፅን በግማሽ ርቀት ዝቅ ያደርጋል'),('raises a note by a whole step','በሙሉ ርቀት ከፍ ያደርጋል'),('repeats a note','ድምፅን ይደግማል')]),
  H('G major has one sharp. Which note?','የጂ አብይ አንድ ሻርፕ አለው። የትኛው ድምፅ?',['F#','C#','G#']),
  H('A bird\'s song is usually … pitch.','የወፍ ዝማሬ ብዙ ጊዜ … ቃና ነው',[('high','ከፍተኛ'),('low','ዝቅተኛ'),('no','ምንም')])]),
 quiz(('Drawing, theatre and film','ንድፍ፣ ቴያትርና ፊልም'),('Drawing (ንድፍ) is the base of the visual arts: lines, shapes and shading. Theatre is acted live on a stage; film is recorded and shown on a screen. Participants include actors, the director, the playwright or scriptwriter, designers, the camera crew and the audience.','ንድፍ የእይታዊ ጥበባት መሠረት ነው፦ መስመር፣ ቅርጽና ጥላ። ቴያትር በመድረክ ላይ በቀጥታ ይተወናል፤ ፊልም ተቀርጾ በስክሪን ይታያል። ተሳታፊዎቹ ተዋንያን፣ አዘጋጅ፣ ደራሲ፣ ዲዛይነሮች፣ ካሜራ ባለሙያዎችና ተመልካቾች ናቸው።'),[
  H('Who performs a character on stage?','ገጸ ባሕርይን በመድረክ የሚጫወተው?',[('the actor','ተዋናይ'),('the audience','ተመልካች'),('the ticket seller','ትኬት ሻጭ')]),
  H('Who brings all parts of a play together?','የቴያትሩን ክፍሎች ሁሉ የሚያዋህደው?',[('the director','አዘጋጅ'),('the actor','ተዋናይ'),('the guard','ጠባቂ')]),
  H('Film differs from theatre because it is…','ፊልም ከቴያትር የሚለየው…',[('recorded and shown on a screen','ተቀርጾ በስክሪን ስለሚታይ'),('always without actors','ሁልጊዜ ያለ ተዋናይ ስለሆነ'),('only music','ሙዚቃ ብቻ ስለሆነ')]),
  H('Shading in drawing shows…','በንድፍ ውስጥ ጥላ የሚያሳየው…',[('light, shadow and form','ብርሃን፣ ጥላና ቅርጽ'),('sound','ድምፅ'),('smell','ሽታ')])])],
 [H('C major uses … sharps or flats.','የሲ አብይ ቅኝት … ሻርፕ ወይም ፍላት ይጠቀማል',[('no','ምንም'),('two','ሁለት'),('five','አምስት')]),H('How high or low a sound is, is its…','ድምፅ ምን ያህል ከፍ ወይም ዝቅ እንደሚል…',[('pitch','ቃና'),('rhythm','ምት'),('colour','ቀለም')]),
  H('Who writes a play?','ተውኔት የሚጽፈው?',[('the playwright','ተውኔት ደራሲ'),('the audience','ተመልካች'),('the actor only','ተዋናይ ብቻ')]),H('A minor scale is found by counting … from the major.','ንዑስ ቅኝት የሚገኘው ከአብዩ … በመቁጠር ነው',[('three notes back','ወደ ኋላ ሦስት ድምፅ'),('two notes forward','ወደፊት ሁለት ድምፅ'),('eight notes forward','ወደፊት ስምንት ድምፅ')])],
 notes(('Scales, pitch and key signatures organise music; drawing is the base of visual art; theatre and film tell stories through many participants.','ቅኝቶች፣ ቃናና የቁልፍ አመልካቾች ሙዚቃን ያደራጃሉ፤ ንድፍ የእይታዊ ጥበብ መሠረት ነው፤ ቴያትርና ፊልም በብዙ ተሳታፊዎች ታሪክ ይናገራሉ።'),
  [('Drawing: line, shape, shading.','ንድፍ፦ መስመር፣ ቅርጽ፣ ጥላ።'),('Major: half steps 3–4, 7–8. Natural minor: 2–3, 5–6.','አብይ፦ ግማሽ ርቀት 3–4፣ 7–8። ናቹራል ንዑስ፦ 2–3፣ 5–6።'),('Sharp # raises, flat ♭ lowers by a half step.','ሻርፕ # ከፍ፣ ፍላት ♭ ዝቅ በግማሽ ርቀት።'),('Theatre and film: actor, director, writer, audience.','ቴያትርና ፊልም፦ ተዋናይ፣ አዘጋጅ፣ ደራሲ፣ ተመልካች።')],
  [('አብይ ቅኝት','major scale','ዋናው የቅኝት መሠረት'),('ንዑስ ቅኝት','minor scale','ለስላሳ ቃና ያለው ቅኝት'),('የድምፅ ቃና','pitch','የድምፅ ከፍታና ዝቅታ'),('ተዋናይ','actor','ገጸ ባሕርይን የሚጫወት')],('3–4, 7–8: that is major!','3–4፣ 7–8፦ ይሄ አብይ ነው!'),
  [(('The sharp in G major','የጂ አብይ ሻርፕ'),'F#'),(('Who leads a film production?','የፊልም ሥራን የሚመራው?'),('the director','አዘጋጅ'))],
  (('Class radio drama','የክፍል የሬዲዮ ድራማ'),('Radio stations broadcast dramas and pay writers and actors. Record a 3-minute class drama.','የሬዲዮ ጣቢያዎች ድራማ ያስተላልፋሉ፤ ለደራሲና ለተዋንያን ይከፍላሉ። የ3 ደቂቃ የክፍል ድራማ ቅረጹ።'),[('Write a short script with 3 characters.','3 ገጸ ባሕርያት ያሉት አጭር ጽሑፍ ጻፉ።'),('Give roles: actors, director, sound.','ሚና ስጡ፦ ተዋንያን፣ አዘጋጅ፣ ድምፅ።'),('Rehearse and add music.','ተለማመዱና ሙዚቃ ጨምሩ።'),('Record it on a phone and play it.','በስልክ ቅረጹና አሰሙ።')])),
 sm(('The building blocks of art','የጥበብ መሠረቶች'),[('Drawing','ንድፍ'),('Major and minor scales','አብይና ንዑስ ቅኝቶች'),('Pitch and key signatures','ቃናና የቁልፍ አመልካቾች'),('Theatre and film','ቴያትርና ፊልም')]),
 ('drawing, major and minor scales, pitch, key signatures, and theatre and film','ንድፍ፣ አብይና ንዑስ ቅኝቶች፣ የድምፅ ቃና፣ የቁልፍ አመልካቾች፣ ቴያትርና ፊልም'))

# 2 Showing creativity
U(2,('Showing creativity','የፈጠራ ችሎታን መግለጽ'),[
 quiz(('Rhythm and note values','ምትና የኖታ ዋጋዎች'),('Rhythm is the pattern of long and short sounds. A whole note = 4 beats, half note = 2, quarter note = 1, eighth note = ½.','ምት የረጅምና የአጭር ድምፆች ቅደም ተከተል ነው። ሙሉ ኖታ = 4 ምት፣ ግማሽ ኖታ = 2፣ ሩብ ኖታ = 1፣ ስምንተኛ ኖታ = ½።'),[
  H('How many beats?','ስንት ምት?',['4','2','1'],fig=note('whole')),H('How many beats?','ስንት ምት?',['2','4','½'],fig=note('half')),H('How many beats?','ስንት ምት?',['1','2','4'],fig=note('quarter')),H('How many beats?','ስንት ምት?',['½','1','2'],fig=note('eighth')),
  H('Two half notes equal one…','ሁለት ግማሽ ኖታዎች አንድ … ይሆናሉ',[('whole note','ሙሉ ኖታ'),('quarter note','ሩብ ኖታ'),('eighth note','ስምንተኛ ኖታ')])]),
 order(('Stencil printing steps','የስቴንስል ህትመት ደረጃዎች'),('Stencil printing: cut a shape out of paper or card, then push ink or paint through the hole onto paper or cloth.','የስቴንስል ህትመት፦ ቅርጽን ከወረቀት ወይም ከካርቶን ቆርጦ ማውጣት፣ ከዚያ ቀለምን በቀዳዳው በኩል በወረቀት ወይም በጨርቅ ላይ ማሳለፍ።'),('Tap the steps in order.','ደረጃዎቹን በቅደም ተከተል ንኩ።'),[(('Order:','አስቀምጡ፦'),[('decide and draw the design','ንድፉን ወስኖ መሳል'),('cut out the shape','ቅርጹን ቆርጦ ማውጣት'),('place the stencil on paper','ስቴንስሉን በወረቀት ላይ ማስቀመጥ'),('dab paint with a sponge','በስፖንጅ ቀለም መቀባት'),('lift the stencil carefully','ስቴንስሉን በጥንቃቄ ማንሳት')])]),
 quiz(('Composition, still life, assembling, calligraphy','ድርሰት፣ የቁሳቁስ ቅንብር፣ መገጣጠም፣ ኪነ ጽሕፈት'),('Composition is creating your own music. Still-life painting shows arranged objects (fruit, jebena, baskets) with light and shadow. Assembling joins materials into a new artwork. Calligraphy is beautiful handwriting, like decorated Ge\'ez letters.','ድርሰት የራስን ሙዚቃ መፍጠር ነው። የቁሳቁስ ቅንብር ቀለም ቅብ የተደረደሩ ነገሮችን (ፍራፍሬ፣ ጀበና፣ ሙዳይ) በብርሃንና በጥላ ያሳያል። መገጣጠም ቁሳቁሶችን አያይዞ አዲስ ሥራ ይፈጥራል። ኪነ ጽሕፈት እንደ ያጌጡ የግዕዝ ፊደላት ያለ ውብ የእጅ ጽሑፍ ነው።'),[
  H('A painting of a jebena, cups and fruit arranged on a table is…','በጠረጴዛ ላይ የተደረደሩ ጀበና፣ ስኒና ፍራፍሬ ስዕል…',[('a still life','የቁሳቁስ ቅንብር'),('a landscape','የመልክዓ ምድር'),('a portrait','የሰው ምስል')]),
  H('Beautiful decorated handwriting is…','ውብ ያጌጠ የእጅ ጽሑፍ…',[('calligraphy','ኪነ ጽሕፈት'),('photography','ፎቶግራፍ'),('sculpture','ቅርጽ')]),
  H('Making your own new song is…','አዲስ ዘፈን በራስ መፍጠር…',[('composition','ድርሰት'),('copying','መቅዳት'),('stencil','ስቴንስል')]),
  H('Joining bottle tops and wire into a sculpture is…','የጠርሙስ ክዳንና ሽቦን አያይዞ ቅርጽ መሥራት…',[('assembling','መገጣጠም'),('calligraphy','ኪነ ጽሕፈት'),('singing','መዝፈን')])])],
 [H('An eighth note lasts…','ስምንተኛ ኖታ የሚቆየው…',[('½ beat','½ ምት'),('2 beats','2 ምት'),('4 beats','4 ምት')]),H('Stencil printing pushes paint…','የስቴንስል ህትመት ቀለምን…',[('through a cut-out hole','በተቆረጠ ቀዳዳ በኩል ያሳልፋል'),('onto your face','ፊት ላይ ይቀባል'),('into water','ውኃ ውስጥ ይጨምራል')]),
  H('Still life shows…','የቁሳቁስ ቅንብር የሚያሳየው…',[('arranged objects','የተደረደሩ ነገሮችን'),('moving people','የሚንቀሳቀሱ ሰዎችን'),('the sky only','ሰማይን ብቻ')]),H('Photos can express…','ፎቶዎች … ሊገልጹ ይችላሉ',[('ideas and feelings','ሐሳብና ስሜት'),('nothing','ምንም'),('only numbers','ቁጥር ብቻ')])],
 notes(('We show creativity through rhythm and composition, still-life painting, assembling, stencil printing, calligraphy, and theatre, film and photos.','ፈጠራን በምትና በድርሰት፣ በቁሳቁስ ቅንብር ቅብ፣ በመገጣጠም፣ በስቴንስል ህትመት፣ በኪነ ጽሕፈትና በቴያትር፣ በፊልምና በፎቶ እንገልጻለን።'),
  [('Note values: whole 4, half 2, quarter 1, eighth ½.','የኖታ ዋጋ፦ ሙሉ 4፣ ግማሽ 2፣ ሩብ 1፣ ስምንተኛ ½።'),('Still life: arranged objects, light and shadow.','የቁሳቁስ ቅንብር፦ የተደረደሩ ነገሮች፣ ብርሃንና ጥላ።'),('Stencil: cut, place, dab, lift.','ስቴንስል፦ ቁረጥ፣ አስቀምጥ፣ ቀልም፣ አንሳ።'),('Calligraphy, assembling, theatre, film and photo.','ኪነ ጽሕፈት፣ መገጣጠም፣ ቴያትር፣ ፊልምና ፎቶ።')],
  [('ምት','rhythm','የረጅምና የአጭር ድምፆች ቅደም ተከተል'),('ስቴንስል','stencil','ቅርጹ የተቆረጠ የህትመት ሰሌዳ'),('ኪነ ጽሕፈት','calligraphy','ውብ የእጅ ጽሑፍ')],('Create, don\'t just copy!','ፍጠሩ፣ አትቅዱ ብቻ!'),
  [(('Beats in two quarter notes','ሁለት ሩብ ኖታዎች ስንት ምት'),'2'),(('Name a still-life object','የቁሳቁስ ቅንብር አንድ ነገር ጥቀሱ'),('jebena','ጀበና'))],
  (('Stencilled bags','በስቴንስል የታተሙ ቦርሳዎች'),('Small businesses print designs on cloth bags to sell. Print a design on a cloth bag.','አነስተኛ ንግዶች ለመሸጥ በጨርቅ ቦርሳ ላይ ንድፍ ያትማሉ። በጨርቅ ቦርሳ ላይ ንድፍ አትሙ።'),[('Design a simple Ethiopian pattern.','ቀላል የኢትዮጵያ ጥለት ንደፉ።'),('Cut it out of card.','ከካርቶን ቆርጣችሁ አውጡ።'),('Print it on a cloth bag with fabric paint.','በጨርቅ ቀለም ቦርሳው ላይ አትሙ።'),('Show and price your bags.','ቦርሳዎቻችሁን አሳዩና ዋጋ አውጡ።')])),
 sm(('Many ways to create','የመፍጠር ብዙ መንገዶች'),[('Rhythm and composition','ምትና ድርሰት'),('Still life and assembling','የቁሳቁስ ቅንብርና መገጣጠም'),('Stencil and calligraphy','ስቴንስልና ኪነ ጽሕፈት'),('Theatre, film, photo','ቴያትር፣ ፊልም፣ ፎቶ')]),
 ('rhythm and pitch, composition, still-life painting, assembling, stencil printing, calligraphy, and expressing ideas through theatre, film and photography','ምትና ቃና፣ ድርሰት፣ የቁሳቁስ ቅንብር ቀለም ቅብ፣ መገጣጠም፣ የስቴንስል ህትመት፣ ኪነ ጽሕፈትና ሐሳብን በቴያትር፣ በፊልምና በፎቶ መግለጽ'))

# 3 Telling our history through the arts
U(3,('Telling our history through the arts','ታሪካችንን በጥበብ መተረክ'),[
 quiz(('Visual arts tell history','እይታዊ ጥበባት ታሪክን ይተርካሉ'),('Illustrations, photographs and theatre can show and retell our history: battles, heroes, buildings and daily life. Old church paintings and photos are records of the past.','ስዕላዊ መግለጫ፣ ፎቶግራፍና ቴያትር ታሪካችንን ሊያሳዩና ሊተርኩ ይችላሉ፦ ጦርነቶች፣ ጀግኖች፣ ሕንጻዎችና የዕለት ኑሮ። የጥንት የቤተ ክርስቲያን ስዕሎችና ፎቶዎች ያለፈው ዘመን መዛግብት ናቸው።'),[
  H('A picture that explains a story or text is…','ታሪክን ወይም ጽሑፍን የሚያብራራ ስዕል…',[('an illustration','ስዕላዊ መግለጫ'),('a song','ዘፈን'),('a poem','ግጥም')]),
  H('An old photograph of Adwa veterans is useful because it…','የዓድዋ አርበኞች የጥንት ፎቶ ጠቃሚ ነው ምክንያቱም…',[('records real history','እውነተኛ ታሪክን ስለሚመዘግብ'),('is colourful','ባለቀለም ስለሆነ'),('is new','አዲስ ስለሆነ')]),
  H('A play about a historical hero is…','ስለ ታሪካዊ ጀግና የሚቀርብ ተውኔት…',[('historical theatre','ታሪካዊ ቴያትር'),('a cartoon only','ካርቱን ብቻ'),('a sport','ስፖርት')])]),
 quiz(('Fukera, qererto and eskista','ፉከራ፣ ቀረርቶና እስክስታ'),('Fukera and qererto are heroic chants that tell of bravery and history. Traditional eskista and other dances also carry the story of a people.','ፉከራና ቀረርቶ ጀግንነትንና ታሪክን የሚተርኩ የጀግንነት ግጥሞች ናቸው። ባህላዊ እስክስታና ሌሎች ጭፈራዎችም የሕዝብን ታሪክ ይሸከማሉ።'),[
  H('Fukera and qererto are…','ፉከራና ቀረርቶ…',[('heroic chants','የጀግንነት ግጥሞች'),('lullabies','የሕፃናት ማባበያዎች'),('prayers only','ጸሎት ብቻ')]),
  H('Fukera tells about…','ፉከራ ስለ … ይተርካል',[('bravery and victories','ጀግንነትና ድል'),('cooking','ምግብ ማብሰል'),('shopping','ግብይት')]),
  H('Eskista shows history through…','እስክስታ ታሪክን የሚያሳየው በ…',[('movement and dance','እንቅስቃሴና ጭፈራ'),('writing','ጽሑፍ'),('numbers','ቁጥር')])]),
 sortm(('Traditional instruments','ባህላዊ የሙዚቃ መሳሪያዎች'),('String instruments are plucked or bowed; wind instruments are blown; percussion is struck.','የክር መሳሪያዎች ይቆነጠራሉ ወይም ይገዘገዛሉ፤ የትንፋሽ መሳሪያዎች በትንፋሽ ይነፋሉ፤ የምት መሳሪያዎች ይመታሉ።'),[('String','የክር'),('Wind','የትንፋሽ'),('Percussion','የምት')],[(('masinko','ማሲንቆ'),0),(('krar','ክራር'),0),(('begena','በገና'),0),(('washint','ዋሽንት'),1),(('embilta','እምቢልታ'),1),(('kebero','ከበሮ'),2),(('nagarit','ነጋሪት'),2)])],
 [H('The masinko has … string(s).','ማሲንቆ … ክር አለው',['1','6','10']),H('A begena is a…','በገና…',[('large string instrument','ትልቅ የክር መሳሪያ'),('drum','ከበሮ'),('flute','ዋሽንት')]),
  H('Qererto is performed to…','ቀረርቶ የሚቀርበው…',[('praise bravery','ጀግንነትን ለማወደስ'),('sell goods','ዕቃ ለመሸጥ'),('put babies to sleep','ሕፃናትን ለማስተኛት')]),H('Photos help history because they…','ፎቶዎች ታሪክን ይረዳሉ ምክንያቱም…',[('show what really happened','በእውነት የሆነውን ስለሚያሳዩ'),('are always funny','ሁልጊዜ አስቂኝ ስለሆኑ'),('are expensive','ውድ ስለሆኑ')])],
 notes(('Pictures, photos, plays, chants, dances and instruments all tell the story of our people.','ስዕሎች፣ ፎቶዎች፣ ተውኔቶች፣ የጀግንነት ግጥሞች፣ ጭፈራዎችና የሙዚቃ መሳሪያዎች ሁሉ የሕዝባችንን ታሪክ ይተርካሉ።'),
  [('Illustration and photography record history.','ስዕላዊ መግለጫና ፎቶግራፍ ታሪክን ይመዘግባሉ።'),('Theatre brings historical heroes to life.','ቴያትር ታሪካዊ ጀግኖችን ሕያው ያደርጋል።'),('Fukera, qererto and eskista tell of bravery.','ፉከራ፣ ቀረርቶና እስክስታ ጀግንነትን ይተርካሉ።'),('Instruments: string, wind, percussion.','መሳሪያዎች፦ የክር፣ የትንፋሽ፣ የምት።')],
  [('ፉከራ','fukera','የጀግንነት ግጥም'),('ስዕላዊ መግለጫ','illustration','ታሪክን የሚያብራራ ስዕል'),('ማሲንቆ','masinko','ባለአንድ ክር መሳሪያ')],('Art remembers our heroes.','ጥበብ ጀግኖቻችንን ያስታውሳል።'),
  [(('Name a wind instrument','የትንፋሽ መሳሪያ ጥቀሱ'),('washint','ዋሽንት')),(('What do fukera and qererto praise?','ፉከራና ቀረርቶ ምን ያወድሳሉ?'),('bravery','ጀግንነት'))],
  (('Local history photo exhibition','የአካባቢ ታሪክ የፎቶ ኤግዚቢሽን'),('Museums show photos to teach history. Hold a small exhibition of old family photos.','ሙዚየሞች ታሪክን ለማስተማር ፎቶዎችን ያሳያሉ። የቤተሰብ የጥንት ፎቶዎች አነስተኛ ኤግዚቢሽን አዘጋጁ።'),[('Borrow old photos (with permission).','የጥንት ፎቶዎችን ተዋሱ (በፈቃድ)።'),('Ask elders the story of each.','የእያንዳንዱን ታሪክ አዛውንቶችን ጠይቁ።'),('Write a caption for each photo.','ለእያንዳንዱ ፎቶ መግለጫ ጻፉ።'),('Display them and return them safely.','አሳዩና በደህና መልሱ።')])),
 sm(('The arts keep our history alive','ጥበብ ታሪካችንን ሕያው ያደርጋል'),[('Illustration and photo','ስዕላዊ መግለጫና ፎቶ'),('Historical theatre','ታሪካዊ ቴያትር'),('Fukera and eskista','ፉከራና እስክስታ'),('Traditional instruments','ባህላዊ መሳሪያዎች')]),
 ('telling our history through illustration, photography, theatre, fukera and qererto, eskista and traditional instruments','ታሪካችንን በስዕላዊ መግለጫ፣ በፎቶግራፍ፣ በቴያትር፣ በፉከራና በቀረርቶ፣ በእስክስታና በባህላዊ መሳሪያዎች መተረክ'))

# 4 Indigenous knowledge
U(4,('Appreciating indigenous knowledge','ሀገር በቀል እውቀቶችን ማድነቅ'),[
 quiz(('Indigenous art and paper mosaic','ሀገር በቀል ጥበብና የወረቀት ሞዛይክ'),('Indigenous knowledge is the wisdom our communities developed over many years: weaving, pottery, basketry, building and medicine. A paper mosaic makes a picture from many small pieces of coloured paper.','ሀገር በቀል እውቀት ማኅበረሰባችን ለብዙ ዓመታት ያዳበረው ጥበብ ነው፦ ሽመና፣ ሸክላ፣ ስፌት፣ ግንባታና ባህላዊ ሕክምና። የወረቀት ሞዛይክ ከብዙ ትናንሽ ባለቀለም ወረቀቶች ስዕል ይሠራል።'),[
  H('A picture made of many small coloured pieces is a…','ከብዙ ትናንሽ ባለቀለም ቁርጥራጮች የተሠራ ስዕል…',[('mosaic','ሞዛይክ'),('stencil','ስቴንስል'),('sketch','ንድፍ')]),
  H('Which is indigenous knowledge?','ሀገር በቀል እውቀት የትኛው ነው?',[('basket weaving (mesob)','የሙዳይና የመሶብ ስፌት'),('a smartphone app','የስማርት ስልክ መተግበሪያ'),('a plastic factory','የፕላስቲክ ፋብሪካ')]),
  H('Indigenous knowledge is passed on…','ሀገር በቀል እውቀት የሚተላለፈው…',[('from generation to generation','ከትውልድ ወደ ትውልድ'),('only on the internet','በኢንተርኔት ብቻ'),('never','በፍጹም')])]),
 quiz(('Weaving through music','የሽመና ጥበብ በሙዚቃ'),('Weaving (ሽመና) is an ancient Ethiopian craft. Mothers\' ቀሚስ, ነጠላ and መቀነት and fathers\' ኩታ, ሻሽ, ቡልኮ and ጃኖ were woven by hand. Songs praise weavers, and we should value the people who make beauty, not only the beauty.','ሽመና ጥንታዊ የኢትዮጵያ ጥበብ ነው። የእናቶች ቀሚስ፣ ነጠላና መቀነት፣ የአባቶች ኩታ፣ ሻሽ፣ ቡልኮና ጃኖ በእጅ ይሸመኑ ነበር። ዘፈኖች ሸማኔዎችን ያወድሳሉ፤ ውበቱን ብቻ ሳይሆን ውበቱን የፈጠሩትን ሰዎች ማድነቅ ይገባል።'),[
  H('Which is woven clothing?','በሽመና የሚሠራ ልብስ?',[('ጋቢ and ነጠላ','ጋቢና ነጠላ'),('jeans','ጂንስ'),('plastic raincoat','የፕላስቲክ የዝናብ ልብስ')]),
  H('The book says we should admire…','መጽሐፉ … ማድነቅ ይገባል ይላል',[('both the beautiful work and its maker','ውብ ሥራውንም ሠሪውንም'),('only the person wearing it','የለበሰውን ብቻ'),('nobody','ማንንም')]),
  H('A weaver is called…','ሸማኔ …',[('ሸማኔ','ሸማኔ'),('አንጥረኛ','አንጥረኛ'),('ሸክላ ሠሪ','ሸክላ ሠሪ')])]),
 match(('Crafts and their makers','ጥበቦችና ሠሪዎቻቸው'),('Match each craft with its product.','እያንዳንዱን ጥበብ ከውጤቱ ጋር አዛምዱ።'),[[(('weaving','ሽመና'),('netela','ነጠላ')),(('pottery','ሸክላ'),('jebena','ጀበና')),(('basketry','ስፌት'),('mesob','መሶብ'))],[(('smithing','አንጥረኝነት'),('plough tip','ማረሻ')),(('woodwork','የእንጨት ሥራ'),('stool','በርጩማ')),(('leatherwork','የቆዳ ሥራ'),('bag','ቦርሳ'))]])],
 [H('ጃኖ is…','ጃኖ…',[('a woven cloth with a red band','ቀይ ጥለት ያለው የሽመና ልብስ'),('a drum','ከበሮ'),('a food','ምግብ')]),H('Paper mosaic uses…','የወረቀት ሞዛይክ የሚጠቀመው…',[('small pieces of coloured paper','ትናንሽ ባለቀለም ወረቀቶች'),('wood only','እንጨት ብቻ'),('metal','ብረት')]),
  H('A mesob is made by…','መሶብ የሚሠራው በ…',[('basket weaving','በስፌት'),('pottery','በሸክላ'),('smithing','በአንጥረኝነት')]),H('Indigenous knowledge should be…','ሀገር በቀል እውቀት…',[('respected and developed','ሊከበርና ሊዳብር ይገባል'),('thrown away','መጣል አለበት'),('hidden','መደበቅ አለበት')])],
 notes(('Our indigenous knowledge — weaving, pottery, basketry and more — is a treasure we appreciate through drawing, mosaic, theatre, photos and songs.','ሀገር በቀል እውቀታችን — ሽመና፣ ሸክላ፣ ስፌትና ሌሎችም — በንድፍ፣ በሞዛይክ፣ በቴያትር፣ በፎቶና በዘፈን የምናደንቀው ሀብት ነው።'),
  [('Indigenous knowledge: crafts, building, medicine.','ሀገር በቀል እውቀት፦ ጥበቦች፣ ግንባታ፣ ሕክምና።'),('Paper mosaic: pictures from small pieces.','የወረቀት ሞዛይክ፦ ከትናንሽ ቁርጥራጮች ስዕል።'),('Weaving: ቀሚስ, ነጠላ, ኩታ, ጃኖ.','ሽመና፦ ቀሚስ፣ ነጠላ፣ ኩታ፣ ጃኖ።'),('Admire the maker as well as the work.','ሥራውንም ሠሪውንም አድንቁ።')],
  [('ሀገር በቀል እውቀት','indigenous knowledge','በአገር ውስጥ የዳበረ እውቀት'),('ሽመና','weaving','ጨርቅ በእጅ መሥራት'),('ሞዛይክ','mosaic','በቁርጥራጭ የተሠራ ስዕል')],('Respect the hands that make beauty.','ውበትን የሚሠሩ እጆችን አክብሩ።'),
  [(('Name a woven cloth','የሽመና ልብስ ጥቀሱ'),('ኩታ','ኩታ')),(('Who makes pottery?','ሸክላ የሚሠራው?'),('a potter','ሸክላ ሠሪ'))],
  (('Craft interview video','የእጅ ሙያ ቃለ መጠይቅ ቪዲዮ'),('Documentary makers record craftspeople at work. Film or photograph a local craftsperson.','ዘጋቢ ፊልም ሠሪዎች የእጅ ሙያተኞችን በሥራ ላይ ይቀርጻሉ። በአካባቢያችሁ ያለን የእጅ ሙያተኛ ቅረጹ ወይም ፎቶ አንሱ።'),[('Ask permission to visit.','ለመጎብኘት ፈቃድ ጠይቁ።'),('Ask 4 questions about their craft.','ስለ ሙያቸው 4 ጥያቄዎችን ጠይቁ።'),('Take 5 photos of the steps.','የደረጃዎቹን 5 ፎቶዎች አንሱ።'),('Make a short slideshow for your class.','ለክፍላችሁ አጭር የፎቶ ትርኢት አዘጋጁ።')])),
 sm(('Our hands hold old wisdom','እጆቻችን የቆየ ጥበብ ይዘዋል'),[('Indigenous knowledge','ሀገር በቀል እውቀት'),('Paper mosaic','የወረቀት ሞዛይክ'),('Weaving','ሽመና'),('Crafts and makers','ጥበቦችና ሠሪዎች')]),
 ('appreciating indigenous knowledge through drawing, paper mosaic, theatre, film, photography, weaving songs and traditional instruments','ሀገር በቀል እውቀትን በንድፍ፣ በወረቀት ሞዛይክ፣ በቴያትር፣ በፊልም፣ በፎቶ፣ በሽመና ዘፈኖችና በባህላዊ መሳሪያዎች ማድነቅ'))

# 5 Arts and other subjects
U(5,('Arts, other subjects and social issues','ሥነ ጥበባት፣ ሌሎች ትምህርቶችና ማኅበራዊ ጉዳዮች'),[
 quiz(('Visual arts and other subjects','እይታዊ ጥበባትና ሌሎች ትምህርቶች'),('Art connects with every subject: drawing maps in geography, diagrams in science, patterns and shapes in maths, illustrations in languages, and recording heritage in history.','ጥበብ ከሁሉም ትምህርቶች ጋር ይገናኛል፦ በጂኦግራፊ ካርታ መሳል፣ በሳይንስ ንድፍ፣ በሒሳብ ጥለትና ቅርጽ፣ በቋንቋ ስዕላዊ መግለጫ፣ በታሪክ ቅርስን መመዝገብ።'),[
  H('Drawing a labelled diagram of a flower helps in…','የአበባ ሥዕላዊ ንድፍ መሳል የሚረዳው በ…',[('science','ሳይንስ'),('PE only','ሰ/ማጎልመሻ ብቻ'),('no subject','በምንም ትምህርት')]),
  H('Symmetry in art connects with…','በጥበብ ውስጥ ያለ ምጥጥን ከ… ጋር ይገናኛል',[('mathematics','ሒሳብ'),('cooking','ምግብ ማብሰል'),('sleep','እንቅልፍ')]),
  H('Drawing heritage sites like Lalibela helps us…','እንደ ላሊበላ ያሉ ቅርሶችን መሳል … ይረዳናል',[('learn and protect heritage','ቅርስን ለማወቅና ለመጠበቅ'),('destroy them','ለማፍረስ'),('forget history','ታሪክን ለመርሳት')])]),
 quiz(('Art for social issues','ጥበብ ለማኅበራዊ ጉዳዮች'),('Theatre, film, photos, posters and songs can teach about social issues: hygiene, road safety, HIV/AIDS, the environment, peace and girls\' education.','ቴያትር፣ ፊልም፣ ፎቶ፣ ፖስተርና ዘፈን ስለ ማኅበራዊ ጉዳዮች ሊያስተምሩ ይችላሉ፦ ንጽሕና፣ የመንገድ ደህንነት፣ ኤች አይ ቪ/ኤድስ፣ አካባቢ፣ ሰላምና የሴቶች ትምህርት።'),[
  H('A poster saying "Wash your hands" is about…','"እጃችሁን ታጠቡ" የሚል ፖስተር ስለ … ነው',[('hygiene','ንጽሕና'),('sport','ስፖርት'),('music','ሙዚቃ')]),
  H('Why use drama for social messages?','ማኅበራዊ መልእክትን ለምን በድራማ?',[('it catches attention and moves feelings','ትኩረት ይስባል፣ ስሜትን ይነካል'),('it is boring','አሰልቺ ስለሆነ'),('nobody watches','ማንም ስለማያይ')]),
  H('A song "እውቀት ያብብ" encourages…','"እውቀት ያብብ" የሚል መዝሙር … ያበረታታል',[('learning','መማርን'),('fighting','ጠብን'),('laziness','ስንፍናን')])]),
 sortm(('Which social issue?','የትኛው ማኅበራዊ ጉዳይ?'),('Sort each art idea by its message.','እያንዳንዱን የጥበብ ሐሳብ በመልእክቱ መድቡ።'),[('Health','ጤና'),('Environment','አካባቢ'),('Peace and unity','ሰላምና አንድነት')],[(('play about washing hands','ስለ እጅ መታጠብ ድራማ'),0),(('song against drugs','ፀረ ዕፅ ዘፈን'),0),(('poster: plant trees','ፖስተር፦ ዛፍ ትከሉ'),1),(('photo of a clean river','የንጹሕ ወንዝ ፎቶ'),1),(('drama about friends from different groups','ስለ የተለያዩ ቡድን ጓደኞች ድራማ'),2),(('song "Ethiopia, our home"','"ኢትዮጵያ ቤታችን" ዘፈን'),2)])],
 [H('Map drawing links art with…','ካርታ መሳል ጥበብን ከ… ጋር ያገናኛል',[('geography','ጂኦግራፊ'),('music','ሙዚቃ'),('PE','ሰ/ማጎልመሻ')]),H('Art can help solve social problems by…','ጥበብ ማኅበራዊ ችግሮችን ለመፍታት የሚረዳው…',[('raising awareness','ግንዛቤ በመፍጠር'),('hiding problems','ችግሮችን በመደበቅ'),('making noise','ጩኸት በማሰማት')]),
  H('School songs like "ጠንቃቃ ተማሪ" teach…','እንደ "ጠንቃቃ ተማሪ" ያሉ መዝሙሮች … ያስተምራሉ',[('good values','መልካም እሴቶችን'),('bad habits','መጥፎ ልማዶችን'),('nothing','ምንም')]),H('Heritage is protected when we…','ቅርስ የሚጠበቀው…',[('record, respect and care for it','ስንመዘግበው፣ ስናከብረውና ስንንከባከበው'),('write on its walls','ግድግዳውን ስንጽፍበት'),('ignore it','ችላ ስንለው')])],
 notes(('The arts link with every subject and help us teach about heritage and social issues.','ጥበብ ከሁሉም ትምህርቶች ጋር ይገናኛል፤ ስለ ቅርስና ማኅበራዊ ጉዳዮች እንድናስተምር ይረዳናል።'),
  [('Art + science, maths, geography, languages, history.','ጥበብ + ሳይንስ፣ ሒሳብ፣ ጂኦግራፊ፣ ቋንቋ፣ ታሪክ።'),('Visual art records and protects heritage.','እይታዊ ጥበብ ቅርስን ይመዘግባል፣ ይጠብቃል።'),('Theatre, film and photos raise social awareness.','ቴያትር፣ ፊልምና ፎቶ ማኅበራዊ ግንዛቤ ይፈጥራሉ።'),('Songs teach knowledge, history and values.','ዘፈኖች እውቀትን፣ ታሪክንና እሴትን ያስተምራሉ።')],
  [('ማኅበራዊ ጉዳይ','social issue','ማኅበረሰቡን የሚመለከት ችግር'),('ግንዛቤ','awareness','ማወቅና መረዳት'),('ቅርስ','heritage','ከቀደምቶች የተላለፈ ሀብት')],('Art can change minds.','ጥበብ አስተሳሰብን ሊቀይር ይችላል።'),
  [(('One subject linked to drawing maps','ካርታ ከመሳል ጋር የሚገናኝ ትምህርት'),('geography','ጂኦግራፊ')),(('One social issue for a poster','ለፖስተር አንድ ማኅበራዊ ጉዳይ'),('road safety','የመንገድ ደህንነት'))],
  (('Awareness poster series','የግንዛቤ ፖስተሮች'),('Advertising designers create campaigns for health offices. Make 3 posters on one social issue.','የማስታወቂያ ዲዛይነሮች ለጤና ቢሮዎች ዘመቻ ይቀርጻሉ። ስለ አንድ ማኅበራዊ ጉዳይ 3 ፖስተሮችን ሥሩ።'),[('Choose one issue (hygiene, trees, peace).','አንድ ጉዳይ ምረጡ (ንጽሕና፣ ዛፍ፣ ሰላም)።'),('Write a short slogan in Amharic and English.','በአማርኛና በእንግሊዝኛ አጭር መፈክር ጻፉ።'),('Draw bold pictures with few words.','በጥቂት ቃላት ጎልተው የሚታዩ ስዕሎችን ሳሉ።'),('Put them up around the school.','በትምህርት ቤቱ ዙሪያ ለጥፉ።')])),
 sm(('Art connects and changes','ጥበብ ያገናኛል፣ ይለውጣል'),[('Art and other subjects','ጥበብና ሌሎች ትምህርቶች'),('Heritage','ቅርስ'),('Social issues','ማኅበራዊ ጉዳዮች'),('Songs that teach','የሚያስተምሩ መዝሙሮች')]),
 ('how the arts connect with other subjects, heritage, social issues and educational songs','ሥነ ጥበባት ከሌሎች ትምህርቶች፣ ከቅርስ፣ ከማኅበራዊ ጉዳዮችና ከትምህርታዊ መዝሙሮች ጋር ያለው ትስስር'))
dump('art')
