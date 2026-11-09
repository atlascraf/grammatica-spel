window.GRAMMATICA_DATA = window.GRAMMATICA_DATA || {};
window.GRAMMATICA_DATA.B2 = [
  {
    id: "b2-lijdende-vorm-varianten",
    level: "B2",
    title: "فعل مجهول: حالت‌های پیشرفته",
    nl: "Lijdende vorm (varianten)",
    sum: "علاوه بر [[worden]]-passief و [[zijn]]-passief، فعل مجهول می‌تواند با افعال وجهی ([[moeten worden gedaan]])، با [[te + infinitief]] ([[te lezen zijn]]) و به‌صورت غیرشخصی ([[er wordt gedanst]]) نیز ساخته شود.",
    blocks: [
      {
        h: "مرور: [[worden]]-passief در برابر [[zijn]]-passief",
        p: "در هلندی دو نوع مجهول وجود دارد. **[[worden]]-passief** یک **کنش در حال وقوع** را نشان می‌دهد (مجهول کنشی)، مثل [[De deur wordt geopend]] (کسی الان در را باز می‌کند). **[[zijn]]-passief** یک **نتیجهٔ کامل‌شده/حالت** را نشان می‌دهد (مجهول حالتی)، مثل [[De deur is geopend]] (در الان باز است، نتیجهٔ کار).",
        table: {
          head: ["نوع مجهول", "ساختار", "کاربرد"],
          rows: [
            ["worden-passief", "[[worden/werd + voltooid deelwoord]]", "کنش در حال انجام یا رویداد"],
            ["zijn-passief", "[[zijn/was + voltooid deelwoord]]", "نتیجه یا حالت پس از کنش"]
          ]
        },
        ex: [
          { nl: "De auto wordt elke week gewassen.", fa: "ماشین هر هفته شسته می‌شود (کنش تکرارشونده)." },
          { nl: "De auto is gewassen.", fa: "ماشین شسته شده است (الان تمیز است؛ نتیجه)." },
          { nl: "Het rapport werd gisteren geschreven.", fa: "گزارش دیروز نوشته شد (کنش در گذشته)." },
          { nl: "Het rapport was al geschreven voordat ik kwam.", fa: "گزارش پیش از آمدن من نوشته شده بود (حالت/نتیجه در گذشته)." }
        ]
      },
      {
        h: "مجهول وجهی: [[moeten/kunnen/mogen + worden + voltooid deelwoord]]",
        p: "وقتی فعل وجهی (مثل [[moeten]]، [[kunnen]]، [[mogen]]) با جملهٔ مجهول ترکیب شود، ساخت به‌صورت زیر است: فعل وجهی صرف‌شده در جای دوم جمله + در انتها خوشهٔ فعلی شامل وجه وصفی گذشته و [[worden]]. مثل [[Het werk moet gedaan worden]] (این کار باید انجام شود). هر دو ترتیبِ [[gedaan worden]] و [[worden gedaan]] در خوشهٔ فعلی رایج‌اند.",
        ex: [
          { nl: "Dit werk moet morgen afgerond worden.", fa: "این کار باید فردا تکمیل شود." },
          { nl: "De fout kon makkelijk voorkomen worden.", fa: "آن اشتباه می‌توانست به‌راحتی جلوگیری شود." },
          { nl: "Zulke beslissingen mogen niet zomaar genomen worden.", fa: "چنین تصمیماتی را نباید بی‌دلیل گرفت." }
        ]
      },
      {
        h: "مجهول با [[zijn + te + infinitief]]",
        p: "ساخت [[zijn + te + infinitief]] **امکان یا سهولت** انجام کاری را بیان می‌کند، شبیه «قابل... بودن» در فارسی. مثل [[Dit boek is goed te lezen]] یعنی «این کتاب به‌خوبی خوانده می‌شود / قابل‌خوانش است». در فعل‌های بااضافه (جداشدنی)، [[te]] میان پیشوند و فعل قرار می‌گیرد، مثل [[op te lossen]].",
        ex: [
          { nl: "Dit boek is goed te lezen.", fa: "این کتاب به‌راحتی قابل خواندن است." },
          { nl: "De tekst was niet te begrijpen.", fa: "متن قابل فهمیدن نبود." },
          { nl: "Dit probleem is niet gemakkelijk op te lossen.", fa: "این مشکل به‌راحتی قابل حل نیست." }
        ],
        tip: "در فعل‌های جداشدنی مانند [[oplossen]]، حرف [[te]] همیشه میان پیشوند و بخش اصلی فعل قرار می‌گیرد: [[op-te-lossen]]، نه [[te oplossen]]."
      },
      {
        h: "مجهول غیرشخصی: [[er wordt gedanst]]",
        p: "وقتی فعل **ناگذر** باشد (مفعول مستقیم ندارد) و بخواهیم بر خودِ کنش تاکید کنیم بدون ذکر فاعل، از مجهول غیرشخصی استفاده می‌شود: [[er]] + [[worden]] + وجه وصفی گذشته. مثل [[Er wordt hier niet gerookt]] (اینجا سیگار کشیده نمی‌شود). اگر عنصر دیگری در ابتدای جمله بیاید، [[er]] به بعد از فعل منتقل می‌شود: [[Hier wordt niet gerookt]] یا [[Gisteravond werd er laat gewerkt]].",
        ex: [
          { nl: "Er wordt hier niet gerookt.", fa: "اینجا سیگار کشیده نمی‌شود." },
          { nl: "Er werd de hele avond gedanst en gezongen.", fa: "تمام شب رقصیدند و خواندند." },
          { nl: "Gisteravond werd er laat gewerkt.", fa: "دیشب تا دیروقت کار شد." }
        ],
        tip: "چون در مجهول غیرشخصی فاعل منطقی وجود ندارد (فعل ناگذر است)، این جمله را نمی‌توان به مجهول شخصی تبدیل کرد."
      }
    ],
    ex: [
      { type: "mc", q: "Het boek ___ op dit moment vertaald (de vertaler is er nu mee bezig).", options: ["is", "wordt", "werd", "zijn"], answer: 1, exp: "چون عمل در حال وقوع است (نه نتیجه)، باید [[worden]]-passief به‌کار رود: [[wordt vertaald]]." },
      { type: "mc", q: "Nadat het werk af was, ___ het al ingeleverd (نتیجهٔ کامل‌شده در گذشته).", options: ["werd", "wordt", "was", "zijn"], answer: 2, exp: "اینجا به نتیجهٔ کامل‌شده در گذشته اشاره می‌شود (حالت)، پس از [[zijn]]-passief در زمان گذشته یعنی [[was]] استفاده می‌شود." },
      { type: "fill", q: "Dit huiswerk moet voor morgen ___. (afmaken)", answers: ["afgemaakt worden", "worden afgemaakt"], exp: "در مجهول وجهی، فعل وجهی (moet) و سپس خوشهٔ [[afgemaakt worden]] یا [[worden afgemaakt]] می‌آید؛ هر دو ترتیب قابل‌قبول‌اند." },
      { type: "mc", q: "کدام جمله معادل درست «The rules must be followed.» است؟", options: ["De regels moeten gevolgd worden.", "De regels moeten volgen worden.", "De regels moeten worden gevolgen.", "De regels zijn gevolgd moeten worden."], answer: 0, exp: "ساخت درست: فعل وجهی ([[moeten]]) + وجه وصفی گذشته ([[gevolgd]]) + [[worden]]." },
      { type: "fill", q: "Dit artikel is heel moeilijk ___. (begrijpen)", answers: ["te begrijpen"], exp: "ساخت [[zijn + te + infinitief]] امکان یا سهولت انجام کاری را بیان می‌کند: [[te begrijpen]] یعنی «قابل فهمیدن»." },
      { type: "mc", q: "کدام جمله نمونهٔ مجهول غیرشخصی است؟", options: ["Er wordt hard gewerkt.", "Het werk wordt gedaan.", "Hij wordt geholpen.", "De brief werd gestuurd."], answer: 0, exp: "در مجهول غیرشخصی فاعل منطقی وجود ندارد و فعل ناگذر ([[werken]]) است؛ جمله با [[er]] شروع می‌شود." },
      { type: "order", q: "جمله را به ترتیب درست بچین: «دیشب تا دیروقت کار شد.» (مجهول غیرشخصی)", tokens: ["Gisteravond", "werd", "er", "laat", "gewerkt", "."], answers: [["Gisteravond", "werd", "er", "laat", "gewerkt", "."]], exp: "وقتی عنصر دیگری مثل [[Gisteravond]] در جایگاه اول جمله باشد، فاعل صوری [[er]] پس از فعل می‌آید، نه در ابتدای جمله." },
      { type: "order", q: "ترتیب درست را بچین: «این مشکل می‌تواند به‌راحتی حل شود.»", tokens: ["Dit", "probleem", "kan", "makkelijk", "opgelost", "worden", "."], answers: [["Dit", "probleem", "kan", "makkelijk", "opgelost", "worden", "."], ["Dit", "probleem", "kan", "makkelijk", "worden", "opgelost", "."]], exp: "در مجهول وجهی، خوشهٔ فعلی می‌تواند به دو ترتیب بیاید: [[opgelost worden]] یا [[worden opgelost]]." },
      { type: "fill", q: "___ hier niet gerookt. (مجهول غیرشخصی، زمان حال)", answers: ["Er wordt"], exp: "ساخت مجهول غیرشخصی وقتی جمله با آن آغاز شود، با فاعل صوری [[er]] و فعل [[worden]] شروع می‌شود." }
    ]
  },
  {
    id: "b2-deelwoorden",
    level: "B2",
    title: "وجه‌های وصفی (Deelwoorden)",
    nl: "Deelwoorden",
    sum: "وجه‌های وصفی حال ([[-end]]) و گذشته می‌توانند مانند **صفت**، **قید** یا در قالب یک **بند وصفی کوتاه‌شده** به‌کار روند، مثل [[een lachend kind]] و [[de gesloten deur]].",
    blocks: [
      {
        h: "وجه وصفی حال به‌عنوان صفت ([[-end]])",
        p: "وجه وصفی حال با افزودن [[-end]] به مصدر ساخته می‌شود ([[lachen]] → [[lachend]]) و مانند صفت پیش از اسم می‌آید. قاعدهٔ معمول صفت در مورد e- پایانی آن هم صدق می‌کند: پیش از اسم جمع یا با حرف تعریف معین همیشه [[-e]] اضافه می‌شود؛ پیش از اسم het-woord نامعین مفرد، بدون [[-e]].",
        ex: [
          { nl: "Een lachend kind speelde in de tuin.", fa: "کودکی خندان در باغ بازی می‌کرد." },
          { nl: "De dalende cijfers verontrustten de analisten.", fa: "آمار روبه‌کاهش تحلیلگران را نگران کرد." },
          { nl: "De brandende zon maakte het erg warm.", fa: "خورشید سوزان هوا را بسیار گرم کرده بود." }
        ]
      },
      {
        h: "وجه وصفی حال به‌عنوان قید",
        p: "وجه وصفی حال بدون تغییر (بدون [[-e]] اضافه) می‌تواند مانند قید، **نحوهٔ انجام فعل اصلی** یا کنش هم‌زمان را توصیف کند. مثل [[Lopend naar huis dacht hij aan het gesprek]] (در حالی‌که پیاده به خانه می‌رفت، به گفتگو فکر می‌کرد).",
        ex: [
          { nl: "Zingend liep ze de trap op.", fa: "درحالی‌که می‌خواند از پله‌ها بالا رفت." },
          { nl: "Hij verliet al zwaaiend het stadion.", fa: "او درحالی‌که دست تکان می‌داد، استادیوم را ترک کرد." }
        ]
      },
      {
        h: "وجه وصفی گذشته به‌عنوان صفت",
        p: "وجه وصفی گذشته (مانند [[gesloten]]، [[gebroken]]، [[gemaakt]]) هم می‌تواند مانند صفت پیش از اسم بیاید و حالتی **نتیجه‌شده/مجهول** را نشان دهد. نکتهٔ مهم: وجه‌های وصفی که به [[-en]] ختم می‌شوند (مثل [[gesloten]]، [[gebroken]]، [[geschreven]]) **هیچ‌وقت** [[-e]] اضافه نمی‌گیرند؛ اما آن‌هایی که به [[-d]] یا [[-t]] ختم می‌شوند (مثل [[gemaakt]]) از قاعدهٔ معمول صفت پیروی می‌کنند.",
        table: {
          head: ["نوع وجه وصفی", "مثال", "قابل تغییر با -e؟"],
          rows: [
            ["ختم به -en (مانند gesloten)", "de gesloten deur / een gesloten doos", "خیر، همیشه بدون تغییر"],
            ["ختم به -d/-t (مانند gemaakt)", "een gemaakt plan / het gemaakte plan", "بله، طبق قاعدهٔ معمول صفت"]
          ]
        },
        ex: [
          { nl: "De gesloten deur verbaasde iedereen.", fa: "در بسته همه را شگفت‌زده کرد." },
          { nl: "Het gemaakte plan werd goedgekeurd.", fa: "برنامهٔ تنظیم‌شده تصویب شد." }
        ]
      },
      {
        h: "بند وصفی کاهش‌یافته (participiale bijzin)",
        p: "یک وجه وصفی گذشته در ابتدای جمله می‌تواند جایگزین یک بند وابستهٔ علّی یا زمانی کامل شود، به‌خصوص در سبک رسمی و ادبی. مثل [[Vermoeid door de lange reis, viel hij meteen in slaap]] به‌جای [[Omdat hij vermoeid was door de lange reis, viel hij meteen in slaap]].",
        ex: [
          { nl: "Geschrokken door het harde geluid, rende de kat weg.", fa: "ترسیده از صدای بلند، گربه فرار کرد." },
          { nl: "Gezeten aan het raam, keek ze naar de regen.", fa: "نشسته کنار پنجره، به باران نگاه می‌کرد." }
        ],
        tip: "این ساختار بیشتر در نوشتار رسمی و ادبی دیده می‌شود و معادل یک بند قیدی کامل با [[omdat]] یا [[terwijl]] است."
      }
    ],
    ex: [
      { type: "mc", q: "Een ___ kind speelde in de tuin. (lachen, وجه وصفی حال)", options: ["lachend", "lachende", "lacht", "gelachen"], answer: 0, exp: "چون [[kind]] اسم het است و با حرف نامعین [[een]] آمده، وجه وصفی حال بدون [[-e]] اضافه می‌شود: [[lachend]]." },
      { type: "mc", q: "De ___ cijfers verontrustten de analisten. (dalen, جمع)", options: ["dalend", "dalende", "daalt", "gedaald"], answer: 1, exp: "پیش از اسم جمع همیشه [[-e]] اضافه می‌شود: [[dalende]] cijfers." },
      { type: "fill", q: "___ naar huis, dacht hij aan het gesprek. (lopen، وجه وصفی حال به‌عنوان قید)", answers: ["Lopend"], exp: "وجه وصفی حال بدون [[-e]] اضافه، به‌صورت قیدی حالت هم‌زمان با فعل اصلی را بیان می‌کند." },
      { type: "mc", q: "کدام گزینه درست است: 'de ___ deur' (sluiten, گذشته، صفت)", options: ["gesloten", "geslotene", "sluitend", "gesloten e"], answer: 0, exp: "وجه وصفی گذشته‌ای که به [[-en]] ختم می‌شود (مثل [[gesloten]])، هیچ‌وقت [[-e]] نمی‌گیرد، چه با de-woord چه het-woord." },
      { type: "mc", q: "کدام گزینه درست است: 'een ___ plan' (maken, گذشته، het-woord، نامعین)", options: ["gemaakt", "gemaakte", "makend", "gemaken"], answer: 0, exp: "چون [[plan]] اسم het است و با [[een]] نامعین آمده، وجه وصفی گذشته (که به -t ختم می‌شود) بدون [[-e]] می‌آید: [[gemaakt]]." },
      { type: "fill", q: "Het ___ plan werd goedgekeurd door de raad. (maken، گذشته، معرفه)", answers: ["gemaakte"], exp: "با حرف تعریف معرفه [[het]] همیشه [[-e]] اضافه می‌شود، حتی برای het-woord: [[het gemaakte plan]]." },
      { type: "order", q: "جمله را به ترتیب درست بچین: «ترسیده از صدای بلند، گربه فرار کرد.»", tokens: ["Geschrokken", "door", "het", "harde", "geluid", ",", "rende", "de", "kat", "weg", "."], answers: [["Geschrokken", "door", "het", "harde", "geluid", ",", "rende", "de", "kat", "weg", "."]], exp: "بند وصفی با وجه وصفی گذشته در ابتدای جمله می‌آید و با ویرگول از جملهٔ اصلی جدا می‌شود؛ معادل «چون او ترسیده بود»." },
      { type: "mc", q: "کدام جمله نمونهٔ وجه وصفی حال به‌عنوان قید است؟", options: ["Zingend liep ze de trap op.", "De zingende vogels waren mooi.", "Zij heeft gezongen.", "Het gezang was prachtig."], answer: 0, exp: "در گزینهٔ اول [[Zingend]] بدون تطبیق با اسم، به‌صورت قیدی نحوهٔ انجام فعل اصلی ([[liep]]) را توصیف می‌کند." }
    ]
  },
  {
    id: "b2-nominalisatie",
    level: "B2",
    title: "اسم‌سازی از فعل (Nominalisatie)",
    nl: "Nominalisatie",
    sum: "در سبک **نوشتاری رسمی** هلندی، به‌جای فعل، اغلب از اسم‌سازی ([[nominalisatie]]) استفاده می‌شود، مثل [[het onderzoeken]] یا [[het onderzoek]] به‌جای یک بند فعلی کامل.",
    blocks: [
      {
        h: "اسم‌سازی با [[het + infinitief]]",
        p: "مصدر فعل با حرف تعریف [[het]] به یک اسم خنثی (مجرد) تبدیل می‌شود. این ساخت وقتی به‌کار می‌رود که اسم مشتق رایجی از آن فعل وجود نداشته باشد یا بخواهیم خودِ کنش را به‌طور کلی نام ببریم. مثل [[het roken]] (سیگارکشیدن) یا [[het ontbreken]] (نبودن/کمبود).",
        ex: [
          { nl: "Het roken is hier verboden.", fa: "سیگار کشیدن اینجا ممنوع است." },
          { nl: "Door het ontbreken van bewijs werd de zaak gesloten.", fa: "به‌دلیل نبودِ مدرک، پرونده بسته شد." }
        ]
      },
      {
        h: "اسم‌سازی با پسوندهای اسمی ([[-ing]]، [[-tie]] و غیره)",
        p: "بسیاری از افعال اسم مشتق خاص خود را دارند که در سبک رسمی به‌جای بند فعلی به‌کار می‌رود: [[ontwikkelen]] → [[ontwikkeling]]، [[informeren]] → [[informatie]]، [[vergaderen]] → [[vergadering]]، [[afronden]] → [[afronding]]. این اسم‌ها معمولاً با [[van]] به بقیهٔ جمله وصل می‌شوند.",
        ex: [
          { nl: "De ontwikkeling van de stad ging snel.", fa: "توسعهٔ شهر سریع پیش رفت." },
          { nl: "Na de afronding van het onderzoek werd het rapport gepubliceerd.", fa: "پس از تکمیل تحقیق، گزارش منتشر شد." }
        ]
      },
      {
        h: "بازنویسی جمله از سبک فعلی به سبک اسمی",
        p: "در بازنویسی، فاعل بند وابسته معمولاً به یک عبارت [[door + اسم]] تبدیل می‌شود و فعل اصلی به اسم مشتق بدل می‌شود. مثل: [[Nadat de minister het voorstel had goedgekeurd, ging de wet in]] → [[Na de goedkeuring van het voorstel door de minister ging de wet in]].",
        ex: [
          { nl: "Na de goedkeuring van het voorstel door de minister ging de wet in.", fa: "پس از تصویب پیشنهاد توسط وزیر، قانون اجرا شد." },
          { nl: "Door de stijging van de prijzen nam de inflatie toe.", fa: "به‌دلیل افزایش قیمت‌ها، تورم بالا رفت." }
        ]
      },
      {
        h: "نکات و محدودیت‌ها",
        p: "اسم‌سازی بیش‌ازحد می‌تواند متن را سنگین، انتزاعی و دشوار برای خوانش کند (معروف به «هلندی اداری»). در گفتار روزمره معمولاً سبک فعلی طبیعی‌تر است و اسم‌سازی بیشتر مخصوص گزارش‌های رسمی، مقاله‌های علمی و متون قانونی است.",
        list: ["گزارش‌های اداری و رسمی", "مقاله‌های علمی و دانشگاهی", "متون قانونی و حقوقی", "تیترهای خبری"],
        tip: "در زبان رسمی نوشتاری هلندی، اسم‌سازی بیش‌ازحد می‌تواند متن را سنگین و غیرطبیعی کند؛ در گفتار معمولاً از فعل استفاده می‌شود."
      }
    ],
    ex: [
      { type: "mc", q: "کدام گزینه معادل اسمی (رسمی) 'Doordat de prijzen stijgen, ...' است؟", options: ["Door de stijging van de prijzen, ...", "Door het stijgen prijzen, ...", "Door prijzen stijgend, ...", "Door de prijzen te stijgen, ..."], answer: 0, exp: "حالت رسمی اسمی‌شدهٔ فعل [[stijgen]]، اسم [[de stijging]] است که با [[van]] به مابقی جمله وصل می‌شود." },
      { type: "fill", q: "Na ___ van het onderzoek werd het rapport gepubliceerd. (afronden، اسم‌سازی رسمی)", answers: ["afronding"], exp: "فعل [[afronden]] در سبک رسمی اغلب با اسم مشتق [[afronding]] جایگزین می‌شود، نه با [[het + مصدر]]." },
      { type: "mc", q: "کدام جمله نمونهٔ [[het + مصدر]] به‌عنوان اسم است؟", options: ["Het roken is hier verboden.", "Het rook is hier verboden.", "Roken verboden hier is.", "Hij rookt hier niet."], answer: 0, exp: "در [[het roken]]، مصدر [[roken]] با حرف تعریف [[het]] به اسمی خنثی تبدیل شده است." },
      { type: "fill", q: "Door ___ van bewijs werd de zaak gesloten. (ontbreken)", answers: ["het ontbreken"], exp: "وقتی اسم مشتق رایجی وجود نداشته باشد، از ساخت [[het + مصدر]] برای اسمی‌کردن فعل استفاده می‌شود: [[het ontbreken]]." },
      { type: "order", q: "جمله را به ترتیب درست بچین: «پس از تایید پیشنهاد توسط وزیر، قانون اجرا شد.»", tokens: ["Na", "de", "goedkeuring", "van", "het", "voorstel", "door", "de", "minister", ",", "ging", "de", "wet", "in", "."], answers: [["Na", "de", "goedkeuring", "van", "het", "voorstel", "door", "de", "minister", ",", "ging", "de", "wet", "in", "."]], exp: "فاعل بند فعلی اصلی ([[minister]]) در ساخت اسمی به یک عبارت [[door + اسم]] تبدیل می‌شود و فعل اصلی به اسم [[goedkeuring]] بدل می‌شود." },
      { type: "mc", q: "اسم مشتق‌شدهٔ رسمی از فعل 'ontwikkelen' کدام است؟", options: ["ontwikkeling", "ontwikkelen", "ontwikkelaar", "ontwikkelend"], answer: 0, exp: "پسوند [[-ing]] فعل [[ontwikkelen]] را به اسم رسمی [[ontwikkeling]] تبدیل می‌کند." },
      { type: "mc", q: "کدام مورد، سبک اسمی بیش‌ازحد و غیرطبیعی است؟", options: ["Door de uitvoering van de betaling door de klant werd de levering van het product door het bedrijf gestart.", "Toen de klant betaalde, stuurde het bedrijf het product.", "De klant betaalde en het bedrijf leverde.", "Zodra de klant betaald had, leverde het bedrijf."], answer: 0, exp: "زنجیره‌ای از عبارات اسمی با [[van]]/[[door]] پیاپی متن را سنگین و غیرطبیعی می‌کند؛ در نوشتار خوب باید تعادل حفظ شود." },
      { type: "fill", q: "De ___ van de stad ging snel. (ontwikkelen، اسم)", answers: ["ontwikkeling"], exp: "اسم رسمی مشتق از [[ontwikkelen]] همان [[ontwikkeling]] است." }
    ]
  },
  {
    id: "b2-formeel-register",
    level: "B2",
    title: "رجیستر رسمی و غیررسمی",
    nl: "Formeel register",
    sum: "رجیستر **رسمی** و **غیررسمی** هلندی در ضمیر ([[u]] در برابر [[je/jij]])، واژگان ([[derhalve]] در برابر [[daarom]]) و قراردادهای نامه‌نگاری تفاوت دارند.",
    blocks: [
      {
        h: "ضمیر [[u]] در برابر [[je/jij]]",
        p: "[[u]] ضمیر رسمی و مؤدبانهٔ دوم‌شخص است و برای غریبه‌ها، افراد مسن‌تر، موقعیت‌های رسمی و خدمات مشتری به‌کار می‌رود. [[je/jij]] ضمیر غیررسمی برای دوستان، خانواده، همسالان و کودکان است. فعل همراه [[u]] از نظر صرف مانند [[hij/zij]] است: [[u heeft/hebt]]، [[u bent]]، [[u kunt/kan]].",
        ex: [
          { nl: "Kunt u mij helpen?", fa: "می‌توانید به من کمک کنید؟ (رسمی)" },
          { nl: "Kun je me helpen?", fa: "می‌تونی کمکم کنی؟ (غیررسمی)" }
        ]
      },
      {
        h: "واژگان و ربط‌های رسمی",
        p: "در نوشتار رسمی، واژه‌ها و ربط‌های خاصی جایگزین معادل‌های روزمره می‌شوند.",
        table: {
          head: ["رسمی", "غیررسمی", "معنی"],
          rows: [
            ["derhalve", "daarom", "بنابراین"],
            ["teneinde", "om... te", "به‌منظور اینکه"],
            ["hetgeen", "wat", "که (اشاره به کل گزارهٔ قبل)"],
            ["desondanks", "toch", "با این‌حال"],
            ["dientengevolge", "daardoor", "در نتیجهٔ آن"]
          ]
        },
        ex: [
          { nl: "Hij was ziek, derhalve kon hij niet komen.", fa: "او بیمار بود، بنابراین نتوانست بیاید. (رسمی)" },
          { nl: "Hij was ziek, daarom kon hij niet komen.", fa: "او بیمار بود، برای همین نتوانست بیاید. (غیررسمی)" }
        ]
      },
      {
        h: "قراردادهای نامه و ایمیل رسمی",
        p: "نامهٔ رسمی هلندی معمولاً با [[Geachte heer/mevrouw,]] شروع و با [[Met vriendelijke groet,]] پایان می‌یابد. درخواست‌های رسمی اغلب با ساخت شرطی مؤدبانهٔ [[zou u... kunnen]] بیان می‌شوند، نه ساخت ساده‌تر [[kun je]].",
        ex: [
          { nl: "Geachte heer Janssen, naar aanleiding van uw brief van 3 mei...", fa: "جناب آقای یانسن، در پی نامهٔ شما به تاریخ ۳ مه..." },
          { nl: "Zou u voor morgen kunnen antwoorden?", fa: "آیا می‌توانید تا فردا پاسخ دهید؟" }
        ],
        tip: "عبارت ثابت [[naar aanleiding van]] (در پی/با توجه به) و بستن نامه با [[Met vriendelijke groet]] از رایج‌ترین قراردادهای نامهٔ رسمی هلندی‌اند."
      },
      {
        h: "دیگر نشانه‌های سبک رسمی",
        p: "سبک رسمی از کوتاه‌شده‌ها ([['t]]، [['n]]، [[ie]]) پرهیز می‌کند و شکل کامل کلمات ([[het]]، [[een]]، [[hij]]) را به‌کار می‌برد. همچنین مجهول و سبک اسمی (nominalisatie) را بیشتر ترجیح می‌دهد و از ذرات وجهی محاوره‌ای مثل [[toch]] و [[gewoon]] کمتر استفاده می‌کند.",
        ex: [
          { nl: "Het is niet mogelijk om dit te doen.", fa: "این کار ممکن نیست. (رسمی)" },
          { nl: "'t Kan gewoon niet.", fa: "خب نمی‌شه دیگه. (غیررسمی)" }
        ]
      }
    ],
    ex: [
      { type: "mc", q: "کدام جمله در یک نامهٔ رسمی به فردی ناشناس مناسب است؟", options: ["Kunt u mij hierover informeren?", "Kun je me hierover vertellen?", "Vertel me er even over.", "Weet jij hier iets van?"], answer: 0, exp: "در نامهٔ رسمی به فردی ناشناس، باید از ضمیر [[u]] و لحن رسمی استفاده کرد." },
      { type: "mc", q: "معادل رسمی 'daarom' کدام است؟", options: ["derhalve", "toch", "gewoon", "maar"], answer: 0, exp: "[[derhalve]] معادل رسمی «daarom/بنابراین» است و در نوشتار رسمی به‌کار می‌رود." },
      { type: "fill", q: "Geachte heer Janssen, naar aanleiding ___ uw brief van 3 mei...", answers: ["van"], exp: "عبارت ثابت رسمی [[naar aanleiding van]] به معنای «در پی/با توجه به» همیشه با حرف اضافهٔ [[van]] می‌آید." },
      { type: "mc", q: "کدام جمله غیررسمی است؟", options: ["'t Kan gewoon niet, joh.", "Dit is helaas niet mogelijk.", "Wij kunnen hieraan niet voldoen.", "Dit verzoek kan niet worden ingewilligd."], answer: 0, exp: "استفاده از کوتاه‌شدهٔ [['t]] به‌جای [[het]] و کلمهٔ محاوره‌ای [[joh]] نشانهٔ سبک کاملاً غیررسمی است." },
      { type: "order", q: "جملهٔ رسمی را بچین: «آیا می‌توانید تا فردا پاسخ دهید؟»", tokens: ["Zou", "u", "voor", "morgen", "kunnen", "antwoorden", "?"], answers: [["Zou", "u", "voor", "morgen", "kunnen", "antwoorden", "?"]], exp: "استفادهٔ شرطی [[zou... kunnen]] همراه با [[u]] لحن مؤدبانه و رسمی‌تری به درخواست می‌دهد تا حالت ساده‌تر [[kun je]]." },
      { type: "fill", q: "Met vriendelijke ___, (بستن نامهٔ رسمی)", answers: ["groet", "groeten"], exp: "عبارت ثابت پایانی نامهٔ رسمی هلندی [[Met vriendelijke groet]] (یا groeten) است." },
      { type: "mc", q: "کدام توصیف دربارهٔ 'hetgeen' نادرست است؟", options: ["hetgeen فقط برای اشاره به اشخاص به‌کار می‌رود", "hetgeen معادل رسمی 'wat' است و به کل جملهٔ قبل اشاره می‌کند", "hetgeen در نوشتار رسمی و حقوقی رایج است", "hetgeen را می‌توان با 'wat' جایگزین کرد در سبک غیررسمی"], answer: 0, exp: "[[hetgeen]] برای اشاره به اشیا، مفاهیم یا کل گزارهٔ قبلی به‌کار می‌رود، نه برای اشخاص؛ پس گزینهٔ اول نادرست است." },
      { type: "mc", q: "در مکالمهٔ غیررسمی با یک دوست، کدام ضمیر طبیعی‌تر است؟", options: ["je/jij", "u", "Uw", "U"], answer: 0, exp: "در گفتار دوستانه و غیررسمی همیشه [[je/jij]] به‌کار می‌رود، نه [[u]] که برای موقعیت‌های رسمی و افراد ناشناس یا مسن‌تر است." }
    ]
  },
  {
    id: "b2-modale-partikels",
    level: "B2",
    title: "ذرات وجهی",
    nl: "Modale partikels",
    sum: "ذرات وجهی مانند [[toch]]، [[wel]]، [[maar]]، [[eens]]، [[even]] و [[gewoon]] خودشان معنای لغوی مستقلی ندارند، اما لحن و نگرش گوینده را به‌طور ظریف تغییر می‌دهند.",
    blocks: [
      {
        h: "[[toch]]: جستن تایید یا تضاد ملایم با انتظار",
        p: "[[toch]] اغلب برای جستن تایید یا اطمینان دربارهٔ چیزی که انتظار داریم به‌کار می‌رود، یا برای بیان تضاد ملایم با فرض قبلی. مثل [[Je komt toch?]] (می‌آیی دیگه، نه؟) یا [[Het is toch niet zo moeilijk]] (بالاخره که اونقدرها سخت نیست).",
        ex: [
          { nl: "Je weet het toch nog wel?", fa: "هنوز یادت هست، نه؟" },
          { nl: "Doe het toch maar.", fa: "خب بالاخره انجامش بده دیگه." }
        ]
      },
      {
        h: "[[wel]]: اطمینان ملایم در برابر شک",
        p: "[[wel]] چیزی را در برابر شک، نگرانی یا انتظار منفی تایید می‌کند. مثل [[Het zal wel lukken]] (بالاخره درست می‌شه، نگران نباش).",
        ex: [
          { nl: "Hij komt wel laat, maar hij komt.", fa: "دیر می‌آد، ولی بالاخره می‌آد." },
          { nl: "Dat is wel waar.", fa: "آره، اون درسته (با وجود شک قبلی)." }
        ]
      },
      {
        h: "[[maar]] و [[eens]]: نرم‌کردن دستور و درخواست",
        p: "[[maar]] در جملات امری لحن را نرم و دوستانه می‌کند، گویی کار بی‌اهمیت و راحتی است: [[Kom maar binnen]] (بیا تو دیگه، اشکالی نداره). [[eens]] درخواست را به‌صورت «یک بار/یک لحظه امتحان کن» نرم‌تر می‌کند: [[Kijk eens hier]]. ترکیب [[maar eens]] هم رایج است: [[Probeer het maar eens]].",
        ex: [
          { nl: "Ga maar zitten.", fa: "بشین دیگه، اشکالی نداره." },
          { nl: "Luister eens goed.", fa: "یه لحظه خوب گوش کن." }
        ]
      },
      {
        h: "[[even]] و [[gewoon]]: کوچک‌نمایی درخواست و ساده‌سازی واقعیت",
        p: "[[even]] نشان می‌دهد کار درخواستی کوتاه و کم‌زحمت است، مثل [[Kun je dat even checken?]]. [[gewoon]] به معنای «فقط/صرفاً» واقعیتی را ساده و بی‌پیرایه توصیف می‌کند یا دستوری را عادی جلوه می‌دهد: [[Doe het gewoon]] (خب فقط انجامش بده).",
        ex: [
          { nl: "Wacht even.", fa: "یه لحظه صبر کن." },
          { nl: "Hij is gewoon moe, niet boos.", fa: "اون فقط خسته‌ست، عصبانی نیست." }
        ],
        tip: "چند ذرهٔ وجهی را می‌توان با هم ترکیب کرد (مثل [[toch wel]]، [[maar eens]]) که لحن را نرم‌تر یا طبیعی‌تر می‌کند؛ ترتیب این ذرات معمولاً نسبتاً ثابت است."
      }
    ],
    ex: [
      { type: "mc", q: "Je komt ___ naar het feest? (درخواست تایید ملایم)", options: ["toch", "eens", "even", "gewoon"], answer: 0, exp: "[[toch]] در پایان یا میان جمله برای جستن تایید یا اطمینان از چیزی که انتظار داریم به‌کار می‌رود." },
      { type: "mc", q: "Het zal ___ wel goed komen. (دلداری/اطمینان ملایم در برابر تردید)", options: ["toch", "wel", "maar", "eens"], answer: 1, exp: "[[wel]] اطمینانی ملایم در برابر شک یا نگرانی بیان می‌کند: «بالاخره خوب می‌شود»." },
      { type: "fill", q: "Kom ___ binnen, het is koud buiten. (نرم‌کردن دعوت)", answers: ["maar"], exp: "[[maar]] در جملات امری لحن را نرم و دوستانه می‌کند، گویی کار بی‌اهمیت و راحتی است." },
      { type: "mc", q: "Kun je dat ___ checken voor me? (درخواست کوچک و سریع)", options: ["eens", "even", "gewoon", "toch"], answer: 1, exp: "[[even]] نشان می‌دهد کار درخواستی کوتاه و ساده است و درخواست را مودبانه‌تر و کم‌زحمت‌تر جلوه می‌دهد." },
      { type: "fill", q: "Hij is ___ moe, niet boos. (ساده‌کردن یک واقعیت)", answers: ["gewoon"], exp: "[[gewoon]] در اینجا به معنای «فقط/صرفاً» واقعیت را ساده و بی‌پیرایه توصیف می‌کند." },
      { type: "mc", q: "Probeer het ___ eens. (ترکیب تشویق و درخواست آزمایش)", options: ["maar", "toch", "wel", "even"], answer: 0, exp: "ترکیب [[maar eens]] معمول است: [[maar]] لحن را نرم می‌کند و [[eens]] به معنای «یک‌بار امتحان کن» است." },
      { type: "mc", q: "کدام جمله طبیعی‌ترین معادل «بالاخره که می‌آیی، نه؟» را دارد؟", options: ["Je komt toch?", "Je komt even?", "Je komt gewoon?", "Je komt maar?"], answer: 0, exp: "[[toch]] دقیقاً این نوع جستن تاییدِ انتظار را منتقل می‌کند." },
      { type: "fill", q: "Luister ___ goed naar wat ik zeg. (درخواست توجه، نرم اما قاطع)", answers: ["eens"], exp: "[[eens]] در جملات امری به معنای «یک لحظه/یک‌بار» درخواست را ملموس‌تر و کمی نرم‌تر می‌کند." }
    ]
  },
  {
    id: "b2-samengestelde-voegwoorden",
    level: "B2",
    title: "پیوندهای پیشرفته",
    nl: "Samengestelde voegwoorden",
    sum: "پیوندهای پیشرفته‌ای مانند [[ondanks dat]]، [[ook al]]، [[zodat]]، [[zodra]]، [[terwijl]]، [[mits]] و [[tenzij]] روابط امتناعی، نتیجه، زمان و شرط را با نکات دستوری خاص خود بیان می‌کنند.",
    blocks: [
      {
        h: "[[ondanks dat]] و [[ook al]]: با وجود اینکه",
        p: "هر دو رابطهٔ امتناعی (concessief) یعنی «با وجود اینکه/حتی اگر» را بیان می‌کنند و بند وابسته با ترتیب فعل‌پایانی می‌سازند. [[ondanks dat]] از نظر برخی زبان‌شناسان کمی غیررسمی‌تر تلقی می‌شود (معادل رسمی‌تر: [[ondanks het feit dat]])، درحالی‌که [[ook al]] کاملاً طبیعی و رایج است و اغلب با [[toch]] در بند اصلی همراه می‌شود.",
        ex: [
          { nl: "Ondanks dat het regende, gingen we wandelen.", fa: "با وجود اینکه باران می‌آمد، ما پیاده‌روی کردیم." },
          { nl: "Ook al is het laat, we gaan toch nog weg.", fa: "حتی اگر دیر هم باشد، باز هم می‌رویم." }
        ]
      },
      {
        h: "[[zodat]] در برابر [[zodra]]",
        p: "این دو پیوند به‌دلیل شباهت ظاهری اغلب با هم اشتباه گرفته می‌شوند، اما معنای کاملاً متفاوتی دارند. [[zodat]] رابطهٔ **نتیجه یا هدف** را بیان می‌کند (به‌طوری‌که/تا اینکه). [[zodra]] رابطهٔ **زمانی** را بیان می‌کند (به‌محض‌اینکه).",
        ex: [
          { nl: "Hij fluisterde, zodat niemand het hoorde.", fa: "او آهسته گفت، به‌طوری‌که کسی نشنید." },
          { nl: "Zodra ik thuis ben, bel ik je.", fa: "به‌محض‌اینکه به خانه برسم، به تو زنگ می‌زنم." }
        ]
      },
      {
        h: "[[terwijl]]: هم‌زمانی یا تضاد",
        p: "[[terwijl]] هم برای بیان **هم‌زمانی** دو کنش و هم برای بیان **تضاد** به‌کار می‌رود، بسته به زمینه.",
        ex: [
          { nl: "Zij las een boek, terwijl hij kookte.", fa: "او کتاب می‌خواند، درحالی‌که او (دیگری) غذا می‌پخت. (هم‌زمانی)" },
          { nl: "Hij klaagde, terwijl hij zelf de fout had gemaakt.", fa: "او شکایت می‌کرد، درحالی‌که خودش مرتکب اشتباه شده بود. (تضاد)" }
        ]
      },
      {
        h: "[[mits]] و [[tenzij]]: شرط مثبت و منفی",
        p: "[[mits]] یک شرط مثبت نسبتاً رسمی به معنای «به شرط اینکه» است. [[tenzij]] یک شرط منفی به معنای «مگر اینکه» است.",
        ex: [
          { nl: "Je mag gaan, mits je op tijd terug bent.", fa: "می‌توانی بروی، به شرط اینکه به‌موقع برگردی." },
          { nl: "We gaan door, tenzij het hard gaat regenen.", fa: "ادامه می‌دهیم، مگر اینکه باران شدیدی بیاید." }
        ],
        tip: "در بند وابسته‌ای که با این پیوندها شروع می‌شود، فعل به انتهای بند می‌رود؛ اگر این بند در ابتدای جمله بیاید، فعل جملهٔ اصلی بلافاصله بعد از آن می‌آید (وارونگی)."
      }
    ],
    ex: [
      { type: "mc", q: "___ ik moe was, ging ik toch naar de training. (با وجود اینکه)", options: ["Ook al", "Zodat", "Mits", "Tenzij"], answer: 0, exp: "[[ook al]] به معنای «با وجود اینکه/حتی اگر» رابطهٔ امتناعی بیان می‌کند." },
      { type: "mc", q: "Hij fluisterde, ___ niemand het zou horen. (نتیجه/هدف)", options: ["zodra", "zodat", "terwijl", "mits"], answer: 1, exp: "[[zodat]] نتیجه یا هدف عمل را بیان می‌کند؛ نباید با [[zodra]] (به‌محض‌اینکه) اشتباه شود." },
      { type: "fill", q: "___ ik thuis ben, bel ik je. (به‌محض‌اینکه)", answers: ["Zodra"], exp: "[[zodra]] به معنای «به‌محض‌اینکه» رابطهٔ زمانی بیان می‌کند، نه نتیجه." },
      { type: "mc", q: "Je mag gaan, ___ je op tijd terug bent. (شرط مثبت رسمی)", options: ["tenzij", "mits", "terwijl", "ondanks dat"], answer: 1, exp: "[[mits]] شرط مثبت و نسبتاً رسمی به معنای «به شرط اینکه» است." },
      { type: "mc", q: "We gaan door met de wedstrijd, ___ het heel hard gaat regenen. (مگر اینکه)", options: ["mits", "tenzij", "zodat", "ook al"], answer: 1, exp: "[[tenzij]] شرط منفی به معنای «مگر اینکه» بیان می‌کند." },
      { type: "fill", q: "Zij las een boek, ___ hij kookte. (هم‌زمانی)", answers: ["terwijl"], exp: "[[terwijl]] برای بیان هم‌زمانی دو کنش یا گاهی تضاد به‌کار می‌رود." },
      { type: "order", q: "جمله را بچین: «با وجود اینکه باران می‌آمد، ما پیاده‌روی کردیم.»", tokens: ["Ondanks", "dat", "het", "regende", ",", "gingen", "we", "wandelen", "."], answers: [["Ondanks", "dat", "het", "regende", ",", "gingen", "we", "wandelen", "."]], exp: "بعد از بند وابسته‌ای که با [[ondanks dat]] شروع می‌شود و با ویرگول تمام می‌شود، فعل جملهٔ اصلی بلافاصله می‌آید (وارونگی): [[gingen we]]." },
      { type: "order", q: "جمله را بچین: «به‌محض‌اینکه او آمد، ما شروع کردیم.»", tokens: ["Zodra", "hij", "kwam", ",", "begonnen", "we", "."], answers: [["Zodra", "hij", "kwam", ",", "begonnen", "we", "."]], exp: "فعل بند وابستهٔ [[zodra]] به انتهای بند می‌رود ([[kwam]]) و بعد از ویرگول، فعل جملهٔ اصلی می‌آید." }
    ]
  },
  {
    id: "b2-infinitiefconstructies",
    level: "B2",
    title: "ساخت‌های پیشرفته مصدری",
    nl: "Infinitiefconstructies",
    sum: "ساخت‌های مصدری پیشرفته مانند [[aan het + infinitief]] (استمراری)، [[laten + infinitief]] (سببی) و [[zitten/staan/liggen + te + infinitief]] جزئیات نحوهٔ انجام یک کنش را نشان می‌دهند.",
    blocks: [
      {
        h: "[[aan het + infinitief]]: حالت استمراری",
        p: "ساخت [[zijn + aan het + infinitief]] کنشی در حال انجام را بیان می‌کند، شبیه زمان استمراری در زبان‌های دیگر. مثل [[Ik ben aan het koken]] (من الان آشپزی می‌کنم).",
        ex: [
          { nl: "Ze is aan het studeren.", fa: "او الان درس می‌خواند." },
          { nl: "We waren aan het praten toen de telefoon ging.", fa: "ما در حال صحبت بودیم که تلفن زنگ زد." }
        ]
      },
      {
        h: "[[laten + infinitief]]: ساخت سببی",
        p: "[[laten]] + مصدر به معنای سببی «کاری را به‌وسیلهٔ دیگری انجام دادن» یا «اجازه‌دادن/گذاشتن برای رخ‌دادن چیزی» است. مثل [[Ik laat mijn auto repareren]] (ماشینم را می‌دهم تعمیر کنند؛ خودم تعمیر نمی‌کنم).",
        ex: [
          { nl: "Zij laat haar haar knippen.", fa: "او موهایش را (توسط آرایشگر) کوتاه می‌کند." },
          { nl: "Laat hem maar gaan.", fa: "بگذار برود دیگر." }
        ]
      },
      {
        h: "[[zitten/staan/liggen + te + infinitief]]: موضع بدنی + کنش در حال انجام",
        p: "فعل‌های موضعی ([[zitten]]، [[staan]]، [[liggen]]، و گاهی [[lopen]]) به‌همراه [[te + infinitief]] کنشی در حال انجام را توصیف می‌کنند که با وضعیت بدنی طبیعی آن کنش همراه است. انتخاب فعل موضعی به موضع بدنی منطقی فعالیت بستگی دارد: [[zitten]] برای خواندن/نشستن، [[liggen]] برای خوابیدن، [[staan]] برای ایستادن و انتظار.",
        ex: [
          { nl: "Hij zit te lezen.", fa: "او نشسته و در حال خواندن است." },
          { nl: "Ze staat te wachten op de bus.", fa: "او ایستاده و منتظر اتوبوس است." },
          { nl: "De kinderen liggen te slapen.", fa: "بچه‌ها دراز کشیده و در خوابند." }
        ]
      },
      {
        h: "مقایسهٔ [[aan het]] با [[zitten/staan/liggen te]]",
        p: "هر دو ساخت استمراری‌اند، اما [[zitten/staan/liggen + te]] موضع بدنی را هم نشان می‌دهد و لحنی زنده‌تر و محاوره‌ای‌تر دارد؛ [[aan het]] خنثی‌تر و عمومی‌تر است و وقتی موضع بدنی مهم یا مشخص نباشد، ترجیح داده می‌شود.",
        tip: "اگر موضع بدنی فرد مشخص یا مهم نباشد، [[aan het]] طبیعی‌تر است؛ اگر موضع بدنی با فعل هم‌خوانی طبیعی داشته باشد (مثل نشستن برای خواندن)، [[zitten/staan/liggen te]] رایج‌تر و زنده‌تر است."
      }
    ],
    ex: [
      { type: "mc", q: "Ik ben ___ koken. (در حال انجام کاری اکنون)", options: ["aan het", "te", "laten", "zitten"], answer: 0, exp: "ساخت استمراری [[aan het + مصدر]] برای «در حال انجام کاری بودن» به‌کار می‌رود: [[aan het koken]]." },
      { type: "mc", q: "Zij ___ haar haar knippen bij de kapper. (سببی، کاری توسط دیگری)", options: ["is", "laat", "zit", "staat"], answer: 1, exp: "[[laten]] + مصدر به معنای سببی «کاری را به‌وسیلهٔ دیگری انجام دادن» است: [[haar laten knippen]]." },
      { type: "fill", q: "Hij ___ te lezen in de tuin. (نشسته، موضع بدنی طبیعی)", answers: ["zit"], exp: "چون خواندن معمولاً در حالت نشسته انجام می‌شود، فعل موضعی [[zitten]] طبیعی‌ترین گزینه است: [[zit te lezen]]." },
      { type: "mc", q: "De kinderen ___ te slapen. (دراز کشیده، مشغول خوابیدن)", options: ["zitten", "staan", "liggen", "lopen"], answer: 2, exp: "برای خوابیدن، فعل موضعی طبیعی [[liggen]] است: [[liggen te slapen]]." },
      { type: "mc", q: "'We waren aan het praten toen de telefoon ging.' این جمله چه کنشی را توصیف می‌کند؟", options: ["کنشی که در گذشته در حال انجام بود", "کنشی که هنوز شروع نشده بود", "یک وضعیت دائمی", "یک درخواست"], answer: 0, exp: "[[aan het + مصدر]] در زمان گذشته کنشی استمراری در گذشته را توصیف می‌کند." },
      { type: "fill", q: "Laat me dat even ___. (توضیح دادن، سببی/اجازه)", answers: ["uitleggen"], exp: "پس از [[laten]]، فعل دوم به‌صورت مصدر ساده (بدون te) می‌آید: [[laten uitleggen]]." },
      { type: "order", q: "جمله را بچین: «او کنار پنجره ایستاده منتظر اتوبوس بود.»", tokens: ["Ze", "stond", "te", "wachten", "op", "de", "bus", "."], answers: [["Ze", "stond", "te", "wachten", "op", "de", "bus", "."]], exp: "برای ایستادن و انتظار، فعل موضعی [[staan]] + [[te]] + مصدر طبیعی است: [[staan te wachten]]." },
      { type: "order", q: "جمله را بچین: «من مشغول نوشتن یک نامه هستم.»", tokens: ["Ik", "ben", "een", "brief", "aan", "het", "schrijven", "."], answers: [["Ik", "ben", "een", "brief", "aan", "het", "schrijven", "."]], exp: "در ساخت [[aan het + مصدر]]، مفعول ([[een brief]]) پیش از [[aan het]] قرار می‌گیرد: [[ben een brief aan het schrijven]]." }
    ]
  }
];
