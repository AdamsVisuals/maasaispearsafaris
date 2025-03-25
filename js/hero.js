// Slideshow Functionality
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
let currentSlide = 0;

// Show Slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Next Slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Previous Slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto Play
let autoPlay = setInterval(nextSlide, 5000);

// Pause on Hover
const slideshow = document.querySelector('.slideshow');
slideshow.addEventListener('mouseenter', () => clearInterval(autoPlay));
slideshow.addEventListener('mouseleave', () => autoPlay = setInterval(nextSlide, 5000));

// Dot Navigation
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

// Arrow Navigation
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);