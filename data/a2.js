window.GRAMMATICA_DATA = window.GRAMMATICA_DATA || {};
window.GRAMMATICA_DATA.A2 = [
  {
    id: "a2-scheidbare-werkwoorden",
    level: "A2",
    title: "فعل‌های جداشدنی",
    nl: "Scheidbare werkwoorden",
    sum: "فعل‌های جداشدنی مثل [[opstaan]] و [[aankomen]] در جمله‌ی اصلی از هم جدا می‌شوند، در مصدر و زمان کامل به شکل خاصی به هم می‌چسبند و در جمله‌ی وابسته دوباره یکی می‌شوند.",
    blocks: [
      {
        h: "فعل جداشدنی چیست؟",
        p: "در زبان هلندی برخی فعل‌ها از دو بخش تشکیل شده‌اند: یک پیشوند (مثل [[op]]، [[aan]]، [[mee]]) و فعل اصلی. این‌ها را **فعل‌های جداشدنی** (scheidbare werkwoorden) می‌نامند، مثل [[opstaan]] (برخاستن)، [[aankomen]] (رسیدن) و [[meenemen]] (با خود بردن). در حالت مصدر این دو بخش همیشه به هم چسبیده‌اند و تکیه‌ی اصلی روی پیشوند قرار می‌گیرد.",
        list: [
          "[[opstaan]] = برخاستن / از خواب بیدار شدن",
          "[[aankomen]] = رسیدن",
          "[[meenemen]] = با خود بردن",
          "[[afspreken]] = قرار گذاشتن",
          "[[uitnodigen]] = دعوت کردن",
          "[[instappen]] = سوار شدن",
          "[[weggaan]] = رفتن / ترک کردن",
          "[[terugkomen]] = برگشتن"
        ],
        tip: "روی پیشوند فعل‌های جداشدنی همیشه تکیه (فشار صدا) قرار می‌گیرد؛ این یکی از راه‌های تشخیص آن‌ها از فعل‌های جدانشدنی مثل [[bezoeken]] است."
      },
      {
        h: "جای پیشوند در جمله‌ی اصلی",
        p: "در جمله‌ی اصلی با زمان حال یا ماضی ساده، فعل صرف‌شده بعد از فاعل می‌آید، اما بخش جداشدنی (پیشوند) به **انتهای جمله** می‌رود.",
        ex: [
          { nl: "Ik sta elke ochtend om zeven uur op.", fa: "من هر صبح ساعت هفت بیدار می‌شوم." },
          { nl: "Zij komt morgen om tien uur aan.", fa: "او فردا ساعت ده می‌رسد." },
          { nl: "Neem je je paraplu mee?", fa: "آیا چترت را با خودت می‌بری؟" }
        ]
      },
      {
        h: "با فعل‌های وجهی و مصدر",
        p: "وقتی فعل جداشدنی به صورت مصدر همراه یک فعل وجهی (مثل [[kunnen]]، [[moeten]]، [[willen]]) یا بعد از [[gaan]] می‌آید، دو بخش آن دوباره به هم می‌چسبند و به صورت یک کلمه در انتهای جمله قرار می‌گیرند.",
        ex: [
          { nl: "Ik moet morgen vroeg opstaan.", fa: "من باید فردا زود بیدار شوم." },
          { nl: "Wil je het boek meenemen?", fa: "آیا می‌خواهی کتاب را با خودت ببری؟" }
        ]
      },
      {
        h: "زمان کامل (voltooide tijd)",
        p: "در اسم مفعول (deelwoord) فعل‌های جداشدنی، پیشوند [[ge]] نه در ابتدای کلمه بلکه **بین پیشوند و فعل اصلی** قرار می‌گیرد.",
        table: {
          head: ["مصدر", "اسم مفعول"],
          rows: [
            ["opstaan", "opgestaan"],
            ["aankomen", "aangekomen"],
            ["meenemen", "meegenomen"],
            ["afspreken", "afgesproken"]
          ]
        },
        ex: [
          { nl: "Hij is vanmorgen laat opgestaan.", fa: "او امروز صبح دیر از خواب بلند شد." },
          { nl: "We hebben iets leuks afgesproken.", fa: "ما یک برنامه‌ی خوب هماهنگ کرده‌ایم." }
        ]
      },
      {
        h: "در جمله‌ی وابسته (bijzin)",
        p: "وقتی جمله با حرف ربط وابسته‌ساز مثل [[dat]]، [[omdat]] یا [[als]] شروع می‌شود، فعل به انتهای جمله می‌رود و در این حالت دو بخش فعل جداشدنی دوباره **یک کلمه** می‌شوند.",
        ex: [
          { nl: "Ik denk dat hij morgen aankomt.", fa: "فکر می‌کنم او فردا می‌رسد." },
          { nl: "Ze is blij omdat ze vroeg thuiskomt.", fa: "او خوشحال است چون زود به خانه می‌رسد." }
        ],
        tip: "این نکته یکی از رایج‌ترین اشتباهات زبان‌آموزان است: فراموش نکنید که در جمله‌ی وابسته دو بخش فعل باید دوباره کنار هم بیایند و یک کلمه بسازند."
      }
    ],
    ex: [
      {
        type: "mc",
        q: "جمله‌ی درست را انتخاب کنید (فعل [[opstaan]]).",
        options: ["Ik sta elke dag om zeven uur op.", "Ik opsta elke dag om zeven uur.", "Ik sta op elke dag om zeven uur."],
        answer: 0,
        exp: "در جمله‌ی اصلی، فعل صرف‌شده بعد از فاعل می‌آید و بخش جداشدنی ([[op]]) به انتهای جمله می‌رود: [[Ik sta ... op]]."
      },
      {
        type: "mc",
        q: "در جمله‌ی وابسته، فعل جداشدنی چگونه نوشته می‌شود؟ مثال: ...dat hij morgen ___ (aankomen)",
        options: ["aan komt", "komt aan", "aankomt"],
        answer: 2,
        exp: "در جمله‌ی وابسته، دو بخش فعل جداشدنی دوباره به هم می‌چسبند و به صورت یک کلمه در پایان جمله می‌آیند: [[dat hij morgen aankomt]]."
      },
      {
        type: "mc",
        q: "فعل [[meenemen]] در زمان کامل (voltooide tijd) چه شکلی می‌گیرد؟",
        options: ["heeft meegenomen", "heeft genomenmee", "heeft meegeenomen"],
        answer: 0,
        exp: "در اسم مفعول فعل‌های جداشدنی، [[ge]] بین پیشوند و فعل اصلی قرار می‌گیرد: [[mee + ge + nomen]] = [[meegenomen]]."
      },
      {
        type: "fill",
        q: "Zij neemt haar paraplu ___. (meenemen)",
        answers: ["mee"],
        exp: "فعل جداشدنی [[meenemen]] در جمله‌ی اصلی از هم جدا می‌شود؛ پیشوند [[mee]] به انتهای جمله می‌رود."
      },
      {
        type: "fill",
        q: "Wij spreken vanavond met onze vrienden ___. (afspreken)",
        answers: ["af"],
        exp: "فعل [[afspreken]] در جمله‌ی اصلی جدا می‌شود؛ بخش [[af]] به انتهای جمله می‌رود."
      },
      {
        type: "fill",
        q: "Hij is gisteren laat ___. (thuiskomen)",
        answers: ["thuisgekomen"],
        exp: "اسم مفعول فعل جداشدنی [[thuiskomen]] با افزودن [[ge]] بین پیشوند و فعل اصلی ساخته می‌شود: [[thuisgekomen]]."
      },
      {
        type: "order",
        q: "کلمات را به ترتیب درست بچینید: «او فردا می‌رسد.»",
        tokens: ["Hij", "komt", "morgen", "aan"],
        answers: [["Hij", "komt", "morgen", "aan"]],
        exp: "در جمله‌ی اصلی فعل [[komt]] بعد از فاعل می‌آید و پیشوند [[aan]] به انتهای جمله می‌رود."
      },
      {
        type: "order",
        q: "ترتیب درست کلمات برای جمله‌ی «من باید زود بیدار شوم.»",
        tokens: ["Ik", "moet", "vroeg", "opstaan"],
        answers: [["Ik", "moet", "vroeg", "opstaan"]],
        exp: "با فعل وجهی [[moet]]، مصدر فعل جداشدنی [[opstaan]] به صورت یک کلمه در انتهای جمله می‌آید."
      },
      {
        type: "mc",
        q: "کدام جمله‌ی وابسته درست است؟",
        options: ["Ik weet dat hij morgen aankomt.", "Ik weet dat hij morgen komt aan.", "Ik weet dat hij aankomt morgen."],
        answer: 0,
        exp: "در جمله‌ی وابسته بعد از [[dat]]، فعل جداشدنی به صورت یک کلمه ([[aankomt]]) در انتهای جمله می‌آید."
      }
    ]
  },
  {
    id: "a2-onvoltooid-verleden-tijd",
    level: "A2",
    title: "ماضی ساده",
    nl: "Onvoltooid verleden tijd (OVT)",
    sum: "برای ساختن ماضی ساده‌ی فعل‌های باقاعده به ریشه‌ی فعل [[-te]] یا [[-de]] اضافه می‌شود؛ فعل‌های بی‌قاعده با تغییر واکه صرف می‌شوند و باید حفظ شوند.",
    blocks: [
      {
        h: "کاربرد ماضی ساده",
        p: "[[onvoltooid verleden tijd]] (ماضی ساده) برای بیان رویدادها و عادت‌های گذشته به کار می‌رود، به‌خصوص در روایت و داستان‌گویی، یا وقتی زمان دقیق گذشته مشخص است.",
        ex: [
          { nl: "Vroeger woonde ik in Amsterdam.", fa: "قبلاً من در آمستردام زندگی می‌کردم." },
          { nl: "Gisteren werkte hij tot laat.", fa: "دیروز او تا دیروقت کار کرد." }
        ]
      },
      {
        h: "فعل‌های باقاعده (zwakke werkwoorden)",
        p: "برای فعل‌های باقاعده، به ریشه‌ی فعل [[-te]] یا [[-de]] اضافه می‌شود. برای تشخیص اینکه کدام را استفاده کنیم، قانون معروف **'t kofschip** را به کار می‌بریم: اگر ریشه‌ی فعل به یکی از حروف [[t, k, f, s, ch, p]] ختم شود، [[-te]] اضافه می‌شود؛ در غیر این صورت [[-de]].",
        table: {
          head: ["مصدر", "ریشه", "ماضی ساده (مفرد)", "ماضی ساده (جمع)"],
          rows: [
            ["werken", "werk", "werkte", "werkten"],
            ["maken", "maak", "maakte", "maakten"],
            ["leven", "leef", "leefde", "leefden"],
            ["wonen", "woon", "woonde", "woonden"]
          ]
        },
        tip: "برای به خاطر سپردن حروف قانون 't kofschip می‌توانید عبارت 't kofschip یا مخفف انگلیسی x-factor shoes را به یاد بیاورید که همان حروف t,k,f,s,ch,p را شامل می‌شوند."
      },
      {
        h: "فعل‌های بی‌قاعده (sterke werkwoorden)",
        p: "در فعل‌های بی‌قاعده، واکه‌ی ریشه تغییر می‌کند و هیچ [[-te]] یا [[-de]] اضافه نمی‌شود. در حالت جمع [[-en]] به انتهای فعل اضافه می‌شود.",
        table: {
          head: ["مصدر", "مفرد", "جمع"],
          rows: [
            ["lopen", "liep", "liepen"],
            ["eten", "at", "aten"],
            ["zien", "zag", "zagen"],
            ["komen", "kwam", "kwamen"],
            ["geven", "gaf", "gaven"],
            ["lezen", "las", "lazen"]
          ]
        }
      },
      {
        h: "فعل‌های کمکی و وجهی مهم",
        p: "فعل‌های پرکاربرد [[zijn]]، [[hebben]] و افعال وجهی هم در ماضی ساده شکل بی‌قاعده دارند که باید جدا حفظ شوند.",
        table: {
          head: ["مصدر", "مفرد", "جمع"],
          rows: [
            ["zijn", "was", "waren"],
            ["hebben", "had", "hadden"],
            ["kunnen", "kon", "konden"],
            ["moeten", "moest", "moesten"],
            ["willen", "wilde / wou", "wilden"],
            ["mogen", "mocht", "mochten"]
          ]
        },
        tip: "[[wou]] شکل محاوره‌ای [[wilde]] است و در گفتار روزمره بسیار رایج است."
      },
      {
        h: "ماضی ساده در برابر زمان کامل",
        p: "در زبان نوشتاری و روایت، ماضی ساده پرکاربرد است، اما در گفتار روزمره هلندی‌ها اغلب برای صحبت از گذشته از **زمان کامل** ([[voltooide tijd]]) استفاده می‌کنند. این دو زمان معمولاً در یک متن با هم ترکیب می‌شوند.",
        ex: [
          { nl: "Ik heb gisteren gewerkt en daarna ging ik naar huis.", fa: "دیروز کار کردم و بعد به خانه رفتم." }
        ]
      }
    ],
    ex: [
      {
        type: "mc",
        q: "شکل ماضی ساده‌ی فعل [[werken]] برای [[hij]] کدام است؟",
        options: ["werkde", "werkte", "werkten"],
        answer: 1,
        exp: "ریشه‌ی [[werk]] به [[k]] ختم می‌شود (یکی از حروف 't kofschip) پس [[-te]] می‌گیرد: [[werkte]]."
      },
      {
        type: "mc",
        q: "شکل ماضی ساده‌ی فعل [[wonen]] برای [[wij]] کدام است؟",
        options: ["woonden", "woonten", "woonde"],
        answer: 0,
        exp: "ریشه‌ی [[woon]] به حروف 't kofschip ختم نمی‌شود پس [[-de]]/[[-den]] می‌گیرد؛ در جمع: [[woonden]]."
      },
      {
        type: "mc",
        q: "کدام شکل ماضی ساده‌ی فعل [[gaan]] برای حالت مفرد درست است؟",
        options: ["gaande", "ging", "gingde"],
        answer: 1,
        exp: "[[gaan]] فعل بی‌قاعده است: مفرد [[ging]]، جمع [[gingen]]."
      },
      {
        type: "fill",
        q: "Vroeger ___ (wonen) ik in Rotterdam.",
        answers: ["woonde"],
        exp: "ریشه‌ی [[woon]] به حروف 't kofschip ختم نمی‌شود، پس [[-de]] می‌گیرد: [[woonde]]."
      },
      {
        type: "fill",
        q: "Hij ___ (lopen) gisteren drie kilometer.",
        answers: ["liep"],
        exp: "[[lopen]] فعل بی‌قاعده است و در مفرد به [[liep]] تبدیل می‌شود."
      },
      {
        type: "fill",
        q: "Wij ___ (kunnen) dat helaas niet doen.",
        answers: ["konden"],
        exp: "ماضی ساده‌ی [[kunnen]] در حالت جمع [[konden]] است."
      },
      {
        type: "order",
        q: "ترتیب درست کلمات برای «او دیروز دیر کار کرد»",
        tokens: ["Hij", "werkte", "gisteren", "laat"],
        answers: [["Hij", "werkte", "gisteren", "laat"]],
        exp: "فعل صرف‌شده [[werkte]] بعد از فاعل می‌آید و قیدها بعد از آن قرار می‌گیرند."
      },
      {
        type: "order",
        q: "ترتیب درست کلمات برای «ما قبلاً در آمستردام زندگی می‌کردیم»",
        tokens: ["Wij", "woonden", "vroeger", "in", "Amsterdam"],
        answers: [["Wij", "woonden", "vroeger", "in", "Amsterdam"]],
        exp: "فعل [[woonden]] (ماضی ساده‌ی جمع) بعد از فاعل می‌آید."
      }
    ]
  },
  {
    id: "a2-voltooide-tijd",
    level: "A2",
    title: "زمان کامل (ماضی نقلی)",
    nl: "Voltooide tijd (perfectum)",
    sum: "زمان کامل هلندی با فعل کمکی [[hebben]] یا [[zijn]] به‌همراه اسم مفعول (deelwoord) در انتهای جمله ساخته می‌شود.",
    blocks: [
      {
        h: "ساختار کلی",
        p: "زمان کامل از فعل کمکی صرف‌شده ([[hebben]] یا [[zijn]]) به‌همراه **اسم مفعول** (voltooid deelwoord) ساخته می‌شود. فعل کمکی بعد از فاعل می‌آید و اسم مفعول به انتهای جمله می‌رود.",
        ex: [
          { nl: "Ik heb een boek gelezen.", fa: "من یک کتاب خوانده‌ام." },
          { nl: "Zij is naar school gegaan.", fa: "او به مدرسه رفته است." }
        ]
      },
      {
        h: "hebben یا zijn؟",
        p: "اکثر فعل‌ها با [[hebben]] صرف می‌شوند. اما فعل‌هایی که **حرکت به مکان دیگر** یا **تغییر حالت** را نشان می‌دهند (مثل [[gaan]]، [[komen]]، [[worden]]، [[blijven]]، [[sterven]]) با [[zijn]] صرف می‌شوند.",
        list: [
          "[[hebben]]: اکثر فعل‌ها، مثل [[werken]]، [[eten]]، [[lezen]]، [[zien]]",
          "[[zijn]]: فعل‌های حرکتی با تغییر مکان یا حالت، مثل [[gaan]]، [[komen]]، [[worden]]، [[blijven]]، [[vertrekken]]"
        ],
        tip: "برخی فعل‌ها مثل [[fietsen]] هم با [[hebben]] و هم با [[zijn]] می‌آیند: اگر تاکید بر خودِ عمل باشد [[hebben]] و اگر تاکید بر رسیدن به مقصد باشد [[zijn]] به کار می‌رود: [[Ik heb gefietst]] (دوچرخه‌سواری کردم) در برابر [[Ik ben naar school gefietst]] (با دوچرخه به مدرسه رفتم)."
      },
      {
        h: "ساخت اسم مفعول فعل‌های باقاعده",
        p: "اسم مفعول فعل‌های باقاعده با افزودن [[ge-]] به اول ریشه و [[-t]] یا [[-d]] به انتهای آن ساخته می‌شود؛ همان قانون 't kofschip که در ماضی ساده دیدیم اینجا هم کاربرد دارد.",
        table: {
          head: ["مصدر", "ریشه", "اسم مفعول"],
          rows: [
            ["werken", "werk", "gewerkt"],
            ["maken", "maak", "gemaakt"],
            ["leven", "leef", "geleefd"],
            ["wonen", "woon", "gewoond"]
          ]
        }
      },
      {
        h: "اسم مفعول فعل‌های بی‌قاعده",
        p: "بسیاری از فعل‌های پرکاربرد اسم مفعول بی‌قاعده دارند که باید جدا حفظ شوند.",
        table: {
          head: ["مصدر", "اسم مفعول"],
          rows: [
            ["doen", "gedaan"],
            ["geven", "gegeven"],
            ["zien", "gezien"],
            ["nemen", "genomen"],
            ["komen", "gekomen"],
            ["gaan", "gegaan"],
            ["zijn", "geweest"],
            ["hebben", "gehad"],
            ["kopen", "gekocht"],
            ["schrijven", "geschreven"]
          ]
        },
        tip: "اسم مفعول [[zijn]] خودش [[geweest]] است: [[Ik ben in Parijs geweest]] (من در پاریس بوده‌ام)."
      },
      {
        h: "ترتیب کلمات در جمله",
        p: "فعل کمکی مستقیماً بعد از فاعل می‌آید، سایر اجزای جمله (قید زمان، مفعول و غیره) در وسط قرار می‌گیرند و اسم مفعول همیشه آخرین کلمه‌ی جمله‌ی اصلی است.",
        ex: [
          { nl: "Wij hebben gisteren het hele huis schoongemaakt.", fa: "ما دیروز تمام خانه را تمیز کردیم." },
          { nl: "Heb je die film al gezien?", fa: "آیا آن فیلم را قبلاً دیده‌ای؟" }
        ]
      }
    ],
    ex: [
      {
        type: "mc",
        q: "کدام فعل کمکی با [[gaan]] استفاده می‌شود؟",
        options: ["hebben", "zijn", "worden"],
        answer: 1,
        exp: "[[gaan]] یک فعل حرکتی با تغییر مکان است، پس با [[zijn]] صرف می‌شود: [[Hij is gegaan]]."
      },
      {
        type: "mc",
        q: "اسم مفعول درست فعل [[kopen]] کدام است؟",
        options: ["gekoopt", "gekocht", "gekopen"],
        answer: 1,
        exp: "[[kopen]] فعل بی‌قاعده است و اسم مفعول آن [[gekocht]] است."
      },
      {
        type: "mc",
        q: "جمله‌ی درست را انتخاب کنید.",
        options: ["Ik heb een appel gegeten.", "Ik ben een appel gegeten.", "Ik heb een appel eten."],
        answer: 0,
        exp: "[[eten]] با [[hebben]] صرف می‌شود و اسم مفعول آن [[gegeten]] است."
      },
      {
        type: "fill",
        q: "Zij ___ (zijn) gisteren naar Parijs gegaan.",
        answers: ["is"],
        exp: "فعل [[gaan]] با [[zijn]] صرف می‌شود؛ سوم‌شخص مفرد [[zijn]] برابر [[is]] است."
      },
      {
        type: "fill",
        q: "Wij hebben de hele dag ___ (werken).",
        answers: ["gewerkt"],
        exp: "اسم مفعول [[werken]] با قاعده‌ی 't kofschip به شکل [[gewerkt]] ساخته می‌شود."
      },
      {
        type: "fill",
        q: "Hij heeft het boek nog niet ___ (lezen).",
        answers: ["gelezen"],
        exp: "اسم مفعول بی‌قاعده‌ی [[lezen]] برابر [[gelezen]] است."
      },
      {
        type: "order",
        q: "ترتیب درست: «من دیروز یک نامه نوشته‌ام»",
        tokens: ["Ik", "heb", "gisteren", "een", "brief", "geschreven"],
        answers: [["Ik", "heb", "gisteren", "een", "brief", "geschreven"]],
        exp: "فعل کمکی [[heb]] بعد از فاعل می‌آید و اسم مفعول [[geschreven]] به انتهای جمله می‌رود."
      },
      {
        type: "order",
        q: "ترتیب درست: «او به خانه رفته است»",
        tokens: ["Hij", "is", "naar", "huis", "gegaan"],
        answers: [["Hij", "is", "naar", "huis", "gegaan"]],
        exp: "چون [[gaan]] فعل حرکتی است، فعل کمکی [[is]] به کار می‌رود و اسم مفعول [[gegaan]] در انتها می‌آید."
      }
    ]
  },
  {
    id: "a2-toekomende-tijd",
    level: "A2",
    title: "زمان آینده",
    nl: "Toekomende tijd: gaan / zullen",
    sum: "آینده در هلندی معمولاً با [[gaan]] + مصدر (برای برنامه و قصد) یا [[zullen]] + مصدر (برای پیش‌بینی، قول و پیشنهاد) ساخته می‌شود.",
    blocks: [
      {
        h: "دو راه ساخت آینده",
        p: "زبان هلندی برای بیان آینده دو ساختار اصلی دارد: [[gaan]] + مصدر و [[zullen]] + مصدر. انتخاب بین این دو به **نیت و لحن جمله** بستگی دارد، نه فقط به زمان.",
        list: [
          "[[gaan]] + مصدر: برنامه، قصد یا آینده‌ی نزدیک",
          "[[zullen]] + مصدر: پیش‌بینی، قول، تصمیم لحظه‌ای یا پیشنهاد"
        ]
      },
      {
        h: "gaan + مصدر",
        p: "[[gaan]] وقتی به کار می‌رود که از قبل برنامه‌ریزی یا قصد انجام کاری وجود دارد. مصدر فعل اصلی در انتهای جمله می‌آید.",
        ex: [
          { nl: "Ik ga morgen een nieuwe auto kopen.", fa: "من فردا یک ماشین نو می‌خرم (قصد دارم بخرم)." },
          { nl: "We gaan dit weekend naar het strand.", fa: "ما این آخر هفته به ساحل می‌رویم." }
        ]
      },
      {
        h: "zullen + مصدر",
        p: "[[zullen]] برای پیش‌بینی، قول دادن یا تصمیمی که همان لحظه گرفته می‌شود به کار می‌رود. همچنین در پیشنهادها با [[Zullen we...?]] استفاده می‌شود.",
        table: {
          head: ["ضمیر", "zullen"],
          rows: [
            ["ik", "zal"],
            ["jij / je", "zal / zult"],
            ["hij / zij / het", "zal"],
            ["wij / we", "zullen"],
            ["jullie", "zullen"],
            ["zij / ze", "zullen"]
          ]
        },
        ex: [
          { nl: "Het zal morgen waarschijnlijk regenen.", fa: "احتمالاً فردا باران می‌بارد." },
          { nl: "Ik zal je morgen bellen, dat beloof ik.", fa: "فردا به تو زنگ می‌زنم، قول می‌دهم." },
          { nl: "Zullen we samen koffie drinken?", fa: "بیا با هم قهوه بخوریم، موافقی؟" }
        ]
      },
      {
        h: "تفاوت ظریف gaan و zullen",
        p: "[[gaan]] نشان‌دهنده‌ی برنامه یا قصد از پیش تعیین‌شده است، در حالی که [[zullen]] بیشتر برای حدس، پیش‌بینی یا قولی است که در لحظه داده می‌شود. در بسیاری از موقعیت‌های روزمره، [[gaan]] طبیعی‌تر و پرکاربردتر است.",
        tip: "پیشنهاد دوستانه معمولاً با [[Zullen we...?]] شروع می‌شود، نه [[Gaan we...?]]."
      },
      {
        h: "زمان حال برای آینده",
        p: "وقتی قید زمان آینده را به‌صورت مشخص در جمله داریم (مثل [[morgen]]، [[volgende week]])، می‌توان از زمان حال ساده هم برای بیان آینده استفاده کرد.",
        ex: [
          { nl: "Morgen speel ik tennis.", fa: "فردا تنیس بازی می‌کنم." }
        ]
      }
    ],
    ex: [
      {
        type: "mc",
        q: "کدام جمله قصد از پیش برنامه‌ریزی‌شده را نشان می‌دهد؟",
        options: ["Ik zal morgen naar de tandarts gaan.", "Ik ga morgen naar de tandarts.", "Ik ging morgen naar de tandarts."],
        answer: 1,
        exp: "[[gaan]] + مصدر برای برنامه یا قصد از پیش تعیین‌شده به کار می‌رود."
      },
      {
        type: "mc",
        q: "برای پیشنهاد دادن معمولاً چه ساختاری استفاده می‌شود؟",
        options: ["Gaan we samen eten?", "Zullen we samen eten?", "Zijn we samen eten?"],
        answer: 1,
        exp: "پیشنهادهای دوستانه معمولاً با [[Zullen we...?]] ساخته می‌شوند."
      },
      {
        type: "mc",
        q: "شکل درست [[zullen]] برای [[wij]] کدام است؟",
        options: ["zal", "zult", "zullen"],
        answer: 2,
        exp: "برای [[wij]]/[[we]] شکل درست فعل [[zullen]] برابر [[zullen]] است."
      },
      {
        type: "fill",
        q: "Ik ___ (zullen) je morgen bellen, dat beloof ik.",
        answers: ["zal"],
        exp: "برای قول دادن، [[zullen]] به کار می‌رود؛ شکل اول‌شخص مفرد آن [[zal]] است."
      },
      {
        type: "fill",
        q: "Wij ___ dit weekend naar Parijs reizen. (gaan)",
        answers: ["gaan"],
        exp: "برای بیان برنامه‌ی از پیش تعیین‌شده، [[gaan]] + مصدر به کار می‌رود."
      },
      {
        type: "fill",
        q: "Het ___ (zullen) morgen waarschijnlijk regenen.",
        answers: ["zal"],
        exp: "برای پیش‌بینی آب‌وهوا، [[zullen]] پرکاربرد است؛ شکل سوم‌شخص مفرد آن [[zal]] است."
      },
      {
        type: "order",
        q: "ترتیب درست: «من فردا یک کتاب جدید می‌خرم (قصد دارم بخرم)»",
        tokens: ["Ik", "ga", "morgen", "een", "nieuw", "boek", "kopen"],
        answers: [["Ik", "ga", "morgen", "een", "nieuw", "boek", "kopen"]],
        exp: "ساختار [[gaan]] + مصدر: [[ga]] بعد از فاعل و مصدر [[kopen]] در انتهای جمله."
      },
      {
        type: "order",
        q: "ترتیب درست: «بیا با هم قهوه بخوریم؟»",
        tokens: ["Zullen", "we", "samen", "koffie", "drinken"],
        answers: [["Zullen", "we", "samen", "koffie", "drinken"]],
        exp: "پیشنهاد با [[Zullen we]] شروع می‌شود و مصدر فعل اصلی ([[drinken]]) در انتها می‌آید."
      }
    ]
  },
  {
    id: "a2-bijvoeglijk-naamwoord",
    level: "A2",
    title: "صفت و پایانه‌ی e-",
    nl: "Bijvoeglijk naamwoord: de -e uitgang",
    sum: "صفت پیش از اسم معمولاً [[-e]] می‌گیرد، مگر پیش از یک het-woord مفرد همراه با [[een]] یا بدون حرف تعریف.",
    blocks: [
      {
        h: "قانون کلی",
        p: "در هلندی وقتی صفت **قبل از اسم** می‌آید، در بیشتر موارد باید [[-e]] به آن اضافه شود. این پایانه به جنس اسم (de-woord یا het-woord)، مفرد یا جمع بودن آن، و نوع حرف تعریف بستگی دارد.",
        table: {
          head: ["حالت", "مثال"],
          rows: [
            ["de-woord (مفرد، هر حرف تعریف)", "de mooie auto / een mooie auto"],
            ["het-woord مفرد با het/dit/dat", "het mooie huis"],
            ["het-woord مفرد با een/geen/بدون حرف تعریف", "een mooi huis"],
            ["جمع (هر دو جنس)", "mooie auto's / mooie huizen"]
          ]
        }
      },
      {
        h: "de-woorden همیشه -e می‌گیرند",
        p: "اگر اسم از نوع [[de-woord]] باشد، صفت پیش از آن همیشه [[-e]] می‌گیرد، چه حرف تعریف داشته باشد چه نداشته باشد.",
        ex: [
          { nl: "De grote tuin is prachtig.", fa: "باغ بزرگ بسیار زیباست." },
          { nl: "Zij heeft een leuke hond.", fa: "او یک سگ بانمک دارد." }
        ]
      },
      {
        h: "het-woorden: بستگی به حرف تعریف دارد",
        p: "برای [[het-woorden]] مفرد، اگر حرف تعریف **معین/اشاره‌ای** ([[het]]، [[dit]]، [[dat]]) باشد، صفت [[-e]] می‌گیرد؛ اما اگر حرف تعریف **نامعین** ([[een]]) باشد یا اصلاً حرف تعریف نداشته باشیم، صفت بدون [[-e]] باقی می‌ماند.",
        ex: [
          { nl: "Het mooie huis staat aan het water.", fa: "خانه‌ی زیبا کنار آب قرار دارد." },
          { nl: "Ik woon in een mooi huis.", fa: "من در یک خانه‌ی زیبا زندگی می‌کنم." },
          { nl: "Dit kleine kind lacht veel.", fa: "این بچه‌ی کوچک زیاد می‌خندد." }
        ],
        tip: "اگر هیچ حرف تعریفی نباشد و اسم het-woord مفرد باشد، صفت هم [[-e]] نمی‌گیرد: [[mooi weer]] (هوای خوب)."
      },
      {
        h: "جمع همیشه -e می‌گیرد",
        p: "در حالت جمع، فرقی نمی‌کند اسم de-woord باشد یا het-woord؛ صفت همیشه [[-e]] می‌گیرد.",
        ex: [
          { nl: "De kinderen hebben mooie tekeningen gemaakt.", fa: "بچه‌ها نقاشی‌های زیبایی کشیده‌اند." }
        ]
      },
      {
        h: "استثناها و حالت گزاره‌ای",
        p: "صفت‌هایی که به [[-en]] ختم می‌شوند (معمولاً صفت‌های جنس و منشأ مثل [[houten]]، [[gouden]]، [[open]]، [[eigen]]) هیچ‌وقت [[-e]] اضافه نمی‌گیرند. همچنین وقتی صفت بعد از فعل (مثل [[zijn]] یا [[worden]]) بیاید و قبل از اسم نباشد (حالت گزاره‌ای)، هیچ [[-e]] نمی‌گیرد.",
        list: [
          "[[een houten tafel]] (یک میز چوبی) - بدون -e",
          "[[de open deur]] (در باز) - بدون -e"
        ],
        ex: [
          { nl: "Het huis is mooi.", fa: "آن خانه زیبا است." },
          { nl: "De auto is snel.", fa: "آن ماشین سریع است." }
        ],
        tip: "تفاوت را به یاد بسپارید: [[een mooi huis]] (قبل از اسم، het-woord نامعین، بدون e) در برابر [[Het huis is mooi]] (حالت گزاره‌ای، همیشه بدون e)."
      }
    ],
    ex: [
      {
        type: "mc",
        q: "کدام گزینه درست است؟ (de-woord: de auto)",
        options: ["een groot auto", "een grote auto", "een groote auto"],
        answer: 1,
        exp: "چون [[auto]] یک de-woord است، صفت همیشه [[-e]] می‌گیرد: [[grote]]."
      },
      {
        type: "mc",
        q: "کدام گزینه درست است؟ (het-woord: het huis، با حرف تعریف نامعین)",
        options: ["een groot huis", "een grote huis"],
        answer: 0,
        exp: "چون [[huis]] het-woord است و با [[een]] (حرف تعریف نامعین) آمده، صفت [[-e]] نمی‌گیرد: [[groot]]."
      },
      {
        type: "mc",
        q: "کدام گزینه درست است؟",
        options: ["het grote huis", "het groot huis", "het grootehuis"],
        answer: 0,
        exp: "چون [[huis]] با حرف تعریف معین [[het]] آمده، صفت [[-e]] می‌گیرد: [[grote]]."
      },
      {
        type: "fill",
        q: "Ik heb een ___ (mooi) fiets gekocht. (de-woord: de fiets)",
        answers: ["mooie"],
        exp: "چون [[fiets]] de-woord است، صفت همیشه [[-e]] می‌گیرد."
      },
      {
        type: "fill",
        q: "Dat is een ___ (klein) probleem. (het-woord: het probleem)",
        answers: ["klein"],
        exp: "چون [[probleem]] het-woord است و با [[een]] آمده، صفت [[-e]] نمی‌گیرد."
      },
      {
        type: "fill",
        q: "De kinderen wonen in ___ (groot) huizen. (جمع)",
        answers: ["grote"],
        exp: "در حالت جمع، صفت همیشه [[-e]] می‌گیرد، حتی برای het-woord."
      },
      {
        type: "order",
        q: "ترتیب درست: «خانه‌ی زیبا کنار دریاست» (het huis)",
        tokens: ["Het", "mooie", "huis", "staat", "aan", "de", "zee"],
        answers: [["Het", "mooie", "huis", "staat", "aan", "de", "zee"]],
        exp: "چون [[huis]] با حرف تعریف معین [[het]] آمده، صفت [[-e]] می‌گیرد: [[mooie]]."
      },
      {
        type: "order",
        q: "ترتیب درست: «او یک ماشین سریع دارد» (de auto)",
        tokens: ["Hij", "heeft", "een", "snelle", "auto"],
        answers: [["Hij", "heeft", "een", "snelle", "auto"]],
        exp: "چون [[auto]] de-woord است، صفت همیشه [[-e]] می‌گیرد: [[snelle]]."
      }
    ]
  },
  {
    id: "a2-vergelijking",
    level: "A2",
    title: "درجات صفت (مقایسه)",
    nl: "Vergelijking: comparatief en superlatief",
    sum: "برای مقایسه به صفت [[-er]] و برای برترین حالت [[-st]] اضافه می‌شود؛ [[dan]] برای «از» و [[net zo ... als]] برای برابری به کار می‌رود.",
    blocks: [
      {
        h: "سه درجه‌ی صفت",
        p: "صفت در هلندی سه درجه دارد: حالت عادی (positief)، حالت مقایسه‌ای یا تفضیلی (comparatief) و حالت برترین یا عالی (superlatief).",
        table: {
          head: ["حالت", "مثال"],
          rows: [
            ["عادی", "mooi"],
            ["تفضیلی (-er)", "mooier"],
            ["عالی (-st)", "mooist"]
          ]
        }
      },
      {
        h: "ساخت حالت تفضیلی",
        p: "برای ساخت حالت تفضیلی، [[-er]] به انتهای صفت اضافه می‌شود. بعد از آن برای مقایسه با چیز دیگر از [[dan]] (به معنای «از») استفاده می‌شود. اگر صفت خودش به [[-r]] ختم شود، [[-der]] اضافه می‌شود.",
        ex: [
          { nl: "Amsterdam is groter dan Utrecht.", fa: "آمستردام از اوترخت بزرگ‌تر است." },
          { nl: "Deze auto is duurder dan die auto.", fa: "این ماشین از آن ماشین گران‌تر است." },
          { nl: "Mijn broer is ouder dan ik.", fa: "برادرم از من بزرگ‌تر (مسن‌تر) است." }
        ]
      },
      {
        h: "ساخت حالت عالی (برترین)",
        p: "برای حالت عالی، [[-st]] به انتهای صفت اضافه می‌شود و همیشه با حرف تعریف [[de]] یا [[het]] همراه است. صفت‌های طولانی یا آن‌هایی که به [[-s]] ختم می‌شوند، معمولاً با [[meest]] ساخته می‌شوند.",
        ex: [
          { nl: "Dit is de mooiste stad van Nederland.", fa: "این زیباترین شهر هلند است." },
          { nl: "Hij is de meest interessante persoon die ik ken.", fa: "او جالب‌ترین فردی است که می‌شناسم." }
        ],
        tip: "بعد از حالت عالی به‌جای [[dan]] از [[van]] استفاده می‌شود: [[de mooiste van de klas]] (زیباترین فرد کلاس)."
      },
      {
        h: "صفت‌های بی‌قاعده",
        p: "چند صفت پرکاربرد در مقایسه شکل بی‌قاعده دارند که باید جدا حفظ شوند.",
        table: {
          head: ["عادی", "تفضیلی", "عالی"],
          rows: [
            ["goed", "beter", "beste"],
            ["veel", "meer", "meest"],
            ["weinig", "minder", "minst"],
            ["graag", "liever", "liefst"]
          ]
        }
      },
      {
        h: "برابری: net zo ... als",
        p: "برای بیان برابری بین دو چیز از ساختار [[net zo + صفت + als]] یا [[even + صفت + als]] استفاده می‌شود، به معنای «به همان اندازه ... که».",
        ex: [
          { nl: "Hij is net zo groot als zijn broer.", fa: "او به همان اندازه‌ی برادرش بلند است." },
          { nl: "Deze oefening is even moeilijk als de vorige.", fa: "این تمرین به همان اندازه‌ی تمرین قبلی سخت است." }
        ]
      }
    ],
    ex: [
      {
        type: "mc",
        q: "حالت تفضیلی صفت [[groot]] کدام است؟",
        options: ["grootter", "groter", "grootser"],
        answer: 1,
        exp: "حالت تفضیلی با افزودن [[-er]] ساخته می‌شود: [[groter]]."
      },
      {
        type: "mc",
        q: "کدام جمله درست است؟",
        options: ["Zij is mooier dan haar zus.", "Zij is mooier als haar zus.", "Zij is mooier van haar zus."],
        answer: 0,
        exp: "بعد از حالت تفضیلی برای مقایسه از [[dan]] استفاده می‌شود، نه [[als]]."
      },
      {
        type: "mc",
        q: "حالت عالی صفت [[goed]] کدام است؟",
        options: ["goedste", "beste", "meeste"],
        answer: 1,
        exp: "[[goed]] صفت بی‌قاعده است: تفضیلی [[beter]]، عالی [[beste]]."
      },
      {
        type: "fill",
        q: "Deze auto is ___ (duur) dan die auto.",
        answers: ["duurder"],
        exp: "حالت تفضیلی [[duur]] با افزودن [[-der]] (چون خودش به -r ختم می‌شود) ساخته می‌شود: [[duurder]]."
      },
      {
        type: "fill",
        q: "Dit is de ___ (mooi) stad van Nederland.",
        answers: ["mooiste"],
        exp: "حالت عالی با افزودن [[-st]] ساخته می‌شود: [[mooiste]]."
      },
      {
        type: "fill",
        q: "Hij is net zo oud ___ ik.",
        answers: ["als"],
        exp: "در ساختار برابری [[net zo ... als]]، بعد از صفت کلمه‌ی [[als]] می‌آید."
      },
      {
        type: "order",
        q: "ترتیب درست: «آمستردام از اوترخت بزرگ‌تر است»",
        tokens: ["Amsterdam", "is", "groter", "dan", "Utrecht"],
        answers: [["Amsterdam", "is", "groter", "dan", "Utrecht"]],
        exp: "ساختار مقایسه: فعل [[is]]، صفت تفضیلی [[groter]] و سپس [[dan]] + چیز مقایسه‌شده."
      },
      {
        type: "order",
        q: "ترتیب درست: «این زیباترین خانه‌ی خیابان است»",
        tokens: ["Dit", "is", "het", "mooiste", "huis", "van", "de", "straat"],
        answers: [["Dit", "is", "het", "mooiste", "huis", "van", "de", "straat"]],
        exp: "حالت عالی همیشه با حرف تعریف می‌آید و بعد از آن برای مشخص کردن گروه از [[van]] استفاده می‌شود."
      }
    ]
  },
  {
    id: "a2-voegwoorden",
    level: "A2",
    title: "حروف ربط هم‌پایه‌ساز و وابسته‌ساز",
    nl: "Voegwoorden: nevenschikkend en onderschikkend",
    sum: "حروف ربط هم‌پایه‌ساز مثل [[en]]، [[maar]]، [[want]] ترتیب جمله را تغییر نمی‌دهند، اما حروف ربط وابسته‌ساز مثل [[omdat]] و [[als]] فعل را به انتهای جمله می‌برند.",
    blocks: [
      {
        h: "دو نوع حرف ربط",
        p: "در هلندی دو دسته‌ی اصلی حرف ربط وجود دارد: **هم‌پایه‌ساز** (nevenschikkend) که دو جمله‌ی مستقل را به هم وصل می‌کند بدون تغییر ترتیب کلمات، و **وابسته‌ساز** (onderschikkend) که یک جمله را به جمله‌ی اصلی وابسته می‌کند و فعل را به انتهای آن جمله می‌برد."
      },
      {
        h: "حروف ربط هم‌پایه‌ساز",
        p: "مهم‌ترین حروف ربط هم‌پایه‌ساز عبارتند از [[en]] (و)، [[maar]] (اما)، [[of]] (یا)، [[want]] (چون/زیرا) و [[dus]] (پس). بعد از این حروف، ترتیب عادی جمله (فاعل + فعل) حفظ می‌شود.",
        ex: [
          { nl: "Ik blijf thuis, want ik ben verkouden.", fa: "من خانه می‌مانم، چون سرما خورده‌ام." },
          { nl: "Hij werkt veel, dus hij is moe.", fa: "او زیاد کار می‌کند، پس خسته است." }
        ],
        tip: "هرچند [[want]] و [[omdat]] هر دو به معنی «چون» هستند، [[want]] ترتیب جمله را عوض نمی‌کند، اما [[omdat]] فعل را به انتهای جمله می‌برد. این یکی از رایج‌ترین اشتباهات زبان‌آموزان است."
      },
      {
        h: "حروف ربط وابسته‌ساز",
        p: "حروف ربط وابسته‌ساز مثل [[omdat]] (چون)، [[als]] (اگر/وقتی)، [[terwijl]] (در حالی که)، [[hoewel]] (اگرچه)، [[voordat]] (قبل از اینکه) و [[nadat]] (بعد از اینکه) جمله‌ی بعد از خود را به یک **جمله‌ی وابسته** تبدیل می‌کنند که در آن فعل صرف‌شده به انتهای جمله می‌رود.",
        ex: [
          { nl: "Ik blijf thuis omdat ik verkouden ben.", fa: "من خانه می‌مانم چون سرما خورده‌ام." },
          { nl: "Hoewel het regent, gaan we fietsen.", fa: "اگرچه باران می‌بارد، ما دوچرخه‌سواری می‌رویم." }
        ]
      },
      {
        h: "وقتی جمله‌ی وابسته اول می‌آید",
        p: "اگر جمله‌ی وابسته در ابتدای جمله‌ی کامل بیاید، جمله‌ی اصلی بعد از آن با **وارونگی** (فعل قبل از فاعل) شروع می‌شود.",
        ex: [
          { nl: "Omdat ik verkouden ben, blijf ik thuis.", fa: "چون سرما خورده‌ام، خانه می‌مانم." },
          { nl: "Als het regent, blijven we binnen.", fa: "اگر باران ببارد، داخل می‌مانیم." }
        ],
        tip: "دقت کنید در این حالت فعل جمله‌ی اصلی ([[blijf]]/[[blijven]]) بلافاصله بعد از ویرگول و قبل از فاعل می‌آید."
      },
      {
        h: "فهرست حروف ربط پرکاربرد",
        p: "در زیر فهرستی از رایج‌ترین حروف ربط هم‌پایه‌ساز و وابسته‌ساز را می‌بینید که در سطح A2 بسیار پرکاربردند.",
        list: [
          "هم‌پایه‌ساز: [[en]] (و)، [[maar]] (اما)، [[of]] (یا)، [[want]] (چون)، [[dus]] (پس)",
          "وابسته‌ساز: [[omdat]] (چون)، [[als]] (اگر/وقتی)، [[terwijl]] (در حالی که)، [[hoewel]] (اگرچه)",
          "وابسته‌ساز: [[voordat]] (قبل از اینکه)، [[nadat]] (بعد از اینکه)، [[totdat]] (تا اینکه)، [[zodat]] (به‌طوری که)"
        ]
      }
    ],
    ex: [
      {
        type: "mc",
        q: "کدام حرف ربط فعل را به انتهای جمله می‌برد؟",
        options: ["want", "en", "omdat"],
        answer: 2,
        exp: "[[omdat]] یک حرف ربط وابسته‌ساز است و فعل را به انتهای جمله‌ی وابسته می‌برد."
      },
      {
        type: "mc",
        q: "جمله‌ی درست را انتخاب کنید.",
        options: ["Ik blijf thuis want het regent.", "Ik blijf thuis omdat het regent, en ik niet uitga.", "Ik blijf thuis, omdat regent het."],
        answer: 0,
        exp: "بعد از [[want]] (هم‌پایه‌ساز)، ترتیب عادی جمله حفظ می‌شود: فاعل [[het]] قبل از فعل [[regent]]."
      },
      {
        type: "mc",
        q: "کدام جمله ترتیب درست دارد؟",
        options: ["Omdat ik ziek ben, ik blijf thuis.", "Omdat ik ziek ben, blijf ik thuis.", "Ik blijf omdat ziek ben ik thuis."],
        answer: 1,
        exp: "وقتی جمله‌ی وابسته اول بیاید، جمله‌ی اصلی با وارونگی (فعل قبل از فاعل) شروع می‌شود: [[blijf ik]]."
      },
      {
        type: "fill",
        q: "Ik ga niet naar het feest, ___ ik ben moe.",
        answers: ["want"],
        exp: "برای بیان دلیل بدون تغییر ترتیب جمله، از حرف ربط هم‌پایه‌ساز [[want]] استفاده می‌شود."
      },
      {
        type: "fill",
        q: "___ het regent, blijven we binnen.",
        answers: ["Als"],
        exp: "[[als]] به معنی «اگر/وقتی» است و جمله‌ی وابسته‌ای می‌سازد که فعل اصلی جمله بعد از آن با وارونگی می‌آید."
      },
      {
        type: "fill",
        q: "Hij werkt hard, ___ hij is erg moe.",
        answers: ["dus"],
        exp: "[[dus]] (پس) نتیجه را بیان می‌کند و ترتیب عادی جمله را حفظ می‌کند."
      },
      {
        type: "order",
        q: "ترتیب درست: «من خانه می‌مانم چون سرما خورده‌ام»",
        tokens: ["Ik", "blijf", "thuis", "omdat", "ik", "verkouden", "ben"],
        answers: [["Ik", "blijf", "thuis", "omdat", "ik", "verkouden", "ben"]],
        exp: "بعد از [[omdat]]، فعل [[ben]] به انتهای جمله‌ی وابسته می‌رود."
      },
      {
        type: "order",
        q: "ترتیب درست: «اگرچه باران می‌بارد، ما دوچرخه‌سواری می‌رویم»",
        tokens: ["Hoewel", "het", "regent", "gaan", "we", "fietsen"],
        answers: [["Hoewel", "het", "regent", "gaan", "we", "fietsen"]],
        exp: "جمله‌ی وابسته با [[hoewel]] شروع می‌شود و فعل آن ([[regent]]) به انتهای آن می‌رود؛ جمله‌ی اصلی بعد از آن با وارونگی ([[gaan we]]) می‌آید."
      }
    ]
  },
  {
    id: "a2-er",
    level: "A2",
    title: "کاربردهای er",
    nl: "De gebruiken van er",
    sum: "کلمه‌ی [[er]] در هلندی چند کاربرد دارد: وجود چیزی ([[er is/zijn]])، جایگزین حرف اضافه ([[erover]]، [[ermee]])، اشاره به مکان، و همراهی با اعداد و مقدارها.",
    blocks: [
      {
        h: "نگاه کلی به er",
        p: "[[er]] یکی از سخت‌ترین و پرکاربردترین کلمات هلندی برای زبان‌آموزان است، زیرا چند نقش کاملاً متفاوت دارد. در این درس چهار کاربرد اصلی آن را می‌بینیم.",
        list: [
          "وجود داشتن چیزی: [[Er is een probleem.]]",
          "جایگزین حرف اضافه + چیز: [[erover]]، [[ermee]]",
          "اشاره به مکان (بدون تکیه): [[Ik kom er net vandaan.]]",
          "همراه با عدد یا مقدار: [[Ik heb er twee.]]"
        ]
      },
      {
        h: "er برای بیان وجود (existentieel er)",
        p: "وقتی می‌خواهیم بگوییم چیزی **وجود دارد** و فاعل جمله نامعین (با [[een]] یا بدون حرف تعریف) است، از [[er is]] (برای مفرد) یا [[er zijn]] (برای جمع) در ابتدای جمله استفاده می‌کنیم.",
        ex: [
          { nl: "Er is een probleem met de auto.", fa: "یک مشکل با ماشین وجود دارد." },
          { nl: "Er zijn veel mensen op straat.", fa: "آدم‌های زیادی در خیابان هستند." }
        ],
        tip: "اگر فاعل معین باشد (با [[de]] یا [[het]])، معمولاً [[er]] به کار نمی‌رود: [[De auto staat voor de deur.]]"
      },
      {
        h: "er + حرف اضافه",
        p: "وقتی به چیزی (نه شخصی) با حرف اضافه اشاره می‌کنیم، به‌جای [[over het]]، [[met het]] و مانند آن، [[er]] با حرف اضافه ترکیب می‌شود: [[erover]]، [[ermee]]، [[erin]]، [[erop]]، [[eraan]].",
        ex: [
          { nl: "Ik denk erover.", fa: "من در موردش فکر می‌کنم." },
          { nl: "Ben je er al mee begonnen?", fa: "آیا شروعش کرده‌ای (با آن)؟" }
        ],
        tip: "برای اشاره به اشخاص از [[er]] استفاده نمی‌کنیم؛ به‌جای آن ضمیر + حرف اضافه به کار می‌رود: وقتی منظور یک شخص است می‌گوییم [[met hem]]، نه [[ermee]]."
      },
      {
        h: "er به‌عنوان اشاره‌ی مکان",
        p: "[[er]] می‌تواند به‌جای [[daar]] (بدون تکیه) برای اشاره به مکانی که قبلاً گفته شده استفاده شود.",
        ex: [
          { nl: "Woon je nog in Utrecht? Ja, ik woon er al tien jaar.", fa: "هنوز در اوترخت زندگی می‌کنی؟ بله، ده سال است که آنجا زندگی می‌کنم." },
          { nl: "Ik kom er net vandaan.", fa: "من همین الان از آنجا آمدم." }
        ]
      },
      {
        h: "er همراه با عدد یا مقدار",
        p: "وقتی به تعداد یا مقدار چیزی اشاره می‌کنیم بدون تکرار اسم، از [[er]] همراه با عدد یا کلمات مقدار (مثل [[veel]]، [[weinig]]) استفاده می‌کنیم.",
        ex: [
          { nl: "Heb je broers of zussen? Ja, ik heb er twee.", fa: "برادر یا خواهر داری؟ بله، دوتا دارم." },
          { nl: "Ik heb er genoeg.", fa: "به اندازه‌ی کافی دارم." }
        ]
      }
    ],
    ex: [
      {
        type: "mc",
        q: "کدام جمله برای بیان وجود چیزی درست است؟",
        options: ["Er is een probleem.", "Het is een probleem.", "Er een probleem is."],
        answer: 0,
        exp: "برای بیان وجود چیزی با فاعل نامعین، جمله با [[Er is]] / [[Er zijn]] شروع می‌شود."
      },
      {
        type: "mc",
        q: "برای جایگزین کردن [[over het boek]] کدام شکل درست است؟",
        options: ["erboek", "overhet", "erover"],
        answer: 2,
        exp: "وقتی به یک چیز (نه شخص) با حرف اضافه اشاره می‌کنیم، [[er]] و حرف اضافه ترکیب می‌شوند: [[erover]]."
      },
      {
        type: "mc",
        q: "پاسخ درست به «Heb je kinderen?» با اشاره به عدد کدام است؟",
        options: ["Ja, ik heb twee er.", "Ja, ik heb er twee.", "Ja, ik er heb twee."],
        answer: 1,
        exp: "در کاربرد er همراه با عدد، [[er]] بعد از فعل و قبل از عدد می‌آید: [[ik heb er twee]]."
      },
      {
        type: "fill",
        q: "___ zijn veel toeristen in Amsterdam.",
        answers: ["Er"],
        exp: "برای بیان وجود چیزی با فاعل جمع نامعین، جمله با [[Er zijn]] شروع می‌شود."
      },
      {
        type: "fill",
        q: "Ik denk vaak ___ (over + er).",
        answers: ["erover"],
        exp: "ترکیب [[er]] با حرف اضافه‌ی [[over]] برابر [[erover]] است."
      },
      {
        type: "fill",
        q: "Heb je geld bij je? Nee, ik heb ___ niet genoeg.",
        answers: ["er"],
        exp: "برای اشاره به مقدار چیزی بدون تکرار اسم، از [[er]] استفاده می‌شود: [[ik heb er niet genoeg]]."
      },
      {
        type: "order",
        q: "ترتیب درست: «یک مشکل بزرگ وجود دارد»",
        tokens: ["Er", "is", "een", "groot", "probleem"],
        answers: [["Er", "is", "een", "groot", "probleem"]],
        exp: "جمله برای بیان وجود چیزی با [[Er is]] شروع می‌شود و بعد از آن فاعل نامعین می‌آید."
      },
      {
        type: "order",
        q: "ترتیب درست بخش پاسخ به «چندتا کتاب داری؟»: «من سه‌تا دارم»",
        tokens: ["Ik", "heb", "er", "drie"],
        answers: [["Ik", "heb", "er", "drie"]],
        exp: "در پاسخ به سؤال درباره‌ی تعداد، [[er]] بعد از فعل و قبل از عدد می‌آید."
      }
    ]
  },
  {
    id: "a2-gebiedende-wijs",
    level: "A2",
    title: "جمله‌ی امری",
    nl: "Gebiedende wijs (imperatief)",
    sum: "برای ساخت جمله‌ی امری معمولاً از ریشه‌ی فعل (ik-vorm) بدون فاعل استفاده می‌شود؛ برای حالت محترمانه فعل با [[u]] همراه می‌شود.",
    blocks: [
      {
        h: "ساخت جمله‌ی امری ساده",
        p: "برای دستور دادن به کسی (jij/je)، فقط **ریشه‌ی فعل** (همان شکلی که برای [[ik]] استفاده می‌شود) به کار می‌رود و معمولاً فاعل گفته نمی‌شود.",
        ex: [
          { nl: "Kom hier!", fa: "بیا اینجا!" },
          { nl: "Luister goed!", fa: "خوب گوش کن!" },
          { nl: "Geef mij het boek.", fa: "کتاب را به من بده." }
        ],
        tip: "برای فعل‌های جداشدنی، پیشوند به انتهای جمله‌ی امری می‌رود: [[Sta op!]] (بلند شو!)."
      },
      {
        h: "جمله‌ی امری منفی",
        p: "برای دستور منفی، [[niet]] قبل از فعل یا در جای مناسب جمله می‌آید؛ برای اسم‌ها از [[geen]] استفاده می‌شود.",
        ex: [
          { nl: "Loop niet zo snel!", fa: "این‌قدر تند راه نرو!" },
          { nl: "Maak je geen zorgen.", fa: "نگران نباش." },
          { nl: "Kom niet te laat!", fa: "دیر نیا!" }
        ]
      },
      {
        h: "حالت محترمانه با u",
        p: "برای دستور یا درخواست محترمانه به کسی که با [[u]] خطاب می‌شود، فعل همان شکل سوم‌شخص مفرد (با [[-t]]) می‌گیرد و [[u]] بعد از آن می‌آید.",
        ex: [
          { nl: "Komt u binnen.", fa: "بفرمایید داخل." },
          { nl: "Gaat u zitten.", fa: "بفرمایید بنشینید." },
          { nl: "Neemt u plaats.", fa: "بفرمایید بنشینید / جا بگیرید." }
        ]
      },
      {
        h: "درخواست محترمانه با wilt u / kunt u",
        p: "در زبان روزمره، به‌جای جمله‌ی امری مستقیم، اغلب از [[Wilt u...]] یا [[Kunt u...]] به‌همراه مصدر در انتهای جمله برای درخواست مؤدبانه استفاده می‌شود.",
        ex: [
          { nl: "Wilt u hier even wachten?", fa: "ممکن است کمی اینجا منتظر بمانید؟" },
          { nl: "Kunt u de deur dichtdoen?", fa: "می‌شود در را ببندید؟" }
        ],
        tip: "این شکل درخواست بسیار محترمانه‌تر و رایج‌تر از جمله‌ی امری مستقیم با [[u]] در گفتار روزمره است."
      },
      {
        h: "عبارت‌های امری پرکاربرد",
        p: "چند عبارت امری ثابت و بسیار پرکاربرد وجود دارند که در زندگی روزمره و روی تابلوها زیاد دیده می‌شوند.",
        list: [
          "[[Pas op!]] = مواظب باش!",
          "[[Let op!]] = توجه کن!",
          "[[Niet roken]] = سیگار نکشید (روی تابلو)",
          "[[Wacht even.]] = یک لحظه صبر کن."
        ]
      }
    ],
    ex: [
      {
        type: "mc",
        q: "شکل درست جمله‌ی امری فعل [[komen]] برای jij کدام است؟",
        options: ["Jij komt!", "Kom!", "Komen!"],
        answer: 1,
        exp: "جمله‌ی امری ساده از ریشه‌ی فعل (همان شکل ik) ساخته می‌شود و فاعل گفته نمی‌شود: [[Kom!]]"
      },
      {
        type: "mc",
        q: "جمله‌ی امری محترمانه‌ی درست کدام است؟",
        options: ["U komt binnen.", "Komt u binnen.", "Komen u binnen."],
        answer: 1,
        exp: "در جمله‌ی امری محترمانه، فعل با [[-t]] قبل از [[u]] می‌آید: [[Komt u binnen]]."
      },
      {
        type: "mc",
        q: "جمله‌ی امری منفی درست کدام است؟",
        options: ["Niet loop zo snel!", "Loop niet zo snel!", "Loop zo snel niet!"],
        answer: 1,
        exp: "در جمله‌ی امری منفی، [[niet]] بعد از فعل و قید می‌آید: [[Loop niet zo snel!]]"
      },
      {
        type: "fill",
        q: "___ hier! (komen)",
        answers: ["Kom"],
        exp: "جمله‌ی امری ساده با ریشه‌ی فعل ساخته می‌شود: [[Kom]]."
      },
      {
        type: "fill",
        q: "Maak je geen ___. (zorgen)",
        answers: ["zorgen"],
        exp: "عبارت ثابت [[Maak je geen zorgen]] به معنای «نگران نباش» است."
      },
      {
        type: "fill",
        q: "Wilt u hier even ___? (wachten)",
        answers: ["wachten"],
        exp: "در درخواست محترمانه با [[Wilt u...]]، مصدر فعل اصلی در انتهای جمله می‌آید."
      },
      {
        type: "order",
        q: "ترتیب درست: «بلند شو!» (به jij)",
        tokens: ["Sta", "op"],
        answers: [["Sta", "op"]],
        exp: "فعل جداشدنی [[opstaan]] در جمله‌ی امری هم جدا می‌شود: [[Sta op!]]"
      },
      {
        type: "order",
        q: "ترتیب درست: «بفرمایید بنشینید» (محترمانه)",
        tokens: ["Gaat", "u", "zitten"],
        answers: [["Gaat", "u", "zitten"]],
        exp: "جمله‌ی امری محترمانه: فعل با [[-t]] ([[Gaat]])، سپس [[u]]، سپس بقیه‌ی جمله."
      }
    ]
  },
  {
    id: "a2-aanwijzende-voornaamwoorden",
    level: "A2",
    title: "ضمایر اشاره",
    nl: "Aanwijzende voornaamwoorden: deze/dit/die/dat",
    sum: "برای اشاره به چیز نزدیک از [[deze]] (de-woord/جمع) و [[dit]] (het-woord) و برای چیز دور از [[die]] (de-woord/جمع) و [[dat]] (het-woord) استفاده می‌شود.",
    blocks: [
      {
        h: "جدول کلی ضمایر اشاره",
        p: "ضمایر اشاره در هلندی به دو چیز بستگی دارند: **فاصله** (نزدیک یا دور) و **جنس اسم** (de-woord یا het-woord) و همچنین مفرد یا جمع بودن آن.",
        table: {
          head: ["فاصله", "de-woord مفرد", "het-woord مفرد", "جمع (هر دو جنس)"],
          rows: [
            ["نزدیک", "deze", "dit", "deze"],
            ["دور", "die", "dat", "die"]
          ]
        }
      },
      {
        h: "deze و dit (نزدیک)",
        p: "[[deze]] برای اشاره به یک **de-woord مفرد** نزدیک و [[dit]] برای یک **het-woord مفرد** نزدیک استفاده می‌شود.",
        ex: [
          { nl: "Deze auto is nieuw.", fa: "این ماشین نو است." },
          { nl: "Dit huis is heel oud.", fa: "این خانه بسیار قدیمی است." }
        ]
      },
      {
        h: "die و dat (دور)",
        p: "[[die]] برای اشاره به یک **de-woord مفرد** دور (یا هر اسم جمع) و [[dat]] برای یک **het-woord مفرد** دور استفاده می‌شود.",
        ex: [
          { nl: "Die auto daar is van mijn buurman.", fa: "آن ماشین آنجا متعلق به همسایه‌ام است." },
          { nl: "Dat huis aan het einde van de straat is te koop.", fa: "آن خانه در انتهای خیابان برای فروش است." }
        ]
      },
      {
        h: "حالت جمع",
        p: "در حالت جمع، فرقی نمی‌کند اسم اصلی de-woord یا het-woord باشد: برای نزدیک همیشه [[deze]] و برای دور همیشه [[die]] استفاده می‌شود.",
        ex: [
          { nl: "Deze boeken zijn van mij.", fa: "این کتاب‌ها از من هستند." },
          { nl: "Die huizen zijn erg duur.", fa: "آن خانه‌ها خیلی گران هستند." }
        ]
      },
      {
        h: "استفاده‌ی مستقل به‌عنوان ضمیر",
        p: "ضمایر اشاره می‌توانند بدون اسم، به‌تنهایی و اغلب همراه فعل [[zijn]] به کار روند؛ در این کاربرد [[dit]] و [[dat]] بسیار پرکاربردند و حتی وقتی اسم بعدی جمع است هم می‌توان [[dat]] را به کار برد.",
        ex: [
          { nl: "Dit is mijn broer.", fa: "این برادرم است." },
          { nl: "Dat is mooi!", fa: "این (آن) زیباست!" },
          { nl: "Dat zijn mijn ouders.", fa: "آن‌ها پدر و مادرم هستند." }
        ],
        tip: "در جمله‌ی [[Dat zijn mijn ouders]]، با وجود اینکه [[ouders]] جمع است، [[dat]] (نه [[die]]) به کار می‌رود، زیرا در این کاربرد معرفی‌کننده‌ی عمومی است، نه صفت اشاره‌ای کامل به اسم."
      }
    ],
    ex: [
      {
        type: "mc",
        q: "برای اشاره به یک de-woord نزدیک کدام ضمیر درست است؟",
        options: ["dit", "deze", "dat"],
        answer: 1,
        exp: "برای de-woord مفرد نزدیک، ضمیر درست [[deze]] است."
      },
      {
        type: "mc",
        q: "برای اشاره به یک het-woord دور کدام ضمیر درست است؟",
        options: ["die", "dat", "deze"],
        answer: 1,
        exp: "برای het-woord مفرد دور، ضمیر درست [[dat]] است."
      },
      {
        type: "mc",
        q: "کدام جمله درست است؟ (het boek)",
        options: ["Deze boek is interessant.", "Dit boek is interessant.", "Die boek is interessant."],
        answer: 1,
        exp: "چون [[boek]] یک het-woord مفرد است و اشاره به چیز نزدیک داریم، ضمیر درست [[dit]] است."
      },
      {
        type: "fill",
        q: "___ huis (het huis - نزدیک) is heel mooi.",
        answers: ["Dit"],
        exp: "برای het-woord مفرد نزدیک، ضمیر درست [[dit]] است."
      },
      {
        type: "fill",
        q: "___ auto's (de auto - جمع، دور) zijn erg snel.",
        answers: ["Die"],
        exp: "در حالت جمع برای چیز دور، همیشه [[die]] به کار می‌رود، فرقی نمی‌کند de-woord باشد یا het-woord."
      },
      {
        type: "fill",
        q: "___ is mijn zus. (معرفی مستقل)",
        answers: ["Dit", "Dat"],
        exp: "هم [[Dit]] (برای چیز/کس نزدیک) و هم [[Dat]] (برای چیز/کس کمی دورتر) در معرفی مستقل درست هستند."
      },
      {
        type: "order",
        q: "ترتیب درست: «این ماشین نو است» (de auto، نزدیک)",
        tokens: ["Deze", "auto", "is", "nieuw"],
        answers: [["Deze", "auto", "is", "nieuw"]],
        exp: "چون [[auto]] de-woord است و نزدیک است، ضمیر درست [[deze]] است."
      },
      {
        type: "order",
        q: "ترتیب درست: «آن خانه برای فروش است» (het huis، دور)",
        tokens: ["Dat", "huis", "is", "te", "koop"],
        answers: [["Dat", "huis", "is", "te", "koop"]],
        exp: "چون [[huis]] het-woord است و دور است، ضمیر درست [[dat]] است."
      }
    ]
  }
];
