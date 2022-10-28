<?php

$name = $_POST['name'];
$email = $_POST['email'];
$theme = $_POST['theme'];
$msg = $_POST['msg'];
$date = date('d/m/Y');
$hour = date('H:i:s');

$arquivo = "
    <html lang='pt-br'>
    <head>
     <meta charset='UTF-8'>
    </head>
    <body>
      <p><b>Nome: </b>$name</p>
      <p><b>E-mail: </b>$email</p>
      <p><b>Assunto: </b>$theme</p>
      <p><b>Mensagem: </b>$msg</p>
      <p>Este e-mail foi enviado em <b>$date</b> às <b>$hour</b></p>
    </body>
    </html>
";

$destino = "contato@leandrodev.com.br";
$assunto = "Contato pelo Site";

$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: $name <$email>";
$headers .= "Return-Path: $email\n";
$headers .= "Reply-To: $email\n";

mail($destino, $assunto, $arquivo, $headers,  "-f$email");

echo '<body style="background: -webkit-gradient(linear, left top, right top, from(#fff), to(#e3ffff)) no-repeat;';
echo 'display:flex;align-items: center;justify-content: center; text-shadow: 1px 1px 0 #000;">';
echo '<h2 style="color:#f00;">Mensagem enviada, obrigado :)</h2>';
echo "<script>setTimeout(() => {
    window.location.href = '/';
}, 2000);</script>";
echo '</body>';

?>
