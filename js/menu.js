document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const fullscreenMenu = document.querySelector(".fullscreen-menu");
    const closeMenu = document.querySelector(".close-menu");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        fullscreenMenu.classList.toggle("active");
    });

    closeMenu.addEventListener("click", function() {
        hamburger.classList.remove("active");
        fullscreenMenu.classList.remove("active");
    });
});