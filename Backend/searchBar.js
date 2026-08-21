const searchBar = document.getElementById('search-services');
const serviceCard = document.querySelectorAll('.service-card');
const category = document.getElementById('category');

searchBar.addEventListener('input', function() {
  const searchTerm = searchBar.value.toLowerCase();

  serviceCard.forEach(card => {
    const serviceName = card.querySelector('h3').textContent.toLowerCase();
    if (serviceName.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

if (category) {
  category.addEventListener('change', function() {
    const selectedCategory = category.value.toLowerCase();

    serviceCard.forEach(card => {
      const categoryName = card.querySelector('.service-category').textContent.toLowerCase().trim();

      if (selectedCategory === 'all' || categoryName === selectedCategory) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}