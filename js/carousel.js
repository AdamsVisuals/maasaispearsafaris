document.addEventListener("DOMContentLoaded", function() {
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // Change slide every 2 seconds
        wrap: true // Loop the carousel
    });
});