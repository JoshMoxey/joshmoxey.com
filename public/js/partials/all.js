$(document).ready(function () {
  $(".bottom .more-button").click(function (e) {
    $("body").toggleClass("more-open")
    e.stopPropagation()
  })
  $(".body").click(function () {
    if (!$("body").hasClass("more-open")) return
    $("body").toggleClass("more-open")
  })
});