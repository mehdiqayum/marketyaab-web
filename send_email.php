<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // Compose email message
    $to = "support@marketyaab.com";
    $subject = "New Contact Form Submission";
    $body = "First Name: $firstname\n" .
            "Last Name: $lastname\n" .
            "Email: $email\n" .
            "Phone: $phone\n" .
            "Service: $service\n" .
            "Message:\n$message";

    // Set email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. We will contact you shortly.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
