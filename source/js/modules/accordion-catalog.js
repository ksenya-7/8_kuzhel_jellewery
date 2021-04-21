const toggles = document.querySelectorAll('.cards__toggle');
const blocks = document.querySelectorAll('.cards__options');

const closeLists = () => {
  blocks.forEach((element) => {
    element.classList.add('cards__options--close');
    element.style.maxHeight = 0;
  });
};

const deactivateToggles = () => {
  toggles.forEach((element) => {
    element.classList.remove('cards__toggle--active');
  });
};

const toggleBlock = (block, toggle) => {
  block.classList.toggle('cards__options--close');
  toggle.classList.toggle('cards__toggle--active');
};

const initAccordionCatalog = () => {
  closeLists();
  deactivateToggles();
  toggles.forEach((btn, index) => {
    btn.classList.remove('cards__toggle--no-js');

    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      const maxHeight = blocks[index].style.maxHeight;
      blocks[index].style.maxHeight = (maxHeight) ? null : blocks[index].scrollHeight + 'px';
      toggleBlock(blocks[index], btn);
    });
  });
};

export {initAccordionCatalog};
