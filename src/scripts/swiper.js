var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 44,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
