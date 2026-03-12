import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";
export default function () {
  // Swiper Nav
  new Swiper("#swiper-nav", {
    slidesPerView: 5.5,
  });

  // Swiper Banner
  new Swiper("#swiper-banner", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: true,
  });

  // Swiper Recommend
  const swiperRecommends = document.querySelectorAll(".swiper-recommend");

  swiperRecommends.forEach((swiperRecommend) => {
    new Swiper(swiperRecommend, {
      slidesPerView: 2,
      spaceBetween: 19,
    });
  });

  // Swiper Focus
  new Swiper("#swiper-focus", {
    slidesPerView: "auto",
    spaceBetween: 12,
  });
}
