import { servicesData } from './servicesData.js';

// Parse query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service') || 'full-engine';
const data = servicesData[serviceKey] || servicesData['full-engine'];

// Get user form details passed from booking page
const fullName = urlParams.get('fullName') || 'John Silva';
const vehicleModel = urlParams.get('vehicleModel') || 'Toyota Aqua';
const licensePlate = urlParams.get('licensePlate') || 'ABC-1234';
const bookingDate = urlParams.get('bookingDate') || '25 Aug 2026';
const timeSlot = urlParams.get('timeSlot') || '10:00 AM';

// Update Summary Card UI
document.getElementById('summary-img').src = data.image;
document.getElementById('summary-img').alt = data.name;
document.getElementById('summary-category').textContent = data.category;
document.getElementById('summary-name').textContent = data.name;
document.getElementById('summary-desc').textContent = data.desc;

document.getElementById('summary-vehicle').textContent = vehicleModel;
document.getElementById('summary-plate').textContent = licensePlate.toUpperCase();
document.getElementById('summary-date').textContent = bookingDate;
document.getElementById('summary-time').textContent = timeSlot;

document.getElementById('summary-price').textContent = data.price;
document.getElementById('summary-deposit').textContent = data.deposit;
document.getElementById('summary-total').textContent = data.deposit;

const remainingBalance = data.rawPrice - data.rawDeposit;
document.getElementById('summary-balance').textContent = `Rs. ${remainingBalance.toLocaleString()}`;
document.getElementById('pay-btn-amount').textContent = data.deposit;

// Keep back button linked with parameters
document.getElementById('back-button').href = `booking.html?service=${serviceKey}`;
document.getElementById('breadcrumb-booking').href = `booking.html?service=${serviceKey}`;

// Handle Payment & Forward Data to Confirmation Page
document.getElementById('pay-button').addEventListener('click', function(e) {
e.preventDefault();

const cardName = document.getElementById('cardName').value;
const cardNumber = document.getElementById('cardNumber').value;
const expiryDate = document.getElementById('expiryDate').value;
const cvv = document.getElementById('cvv').value;

if (!cardName || !cardNumber || !expiryDate || !cvv) {
    alert('Please fill in all required payment details.');
return;
}

// Forward all current parameters to bookingConfirmation.html
window.location.href = `bookingConfirmation.html${window.location.search}`;
});