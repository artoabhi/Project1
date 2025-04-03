document.addEventListener("DOMContentLoaded", () => {
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

  window.openNav = function () {
    document.getElementById("sideNav").style.left = "0";
  };

  window.closeNav = function () {
    document.getElementById("sideNav").style.left = "-250px";
  };

  function setupModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.getElementById(modalSelector);
    const closeBtn = document.getElementById(closeSelector);

    if (triggers.length > 0 && modal) {
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
          event.preventDefault();
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
        });
      });

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        });
      }

      window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
        }
      });
    }
  }

  setupModal("#open-faq", "faq-container", "close-faq");
  setupModal("#open-privacy", "privacy", "close-privacy");
  setupModal("#open-terms", "terms", "close-terms");
  setupModal("#open-support", "support", "close-support");
});
