const photosSwiper = new Swiper(".swiper.photos", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    576: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});

const videosSwiper = new Swiper(".swiper.videos", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
