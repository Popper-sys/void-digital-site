# Семантическое ядро и контент-план для VOID | digital (void-digital.ru)

> **Дата генерации:** 2026-11-17 22:05:34  
> **Версия репозитория:** `main` (`e273c3f`)  
> **Сводные метрики:** 10 страниц аудита | 13 кейсов портфолио | 15 семантических кластеров | 1126 запросов ядра | 89 позиций контент-плана  
> **Команда проекта:** Argon (Архитектор) $\to$ Flash (Gemini Flash 3.5, Прораб) $\to$ Hermes $\to$ Luna (GPT-6)  

## 1. Аудит сайта: что уже есть

### 1.1. Сводная таблица существующих страниц

| URL | Title | Description | H1 | Words | JSON-LD |
|---|---|---|---|:---:|:---:|
| [`https://void-digital.ru/404.html`](https://void-digital.ru/404.html) | Страница не найдена — VOID \| digital | Такой страницы нет. Перейдите на главную, в портфолио или ра... | Такой страницы нет | 104 | ❌ |
| [`https://void-digital.ru/about`](https://void-digital.ru/about) | О нас — VOID \| digital | VOID \| digital — дизайн и разработка сайтов для малого бизне... | Мы — VOID \| digital | 237 | ❌ |
| [`https://void-digital.ru/blog-brief`](https://void-digital.ru/blog-brief) | Что подготовить перед заказом сайта — VOID \| digital | Пять вещей, которые стоит подготовить до начала работы над с... | Что подготовить перед заказом сайта | 217 | ❌ |
| [`https://void-digital.ru/blog-landing-vs-site`](https://void-digital.ru/blog-landing-vs-site) | Лендинг или многостраничный сайт — VOID \| digital | Как понять, хватит ли вашему бизнесу одной страницы и когда ... | Лендинг или многостраничный сайт: что выбрать | 193 | ❌ |
| [`https://void-digital.ru/blog`](https://void-digital.ru/blog) | Блог — VOID \| digital | Статьи о создании сайтов: как выбрать формат, подготовиться ... | Про сайты простым языком | 104 | ❌ |
| [`https://void-digital.ru/contacts`](https://void-digital.ru/contacts) | Контакты — VOID \| digital | Свяжитесь с нами, чтобы обсудить создание или сопровождение ... | Обсудим ваш проект | 167 | ❌ |
| [`https://void-digital.ru/`](https://void-digital.ru/) | VOID \| digital — сайты для малого бизнеса, заявки сразу в мессенджер, почту или CRM | Лендинги и сайты для малого бизнеса под ключ за 1–3 недели. ... | Сайт, который собирает заявки и сразу присылает туда, где вам удобно | 2099 | ✅ |
| [`https://void-digital.ru/portfolio`](https://void-digital.ru/portfolio) | Портфолио — VOID \| digital | Примеры работ: лендинги и сайты для разных ниш. | Выполненные проекты | 298 | ❌ |
| [`https://void-digital.ru/privacy`](https://void-digital.ru/privacy) | Политика обработки персональных данных — VOID \| digital | Как VOID \| digital собирает, хранит и использует персональны... | Политика обработки персональных данных | 612 | ❌ |
| [`https://void-digital.ru/services`](https://void-digital.ru/services) | Услуги и цены — VOID \| digital | Сайт-визитка от 5 000 ₽, лендинг от 15 000 ₽, сайт компании ... | Выберите формат — бонусы уже включены | 613 | ❌ |

### 1.2. Реальные услуги и цены из кодовой базы

> **Критический факт расхождения позиционирования:**  
> В исходных HTML/JS-файлах сайта заложено позиционирование «для малого бизнеса» с ценами от 5 000 ₽ (визитка 5k, лендинг 15k, сайт компании 35k, интернет-магазин 60k).  
> **Целевое позиционирование по стратегии:** High-End Digital Production, кастомный ванильный стек без оверхеда, Core Web Vitals 95+, 3D WebGL и Three.js с высоким средним чеком (от 50 000 – 150 000+ ₽).

| Продукт / Модуль | Текущий ценник в коде | Срок в коде | Роль в новом семантическом ядре |
|---|---|---|---|
| **Сайт-визитка** | от 5,000 ₽ | от 3 до 7 дней | Базовый коммерческий формат разработки |
| **Лендинг** | от 15,000 ₽ | 1–2 недели | Базовый коммерческий формат разработки |
| **Сайт компании** | от 35,000 ₽ | 2–3 недели | Базовый коммерческий формат разработки |
| **Интернет-магазин** | от 60,000 ₽ | 3–5 недель | Базовый коммерческий формат разработки |
| **Пока не знаю — подобрать формат** | от 5,000 ₽ (до 35,000 ₽) | 1–3 недели | Базовый коммерческий формат разработки |
| **Модуль: Онлайн-оплата** | +5,000 ₽ | — | Upsell-модуль калькулятора (3D, CRM, Оплата, Тексты) |
| **Модуль: Квиз или калькулятор** | +4,000 ₽ | — | Upsell-модуль калькулятора (3D, CRM, Оплата, Тексты) |
| **Модуль: Интеграция с CRM** | +3,000 ₽ | — | Upsell-модуль калькулятора (3D, CRM, Оплата, Тексты) |
| **Модуль: Онлайн-запись** | +4,000 ₽ | — | Upsell-модуль калькулятора (3D, CRM, Оплата, Тексты) |
| **Модуль: Тексты под ключ** | +4,000 ₽ | — | Upsell-модуль калькулятора (3D, CRM, Оплата, Тексты) |
| **Модуль: Английская версия** | +8,000 ₽ | — | Upsell-модуль калькулятора (3D, CRM, Оплата, Тексты) |
| **Модуль: 3D-сцена и анимации** | +8,000 ₽ | — | Upsell-модуль калькулятора (3D, CRM, Оплата, Тексты) |

### 1.3. Реестр 13 реальных кейсов портфолио (`img/portfolio/*.webp`)

| № | Проект / Название кейса | Описание кейса из верстки | Файл превью | Разрешение |
|:---:|---|---|---|:---:|
| 1 | **Магазин дизайнерской одежды OMG** | Минималистичный сайт магазина: коллекции, каталог, блок бестселлеров и условия доставки. | `omg.webp` | 660x440 WebP |
| 2 | **Частный детский сад «Солнечные дети»** | Светлый тёплый дизайн с живыми фото детей и акцентом на заботу и развитие. | `kindergarten.webp` | 660x440 WebP |
| 3 | **Банные веники оптом** | Оптовая продажа веников из берёзы, дуба и ели: ассортимент, цены от объёма заказа, о компании и контакты. | `veniki.webp` | 660x440 WebP |
| 4 | **Кофейня NØR** | Атмосферный тёмный дизайн с крупными фотографиями интерьера. | `coffee.webp` | 660x440 WebP |
| 5 | **Природный камень для ландшафта** | Каталожная подача материалов и атрибутики для ландшафтного дизайна. | `stone.webp` | 660x440 WebP |
| 6 | **Жилой комплекс «Соцветие»** | Сайт ЖК в Красноярске: преимущества, планировки, способы оплаты и офис продаж. Ведёт посетителя к выбору квартиры. | `sotsvetie.webp` | 660x440 WebP |
| 7 | **Ремонт и обслуживание спецтехники** | Услуги, проекты, цифры, подтверждающие опыт, и заявка на консультацию. | `spectech.webp` | 660x440 WebP |
| 8 | **Личный сайт предпринимателя и спикера** | Направления, выступления и проекты, понятные кнопки «Узнать больше» и «Смотреть видео». | `expert.webp` | 660x440 WebP |
| 9 | **Фитнес-клуб «СТАЛЬ»** | Контрастный дизайн в тёмной теме, расписание с цветовой разметкой, карточки тренеров и калькулятор тренировок. | `gym.webp` | 660x440 WebP |
| 10 | **Автосервис: ремонт BMW** | Тёмный премиальный стиль и заметная кнопка заявки на первом экране. | `bmw.webp` | 660x440 WebP |
| 11 | **Импорт автомобилей из Японии, Китая и Кореи** | Выразительный первый экран с автомобилем, блок преимуществ и заметная кнопка подбора. | `autoconsult.webp` | 660x440 WebP |
| 12 | **Студия маникюра** | Мягкая палитра, акцент на результате и блок популярных услуг. | `manicure.webp` | 660x440 WebP |
| 13 | **Ремонт квартир под ключ** | Понятная структура с видами ремонта и призывом к заявке. | `remont.webp` | 660x440 WebP |

### 1.4. Статус технических файлов

- **`sitemap.xml`**: Присутствует (10 URL). Все страницы указаны в чистом формате без расширения `.html`.
- **`robots.txt`**: Присутствует. Директива `Allow: /`, указан `Sitemap: https://void-digital.ru/sitemap.xml`.
- **`_redirects`**: Присутствует (8 правил). Закрывает доступ к служебным данным, тестам, документации и CSV/JSON артефактам.
- **Блог**: Раздел физически существует (`blog.html`, `blog-brief.html`, `blog-landing-vs-site.html`), ссылки присутствуют в меню и футере.

### 1.5. Выявленный технический долг и расхождения с паспортом

- ⚠️ **[CRITICAL] Блог:** ПРИСУТСТВУЕТ: найден раздел blog.html и 2 статьи (blog-brief.html, blog-landing-vs-site.html, blog.html), ссылки есть в меню шапки и подвала, страницы включены в sitemap.xml. *Влияние:* Требуется учитывать существующие 2 статьи блога при проектировании инфо-кластеров семантики.
- ⚠️ **[INFO] Кейсы портфолио:** 13 активных кейсов в portfolio.html и 13 WebP изображений 660x440. *Влияние:* Фактическая база кейсов на 1 единицу больше (13 против 12).
- ⚠️ **[WARNING] Sitemap URL /consent:** В sitemap.xml присутствует https://void-digital.ru/consent, однако файл consent.html в репозитории ОТСУТСТВУЕТ (дает 404 на проде). *Влияние:* Битый URL в sitemap.xml для поисковых краулеров.
- ⚠️ **[WARNING] Формат внутренних ссылок:** В sitemap.xml указаны URL без .html (/services, /portfolio), а во внутренних ссылках меню и футера прописаны относительные ссылки с расширением (services.html, portfolio.html). *Влияние:* Лишние 301 редиректы от Cloudflare Pages при кликах внутри сайта.
- ⚠️ **[INFO] Контактный email:** В footer на index.html и др. страницах указан mailto:voiddigital@mail.ru. *Влияние:* Почта фактически светится на сайте, расхождение с исходной директивой handoff.
- ⚠️ **[WARNING] Хостинг Cloudflare Pages vs IHC.ru:** В паспорте заявлен Cloudflare Pages, но боевой домен `void-digital.ru` физически обслуживается сервером LiteSpeed на хостинге IHC.ru (выкладка через GitHub Actions SSH/rsync `deploy-ihc.yml`).
- ⚠️ **[WARNING] Отсутствие Schema.org:** Микроразметка присутствует только на главной (1/10 страниц). Требуется внедрить `Service` на `/services`, `CreativeWork` на кейсы и `Article` в блог.
- ⚠️ **[INFO] Изображения без alt:** 1 изображение в `index.html` (`img/portfolio/sotsvetie.webp`) не имело `alt`.

## 2. Методология и допущения

### 2.1. Воронка сбора и очистки ядра

1. **Этап 1 (Генерация сырого пула фраз, Hermes $\to$ GPT-6 Luna):** сгенерировано **1 339 уникальных фраз** с фокусом на нишевый стек 3D, WebGL, скорость и кейсы.
2. **Этап 2 (Программная фильтрация и валидация Luna):**
   - Отсеяно в корзину: **69 фраз** (образовательный мусор, стоп-слова «недорого/визитка», длинные тавтологии 10+ слов).
   - Выделено в `review.csv`: **135 фраз** (11.9% от объема чистых запросов — шаблонные склейки и сегментные коллизии «3D для малого бизнеса»).
   - Сформировано чистое ядро `clean_keywords.csv`: **1 135 фраз**.
3. **Этап 5 (Предварительная нормализация перед финализацией):**
   - Удалено **9 грамматических плеоназмов** с повтором предлога «для ... для ...» (*«сайт для жилого комплекса для бизнеса»* и др.).
   - **Итоговый рабочий объем семантического ядра:** строго **1126 запросов**.

### 2.2. Источники и допущения по частотности
- **Частотность (`frequency`):** во всех таблицах установлена в `0 (estimate)`. В кодовой базе и репозитории отсутствует подключенный API-ключ Google Keyword Planner / Яндекс Вордстат. В соответствии с регламентом проекта выдумывание числовых значений категорически запрещено.
- **Рекомендация:** перед запуском контекстной рекламы и написанием лонгридов провести однократный съём точной частотности по файлу `clean_keywords.csv` через сервис парсинга.

### 2.3. Принципы кластеризации и приоритетов
- **P1 (Высокий приоритет):** нишевые коммерческие услуги студии (C01–C04, C06–C10) и бренд C13. Это ядро монетизации с максимальным чеком.
- **P2 (Средний приоритет):** отраслевые кейсы (C11–C12) и информационный кластер блога (C14–C15). Формируют экспертное доверие и долгосрочный ToFu/MoFu трафик.
- **P3 (Низкий приоритет):** головные запросы высокой конкуренции C05 («веб-студия», «создание сайтов под ключ»).

## 3. Семантическое ядро по кластерам

### 3.0. Сводная матрица всех 15 кластеров

| ID | Название кластера | Интент | Приоритет | Запросов | existing_url | Рекомендуемый Target URL |
|:---:|---|:---:|:---:|:---:|---|---|
| `C01` | **3D WebGL & Three.js Разработка** | `{'commercial': 175, 'informational': 0, 'navigational': 0}` | `P1` | **175** | `null (рекомендуется новый URL: /services/3d-webgl)` | `/services/3d-webgl` |
| `C02` | **Интерактивный дизайн & Шейдеры (GLSL, Wow-эффекты)** | `{'commercial': 142, 'informational': 0, 'navigational': 0}` | `P1` | **142** | `null (рекомендуется новый URL: /services/interactive-design)` | `/services/interactive-design` |
| `C03` | **Оптимизация скорости & Core Web Vitals 95+** | `{'commercial': 99, 'informational': 0, 'navigational': 0}` | `P1` | **99** | `null (рекомендуется новый URL: /services/speed-optimization)` | `/services/speed-optimization` |
| `C04` | **Кастомная разработка на Vanilla JS** | `{'commercial': 6, 'informational': 0, 'navigational': 0}` | `P1` | **6** | `null (рекомендуется новый URL: /services/vanilla-js)` | `/services/vanilla-js` |
| `C05` | **Создание сайтов под ключ (General Head)** | `{'commercial': 33, 'informational': 0, 'navigational': 0}` | `P3` | **33** | `https://void-digital.ru/ (index.html)` | `/` |
| `C06` | **Лендинги под ключ** | `{'commercial': 26, 'informational': 0, 'navigational': 0}` | `P1` | **26** | `https://void-digital.ru/services (анкор #landing)` | `/services#landing` |
| `C07` | **Корпоративные сайты и B2B** | `{'commercial': 41, 'informational': 0, 'navigational': 0}` | `P1` | **37** | `https://void-digital.ru/services (анкор #b2b)` | `/services#b2b` |
| `C08` | **Интернет-магазины & E-commerce** | `{'commercial': 44, 'informational': 0, 'navigational': 0}` | `P1` | **44** | `https://void-digital.ru/services (анкор #shop)` | `/services#shop` |
| `C09` | **Интерактивные калькуляторы и квизы** | `{'commercial': 65, 'informational': 0, 'navigational': 0}` | `P1` | **63** | `https://void-digital.ru/services (анкор #calc)` | `/services#calc` |
| `C10` | **Интеграции с CRM и Telegram-ботами** | `{'commercial': 38, 'informational': 0, 'navigational': 0}` | `P1` | **38** | `https://void-digital.ru/services (анкор #integrations)` | `/services#integrations` |
| `C11` | **Сопровождение, доработка и редизайн** | `{'commercial': 24, 'informational': 0, 'navigational': 0}` | `P2` | **24** | `https://void-digital.ru/services (анкор #support)` | `/services#support` |
| `C12` | **Отраслевые посадочные и кейсы портфолио** | `{'commercial': 48, 'informational': 0, 'navigational': 0}` | `P2` | **45** | `https://void-digital.ru/portfolio (portfolio.html)` | `/portfolio` |
| `C13` | **Бренд VOID | digital & Навигация** | `{'commercial': 0, 'informational': 0, 'navigational': 29}` | `P1` | **29** | `https://void-digital.ru/about, https://void-digital.ru/contacts` | `/about` |
| `C14` | **Блог: Подготовка, бриф и выбор формата сайта** | `{'commercial': 0, 'informational': 15, 'navigational': 0}` | `P2` | **15** | `https://void-digital.ru/blog-brief, https://void-digital.ru/blog-landing-vs-site` | `/blog-brief` |
| `C15` | **Блог: Технические гайды, WebGL и скорость загрузки** | `{'commercial': 0, 'informational': 350, 'navigational': 0}` | `P2` | **350** | `https://void-digital.ru/blog (blog.html — хаб блога под декомпозицию)` | `/blog` |

### 3.1. Кластер `C01`: 3D WebGL & Three.js Разработка
- **Интент кластера:** `Commercial Service` (Commercial: 175, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `null (рекомендуется новый URL: /services/3d-webgl)`
- **Рекомендуемый Target URL:** `/services/3d-webgl` (NEW_RECOMMENDED)
- **Рекомендуемый H1:** Разработка сайтов с 3D графикой и WebGL на Three.js
- **Рекомендуемый Title:** Разработка сайтов с 3D графикой и WebGL на заказ — студия VOID | digital
- **Количество запросов в кластере:** 175

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| разработка сайта с 3d под ключ | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с 3d для бизнеса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с 3d для компании | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с 3d с анимацией | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с 3d премиум-класса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с 3d с интеграциями | 0 (estimate) | commercial | niche | P1 |
| создание сайта с webgl под ключ | 0 (estimate) | commercial | niche | P1 |
| создание сайта с webgl для бизнеса | 0 (estimate) | commercial | niche | P1 |
| создание сайта с webgl для компании | 0 (estimate) | commercial | niche | P1 |
| создание сайта с webgl с анимацией | 0 (estimate) | commercial | niche | P1 |
| создание сайта с webgl премиум-класса | 0 (estimate) | commercial | niche | P1 |
| создание сайта с webgl с интеграциями | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на three.js под ключ | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на three.js для бизнеса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на three.js для компании | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на three.js с анимацией | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на three.js премиум-класса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на three.js с интеграциями | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта для компании | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта с анимацией | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта для малого бизнеса | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта премиум-класса | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта с технической поддержкой | 0 (estimate) | commercial | niche | P1 |
| создание интерактивного сайта с интеграциями | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ для бизнеса | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ с адаптацией под мобильные | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ с анимацией | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ для малого бизнеса | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ премиум-класса | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ с интеграциями | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с three.js | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с webgl | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с three.js | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с webgl | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с three.js | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с webgl | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с three.js | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с webgl | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с three.js | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с webgl | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с three.js | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с webgl | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с three.js | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с webgl | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с three.js | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с webgl | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с three.js | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с webgl | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с three.js | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с three.js | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с webgl | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с webgl | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с интерактивной физикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с 3d-графикой | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с анимированными объектами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с объемной типографикой | 0 (estimate) | commercial | niche | P1 |
| оптимизация изображений сайта заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация изображений сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация изображений сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация изображений сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| оптимизация изображений сайта после аудита | 0 (estimate) | commercial | niche | P1 |
| оптимизация javascript сайта заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация javascript сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация javascript сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация javascript сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| оптимизация javascript сайта после аудита | 0 (estimate) | commercial | niche | P1 |
| оптимизация сайта без тяжелых фреймворков заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация сайта без тяжелых фреймворков для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация сайта без тяжелых фреймворков под ключ | 0 (estimate) | commercial | niche | P1 |
| заявки сайта в hubspot под ключ | 0 (estimate) | commercial | niche | P1 |
| заявки сайта в hubspot для бизнеса | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с salesforce под ключ | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с salesforce для бизнеса | 0 (estimate) | commercial | niche | P1 |
| онлайн-запись на сайте бьюти-студии под ключ | 0 (estimate) | commercial | niche | P1 |
| онлайн-запись на сайте бьюти-студии для бизнеса | 0 (estimate) | commercial | niche | P1 |
| онлайн-запись на сайте бьюти-студии разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| онлайн-запись на сайте бьюти-студии с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |

### 3.2. Кластер `C02`: Интерактивный дизайн & Шейдеры (GLSL, Wow-эффекты)
- **Интент кластера:** `Commercial Service` (Commercial: 142, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `null (рекомендуется новый URL: /services/interactive-design)`
- **Рекомендуемый Target URL:** `/services/interactive-design` (NEW_RECOMMENDED)
- **Рекомендуемый H1:** Интерактивный дизайн и визуальные wow-эффекты на GLSL и Three.js
- **Рекомендуемый Title:** Интерактивный дизайн и шейдерная 3D анимация — VOID | digital
- **Количество запросов в кластере:** 142

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| сайт с glsl шейдерами под ключ | 0 (estimate) | commercial | niche | P1 |
| сайт с glsl шейдерами для бизнеса | 0 (estimate) | commercial | niche | P1 |
| сайт с glsl шейдерами для компании | 0 (estimate) | commercial | niche | P1 |
| сайт с glsl шейдерами с анимацией | 0 (estimate) | commercial | niche | P1 |
| сайт с glsl шейдерами премиум-класса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с параллаксом под ключ | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с параллаксом для бизнеса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с параллаксом для компании | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с параллаксом с анимацией | 0 (estimate) | commercial | niche | P1 |
| разработка сайта с параллаксом премиум-класса | 0 (estimate) | commercial | niche | P1 |
| сайт с wow эффектами под ключ | 0 (estimate) | commercial | niche | P1 |
| сайт с wow эффектами для бизнеса | 0 (estimate) | commercial | niche | P1 |
| сайт с wow эффектами для компании | 0 (estimate) | commercial | niche | P1 |
| сайт с wow эффектами премиум-класса | 0 (estimate) | commercial | niche | P1 |
| сайт с эффектом жидкого стекла под ключ | 0 (estimate) | commercial | niche | P1 |
| сайт с эффектом жидкого стекла для бизнеса | 0 (estimate) | commercial | niche | P1 |
| сайт с эффектом жидкого стекла для компании | 0 (estimate) | commercial | niche | P1 |
| сайт с эффектом жидкого стекла с анимацией | 0 (estimate) | commercial | niche | P1 |
| сайт с эффектом жидкого стекла премиум-класса | 0 (estimate) | commercial | niche | P1 |
| сайт с кинетической типографикой под ключ | 0 (estimate) | commercial | niche | P1 |
| сайт с кинетической типографикой для бизнеса | 0 (estimate) | commercial | niche | P1 |
| сайт с кинетической типографикой для компании | 0 (estimate) | commercial | niche | P1 |
| сайт с кинетической типографикой с анимацией | 0 (estimate) | commercial | niche | P1 |
| сайт с кинетической типографикой премиум-класса | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с частицами | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать лендинг с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать лендинг с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с частицами | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать сайт компании с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт компании с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с частицами | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать сайт бренда с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт бренда с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с частицами | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать сайт жилого комплекса с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт жилого комплекса с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с частицами | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать сайт автосервиса с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт автосервиса с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с частицами | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать интернет-магазин одежды с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать интернет-магазин одежды с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с частицами | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать портфолио дизайнера с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать портфолио дизайнера с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с частицами | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать сайт премиальной недвижимости с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт премиальной недвижимости с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с частицами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для застройщика с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для застройщика с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с glsl шейдерами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с частицами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с частицами | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с эффектом жидкого стекла | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с параллаксом | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с параллаксом | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с кинетической анимацией | 0 (estimate) | commercial | niche | P1 |
| разработать сайт для бренда одежды с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |
| создать сайт для бренда одежды с интерактивными шейдерами | 0 (estimate) | commercial | niche | P1 |

### 3.3. Кластер `C03`: Оптимизация скорости & Core Web Vitals 95+
- **Интент кластера:** `Commercial Service` (Commercial: 99, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `null (рекомендуется новый URL: /services/speed-optimization)`
- **Рекомендуемый Target URL:** `/services/speed-optimization` (NEW_RECOMMENDED)
- **Рекомендуемый H1:** Ускорение сайта и оптимизация Core Web Vitals до 95+ баллов
- **Рекомендуемый Title:** Оптимизация скорости сайта и Core Web Vitals под ключ — VOID | digital
- **Количество запросов в кластере:** 99

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| быстрый сайт с core web vitals 95+ под ключ | 0 (estimate) | commercial | niche | P1 |
| быстрый сайт с core web vitals 95+ для бизнеса | 0 (estimate) | commercial | niche | P1 |
| быстрый сайт с core web vitals 95+ для компании | 0 (estimate) | commercial | niche | P1 |
| быстрый сайт с core web vitals 95+ премиум-класса | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта для компании | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта с анимацией | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта для малого бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта премиум-класса | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта с технической поддержкой | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта с интеграциями | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт с высокой скоростью загрузки | 0 (estimate) | commercial | niche | P1 |
| сайт для жилого комплекса с высокой скоростью загрузки | 0 (estimate) | commercial | niche | P1 |
| сайт для автобизнеса с высокой скоростью загрузки | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды с высокой скоростью загрузки | 0 (estimate) | commercial | niche | P1 |
| редизайн сайта с высокой скоростью загрузки | 0 (estimate) | commercial | niche | P1 |
| сопровождение сайта с высокой скоростью загрузки | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ с высокой скоростью загрузки | 0 (estimate) | commercial | niche | P1 |
| ускорение загрузки сайта заказать | 0 (estimate) | commercial | niche | P1 |
| ускорение загрузки сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| ускорение загрузки сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| ускорение загрузки сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| ускорение загрузки сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| ускорение загрузки сайта после аудита | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта после аудита | 0 (estimate) | commercial | niche | P1 |
| оптимизация core web vitals заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация core web vitals для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация core web vitals под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация core web vitals для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| оптимизация core web vitals для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| оптимизация core web vitals после аудита | 0 (estimate) | commercial | niche | P1 |
| настройка pagespeed insights заказать | 0 (estimate) | commercial | niche | P1 |
| настройка pagespeed insights для бизнеса | 0 (estimate) | commercial | niche | P1 |
| настройка pagespeed insights под ключ | 0 (estimate) | commercial | niche | P1 |
| настройка pagespeed insights для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| настройка pagespeed insights для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| настройка pagespeed insights после аудита | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на мобильных заказать | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на мобильных для бизнеса | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на мобильных под ключ | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на мобильных для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на мобильных после аудита | 0 (estimate) | commercial | niche | P1 |
| оптимизация lcp сайта заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация lcp сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация lcp сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация lcp сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| оптимизация lcp сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| оптимизация lcp сайта после аудита | 0 (estimate) | commercial | niche | P1 |
| снижение cls на сайте заказать | 0 (estimate) | commercial | niche | P1 |
| снижение cls на сайте для бизнеса | 0 (estimate) | commercial | niche | P1 |
| снижение cls на сайте под ключ | 0 (estimate) | commercial | niche | P1 |
| снижение cls на сайте для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| снижение cls на сайте после аудита | 0 (estimate) | commercial | niche | P1 |
| оптимизация inp сайта заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация inp сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация inp сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация inp сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| оптимизация inp сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| оптимизация inp сайта после аудита | 0 (estimate) | commercial | niche | P1 |
| ускорение первого экрана сайта заказать | 0 (estimate) | commercial | niche | P1 |
| ускорение первого экрана сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| ускорение первого экрана сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| ускорение первого экрана сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| ускорение первого экрана сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| ускорение первого экрана сайта после аудита | 0 (estimate) | commercial | niche | P1 |
| ускорение интернет-магазина заказать | 0 (estimate) | commercial | niche | P1 |
| ускорение интернет-магазина для бизнеса | 0 (estimate) | commercial | niche | P1 |
| ускорение интернет-магазина под ключ | 0 (estimate) | commercial | niche | P1 |
| ускорение интернет-магазина для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| ускорение интернет-магазина для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| ускорение интернет-магазина после аудита | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на чистом html заказать | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на чистом html для бизнеса | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на чистом html под ключ | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на чистом html для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| ускорение сайта на чистом html после аудита | 0 (estimate) | commercial | niche | P1 |
| повышение pagespeed до 95 заказать | 0 (estimate) | commercial | niche | P1 |
| повышение pagespeed до 95 для бизнеса | 0 (estimate) | commercial | niche | P1 |
| повышение pagespeed до 95 под ключ | 0 (estimate) | commercial | niche | P1 |
| повышение pagespeed до 95 для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| повышение pagespeed до 95 после аудита | 0 (estimate) | commercial | niche | P1 |
| core web vitals 95+ для сайта заказать | 0 (estimate) | commercial | niche | P1 |
| core web vitals 95+ для сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта компании заказать | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта компании для бизнеса | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта компании под ключ | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта компании для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| оптимизация скорости сайта компании после аудита | 0 (estimate) | commercial | niche | P1 |
| техническая оптимизация скорости сайта заказать | 0 (estimate) | commercial | niche | P1 |
| техническая оптимизация скорости сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| техническая оптимизация скорости сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| техническая оптимизация скорости сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| техническая оптимизация скорости сайта для мобильной версии | 0 (estimate) | commercial | niche | P1 |
| техническая оптимизация скорости сайта после аудита | 0 (estimate) | commercial | niche | P1 |

### 3.4. Кластер `C04`: Кастомная разработка на Vanilla JS
- **Интент кластера:** `Commercial Service` (Commercial: 6, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `null (рекомендуется новый URL: /services/vanilla-js)`
- **Рекомендуемый Target URL:** `/services/vanilla-js` (NEW_RECOMMENDED)
- **Рекомендуемый H1:** Кастомная веб-разработка на чистом JavaScript без оверхеда фреймворков
- **Рекомендуемый Title:** Разработка сайтов на чистом JavaScript (Vanilla JS) — VOID | digital
- **Количество запросов в кластере:** 6

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| разработка сайта на чистом javascript под ключ | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на чистом javascript для бизнеса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на чистом javascript для компании | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на чистом javascript с анимацией | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на чистом javascript премиум-класса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта на чистом javascript с интеграциями | 0 (estimate) | commercial | niche | P1 |

### 3.5. Кластер `C05`: Создание сайтов под ключ (General Head)
- **Интент кластера:** `Commercial General` (Commercial: 33, Info: 0, Nav: 0)
- **Приоритет кластера:** `P3`
- **Фактический existing_url:** `https://void-digital.ru/ (index.html)`
- **Рекомендуемый Target URL:** `/` (EXISTING)
- **Рекомендуемый H1:** Сайт для бизнеса под ключ с заявками в мессенджеры и CRM
- **Рекомендуемый Title:** Веб-студия VOID | digital — создание сайтов под ключ, лендинги и 3D
- **Количество запросов в кластере:** 33

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| заказать сайт | 0 (estimate) | commercial | head | P3 |
| заказать сайт под ключ | 0 (estimate) | commercial | head | P3 |
| веб-студия | 0 (estimate) | commercial | head | P3 |
| веб студия | 0 (estimate) | commercial | head | P3 |
| создание сайтов под ключ | 0 (estimate) | commercial | head | P3 |
| разработка сайтов под ключ | 0 (estimate) | commercial | head | P3 |
| создание сайта для бизнеса | 0 (estimate) | commercial | head | P3 |
| разработка сайта для компании | 0 (estimate) | commercial | head | P3 |
| создание интернет-магазина | 0 (estimate) | commercial | head | P3 |
| разработка интернет-магазина | 0 (estimate) | commercial | head | P3 |
| создание корпоративного сайта | 0 (estimate) | commercial | head | P3 |
| разработка сайта цена | 0 (estimate) | commercial | head | P3 |
| сколько стоит сайт | 0 (estimate) | commercial | head | P3 |
| студия веб-разработки | 0 (estimate) | commercial | head | P3 |
| премиальная веб-студия | 0 (estimate) | commercial | head | P3 |
| дизайн и разработка сайта | 0 (estimate) | commercial | head | P3 |
| сайт под ключ цена | 0 (estimate) | commercial | head | P3 |
| разработка сайта москва | 0 (estimate) | commercial | head | P3 |
| создание сайта россия | 0 (estimate) | commercial | head | P3 |
| заказать сайт для бизнеса | 0 (estimate) | commercial | head | P3 |
| создание сайта компании цена | 0 (estimate) | commercial | head | P3 |
| заказать интернет-магазин под ключ | 0 (estimate) | commercial | head | P3 |
| создание сайта красноярск | 0 (estimate) | commercial | head | P3 |
| разработка сайта красноярск | 0 (estimate) | commercial | head | P3 |
| заказать корпоративный сайт | 0 (estimate) | commercial | head | P3 |
| веб-разработка для бизнеса | 0 (estimate) | commercial | head | P3 |
| разработка веб-сайтов | 0 (estimate) | commercial | head | P3 |
| создание сайта компании | 0 (estimate) | commercial | head | P3 |
| заказать разработку сайта | 0 (estimate) | commercial | head | P3 |
| веб-студия для бизнеса | 0 (estimate) | commercial | head | P3 |
| создание сайта цена под ключ | 0 (estimate) | commercial | head | P3 |
| разработка сайтов для малого бизнеса | 0 (estimate) | commercial | head | P3 |
| создать сайт для компании | 0 (estimate) | commercial | head | P3 |

### 3.6. Кластер `C06`: Лендинги под ключ
- **Интент кластера:** `Commercial Service` (Commercial: 26, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `https://void-digital.ru/services (анкор #landing)`
- **Рекомендуемый Target URL:** `/services#landing` (EXISTING)
- **Рекомендуемый H1:** Разработка конверсионных лендингов под ключ
- **Рекомендуемый Title:** Заказать лендинг под ключ — разработка за 1–2 недели | VOID | digital
- **Количество запросов в кластере:** 26

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| премиальный лендинг под ключ для бизнеса | 0 (estimate) | commercial | niche | P1 |
| премиальный лендинг под ключ с анимацией | 0 (estimate) | commercial | niche | P1 |
| премиальный лендинг под ключ премиум-класса | 0 (estimate) | commercial | niche | P1 |
| премиальный лендинг под ключ с интеграциями | 0 (estimate) | commercial | niche | P1 |
| лендинг для дизайнерской одежды | 0 (estimate) | commercial | niche | P1 |
| лендинг для частного детского сада | 0 (estimate) | commercial | niche | P1 |
| лендинг для оптовой торговли | 0 (estimate) | commercial | niche | P1 |
| лендинг для кофейни | 0 (estimate) | commercial | niche | P1 |
| лендинг для кафе и ресторана | 0 (estimate) | commercial | niche | P1 |
| лендинг для ландшафтного дизайна | 0 (estimate) | commercial | niche | P1 |
| лендинг для продажи стройматериалов | 0 (estimate) | commercial | niche | P1 |
| лендинг для жилого комплекса | 0 (estimate) | commercial | niche | P1 |
| лендинг для застройщика | 0 (estimate) | commercial | niche | P1 |
| лендинг для ремонта спецтехники | 0 (estimate) | commercial | niche | P1 |
| лендинг для предпринимателя и спикера | 0 (estimate) | commercial | niche | P1 |
| лендинг для фитнес-клуба | 0 (estimate) | commercial | niche | P1 |
| лендинг для премиального автосервиса | 0 (estimate) | commercial | niche | P1 |
| лендинг для импорта автомобилей | 0 (estimate) | commercial | niche | P1 |
| лендинг для бьюти-студии | 0 (estimate) | commercial | niche | P1 |
| лендинг для ремонта квартир | 0 (estimate) | commercial | niche | P1 |
| лендинг для оптовой продажи веников | 0 (estimate) | commercial | niche | P1 |
| лендинг для автосервиса bmw | 0 (estimate) | commercial | niche | P1 |
| лендинг для продажи квартир в новостройке | 0 (estimate) | commercial | niche | P1 |
| заказать лендинг | 0 (estimate) | commercial | head | P1 |
| разработка лендинга | 0 (estimate) | commercial | head | P1 |
| заказать разработку лендинга | 0 (estimate) | commercial | head | P1 |

### 3.7. Кластер `C07`: Корпоративные сайты и B2B
- **Интент кластера:** `Commercial Service` (Commercial: 37, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `https://void-digital.ru/services (анкор #b2b)`
- **Рекомендуемый Target URL:** `/services#b2b` (EXISTING)
- **Рекомендуемый H1:** Разработка корпоративных сайтов для B2B и компаний
- **Рекомендуемый Title:** Разработка корпоративных сайтов и порталов для B2B — VOID | digital
- **Количество запросов в кластере:** 37

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| премиальный лендинг под ключ для компании | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт под ключ | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт для бизнеса | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт для компании | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт с адаптацией под мобильные | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт с анимацией | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт для малого бизнеса | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт премиум-класса | 0 (estimate) | commercial | niche | P1 |
| корпоративный b2b сайт с интеграциями | 0 (estimate) | commercial | niche | P1 |
| разработка сайта для тендера под ключ | 0 (estimate) | commercial | niche | P1 |
| разработка сайта для тендера с анимацией | 0 (estimate) | commercial | niche | P1 |
| разработка сайта для тендера премиум-класса | 0 (estimate) | commercial | niche | P1 |
| разработка сайта для тендера с интеграциями | 0 (estimate) | commercial | niche | P1 |
| веб-приложение под ключ для компании | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для дизайнерской одежды | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для частного детского сада | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для оптовой торговли | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для кофейни | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для кафе и ресторана | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для ландшафтного дизайна | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для продажи стройматериалов | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для жилого комплекса | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для застройщика | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для ремонта спецтехники | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для предпринимателя и спикера | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для фитнес-клуба | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для премиального автосервиса | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для импорта автомобилей | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для бьюти-студии | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для ремонта квартир | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для оптовой продажи веников | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для автосервиса bmw | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для продажи квартир в новостройке | 0 (estimate) | commercial | niche | P1 |
| личный кабинет на сайте компании под ключ | 0 (estimate) | commercial | niche | P1 |
| личный кабинет на сайте компании разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| личный кабинет на сайте компании с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |

### 3.8. Кластер `C08`: Интернет-магазины & E-commerce
- **Интент кластера:** `Commercial Service` (Commercial: 44, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `https://void-digital.ru/services (анкор #shop)`
- **Рекомендуемый Target URL:** `/services#shop` (EXISTING)
- **Рекомендуемый H1:** Разработка интернет-магазинов с онлайн-оплатой и интеграцией 1С
- **Рекомендуемый Title:** Разработка интернет-магазинов под ключ — каталог, оплата, 1C | VOID | digital
- **Количество запросов в кластере:** 44

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| интернет-магазин бренда одежды под ключ | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды для бизнеса | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды для компании | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды с адаптацией под мобильные | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды с анимацией | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды для малого бизнеса | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды премиум-класса | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин бренда одежды с интеграциями | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин с интеграцией 1с под ключ | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин с интеграцией 1с для бизнеса | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин с интеграцией 1с для компании | 0 (estimate) | commercial | niche | P1 |
| интернет-магазин с интеграцией 1с премиум-класса | 0 (estimate) | commercial | niche | P1 |
| оптимизация изображений сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| оптимизация javascript сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| сайт под ключ для магазина природного камня | 0 (estimate) | commercial | niche | P1 |
| лендинг для магазина природного камня | 0 (estimate) | commercial | niche | P1 |
| корпоративный сайт для магазина природного камня | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для дизайнерской одежды | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для частного детского сада | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для оптовой торговли | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для кофейни | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для кафе и ресторана | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для ландшафтного дизайна | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для продажи стройматериалов | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для жилого комплекса | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для застройщика | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для ремонта спецтехники | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для предпринимателя и спикера | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для фитнес-клуба | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для премиального автосервиса | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для импорта автомобилей | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для бьюти-студии | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для ремонта квартир | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для оптовой продажи веников | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для магазина природного камня | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для автосервиса bmw | 0 (estimate) | commercial | niche | P1 |
| сайт-каталог для продажи квартир в новостройке | 0 (estimate) | commercial | niche | P1 |
| заявки сайта в hubspot для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| синхронизация каталога сайта с 1с под ключ | 0 (estimate) | commercial | niche | P1 |
| синхронизация каталога сайта с 1с разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| синхронизация каталога сайта с 1с для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с salesforce для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| онлайн-запись на сайте бьюти-студии для интернет-магазина | 0 (estimate) | commercial | niche | P1 |

### 3.9. Кластер `C09`: Интерактивные калькуляторы и квизы
- **Интент кластера:** `Commercial Service` (Commercial: 63, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `https://void-digital.ru/services (анкор #calc)`
- **Рекомендуемый Target URL:** `/services#calc` (EXISTING)
- **Рекомендуемый H1:** Разработка интерактивных калькуляторов сметы и квизов для сайта
- **Рекомендуемый Title:** Калькуляторы стоимости и квизы для сайтов на заказ — VOID | digital
- **Количество запросов в кластере:** 63

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| сложный калькулятор для сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| сложный калькулятор для сайта с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| сложный калькулятор для сайта с анимацией | 0 (estimate) | commercial | niche | P1 |
| сложный калькулятор для сайта премиум-класса | 0 (estimate) | commercial | niche | P1 |
| сложный калькулятор для сайта с интеграциями | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для дизайнерской одежды | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для оптовой торговли | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для кофейни | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для ландшафтного дизайна | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для продажи стройматериалов | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для жилого комплекса | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для застройщика | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для ремонта спецтехники | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для фитнес-клуба | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для премиального автосервиса | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для импорта автомобилей | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для бьюти-студии | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для ремонта квартир | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для магазина природного камня | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для автосервиса bmw | 0 (estimate) | commercial | niche | P1 |
| сайт с калькулятором для продажи квартир в новостройке | 0 (estimate) | commercial | niche | P1 |
| интерактивный калькулятор стоимости ремонта под ключ | 0 (estimate) | commercial | niche | P1 |
| интерактивный калькулятор стоимости ремонта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| интерактивный калькулятор стоимости ремонта разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| интерактивный калькулятор стоимости ремонта с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| интерактивный калькулятор стоимости ремонта для сайта компании | 0 (estimate) | commercial | niche | P1 |
| интерактивный калькулятор стоимости ремонта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости строительства под ключ | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости строительства для бизнеса | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости строительства разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости строительства с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости строительства для сайта компании | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости строительства для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| калькулятор ипотеки для сайта жк под ключ | 0 (estimate) | commercial | niche | P1 |
| калькулятор ипотеки для сайта жк разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| калькулятор ипотеки для сайта жк с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости ремонта автомобиля под ключ | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости ремонта автомобиля для бизнеса | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости ремонта автомобиля разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости ремонта автомобиля с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости ремонта автомобиля для сайта компании | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости ремонта автомобиля для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| квиз для подбора услуги под ключ | 0 (estimate) | commercial | niche | P1 |
| квиз для подбора услуги для бизнеса | 0 (estimate) | commercial | niche | P1 |
| квиз для подбора услуги разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| квиз для подбора услуги с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| квиз для подбора услуги для сайта компании | 0 (estimate) | commercial | niche | P1 |
| квиз для подбора услуги для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| квиз для выбора квартиры в жк под ключ | 0 (estimate) | commercial | niche | P1 |
| квиз для выбора квартиры в жк разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| квиз для выбора квартиры в жк с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости кухни под ключ | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости кухни для бизнеса | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости кухни разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости кухни с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости кухни для сайта компании | 0 (estimate) | commercial | niche | P1 |
| калькулятор стоимости кухни для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| калькулятор ландшафтного дизайна под ключ | 0 (estimate) | commercial | niche | P1 |
| калькулятор ландшафтного дизайна для бизнеса | 0 (estimate) | commercial | niche | P1 |
| калькулятор ландшафтного дизайна разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| калькулятор ландшафтного дизайна с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| калькулятор ландшафтного дизайна для сайта компании | 0 (estimate) | commercial | niche | P1 |
| калькулятор ландшафтного дизайна для интернет-магазина | 0 (estimate) | commercial | niche | P1 |

### 3.10. Кластер `C10`: Интеграции с CRM и Telegram-ботами
- **Интент кластера:** `Commercial Service` (Commercial: 38, Info: 0, Nav: 0)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `https://void-digital.ru/services (анкор #integrations)`
- **Рекомендуемый Target URL:** `/services#integrations` (EXISTING)
- **Рекомендуемый H1:** Интеграция сайтов с CRM (Битрикс24, amoCRM) и Telegram-ботами
- **Рекомендуемый Title:** Интеграция сайтов с CRM и мессенджерами под ключ — VOID | digital
- **Количество запросов в кластере:** 38

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| сложный калькулятор для сайта с передачей заявок в crm | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с telegram под ключ | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с telegram для бизнеса | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с telegram для компании | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с telegram премиум-класса | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с crm под ключ | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с crm для бизнеса | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с crm для компании | 0 (estimate) | commercial | niche | P1 |
| интеграция сайта с crm премиум-класса | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для оптовой торговли | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для кофейни | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для ландшафтного дизайна | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для продажи стройматериалов | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для жилого комплекса | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для застройщика | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для ремонта спецтехники | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для фитнес-клуба | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для премиального автосервиса | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для импорта автомобилей | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для бьюти-студии | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для ремонта квартир | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для магазина природного камня | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для автосервиса bmw | 0 (estimate) | commercial | niche | P1 |
| сайт с интеграцией crm для продажи квартир в новостройке | 0 (estimate) | commercial | niche | P1 |
| форма заявки с отправкой в telegram под ключ | 0 (estimate) | commercial | niche | P1 |
| форма заявки с отправкой в telegram разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| форма заявки с отправкой в telegram с индивидуальным дизайном | 0 (estimate) | commercial | niche | P1 |
| заявки с сайта в битрикс24 под ключ | 0 (estimate) | commercial | niche | P1 |
| заявки с сайта в битрикс24 разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| заявки с сайта в amocrm под ключ | 0 (estimate) | commercial | niche | P1 |
| заявки с сайта в amocrm разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| оплата на сайте с интеграцией crm под ключ | 0 (estimate) | commercial | niche | P1 |
| оплата на сайте с интеграцией crm разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| оплата на сайте с интеграцией crm для интернет-магазина | 0 (estimate) | commercial | niche | P1 |
| telegram-бот для заявок сайта под ключ | 0 (estimate) | commercial | niche | P1 |
| telegram-бот для заявок сайта для бизнеса | 0 (estimate) | commercial | niche | P1 |
| telegram-бот для заявок сайта разработка и интеграция | 0 (estimate) | commercial | niche | P1 |
| telegram-бот для заявок сайта для интернет-магазина | 0 (estimate) | commercial | niche | P1 |

### 3.11. Кластер `C11`: Сопровождение, доработка и редизайн
- **Интент кластера:** `Commercial Service` (Commercial: 24, Info: 0, Nav: 0)
- **Приоритет кластера:** `P2`
- **Фактический existing_url:** `https://void-digital.ru/services (анкор #support)`
- **Рекомендуемый Target URL:** `/services#support` (EXISTING)
- **Рекомендуемый H1:** Сопровождение, техническая поддержка и редизайн сайтов
- **Рекомендуемый Title:** Техническая поддержка и редизайн сайтов — VOID | digital
- **Количество запросов в кластере:** 24

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| корпоративный b2b сайт с технической поддержкой | 0 (estimate) | commercial | niche | P2 |
| сайт для автобизнеса с технической поддержкой | 0 (estimate) | commercial | niche | P2 |
| интернет-магазин бренда одежды с технической поддержкой | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта под ключ | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта для бизнеса | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта для компании | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта с индивидуальным дизайном | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта с адаптацией под мобильные | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта с анимацией | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта для малого бизнеса | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта премиум-класса | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта с технической поддержкой | 0 (estimate) | commercial | niche | P2 |
| редизайн сайта с интеграциями | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта под ключ | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта для бизнеса | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта для компании | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта с индивидуальным дизайном | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта с адаптацией под мобильные | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта с анимацией | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта для малого бизнеса | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта премиум-класса | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта с технической поддержкой | 0 (estimate) | commercial | niche | P2 |
| сопровождение сайта с интеграциями | 0 (estimate) | commercial | niche | P2 |
| веб-приложение под ключ с технической поддержкой | 0 (estimate) | commercial | niche | P2 |

### 3.12. Кластер `C12`: Отраслевые посадочные и кейсы портфолио
- **Интент кластера:** `Niche Industry` (Commercial: 45, Info: 0, Nav: 0)
- **Приоритет кластера:** `P2`
- **Фактический existing_url:** `https://void-digital.ru/portfolio (portfolio.html)`
- **Рекомендуемый Target URL:** `/portfolio` (EXISTING)
- **Рекомендуемый H1:** Кейсы и отраслевые решения: недвижимость, автобизнес, B2B, ритейл
- **Рекомендуемый Title:** Портфолио и отраслевые кейсы веб-студии VOID | digital
- **Количество запросов в кластере:** 45

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| сайт для жилого комплекса под ключ | 0 (estimate) | commercial | niche | P2 |
| сайт для жилого комплекса с индивидуальным дизайном | 0 (estimate) | commercial | niche | P2 |
| сайт для жилого комплекса с адаптацией под мобильные | 0 (estimate) | commercial | niche | P2 |
| сайт для жилого комплекса с анимацией | 0 (estimate) | commercial | niche | P2 |
| сайт для жилого комплекса премиум-класса | 0 (estimate) | commercial | niche | P2 |
| сайт для жилого комплекса с интеграциями | 0 (estimate) | commercial | niche | P2 |
| сайт для автобизнеса под ключ | 0 (estimate) | commercial | niche | P2 |
| сайт для автобизнеса с индивидуальным дизайном | 0 (estimate) | commercial | niche | P2 |
| сайт для автобизнеса с адаптацией под мобильные | 0 (estimate) | commercial | niche | P2 |
| сайт для автобизнеса с анимацией | 0 (estimate) | commercial | niche | P2 |
| сайт для автобизнеса премиум-класса | 0 (estimate) | commercial | niche | P2 |
| сайт для автобизнеса с интеграциями | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для дизайнерской одежды | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для частного детского сада | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для оптовой торговли | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для кофейни | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для кафе и ресторана | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для ландшафтного дизайна | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для продажи стройматериалов | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для жилого комплекса | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для застройщика | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для ремонта спецтехники | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для фитнес-клуба | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для премиального автосервиса | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для импорта автомобилей | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для бьюти-студии | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для ремонта квартир | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для автосервиса bmw | 0 (estimate) | commercial | niche | P2 |
| сайт под ключ для продажи квартир в новостройке | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для дизайнерской одежды | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для частного детского сада | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для оптовой торговли | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для кофейни | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для кафе и ресторана | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для ландшафтного дизайна | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для продажи стройматериалов | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для жилого комплекса | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для застройщика | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для ремонта спецтехники | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для фитнес-клуба | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для премиального автосервиса | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для импорта автомобилей | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для бьюти-студии | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для ремонта квартир | 0 (estimate) | commercial | niche | P2 |
| сайт с онлайн-записью для автосервиса bmw | 0 (estimate) | commercial | niche | P2 |

### 3.13. Кластер `C13`: Бренд VOID | digital & Навигация
- **Интент кластера:** `Brand / Navigational` (Commercial: 0, Info: 0, Nav: 29)
- **Приоритет кластера:** `P1`
- **Фактический existing_url:** `https://void-digital.ru/about, https://void-digital.ru/contacts`
- **Рекомендуемый Target URL:** `/about` (EXISTING)
- **Рекомендуемый H1:** О веб-студии VOID | digital
- **Рекомендуемый Title:** О нас — веб-студия VOID | digital: контакты, реквизиты, команда
- **Количество запросов в кластере:** 29

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| void digital | 0 (estimate) | navigational | brand | P1 |
| void | digital | 0 (estimate) | navigational | brand | P1 |
| void digital отзывы | 0 (estimate) | navigational | brand | P1 |
| void digital контакты | 0 (estimate) | navigational | brand | P1 |
| void digital портфолио | 0 (estimate) | navigational | brand | P1 |
| void digital услуги | 0 (estimate) | navigational | brand | P1 |
| void digital цены | 0 (estimate) | navigational | brand | P1 |
| void digital разработка сайтов | 0 (estimate) | navigational | brand | P1 |
| void digital сайт | 0 (estimate) | navigational | brand | P1 |
| void-digital.ru | 0 (estimate) | navigational | brand | P1 |
| www.void-digital.ru | 0 (estimate) | navigational | brand | P1 |
| студия void digital | 0 (estimate) | navigational | brand | P1 |
| студия void | 0 (estimate) | navigational | brand | P1 |
| void веб-студия | 0 (estimate) | navigational | brand | P1 |
| void digital разработка лендингов | 0 (estimate) | navigational | brand | P1 |
| void digital интернет-магазин | 0 (estimate) | navigational | brand | P1 |
| войд диджитал | 0 (estimate) | navigational | brand | P1 |
| войд digital | 0 (estimate) | navigational | brand | P1 |
| войд диджитал отзывы | 0 (estimate) | navigational | brand | P1 |
| войд диджитал сайт | 0 (estimate) | navigational | brand | P1 |
| войд диджитал веб-студия | 0 (estimate) | navigational | brand | P1 |
| войд студия разработка сайтов | 0 (estimate) | navigational | brand | P1 |
| void digital красноярск | 0 (estimate) | navigational | brand | P1 |
| void digital кейсы | 0 (estimate) | navigational | brand | P1 |
| void digital заказать сайт | 0 (estimate) | navigational | brand | P1 |
| void digital поддержка сайтов | 0 (estimate) | navigational | brand | P1 |
| void digital 3d сайты | 0 (estimate) | navigational | brand | P1 |
| void digital отзывы клиентов | 0 (estimate) | navigational | brand | P1 |
| официальный сайт void digital | 0 (estimate) | navigational | brand | P1 |

### 3.14. Кластер `C14`: Блог: Подготовка, бриф и выбор формата сайта
- **Интент кластера:** `Informational Blog` (Commercial: 0, Info: 15, Nav: 0)
- **Приоритет кластера:** `P2`
- **Фактический existing_url:** `https://void-digital.ru/blog-brief, https://void-digital.ru/blog-landing-vs-site`
- **Рекомендуемый Target URL:** `/blog-brief` (EXISTING)
- **Рекомендуемый H1:** Подготовка к разработке сайта: бриф, бюджет и выбор формата
- **Рекомендуемый Title:** Как подготовиться к разработке сайта: бриф, формат, бюджет — Блог VOID
- **Количество запросов в кластере:** 15

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| лендинг или многостраничный сайт что выбрать | 0 (estimate) | informational | info | P2 |
| что подготовить перед заказом сайта | 0 (estimate) | informational | info | P2 |
| как составить бриф на разработку сайта | 0 (estimate) | informational | info | P2 |
| сколько стоит разработка сайта в 2026 году | 0 (estimate) | informational | info | P2 |
| сколько стоит лендинг для бизнеса | 0 (estimate) | informational | info | P2 |
| сколько стоит сайт компании под ключ | 0 (estimate) | informational | info | P2 |
| сколько стоит интернет-магазин с интеграцией 1с | 0 (estimate) | informational | info | P2 |
| как составить бюджет на разработку сайта | 0 (estimate) | informational | info | P2 |
| этапы разработки сайта под ключ | 0 (estimate) | informational | info | P2 |
| пошагово: как составить бриф на разработку сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как составить бриф на разработку сайта | 0 (estimate) | informational | info | P2 |
| руководство: как составить бриф на разработку сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как составить бюджет на разработку сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как составить бюджет на разработку сайта | 0 (estimate) | informational | info | P2 |
| руководство: как составить бюджет на разработку сайта | 0 (estimate) | informational | info | P2 |

### 3.15. Кластер `C15`: Блог: Технические гайды, WebGL и скорость загрузки
- **Интент кластера:** `Informational Blog` (Commercial: 0, Info: 350, Nav: 0)
- **Приоритет кластера:** `P2`
- **Фактический existing_url:** `https://void-digital.ru/blog (blog.html — хаб блога под декомпозицию)`
- **Рекомендуемый Target URL:** `/blog` (EXISTING)
- **Рекомендуемый H1:** Технические статьи и руководства по WebGL, Three.js и веб-скорости
- **Рекомендуемый Title:** Статьи о 3D WebGL, чистом коде и скорости загрузки — Блог VOID | digital
- **Количество запросов в кластере:** 350

| Запрос | Частотность | Интент | Тег | Приоритет |
|---|:---:|:---:|:---:|:---:|
| как разработать сайт с three.js | 0 (estimate) | informational | info | P2 |
| как добавить three.js на сайт | 0 (estimate) | informational | info | P2 |
| как сделать webgl анимацию на сайте | 0 (estimate) | informational | info | P2 |
| как создать 3d сайт | 0 (estimate) | informational | info | P2 |
| как использовать glsl шейдеры на сайте | 0 (estimate) | informational | info | P2 |
| как сделать эффект жидкого стекла на сайте | 0 (estimate) | informational | info | P2 |
| как сделать интерактивную физику на сайте | 0 (estimate) | informational | info | P2 |
| как добавить частицы на сайт | 0 (estimate) | informational | info | P2 |
| как сделать параллакс на сайте | 0 (estimate) | informational | info | P2 |
| как добавить кинетическую типографику на сайт | 0 (estimate) | informational | info | P2 |
| как создать wow эффект на сайте | 0 (estimate) | informational | info | P2 |
| как оптимизировать 3d сцену для сайта | 0 (estimate) | informational | info | P2 |
| как ускорить three.js сайт | 0 (estimate) | informational | info | P2 |
| как оптимизировать glsl шейдеры для браузера | 0 (estimate) | informational | info | P2 |
| как ускорить загрузку сайта | 0 (estimate) | informational | info | P2 |
| как улучшить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| как получить 95 баллов pagespeed insights | 0 (estimate) | informational | info | P2 |
| как исправить низкий lcp сайта | 0 (estimate) | informational | info | P2 |
| как снизить cls на сайте | 0 (estimate) | informational | info | P2 |
| как улучшить inp сайта | 0 (estimate) | informational | info | P2 |
| как измерить скорость сайта в google | 0 (estimate) | informational | info | P2 |
| как оптимизировать изображения для сайта | 0 (estimate) | informational | info | P2 |
| как ускорить сайт на мобильном телефоне | 0 (estimate) | informational | info | P2 |
| что влияет на скорость сайта | 0 (estimate) | informational | info | P2 |
| как проверить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| tilda или сайт на заказ что выбрать | 0 (estimate) | informational | info | P2 |
| wordpress или чистый javascript для сайта | 0 (estimate) | informational | info | P2 |
| react или vanilla js для сайта что выбрать | 0 (estimate) | informational | info | P2 |
| кастомная разработка сайта или конструктор | 0 (estimate) | informational | info | P2 |
| сайт на чистом html css js или wordpress | 0 (estimate) | informational | info | P2 |
| почему сайт на vanilla js быстрее | 0 (estimate) | informational | info | P2 |
| можно ли сделать сайт без фреймворков | 0 (estimate) | informational | info | P2 |
| какой стек выбрать для быстрого сайта | 0 (estimate) | informational | info | P2 |
| чем лендинг отличается от сайта компании | 0 (estimate) | informational | info | P2 |
| сколько страниц должно быть на сайте компании | 0 (estimate) | informational | info | P2 |
| какие материалы нужны для создания сайта | 0 (estimate) | informational | info | P2 |
| как выбрать веб-студию для бизнеса | 0 (estimate) | informational | info | P2 |
| как проверить портфолио веб-студии | 0 (estimate) | informational | info | P2 |
| какие вопросы задать веб-студии перед заказом | 0 (estimate) | informational | info | P2 |
| как выбрать разработчика сайта для компании | 0 (estimate) | informational | info | P2 |
| из чего складывается стоимость разработки сайта | 0 (estimate) | informational | info | P2 |
| почему отличается цена на создание сайта | 0 (estimate) | informational | info | P2 |
| что входит в стоимость сайта под ключ | 0 (estimate) | informational | info | P2 |
| сколько времени занимает создание сайта | 0 (estimate) | informational | info | P2 |
| как проходит разработка сайта для бизнеса | 0 (estimate) | informational | info | P2 |
| что происходит после запуска сайта | 0 (estimate) | informational | info | P2 |
| как интегрировать сайт с telegram | 0 (estimate) | informational | info | P2 |
| как отправлять заявки с сайта в telegram | 0 (estimate) | informational | info | P2 |
| как подключить сайт к битрикс24 | 0 (estimate) | informational | info | P2 |
| как интегрировать сайт с amocrm | 0 (estimate) | informational | info | P2 |
| как подключить hubspot к сайту | 0 (estimate) | informational | info | P2 |
| как подключить оплату на сайт | 0 (estimate) | informational | info | P2 |
| как интегрировать интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| как работает интеграция сайта с маркетплейсами | 0 (estimate) | informational | info | P2 |
| как сделать калькулятор стоимости на сайте | 0 (estimate) | informational | info | P2 |
| как создать квиз на сайте для заявок | 0 (estimate) | informational | info | P2 |
| какие функции нужны сайту жилого комплекса | 0 (estimate) | informational | info | P2 |
| каким должен быть сайт автосервиса | 0 (estimate) | informational | info | P2 |
| как создать сайт для импорта автомобилей | 0 (estimate) | informational | info | P2 |
| что должно быть на сайте b2b компании | 0 (estimate) | informational | info | P2 |
| как создать сайт для оптовых продаж | 0 (estimate) | informational | info | P2 |
| что должно быть на сайте бренда одежды | 0 (estimate) | informational | info | P2 |
| как создать сайт частного детского сада | 0 (estimate) | informational | info | P2 |
| как сделать сайт фитнес-клуба с расписанием | 0 (estimate) | informational | info | P2 |
| пошагово: как разработать сайт с three.js | 0 (estimate) | informational | info | P2 |
| инструкция: как разработать сайт с three.js | 0 (estimate) | informational | info | P2 |
| руководство: как разработать сайт с three.js | 0 (estimate) | informational | info | P2 |
| пошагово: как добавить three.js на сайт | 0 (estimate) | informational | info | P2 |
| инструкция: как добавить three.js на сайт | 0 (estimate) | informational | info | P2 |
| руководство: как добавить three.js на сайт | 0 (estimate) | informational | info | P2 |
| пошагово: как сделать webgl анимацию на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как сделать webgl анимацию на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как сделать webgl анимацию на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как создать 3d сайт | 0 (estimate) | informational | info | P2 |
| инструкция: как создать 3d сайт | 0 (estimate) | informational | info | P2 |
| руководство: как создать 3d сайт | 0 (estimate) | informational | info | P2 |
| пошагово: как использовать glsl шейдеры на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как использовать glsl шейдеры на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как использовать glsl шейдеры на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как сделать эффект жидкого стекла на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как сделать эффект жидкого стекла на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как сделать эффект жидкого стекла на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как сделать интерактивную физику на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как сделать интерактивную физику на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как сделать интерактивную физику на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как добавить частицы на сайт | 0 (estimate) | informational | info | P2 |
| инструкция: как добавить частицы на сайт | 0 (estimate) | informational | info | P2 |
| руководство: как добавить частицы на сайт | 0 (estimate) | informational | info | P2 |
| пошагово: как сделать параллакс на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как сделать параллакс на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как сделать параллакс на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как добавить кинетическую типографику на сайт | 0 (estimate) | informational | info | P2 |
| инструкция: как добавить кинетическую типографику на сайт | 0 (estimate) | informational | info | P2 |
| руководство: как добавить кинетическую типографику на сайт | 0 (estimate) | informational | info | P2 |
| пошагово: как создать wow эффект на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как создать wow эффект на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как создать wow эффект на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как оптимизировать 3d сцену для сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как оптимизировать 3d сцену для сайта | 0 (estimate) | informational | info | P2 |
| руководство: как оптимизировать 3d сцену для сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как ускорить three.js сайт | 0 (estimate) | informational | info | P2 |
| инструкция: как ускорить three.js сайт | 0 (estimate) | informational | info | P2 |
| руководство: как ускорить three.js сайт | 0 (estimate) | informational | info | P2 |
| пошагово: как оптимизировать glsl шейдеры для браузера | 0 (estimate) | informational | info | P2 |
| инструкция: как оптимизировать glsl шейдеры для браузера | 0 (estimate) | informational | info | P2 |
| руководство: как оптимизировать glsl шейдеры для браузера | 0 (estimate) | informational | info | P2 |
| пошагово: как ускорить загрузку сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как ускорить загрузку сайта | 0 (estimate) | informational | info | P2 |
| руководство: как ускорить загрузку сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как улучшить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как улучшить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| руководство: как улучшить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как получить 95 баллов pagespeed insights | 0 (estimate) | informational | info | P2 |
| инструкция: как получить 95 баллов pagespeed insights | 0 (estimate) | informational | info | P2 |
| руководство: как получить 95 баллов pagespeed insights | 0 (estimate) | informational | info | P2 |
| пошагово: как исправить низкий lcp сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как исправить низкий lcp сайта | 0 (estimate) | informational | info | P2 |
| руководство: как исправить низкий lcp сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как снизить cls на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как снизить cls на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как снизить cls на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как улучшить inp сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как улучшить inp сайта | 0 (estimate) | informational | info | P2 |
| руководство: как улучшить inp сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как измерить скорость сайта в google | 0 (estimate) | informational | info | P2 |
| инструкция: как измерить скорость сайта в google | 0 (estimate) | informational | info | P2 |
| руководство: как измерить скорость сайта в google | 0 (estimate) | informational | info | P2 |
| пошагово: как оптимизировать изображения для сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как оптимизировать изображения для сайта | 0 (estimate) | informational | info | P2 |
| руководство: как оптимизировать изображения для сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как ускорить сайт на мобильном телефоне | 0 (estimate) | informational | info | P2 |
| инструкция: как ускорить сайт на мобильном телефоне | 0 (estimate) | informational | info | P2 |
| руководство: как ускорить сайт на мобильном телефоне | 0 (estimate) | informational | info | P2 |
| пошагово: как проверить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| инструкция: как проверить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| руководство: как проверить core web vitals сайта | 0 (estimate) | informational | info | P2 |
| пошагово: как выбрать веб-студию для бизнеса | 0 (estimate) | informational | info | P2 |
| инструкция: как выбрать веб-студию для бизнеса | 0 (estimate) | informational | info | P2 |
| руководство: как выбрать веб-студию для бизнеса | 0 (estimate) | informational | info | P2 |
| пошагово: как проверить портфолио веб-студии | 0 (estimate) | informational | info | P2 |
| инструкция: как проверить портфолио веб-студии | 0 (estimate) | informational | info | P2 |
| руководство: как проверить портфолио веб-студии | 0 (estimate) | informational | info | P2 |
| пошагово: как выбрать разработчика сайта для компании | 0 (estimate) | informational | info | P2 |
| инструкция: как выбрать разработчика сайта для компании | 0 (estimate) | informational | info | P2 |
| руководство: как выбрать разработчика сайта для компании | 0 (estimate) | informational | info | P2 |
| пошагово: как проходит разработка сайта для бизнеса | 0 (estimate) | informational | info | P2 |
| инструкция: как проходит разработка сайта для бизнеса | 0 (estimate) | informational | info | P2 |
| руководство: как проходит разработка сайта для бизнеса | 0 (estimate) | informational | info | P2 |
| пошагово: как интегрировать сайт с telegram | 0 (estimate) | informational | info | P2 |
| инструкция: как интегрировать сайт с telegram | 0 (estimate) | informational | info | P2 |
| руководство: как интегрировать сайт с telegram | 0 (estimate) | informational | info | P2 |
| пошагово: как отправлять заявки с сайта в telegram | 0 (estimate) | informational | info | P2 |
| инструкция: как отправлять заявки с сайта в telegram | 0 (estimate) | informational | info | P2 |
| руководство: как отправлять заявки с сайта в telegram | 0 (estimate) | informational | info | P2 |
| пошагово: как подключить сайт к битрикс24 | 0 (estimate) | informational | info | P2 |
| инструкция: как подключить сайт к битрикс24 | 0 (estimate) | informational | info | P2 |
| руководство: как подключить сайт к битрикс24 | 0 (estimate) | informational | info | P2 |
| пошагово: как интегрировать сайт с amocrm | 0 (estimate) | informational | info | P2 |
| инструкция: как интегрировать сайт с amocrm | 0 (estimate) | informational | info | P2 |
| руководство: как интегрировать сайт с amocrm | 0 (estimate) | informational | info | P2 |
| пошагово: как подключить hubspot к сайту | 0 (estimate) | informational | info | P2 |
| инструкция: как подключить hubspot к сайту | 0 (estimate) | informational | info | P2 |
| руководство: как подключить hubspot к сайту | 0 (estimate) | informational | info | P2 |
| пошагово: как подключить оплату на сайт | 0 (estimate) | informational | info | P2 |
| инструкция: как подключить оплату на сайт | 0 (estimate) | informational | info | P2 |
| руководство: как подключить оплату на сайт | 0 (estimate) | informational | info | P2 |
| пошагово: как интегрировать интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| инструкция: как интегрировать интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| руководство: как интегрировать интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| пошагово: как работает интеграция сайта с маркетплейсами | 0 (estimate) | informational | info | P2 |
| инструкция: как работает интеграция сайта с маркетплейсами | 0 (estimate) | informational | info | P2 |
| руководство: как работает интеграция сайта с маркетплейсами | 0 (estimate) | informational | info | P2 |
| пошагово: как сделать калькулятор стоимости на сайте | 0 (estimate) | informational | info | P2 |
| инструкция: как сделать калькулятор стоимости на сайте | 0 (estimate) | informational | info | P2 |
| руководство: как сделать калькулятор стоимости на сайте | 0 (estimate) | informational | info | P2 |
| пошагово: как создать квиз на сайте для заявок | 0 (estimate) | informational | info | P2 |
| инструкция: как создать квиз на сайте для заявок | 0 (estimate) | informational | info | P2 |
| руководство: как создать квиз на сайте для заявок | 0 (estimate) | informational | info | P2 |
| пошагово: как сделать сайт для продажи квартир в жк | 0 (estimate) | informational | info | P2 |
| инструкция: как сделать сайт для продажи квартир в жк | 0 (estimate) | informational | info | P2 |
| руководство: как сделать сайт для продажи квартир в жк | 0 (estimate) | informational | info | P2 |
| пошагово: как создать сайт для импорта автомобилей | 0 (estimate) | informational | info | P2 |
| инструкция: как создать сайт для импорта автомобилей | 0 (estimate) | informational | info | P2 |
| руководство: как создать сайт для импорта автомобилей | 0 (estimate) | informational | info | P2 |
| пошагово: как создать сайт для оптовых продаж | 0 (estimate) | informational | info | P2 |
| инструкция: как создать сайт для оптовых продаж | 0 (estimate) | informational | info | P2 |
| руководство: как создать сайт для оптовых продаж | 0 (estimate) | informational | info | P2 |
| пошагово: как создать сайт частного детского сада | 0 (estimate) | informational | info | P2 |
| инструкция: как создать сайт частного детского сада | 0 (estimate) | informational | info | P2 |
| руководство: как создать сайт частного детского сада | 0 (estimate) | informational | info | P2 |
| пошагово: как сделать сайт фитнес-клуба с расписанием | 0 (estimate) | informational | info | P2 |
| инструкция: как сделать сайт фитнес-клуба с расписанием | 0 (estimate) | informational | info | P2 |
| руководство: как сделать сайт фитнес-клуба с расписанием | 0 (estimate) | informational | info | P2 |
| что такое webgl на сайте | 0 (estimate) | informational | info | P2 |
| что такое three.js для сайта | 0 (estimate) | informational | info | P2 |
| что такое glsl-шейдеры в веб-разработке | 0 (estimate) | informational | info | P2 |
| что такое оптимизация core web vitals | 0 (estimate) | informational | info | P2 |
| что такое pagespeed insights | 0 (estimate) | informational | info | P2 |
| что такое vanilla javascript для сайта | 0 (estimate) | informational | info | P2 |
| что такое кастомная разработка сайта | 0 (estimate) | informational | info | P2 |
| что такое интерактивный калькулятор на сайте | 0 (estimate) | informational | info | P2 |
| что такое интеграция сайта с crm | 0 (estimate) | informational | info | P2 |
| что такое интеграция сайта с telegram | 0 (estimate) | informational | info | P2 |
| что такое интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| что такое сайт жилого комплекса | 0 (estimate) | informational | info | P2 |
| что такое лендинг для b2b | 0 (estimate) | informational | info | P2 |
| что такое премиальный дизайн сайта | 0 (estimate) | informational | info | P2 |
| что такое кинетическая типографика на сайте | 0 (estimate) | informational | info | P2 |
| что такое эффект жидкого стекла в веб-дизайне | 0 (estimate) | informational | info | P2 |
| что такое параллакс в веб-дизайне | 0 (estimate) | informational | info | P2 |
| что такое интерактивная 3d-графика на сайте | 0 (estimate) | informational | info | P2 |
| что такое поддержка сайта после запуска | 0 (estimate) | informational | info | P2 |
| что такое редизайн корпоративного сайта | 0 (estimate) | informational | info | P2 |
| что такое сайт на конструкторе tilda | 0 (estimate) | informational | info | P2 |
| что такое сайт на wordpress | 0 (estimate) | informational | info | P2 |
| что такое разработка сайта без фреймворков | 0 (estimate) | informational | info | P2 |
| что такое многостраничный сайт | 0 (estimate) | informational | info | P2 |
| зачем использовать webgl на сайте | 0 (estimate) | informational | info | P2 |
| зачем использовать three.js для сайта | 0 (estimate) | informational | info | P2 |
| зачем использовать glsl-шейдеры в веб-разработке | 0 (estimate) | informational | info | P2 |
| зачем использовать оптимизация core web vitals | 0 (estimate) | informational | info | P2 |
| зачем использовать pagespeed insights | 0 (estimate) | informational | info | P2 |
| зачем использовать vanilla javascript для сайта | 0 (estimate) | informational | info | P2 |
| зачем использовать кастомная разработка сайта | 0 (estimate) | informational | info | P2 |
| зачем использовать интерактивный калькулятор на сайте | 0 (estimate) | informational | info | P2 |
| зачем использовать интеграция сайта с crm | 0 (estimate) | informational | info | P2 |
| зачем использовать интеграция сайта с telegram | 0 (estimate) | informational | info | P2 |
| зачем использовать интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| зачем использовать сайт жилого комплекса | 0 (estimate) | informational | info | P2 |
| зачем использовать лендинг для b2b | 0 (estimate) | informational | info | P2 |
| зачем использовать премиальный дизайн сайта | 0 (estimate) | informational | info | P2 |
| зачем использовать кинетическая типографика на сайте | 0 (estimate) | informational | info | P2 |
| зачем использовать эффект жидкого стекла в веб-дизайне | 0 (estimate) | informational | info | P2 |
| зачем использовать параллакс в веб-дизайне | 0 (estimate) | informational | info | P2 |
| зачем использовать интерактивная 3d-графика на сайте | 0 (estimate) | informational | info | P2 |
| зачем использовать поддержка сайта после запуска | 0 (estimate) | informational | info | P2 |
| зачем использовать редизайн корпоративного сайта | 0 (estimate) | informational | info | P2 |
| зачем использовать сайт на конструкторе tilda | 0 (estimate) | informational | info | P2 |
| зачем использовать сайт на wordpress | 0 (estimate) | informational | info | P2 |
| зачем использовать разработка сайта без фреймворков | 0 (estimate) | informational | info | P2 |
| зачем использовать многостраничный сайт | 0 (estimate) | informational | info | P2 |
| как работает webgl на сайте | 0 (estimate) | informational | info | P2 |
| как работает three.js для сайта | 0 (estimate) | informational | info | P2 |
| как работает glsl-шейдеры в веб-разработке | 0 (estimate) | informational | info | P2 |
| как работает оптимизация core web vitals | 0 (estimate) | informational | info | P2 |
| как работает pagespeed insights | 0 (estimate) | informational | info | P2 |
| как работает vanilla javascript для сайта | 0 (estimate) | informational | info | P2 |
| как работает кастомная разработка сайта | 0 (estimate) | informational | info | P2 |
| как работает интерактивный калькулятор на сайте | 0 (estimate) | informational | info | P2 |
| как работает интеграция сайта с crm | 0 (estimate) | informational | info | P2 |
| как работает интеграция сайта с telegram | 0 (estimate) | informational | info | P2 |
| как работает интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| как работает сайт жилого комплекса | 0 (estimate) | informational | info | P2 |
| как работает лендинг для b2b | 0 (estimate) | informational | info | P2 |
| как работает премиальный дизайн сайта | 0 (estimate) | informational | info | P2 |
| как работает кинетическая типографика на сайте | 0 (estimate) | informational | info | P2 |
| как работает эффект жидкого стекла в веб-дизайне | 0 (estimate) | informational | info | P2 |
| как работает параллакс в веб-дизайне | 0 (estimate) | informational | info | P2 |
| как работает интерактивная 3d-графика на сайте | 0 (estimate) | informational | info | P2 |
| как работает поддержка сайта после запуска | 0 (estimate) | informational | info | P2 |
| как работает редизайн корпоративного сайта | 0 (estimate) | informational | info | P2 |
| как работает сайт на конструкторе tilda | 0 (estimate) | informational | info | P2 |
| как работает сайт на wordpress | 0 (estimate) | informational | info | P2 |
| как работает разработка сайта без фреймворков | 0 (estimate) | informational | info | P2 |
| как работает многостраничный сайт | 0 (estimate) | informational | info | P2 |
| как выбрать webgl на сайте | 0 (estimate) | informational | info | P2 |
| как выбрать three.js для сайта | 0 (estimate) | informational | info | P2 |
| как выбрать glsl-шейдеры в веб-разработке | 0 (estimate) | informational | info | P2 |
| как выбрать оптимизация core web vitals | 0 (estimate) | informational | info | P2 |
| как выбрать pagespeed insights | 0 (estimate) | informational | info | P2 |
| как выбрать vanilla javascript для сайта | 0 (estimate) | informational | info | P2 |
| как выбрать кастомная разработка сайта | 0 (estimate) | informational | info | P2 |
| как выбрать интерактивный калькулятор на сайте | 0 (estimate) | informational | info | P2 |
| как выбрать интеграция сайта с crm | 0 (estimate) | informational | info | P2 |
| как выбрать интеграция сайта с telegram | 0 (estimate) | informational | info | P2 |
| как выбрать интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| как выбрать сайт жилого комплекса | 0 (estimate) | informational | info | P2 |
| как выбрать лендинг для b2b | 0 (estimate) | informational | info | P2 |
| как выбрать премиальный дизайн сайта | 0 (estimate) | informational | info | P2 |
| как выбрать кинетическая типографика на сайте | 0 (estimate) | informational | info | P2 |
| как выбрать эффект жидкого стекла в веб-дизайне | 0 (estimate) | informational | info | P2 |
| как выбрать параллакс в веб-дизайне | 0 (estimate) | informational | info | P2 |
| как выбрать интерактивная 3d-графика на сайте | 0 (estimate) | informational | info | P2 |
| как выбрать поддержка сайта после запуска | 0 (estimate) | informational | info | P2 |
| как выбрать редизайн корпоративного сайта | 0 (estimate) | informational | info | P2 |
| как выбрать сайт на конструкторе tilda | 0 (estimate) | informational | info | P2 |
| как выбрать сайт на wordpress | 0 (estimate) | informational | info | P2 |
| как выбрать разработка сайта без фреймворков | 0 (estimate) | informational | info | P2 |
| как выбрать многостраничный сайт | 0 (estimate) | informational | info | P2 |
| какие преимущества дает webgl на сайте | 0 (estimate) | informational | info | P2 |
| какие преимущества дает three.js для сайта | 0 (estimate) | informational | info | P2 |
| какие преимущества дает glsl-шейдеры в веб-разработке | 0 (estimate) | informational | info | P2 |
| какие преимущества дает оптимизация core web vitals | 0 (estimate) | informational | info | P2 |
| какие преимущества дает pagespeed insights | 0 (estimate) | informational | info | P2 |
| какие преимущества дает vanilla javascript для сайта | 0 (estimate) | informational | info | P2 |
| какие преимущества дает кастомная разработка сайта | 0 (estimate) | informational | info | P2 |
| какие преимущества дает интерактивный калькулятор на сайте | 0 (estimate) | informational | info | P2 |
| какие преимущества дает интеграция сайта с crm | 0 (estimate) | informational | info | P2 |
| какие преимущества дает интеграция сайта с telegram | 0 (estimate) | informational | info | P2 |
| какие преимущества дает интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| какие преимущества дает сайт жилого комплекса | 0 (estimate) | informational | info | P2 |
| какие преимущества дает лендинг для b2b | 0 (estimate) | informational | info | P2 |
| какие преимущества дает премиальный дизайн сайта | 0 (estimate) | informational | info | P2 |
| какие преимущества дает кинетическая типографика на сайте | 0 (estimate) | informational | info | P2 |
| какие преимущества дает эффект жидкого стекла в веб-дизайне | 0 (estimate) | informational | info | P2 |
| какие преимущества дает параллакс в веб-дизайне | 0 (estimate) | informational | info | P2 |
| какие преимущества дает интерактивная 3d-графика на сайте | 0 (estimate) | informational | info | P2 |
| какие преимущества дает поддержка сайта после запуска | 0 (estimate) | informational | info | P2 |
| какие преимущества дает редизайн корпоративного сайта | 0 (estimate) | informational | info | P2 |
| какие преимущества дает сайт на wordpress | 0 (estimate) | informational | info | P2 |
| какие преимущества дает разработка сайта без фреймворков | 0 (estimate) | informational | info | P2 |
| какие преимущества дает многостраничный сайт | 0 (estimate) | informational | info | P2 |
| какие недостатки у webgl на сайте | 0 (estimate) | informational | info | P2 |
| какие недостатки у three.js для сайта | 0 (estimate) | informational | info | P2 |
| какие недостатки у glsl-шейдеры в веб-разработке | 0 (estimate) | informational | info | P2 |
| какие недостатки у pagespeed insights | 0 (estimate) | informational | info | P2 |
| какие недостатки у vanilla javascript для сайта | 0 (estimate) | informational | info | P2 |
| какие недостатки у кастомная разработка сайта | 0 (estimate) | informational | info | P2 |
| какие недостатки у интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| какие недостатки у сайт жилого комплекса | 0 (estimate) | informational | info | P2 |
| какие недостатки у лендинг для b2b | 0 (estimate) | informational | info | P2 |
| какие недостатки у премиальный дизайн сайта | 0 (estimate) | informational | info | P2 |
| какие недостатки у параллакс в веб-дизайне | 0 (estimate) | informational | info | P2 |
| какие недостатки у редизайн корпоративного сайта | 0 (estimate) | informational | info | P2 |
| какие недостатки у сайт на wordpress | 0 (estimate) | informational | info | P2 |
| какие недостатки у многостраничный сайт | 0 (estimate) | informational | info | P2 |
| когда применять webgl на сайте | 0 (estimate) | informational | info | P2 |
| когда применять three.js для сайта | 0 (estimate) | informational | info | P2 |
| когда применять glsl-шейдеры в веб-разработке | 0 (estimate) | informational | info | P2 |
| когда применять оптимизация core web vitals | 0 (estimate) | informational | info | P2 |
| когда применять pagespeed insights | 0 (estimate) | informational | info | P2 |
| когда применять vanilla javascript для сайта | 0 (estimate) | informational | info | P2 |
| когда применять кастомная разработка сайта | 0 (estimate) | informational | info | P2 |
| когда применять интерактивный калькулятор на сайте | 0 (estimate) | informational | info | P2 |
| когда применять интеграция сайта с crm | 0 (estimate) | informational | info | P2 |
| когда применять интеграция сайта с telegram | 0 (estimate) | informational | info | P2 |
| когда применять интернет-магазин с 1с | 0 (estimate) | informational | info | P2 |
| когда применять сайт жилого комплекса | 0 (estimate) | informational | info | P2 |
| когда применять лендинг для b2b | 0 (estimate) | informational | info | P2 |
| когда применять премиальный дизайн сайта | 0 (estimate) | informational | info | P2 |
| когда применять кинетическая типографика на сайте | 0 (estimate) | informational | info | P2 |
| когда применять эффект жидкого стекла в веб-дизайне | 0 (estimate) | informational | info | P2 |
| когда применять параллакс в веб-дизайне | 0 (estimate) | informational | info | P2 |
| когда применять интерактивная 3d-графика на сайте | 0 (estimate) | informational | info | P2 |
| когда применять поддержка сайта после запуска | 0 (estimate) | informational | info | P2 |
| когда применять редизайн корпоративного сайта | 0 (estimate) | informational | info | P2 |
| когда применять сайт на конструкторе tilda | 0 (estimate) | informational | info | P2 |
| когда применять сайт на wordpress | 0 (estimate) | informational | info | P2 |
| когда применять разработка сайта без фреймворков | 0 (estimate) | informational | info | P2 |
| когда применять многостраничный сайт | 0 (estimate) | informational | info | P2 |

## 4. Контент-план

### 4.0. Сводная статистика контент-плана
- **Всего позиций в плане:** **89**.
- **NEW (новые посадочные, кейсы, статьи):** **77**.
- **OPTIMIZE EXISTING (улучшение существующих страниц):** **10**.
- **MERGE (слияние и защита от каннибализации):** **2**.

### 4.1. NEW — создать (77 новых материалов)

| № | Кластер | Тема | План (3–5 тезисов) | Целевые запросы | Тип | Роль в воронке | Приоритет | Target URL |
|:---:|:---:|---|---|---|:---:|:---:|:---:|---|
| 1 | `C12` | **Кейс: интернет-магазин дизайнерской одежды OMG** | Показать задачу бренда и решение для e-commerce: каталог, карточка товара, мобильный сценарий и путь к покупке; использовать реальный проект и изображение omg.webp; не заявлять неподтверждённые результаты. | *разработка интернет-магазина одежды; сайт бренда одежды; интернет-магазин дизайнерской одежды* | кейс | конверсия | `P1` | `/portfolio/omg` |
| 2 | `C12` | **Кейс: сайт частного детского сада «Солнечные дети»** | Разобрать структуру сайта для родителей: программа, распорядок, команда, ответы на вопросы и запись; использовать изображение kindergarten.webp и факты только из материалов проекта. | *сайт частного детского сада; сайт для детского сада; разработка сайта для детского образования* | кейс | конверсия | `P1` | `/portfolio/solnechnye-deti` |
| 3 | `C12` | **Кейс: сайт поставщика банных веников оптом** | Показать B2B-сценарий: ассортимент, условия оптового заказа, логистика и заявка; использовать изображение veniki.webp, не придумывать показатели продаж. | *сайт оптового поставщика; сайт для оптовых поставок; сайт для продажи банных веников оптом* | кейс | конверсия | `P1` | `/portfolio/veniki` |
| 4 | `C12` | **Кейс: сайт кофейни NØR** | Раскрыть визуальную подачу кофейни и практические сценарии: меню, адрес, режим работы и контакты; использовать изображение coffee.webp. | *сайт кофейни; сайт для кафе; разработка сайта для HoReCa* | кейс | конверсия | `P2` | `/portfolio/nor` |
| 5 | `C12` | **Кейс: сайт природного камня для ландшафта** | Показать каталогизацию материалов, применение в проектах и удобный запрос консультации; использовать изображение stone.webp и реальные сведения о предложении. | *сайт природного камня; сайт для ландшафтного дизайна; сайт стройматериалов* | кейс | конверсия | `P2` | `/portfolio/prirodny-kamen` |
| 6 | `C12` | **Кейс: сайт жилого комплекса «Соцветие»** | Разобрать подачу проекта недвижимости: планировки, преимущества, инфраструктура и заявка; использовать изображение sotsvetie.webp, не добавлять неподтверждённые характеристики ЖК. | *разработка сайта жилого комплекса; сайт застройщика; сайт новостройки* | кейс | конверсия | `P1` | `/portfolio/sotsvetie` |
| 7 | `C12` | **Кейс: сайт ремонта и обслуживания спецтехники** | Показать B2B-структуру услуги: виды техники, ремонтные работы, сервис и заявка на консультацию; использовать изображение spectech.webp. | *сайт ремонта спецтехники; сайт обслуживания спецтехники; B2B сайт сервисной компании* | кейс | конверсия | `P2` | `/portfolio/spectech` |
| 8 | `C12` | **Кейс: личный сайт предпринимателя и спикера** | Показать архитектуру личного бренда: позиционирование, выступления, экспертные материалы и контакт для сотрудничества; использовать изображение expert.webp. | *сайт предпринимателя; сайт спикера; сайт личного бренда* | кейс | конверсия | `P2` | `/portfolio/expert` |
| 9 | `C12` | **Кейс: сайт фитнес-клуба «СТАЛЬ»** | Разобрать подачу клуба, направлений тренировок и сценариев записи; использовать изображение gym.webp и только проверенные сведения проекта. | *сайт фитнес-клуба; сайт спортивного клуба; разработка сайта для фитнеса* | кейс | конверсия | `P2` | `/portfolio/stal` |
| 10 | `C12` | **Кейс: сайт автосервиса по ремонту BMW** | Показать структуру премиального сервиса: специализация, виды ремонта, доверительные факторы и запись; использовать изображение bmw.webp. | *сайт автосервиса BMW; сайт ремонта BMW; сайт премиального автосервиса* | кейс | конверсия | `P1` | `/portfolio/bmw-service` |
| 11 | `C12` | **Кейс: сайт импорта автомобилей из Японии, Китая и Кореи** | Раскрыть путь клиента от выбора автомобиля до заявки на импорт под ключ; использовать изображение autoconsult.webp и не обещать сроки или стоимость без подтверждения. | *сайт импорта автомобилей; сайт авто под заказ из Японии; сайт импорта авто из Китая и Кореи* | кейс | конверсия | `P1` | `/portfolio/autoconsult` |
| 12 | `C12` | **Кейс: сайт студии маникюра** | Показать визуальную подачу услуг, мастеров, работ и записи; использовать изображение manicure.webp, не добавлять фиктивные отзывы. | *сайт студии маникюра; сайт салона красоты; сайт для бьюти-сферы* | кейс | конверсия | `P2` | `/portfolio/manicure` |
| 13 | `C12` | **Кейс: сайт ремонта квартир под ключ** | Разобрать презентацию премиального ремонта: этапы, состав работ, портфолио и заявка; использовать изображение remont.webp и подтверждённые детали проекта. | *сайт ремонта квартир под ключ; сайт ремонтной компании; сайт премиального ремонта* | кейс | конверсия | `P1` | `/portfolio/remont` |
| 14 | `C01` | **Флагманская услуга: разработка 3D-сайтов и WebGL** | Создать коммерческую страницу с задачами для бизнеса, этапами, технологическим стеком, производительностью, мобильным сценарием, ограничениями и CTA; не обещать универсальный прирост конверсии. | *разработка сайта с 3d; разработка сайта с 3d под ключ; разработка сайта с 3d для бизнеса; разработка сайта с 3d премиум-класса* | лендинг | конверсия | `P1` | `/services/3d-webgl` |
| 15 | `C02` | **Флагманская услуга: интерактивный дизайн и GLSL-шейдеры** | Объяснить, когда интерактивная 3D-графика оправдана, как проектируются эффекты и как обеспечиваются производительность, доступность и fallback. | *интерактивная 3d графика на сайте; сайт с glsl шейдерами под ключ; сайт с glsl шейдерами для бизнеса; сайт с анимацией и шейдерами* | лендинг | конверсия | `P1` | `/services/interactive-design` |
| 16 | `C03` | **Флагманская услуга: оптимизация скорости и Core Web Vitals** | Описать диагностику, приоритизацию LCP INP CLS и план оптимизации без обещания фиксированного балла до аудита; привести методику измерения лабораторных и полевых данных. | *оптимизация скорости сайта core web vitals; быстрый сайт с core web vitals 95+ под ключ; оптимизация скорости сайта для бизнеса; ускорение сайта* | лендинг | конверсия | `P1` | `/services/speed-optimization` |
| 17 | `C04` | **Флагманская услуга: сайты на чистом JavaScript** | Показать применение Vanilla JS, архитектуру без лишнего рантайма, этапы разработки, границы подхода и поддержку; объяснить, что отсутствие фреймворка не является целью само по себе. | *разработка сайтов на чистом javascript; разработка сайта на чистом javascript под ключ; сайт без фреймворков; vanilla js разработка* | лендинг | конверсия | `P2` | `/services/vanilla-js` |
| 18 | `C06` | **Услуга: лендинги под ключ** | Раскрыть стратегию одностраничного сайта, структуру блоков, дизайн, адаптивность, аналитику и интеграции; связать услугу с кейсом OMG без дублирования кейса. | *заказать лендинг под ключ; премиальный лендинг под ключ для бизнеса; лендинг с анимацией; лендинг для дизайнерской одежды* | лендинг | конверсия | `P1` | `/services/landing-pages` |
| 19 | `C07` | **Услуга: корпоративные сайты для B2B** | Показать структуру корпоративного сайта, страницы услуг и отраслей, работу с доверием и сбором лидов; отделить B2B-услугу от лендингов и интернет-магазинов. | *разработка корпоративного сайта для b2b; корпоративный b2b сайт под ключ; корпоративный сайт для компании; индивидуальный дизайн корпоративного сайта* | лендинг | конверсия | `P1` | `/services/corporate-sites` |
| 20 | `C08` | **Услуга: интернет-магазины и e-commerce** | Описать каталог, фильтры, карточку товара, корзину, оплату, доставку, интеграции и мобильный UX; коммерческие условия указывать только подтверждённые. | *разработка интернет магазина под ключ; интернет-магазин бренда одежды; интернет-магазин с индивидуальным дизайном; адаптация интернет-магазина под мобильные* | лендинг | конверсия | `P1` | `/services/ecommerce` |
| 21 | `C09` | **Услуга: калькуляторы стоимости и квизы** | Показать типы калькуляторов, логику ветвления, расчёт, валидацию, аналитику и передачу лида; привести сценарии, не обещая рост конверсии без данных. | *разработка калькулятора стоимости на сайт; сложный калькулятор для сайта; калькулятор стоимости под ключ; квиз для сайта* | лендинг | конверсия | `P1` | `/services/calculators` |
| 22 | `C10` | **Услуга: интеграции сайта с CRM и Telegram** | Описать карту данных и событий, передачу заявок, уведомления, обработку ошибок и тестирование интеграций с Битрикс24, amoCRM и Telegram; 1С упоминать только в пределах подтверждённых возможностей. | *интеграция сайта с CRM Битрикс24 amoCRM; интеграция сайта с Telegram; передача заявок в CRM; интеграция сайта с 1С* | лендинг | конверсия | `P1` | `/services/integrations` |
| 23 | `C11` | **Услуга: поддержка, доработка и редизайн сайтов** | Разделить поддержку действующего сайта, развитие функциональности и редизайн; описать аудит, оценку рисков, этапность и порядок передачи доступа. | *поддержка и доработка готового сайта; редизайн сайта под ключ; техническая поддержка сайта; доработка корпоративного сайта* | лендинг | конверсия | `P2` | `/services/support-redesign` |
| 24 | `C15` | **Как добавить Three.js на сайт: базовая интеграция** | Пошагово разобрать подключение библиотеки, сцену, камеру, renderer, resize и очистку ресурсов; приложить минимальный пример и ограничения поддержки браузеров. | *как добавить three js на сайт; как добавить three.js на сайт; подключить Three.js к сайту* | статья | привлечение | `P1` | `/blog/add-three-js-to-site` |
| 25 | `C15` | **Как создать 3D-сайт на Three.js: архитектура проекта** | Показать путь от прототипа сцены к интеграции в интерфейс: структура модулей, ассеты, состояние загрузки, адаптивность и план деградации. | *как создать 3d сайт; как разработать сайт с three.js; создать 3D сайт на Three.js* | статья | привлечение | `P1` | `/blog/create-3d-website-threejs` |
| 26 | `C15` | **Как сделать WebGL-анимацию на сайте** | Разобрать render loop, временную шкалу, взаимодействие со скроллом и синхронизацию с интерфейсом; отдельно показать, когда достаточно CSS-анимации. | *как сделать webgl анимацию на сайте; WebGL анимация на сайте; интерактивная анимация WebGL* | статья | привлечение | `P1` | `/blog/webgl-animation-guide` |
| 27 | `C15` | **Three.js: сцена, камера и освещение без лишних затрат** | Объяснить базовые компоненты сцены и способы контролировать количество источников света и сложность материалов; пример должен быть воспроизводимым. | *Three.js сцена камера свет; освещение в Three.js; оптимизация 3D сцены* | статья | привлечение | `P2` | `/blog/threejs-scene-camera-light` |
| 28 | `C15` | **Как использовать GLSL-шейдеры на сайте** | Показать минимальную связку shader material и uniforms, передачу времени и координат; обозначить требования к WebGL и путь без шейдеров. | *как использовать glsl шейдеры на сайте; GLSL шейдеры сайт; shader material Three.js* | статья | привлечение | `P1` | `/blog/glsl-shaders-on-website` |
| 29 | `C15` | **Фрагментный шейдер GLSL: первый эффект для веба** | Пошагово разобрать фрагментный шейдер, координаты UV и цветовой вывод; дать безопасный простой пример и объяснить отличия устройств и GPU. | *GLSL fragment shader пример; фрагментный шейдер для сайта; GLSL для WebGL* | статья | привлечение | `P2` | `/blog/glsl-fragment-shader-web` |
| 30 | `C15` | **Физика частиц в Three.js: интерактивная система** | Рассмотреть атрибуты геометрии, обновление позиции, шум и ограничения количества частиц; сравнить GPU- и CPU-подходы на уровне выбора решения. | *физика частиц Three.js; частицы на сайте WebGL; интерактивные частицы Three.js* | статья | привлечение | `P1` | `/blog/threejs-particle-physics` |
| 31 | `C15` | **Эффект жидкого стекла на сайте: шейдер и fallback** | Разобрать визуальную задачу эффекта, ограничения backdrop и shader-подхода, контраст текста и упрощённый fallback для мобильных устройств. | *эффект жидкого стекла на сайте; liquid glass GLSL; стеклянный эффект WebGL* | статья | привлечение | `P1` | `/blog/liquid-glass-web-effect` |
| 32 | `C15` | **Оптимизация Three.js: draw calls, геометрия и материалы** | Дать аудитный чек-лист по количеству draw calls, повторному использованию геометрии и материалов, batching и видимости объектов; измерять до и после на целевых устройствах. | *оптимизация Three.js; уменьшить draw calls Three.js; производительность 3D сайта* | статья | привлечение | `P1` | `/blog/optimize-threejs-draw-calls` |
| 33 | `C15` | **Оптимизация WebGL: GPU, fill rate и overdraw** | Объяснить, как разрешение canvas, прозрачность, полноэкранные эффекты и сложность фрагментного шейдера влияют на GPU; предложить порядок профилирования. | *оптимизация WebGL; WebGL производительность сайта; GPU нагрузка WebGL* | статья | привлечение | `P1` | `/blog/optimize-webgl-gpu` |
| 34 | `C15` | **3D-сайт на мобильных: адаптация и graceful fallback** | Описать проверку производительности на слабых устройствах, снижение DPR, упрощение сцены, отключение тяжёлых эффектов и доступный статичный fallback. | *3D сайт мобильная версия; мобильный fallback WebGL; оптимизация Three.js для смартфонов* | статья | привлечение | `P1` | `/blog/mobile-3d-fallback` |
| 35 | `C15` | **Как загружать 3D-модели GLTF/GLB на сайт** | Разобрать экспорт моделей, текстуры, сжатие, загрузчик и прогрессивное отображение; подчеркнуть, что размер результата проверяется на реальном наборе ассетов. | *загрузить GLTF на сайт; GLB Three.js; оптимизация 3D модели для сайта* | статья | привлечение | `P2` | `/blog/load-gltf-glb-threejs` |
| 36 | `C15` | **Как уменьшить размер 3D-ассетов для веба** | Показать процесс сокращения полигонов и текстур, сжатия и контроля качества; сравнивать размер, визуальный результат и время загрузки. | *оптимизация 3D моделей для веба; уменьшить размер GLB; сжатие 3D ассетов сайта* | статья | привлечение | `P1` | `/blog/compress-3d-web-assets` |
| 37 | `C15` | **Ленивая загрузка 3D-сцены без тяжёлого первого экрана** | Объяснить отложенную загрузку сцены, запуск по видимости или действию пользователя, заглушку и управление ресурсами; не блокировать основной контент. | *ленивая загрузка Three.js; lazy load 3D сайта; загрузка WebGL сцены* | статья | привлечение | `P1` | `/blog/lazy-load-threejs-scene` |
| 38 | `C15` | **WebGL и Core Web Vitals: как не ухудшить скорость** | Связать запуск 3D-графики с LCP и отзывчивостью страницы; предложить измерение до и после, отложенный запуск и приоритет критического контента. | *WebGL Core Web Vitals; Three.js LCP; скорость 3D сайта* | статья | привлечение | `P1` | `/blog/webgl-core-web-vitals` |
| 39 | `C15` | **Как синхронизировать 3D-сцену со скроллом** | Разобрать scroll progress, интерполяцию, закреплённые секции и управление анимацией; учесть reduced motion и не перехватывать прокрутку без необходимости. | *Three.js анимация при скролле; 3D сайт скролл анимация; WebGL scroll animation* | статья | привлечение | `P2` | `/blog/threejs-scroll-animation` |
| 40 | `C15` | **Интерактивный 3D-объект: управление мышью и касанием** | Показать управление камерой и объектом, ограничения жестов, доступность альтернативного управления и предотвращение конфликтов с прокруткой. | *интерактивный 3D объект на сайте; управление 3D на мобильном; Three.js touch interaction* | статья | привлечение | `P2` | `/blog/threejs-touch-interaction` |
| 41 | `C15` | **Как сделать эффект наведения с GLSL-шейдером** | Разобрать передачу координат курсора в uniform, анимацию перехода и отключение дорогого эффекта при неподходящем устройстве. | *GLSL hover эффект; шейдер при наведении; интерактивный shader эффект на сайте* | статья | привлечение | `P2` | `/blog/glsl-hover-effect` |
| 42 | `C15` | **Постобработка в Three.js: когда она нужна и как удешевить** | Сравнить эффекты постобработки с базовыми материалами, описать разрешение буферов, число проходов и отключение второстепенных эффектов. | *Three.js postprocessing; постобработка WebGL; оптимизация эффектов Three.js* | статья | привлечение | `P2` | `/blog/threejs-postprocessing-performance` |
| 43 | `C15` | **WebGL на устройствах без поддержки: проверка и fallback** | Описать проверку возможностей браузера, ошибки создания контекста, сценарий без WebGL и сохранение ключевой информации страницы. | *WebGL fallback; сайт без поддержки WebGL; проверка WebGL браузера* | статья | привлечение | `P1` | `/blog/webgl-support-fallback` |
| 44 | `C15` | **Доступность 3D-сайта: reduced motion и альтернативы** | Дать рекомендации по prefers-reduced-motion, клавиатурной навигации, смысловым текстовым альтернативам и отсутствию критичной информации только в canvas. | *доступность WebGL сайта; reduced motion Three.js; accessibility 3D сайта* | статья | привлечение | `P2` | `/blog/accessible-3d-web` |
| 45 | `C15` | **Профилирование Three.js в браузере** | Показать рабочий процесс измерения CPU и GPU узких мест, графика кадров и повторяемого тест-сценария; объяснить различия между лабораторным и полевым тестом. | *профилирование Three.js; измерить FPS WebGL; диагностика производительности 3D сайта* | статья | привлечение | `P1` | `/blog/profile-threejs-browser` |
| 46 | `C15` | **Как выбрать между CSS-анимацией и WebGL** | Сопоставить визуальные задачи, интерактивность, стоимость поддержки и производительность; дать критерии, когда 3D не требуется. | *CSS или WebGL анимация; когда использовать Three.js; WebGL против CSS* | сравнение | привлечение | `P2` | `/blog/css-animation-vs-webgl` |
| 47 | `C15` | **Создание 3D-фона для сайта без потери читаемости** | Разобрать композицию, контраст, движение, загрузку фона и режим без анимации; показать, как сохранять приоритет заголовка и CTA. | *3D фон сайта; WebGL фон сайта; анимированный 3D фон* | статья | привлечение | `P2` | `/blog/threejs-website-background` |
| 48 | `C15` | **Безопасный жизненный цикл WebGL: очистка и повторный запуск** | Показать освобождение геометрий, материалов, текстур и renderer при смене страницы или повторном монтировании; объяснить признаки утечек. | *Three.js dispose ресурсы; WebGL утечка памяти; очистка Three.js сцены* | статья | привлечение | `P2` | `/blog/threejs-resource-cleanup` |
| 49 | `C15` | **Как подготовить 3D-графику к production** | Собрать контрольный список тестирования браузеров, размеров экрана, ошибок загрузки, резервного изображения и мониторинга после релиза. | *production Three.js сайт; запуск WebGL проекта; тестирование 3D сайта* | статья | прогрев | `P2` | `/blog/threejs-production-checklist` |
| 50 | `C15` | **WebGL и безопасность контента сайта** | Объяснить происхождение и обработку ассетов, ограничения canvas и контекстов, минимизацию сторонних скриптов и безопасную деградацию. | *безопасность WebGL сайта; Three.js безопасность; сторонние скрипты 3D сайта* | статья | привлечение | `P3` | `/blog/webgl-security-basics` |
| 51 | `C03` | **Core Web Vitals 95+: план измерения и оптимизации** | Разобрать различие лабораторных и полевых данных, повторяемый аудит и последовательность улучшений; балл 95+ подать как цель, а не гарантию. | *оптимизация скорости сайта core web vitals; Core Web Vitals 95+; быстрый сайт под ключ* | статья | привлечение | `P1` | `/blog/core-web-vitals-95-guide` |
| 52 | `C03` | **LCP: как ускорить отрисовку главного контента** | Показать диагностику LCP-элемента, критического ресурса, изображений и блокирующих загрузок; связать изменения с повторными измерениями. | *как улучшить LCP; LCP оптимизация сайта; ускорить загрузку главного контента* | статья | привлечение | `P1` | `/blog/improve-lcp` |
| 53 | `C03` | **INP: как улучшить отзывчивость интерфейса** | Объяснить поиск долгих задач, обработку событий и обновление интерфейса; включить сценарий тестирования взаимодействий без обещаний одинакового результата для всех сайтов. | *как улучшить INP; INP оптимизация сайта; отзывчивость интерфейса Core Web Vitals* | статья | привлечение | `P1` | `/blog/improve-inp` |
| 54 | `C03` | **CLS: как убрать неожиданные сдвиги макета** | Разобрать резервирование места для изображений и встраиваемых элементов, шрифты, динамические блоки и способы воспроизведения сдвигов. | *как исправить CLS; CLS оптимизация; сдвиг макета сайта* | статья | привлечение | `P1` | `/blog/fix-cls` |
| 55 | `C03` | **PageSpeed Insights: как ускорить сайт без потери дизайна** | Показать аудит рекомендаций, приоритизацию по эффекту и проверку визуальной целостности; объяснить, почему не каждое предупреждение требует одинакового решения. | *PageSpeed оптимизация без потери дизайна; ускорить сайт PageSpeed; улучшить скорость сайта* | статья | прогрев | `P1` | `/blog/pagespeed-without-design-loss` |
| 56 | `C03` | **Изображения и шрифты: оптимизация загрузки сайта** | Раскрыть форматы и размеры изображений, адаптивные варианты, preload шрифтов и проверку влияния на LCP и CLS. | *оптимизация изображений сайта; ускорить загрузку шрифтов; изображения Core Web Vitals* | статья | привлечение | `P2` | `/blog/optimize-images-fonts` |
| 57 | `C04` | **Zero-Build Vanilla JS: сайт без сборщика и фреймворка** | Объяснить архитектуру небольшого сайта без build step, модульные скрипты и ограничения; привести критерии, когда стек подходит, а когда нет. | *Zero-Build Vanilla JS; сайт без сборщика; разработка сайтов на чистом JavaScript* | статья | привлечение | `P1` | `/blog/zero-build-vanilla-js` |
| 58 | `C04` | **React/Next.js или Vanilla JS: выбор стека для сайта** | Сравнить требования к интерактивности, размеру проекта, команде, рендерингу и поддержке; избегать универсального утверждения о превосходстве одного стека. | *React или Vanilla JS; Next.js или чистый JavaScript; сайт без фреймворка* | сравнение | прогрев | `P1` | `/blog/react-next-vs-vanilla-js` |
| 59 | `C05` | **Tilda, WordPress, Bitrix или кастомная разработка** | Сравнить платформы по скорости запуска, гибкости, владению контентом, поддержке и интеграциям; дать сценарии выбора без искусственного очернения платформ. | *Tilda или кастомный сайт; WordPress или разработка с нуля; Bitrix или кастомный сайт* | сравнение | прогрев | `P1` | `/blog/tilda-wordpress-bitrix-vs-custom` |
| 60 | `C06` | **Шаблон или индивидуальный дизайн: что выбрать бизнесу** | Сопоставить сроки, стоимость владения, уникальность бренда и ограничения шаблона; связать критерии с типом проекта и бюджетом. | *шаблон или индивидуальный дизайн сайта; индивидуальный сайт для бизнеса; заказать сайт с уникальным дизайном* | сравнение | прогрев | `P2` | `/blog/template-vs-custom-design` |
| 61 | `C05` | **Сколько стоит разработка сайта: факторы цены и сметы** | Разложить стоимость на аналитику, дизайн, разработку, контент, интеграции и поддержку; дать структуру сметы и дату актуальности, не публиковать вымышленные тарифы. | *сколько стоит разработка сайта в 2026 году; из чего складывается цена сайта; смета на разработку сайта* | статья | прогрев | `P1` | `/blog/website-development-cost` |
| 62 | `C05` | **Этапы разработки сайта: от брифа до запуска** | Показать последовательность discovery, структуры, дизайна, реализации, тестирования и передачи; обозначить решения и материалы со стороны заказчика на каждом этапе. | *этапы разработки сайта; процесс создания сайта под ключ; как создают сайт для бизнеса* | статья | прогрев | `P1` | `/blog/website-development-stages` |
| 63 | `C05` | **Как выбрать premium-веб-студию** | Дать критерии оценки портфолио, процесса, состава сметы, коммуникации и поддержки; предложить вопросы для первой встречи и проверку реальности кейсов. | *как выбрать веб-студию; премиальная веб-студия; выбрать студию разработки сайтов* | статья | прогрев | `P1` | `/blog/how-to-choose-premium-web-studio` |
| 64 | `C10` | **Интеграция сайта с Битрикс24: схема и проверка заявок** | Описать поля, этапы передачи, обработку дублей и тестирование ошибок; конкретные возможности подтверждать перед публикацией. | *интеграция сайта с Битрикс24; передача заявок с сайта в Битрикс24; форма сайта CRM* | статья | прогрев | `P1` | `/blog/website-bitrix24-integration` |
| 65 | `C10` | **Интеграция сайта с amoCRM и Telegram** | Показать связку формы, CRM-сделки и уведомления в Telegram, управление доступами и журнал ошибок; не размещать секреты и токены в коде примеров. | *интеграция сайта с amoCRM; интеграция сайта с Telegram; уведомления о заявках Telegram* | статья | прогрев | `P1` | `/blog/amocrm-telegram-integration` |
| 66 | `C10` | **Интеграция сайта с 1С: что уточнить до оценки** | Разобрать обмен товарами, ценами, остатками и заказами на уровне требований; подчеркнуть зависимость решения от конфигурации и версии 1С. | *интеграция сайта с 1С; интеграция интернет-магазина с 1С; обмен заказами сайта и 1С* | статья | прогрев | `P2` | `/blog/website-1c-integration` |
| 67 | `C09` | **Как спроектировать калькулятор стоимости для сайта** | Показать сбор правил расчёта, ветвления, диапазоны значений и проверку крайних случаев; описать, как передавать результат в заявку. | *калькулятор стоимости на сайт; разработать калькулятор для сайта; логика онлайн-калькулятора* | статья | привлечение | `P1` | `/blog/website-cost-calculator-guide` |
| 68 | `C09` | **Квиз или калькулятор: какой интерактив выбрать** | Сравнить квиз с квалификацией лида и калькулятор с расчётом результата; дать критерии выбора по доступности исходных данных и цели бизнеса. | *квиз или калькулятор для сайта; интерактивный квиз для бизнеса; калькулятор стоимости сайта* | сравнение | прогрев | `P2` | `/blog/quiz-vs-calculator` |
| 69 | `C11` | **Редизайн сайта без потери поискового трафика** | Сформировать план инвентаризации URL, переноса метаданных, редиректов, аналитики и контроля после релиза; не обещать сохранение трафика безусловно. | *редизайн сайта без потери трафика; редизайн сайта под ключ; SEO при редизайне сайта* | статья | прогрев | `P1` | `/blog/website-redesign-seo` |
| 70 | `C11` | **Поддержка сайта: что входит и как оценивать объём** | Разделить технические обновления, мониторинг, исправления и развитие; предложить прозрачный список работ и порядок постановки задач. | *техническая поддержка сайта; поддержка и доработка сайта; обслуживание сайта для бизнеса* | статья | прогрев | `P2` | `/blog/website-support-scope` |
| 71 | `C07` | **B2B-сайт: структура страниц для сложной услуги** | Показать архитектуру для нескольких услуг и аудиторий, материалы для принятия решения, квалификацию лида и внутренние связи страниц. | *структура корпоративного B2B сайта; сайт для B2B компании; корпоративный сайт для сложной услуги* | статья | привлечение | `P2` | `/blog/b2b-website-structure` |
| 72 | `C14` | **Бриф на сайт: вопросы, которые помогают оценить проект** | Развернуть существующий материал /blog-brief как отдельный практический шаблон вопросов о цели, аудитории, контенте, интеграциях и критериях готовности; проверить, не дублируется ли основной чек-лист. | *пример брифа на сайт; вопросы для брифа на разработку сайта; заполнить бриф на сайт* | статья | привлечение | `P2` | `/blog/website-brief-questions` |
| 73 | `C15` | **Технический хаб: Three.js, WebGL и GLSL для сайтов** | Собрать тематический каталог how-to, performance, мобильной адаптации и шейдеров; поставить страницы-хабы выше узких руководств и обеспечить последовательную перелинковку. | *Three.js гайды; WebGL разработка сайта; GLSL шейдеры сайт; 3D графика для сайта* | хаб | привлечение | `P1` | `/blog/threejs-webgl-guides` |
| 74 | `C15` | **Three.js или чистый WebGL: сравнение подходов** | Сравнить уровень абстракции, скорость прототипирования, контроль над рендерингом и стоимость поддержки; выбрать инструмент по требованиям проекта. | *Three.js или WebGL; чистый WebGL разработка; библиотека Three.js для сайта* | сравнение | прогрев | `P2` | `/blog/threejs-vs-pure-webgl` |
| 75 | `C02` | **Шаблон эффекта GLSL для сайта: от идеи до проверки** | Разобрать цикл создания небольшого эффекта: референс, прототип, настройка uniform, тест на нескольких устройствах и fallback; отделить демонстрацию от production-ready решения. | *сайт с GLSL шейдерами под ключ; интерактивный GLSL эффект; шейдеры для веб-дизайна* | статья | прогрев | `P2` | `/blog/glsl-effect-workflow` |
| 76 | `C08` | **E-commerce: как спроектировать карточку товара и каталог** | Разобрать информационную иерархию, варианты товара, фильтры, доступность действий и мобильный сценарий; сослаться на кейс OMG как пример портфолио. | *разработка интернет-магазина; UX карточки товара; каталог интернет-магазина одежды* | статья | привлечение | `P2` | `/blog/ecommerce-catalog-product-page` |
| 77 | `C12` | **Отраслевые сайты и кейсы: хаб по типу бизнеса** | Сгруппировать 13 реальных кейсов по индустриям и связывать каждый с релевантной услугой; не создавать отдельные дублирующие кейсы внутри статей. | *сайт для жилого комплекса; сайты для отраслей; кейсы сайтов для бизнеса; портфолио веб-студии* | хаб | прогрев | `P2` | `/portfolio/industries` |

### 4.2. OPTIMIZE EXISTING — улучшить (10 существующих страниц)

| № | URL страницы | Кластер | Тема | План оптимизации и перехода к High-End | Целевые запросы | Приоритет |
|:---:|---|:---:|---|---|---|:---:|
| 1 | [`/services`](/services) | `C05` | **Хаб услуг: создание сайта под ключ** | Собрать обзор форматов и услуг с маршрутизацией на подходящие коммерческие посадочные; развести общие запросы создания сайтов и специализированные услуги, чтобы не конкурировать с ними. | *создание сайтов под ключ; заказать сайт; заказать сайт под ключ; веб-студия; веб студия* | `P1` |
| 2 | [`/`](/) | `C05` | **Главная: позиционирование и навигация** | Усилить уникальное позиционирование студии, кратко обозначить специализацию, реальные кейсы и путь к контакту; общие коммерческие запросы направлять на /services. | *создание сайтов; веб-студия; VOID digital; разработка сайтов для бизнеса* | `P1` |
| 3 | [`/portfolio`](/portfolio) | `C12` | **Портфолио: структура каталога и кейсов** | Сделать каталог 13 проектов с фильтрацией по типу бизнеса и ссылками на отдельные кейсы; добавить контекст задачи и решений, не выдумывать метрики. | *портфолио веб-студии; портфолио сайтов; кейсы разработки сайтов; сайты для бизнеса примеры* | `P1` |
| 4 | [`/about`](/about) | `C13` | **О студии: команда, подход и доверие** | Раскрыть специализацию, процесс, принципы работы и подтверждаемую экспертизу; связать заявления с портфолио, не публиковать неподтверждённые награды и отзывы. | *VOID digital о студии; VOID digital отзывы; веб-студия VOID; разработка сайтов студия* | `P2` |
| 5 | [`/contacts`](/contacts) | `C13` | **Контакты и брендовая навигация** | Упростить путь к связи, указать актуальные каналы и ожидания по следующему шагу; сверить контактные данные и разметку организации. | *VOID digital контакты; void digital; связаться с веб-студией; контакты VOID digital* | `P1` |
| 6 | [`/blog`](/blog) | `C14` | **Блог: тематические хабы и внутренняя перелинковка** | Сгруппировать публикации по выбору сайта, стоимости, технологиям, WebGL и скорости; связать статьи с релевантными услугами и кейсами без переспама. | *блог веб-студии; статьи о разработке сайтов; WebGL статьи; Core Web Vitals гайды* | `P2` |
| 7 | [`/blog-brief`](/blog-brief) | `C14` | **Что подготовить перед заказом сайта** | Обновить существующую статью: добавить чек-лист материалов, доступов, контента и ответственных, пример брифа и ссылки на этапы разработки. | *что подготовить перед заказом сайта; как составить бриф на разработку сайта; бриф на сайт; материалы для сайта* | `P1` |
| 8 | [`/blog-landing-vs-site`](/blog-landing-vs-site) | `C14` | **Лендинг или многостраничный сайт: как выбрать** | Обновить существующую статью: сравнить задачи, структуру, контент и сценарии роста; дать дерево выбора и не дублировать общую страницу создания сайтов. | *лендинг или многостраничный сайт что выбрать; лендинг или сайт для бизнеса; какой сайт нужен компании* | `P1` |
| 9 | [`/privacy`](/privacy) | `C13` | **Политика конфиденциальности и доверие** | Проверить актуальность текста, доступность и соответствие фактическим способам обработки данных; не использовать страницу как коммерческую посадочную. | *VOID digital политика конфиденциальности; политика конфиденциальности сайта; обработка персональных данных* | `P3` |
| 10 | [`/404.html`](/404.html) | `C13` | **Страница 404 и возврат к ключевым разделам** | Проверить статус ответа и полезность страницы: понятное сообщение, переходы на услуги, портфолио и контакты; сохранить корректную индексацию ошибки. | *VOID digital; портфолио VOID digital; услуги веб-студии* | `P3` |

### 4.3. MERGE — защита от каннибализации (2 правила)

| № | URL страницы | Кластер | Тема | Правило слияния и разведения интентов | Роль |
|:---:|---|:---:|---|---|:---:|
| 1 | [`/services`](/services) | `C05` | **Разведение общих коммерческих запросов между главной и услугами** | Свести дублирующие общие коммерческие формулировки к /services как основному хабу; на главной оставить бренд и позиционирование, настроить ссылки и canonical по фактической структуре. | конверсия |
| 2 | [`/`](/) | `C13` | **VOID | digital: брендовый хаб и официальные страницы** | Свести брендовые точки навигации, официальные контакты, портфолио и описание услуг; отслеживать поисковые формулировки бренда и не создавать конкурирующие брендовые страницы. | brand-defense |

## 5. Приоритизация и рекомендации по внедрению

### Спринт 1: Быстрый эффект (Quick Wins, Срок: 1–2 недели)
1. **Техническая гигиена и устранение критических ошибок:**
   - Удалить битый URL `https://void-digital.ru/consent` из `sitemap.xml` (устранение 404 для поисковых краулеров).
   - Унифицировать ссылки в шапке и футере: заменить относительные ссылки с расширением (`services.html`, `portfolio.html`) на канонические чистые URL без `.html` (`/services`, `/portfolio`) для устранения лишних 301-редиректов.
   - Прописать атрибут `alt="Жилой комплекс Соцветие в Красноярске"` для изображения `img/portfolio/sotsvetie.webp` на главной странице.
   - Внедрить структурированную микроразметку Schema.org JSON-LD на страницах `/services` (`Service`, `AggregateOffer`), `/portfolio` (`CollectionPage`), `/contacts` (`ContactPage`).
2. **Оптимизация существующих страниц (OPTIMIZE EXISTING):**
   - Главная (`/`): актуализировать Title, H1 и мета-теги с акцентом на High-End веб-разработку, 3D WebGL и Core Web Vitals 95+.
   - Статьи блога `/blog-brief` и `/blog-landing-vs-site`: углубить контент с текущих ~200 слов до 800–1200 слов, внедрив микроразметку `Article`.
3. **Разведение каннибализации (MERGE):**
   - Синхронизировать калькулятор на главной и страницу `/services` через единые тарифы.

### Спринт 2: Захват нишевого коммерческого спроса (Срок: 3–5 недель)
1. **Запуск 4 новых флагманских коммерческих лендингов (P1):**
   - `/services/3d-webgl` (Кластер C01, 175 фраз) — интерактивная посадочная страница с Three.js демо.
   - `/services/interactive-design` (Кластер C02, 142 фразы) — страница wow-эффектов, шейдеров и кинетики.
   - `/services/speed-optimization` (Кластер C03, 99 фраз) — лендинг аудита и ускорения сайтов Core Web Vitals 95+.
   - `/services/vanilla-js` (Кластер C04, 6 фраз) — посадочная разработки на чистом JS без фреймворков.
2. **Упаковка 7 приоритетных P1-кейсов в `/portfolio/<slug>`:**
   - `/portfolio/omg` (Дизайнерская одежда e-commerce)
   - `/portfolio/sotsvetie` (ЖК «Соцветие», недвижимость)
   - `/portfolio/stal` (Фитнес-клуб «СТАЛЬ»)
   - `/portfolio/bmw-service` (Премиальный автосервис BMW)
   - `/portfolio/autoconsult` (Импорт авто из Японии/Китая)
   - `/portfolio/solnechnye-deti` (Детский сад)
   - `/portfolio/veniki` (Оптовые поставки B2B)

### Спринт 3: Долгосрочный органический рост (Срок: 6–12 недель)
1. **Публикация экспертного кластера блога (C15, 56 материалов):**
   - Серия сравнительных статей (Tilda vs Vanilla JS, React vs Vanilla JS, Three.js vs чистый WebGL).
   - Практические гайды по оптимизации LCP/INP и созданию шейдерных эффектов.
2. **Выпуск оставшихся 6 P2-кейсов:**
   - `/portfolio/nor` (Кофейня), `/portfolio/prirodny-kamen` (Ландшафт), `/portfolio/spectech` (Спецтехника), `/portfolio/expert` (Спикер), `/portfolio/manicure` (Бьюти), `/portfolio/remont` (Ремонт квартир).
3. **Аналитический съём частотности:**
   - Разовый прогон семантического ядра через Яндекс Вордстат / Key Collector для актуализации сезонных коэффициентов и региональных хвостов.

---
*Документ void-digital-semantics.md подготовлен автоматически и готов к передаче в разработку.*