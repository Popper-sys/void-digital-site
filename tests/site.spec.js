// Проверки сайта void-digital.ru. Отправка заявок подменяется (page.route) — в Telegram ничего не уходит.
const { test, expect } = require('@playwright/test');

const PAGES = ['index.html', 'services.html', 'portfolio.html', 'about.html', 'contacts.html', 'blog.html',
  'blog-brief.html', 'blog-landing-vs-site.html', 'privacy.html', 'consent.html', '404.html'];
const clean = (s) => s.replace(/\s+/g, ' ').trim();
const isMobile = (testInfo) => testInfo.project.name.includes('iphone');

// Мок серверной функции: запоминаем, что ушло
async function mockLead(page) {
  const sent = [];
  await page.route('**/api/lead', async (route) => {
    sent.push(JSON.parse(route.request().postData() || '{}'));
    await route.fulfill({ status: 200, body: 'ok' });
  });
  return sent;
}

for (const path of PAGES) {
  test(`страница ${path} открывается без ошибок`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    const res = await page.goto(path);
    expect(res.status()).toBe(200);
    await expect(page).toHaveTitle(/VOID \| digital/);
    await expect(page.locator('h1')).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test('калькулятор: лендинг + CRM = 18 000 – 24 000 ₽', async ({ page }) => {
  await page.goto('index.html');
  const box = page.locator('#calc-box');
  await box.locator('label.opt', { hasText: 'Лендинг' }).click();
  await box.locator('[data-calc-next]').click();
  await box.locator('label.opt', { hasText: 'Интеграция с CRM' }).click();
  await box.locator('[data-calc-next]').click();
  await box.locator('[data-calc-next]').click();
  expect(clean(await box.locator('[data-calc-price]').textContent())).toBe('18 000 – 24 000 ₽');
  await expect(box.locator('[data-calc-time]')).toHaveText('Срок: 1–2 недели');
});

test('калькулятор: «Добавить 3D в расчёт» отмечает опцию, лендинг + 3D = 23 000 – 30 000 ₽', async ({ page }) => {
  await page.goto('index.html');
  await page.locator('[data-add-3d]').click();
  const box = page.locator('#calc-box');
  await box.locator('[data-calc-next]').click();
  await expect(box.locator('input[name=calc-extra][value="3d"]')).toBeChecked();
  await box.locator('[data-calc-next]').click();
  await box.locator('[data-calc-next]').click();
  expect(clean(await box.locator('[data-calc-price]').textContent())).toBe('23 000 – 30 000 ₽');
});

test('тёмная зона внизу главной загружается без ошибок: 3D или запасная сфера', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('index.html');
  await page.locator('.deep-final').scrollIntoViewIfNeeded();
  await expect(page.locator('html')).toHaveClass(/deep-3d|no-webgl/, { timeout: 15000 });
  expect(errors).toEqual([]);
});

test('калькулятор: для магазина опция «Онлайн-оплата» скрыта', async ({ page }) => {
  await page.goto('index.html');
  const box = page.locator('#calc-box');
  await box.locator('label.opt', { hasText: 'Интернет-магазин' }).click();
  await box.locator('[data-calc-next]').click();
  await expect(box.locator('label.opt', { hasText: 'Онлайн-оплата' })).toBeHidden();
});

test('форма калькулятора: без согласия не отправляется, с согласием — отметка об успехе', async ({ page }) => {
  const sent = await mockLead(page);
  await page.goto('index.html?calc=landing#calc');
  const box = page.locator('#calc-box');
  await box.locator('[data-calc-next]').click();
  await box.locator('[data-calc-next]').click();
  const form = page.locator('#calc-lead');
  await form.locator('[name=name]').fill('Тест');
  await form.locator('[name=contact]').fill('@test_user');
  await form.locator('button[type=submit]').click();
  expect(sent).toHaveLength(0);
  await form.locator('[name=consent]').check();
  await form.locator('button[type=submit]').click();
  await expect(form.locator('.form-status.is-success')).toContainText('Заявка у нас');
  expect(sent).toHaveLength(1);
  expect(sent[0]).toMatchObject({ name: 'Тест', contact: '@test_user', consent: 'on', consent_version: '2026-10-17', source: 'calc', type: 'Лендинг' });
});

test('окно бесплатного разбора просит ссылку на сайт', async ({ page }) => {
  await page.goto('index.html');
  await page.locator('[data-audit]').first().click();
  const dialog = page.locator('dialog.modal');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('#modal-title')).toHaveText('Бесплатный разбор сайта');
  await expect(dialog.locator('[name=site]')).toHaveAttribute('required', '');
  await dialog.locator('.modal-close').click();
  await expect(dialog).toBeHidden();
});

test('телефон: поля не меньше 16 px и нет горизонтальной прокрутки', async ({ page }, testInfo) => {
  test.skip(!isMobile(testInfo), 'только для телефона');
  for (const path of ['index.html', 'contacts.html', 'services.html']) {
    await page.goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow, `горизонтальная прокрутка на ${path}`).toBeLessThanOrEqual(0);
    const sizes = await page.locator('form input:not([type=checkbox]):not([name=website]), form textarea, form select')
      .evaluateAll((els) => els.map((el) => parseFloat(getComputedStyle(el).fontSize)));
    for (const size of sizes) expect(size, `шрифт поля на ${path}`).toBeGreaterThanOrEqual(16);
  }
});

test('телефон: нижняя панель скрыта вверху страницы и появляется после прокрутки', async ({ page }, testInfo) => {
  test.skip(!isMobile(testInfo), 'только для телефона');
  await page.goto('index.html');
  const bar = page.locator('.sticky-cta');
  await expect(bar).not.toHaveClass(/show/);
  await page.locator('#prices').scrollIntoViewIfNeeded();
  await expect(bar).toHaveClass(/show/);
});
