document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const fullscreenMenu = document.querySelector(".fullscreen-menu");
    const closeMenu = document.querySelector(".close-menu");
    const dropdowns = document.querySelectorAll(".dropdown");
    const menuLinks = document.querySelectorAll(".fullscreen-menu a");
    const showMoreButton = document.querySelector(".show-more");
    const hiddenItems = document.querySelectorAll(".vacation-item.hidden");
    const navbar = document.querySelector(".navbar");

    // Loader percentage functionality
    let percentage = 0;
    const loaderPercentage = document.getElementById("loader-percentage");
    const interval = setInterval(() => {
        percentage += 1;
        loaderPercentage.textContent = `${percentage}%`;
        if (percentage >= 100) {
            clearInterval(interval);
            document.getElementById("loader").style.display = "none";
        }
    }, 30); // Adjust the interval time as needed

    // Hide loader after page load
    window.addEventListener("load", () => {
        document.body.classList.add("loaded");
    });

    // Toggle fullscreen menu
    hamburger.addEventListener("click", () => {
        fullscreenMenu.style.display = "flex";
    });

    closeMenu.addEventListener("click", () => {
        fullscreenMenu.style.display = "none";
    });

    // Close fullscreen menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            fullscreenMenu.style.display = "none";
        });
    });

    // Close fullscreen menu when clicking on empty space
    fullscreenMenu.addEventListener("click", (event) => {
        if (event.target === fullscreenMenu) {
            fullscreenMenu.style.display = "none";
        }
    });

    // Dropdown functionality
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "block";
        });
        dropdown.addEventListener("mouseleave", () => {
            dropdown.querySelector(".dropdown-menu").style.display = "none";
        });
    });

    // Show more safaris functionality
    showMoreButton.addEventListener("click", () => {
        hiddenItems.forEach(item => {
            item.classList.remove("hidden");
        });
        showMoreButton.style.display = "none";
    });

    // Navbar scroll functionality
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });
});