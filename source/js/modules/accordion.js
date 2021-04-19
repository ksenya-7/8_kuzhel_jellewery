const toggles = document.querySelectorAll('.faq__toggle');
const blocks = document.querySelectorAll('.faq__answer');

const closeLists = () => {
  blocks.forEach((element) => {
    element.classList.add('faq__answer--js');
    element.style.maxHeight = 0;
  });
};

const deactivateToggles = () => {
  toggles.forEach((element) => {
    element.classList.remove('faq__toggle--active');
  });
};

const toggleBlock = (block, toggle) => {
  block.classList.toggle('faq__answer--js');
  toggle.classList.toggle('faq__toggle--active');
};

const initAccordion = () => {
  closeLists();
  deactivateToggles();
  toggles.forEach((btn, index) => {
    btn.classList.remove('faq__toggle--no-js');

    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (btn.classList.contains('faq__toggle--active')) {
        toggleBlock(blocks[index], btn);
      } else {
        closeLists();
        deactivateToggles();
        const maxHeight = blocks[index].style.maxHeight;
        blocks[index].style.maxHeight = (maxHeight) ? null : blocks[index].scrollHeight + 'px';
        toggleBlock(blocks[index], btn);
      }
    });
  });
};

export {initAccordion};
