<?php
// Обработчик заявок для PHP-хостинга (ihc.ru): POST /api/lead → запись на сервере в РФ → уведомление в Telegram.
// Формат сообщения повторяет functions/api/lead.js (Cloudflare Pages). Токен бота в репозитории не хранится:
// он лежит в Cloudflare (через него идёт уведомление) либо, если Telegram станет доступен с хостинга, в файле
// lead-config.php: ['TELEGRAM_BOT_TOKEN' => '…', 'TELEGRAM_CHAT_ID' => '…'].

header('Content-Type: text/plain; charset=utf-8');
header('X-Robots-Tag: noindex');

function reply($status, $body) {
    http_response_code($status);
    echo $body;
    exit;
}

function clip($v, $n) {
    return mb_substr(trim(is_scalar($v) ? (string)$v : ''), 0, $n, 'UTF-8');
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, 'Method Not Allowed');

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) reply(400, 'Bad Request');

// Honeypot: боты заполняют скрытое поле — молча «принимаем» и выбрасываем.
if (!empty($data['website'])) reply(200, 'ok');

// Без согласия на обработку персональных данных заявку не принимаем.
if (empty($data['consent'])) reply(400, 'Consent required');

$SEGMENTS = [
    'small' => 'Малый бизнес / эксперт',
    'shop' => 'Интернет-магазин',
    'b2b' => 'Компания / B2B',
    'tender' => 'Тендер / госзаказ',
    'other' => 'Другое',
];
// Слова с «=» в начале ищутся как отдельные слова (чтобы «git» не находилось в «digital»).
$KEYWORDS = [
    'shop' => ['=1с', '=1c', 'маркетплейс', 'wildberries', 'вайлдберриз', '=ozon', '=озон', 'каталог', 'корзин', 'интернет-магазин', 'интернет магазин', 'эквайринг'],
    'b2b' => ['=api', 'staging', '=git', 'корпоратив', 'портал', 'документаци', 'интеграци', '=b2b', '=crm', '=erp', 'личный кабинет'],
    'tender' => ['тендер', 'госзакуп', 'госзаказ', '44-фз', '223-фз', '=тз', 'техническое задание', 'договор', '=акт', 'закупк'],
    'small' => ['лендинг', 'визитк', 'эксперт', 'записаться'],
];

function auto_tags($text, $KEYWORDS) {
    $t = ' ' . preg_replace('/[^a-zа-яё0-9-]+/u', ' ', mb_strtolower($text, 'UTF-8')) . ' ';
    $out = [];
    foreach ($KEYWORDS as $k => $words) {
        foreach ($words as $w) {
            $hit = $w[0] === '='
                ? mb_strpos($t, ' ' . mb_substr($w, 1, null, 'UTF-8') . ' ', 0, 'UTF-8') !== false
                : mb_strpos($t, preg_replace('/\s+/u', ' ', $w), 0, 'UTF-8') !== false;
            if ($hit) { $out[] = $k; break; }
        }
    }
    return $out;
}

$name = clip($data['name'] ?? '', 100);
$contact = clip($data['contact'] ?? '', 150);
$type = clip($data['type'] ?? '', 100);
$message = clip($data['message'] ?? '', 2000);
$site = clip($data['site'] ?? '', 200);
$estimate = clip($data['estimate'] ?? '', 160);
$isAudit = $type === 'Бесплатный разбор сайта';
$isCalc = ($data['source'] ?? '') === 'calc';
$client = isset($data['client']) && is_string($data['client']) && isset($SEGMENTS[$data['client']]) ? $data['client'] : 'other';
$tags = array_values(array_filter(auto_tags("$type $message", $KEYWORDS), function ($k) use ($client) { return $k !== $client; }));
if ($name === '' || $contact === '') reply(400, 'Missing fields');

// 1) Сначала заявка записывается на сервер в России (152-ФЗ, ч. 5 ст. 18): отдельный закрытый каталог вне публичной папки сайта.
//    Вместе с ней — подтверждение согласия: время, IP, версия текста согласия. Файлы старше 12 месяцев удаляются.
$consentVersion = clip($data['consent_version'] ?? '', 20);
$record = [
    'at' => date('c'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'ua' => mb_substr($_SERVER['HTTP_USER_AGENT'] ?? '', 0, 200, 'UTF-8'),
    'consent' => true,
    'consent_version' => $consentVersion,
    'name' => $name, 'contact' => $contact, 'type' => $type, 'site' => $site,
    'client' => $client, 'estimate' => $estimate, 'message' => $message,
];
$stored = false;
foreach ([dirname(__DIR__, 3) . '/data/leads', dirname(__DIR__, 2) . '/data/leads'] as $dir) {
    if (!is_dir($dir)) @mkdir($dir, 0700, true);
    if (is_dir($dir) && is_writable($dir)) {
        $file = $dir . '/leads-' . date('Y-m') . '.jsonl';
        $stored = @file_put_contents($file, json_encode($record, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX) !== false;
        if ($stored) {
            @chmod($file, 0600);
            // срок хранения — 12 месяцев: месячные файлы старше года удаляем
            $limit = date('Y-m', strtotime('-12 months'));
            foreach (glob($dir . '/leads-*.jsonl') ?: [] as $old) {
                if (preg_match('/leads-(\d{4}-\d{2})\.jsonl$/', $old, $m) && $m[1] < $limit) @unlink($old);
            }
            break;
        }
    }
}
if (!$stored) error_log('lead.php: не удалось записать заявку в хранилище');

// 2) Затем уведомление оператору в Telegram.
// С хостинга ihc.ru api.telegram.org недоступен, поэтому заявка уходит через функцию Cloudflare Pages
// (functions/api/lead.js) на адресе lead.void-digital.ru (pages.dev с хостинга тоже заблокирован): она хранит токен бота и сама отправляет сообщение в Telegram.
// Если Telegram станет доступен напрямую, можно положить lead-config.php с токеном (см. начало файла).
$config = [];
foreach ([dirname(__DIR__, 2) . '/lead-config.php', dirname(__DIR__) . '/lead-config.php'] as $configFile) {
    if (@is_file($configFile)) { $c = include $configFile; if (is_array($c)) $config = $c; break; }
}
$token = $config['TELEGRAM_BOT_TOKEN'] ?? '';
$chatId = $config['TELEGRAM_CHAT_ID'] ?? '';

if ($token && $chatId) {
    $url = "https://api.telegram.org/bot$token/sendMessage";
    $payload = json_encode(['chat_id' => $chatId, 'text' => $text], JSON_UNESCAPED_UNICODE);
} else {
    $url = 'https://lead.void-digital.ru/api/lead';
    $payload = json_encode($data, JSON_UNESCAPED_UNICODE);
}

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 20,
]);
$res = curl_exec($ch);
$code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
if ($res === false) reply(502, 'Upstream unreachable');
if ($code < 200 || $code >= 300) reply(502, 'Upstream error');

reply(200, 'ok');
