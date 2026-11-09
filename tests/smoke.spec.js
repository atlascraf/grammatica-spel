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
