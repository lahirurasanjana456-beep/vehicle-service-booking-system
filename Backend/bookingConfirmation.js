const servicesData = {
"full-engine": {
    name: "Full Engine Service",
    desc: "Complete engine inspection and maintenance.",
    category: "Maintenance",
    image: "images/full engine.jpg",
    price: "Rs. 10,000",
    rawPrice: 10000,
    deposit: "Rs. 2,000",
    rawDeposit: 2000,
    estimatedTime: "2 Hours"
},
"wheel-alignment": {
    name: "Wheel Alignment",
    desc: "Professional wheel alignment to improve handling and safety.",
    category: "Maintenance",
    image: "images/wheel.jpg",
    price: "Rs. 4,500",
    rawPrice: 4500,
    deposit: "Rs. 1,000",
    rawDeposit: 1000,
    estimatedTime: "1 Hour"
},
"ac-repair": {
    name: "AC Repair",
    desc: "Diagnose and repair vehicle air-conditioning systems.",
    category: "Repair",
    image: "images/ac repair.jpg",
    price: "Rs. 5,000",
    rawPrice: 5000,
    deposit: "Rs. 1,000",
    rawDeposit: 1000,
    estimatedTime: "1.5 Hours"
},
"car-cleaning": {
    name: "Premium Car Cleaning",
    desc: "Interior and exterior cleaning to keep your vehicle fresh.",
    category: "Cleaning",
    image: "images/clean.jpg",
    price: "Rs. 3,500",
    rawPrice: 3500,
    deposit: "Rs. 800",
    rawDeposit: 800,
    estimatedTime: "1 Hour"
}
};

// Parse query parameters from URL
const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service') || 'full-engine';
const data = servicesData[serviceKey] || servicesData['full-engine'];

// Get user form details if passed via URL, otherwise use default placeholders
const customerName = urlParams.get('fullName') || 'John Silva';
const vehicleModel = urlParams.get('vehicleModel') || 'Toyota Aqua';
const licensePlate = urlParams.get('licensePlate') || 'ABC-1234';
const bookingDate = urlParams.get('bookingDate') || '25 August 2026';
const timeSlot = urlParams.get('timeSlot') || '10:00 AM - 12:00 PM';

// Generate a random booking reference code or keep standard
const randomRef = 'BK-2026-' + Math.floor(10000 + Math.random() * 90000);
document.getElementById('booking-ref').textContent = randomRef;

// Populate Service Details
document.getElementById('service-img').src = data.image;
document.getElementById('service-img').alt = data.name;
document.getElementById('service-category').textContent = data.category;
document.getElementById('service-title').textContent = data.name;
document.getElementById('service-desc').textContent = data.desc;
document.getElementById('display-duration').textContent = data.estimatedTime;

// Populate Customer & Vehicle Details
document.getElementById('display-customer').textContent = customerName;
document.getElementById('display-vehicle').textContent = vehicleModel;
document.getElementById('display-plate').textContent = licensePlate.toUpperCase();
document.getElementById('display-date').textContent = bookingDate;
document.getElementById('display-time').textContent = timeSlot;

// Populate Pricing Summary
const remainingBalance = data.rawPrice - data.rawDeposit;
document.getElementById('display-price').textContent = data.price;
document.getElementById('display-deposit').textContent = data.deposit;
document.getElementById('display-balance').textContent = `Rs. ${remainingBalance.toLocaleString()}`;
document.getElementById('balance-note').textContent = `The remaining Rs. ${remainingBalance.toLocaleString()} will be payable at the service center after completion of the service.`;