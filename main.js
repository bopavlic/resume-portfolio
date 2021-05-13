/*const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});*/
const burger = document.querySelector(".burger");
const navSlide = () => {
  const navList = document.querySelector(".nav-links");

  const navLinks = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};
navSlide();

const closingNavActive = () => {
  const navActive = document.querySelector(".nav-active");
  const navigationLinks = document.querySelector(".links");
  navigationLinks.addEventListener("click", () => {
    navigationLinks.classList.remove("nav-active");
    burger.classList.remove("toggle");
  });
};
closingNavActive();
