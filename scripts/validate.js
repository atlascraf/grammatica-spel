#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');

function loadData() {
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.js'));
  for (const f of files) {
    const code = fs.readFileSync(path.join(DATA_DIR, f), 'utf8');
    try {
      vm.runInContext(code, sandbox, { filename: f });
    } catch (e) {
      throw new Error('Syntax/runtime error in ' + f + ': ' + e.message);
    }
  }
  return { data: sandbox.window.GRAMMATICA_DATA || {}, files };
}

function nonEmptyStr(v) { return typeof v === 'string' && v.trim().length > 0; }

function main() {
  const errors = [];
  const warnings = [];
  const { data, files } = loadData();
  console.log('Loaded data files:', files.join(', '));

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
  const seenIds = new Set();
  let topicCount = 0;
  let exerciseCount = 0;

  levels.forEach((lv) => {
    const topics = data[lv];
    if (!Array.isArray(topics)) { errors.push('Missing/invalid level array: ' + lv); return; }
    topics.forEach((t, ti) => {
      const where = lv + '[' + ti + ']';
      topicCount++;
      if (!nonEmptyStr(t.id)) errors.push(where + ': missing id');
      else if (seenIds.has(t.id)) errors.push('Duplicate topic id: ' + t.id);
      else seenIds.add(t.id);
      if (t.level !== lv) errors.push(t.id + ': level field "' + t.level + '" does not match file level ' + lv);
      if (!nonEmptyStr(t.title)) errors.push(t.id + ': missing title');
      if (!nonEmptyStr(t.nl)) errors.push(t.id + ': missing nl');
      if (!nonEmptyStr(t.sum)) errors.push(t.id + ': missing sum');
      if (!Array.isArray(t.blocks) || t.blocks.length === 0) errors.push(t.id + ': blocks missing/empty');
      else t.blocks.forEach((b, bi) => {
        const bwhere = t.id + '.blocks[' + bi + ']';
        if (!nonEmptyStr(b.h) && !nonEmptyStr(b.p)) errors.push(bwhere + ': needs at least h or p');
        if (b.table) {
          if (!Array.isArray(b.table.head) || !Array.isArray(b.table.rows)) errors.push(bwhere + '.table: malformed');
          else b.table.rows.forEach((r, ri) => {
            if (r.length !== b.table.head.length) warnings.push(bwhere + '.table.rows[' + ri + ']: column count mismatch');
          });
        }
        if (b.list && (!Array.isArray(b.list) || b.list.some((li) => !nonEmptyStr(li)))) errors.push(bwhere + '.list: has empty item');
        if (b.ex) {
          if (!Array.isArray(b.ex)) errors.push(bwhere + '.ex: not an array');
          else b.ex.forEach((e, ei) => {
            if (!nonEmptyStr(e.nl) || !nonEmptyStr(e.fa)) errors.push(bwhere + '.ex[' + ei + ']: missing nl/fa');
          });
        }
      });
      if (!Array.isArray(t.ex) || t.ex.length < 8) errors.push(t.id + ': needs at least 8 exercises, has ' + ((t.ex && t.ex.length) || 0));
      (t.ex || []).forEach((e, ei) => {
        exerciseCount++;
        const ewhere = t.id + '.ex[' + ei + ']';
        if (!nonEmptyStr(e.exp)) errors.push(ewhere + ': missing exp');
        if (e.type === 'mc') {
          if (!nonEmptyStr(e.q)) errors.push(ewhere + ': mc missing q');
          if (!Array.isArray(e.options) || e.options.length < 2) errors.push(ewhere + ': mc needs >=2 options');
          else if (e.options.some((o) => !nonEmptyStr(o))) errors.push(ewhere + ': mc has empty option');
          if (typeof e.answer !== 'number' || e.answer < 0 || e.answer >= (e.options || []).length) {
            errors.push(ewhere + ': mc answer index out of range (' + e.answer + ')');
          }
        } else if (e.type === 'fill') {
          if (!nonEmptyStr(e.q)) errors.push(ewhere + ': fill missing q');
          if (!e.q || e.q.indexOf('___') === -1) warnings.push(ewhere + ': fill q has no ___ blank marker');
          if (!Array.isArray(e.answers) || e.answers.length === 0 || e.answers.some((a) => !nonEmptyStr(a))) {
            errors.push(ewhere + ': fill needs non-empty answers[]');
          }
        } else if (e.type === 'order') {
          if (!Array.isArray(e.tokens) || e.tokens.length < 2 || e.tokens.some((tk) => !nonEmptyStr(tk))) {
            errors.push(ewhere + ': order needs tokens[] (>=2, non-empty)');
          }
          if (!Array.isArray(e.answers) || e.answers.length === 0) {
            errors.push(ewhere + ': order needs answers[]');
          } else {
            e.answers.forEach((ans, ai) => {
              if (!Array.isArray(ans) || ans.length !== (e.tokens || []).length) {
                errors.push(ewhere + '.answers[' + ai + ']: length mismatch with tokens');
              } else {
                const sortedA = ans.slice().sort();
                const sortedT = (e.tokens || []).slice().sort();
                if (JSON.stringify(sortedA) !== JSON.stringify(sortedT)) {
                  errors.push(ewhere + '.answers[' + ai + ']: is not a permutation of tokens');
                }
              }
            });
          }
        } else {
          errors.push(ewhere + ': unknown exercise type "' + e.type + '"');
        }
      });
    });
  });

  const nouns = data.NOUNS;
  if (!Array.isArray(nouns) || nouns.length < 100) {
    errors.push('NOUNS: expected >=100 entries, got ' + ((nouns && nouns.length) || 0));
  } else {
    const nounSet = new Set();
    nouns.forEach((n, ni) => {
      if (!nonEmptyStr(n.nl) || !nonEmptyStr(n.fa)) errors.push('NOUNS[' + ni + ']: missing nl/fa');
      if (n.gender !== 'de' && n.gender !== 'het') errors.push('NOUNS[' + ni + ']: invalid gender "' + n.gender + '"');
      if (nounSet.has(n.nl)) errors.push('NOUNS: duplicate noun "' + n.nl + '"');
      nounSet.add(n.nl);
    });
  }

  console.log('\nTopics:', topicCount, '| Exercises:', exerciseCount, '| Nouns:', (nouns || []).length);

  if (warnings.length) {
    console.log('\nWarnings (' + warnings.length + '):');
    warnings.slice(0, 50).forEach((w) => console.log(' - ' + w));
    if (warnings.length > 50) console.log(' ...and ' + (warnings.length - 50) + ' more');
  }

  if (errors.length) {
    console.error('\nERRORS (' + errors.length + '):');
    errors.forEach((e) => console.error(' - ' + e));
    process.exit(1);
  } else {
    console.log('\nValidation passed ✔');
  }
}

main();
