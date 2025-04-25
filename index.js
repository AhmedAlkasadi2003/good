const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

openMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

closeMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

function toggleLanguage() {
    var languageElement = document.getElementById('language');
    if (languageElement.innerText === 'EN') {
        languageElement.innerText = 'CN';
    } else {
        languageElement.innerText = 'EN';
    }
}
function showCard(cardId) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.add('hidden');
  });
  document.getElementById(cardId).classList.remove('hidden');
  
  // Update active tab styling
  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach(tab => {
    tab.classList.remove('bg-white', 'shadow-sm');
    tab.classList.add('bg-gray-200');
  });
  document.getElementById('tab-' + cardId).classList.remove('bg-gray-200');
  document.getElementById('tab-' + cardId).classList.add('bg-white', 'shadow-sm');
}

// Initialize the page with America tab active
document.addEventListener('DOMContentLoaded', function() {
  showCard('card1');
});


function showRegion(regionId) {
  // Hide all regions
  document.querySelectorAll('.region-content').forEach(region => {
    region.classList.add('hidden');
  });
  
  // Show selected region
  document.getElementById(regionId).classList.remove('hidden');
  
  // Update active tab styling
  document.querySelectorAll('.region-tab').forEach(tab => {
    tab.classList.remove('bg-white', 'shadow-sm');
    tab.classList.add('bg-gray-200');
  });
  
  document.getElementById(`tab-${regionId}`).classList.remove('bg-gray-200');
  document.getElementById(`tab-${regionId}`).classList.add('bg-white', 'shadow-sm');
}

// Initialize with America region active
document.addEventListener('DOMContentLoaded', function() {
  showRegion('america-region');
});


function toggleAccordion(element) {
  element.parentNode.classList.toggle('active');
  const icon = element.querySelector('.accordion-icon');
  if (element.parentNode.classList.contains('active')) {
    icon.textContent = '-';
  } else {
    icon.textContent = '+';
  }
}
AOS.init({
  offset: 120,   // ينشط الحركة عند التمرير 120px قبل العنصر
  duration: 800, // مدة الحركة
});