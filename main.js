'use strict';

const burger = document.querySelector('.burger');
const navSlide = () => {
  const navList = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
};
navSlide();

const closingNavActive = () => {
  const navigationLinks = document.querySelector('.links');
  navigationLinks.addEventListener('click', () => {
    navigationLinks.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
};
closingNavActive();
