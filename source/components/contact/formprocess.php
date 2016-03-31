// formprocess.php
<?php
  $errors = array();  // array to hold validation errors
  $data = array();        // array to pass back data
  if(!empty($_REQUEST['action']) && $_REQUEST['action'] == "formData") {
    // validate the variables ========
    if (empty($_POST['firstname']))
      $errors['firstname'] = 'First name is required.';

    if (empty($_POST['lastname']))
      $errors['lastname'] = 'Last name is required.';

    if (empty($_POST['email']))
      $errors['email'] = 'Email is required.';

    if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false && $_POST['email']!="" ) {
      $errors['email'] = 'Enter a valid email address.';
    }
    if (empty($_POST['messageText']))
      $errors['messageText'] = 'Please enter a message.';

    // return a response ==============

    // response if there are errors
    if ( ! empty($errors)) {
      // if there are items in our errors array, return those errors
      $data['success'] = false;
      $data['errors']  = $errors;
      $data['message'] = 'Fail!';
    } else {
      // if there are no errors, return a message
      $data['success'] = true;
      $data['message'] = 'Success!';
      
      $firstname = $_POST['firstname'];
      $lastname = $_POST['lastname'];
      $email = $_POST['email'];
      $phone = $_POST['phone'];
      $messageText = '<html><body><p>A new message has been received from the SeanLoyless.info site:</p>';
      $messageText .= '<strong>Name:</strong> ' . $firstname . ' ' . $lastname . '<br />';
      $messageText .= '<strong>Email:</strong> ' . $email . '<br />';
      if ($phone != '') {
        $messageText .= '<strong>Phone:</strong> <a href="tel:' . $phone . '">' . $phone . '</a><br />';
      }
      $messageText .= '<strong>Message:</strong><br />' . $_POST['messageText'] . '</body></html>';

      $headers = "From: noreply@seanloyless.info" . "\r\n";
      $headers .= "Reply-To: " . strip_tags($email) . "\r\n";
      $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
      $headers .= "X-Priority: 1\r\n";

      $subject = "[FREELANCE] New Contact Form Submission from $firstname $lastname";
      mail("loyless.sean@gmail.com", $subject, $messageText, $headers);
    }

    // return all our data to an AJAX call
    echo json_encode($data);
  }
?>