<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $service = htmlspecialchars($_POST["service-inquiry"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "williamhearn20@gmail.com";  // <-- Change this to your email address
    $subject = "New Contact Form Submission";
    $body = "You have received a new message:\n\n" .
            "Name: $name\n" .
            "Email: $email\n" .
            "Service Inquiry: $service\n" .
            "Message:\n$message";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. We will be in touch shortly.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
