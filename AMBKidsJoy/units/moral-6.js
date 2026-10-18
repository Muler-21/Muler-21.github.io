/* ግብረገብ · ምዕራፍ 6 · የባህል ብዝሃነት */
(function(){
const {tx,esc}=G3;
/* quilt patterns: each square can show one cultural-style pattern */
const PAT=[
 (x,y)=>`<rect x="${x}" y="${y}" width="60" height="60" fill="#D9483B"/><path d="M${x} ${y+30}l15-15 15 15 15-15 15 15M${x} ${y+45}l15-15 15 15 15-15 15 15" stroke="#F4B400" stroke-width="4" fill="none"/>`,
 (x,y)=>`<rect x="${x}" y="${y}" width="60" height="60" fill="#1E8A5B"/>${[0,1,2].map(i=>`<circle cx="${x+15+i*15}" cy="${y+30}" r="5" fill="#fff"/>`).join('')}<rect x="${x}" y="${y+6}" width="60" height="6" fill="#F4B400"/><rect x="${x}" y="${y+48}" width="60" height="6" fill="#F4B400"/>`,
 (x,y)=>`<rect x="${x}" y="${y}" width="60" height="60" fill="#2F6FDE"/><path d="M${x+30} ${y+8}l22 22-22 22-22-22z" fill="#fff"/><path d="M${x+30} ${y+20}l10 10-10 10-10-10z" fill="#D9483B"/>`,
 (x,y)=>`<rect x="${x}" y="${y}" width="60" height="60" fill="#F4B400"/>${[0,1,2,3].map(i=>`<rect x="${x+4+i*14}" y="${y}" width="6" height="60" fill="#7A4E22"/>`).join('')}`,
 (x,y)=>`<rect x="${x}" y="${y}" width="60" height="60" fill="#FFFDF5"/><path d="M${x+30} ${y+6}v48M${x+6} ${y+30}h48" stroke="#8A4FBF" stroke-width="6"/><circle cx="${x+30}" cy="${y+30}" r="9" fill="#8A4FBF"/>`];
const BLANK=(x,y)=>`<rect x="${x}" y="${y}" width="60" height="60" fill="var(--surface-2)" stroke="var(--line)" stroke-dasharray="4 4"/>`;
Unit.start({
 id:'moral-6',subject:'moral',
 subjectName:{en:'Moral Education',am:'ግብረገብ'},chapter:{en:'Chapter 6',am:'ምዕራፍ 6'},
 title:{en:'Cultural Diversity',am:'የባህል ብዝሃነት'},
 footer:{en:'Built on the Grade 3 Moral Education student book (ANRS Education Bureau / MoE), Chapter 6: cultural diversity.',am:'በ3ኛ ክፍል የግብረገብ መጽሐፍ (አብክመ ትምህርት ቢሮ / ትምህርት ሚኒስቴር) ምዕራፍ 6 ላይ የተመሰረተ፦ የባህል ብዝሃነት።'},
 missions:[
 {title:{en:'Make a diversity quilt',am:'የብዝሃነት ጥልፍ ሥሩ'},type:'custom',
  tip:{en:'Diversity is the many ways people are different: language, religion, dress, music, food, weddings. Tap each square to change its pattern. Make a quilt with at least 4 different patterns, and see how differences make it beautiful.',am:'ብዝሃነት ሰዎች የሚለያዩባቸው ብዙ መንገዶች ናቸው፦ ቋንቋ፣ ሃይማኖት፣ አለባበስ፣ ሙዚቃ፣ ምግብ፣ ሰርግ። እያንዳንዱን ካሬ ንክታችሁ ንድፉን ቀይሩ። ቢያንስ 4 የተለያዩ ንድፎች ያሉበት ጥልፍ ሥሩ፤ ልዩነት እንዴት ውበት እንደሚፈጥር ተመልከቱ።'},
  init(st){st.q=Array(9).fill(-1);st.done=false},
  render(p,api,st){const kinds=new Set(st.q.filter(v=>v>=0)).size;const full=st.q.every(v=>v>=0);
   const sq=st.q.map((v,i)=>{const x=10+(i%3)*64,y=10+Math.floor(i/3)*64;return`<g data-q="${i}" style="cursor:pointer">${v<0?BLANK(x,y):PAT[v](x,y)}</g>`}).join('');
   p.innerHTML=`<div class="row" style="align-items:center;gap:18px"><div style="flex:0 1 260px;min-width:0"><svg viewBox="0 0 212 212" role="img" aria-label="quilt" style="width:100%;height:auto">${sq}</svg></div>
    <div style="flex:1 1 240px;min-width:0;display:grid;gap:8px"><span class="pill">${tx({en:'Different patterns: {k}',am:'የተለያዩ ንድፎች፦ {k}'},{k:kinds})}</span><span class="progress">${tx({en:'Squares filled: {n}/9',am:'የተሞሉ ካሬዎች፦ {n}/9'},{n:st.q.filter(v=>v>=0).length})}</span>
    ${st.done?`<div class="explain">${tx({en:'Look at your quilt! One pattern alone is nice, but many patterns together are amazing. Ethiopia is like this quilt: more than 80 nations and nationalities make one beautiful country.',am:'ጥልፋችሁን ተመልከቱ! አንድ ንድፍ ብቻ ጥሩ ነው፤ ብዙ ንድፎች አንድ ላይ ሲሆኑ ግን ድንቅ ናቸው። ኢትዮጵያ እንደዚህ ጥልፍ ናት፦ ከ80 በላይ ብሔር ብሔረሰቦች አንዲት ውብ ሀገር ይሠራሉ።'})}</div>`:full?`<div class="feedback bad">${tx({en:'Use at least 4 different patterns.',am:'ቢያንስ 4 የተለያዩ ንድፎችን ተጠቀሙ።'})}</div>`:''}</div></div>`;
   p.onclick=e=>{const g=e.target.closest('[data-q]');if(!g)return;const i=+g.dataset.q;st.q[i]=(st.q[i]+1)%PAT.length;api.S.tick();
    if(!st.done&&st.q.every(v=>v>=0)&&new Set(st.q).size>=4){st.done=true;api.complete()}
    api.rerender()}}},
 {title:{en:'Kinds of cultural diversity',am:'የባህል ብዝሃነት ዓይነቶች'},type:'match',
  tip:{en:'Every community has its own culture. Match each example with the kind of diversity it shows.',am:'እያንዳንዱ ማኅበረሰብ የራሱ ባህል አለው። እያንዳንዱን ምሳሌ ከሚያሳየው የብዝሃነት ዓይነት ጋር አዛምዱ።'},
  rounds:[[[{en:'Masinko, krar and kebero',am:'ማሲንቆ፣ ክራርና ከበሮ'},{en:'Traditional music',am:'ባህላዊ ሙዚቃ'}],[{en:'Habesha kemis and gabi',am:'የሐበሻ ቀሚስና ጋቢ'},{en:'Traditional dress',am:'ባህላዊ አለባበስ'}],[{en:'Injera, shiro and kitfo',am:'እንጀራ፣ ሽሮና ክትፎ'},{en:'Traditional food',am:'ባህላዊ ምግብ'}],[{en:'Amharic, Afaan Oromoo, Tigrinya',am:'አማርኛ፣ አፋን ኦሮሞ፣ ትግርኛ'},{en:'Language',am:'ቋንቋ'}],[{en:'Blessings, gifts and songs for a couple',am:'ለሙሽሮች ምርቃት፣ ስጦታና ዘፈን'},{en:'Wedding customs',am:'የሰርግ ባህል'}]]]},
 {title:{en:'True or false?',am:'እውነት ወይስ ሐሰት?'},type:'quiz',
  tip:{en:'Think carefully about each sentence.',am:'ስለ እያንዳንዱ ዓረፍተ ነገር በጥንቃቄ አስቡ።'},
  items:[
   {q:{en:'Culture and society cannot be separated.',am:'ባህልና ማኅበረሰብ አይነጣጠሉም።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0,e:{en:'There is no society without culture, and no culture without society.',am:'ባህል የሌለው ማኅበረሰብ የለም፤ ማኅበረሰብ የሌለው ባህልም የለም።'}},
   {q:{en:'Bigger cultural groups are more important than smaller ones.',am:'ትላልቅ የባህል ቡድኖች ከትናንሾቹ የበለጠ አስፈላጊ ናቸው።'},o:[{en:'False',am:'ሐሰት'},{en:'True',am:'እውነት'}],a:0,e:{en:'All cultures are equal. None is higher or lower.',am:'ሁሉም ባህሎች እኩል ናቸው። የትኛውም አይበልጥም፤ አያንስም።'}},
   {q:{en:'There is a society in the world with no culture.',am:'በዓለም ላይ ባህል የሌለው ማኅበረሰብ አለ።'},o:[{en:'False',am:'ሐሰት'},{en:'True',am:'እውነት'}],a:0},
   {q:{en:'Language is a system people use to communicate.',am:'ቋንቋ ሰዎች የሚግባቡበት ሥርዓት ነው።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0},
   {q:{en:'Cultural diversity attracts tourists and brings income to the country.',am:'የባህል ብዝሃነት ቱሪስቶችን ይስባል፤ ለሀገር ገቢ ያመጣል።'},o:[{en:'True',am:'እውነት'},{en:'False',am:'ሐሰት'}],a:0}]},
 {title:{en:'Accepting diversity',am:'ብዝሃነትን ማስተናገድ'},type:'sort',
  tip:{en:'A society with many cultures lives in peace only when its members respect each other. Sort each action.',am:'ብዙ ባህሎች ያሉበት ማኅበረሰብ በሰላም የሚኖረው አባላቱ እርስ በርስ ሲከባበሩ ብቻ ነው። እያንዳንዱን ተግባር መድቡ።'},
  buckets:[{en:'Accepts diversity',am:'ብዝሃነትን ያስተናግዳል'},{en:'Rejects diversity',am:'ብዝሃነትን ይቃወማል'}],
  items:[{t:{en:'Trying food from another culture',am:'የሌላ ባህል ምግብ መቅመስ'},b:0},{t:{en:'Learning a greeting in a friend\'s language',am:'በጓደኛ ቋንቋ ሰላምታ መማር'},b:0},{t:{en:'Admiring different traditional dances',am:'የተለያዩ ባህላዊ ጭፈራዎችን ማድነቅ'},b:0},{t:{en:'Encouraging every group to take part',am:'እያንዳንዱ ቡድን እንዲሳተፍ ማበረታታት'},b:0},
   {t:{en:'Calling someone\'s way of life "backward"',am:'የሰውን አኗኗር “ኋላ ቀር” ማለት'},b:1},{t:{en:'Saying my culture is the best of all',am:'የኔ ባህል ከሁሉም ይበልጣል ማለት'},b:1},{t:{en:'Laughing at someone\'s clothes',am:'በሰው አለባበስ መሳቅ'},b:1}]},
 {title:{en:'Why diversity is good for Ethiopia',am:'ብዝሃነት ለኢትዮጵያ ለምን ይጠቅማል'},type:'quiz',shuffle:true,
  tip:{en:'Each culture gives something special. Choose the best answer.',am:'እያንዳንዱ ባህል ልዩ ነገር ያበረክታል። ትክክለኛውን ምረጡ።'},
  items:[
   {q:{en:'Different cultures give us…',am:'የተለያዩ ባህሎች ይሰጡናል…'},o:[{en:'new ideas, new knowledge and new skills',am:'አዲስ ሐሳብ፣ አዲስ እውቀትና አዲስ ክህሎት'},{en:'nothing useful',am:'ምንም ጠቃሚ ነገር'},{en:'only problems',am:'ችግር ብቻ'}],a:0},
   {q:{en:'Respecting each other helps us fight our common enemy, which is…',am:'መከባበር የጋራ ጠላታችንን እንድንዋጋ ይረዳናል፤ እሱም…'},o:[{en:'poverty',am:'ድህነት'},{en:'our neighbours',am:'ጎረቤቶቻችን'},{en:'other languages',am:'ሌሎች ቋንቋዎች'}],a:0},
   {q:{en:'Tourists come to Ethiopia partly because of…',am:'ቱሪስቶች ወደ ኢትዮጵያ የሚመጡት በከፊል ምክንያቱ…'},o:[{en:'our many dances, clothes and foods',am:'ብዙ ጭፈራዎቻችን፣ አልባሳታችንና ምግቦቻችን'},{en:'everyone being the same',am:'ሁሉም ተመሳሳይ መሆኑ'},{en:'conflicts',am:'ግጭቶች'}],a:0}]},
 {type:'exam',items:[
   {q:{en:'Clothes worn at celebrations are…',am:'በበዓላት የሚለበሱ…'},o:[{en:'traditional dress',am:'ባህላዊ ልብስ'},{en:'language',am:'ቋንቋ'},{en:'religion',am:'ሃይማኖት'}],a:0},
   {q:{en:'Ways of preparing and eating food are…',am:'ምግብ የማዘጋጀትና የመብላት ዘዴዎች…'},o:[{en:'traditional food culture',am:'ባህላዊ ምግብ'},{en:'traditional music',am:'ባህላዊ ሙዚቃ'},{en:'ethnic group',am:'ጎሳ'}],a:0},
   {q:{en:'Which helps accept diversity?',am:'ብዝሃነትን ለማስተናገድ የሚረዳው የትኛው ነው?'},o:[{en:'Avoid thinking one culture is above another',am:'አንዱን ባህል የበላይ አድርጎ ከመቁጠር መቆጠብ'},{en:'Calling others backward',am:'ሌሎችን ኋላ ቀር ማለት'},{en:'Ignoring other cultures',am:'ሌሎች ባህሎችን ችላ ማለት'}],a:0},
   {q:{en:'A wedding is a ceremony where…',am:'ሰርግ… የሚደረግበት ሥነ ሥርዓት ነው'},o:[{en:'two people join in marriage',am:'ሁለት ሰዎች በትዳር የሚዋሃዱበት'},{en:'crops are harvested',am:'ሰብል የሚሰበሰብበት'},{en:'children start school',am:'ልጆች ትምህርት የሚጀምሩበት'}],a:0}]},
 {type:'notes',notes:{
  big:{en:'Cultural diversity means different languages, religions, dress, music, food and weddings living together. When we respect them all as equal, Ethiopia becomes stronger and more beautiful.',am:'የባህል ብዝሃነት ማለት የተለያዩ ቋንቋዎች፣ ሃይማኖቶች፣ አለባበሶች፣ ሙዚቃዎች፣ ምግቦችና የሰርግ ባህሎች አብረው መኖራቸው ነው። ሁሉንም እኩል ስናከብር ኢትዮጵያ የበለጠ ጠንካራና ውብ ትሆናለች።'},
  points:[
   {en:'Kinds of diversity: ethnic group, language, religion, dress, music, food, wedding customs.',am:'የብዝሃነት ዓይነቶች፦ ጎሳ፣ ቋንቋ፣ ሃይማኖት፣ አለባበስ፣ ሙዚቃ፣ ምግብ፣ የሰርግ ባህል።'},
   {en:'Benefits: beauty, tourism income, new ideas and skills, unity against poverty.',am:'ጥቅሞች፦ ውበት፣ የቱሪዝም ገቢ፣ አዲስ ሐሳብና ክህሎት፣ በድህነት ላይ አንድነት።'},
   {en:'How to accept it: respect differences, never call any culture superior or backward, appreciate and encourage all groups.',am:'እንዴት እንደምናስተናግድ፦ ልዩነትን ማክበር፣ ማንንም ባህል የበላይ ወይም ኋላ ቀር አለማለት፣ ሁሉንም ቡድኖች ማድነቅና ማበረታታት።'}],
  words:[[{en:'Diversity',am:'ብዝሃነት'},{en:'the presence of different cultures, languages and beliefs',am:'የተለያዩ ባህሎች፣ ቋንቋዎችና እምነቶች መኖር'}],[{en:'Accommodate',am:'ማስተናገድ'},{en:'allowing and respecting differences',am:'ልዩነትን መፍቀድና ማክበር'}],[{en:'Ethnic group',am:'ጎሳ'},{en:'a community sharing language, history and culture',am:'ቋንቋ፣ ታሪክና ባህል የሚጋራ ማኅበረሰብ'}]],
  remember:{en:'Unity in diversity: different colours, one beautiful flag.',am:'አንድነት በብዝሃነት፦ የተለያዩ ቀለሞች፣ አንድ ውብ ሰንደቅ።'},
  exam:[[{en:'List three kinds of cultural diversity.',am:'ሦስት የባህል ብዝሃነት ዓይነቶችን ዘርዝሩ።'},{en:'Language, dress, food (also music, religion, weddings)',am:'ቋንቋ፣ አለባበስ፣ ምግብ (ሙዚቃ፣ ሃይማኖት፣ ሰርግም)'}],[{en:'Why should we respect cultural diversity?',am:'የባህል ብዝሃነትን ለምን እናከብራለን?'},{en:'For peace, beauty, tourism and to fight poverty together',am:'ለሰላም፣ ለውበት፣ ለቱሪዝምና ድህነትን በጋራ ለመዋጋት'}]],
  innovate:{title:{en:'Culture fair and tourist guide',am:'የባህል ትርኢትና የቱሪስት መመሪያ'},text:{en:'Tourism is a big business. Visitors pay to see dances, taste food and buy crafts. Plan a class culture fair and a mini tourist guide of your area.',am:'ቱሪዝም ትልቅ ሥራ ነው። ጎብኚዎች ጭፈራ ለማየት፣ ምግብ ለመቅመስና ዕደ ጥበብ ለመግዛት ይከፍላሉ። የክፍል የባህል ትርኢትና የአካባቢያችሁን ትንሽ የቱሪስት መመሪያ አቅዱ።'},
   steps:[{en:'Each group picks one culture: its greeting, dress, food and music.',am:'እያንዳንዱ ቡድን አንድ ባህል ይምረጥ፦ ሰላምታው፣ አለባበሱ፣ ምግቡና ሙዚቃው።'},{en:'Prepare a table with pictures, objects and a short talk.',am:'ስዕሎች፣ ዕቃዎችና አጭር ገለጻ ያለበት ጠረጴዛ አዘጋጁ።'},{en:'Draw a one-page guide: 3 places and 3 traditions visitors should see.',am:'ባለ አንድ ገጽ መመሪያ ሳሉ፦ ጎብኚዎች ሊያዩአቸው የሚገቡ 3 ቦታዎችና 3 ባህሎች።'},{en:'Invite parents. Which table did they love most, and why?',am:'ወላጆችን ጋብዙ። በጣም የወደዱት የትኛውን ጠረጴዛ ነው? ለምን?'}]}}}
 ]});
})();
