// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.main-nav').classList.toggle('active');
});

// Itinerary Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const itineraries = document.querySelectorAll('.itinerary');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and itineraries
        tabButtons.forEach(btn => btn.classList.remove('active'));
        itineraries.forEach(itinerary => itinerary.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding itinerary
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.main-nav').classList.remove('active');
        }
    });
});

// Form submission
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your booking request! We will contact you shortly.');
        this.reset();
    });
}