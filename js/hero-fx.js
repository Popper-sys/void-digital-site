// Первый экран: наклон макета браузера за курсором и «магнитные» кнопки.
// Только для мыши и без системного «уменьшить движение». Появление заголовка и уведомления — в CSS.
(() => {
  // Подпись внизу: знак собирается, когда до него долистали; свет за знаком следует за курсором
  const sign = document.querySelector('.sign');
  if (sign) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { sign.classList.add('in'); io.disconnect(); } }, { threshold: 0.35 });
      io.observe(sign);
    } else sign.classList.add('in');
    const stage = sign.querySelector('.sign-stage');
    if (stage && matchMedia('(hover: hover) and (pointer: fine)').matches) {
      sign.addEventListener('pointermove', (e) => {
        const r = stage.getBoundingClientRect();
        stage.style.setProperty('--gx', `${Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)).toFixed(1)}%`);
        stage.style.setProperty('--gy', `${Math.max(0, Math.min(100, ((e.clientY - r.top) / r.height) * 100)).toFixed(1)}%`);
      });
      sign.addEventListener('pointerleave', () => { stage.style.removeProperty('--gx'); stage.style.removeProperty('--gy'); });
    }
  }

  const hero = document.querySelector('.hero-v2');
  if (!hero) return;

  // Заявка «прилетает», когда макет на экране (на телефоне он ниже первого экрана)
  const visual = hero.querySelector('.hero-visual');
  if (visual && 'IntersectionObserver' in window) {
    visual.classList.add('tg-wait');
    const go = () => { io.disconnect(); visual.classList.remove('tg-wait'); };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) go(); }, { threshold: 0.5 });
    io.observe(visual);
    // Страховка: карточка не должна остаться невидимой, даже если наблюдатель не сработал
    setTimeout(go, 6000);
  }

  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Наклон макета: считаем от центра первого экрана, обновляем раз за кадр
  const browser = hero.querySelector('.browser');
  let raf = 0, px = 0, py = 0;
  const apply = () => {
    raf = 0;
    browser.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
    browser.style.setProperty('--ry', `${(px * 9).toFixed(2)}deg`);
    browser.style.setProperty('--gx', `${(50 + px * 60).toFixed(1)}%`);
    browser.style.setProperty('--gy', `${(50 + py * 60).toFixed(1)}%`);
  };
  if (browser) {
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      px = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width - 0.5) * 2));
      py = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height - 0.5) * 2));
      browser.classList.add('is-tilting');
      if (!raf) raf = requestAnimationFrame(apply);
    });
    hero.addEventListener('pointerleave', () => {
      px = py = 0;
      browser.classList.remove('is-tilting');
      if (!raf) raf = requestAnimationFrame(apply);
    });
  }

  // Магнитные кнопки: тянутся за курсором на треть расстояния, не дальше 10px
  hero.querySelectorAll('.hero-actions .btn').forEach((btn) => {
    btn.classList.add('magnetic');
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      const dx = Math.max(-10, Math.min(10, (e.clientX - r.left - r.width / 2) / 3));
      const dy = Math.max(-8, Math.min(8, (e.clientY - r.top - r.height / 2) / 3));
      btn.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.translate = ''; });
  });
})();
