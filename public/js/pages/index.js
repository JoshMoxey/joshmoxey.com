$(document).ready(function () {
  var introSwiper = new Swiper('.intro.swiper-container', {
    // resistance: false,
    // resistanceRatio: 0
    // noSwipingClass: "swiper-slide",
    // noSwiping: true,
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    //if screensize = bigger, make it 1/3 of the screen
    //add 5 "featured" slides?
  })
  
  var test1Swiper = new Swiper('.test-1.swiper-container', {
    // loop: true,
    width: 100,
    freeMode: true,
    // slidesPerView: 2
  })
})

