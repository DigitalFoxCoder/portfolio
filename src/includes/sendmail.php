<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    include './PHPMailer/src/Exception.php';
    include './PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', '/papmailer/language/');
    $mail->IsHTML(true);

    //Указывает отправителя письма письма(надо будет самостоятельно разобрать как получать об этом инфомрацию с html на php)
    $mail->setFrom('arctic.fox.coder@gmail.com', 'Я заебался');
    //указывает на какую почу отправляется сообщение
    $mail->addAddress('mrnigt84@gmail.com');
    //Указывается тема письма
    $mail->Subject = 'Тема сообщнеия';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong>'.$POST['name'].'</p>';
    }//если поле было не пустое, отправляется имя указанное в сообщении
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>Почта:</strong>'.$POST['email'].'</p>';
    }//если поле было не пустое, отправляется почта указанная в сообщении
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Сообщение:</strong>'.$POST['email'].'</p>';
    }//если поле было не пустое, отправляется сообщение указанное в сообщении

    //отправка файла
    if(!empty($_FILES['image']['tmp_name'])){
        //путь к загрузке файла
        $filePath = _DIR_ . "/files/" . $_FILES['image']['name'];
        //загрузка файла
        if(copy($_FILES['image']['tmp_file'], $filePath)){
            $fileAttach = $filePath;
            $body.='<p><strong>Фото в приложении</strong>';
            $mail->addAttachment($fileAttach);
        }
    }

    $mail->Body = $body;

    //Отправление
    if(!$mail->send()){
        $message = 'Ошибка';
    }else{
        $message = 'Данные отправлены!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>