let currentIndex = 0;
const slides = document.querySelectorAll('.carrossel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Inicializa o carrossel mostrando o primeiro slide
showSlide(currentIndex);

// Auto-rolagem a cada 5 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);