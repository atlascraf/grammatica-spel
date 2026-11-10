// @ts-check
const { test, expect } = require('@playwright/test');

async function runSessionToCompletion(page, label) {
  for (let i = 0; i < 80; i++) {
    if (await page.locator('.summary-card').count()) return;
    const ex = await page.evaluate(() => window.__APP_DEBUG__.getCurrentExercise());
    if (!ex) { await page.waitForTimeout(30); continue; }

    if (ex.type === 'mc') {
      await page.locator('.q-card .opt-btn').nth(ex.answer).click();
    } else if (ex.type === 'fill') {
      await page.fill('#fillInput', ex.answers[0]);
      await page.click('[data-act="fillCheck"]');
    } else if (ex.type === 'order') {
      for (const word of ex.answers[0]) {
        const btns = await page.locator('.order-pool .token-btn').all();
        let found = false;
        for (const b of btns) {
          const txt = await b.textContent();
          if (txt === word) { await b.click(); found = true; break; }
        }
        if (!found) throw new Error('[' + label + '] order token not found in pool: "' + word + '" — tokens=' + JSON.stringify(ex.tokens) + ' answer=' + JSON.stringify(ex.answers[0]));
      }
      await page.click('[data-act="ordCheck"]');
    } else {
      throw new Error('[' + label + '] unknown exercise type: ' + ex.type);
    }

    await page.waitForSelector('.feedback-panel.show', { timeout: 5000 });
    const okCount = await page.locator('.feedback-panel.show.ok').count();
    if (!okCount) {
      const text = await page.locator('.feedback-panel').innerText();
      throw new Error('[' + label + '] correct answer was rejected. exercise=' + JSON.stringify(ex) + ' feedback="' + text + '"');
    }
    await page.click('[data-act="sessNext"]');
  }
  throw new Error('[' + label + '] session did not finish within iteration cap');
}

function attachErrorCollector(page, errors) {
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push('console.error: ' + msg.text()); });
}

test('home loads without console errors and shows hero/progress', async ({ page }) => {
  const errors = [];
  attachErrorCollector(page, errors);
  await page.goto('/');
  await expect(page.locator('.hero')).toBeVisible();
  await expect(page.locator('.level-row .level-card')).toHaveCount(5);
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('no horizontal overflow at 390px viewport', async ({ page }) => {
  await page.goto('/');
  const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientW = await page.evaluate(() => document.documentElement.clientWidth);
  expect(scrollW, 'home should not overflow horizontally').toBeLessThanOrEqual(clientW + 1);

  await page.goto('/#l-a1');
  const w2 = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(w2).toBeLessThanOrEqual(clientW + 1);
});

test('every topic across every level: explanation renders and all exercises are solvable', async ({ page }) => {
  test.setTimeout(10 * 60 * 1000);
  const errors = [];
  attachErrorCollector(page, errors);
  await page.goto('/');

  const levels = await page.evaluate(() => Object.keys(window.GRAMMATICA_DATA).filter((k) => k !== 'NOUNS'));
  expect(levels.sort()).toEqual(['A1', 'A2', 'B1', 'B2', 'C1']);

  for (const level of levels) {
    const topicIds = await page.evaluate((lv) => (window.GRAMMATICA_DATA[lv] || []).map((t) => t.id), level);
    expect(topicIds.length, level + ' should have topics').toBeGreaterThan(0);
    for (const id of topicIds) {
      await page.goto('/#t-' + id);
      await expect(page.locator('.topic-header h1')).toBeVisible();
      await expect(page.locator('.block-card').first()).toBeVisible();
      await page.click('.sticky-cta .btn');
      await runSessionToCompletion(page, id);
      await expect(page.locator('.summary-card')).toBeVisible();
      await page.click('[data-act="sessDone"]');
    }
  }
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('level test runs and completes for every level', async ({ page }) => {
  test.setTimeout(3 * 60 * 1000);
  const errors = [];
  attachErrorCollector(page, errors);
  await page.goto('/');
  for (const level of ['a1', 'a2', 'b1', 'b2', 'c1']) {
    await page.goto('/#test-' + level);
    await runSessionToCompletion(page, 'test-' + level);
    await expect(page.locator('.summary-card')).toBeVisible();
    await page.click('[data-act="sessDone"]');
  }
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('completing a topic persists stars/accuracy to state, and progress UI updates', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => { try { localStorage.removeItem('grammatica.v1'); } catch (e) {} });
  const topicId = await page.evaluate(() => window.GRAMMATICA_DATA.A1[0].id);

  await page.goto('/#p-' + topicId);
  await runSessionToCompletion(page, topicId);
  await expect(page.locator('.summary-card')).toBeVisible();

  const saved = await page.evaluate((id) => window.__APP_DEBUG__.getState().topics[id], topicId);
  expect(saved, 'topic completion must be persisted to STATE.topics').toBeTruthy();
  expect(saved.stars).toBeGreaterThanOrEqual(1);
  expect(saved.attempts).toBe(1);

  await page.click('[data-act="sessDone"]');
  await expect(page.locator('.path-node.done').first()).toBeVisible();
  await expect(page.locator('.nlname')).toContainText('1 از');
});

test('level test records pass/fail to state and shows a clear result', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => { try { localStorage.removeItem('grammatica.v1'); } catch (e) {} });

  await page.goto('/#test-a1');
  await runSessionToCompletion(page, 'test-a1');
  await expect(page.locator('.summary-card')).toContainText(/قبول شدی|هنوز قبول نشدی/);

  const saved = await page.evaluate(() => window.__APP_DEBUG__.getState().tests.A1);
  expect(saved, 'level test result must be persisted to STATE.tests').toBeTruthy();
  expect(typeof saved.passed).toBe('boolean');
  expect(saved.attempts).toBe(1);
});

test('numeric ratio/symbol displays are bidi-isolated against RTL reordering', async ({ page }) => {
  // regression test: "0 / 9", stars, and lives previously rendered visually
  // reversed because bare numeric/symbol sequences with no strong-direction
  // anchor get reordered inside an RTL document. Each must be wrapped in an
  // explicit dir="ltr" isolate.
  const topicId = await page.goto('/').then(() => page.evaluate(() => window.GRAMMATICA_DATA.A1[0].id));
  await page.goto('/#p-' + topicId);
  await expect(page.locator('.session-meta [dir="ltr"]')).toHaveText(/\d+ \/ \d+/);

  await runSessionToCompletion(page, topicId);
  await expect(page.locator('.summary-stars [dir="ltr"]')).toBeVisible();

  await page.goto('/#game-survive');
  await expect(page.locator('.lives [dir="ltr"]')).toBeVisible();
});

test('order-exercise tokens render left-to-right (not reversed by the RTL page)', async ({ page }) => {
  // regression test: .order-tokens/.order-pool are flex rows with no explicit
  // direction, so they inherited the page's RTL flow and visually reversed
  // the built Dutch sentence. Must be forced to direction: ltr.
  await page.goto('/');
  for (const cls of ['.order-tokens', '.order-pool']) {
    const dir = await page.evaluate((selector) => {
      const probe = document.createElement('div');
      probe.className = selector.slice(1);
      document.body.appendChild(probe);
      const d = getComputedStyle(probe).direction;
      probe.remove();
      return d;
    }, cls);
    expect(dir, cls + ' must render left-to-right').toBe('ltr');
  }

  const topicId = await page.evaluate(() => window.GRAMMATICA_DATA.A1.find((t) => t.ex.some((e) => e.type === 'order')).id);
  await page.goto('/#p-' + topicId);
  for (let i = 0; i < 20; i++) {
    const ex = await page.evaluate(() => window.__APP_DEBUG__.getCurrentExercise());
    if (ex.type === 'order') {
      for (const word of ex.answers[0]) {
        const btns = await page.locator('.order-pool .token-btn').all();
        for (const b of btns) { if ((await b.textContent()) === word) { await b.click(); break; } }
      }
      // tokens can wrap onto a new line, so valid reading order means each
      // token is either further right on the same row, or on a lower row
      // (not: appearing to the left on the very same row, which is the bug).
      const rects = await page.locator('.order-tokens .token-btn').evaluateAll((els) => els.map((e) => { const r = e.getBoundingClientRect(); return { x: r.x, y: Math.round(r.y) }; }));
      for (let j = 1; j < rects.length; j++) {
        const sameRow = rects[j].y === rects[j - 1].y;
        if (sameRow) expect(rects[j].x, 'token ' + j + ' must be right of token ' + (j - 1) + ' on the same row').toBeGreaterThan(rects[j - 1].x);
        else expect(rects[j].y, 'token ' + j + ' must be on a lower row, not the same/higher row').toBeGreaterThan(rects[j - 1].y);
      }
      return;
    }
    if (ex.type === 'mc') await page.locator('.q-card .opt-btn').nth(ex.answer).click();
    else if (ex.type === 'fill') { await page.fill('#fillInput', ex.answers[0]); await page.click('[data-act="fillCheck"]'); }
    await page.waitForSelector('.feedback-panel.show');
    await page.click('[data-act="sessNext"]');
  }
  throw new Error('no order exercise encountered');
});

test('language switcher cycles fa/en/ar/tr with correct dir/lang and chrome translation', async ({ page }) => {
  const errors = [];
  attachErrorCollector(page, errors);
  await page.goto('/');
  await page.evaluate(() => { try { localStorage.removeItem('grammatica.v1'); } catch (e) {} });
  await page.reload();

  const expected = [
    { lang: 'fa', dir: 'rtl' },
    { lang: 'en', dir: 'ltr' },
    { lang: 'ar', dir: 'rtl' },
    { lang: 'tr', dir: 'ltr' },
  ];
  for (let i = 0; i < expected.length; i++) {
    const html = await page.evaluate(() => ({ lang: document.documentElement.lang, dir: document.documentElement.dir }));
    expect(html).toEqual(expected[i]);
    if (i === 0) await expect(page.locator('.hero h1')).toContainText('سلام');
    if (i === 1) await expect(page.locator('.hero h1')).toContainText('Hi!');
    if (i === 2) await expect(page.locator('.hero h1')).toContainText('مرحبًا');
    if (i === 3) await expect(page.locator('.hero h1')).toContainText('Merhaba');
    if (i < expected.length - 1) await page.click('[data-act="lang"]');
  }

  // content falls back to Persian gracefully when a translation isn't available yet
  await page.goto('/#t-a1-lidwoorden');
  await expect(page.locator('.topic-header h1')).toContainText('حروف تعریف');
  await expect(page.locator('.sticky-cta .btn')).toContainText('Alıştırmalara başla');
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('de/het sprint game is playable', async ({ page }) => {
  const errors = [];
  attachErrorCollector(page, errors);
  await page.goto('/#game-dehet');
  await expect(page.locator('.game-word')).toBeVisible();
  for (let i = 0; i < 10; i++) {
    const gender = await page.evaluate(() => window.__APP_DEBUG__.getGame().current.gender);
    await page.click('[data-act="dehetPick"][data-arg="' + gender + '"]');
  }
  const score = await page.evaluate(() => window.__APP_DEBUG__.getGame().score);
  expect(score).toBeGreaterThanOrEqual(10);
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('survive game is playable', async ({ page }) => {
  const errors = [];
  attachErrorCollector(page, errors);
  await page.goto('/#game-survive');
  await expect(page.locator('.q-text')).toBeVisible();
  for (let i = 0; i < 8; i++) {
    const ex = await page.evaluate(() => window.__APP_DEBUG__.getGame().current);
    await page.locator('.q-card .opt-btn').nth(ex.answer).click();
    await page.click('[data-act="surviveNext"]');
  }
  const score = await page.evaluate(() => window.__APP_DEBUG__.getGame().score);
  expect(score).toBeGreaterThanOrEqual(8);
  expect(errors, errors.join('\n')).toHaveLength(0);
});

test('screenshots: light and dark mode at mobile width, RTL + Dutch mixed text', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'screenshots/home-light.png' });

  await page.emulateMedia({ colorScheme: 'dark' });
  await page.reload();
  await page.screenshot({ path: 'screenshots/home-dark.png' });

  await page.goto('/#l-a1');
  await page.screenshot({ path: 'screenshots/level-dark.png' });

  const topicId = await page.evaluate(() => window.GRAMMATICA_DATA.A1[0].id);
  await page.goto('/#t-' + topicId);
  await page.screenshot({ path: 'screenshots/topic-dark.png', fullPage: true });

  await page.emulateMedia({ colorScheme: 'light' });
  await page.reload();
  await page.screenshot({ path: 'screenshots/topic-light.png', fullPage: true });
});
