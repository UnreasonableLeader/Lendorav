
/* emma karusell*/
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Event listeners for prev and next buttons
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Initial slide
showSlide(currentIndex);

/* allikas https://skillupwards.com/blog/building-a-carousel-slider-with-javascript-and-css , muutsin natuke ChatGPT'ga */