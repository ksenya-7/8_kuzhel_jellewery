import {setupModal, openModal} from '../utils/modal';

const modalFilter = document.querySelector('.modal-filter');
const modalFilterButtons = document.querySelectorAll('.open-modal-filter');

const modalCard = document.querySelector('.modal-card');
const modalCardButtons = document.querySelectorAll('.open-modal-card');

const modalLogin = document.querySelector('.modal-login');
const modalLoginButtons = document.querySelectorAll('.open-modal-login');
const textInput = document.querySelector('.modal-login__content input[type="email"]');

const focusTextInput = () => {
  if (textInput) {
    setTimeout(() => {
      textInput.focus();
    }, 100);
  }
};

const onEnterPress = (evt, modal, callback) => {
  const isEnterKey = evt.key === 'Enter' || evt.key === '13';

  if (isEnterKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

const initModalLogin = () => {
  if (modalLogin && modalLoginButtons.length) {
    setupModal(modalLogin, false, modalLoginButtons, focusTextInput, false, false);
  }
};

const initModalFilter = () => {
  if (modalFilter && modalFilterButtons.length) {
    setupModal(modalFilter, false, modalFilterButtons, false, false, false);
  }
};

const initModalCard = () => {
  if (modalCardButtons.length) {
    modalCardButtons.forEach((element) => {
      element.removeAttribute('href');
      element.setAttribute('tabindex', '0');
    });

    if (modalCard) {
      setupModal(modalCard, false, modalCardButtons, false, true, false);

      modalCardButtons.forEach((btn) => {
        btn.addEventListener('keyup', (e) => {
          if (e.keyCode === 13) {
            openModal(modalCard, false, false);
          }
        });
      });
    }
  }

};

export {initModalFilter, initModalCard, initModalLogin};
