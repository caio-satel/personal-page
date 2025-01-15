const menuHamburger = document.querySelector(".hamburger-menu");
const menuNav = document.querySelector(".header-menu");

menuHamburger.addEventListener("click", () =>
menuNav.classList.toggle("active"));