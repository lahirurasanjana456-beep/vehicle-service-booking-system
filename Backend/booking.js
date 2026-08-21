import { servicesData } from './servicesData.js';

const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service') || 'full-engine';
const data = servicesData[serviceKey] || servicesData['full-engine'];


const remainingBalance = data.rawPrice - data.rawDeposit;


document.getElementById('summary-img').src = data.image;
document.getElementById('summary-img').alt = data.name;
document.getElementById('summary-category').textContent = data.category;
document.getElementById('summary-name').textContent = data.name;
document.getElementById('summary-desc').textContent = data.desc;
document.getElementById('summary-time').textContent = data.estimatedTime;
document.getElementById('summary-price').textContent = data.price;
document.getElementById('summary-deposit').textContent = data.deposit;
document.getElementById('summary-total').textContent = data.price;
document.getElementById('summary-pay-now').textContent = data.deposit;
document.getElementById('summary-balance-note').textContent = `The remaining Rs. ${remainingBalance.toLocaleString()} will be payable at the service center.`;


document.getElementById('back-button').href = `serviceDetails.html?service=${serviceKey}`;
document.getElementById('breadcrumb-service-link').href = `serviceDetails.html?service=${serviceKey}`;


document.querySelector('.continue-button').addEventListener('click', function(e) {
e.preventDefault();


const fullName = document.getElementById('fullName').value;
const vehicleModel = document.getElementById('vehicleModel').value;
const licensePlate = document.getElementById('licensePlate').value;
const bookingDate = document.getElementById('bookingDate').value;
const timeSlot = document.getElementById('timeSlot').value;
const termsChecked = document.getElementById('terms').checked;


if (!fullName || !vehicleModel || !licensePlate || !bookingDate || !timeSlot || !termsChecked) {
    alert('Please fill in all required fields and accept the terms.');
    return;
}


window.location.href = `payment.html?service=${serviceKey}&fullName=${encodeURIComponent(fullName)}&vehicleModel=${encodeURIComponent(vehicleModel)}&licensePlate=${encodeURIComponent(licensePlate)}&bookingDate=${encodeURIComponent(bookingDate)}&timeSlot=${encodeURIComponent(timeSlot)}`;
});