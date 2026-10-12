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

// Заявки: отправка в Telegram через серверную функцию (functions/api/lead.js).
// Если функция недоступна (локально или не настроена) — показываем ссылку на Telegram.
const TELEGRAM_URL = 'https://t.me/aa343432';
const LEAD_ENDPOINT = '/api/lead';

const sendLead = async (data) => {
  const res = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(String(res.status));
};

const showFallback = (status) => {
  status.textContent = 'Не удалось отправить заявку. Напишите нам в Telegram: ';
  const link = document.createElement('a');
  link.href = TELEGRAM_URL;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = '@aa343432';
  status.appendChild(link);
};

// Отметка для успешной отправки (иконка check-circle из Phosphor, MIT)
const CHECK_ICON = '<svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/></svg>';

// Общая логика формы: собрать поля (+ дополнительные данные), отправить, показать результат.
const setupLeadForm = (form, extra = () => ({})) => {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  const label = button.textContent;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = { ...Object.fromEntries(new FormData(form)), ...extra() };
    button.disabled = true;
    button.textContent = 'Отправляем…';
    status.classList.remove('is-success');
    status.textContent = '';
    try {
      await sendLead(data);
      form.reset();
      status.classList.add('is-success');
      status.innerHTML = `${CHECK_ICON}<span>Заявка у нас. Ответим в Telegram или по контакту, который вы указали.</span>`;
    } catch {
      showFallback(status);
    } finally {
      button.disabled = false;
      button.textContent = label;
    }
  });
};

const pageForm = document.getElementById('contact-form');
if (pageForm) {
  // Предвыбор типа клиента по ссылке: contacts.html?client=shop
  const preset = new URLSearchParams(location.search).get('client');
  const clientSelect = pageForm.querySelector('select[name="client"]');
  if (preset && clientSelect && [...clientSelect.options].some((o) => o.value === preset)) {
    clientSelect.value = preset;
  }
  setupLeadForm(pageForm);
}

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
  };
  const GIFTS = ['Telegram-бот для заявок', 'Яндекс Метрика с целями', 'SEO-старт и Яндекс Вебмастер', 'Политика конфиденциальности и согласие', '30 дней правок после запуска'];
  const GIFTS_SMALL = ['Telegram-бот для заявок', 'Политика конфиденциальности и согласие'];

  const num = (n) => n.toLocaleString('ru-RU');
  // Неразрывные пробелы: тире не начинает строку, «₽» не отрывается от суммы
  const range = (a, b) => `${num(a)} – ${num(b)} ₽`;
  const roundUp = (n) => Math.ceil(n / 1000) * 1000;

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

  const leadForm = calcBox.querySelector('#calc-lead');
  setupLeadForm(leadForm, () => {
    const r = estimate();
    const extras = r.extras.map((e) => EXTRAS[e].label).join(', ') || 'ничего';
    return {
      source: 'calc',
      client: r.kind === 'shop' ? 'shop' : 'small',
      type: r.k.label,
      estimate: `${range(r.min, r.max)}, срок ${r.time}`,
      message: `Подключить: ${extras}\nКогда нужен сайт: ${r.when}`,
    };
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

// Закреплённая кнопка внизу экрана на телефоне (на странице контактов форма и так перед глазами).
if (!pageForm) {
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

// Всплывающая форма: открывается по клику на любой элемент с data-order="Что нужно сделать"
// (пустое значение — без предвыбора) или data-audit (бесплатный разбор сайта).
// Без поддержки <dialog> такие ссылки просто ведут на страницу контактов.
const orderTriggers = document.querySelectorAll('[data-order], [data-audit]');
if (orderTriggers.length && typeof HTMLDialogElement === 'function') {
  const dialog = document.createElement('dialog');
  dialog.className = 'modal';
  dialog.setAttribute('aria-labelledby', 'modal-title');
  dialog.innerHTML = `
    <button class="modal-close" type="button" aria-label="Закрыть">×</button>
    <h2 id="modal-title">Оставить заявку</h2>
    <p class="muted" id="modal-lead">Расскажите о задаче — ответим с вопросами и предварительной оценкой.</p>
    <form class="form">
      <label class="hp" aria-hidden="true">Не заполняйте это поле<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
      <label>Ваше имя<input name="name" type="text" required autocomplete="name"></label>
      <label>Телефон, Telegram или email<input name="contact" type="text" required minlength="5" autocomplete="tel" placeholder="+7 900 000-00-00 или @username"></label>
      <label class="audit-only" hidden>Ссылка на ваш сайт<input name="site" type="text" inputmode="url" placeholder="example.ru" disabled></label>
      <label>Кто вы
        <select name="client">
          <option value="small">Малый бизнес или эксперт</option>
          <option value="shop">Интернет-магазин</option>
          <option value="b2b">Компания / B2B</option>
          <option value="tender">Тендер или госзаказ</option>
          <option value="other">Другое</option>
        </select>
      </label>
      <label class="type-label">Что нужно сделать
        <select name="type">
          <option>Лендинг или сайт-визитка</option>
          <option>Сайт компании</option>
          <option>Интернет-магазин</option>
          <option>Веб-приложение или бот</option>
          <option>Редизайн или доработка сайта</option>
          <option>Сопровождение сайта</option>
          <option>Другое</option>
          <option>Бесплатный разбор сайта</option>
        </select>
      </label>
      <label>Коротко о задаче<textarea name="message"></textarea></label>
      <label class="consent"><input name="consent" type="checkbox" required> <span>Даю <a href="consent.html" target="_blank" rel="noopener">согласие на обработку персональных данных</a></span></label>
      <p class="form-legal">Как мы обрабатываем данные — в <a href="privacy.html" target="_blank" rel="noopener">политике конфиденциальности</a>.</p>
      <button class="btn btn-primary" type="submit">Отправить заявку</button>
      <p class="form-status" role="status"></p>
    </form>`;
  document.body.appendChild(dialog);

  const modalForm = dialog.querySelector('form');
  const typeSelect = modalForm.querySelector('select[name="type"]');
  const modalClient = modalForm.querySelector('select[name="client"]');
  const modalStatus = modalForm.querySelector('.form-status');
  setupLeadForm(modalForm);

  const titleEl = dialog.querySelector('#modal-title');
  const leadEl = dialog.querySelector('#modal-lead');
  const submitBtn = modalForm.querySelector('button[type="submit"]');
  const auditLabel = modalForm.querySelector('.audit-only');
  const auditInput = auditLabel.querySelector('input');
  const typeLabel = modalForm.querySelector('.type-label');
  const AUDIT = 'Бесплатный разбор сайта';

  let lastTrigger = null;
  const openModal = (order, trigger, audit) => {
    lastTrigger = trigger;
    // Режим «разбор сайта»: просим ссылку, скрываем выбор типа работ.
    auditLabel.hidden = !audit;
    auditInput.disabled = !audit;
    auditInput.required = audit;
    typeLabel.hidden = audit;
    titleEl.textContent = audit ? AUDIT : 'Оставить заявку';
    leadEl.textContent = audit
      ? 'Пришлите ссылку — посмотрим первый экран, формы и мобильную версию и пришлём короткий список правок. Доступы не нужны.'
      : 'Расскажите о задаче — ответим с вопросами и предварительной оценкой.';
    submitBtn.textContent = audit ? 'Получить разбор' : 'Отправить заявку';
    if (audit) typeSelect.value = AUDIT;
    else if ([...typeSelect.options].some((o) => o.value === order)) typeSelect.value = order;
    if (order === 'Интернет-магазин') modalClient.value = 'shop';
    modalStatus.textContent = '';
    dialog.showModal();
    modalForm.querySelector('input[name="name"]').focus();
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
