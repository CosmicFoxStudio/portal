document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    let index = 0;

    window.nextSlide = function() {
        const cards = document.querySelectorAll(".game-card");
        const cardWidth = cards[0].offsetWidth + 20; // Inclui o espaçamento
        if (index < cards.length - 1) {
            index++;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    };

    window.prevSlide = function() {
        const cards = document.querySelectorAll(".game-card");
        const cardWidth = cards[0].offsetWidth + 20;
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * cardWidth}px)`;
        }
    };
});