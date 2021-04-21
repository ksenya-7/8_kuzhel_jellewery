import {setupModal} from '../utils/modal';

const modal = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.open-modal');
const textInput = document.querySelector('.modal__content input[type="email"]');

const focusTextInput = () => {
  if (textInput) {
    setTimeout(() => {
      textInput.focus();
    }, 100);
  }
};

const initModals = () => {
  if (modal && modalButtons.length) {
    setupModal(modal, false, modalButtons, focusTextInput, false, false);
  }
};

export {initModals};
