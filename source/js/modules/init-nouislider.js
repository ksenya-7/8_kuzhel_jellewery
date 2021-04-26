const slider = document.querySelector('.nouislider');
const sliderCatalog = document.querySelector('.nouislider-catalog');
const sliderModal = document.querySelector('.nouislider-modal');

// eslint-disable-next-line consistent-return
const sliderRange = () => {
  if (slider) {
    // eslint-disable-next-line no-undef
    return noUiSlider.create(slider, {
      connect: true,
      tooltips: true,
      start: [55, 155],
      step: 5,
      range: {
        'min': [0],
        'max': [200],
      },
      // eslint-disable-next-line no-undef
      format: wNumb({
        prefix: '$ ',
      }),
    });
  }
};

// eslint-disable-next-line consistent-return
const sliderRangeCatalog = () => {
  if (sliderCatalog) {
    // eslint-disable-next-line no-undef
    return noUiSlider.create(sliderCatalog, {
      connect: true,
      tooltips: true,
      start: [55, 155],
      step: 5,
      range: {
        'min': [0],
        'max': [200],
      },
      // eslint-disable-next-line no-undef
      format: wNumb({
        prefix: '$ ',
      }),
    });
  }
};

// eslint-disable-next-line consistent-return
const sliderRangeModal = () => {
  if (sliderModal) {
    // eslint-disable-next-line no-undef
    return noUiSlider.create(sliderModal, {
      connect: true,
      tooltips: true,
      start: [55, 155],
      step: 5,
      range: {
        'min': [0],
        'max': [200],
      },
      // eslint-disable-next-line no-undef
      format: wNumb({
        prefix: '$ ',
      }),
    });
  }
};

export {sliderRange, sliderRangeCatalog, sliderRangeModal};
