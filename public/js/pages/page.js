$(document).ready(function(){
  var prevSwiper = new Swiper('section.preview .swiper-container', {
    slidesPerView: 'auto',
    // centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    freeMode: true
    //if screensize = bigger, make it 1/3 of the screen
    //add 5 "featured" slides?
  })
  
  $(".desc .show").click(function() {
    // var isCollapsed = $(".section.collapsible").attr("data-collapsed") === "true"
    var section = $(".desc");
    var isCollapsed = section.attr("data-collapsed") === "true"
    if (isCollapsed) {
      expandSection(".desc")
      $(".section.collapsible").attr('data-collapsed', 'false')
      console.log(1)
    }
  })
  // calculateAspectRatio()
  
  $(".image-popup").click(function(e){
    if (!$(e.target).is(".image-popup img"))
      $(this).removeClass("active")
  })
  
  $("img").click(function(){
    $(".image-popup img").prop('src', $(this).prop('src'))
    $(".image-popup").addClass("active")
  })
})

function collapseSection(element, h) {
  h = h || 0
  element = $(element);
  var sectionHeight = element.prop('scrollHeight')
  var elementTransition = element.css("transition")
  element.css("transition", "")
  requestAnimationFrame(function() {
    element.css("height", sectionHeight + 'px');
    element.css("transition", elementTransition);
    requestAnimationFrame(function() {
      element.css("height", h + "px")
    });
  });
  element.attr('data-collapsed', 'true');
}

function expandSection(element) {
  element = $(element)
  var sectionHeight = element.prop('scrollHeight')
  console.log(sectionHeight)
  element.css("height", sectionHeight + 'px')
  element.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    function(e) {
      element.css("height", '')
      element.unbind()
    })
  element.attr('data-collapsed', 'false');
}


// function calculateAspectRatio() {
  // var windowWidth = $(window).width()
  // var windowHeight = $(window).height()
  // var windowRatio = windowWidth / windowHeight
  // var imgWidth = $(".container img").width()
  // var imgHeight = $(".container img").height()
  // var imgRatio = imgWidth / imgHeight
  //
  // console.log("window",windowRatio)
  // console.log("img",imgRatio)

  // $(".container img").addClass(windowRatio > imgRatio ? "horizontal" : "vertical")
  
  //get width of screen
  //get height of screen
  //get width of img
  //get height of img
  //calc aspect ratio of screen
  //calc aspect ratio of img
  //add class dependent on aspect ratio which is bigger
// }


