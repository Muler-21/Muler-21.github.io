// prints JSON {short-id: missionCount} for Grade 1 units (evaluates each unit with stubs; +1 for the auto summary)
const fs=require('fs'),vm=require('vm'),path=require('path');const K=__dirname;const D=process.argv[2]||K;const SUMF=process.argv[3]||'summaries1.js';
const sc={window:{}};sc.window=sc;vm.createContext(sc);vm.runInContext(fs.readFileSync(path.join(D,SUMF),'utf8'),sc);
const G3={tx:x=>x,esc:x=>String(x),rnd:a=>a,shuffle:a=>a.slice(),numOpts:n=>({o:[String(n)],a:0}),emo:()=>({}),objs:()=>'',say(){},sayBtn:()=>''};
const kc={window:{},G3,Math,Array,Set,String,Object};kc.window=kc;vm.createContext(kc);vm.runInContext(fs.readFileSync(path.join(K,'kit1.js'),'utf8'),kc);
for(const k of fs.readdirSync(D).filter(f=>/^kit[2-9]\.js$/.test(f)))vm.runInContext(fs.readFileSync(path.join(D,k),'utf8'),kc);
const out={};
for(const f of fs.readdirSync(path.join(D,'units')).filter(f=>f.endsWith('.js'))){let cfg;const c={G3,K1:kc.K1,K4:kc.K4,K7:kc.K7,K5:kc.K5,KJ:kc.KJ,Unit:{start:x=>cfg=x},window:{},POSE:()=>'',Math,Array,Set,String,Object};vm.createContext(c);
 vm.runInContext(fs.readFileSync(path.join(D,'units',f),'utf8'),c);const id=f.slice(0,-3);
 out[id.slice(3)]=cfg.missions.length+(sc.AMB_SUMMARY[id]&&cfg.missions.some(m=>m.type==='notes')?1:0)}
console.log(JSON.stringify(out));
