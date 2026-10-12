// Тёмная зона внизу главной: подгружаем 3D-сцену, только когда посетитель к ней подходит.
// Первый экран и цены от этого не тяжелеют. Без WebGL или import map показываем статичную сферу (класс no-webgl).
const root = document.documentElement;
const deep = document.getElementById('deep');
const canvas = deep?.querySelector('.deep-canvas');

const fallback = () => root.classList.add('no-webgl');

// Проверяем WebGL2 заранее, чтобы three.js не писал ошибок в консоль на старых устройствах
const hasWebGL = () => {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return !!gl;
  } catch (e) {
    return false;
  }
};

if (deep && canvas) {
  if (!hasWebGL() || !HTMLScriptElement.supports?.('importmap')) {
    fallback();
  } else {
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      import('./scene3d.js?v=2')
        .then((m) => m.start(deep, canvas))
        .catch(fallback);
    }, { rootMargin: '1800px 0px' }); // заранее, примерно за два экрана: к моменту прокрутки сцена готова
    io.observe(deep);
  }
}
