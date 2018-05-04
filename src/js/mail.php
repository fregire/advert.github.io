<?php
$captcha = $_POST['g-recaptcha-response'];
$google_url="https://www.google.com/recaptcha/api/siteverify";
const GOOGLE_RECAPTCHA_PRIVATE_KEY = '6Le7tlYUAAAAAPzR4cjmIaf8CZhxiEhDz6CH7SsE';

if (isset($_POST['g-recaptcha-response'])) {
    $params = [
        'secret' => GOOGLE_RECAPTCHA_PRIVATE_KEY,
        'response' => $_POST['g-recaptcha-response'],
        'remoteip' => $_SERVER['REMOTE_ADDR']
    ];
    $curl = curl_init('https://www.google.com/recaptcha/api/siteverify?' . http_build_query($params));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $response = json_decode(curl_exec($curl));
    curl_close($curl);
}

$recepient = "fkostya@mail.ru";
$siteName = "Ajax-форма";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$messageMain = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение: $message";

$headers = 'From: $recepient' . "\r\n" .
    'Reply-To: $recepient' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();


$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $messageMain, $headers);

?>