// Slideshow Functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide(currentSlide);

// Google Maps Integration using Leaflet
const map = L.map('map').setView([-6.3690, 34.8888], 6); // Tanzania coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers for national parks
const parks = [
    { name: 'Serengeti', coords: [-2.1540, 34.6857] },
    { name: 'Kilimanjaro', coords: [-3.0674, 37.3556] },
    { name: 'Ngorongoro', coords: [-3.1945, 35.4890] }
];

parks.forEach(park => {
    L.marker(park.coords).addTo(map)
        .bindPopup(<b>${park.name}</b>);
});