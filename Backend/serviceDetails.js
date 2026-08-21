import { servicesData } from './servicesData.js';

const urlParams = new URLSearchParams(window.location.search);
const serviceKey = urlParams.get('service') || 'full-engine';
const data = servicesData[serviceKey] || servicesData['full-engine'];

document.getElementById('page-title').textContent = `${data.name} - AutoCare`;
document.getElementById('breadcrumb-title').textContent = data.name;
document.getElementById('service-name').textContent = data.name;
document.getElementById('service-subtitle').textContent = data.subtitle;
document.getElementById('service-img').src = data.image;
document.getElementById('service-badge').textContent = data.category;


document.getElementById('service-description').innerHTML = data.description.map(p => `<p>${p}</p>`).join('');


document.getElementById('included-container').innerHTML = data.included.map(item => `
    <div class="included-item">
        <span class="included-icon">✓</span>
        <div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        </div>
    </div>
`).join('');

document.getElementById('service-price').textContent = data.price;
document.getElementById('info-category').textContent = data.category;
document.getElementById('info-time').textContent = data.estimatedTime;
document.getElementById('info-type').textContent = data.serviceType;
document.getElementById('info-deposit').textContent = data.deposit;
document.getElementById('service-rating').textContent = data.rating;
document.getElementById('service-reviews').textContent = data.reviews;
document.getElementById('book-now-btn').href = `booking.html?service=${serviceKey}`;