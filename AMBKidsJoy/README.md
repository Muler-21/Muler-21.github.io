# AMBKidsJoy — Learning Hub, Grades 1 to 8

**AMBKidsJoy** is a free, bilingual (Amharic / English) interactive learning hub for children from Grade 1 to Grade 8.

**Available now: Grades 1 to 4.**

**Grade 1** (folder `grade-1/`): Mathematics (10 chapters), Amharic (10), English (8 units), Environmental Science (5) and Health & PE (6): 39 chapters with finger-tracing of letters and numbers, counting games, listening (spoken English words), picture matching and movement challenges. Moral Education and Arts come when the books are added.

**Grade 2** (folder `grade-2/`): Mathematics (11 chapters), Amharic (10), English (8 units), Moral Education (6) and Health & PE (6): 41 chapters with place-value blocks, money and time, fractions and arrays, tally charts, reading stories, spoken English, honesty and fairness scenarios, rhythm games and movement challenges. Environmental Science and Arts come when the books are added.

**Grade 3**: It covers all seven subjects of the Grade 3 curriculum of the Amhara Region, Ethiopia: **54 chapters** with nearly 400 activities. Kokeb, a friendly star, guides children through games, experiments and stories.

**Grade 4** (folder `grade-4/`): all seven subjects: Mathematics (9), Amharic (10), English (10 units), Environmental Science (5), Ge'ez (11), Health & PE (6) and Performing & Visual Arts (5): 56 chapters with place-value and fraction drills, angle and bar-graph pictures, reading passages, Ge'ez words and numerals, rhythm games and arts projects.

**Coming next:** Grades 5 to 8 and *Joyful English · Grades 1 to 8*, a simple, clear guide to listening, speaking, reading and writing English. Every chapter opens with a one-picture summary and a guide for teachers and parents.

▶ **Open the platform:** https://muler-21.github.io/AMBKidsJoy/  
▶ **YouTube lessons:** https://www.youtube.com/@kidseducation9276

## Author

**Mulusew Kassa Bitew (PhD)**, researcher and educator, made AMBKidsJoy so that every child can learn with joy. [GitHub](https://muler-21.github.io/) · [Subscribe on YouTube](https://www.youtube.com/@kidseducation9276?sub_confirmation=1)

## What is inside (Grade 3)

| Subject | Chapters |
|---|---|
| Mathematics (ሒሳብ) | 12 |
| Amharic (አማርኛ) | 10 |
| English | 10 |
| Environmental Science (አካባቢ ሳይንስ) | 5 |
| Moral Education (ግብረገብ) | 6 |
| Health & Physical Education (ጤናና ሰውነት ማጎልመሻ) | 6 |
| Performing & Visual Arts (ሥነ ጥበባት) | 5 |

Every chapter has:
- **Hands-on missions**: sorting, matching, experiments, simulations, drawing and movement games.
- **Exam practice**: questions with the reason behind each answer.
- **Take-home notes**: big idea, key points, key words and an exam self-check.
- **A Young Innovator challenge**: a real project or small business idea, such as a compost business, a craft plan or a heritage games kit.

Every page works in Amharic and English (use the language button). Stars are saved only on the child's own device. No sign-up is needed and no personal data is collected.

## Use it without internet

1. Download this repository (green **Code** button, then **Download ZIP**).
2. Unzip it and open `index.html` in any web browser.

Fonts load from the internet when available. Without internet the pages still work with the computer's own fonts.

## Publish your own copy (GitHub Pages)

Go to **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/ (root)`. The site appears at `https://<your-username>.github.io/AMBKidsJoy/`.

## Folder structure

- `index.html`: home page with all subjects.
- `<subject>-<chapter>.html`: one page per chapter, for example `env-3.html`.
- `units/*.js`: the content of each chapter.
- `engine.js`, `icons.js`, `author.js`, `style.css`: the shared engine, drawings, author card and design.
- `source/`: editable source files and `build.py`. To rebuild the site, run `python3 build.py math-1-src.html` inside `source/`.

## Sources and acknowledgement

AMBKidsJoy follows these student books. Thank you to their writers. All activities and drawings are new and support (not replace) the textbooks; AMBKidsJoy is not an official Education Bureau publication. Unless noted, books are © ANRS Education Bureau, 2015 E.C.

- **Grade 1:** Mathematics (Bire Gete); Amharic (Hawaz Woldeyes, Getachew Tefera, Zinet Ahmed); Environmental Science (Ketemaw Wubet, Worku Melese); Health & PE (Adane Eshetu, Mesfin Ketema); English for Ethiopia Grade 1 (© FDRE Ministry of Education).
- **Grade 2:** Mathematics (Sintayehu Mesfin, Lakew Asnake); Amharic (Abebech Tesfaye, Eshete Mebrat); Health & PE (Mesfin Ketema, Adane Eshetu); English for Ethiopia Grade 2 (© FDRE Ministry of Education); Moral Education student book and teacher's guide (FDRE Ministry of Education; guide © Oromia Education Bureau).
- **Grade 3:** Mathematics (Liulseged Assefa, Kefyalew Shiferaw); Amharic (Hana Filate, Andargachew Mengesha); Environmental Science (Iyasu Adane, Kiros Tareke); Moral Education (Maru Mateos, Kidane Hailu; Amharic © ANRS Education Bureau, 2016 E.C.); Health & PE (Abebe Dese, Belete Assefa); Performing & Visual Arts (Semira Seid, Tehone Bante); Grade 3 English Student's Book.
- **Grade 4:** Mathematics (Kebede Alemu, Yilma Tsehayu); Amharic (Tsegaye Beyene, Fasil Mekuanint); English for Ethiopia Grade 4 (Melkamu Dumessa PhD, Temesgen Mereba PhD; © FDRE Ministry of Education); Environmental Science (Neknike Zewde, Assefa Yihune); Ge'ez (Muluken Andualem PhD, Gebre Ab Bogale; © 2017 E.C.); Health & PE (Abebe Dese, Belete Assefa); Performing & Visual Arts (Hussen Assen, Asfaw Reta).

Teachers and parents: please report any mistake, especially in the Amharic and Ge'ez text, through **Issues**.

## Licence

© 2026 Mulusew Kassa Bitew. Shared under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0** licence (CC BY-NC-SA 4.0). You may use, copy and adapt AMBKidsJoy for free, non-commercial education if you credit the author and share your changes under the same licence. See `LICENSE`.
