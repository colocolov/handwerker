// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, Autoplay, FreeMode } from "swiper";

Swiper.use([Autoplay, Navigation, FreeMode]);

if (_vars.servicesSliderEl) {

  // слайдер на главной
  new Swiper(_vars.servicesSliderEl, {
    loop: true,
    // autopl?ay: {
      //пауза между прокруткой
      // delay: 3000,
      //закончить на последнем слайде
      // stopOnLastSlide: false,
      //отключить после ручного переключения
      // disableOnInteraction: false,
    // },
    //скорость переключения слайдов
    // speed: 800,
    // навигация по стрелкам
    navigation: {
      nextEl: ".services--next",
      prevEl: ".services--prev",
      // disabledClass: "stories-button__unactive",
      clickable: true,
      // для ппрвильного направления
    },
    watchSlidesProgress: true,
    // показ кол-ва слайдов (работает, когда откл effect: "fade")
    slidesPerView: 1,
    // расстояние между слайдами
    // spaceBetween: gap, // свой размер
    spaceBetween: 20,
    // кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // стартовый слайд
    initialSlide: 0,
    // freeMode: true,
    // активный слайд по центру
    // centeredSlides: true,
    
    // адаптив
    breakpoints: {
      //when window width is >= 320px
      1024: {
        slidesPerView: 3.2,
      },
      992: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1.5,
      },
    },

    //отложенная загрузка:
    //отключаем презагрузку картинок
    // preloadImages: false,
    lazy: true,
    
  });
  //----- END
}