<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r", "\n"), array(" ", " "), $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["desc"]);
    $org = trim($_POST["org"]);
    $type = $_POST["type"];


    if (!isset($name) OR !isset($message) OR !isset($org) OR !isset($type) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Oops! There was a problem with your submission. Please complete the form and try again.";
        exit;
    }

    if ($type == 1) {
        $txtype = "Want to buy our product?";
    } elseif ($type == 2) {
        $txtype = "Want to learn more about our technology?";
    } elseif ($type == 3) {
        $txtype = "Want to join our team?";
    } elseif ($type == 4) {
        $txtype = "Want to become a partner?";
    } elseif ($type == 5) {
        $txtype = "Other";
    } else {
        $txtype = "null";
    }

    $recipient = "info@aeroxo.com, moscow@aeroxo.com";

    $subject = "New contact from $name";


    $email_content = "Name: $name\n";
    $email_content .= "Organization: $org\n";
    $email_content .= "Regarding: $txtype\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = array(
        'From' => 'contactform@aeroxo.com',
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );


    if (mail($recipient, $subject, $email_content, $email_headers)) {

        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
    }

} else {

    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

?>



