#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const PARTS_DIR = path.join(ROOT, 'data', 'i18n', '_parts');
const LANGS = ['en', 'ar', 'tr'];

function partFilesFor(lang) {
  return fs.readdirSync(PARTS_DIR)
    .filter((f) => f.startsWith(lang + '-') && f.endsWith('.json'))
    .sort();
}

function loadSourceTopics() {
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  ['a1', 'a2', 'b1', 'b2', 'c1'].forEach((f) => {
    const code = fs.readFileSync(path.join(ROOT, 'data', f + '.js'), 'utf8');
    vm.runInContext(code, sandbox, { filename: f + '.js' });
  });
  const byId = {};
  ['A1', 'A2', 'B1', 'B2', 'C1'].forEach((lv) => {
    (sandbox.window.GRAMMATICA_DATA[lv] || []).forEach((t) => { byId[t.id] = t; });
  });
  return byId;
}

function validateOverlay(lang, topicId, overlay, source) {
  const errors = [];
  const where = lang + '/' + topicId;
  if (overlay.blocks) {
    if (overlay.blocks.length !== source.blocks.length) {
      errors.push(where + ': blocks length mismatch (overlay ' + overlay.blocks.length + ' vs source ' + source.blocks.length + ')');
    }
    overlay.blocks.forEach((ob, i) => {
      const sb = source.blocks[i];
      if (!sb) return;
      if (ob.list && sb.list && ob.list.length !== sb.list.length) errors.push(where + '.blocks[' + i + '].list length mismatch');
      if (ob.ex && sb.ex && ob.ex.length !== sb.ex.length) errors.push(where + '.blocks[' + i + '].ex length mismatch');
      if (ob.table && sb.table) {
        if (ob.table.head.length !== sb.table.head.length) errors.push(where + '.blocks[' + i + '].table head length mismatch');
        if (ob.table.rows.length !== sb.table.rows.length) errors.push(where + '.blocks[' + i + '].table rows length mismatch');
      }
    });
  }
  if (overlay.ex) {
    if (overlay.ex.length !== source.ex.length) {
      errors.push(where + ': ex length mismatch (overlay ' + overlay.ex.length + ' vs source ' + source.ex.length + ')');
    }
    overlay.ex.forEach((oe, i) => {
      const se = source.ex[i];
      if (!se) return;
      if (se.type === 'mc' && oe.options && oe.options.length !== se.options.length) {
        errors.push(where + '.ex[' + i + ']: mc options length mismatch');
      }
      if ('tokens' in oe || 'answers' in oe || 'answer' in oe) {
        errors.push(where + '.ex[' + i + ']: overlay must not include tokens/answers/answer');
      }
    });
  }
  return errors;
}

function main() {
  const sourceTopics = loadSourceTopics();
  const allErrors = [];

  LANGS.forEach((lang) => {
    const merged = {};
    const files = partFilesFor(lang);
    if (!files.length) allErrors.push('No part files found for ' + lang);
    files.forEach((fname) => {
      const file = path.join(PARTS_DIR, fname);
      let data;
      try {
        data = JSON.parse(fs.readFileSync(file, 'utf8'));
      } catch (e) {
        allErrors.push('Invalid JSON in ' + file + ': ' + e.message);
        return;
      }
      Object.keys(data).forEach((topicId) => {
        if (merged[topicId]) allErrors.push(lang + ': duplicate topic id ' + topicId + ' (in ' + fname + ')');
        if (!sourceTopics[topicId]) {
          allErrors.push(lang + '/' + fname + ': unknown topic id ' + topicId);
          return;
        }
        merged[topicId] = data[topicId];
        const errs = validateOverlay(lang, topicId, data[topicId], sourceTopics[topicId]);
        allErrors.push.apply(allErrors, errs);
      });
    });

    const expectedIds = Object.keys(sourceTopics);
    const missing = expectedIds.filter((id) => !merged[id]);
    if (missing.length) allErrors.push(lang + ': missing topics: ' + missing.join(', '));

    const out = 'window.GRAMMATICA_I18N = window.GRAMMATICA_I18N || {};\n' +
      'window.GRAMMATICA_I18N.' + lang + ' = ' + JSON.stringify({ topics: merged }, null, 0) + ';\n';
    fs.writeFileSync(path.join(ROOT, 'data', 'i18n', lang + '.js'), out, 'utf8');
    console.log(lang + ': merged ' + Object.keys(merged).length + '/' + expectedIds.length + ' topics -> data/i18n/' + lang + '.js');
  });

  if (allErrors.length) {
    console.error('\nERRORS (' + allErrors.length + '):');
    allErrors.forEach((e) => console.error(' - ' + e));
    process.exit(1);
  } else {
    console.log('\nMerge validation passed ✔');
  }
}

main();
