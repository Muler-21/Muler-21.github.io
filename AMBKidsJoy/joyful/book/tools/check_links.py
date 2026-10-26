"""Check that every catalogue URL still opens. Run from a normal internet connection:
   python3 tools/check_links.py            (writes data/link-report.csv)
It sends polite HEAD/GET requests (1 per second) and never downloads full pages."""
import json,csv,time,urllib.request,os
H=os.path.dirname(os.path.abspath(__file__));D=os.path.join(H,'..','data')
R=json.load(open(os.path.join(D,'catalog.json')))
out=open(os.path.join(D,'link-report.csv'),'w',newline='');w=csv.writer(out);w.writerow(['resource_id','url','status','checked'])
for r in R:
    u=r['specific_lesson_url']
    if not u.startswith('http'):continue
    try:
        req=urllib.request.Request(u,method='HEAD',headers={'User-Agent':'JoyfulEnglishLinkCheck/1.0'})
        s=urllib.request.urlopen(req,timeout=15).status
    except Exception as e: s=getattr(e,'code',str(e)[:60])
    w.writerow([r['resource_id'],u,s,time.strftime('%Y-%m-%d')]);print(s,u);time.sleep(1)
print('done: data/link-report.csv')
