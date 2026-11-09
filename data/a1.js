window.GRAMMATICA_DATA = window.GRAMMATICA_DATA || {};
window.GRAMMATICA_DATA.A1 = [
  {
    id: "a1-lidwoorden",
    level: "A1",
    title: "حروف تعریف: de، het و een",
    nl: "de / het / een",
    sum: "در هلندی برای اسم‌های معین از [[de]] یا [[het]] و برای اسم‌های نامعین از [[een]] استفاده می‌شود؛ انتخاب بین [[de]] و [[het]] به جنس دستوری اسم بستگی دارد.",
    blocks: [
      {
        h: "حرف تعریف معین: [[de]] و [[het]]",
        p: "در فارسی حرف تعریف معین وجود ندارد، اما در هلندی هر اسم یا با [[de]] یا با [[het]] می‌آید که هر دو معادل **آن / -ه** هستند. اسم‌هایی که با [[de]] می‌آیند را **de-woorden** و اسم‌هایی که با [[het]] می‌آیند را **het-woorden** می‌نامند. حدود سه‌چهارم اسم‌های هلندی [[de]] می‌گیرند.",
        ex: [
          { nl: "De tafel is bruin.", fa: "میز قهوه‌ای است." },
          { nl: "Het boek is interessant.", fa: "کتاب جالب است." }
        ],
        tip: "بهترین روش یادگیری هر اسم تازه این است که آن را همراه با [[de]] یا [[het]] خودش حفظ کنید، نه اسم به‌تنهایی."
      },
      {
        h: "چه زمانی [[het]] استفاده می‌شود",
        p: "گروهی از اسم‌ها همیشه [[het]] می‌گیرند: **کوچک‌شده‌ها** (verkleinwoorden که با [[-je]] تمام می‌شوند)، نام **زبان‌ها**، **فلزها** و **جهت‌های جغرافیایی**، و اسم‌هایی که از **فعل به‌صورت مصدر** ساخته شده‌اند.",
        list: [
          "کوچک‌شده‌ها: [[het huisje]] (خانه‌ی کوچک)، [[het boekje]] (کتابچه)",
          "زبان‌ها: [[het Nederlands]]، [[het Perzisch]]",
          "فلزها و جهت‌ها: [[het goud]]، [[het noorden]]",
          "مصدر به‌عنوان اسم: [[het lezen]] (خوانْدن)، [[het eten]] (غذا/خوردن)"
        ],
        ex: [
          { nl: "Het Nederlands is niet zo moeilijk.", fa: "هلندی آن‌قدرها هم سخت نیست." },
          { nl: "Het eten smaakt lekker.", fa: "غذا خوشمزه است." }
        ]
      },
      {
        h: "چه زمانی [[de]] استفاده می‌شود",
        p: "اسم‌های **جمع** همیشه [[de]] می‌گیرند، حتی اگر مفرد آن‌ها [[het]] باشد. همچنین اسم‌های مربوط به **افراد و شغل‌ها** و بیشتر **درخت‌ها، گل‌ها، میوه‌ها و سبزیجات** معمولاً [[de]] می‌گیرند.",
        table: { head: ["مفرد", "جمع"], rows: [["het huis", "de huizen"], ["het boek", "de boeken"], ["de auto", "de auto's"]] },
        ex: [
          { nl: "Het kind speelt buiten.", fa: "بچه بیرون بازی می‌کند." },
          { nl: "De kinderen spelen buiten.", fa: "بچه‌ها بیرون بازی می‌کنند." }
        ],
        tip: "در جمع فرقی بین [[de]] و [[het]] وجود ندارد؛ همه‌ی جمع‌ها [[de]] می‌گیرند."
      },
      {
        h: "حرف تعریف نامعین: [[een]]",
        p: "[[een]] معادل **یک / -ی** در فارسی است و برای معرفی چیزی ناشناخته یا نامشخص به کار می‌رود. برخلاف [[de]] و [[het]]، [[een]] برای هر دو گروه اسم یکسان است و تفاوتی ندارد.",
        ex: [
          { nl: "Ik zie een hond.", fa: "من یک سگ می‌بینم." },
          { nl: "Dat is een mooi huis.", fa: "آن یک خانه‌ی زیبا است." }
        ],
        tip: "[[een]] هیچ‌وقت با اسم جمع نمی‌آید؛ برای جمع نامعین اصلاً حرف تعریف نمی‌آوریم: [[Ik zie honden.]] (من سگ‌هایی می‌بینم.)"
      },
      {
        h: "راه عملی برای یادگیری",
        p: "در فرهنگ‌لغت‌های هلندی، اسم‌های [[het]] معمولاً با علامت **(het)** مشخص می‌شوند و بقیه‌ی اسم‌ها [[de]] هستند. بهترین راه این است که هر اسم جدید را همراه با حرف تعریفش حفظ کنید.",
        list: [
          "[[de man]] - مرد",
          "[[het meisje]] - دختر (کوچک‌شده، همیشه het)",
          "[[de stad]] - شهر",
          "[[het land]] - کشور"
        ]
      }
    ],
    ex: [
      { type: "fill", q: "___ boek is interessant.", answers: ["Het", "het"], exp: "[[boek]] یک het-woord است، پس حرف تعریف آن [[het]] است." },
      { type: "fill", q: "Ik heb ___ hond.", answers: ["een"], exp: "چون سگ هنوز معرفی نشده و نامشخص است، از حرف تعریف نامعین [[een]] استفاده می‌کنیم." },
      { type: "mc", q: "جمع [[het huis]] کدام است؟", options: ["de huizen", "het huizen", "de huisen"], answer: 0, exp: "اسم‌های جمع همیشه [[de]] می‌گیرند، حتی اگر مفرد آن‌ها [[het]] باشد: [[de huizen]]." },
      { type: "mc", q: "کدام گروه از اسم‌ها همیشه با [[het]] می‌آید؟", options: ["نام زبان‌ها", "نام شغل‌ها", "نام میوه‌ها"], answer: 0, exp: "نام زبان‌ها مثل [[het Nederlands]] همیشه [[het]] می‌گیرند." },
      { type: "fill", q: "___ Nederlands is een mooie taal.", answers: ["Het", "het"], exp: "نام زبان‌ها همیشه [[het]] می‌گیرند." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «من یک سگ می‌بینم.»", tokens: ["Ik", "zie", "een", "hond"], answers: [["Ik", "zie", "een", "hond"]], exp: "ترتیب ساده‌ی جمله: فاعل + فعل + مفعول: [[Ik zie een hond.]]" },
      { type: "fill", q: "___ kinderen spelen in de tuin.", answers: ["De", "de"], exp: "اسم جمع [[kinderen]] همیشه با [[de]] می‌آید." },
      { type: "mc", q: "کدام جمله نادرست است؟", options: ["Het huisje is klein.", "De tafel is bruin.", "Een boeken zijn duur."], answer: 2, exp: "[[een]] هرگز با اسم جمع نمی‌آید؛ جمله‌ی درست [[Boeken zijn duur.]] است." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «بچه‌ها بیرون بازی می‌کنند.»", tokens: ["De", "kinderen", "spelen", "buiten"], answers: [["De", "kinderen", "spelen", "buiten"]], exp: "چون [[kinderen]] جمع است، حرف تعریف آن [[de]] است." }
    ]
  },
  {
    id: "a1-meervoud-verkleinwoord",
    level: "A1",
    title: "جمع و کوچک‌شده‌ها",
    nl: "meervoud & verkleinwoord",
    sum: "در هلندی جمع معمولاً با [[-en]] یا [[-s]] ساخته می‌شود (گاهی با تغییر املای مصوت یا صامت)، و کوچک‌شده‌ها با پسوندهای [[-je]]، [[-tje]]، [[-pje]] و [[-etje]] ساخته می‌شوند.",
    blocks: [
      {
        h: "جمع با پسوند [[-en]]",
        p: "رایج‌ترین پسوند جمع در هلندی [[-en]] است. گاهی برای حفظ تلفظ درست، املای مصوت یا صامت آخر ستاک تغییر می‌کند.",
        list: [
          "[[fiets]] → [[fietsen]] (دوچرخه)",
          "[[boot]] → [[boten]] (قایق - مصوت دوبل [[oo]] در هجای باز به [[o]] تک تبدیل می‌شود)",
          "[[kat]] → [[katten]] (گربه - صامت آخر دو برابر می‌شود تا مصوت کوتاه بماند)"
        ],
        ex: [
          { nl: "Ik heb twee fietsen.", fa: "من دو دوچرخه دارم." },
          { nl: "De katten slapen.", fa: "گربه‌ها خوابیده‌اند." }
        ],
        tip: "این تغییرات املایی فقط برای حفظ تلفظ صحیح مصوت است؛ خود کلمه و معنایش تغییر نمی‌کند."
      },
      {
        h: "جمع با پسوند [[-s]]",
        p: "اسم‌هایی که با هجای بی‌تکیه [[-el, -em, -en, -er]] تمام می‌شوند و همچنین بسیاری از کلمات وام‌گرفته که به مصوت ختم می‌شوند، با [[-s]] جمع بسته می‌شوند.",
        list: [
          "[[tafel]] → [[tafels]] (میز)",
          "[[deken]] → [[dekens]] (پتو)",
          "[[auto]] → [[auto's]] (ماشین)",
          "[[foto]] → [[foto's]] (عکس)"
        ],
        ex: [
          { nl: "Ik heb drie auto's.", fa: "من سه ماشین دارم." }
        ],
        tip: "وقتی اسم به مصوت [[a, o, u, y]] ختم می‌شود، قبل از [[s]] آپاستروف می‌آید تا تلفظ درست حفظ شود: [[auto's]]، نه [[autos]]."
      },
      {
        h: "جمع‌های بی‌قاعده",
        p: "تعدادی از اسم‌های پرکاربرد جمع بی‌قاعده دارند که باید جداگانه حفظ شوند.",
        list: [
          "[[stad]] → [[steden]] (شهر)",
          "[[kind]] → [[kinderen]] (بچه)",
          "[[ei]] → [[eieren]] (تخم‌مرغ)",
          "[[schip]] → [[schepen]] (کشتی)"
        ],
        tip: "این‌ها را باید فقط حفظ کنید؛ قاعده‌ی ثابتی برایشان وجود ندارد."
      },
      {
        h: "کوچک‌شده‌ها (verkleinwoorden)",
        p: "کوچک‌شده با افزودن یکی از پسوندهای [[-je]]، [[-pje]]، [[-tje]] یا [[-etje]] به اسم ساخته می‌شود و معنای **کوچک** یا **دوست‌داشتنی** به آن می‌دهد.",
        list: [
          "پایان با حروف معمولی → [[+je]]: [[huis]] → [[huisje]]، [[kop]] → [[kopje]]",
          "پایان با [[m]] → [[+pje]]: [[boom]] → [[boompje]]، [[raam]] → [[raampje]]",
          "پایان با [[l, n, r]] بعد از مصوت بلند → [[+tje]]: [[stoel]] → [[stoeltje]]، [[deur]] → [[deurtje]]",
          "پایان با [[l, n, r]] بعد از مصوت کوتاه → [[+etje]] با دوبرابرشدن صامت: [[man]] → [[mannetje]]، [[bel]] → [[belletje]]"
        ],
        ex: [
          { nl: "Kijk, een klein huisje!", fa: "نگاه کن، یک خانه‌ی کوچک!" },
          { nl: "Wil je een kopje koffie?", fa: "یک فنجان قهوه می‌خوای؟" }
        ],
        tip: "کوچک‌شده‌ها همیشه [[het]] می‌گیرند، حتی اگر اسم اصلی [[de]] باشد: [[de tafel]] → [[het tafeltje]]."
      },
      {
        h: "معنای کوچک‌شده‌ها فقط «کوچک» نیست",
        p: "گاهی کوچک‌شده بار معنایی محبت‌آمیز یا غیررسمی دارد، و گاهی حتی خودش به کلمه‌ی مستقل و رایجی تبدیل شده است، مثل [[kopje]] (فنجان) که دیگر لزوماً به چیز کوچک اشاره نمی‌کند.",
        ex: [
          { nl: "Lekker weertje, hè?", fa: "هوای خوبیه، نه؟" }
        ]
      }
    ],
    ex: [
      { type: "fill", q: "جمع [[boek]] کدام است؟ ___", answers: ["boeken"], exp: "اسم‌های زیادی با [[-en]] جمع بسته می‌شوند: [[boek]] → [[boeken]]." },
      { type: "fill", q: "جمع [[auto]] کدام است؟ ___", answers: ["auto's"], exp: "اسم‌هایی که به مصوت ختم می‌شوند با آپاستروف و [[s]] جمع بسته می‌شوند: [[auto's]]." },
      { type: "mc", q: "کدام جمع درست است برای [[kat]]؟", options: ["katten", "kats", "katen"], answer: 0, exp: "صامت آخر دو برابر می‌شود تا مصوت کوتاه [[a]] حفظ شود: [[katten]]." },
      { type: "mc", q: "جمع [[kind]] کدام است؟", options: ["kinden", "kinderen", "kinds"], answer: 1, exp: "[[kind]] جمع بی‌قاعده دارد: [[kinderen]]." },
      { type: "fill", q: "یک خانه‌ی کوچک می‌شود یک ___. (huis)", answers: ["huisje"], exp: "پایان کلمه با حروف معمولی، پس فقط [[+je]] اضافه می‌شود: [[huisje]]." },
      { type: "mc", q: "کوچک‌شده‌ی [[boom]] (درخت) کدام است؟", options: ["boomje", "boompje", "boomtje"], answer: 1, exp: "بعد از [[m]] پسوند [[+pje]] می‌آید: [[boompje]]." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «من دو دوچرخه دارم.»", tokens: ["Ik", "heb", "twee", "fietsen"], answers: [["Ik", "heb", "twee", "fietsen"]], exp: "ترتیب ساده‌ی جمله: فاعل + فعل + مفعول." },
      { type: "fill", q: "Wil je een ___ koffie?", answers: ["kopje"], exp: "[[kopje]] کوچک‌شده‌ی [[kop]] است و در این جمله به معنای «فنجان» به کار رفته." },
      { type: "mc", q: "کوچک‌شده‌ها معمولاً چه حرف تعریفی می‌گیرند؟", options: ["de", "het", "een فقط"], answer: 1, exp: "همه‌ی کوچک‌شده‌ها، بدون استثنا، [[het]] می‌گیرند." }
    ]
  },
  {
    id: "a1-voornaamwoorden",
    level: "A1",
    title: "ضمایر فاعلی و ملکی",
    nl: "persoonlijke & bezittelijke voornaamwoorden",
    sum: "ضمایر فاعلی ([[ik, jij, u, hij, zij, wij, jullie, zij]]) جانشین اسم فاعل می‌شوند و ضمایر ملکی ([[mijn, jouw, zijn, haar, ons/onze, jullie, hun]]) مالکیت را نشان می‌دهند.",
    blocks: [
      {
        h: "ضمایر فاعلی",
        p: "هر ضمیر فاعلی هلندی معادل یک ضمیر فارسی است، با این تفاوت که هلندی بین **تو (دوستانه)** و **شما (محترمانه)** فرق می‌گذارد.",
        table: { head: ["ضمیر", "معنی"], rows: [["ik", "من"], ["jij / je", "تو"], ["u", "شما (محترمانه)"], ["hij", "او (مرد)"], ["zij / ze", "او (زن)"], ["wij / we", "ما"], ["jullie", "شما (جمع)"], ["zij / ze", "آن‌ها"]] },
        ex: [
          { nl: "Ik woon in Amsterdam.", fa: "من در آمستردام زندگی می‌کنم." },
          { nl: "Jullie zijn aardig.", fa: "شما مهربان هستید." }
        ],
        tip: "[[u]] همیشه برای ادای احترام به کار می‌رود، فرقی ندارد با یک نفر صحبت کنید یا چند نفر."
      },
      {
        h: "فرم کامل و فرم کوتاه: [[je, we, ze]]",
        p: "[[jij, wij, zij]] فرم‌های کامل و تکیه‌دار هستند و [[je, we, ze]] فرم‌های کوتاه و بی‌تکیه که در گفتار روزمره رایج‌ترند.",
        ex: [
          { nl: "Je bent laat!", fa: "تو دیر کردی!" },
          { nl: "We gaan naar huis.", fa: "ما به خانه می‌رویم." }
        ],
        tip: "فرم کامل [[jij/wij/zij]] زمانی به کار می‌رود که بخواهیم روی آن ضمیر تاکید کنیم، مثلاً در پاسخ به سؤال."
      },
      {
        h: "ضمایر ملکی",
        p: "ضمایر ملکی هلندی برخلاف فارسی **قبل از اسم** می‌آیند و معادل پسوندهای ملکی مثل -َم، -َت و -َش هستند.",
        table: { head: ["ضمیر ملکی", "معنی"], rows: [["mijn", "-َم (از آنِ من)"], ["jouw / je", "-َت (دوستانه)"], ["uw", "-َتان (محترمانه)"], ["zijn", "-َش (مرد)"], ["haar", "-َش (زن)"], ["ons / onze", "-َمان"], ["jullie", "-َتان (جمع)"], ["hun", "-َشان"]] },
        ex: [
          { nl: "Dit is mijn huis.", fa: "این خانه‌ی من است." },
          { nl: "Waar is jouw tas?", fa: "کیف تو کجاست؟" }
        ]
      },
      {
        h: "[[ons]] یا [[onze]]؟",
        p: "تنها ضمیر ملکی که شکلش تغییر می‌کند [[ons/onze]] است: قبل از اسم مفرد [[het]] از [[ons]] و قبل از اسم مفرد [[de]] یا هر اسم جمع از [[onze]] استفاده می‌شود.",
        list: [
          "[[ons huis]] (خانه‌ی ما - het-woord مفرد)",
          "[[onze auto]] (ماشین ما - de-woord مفرد)",
          "[[onze kinderen]] (بچه‌های ما - جمع)"
        ],
        ex: [
          { nl: "Ons huis is groot.", fa: "خانه‌ی ما بزرگ است." },
          { nl: "Onze auto is nieuw.", fa: "ماشین ما جدید است." }
        ],
        tip: "این تغییر فقط برای [[ons/onze]] است؛ بقیه‌ی ضمایر ملکی هیچ‌وقت تغییر نمی‌کنند."
      },
      {
        h: "مالکیت با [[van]]",
        p: "برای نشان دادن مالکیت یک اسم خاص (نام شخص)، معمولاً به‌جای حالت ملکی انگلیسی‌مانند از ساختار [[van]] استفاده می‌شود: [[het boek van Jan]] یعنی «کتاب یان»، نه با آپاستروف-اس.",
        ex: [
          { nl: "Dat is de tas van Lisa.", fa: "آن کیف لیزا است." }
        ],
        tip: "فقط در زبان محاوره‌ای گاهی [[-s]] بدون آپاستروف به نام می‌چسبد ([[Lisa's tas]])، اما ساختار [[van]] رایج‌تر و رسمی‌تر است."
      }
    ],
    ex: [
      { type: "fill", q: "___ ben moe. (من)", answers: ["Ik", "ik"], exp: "ضمیر فاعلی برای «من» در هلندی [[ik]] است." },
      { type: "mc", q: "کدام ضمیر برای خطاب محترمانه به کار می‌رود؟", options: ["jij", "u", "jullie"], answer: 1, exp: "[[u]] فرم محترمانه‌ی «تو/شما» است، برای مفرد و جمع." },
      { type: "fill", q: "Dit is ___ huis. (مال من)", answers: ["mijn"], exp: "ضمیر ملکی برای «من» [[mijn]] است." },
      { type: "mc", q: "کدام گزینه درست است؟ (auto یک de-woord است)", options: ["ons auto", "onze auto", "on auto"], answer: 1, exp: "چون [[auto]] یک de-woord است، ضمیر ملکی [[onze]] به کار می‌رود." },
      { type: "fill", q: "___ huis is groot. (مال ما - huis یک het-woord است)", answers: ["Ons", "ons"], exp: "چون [[huis]] یک het-woord مفرد است، از [[ons]] استفاده می‌شود." },
      { type: "mc", q: "ضمیر ملکی برای [[hij]] کدام است؟", options: ["haar", "zijn", "hun"], answer: 1, exp: "ضمیر ملکی مربوط به [[hij]] (او، مرد) برابر [[zijn]] است." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «شما مهربان هستید.»", tokens: ["Jullie", "zijn", "aardig"], answers: [["Jullie", "zijn", "aardig"]], exp: "ترتیب جمله‌ی ساده: فاعل + فعل + صفت." },
      { type: "fill", q: "Waar is ___ tas? (کیف تو)", answers: ["jouw", "je"], exp: "ضمیر ملکی برای «تو» [[jouw]] است که در گفتار معمولاً به‌شکل کوتاه [[je]] هم به کار می‌رود." },
      { type: "mc", q: "کدام جمله درست است؟", options: ["Onze kinderen spelen buiten.", "Ons kinderen spelen buiten.", "Ons kind spelen buiten."], answer: 0, exp: "چون [[kinderen]] جمع است، باید [[onze]] به کار رود، نه [[ons]]." }
    ]
  },
  {
    id: "a1-zijn-hebben-tegenwoordige-tijd",
    level: "A1",
    title: "فعل‌های zijn و hebben و زمان حال ساده",
    nl: "zijn, hebben & tegenwoordige tijd",
    sum: "فعل‌های [[zijn]] (بودن) و [[hebben]] (داشتن) بی‌قاعده صرف می‌شوند و بقیه‌ی فعل‌های باقاعده در زمان حال با افزودن [[-t]] یا بدون آن به ستاک (stam) صرف می‌شوند.",
    blocks: [
      {
        h: "صرف فعل [[zijn]] (بودن)",
        p: "فعل [[zijn]] کاملاً بی‌قاعده است و باید صرف آن را از حفظ باشید.",
        table: { head: ["ضمیر", "فعل"], rows: [["ik", "ben"], ["jij / je", "bent"], ["u", "bent"], ["hij / zij", "is"], ["wij / we", "zijn"], ["jullie", "zijn"], ["zij / ze (جمع)", "zijn"]] },
        ex: [
          { nl: "Ik ben Nederlander.", fa: "من هلندی هستم." },
          { nl: "Zij is mijn zus.", fa: "او (زن) خواهر من است." }
        ]
      },
      {
        h: "صرف فعل [[hebben]] (داشتن)",
        p: "فعل [[hebben]] هم بی‌قاعده است، اما الگوی آن را با مثال‌های بیشتر راحت‌تر می‌توان به‌خاطر سپرد.",
        table: { head: ["ضمیر", "فعل"], rows: [["ik", "heb"], ["jij / je", "hebt"], ["u", "hebt / heeft"], ["hij / zij", "heeft"], ["wij / we", "hebben"], ["jullie", "hebben"], ["zij / ze (جمع)", "hebben"]] },
        ex: [
          { nl: "Ik heb een hond.", fa: "من یک سگ دارم." },
          { nl: "Hij heeft twee broers.", fa: "او دو برادر دارد." }
        ],
        tip: "در سؤال، وقتی فاعل [[jij/je]] بعد از فعل بیاید، [[t]] آخر فعل حذف می‌شود: [[Heb je een hond?]] نه [[Hebt je...]]"
      },
      {
        h: "ستاک فعل (stam) و قاعده‌ی صرف افعال باقاعده",
        p: "ستاک فعل با حذف [[-en]] از مصدر به‌دست می‌آید. در زمان حال: برای [[ik]] فقط ستاک، برای [[jij/u/hij/zij]] ستاک + [[-t]]، و برای جمع (wij, jullie, zij) خود مصدر کامل استفاده می‌شود.",
        table: { head: ["ضمیر", "فعل werken (کار کردن)"], rows: [["ik", "werk"], ["jij / je", "werkt"], ["u", "werkt"], ["hij / zij", "werkt"], ["wij / we", "werken"], ["jullie", "werken"], ["zij / ze", "werken"]] },
        ex: [
          { nl: "Ik werk in een winkel.", fa: "من در یک مغازه کار می‌کنم." },
          { nl: "Zij werkt ook daar.", fa: "او هم آنجا کار می‌کند." }
        ]
      },
      {
        h: "قاعده‌ی 't kofschip",
        p: "اگر حرف آخر ستاک جزو حروف **'t kofschip** (یعنی [[t, k, f, s, ch, p]]) باشد، باز هم در فرم [[jij/u/hij/zij]] فقط [[-t]] اضافه می‌شود؛ اما اگر ستاک خودش به [[t]] ختم شود، دیگر [[t]] دومی اضافه نمی‌شود.",
        list: [
          "[[fietsen]] → ستاک [[fiets]] (خودش به [[-s]] ختم است) → [[hij fietst]]",
          "[[praten]] → ستاک [[praat]] (به [[t]] ختم است) → [[hij praat]] (نه praatt)"
        ],
        tip: "هرگز دو [[t]] پشت‌هم در آخر فعل نمی‌آید."
      },
      {
        h: "تغییر هجای باز در ستاک",
        p: "وقتی مصدر دارای مصوت دوبل است و با حذف [[-en]] آن مصوت در هجای باز قرار می‌گیرد، مصوت دوبل به مصوت تک تبدیل می‌شود؛ و برعکس، گاهی صامت دوبل می‌شود تا مصوت کوتاه بماند.",
        list: [
          "[[lopen]] → ستاک [[loop]] (مصوت تک به دوبل تبدیل می‌شود تا صدای بلند حفظ شود)",
          "[[zitten]] → ستاک [[zit]] (یکی از دو [[t]] حذف می‌شود)"
        ],
        ex: [
          { nl: "Ik loop naar school.", fa: "من پیاده به مدرسه می‌روم." },
          { nl: "Jij zit op een stoel.", fa: "تو روی یک صندلی نشسته‌ای." }
        ]
      }
    ],
    ex: [
      { type: "fill", q: "Ik ___ moe. (zijn)", answers: ["ben"], exp: "صرف [[zijn]] برای [[ik]] برابر [[ben]] است." },
      { type: "fill", q: "Jij ___ een broer. (hebben)", answers: ["hebt"], exp: "صرف [[hebben]] برای [[jij]] برابر [[hebt]] است." },
      { type: "mc", q: "صرف درست [[hij]] برای [[hebben]] کدام است؟", options: ["heb", "hebt", "heeft"], answer: 2, exp: "فعل [[hebben]] برای [[hij/zij]] به‌صورت [[heeft]] صرف می‌شود." },
      { type: "fill", q: "Wij ___ in Iran. (zijn)", answers: ["zijn"], exp: "صرف [[zijn]] برای ضمایر جمع ([[wij, jullie, zij]]) همان [[zijn]] است." },
      { type: "fill", q: "Ik ___ in een winkel. (werken)", answers: ["werk"], exp: "برای [[ik]] فقط ستاک فعل به کار می‌رود، بدون هیچ پسوندی: [[werk]]." },
      { type: "mc", q: "صرف درست [[jij]] برای [[werken]] کدام است؟", options: ["werk", "werkt", "werken"], answer: 1, exp: "برای [[jij/u/hij/zij]] به ستاک [[-t]] اضافه می‌شود: [[werkt]]." },
      { type: "mc", q: "فرم درست [[hij]] برای [[praten]] کدام است؟", options: ["hij praat", "hij pratt", "hij praatt"], answer: 0, exp: "ستاک [[praten]] خودش [[praat]] است (به [[t]] ختم می‌شود)، پس [[t]] دیگری اضافه نمی‌شود." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «او (زن) در یک مغازه کار می‌کند.»", tokens: ["Zij", "werkt", "in", "een", "winkel"], answers: [["Zij", "werkt", "in", "een", "winkel"]], exp: "ترتیب ساده‌ی جمله: فاعل + فعل + قید مکان." },
      { type: "fill", q: "Hij ___ naar school. (lopen)", answers: ["loopt"], exp: "ستاک [[lopen]] به‌صورت [[loop]] است (مصوت دوبل برای حفظ صدای بلند)، و برای [[hij]] با [[-t]]: [[loopt]]." }
    ]
  },
  {
    id: "a1-woordvolgorde-vragen",
    level: "A1",
    title: "ترتیب کلمات و جمله‌های پرسشی",
    nl: "woordvolgorde & vragen",
    sum: "در جمله‌های ساده‌ی هلندی فعل همیشه در جای دوم می‌آید (مگر در سؤال)، و سؤال‌های بلی/خیر و سؤال‌های پرسشی با جابه‌جایی فعل یا افزودن کلمه‌ی پرسشی ساخته می‌شوند.",
    blocks: [
      {
        h: "قاعده‌ی فعل در جای دوم",
        p: "در جمله‌ی خبری هلندی، فعل صرف‌شده همیشه **دومین جزء** جمله است، نه لزوماً دومین کلمه. فاعل می‌تواند قبل یا بعد از فعل بیاید.",
        ex: [
          { nl: "Ik eet een appel.", fa: "من یک سیب می‌خورم." },
          { nl: "Vandaag eet ik een appel.", fa: "امروز من یک سیب می‌خورم." }
        ],
        tip: "در مثال دوم چون [[Vandaag]] جزء اول شده، فاعل [[ik]] بعد از فعل می‌آید تا فعل همچنان دوم بماند."
      },
      {
        h: "ساختار فاعل-فعل-مفعول",
        p: "ساختار پایه‌ی جمله‌ی ساده، مثل انگلیسی، فاعل-فعل-مفعول است.",
        ex: [
          { nl: "Ik koop een boek.", fa: "من یک کتاب می‌خرم." },
          { nl: "Zij leest een krant.", fa: "او روزنامه می‌خواند." }
        ]
      },
      {
        h: "سؤال بلی/خیر",
        p: "برای ساختن سؤالی که با بله یا خیر پاسخ داده می‌شود، فعل صرف‌شده به **ابتدای جمله** منتقل می‌شود و فاعل بعد از آن می‌آید.",
        ex: [
          { nl: "Ben je moe?", fa: "خسته‌ای؟" },
          { nl: "Heb je een hond?", fa: "سگ داری؟" },
          { nl: "Werkt zij hier?", fa: "او اینجا کار می‌کند؟" }
        ],
        tip: "وقتی فاعل [[jij/je]] بعد از فعل می‌آید، [[-t]] آخر فعل حذف می‌شود: [[Werk je hier?]] نه [[Werkt je hier?]]"
      },
      {
        h: "سؤال‌های پرسشی (wh-vragen)",
        p: "سؤال‌های پرسشی با یک **کلمه‌ی پرسشی** شروع می‌شوند و بلافاصله بعد از آن فعل می‌آید (همان قاعده‌ی فعل در جای دوم).",
        table: { head: ["کلمه‌ی پرسشی", "معنی"], rows: [["wat", "چی"], ["wie", "کی (چه کسی)"], ["waar", "کجا"], ["wanneer", "کِی"], ["waarom", "چرا"], ["hoe", "چطور"], ["welke", "کدام"]] },
        ex: [
          { nl: "Waar woon je?", fa: "کجا زندگی می‌کنی؟" },
          { nl: "Wat doe je?", fa: "چی کار می‌کنی؟" },
          { nl: "Waarom ben je laat?", fa: "چرا دیر کردی؟" }
        ]
      },
      {
        h: "ترتیب در جمله‌های با قید زمان یا مکان",
        p: "وقتی جمله با قید زمان یا مکان شروع شود، باز هم فعل باید دومین جزء باشد، پس فاعل بعد از فعل می‌آید. این قاعده را **inversie** می‌نامند.",
        ex: [
          { nl: "Morgen ga ik naar Amsterdam.", fa: "فردا من به آمستردام می‌روم." }
        ],
        tip: "هر وقت جمله با چیزی غیر از فاعل شروع شود (قید زمان، قید مکان، و...)، فعل و فاعل جا عوض می‌کنند."
      }
    ],
    ex: [
      { type: "order", q: "جمله را به ترتیب درست بسازید: «من یک سیب می‌خورم.»", tokens: ["Ik", "eet", "een", "appel"], answers: [["Ik", "eet", "een", "appel"]], exp: "ترتیب ساده: فاعل + فعل + مفعول." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «فردا من به مدرسه می‌روم.» (جمله باید با Morgen شروع شود)", tokens: ["Morgen", "ga", "ik", "naar", "school"], answers: [["Morgen", "ga", "ik", "naar", "school"]], exp: "چون جمله با قید زمان [[Morgen]] شروع شده، فعل [[ga]] در جای دوم می‌آید و فاعل [[ik]] بعد از آن." },
      { type: "mc", q: "کدام سؤال بلی/خیر درست است؟", options: ["Je bent moe?", "Ben je moe?", "Jij ben moe?"], answer: 1, exp: "در سؤال بلی/خیر، فعل صرف‌شده به ابتدای جمله می‌رود: [[Ben je moe?]]" },
      { type: "fill", q: "___ woon je? (کجا)", answers: ["Waar", "waar"], exp: "کلمه‌ی پرسشی برای «کجا» [[waar]] است." },
      { type: "fill", q: "___ doe je? (چی)", answers: ["Wat", "wat"], exp: "کلمه‌ی پرسشی برای «چی» [[wat]] است." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «او (زن) اینجا کار می‌کند؟»", tokens: ["Werkt", "zij", "hier"], answers: [["Werkt", "zij", "hier"]], exp: "در سؤال بلی/خیر فعل اول می‌آید: [[Werkt zij hier?]]" },
      { type: "mc", q: "در جمله‌ی [[Vandaag eet ik een appel]]، فاعل کجا قرار گرفته؟", options: ["قبل از فعل", "بعد از فعل", "در آخر جمله"], answer: 1, exp: "چون [[Vandaag]] اول جمله آمده، فاعل [[ik]] بعد از فعل [[eet]] قرار می‌گیرد تا فعل همچنان دوم باشد." },
      { type: "fill", q: "___ ben je laat? (چرا)", answers: ["Waarom", "waarom"], exp: "کلمه‌ی پرسشی برای «چرا» [[waarom]] است." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «سگ داری؟»", tokens: ["Heb", "je", "een", "hond"], answers: [["Heb", "je", "een", "hond"]], exp: "در سؤال بلی/خیر فعل به ابتدای جمله می‌رود و [[t]] فعل جلوی [[je]] حذف می‌شود: [[Heb je...]]" }
    ]
  },
  {
    id: "a1-ontkenning",
    level: "A1",
    title: "نفی با niet و geen",
    nl: "niet & geen",
    sum: "برای منفی کردن جمله در هلندی از [[niet]] استفاده می‌شود، مگر وقتی اسم مورد نظر با [[een]] یا بدون هیچ حرف تعریفی آمده باشد که در آن صورت از [[geen]] استفاده می‌شود.",
    blocks: [
      {
        h: "قاعده‌ی کلی: کِی [[geen]]؟",
        p: "[[geen]] جایگزین [[een]] می‌شود، یعنی وقتی بخواهیم بگوییم **هیچ** چیزی از آن اسم وجود ندارد.",
        ex: [
          { nl: "Ik heb een auto.", fa: "من یک ماشین دارم." },
          { nl: "Ik heb geen auto.", fa: "من ماشین ندارم." }
        ]
      },
      {
        h: "[[geen]] با اسم‌های بدون حرف تعریف",
        p: "[[geen]] همچنین برای نفی اسم‌های جمع یا اسم‌هایی که اصلاً حرف تعریف ندارند (مثل مواد و خوراکی‌ها) به کار می‌رود.",
        ex: [
          { nl: "Ik drink koffie.", fa: "من قهوه می‌خورم." },
          { nl: "Ik drink geen koffie.", fa: "من قهوه نمی‌خورم." },
          { nl: "Zij heeft kinderen.", fa: "او بچه دارد." },
          { nl: "Zij heeft geen kinderen.", fa: "او بچه ندارد." }
        ]
      },
      {
        h: "[[niet]] برای نفی فعل یا جمله",
        p: "[[niet]] برای نفی **فعل، صفت، قید، یا اسمی که حرف تعریف معین ([[de/het]]) یا ضمیر ملکی دارد** استفاده می‌شود.",
        ex: [
          { nl: "Ik werk niet vandaag.", fa: "من امروز کار نمی‌کنم." },
          { nl: "Dit is niet mijn boek.", fa: "این کتاب من نیست." }
        ]
      },
      {
        h: "جای [[niet]] در جمله",
        p: "[[niet]] معمولاً نزدیک به انتهای جمله می‌آید، اما **قبل از** صفت، قید مکان، حرف اضافه، یا فعل دوم (در جمله‌هایی که فعل کمکی دارند) قرار می‌گیرد.",
        list: [
          "[[Ik ga niet naar school.]] (پیش از قید مکان)",
          "[[Hij is niet aardig.]] (پیش از صفت)",
          "[[Zij kan niet komen.]] (پیش از فعل دوم)"
        ],
        tip: "یک راه ساده: اگر بتوانید جمله را به‌صورت «درست نیست که...» در ذهن بازسازی کنید، معمولاً [[niet]] درست است، نه [[geen]]."
      },
      {
        h: "مقایسه‌ی مستقیم [[niet]] و [[geen]]",
        table: { head: ["جمله‌ی مثبت", "جمله‌ی منفی"], rows: [["Ik heb een hond.", "Ik heb geen hond."], ["Ik zie de hond.", "Ik zie de hond niet."], ["Dit is mijn tas.", "Dit is niet mijn tas."]] },
        ex: [
          { nl: "Ik eet geen vlees.", fa: "من گوشت نمی‌خورم." },
          { nl: "Ik eet het vlees niet.", fa: "من آن گوشت را نمی‌خورم." }
        ]
      }
    ],
    ex: [
      { type: "mc", q: "Ik heb ___ broer. (برادر ندارم)", options: ["niet", "geen", "geen een"], answer: 1, exp: "چون [[broer]] اسم نامعین بدون حرف تعریف است، [[geen]] به کار می‌رود." },
      { type: "fill", q: "Dit is ___ mijn jas.", answers: ["niet"], exp: "چون اسم همراه ضمیر ملکی [[mijn]] آمده، باید از [[niet]] استفاده شود." },
      { type: "mc", q: "Zij drinkt ___ koffie.", options: ["niet", "geen", "geen de"], answer: 1, exp: "[[koffie]] بدون حرف تعریف است، پس [[geen]] درست است." },
      { type: "fill", q: "Ik zie de kat ___.", answers: ["niet"], exp: "چون [[kat]] با حرف تعریف معین [[de]] آمده، باید از [[niet]] استفاده شود." },
      { type: "mc", q: "چرا در [[Ik zie de hond niet]] از [[niet]] استفاده شده نه [[geen]]؟", options: ["چون hond اسم جمع است", "چون hond حرف تعریف معین de دارد", "چون hond فعل است"], answer: 1, exp: "وقتی اسم حرف تعریف معین [[de/het]] دارد، برای نفی از [[niet]] استفاده می‌شود." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «من امروز کار نمی‌کنم.»", tokens: ["Ik", "werk", "niet", "vandaag"], answers: [["Ik", "werk", "niet", "vandaag"]], exp: "[[niet]] قبل از قید زمان [[vandaag]] می‌آید." },
      { type: "fill", q: "Hij is ___ aardig.", answers: ["niet"], exp: "برای نفی صفت ([[aardig]]) از [[niet]] استفاده می‌شود." },
      { type: "mc", q: "کدام جمله درست است؟", options: ["Ik heb geen tijd.", "Ik heb niet tijd.", "Ik heb niet een tijd."], answer: 0, exp: "[[tijd]] اسم بدون حرف تعریف است، پس باید از [[geen]] استفاده کرد." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «او (زن) بچه ندارد.»", tokens: ["Zij", "heeft", "geen", "kinderen"], answers: [["Zij", "heeft", "geen", "kinderen"]], exp: "چون [[kinderen]] بدون حرف تعریف است، از [[geen]] استفاده می‌شود." }
    ]
  },
  {
    id: "a1-voorzetsels",
    level: "A1",
    title: "حروف اضافه‌ی مکان و زمان",
    nl: "voorzetsels (plaats & tijd)",
    sum: "حروف اضافه‌ای مانند [[in, op, onder, naast, tussen, bij, achter]] مکان را نشان می‌دهند و [[om, in, op, over, voor]] زمان را بیان می‌کنند؛ بسیاری از این کلمات بسته به زمینه معنای متفاوتی دارند.",
    blocks: [
      {
        h: "حروف اضافه‌ی مکان پرکاربرد",
        table: { head: ["حرف اضافه", "معنی"], rows: [["in", "در، داخل"], ["op", "روی، بر"], ["onder", "زیر"], ["naast", "کنار، بغل"], ["tussen", "بین، میان"], ["bij", "نزدیک، پیش"], ["achter", "پشت"], ["voor", "جلوی"]] },
        ex: [
          { nl: "De kat ligt onder de tafel.", fa: "گربه زیر میز است." },
          { nl: "Het boek ligt op de tafel.", fa: "کتاب روی میز است." }
        ]
      },
      {
        h: "تفاوت [[in]] و [[op]]",
        p: "[[in]] برای چیزی که **داخل** یک فضا یا ظرف است و [[op]] برای چیزی که **روی سطح** چیزی قرار دارد استفاده می‌شود.",
        ex: [
          { nl: "De melk staat in de koelkast.", fa: "شیر داخل یخچال است." },
          { nl: "De kopjes staan op de tafel.", fa: "فنجان‌ها روی میز هستند." }
        ],
        tip: "[[op]] همچنین برای خیابان، میدان و جزیره هم به کار می‌رود: [[op straat]] (در خیابان)، [[op het eiland]] (در جزیره)."
      },
      {
        h: "[[bij]] و [[naast]]",
        p: "[[bij]] یعنی نزدیکِ چیزی یا پیشِ کسی، و [[naast]] یعنی دقیقاً کنار و بغل‌دستِ چیزی.",
        ex: [
          { nl: "Ik sta bij het raam.", fa: "من کنار (نزدیکِ) پنجره ایستاده‌ام." },
          { nl: "De stoel staat naast de tafel.", fa: "صندلی کنار میز است." }
        ]
      },
      {
        h: "حروف اضافه‌ی زمان",
        table: { head: ["حرف اضافه", "مثال"], rows: [["om", "om acht uur (ساعت هشت)"], ["in", "in januari (در ژانویه)"], ["op", "op maandag (دوشنبه‌ها)"], ["over", "over een week (یک هفته‌ی دیگر)"], ["voor", "voor het eten (قبل از غذا)"]] },
        ex: [
          { nl: "De les begint om negen uur.", fa: "درس ساعت نه شروع می‌شود." },
          { nl: "Ik ga op maandag naar school.", fa: "من دوشنبه‌ها به مدرسه می‌روم." }
        ]
      },
      {
        h: "نکات ویژه با روزها و زمان روز",
        p: "برای روزهای هفته از [[op]] استفاده می‌شود (مثلاً [[op zaterdag]])، اما برای بخش‌های روز مانند صبح و شب از ساختار [['s]] استفاده می‌شود، مثل [['s avonds]] (شب‌ها) و [['s ochtends]] (صبح‌ها).",
        list: [
          "[['s morgens]] / [['s ochtends]] (صبح‌ها)",
          "[['s middags]] (ظهرها)",
          "[['s avonds]] (عصرها/شب‌ها)",
          "[['s nachts]] (شب‌های دیروقت)"
        ],
        ex: [
          { nl: "'s Avonds kijk ik tv.", fa: "شب‌ها تلویزیون تماشا می‌کنم." }
        ],
        tip: "[['s]] همیشه با حرف کوچک نوشته می‌شود، حتی اگر ابتدای جمله باشد؛ در آن حالت حرف بعدی بزرگ می‌شود: [['s Avonds]]."
      }
    ],
    ex: [
      { type: "fill", q: "De kat ligt ___ de tafel. (زیر)", answers: ["onder"], exp: "[[onder]] یعنی زیر چیزی." },
      { type: "fill", q: "Het boek ligt ___ de tafel. (روی)", answers: ["op"], exp: "[[op]] برای چیزی که روی سطح قرار دارد به کار می‌رود." },
      { type: "mc", q: "کدام حرف اضافه برای داخلِ یخچال درست است؟", options: ["op", "in", "achter"], answer: 1, exp: "چون شیر داخل فضای یخچال است، از [[in]] استفاده می‌شود: [[in de koelkast]]." },
      { type: "fill", q: "De les begint ___ acht uur. (ساعت)", answers: ["om"], exp: "برای بیان ساعت دقیق از [[om]] استفاده می‌شود." },
      { type: "fill", q: "Ik ga ___ maandag naar school.", answers: ["op"], exp: "برای روزهای هفته از [[op]] استفاده می‌شود." },
      { type: "mc", q: "کدام گزینه برای «شب‌ها» درست است؟", options: ["'s ochtends", "'s avonds", "'s middags"], answer: 1, exp: "[['s avonds]] به معنای «شب‌ها/عصرها» است." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «صندلی کنار میز است.»", tokens: ["De", "stoel", "staat", "naast", "de", "tafel"], answers: [["De", "stoel", "staat", "naast", "de", "tafel"]], exp: "ترتیب ساده: فاعل + فعل + حرف اضافه + مفعول." },
      { type: "fill", q: "___ januari is het koud. (در ماه ژانویه)", answers: ["In", "in"], exp: "برای نام ماه‌ها از [[in]] استفاده می‌شود." },
      { type: "mc", q: "کدام جمله برای «یک هفته‌ی دیگر» درست است؟", options: ["over een week", "voor een week", "om een week"], answer: 0, exp: "[[over]] برای بیان گذشتن مدتی در آینده به کار می‌رود: [[over een week]]." }
    ]
  },
  {
    id: "a1-modale-werkwoorden",
    level: "A1",
    title: "فعل‌های وجهی",
    nl: "kunnen, mogen, moeten, willen, hoeven",
    sum: "فعل‌های وجهی مثل [[kunnen]] (توانستن)، [[mogen]] (اجازه داشتن)، [[moeten]] (مجبور بودن)، [[willen]] (خواستن) و [[hoeven]] (نیازی نداشتن) همراه با یک فعل دیگر به‌صورت مصدر در انتهای جمله به کار می‌روند.",
    blocks: [
      {
        h: "صرف فعل‌های وجهی",
        p: "فعل‌های وجهی در مفرد (ik, jij/u, hij/zij) کوتاه و تا حدی بی‌قاعده صرف می‌شوند، و در جمع (wij, jullie, zij) به شکل مصدر کامل باقی می‌مانند.",
        table: {
          head: ["ضمیر", "kunnen", "mogen", "moeten", "willen"],
          rows: [
            ["ik", "kan", "mag", "moet", "wil"],
            ["jij / je", "kan / kunt", "mag", "moet", "wil / wilt"],
            ["u", "kunt / kan", "mag", "moet", "wilt"],
            ["hij / zij", "kan", "mag", "moet", "wil"],
            ["wij / we", "kunnen", "mogen", "moeten", "willen"],
            ["jullie", "kunnen", "mogen", "moeten", "willen"],
            ["zij / ze", "kunnen", "mogen", "moeten", "willen"]
          ]
        }
      },
      {
        h: "معنا و کاربرد هر فعل وجهی",
        list: [
          "[[kunnen]]: توانستن / امکان داشتن",
          "[[mogen]]: اجازه داشتن",
          "[[moeten]]: مجبور بودن، باید",
          "[[willen]]: خواستن، میل داشتن",
          "[[hoeven]]: نیازی نبودن (معمولاً همراه با [[niet]] به کار می‌رود)"
        ],
        ex: [
          { nl: "Ik kan goed zwemmen.", fa: "من می‌توانم خوب شنا کنم." },
          { nl: "Jij mag hier roken.", fa: "تو اجازه داری اینجا سیگار بکشی." }
        ]
      },
      {
        h: "جای فعل اصلی در انتهای جمله",
        p: "وقتی فعل وجهی در جمله باشد، فعل اصلی به‌صورت **مصدر** و در **انتهای جمله** می‌آید؛ فعل وجهی خودش در جای دوم جمله قرار می‌گیرد.",
        ex: [
          { nl: "Ik moet nu naar huis gaan.", fa: "من باید الان به خانه بروم." },
          { nl: "Wil je een kopje koffie drinken?", fa: "می‌خوای یک فنجان قهوه بخوری؟" }
        ],
        tip: "این ساختار را **werkwoord op de laatste plaats** می‌نامند: فعل وجهی دوم، فعل اصلی آخر."
      },
      {
        h: "[[hoeven niet]] در مقابل [[moeten]]",
        p: "[[hoeven]] تقریباً همیشه با [[niet]] به کار می‌رود و یعنی **لازم نیست**، که دقیقاً نقطه‌مقابل [[moeten]] (باید) است.",
        ex: [
          { nl: "Je moet dit doen.", fa: "تو باید این کار را بکنی." },
          { nl: "Je hoeft dit niet te doen.", fa: "لازم نیست این کار را بکنی." }
        ],
        tip: "با [[hoeven]] معمولاً حرف [[te]] قبل از فعل اصلی می‌آید: [[hoeven te + مصدر]]، برخلاف بقیه‌ی فعل‌های وجهی که [[te]] نمی‌خواهند."
      },
      {
        h: "نفی فعل‌های وجهی دیگر",
        p: "برای نفی [[mogen]] (اجازه نداشتن)، [[kunnen]] (نتوانستن) و [[willen]] (نخواستن) فقط [[niet]] قبل از فعل اصلی در انتهای جمله می‌آید، مثل هر فعل دیگر.",
        ex: [
          { nl: "Je mag hier niet roken.", fa: "تو اجازه نداری اینجا سیگار بکشی." },
          { nl: "Ik kan dit niet doen.", fa: "من نمی‌توانم این کار را بکنم." }
        ]
      }
    ],
    ex: [
      { type: "fill", q: "Ik ___ goed zwemmen. (kunnen)", answers: ["kan"], exp: "صرف [[kunnen]] برای [[ik]] برابر [[kan]] است." },
      { type: "fill", q: "Jij ___ hier niet roken. (mogen)", answers: ["mag"], exp: "صرف [[mogen]] برای [[jij]] برابر [[mag]] است." },
      { type: "mc", q: "صرف درست [[wij]] برای [[moeten]] کدام است؟", options: ["moet", "moeten", "moest"], answer: 1, exp: "در جمع، فعل‌های وجهی به شکل مصدر کامل می‌مانند: [[wij moeten]]." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «من باید الان به خانه بروم.»", tokens: ["Ik", "moet", "nu", "naar", "huis", "gaan"], answers: [["Ik", "moet", "nu", "naar", "huis", "gaan"]], exp: "فعل وجهی [[moet]] دوم می‌آید و فعل اصلی [[gaan]] به‌صورت مصدر در انتها." },
      { type: "fill", q: "Je ___ dit niet te doen. (hoeven)", answers: ["hoeft"], exp: "صرف [[hoeven]] برای [[je]] برابر [[hoeft]] است." },
      { type: "mc", q: "کدام فعل یعنی «نیازی نیست»؟", options: ["moeten", "hoeven niet", "mogen niet"], answer: 1, exp: "[[hoeven]] همراه با [[niet]] به معنای «نیازی نیست» است." },
      { type: "order", q: "جمله را به ترتیب درست بسازید: «می‌خوای یک فنجان قهوه بخوری؟»", tokens: ["Wil", "je", "een", "kopje", "koffie", "drinken"], answers: [["Wil", "je", "een", "kopje", "koffie", "drinken"]], exp: "در سؤال، فعل وجهی [[wil]] اول می‌آید و فعل اصلی [[drinken]] به‌صورت مصدر در انتها." },
      { type: "fill", q: "Ik ___ dit niet doen. (kunnen - نمی‌توانم)", answers: ["kan"], exp: "صرف [[kunnen]] برای [[ik]] در حالت منفی هم همان [[kan]] است، فقط [[niet]] اضافه می‌شود." },
      { type: "mc", q: "در جمله‌ی [[Ik moet nu naar huis gaan]] فعل اصلی کجا قرار دارد؟", options: ["ابتدای جمله", "بعد از فاعل", "انتهای جمله به‌صورت مصدر"], answer: 2, exp: "وقتی فعل وجهی در جمله باشد، فعل اصلی به‌صورت مصدر در انتهای جمله می‌آید." }
    ]
  }
];
