document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".blog-sidebar");
    const toggleButton = document.querySelector(".sidebar-toggle");

    // Check if the sidebar and toggle button exist
    if (sidebar && toggleButton) {
        toggleButton.addEventListener("click", function () {
            // Toggle the 'active' class on the sidebar
            sidebar.classList.toggle("active");

            // Change the button text based on the sidebar state
            if (sidebar.classList.contains("active")) {
                toggleButton.textContent = "Hide Sidebar";
            } else {
                toggleButton.textContent = "Show Sidebar";
            }
        });
    }
});