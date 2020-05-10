new Swiper ('.slider', { //Класс контейнера
  slideClass: '_sS', //НЕ ТРОГАТЬ
  wrapperClass: '_sW', //НЕ ТРОГАТЬ
  autoplay: {delay: 4000},//автоплей в МС
  roundLengths: true, //округление размеров (для норм шрифта)
  loop: true, //по кругу ли
  speed: 2000,//в мс
  allowTouchMove: false,//отключить перетаскивание
  //spaceBetween: 30, //расстояние между слайдами В ПИКСЕЛЯХ
  slidesPerView: 1, //кол-во отображаемых слайдов
  //grabCursor: true, //заменить курсор на захват
  centeredSlides: true, //активный слайд в центре
  //autoHeight: true,
  //slidesPerGroup: 1,
  //direction: 'vertical',
  breakpoints: {
    768: { //начиная с планшета
      slidesPerView: 2,
    }, 
  },
});