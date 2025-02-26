<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Validate data (example)
if (empty($name) || empty($email) || empty($phone)) {
  // Handle validation error (e.g., display an error message)
} else {
  // Connect to database
  $conn = new mysqli("localhost", "username", "password", "database_name");

  // Prepare and execute SQL query to insert data
  $stmt = $conn->prepare("INSERT INTO applications (name, email, phone) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $name, $email, $phone);
  $stmt->execute();

  // Close database connection
  $stmt->close();
  $conn->close();

  // Send success response (e.g., redirect to a thank you page)
  header("Location: thank_you.html");
  exit();
}
?>