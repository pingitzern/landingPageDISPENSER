// main.js

// Inicializar acordeón de FAQs
export function initFaqAccordion() {
  const items = document.querySelectorAll('#faq > div');
  items.forEach(item => {
    const button = item.querySelector('button');
    const content = item.querySelector('div');
    button.addEventListener('click', () => {
      content.classList.toggle('hidden');
    });
  });
}

// Placeholder para inicializar el slider de testimonios
export function initTestimonialsSlider() {
  const container = document.querySelector('#testimonios [data-carousel]');
  const prevBtn = document.querySelector('#testimonios [data-carousel-prev]');
  const nextBtn = document.querySelector('#testimonios [data-carousel-next]');

  if (!container || !prevBtn || !nextBtn) return;

  const slides = container.children;
  let index = 0;

  const update = () => {
    container.style.transform = `translateX(-${index * 100}%)`;
  };

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initTestimonialsSlider();
});
