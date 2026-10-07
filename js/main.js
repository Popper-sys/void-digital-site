// Мобильное меню
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
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

// Форма заявки: отправка в Telegram через серверную функцию (functions/lead.js).
// Если функция недоступна (локально или не настроена) — показываем ссылку на Telegram.
// Одна и та же логика работает для формы на странице контактов и для всплывающей формы.
const TELEGRAM_URL = 'https://t.me/aa343432';
const LEAD_ENDPOINT = '/api/lead';

const setupLeadForm = (form) => {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  const showFallback = () => {
    status.textContent = 'Не удалось отправить заявку. Напишите нам в Telegram: ';
    const link = document.createElement('a');
    link.href = TELEGRAM_URL;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = '@aa343432';
    status.appendChild(link);
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    button.disabled = true;
    status.textContent = 'Отправляем…';
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.textContent = 'Спасибо! Заявка отправлена, ответим в ближайшее время.';
    } catch {
      showFallback();
    } finally {
      button.disabled = false;
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

// Всплывающая форма: открывается по клику на любой элемент с data-order="Что нужно сделать".
// Без поддержки <dialog> такие ссылки просто ведут на страницу контактов.
const orderTriggers = document.querySelectorAll('[data-order]');
if (orderTriggers.length && typeof HTMLDialogElement === 'function') {
  const dialog = document.createElement('dialog');
  dialog.className = 'modal';
  dialog.setAttribute('aria-labelledby', 'modal-title');
  dialog.innerHTML = `
    <button class="modal-close" type="button" aria-label="Закрыть">×</button>
    <h2 id="modal-title">Оставить заявку</h2>
    <p class="muted">Расскажите о задаче — ответим с вопросами и предварительной оценкой.</p>
    <form class="form">
      <label class="hp" aria-hidden="true">Не заполняйте это поле<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
      <label>Ваше имя<input name="name" type="text" required autocomplete="name"></label>
      <label>Телефон, Telegram или email<input name="contact" type="text" required></label>
      <label>Кто вы
        <select name="client">
          <option value="small">Малый бизнес или эксперт</option>
          <option value="shop">Интернет-магазин</option>
          <option value="b2b">Компания / B2B</option>
          <option value="tender">Тендер или госзаказ</option>
          <option value="other">Другое</option>
        </select>
      </label>
      <label>Что нужно сделать
        <select name="type">
          <option>Лендинг или сайт-визитка</option>
          <option>Интернет-магазин</option>
          <option>Веб-приложение или бот</option>
          <option>Редизайн или доработка сайта</option>
          <option>Сопровождение сайта</option>
          <option>Другое</option>
        </select>
      </label>
      <label>Коротко о задаче<textarea name="message"></textarea></label>
      <button class="btn btn-primary" type="submit">Отправить заявку</button>
      <p class="form-status" role="status"></p>
    </form>`;
  document.body.appendChild(dialog);

  const modalForm = dialog.querySelector('form');
  const typeSelect = modalForm.querySelector('select[name="type"]');
  const modalClient = modalForm.querySelector('select[name="client"]');
  const modalStatus = modalForm.querySelector('.form-status');
  setupLeadForm(modalForm);

  let lastTrigger = null;
  const openModal = (order, trigger) => {
    lastTrigger = trigger;
    if ([...typeSelect.options].some((o) => o.value === order)) typeSelect.value = order;
    if (order === 'Интернет-магазин') modalClient.value = 'shop';
    modalStatus.textContent = '';
    dialog.showModal();
    modalForm.querySelector('input[name="name"]').focus();
  };

  orderTriggers.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(el.dataset.order, el);
    });
    if (el.getAttribute('role') === 'button') {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(el.dataset.order, el); }
      });
    }
  });

  dialog.querySelector('.modal-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { if (lastTrigger) lastTrigger.focus(); });
}
