/* Grade 1 English · Unit 3 · Colours */
(function(){
const {shuffle}=G3;
const C=[['red','#E53935','ቀይ'],['blue','#1E88E5','ሰማያዊ'],['green','#43A047','አረንጓዴ'],['yellow','#FDD835','ቢጫ'],['black','#212121','ጥቁር'],['brown','#6D4C41','ቡናማ'],['purple','#8E24AA','ወይን ጠጅ'],['pink','#F06292','ሮዝ'],['orange','#FB8C00','ብርቱካናማ']];
const dot=c=>`<svg viewBox="0 0 40 40" width="46" height="46"><circle cx="20" cy="20" r="17" fill="${c}" stroke="#0003" stroke-width="2"/></svg>`;
const M=K1.engMissions({
 listen:[['red','🔴','ቀይ'],['blue','🔵','ሰማያዊ'],['green','🟢','አረንጓዴ'],['yellow','🟡','ቢጫ'],['black','⚫','ጥቁር'],['brown','🟤','ቡናማ'],['purple','🟣','ወይን ጠጅ'],['orange','🟠','ብርቱካናማ']],
 letters:[['🎸','guitar'],['🍇','grapes'],['🧥','jacket'],['🌹','rose'],['🌈','rainbow'],['🧶','yarn'],['🐸','frog'],['🐟','fish']],
 trace:['g','j','r','y','G','J','R','Y'],
 spell:[{w:'red',blanks:[0],e:'🔴',am:'ቀይ'},{w:'blue',blanks:[0,2],e:'🔵',am:'ሰማያዊ'},{w:'pink',blanks:[0],e:'🌸',am:'ሮዝ'},{w:'green',blanks:[0,3],e:'🟢',am:'አረንጓዴ'}],
 sentences:[['It','is','green','colour.'],['What','colour','is','this?'],['This','is','my','sister.']]
});
M.push({title:{en:'Colour things',am:'የነገሮች ቀለም'},type:'quiz',shuffle:true,
 tip:{en:'What colour is it? Say "It is … colour."',am:'ቀለሙ ምንድን ነው? "It is … colour." በሉ።'},
 items:[['🍌','yellow'],['🍃','green'],['🍅','red'],['🌊','blue'],['🍫','brown'],['🍊','orange']].map(([e,c])=>{const o=shuffle([c,...shuffle(C.map(x=>x[0]).filter(x=>x!==c)).slice(0,2)]);
  return{say:"What colour is it?",fig:`<span class="emo" style="font-size:3.4rem">${e}</span>`,q:'What colour is it?',o:o.map(x=>({svg:dot(C.find(y=>y[0]===x)[1]),label:x})),a:o.indexOf(c)}})});
M.push({title:{en:'Introduce people',am:'ሰዎችን ማስተዋወቅ'},type:'quiz',
 tip:{en:'"My name is Biruk. This is my sister. Nice to meet you."',am:'"My name is Biruk. This is my sister. Nice to meet you."'},
 items:[{q:'"Nice to meet you."',o:['Nice to meet you, too.','Good night.','I am seven.'],a:0},
  {q:{en:'Complete: "My father\'s ___ is Gemechu."',am:'አሟሉ፦ "My father\'s ___ is Gemechu."'},o:['name','colour','book'],a:0},
  {q:{en:'Introduce your brother:',am:'ወንድማችሁን አስተዋውቁ፦'},o:['This is my brother.','This is my sister.','I am a brother.'],a:0}]});
M.push({type:'exam',items:[
  {q:{en:'The sky is…',am:'ሰማይ…'},o:['blue','red','black'],a:0},
  {q:{en:'"ቢጫ" in English is…',am:'"ቢጫ" በእንግሊዝኛ…'},o:['yellow','purple','brown'],a:0},
  {q:{en:'"rose" starts with…',am:'"rose" የሚጀምረው በ…'},o:['r','y','g'],a:0},
  {q:{en:'Correct sentence:',am:'ትክክለኛው ዓረፍተ ነገር፦'},o:['It is red.','red It is.','is It red.'],a:0},
  {q:'"What colour is this? 🟢"',o:['It is green.','It is pink.'],a:0}]});
M.push({type:'notes',notes:{
 big:{en:'Colours make our world beautiful. We name colours and introduce ourselves and others in English.',am:'ቀለማት ዓለማችንን ያስውባሉ። የቀለማትን ስም እንጠራለን፤ ራሳችንንና ሌሎችን በእንግሊዝኛ እናስተዋውቃለን።'},
 points:[{en:'Colours: red, blue, green, yellow, black, brown, purple, pink, orange.',am:'ቀለማት፦ red (ቀይ)፣ blue (ሰማያዊ)፣ green (አረንጓዴ)፣ yellow (ቢጫ)፣ black (ጥቁር)፣ brown (ቡናማ)፣ purple፣ pink፣ orange።'},{en:'"What colour is this?" "It is green."',am:'"What colour is this?" "It is green."'},{en:'Letters g, j, r, y: guitar, jacket, rose, yellow.',am:'ፊደላት g፣ j፣ r፣ y፦ guitar፣ jacket፣ rose፣ yellow።'},{en:'"My name is… This is my sister. Nice to meet you."',am:'"My name is… This is my sister. Nice to meet you."'}],
 words:[['colour',{en:'colour',am:'ቀለም'}],['rainbow',{en:'rainbow',am:'ቀስተ ደመና'}],['introduce',{en:'introduce',am:'ማስተዋወቅ'}]],
 remember:{en:'Red + yellow = orange! Try mixing colours.',am:'Red + yellow = orange! ቀለማትን አቀላቅላችሁ ሞክሩ።'},
 exam:[[{en:'Name 5 colours in English',am:'5 ቀለማትን በእንግሊዝኛ ጥቀሱ'},'red, blue, green, yellow, black'],[{en:'Ask about a colour',am:'ስለ ቀለም ጠይቁ'},'What colour is this?']],
 innovate:{title:{en:'Natural colour paints',am:'የተፈጥሮ ቀለሞች'},text:{en:'Long ago, Ethiopian artists made paint from plants and soil. Make your own colours from leaves, flowers, coffee and soil.',am:'ድሮ የኢትዮጵያ ሠዓሊዎች ከተክልና ከአፈር ቀለም ይሠሩ ነበር። ከቅጠል፣ ከአበባ፣ ከቡናና ከአፈር የራሳችሁን ቀለም ሥሩ።'},
  steps:[{en:'Collect green leaves, red flowers, coffee and soil.',am:'አረንጓዴ ቅጠሎች፣ ቀይ አበቦች፣ ቡናና አፈር ሰብስቡ።'},{en:'With an adult, crush each with a little water.',am:'ከትልቅ ሰው ጋር እያንዳንዱን በጥቂት ውኃ ደቅቁ።'},{en:'Paint a picture and name each colour in English.',am:'ሥዕል ሳሉና የእያንዳንዱን ቀለም ስም በእንግሊዝኛ ጻፉ።'},{en:'Show it and say "It is green colour."',am:'አሳዩና "It is green colour." በሉ።'}]}}});
Unit.start({id:'g1-english-3',grade:1,subject:'english',subjectName:{en:'English',am:'እንግሊዝኛ'},chapter:{en:'Unit 3',am:'ክፍል 3'},
 title:{en:'Colours',am:'ቀለማት'},footer:{en:'Built on English for Ethiopia, Grade 1, Unit 3: colours, letter sounds and introducing people.',am:'በEnglish for Ethiopia 1ኛ ክፍል፣ ክፍል 3 ላይ የተመሰረተ፦ ቀለማት፣ የፊደል ድምፆችና ማስተዋወቅ።'},missions:M});
})();
