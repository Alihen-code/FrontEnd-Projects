 document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const cards = carousel.querySelectorAll('.card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;
    const totalCards = cards.length;

    // --- update carousel positions ---
    function updateCarousel(index) {
        // wrap index
        if (index < 0) index = totalCards - 1;
        if (index >= totalCards) index = 0;
        currentIndex = index;

        // remove all position classes
        cards.forEach(c => {
            c.classList.remove('active', 'left', 'right', 'hidden-left', 'hidden-right');
        });

        // assign positions
        const leftIndex = (index - 1 + totalCards) % totalCards;
        const rightIndex = (index + 1) % totalCards;
        const hiddenLeftIndex = (index - 2 + totalCards) % totalCards;
        const hiddenRightIndex = (index + 2) % totalCards;

        cards[index].classList.add('active');
        cards[leftIndex].classList.add('left');
        cards[rightIndex].classList.add('right');
        cards[hiddenLeftIndex].classList.add('hidden-left');
        cards[hiddenRightIndex].classList.add('hidden-right');

        // update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // --- event listeners ---
    prevBtn.addEventListener('click', () => {
        updateCarousel(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        updateCarousel(currentIndex + 1);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateCarousel(i);
        });
    });

    // keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });

    // initial render
    updateCarousel(0);
});