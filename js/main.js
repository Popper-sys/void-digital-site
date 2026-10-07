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
// Если функция недоступна (локально или не настроена) — открываем письмо как запасной вариант.
const CONTACT_EMAIL = 'hello@example.com'; // TODO: укажите свою почту
const LEAD_ENDPOINT = '/api/lead';
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  const button = form.querySelector('button[type="submit"]');

  const mailtoFallback = (d) => {
    const subject = `Заявка с сайта: ${d.type}`;
    const body = `Имя: ${d.name}\nКонтакт: ${d.contact}\nЧто нужно: ${d.type}\n\n${d.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = `Не удалось отправить напрямую — открываем почту. Или напишите на ${CONTACT_EMAIL}.`;
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
      status.textContent = 'Спасибо! Заявка отправлена, отвечу в ближайшее время.';
    } catch {
      mailtoFallback(data);
    } finally {
      button.disabled = false;
    }
  });
}
