<?php
header('Content-Type: application/json');

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form data
    $toAddress = "haran@thought-bubble.co.uk";
    $headers = 'From: enquiries@thought-bubble.co.uk' . "\r\n" .
                "Reply-To: " . $_POST["emailAddress"] . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

    if (mail($toAddress, "Enquiry: Thought-Bubble", "Name: ".$_POST["name"]."\r\n\r\nEmail: ".$_POST["emailAddress"]."\r\n\r\nContact Number: ".$_POST["contactNumber"]."\r\n\r\nMessage: ".$_POST["message"]."\r\n\r\nAccess inbox: http://www.haranrasalingam.com:2095", $headers)) {
        // Email sent successfully
        $response['status'] = 'success';
        $response['message'] = 'Email sent successfully';
    } else {
        // Error sending email
        $response['status'] = 'error';
        $response['message'] = 'Error sending email';
    }
} else {
    // Invalid request method
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method';
}

echo json_encode($response);
?>
