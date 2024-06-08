<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $numberForm = htmlspecialchars($_POST['numberForm']);
    $emailForm = htmlspecialchars($_POST['emailForm']);
    $message = htmlspecialchars($_POST['message']);

    $to = "bhanurthore22@gmail.com";
    $subject = "New Form Submission";
    $body = "First Name: $firstName\nLast Name: $lastName\nMobile Number: $numberForm\nEmail: $emailForm\nMessage: $message";
    $headers = "From: $emailForm";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>
