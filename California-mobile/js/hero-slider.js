export const heroSlider = () => {
  const sliderElement = document.querySelector(".swiper");

  if (!sliderElement || typeof Swiper === "undefined") {
    return;
  }

  new Swiper(sliderElement, {
    direction: "horizontal",
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
};
