const slides = document.querySelectorAll('.slide-container');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 1500); // Change slide every 3 seconds (adjust as needed)
