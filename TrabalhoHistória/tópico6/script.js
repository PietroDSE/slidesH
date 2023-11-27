const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('button#nex');
const prevButton = document.querySelector('button#prev');
const prevTopic = document.querySelector('button#prevTopic')
let currentSlideIndex = 0;

prevTopic.addEventListener('click', () =>{
    document.location.href ='../tópico1/index.html'
})

document.addEventListener('keydown', function(event){
    if(event.key === 'Backspace'){
        document.location.href ='../tópico1/index.html'
    }
})
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        document.location.href ='../tópico1/index.html'
    }
})
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

document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowRight'){
        nextSlide()
    }
})
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
        prevSlide()
    }
})
showSlide();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
