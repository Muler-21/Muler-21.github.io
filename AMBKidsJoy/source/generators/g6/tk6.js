global.window=global;const rnd=(a,b)=>a+Math.floor(Math.random()*(b-a+1));const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
global.G3={rnd,shuffle,numOpts:(ans,d)=>{const s=new Set([ans]);for(const x of d){if(s.size>=4)break;if(ans+x>=0)s.add(ans+x)}let k=1;while(s.size<4){s.add(ans+7*k);k++}return shuffle([...s])},tx:o=>typeof o==='string'?o:o.en};
require('/home/claude/site/grade6/kit4.js');require('/home/claude/site/grade6/kit5.js');require('/home/claude/site/grade6/kit6.js');
let bad=0;for(const k of Object.keys(K6.GEN)){for(let i=0;i<400;i++){let r;try{r=K6.GEN[k]()}catch(e){console.log('ERR',k,e.message);bad++;break}
 const os=r.o.map(x=>typeof x==='string'?x:x.en);if(!(r.a>=0&&r.a<os.length)||os.length<2||new Set(os).size!==os.length||os.some(x=>x==null||/NaN|undefined|Infinity/.test(x))||/NaN|undefined/.test(JSON.stringify(r.q))){console.log('BAD',k,JSON.stringify(r.q),os,r.a);bad++;break}}}
console.log('kinds',Object.keys(K6.GEN).length,'bad',bad);
