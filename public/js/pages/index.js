$(document).ready(function (){
  var introSwiper = new Swiper ('.intro.swiper-container', {
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // scrollbar: '.swiper-scrollbar',
    
    //if screensize = bigger, make it 1/3 of the screen
    //add 5 "featured" slides?
  })

  var test1Swiper = new Swiper ('.test-1.swiper-container', {
    // loop: true,
    width: 100,
    freeMode: true,
    // slidesPerView: 2
  })
})

