window.GRAMMATICA_DATA = window.GRAMMATICA_DATA || {};
window.GRAMMATICA_DATA.B1 = [
  {
    id: "b1-voltooid-verleden-tijd",
    level: "B1",
    title: "زمان ماضی بعید (Voltooid Verleden Tijd)",
    nl: "Voltooid Verleden Tijd",
    sum: "[[Voltooid Verleden Tijd]] با **had** یا **was** + فعل سوم (deelwoord) ساخته می‌شود و برای نشان دادن اتفاقی که پیش از یک لحظه‌ی دیگر در گذشته رخ داده به کار می‌رود.",
    blocks: [
      {
        h: "ساختار فعل",
        p: "ماضی بعید هلندی از دو بخش تشکیل می‌شود: فعل یاور **had/hadden** یا **was/waren** + [[voltooid deelwoord]] (فعل سوم/قسمت سوم فعل). انتخاب بین [[had]] و [[was]] دقیقاً مثل انتخاب [[heb]] و [[ben]] در زمان ماضی نقلی (voltooid tegenwoordige tijd) است: فعل‌های حرکتی و تغییر حالت با [[zijn]] و بقیه با [[hebben]] صرف می‌شوند.",
        table: { head: ["فاعل", "hebben-فعل‌ها", "zijn-فعل‌ها"], rows: [["ik", "had gewerkt", "was gegaan"], ["jij/u", "had gewerkt", "was gegaan"], ["hij/zij", "had gewerkt", "was gegaan"], ["wij/jullie/zij", "hadden gewerkt", "waren gegaan"]] },
        ex: [
          { nl: "Ik had het al gedaan.", fa: "من قبلاً آن را انجام داده بودم." },
          { nl: "Zij waren al vertrokken.", fa: "آنها قبلاً رفته بودند." }
        ],
        tip: "فعل‌هایی مثل [[blijven]], [[worden]], [[gebeuren]] هم با [[zijn]] صرف می‌شوند، نه [[hebben]]."
      },
      {
        h: "کاربرد: گذشته‌ی قبل از گذشته",
        p: "از [[voltooid verleden tijd]] وقتی استفاده می‌کنیم که بخواهیم بگوییم کاری پیش از لحظه‌ی دیگری در گذشته انجام شده بود. این زمان همان **ماضی بعید فارسی** است: یک نقطه‌ی گذشته داریم (با [[verleden tijd]] ساده) و یک اتفاق قبل‌تر از آن (با [[voltooid verleden tijd]]).",
        ex: [
          { nl: "Toen ik op het station aankwam, was de trein al vertrokken.", fa: "وقتی به ایستگاه رسیدم، قطار قبلاً حرکت کرده بود." },
          { nl: "Hij vertelde dat hij nog nooit in Parijs was geweest.", fa: "او گفت که هرگز پیش از آن در پاریس نبوده است." },
          { nl: "Nadat we hadden gegeten, gingen we wandelen.", fa: "بعد از اینکه غذا خورده بودیم، به پیاده‌روی رفتیم." }
        ]
      },
      {
        h: "کلمات نشانگر رایج",
        p: "کلماتی مثل [[al]] (قبلاً), [[nog niet]] (هنوز نه), [[net]] (تازه), [[voordat]] (پیش از آنکه) و [[nadat]] (پس از آنکه) اغلب همراه ماضی بعید می‌آیند و رابطه‌ی زمانی بین دو اتفاق گذشته را مشخص می‌کنند.",
        list: ["[[al]] = قبلاً، تا آن زمان", "[[nog niet]] = هنوز ... نه", "[[net]] = تازه، همین الان (در گذشته)", "[[voordat]]/[[nadat]] = قبل از اینکه / بعد از اینکه"]
      },
      {
        h: "ترتیب کلمات در جملات پیرو",
        p: "وقتی [[voltooid verleden tijd]] در یک جمله‌ی پیرو (بعد از [[toen]], [[nadat]], [[voordat]], [[omdat]]) می‌آید، فعل یاور ([[had]]/[[was]]) به انتهای جمله‌ی پیرو منتقل می‌شود و بعد از فعل سوم قرار می‌گیرد: **...omdat hij het geld niet had meegenomen.**",
        ex: [
          { nl: "Ik was blij omdat ik eindelijk mijn diploma had gehaald.", fa: "خوشحال بودم چون سرانجام دیپلمم را گرفته بودم." },
          { nl: "Omdat het hard had geregend, was de weg nat.", fa: "چون باران شدیدی باریده بود، جاده خیس بود." }
        ],
        tip: "در جمله‌ی پیرو، فعل یاور همیشه بعد از فعل سوم و در انتهای جمله می‌آید: [[...dat hij het niet gezien had]] (نه had gezien)."
      }
    ],
    ex: [
      { type: "mc", q: "کدام جمله درست ماضی بعید را نشان می‌دهد؟ (او قبلاً رفته بود)", options: ["Hij was al gegaan.", "Hij had al gegaan.", "Hij is al gegaan.", "Hij ging al."], answer: 0, exp: "[[gaan]] فعل حرکتی است و با [[zijn]] صرف می‌شود، پس صورت درست [[was gegaan]] است." },
      { type: "fill", q: "Toen wij aankwamen, ___ de film al begonnen.", answers: ["was"], exp: "فعل [[beginnen]] با [[zijn]] صرف می‌شود، و چون فاعل مفرد (de film) است فعل یاور [[was]] است." },
      { type: "mc", q: "جای خالی را با گزینه‌ی درست پر کنید: Ik ___ het boek al gelezen voordat de film uitkwam.", options: ["had", "was", "heb", "ben"], answer: 0, exp: "[[lezen]] با [[hebben]] صرف می‌شود، پس ماضی بعید آن [[had gelezen]] است." },
      { type: "fill", q: "Zij ___ nog niet wakker geworden toen de telefoon ging.", answers: ["was"], exp: "[[worden]] با [[zijn]] صرف می‌شود؛ فاعل مفرد زن (zij) → [[was]]." },
      { type: "order", q: "ترتیب صحیح کلمات را برای ساخت جمله‌ی «او وقتی من رسیدم، قبلاً رفته بود» پیدا کنید.", tokens: ["Hij", "was", "al", "vertrokken", "toen", "ik", "kwam"], answers: [["Hij", "was", "al", "vertrokken", "toen", "ik", "kwam"]], exp: "ساختار: فاعل + was + al + فعل سوم + toen + جمله‌ی پیرو. فعل یاور [[was]] چون [[vertrekken]] با zijn صرف می‌شود." },
      { type: "mc", q: "کدام جمله به درستی بیان می‌کند که «هرگز تا آن لحظه در پاریس نبوده»؟", options: ["Hij was nog nooit in Parijs geweest.", "Hij is nog nooit in Parijs geweest.", "Hij was nog nooit in Parijs.", "Hij heeft nog nooit in Parijs geweest."], answer: 0, exp: "برای رویدادی که پیش از یک لحظه‌ی دیگر در گذشته صدق می‌کند از [[was ... geweest]] (ماضی بعید zijn) استفاده می‌شود." },
      { type: "fill", q: "Nadat ze ___ gegeten, gingen ze naar de bioscoop.", answers: ["hadden"], exp: "فاعل جمع (ze/zij) با فعل یاور [[hadden]] می‌آید؛ [[eten]] با [[hebben]] صرف می‌شود." },
      { type: "mc", q: "تفاوت «Ik had het gedaan» و «Ik heb het gedaan» در چیست؟", options: ["اولی نشان می‌دهد کاری پیش از یک لحظه‌ی دیگر در گذشته انجام شده؛ دومی فقط می‌گوید کاری در گذشته (تا الان) انجام شده.", "هیچ تفاوتی ندارند.", "اولی برای آینده است.", "دومی ماضی بعید است."], answer: 0, exp: "[[had gedaan]] ماضی بعید است (گذشته‌ی قبل از گذشته)، در حالی که [[heb gedaan]] ماضی نقلی (perfect) است که ارتباط با زمان حال دارد." },
      { type: "fill", q: "Ik ___ nog niet geboren toen mijn ouders naar Nederland kwamen.", answers: ["was"], exp: "[[geboren worden]] با [[zijn]] صرف می‌شود؛ فاعل مفرد (ik) → [[was]]." }
    ]
  },
  {
    id: "b1-betrekkelijke-bijzinnen",
    level: "B1",
    title: "جملات موصولی (die/dat/waar/wie)",
    nl: "Betrekkelijke bijzinnen",
    sum: "جملات موصولی با [[die]], [[dat]], [[waar + حرف اضافه]] و [[حرف اضافه + wie]] (برای اشخاص) اسم قبلی را توضیح می‌دهند.",
    blocks: [
      {
        h: "die یا dat؟",
        p: "برای ساختن جمله‌ی موصولی، از [[die]] یا [[dat]] استفاده می‌کنیم بسته به جنسیت اسمی که به آن اشاره می‌کنیم: اگر اسم [[de-woord]] باشد (یا جمع باشد) از [[die]] استفاده می‌کنیم؛ اگر اسم [[het-woord]] مفرد باشد از [[dat]] استفاده می‌کنیم.",
        table: { head: ["نوع اسم", "ضمیر موصولی", "مثال"], rows: [["de-woord (مفرد)", "die", "de man die..."], ["het-woord (مفرد)", "dat", "het boek dat..."], ["جمع (de یا het)", "die", "de boeken die..."]] },
        ex: [
          { nl: "De man die daar staat, is mijn buurman.", fa: "آن مردی که آنجا ایستاده، همسایه‌ی من است." },
          { nl: "Het huis dat we gekocht hebben, is heel oud.", fa: "خانه‌ای که خریدیم، بسیار قدیمی است." }
        ],
        tip: "فعل در جمله‌ی موصولی همیشه به انتهای آن می‌رود: [[het boek dat ik gisteren gekocht heb]]."
      },
      {
        h: "waar + حرف اضافه برای اشیاء",
        p: "وقتی جمله‌ی موصولی به یک شیء یا مفهوم (نه شخص) با حرف اضافه اشاره می‌کند، به‌جای [[die/dat]] از ترکیب [[waar + حرف اضافه]] استفاده می‌شود، مثل [[waarmee]] (که با آن), [[waarover]] (که درباره‌اش), [[waarin]] (که در آن).",
        ex: [
          { nl: "Dit is de pen waarmee ik schrijf.", fa: "این همان خودکاری است که با آن می‌نویسم." },
          { nl: "Het boek waarover we praatten, is heel beroemd.", fa: "کتابی که درباره‌اش حرف می‌زدیم، بسیار معروف است." }
        ],
        list: ["[[waarmee]] = که با آن", "[[waarover]] = که درباره‌ی آن", "[[waarin]] = که در آن", "[[waarop]] = که روی آن / که منتظرش"]
      },
      {
        h: "wie برای اشخاص بعد از حرف اضافه",
        p: "برای اشخاص، وقتی حرف اضافه داریم، به‌جای [[waar]] از [[حرف اضافه + wie]] استفاده می‌کنیم، نه [[die]]: **de vrouw met wie ik praatte** (زنی که با او صحبت می‌کردم). حرف اضافه قبل از [[wie]] می‌آید، نه بعد از آن مثل waar.",
        ex: [
          { nl: "De collega met wie ik samenwerk, is heel aardig.", fa: "همکاری که با او همکاری می‌کنم، بسیار مهربان است." },
          { nl: "De vriend aan wie ik het verteld heb, woont in Utrecht.", fa: "دوستی که به او گفتم، در اوترخت زندگی می‌کند." }
        ],
        tip: "در نوشتار محاوره‌ای گاهی ساختارهای دیگر هم شنیده می‌شود، اما در نوشتار رسمی [[حرف اضافه + wie]] درست‌ترین شکل است."
      },
      {
        h: "جمله‌ی موصولی بدون آنتسدنت مشخص (wat)",
        p: "وقتی جمله‌ی موصولی به یک جمله یا مفهوم کلی (نه یک اسم مشخص) یا بعد از ضمایر نامعین مثل [[alles]], [[iets]], [[niets]] اشاره می‌کند، از [[wat]] به‌جای [[dat]] استفاده می‌شود.",
        ex: [
          { nl: "Dat is alles wat ik weet.", fa: "این همه‌ی چیزی است که می‌دانم." },
          { nl: "Hij zei niets wat ik nog niet wist.", fa: "او چیزی نگفت که من ندانم." }
        ]
      }
    ],
    ex: [
      { type: "mc", q: "کدام ضمیر موصولی درست است؟ «De fiets ___ ik gekocht heb, is kapot.»", options: ["die", "dat", "wat", "wie"], answer: 0, exp: "[[fiets]] یک de-woord است، پس ضمیر موصولی [[die]] است." },
      { type: "mc", q: "«Het kind ___ daar speelt, is mijn zoon.» کدام گزینه درست است؟", options: ["dat", "die", "wat", "waar"], answer: 0, exp: "[[kind]] یک het-woord است، پس طبق قاعده‌ی دستوری ضمیر موصولی [[dat]] است (حتی وقتی به شخص اشاره دارد)." },
      { type: "fill", q: "Dit is de laptop ___ ik elke dag werk.", answers: ["waarmee"], exp: "فعل [[werken met]] حرف اضافه‌ی [[met]] می‌گیرد، پس ترکیب درست [[waarmee]] است (نه فقط waar)." },
      { type: "mc", q: "کدام جمله درست است؟ (دوستی که با او به سینما رفتم)", options: ["De vriend met wie ik naar de bioscoop ging.", "De vriend waarmee ik naar de bioscoop ging.", "De vriend die ik mee naar de bioscoop ging.", "De vriend wie ik naar de bioscoop ging."], answer: 0, exp: "برای اشخاص بعد از حرف اضافه از [[حرف اضافه + wie]] استفاده می‌شود، نه [[waar]] (که فقط برای اشیاء/مفاهیم است)." },
      { type: "fill", q: "Alles ___ hij zei, was waar.", answers: ["wat"], exp: "بعد از ضمایر نامعین مثل [[alles]] از [[wat]] استفاده می‌شود، نه [[dat]]." },
      { type: "order", q: "ترتیب صحیح کلمات را برای جمله‌ی «کتابی که من می‌خوانم بسیار جالب است» پیدا کنید.", tokens: ["Het", "boek", "dat", "ik", "lees,", "is", "heel", "interessant"], answers: [["Het", "boek", "dat", "ik", "lees,", "is", "heel", "interessant"]], exp: "فعل جمله‌ی موصولی ([[lees]]) به انتهای آن بخش می‌رود؛ چون [[boek]] یک het-woord است، ضمیر موصولی [[dat]] است." },
      { type: "mc", q: "«Dit is het probleem ___ ik over praat.» کدام گزینه؟", options: ["waarover", "waarin", "die", "wat"], answer: 0, exp: "فعل [[praten over]] حرف اضافه‌ی [[over]] می‌گیرد، پس ترکیب [[waarover]] درست است." },
      { type: "fill", q: "De mensen ___ naast ons wonen, zijn heel vriendelijk.", answers: ["die"], exp: "[[mensen]] جمع است، پس ضمیر موصولی همیشه [[die]] است (حتی اگر مفردش het-woord باشد)." },
      { type: "mc", q: "چرا در جمله‌ی «De vrouw aan wie ik het boek gaf» از wie استفاده شده نه die؟", options: ["چون قبل از ضمیر موصولی یک حرف اضافه (aan) آمده و به یک شخص اشاره دارد.", "چون vrouw جمع است.", "چون wie همیشه به‌جای die به کار می‌رود.", "هیچ دلیلی ندارد، هر دو درستند."], answer: 0, exp: "وقتی جمله‌ی موصولی به شخص اشاره دارد و حرف اضافه قبل از ضمیر موصولی لازم است، باید از [[حرف اضافه + wie]] استفاده کرد، نه die." }
    ]
  },
  {
    id: "b1-te-infinitief",
    level: "B1",
    title: "ساختار te + فعل مصدر (te + infinitief)",
    nl: "te + infinitief",
    sum: "بعضی فعل‌ها و عبارات هلندی نیاز دارند فعل دوم به شکل [[te + infinitief]] بیاید، مثل [[proberen te]], [[beginnen te]] و ساختار [[om ... te]].",
    blocks: [
      {
        h: "فرم om...te برای بیان هدف",
        p: "ساختار [[om ... te + infinitief]] برای بیان هدف یا منظور از یک کار به کار می‌رود، معادل «برای اینکه...» در فارسی. [[om]] در ابتدای این بخش می‌آید و فعل مصدر همراه [[te]] در انتها قرار می‌گیرد.",
        ex: [
          { nl: "Ik leer Nederlands om in Nederland te kunnen werken.", fa: "من هلندی یاد می‌گیرم تا بتوانم در هلند کار کنم." },
          { nl: "Hij spaart geld om een huis te kopen.", fa: "او پول پس‌انداز می‌کند تا خانه‌ای بخرد." }
        ],
        tip: "اگر دو فعل در این ساختار داشته باشیم (مثل kunnen werken)، te فقط قبل از فعل اصلی/مصدر دوم می‌آید: om te kunnen werken."
      },
      {
        h: "فعل‌هایی که بعدشان te + infinitief می‌آید",
        p: "برخی فعل‌ها همیشه با [[te]] قبل از فعل دوم همراه هستند، از جمله [[proberen te]] (تلاش کردن برای), [[beginnen te]] (شروع کردن به), [[hoeven te]] (لازم نبودن), [[vergeten te]] (فراموش کردن) و [[besluiten te]] (تصمیم گرفتن).",
        list: ["[[proberen te]] = تلاش کردن", "[[beginnen te]] = شروع کردن به", "[[hoeven te]] = مجبور نبودن (در جملات منفی)", "[[vergeten te]] = فراموش کردن", "[[besluiten te]] = تصمیم گرفتن"],
        ex: [
          { nl: "Ik probeer elke dag te sporten.", fa: "من هر روز تلاش می‌کنم ورزش کنم." },
          { nl: "Hij vergat zijn moeder te bellen.", fa: "او فراموش کرد به مادرش زنگ بزند." }
        ]
      },
      {
        h: "تفاوت با فعل‌های وجهی (مصدر ساده بدون te)",
        p: "بعد از فعل‌های وجهی ([[modale werkwoorden]]) مثل [[kunnen]], [[mogen]], [[moeten]], [[willen]], [[zullen]] و همچنین بعد از [[gaan]], [[blijven]], [[komen]] و [[laten]]، فعل دوم به شکل مصدر ساده بدون [[te]] می‌آید.",
        table: { head: ["دسته", "مثال"], rows: [["با te", "Hij probeert te slapen."], ["بدون te (فعل وجهی)", "Hij kan slapen."], ["بدون te (gaan/komen/blijven)", "Hij gaat slapen."]] },
        ex: [
          { nl: "Ik wil vanavond vroeg naar bed gaan.", fa: "می‌خواهم امشب زود به رختخواب بروم." },
          { nl: "We blijven hier wachten.", fa: "ما همینجا منتظر می‌مانیم." }
        ],
        tip: "اشتباه رایج: نگفتن «Hij kan te slapen» — فعل‌های وجهی هرگز te نمی‌گیرند."
      },
      {
        h: "hoeven te در جملات منفی",
        p: "فعل [[hoeven te]] تقریباً همیشه در جملات منفی یا با [[niet]]/[[geen]] به کار می‌رود و معنای «لازم نبودن» دارد، برخلاف [[moeten]] که برای «باید» استفاده می‌شود.",
        ex: [
          { nl: "Je hoeft dat niet te doen.", fa: "لازم نیست این کار را بکنی." },
          { nl: "Ze hoeven morgen niet te werken.", fa: "آنها فردا لازم نیست کار کنند." }
        ]
      }
    ],
    ex: [
      { type: "mc", q: "کدام گزینه درست است؟ «Hij leert elke dag Nederlands ___ beter te spreken.»", options: ["om", "te", "voor", "dat"], answer: 0, exp: "برای بیان هدف از ساختار [[om ... te]] استفاده می‌شود." },
      { type: "fill", q: "Ik probeer elke ochtend ___ hardlopen.", answers: ["te"], exp: "فعل [[proberen]] همراه با [[te + infinitief]] به کار می‌رود." },
      { type: "mc", q: "کدام جمله گرامری درست است؟", options: ["Hij kan goed zwemmen.", "Hij kan goed te zwemmen.", "Hij kan te goed zwemmen.", "Hij te kan goed zwemmen."], answer: 0, exp: "بعد از فعل وجهی [[kunnen]]، فعل دوم بدون [[te]] و به شکل مصدر ساده می‌آید." },
      { type: "fill", q: "Je ___ niet te wachten, ik kom zo.", answers: ["hoeft"], exp: "[[hoeven te]] در جمله‌ی منفی به معنای «لازم نبودن» است؛ فاعل مفرد je → hoeft." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «من زود بلند شدم تا قطار را از دست ندهم» را پیدا کنید.", tokens: ["Ik", "stond", "vroeg", "op", "om", "de", "trein", "niet", "te", "missen"], answers: [["Ik", "stond", "vroeg", "op", "om", "de", "trein", "niet", "te", "missen"]], exp: "ساختار [[om ... te]] برای بیان هدف: فعل مصدر [[missen]] همراه [[te]] در انتها می‌آید." },
      { type: "mc", q: "کدام فعل بعد از آن te لازم ندارد؟", options: ["gaan", "proberen", "beginnen", "vergeten"], answer: 0, exp: "[[gaan]] مثل فعل‌های وجهی بدون [[te]] به کار می‌رود: «Hij gaat slapen.»" },
      { type: "fill", q: "Vergeet niet de deur ___ sluiten.", answers: ["te"], exp: "[[vergeten te]] = فراموش کردن (که)، همراه با te + infinitief." },
      { type: "mc", q: "تفاوت hoeven te و moeten در چیست؟", options: ["hoeven te به معنای عدم ضرورت (معمولاً در جمله منفی) است، moeten به معنای ضرورت/بایستی است.", "هیچ تفاوتی ندارند.", "hoeven te فقط در جمله مثبت به کار می‌رود.", "moeten همیشه با te می‌آید."], answer: 0, exp: "[[hoeven te]] معمولاً با نفی برای «لازم نبودن» و [[moeten]] برای «باید» به کار می‌رود." },
      { type: "fill", q: "Hij besloot ___ stoppen met roken.", answers: ["te"], exp: "[[besluiten te]] = تصمیم گرفتن به، با te + infinitief همراه است." }
    ]
  },
  {
    id: "b1-voorwaardelijke-wijs",
    level: "B1",
    title: "وجه شرطی (zou/zouden + مصدر)",
    nl: "Voorwaardelijke wijs",
    sum: "وجه شرطی هلندی با [[zou]]/[[zouden]] + فعل مصدر ساخته می‌شود و برای بیان شرط‌های واقعی و غیرواقعی با جمله‌های [[als]] به کار می‌رود.",
    blocks: [
      {
        h: "ساختار zou/zouden",
        p: "[[zou]] (مفرد) و [[zouden]] (جمع) فعل‌های یاور وجه شرطی هستند و همراه با فعل اصلی به شکل مصدر در انتهای جمله می‌آیند: **Ik zou dat niet doen.**",
        table: { head: ["فاعل", "zou/zouden"], rows: [["ik, jij/u, hij/zij", "zou"], ["wij, jullie, zij", "zouden"]] },
        ex: [
          { nl: "Ik zou graag naar Parijs reizen.", fa: "دوست دارم (اگر می‌شد) به پاریس سفر کنم." },
          { nl: "Wij zouden dat probleem anders oplossen.", fa: "ما آن مشکل را به شکل دیگری حل می‌کردیم." }
        ]
      },
      {
        h: "شرط واقعی (reële conditie)",
        p: "وقتی شرط قابل تحقق و واقعی باشد، جمله‌ی [[als]] با زمان حال می‌آید و جمله‌ی اصلی هم می‌تواند زمان حال/آینده یا امری باشد؛ نیازی به [[zou]] نیست.",
        ex: [
          { nl: "Als het regent, neem ik een paraplu.", fa: "اگر باران بیاید، چتر می‌برم." },
          { nl: "Als je tijd hebt, kun je me helpen.", fa: "اگر وقت داری، می‌توانی به من کمک کنی." }
        ],
        tip: "در شرط واقعی، فعل یاور [[zou]] لازم نیست؛ فقط از زمان حال ساده استفاده می‌شود."
      },
      {
        h: "شرط غیرواقعی (irreële conditie) و zou",
        p: "برای شرط‌های غیرواقعی یا فرضی (چیزی که الان یا در گذشته واقع نشده)، جمله‌ی [[als]] با [[verleden tijd]] (گذشته‌ی ساده) می‌آید و جمله‌ی اصلی با [[zou/zouden]] + مصدر ساخته می‌شود.",
        ex: [
          { nl: "Als ik rijk was, zou ik een huis kopen.", fa: "اگر پولدار بودم، خانه‌ای می‌خریدم (اما نیستم)." },
          { nl: "Als zij meer tijd hadden, zouden ze vaker reizen.", fa: "اگر وقت بیشتری داشتند، بیشتر سفر می‌کردند." }
        ],
        tip: "برای شرط‌های غیرواقعی مربوط به گذشته، از [[als]] + ماضی بعید و [[zou/zouden hebben/zijn]] + فعل سوم استفاده می‌شود: Als ik het geweten had, zou ik anders gehandeld hebben."
      },
      {
        h: "جای فعل: als در ابتدا یا میانه‌ی جمله",
        p: "اگر جمله‌ی [[als]] در ابتدای جمله بیاید، جمله‌ی اصلی بعد از آن با یک فعل شروع می‌شود (وارونگی فاعل و فعل)، چون جمله‌ی [[als]] خودش جایگاه اول را اشغال کرده است.",
        ex: [
          { nl: "Als het mooi weer was, zouden we naar het park gaan.", fa: "اگر هوا خوب بود، به پارک می‌رفتیم." },
          { nl: "We zouden naar het park gaan als het mooi weer was.", fa: "ما به پارک می‌رفتیم اگر هوا خوب بود." }
        ],
        tip: "هر دو ترتیب (als اول یا دوم) درست‌اند، فقط وقتی als اول بیاید باید فعل بلافاصله بعد از کاما بیاید."
      }
    ],
    ex: [
      { type: "mc", q: "کدام گزینه برای شرط غیرواقعی درست است؟ «Als ik meer geld ___, zou ik een auto kopen.»", options: ["had", "heb", "had gehad", "zou hebben"], answer: 0, exp: "در شرط غیرواقعی، جمله‌ی als با [[verleden tijd]] (had) می‌آید و جمله‌ی اصلی با [[zou]] + مصدر." },
      { type: "fill", q: "Als het morgen regent, ___ ik thuis.", answers: ["blijf"], exp: "این یک شرط واقعی است (ممکن است فردا باران بیاید)، پس زمان حال ساده به کار می‌رود، نه zou." },
      { type: "mc", q: "کدام جمله شرط غیرواقعی درست را نشان می‌دهد؟", options: ["Als ik jou was, zou ik dat niet zeggen.", "Als ik jou ben, zal ik dat niet zeggen.", "Als ik jou was, zeg ik dat niet.", "Als ik jou zou zijn, zeg ik dat niet."], answer: 0, exp: "ساختار درست: als + verleden tijd (was) ... zou + infinitief (zou zeggen)." },
      { type: "fill", q: "Wij ___ vaker op bezoek komen als we meer tijd hadden.", answers: ["zouden"], exp: "فاعل جمع (wij) نیاز به فعل یاور جمع [[zouden]] دارد." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «اگر وقت داشتم، به تو کمک می‌کردم» را بیابید.", tokens: ["Als", "ik", "tijd", "had,", "zou", "ik", "je", "helpen"], answers: [["Als", "ik", "tijd", "had,", "zou", "ik", "je", "helpen"]], exp: "چون جمله با als شروع شده، جمله‌ی اصلی با فعل (zou) شروع می‌شود: وارونگی فاعل و فعل." },
      { type: "mc", q: "«Als ik het eerder geweten had, ___ ik anders gehandeld hebben.» کدام گزینه؟", options: ["zou", "had", "ben", "zal"], answer: 0, exp: "برای شرط غیرواقعی مربوط به گذشته، جمله‌ی اصلی با [[zou/zouden]] + hebben/zijn + فعل سوم ساخته می‌شود." },
      { type: "fill", q: "Als je morgen vrij ___, kunnen we samen gaan winkelen.", answers: ["bent"], exp: "شرط واقعی با زمان حال ساده (bent) بیان می‌شود، چون امکان واقعی دارد." },
      { type: "mc", q: "چرا در جمله‌ی «Zou je me kunnen helpen?» از zou استفاده شده؟", options: ["برای ادای درخواست مؤدبانه و غیرمستقیم", "برای بیان زمان آینده", "برای بیان یک حقیقت کلی", "چون فعل kunnen همیشه با zou می‌آید"], answer: 0, exp: "[[zou]] + kunnen اغلب برای ساختن درخواست‌های مؤدبانه به کار می‌رود، نه فقط برای شرط." },
      { type: "fill", q: "Als ik jou ___, zou ik die baan accepteren.", answers: ["was"], exp: "عبارت ثابت «als ik jou was» (اگر جای تو بودم) با [[was]] به کار می‌رود، حتی برای فاعل ik." }
    ]
  },
  {
    id: "b1-lijdende-vorm",
    level: "B1",
    title: "حالت مجهول (Lijdende Vorm)",
    nl: "Lijdende vorm",
    sum: "حالت مجهول با [[worden]] (برای فرآیند) یا [[zijn]] (برای نتیجه/حالت) + فعل سوم ساخته می‌شود؛ فاعل انجام‌دهنده با [[door]] معرفی می‌شود.",
    blocks: [
      {
        h: "worden-passief: فرآیند و عمل",
        p: "برای بیان اینکه عملی در حال انجام است یا انجام می‌شود (تمرکز روی فرآیند)، از [[worden]] به عنوان فعل یاور + فعل سوم استفاده می‌کنیم. این رایج‌ترین نوع مجهول در هلندی است.",
        table: { head: ["زمان", "ساختار", "مثال"], rows: [["حال", "word(t)/worden + فعل سوم", "Het huis wordt gebouwd."], ["گذشته", "werd(en) + فعل سوم", "Het huis werd gebouwd."]] },
        ex: [
          { nl: "Het boek wordt door veel mensen gelezen.", fa: "این کتاب توسط افراد زیادی خوانده می‌شود." },
          { nl: "De brief werd gisteren verstuurd.", fa: "نامه دیروز فرستاده شد." }
        ],
        tip: "فعل یاور [[worden]] باید با زمان جمله هماهنگ شود: حال = word/wordt/worden، گذشته = werd/werden."
      },
      {
        h: "zijn-passief: نتیجه و حالت",
        p: "وقتی تمرکز روی نتیجه‌ی نهایی یک عمل است (نه خودِ فرآیند)، از [[zijn]] + فعل سوم استفاده می‌شود. این نوع مجهول معمولاً حالتی را توصیف می‌کند که از قبل کامل شده است.",
        ex: [
          { nl: "Het huis is al gebouwd.", fa: "این خانه قبلاً ساخته شده است (الان در آن حالت است)." },
          { nl: "De deur is gesloten.", fa: "در بسته است (حالت فعلی)." }
        ],
        tip: "مقایسه کنید: [[De deur wordt gesloten]] (کسی الان در را می‌بندد؛ فرآیند) در مقابل [[De deur is gesloten]] (در از قبل بسته است؛ نتیجه)."
      },
      {
        h: "معرفی فاعل انجام‌دهنده با door",
        p: "در جمله‌ی مجهول، اگر بخواهیم بگوییم چه کسی یا چه چیزی عمل را انجام داده، از [[door]] قبل از فاعل انجام‌دهنده استفاده می‌کنیم.",
        ex: [
          { nl: "Het schilderij werd door een beroemde kunstenaar gemaakt.", fa: "این نقاشی توسط یک هنرمند معروف ساخته شد." },
          { nl: "De beslissing wordt door de directeur genomen.", fa: "این تصمیم توسط مدیر گرفته می‌شود." }
        ]
      },
      {
        h: "تبدیل جمله‌ی معلوم به مجهول",
        p: "برای تبدیل جمله‌ی معلوم (active) به مجهول، مفعول جمله‌ی معلوم به فاعل جمله‌ی مجهول تبدیل می‌شود، فعل به [[worden]] + فعل سوم تغییر می‌کند و فاعل اصلی (اگر ذکر شود) بعد از [[door]] می‌آید.",
        ex: [
          { nl: "De kok bereidt het eten. Het eten wordt door de kok bereid.", fa: "آشپز غذا را آماده می‌کند. غذا توسط آشپز آماده می‌شود." }
        ],
        tip: "فعل‌هایی که مفعول ندارند یا لازم (onovergankelijk) هستند، مثل [[slapen]] یا [[komen]]، معمولاً مجهول نمی‌شوند."
      }
    ],
    ex: [
      { type: "mc", q: "کدام جمله مجهول (worden-passief) درست است؟ (این خانه ساخته می‌شود)", options: ["Het huis wordt gebouwd.", "Het huis is gebouwd.", "Het huis bouwt.", "Het huis heeft gebouwd."], answer: 0, exp: "برای فرآیند در حال انجام در زمان حال، از [[wordt]] + فعل سوم استفاده می‌شود." },
      { type: "fill", q: "De brief ___ gisteren verstuurd.", answers: ["werd"], exp: "برای گذشته در worden-passief، فعل یاور [[werd]] (مفرد) به کار می‌رود." },
      { type: "mc", q: "تفاوت «De deur wordt gesloten» و «De deur is gesloten» چیست؟", options: ["اولی فرآیند بسته شدن در حال انجام را نشان می‌دهد، دومی نتیجه/حالت بسته بودن را.", "هیچ تفاوتی ندارند.", "اولی گذشته است، دومی حال.", "دومی مجهول نیست."], answer: 0, exp: "[[wordt]] = worden-passief برای فرآیند؛ [[is]] = zijn-passief برای نتیجه/حالت نهایی." },
      { type: "fill", q: "Dit gebouw ___ door een beroemde architect ontworpen.", answers: ["wordt"], exp: "فاعل مفرد (dit gebouw) + زمان حال → [[wordt]]." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «این کتاب توسط میلیون‌ها نفر خوانده می‌شود» را بیابید.", tokens: ["Dit", "boek", "wordt", "door", "miljoenen", "mensen", "gelezen"], answers: [["Dit", "boek", "wordt", "door", "miljoenen", "mensen", "gelezen"]], exp: "ساختار مجهول: فاعل جدید + wordt + (door + فاعل اصلی) + فعل سوم." },
      { type: "mc", q: "جمله‌ی معلوم «De regering neemt de beslissing.» را به مجهول تبدیل کنید.", options: ["De beslissing wordt door de regering genomen.", "De regering wordt de beslissing genomen.", "De beslissing is de regering genomen.", "De beslissing neemt door de regering."], answer: 0, exp: "مفعول جمله‌ی معلوم (de beslissing) فاعل جمله‌ی مجهول می‌شود و فاعل اصلی بعد از [[door]] می‌آید." },
      { type: "fill", q: "Het probleem is al ___.", answers: ["opgelost"], exp: "فعل سوم [[oplossen]] برابر [[opgelost]] است؛ با zijn-passief نتیجه/حالت نهایی بیان می‌شود." },
      { type: "mc", q: "کدام فعل معمولاً نمی‌تواند مجهول شود؟", options: ["slapen", "bouwen", "lezen", "schrijven"], answer: 0, exp: "فعل لازم (onovergankelijk) مثل [[slapen]] مفعول ندارد، پس نمی‌تواند به مجهول تبدیل شود." },
      { type: "fill", q: "Veel huizen ___ dit jaar gebouwd.", answers: ["worden"], exp: "فاعل جمع (veel huizen) با فعل یاور جمع [[worden]] می‌آید." }
    ]
  },
  {
    id: "b1-vaste-voorzetsels",
    level: "B1",
    title: "فعل‌های همراه با حرف اضافه‌ی ثابت",
    nl: "Vaste voorzetsels",
    sum: "بسیاری از فعل‌های هلندی با یک حرف اضافه‌ی ثابت می‌آیند، مثل [[wachten op]], [[houden van]], [[denken aan]]؛ برای اشاره یا سؤال درباره‌ی این ترکیب از [[er/waar + حرف اضافه]] استفاده می‌شود.",
    blocks: [
      {
        h: "فعل‌های رایج با حرف اضافه‌ی ثابت",
        p: "خیلی از فعل‌های هلندی همیشه با یک حرف اضافه‌ی مشخص همراه می‌شوند که معنای فعل را کامل می‌کند و باید آن را همراه فعل حفظ کرد.",
        list: ["[[wachten op]] = منتظر بودن برای", "[[houden van]] = دوست داشتن", "[[denken aan]] = فکر کردن به", "[[zich ergeren aan]] = عصبانی/آزرده شدن از", "[[geloven in]] = ایمان داشتن به", "[[zorgen voor]] = مراقبت کردن از"],
        ex: [
          { nl: "Ik wacht op de bus.", fa: "من منتظر اتوبوس هستم." },
          { nl: "Zij houdt van chocolade.", fa: "او (زن) شکلات را دوست دارد." }
        ],
        tip: "این ترکیب‌ها باید حفظ شوند، چون معمولاً حرف اضافه در فارسی متفاوت یا حذف‌شدنی است، اما در هلندی اجباری است."
      },
      {
        h: "er + حرف اضافه برای اشاره به چیزی که قبلاً گفته شده",
        p: "وقتی بخواهیم بدون تکرار اسم، به مفهومی که قبلاً ذکر شده با حرف اضافه‌ی ثابت اشاره کنیم، [[er]] را قبل از حرف اضافه می‌آوریم، مثل [[erop]] (به آن/برای آن), [[eraan]] (به آن), [[ervan]] (از آن).",
        ex: [
          { nl: "Denk je aan de afspraak? Ja, ik denk eraan.", fa: "به قرار فکر می‌کنی؟ آره، به آن فکر می‌کنم." },
          { nl: "Wacht je op het antwoord? Ja, ik wacht erop.", fa: "منتظر جواب هستی؟ آره، منتظرش هستم." }
        ],
        tip: "اگر مرجع یک شخص باشد، به‌جای [[er + حرف اضافه]] از [[حرف اضافه + ضمیر شخصی]] استفاده می‌شود: denk aan hem/haar، نه eraan."
      },
      {
        h: "ساختن سؤال با waar + حرف اضافه",
        p: "برای پرسیدن سؤال درباره‌ی چیزی که با حرف اضافه‌ی ثابت می‌آید، [[waar]] را با آن حرف اضافه ترکیب می‌کنیم، مثل [[waarop]] (برای چه), [[waaraan]] (به چه), [[waarvan]] (از چه).",
        ex: [
          { nl: "Waarop wacht je?", fa: "برای چه چیزی منتظری؟" },
          { nl: "Waaraan denk je?", fa: "به چه چیزی فکر می‌کنی؟" }
        ],
        tip: "برای اشخاص، به‌جای [[waar + حرف اضافه]] از [[حرف اضافه + wie]] استفاده می‌شود: Aan wie denk je? (نه waaraan)."
      },
      {
        h: "فهرست فعل‌های پرکاربرد بیشتر",
        p: "فعل‌های بیشتری با حرف اضافه‌ی ثابت در سطح B1 رایج هستند که باید آن‌ها را به همراه حرف اضافه‌شان یاد بگیرید، نه به‌تنهایی.",
        list: ["[[praten over]] = صحبت کردن درباره‌ی", "[[dromen van]] = رویا داشتن درباره‌ی", "[[genieten van]] = لذت بردن از", "[[twijfelen aan]] = شک داشتن به", "[[rekenen op]] = حساب کردن روی"],
        ex: [
          { nl: "We praten vaak over politiek.", fa: "ما اغلب درباره‌ی سیاست صحبت می‌کنیم." },
          { nl: "Ik twijfel aan zijn plan.", fa: "من به برنامه‌ی او شک دارم." }
        ]
      }
    ],
    ex: [
      { type: "mc", q: "کدام حرف اضافه با فعل wachten همراه است؟", options: ["op", "aan", "van", "in"], answer: 0, exp: "[[wachten op]] = منتظر بودن برای، ترکیب ثابت است." },
      { type: "fill", q: "Zij houdt heel veel ___ muziek.", answers: ["van"], exp: "[[houden van]] = دوست داشتن، حرف اضافه‌ی ثابت [[van]] است." },
      { type: "mc", q: "«Denk je aan je moeder? Ja, ik denk ___.» کدام گزینه؟", options: ["eraan", "erop", "ervan", "aan het"], answer: 0, exp: "برای اشاره به مرجعی که قبلاً با [[aan]] ذکر شده، از [[eraan]] استفاده می‌شود." },
      { type: "fill", q: "Waar___ wacht je? (یک کلمه، ترکیب waar با حرف اضافه‌ی درست)", answers: ["waarop"], exp: "فعل [[wachten op]] در سؤال با waar به [[waarop]] تبدیل می‌شود." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «من اغلب به تعطیلات فکر می‌کنم» را بیابید.", tokens: ["Ik", "denk", "vaak", "aan", "de", "vakantie"], answers: [["Ik", "denk", "vaak", "aan", "de", "vakantie"]], exp: "[[denken aan]] = فکر کردن به؛ قید [[vaak]] بعد از فعل و قبل از حرف اضافه می‌آید." },
      { type: "mc", q: "کدام جمله برای اشاره به یک شخص (نه شیء) درست است؟", options: ["Ik denk vaak aan haar.", "Ik denk er vaak aan haar.", "Ik denk vaak eraan haar.", "Ik denk haar vaak aan."], answer: 0, exp: "برای اشخاص از [[er + حرف اضافه]] استفاده نمی‌شود؛ به‌جای آن [[حرف اضافه + ضمیر شخصی]] به کار می‌رود: aan haar." },
      { type: "fill", q: "Ik ___ niet aan zijn verhaal. (twijfelen)", answers: ["twijfel"], exp: "[[twijfelen aan]] = شک داشتن به؛ صرف فعل برای فاعل ik: twijfel." },
      { type: "mc", q: "«Waar praten jullie over?» این سؤال درباره‌ی کدام فعل ثابت است؟", options: ["praten over", "praten aan", "praten van", "praten op"], answer: 0, exp: "[[praten over]] = صحبت کردن درباره‌ی؛ سؤال آن [[waarover]] است." },
      { type: "fill", q: "We genieten echt ___ dit mooie weer.", answers: ["van"], exp: "[[genieten van]] = لذت بردن از، حرف اضافه‌ی ثابت [[van]] است." }
    ]
  },
  {
    id: "b1-tmp-volgorde",
    level: "B1",
    title: "ترتیب زمان-حالت-مکان (TMP) در جمله",
    nl: "Tijd-Manier-Plaats (TMP)",
    sum: "در جمله‌ی هلندی، قیدهای زمان، حالت (چگونگی) و مکان معمولاً به ترتیب [[Tijd - Manier - Plaats]] (زمان - حالت - مکان) می‌آیند.",
    blocks: [
      {
        h: "قاعده‌ی اصلی TMP",
        p: "وقتی چند قید مختلف در یک جمله داریم، ترتیب طبیعی آن‌ها معمولاً **زمان (Tijd) → حالت/چگونگی (Manier) → مکان (Plaats)** است. این را می‌توان با کوته‌نوشت [[TMP]] به خاطر سپرد.",
        ex: [
          { nl: "Ik ga morgen met de trein naar Amsterdam.", fa: "من فردا با قطار به آمستردام می‌روم." },
          { nl: "Zij werkt elke dag hard op kantoor.", fa: "او هر روز سخت در دفتر کار می‌کند." }
        ],
        tip: "اگر یکی از این سه عنصر غایب باشد، باقی به همان ترتیب می‌مانند؛ فقط آن قسمتی که وجود دارد حذف می‌شود."
      },
      {
        h: "مثال‌های بیشتر از ترتیب TMP",
        p: "در این مثال‌ها به وضوح می‌بینیم چگونه هر دسته از قیدها (زمان، حالت، مکان) سر جای خودشان قرار می‌گیرند.",
        table: { head: ["زمان", "حالت", "مکان"], rows: [["morgen", "met de trein", "naar Amsterdam"], ["elke dag", "hard", "op kantoor"], ["vanavond", "samen", "in het restaurant"]] },
        ex: [
          { nl: "We eten vanavond samen in het restaurant.", fa: "امشب با هم در رستوران غذا می‌خوریم." }
        ]
      },
      {
        h: "استثناها: تأکید و جای اول جمله",
        p: "برای تأکید بیشتر روی زمان یا مکان، می‌توان آن را به ابتدای جمله (جایگاه اول، قبل از فعل) منتقل کرد. در این حالت فعل همچنان جایگاه دوم را حفظ می‌کند (قانون V2)، اما بقیه‌ی قیدها به همان ترتیب TMP باقی می‌مانند.",
        ex: [
          { nl: "Morgen ga ik met de trein naar Amsterdam.", fa: "فردا من با قطار به آمستردام می‌روم." },
          { nl: "Naar Amsterdam ga ik morgen met de trein.", fa: "به آمستردام، من فردا با قطار می‌روم." }
        ],
        tip: "وقتی یکی از قیدها به ابتدای جمله منتقل می‌شود، فاعل بعد از فعل می‌آید (وارونگی)، چون فعل باید جایگاه دوم جمله را حفظ کند."
      },
      {
        h: "جای مکان نسبت به مفعول مستقیم",
        p: "قید مکان معمولاً بعد از مفعول مستقیم (اگر کوتاه و معین باشد) می‌آید. در سطح B1، بهتر است همان قاعده‌ی پایه‌ی TMP را دنبال کنید و قیدهای مکان را نزدیک به انتهای جمله نگه دارید.",
        ex: [
          { nl: "Hij legt het boek morgen rustig op de tafel.", fa: "او فردا کتاب را آرام روی میز می‌گذارد." }
        ]
      }
    ],
    ex: [
      { type: "mc", q: "کدام ترتیب کلمات مطابق قاعده‌ی TMP درست است؟", options: ["Ik ga morgen met de bus naar school.", "Ik ga met de bus morgen naar school.", "Ik ga naar school morgen met de bus.", "Ik ga met de bus naar school morgen."], answer: 0, exp: "ترتیب صحیح: زمان (morgen) → حالت (met de bus) → مکان (naar school)." },
      { type: "fill", q: "Zij werkt elke dag hard ___ kantoor.", answers: ["op"], exp: "حرف اضافه‌ی مکان برای «دفتر» در هلندی [[op kantoor]] است." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «ما امشب با هم به سینما می‌رویم» را بیابید.", tokens: ["We", "gaan", "vanavond", "samen", "naar", "de", "bioscoop"], answers: [["We", "gaan", "vanavond", "samen", "naar", "de", "bioscoop"]], exp: "ترتیب TMP: زمان (vanavond) → حالت (samen) → مکان (naar de bioscoop)." },
      { type: "mc", q: "در جمله‌ی «Morgen ga ik naar het park.» چرا فاعل (ik) بعد از فعل آمده؟", options: ["چون قید زمان (morgen) جایگاه اول جمله را گرفته و فعل باید جایگاه دوم بماند.", "چون همیشه فاعل بعد از فعل می‌آید.", "چون morgen یک فعل است.", "هیچ دلیل خاصی ندارد."], answer: 0, exp: "طبق قانون V2 در هلندی، فعل همیشه جایگاه دوم جمله را دارد؛ وقتی قید به ابتدا می‌آید، فاعل به بعد از فعل منتقل می‌شود." },
      { type: "fill", q: "Hij fietst elke dag snel ___ het park. (از میان پارک)", answers: ["door"], exp: "حرف اضافه‌ی مکان [[door het park]] به معنای «از میان پارک» است و در بخش مکان جمله قرار می‌گیرد." },
      { type: "mc", q: "کدام جمله ترتیب درستی ندارد؟", options: ["Ik ga naar Amsterdam morgen met de trein.", "Ik ga morgen met de trein naar Amsterdam.", "Morgen ga ik met de trein naar Amsterdam.", "Met de trein ga ik morgen naar Amsterdam."], answer: 0, exp: "در گزینه‌ی اول ترتیب TMP رعایت نشده (مکان قبل از زمان و حالت آمده)." },
      { type: "fill", q: "We eten ___ rustig thuis. (قید زمان: امشب)", answers: ["vanavond"], exp: "قید زمان [[vanavond]] باید قبل از حالت/مکان بیاید." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «او هر روز سخت در کارخانه کار می‌کند» را بیابید.", tokens: ["Hij", "werkt", "elke", "dag", "hard", "in", "de", "fabriek"], answers: [["Hij", "werkt", "elke", "dag", "hard", "in", "de", "fabriek"]], exp: "ترتیب TMP: زمان (elke dag) → حالت (hard) → مکان (in de fabriek)." },
      { type: "mc", q: "معنای کوته‌نوشت TMP در گرامر هلندی چیست؟", options: ["Tijd, Manier, Plaats (زمان، حالت، مکان)", "Tijd, Modus, Persoon", "Tekst, Manier, Positie", "Tijd, Mening, Plaats"], answer: 0, exp: "TMP مخفف ترتیب معمول قیدها در جمله‌ی هلندی است: زمان، حالت (چگونگی)، مکان." }
    ]
  },
  {
    id: "b1-indirecte-rede",
    level: "B1",
    title: "نقل قول غیرمستقیم (Indirecte Rede)",
    nl: "Indirecte rede",
    sum: "در نقل قول غیرمستقیم هلندی، جمله با [[dat]] یا کلمات پرسشی معرفی می‌شود و زمان فعل اغلب یک پله به عقب می‌رود (tense shift).",
    blocks: [
      {
        h: "نقل جمله‌های خبری با dat",
        p: "برای نقل قول غیرمستقیم جمله‌های خبری (غیر سؤالی)، از [[dat]] استفاده می‌کنیم و فعل به انتهای جمله‌ی پیرو منتقل می‌شود.",
        ex: [
          { nl: "Hij zegt: 'Ik ben moe.' Hij zegt dat hij moe is.", fa: "او می‌گوید: «خسته‌ام.» او می‌گوید که خسته است." },
          { nl: "Zij zei dat ze morgen zou komen.", fa: "او (زن) گفت که فردا می‌آید." }
        ],
        tip: "در فعل اصلی ([[zegt/zei]]) زمان تغییر نمی‌کند؛ فقط فعل داخل جمله‌ی [[dat]] ممکن است با توجه به زمان فعل اصلی تغییر کند."
      },
      {
        h: "تغییر زمان فعل (tense shift)",
        p: "وقتی فعل اصلی نقل قول در زمان گذشته باشد ([[zei]], [[vertelde]])، فعل داخل جمله‌ی [[dat]] نیز معمولاً یک پله به عقب می‌رود: زمان حال به گذشته‌ی ساده تبدیل می‌شود و زمان گذشته‌ی ساده به ماضی بعید.",
        table: { head: ["نقل قول مستقیم", "نقل قول غیرمستقیم (بعد از فعل گذشته)"], rows: [["'Ik werk hard.'", "dat hij hard werkte."], ["'Ik heb het gedaan.'", "dat hij het gedaan had."], ["'Ik zal komen.'", "dat hij zou komen."]] },
        ex: [
          { nl: "Hij zei: 'Ik werk hard.' Hij zei dat hij hard werkte.", fa: "او گفت: «سخت کار می‌کنم.» او گفت که سخت کار می‌کند." }
        ],
        tip: "اگر فعل اصلی در زمان حال باشد ([[zegt]])، معمولاً نیازی به تغییر زمان نیست."
      },
      {
        h: "نقل سؤال‌ها با کلمه‌ی پرسشی یا of",
        p: "برای نقل سؤال‌هایی که با یک کلمه‌ی پرسشی (wie, wat, waar, wanneer, hoe, waarom) شروع می‌شوند، همان کلمه حفظ می‌شود. برای سؤال‌های بلی/خیر (بدون کلمه‌ی پرسشی)، از [[of]] (آیا) استفاده می‌کنیم.",
        ex: [
          { nl: "Hij vroeg: 'Waar woon je?' Hij vroeg waar ik woonde.", fa: "او پرسید: «کجا زندگی می‌کنی؟» او پرسید من کجا زندگی می‌کنم." },
          { nl: "Zij vroeg: 'Kom je morgen?' Zij vroeg of ik morgen kwam.", fa: "او پرسید: «فردا می‌آیی؟» او پرسید که آیا من فردا می‌آیم." }
        ],
        tip: "در هر دو حالت، فعل به انتهای جمله‌ی پیرو منتقل می‌شود، همانند جمله‌های با [[dat]]."
      },
      {
        h: "نقل دستورها و درخواست‌ها با om...te",
        p: "برای نقل قول غیرمستقیم یک دستور یا درخواست (امری)، معمولاً از ساختار [[om ... te + infinitief]] استفاده می‌شود، نه [[dat]].",
        ex: [
          { nl: "Hij zei: 'Doe de deur dicht.' Hij vroeg mij om de deur dicht te doen.", fa: "او گفت: «در را ببند.» او از من خواست که در را ببندم." },
          { nl: "De leraar zei ons om stil te zijn.", fa: "معلم به ما گفت که ساکت باشیم." }
        ]
      }
    ],
    ex: [
      { type: "mc", q: "نقل قول غیرمستقیم جمله‌ی «Ik ben ziek.» بعد از «Hij zei dat...» کدام است؟", options: ["hij ziek was.", "hij ziek is.", "hij ziek was geweest.", "hij was ziek."], answer: 0, exp: "چون فعل اصلی ([[zei]]) گذشته است، زمان حال داخل نقل قول ([[ben]]) به گذشته‌ی ساده ([[was]]) تبدیل می‌شود؛ فعل در انتهای جمله‌ی dat می‌آید." },
      { type: "fill", q: "Zij zei ___ ze morgen zou komen.", answers: ["dat"], exp: "برای نقل جمله‌های خبری از حرف ربط [[dat]] استفاده می‌شود." },
      { type: "mc", q: "نقل سؤال «Waar woon je?» به شکل غیرمستقیم کدام است؟", options: ["Hij vroeg waar ik woonde.", "Hij vroeg dat waar ik woonde.", "Hij vroeg of waar ik woonde.", "Hij vroeg waar woon ik."], answer: 0, exp: "برای سؤال‌های با کلمه‌ی پرسشی، همان کلمه (waar) حفظ می‌شود و فعل به انتهای جمله می‌رود؛ از dat یا of استفاده نمی‌شود." },
      { type: "fill", q: "Hij vroeg ___ ik morgen kon komen.", answers: ["of"], exp: "برای نقل سؤال‌های بلی/خیر (بدون کلمه‌ی پرسشی)، از [[of]] استفاده می‌شود." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «او گفت که فردا می‌آید» (نقل غیرمستقیم) را بیابید.", tokens: ["Hij", "zei", "dat", "hij", "morgen", "zou", "komen"], answers: [["Hij", "zei", "dat", "hij", "morgen", "zou", "komen"]], exp: "ساختار: فاعل + zei + dat + فاعل جمله‌ی پیرو + ... + فعل یاور (zou) + فعل اصلی (komen) در انتها." },
      { type: "mc", q: "نقل قول دستور «Doe de deur dicht.» به کدام شکل درست است؟", options: ["Hij vroeg mij om de deur dicht te doen.", "Hij vroeg mij dat de deur dicht doen.", "Hij zei dat doe de deur dicht.", "Hij vroeg of ik de deur dichtdoe."], answer: 0, exp: "برای نقل یک دستور/درخواست، ساختار [[om ... te + infinitief]] به کار می‌رود." },
      { type: "fill", q: "Hij zei dat hij het boek al ___. (نقل قول اصلی: 'Ik heb het boek al gelezen.')", answers: ["gelezen had"], exp: "چون نقل قول اصلی زمان ماضی نقلی (heb gelezen) بود و فعل اصلی نقل در گذشته است، یک پله به عقب به ماضی بعید (had gelezen) تبدیل می‌شود." },
      { type: "mc", q: "کدام جمله درباره‌ی tense shift درست است؟", options: ["وقتی فعل اصلی نقل قول در گذشته باشد، زمان فعل داخل نقل قول هم معمولاً یک پله به عقب می‌رود.", "زمان فعل هیچ‌وقت در نقل قول غیرمستقیم تغییر نمی‌کند.", "فقط فعل‌های وجهی tense shift دارند.", "tense shift فقط در زبان نوشتاری رخ می‌دهد."], answer: 0, exp: "قاعده‌ی کلی: فعل اصلی گذشته → فعل داخل نقل قول هم یک پله به عقب (حال→گذشته، گذشته→ماضی بعید)." },
      { type: "fill", q: "De leraar vroeg ons om stil ___ zijn.", answers: ["te"], exp: "ساختار نقل درخواست: [[om ... te + infinitief]]؛ te قبل از فعل مصدر zijn می‌آید." }
    ]
  },
  {
    id: "b1-toen-als-wanneer",
    level: "B1",
    title: "تفاوت toen، als و wanneer",
    nl: "toen / als / wanneer",
    sum: "[[toen]] برای یک اتفاق مشخص در گذشته، [[als]] برای اتفاق‌های تکرارشونده و شرط، و [[wanneer]] برای سؤال یا اتفاق‌های تکرارشونده در حال/آینده به کار می‌رود.",
    blocks: [
      {
        h: "toen: یک لحظه‌ی مشخص در گذشته",
        p: "[[toen]] فقط برای یک اتفاق **یک‌بار و مشخص** در زمان گذشته استفاده می‌شود؛ هیچ‌وقت برای حال یا آینده یا برای اتفاق‌های تکرارشونده به کار نمی‌رود.",
        ex: [
          { nl: "Toen ik tien jaar was, verhuisden we naar Rotterdam.", fa: "وقتی ده ساله بودم، به روتردام نقل مکان کردیم." },
          { nl: "Toen de telefoon ging, was ik net in de douche.", fa: "وقتی تلفن زنگ زد، تازه زیر دوش بودم." }
        ],
        tip: "اگر جمله در زمان گذشته است و درباره‌ی یک اتفاق خاص (نه تکرارشونده) صحبت می‌کند، همیشه [[toen]] درست است، نه [[als]]."
      },
      {
        h: "als: تکرار در گذشته و شرط",
        p: "[[als]] در زمان گذشته برای اتفاق‌های **تکرارشونده یا عادت‌گونه** استفاده می‌شود (معادل «هر وقت که»)، و همچنین برای بیان شرط در هر زمانی (حال، آینده، یا حتی گذشته‌ی تکرارشونده) به کار می‌رود.",
        ex: [
          { nl: "Als ik klein was, speelde ik vaak buiten.", fa: "وقتی (هر بار که) کوچک بودم، اغلب بیرون بازی می‌کردم." },
          { nl: "Als het regent, blijf ik binnen.", fa: "اگر باران بیاید، داخل می‌مانم." }
        ],
        tip: "علامت تکرار در گذشته معمولاً کلماتی مثل [[vaak]], [[altijd]], [[elke keer]] هستند که همراه [[als]] می‌آیند."
      },
      {
        h: "wanneer: سؤال و تکرار در حال/آینده",
        p: "[[wanneer]] معمولاً برای **پرسیدن سؤال** درباره‌ی زمان (کِی؟) استفاده می‌شود، و همچنین می‌تواند مثل [[als]] برای اتفاق‌های تکرارشونده در زمان حال یا آینده به کار رود (در نوشتار رسمی‌تر).",
        ex: [
          { nl: "Wanneer kom je naar huis?", fa: "کِی به خانه می‌آیی؟" },
          { nl: "Wanneer het regent, pak ik een paraplu.", fa: "هر وقت باران می‌آید، چتر برمی‌دارم." }
        ],
        tip: "در گفتار روزمره، به‌جای [[wanneer]] برای تکرار در حال/آینده اغلب [[als]] ترجیح داده می‌شود؛ [[wanneer]] رسمی‌تر به نظر می‌رسد."
      },
      {
        h: "جدول مقایسه‌ی سریع",
        p: "برای به‌خاطر سپردن بهتر، این جدول خلاصه‌ی کاربرد هر سه کلمه را نشان می‌دهد.",
        table: { head: ["کلمه", "کاربرد", "مثال"], rows: [["toen", "یک‌بار، گذشته", "Toen ik aankwam, regende het."], ["als", "تکرار (گذشته/حال/آینده) یا شرط", "Als ik moe ben, ga ik slapen."], ["wanneer", "سؤال؛ یا تکرار (رسمی)", "Wanneer ga je op vakantie?"]] }
      }
    ],
    ex: [
      { type: "mc", q: "کدام گزینه درست است؟ «___ ik klein was, woonden we in Utrecht.»", options: ["Toen", "Als", "Wanneer", "Of"], answer: 0, exp: "چون این یک دوره‌ی مشخص و یک‌بار در گذشته است (نه تکرارشونده)، باید از [[toen]] استفاده شود." },
      { type: "fill", q: "___ het regende, bleven we altijd binnen.", answers: ["Als"], exp: "برای اتفاق تکرارشونده در گذشته (نشان‌دهنده‌اش کلمه‌ی altijd است)، از [[als]] استفاده می‌شود، نه toen." },
      { type: "mc", q: "کدام جمله برای پرسیدن «کِی به سینما می‌روی؟» درست است؟", options: ["Wanneer ga je naar de bioscoop?", "Toen ga je naar de bioscoop?", "Als ga je naar de bioscoop?", "Of ga je naar de bioscoop?"], answer: 0, exp: "برای ساختن سؤال درباره‌ی زمان از [[wanneer]] استفاده می‌شود." },
      { type: "fill", q: "___ de film begon, ging mijn telefoon.", answers: ["Toen"], exp: "این یک اتفاق مشخص و یک‌بار است، پس [[toen]] درست است." },
      { type: "mc", q: "چرا جمله‌ی «Als ik klein was, ging ik altijd met mijn opa wandelen.» با als درست است، نه toen؟", options: ["چون این یک عمل تکرارشونده/عادت در گذشته است (نشانه‌ی آن altijd است).", "چون als همیشه درست‌تر از toen است.", "چون جمله درباره‌ی آینده است.", "هیچ دلیلی ندارد؛ هر دو کاملاً یکسانند."], answer: 0, exp: "[[als]] در گذشته برای تکرار/عادت به کار می‌رود؛ [[toen]] فقط برای یک اتفاق مشخص و یک‌بار است." },
      { type: "fill", q: "Ik weet niet ___ hij komt.", answers: ["wanneer"], exp: "در سؤال غیرمستقیم درباره‌ی زمان، از [[wanneer]] استفاده می‌شود." },
      { type: "order", q: "ترتیب صحیح کلمات برای جمله‌ی «وقتی به ایستگاه رسیدم، قطار رفته بود» را بیابید.", tokens: ["Toen", "ik", "op", "het", "station", "aankwam,", "was", "de", "trein", "vertrokken"], answers: [["Toen", "ik", "op", "het", "station", "aankwam,", "was", "de", "trein", "vertrokken"]], exp: "چون یک لحظه‌ی مشخص در گذشته است، از [[toen]] استفاده می‌شود؛ فعل جمله‌ی پیرو (aankwam) در انتهای آن بخش می‌آید." },
      { type: "mc", q: "کدام جمله نادرست است؟", options: ["Toen het regent, blijf ik binnen.", "Als het regent, blijf ik binnen.", "Toen het regende, bleef ik binnen.", "Als het regende, bleef ik altijd binnen."], answer: 0, exp: "[[toen]] هرگز برای زمان حال به کار نمی‌رود؛ جمله‌ی اول باید با [[als]] باشد." },
      { type: "mc", q: "چه زمانی می‌توانیم به‌جای als از wanneer در گذشته استفاده کنیم؟", options: ["هیچ‌وقت؛ برای یک اتفاق تکرارشونده در گذشته باید als استفاده کرد، نه wanneer.", "همیشه می‌توان wanneer را جایگزین als کرد.", "wanneer فقط در گذشته به کار می‌رود.", "toen و wanneer همیشه قابل تبادل‌اند."], answer: 0, exp: "[[wanneer]] برای سؤال یا تکرار در حال/آینده است؛ برای تکرار در گذشته باید [[als]] به کار رود، نه wanneer." }
    ]
  }
];
