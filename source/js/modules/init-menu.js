const body = document.querySelector('body');
const nav = document.querySelector('.header');
const wrapper = document.querySelector('.header__wrapper');
const navToggle = document.querySelector('.header__toggle');


const initMenu = () => {
  if (nav && navToggle) {
    nav.classList.remove('no-js');

    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('scroll-lock');
      nav.classList.toggle('open');
      wrapper.classList.toggle('open');
    });
  }
};

export {initMenu};
