#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

const css = read('src/styles.css');
const appJs = read('src/app.js');
const dataFiles = [
  'data/a1.js', 'data/a2.js', 'data/b1.js', 'data/c1.js', 'data/b2.js', 'data/nouns.js',
  'data/i18n/en.js', 'data/i18n/ar.js', 'data/i18n/tr.js'
];
const dataJs = dataFiles.map(read).join('\n');

const html = `<!doctype html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<meta name="description" content="گرامر اسپل: یادگیری بازی‌محور گرامر زبان هلندی برای فارسی‌زبانان، از سطح A1 تا C1" />
<meta name="color-scheme" content="light dark" />
<title>گرامر اسپل | یادگیری گرامر هلندی</title>
<link rel="icon" href="data:,">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&display=swap" rel="stylesheet">
<style>
${css}
</style>
</head>
<body>
<div id="app"><div class="empty-state">در حال بارگذاری...</div></div>
<script>
${dataJs}
${appJs}
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'index.html'), html, 'utf8');
console.log('Built index.html (' + (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1) + ' KB)');
