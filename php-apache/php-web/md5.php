<?php
    $password = "Kz9=Ad1>Tu0,Qn7%Qw8>";

    function md5_encrypt_pass($string){
        echo "Your password is :", md5($string);
    }

    md5_encrypt_pass($password);
?>
