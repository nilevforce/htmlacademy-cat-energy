// Управление кликом на бургер меню
const navMain = document.querySelector('.header__menu');
const navToggle = document.querySelector('.header__button-burger');

navMain.classList.remove('header__menu--nojs');

navToggle.addEventListener('click', () => {
  navMain.classList.toggle('is-open');
  navToggle.classList.toggle('is-open');
});
