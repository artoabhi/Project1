let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");

function autoSlide() {
  index = (index + 1) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(autoSlide, 3000);
