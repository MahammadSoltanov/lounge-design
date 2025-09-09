var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 44,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1220: {
      slidesPerView: 3,
    },
  },
});
