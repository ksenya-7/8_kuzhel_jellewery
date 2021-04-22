import {enableScrolling} from '../utils/scroll-lock';

const body = document.querySelector('body');
const nav = document.querySelector('.header');
const wrapper = document.querySelector('.header__wrapper');
const navToggle = document.querySelector('.header__toggle');
const breakpointLg = window.matchMedia('(max-width: 1024px)');

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

  if (breakpointLg.matches) {
    window.addEventListener('orientationchange', () => {
      nav.classList.remove('open');
      wrapper.classList.remove('open');
      enableScrolling();
    });
  }
};

export {initMenu};
