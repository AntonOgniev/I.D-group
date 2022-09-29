<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$companyName = $_POST['unternehmen'];
$phone = $_POST['phone'];
$text = $_POST['text'];


// Формирование самого письма
$title = "Заголовок письма";
$body = "
<h2>$companyName </h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$text
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com'; 
    $mail->Username   = 'i.d.group.sp.zoo.info@gmail.com';
    $mail->Password   = 'rkzamqycaezqzemf';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 2525;
    $mail->setFrom('i.d.group.sp.zoo.info@gmail.com', 'ID GROUP Office');

    // Получатель письма
    $mail->addAddress('i.d.group.sp.zoo.info@gmail.com');  
    $mail->addAddress('i.d.group.sp@gmail.com');
    $mail->addAddress('office@idgroup.com.pl'); 

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);