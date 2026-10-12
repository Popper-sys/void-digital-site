// 3D-сцена тёмной зоны внизу главной: жидкое стекло, которое постепенно «углубляется» от блока к блоку.
// Подгружается из js/deep.js, только когда посетитель подошёл к тёмной зоне.
// Отражения от цветной «студии», свечение бликов (bloom), вступление, волна от касания, закручивание формы,
// в финале — слово VOID за стеклом. Где стоит объект, задают data-scene у секций и data-scene-target внутри них.
import * as THREE from 'three';
import { EffectComposer } from '../vendor/three/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../vendor/three/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../vendor/three/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from '../vendor/three/jsm/postprocessing/OutputPass.js';

// Симплекс-шум 3D (Ashima Arts, MIT)
const NOISE = /* glsl */`
  vec3 vdMod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 vdMod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 vdPermute(vec4 x) { return vdMod289(((x * 34.0) + 10.0) * x); }
  vec4 vdTaylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float vdNoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = vdMod289(i);
    vec4 p = vdPermute(vdPermute(vdPermute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = vdTaylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 105.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }
`;

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarse = matchMedia('(pointer: coarse)').matches;
// Облегчённый режим для телефонов и слабых устройств: без постобработки, без разложения света в стекле,
// ниже чёткость и реже сетка. Внешне почти то же, а кадров в разы больше
const lite = coarse || (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4;

export function start(deep, canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  init(deep, canvas, renderer);
  document.documentElement.classList.add('deep-3d');
}

// Студия для отражений: тёмная комната с цветными световыми полосами (значения выше 1 — это яркий свет)
function makeStudio() {
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.SphereGeometry(20, 32, 16), new THREE.MeshBasicMaterial({ color: 0x040406, side: THREE.BackSide })));
  const panel = (w, h, color, k, x, y, z) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), side: THREE.DoubleSide }));
    m.position.set(x, y, z);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  panel(12, 2.4, '#ffffff', 3.5, 0, 8, 3);    // верхний софтбокс
  panel(1.6, 14, '#8b7bff', 7, -8, 0, 2);     // левая фиолетовая полоса
  panel(1.6, 14, '#5ec8ff', 6, 8, 1, -1);     // правая голубая полоса
  panel(10, 1.4, '#ff7bd5', 5, 0, -7, -3);    // нижняя розовая
  panel(1.6, 1.6, '#ffffff', 14, 4, 3, 8);    // точечный блик спереди
  panel(0.5, 9, '#ffffff', 6, -3, 0, 9);      // тонкая белая полоса спереди слева
  return env;
}

function init(deep, canvas, renderer) {
  const BG = new THREE.Color('#07070a');
  renderer.setClearColor(BG, 1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  let dpr = Math.min(devicePixelRatio, lite ? 1.5 : 2);
  renderer.setPixelRatio(dpr);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 7);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(makeStudio(), 0.02).texture;
  pmrem.dispose();

  // Постобработка (только в полном режиме): сглаживание (MSAA) + мягкое свечение самых ярких бликов.
  // В облегчённом режиме рисуем сразу на экран со встроенным сглаживанием холста
  let composer = null;
  let bloom = null;
  if (!lite) {
    const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.6, 0.55, 0.8);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  // ---------- Фон: тёмная плоскость с мягкими цветными пятнами
  const backdropUniforms = {
    uTime: { value: 0 },
    uBg: { value: BG.clone() },
    uA: { value: new THREE.Color('#8b7bff') },
    uB: { value: new THREE.Color('#5ec8ff') },
    uCenter: { value: new THREE.Vector2() },
  };
  const backdrop = new THREE.Mesh(
    new THREE.PlaneGeometry(60, 36),
    new THREE.ShaderMaterial({
      uniforms: backdropUniforms,
      vertexShader: /* glsl */`
        varying vec2 vPos;
        void main() {
          vPos = (modelMatrix * vec4(position, 1.0)).xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
      fragmentShader: /* glsl */`
        uniform float uTime; uniform vec3 uBg; uniform vec3 uA; uniform vec3 uB; uniform vec2 uCenter;
        varying vec2 vPos;
        void main() {
          vec2 c1 = uCenter + vec2(0.35 * sin(uTime * 0.21), 0.25 * cos(uTime * 0.17) + 0.15);
          vec2 c2 = uCenter + vec2(-1.6 + 0.8 * cos(uTime * 0.13), -0.9 + 0.5 * sin(uTime * 0.19));
          float g1 = exp(-dot(vPos - c1, vPos - c1) / 3.2);
          float g2 = exp(-dot(vPos - c2, vPos - c2) / 9.0);
          vec3 col = uBg + uA * g1 * 0.55 + uB * g2 * 0.12;
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    })
  );
  backdrop.position.z = -6;
  scene.add(backdrop);

  // ---------- Огромное слово VOID за объектом: стекло его искажает и раскладывает на цвета
  const WORD_Z = -1.6;
  const wordCanvas = document.createElement('canvas');
  wordCanvas.width = 1600;
  wordCanvas.height = 640;
  const wordTex = new THREE.CanvasTexture(wordCanvas);
  wordTex.colorSpace = THREE.SRGBColorSpace;
  wordTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const drawWord = () => {
    const g = wordCanvas.getContext('2d');
    g.clearRect(0, 0, 1600, 640);
    g.font = '800 560px Manrope, system-ui, sans-serif';
    if ('letterSpacing' in g) g.letterSpacing = '-24px';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    const grd = g.createLinearGradient(0, 0, 1600, 0);
    grd.addColorStop(0, '#ffffff');
    grd.addColorStop(0.55, '#e4e0ff');
    grd.addColorStop(1, '#bdb4ff');
    g.fillStyle = grd;
    g.fillText('VOID', 800, 350);
    wordTex.needsUpdate = true;
  };
  drawWord();
  document.fonts?.load('800 100px Manrope').then(drawWord, () => {});
  const wordMat = new THREE.MeshBasicMaterial({ map: wordTex, alphaToCoverage: true, color: new THREE.Color(0, 0, 0) });
  const word = new THREE.Mesh(new THREE.PlaneGeometry(1, 640 / 1600), wordMat);
  word.position.z = WORD_Z;
  scene.add(word);
  const WORD_BRIGHT = 0.8; // тусклее HTML-текста, чтобы не спорить с заголовком

  // ---------- Всё, что двигается вместе с объектом
  const rig = new THREE.Group();
  scene.add(rig);

  const RADIUS = 1.15;
  const blobUniforms = {
    uTime: { value: 0 },
    uAmp: { value: 0.15 },
    uFreq: { value: 0.85 },
    uTwist: { value: 0 },
    uRadius: { value: RADIUS },
    uPointerDir: { value: new THREE.Vector3(0, 0, 1) },
    uPush: { value: 0 },
    uRipDir: { value: new THREE.Vector3(0, 0, 1) },
    uRipT: { value: 99 },
  };
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    roughness: 0.035,
    transmission: 1,
    thickness: 1.3,
    ior: 1.6,
    dispersion: lite ? 0 : 6,
    iridescence: 0.85,
    iridescenceIOR: 1.35,
    iridescenceThicknessRange: [120, 700],
    clearcoat: lite ? 0 : 1,
    clearcoatRoughness: 0.03,
    attenuationColor: new THREE.Color('#8b7bff'),
    attenuationDistance: 4.5,
    envMapIntensity: 1.5,
    specularIntensity: 1,
  });
  glass.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, blobUniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>
        ${NOISE}
        uniform float uTime; uniform float uAmp; uniform float uFreq; uniform float uTwist; uniform float uRadius;
        uniform vec3 uPointerDir; uniform float uPush; uniform vec3 uRipDir; uniform float uRipT;
        float vdDisp(vec3 d) {
          float n = vdNoise(d * uFreq + vec3(uTime * 0.22, uTime * 0.17, -uTime * 0.12)) * uAmp;
          n += vdNoise(d * uFreq * 1.9 - vec3(uTime * 0.1)) * uAmp * 0.16;
          n += uPush * 0.3 * smoothstep(0.55, 1.0, dot(d, uPointerDir));
          // Волна от точки касания: кольцо бежит по поверхности и затухает
          float ang = acos(clamp(dot(d, uRipDir), -1.0, 1.0));
          float front = ang - uRipT * 1.7;
          n += 0.085 * sin(front * 16.0) * exp(-front * front * 5.0) * exp(-uRipT * 0.8);
          return n;
        }
        // Форма: сфера + смещение, затем закручивание вокруг вертикальной оси
        vec3 vdShape(vec3 d) {
          vec3 p = d * (uRadius + vdDisp(d));
          float a = uTwist * p.y;
          float c = cos(a), s = sin(a);
          p.xz = mat2(c, -s, s, c) * p.xz;
          return p;
        }`)
      // Нормаль считаем по двум соседним точкам формы
      .replace('#include <beginnormal_vertex>', `
        vec3 vdDir = normalize(position);
        vec3 vdT = normalize(abs(vdDir.y) > 0.99 ? cross(vdDir, vec3(1.0, 0.0, 0.0)) : cross(vdDir, vec3(0.0, 1.0, 0.0)));
        vec3 vdB = normalize(cross(vdDir, vdT));
        vec3 vdP = vdShape(vdDir);
        vec3 vdPA = vdShape(normalize(vdDir + vdT * 0.008));
        vec3 vdPB = vdShape(normalize(vdDir + vdB * 0.008));
        vec3 objectNormal = normalize(cross(vdPA - vdP, vdPB - vdP));
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(tangent.xyz);
        #endif`)
      .replace('#include <begin_vertex>', `
        vec3 transformed = vdP;
        #ifdef USE_ALPHAHASH
          vPosition = vec3(position);
        #endif`);
  };
  // Индексированная плотная сфера: край гладкий, без граней
  const blob = new THREE.Mesh(lite ? new THREE.SphereGeometry(1, 176, 132) : new THREE.SphereGeometry(1, 384, 288), glass);
  blob.frustumCulled = false;
  rig.add(blob);

  // Кольца: яркие тонкие линии, светятся и видны сквозь стекло
  const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#8b7bff') });
  const ringMat2 = new THREE.MeshBasicMaterial({ color: new THREE.Color('#5ec8ff') });
  const rings = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.95, 0.012, lite ? 8 : 16, lite ? 200 : 360), ringMat);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.008, lite ? 8 : 16, lite ? 200 : 360), ringMat2);
  ring.rotation.set(1.25, 0.25, 0);
  ring2.rotation.set(1.05, -0.5, 0.4);
  rings.add(ring, ring2);
  rig.add(rings);

  // Хромовые спутники и одна светящаяся искра
  const chrome = lite
    ? new THREE.MeshStandardMaterial({ color: 0xf0eeff, metalness: 1, roughness: 0.08, envMapIntensity: 1.6 })
    : new THREE.MeshPhysicalMaterial({ color: 0xf0eeff, metalness: 1, roughness: 0.08, clearcoat: 1, envMapIntensity: 1.6 });
  const spark = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff7bd5').multiplyScalar(3) });
  const sats = [
    { r: 1.95, size: 0.12, speed: 0.35, tilt: 1.25, phase: 0, mat: chrome },
    { r: 2.35, size: 0.07, speed: -0.22, tilt: 1.05, phase: 2.2, mat: chrome },
    { r: 1.6, size: 0.04, speed: 0.6, tilt: 0.4, phase: 4.1, mat: spark },
  ].map((s) => {
    const m = new THREE.Mesh(new THREE.SphereGeometry(s.size, lite ? 32 : 64, lite ? 24 : 48), s.mat);
    rig.add(m);
    return { ...s, mesh: m };
  });

  const key = new THREE.DirectionalLight(0xffffff, 1.4);
  key.position.set(3, 4, 5);
  const pA = new THREE.PointLight(new THREE.Color('#8b7bff'), 30);
  pA.position.set(-3, -1.5, 3);
  const pB = new THREE.PointLight(new THREE.Color('#5ec8ff'), 18);
  pB.position.set(3.5, 2, 2);
  scene.add(key, pA, pB);

  // Звёздная пыль
  const dustCount = lite ? 220 : 520;
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 18;
    dustPos[i * 3 + 1] = -16 + Math.random() * 24;
    dustPos[i * 3 + 2] = -5 + Math.random() * 10;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dotCanvas = document.createElement('canvas');
  dotCanvas.width = dotCanvas.height = 32;
  const dg = dotCanvas.getContext('2d');
  const grad = dg.createRadialGradient(16, 16, 0, 16, 16, 16);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  dg.fillStyle = grad;
  dg.fillRect(0, 0, 32, 32);
  const dustMat = new THREE.PointsMaterial({
    size: 0.045, map: new THREE.CanvasTexture(dotCanvas), color: new THREE.Color('#c4bfff'),
    transparent: true, opacity: 0, depthWrite: false, sizeAttenuation: true,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  scene.add(dust);

  // ---------- Состояния сцены по уровням (data-scene на секциях)
  // fx: смещение по горизонтали в долях полуширины экрана; y: в единицах сцены; s: масштаб; tw: закручивание;
  // o: видимость сцены; r: кольца, спутники и пыль; wd: слово за стеклом; bl: свечение; rc: реакция на курсор и касание
  const S = (fx, y, s, amp, freq, tw, c1, c2, o, r, wd, bl, rc) => ({ fx, y, s, amp, freq, tw, o, r, wd, bl, rc, c1: new THREE.Color(c1), c2: new THREE.Color(c2) });
  const V = '#8b7bff', C = '#5ec8ff', P = '#ff7bd5';
  // fx/y/s у блоков с data-scene-target пересчитываются по месту на странице (см. measure)
  const DESKTOP = {
    fade: S(0.5, 0, 0.6, 0.1, 0.8, 0, V, C, 0, 0, 0, 0, 0),
    wow: S(0.5, 0, 0.8, 0.12, 0.85, 0, V, C, 1, 0, 0, 0.3, 1),
    guarantees: S(0.84, 0.95, 0.38, 0.14, 0.95, 0.5, C, P, 0.85, 1, 0, 0.45, 1),
    who: S(-0.6, 0, 0.5, 0.13, 0.95, 0.8, V, P, 1, 1, 0, 0.5, 1),
    faq: S(0.86, -0.6, 0.38, 0.14, 1.0, 1.0, C, V, 0.3, 0.6, 0, 0.3, 0),
    audit: S(0.84, 0.6, 0.36, 0.15, 1.0, 0.6, P, V, 0.55, 1, 0, 0.45, 1),
    final: S(0, 0.5, 0.7, 0.15, 0.9, 0.4, V, P, 1, 1, 1, 0.85, 1),
  };
  const MOBILE = {
    fade: S(0, 0.8, 0.5, 0.1, 0.8, 0, V, C, 0, 0, 0, 0, 0),
    wow: S(0, 0.8, 0.5, 0.12, 0.85, 0, V, C, 1, 0, 0, 0.25, 1),
    guarantees: S(0.75, 1.5, 0.3, 0.14, 0.95, 0.5, C, P, 0.35, 1, 0, 0.35, 0),
    who: S(0, 0.8, 0.4, 0.13, 0.95, 0.8, V, P, 1, 1, 0, 0.4, 1),
    faq: S(0.8, 1.5, 0.3, 0.14, 1.0, 1.0, C, V, 0, 0.6, 0, 0.2, 0),
    audit: S(0.8, 1.5, 0.3, 0.15, 1.0, 0.6, P, V, 0.3, 1, 0, 0.35, 0),
    final: S(0, 0.6, 0.5, 0.15, 0.9, 0.4, V, P, 1, 1, 1, 0.65, 1),
  };
  const KEYS = ['fx', 'y', 's', 'amp', 'freq', 'tw', 'o', 'r', 'wd', 'bl', 'rc'];
  const sections = [...deep.querySelectorAll('[data-scene]')];
  let table = DESKTOP;
  let anchors = [];
  let halfW = 1;
  let halfH = 1;
  let isMobile = false;
  const depthK = (camera.position.z - WORD_Z) / camera.position.z;

  function measure() {
    const w = innerWidth;
    const h = innerHeight;
    renderer.setSize(w, h, false);
    if (composer) {
      composer.setPixelRatio(dpr);
      composer.setSize(w, h);
    }
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    halfW = halfH * camera.aspect;
    const mobile = w < 720 || w / h < 0.85;
    isMobile = mobile;
    table = mobile ? MOBILE : DESKTOP;
    anchors = sections.map((s) => {
      const r = s.getBoundingClientRect();
      const base = table[s.dataset.scene] || table.wow;
      // Место под объект: внутри блока или (data-scene-follow) в соседнем блоке
      const el = s.querySelector('[data-scene-target]') || (s.dataset.sceneFollow ? deep.querySelector(s.dataset.sceneFollow) : null);
      return { c: r.top + scrollY + r.height / 2, base, el, st: { ...base } };
    });
  }

  const tgt = { fx: 0, y: 0, s: 1, amp: 0.2, freq: 1, tw: 0, o: 0, r: 0, wd: 0, bl: 0, rc: 0, c1: new THREE.Color(), c2: new THREE.Color() };
  const smooth = (a, b, t) => { const x = Math.min(Math.max((t - a) / (b - a), 0), 1); return x * x * (3 - 2 * x); };
  let activeIndex = 0;

  // Объект едет вместе со своим местом на странице: координаты места пересчитываем каждый кадр
  // относительно холста (пока зона не прилипла к верху, холст смещён вниз)
  const stage = canvas.parentElement;
  const live = (an) => {
    if (!an.el) return an.st;
    const t = an.el.getBoundingClientRect();
    const sr = stage.getBoundingClientRect();
    const px = (2 * halfH) / innerHeight;
    an.st.fx = ((t.left + t.width / 2 - innerWidth / 2) * px) / halfW;
    an.st.y = -(t.top + t.height / 2 - (sr.top + innerHeight / 2)) * px;
    an.st.s = ((Math.min(t.width, t.height) / 2) * px / RADIUS) * 0.78;
    return an.st;
  };

  function target() {
    const c = scrollY + innerHeight / 2;
    let a = anchors[0];
    let b = anchors[0];
    let t = 0;
    if (c >= anchors[anchors.length - 1].c) {
      a = b = anchors[anchors.length - 1];
    } else {
      for (let i = 0; i < anchors.length - 1; i++) {
        if (c >= anchors[i].c && c < anchors[i + 1].c) {
          a = anchors[i]; b = anchors[i + 1];
          t = smooth(0.2, 0.8, (c - a.c) / (b.c - a.c));
          break;
        }
      }
    }
    activeIndex = anchors.indexOf(t < 0.5 ? a : b);
    const sa = live(a);
    const sb = live(b);
    for (const k of KEYS) tgt[k] = sa[k] + (sb[k] - sa[k]) * t;
    tgt.c1.lerpColors(sa.c1, sb.c1, t);
    tgt.c2.lerpColors(sa.c2, sb.c2, t);
    return tgt;
  }

  measure();
  const first = target();
  const cur = { ...first, c1: first.c1.clone(), c2: first.c2.clone() };
  let lastIndex = activeIndex;
  addEventListener('resize', measure);
  new ResizeObserver(measure).observe(deep);
  document.fonts?.ready.then(measure);

  // ---------- Курсор и касания
  const ndc = new THREE.Vector2(0, 0);
  const tilt = new THREE.Vector2(0, 0);
  let pointerActive = false;
  addEventListener('pointermove', (e) => {
    ndc.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
    pointerActive = e.pointerType === 'mouse';
  }, { passive: true });
  document.addEventListener('pointerleave', () => { pointerActive = false; });
  const raycaster = new THREE.Raycaster();
  const sphere = new THREE.Sphere();
  const hit = new THREE.Vector3();
  const localDir = new THREE.Vector3();
  let hovering = false;
  let kick = 0;

  const hitBlob = (x, y) => {
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
    blob.getWorldPosition(sphere.center);
    sphere.radius = RADIUS * cur.s * 1.05;
    return raycaster.ray.intersectSphere(sphere, hit) !== null;
  };
  const ripple = (dir) => {
    blobUniforms.uRipDir.value.copy(dir).normalize();
    blobUniforms.uRipT.value = 0;
  };
  const frontDir = () => blob.worldToLocal(camera.position.clone()).normalize();

  // Нажатие или касание объекта пускает волну из этой точки
  addEventListener('pointerdown', (e) => {
    const x = (e.clientX / innerWidth) * 2 - 1;
    const y = -(e.clientY / innerHeight) * 2 + 1;
    if (cur.rc > 0.5 && hitBlob(x, y)) {
      ripple(blob.worldToLocal(hit.clone()));
      kick = 0.12;
    }
  });

  // ---------- Кадр
  let time = 0;
  // 0 → 1 за первые ~2 секунды; ?nointro — сразу готовая сцена (для проверки)
  const instant = location.search.includes('nointro');
  let intro = reduce || instant ? 1 : 0;
  let introRippled = intro === 1;
  let frames = 0;
  let slowAcc = 0;
  let slowN = 0;
  let bloomAllowed = true;
  const clock = new THREE.Clock();
  const elastic = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -9 * t) * Math.cos(t * Math.PI * 2.6));
  const easeOut = (t) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);

  let lastY = scrollY;
  let velocity = 0;

  function frame() {
    const dt = Math.min(clock.getDelta(), 0.05);
    // Без анимации в системе время стоит: сцена статична, но следует за прокруткой
    time += reduce ? 0 : dt;
    velocity += ((scrollY - lastY) / Math.max(dt, 0.001) - velocity) * Math.min(dt * 8, 1);
    lastY = scrollY;

    const t = target();
    const k = reduce || instant ? 1 : 1 - Math.exp(-dt * 3.2);
    const kp = reduce || instant ? 1 : 1 - Math.exp(-dt * 9);
    for (const key of KEYS) cur[key] += (t[key] - cur[key]) * (key === 'fx' || key === 'y' || key === 's' ? kp : k);
    cur.c1.lerp(t.c1, k);
    cur.c2.lerp(t.c2, k);
    if (cur.o > 0.35) intro = Math.min(intro + dt / 2.2, 1);

    // Сцена ещё не проявилась: не тратим видеокарту
    canvas.style.opacity = cur.o.toFixed(3);
    if (cur.o < 0.004 && t.o < 0.004) return;

    // Вступление: объект «рождается» с пружиной, кольца раскрываются, слово проявляется снизу
    const grow = elastic(intro);
    rig.position.set(cur.fx * halfW, cur.y, 0);
    rig.scale.setScalar(cur.s * Math.max(grow, 0.001));
    // Кольца и спутники раскрываются после первого блока
    rings.visible = cur.r > 0.01;
    rings.scale.setScalar(0.55 + 0.45 * cur.r);
    ringMat.color.copy(cur.c1).multiplyScalar(1.7 * cur.r);
    ringMat2.color.copy(cur.c2).multiplyScalar(1.4 * cur.r);
    sats.forEach((s) => { s.mesh.visible = cur.r > 0.01; s.mesh.scale.setScalar(Math.max(cur.r, 0.001)); });
    if (!introRippled && intro > 0.55) { introRippled = true; ripple(frontDir()); }

    // Слово (финал) стоит ровно за объектом и шире него, буквы выглядывают по бокам
    word.visible = cur.wd > 0.01;
    // На узком экране слово во всю ширину, иначе объект закрывает его целиком
    const ww = isMobile ? 2 * halfW * depthK * 0.98 : Math.min(RADIUS * 2 * cur.s * 2.3 * depthK, 2 * halfW * depthK * 0.94);
    word.scale.set(ww, ww, 1);
    word.position.set(rig.position.x * depthK, rig.position.y * depthK - (1 - cur.wd) * 0.4, WORD_Z);
    wordMat.color.setScalar(WORD_BRIGHT * cur.wd);

    // Наклон к курсору и вращение
    tilt.x += ((pointerActive ? ndc.y : 0) * 0.35 - tilt.x) * (1 - Math.exp(-dt * 4));
    tilt.y += ((pointerActive ? ndc.x : 0) * 0.5 - tilt.y) * (1 - Math.exp(-dt * 4));
    rig.rotation.set(-tilt.x, tilt.y, 0);
    blob.rotation.y = time * 0.12;
    blob.rotation.x = Math.sin(time * 0.2) * 0.25;
    ring.rotation.z = time * 0.15;
    ring2.rotation.z = -time * 0.1;
    ring.rotation.x = 1.25 + scrollY / innerHeight * 0.25;
    sats.forEach((s) => {
      const a = time * s.speed + s.phase;
      s.mesh.position.set(Math.cos(a) * s.r, Math.sin(a) * s.r * Math.cos(s.tilt), Math.sin(a) * s.r * Math.sin(s.tilt));
    });

    // Курсор над стеклом: поверхность тянется к нему
    scene.updateMatrixWorld();
    hovering = pointerActive && cur.rc > 0.5 && hitBlob(ndc.x, ndc.y);
    if (hovering) {
      localDir.copy(blob.worldToLocal(hit.clone())).normalize();
      blobUniforms.uPointerDir.value.lerp(localDir, 1 - Math.exp(-dt * 10)).normalize();
    }
    blobUniforms.uPush.value += ((hovering ? 1 : 0) - blobUniforms.uPush.value) * (1 - Math.exp(-dt * 5));

    // Прибыли в новую секцию — по объекту пробегает волна (заметно и на телефоне)
    if (activeIndex !== lastIndex) {
      lastIndex = activeIndex;
      if (intro >= 1 && t.rc > 0.5) ripple(frontDir());
    }

    const v = Math.min(Math.abs(velocity) / 4000, 0.15);
    kick *= Math.exp(-dt * 3);
    blobUniforms.uAmp.value = cur.amp + v + kick + (1 - easeOut(intro)) * 0.25;
    blobUniforms.uFreq.value = cur.freq;
    blobUniforms.uTwist.value = cur.tw;
    blobUniforms.uTime.value = time;
    blobUniforms.uRipT.value += reduce ? 0 : dt;

    glass.attenuationColor.copy(cur.c1);
    pA.color.copy(cur.c1);
    pB.color.copy(cur.c2);
    backdropUniforms.uA.value.copy(cur.c1);
    backdropUniforms.uB.value.copy(cur.c2);
    backdropUniforms.uTime.value = time;
    backdropUniforms.uCenter.value.set(rig.position.x * 1.8, rig.position.y * 1.8);

    const useBloom = composer && bloomAllowed && cur.bl > 0.02;
    if (bloom) bloom.strength = cur.bl;

    // Пыль: появляется после первого блока, в финале летит навстречу, быстрее при быстрой прокрутке
    dust.visible = cur.r > 0.01;
    dustMat.opacity = 0.65 * cur.r;
    dust.position.y = (scrollY / innerHeight) * 0.9;
    dust.rotation.y = time * 0.01;
    const warp = cur.wd * (0.25 + Math.min(Math.abs(velocity) / 600, 6));
    if (warp > 0.01) {
      for (let i = 0; i < dustCount; i++) {
        let z = dustPos[i * 3 + 2] + warp * dt * 4;
        if (z > 5) z -= 10;
        dustPos[i * 3 + 2] = z;
      }
      dustGeo.attributes.position.needsUpdate = true;
    }
    dustMat.size = 0.045 + Math.min(warp, 3) * 0.012;

    if (useBloom) composer.render(dt);
    else renderer.render(scene, camera);

    // Автоподстройка: если кадры стабильно тяжелее ~45 в секунду, по шагам снижаем чёткость,
    // затем отключаем свечение. Первые кадры (сборка шейдеров) не считаем
    frames++;
    if (frames > 40) {
      slowAcc += dt;
      slowN++;
      if (slowN >= 60) {
        const avg = slowAcc / slowN;
        slowAcc = 0;
        slowN = 0;
        if (avg > 1 / 45) {
          if (dpr > 1.01) {
            dpr = Math.max(1, dpr * 0.8);
            renderer.setPixelRatio(dpr);
            measure();
          } else if (bloomAllowed && composer) {
            bloomAllowed = false;
          }
        }
      }
    }
  }

  // Рисуем только пока тёмная зона на экране, иначе видеокарта отдыхает
  function run() {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { clock.getDelta(); lastY = scrollY; renderer.setAnimationLoop(frame); }
      else renderer.setAnimationLoop(null);
    }).observe(deep);
  }

  if (renderer.compileAsync) renderer.compileAsync(scene, camera).then(run, run);
  else run();
}
