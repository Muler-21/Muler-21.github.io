/* ጤናና ሰውነት ማጎልመሻ · ምዕራፍ 6 · የኢትዮጵያ ባህላዊ ጭፈራዎችና ጨዋታዎች */
(function(){
const {tx,esc}=G3;
const LEVELS=[{need:1,tosses:4},{need:2,tosses:2},{need:4,tosses:1}];
const stone=(x,y,c)=>`<circle cx="${x}" cy="${y}" r="28" fill="transparent"/><ellipse cx="${x}" cy="${y}" rx="18" ry="14" fill="${c||'#9AA3AE'}" stroke="#5C6470" stroke-width="2"/>`;
Unit.start({
 id:'health-6',subject:'health',
 subjectName:{en:'Health & Physical Education',am:'ጤናና ሰውነት ማጎልመሻ'},chapter:{en:'Chapter 6',am:'ምዕራፍ 6'},
 title:{en:'Ethiopian Traditional Dances and Games',am:'የኢትዮጵያ ባህላዊ ጭፈራዎችና ጨዋታዎች'},
 footer:{en:'Built on the Grade 3 Health & Physical Education student book (ANRS Education Bureau), Chapter 6. Ask elders in your woreda to teach you their dances and games.',am:'በ3ኛ ክፍል የጤናና ሰውነት ማጎልመሻ መጽሐፍ (አብክመ ትምህርት ቢሮ) ምዕራፍ 6 ላይ የተመሰረተ። በወረዳችሁ ያሉ ሽማግሌዎች ጭፈራዎቻቸውንና ጨዋታዎቻቸውን እንዲያስተምሯችሁ ጠይቁ።'},
 missions:[
 {title:{en:'Play teter qelmosh (five stones)',am:'የጠጠር ቅልሞሽ ተጫወቱ'},type:'custom',
  tip:{en:'Toss the top stone up, then pick up stones from the ground before it falls! Level 1: pick one each toss. Level 2: two each toss. Level 3: all four in one toss. This game trains hand–eye coordination. Then play it for real with five smooth pebbles.',am:'የላይኛውን ጠጠር ወደ ላይ ወርውሩ፤ ከመውደቁ በፊት ከመሬት ጠጠር አንሱ! ደረጃ 1፦ በእያንዳንዱ ውርወራ አንድ። ደረጃ 2፦ ሁለት። ደረጃ 3፦ አራቱንም በአንድ ውርወራ። ይህ ጨዋታ የእጅና የዓይን ቅንጅትን ያሠለጥናል። ከዚያ በአምስት ለስላሳ ጠጠሮች በእውነት ተጫወቱ።'},
  init(st){st.lv=0;st.ground=[1,1,1,1];st.air=false;st.picked=0;st.msg='';st.cls='';st.tm=0},
  render(p,api,st){if(st.lv>=LEVELS.length){p.innerHTML=`<div class="explain">${tx({en:'All three levels done! In the real game, the last step is catching all five stones on the back of your hand. Collect five smooth pebbles and challenge a friend.',am:'ሦስቱንም ደረጃዎች ጨረሳችሁ! በእውነተኛው ጨዋታ የመጨረሻው ደረጃ አምስቱንም ጠጠሮች በመዳፍ ጀርባ መቅለም ነው። አምስት ለስላሳ ጠጠሮች ሰብስባችሁ ጓደኛችሁን ተወዳደሩ።'})}</div>`;return}
   const L=LEVELS[st.lv];const left=st.ground.filter(Boolean).length;
   const svg=`<svg viewBox="0 0 320 200" role="img" aria-label="five stones" style="width:min(420px,100%);height:auto"><rect x="0" y="0" width="320" height="150" rx="10" fill="var(--blue-soft, #E6F0FF)"/><rect x="0" y="146" width="320" height="54" fill="#C9A26B"/>
    <g style="transition:transform .3s" transform="translate(0 ${st.air?-90:0})">${stone(160,130,'#F4B400')}</g>
    ${st.ground.map((g,i)=>g?`<g data-st="${i}" style="cursor:pointer">${stone(52+i*72,172)}</g>`:'').join('')}</svg>`;
   p.innerHTML=`<div class="row" style="justify-content:space-between"><span class="pill">${tx({en:'Level {l}: pick {n} per toss',am:'ደረጃ {l}፦ በአንድ ውርወራ {n}'},{l:st.lv+1,n:L.need})}</span><span class="progress">${tx({en:'Stones left on the ground: {n}',am:'መሬት ላይ የቀሩ ጠጠሮች፦ {n}'},{n:left})}</span></div>
    <div style="text-align:center">${svg}</div>
    <div class="row" style="justify-content:center"><button class="btn primary" data-act="toss" ${st.air?'disabled':''}>${st.air?tx({en:'Quick! Tap {n} stone(s)!',am:'ፍጠኑ! {n} ጠጠር ንኩ!'},{n:L.need-st.picked}):tx({en:'Toss the stone',am:'ጠጠሩን ወርውሩ'})}</button></div>
    <div class="feedback ${st.cls}">${st.msg}</div>`;
   p.onclick=e=>{const b=e.target.closest('button,[data-st]');if(!b)return;
    if(b.dataset&&b.dataset.act==='toss'&&!st.air){st.air=true;st.picked=0;st.msg='';api.S.tone([600,800],.06);clearTimeout(st.tm);
     st.tm=setTimeout(()=>{if(!st.air)return;st.air=false;st.msg=tx({en:'The stone landed first. Try again!',am:'ጠጠሩ ቀድሞ ወደቀ። እንደገና ሞክሩ!'});st.cls='bad';api.S.nope();
      st.ground=st.ground.map((g,i)=>g);if(api.visible(1))api.rerender()},1800)}
    if(b.dataset&&b.dataset.st!==undefined&&st.air){st.ground[+b.dataset.st]=0;st.picked++;api.S.tick();
     if(st.picked>=L.need){st.air=false;clearTimeout(st.tm);st.msg=tx({en:'Caught it!',am:'ቀለማችሁት!'});st.cls='good';api.S.yay();
      if(!st.ground.some(Boolean)){st.lv++;st.ground=[1,1,1,1];st.msg=tx({en:'Level complete!',am:'ደረጃው ተጠናቀቀ!'});if(st.lv>=LEVELS.length)api.complete()}}}
    api.rerender()}}},
 {title:{en:'Festivals and their dances',am:'በዓላትና ጭፈራዎቻቸው'},type:'match',
  tip:{en:'Traditional dances express joy at weddings, holidays and work. They are also great exercise for the heart and muscles. Match each occasion with its dance.',am:'ባህላዊ ጭፈራዎች በሰርግ፣ በበዓልና በሥራ ደስታን ይገልጻሉ። ለልብና ለጡንቻም ጥሩ እንቅስቃሴ ናቸው። እያንዳንዱን አጋጣሚ ከጭፈራው ጋር አዛምዱ።'},
  rounds:[[[{en:'Ashenda / Ashendye (August)',am:'አሸንዳ / አሸንድዬ (ነሐሴ)'},{en:'Girls dance and sing in groups with decorated dresses',am:'ልጃገረዶች ያጌጠ ልብስ ለብሰው በቡድን ይጨፍራሉ፤ ይዘፍናሉ'}],[{en:'Buhe',am:'ቡሄ'},{en:'Boys sing "hoya hoye" and crack whips',am:'ወንዶች ልጆች “ሆያ ሆዬ” ይላሉ፤ ጅራፍ ያጮኻሉ'}],[{en:'Adwa Victory Day',am:'የአድዋ ድል በዓል'},{en:'Heroic chants: fukera and shilela',am:'የጀግንነት ፉከራና ሽለላ'}],[{en:'Wedding',am:'ሰርግ'},{en:'Songs as the groom arrives and the bride leaves',am:'ሙሽራው ሲገባና ሙሽሪት ስትወጣ የሚዘፈኑ ዘፈኖች'}],[{en:'Threshing grain',am:'እህል መውቃት'},{en:'Men\'s work chants that make hard work lighter',am:'ከባድ ሥራን የሚያቀሉ የወንዶች የሥራ ጭፈራዎች'}]]]},
 {title:{en:'Dance or game?',am:'ጭፈራ ወይስ ጨዋታ?'},type:'sort',
  tip:{en:'Sort each tradition: is it a dance or a game?',am:'እያንዳንዱን ባህል መድቡ፦ ጭፈራ ነው ወይስ ጨዋታ?'},
  buckets:[{en:'Traditional dance',am:'ባህላዊ ጭፈራ'},{en:'Traditional game',am:'ባህላዊ ጨዋታ'}],
  items:[{t:{en:'Ashendye',am:'አሸንድዬ'},b:0},{t:{en:'Buhe song',am:'ቡሄ በሉ'},b:0},{t:{en:'Wedding dance',am:'የሰርግ ጭፈራ'},b:0},{t:{en:'Fukera (heroic chant)',am:'ፉከራ'},b:0},
   {t:{en:'Teter qelmosh (five stones)',am:'የጠጠር ቅልሞሽ'},b:1},{t:{en:'Kinchift (hit and catch the ball)',am:'ቅንጭፍት'},b:1},{t:{en:'Zagol (shell) throwing',am:'ዛጎል መጣል'},b:1},{t:{en:'Yakob (find the hidden cloth)',am:'ያቆብ'},b:1},{t:{en:'Doro til (rooster fight)',am:'የዶሮ ጥል'},b:1}]},
 {title:{en:'What does each game train?',am:'እያንዳንዱ ጨዋታ ምን ያሠለጥናል?'},type:'match',
  tip:{en:'Our grandparents\' games are smart training. Match each game with what it develops.',am:'የአያቶቻችን ጨዋታዎች ብልህ ሥልጠና ናቸው። እያንዳንዱን ጨዋታ ከሚያዳብረው ጋር አዛምዱ።'},
  rounds:[[[{en:'Teter qelmosh',am:'የጠጠር ቅልሞሽ'},{en:'Hand–eye coordination',am:'የእጅና የዓይን ቅንጅት'}],[{en:'Zagol throwing',am:'ዛጎል መጣል'},{en:'Aiming and balance',am:'ማነጣጠርና ሚዛን'}],[{en:'Doro til (push from a squat)',am:'የዶሮ ጥል'},{en:'Leg and arm strength, focus',am:'የእግርና የእጅ ጥንካሬ፣ ትኩረት'}],[{en:'Yakob (eyes covered)',am:'ያቆብ (ዓይን ተሸፍኖ)'},{en:'Alertness and decision-making',am:'ንቃትና ውሳኔ መስጠት'}],[{en:'Kinchift',am:'ቅንጭፍት'},{en:'Agility, speed and strength',am:'ቅልጥፍና፣ ፍጥነትና ጥንካሬ'}]]]},
 {title:{en:'Why we dance and play',am:'ለምን እንጨፍራለን፤ ለምን እንጫወታለን'},type:'quiz',shuffle:true,
  tip:{en:'Traditional dances and games connect the community, entertain, and keep us fit.',am:'ባህላዊ ጭፈራዎችና ጨዋታዎች ማኅበረሰቡን ያገናኛሉ፣ ያዝናናሉ፣ ጤናማ ያደርጉናል።'},
  items:[
   {q:{en:'Traditional dances are done to…',am:'ባህላዊ ጭፈራዎች የሚጨፈሩት…'},o:[{en:'express joy and feelings',am:'ደስታንና ስሜትን ለመግለጽ'},{en:'make people sad',am:'ሰዎችን ለማሳዘን'},{en:'stop work',am:'ሥራ ለማቆም'}],a:0},
   {q:{en:'Why do men chant while threshing or building?',am:'ወንዶች እህል ሲወቁ ወይም ቤት ሲሠሩ ለምን ይጨፍራሉ?'},o:[{en:'To make hard work lighter and keep the rhythm together',am:'ከባድ ሥራን ለማቅለልና በአንድ ምት ለመሥራት'},{en:'To scare animals',am:'እንስሳትን ለማስፈራራት'},{en:'For no reason',am:'ያለ ምክንያት'}],a:0},
   {q:{en:'Dancing for a long time improves…',am:'ለረጅም ጊዜ መጨፈር የሚያሻሽለው…'},o:[{en:'heart, lungs and muscles',am:'ልብን፣ ሳንባንና ጡንቻን'},{en:'only the eyes',am:'ዓይንን ብቻ'},{en:'nothing',am:'ምንም'}],a:0},
   {q:{en:'Traditional games help us to…',am:'ባህላዊ ጨዋታዎች ይረዱናል…'},o:[{en:'meet and get along with different people',am:'ከተለያዩ ሰዎች ጋር ለመተዋወቅና ለመግባባት'},{en:'stay alone',am:'ብቻችንን ለመቆየት'},{en:'fight',am:'ለመጣላት'}],a:0}]},
 {type:'exam',items:[
   {q:{en:'Which is a girls\' holiday dance?',am:'የልጃገረዶች የበዓል ጭፈራ የትኛው ነው?'},o:[{en:'Ashendye',am:'አሸንድዬ'},{en:'Doro til',am:'የዶሮ ጥል'},{en:'Kinchift',am:'ቅንጭፍት'}],a:0},
   {q:{en:'Teter qelmosh is played with…',am:'የጠጠር ቅልሞሽ የሚጫወተው በ…'},o:[{en:'five small round stones',am:'አምስት ትንንሽ ድቡልቡል ጠጠሮች'},{en:'a big ball',am:'ትልቅ ኳስ'},{en:'a rope',am:'ገመድ'}],a:0},
   {q:{en:'Doro til mainly develops…',am:'የዶሮ ጥል በዋናነት የሚያዳብረው…'},o:[{en:'leg and arm strength',am:'የእግርና የእጅ ጥንካሬ'},{en:'reading',am:'ንባብ'},{en:'singing',am:'ዘፈን'}],a:0},
   {q:{en:'Fukera and shilela are performed on…',am:'ፉከራና ሽለላ የሚቀርቡት በ…'},o:[{en:'Adwa Victory Day',am:'የአድዋ ድል በዓል'},{en:'school exam day',am:'የፈተና ቀን'},{en:'market day only',am:'በገበያ ቀን ብቻ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Traditional dances and games express joy, connect the community and keep us fit. They are part of our heritage, and we keep them alive by playing them.',am:'ባህላዊ ጭፈራዎችና ጨዋታዎች ደስታን ይገልጻሉ፣ ማኅበረሰቡን ያገናኛሉ፣ ጤናማ ያደርጉናል። የቅርሳችን አካል ናቸው፤ በመጫወት በሕይወት እናቆያቸዋለን።'},
  points:[
   {en:'Dances: wedding dances (women and men), holiday dances (Ashendye, Buhe, Adwa chants), work dances.',am:'ጭፈራዎች፦ የሰርግ (የሴቶችና የወንዶች)፣ የበዓል (አሸንድዬ፣ ቡሄ፣ የአድዋ ፉከራ)፣ የሥራ ጭፈራዎች።'},
   {en:'Games: teter qelmosh, shimel kindiyosh, kinchift, zagol, yakob, doro til.',am:'ጨዋታዎች፦ የጠጠር ቅልሞሽ፣ ሽመል ቅንድዮሽ፣ ቅንጭፍት፣ ዛጎል፣ ያቆብ፣ የዶሮ ጥል።'},
   {en:'Benefits: joy, communication, relaxation, strength, coordination, alertness.',am:'ጥቅሞች፦ ደስታ፣ ግንኙነት፣ መዝናናት፣ ጥንካሬ፣ ቅንጅት፣ ንቃት።'}],
  words:[[{en:'Heritage',am:'ቅርስ'},{en:'traditions passed down from our ancestors',am:'ከአባቶቻችን የተላለፉ ባህሎች'}],[{en:'Rhythm',am:'ምት'},{en:'a regular repeated beat',am:'በተደጋጋሚ የሚመጣ መደበኛ ምት'}],[{en:'Coordination',am:'ቅንጅት'},{en:'body parts working together',am:'የአካል ክፍሎች አብረው መሥራት'}]],
  remember:{en:'A game from our grandparents is a gift to our grandchildren.',am:'የአያቶቻችን ጨዋታ ለልጅ ልጆቻችን ስጦታ ነው።'},
  exam:[[{en:'Why are work dances performed?',am:'የሥራ ጭፈራዎች ለምን ይጨፈራሉ?'},{en:'To make work lighter and work together in rhythm',am:'ሥራን ለማቅለልና በአንድ ምት አብሮ ለመሥራት'}],[{en:'Name three traditional games of your woreda.',am:'የወረዳችሁን ሦስት ባህላዊ ጨዋታዎች ጥቀሱ።'},{en:'Teter qelmosh, kinchift, yakob',am:'የጠጠር ቅልሞሽ፣ ቅንጭፍት፣ ያቆብ'}],[{en:'Two health benefits of traditional games?',am:'የባህላዊ ጨዋታዎች ሁለት የጤና ጥቅሞች?'},{en:'Strength and coordination',am:'ጥንካሬና ቅንጅት'}]],
  innovate:{title:{en:'Heritage games kit',am:'የቅርስ ጨዋታዎች ስብስብ'},text:{en:'Tourists and city schools love traditional games, but many children have never played them. Package a game kit and keep our heritage alive.',am:'ቱሪስቶችና የከተማ ትምህርት ቤቶች ባህላዊ ጨዋታዎችን ይወዳሉ፤ ብዙ ልጆች ግን ተጫውተዋቸው አያውቁም። የጨዋታ ስብስብ አዘጋጅታችሁ ቅርሳችንን በሕይወት አቆዩ።'},
   steps:[{en:'Interview a grandparent: which game did they play as a child? Write the rules.',am:'አያታችሁን ጠይቁ፦ በልጅነታቸው ምን ጨዋታ ተጫወቱ? ሕጎቹን ጻፉ።'},{en:'Collect materials: 5 smooth stones, shells or keys, a small cloth bag.',am:'ቁሳቁስ ሰብስቡ፦ 5 ለስላሳ ጠጠሮች፣ ዛጎል ወይም ቁልፍ፣ ትንሽ የጨርቅ ከረጢት።'},{en:'Draw a picture rules card in Amharic and English.',am:'በአማርኛና በእንግሊዝኛ የስዕል ሕግ ካርድ ሳሉ።'},{en:'Run a games afternoon at school, or sell kits at a festival.',am:'በትምህርት ቤት የጨዋታ ከሰዓት አዘጋጁ፤ ወይም በበዓል ስብስቡን ሽጡ።'}]}}}
 ]});
})();
