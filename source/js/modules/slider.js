// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper-container', {
  speed: 500,
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export {swiper};
