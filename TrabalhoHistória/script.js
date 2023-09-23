const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('button#nex');
const prevButton = document.querySelector('button#prev');
let currentSlideIndex = 0;

function showSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlideIndex].style.display = 'block';
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    showSlide();
}

function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide();
}

showSlide();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
