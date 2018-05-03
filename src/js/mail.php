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

$recepient = "fregire@mail.ru";
$siteName = "Ajax-форма";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>