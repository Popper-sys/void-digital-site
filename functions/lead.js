// Netlify Function: принимает заявку с сайта и отправляет в Telegram.
// Токен и chat_id берутся из переменных окружения Netlify (НЕ хранить в коде):
//   TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID

const clip = (v, n) => String(v ?? '').trim().slice(0, n);

// Тип клиента: выбранный в форме и автометка по ключевым словам в тексте заявки.
const SEGMENTS = {
  small: 'Малый бизнес / эксперт',
  shop: 'Интернет-магазин',
  b2b: 'Компания / B2B',
  tender: 'Тендер / госзаказ',
  other: 'Другое',
};
// Слова с «=» в начале ищутся как отдельные слова (чтобы «git» не находилось в «digital»).
const KEYWORDS = {
  shop: ['=1с', '=1c', 'маркетплейс', 'wildberries', 'вайлдберриз', '=ozon', '=озон', 'каталог', 'корзин', 'интернет-магазин', 'интернет магазин', 'эквайринг'],
  b2b: ['=api', 'staging', '=git', 'корпоратив', 'портал', 'документаци', 'интеграци', '=b2b', '=crm', '=erp', 'личный кабинет'],
  tender: ['тендер', 'госзакуп', 'госзаказ', '44-фз', '223-фз', '=тз', 'техническое задание', 'договор', '=акт', 'закупк'],
  small: ['лендинг', 'визитк', 'эксперт', 'записаться'],
};
const autoTags = (text) => {
  const t = ` ${text.toLowerCase().replace(/[^a-zа-яё0-9-]+/g, ' ')} `;
  return Object.keys(KEYWORDS).filter((k) =>
    KEYWORDS[k].some((w) => (w.startsWith('=') ? t.includes(` ${w.slice(1)} `) : t.includes(w.replace(/\s+/g, ' ')))),
  );
};

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

  // Без согласия на обработку персональных данных заявку не принимаем.
  if (!data.consent) return { statusCode: 400, body: 'Consent required' };

  const name = clip(data.name, 100);
  const contact = clip(data.contact, 150);
  const type = clip(data.type, 100);
  const message = clip(data.message, 2000);
  const site = clip(data.site, 200);
  const isAudit = type === 'Бесплатный разбор сайта';
  const client = Object.prototype.hasOwnProperty.call(SEGMENTS, data.client) ? data.client : 'other';
  const tags = autoTags(`${type} ${message}`).filter((k) => k !== client);
  if (!name || !contact) return { statusCode: 400, body: 'Missing fields' };

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { statusCode: 500, body: 'Not configured' };

  const text =
    (isAudit ? `🔍 Заявка на бесплатный разбор сайта\n\n` : `📩 Новая заявка с сайта\n\n`) +
    `🏷 Тип клиента: ${SEGMENTS[client]}` +
    (tags.length ? `\n🔎 Похоже также: ${tags.map((k) => SEGMENTS[k]).join(', ')}` : '') +
    `\n\nИмя: ${name}\nКонтакт: ${contact}\n` +
    (site ? `Сайт: ${site}\n` : '') +
    `Задача: ${type || '—'}\n\n${message || '(без описания)'}`;

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
