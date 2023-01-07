<?php

require_once "dbcon.php";

if(isset($_POST["user_name"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["age"]) )
{
    $user_name = $_POST["user_name"];

    $email = $_POST["email"];

    $password =  $_POST["password"];

    $age =  $_POST["age"];

    $stmt= $db->prepare("INSERT INTO users(
                                                 user_name,
                                                 email, 
                                                 password,
                                                 age
                                            )
                                            VALUES(
                                                 :user_name,
                                                 :email,
                                                 :password,
                                                 :age
                                            )
                                            ");


    $stmt->bindParam(":user_name",$user_name);
    $stmt->bindParam(":email",$email);
    $stmt->bindParam(":password",$password);
    $stmt->bindParam(":age",$age);

    if($stmt->execute())
    {
        echo 'Register Successfully   ';
    }
    else
    {
        echo  ' Fail to Register  ';
    }
}


