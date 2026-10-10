# VOID | digital — сайт

Статический сайт (HTML/CSS/JS) + одна серверная функция для заявок в Telegram.
Боевой адрес: https://void-digital.ru

## Локальный просмотр

```
python -m http.server 8080
```

Откройте http://localhost:8080. Локально форма заявок не отправляется (серверной функции нет), покажется ссылка на Telegram.

## Хостинг: Cloudflare Pages

- Репозиторий: `Popper-sys/void-digital-site`, ветка `main`. Каждый push в `main` автоматически публикуется.
- Настройки проекта Pages: **Framework preset: None**, **Build command: пусто**, **Build output directory: `/`** (корень репозитория).
- Функция заявок: `functions/api/lead.js` (маршрут `POST /api/lead`).
- Переменные окружения (Settings → Variables and Secrets, тип **Secret**, окружение Production и Preview):
  - `TELEGRAM_BOT_TOKEN` — токен бота от @BotFather
  - `TELEGRAM_CHAT_ID` — chat_id получателя
- Токен хранится только в переменных проекта. Не вставляйте его в файлы репозитория.
- После изменения переменных нужен новый деплой (Deployments → Retry deployment или новый push).

## Как получить токен и chat_id

1. В Telegram откройте @BotFather → `/newbot` (или `/token` для существующего бота) → получите **токен**.
2. Напишите своему боту любое сообщение, затем откройте
   `https://api.telegram.org/bot<ТОКЕН>/getUpdates` и найдите `"chat":{"id": ...}` — это **chat_id**.

## Домен и DNS

Домен `void-digital.ru` на Рег.ру. Для Cloudflare Pages DNS-зона домена переносится в Cloudflare
(в Рег.ру указываются два сервера имён Cloudflare). Записи и SSL создаёт Cloudflare.

## Старый хостинг (Netlify)

Netlify больше не основной хостинг: на бесплатном тарифе закончились кредиты на деплой.
Файл `netlify.toml` и функция `legacy-netlify/lead.js` оставлены на случай возврата.

## Что заменить

- Контакты: Telegram в `contacts.html` и `js/main.js` (`TELEGRAM_URL`). Email не указан.
- Новая статья блога: скопируйте `blog-brief.html`, поменяйте текст и добавьте карточку в `blog.html`.
- Портфолио: картинки в `img/portfolio/` (660×440, webp), карточки в `portfolio.html`.
