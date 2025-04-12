<?php
// Use PHPMailer classes (if installed via Composer)
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Collect and sanitize form data
    $currentlyEnrolled = isset($_POST['currentlyEnrolled']) ? strip_tags($_POST['currentlyEnrolled']) : '';
    $everParticipated  = isset($_POST['everParticipated']) ? strip_tags($_POST['everParticipated']) : '';
    $firstName         = isset($_POST['firstName']) ? strip_tags($_POST['firstName']) : '';
    $lastName          = isset($_POST['lastName']) ? strip_tags($_POST['lastName']) : '';
    $fullName          = trim($firstName . " " . $lastName);
    $email             = isset($_POST['emailAddress']) ? filter_var($_POST['emailAddress'], FILTER_SANITIZE_EMAIL) : '';
    $address           = isset($_POST['address']) ? strip_tags($_POST['address']) : '';
    $city              = isset($_POST['city']) ? strip_tags($_POST['city']) : '';
    $state             = isset($_POST['state']) ? strip_tags($_POST['state']) : '';
    $zipCode           = isset($_POST['zipCode']) ? strip_tags($_POST['zipCode']) : '';
    $sex               = isset($_POST['sex']) ? strip_tags($_POST['sex']) : '';
    $dob               = isset($_POST['dob']) ? strip_tags($_POST['dob']) : '';
    $bestTime          = isset($_POST['bestTime']) ? strip_tags($_POST['bestTime']) : '';
    $howHear           = isset($_POST['howHear']) ? strip_tags($_POST['howHear']) : '';
    $studies           = isset($_POST['studies']) ? implode(", ", $_POST['studies']) : '';
    $studyOther        = isset($_POST['studyOther']) ? strip_tags($_POST['studyOther']) : '';
    $conditions        = isset($_POST['conditions']) ? strip_tags($_POST['conditions']) : '';

    // Construct the email message body
    $messageBody  = "Currently Enrolled: $currentlyEnrolled\n";
    $messageBody .= "Ever Participated: $everParticipated\n";
    $messageBody .= "Full Name: $fullName\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Address: $address\n";
    $messageBody .= "City/State/Zip: $city, $state $zipCode\n";
    $messageBody .= "Sex: $sex\n";
    $messageBody .= "Date of Birth: $dob\n";
    $messageBody .= "Best Time to Call: $bestTime\n";
    $messageBody .= "How did you hear about us: $howHear\n";
    $messageBody .= "Studies of Interest: $studies\n";
    $messageBody .= "Other Study: $studyOther\n";
    $messageBody .= "Medical Conditions: $conditions\n";

    // Create a new PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // Use SMTP
        $mail->isSMTP();
        // Gmail SMTP server address
        $mail->Host = 'smtp.gmail.com';
        // Enable SMTP authentication
        $mail->SMTPAuth = true;
        // Your Gmail address
        $mail->Username = 'houstonclintrials@gmail.com';
        // Your Gmail App Password (not your regular account password – see note below)
        $mail->Password = 'flyh bhcj okym yngh';
        // Use TLS encryption
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        // Set TCP port to connect to
        $mail->Port = 587;

        // Set email headers and sender information
        $mail->setFrom('houstonclintrials@gmail.com', 'Houston Clinical Trials');
        // $mail->addAddress('info@houstonclintrials.com');   // Recipient
        $mail->addAddress('tkatscc@gmail.com');   // Recipient
        $mail->addReplyTo($email, $fullName);               // Reply-to address from form

        // Email content
        $mail->isHTML(false);  // Set email format to plain text
        $mail->Subject = 'Registration Form Submission';
        $mail->Body    = $messageBody;

        // Send the email
        $mail->send();
        echo "Thank you, we will get back to you soon.";
    } catch (Exception $e) {
        echo "Sorry, there was an error sending your message. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
?>
