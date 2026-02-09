// https://swiperjs.com/swiper-api

import _vars from "../_vars.js";
import Swiper, { Navigation, } from "swiper";

Swiper.use([Navigation]);

if (_vars.linksSliderEl) {

  // слайдер на главной
  new Swiper(_vars.linksSliderEl, {
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
      nextEl: ".links--next",
      prevEl: ".links--prev",
      // disabledClass: "stories-button__unactive",
      clickable: true,
      // для ппрвильного направления
    },
    watchSlidesProgress: true,
    // показ кол-ва слайдов (работает, когда откл effect: "fade")
    slidesPerView: 1.1,
    // расстояние между слайдами
    // spaceBetween: gap, // свой размер
    spaceBetween: 10,
    // кол-во пролистываемых слайдов
    slidesPerGroup: 1,
    // стартовый слайд
    initialSlide: 0,
    // freeMode: true,
    // активный слайд по центру
    centeredSlides: true,
    
    breakpoints: {
      1238: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      992: {
        spaceBetween: 40,
      },
      576: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
    },

    //отложенная загрузка:
    //отключаем презагрузку картинок
    // preloadImages: false,
    lazy: true,
    
  });
  //----- END
}