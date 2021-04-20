const slider = () => {
  // eslint-disable-next-line no-undef
  return new Swiper('.swiper-container--new-in', {
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
        pagination: {
          el: '.swiper-pagination',
          createPagination: true,
          // type: 'fraction',
          // renderFraction(currentClass, totalClass) {
          //   return '<span class="' + currentClass + '"></span>' + '<span class="' + totalClass + '"></span>';
          // },
          clickable: true,
        },
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction(currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
      },
    },
  });
};

export {slider};
