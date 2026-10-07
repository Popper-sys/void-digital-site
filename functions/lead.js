// Netlify Function: принимает заявку с сайта и отправляет в Telegram.
// Токен и chat_id берутся из переменных окружения Netlify (НЕ хранить в коде):
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

const clip = (v, n) => String(v ?? '').trim().slice(0, n);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: 'Bad Request' };
  }

  // Honeypot: боты заполняют скрытое поле — молча «принимаем» и выбрасываем.
  if (data.website) return { statusCode: 200, body: 'ok' };

  const name = clip(data.name, 100);
  const contact = clip(data.contact, 150);
  const type = clip(data.type, 100);
  const message = clip(data.message, 2000);
  if (!name || !contact) return { statusCode: 400, body: 'Missing fields' };

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { statusCode: 500, body: 'Not configured' };

  const text =
    `📩 Новая заявка с сайта\n\n` +
    `Имя: ${name}\nКонтакт: ${contact}\nЗадача: ${type || '—'}\n\n${message || '(без описания)'}`;

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!res.ok) return { statusCode: 502, body: 'Telegram error' };
  } catch {
    return { statusCode: 502, body: 'Telegram unreachable' };
  }

  return { statusCode: 200, body: 'ok' };
};
