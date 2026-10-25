import json,glob
S={}
for f in sorted(glob.glob('/tmp/claude-0/-home-claude/36ae72fa-f251-5f08-9ceb-c41099f5a511/scratchpad/g4/sum_*.json')): S.update(json.load(open(f)))
out="/* Grade 4: one big idea per chapter; labels.length must equal notes.points.length */\nwindow.AMB_SUMMARY=window.AMB_SUMMARY||{};\nObject.assign(window.AMB_SUMMARY,{\n"+''.join(f"'{k}':{json.dumps(v,ensure_ascii=False,separators=(',',':'))},\n" for k,v in sorted(S.items()))+"});\n"
open('/home/claude/site/grade4/summaries4.js','w').write(out);print('summaries',len(S))
