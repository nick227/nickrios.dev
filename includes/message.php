<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
function isValid($obj, $val){
	if(isset($obj->$val)){
		return $obj[$val];
	}else{
		return '...';
	}
}
try {

$_POST = json_decode(file_get_contents('php://input'));
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP(true);                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'nicholas.jay.rios@gmail.com';                     // SMTP username
    $mail->Password   = 'Dog##789';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;     
	$mail->SMTPDebug = 2; 
    $mail->setFrom('nicholas.jay.rios@gmail.com', 'nickrios.dev');
    $mail->addAddress('nicholas.jay.rios@gmail.com', 'Nick');

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'nickrios.dev message';
    $mail->Body    = '<BR><BR>name:' . $_POST->name . '<BR><BR>phone:' . $_POST->phone . '<BR><BR>email:' . $_POST->email . '<BR><BR>design:' . $_POST->design . '<BR><BR>website:' . $_POST->website . '<BR><BR>marketing:' . $_POST->marketing . '<BR><BR>media:' . $_POST->media . '<BR><BR>message:' . $_POST->message;

    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}