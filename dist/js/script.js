// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// typed
var typed = new Typed("#typed", {
  strings: [
    " I'm a Web Developer.",
    "I'm a Student.",
    " I'm Aisyah's boyfriend.",
  ],
  typeSpeed: 100,
  loop: true,
});
var typed = new Typed("#typing", {
  strings: [" abisetiawan."],
  typeSpeed: 150,
  loop: true,
});
