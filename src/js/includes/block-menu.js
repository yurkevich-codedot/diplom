const { Navigation } = require("swiper");

import Swiper from "swiper";
const swiper = new Swiper(".swiper", {
  centeredSlides: false,
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    420: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 50,
    },
  },
});

document.querySelector(".header__menu-btn").addEventListener("click", (e) => {
  if (!e.target.classList.contains("lock-scroll")) {
    document.querySelector("body").classList.add("lock-scroll");
    console.log("no");
  }
});

document.querySelector(".backdrop").addEventListener("click", (e) => {
  if (!e.target.classList.contains("lock-scroll")) {
    document.querySelector("body").classList.remove("lock-scroll");
    console.log("no");
  }
});

document.querySelector(".header__cross").addEventListener("click", (e) => {
  if (!e.target.classList.contains("lock-scroll")) {
    document.querySelector("body").classList.remove("lock-scroll");
    console.log("no");
  }
});
