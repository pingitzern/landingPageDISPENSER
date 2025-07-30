// Carousel and smooth scroll interactions

// Wait for the document to be fully parsed
document.addEventListener('DOMContentLoaded', () => {
  // ----- Carousel logic -----
  const carousel = document.querySelector('[data-carousel]');
  const nextBtn = document.querySelector('[data-carousel-next]');
  const prevBtn = document.querySelector('[data-carousel-prev]');

  if (carousel && nextBtn && prevBtn) {
    const slides = carousel.children;
    let index = 0;

    const slideWidth = () => carousel.parentElement.clientWidth;

    // Move carousel to show the slide at `index`
    const updatePosition = () => {
      carousel.style.transform = `translateX(-${index * slideWidth()}px)`;
    };

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length; // wrap to first slide
      updatePosition();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length; // wrap to last slide
      updatePosition();
    });

    // Recalculate position on resize to keep alignment
    window.addEventListener('resize', updatePosition);
  }

  // ----- Smooth scroll logic -----
  const menuLinks = document.querySelectorAll('header nav a[href^="#"]');

  menuLinks.forEach(link => {
    link.addEventListener('click', evt => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        evt.preventDefault();
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
