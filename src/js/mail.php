<?php
if($_POST['g-recaptcha-response']) {
  $captcha = $_POST['g-recaptcha-response'];
  $secret = "6Le7tlYUAAAAAPzR4cjmIaf8CZhxiEhDz6CH7SsE";

}
  $json = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=". $secret . "&response=" . $captcha), true);

$recepient = "fregire@mail.ru";
$siteName = "Ajax-форма";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \nEmail: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>