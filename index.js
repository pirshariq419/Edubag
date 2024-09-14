let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images .hmimg');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

function autoSlide() {
    moveSlide(1);
}


let slideInterval = setInterval(autoSlide, 3000);


document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 3000);
});
