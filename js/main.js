// Swiperの設定
const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loopAdditionalSlides: 1,  // ループをつなげるための追加スライド

  autoplay: {
    delay: 5000,  //5秒
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});