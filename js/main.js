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

const TELEGRAM_URL = 'https://t.me/Voiddigit';

const tgLink = (text) => `${TELEGRAM_URL}?text=${encodeURIComponent(text)}`;

const PHONE = '+79538550813';

const PHONE_VIEW = '+7 953 855-08-13';

const WHATSAPP_URL = 'https://wa.me/79538550813';

const waLink = (text) => `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;



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

    const msg = `Здравствуйте! Посчитал стоимость на сайте: ${r.k.label}, ${range(r.min, r.max)}, срок ${r.time}. Подключить: ${extras}. Когда нужен сайт: ${r.when}.`;

    if (tg) tg.href = tgLink(msg);

    const wa = calcBox.querySelector('[data-calc-wa]');

    if (wa) wa.href = waLink(msg);

    // Обязательное условие: проверка согласия на обработку данных для расчёта
    const calcConsent = calcBox.querySelector('#calc-consent-check');
    const calcActionBtns = calcBox.querySelectorAll('.calc-msgs .btn, .calc-lead > a.btn');
    const syncCalcConsent = () => {
      const isChecked = calcConsent ? calcConsent.checked : true;
      calcActionBtns.forEach(btn => {
        btn.style.opacity = isChecked ? '1' : '0.5';
        btn.style.cursor = isChecked ? 'pointer' : 'not-allowed';
      });
    };
    if (calcConsent && !calcConsent._boundConsent) {
      calcConsent._boundConsent = true;
      calcConsent.addEventListener('change', syncCalcConsent);
      calcActionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          if (calcConsent && !calcConsent.checked) {
            e.preventDefault();
            alert('Для получения расчёта необходимо подтвердить согласие на обработку персональных данных');
            calcConsent.focus();
            calcConsent.parentElement.style.outline = '2px solid var(--accent)';
            setTimeout(() => { calcConsent.parentElement.style.outline = 'none'; }, 2500);
            return false;
          }
        });
      });
    }

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

  const calcHref = calcBox ? '#calc' : '/#calc';

  const bar = document.createElement('div');

  bar.className = 'sticky-cta';

  bar.innerHTML = `

    <a class="btn btn-primary" href="${calcHref}"><span class="lbl-long">Рассчитать стоимость</span><span class="lbl-short">Рассчитать</span></a>

    <a class="btn btn-ghost" href="tel:${PHONE}" aria-label="Позвонить ${PHONE_VIEW}">Позвонить</a>`;

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

    <a class="btn btn-primary btn-lg" href="tel:${PHONE}">Позвонить ${PHONE_VIEW}</a>

    <div class="modal-msgs">

      <a class="btn btn-outline" id="modal-tg" href="${TELEGRAM_URL}" target="_blank" rel="noopener">Telegram</a>

      <a class="btn btn-outline" id="modal-wa" href="${WHATSAPP_URL}" target="_blank" rel="noopener">WhatsApp</a>

    </div>

    <div style="margin: 12px 0 10px; text-align: left;">
      <label class="modal-consent-label" style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.8rem; cursor: pointer; line-height: 1.4; color: var(--muted);">
        <input type="checkbox" id="modal-consent-check" checked required style="width: 17px; height: 17px; accent-color: var(--accent); cursor: pointer; flex-shrink: 0; margin-top: 1px;">
        <span>Даю согласие на <a href="/consent" target="_blank" style="color: inherit; text-decoration: underline;">обработку персональных данных</a> в соответствии с <a href="/privacy" target="_blank" style="color: inherit; text-decoration: underline;">политикой конфиденциальности</a></span>
      </label>
    </div>
    <p class="form-legal">Сайт не собирает ваши данные: сообщение вы отправляете сами. Подробнее — в <a href="/privacy" target="_blank" rel="noopener">политике обработки персональных данных</a>.</p>`;

  document.body.appendChild(dialog);



  const titleEl = dialog.querySelector('#modal-title');

  const leadEl = dialog.querySelector('#modal-lead');

  const tgBtn = dialog.querySelector('#modal-tg');

  const waBtn = dialog.querySelector('#modal-wa');
  const modalConsent = dialog.querySelector('#modal-consent-check');
  const modalActionBtns = dialog.querySelectorAll('.modal-msgs .btn, .modal > a.btn');
  const syncModalConsent = () => {
    const isChecked = modalConsent ? modalConsent.checked : true;
    modalActionBtns.forEach(btn => {
      btn.style.opacity = isChecked ? '1' : '0.5';
      btn.style.cursor = isChecked ? 'pointer' : 'not-allowed';
    });
  };
  if (modalConsent) {
    modalConsent.addEventListener('change', syncModalConsent);
    modalActionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (modalConsent && !modalConsent.checked) {
          e.preventDefault();
          alert('Для отправки сообщения необходимо подтвердить согласие на обработку персональных данных');
          modalConsent.focus();
          modalConsent.parentElement.style.outline = '2px solid var(--accent)';
          setTimeout(() => { modalConsent.parentElement.style.outline = 'none'; }, 2500);
          return false;
        }
      });
    });
  }

  const AUDIT = 'Бесплатный разбор сайта';



  let lastTrigger = null;

  const openModal = (order, trigger, audit) => {

    lastTrigger = trigger;

    titleEl.textContent = audit ? AUDIT : 'Написать нам';

    leadEl.textContent = audit

      ? 'Позвоните или пришлите ссылку на сайт в Telegram или WhatsApp — посмотрим первый экран, формы и мобильную версию и пришлём короткий список правок. Доступы не нужны.'

      : 'Позвоните — обсудим задачу за 10 минут и сориентируем по цене. Удобнее написать? Telegram и WhatsApp откроются с готовым сообщением.';

    const text = audit

      ? 'Здравствуйте! Хочу бесплатный разбор сайта. Ссылка: '

      : (order ? `Здравствуйте! Интересует: ${order}.` : 'Здравствуйте! Хочу обсудить проект.');

    tgBtn.href = tgLink(text);

    waBtn.href = waLink(text);

    dialog.showModal();

    dialog.querySelector('.btn-primary').focus();

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





// Полноэкранный просмотр сайтов в портфолио (Lightbox)

(() => {

  const triggers = document.querySelectorAll('[data-lightbox]');

  if (!triggers.length) return;



  const items = Array.from(triggers).map((el) => ({

    el,

    src: el.getAttribute('data-lightbox'),

    title: el.getAttribute('data-title') || '',

    tag: el.getAttribute('data-tag') || '',

  }));



  let lb = document.getElementById('portfolio-lightbox');

  if (!lb) {

    lb = document.createElement('div');

    lb.id = 'portfolio-lightbox';

    lb.className = 'lightbox';

    lb.setAttribute('role', 'dialog');

    lb.setAttribute('aria-modal', 'true');

    lb.setAttribute('aria-label', 'Просмотр сайта');

    lb.hidden = true;

    lb.innerHTML = `

      <div class="lightbox-backdrop" data-close></div>

      <div class="lightbox-panel">

        <header class="lightbox-header">

          <div class="lightbox-info">

            <span class="lightbox-tag" id="lb-tag"></span>

            <h3 class="lightbox-title" id="lb-title"></h3>

          </div>

          <div class="lightbox-toolbar">

            <span class="lightbox-counter"><span id="lb-curr">1</span> / <span id="lb-total">${items.length}</span></span>

            <button type="button" class="lightbox-btn" id="lb-prev" aria-label="Предыдущий проект" title="Предыдущий (←)">

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>

            </button>

            <button type="button" class="lightbox-btn" id="lb-next" aria-label="Следующий проект" title="Следующий (→)">

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>

            </button>

            <button type="button" class="lightbox-btn" id="lb-zoom" aria-label="Переключить масштаб" title="Масштаб (100% / по ширине)">

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>

            </button>

            <button type="button" class="lightbox-btn lightbox-btn-close" id="lb-close" data-close aria-label="Закрыть (Esc)" title="Закрыть (Esc)">

              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>

            </button>

          </div>

        </header>

        

        <div class="lightbox-swipe-hint" id="lb-swipe-hint" aria-hidden="true">

          <span class="swipe-hand-icon">

            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/>

              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/>

              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>

              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>

            </svg>

          </span>

          <span class="swipe-text">Свайп для перелистывания</span>

          <svg class="swipe-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">

            <polyline points="7 17 2 12 7 7"/>

            <polyline points="17 7 22 12 17 17"/>

            <line x1="2" y1="12" x2="22" y2="12"/>

          </svg>

        </div>

        <div class="lightbox-body" id="lb-body">

          <div class="lightbox-loader" id="lb-loader"><div class="lightbox-spinner"></div></div>

          <div class="lightbox-canvas" id="lb-canvas">

            <img id="lb-img" class="lightbox-img" src="" alt="">

          </div>

        </div>

      </div>

    `;

    document.body.appendChild(lb);

  }



  const titleEl = lb.querySelector('#lb-title');

  const tagEl = lb.querySelector('#lb-tag');

  const currEl = lb.querySelector('#lb-curr');

  const prevBtn = lb.querySelector('#lb-prev');

  const nextBtn = lb.querySelector('#lb-next');

  const zoomBtn = lb.querySelector('#lb-zoom');

  const imgEl = lb.querySelector('#lb-img');

  const bodyEl = lb.querySelector('#lb-body');

  const canvasEl = lb.querySelector('#lb-canvas');

  const loaderEl = lb.querySelector('#lb-loader');



  let currentIndex = 0;

  let isZoomed = false;

  let lastFocus = null;



  const showItem = (idx) => {

    if (idx < 0) idx = items.length - 1;

    if (idx >= items.length) idx = 0;

    currentIndex = idx;

    const item = items[idx];



    titleEl.textContent = item.title;

    tagEl.textContent = item.tag;

    currEl.textContent = String(idx + 1);

    isZoomed = false;

    canvasEl.classList.remove('is-zoomed');

    zoomBtn.classList.remove('is-active');



    loaderEl.classList.add('active');

    imgEl.style.opacity = '0';

    bodyEl.scrollTop = 0;



    const preloader = new Image();

    preloader.onload = () => {

      imgEl.src = item.src;

      imgEl.alt = item.title;

      imgEl.style.opacity = '1';

      loaderEl.classList.remove('active');

    };

    preloader.onerror = () => {

      loaderEl.classList.remove('active');

      imgEl.style.opacity = '1';

    };

    preloader.src = item.src;

  };



  const hintEl = lb.querySelector('#lb-swipe-hint');

  let hintTimer = null;

  const triggerSwipeHint = () => {

    if (!hintEl) return;

    clearTimeout(hintTimer);

    hintEl.classList.add('is-visible');

    hintTimer = setTimeout(() => {

      hintEl.classList.remove('is-visible');

    }, 4500);

  };



  const openLightbox = (idx, trigger) => {

    triggerSwipeHint();

    lastFocus = trigger || document.activeElement;

    lb.hidden = false;

    document.body.classList.add('lightbox-open');

    showItem(idx);

    const closeBtn = lb.querySelector('#lb-close');

    if (closeBtn) closeBtn.focus();

  };



  const closeLightbox = () => {

    if (lb.hidden) return;

    if (hintEl) hintEl.classList.remove('is-visible');

    clearTimeout(hintTimer);

    lb.hidden = true;

    document.body.classList.remove('lightbox-open');

    imgEl.src = '';

    isZoomed = false;

    canvasEl.classList.remove('is-zoomed');

    zoomBtn.classList.remove('is-active');

    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();

  };



  triggers.forEach((el, index) => {

    el.addEventListener('click', (e) => {

      e.preventDefault();

      openLightbox(index, el);

    });

    el.addEventListener('keydown', (e) => {

      if (e.key === 'Enter' || e.key === ' ') {

        e.preventDefault();

        openLightbox(index, el);

      }

    });

  });



  prevBtn.addEventListener('click', () => showItem(currentIndex - 1));

  nextBtn.addEventListener('click', () => showItem(currentIndex + 1));



  zoomBtn.addEventListener('click', () => {

    isZoomed = !isZoomed;

    canvasEl.classList.toggle('is-zoomed', isZoomed);

    zoomBtn.classList.toggle('is-active', isZoomed);

  });



  lb.addEventListener('click', (e) => {

    if (e.target.hasAttribute('data-close') || e.target.closest('[data-close]')) {

      closeLightbox();

    }

  });





  // Свайп влево и вправо на мобильных устройствах

  let touchStartX = 0;

  let touchStartY = 0;

  let touchEndX = 0;

  let touchEndY = 0;

  let isSwiping = false;



  bodyEl.addEventListener('touchstart', (e) => {

    if (e.touches.length === 1) {

      touchStartX = e.touches[0].clientX;

      touchStartY = e.touches[0].clientY;

      touchEndX = touchStartX;

      touchEndY = touchStartY;

      isSwiping = true;

    } else {

      isSwiping = false;

    }

  }, { passive: true });



  bodyEl.addEventListener('touchmove', (e) => {

    if (!isSwiping || e.touches.length !== 1) return;

    touchEndX = e.touches[0].clientX;

    touchEndY = e.touches[0].clientY;

  }, { passive: true });



  bodyEl.addEventListener('touchend', (e) => {

    if (!isSwiping) return;

    isSwiping = false;

    const diffX = touchEndX - touchStartX;

    const diffY = touchEndY - touchStartY;

    // Порог свайпа по горизонтали: 45px и преобладание горизонтального движения

    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {

      if (diffX < 0) {

        showItem(currentIndex + 1);

      } else {

        showItem(currentIndex - 1);

      }

    }

  }, { passive: true });



    document.addEventListener('keydown', (e) => {

    if (lb.hidden) return;

    if (e.key === 'Escape') closeLightbox();

    else if (e.key === 'ArrowLeft') showItem(currentIndex - 1);

    else if (e.key === 'ArrowRight') showItem(currentIndex + 1);

  });

})();

