// Мобильное меню
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Закрываем меню после перехода по якорю на этой же странице
  links.addEventListener('click', (e) => {
    if (e.target.closest('a')) { links.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  });
}

// Плавное появление блоков
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('visible'));
}

// Сайт не собирает данные: все обращения — в Telegram по ссылке с готовым текстом сообщения.
const TELEGRAM_URL = 'https://t.me/aa343432';
const tgLink = (text) => `${TELEGRAM_URL}?text=${encodeURIComponent(text)}`;

// Калькулятор стоимости на главной
const calcBox = document.getElementById('calc-box');
if (calcBox) {
  const KINDS = {
    visitka: { label: 'Сайт-визитка', base: 5000, time: 'от 3 до 7 дней', gifts: 'small' },
    landing: { label: 'Лендинг', base: 15000, time: '1–2 недели' },
    company: { label: 'Сайт компании', base: 35000, time: '2–3 недели' },
    shop: { label: 'Интернет-магазин', base: 60000, time: '3–5 недель' },
    unknown: { label: 'Пока не знаю — подобрать формат', base: 5000, max: 35000, time: '1–3 недели' },
  };
  const EXTRAS = {
    pay: { label: 'Онлайн-оплата', price: 5000 },
    quiz: { label: 'Квиз или калькулятор', price: 4000 },
    crm: { label: 'Интеграция с CRM', price: 3000 },
    booking: { label: 'Онлайн-запись', price: 4000 },
    texts: { label: 'Тексты под ключ', price: 4000 },
    en: { label: 'Английская версия', price: 8000 },
    '3d': { label: '3D-сцена и анимации', price: 8000 },
  };
  const GIFTS = ['Telegram-бот для заявок', 'Яндекс Метрика с целями', 'SEO и ИИ-старт: поиск и нейросети', 'Политика конфиденциальности и согласие', '30 дней правок после запуска'];
  const GIFTS_SMALL = ['Telegram-бот для заявок', 'Политика конфиденциальности и согласие'];

  const num = (n) => n.toLocaleString('ru-RU');
  // Неразрывные пробелы: тире не начинает строку, «₽» не отрывается от суммы
  const range = (a, b) => `${num(a)} – ${num(b)} ₽`;
  const roundUp = (n) => Math.ceil(n / 1000) * 1000;

  // «Добавить 3D в расчёт» из тёмной зоны: отмечаем опцию, ссылка сама прокрутит к калькулятору
  document.querySelectorAll('[data-add-3d]').forEach((a) => a.addEventListener('click', () => {
    const opt = calcBox.querySelector('input[name="calc-extra"][value="3d"]');
    if (opt) { opt.checked = true; opt.dispatchEvent(new Event('change', { bubbles: true })); }
  }));

  const kindNow = () => calcBox.querySelector('input[name="calc-kind"]:checked')?.value || 'landing';

  // Для магазина онлайн-оплата уже входит в базовую цену и срок — прячем опцию, чтобы её не выбрали повторно
  const payOption = calcBox.querySelector('input[name="calc-extra"][value="pay"]');
  const syncExtras = () => {
    const shop = kindNow() === 'shop';
    payOption.closest('.opt').hidden = shop;
    if (shop) payOption.checked = false;
  };

  const estimate = () => {
    const kind = kindNow();
    const k = KINDS[kind];
    const extras = [...calcBox.querySelectorAll('input[name="calc-extra"]:checked')].map((i) => i.value);
    const add = extras.reduce((sum, e) => sum + EXTRAS[e].price, 0);
    const min = k.base + add;
    const max = k.max ? k.max + add : roundUp(min * 1.3);
    const time = extras.length >= 2 ? `${k.time} + 3–5 дней на подключения` : k.time;
    const when = calcBox.querySelector('input[name="calc-when"]:checked')?.value || '—';
    return { kind, k, extras, min, max, time, when, gifts: k.gifts === 'small' ? GIFTS_SMALL : GIFTS };
  };

  const steps = [...calcBox.querySelectorAll('[data-step]')];
  const bar = calcBox.querySelector('.calc-progress span');
  const label = calcBox.querySelector('[data-calc-label]');
  const back = calcBox.querySelector('[data-calc-back]');
  const next = calcBox.querySelector('[data-calc-next]');
  const note = calcBox.querySelector('[data-calc-note]');
  const NOTE = note.textContent;
  const NOTE_UNKNOWN = 'Диапазон — от сайта-визитки до сайта компании. Подберём формат на коротком брифе и назовём точную цену до начала работ; в договоре она не изменится без вашего согласия.';
  let current = 0;

  const renderResult = () => {
    const r = estimate();
    calcBox.querySelector('[data-calc-price]').textContent = range(r.min, r.max);
    calcBox.querySelector('[data-calc-time]').textContent = `Срок: ${r.time}`;
    note.textContent = r.kind === 'unknown' ? NOTE_UNKNOWN : NOTE;
    const list = calcBox.querySelector('[data-calc-gifts]');
    list.replaceChildren(...r.gifts.map((g) => Object.assign(document.createElement('li'), { textContent: g })));
    // Кнопка «Отправить расчёт в Telegram»: сообщение уже содержит расчёт, человек сам решает, отправлять ли его
    const extras = r.extras.map((e) => EXTRAS[e].label).join(', ') || 'ничего';
    const tg = calcBox.querySelector('[data-calc-tg]');
    if (tg) tg.href = tgLink(`Здравствуйте! Посчитал стоимость на сайте: ${r.k.label}, ${range(r.min, r.max)}, срок ${r.time}. Подключить: ${extras}. Когда нужен сайт: ${r.when}.`);
  };

  const show = (i) => {
    current = Math.max(0, Math.min(i, steps.length - 1));
    syncExtras();
    steps.forEach((s, n) => { s.hidden = n !== current; });
    const last = current === steps.length - 1;
    bar.style.transform = `scaleX(${(current + 1) / steps.length})`;
    label.textContent = last ? 'Готово — ваш расчёт' : `Шаг ${current + 1} из ${steps.length - 1}`;
    back.hidden = current === 0;
    next.hidden = last;
    next.textContent = current === steps.length - 2 ? 'Показать стоимость' : 'Далее';
    if (last) renderResult();
  };

  next.addEventListener('click', () => show(current + 1));
  back.addEventListener('click', () => show(current - 1));

  // Кнопки «Рассчитать» в тарифах: выбираем тип сайта и сразу переходим ко второму шагу
  document.querySelectorAll('[data-calc]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const radio = calcBox.querySelector(`input[name="calc-kind"][value="${btn.dataset.calc}"]`);
      if (radio) radio.checked = true;
      show(1);
    });
  });

  // Выбор в калькуляторе переживает обновление страницы (sessionStorage может быть недоступен — тогда просто без памяти)
  const STORE = 'void-calc';
  const save = () => {
    const state = [...calcBox.querySelectorAll('input[name^="calc-"]')].filter((i) => i.checked).map((i) => `${i.name}=${i.value}`);
    try { sessionStorage.setItem(STORE, JSON.stringify(state)); } catch { /* приватный режим */ }
  };
  const restore = () => {
    let state = null;
    try { state = JSON.parse(sessionStorage.getItem(STORE)); } catch { /* нет доступа */ }
    if (!Array.isArray(state) || !state.length) return false;
    calcBox.querySelectorAll('input[name^="calc-"]').forEach((i) => { i.checked = state.includes(`${i.name}=${i.value}`); });
    return true;
  };
  calcBox.addEventListener('change', (e) => { if (e.target.name?.startsWith('calc-')) save(); });

  // Переход со страницы услуг: index.html?calc=landing#calc — тип сайта уже выбран
  const presetKind = new URLSearchParams(location.search).get('calc');
  if (presetKind && Object.prototype.hasOwnProperty.call(KINDS, presetKind)) {
    calcBox.querySelector(`input[name="calc-kind"][value="${presetKind}"]`).checked = true;
    save();
    show(1);
  } else {
    restore();
    show(0);
  }
}

// Закреплённая кнопка внизу экрана на телефоне (на странице контактов кнопка Telegram и так перед глазами).
if (!document.getElementById('contact-card')) {
  const calcHref = calcBox ? '#calc' : 'index.html#calc';
  const bar = document.createElement('div');
  bar.className = 'sticky-cta';
  bar.innerHTML = `
    <a class="btn btn-primary" href="${calcHref}"><span class="lbl-long">Рассчитать стоимость</span><span class="lbl-short">Рассчитать</span></a>
    <a class="btn btn-ghost" href="${TELEGRAM_URL}" target="_blank" rel="noopener">Telegram</a>`;
  document.body.appendChild(bar);
  document.body.classList.add('has-sticky-cta');
  // Прячем панель, пока человек в калькуляторе или вводит текст: она не должна закрывать форму и клавиатуру
  let inCalc = false;
  let typing = false;
  let pastTop = false;
  const syncBar = () => bar.classList.toggle('show', pastTop && !inCalc && !typing);
  if (calcBox && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { inCalc = entry.intersectionRatio > 0.2; syncBar(); }, { threshold: [0, 0.2, 0.4] }).observe(calcBox);
  }
  document.addEventListener('focusin', (e) => { if (e.target.matches('input, textarea, select')) { typing = true; syncBar(); } });
  document.addEventListener('focusout', () => { typing = false; syncBar(); });
  // Метка на 420px от верха страницы: панель появляется, когда она ушла выше экрана (без слушателя scroll)
  const sentinel = document.createElement('div');
  sentinel.className = 'sticky-sentinel';
  sentinel.setAttribute('aria-hidden', 'true');
  document.body.prepend(sentinel);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => { pastTop = !entry.isIntersecting && entry.boundingClientRect.top < 0; syncBar(); }).observe(sentinel);
  } else {
    pastTop = true;
  }
  syncBar();
}

// Всплывающее окно: открывается по клику на элемент с data-order="Что нужно сделать" (пустое значение — без предвыбора)
// или data-audit (бесплатный разбор сайта). Внутри — кнопка Telegram с готовым сообщением, формы нет.
// Без поддержки <dialog> такие ссылки просто ведут на страницу контактов.
const orderTriggers = document.querySelectorAll('[data-order], [data-audit]');
if (orderTriggers.length && typeof HTMLDialogElement === 'function') {
  const dialog = document.createElement('dialog');
  dialog.className = 'modal';
  dialog.setAttribute('aria-labelledby', 'modal-title');
  dialog.innerHTML = `
    <button class="modal-close" type="button" aria-label="Закрыть">×</button>
    <h2 id="modal-title">Написать нам</h2>
    <p class="muted" id="modal-lead">Расскажите о задаче в Telegram — ответим с вопросами и предварительной оценкой.</p>
    <a class="btn btn-primary btn-lg" id="modal-tg" href="${TELEGRAM_URL}" target="_blank" rel="noopener">Написать в Telegram</a>
    <p class="form-legal">Сайт не собирает ваши данные: сообщение вы отправляете сами в Telegram. Подробнее — в <a href="privacy.html" target="_blank" rel="noopener">политике обработки персональных данных</a>.</p>`;
  document.body.appendChild(dialog);

  const titleEl = dialog.querySelector('#modal-title');
  const leadEl = dialog.querySelector('#modal-lead');
  const tgBtn = dialog.querySelector('#modal-tg');
  const AUDIT = 'Бесплатный разбор сайта';

  let lastTrigger = null;
  const openModal = (order, trigger, audit) => {
    lastTrigger = trigger;
    titleEl.textContent = audit ? AUDIT : 'Написать нам';
    leadEl.textContent = audit
      ? 'Пришлите ссылку на сайт в Telegram — посмотрим первый экран, формы и мобильную версию и пришлём короткий список правок. Доступы не нужны.'
      : 'Расскажите о задаче в Telegram — ответим с вопросами и предварительной оценкой.';
    tgBtn.href = tgLink(audit
      ? 'Здравствуйте! Хочу бесплатный разбор сайта. Ссылка: '
      : (order ? `Здравствуйте! Интересует: ${order}.` : 'Здравствуйте! Хочу обсудить проект.'));
    dialog.showModal();
    tgBtn.focus();
  };

  orderTriggers.forEach((el) => {
    const open = () => openModal(el.dataset.order, el, el.hasAttribute('data-audit'));
    el.addEventListener('click', (e) => { e.preventDefault(); open(); });
    if (el.getAttribute('role') === 'button') {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    }
  });

  dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (lastTrigger) lastTrigger.focus(); });
}
