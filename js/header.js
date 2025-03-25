// Add background on scroll
const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50 || window.innerWidth <= 768) { // Adjust the width as needed
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});