(function () {
  'use strict';

  var LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
  var UI_LANGS = ['fa', 'en', 'ar', 'tr'];
  var LANG_NAMES = { fa: 'فارسی', en: 'English', ar: 'العربية', tr: 'Türkçe' };
  var RTL_LANGS = { fa: 1, ar: 1 };

  var I18N_UI = {
    fa: {
      brand: 'گرامر اسپل',
      footer: 'گرامر اسپل — یادگیری گرامر هلندی برای فارسی‌زبانان',
      themeToggle: 'تغییر پوسته', langToggle: 'تغییر زبان',
      heroTitle: 'سلام! وقت تمرین گرامر هلندیه 🇳🇱',
      heroSubtitle: 'سطح خود را انتخاب کنید و مرحله به مرحله گرامر را یاد بگیرید.',
      statProgress: 'پیشرفت کلی', statXp: 'امتیاز XP', statStreak: 'روز متوالی',
      sectionLevels: '📚 انتخاب سطح', sectionGames: '🎮 بازی‌ها',
      gameDehetTitle: 'اسپرینت de/het', gameDehetDesc: 'در ۴۵ ثانیه حرف تعریف درست را انتخاب کن',
      gameSurviveTitle: 'زنده بمان!', gameSurviveDesc: 'با ۳ جان، تا کجا می‌توانی جواب درست بدهی؟',
      bestScore: 'بهترین امتیاز: {n}', backHome: '« بازگشت به خانه', levelHeading: 'سطح {level}',
      levelLabelA1: 'مقدماتی ۱', levelLabelA2: 'مقدماتی ۲', levelLabelB1: 'میانی ۱', levelLabelB2: 'میانی ۲', levelLabelC1: 'پیشرفته',
      topicsCompleted: '{done} از {total} موضوع تکمیل شده ({pct}%)', noTopics: 'موضوعی موجود نیست',
      levelTestBtn: '📝 آزمون سطح {level}', topicNotFound: 'موضوع پیدا نشد', backToLevel: '« بازگشت به سطح {level}',
      startExercises: '🚀 شروع تمرین‌ها ({n} تمرین)', fillPlaceholder: 'پاسخ را به هلندی بنویس...',
      checkAnswer: 'بررسی پاسخ', pickWordsHint: 'کلمات را از پایین انتخاب کن', checkSentence: 'بررسی جمله',
      correctFeedback: '✅ درست بود!', wrongFeedback: '❌ نه دقیقاً', continueBtn: 'ادامه ←', comboLabel: '🔥 کمبو: {n}',
      placeAllWords: 'همهٔ کلمات را به ترتیب قرار بده', testPassed: 'قبول شدی!', testFailed: 'هنوز قبول نشدی',
      exerciseResult: 'نتیجه تمرین', accuracyLine: 'دقت: {pct}%  ({correct} از {total})',
      passThreshold: 'برای قبولی حداقل ۸۰٪ لازم است', okBtn: 'باشه', noExercises: 'تمرینی موجود نیست',
      notEnoughTestQuestions: 'سوال کافی برای آزمون نیست', noGameData: 'داده‌ای برای بازی موجود نیست',
      scoreLabel: 'امتیاز: {n}', endGameBtn: 'پایان بازی', dehetCorrect: '✅ درست — {g}', dehetWrong: '❌ جواب درست: {g}',
      timeUp: 'زمان تمام شد!', playAgain: 'بازی دوباره', backHomeBtn: 'بازگشت به خانه',
      noSurviveQuestions: 'سوالی برای بازی موجود نیست', surviveCorrect: '✅ درست!', surviveWrong: '❌ اشتباه',
      surviveEndBtn: 'پایان بازی و مشاهده نتیجه', gameOver: 'بازی تمام شد',
      ttsUnavailable: 'صدای هلندی روی این دستگاه نصب نیست؛ در تنظیمات سیستم یک صدای nl-NL اضافه کنید.'
    },
    en: {
      brand: 'Grammatica Spel',
      footer: 'Grammatica Spel — learn Dutch grammar through games',
      themeToggle: 'Toggle theme', langToggle: 'Change language',
      heroTitle: 'Hi! Time to practice Dutch grammar 🇳🇱',
      heroSubtitle: 'Pick your level and learn grammar step by step.',
      statProgress: 'Overall progress', statXp: 'XP points', statStreak: 'Day streak',
      sectionLevels: '📚 Choose a level', sectionGames: '🎮 Games',
      gameDehetTitle: 'de/het Sprint', gameDehetDesc: 'Pick the right article in 45 seconds',
      gameSurviveTitle: 'Survive!', gameSurviveDesc: 'With 3 lives, how far can you get?',
      bestScore: 'Best score: {n}', backHome: '‹ Back to home', levelHeading: 'Level {level}',
      levelLabelA1: 'Beginner 1', levelLabelA2: 'Beginner 2', levelLabelB1: 'Intermediate 1', levelLabelB2: 'Intermediate 2', levelLabelC1: 'Advanced',
      topicsCompleted: '{done} of {total} topics completed ({pct}%)', noTopics: 'No topics available',
      levelTestBtn: '📝 Level {level} test', topicNotFound: 'Topic not found', backToLevel: '‹ Back to level {level}',
      startExercises: '🚀 Start exercises ({n})', fillPlaceholder: 'Type the answer in Dutch...',
      checkAnswer: 'Check answer', pickWordsHint: 'Pick words from below', checkSentence: 'Check sentence',
      correctFeedback: '✅ Correct!', wrongFeedback: '❌ Not quite', continueBtn: 'Continue →', comboLabel: '🔥 Combo: {n}',
      placeAllWords: 'Place all the words in order', testPassed: 'You passed!', testFailed: 'Not quite there yet',
      exerciseResult: 'Exercise result', accuracyLine: 'Accuracy: {pct}%  ({correct} of {total})',
      passThreshold: 'At least 80% is required to pass', okBtn: 'OK', noExercises: 'No exercises available',
      notEnoughTestQuestions: 'Not enough questions for a test', noGameData: 'No data available for this game',
      scoreLabel: 'Score: {n}', endGameBtn: 'End game', dehetCorrect: '✅ Correct — {g}', dehetWrong: '❌ Correct answer: {g}',
      timeUp: "Time's up!", playAgain: 'Play again', backHomeBtn: 'Back to home',
      noSurviveQuestions: 'No questions available for this game', surviveCorrect: '✅ Correct!', surviveWrong: '❌ Wrong',
      surviveEndBtn: 'End game and see result', gameOver: 'Game over',
      ttsUnavailable: 'No Dutch voice is installed on this device; add an nl-NL voice in system settings.'
    },
    ar: {
      brand: 'Grammatica Spel',
      footer: 'Grammatica Spel — تعلّم قواعد اللغة الهولندية عبر الألعاب',
      themeToggle: 'تبديل المظهر', langToggle: 'تغيير اللغة',
      heroTitle: 'مرحبًا! حان وقت تمرين قواعد اللغة الهولندية 🇳🇱',
      heroSubtitle: 'اختر مستواك وتعلّم القواعد خطوة بخطوة.',
      statProgress: 'التقدّم الكلي', statXp: 'نقاط الخبرة', statStreak: 'أيام متتالية',
      sectionLevels: '📚 اختيار المستوى', sectionGames: '🎮 الألعاب',
      gameDehetTitle: 'سباق de/het', gameDehetDesc: 'اختر أداة التعريف الصحيحة خلال ٤٥ ثانية',
      gameSurviveTitle: 'ابقَ على قيد الحياة!', gameSurviveDesc: 'بثلاث محاولات، إلى أين يمكنك الوصول؟',
      bestScore: 'أفضل نتيجة: {n}', backHome: '‹ العودة للرئيسية', levelHeading: 'المستوى {level}',
      levelLabelA1: 'مبتدئ ١', levelLabelA2: 'مبتدئ ٢', levelLabelB1: 'متوسط ١', levelLabelB2: 'متوسط ٢', levelLabelC1: 'متقدّم',
      topicsCompleted: 'اكتمل {done} من {total} موضوعًا ({pct}٪)', noTopics: 'لا توجد مواضيع متاحة',
      levelTestBtn: '📝 اختبار المستوى {level}', topicNotFound: 'الموضوع غير موجود', backToLevel: '‹ العودة إلى المستوى {level}',
      startExercises: '🚀 ابدأ التمارين ({n})', fillPlaceholder: 'اكتب الإجابة بالهولندية...',
      checkAnswer: 'تحقق من الإجابة', pickWordsHint: 'اختر الكلمات من الأسفل', checkSentence: 'تحقق من الجملة',
      correctFeedback: '✅ إجابة صحيحة!', wrongFeedback: '❌ ليست دقيقة', continueBtn: '← متابعة', comboLabel: '🔥 تتابع: {n}',
      placeAllWords: 'رتّب كل الكلمات بالترتيب', testPassed: 'لقد نجحت!', testFailed: 'لم تنجح بعد',
      exerciseResult: 'نتيجة التمرين', accuracyLine: 'الدقة: {pct}٪  ({correct} من {total})',
      passThreshold: 'يلزم ٨٠٪ على الأقل للنجاح', okBtn: 'حسنًا', noExercises: 'لا توجد تمارين متاحة',
      notEnoughTestQuestions: 'لا توجد أسئلة كافية للاختبار', noGameData: 'لا توجد بيانات لهذه اللعبة',
      scoreLabel: 'النتيجة: {n}', endGameBtn: 'إنهاء اللعبة', dehetCorrect: '✅ صحيح — {g}', dehetWrong: '❌ الإجابة الصحيحة: {g}',
      timeUp: 'انتهى الوقت!', playAgain: 'العب مرة أخرى', backHomeBtn: 'العودة للرئيسية',
      noSurviveQuestions: 'لا توجد أسئلة لهذه اللعبة', surviveCorrect: '✅ صحيح!', surviveWrong: '❌ خطأ',
      surviveEndBtn: 'إنهاء اللعبة ومشاهدة النتيجة', gameOver: 'انتهت اللعبة',
      ttsUnavailable: 'لا يوجد صوت هولندي مثبّت على هذا الجهاز؛ أضف صوت nl-NL من إعدادات النظام.'
    },
    tr: {
      brand: 'Grammatica Spel',
      footer: 'Grammatica Spel — oyunlarla Hollandaca dil bilgisi öğren',
      themeToggle: 'Temayı değiştir', langToggle: 'Dili değiştir',
      heroTitle: 'Merhaba! Hollandaca dil bilgisi pratiği zamanı 🇳🇱',
      heroSubtitle: 'Seviyeni seç ve dil bilgisini adım adım öğren.',
      statProgress: 'Genel ilerleme', statXp: 'XP puanı', statStreak: 'Günlük seri',
      sectionLevels: '📚 Seviye seç', sectionGames: '🎮 Oyunlar',
      gameDehetTitle: 'de/het Sprinti', gameDehetDesc: '45 saniyede doğru tanım edatını seç',
      gameSurviveTitle: 'Hayatta Kal!', gameSurviveDesc: '3 canla ne kadar ileri gidebilirsin?',
      bestScore: 'En iyi skor: {n}', backHome: '‹ Ana sayfaya dön', levelHeading: '{level} Seviyesi',
      levelLabelA1: 'Başlangıç 1', levelLabelA2: 'Başlangıç 2', levelLabelB1: 'Orta 1', levelLabelB2: 'Orta 2', levelLabelC1: 'İleri',
      topicsCompleted: '{total} konudan {done} tanesi tamamlandı (%{pct})', noTopics: 'Konu bulunamadı',
      levelTestBtn: '📝 {level} Seviye Testi', topicNotFound: 'Konu bulunamadı', backToLevel: '‹ {level} seviyesine dön',
      startExercises: '🚀 Alıştırmalara başla ({n})', fillPlaceholder: 'Cevabı Hollandaca yaz...',
      checkAnswer: 'Cevabı kontrol et', pickWordsHint: 'Kelimeleri aşağıdan seç', checkSentence: 'Cümleyi kontrol et',
      correctFeedback: '✅ Doğru!', wrongFeedback: '❌ Tam değil', continueBtn: 'Devam →', comboLabel: '🔥 Kombo: {n}',
      placeAllWords: 'Tüm kelimeleri sırayla yerleştir', testPassed: 'Geçtin!', testFailed: 'Henüz geçemedin',
      exerciseResult: 'Alıştırma sonucu', accuracyLine: 'Doğruluk: %{pct}  ({correct}/{total})',
      passThreshold: 'Geçmek için en az %80 gerekir', okBtn: 'Tamam', noExercises: 'Alıştırma bulunamadı',
      notEnoughTestQuestions: 'Test için yeterli soru yok', noGameData: 'Bu oyun için veri yok',
      scoreLabel: 'Skor: {n}', endGameBtn: 'Oyunu bitir', dehetCorrect: '✅ Doğru — {g}', dehetWrong: '❌ Doğru cevap: {g}',
      timeUp: 'Süre doldu!', playAgain: 'Tekrar oyna', backHomeBtn: 'Ana sayfaya dön',
      noSurviveQuestions: 'Bu oyun için soru yok', surviveCorrect: '✅ Doğru!', surviveWrong: '❌ Yanlış',
      surviveEndBtn: 'Oyunu bitir ve sonucu gör', gameOver: 'Oyun bitti',
      ttsUnavailable: 'Bu cihazda Hollandaca ses yüklü değil; sistem ayarlarından bir nl-NL sesi ekleyin.'
    }
  };

  function curLang() { return (STATE && STATE.lang) || 'fa'; }
  function isRtl(lang) { return !!RTL_LANGS[lang || curLang()]; }
  function tt(key, vars) {
    var dict = I18N_UI[curLang()] || I18N_UI.fa;
    var tpl = dict[key] != null ? dict[key] : (I18N_UI.fa[key] != null ? I18N_UI.fa[key] : key);
    if (!vars) return tpl;
    return tpl.replace(/\{(\w+)\}/g, function (_m, k) { return vars[k] != null ? vars[k] : ''; });
  }
  var LEVEL_LABEL = { A1: 1, A2: 1, B1: 1, B2: 1, C1: 1 };
  function levelLabel(lv) { return tt('levelLabel' + lv); }

  /* ---------------- content translation overlay ---------------- */
  function trTopic(topic) {
    var L = curLang();
    if (L === 'fa' || !topic) return topic;
    var pack = window.GRAMMATICA_I18N && window.GRAMMATICA_I18N[L] && window.GRAMMATICA_I18N[L].topics;
    var ov = pack && pack[topic.id];
    if (!ov) return topic;
    var merged = Object.assign({}, topic);
    if (ov.title) merged.title = ov.title;
    if (ov.sum) merged.sum = ov.sum;
    if (ov.blocks && topic.blocks) {
      merged.blocks = topic.blocks.map(function (b, i) {
        var ob = ov.blocks[i];
        if (!ob) return b;
        var nb = Object.assign({}, b);
        if (ob.h != null) nb.h = ob.h;
        if (ob.p != null) nb.p = ob.p;
        if (ob.list) nb.list = ob.list;
        if (ob.tip != null) nb.tip = ob.tip;
        if (b.ex && ob.ex) {
          nb.ex = b.ex.map(function (e, ei) {
            return ob.ex[ei] != null ? Object.assign({}, e, { fa: ob.ex[ei] }) : e;
          });
        }
        return nb;
      });
    }
    if (ov.ex && topic.ex) {
      merged.ex = topic.ex.map(function (e, i) {
        var oe = ov.ex[i];
        if (!oe) return e;
        var ne = Object.assign({}, e);
        if (oe.q != null) ne.q = oe.q;
        if (oe.options) ne.options = oe.options;
        if (oe.exp != null) ne.exp = oe.exp;
        return ne;
      });
    }
    return merged;
  }

  function dataFor(level) {
    var d = window.GRAMMATICA_DATA || {};
    return (d[level] || []).map(trTopic);
  }
  function allTopics() {
    var out = [];
    for (var i = 0; i < LEVELS.length; i++) out = out.concat(dataFor(LEVELS[i]));
    return out;
  }
  function findTopic(id) {
    var all = allTopics();
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }
  function allMcExercises() {
    var out = [];
    allTopics().forEach(function (t) {
      (t.ex || []).forEach(function (e) {
        if (e.type === 'mc') out.push(e);
      });
    });
    return out;
  }
  function allNouns() {
    return (window.GRAMMATICA_DATA && window.GRAMMATICA_DATA.NOUNS) || [];
  }

  /* ---------------- formatter ---------------- */
  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  var LATIN_RUN = /[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ'’.\-]*(?:[  ][A-Za-zÀ-ÖØ-öø-ÿ'’.\-]+)*/g;
  function wrapLatin(text) {
    return text.replace(LATIN_RUN, function (m) {
      if (!m.trim()) return m;
      return '<span class="nl">' + m + '</span>';
    });
  }
  function fmt(raw) {
    if (!raw) return '';
    var s = escapeHtml(String(raw));
    var parts = [];
    var lastIndex = 0;
    var re = /\[\[([^\]]+)\]\]/g;
    var m;
    while ((m = re.exec(s))) {
      parts.push({ t: 'text', v: s.slice(lastIndex, m.index) });
      parts.push({ t: 'nl', v: m[1] });
      lastIndex = re.lastIndex;
    }
    parts.push({ t: 'text', v: s.slice(lastIndex) });
    return parts.map(function (p) {
      if (p.t === 'nl') return '<span class="nl">' + p.v + '</span>';
      var v = p.v.replace(/\*\*([^*]+)\*\*/g, function (_mm, inner) {
        return '<strong>' + wrapLatin(inner) + '</strong>';
      });
      var segs = v.split(/(<strong>[\s\S]*?<\/strong>)/g);
      v = segs.map(function (seg) { return seg.indexOf('<strong>') === 0 ? seg : wrapLatin(seg); }).join('');
      return v;
    }).join('');
  }
  function fmtNl(raw) {
    return '<span class="nl">' + escapeHtml(raw) + '</span>';
  }
  function ltrNum(raw) {
    return '<span dir="ltr" style="unicode-bidi:isolate;display:inline-block">' + raw + '</span>';
  }

  /* ---------------- state ---------------- */
  var STORAGE_KEY = 'grammatica.v1';
  var memState = null;
  function defaultState() {
    return {
      xp: 0,
      streak: { count: 0, last: null },
      topics: {},
      tests: {},
      games: { dehet: { best: 0 }, survive: { best: 0 } },
      theme: null,
      lang: 'fa'
    };
  }
  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        return Object.assign(defaultState(), parsed);
      }
    } catch (e) { /* fall through */ }
    return memState || defaultState();
  }
  var STATE = loadState();
  function saveState() {
    memState = STATE;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE)); } catch (e) { /* ignore */ }
  }
  function todayStr() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function bumpStreak() {
    var today = todayStr();
    var st = STATE.streak;
    if (st.last === today) return;
    if (st.last) {
      var prev = new Date(st.last + 'T00:00:00');
      var now = new Date(today + 'T00:00:00');
      var diffDays = Math.round((now - prev) / 86400000);
      st.count = diffDays === 1 ? st.count + 1 : 1;
    } else {
      st.count = 1;
    }
    st.last = today;
    saveState();
  }

  /* ---------------- theme ---------------- */
  function applyTheme() {
    var html = document.documentElement;
    if (STATE.theme === 'light') html.setAttribute('data-theme', 'light');
    else if (STATE.theme === 'dark') html.setAttribute('data-theme', 'dark');
    else html.removeAttribute('data-theme');
  }
  function cycleTheme() {
    STATE.theme = STATE.theme === null ? 'light' : STATE.theme === 'light' ? 'dark' : null;
    saveState();
    applyTheme();
    render();
  }
  function themeIcon() {
    return STATE.theme === 'light' ? '☀️' : STATE.theme === 'dark' ? '🌙' : '🖥️';
  }

  /* ---------------- language ---------------- */
  function applyLang() {
    var html = document.documentElement;
    var lang = curLang();
    html.setAttribute('lang', lang);
    html.setAttribute('dir', isRtl(lang) ? 'rtl' : 'ltr');
  }
  function cycleLang() {
    var idx = UI_LANGS.indexOf(curLang());
    STATE.lang = UI_LANGS[(idx + 1) % UI_LANGS.length];
    saveState();
    applyLang();
    render();
  }

  /* ---------------- tts ---------------- */
  function pickDutchVoice(voices) {
    var best = null, bestScore = -1;
    for (var i = 0; i < voices.length; i++) {
      var v = voices[i];
      var lang = (v.lang || '').toLowerCase();
      if (lang.indexOf('nl') !== 0) continue;
      var score = 1;
      if (lang === 'nl-nl') score += 10;
      if (!v.localService) score += 8;
      if (/google|neural|wavenet|premium|enhanced|natural/i.test(v.name || '')) score += 5;
      if (score > bestScore) { bestScore = score; best = v; }
    }
    return best;
  }
  function speakNow(text) {
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'nl-NL';
    var nlVoice = pickDutchVoice(window.speechSynthesis.getVoices() || []);
    if (nlVoice) u.voice = nlVoice;
    else toast(tt('ttsUnavailable'));
    u.rate = 0.92;
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  }
  function speak(text) {
    try {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      var existing = window.speechSynthesis.getVoices() || [];
      if (existing.length === 0) {
        window.speechSynthesis.onvoiceschanged = function () { speakNow(text); };
      } else {
        speakNow(text);
      }
    } catch (e) { /* ignore */ }
  }

  /* ---------------- toast ---------------- */
  var toastTimer = null;
  function toast(msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2200);
  }

  /* ---------------- utils ---------------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function normAnswer(s) {
    return String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }
  function escAttr(s) { return escapeHtml(s).replace(/"/g, '&quot;'); }

  var activeTimer = null;
  function clearActiveTimer() {
    if (activeTimer) { clearInterval(activeTimer); activeTimer = null; }
  }

  /* ---------------- router ---------------- */
  var app = document.getElementById('app');

  function navigate(hash) { location.hash = hash; }

  function render() {
    clearActiveTimer();
    var hash = location.hash.replace(/^#/, '') || 'home';
    var m;
    if (hash === 'home') return renderHome();
    if ((m = /^l-(a1|a2|b1|b2|c1)$/.exec(hash))) return renderLevel(m[1].toUpperCase());
    if ((m = /^t-(.+)$/.exec(hash))) return renderTopic(m[1]);
    if ((m = /^p-(.+)$/.exec(hash))) return renderPractice(m[1]);
    if ((m = /^test-(a1|a2|b1|b2|c1)$/.exec(hash))) return renderLevelTest(m[1].toUpperCase());
    if (hash === 'game-dehet') return renderGameDeHet();
    if (hash === 'game-survive') return renderGameSurvive();
    return renderHome();
  }
  window.addEventListener('hashchange', render);

  /* ---------------- progress helpers ---------------- */
  function topicStars(id) {
    var t = STATE.topics[id];
    return t ? (t.stars || 0) : 0;
  }
  function levelCompletion(level) {
    var topics = dataFor(level);
    if (!topics.length) return { done: 0, total: 0, pct: 0 };
    var done = topics.filter(function (t) { return topicStars(t.id) >= 2; }).length;
    return { done: done, total: topics.length, pct: Math.round((done / topics.length) * 100) };
  }
  function overallProgress() {
    var all = allTopics();
    var totalStars = all.length * 3;
    var earned = 0;
    all.forEach(function (t) { earned += topicStars(t.id); });
    return { pct: totalStars ? Math.round((earned / totalStars) * 100) : 0, earned: earned, totalStars: totalStars };
  }
  function starsHtml(n, max) {
    max = max || 3;
    var out = '';
    for (var i = 0; i < max; i++) out += '<span class="' + (i < n ? 'on' : '') + '">★</span>';
    return ltrNum(out);
  }

  /* ---------------- shell helpers ---------------- */
  function topbarHtml() {
    return (
      '<div class="topbar"><div class="topbar-inner">' +
      '<button class="brand" data-act="go" data-arg="home"><span class="brand-tile"></span>' + escapeHtml(tt('brand')) + '</button>' +
      '<div class="spacer"></div>' +
      '<div class="streak-chip">🔥 ' + ltrNum(STATE.streak.count || 0) + '</div>' +
      '<button class="icon-btn" data-act="lang" title="' + escAttr(tt('langToggle')) + '">' + ltrNum(curLang().toUpperCase()) + '</button>' +
      '<button class="icon-btn" data-act="theme" title="' + escAttr(tt('themeToggle')) + '">' + themeIcon() + '</button>' +
      '</div></div>'
    );
  }
  function footerHtml() {
    return '<footer class="app-footer">' + escapeHtml(tt('footer')) + '</footer>';
  }
  function setApp(html) {
    app.innerHTML = topbarHtml() + html + footerHtml() + '<div class="toast" id="toast"></div>';
    window.scrollTo(0, 0);
  }

  /* ---------------- HOME ---------------- */
  function renderHome() {
    var prog = overallProgress();
    var levelCards = LEVELS.map(function (lv) {
      var c = levelCompletion(lv);
      return (
        '<div class="level-card" data-act="go" data-arg="l-' + lv.toLowerCase() + '">' +
        '<b>' + lv + '</b>' +
        '<div class="mini-bar"><i style="width:' + c.pct + '%"></i></div>' +
        '<small style="color:var(--text-muted);font-size:.72rem">' + ltrNum(c.done + '/' + c.total) + '</small>' +
        '</div>'
      );
    }).join('');

    var html =
      '<div class="hero"><h1>' + escapeHtml(tt('heroTitle')) + '</h1>' +
      '<p>' + escapeHtml(tt('heroSubtitle')) + '</p>' +
      '<div class="hero-progress"><i style="width:' + prog.pct + '%"></i></div>' +
      '<div class="hero-stats">' +
      '<div><b>' + ltrNum(prog.pct + '%') + '</b>' + escapeHtml(tt('statProgress')) + '</div>' +
      '<div><b>' + ltrNum(STATE.xp || 0) + '</b>' + escapeHtml(tt('statXp')) + '</div>' +
      '<div><b>' + ltrNum(STATE.streak.count || 0) + '</b>' + escapeHtml(tt('statStreak')) + '</div>' +
      '</div></div>' +
      '<div class="section">' +
      '<div class="section-title">' + escapeHtml(tt('sectionLevels')) + '</div>' +
      '<div class="level-row">' + levelCards + '</div>' +
      '<div class="section-title">' + escapeHtml(tt('sectionGames')) + '</div>' +
      '<div class="game-grid">' +
      '<div class="game-card" data-act="go" data-arg="game-dehet">' +
      '<div><div class="g-title">' + escapeHtml(tt('gameDehetTitle')) + '</div><div class="g-desc">' + escapeHtml(tt('gameDehetDesc')) + '</div></div>' +
      '<div class="g-best">' + escapeHtml(tt('bestScore', { n: STATE.games.dehet.best || 0 })) + '</div></div>' +
      '<div class="game-card" data-act="go" data-arg="game-survive">' +
      '<div><div class="g-title">' + escapeHtml(tt('gameSurviveTitle')) + '</div><div class="g-desc">' + escapeHtml(tt('gameSurviveDesc')) + '</div></div>' +
      '<div class="g-best">' + escapeHtml(tt('bestScore', { n: STATE.games.survive.best || 0 })) + '</div></div>' +
      '</div>' +
      '</div>';
    setApp(html);
  }

  /* ---------------- LEVEL PAGE ---------------- */
  function renderLevel(level) {
    var topics = dataFor(level);
    var c = levelCompletion(level);
    var test = STATE.tests[level];
    var nodes = topics.map(function (t, idx) {
      var st = topicStars(t.id);
      var cls = st >= 2 ? 'done' : (idx === 0 || topicStars((topics[idx - 1] || {}).id) >= 1 ? 'current' : '');
      return (
        '<div class="path-node-wrap">' +
        (idx > 0 ? '<div class="path-connector"></div>' : '') +
        '<div class="path-node ' + cls + '" data-act="go" data-arg="t-' + t.id + '">' +
        '<div class="node-dot">' + ltrNum(idx + 1) + '</div>' +
        '<div class="node-info"><div class="t">' + fmt(t.title) + '</div><div class="s">' + fmtNl(t.nl) + '</div></div>' +
        '<div class="node-stars">' + starsHtml(st) + '</div>' +
        '</div></div>'
      );
    }).join('');

    var html =
      '<div class="topic-header">' +
      '<div class="crumb" data-act="go" data-arg="home">' + escapeHtml(tt('backHome')) + '</div>' +
      '<h1>' + escapeHtml(tt('levelHeading', { level: level })) + ' <small style="color:var(--text-muted);font-size:.8rem">(' + escapeHtml(levelLabel(level)) + ')</small></h1>' +
      '<div class="nlname">' + escapeHtml(tt('topicsCompleted', { done: c.done, total: c.total, pct: c.pct })) + '</div>' +
      '</div>' +
      '<div class="section">' +
      '<div class="path">' + (nodes || '<div class="empty-state">' + escapeHtml(tt('noTopics')) + '</div>') + '</div>' +
      '<button class="btn gold block" data-act="go" data-arg="test-' + level.toLowerCase() + '">' +
      escapeHtml(tt('levelTestBtn', { level: level })) + (test && test.passed ? ' ✓' : '') + '</button>' +
      '</div>';
    setApp(html);
  }

  /* ---------------- TOPIC PAGE ---------------- */
  function renderBlock(b) {
    var out = '<div class="block-card">';
    if (b.h) out += '<h3>' + fmt(b.h) + '</h3>';
    if (b.p) out += '<p>' + fmt(b.p) + '</p>';
    if (b.table) {
      out += '<div style="overflow-x:auto"><table class="gtable"><thead><tr>' +
        b.table.head.map(function (h) { return '<th>' + fmt(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        b.table.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + fmt(c) + '</td>'; }).join('') + '</tr>'; }).join('') +
        '</tbody></table></div>';
    }
    if (b.list) {
      out += '<ul>' + b.list.map(function (li) { return '<li>' + fmt(li) + '</li>'; }).join('') + '</ul>';
    }
    if (b.ex) {
      out += b.ex.map(function (e) {
        return '<div class="ex-row"><button class="tts-btn" data-act="speak" data-arg="' + escAttr(e.nl) + '">🔊</button>' +
          '<div class="ex-text"><div class="nl">' + escapeHtml(e.nl) + '</div><div class="ex-fa">' + fmt(e.fa) + '</div></div></div>';
      }).join('');
    }
    if (b.tip) {
      out += '<div class="tip-box"><span>💡</span><div>' + fmt(b.tip) + '</div></div>';
    }
    out += '</div>';
    return out;
  }

  function renderTopic(id) {
    var t = findTopic(id);
    if (!t) { setApp('<div class="empty-state">' + escapeHtml(t2('topicNotFound')) + '</div>'); return; }
    var html =
      '<div class="topic-header">' +
      '<div class="crumb" data-act="go" data-arg="l-' + t.level.toLowerCase() + '">' + escapeHtml(tt('backToLevel', { level: t.level })) + '</div>' +
      '<h1>' + fmt(t.title) + '</h1>' +
      '<div class="nlname">' + fmtNl(t.nl) + '</div>' +
      '</div>' +
      '<div class="section" style="padding-top:4px">' +
      '<div class="block-card" style="background:var(--primary-light);border-color:transparent">' + fmt(t.sum) + '</div>' +
      (t.blocks || []).map(renderBlock).join('') +
      '</div>' +
      '<div class="sticky-cta"><button class="btn block" data-act="go" data-arg="p-' + t.id + '">' + escapeHtml(tt('startExercises', { n: (t.ex || []).length })) + '</button></div>';
    setApp(html);
  }

  /* ---------------- SESSION ENGINE ---------------- */
  var SESSION = null;

  function buildQueue(exercises) {
    return shuffle(exercises.map(function (ex, i) { return { ex: ex, firstTry: true, origIndex: i }; }));
  }

  function startSession(opts) {
    SESSION = {
      title: opts.title,
      backHash: opts.backHash,
      retry: opts.retry !== false,
      total: opts.exercises.length,
      queue: buildQueue(opts.exercises),
      solved: 0,
      correctFirstTry: 0,
      combo: 0,
      xp: 0,
      current: null,
      answered: false,
      orderState: null,
      onComplete: opts.onComplete
    };
    nextQuestion();
  }

  function nextQuestion() {
    SESSION.answered = false;
    SESSION.orderState = null;
    if (SESSION.queue.length === 0) { finishSession(); return; }
    SESSION.current = SESSION.queue[0];
    if (SESSION.current.ex.type === 'order') {
      SESSION.orderState = { order: shuffle(SESSION.current.ex.tokens.map(function (_t, i) { return i; })), built: [] };
    }
    renderSessionView();
  }

  function finishSession() {
    var acc = SESSION.total ? SESSION.correctFirstTry / SESSION.total : 0;
    var stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : acc >= 0.5 ? 1 : 0;
    bumpStreak();
    STATE.xp = (STATE.xp || 0) + SESSION.xp;
    var result = { accuracy: acc, stars: stars, xp: SESSION.xp, total: SESSION.total, correct: SESSION.correctFirstTry };
    if (SESSION.onComplete) SESSION.onComplete(result);
    saveState();
    renderSummary(result);
  }

  function registerAnswer(isCorrect) {
    var item = SESSION.current;
    SESSION.answered = true;
    if (isCorrect) {
      if (item.firstTry) {
        SESSION.correctFirstTry++;
        SESSION.combo++;
        SESSION.xp += 10 + Math.min(SESSION.combo, 10) * 2;
      } else {
        SESSION.combo = 0;
        SESSION.xp += 3;
      }
      SESSION.queue.shift();
      SESSION.solved++;
    } else {
      SESSION.combo = 0;
      if (SESSION.retry) {
        item.firstTry = false;
        SESSION.queue.shift();
        SESSION.queue.push(item);
      } else {
        SESSION.queue.shift();
        SESSION.solved++;
      }
    }
    renderSessionView(isCorrect);
  }

  function renderSessionView(lastCorrect) {
    clearActiveTimer();
    if (!SESSION.current) return;
    var ex = SESSION.current.ex;
    var pct = SESSION.total ? Math.round((SESSION.solved / SESSION.total) * 100) : 0;
    var body = '';
    if (ex.type === 'mc') {
      body = '<div class="q-text">' + fmt(ex.q) + '</div><div class="options">' +
        ex.options.map(function (opt, i) {
          var cls = '';
          if (SESSION.answered) {
            if (i === ex.answer) cls = 'correct';
            else cls = 'dim';
          }
          return '<button class="opt-btn ' + cls + '" ' + (SESSION.answered ? 'disabled' : '') + ' data-act="mcPick" data-arg="' + i + '">' + fmt(opt) + '</button>';
        }).join('') + '</div>';
    } else if (ex.type === 'fill') {
      body = '<div class="q-text">' + fmt(ex.q) + '</div>' +
        '<input class="fill-input" id="fillInput" ' + (SESSION.answered ? 'disabled' : '') + ' placeholder="' + escAttr(tt('fillPlaceholder')) + '" autocomplete="off" autocapitalize="off" spellcheck="false" />' +
        (SESSION.answered ? '' : '<div style="margin-top:12px"><button class="btn secondary" data-act="fillCheck">' + escapeHtml(tt('checkAnswer')) + '</button></div>');
    } else if (ex.type === 'order') {
      var osBuilt = SESSION.orderState.built.map(function (idx, pos) {
        return '<button class="token-btn" data-act="ordUnpick" data-arg="' + pos + '">' + escapeHtml(ex.tokens[idx]) + '</button>';
      }).join('');
      var osPool = SESSION.orderState.order.filter(function (idx) { return SESSION.orderState.built.indexOf(idx) === -1; })
        .map(function (idx) { return '<button class="token-btn" data-act="ordPick" data-arg="' + idx + '">' + escapeHtml(ex.tokens[idx]) + '</button>'; }).join('');
      body = '<div class="q-text">' + fmt(ex.q) + '</div>' +
        '<div class="order-tokens">' + (osBuilt || '<span style="color:var(--text-muted);font-size:.85rem">' + escapeHtml(tt('pickWordsHint')) + '</span>') + '</div>' +
        '<div class="order-pool">' + osPool + '</div>' +
        (SESSION.answered ? '' : '<div style="margin-top:12px"><button class="btn secondary" data-act="ordCheck">' + escapeHtml(tt('checkSentence')) + '</button></div>');
    }

    var feedback = '';
    if (SESSION.answered) {
      feedback = '<div class="feedback-panel show ' + (lastCorrect ? 'ok' : 'bad') + '">' +
        '<div class="fb-title">' + (lastCorrect ? escapeHtml(tt('correctFeedback')) : escapeHtml(tt('wrongFeedback'))) + '</div>' +
        '<div>' + fmt(ex.exp || '') + '</div></div>' +
        '<div class="session-actions"><button class="btn block" data-act="sessNext">' + escapeHtml(tt('continueBtn')) + '</button></div>';
    }

    var html =
      '<div class="session-head"><div class="wrap">' +
      '<div class="progress-bar"><i style="width:' + pct + '%"></i></div>' +
      '<div class="session-meta"><span>' + ltrNum(SESSION.solved + ' / ' + SESSION.total) + '</span><span>' + escapeHtml(tt('comboLabel', { n: SESSION.combo })) + '</span></div>' +
      '</div></div>' +
      '<div class="q-card" id="qCard">' + body + '</div>' +
      feedback;

    app.innerHTML = topbarHtml() + html + footerHtml() + '<div class="toast" id="toast"></div>';
  }

  function checkFillAnswer() {
    if (SESSION.answered) return;
    var ex = SESSION.current.ex;
    var input = document.getElementById('fillInput');
    var val = normAnswer(input.value);
    var ok = ex.answers.some(function (a) { return normAnswer(a) === val; });
    input.classList.add(ok ? 'correct' : 'wrong');
    if (!ok) input.value += '  ✗';
    registerAnswer(ok);
  }

  function checkOrderAnswer() {
    if (SESSION.answered) return;
    var ex = SESSION.current.ex;
    var built = SESSION.orderState.built;
    if (built.length !== ex.tokens.length) { toast(tt('placeAllWords')); return; }
    var builtWords = built.map(function (idx) { return ex.tokens[idx]; });
    var ok = ex.answers.some(function (ans) {
      if (ans.length !== builtWords.length) return false;
      for (var i = 0; i < ans.length; i++) if (ans[i] !== builtWords[i]) return false;
      return true;
    });
    registerAnswer(ok);
  }

  /* ---------------- SUMMARY ---------------- */
  function renderSummary(result) {
    var isTest = typeof result.passed === 'boolean';
    var html =
      '<div class="summary-card">' +
      '<div style="font-size:2.4rem">' + (isTest ? (result.passed ? '🎉' : '💪') : (result.stars >= 2 ? '🎉' : '💪')) + '</div>' +
      '<h2 style="margin:10px 0 0">' + escapeHtml(isTest ? (result.passed ? tt('testPassed') : tt('testFailed')) : tt('exerciseResult')) + '</h2>' +
      (!isTest ? '<div class="summary-stars">' + starsHtml(result.stars) + '</div>' : '') +
      '<div>' + escapeHtml(tt('accuracyLine', { pct: Math.round(result.accuracy * 100), correct: result.correct, total: result.total })) + '</div>' +
      (isTest ? '<div style="color:var(--text-muted);font-size:.85rem;margin-top:4px">' + escapeHtml(tt('passThreshold')) + '</div>' : '') +
      '<div class="summary-xp">+' + ltrNum(result.xp) + ' XP</div>' +
      '<div style="margin-top:22px;display:flex;flex-direction:column;gap:10px">' +
      '<button class="btn block" data-act="sessDone">' + escapeHtml(tt('okBtn')) + '</button>' +
      '</div></div>';
    app.innerHTML = topbarHtml() + html + footerHtml() + '<div class="toast" id="toast"></div>';
  }

  /* ---------------- PRACTICE / LEVEL TEST entry points ---------------- */
  function renderPractice(id) {
    var t = findTopic(id);
    if (!t || !t.ex || !t.ex.length) { setApp('<div class="empty-state">' + escapeHtml(tt('noExercises')) + '</div>'); return; }
    startSession({
      exercises: t.ex,
      retry: true,
      backHash: 'l-' + t.level.toLowerCase(),
      onComplete: function (result) {
        var prev = STATE.topics[t.id] || { stars: 0, attempts: 0 };
        STATE.topics[t.id] = {
          stars: Math.max(prev.stars || 0, result.stars),
          accuracy: result.accuracy,
          attempts: (prev.attempts || 0) + 1,
          completedAt: Date.now()
        };
        saveState();
      }
    });
    SESSION.__afterDone = function () { navigate('l-' + t.level.toLowerCase()); };
  }

  function renderLevelTest(level) {
    var topics = dataFor(level);
    var pool = [];
    topics.forEach(function (t) { (t.ex || []).forEach(function (e) { pool.push(e); }); });
    if (pool.length < 4) { setApp('<div class="empty-state">' + escapeHtml(tt('notEnoughTestQuestions')) + '</div>'); return; }
    var picked = shuffle(pool).slice(0, Math.min(12, pool.length));
    startSession({
      exercises: picked,
      retry: false,
      backHash: 'l-' + level.toLowerCase(),
      onComplete: function (result) {
        var passed = result.accuracy >= 0.8;
        var prev = STATE.tests[level] || { bestPct: 0, attempts: 0, passed: false };
        STATE.tests[level] = {
          passed: prev.passed || passed,
          bestPct: Math.max(prev.bestPct || 0, Math.round(result.accuracy * 100)),
          attempts: (prev.attempts || 0) + 1
        };
        result.passed = passed;
        saveState();
      }
    });
    SESSION.__afterDone = function () { navigate('l-' + level.toLowerCase()); };
  }

  /* ---------------- GAME: de/het sprint ---------------- */
  var GAME = null;
  function renderGameDeHet() {
    var nouns = allNouns();
    if (!nouns.length) { setApp('<div class="empty-state">' + escapeHtml(tt('noGameData')) + '</div>'); return; }
    GAME = { type: 'dehet', time: 45, score: 0, wrong: 0, pool: shuffle(nouns), idx: 0, current: null };
    nextDeHetWord();
    renderGameDeHetView();
    activeTimer = setInterval(function () {
      GAME.time--;
      if (GAME.time <= 0) { clearActiveTimer(); finishDeHet(); return; }
      var tEl = document.getElementById('gTimer');
      if (tEl) tEl.textContent = GAME.time + 's';
    }, 1000);
  }
  function nextDeHetWord() {
    if (GAME.idx >= GAME.pool.length) { GAME.pool = shuffle(allNouns()); GAME.idx = 0; }
    GAME.current = GAME.pool[GAME.idx++];
  }
  function renderGameDeHetView() {
    var html =
      '<div class="game-stage">' +
      '<div class="game-timer" id="gTimer">' + ltrNum(GAME.time + 's') + '</div>' +
      '<div style="margin-top:6px;color:var(--text-muted)">' + escapeHtml(tt('scoreLabel', { n: GAME.score })) + '</div>' +
      '<div class="game-word" id="gWord">' + escapeHtml(GAME.current.nl) + '</div>' +
      '<div class="game-btns">' +
      '<button class="btn secondary" style="min-width:110px" data-act="dehetPick" data-arg="de">de</button>' +
      '<button class="btn secondary" style="min-width:110px" data-act="dehetPick" data-arg="het">het</button>' +
      '</div>' +
      '<div style="margin-top:30px"><button class="btn ghost" data-act="go" data-arg="home">' + escapeHtml(tt('endGameBtn')) + '</button></div>' +
      '</div>';
    app.innerHTML = topbarHtml() + html + footerHtml() + '<div class="toast" id="toast"></div>';
  }
  function pickDeHet(choice) {
    if (!GAME) return;
    var ok = choice === GAME.current.gender;
    if (ok) GAME.score++; else GAME.wrong++;
    toast(ok ? tt('dehetCorrect', { g: GAME.current.gender }) : tt('dehetWrong', { g: GAME.current.gender }));
    nextDeHetWord();
    renderGameDeHetView();
  }
  function finishDeHet() {
    clearActiveTimer();
    var best = Math.max(STATE.games.dehet.best || 0, GAME.score);
    STATE.games.dehet.best = best;
    bumpStreak();
    saveState();
    var html =
      '<div class="summary-card"><div style="font-size:2.4rem">⏱️</div>' +
      '<h2>' + escapeHtml(tt('timeUp')) + '</h2>' +
      '<div style="font-size:1.4rem;font-weight:800;color:var(--primary);margin:8px 0">' + escapeHtml(tt('scoreLabel', { n: GAME.score })) + '</div>' +
      '<div style="color:var(--text-muted)">' + escapeHtml(tt('bestScore', { n: best })) + '</div>' +
      '<div style="margin-top:22px;display:flex;flex-direction:column;gap:10px">' +
      '<button class="btn block" data-act="go" data-arg="game-dehet">' + escapeHtml(tt('playAgain')) + '</button>' +
      '<button class="btn secondary block" data-act="go" data-arg="home">' + escapeHtml(tt('backHomeBtn')) + '</button>' +
      '</div></div>';
    app.innerHTML = topbarHtml() + html + footerHtml() + '<div class="toast" id="toast"></div>';
  }

  /* ---------------- GAME: Survive ---------------- */
  function renderGameSurvive() {
    var pool = allMcExercises();
    if (pool.length < 4) { setApp('<div class="empty-state">' + escapeHtml(tt('noSurviveQuestions')) + '</div>'); return; }
    GAME = { type: 'survive', lives: 3, score: 0, pool: shuffle(pool), idx: 0, current: null, answered: false };
    nextSurviveQ();
    renderGameSurviveView();
  }
  function nextSurviveQ() {
    if (GAME.idx >= GAME.pool.length) { GAME.pool = shuffle(allMcExercises()); GAME.idx = 0; }
    GAME.current = GAME.pool[GAME.idx++];
    GAME.answered = false;
  }
  function renderGameSurviveView() {
    var ex = GAME.current;
    var opts = ex.options.map(function (opt, i) {
      var cls = '';
      if (GAME.answered) cls = (i === ex.answer) ? 'correct' : 'dim';
      return '<button class="opt-btn ' + cls + '" ' + (GAME.answered ? 'disabled' : '') + ' data-act="survivePick" data-arg="' + i + '">' + fmt(opt) + '</button>';
    }).join('');
    var livesHtml = '';
    for (var i = 0; i < 3; i++) livesHtml += i < GAME.lives ? '❤️' : '🖤';
    var overNow = GAME.lives <= 0;
    var fb = GAME.answered ? ('<div class="feedback-panel show ' + (GAME.lastOk ? 'ok' : 'bad') + '"><div class="fb-title">' + (GAME.lastOk ? escapeHtml(tt('surviveCorrect')) : escapeHtml(tt('surviveWrong'))) + '</div><div>' + fmt(ex.exp || '') + '</div></div>' +
      '<div class="session-actions"><button class="btn block" data-act="surviveNext">' + escapeHtml(overNow ? tt('surviveEndBtn') : tt('continueBtn')) + '</button></div>') : '';
    var html =
      '<div class="game-stage" style="padding-bottom:0">' +
      '<div class="lives">' + ltrNum(livesHtml) + '</div>' +
      '<div style="color:var(--text-muted)">' + escapeHtml(tt('scoreLabel', { n: GAME.score })) + '</div>' +
      '</div>' +
      '<div class="q-card"><div class="q-text">' + fmt(ex.q) + '</div><div class="options">' + opts + '</div></div>' +
      fb;
    app.innerHTML = topbarHtml() + html + footerHtml() + '<div class="toast" id="toast"></div>';
  }
  function pickSurvive(i) {
    if (GAME.answered) return;
    GAME.answered = true;
    var ok = i === GAME.current.answer;
    GAME.lastOk = ok;
    if (ok) GAME.score++; else GAME.lives--;
    renderGameSurviveView();
    if (!ok && GAME.lives <= 0) {
      setTimeout(function () { }, 0);
    }
  }
  function surviveNext() {
    if (GAME.lives <= 0) { finishSurvive(); return; }
    nextSurviveQ();
    renderGameSurviveView();
  }
  function finishSurvive() {
    var best = Math.max(STATE.games.survive.best || 0, GAME.score);
    STATE.games.survive.best = best;
    bumpStreak();
    saveState();
    var html =
      '<div class="summary-card"><div style="font-size:2.4rem">💀</div>' +
      '<h2>' + escapeHtml(tt('gameOver')) + '</h2>' +
      '<div style="font-size:1.4rem;font-weight:800;color:var(--primary);margin:8px 0">' + escapeHtml(tt('scoreLabel', { n: GAME.score })) + '</div>' +
      '<div style="color:var(--text-muted)">' + escapeHtml(tt('bestScore', { n: best })) + '</div>' +
      '<div style="margin-top:22px;display:flex;flex-direction:column;gap:10px">' +
      '<button class="btn block" data-act="go" data-arg="game-survive">' + escapeHtml(tt('playAgain')) + '</button>' +
      '<button class="btn secondary block" data-act="go" data-arg="home">' + escapeHtml(tt('backHomeBtn')) + '</button>' +
      '</div></div>';
    app.innerHTML = topbarHtml() + html + footerHtml() + '<div class="toast" id="toast"></div>';
  }

  /* ---------------- delegated events ---------------- */
  app.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (!el) return;
    var act = el.getAttribute('data-act');
    var arg = el.getAttribute('data-arg');
    switch (act) {
      case 'go': navigate(arg); break;
      case 'theme': cycleTheme(); break;
      case 'lang': cycleLang(); break;
      case 'speak': speak(arg); break;
      case 'mcPick':
        if (!SESSION.answered) registerAnswer(parseInt(arg, 10) === SESSION.current.ex.answer);
        break;
      case 'fillCheck': checkFillAnswer(); break;
      case 'ordPick':
        if (!SESSION.answered) { SESSION.orderState.built.push(parseInt(arg, 10)); renderSessionView(); }
        break;
      case 'ordUnpick':
        if (!SESSION.answered) { SESSION.orderState.built.splice(parseInt(arg, 10), 1); renderSessionView(); }
        break;
      case 'ordCheck': checkOrderAnswer(); break;
      case 'sessNext': nextQuestion(); break;
      case 'sessDone':
        if (SESSION && SESSION.__afterDone) { var fn = SESSION.__afterDone; SESSION = null; fn(); }
        else navigate('home');
        break;
      case 'dehetPick': pickDeHet(arg); break;
      case 'survivePick': pickSurvive(parseInt(arg, 10)); break;
      case 'surviveNext': surviveNext(); break;
      default: break;
    }
  });
  app.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && e.target && e.target.id === 'fillInput') {
      e.preventDefault();
      checkFillAnswer();
    }
  });

  /* ---------------- test hook (read-only introspection for smoke tests) ---------------- */
  window.__APP_DEBUG__ = {
    getCurrentExercise: function () { return SESSION && SESSION.current ? SESSION.current.ex : null; },
    isAnswered: function () { return !!(SESSION && SESSION.answered); },
    getGame: function () { return GAME; },
    getState: function () { return STATE; },
    getSession: function () { return SESSION ? { total: SESSION.total, solved: SESSION.solved, queueLen: SESSION.queue.length, combo: SESSION.combo, currentQ: SESSION.current && SESSION.current.ex.q } : null; }
  };

  /* ---------------- boot ---------------- */
  applyTheme();
  applyLang();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }
  render();
})();
