<?php
// $captcha = $_POST['g-recaptcha-response'];
// $google_url="https://www.google.com/recaptcha/api/siteverify";
// const GOOGLE_RECAPTCHA_PRIVATE_KEY = '6Le7tlYUAAAAAPzR4cjmIaf8CZhxiEhDz6CH7SsE';

// if (isset($_POST['g-recaptcha-response'])) {
//     $params = [
//         'secret' => GOOGLE_RECAPTCHA_PRIVATE_KEY,
//         'response' => $_POST['g-recaptcha-response'],
//         'remoteip' => $_SERVER['REMOTE_ADDR']
//     ];
//     $curl = curl_init('https://www.google.com/recaptcha/api/siteverify?' . http_build_query($params));
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
//     $response = json_decode(curl_exec($curl));
//     curl_close($curl);
// }

// $recepient = "fkostya@mail.ru";
// $siteName = "Ajax-форма";

// $name = trim($_POST["name"]);
// $phone = trim($_POST["phone"]);
// $email = trim($_POST["email"]);
// $message = trim($_POST["message"]);
// $messageMain = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение: $message";

// $headers = 'From: $recepient' . "\r\n" .
//     'Reply-To: $recepient' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();


// $pagetitle = "Заявка с сайта \"$siteName\"";
// mail($recepient, $pagetitle, $messageMain, $headers);

// SMTP
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST["message"];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                                                                                           // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'xxccvv33as@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'qwerty228'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('xxccvv33as@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('fkostya@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта Березка';
$mail->Body    = "Имя: $name <br> \nE-mail: $email <br> \nСообщение: $message";
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>