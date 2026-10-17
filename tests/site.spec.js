// Проверки сайта void-digital.ru. Форм на сайте нет: обращения — кнопки со ссылкой на Telegram.
const { test, expect } = require('@playwright/test');

const PAGES = ['index.html', 'services.html', 'portfolio.html', 'about.html', 'contacts.html', 'blog.html',
  'blog-brief.html', 'blog-landing-vs-site.html', 'privacy.html', '404.html'];
const clean = (s) => s.replace(/\s+/g, ' ').trim();
const isMobile = (testInfo) => testInfo.project.name.includes('iphone');

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

test('калькулятор: кнопка Telegram содержит расчёт, форм нет', async ({ page }) => {
  await page.goto('index.html?calc=landing#calc');
  const box = page.locator('#calc-box');
  await box.locator('[data-calc-next]').click();
  await box.locator('[data-calc-next]').click();
  const tg = box.locator('[data-calc-tg]');
  await expect(tg).toBeVisible();
  const href = decodeURIComponent(await tg.getAttribute('href'));
  expect(href).toContain('https://t.me/aa343432?text=');
  expect(href).toContain('Лендинг');
  expect(href).toContain('₽');
  await expect(page.locator('form')).toHaveCount(0);
});

test('окно бесплатного разбора ведёт в Telegram с готовым сообщением', async ({ page }) => {
  await page.goto('index.html');
  await page.locator('[data-audit]').first().click();
  const dialog = page.locator('dialog.modal');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('#modal-title')).toHaveText('Бесплатный разбор сайта');
  const href = decodeURIComponent(await dialog.locator('#modal-tg').getAttribute('href'));
  expect(href).toContain('https://t.me/aa343432?text=');
  expect(href).toContain('разбор');
  await dialog.locator('.modal-close').click();
  await expect(dialog).toBeHidden();
});

test('на сайте нет форм сбора данных', async ({ page }) => {
  for (const path of ['index.html', 'contacts.html', 'services.html', 'about.html']) {
    await page.goto(path);
    await expect(page.locator('form, input[type=email], input[name=contact]'), path).toHaveCount(0);
  }
  await page.goto('contacts.html');
  await expect(page.locator('#contact-card a.btn-primary')).toHaveAttribute('href', /^https:\/\/t\.me\/aa343432/);
  await expect(page.locator('.contact-methods a[href="mailto:voiddigital@mail.ru"]')).toHaveCount(1);
  await expect(page.locator('#contact-card a[href^="https://wa.me/79538550813"]')).toHaveCount(1);
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
