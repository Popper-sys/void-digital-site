# VOID_digital — сайт

Статический сайт (HTML/CSS/JS) + одна серверная функция для заявок в Telegram.

## Локальный просмотр

```
python -m http.server 8080
```

Откройте http://localhost:8080. Локально форма откроет почтовый клиент (запасной вариант) — отправка в Telegram работает только после публикации на Netlify.

## Заявки в Telegram

1. В Telegram откройте @BotFather → `/newbot` → получите **токен**.
2. Напишите своему боту любое сообщение, затем откройте
   `https://api.telegram.org/bot<ТОКЕН>/getUpdates` и найдите `"chat":{"id": ...}` — это **chat_id**.
3. Опубликуйте папку `site/` на Netlify (Add new site → Deploy manually / из Git).
4. Site settings → Environment variables → добавьте:
   - `TELEGRAM_BOT_TOKEN` — токен бота
   - `TELEGRAM_CHAT_ID` — ваш chat_id
5. Сделайте redeploy. Форма на `contacts.html` отправляет данные на `/api/lead` → `functions/lead.js` → Telegram.

Токен хранится только в переменных окружения Netlify — в коде сайта его нет. Не вставляйте его в файлы.

## Что заменить

- `js/main.js` → `CONTACT_EMAIL`; `contacts.html` → email и Telegram-ссылка.
- Скриншоты портфолио: положите в `img/portfolio/` файлы `fitness.jpg`, `event.jpg`, `crm.jpg` (16:10) — подставятся автоматически.
- Новая статья блога: скопируйте `blog-brief.html`, поменяйте текст и добавьте карточку в `blog.html`.
