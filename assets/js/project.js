// Grabs all slides with class (slide-container)
var slides = document.getElementsByClassName('slide-container');
var currentSlide = 0;


function showSlide(n) {  
  // show [nth] slide
  slides[n].classList.add('active');
}

// iterate 'backwards' in the slides list, based on currentSlide
function prevSlide() {
  // Remove current slide from view
  slides[currentSlide].classList.remove('active')

  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}
// iterate 'forwards' in the slides list, based on currentSlide
function nextSlide() {
  // Remove current slide from view
  slides[currentSlide].classList.remove('active')

  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}



// Show the first slide
showSlide(currentSlide);

// when specific buttons get clicked, go prev or next
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);





