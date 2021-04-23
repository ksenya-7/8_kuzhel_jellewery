const breakpointMd = window.matchMedia('(max-width: 767px)');

const slider = () => {
  // eslint-disable-next-line no-undef
  return new Swiper('.new-in__swiper-container', {
    speed: 500,
    spaceBetween: 30,
    navigation: {
      nextEl: '.new-in__arrow-right',
      prevEl: '.new-in__arrow-left',
    },

    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.new-in__pagination',
          type: 'fraction',
          renderFraction(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' <span>of</span> ' + '<span class="' + totalClass + '"></span>';
          },
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.new-in__pagination',
          clickable: true,
          renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.new-in__pagination',
          clickable: true,
          renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
    },
  });
};


// eslint-disable-next-line consistent-return
const sliderCard = () => {
  if (breakpointMd.matches) {
    // eslint-disable-next-line no-undef
    return new Swiper('.gallery__swiper-container', {
      speed: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
        renderFraction(currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' <span>of</span> ' + '<span class="' + totalClass + '"></span>';
        },
      },
    });
  }
};

export {slider, sliderCard};
