const slider = () => {
  // eslint-disable-next-line no-undef
  return new Swiper('.swiper-container--new-in', {
    speed: 500,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
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
          el: '.swiper-pagination',
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
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
    },
  });
};

export {slider};
