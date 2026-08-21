<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "vehicle_service_db";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $service = $_POST['service'] ?? '';
    $fullName = $_POST['fullName'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $vehicleModel = $_POST['vehicleModel'] ?? '';
    $licensePlate = $_POST['licensePlate'] ?? '';
    $vehicleYear = $_POST['vehicleYear'] ?? '';
    $vehicleType = $_POST['vehicleType'] ?? '';
    $bookingDate = $_POST['bookingDate'] ?? '';
    $timeSlot = $_POST['timeSlot'] ?? '';
    $notes = $_POST['notes'] ?? '';

    $stmt = $conn->prepare("INSERT INTO bookings (service_key, full_name, phone, email, vehicle_model, license_plate, vehicle_year, vehicle_type, booking_date, time_slot, notes) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssssss", $service, $fullName, $phone, $email, $vehicleModel, $licensePlate, $vehicleYear, $vehicleType, $bookingDate, $timeSlot, $notes);

    if ($stmt->execute()) {
        $bookingId = $stmt->insert_id;
        
        header("Location: ../Front%20End/payment.html?service=$service&bookingId=$bookingId&fullName=" . urlencode($fullName) . "&vehicleModel=" . urlencode($vehicleModel) . "&licensePlate=" . urlencode($licensePlate) . "&bookingDate=" . urlencode($bookingDate) . "&timeSlot=" . urlencode($timeSlot));
        exit();
    } else {
        echo "Error saving booking: " . $stmt->error;
    }

    $stmt->close();
}
$conn->close();