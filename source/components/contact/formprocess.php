<?php
  // formprocess.php
  $errors = array();  // array to hold validation errors
  $data = array();        // array to pass back data
  if(!empty($_REQUEST['action']) && $_REQUEST['action'] == "formData") {
    // return a response ==============

    // response if there are errors
    if ( ! empty($errors)) {
      // if there are items in our errors array, return those errors
      $data['success'] = false;
      $data['errors']  = $errors;
      $data['message'] = 'Fail!';
    } else {
      if ($_POST['_gotcha'] != '') {
        $data['message'] = 'Hi. You are very clearly a spammer and trying to send me garbage. This is a message to tell you that you failed. Quit your job.';
      } else {
        // if there are no errors, return a message
        $data['success'] = true;
        $data['message'] = 'Success!';

        $firstname = strip_tags($_POST['firstname']);
        $lastname = strip_tags($_POST['lastname']);
        $email = strip_tags($_POST['email']);
        $phone = strip_tags($_POST['phone']);
        $messageText = '<html><body><p>A new message has been received from the SeanLoyless.info site:</p>';
        $messageText .= '<strong>Name:</strong> ' . $firstname . ' ' . $lastname . '<br />';
        $messageText .= '<strong>Email:</strong> ' . $email . '<br />';
        if ($phone != '') {
          $messageText .= '<strong>Phone:</strong> <a href="tel:' . $phone . '">' . $phone . '</a><br />';
        }
        $messageText .= '<strong>Message:</strong><br />' . strip_tags($_POST['messageText']) . '</body></html>';

        $headers = "From: noreply@seanloyless.info" . "\r\n";
        $headers .= "Reply-To: " . strip_tags($email) . "\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $headers .= "X-Priority: 1\r\n";

        $subject = "[FREELANCE] New Contact Form Submission from $firstname $lastname";
        mail("loyless.sean@gmail.com", $subject, $messageText, $headers);
      }
    }

    // return all our data to an AJAX call
    echo json_encode($data);
  }
?>
