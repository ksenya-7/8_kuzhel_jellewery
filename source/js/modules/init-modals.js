import {setupModal} from '../utils/modal';

const modalFilter = document.querySelector('.modal-filter');
const modalFilterButtons = document.querySelectorAll('.open-modal-filter');

const modalCard = document.querySelector('.modal-card');
const modalCardButtons = document.querySelectorAll('.open-modal-card');
// const textInput = document.querySelector('.modal__content input[type="email"]');

// const focusTextInput = () => {
//   if (textInput) {
//     setTimeout(() => {
//       textInput.focus();
//     }, 100);
//   }
// };

// const initModalLogin = () => {
//   if (modalFilter&& modalButtons.length) {
//     setupModal(modal, false, modalButtons, focusTextInput, false, false);
//   }
// };

const initModalFilter = () => {
  if (modalFilter && modalFilterButtons.length) {
    setupModal(modalFilter, false, modalFilterButtons, false, false, false);
  }
};

const initModalCard = () => {
  if (modalCardButtons.length) {
    modalCardButtons.forEach((element) => element.removeAttribute('href'));

    if (modalCard) {
      setupModal(modalCard, false, modalCardButtons, false, true, false);
    }
  }

};

export {initModalFilter, initModalCard};
