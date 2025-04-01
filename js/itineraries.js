document.addEventListener('DOMContentLoaded', function() {
    // Itinerary toggle functionality
    const toggleButtons = document.querySelectorAll('.btn-itinerary-toggle');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            this.classList.toggle('active');
            details.classList.toggle('active');
        });
    });

    // Filter functionality
    const filterBtn = document.querySelector('.btn-filter');
    const resetBtn = document.querySelector('.btn-reset');
    const emptyState = document.getElementById('emptyState');
    const itineraryGrid = document.getElementById('itineraryGrid');
    
    if (filterBtn && resetBtn) {
        filterBtn.addEventListener('click', filterItineraries);
        resetBtn.addEventListener('click', resetFilters);
    }
    
    function filterItineraries() {
        const durationFilter = document.getElementById('duration-filter').value;
        const typeFilter = document.getElementById('type-filter').value;
        const cards = document.querySelectorAll('.itinerary-card');
        
        let visibleCount = 0;
        
        cards.forEach(card => {
            const durationMatch = durationFilter === 'all' || card.dataset.duration === durationFilter;
            const typeMatch = typeFilter === 'all' || card.dataset.type === typeFilter;
            
            if (durationMatch && typeMatch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (visibleCount === 0) {
            emptyState.style.display = 'block';
            itineraryGrid.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            itineraryGrid.style.display = 'grid';
        }
    }
    
    function resetFilters() {
        document.getElementById('duration-filter').value = 'all';
        document.getElementById('type-filter').value = 'all';
        
        const cards = document.querySelectorAll('.itinerary-card');
        cards.forEach(card => {
            card.style.display = 'flex';
        });
        
        emptyState.style.display = 'none';
        itineraryGrid.style.display = 'grid';
    }
    
    // Reset link in empty state
    const resetLink = document.querySelector('.reset-link');
    if (resetLink) {
        resetLink.addEventListener('click', function(e) {
            e.preventDefault();
            resetFilters();
        });
    }
});