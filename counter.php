<?php
// Set header to specify JSON content type
header('Content-Type: application/json');

// Database connection parameters
$servername = "localhost";
$username = "root"; // Replace with your MySQL/MariaDB username
$password = "password"; // Replace with your MySQL/MariaDB password
$dbname = "website_db"; // Replace with your MySQL/MariaDB database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Update the visit count in the database
$sql = "UPDATE counter SET count = count + 1 WHERE id = 1"; // Assuming id 1 holds the visit count

if ($conn->query($sql) === TRUE) {
    // Query to fetch updated count
    $sql_select = "SELECT count FROM counter WHERE id = 1"; // Assuming id 1 holds the visit count
    $result = $conn->query($sql_select);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $count = $row["count"];

        // Return count as JSON
        echo json_encode(['count' => $count]);
    } else {
        // Return a default count if no rows are found
        echo json_encode(['count' => 0]);
    }
} else {
    // Handle errors if the update query fails
    echo json_encode(['error' => 'Error updating count: ' . $conn->error]);
}

// Close connection
$conn->close();
?>

