const togglesQuestion = document.querySelectorAll('.faq__toggle');
const blocksAnswer = document.querySelectorAll('.faq__answer');
const togglesFilter = document.querySelectorAll('.cards__toggle');
const blocksFilter = document.querySelectorAll('.cards__options');
const togglesModalFilter = document.querySelectorAll('.modal-filter__toggle');
const blocksModalFilter = document.querySelectorAll('.modal-filter__options');


const closeLists = (blocks) => {
  blocks.forEach((element) => {
    element.classList.add('close');
    element.style.maxHeight = 0;
  });
};

const deactivateToggles = (toggles) => {
  toggles.forEach((element) => {
    element.classList.remove('active');
  });
};

const toggleBlock = (block, toggle) => {
  block.classList.toggle('close');
  toggle.classList.toggle('active');
};

const toggleHeight = (block, btn) => {
  const maxHeight = block.style.maxHeight;
  block.style.maxHeight = (maxHeight) ? null : block.scrollHeight + 'px';
  toggleBlock(block, btn);
};

const initAccordionFaq = () => {
  closeLists(blocksAnswer);
  deactivateToggles(togglesQuestion);
  togglesQuestion.forEach((btn, index) => {
    btn.classList.remove('no-js');

    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (btn.classList.contains('active')) {
        toggleBlock(blocksAnswer[index], btn);
      } else {
        closeLists(blocksAnswer);
        deactivateToggles(togglesQuestion);
        toggleHeight(blocksAnswer[index], btn);
      }
    });
  });
};

const initAccordionFilter = () => {
  closeLists(blocksFilter);
  deactivateToggles(togglesFilter);
  togglesFilter.forEach((btn, index) => {
    btn.classList.remove('no-js');

    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      toggleHeight(blocksFilter[index], btn);
    });
  });
};

const initAccordionModalFilter = () => {
  closeLists(blocksModalFilter);
  deactivateToggles(togglesModalFilter);
  togglesModalFilter.forEach((btn, index) => {
    btn.classList.remove('no-js');

    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      toggleHeight(blocksModalFilter[index], btn);
    });
  });
};

export {initAccordionFaq, initAccordionFilter, initAccordionModalFilter};
