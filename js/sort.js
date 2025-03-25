document.addEventListener("DOMContentLoaded", function() {
    const sortOptions = document.getElementById("sort-options");
    const trips = document.querySelectorAll(".trip-container");

    sortOptions.addEventListener("change", function() {
        const sortBy = this.value;
        const sortedTrips = Array.from(trips).sort((a, b) => {
            const priceA = parseInt(a.dataset.price);
            const priceB = parseInt(b.dataset.price);
            const daysA = parseInt(a.dataset.days);
            const daysB = parseInt(b.dataset.days);
            const popularityA = parseInt(a.dataset.popularity);
            const popularityB = parseInt(b.dataset.popularity);

            if (sortBy === "price-low-high") return priceA - priceB;
            if (sortBy === "price-high-low") return priceB - priceA;
            if (sortBy === "days-low-high") return daysA - daysB;
            if (sortBy === "days-high-low") return daysB - daysA;
            if (sortBy === "popular") return popularityA - popularityB;
            return 0;
        });

        const tripsSection = document.querySelector(".trips");
        tripsSection.innerHTML = "";
        sortedTrips.forEach(trip => tripsSection.appendChild(trip));
    });
});