/* ግብረገብ · ምዕራፍ 3 · እኩልነት */
(function(){
const {tx,esc}=G3;
const ROUNDS=[{n:12,k:4},{n:15,k:3},{n:18,k:6}];
const KIDS=[{en:'Almaz',am:'አልማዝ'},{en:'Bekele',am:'በቀለ'},{en:'Hawa',am:'ሐዋ'},{en:'Dawit',am:'ዳዊት'},{en:'Selam',am:'ሰላም'},{en:'Yonas',am:'ዮናስ'}];
const mango=(x,y)=>`<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="7" ry="9" fill="#F4B400" stroke="#C98F00" stroke-width="1.5"/><path d="M1-8q4-5 8-3" stroke="#2E8B57" stroke-width="2.5" fill="none"/></g>`;
const BOTH={en:'Think again: can a girl AND a boy learn to do this?',am:'እንደገና አስቡ፦ ሴትም ወንድም ይህን መሥራት መማር ይችላሉ?'};
Unit.start({
 id:'moral-3',subject:'moral',
 subjectName:{en:'Moral Education',am:'ግብረገብ'},chapter:{en:'Chapter 3',am:'ምዕራፍ 3'},
 title:{en:'Equality',am:'እኩልነት'},
 footer:{en:'Built on the Grade 3 Moral Education student book (ANRS Education Bureau / MoE), Chapter 3: equality.',am:'በ3ኛ ክፍል የግብረገብ መጽሐፍ (አብክመ ትምህርት ቢሮ / ትምህርት ሚኒስቴር) ምዕራፍ 3 ላይ የተመሰረተ፦ እኩልነት።'},
 missions:[
 {title:{en:'Story: the birthday party',am:'ታሪክ፦ የልደት ግብዣው'},type:'quiz',
  tip:{en:'Equality means every person gets the same rights, respect and chances, whatever their clothes, money, religion, language or sex. Read the story.',am:'እኩልነት ማለት ልብሱ፣ ገንዘቡ፣ ሃይማኖቱ፣ ቋንቋው ወይም ፆታው ምንም ቢሆን ሁሉም ሰው እኩል መብት፣ ክብርና ዕድል ማግኘት ነው። ታሪኩን አንብቡ።'},
  passage:{title:{en:'Dagim and Bereket',am:'ዳግምና በረከት'},paras:{
   en:['Dagim was popular at school because of his expensive shoes and toys. He chose friends carefully: "If you are poor, don\'t waste my time," he said.','Then a new boy, Bereket, arrived. His clothes were simple and his lunch box was cheap, but he was clever, kind and good at everything. Soon everyone wanted to be his friend.','Before his birthday, Dagim\'s friend Aster said: "Invite Bereket. Give him a chance." Bereket came and made the party joyful. Dagim said sorry and learned that people must be valued for who they are, not for what they wear or eat.'],
   am:['ዳግም በውድ ጫማዎቹና አሻንጉሊቶቹ ምክንያት በትምህርት ቤት ተወዳጅ ነበር። ጓደኛ ሲመርጥ ይመርጥ ነበር፦ “ድሃ ከሆንክ ጊዜዬን አታባክን” ይል ነበር።','ከዚያ በረከት የሚባል አዲስ ልጅ መጣ። ልብሱ ቀላል፣ የምሳ ዕቃውም ርካሽ ነበር፤ ግን ብልህ፣ ደግና በሁሉም ነገር ጎበዝ ነበር። ብዙም ሳይቆይ ሁሉም ጓደኛው መሆን ፈለገ።','ከልደቱ በፊት የዳግም ጓደኛ አስቴር “በረከትን ጋብዘው፤ ዕድል ስጠው” አለችው። በረከት መጥቶ ግብዣውን አደመቀው። ዳግም ይቅርታ ጠየቀ፤ ሰዎች በለበሱት ወይም በበሉት ሳይሆን በማንነታቸው መከበር እንዳለባቸው ተማረ።']}},
  items:[
   {q:{en:'How did Dagim choose friends at first?',am:'ዳግም መጀመሪያ ጓደኛ የሚመርጠው እንዴት ነበር?'},o:[{en:'By their money and clothes',am:'በገንዘባቸውና በልብሳቸው'},{en:'By their kindness',am:'በደግነታቸው'},{en:'By their marks',am:'በውጤታቸው'}],a:0},
   {q:{en:'Who helped Dagim change his mind?',am:'ዳግም ሐሳቡን እንዲቀይር የረዳችው ማን ናት?'},o:[{en:'Aster',am:'አስቴር'},{en:'The teacher',am:'መምህሩ'},{en:'His mother',am:'እናቱ'}],a:0},
   {q:{en:'What is the lesson?',am:'ትምህርቱ ምንድን ነው?'},o:[{en:'Accept and respect people for who they are',am:'ሰዎችን በማንነታቸው ተቀበሉ፤ አክብሩ'},{en:'Rich children are better',am:'ሀብታም ልጆች ይበልጣሉ'},{en:'Never invite new students',am:'አዲስ ተማሪ በፍጹም አትጋብዙ'}],a:0}]},
 {title:{en:'Share it equally',am:'በእኩል አካፍሉ'},type:'custom',
  tip:{en:'Equal means everyone gets the same. Tap a plate to give it one mango. Share all the mangoes so every child gets the same number. This is equality AND division!',am:'እኩል ማለት ሁሉም ተመሳሳይ ያገኛል ማለት ነው። ሳህኑን ንክታችሁ አንድ ማንጎ ስጡ። እያንዳንዱ ልጅ እኩል ቁጥር እንዲያገኝ ሁሉንም ማንጎዎች አካፍሉ። ይህ እኩልነትም ማካፈልም ነው!'},
  init(st){st.r=0;st.p=Array(ROUNDS[0].k).fill(0);st.msg='';st.cls=''},
  render(p,api,st){if(st.r>=ROUNDS.length){p.innerHTML=`<div class="explain">${tx({en:'Three fair shares! When things are shared equally, nobody feels left out, and the group stays strong.',am:'ሦስት ፍትሐዊ ክፍፍሎች! ነገሮች በእኩል ሲካፈሉ ማንም አይገለልም፤ ቡድኑም ጠንካራ ይሆናል።'})}</div>`;return}
   const R=ROUNDS[st.r];const left=R.n-st.p.reduce((a,b)=>a+b,0);
   p.innerHTML=`<div class="row" style="justify-content:space-between"><span class="pill">${tx({en:'Mangoes in the basket: {n}',am:'በቅርጫቱ ያሉ ማንጎዎች፦ {n}'},{n:left})}</span><span class="progress">${tx(api.UI.round,{i:st.r+1,n:ROUNDS.length})}</span></div>
    <div class="row" style="gap:10px;justify-content:center">${st.p.map((c,i)=>`<button class="tile" data-plate="${i}" style="min-width:120px;display:grid;gap:4px;justify-items:center" ${left?'':'disabled'}>
     <svg viewBox="0 0 100 70" width="100" height="70" aria-hidden="true"><ellipse cx="50" cy="52" rx="46" ry="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="3"/>${Array.from({length:c},(_,j)=>mango(16+(j%5)*17,42-Math.floor(j/5)*16)).join('')}</svg>
     <b>${esc(tx(KIDS[i]))}: ${c}</b></button>`).join('')}</div>
    <div class="row"><button class="btn" data-act="reset">${tx(api.UI.clear)}</button></div>
    <div class="feedback ${st.cls}">${st.msg}</div>`;
   p.onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
    if(b.dataset.act==='reset'){st.p=st.p.map(()=>0);st.msg=''}
    if(b.dataset.plate!==undefined){st.p[+b.dataset.plate]++;api.S.tick();
     if(st.p.reduce((a,c)=>a+c,0)===R.n){if(st.p.every(c=>c===st.p[0])){st.msg=tx({en:'Fair! {n} ÷ {k} = {q} each.',am:'ፍትሐዊ! {n} ÷ {k} = ለእያንዳንዱ {q}።'},{n:R.n,k:R.k,q:R.n/R.k});st.cls='good';api.S.yay();st.r++;
       if(st.r<ROUNDS.length)st.p=Array(ROUNDS[st.r].k).fill(0);else api.complete()}
      else{st.msg=tx({en:'Not fair yet: some children got more. Clear and try again.',am:'ገና ፍትሐዊ አይደለም፦ አንዳንዶቹ የበለጠ አገኙ። አጥፍታችሁ እንደገና ሞክሩ።'});st.cls='bad';api.S.nope()}}}
    api.rerender()}}},
 {title:{en:'Who can do this job?',am:'ይህን ሥራ ማን መሥራት ይችላል?'},type:'sort',
  tip:{en:'Gender equality means girls and boys, women and men, have equal rights and chances: to learn, play, work, vote and lead. Women are equal to men in body and mind. Who can do each job?',am:'የፆታ እኩልነት ማለት ሴቶችና ወንዶች፣ ልጃገረዶችና ወንድ ልጆች የመማር፣ የመጫወት፣ የመሥራት፣ የመምረጥና የመምራት እኩል መብትና ዕድል አላቸው ማለት ነው። ሴቶች በአካልም በአእምሮም ከወንዶች እኩል ናቸው። እያንዳንዱን ሥራ ማን መሥራት ይችላል?'},
  buckets:[{en:'Only boys and men',am:'ወንዶች ብቻ'},{en:'Only girls and women',am:'ሴቶች ብቻ'},{en:'Both girls and boys',am:'ሴቶችም ወንዶችም'}],
  items:[{t:{en:'Cook food',am:'ምግብ ማብሰል'},b:2,hint:BOTH},{t:{en:'Become a doctor',am:'ሐኪም መሆን'},b:2,hint:BOTH},{t:{en:'Drive a truck',am:'የጭነት መኪና መንዳት'},b:2,hint:BOTH},{t:{en:'Fetch water',am:'ውኃ መቅዳት'},b:2,hint:BOTH},{t:{en:'Lead the country',am:'ሀገር መምራት'},b:2,hint:BOTH},{t:{en:'Become an engineer',am:'መሐንዲስ መሆን'},b:2,hint:BOTH},{t:{en:'Take care of a baby',am:'ሕፃን መንከባከብ'},b:2,hint:BOTH}],
  end:{en:'Every job can be done by girls AND boys. Talent is not boy or girl: it belongs to everyone who practises.',am:'እያንዳንዱን ሥራ ሴቶችም ወንዶችም መሥራት ይችላሉ። ተሰጥኦ ወንድ ወይም ሴት አይደለም፤ የሚለማመድ ሁሉ ባለቤት ነው።'}},
 {title:{en:'Rights and responsibilities',am:'መብትና ኃላፊነት'},type:'sort',
  tip:{en:'At school every student has equal rights, and also responsibilities. Rights are what we should get; responsibilities are what we must do. Sort each card.',am:'በትምህርት ቤት እያንዳንዱ ተማሪ እኩል መብትና ኃላፊነት አለው። መብት ልናገኘው የሚገባ ነው፤ ኃላፊነት ልንፈጽመው የሚገባ ነው። እያንዳንዱን ካርድ መድቡ።'},
  buckets:[{en:'My right',am:'መብቴ'},{en:'My responsibility',am:'ኃላፊነቴ'}],
  items:[{t:{en:'To ask questions',am:'ጥያቄ የመጠየቅ'},b:0},{t:{en:'To get answers to my questions',am:'ለጥያቄዬ መልስ የማግኘት'},b:0},{t:{en:'To join school clubs and sports',am:'በክበባትና በስፖርት የመሳተፍ'},b:0},{t:{en:'To use school books and library',am:'የትምህርት ቤቱን መጻሕፍትና ቤተ መጻሕፍት የመጠቀም'},b:0},
   {t:{en:'Follow school rules',am:'የትምህርት ቤት ሕግ ማክበር'},b:1},{t:{en:'Do homework on time',am:'የቤት ሥራን በሰዓቱ መሥራት'},b:1},{t:{en:'Be a good example to others',am:'ለሌሎች አርዓያ መሆን'},b:1},{t:{en:'Take care of school property',am:'የትምህርት ቤት ንብረትን መንከባከብ'},b:1}]},
 {title:{en:'Equal languages, religions, cultures',am:'የቋንቋ፣ የሃይማኖትና የባህል እኩልነት'},type:'quiz',shuffle:true,
  tip:{en:'Ethiopia has more than 80 nations and nationalities, each with its own language, dress and dance. No language, religion or culture is higher or lower than another.',am:'ኢትዮጵያ ከ80 በላይ ብሔር ብሔረሰቦች አሏት፤ እያንዳንዳቸው የራሳቸው ቋንቋ፣ አለባበስና ጭፈራ አላቸው። የትኛውም ቋንቋ፣ ሃይማኖት ወይም ባህል ከሌላው አይበልጥም፤ አያንስም።'},
  items:[
   {q:{en:'Which is true about languages?',am:'ስለ ቋንቋ ትክክል የሆነው የትኛው ነው?'},o:[{en:'All languages are equal for communication',am:'ሁሉም ቋንቋዎች ለመግባቢያነት እኩል ናቸው'},{en:'Some languages are better than others',am:'አንዳንድ ቋንቋዎች ከሌሎቹ ይበልጣሉ'},{en:'Learning other languages is useless',am:'ሌላ ቋንቋ መማር ጥቅም የለውም'}],a:0},
   {q:{en:'A classmate prays differently from you. What do you do?',am:'አንድ የክፍል ጓደኛ ከእናንተ በተለየ ሁኔታ ይጸልያል። ምን ታደርጋላችሁ?'},o:[{en:'Respect it and stay friends',am:'አክብሩት፤ ጓደኝነታችሁን ቀጥሉ'},{en:'Laugh at it',am:'ሳቁበት'},{en:'Stop talking to them',am:'ማነጋገር አቁሙ'}],a:0},
   {q:{en:'Two groups disagree about religion. What is the right first step?',am:'ሁለት ቡድኖች በሃይማኖት ጉዳይ አልተግባቡም። ትክክለኛው የመጀመሪያ እርምጃ ምንድን ነው?'},o:[{en:'Solve it through discussion and tolerance',am:'በውይይትና በመቻቻል መፍታት'},{en:'Fight',am:'መጣላት'},{en:'Insult each other',am:'መሰዳደብ'}],a:0},
   {q:{en:'Which is NOT a benefit of cultural diversity?',am:'የባህል ብዝሃነት ጥቅም ያልሆነው የትኛው ነው?'},o:[{en:'Differences always lead to fights',am:'ልዩነቶች ሁልጊዜ ወደ ጠብ ያመራሉ'},{en:'Different dances and clothes create beauty',am:'የተለያዩ ጭፈራዎችና አልባሳት ውበት ይፈጥራሉ'},{en:'Diversity attracts tourists',am:'ብዝሃነት ቱሪስቶችን ይስባል'}],a:0},
   {q:{en:'What can happen when there is no equality?',am:'እኩልነት ከሌለ ምን ሊፈጠር ይችላል?'},o:[{en:'Conflict, injustice and instability',am:'ግጭት፣ ኢፍትሃዊነትና አለመረጋጋት'},{en:'More peace',am:'የበለጠ ሰላም'},{en:'Faster development',am:'ፈጣን እድገት'}],a:0}]},
 {title:{en:'Key words',am:'ቁልፍ ቃላት'},type:'match',
  tip:{en:'Match each word with its meaning.',am:'እያንዳንዱን ቃል ከትርጉሙ ጋር አዛምዱ።'},
  rounds:[[[{en:'Equality',am:'እኩልነት'},{en:'Same rights and chances for all, with no discrimination',am:'ያለ አድልዎ ለሁሉም ተመሳሳይ መብትና ዕድል'}],[{en:'Discrimination',am:'አድልዎ'},{en:'Treating someone unfairly because of who they are',am:'አንድን ሰው በማንነቱ ምክንያት ኢፍትሐዊ በሆነ መንገድ መያዝ'}],[{en:'Right',am:'መብት'},{en:'Something we should be able to have',am:'ልናገኘው የሚገባ ነገር'}],[{en:'Debo',am:'ደቦ'},{en:'Rural people working together to help each other',am:'የገጠር ሰዎች ለመረዳዳት በጋራ መሥራት'}],[{en:'Diversity',am:'ብዝሃነት'},{en:'Differences in culture, religion and language',am:'የባህል፣ የሃይማኖትና የቋንቋ ልዩነት'}]]]},
 {type:'exam',items:[
   {q:{en:'Which does NOT show equality of students at school?',am:'በትምህርት ቤት የተማሪዎችን እኩልነት የማያሳየው የትኛው ነው?'},o:[{en:'Forcing your idea on others',am:'በሌሎች ላይ የግል ሐሳብ መጫን'},{en:'Asking questions',am:'ጥያቄ መጠየቅ'},{en:'Joining clubs',am:'በክበባት መሳተፍ'}],a:0},
   {q:{en:'Which shows a people\'s culture?',am:'የሰዎችን ባህል የሚያሳየው የትኛው ነው?'},o:[{en:'All of these',am:'ሁሉም'},{en:'Clothing',am:'አለባበስ'},{en:'Traditional food',am:'ባህላዊ ምግብ'}],a:0},
   {q:{en:'Gender equality means…',am:'የፆታ እኩልነት ማለት…'},o:[{en:'Equal rights for women and men',am:'ለሴቶችና ለወንዶች እኩል መብት'},{en:'Only men lead',am:'ወንዶች ብቻ ይመራሉ'},{en:'Girls stay at home',am:'ሴቶች ቤት ይቀመጣሉ'}],a:0},
   {q:{en:'Every person has the right to follow their own religion.',am:'እያንዳንዱ ሰው የራሱን ሃይማኖት የመከተል መብት አለው።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0},
   {q:{en:'Which is a helpful tradition?',am:'ጠቃሚ ባህላዊ ልማድ የትኛው ነው?'},o:[{en:'Idir and equb',am:'እድርና እቁብ'},{en:'Abduction for marriage',am:'ጠለፋ'},{en:'Overspending on feasts',am:'ከአቅም በላይ መደገስ'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Equality means the same rights, respect and chances for everyone, without discrimination by sex, language, religion, culture or wealth.',am:'እኩልነት ማለት በፆታ፣ በቋንቋ፣ በሃይማኖት፣ በባህል ወይም በሀብት ሳይለይ ለሁሉም ተመሳሳይ መብት፣ ክብርና ዕድል ነው።'},
  points:[
   {en:'Gender equality: girls and boys can learn, play, work and lead equally.',am:'የፆታ እኩልነት፦ ሴቶችና ወንዶች በእኩል መማር፣ መጫወት፣ መሥራትና መምራት ይችላሉ።'},
   {en:'Language equality: all languages are equal; respect the languages of others.',am:'የቋንቋ እኩልነት፦ ሁሉም ቋንቋዎች እኩል ናቸው፤ የሌሎችን ቋንቋ አክብሩ።'},
   {en:'Religious equality: everyone may follow their religion; solve differences by discussion and tolerance.',am:'የሃይማኖት እኩልነት፦ ሁሉም ሃይማኖቱን የመከተል መብት አለው፤ ልዩነትን በውይይትና በመቻቻል ፍቱ።'},
   {en:'Cultural equality: no culture is higher or lower. Ethiopia has 80+ nations and nationalities.',am:'የባህል እኩልነት፦ የትኛውም ባህል አይበልጥም፤ አያንስም። ኢትዮጵያ ከ80 በላይ ብሔር ብሔረሰቦች አሏት።'},
   {en:'No equality → conflict, injustice, instability, violence.',am:'እኩልነት ከሌለ → ግጭት፣ ኢፍትሃዊነት፣ አለመረጋጋት፣ አመፅ።'}],
  words:[[{en:'Equality',am:'እኩልነት'},{en:'equal rights without discrimination',am:'ያለ አድልዎ እኩል መብት'}],[{en:'Discrimination',am:'አድልዎ'},{en:'unfair treatment',am:'ኢፍትሐዊ አያያዝ'}],[{en:'Stability',am:'መረጋጋት'},{en:'peaceful order in society',am:'ሰላማዊ የማኅበረሰብ ሁኔታ'}]],
  remember:{en:'Different is not less. Everyone counts the same.',am:'የተለየ ማለት ያነሰ ማለት አይደለም። ሁሉም እኩል ይቆጠራል።'},
  exam:[[{en:'List two student rights at school.',am:'በትምህርት ቤት ሁለት የተማሪ መብቶችን ዘርዝሩ።'},{en:'To ask questions; to join clubs',am:'ጥያቄ መጠየቅ፤ በክበባት መሳተፍ'}],[{en:'Two benefits of gender equality?',am:'የፆታ እኩልነት ሁለት ጥቅሞች?'},{en:'Better-educated citizens; a richer, more peaceful society',am:'የተሻለ የተማሩ ዜጎች፤ የበለፀገና ሰላማዊ ማኅበረሰብ'}],[{en:'Common harms of inequality?',am:'የእኩልነት አለመኖር ጉዳቶች?'},{en:'Conflict, injustice, violence, bad relationships',am:'ግጭት፣ ኢፍትሃዊነት፣ አመፅ፣ መጥፎ ግንኙነት'}]],
  innovate:{title:{en:'Design a game for everyone',am:'ለሁሉም የሚሆን ጨዋታ ንድፍ'},text:{en:'Great inventors design for ALL people. Invent a playground game that every child can play together: girls and boys, small and tall, and children with a disability.',am:'ታላላቅ ፈጣሪዎች ለሁሉም ሰው ይነድፋሉ። ሁሉም ልጅ፦ ሴትና ወንድ፣ አጭርና ረጅም፣ የአካል ጉዳት ያለበት ልጅም አብሮ የሚጫወተውን የመጫወቻ ሜዳ ጨዋታ ፍጠሩ።'},
   steps:[{en:'Think of a child who is often left out of games. Why?',am:'ብዙ ጊዜ ከጨዋታ የሚገለል ልጅ አስቡ። ለምን?'},{en:'Change the rules so everyone has an equal chance.',am:'ሁሉም እኩል ዕድል እንዲያገኝ ሕጎቹን ቀይሩ።'},{en:'Test it with 6 classmates and ask what to improve.',am:'ከ6 የክፍል ጓደኞች ጋር ሞክሩት፤ ምን መሻሻል እንዳለበት ጠይቁ።'},{en:'Teach your new game to the whole class.',am:'አዲሱን ጨዋታችሁን ለክፍሉ በሙሉ አስተምሩ።'}]}}}
 ]});
})();
