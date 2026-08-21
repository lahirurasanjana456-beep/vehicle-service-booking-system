const servicesData = {
"full-engine": {
name: "Full Engine Service",
desc: "Complete engine inspection and maintenance.",
category: "Maintenance",
image: "images/full engine.jpg",
price: "Rs. 10,000",
rawPrice: 10000,
deposit: "Rs. 2,000",
rawDeposit: 2000
},
"wheel-alignment": {
name: "Wheel Alignment",
desc: "Professional wheel alignment to improve handling and safety.",
category: "Maintenance",
image: "images/wheel.jpg",
price: "Rs. 4,500",
rawPrice: 4500,
deposit: "Rs. 1,000",
rawDeposit: 1000
},
"ac-repair": {
name: "AC Repair",
desc: "Diagnose and repair vehicle air-conditioning systems.",
category: "Repair",
image: "images/ac repair.jpg",
price: "Rs. 5,000",
rawPrice: 5000,
deposit: "Rs. 1,000",
rawDeposit: 1000
},
"car-cleaning": {
name: "Premium Car Cleaning",
desc: "Interior and exterior cleaning to keep your vehicle fresh.",
category: "Cleaning",
image: "images/clean.jpg",
price: "Rs. 3,500",
rawPrice: 3500,
deposit: "Rs. 800",
rawDeposit: 800
}
};

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