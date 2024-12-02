
/* emma karusell*/
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

// Funktsioon mis näitab slaidi mis sel hetkel ees
function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// vaatab kas nuppe on vajutatud
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// 
showSlide(currentIndex);

/* allikas https://skillupwards.com/blog/building-a-carousel-slider-with-javascript-and-css , muutsin natuke ChatGPT'ga */