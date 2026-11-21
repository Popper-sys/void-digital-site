<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
    exit;
}

// Read input data
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot spam check
if (!empty($data['website_hp'])) {
    echo json_encode(['success' => true]);
    exit;
}

$contact = trim($data['contact'] ?? '');
$name = trim($data['name'] ?? '');
$tariff = trim($data['tariff'] ?? 'Не указан');
$message = trim($data['message'] ?? '');
$page = trim($data['page'] ?? $_SERVER['HTTP_REFERER'] ?? 'https://void-digital.ru/');

if (empty($contact) && empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Пожалуйста, укажите контакт для связи']);
    exit;
}

$dateStr = date('d.m.Y H:i');

// 1. Send Email notification to voiddigital@mail.ru (100% reliable on IHC)
$to = 'voiddigital@mail.ru';
$subject = "=?UTF-8?B?" . base64_encode("Новая заявка: " . $tariff . " — VOID digital") . "?=";
$mailBody = "Новая заявка с сайта void-digital.ru

";
$mailBody .= "Тариф: " . $tariff . "
";
if (!empty($contact)) $mailBody .= "Контакт: " . $contact . "
";
if (!empty($name)) $mailBody .= "Имя: " . $name . "
";
if (!empty($message)) $mailBody .= "Сайт / комментарий: " . $message . "
";
$mailBody .= "Страница: " . $page . "
";
$mailBody .= "Дата: " . $dateStr . " (МСК)
";

$headers = "From: VOID digital <noreply@void-digital.ru>
" .
           "Reply-To: noreply@void-digital.ru
" .
           "MIME-Version: 1.0
" .
           "Content-Type: text/plain; charset=UTF-8
" .
           "Content-Transfer-Encoding: 8bit
";

@mail($to, $subject, $mailBody, $headers);

echo json_encode(['success' => true, 'message' => 'Заявка успешно принята']);
