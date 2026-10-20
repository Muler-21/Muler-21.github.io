# AMBKidsJoy — Learning Hub, Grades 1 to 8

**AMBKidsJoy** is a free, bilingual (Amharic / English) interactive learning hub for children from Grade 1 to Grade 8.

**Available now: Grade 3.** It covers all seven subjects of the Grade 3 curriculum of the Amhara Region, Ethiopia: **54 chapters** with nearly 400 activities. Kokeb, a friendly star, guides children through games, experiments and stories.

**Coming next:** the other grades (1, 2 and 4 to 8) and *Joyful English · Grades 1 to 8*, a simple, clear guide to listening, speaking, reading and writing English. Every chapter opens with a one-picture summary and a guide for teachers and parents.

▶ **Open the platform:** https://muler-21.github.io/AMBKidsJoy/  
▶ **YouTube lessons:** https://www.youtube.com/@kidseducation9276

## Author

**Mulusew Kassa Bitew (PhD)**, founder of AMBKidsJoy, researcher and educator.

Dr. Mulusew Kassa Bitew holds a PhD in Agricultural Technologies and Biotechnologies from the University of Molise (Italy) and an MSc from Wageningen University (the Netherlands). He is a Postdoctoral Research Fellow in the area of MultiOmics at the University of Molise, was a fellow at ILRI in Addis Ababa, and taught at Debre Markos and Mekelle Universities. He created AMBKidsJoy so that every child can learn with joy, think sharply and grow up to build Ethiopia.

GitHub: [@Muler-21](https://github.com/Muler-21)

## What is inside

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

AMBKidsJoy follows the chapters and learning goals of the Grade 3 student books of the Amhara National Regional State (ANRS) Education Bureau:
Mathematics, Amharic, Environmental Science, Health & Physical Education and Performing & Visual Arts (© ANRS Education Bureau, 2015 E.C.), Moral Education (English edition by the FDRE Ministry of Education; Amharic translation © ANRS Education Bureau, 2016 E.C.), and the Grade 3 English Student's Book.

We thank their authors, editors and illustrators. All stories, questions, games, drawings and innovator challenges in AMBKidsJoy were written and drawn new. They support the textbooks and the teacher; they do not replace them. AMBKidsJoy is not an official publication of the Education Bureau.

Teachers and parents: please report any mistake, especially in the Amharic text, through **Issues**.

## Licence

© 2026 Mulusew Kassa Bitew. Shared under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0** licence (CC BY-NC-SA 4.0). You may use, copy and adapt AMBKidsJoy for free, non-commercial education if you credit the author and share your changes under the same licence. See `LICENSE`.
