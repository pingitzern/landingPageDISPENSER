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
  // TODO: implementar slider de testimonios (por ejemplo, con Swiper.js)
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initTestimonialsSlider();
});
