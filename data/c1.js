window.GRAMMATICA_DATA = window.GRAMMATICA_DATA || {};
window.GRAMMATICA_DATA.C1 = [
  {
    id: "c1-beknopte-bijzinnen",
    level: "C1",
    title: "بندهای وابسته کوتاه‌شده",
    nl: "Beknopte bijzinnen",
    sum: "وقتی فاعل بند وابسته و جملهٔ اصلی یکسان باشد، می‌توان بند را با یک **مصدر** یا **وجه وصفی** کوتاه کرد، مثل [[Gebouwd in de 17e eeuw, trekt het kasteel toeristen]].",
    blocks: [
      {
        h: "جایگزینی بند هدف/علّی با [[om... te + infinitief]]",
        p: "وقتی بند وابستهٔ هدف یا علّی هم‌فاعل با جملهٔ اصلی باشد، می‌توان آن را با ساخت [[om... te + infinitief]] کوتاه کرد. مثل [[Hij trainde hard om de wedstrijd te winnen]] به‌جای یک بند کامل‌تر با [[zodat]] یا [[omdat]].",
        ex: [
          { nl: "Om op tijd te komen, vertrok ze vroeg.", fa: "برای اینکه به‌موقع برسد، او زود حرکت کرد." },
          { nl: "Hij las het boek om meer te weten.", fa: "او کتاب را خواند تا بیشتر بداند." }
        ]
      },
      {
        h: "جایگزینی با وجه وصفی گذشته",
        p: "وقتی فعل بند وابسته می‌تواند مجهول شود و فاعل آن با فاعل جملهٔ اصلی یکسان باشد، می‌توان بند را با وجه وصفی گذشته در ابتدای جمله کوتاه کرد. مثل [[Omdat het boek goed geschreven was, werd het een bestseller]] → [[Goed geschreven, werd het boek een bestseller]].",
        ex: [
          { nl: "Gebouwd in de 17e eeuw, trekt het kasteel veel toeristen.", fa: "ساخته‌شده در قرن هفدهم، این قلعه گردشگران زیادی جذب می‌کند." },
          { nl: "Overtuigd door de argumenten, stemde de commissie voor.", fa: "متقاعدشده توسط دلایل، کمیته رای مثبت داد." }
        ]
      },
      {
        h: "جایگزینی با وجه وصفی حال",
        p: "وقتی بند وابسته بیانگر هم‌زمانی یا دلیلی با فاعل مشترک باشد، می‌توان فعل آن را به وجه وصفی حال تبدیل کرد. مثل [[Terwijl hij liep, dacht hij aan haar]] → [[Lopend, dacht hij aan haar]].",
        ex: [
          { nl: "Wetende dat het gevaarlijk was, ging hij toch.", fa: "با اینکه می‌دانست خطرناک است، بازهم رفت." },
          { nl: "Beseffend dat hij laat was, rende hij naar het station.", fa: "با درک اینکه دیر کرده بود، به‌سمت ایستگاه دوید." }
        ]
      },
      {
        h: "محدودیت اصلی: نیاز به فاعل مشترک",
        p: "این کوتاه‌سازی فقط وقتی ممکن است که فاعل بند وابسته دقیقاً با فاعل (منطقی) جملهٔ اصلی یکسان باشد. اگر فاعل‌ها متفاوت باشند، بند وابسته باید به‌صورت کامل با voegwoord خودش باقی بماند.",
        tip: "اگر فاعل بند وابسته با فاعل جملهٔ اصلی یکسان نباشد، نمی‌توان آن را کوتاه کرد؛ در این حالت باید بند کامل با voegwoord حفظ شود."
      }
    ],
    ex: [
      { type: "mc", q: "کدام گزینه، نسخهٔ کوتاه‌شدهٔ 'Omdat hij moe was, ging hij slapen.' است؟", options: ["Moe, ging hij slapen.", "Hij moe was, ging hij slapen.", "Omdat moe, ging hij slapen.", "Moe zijnd, ging hij slapen."], answer: 0, exp: "وقتی فاعل بند وابسته و اصلی یکسان است، می‌توان صفت/وجه وصفی ([[moe]]) را مستقیماً در ابتدای جمله آورد و voegwoord و فعل را حذف کرد." },
      { type: "mc", q: "کدام جمله را نمی‌توان به‌سادگی به بند کوتاه‌شده تبدیل کرد؟", options: ["Omdat ik moe was, ging ik naar bed.", "Omdat hij het boek goed schreef, werd het succesvol.", "Omdat zij ziek was, bleef ze thuis.", "Omdat het laat was, gingen we naar huis."], answer: 1, exp: "در گزینهٔ دوم، فاعل بند وابسته ([[hij]]) با فاعل منطقی جملهٔ اصلی ([[het boek]]) یکسان نیست؛ پس کوتاه‌سازی ساده ممکن نیست." },
      { type: "fill", q: "___ in de 17e eeuw, trekt het kasteel veel toeristen. (bouwen، وجه وصفی گذشته)", answers: ["Gebouwd"], exp: "وجه وصفی گذشتهٔ [[Gebouwd]] در ابتدای جمله، بند وابستهٔ «چون در قرن هفدهم ساخته شده» را کوتاه می‌کند." },
      { type: "fill", q: "___ dat het gevaarlijk was, ging hij toch. (weten، وجه وصفی حال)", answers: ["Wetende"], exp: "وجه وصفی حال [[Wetende]] جایگزین «Omdat hij wist» می‌شود چون فاعل یکسان است." },
      { type: "order", q: "جمله را بچین: «برای اینکه به‌موقع برسد، او زود حرکت کرد.»", tokens: ["Om", "op", "tijd", "te", "komen", ",", "vertrok", "ze", "vroeg", "."], answers: [["Om", "op", "tijd", "te", "komen", ",", "vertrok", "ze", "vroeg", "."]], exp: "برای بیان هدف با فاعل مشترک، از ساخت [[om... te + مصدر]] در ابتدای جمله استفاده می‌شود." },
      { type: "order", q: "جمله را بچین: «متقاعدشده توسط دلایل، کمیته رای مثبت داد.»", tokens: ["Overtuigd", "door", "de", "argumenten", ",", "stemde", "de", "commissie", "voor", "."], answers: [["Overtuigd", "door", "de", "argumenten", ",", "stemde", "de", "commissie", "voor", "."]], exp: "وجه وصفی گذشتهٔ [[Overtuigd]] جایگزین بند کامل «Omdat de commissie overtuigd was» می‌شود." },
      { type: "mc", q: "جملهٔ 'Gebouwd in de 17e eeuw, trekt het kasteel veel toeristen.' معادل کدام بند کامل است؟", options: ["Omdat het kasteel in de 17e eeuw gebouwd werd, trekt het veel toeristen.", "Terwijl het kasteel gebouwd wordt, trekt het toeristen.", "Het kasteel bouwt zichzelf in de 17e eeuw.", "Mits het kasteel gebouwd is, trekt het toeristen."], answer: 0, exp: "بند وصفیِ کوتاه‌شده با فعل مجهول گذشته ([[gebouwd]]) جایگزین بند علّی کامل با [[omdat]] و فعل مجهول می‌شود." },
      { type: "fill", q: "___ door het harde geluid, rende de kat weg. (schrikken، وجه وصفی گذشته)", answers: ["Geschrokken"], exp: "[[Geschrokken]] وجه وصفی گذشتهٔ فعل [[schrikken]] است و بند «چون گربه ترسیده بود» را کوتاه می‌کند." }
    ]
  },
  {
    id: "c1-naamwoordstijl",
    level: "C1",
    title: "سبک اسمی در برابر سبک فعلی",
    nl: "Naamwoordstijl",
    sum: "هلندی رسمی و آکادمیک اغلب سبک **اسمی** ([[naamwoordstijl]]) را بر سبک **فعلی** ([[werkwoordstijl]]) ترجیح می‌دهد، یعنی کنش‌ها را به‌جای فعل، در قالب گروه‌های اسمی مثل [[de stijging van de prijzen]] بیان می‌کند.",
    blocks: [
      {
        h: "تعریف سبک اسمی و سبک فعلی",
        p: "**[[werkwoordstijl]]** (سبک فعلی) بر فعل و بندهای وابسته تکیه دارد؛ طبیعی و پویا است و بیشتر در گفتار و روایت به‌کار می‌رود. **[[naamwoordstijl]]** (سبک اسمی) اطلاعات را در گروه‌های اسمی متراکم می‌کند؛ در هلندی آکادمیک، اداری و خبری رایج است و لحنی عینی‌تر و رسمی‌تر ایجاد می‌کند، اما می‌تواند متن را سنگین‌تر کند.",
        ex: [
          { nl: "De regering besloot dat ze de belasting zou verhogen.", fa: "دولت تصمیم گرفت که مالیات را افزایش دهد. (سبک فعلی)" },
          { nl: "De regering nam het besluit tot belastingverhoging.", fa: "دولت تصمیم به افزایش مالیات گرفت. (سبک اسمی)" }
        ]
      },
      {
        h: "چگونگی تبدیل فعل به گروه اسمی",
        p: "برای تبدیل به سبک اسمی، فعل اصلی به اسم مشتق (اغلب با پسوند [[-ing]] یا [[-tie]]) تبدیل می‌شود و با حرف اضافهٔ [[van]]، [[tot]] یا [[over]] به بقیهٔ جمله وصل می‌شود؛ گاهی چند بند در یک جملهٔ اسمی متراکم می‌شوند.",
        table: {
          head: ["سبک فعلی", "سبک اسمی"],
          rows: [
            ["doordat de prijzen stijgen", "door de stijging van de prijzen"],
            ["nadat het onderzoek is afgerond", "na afronding van het onderzoek"],
            ["omdat het probleem is opgelost", "door de oplossing van het probleem"]
          ]
        },
        ex: [
          { nl: "Door de stijging van de prijzen nam de inflatie toe.", fa: "به‌دلیل افزایش قیمت‌ها، تورم بالا رفت." },
          { nl: "Na afronding van het onderzoek werd het rapport gepubliceerd.", fa: "پس از پایان تحقیق، گزارش منتشر شد." }
        ]
      },
      {
        h: "کاربرد سبکی: کجا و چرا",
        p: "سبک اسمی به‌دلیل فشردگی و لحن عینی/بی‌طرفانه در گزارش‌های رسمی، مقاله‌های علمی، متون قانونی و تیترهای خبری رایج است. اما استفادهٔ بیش‌ازحد از آن به‌عنوان «هلندی اداری» (ambtelijk Nederlands) انتقاد می‌شود، چون متن را دشوار و غیرطبیعی می‌کند.",
        list: ["گزارش‌های رسمی و اداری", "مقاله‌های علمی و دانشگاهی", "متون قانونی و حقوقی", "تیترهای خبری فشرده"]
      },
      {
        h: "نمونهٔ بازنویسی کامل",
        p: "مقایسهٔ یک جمله در هر دو سبک نشان می‌دهد چگونه فاعل بند وابسته به عبارت [[door + اسم]] و فعل اصلی به اسم مشتق تبدیل می‌شود.",
        ex: [
          { nl: "Toen de prijzen stegen, steeg de inflatie.", fa: "وقتی قیمت‌ها بالا رفت، تورم هم بالا رفت. (سبک فعلی)" },
          { nl: "De prijsstijging veroorzaakte de inflatiestijging.", fa: "افزایش قیمت باعث افزایش تورم شد. (سبک اسمی)" }
        ],
        tip: "در هلندی خوب نوشته‌شده، نویسندگان حرفه‌ای معمولاً ترکیبی از سبک اسمی و فعلی را به‌کار می‌برند تا متن هم دقیق و هم قابل‌خوانش باشد."
      }
    ],
    ex: [
      { type: "mc", q: "کدام گزینه نسخهٔ اسمی 'De regering besloot dat ze de belasting zou verhogen.' است؟", options: ["De regering nam het besluit tot belastingverhoging.", "De regering besluit belasting verhogen.", "De regering, verhogend belasting, besloot.", "Verhoging belasting besloot de regering."], answer: 0, exp: "در سبک اسمی، فعل اصلی به اسم ([[besluit]]) و فعل بند وابسته به اسم مرکب ([[belastingverhoging]]) تبدیل می‌شود." },
      { type: "fill", q: "Door de ___ van de prijzen steeg de inflatie. (stijgen، اسم)", answers: ["stijging"], exp: "اسم مشتق رسمی از [[stijgen]] همان [[stijging]] است." },
      { type: "mc", q: "کدام جمله نمونهٔ سبک فعلی طبیعی‌تر است؟", options: ["Toen de prijzen stegen, steeg de inflatie.", "Door de stijging van de prijzen steeg de inflatie.", "Bij stijging van prijzen, inflatiestijging.", "De prijsstijging veroorzaakte inflatiestijging."], answer: 0, exp: "گزینهٔ اول با بند زمانی فعلی ([[toen... stegen]]) نمونهٔ سبک فعلی پویا و طبیعی‌تر در گفتار است؛ باقی گزینه‌ها اسمی‌اند." },
      { type: "fill", q: "Na ___ van het onderzoek werd het rapport gepubliceerd. (afronden)", answers: ["afronding"], exp: "اسم رسمی مشتق از [[afronden]] برابر [[afronding]] است، رایج در سبک اسمی رسمی." },
      { type: "mc", q: "ویژگی اصلی سبک اسمی (naamwoordstijl) چیست؟", options: ["اطلاعات در عبارات اسمی متراکم می‌شود و لحن عینی‌تر و رسمی‌تر می‌شود", "جمله همیشه کوتاه‌تر از سبک فعلی است", "فقط در زبان محاوره‌ای رایج است", "فعل‌های اصلی حذف می‌شوند و جمله بدون فعل باقی می‌ماند"], answer: 0, exp: "در سبک اسمی، کنش‌ها به‌صورت اسم بیان می‌شوند و با van/door به بقیهٔ جمله وصل می‌شوند که لحنی عینی و رسمی‌تر ایجاد می‌کند؛ جمله همیشه کوتاه‌تر نمی‌شود." },
      { type: "order", q: "جملهٔ اسمی را بچین: «پس از تصویب قانون توسط پارلمان، آن لازم‌الاجرا شد.»", tokens: ["Na", "de", "goedkeuring", "van", "de", "wet", "door", "het", "parlement", ",", "trad", "ze", "in", "werking", "."], answers: [["Na", "de", "goedkeuring", "van", "de", "wet", "door", "het", "parlement", ",", "trad", "ze", "in", "werking", "."]], exp: "فاعل بند وابسته ([[parlement]]) به عبارت [[door het parlement]] تبدیل می‌شود و فعل اصلی ([[goedkeuren]]) به اسم ([[goedkeuring]]) تبدیل می‌شود." },
      { type: "mc", q: "کدام متن نمونهٔ هلندی اداری بیش‌ازحد اسمی است؟", options: ["Met betrekking tot de uitvoering van de aanvraag tot verlening van de vergunning wordt verwezen naar bijlage 2.", "Je aanvraag staat in bijlage 2.", "We hebben je aanvraag ontvangen.", "Bijlage 2 bevat je aanvraag."], answer: 0, exp: "زنجیرهٔ طولانی عبارات اسمی پیاپی با van/tot نمونهٔ کلاسیک هلندی اداری سنگین و دشوار برای خوانش است." },
      { type: "fill", q: "De ___ van het probleem duurde weken. (oplossen، اسم)", answers: ["oplossing"], exp: "اسم مشتق رسمی از فعل [[oplossen]] برابر [[oplossing]] است." }
    ]
  },
  {
    id: "c1-partikels-nuance",
    level: "C1",
    title: "ذرات و واژه‌های ظرافت پیشرفته",
    nl: "Partikels en nuancewoorden",
    sum: "واژه‌های ظرافت‌بخش پیشرفته مانند [[nu eenmaal]]، [[immers]]، [[overigens]] و ساخت [[enerzijds...anderzijds]] نقش گفتمانی و استدلالی مهمی در نوشتار رسمی هلندی دارند.",
    blocks: [
      {
        h: "[[nu eenmaal]]: واقعیت تغییرناپذیر",
        p: "[[nu eenmaal]] واقعیتی تغییرناپذیر و پذیرفته‌شده را بیان می‌کند، اغلب با لحنی نسبتاً تسلیم‌شده یا واقع‌گرایانه، به معنای «همینطور است دیگر/خب همینه».",
        ex: [
          { nl: "Zo zijn de regels nu eenmaal.", fa: "قوانین همین‌طورند دیگر، کاری نمی‌شود کرد." },
          { nl: "Hij is nu eenmaal een beetje koppig.", fa: "او خب یک‌ذره یک‌دنده است (این ویژگی ثابتش است)." }
        ]
      },
      {
        h: "[[immers]]: دلیل از پیش پذیرفته‌شده",
        p: "[[immers]] دلیلی را یادآوری می‌کند که گوینده فرض می‌کند شنونده از قبل آن را می‌داند یا می‌پذیرد، شبیه «چون می‌دانید/همان‌طور که می‌دانید». معمولاً بعد از فاعل و فعل می‌آید، نه در ابتدای جمله.",
        ex: [
          { nl: "We moeten voorzichtig zijn, het is immers gevaarlijk werk.", fa: "باید محتاط باشیم، چون این کار خطرناکی است (که خودمان می‌دانیم)." },
          { nl: "Hij kon niet komen, hij was immers ziek.", fa: "او نتوانست بیاید، چون بیمار بود (همان‌طور که می‌دانیم)." }
        ]
      },
      {
        h: "[[overigens]]: نکتهٔ جانبی",
        p: "[[overigens]] نکتهٔ جانبی یا تغییر ملایم موضوع را معرفی می‌کند، شبیه «به‌هر‌حال/در ضمن/ضمناً».",
        ex: [
          { nl: "Het plan is goedgekeurd. Overigens heeft niemand om mijn mening gevraagd.", fa: "برنامه تصویب شد. در ضمن، هیچ‌کس نظر من را نپرسید." },
          { nl: "Zij is, overigens net als haar zus, erg muzikaal.", fa: "او، که در ضمن مثل خواهرش است، خیلی موزیکال است." }
        ]
      },
      {
        h: "[[enerzijds... anderzijds]]: ساخت دوسویه",
        p: "این ساخت دو جنبهٔ مکمل یا متضاد یک موضوع را معرفی می‌کند، شبیه «از یک‌سو... از سوی دیگر». رسمی و مناسب استدلال نوشتاری است. چون هر دو جزء در ابتدای بند خودشان می‌آیند، فعل بلافاصله بعد از آن‌ها قرار می‌گیرد (وارونگی).",
        ex: [
          { nl: "Enerzijds wil ik meer geld sparen, anderzijds wil ik ook genieten van het leven.", fa: "از یک‌سو می‌خواهم پول بیشتری پس‌انداز کنم، از سوی دیگر می‌خواهم از زندگی هم لذت ببرم." },
          { nl: "Enerzijds biedt de technologie kansen, anderzijds brengt ze risico's met zich mee.", fa: "از یک‌سو فناوری فرصت‌هایی فراهم می‌کند، از سوی دیگر خطراتی هم به همراه دارد." }
        ],
        tip: "این واژه‌ها بیشتر در استدلال نوشتاری و رسمی به کار می‌روند و به متن ساختار منطقی و انسجام می‌دهند."
      }
    ],
    ex: [
      { type: "mc", q: "Zo zijn de regels ___. (واقعیت تغییرناپذیر)", options: ["nu eenmaal", "immers", "overigens", "enerzijds"], answer: 0, exp: "[[nu eenmaal]] واقعیتی تغییرناپذیر و پذیرفته‌شده را بیان می‌کند، با لحنی نسبتاً تسلیم‌شده." },
      { type: "mc", q: "We moeten voorzichtig zijn, het is ___ gevaarlijk werk. (دلیل از پیش پذیرفته‌شده)", options: ["overigens", "immers", "nu eenmaal", "anderzijds"], answer: 1, exp: "[[immers]] دلیلی را یادآوری می‌کند که گوینده فرض می‌کند شنونده از قبل آن را می‌داند یا می‌پذیرد." },
      { type: "fill", q: "Het plan is goedgekeurd. ___ heeft niemand om mijn mening gevraagd. (نکتهٔ جانبی)", answers: ["Overigens"], exp: "[[Overigens]] نکتهٔ جانبی یا تغییر ملایم موضوع را معرفی می‌کند، شبیه «به‌هر‌حال/در ضمن»." },
      { type: "mc", q: "کدام جمله ساخت 'enerzijds...anderzijds' را درست به‌کار می‌برد؟", options: ["Enerzijds wil ik sparen, anderzijds wil ik genieten.", "Enerzijds wil ik sparen, maar ook genieten.", "Anderzijds wil ik sparen, enerzijds genieten.", "Enerzijds, anderzijds wil ik sparen en genieten."], answer: 0, exp: "ساخت درست: [[Enerzijds]] + جملهٔ اول، [[anderzijds]] + جملهٔ دوم، برای نمایش دو جنبهٔ مکمل یا متضاد یک موضوع." },
      { type: "fill", q: "Hij is ___ een beetje koppig, maar een goede vriend. (واقعیت پذیرفته‌شده)", answers: ["nu eenmaal"], exp: "[[nu eenmaal]] این ویژگی را به‌عنوان واقعیتی ثابت و غیرقابل‌تغییر دربارهٔ شخص توصیف می‌کند." },
      { type: "mc", q: "'overigens' در جمله معمولاً چه نقشی دارد؟", options: ["افزودن نکتهٔ جانبی یا تغییر ملایم موضوع", "بیان دلیل از پیش پذیرفته‌شده", "بیان تضاد شدید", "بیان شرط"], answer: 0, exp: "[[overigens]] برای افزودن نکتهٔ جانبی غیرمنتظره یا کمی‌تغییر مسیر در گفتار/نوشتار به‌کار می‌رود." },
      { type: "order", q: "جمله را بچین: «از یک‌سو فناوری فرصت می‌دهد، از سوی دیگر خطر هم دارد.»", tokens: ["Enerzijds", "biedt", "de", "technologie", "kansen", ",", "anderzijds", "brengt", "ze", "risico's", "met", "zich", "mee", "."], answers: [["Enerzijds", "biedt", "de", "technologie", "kansen", ",", "anderzijds", "brengt", "ze", "risico's", "met", "zich", "mee", "."]], exp: "در هر دو بند بعد از [[enerzijds]]/[[anderzijds]] فعل بلافاصله می‌آید (وارونگی، چون این کلمات در ابتدای بندشان‌اند)." },
      { type: "mc", q: "کدام جمله مفهوم 'immers' را درست نشان می‌دهد؟", options: ["Hij kon niet komen, hij was immers ziek.", "Hij was immers ziek, dus kwam hij niet weten.", "Immers, hij komt morgen misschien.", "Hij is immers ziek geweest, maar nu niet meer."], answer: 0, exp: "در گزینهٔ اول، [[immers]] دلیلی (بیماری) را که از قبل مفروض/پذیرفته است برای توضیح نیامدن او یادآوری می‌کند." }
    ]
  },
  {
    id: "c1-complexe-zinsbouw",
    level: "C1",
    title: "ساخت جملهٔ پیچیده",
    nl: "Complexe zinsbouw",
    sum: "جملات پیچیدهٔ هلندی می‌توانند چند بند وابستهٔ تودرتو، وارونگی پس از عنصر جلوآمده، و خوشهٔ فعلی پایانی با سه فعل یا بیشتر (مانند [[had moeten worden gedaan]]) داشته باشند.",
    blocks: [
      {
        h: "بندهای وابستهٔ تودرتو",
        p: "هلندی اجازه می‌دهد چند بند وابسته در یک جمله تودرتو شوند. باید دقت کرد کدام فعل به کدام بند تعلق دارد: فعل جملهٔ اصلی جای دوم (V2) باقی می‌ماند و هر بند وابسته فعل خودش را به انتهای همان بند (نه انتهای کل جمله) می‌برد.",
        ex: [
          { nl: "Ik denk dat hij zei dat hij zou komen als het niet zou regenen.", fa: "فکر می‌کنم او گفت که اگر باران نبارد خواهد آمد." }
        ]
      },
      {
        h: "وارونگی پس از عنصر جلوآمده",
        p: "طبق قاعدهٔ فعل‌دوم (V2)، وقتی جمله با عنصری غیر از فاعل شروع شود (قید، بند وابسته، عبارت قیدی)، فعل صرف‌شده باید بلافاصله بعد از آن بیاید و فاعل بعد از فعل قرار می‌گیرد.",
        ex: [
          { nl: "Door het slechte weer, werd de wedstrijd afgelast.", fa: "به‌دلیل آب‌وهوای بد، مسابقه لغو شد." },
          { nl: "Nooit heb ik zoiets geks gezien.", fa: "هرگز چنین چیز احمقانه‌ای ندیده‌ام." }
        ]
      },
      {
        h: "خوشهٔ فعلی پایانی با سه فعل یا بیشتر",
        p: "وقتی فعل وجهی، فعل کمکی زمانی و فعل اصلی (یا مجهول) ترکیب شوند، خوشه‌ای از سه فعل یا بیشتر در انتهای بند وابسته شکل می‌گیرد. ترتیب «سبز» (استاندارد و شفاف‌تر در نوشتار رسمی): فعل کمکی زمانی + فعل وجهی + فعل اصلی/مجهول. مثل [[dat hij het had moeten doen]] یا با مجهول: [[dat het had moeten worden gedaan]].",
        ex: [
          { nl: "Ik wist niet dat hij het boek al had moeten teruggeven.", fa: "نمی‌دانستم که او باید کتاب را قبلاً پس می‌داد." },
          { nl: "Men vermoedt dat het besluit eerder had moeten worden genomen.", fa: "گمان می‌رود که آن تصمیم باید زودتر گرفته می‌شد." }
        ]
      },
      {
        h: "نکات سبکی برای وضوح جمله پیچیده",
        p: "برای حفظ خوانایی در جمله‌های پیچیده، بهتر است از تعداد بندهای تودرتو در حد معقول استفاده شود، نقطه‌گذاری درست رعایت شود و ترتیب سبز در خوشه‌های فعلی ترجیح داده شود.",
        tip: "در خوشه‌های فعلی سه‌تایی یا بیشتر، ترتیب «سبز» (فعل کمکی + فعل وجهی + فعل اصلی) معمولاً خوانایی بهتری نسبت به ترتیب «قرمز» دارد، به‌ویژه در نوشتار رسمی."
      }
    ],
    ex: [
      { type: "mc", q: "در جملهٔ 'Omdat het regende, bleven we binnen.' فعل جملهٔ اصلی (bleven) در چه جایگاهی قرار دارد؟", options: ["بلافاصله بعد از بند وابستهٔ جلوآمده (وارونگی)", "در انتهای کل جمله", "قبل از بند وابسته", "در جایگاه دوم بند وابسته"], answer: 0, exp: "چون بند وابستهٔ 'Omdat het regende' به‌عنوان یک عنصر در جایگاه اول جمله عمل می‌کند، فعل جملهٔ اصلی باید بلافاصله بعد از آن بیاید (قاعدهٔ وارونگی/فعل‌دوم)." },
      { type: "order", q: "جمله را بچین: «هرگز چنین چیز احمقانه‌ای ندیده‌ام.»", tokens: ["Nooit", "heb", "ik", "zoiets", "geks", "gezien", "."], answers: [["Nooit", "heb", "ik", "zoiets", "geks", "gezien", "."]], exp: "چون قید منفی [[Nooit]] در ابتدای جمله آمده، فعل کمکی ([[heb]]) بلافاصله بعد از آن و پیش از فاعل ([[ik]]) می‌آید." },
      { type: "fill", q: "Men vermoedt dat het besluit eerder had ___ worden genomen. (moeten)", answers: ["moeten"], exp: "در خوشهٔ فعلی سه‌تایی، فعل وجهی [[moeten]] میان فعل کمکی ([[had]]) و فعل اصلی مجهول ([[worden genomen]]) قرار می‌گیرد: [[had moeten worden genomen]]." },
      { type: "mc", q: "کدام ترتیب برای خوشهٔ فعلی 'dat hij het ... doen' (hebben/kunnen/doen) استانداردتر و رایج‌تر است (ترتیب سبز)؟", options: ["had kunnen doen", "kunnen had doen", "doen had kunnen", "had doen kunnen"], answer: 0, exp: "ترتیب سبز استاندارد: فعل کمکی زمانی ([[had]]) + فعل وجهی ([[kunnen]]) + فعل اصلی ([[doen]])." },
      { type: "order", q: "جمله را بچین: «فکر می‌کنم او گفت که اگر باران نبارد خواهد آمد.»", tokens: ["Ik", "denk", "dat", "hij", "zei", "dat", "hij", "zou", "komen", "als", "het", "niet", "zou", "regenen", "."], answers: [["Ik", "denk", "dat", "hij", "zei", "dat", "hij", "zou", "komen", "als", "het", "niet", "zou", "regenen", "."]], exp: "این جمله سه لایهٔ بند تودرتو دارد؛ هر بند وابسته فعل خودش را به انتهای همان بند می‌برد، نه به انتهای کل جمله." },
      { type: "mc", q: "'Door het slechte weer, werd de wedstrijd afgelast.' کدام نکتهٔ دستوری را نشان می‌دهد؟", options: ["وارونگی پس از عنصر جلوآمدهٔ غیرفاعلی", "مجهول غیرشخصی", "بند وصفی کاهش‌یافته", "ساخت aan het"], answer: 0, exp: "چون عبارت قیدی 'Door het slechte weer' در جایگاه اول آمده، فعل ([[werd]]) بلافاصله بعد از آن و پیش از فاعل ([[de wedstrijd]]) می‌آید." },
      { type: "fill", q: "Ik wist niet dat hij het boek al had ___ teruggeven. (moeten)", answers: ["moeten"], exp: "ترتیب طبیعی خوشهٔ فعلی: [[had]] (کمکی) + [[moeten]] (وجهی) + [[teruggeven]] (فعل اصلی)." },
      { type: "mc", q: "در نوشتار رسمی، کدام ترتیب خوشهٔ فعلی سه‌تایی معمولاً خوانایی بهتری دارد؟", options: ["ترتیب سبز (فعل کمکی - فعل وجهی - فعل اصلی)", "ترتیب قرمز (فعل اصلی - فعل وجهی - فعل کمکی)", "هیچ تفاوتی وجود ندارد", "همیشه باید فعل کمکی در انتها بیاید"], answer: 0, exp: "در سبک نوشتاری رسمی، ترتیب سبز (فعل کمکی، سپس فعل وجهی، سپس فعل اصلی) معمولاً شفاف‌تر و استانداردتر در نظر گرفته می‌شود." }
    ]
  },
  {
    id: "c1-idiomatische-uitdrukkingen-grammatica",
    level: "C1",
    title: "عبارات ثابت اصطلاحی و دستور آن‌ها",
    nl: "Idiomatische uitdrukkingen",
    sum: "بسیاری از عبارات ثابت هلندی ([[vaste verbindingen]]) حرف اضافهٔ ثابت ([[rekening houden met]])، ترتیب کلمات ثابت یا حرف تعریف غیرقابل‌تغییر دارند که باید به‌عنوان یک واحد کامل حفظ شوند.",
    blocks: [
      {
        h: "حروف اضافهٔ ثابت در عبارات اصطلاحی",
        p: "بسیاری از عبارات ثابت یک حرف اضافهٔ مشخص و غیرقابل‌تغییر دارند که باید همراه با فعل به‌خاطر سپرده شود؛ تغییر آن حرف اضافه معنا را خراب می‌کند یا جمله را نادرست می‌سازد.",
        table: {
          head: ["عبارت", "حرف اضافهٔ ثابت", "معنی"],
          rows: [
            ["rekening houden", "met", "در نظر گرفتن"],
            ["afhankelijk zijn", "van", "وابسته بودن به"],
            ["zich concentreren", "op", "تمرکز کردن بر"],
            ["de voorkeur geven", "aan", "ترجیح دادن به"]
          ]
        },
        ex: [
          { nl: "Hij moet rekening houden met de kosten.", fa: "او باید هزینه‌ها را در نظر بگیرد." },
          { nl: "Hij gaf de voorkeur aan thee boven koffie.", fa: "او چای را به قهوه ترجیح داد." }
        ]
      },
      {
        h: "ترتیب کلمات ثابت در عبارات",
        p: "برخی عبارات ثابت، ترتیب کلماتی غیرقابل‌تغییر دارند که حتی اگر گرامر عادی اجازهٔ جابه‌جایی بدهد، در این عبارت‌ها نباید تغییر کند. مثل [[voor de dag komen met]] (با چیزی بیرون آمدن/پیشنهاد دادن) یا [[in de gaten houden]] (زیرنظر داشتن).",
        ex: [
          { nl: "Hij hield de situatie goed in de gaten.", fa: "او وضعیت را به‌خوبی زیرنظر داشت." },
          { nl: "Kun je eindelijk voor de dag komen met een oplossing?", fa: "آیا بالاخره می‌توانی راه‌حلی ارائه بدهی؟" }
        ]
      },
      {
        h: "بدون تغییر حرف تعریف",
        p: "در برخی عبارات ثابت، حرف تعریف (یا نبودِ آن) بخشی جداناشدنی از عبارت است و نمی‌توان آن را تغییر داد یا جمع بست. مثل [[de deur uit gaan]] (نه [[een deur]]) یا [[het heeft geen zin]] (که [[zin]] در اینجا جمع‌بسته نمی‌شود).",
        ex: [
          { nl: "Hij ging vroeg de deur uit.", fa: "او زود از خانه بیرون رفت." },
          { nl: "Het heeft geen zin om te wachten.", fa: "منتظرماندن فایده‌ای ندارد." }
        ]
      },
      {
        h: "نکات یادگیری عبارات ثابت",
        p: "بهترین روش، حفظ کردن کل عبارت (فعل + حرف اضافه + ساختار) به‌عنوان یک واحد است، نه حفظ فعل به‌تنهایی. برای آزمایش اینکه آیا عبارتی اصطلاحی و ثابت است یا نه، می‌توان یک جزء را جایگزین کرد: اگر معنا خراب شود یا برای گویشور بومی عجیب به‌نظر برسد، آن عبارت یک [[vaste verbinding]] است.",
        tip: "بهترین روش یادگیری فعل‌های اصطلاحی ثابت، حفظ کردن کل عبارت به همراه حرف اضافه‌اش است، نه حفظ فعل به‌تنهایی."
      }
    ],
    ex: [
      { type: "mc", q: "Hij moet rekening houden ___ de kosten. (حرف اضافهٔ ثابت)", options: ["met", "van", "aan", "op"], answer: 0, exp: "عبارت ثابت [[rekening houden met]] همیشه با حرف اضافهٔ [[met]] می‌آید و قابل تغییر نیست." },
      { type: "fill", q: "Dit resultaat is helemaal afhankelijk ___ het weer. (afhankelijk zijn van، حرف اضافهٔ ثابت)", answers: ["van"], exp: "عبارت ثابت [[afhankelijk zijn van]] همیشه با [[van]] می‌آید." },
      { type: "mc", q: "Hij gaf de voorkeur ___ thee boven koffie. (حرف اضافهٔ ثابت)", options: ["aan", "voor", "op", "met"], answer: 0, exp: "عبارت ثابت [[de voorkeur geven aan]] همیشه با [[aan]] می‌آید." },
      { type: "fill", q: "Kun je eindelijk voor de dag komen ___ een oplossing? (پیشنهاد دادن)", answers: ["met"], exp: "عبارت ثابت [[voor de dag komen met]] به معنای «با راه‌حلی بیرون آمدن» همیشه با [[met]] می‌آید و ترتیب کلماتش ثابت است." },
      { type: "mc", q: "کدام جمله عبارت ثابت 'in de gaten houden' را درست به‌کار برده؟", options: ["Hij hield de situatie goed in de gaten.", "Hij hield in de gaten de situatie goed.", "Hij hield de gaten goed in situatie.", "Hij hield goed de situatie gaten in."], answer: 0, exp: "در عبارت ثابت [[in de gaten houden]]، ترتیب کلمات ثابت است و فقط مفعول ([[de situatie]]) می‌تواند میان فعل و این عبارت قرار گیرد." },
      { type: "mc", q: "'Het heeft geen zin om te wachten.' چرا 'geen zin' در این عبارت جمع‌ناپذیر و ثابت است؟", options: ["چون این یک عبارت ثابت اصطلاحی با شکل غیرقابل‌تغییر است", "چون zin همیشه و در همهٔ کاربردها جمع‌ناپذیر است", "چون zin فقط به معنای 'جمله' است", "چون این یک قاعدهٔ املایی است"], answer: 0, exp: "[[het heeft geen zin]] یک عبارت ثابت اصطلاحی است که شکل آن (ازجمله عدم جمع‌بستن [[zin]] در این معنا) ثابت و غیرقابل‌تغییر است." },
      { type: "fill", q: "Ze concentreert zich helemaal ___ haar werk. (تمرکز کردن، حرف اضافهٔ ثابت)", answers: ["op"], exp: "عبارت ثابت [[zich concentreren op]] همیشه با [[op]] می‌آید." },
      { type: "order", q: "جمله را بچین: «او زود از خانه بیرون رفت.»", tokens: ["Hij", "ging", "vroeg", "de", "deur", "uit", "."], answers: [["Hij", "ging", "vroeg", "de", "deur", "uit", "."]], exp: "عبارت ثابت [[de deur uit gaan]] همیشه با حرف تعریف معین [[de]] (نه een) و ترتیب ثابت کلمات به‌کار می‌رود." }
    ]
  },
  {
    id: "c1-stijlfiguren-formeel-schrijven",
    level: "C1",
    title: "شگردهای سبکی در نوشتار رسمی",
    nl: "Stijlfiguren in formeel schrijven",
    sum: "نوشتار رسمی و استدلالی هلندی از شگردهایی مانند **مجهول** برای عینیت، **تعدیل** ([[zou kunnen]]، [[lijkt erop dat]]) و ربط‌های استدلالی رسمی ([[niettemin]]، [[enerzijds...anderzijds]]) بهره می‌برد.",
    blocks: [
      {
        h: "مجهول برای عینیت",
        p: "حذف فاعل انسانی و استفاده از مجهول (گاهی همراه با مجهول غیرشخصی [[er wordt]]) لحنی عینی و غیرشخصی به متن می‌دهد که در نوشتار علمی و رسمی رایج است؛ عامل کنش ([[door + فاعل]]) فقط وقتی ذکر می‌شود که اهمیت داشته باشد.",
        ex: [
          { nl: "Er is onderzoek gedaan naar de effecten van het beleid.", fa: "پژوهشی دربارهٔ اثرات این سیاست انجام شده است." },
          { nl: "Het onderzoek werd uitgevoerd tussen 2020 en 2022.", fa: "این پژوهش بین سال‌های ۲۰۲۰ و ۲۰۲۲ انجام شد." }
        ]
      },
      {
        h: "تعدیل و احتیاط در بیان (hedging)",
        p: "تعدیل (hedging) ادعاها را محتاطانه و کمتر قطعی بیان می‌کند و در استدلال علمی رایج است. عبارت‌های کلیدی: [[zou kunnen wijzen op]] (می‌تواند نشان‌دهندهٔ... باشد)، [[het lijkt erop dat]] (به‌نظر می‌رسد که)، [[mogelijk]] (احتمالاً)، [[in zekere zin]] (به‌نوعی).",
        ex: [
          { nl: "Dit zou kunnen wijzen op een verband tussen beide factoren.", fa: "این می‌تواند نشان‌دهندهٔ ارتباطی میان این دو عامل باشد." },
          { nl: "Het lijkt erop dat de maatregel effect heeft.", fa: "به‌نظر می‌رسد این اقدام تاثیر داشته است." }
        ]
      },
      {
        h: "ربط‌های استدلالی رسمی",
        p: "ربط‌های رسمی به متن ساختار منطقی می‌دهند و استدلال را سازمان‌دهی می‌کنند.",
        table: {
          head: ["ربط", "کاربرد"],
          rows: [
            ["niettemin", "با وجود این (نتیجه‌ای خلاف انتظار)"],
            ["desalniettemin", "با وجود این (تاکید رسمی‌تر و قوی‌تر)"],
            ["daarentegen", "در مقابل، برعکس"],
            ["bovendien", "علاوه بر این"]
          ]
        },
        ex: [
          { nl: "De resultaten zijn positief; niettemin blijft meer onderzoek nodig.", fa: "نتایج مثبت است؛ با وجود این، تحقیق بیشتری لازم است." },
          { nl: "De ene groep groeide snel, de andere groep kromp daarentegen.", fa: "گروه اول سریع رشد کرد، درحالی‌که گروه دیگر برعکس کوچک شد." }
        ]
      },
      {
        h: "ترکیب شگردها در یک پاراگراف استدلالی",
        p: "در نوشتار رسمی حرفه‌ای، مجهول، تعدیل و ربط‌های استدلالی اغلب در یک پاراگراف با هم ترکیب می‌شوند تا هم عینیت و هم انسجام منطقی حفظ شود.",
        ex: [
          { nl: "Het onderzoek werd uitgevoerd in twee fasen. De resultaten lijken erop te wijzen dat de maatregel effectief is; niettemin is nader onderzoek wenselijk.", fa: "پژوهش در دو فاز انجام شد. نتایج به‌نظر می‌رسد نشان‌دهندهٔ اثربخشی این اقدام باشد؛ با وجود این، بررسی بیشتر مطلوب است." }
        ],
        tip: "استفادهٔ متوازن از این شگردها متن را رسمی و قانع‌کننده می‌کند، اما زیاده‌روی در تعدیل (hedging) می‌تواند استدلال را ضعیف و مردد به نظر برساند."
      }
    ],
    ex: [
      { type: "mc", q: "کدام جمله نمونهٔ مجهول برای ایجاد عینیت در نوشتار رسمی است؟", options: ["Er is onderzoek gedaan naar de effecten van het beleid.", "Wij hebben onderzoek gedaan naar de effecten van het beleid.", "Ik denk dat het beleid goed werkt.", "Jullie moeten onderzoek doen naar het beleid."], answer: 0, exp: "حذف فاعل انسانی و استفاده از مجهول غیرشخصی ([[Er is onderzoek gedaan]]) لحنی عینی و غیرشخصی به متن می‌دهد که در نوشتار رسمی/علمی رایج است." },
      { type: "mc", q: "'Dit zou kunnen wijzen op een verband.' نمونهٔ کدام شگرد سبکی است؟", options: ["تعدیل/احتیاط در بیان (hedging)", "مجهول برای عینیت", "ربط استدلالی", "ذرهٔ وجهی"], answer: 0, exp: "عبارت [[zou kunnen wijzen op]] ادعا را به‌صورت محتاطانه و غیرقطعی مطرح می‌کند، نمونهٔ کلاسیک hedging در نوشتار علمی." },
      { type: "fill", q: "Het ___ erop dat de maatregel effect heeft. (تعدیل، به‌نظر می‌رسد که)", answers: ["lijkt"], exp: "عبارت ثابت [[het lijkt erop dat]] برای بیان محتاطانهٔ یک برداشت یا نتیجه‌گیری به‌کار می‌رود." },
      { type: "mc", q: "کدام ربط رسمی‌ترین و تاکیدی‌ترین حس تضاد را منتقل می‌کند؟", options: ["desalniettemin", "maar", "toch", "en"], answer: 0, exp: "[[desalniettemin]] رسمی‌ترین و تاکیدی‌ترین معادل «با وجود این/با این‌حال» در میان گزینه‌هاست." },
      { type: "fill", q: "De resultaten zijn positief; ___ blijft meer onderzoek nodig. (با وجود این، ربط رسمی)", answers: ["niettemin", "desalniettemin"], exp: "[[niettemin]] یا [[desalniettemin]] رابطهٔ خلاف‌انتظار میان دو بخش جمله را با لحن رسمی بیان می‌کند." },
      { type: "mc", q: "'daarentegen' در جمله چه نقشی دارد؟", options: ["نشان‌دادن تضاد/مقابله با نکتهٔ قبلی", "افزودن نکتهٔ مکمل بدون تضاد", "بیان دلیل", "بیان شرط"], answer: 0, exp: "[[daarentegen]] به معنای «در مقابل/برعکس» برای مقابلهٔ دو ایده یا دو دسته داده به‌کار می‌رود." },
      { type: "order", q: "جمله را بچین: «این پژوهش بین سال‌های ۲۰۲۰ و ۲۰۲۲ انجام شد.» (مجهول رسمی)", tokens: ["Het", "onderzoek", "werd", "uitgevoerd", "tussen", "2020", "en", "2022", "."], answers: [["Het", "onderzoek", "werd", "uitgevoerd", "tussen", "2020", "en", "2022", "."]], exp: "حذف عامل انجام‌دهنده و استفاده از فعل مجهول ([[werd uitgevoerd]]) تمرکز را از «چه کسی این کار را کرد» به خودِ رویداد منتقل می‌کند؛ نمونهٔ سبک رسمی عینی." },
      { type: "mc", q: "استفادهٔ بیش‌ازحد از عبارات تعدیلی (hedging) در یک متن استدلالی چه خطری دارد؟", options: ["ممکن است استدلال را ضعیف و مردد به نظر برساند", "متن را کوتاه‌تر می‌کند", "متن را غیررسمی می‌کند", "باعث مجهول‌شدن بیش‌ازحد جمله می‌شود"], answer: 0, exp: "استفادهٔ بیش‌ازحد از عبارات محتاطانه مثل [[zou kunnen]]، [[mogelijk]]، [[lijkt erop dat]] می‌تواند قدرت استدلال نویسنده را کم کند و متن را مردد جلوه دهد." }
    ]
  }
];
