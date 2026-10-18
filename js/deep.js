// Тёмная зона внизу главной: подгружаем 3D-сцену, только когда посетитель к ней подходит.
// Первый экран и цены от этого не тяжелеют. Без WebGL или import map показываем статичную сферу (класс no-webgl).
const root = document.documentElement;
const deep = document.getElementById('deep');
const canvas = deep?.querySelector('.deep-canvas');
const SCENE = './scene3d.js?v=4';

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

// Срабатывает один раз, когда зона подошла на указанное расстояние
const near = (margin, fn) => {
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    io.disconnect();
    fn();
  }, { rootMargin: `${margin} 0px` });
  io.observe(deep);
};

if (deep && canvas) {
  if (!hasWebGL() || !HTMLScriptElement.supports?.('importmap')) {
    fallback();
  } else {
    // За 2–3 экрана только скачиваем модули: это не нагружает страницу
    near('2400px', () => {
      [new URL(SCENE, import.meta.url).href, new URL('/vendor/three/three.module.min.js', location.href).href].forEach((href) => {
        const l = document.createElement('link');
        l.rel = 'modulepreload';
        l.href = href;
        document.head.append(l);
      });
    });
    // За экран до зоны запускаем сцену: сборка шейдеров занимает видеокарту, поэтому не раньше
    near('900px', () => {
      import(SCENE)
        .then((m) => m.start(deep, canvas))
        .catch(fallback);
    });
  }
}
