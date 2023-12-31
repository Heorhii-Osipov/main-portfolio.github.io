<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setlanguage('en', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('export@foodmix.trade', "Portfolio");
    $mail->addAddress('lelush.kek@gmail.com');
    $mail->Subject = "Contact data";

    $body = '<h1>info from HH</h1>';

    if(trim(!empty($_POST['name']))){
        $body.= '<p><strong>Name: </strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.= '<p><strong>E-mail: </strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.= '<p><strong>Message: </strong> '.$_POST['message'].'</p>';
    }

$mail->Body = $body;

if (!$mail->send()){
    $message = 'Error';
} else {
    $message = 'Your message sent!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>