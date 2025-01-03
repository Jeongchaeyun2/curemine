$(".search").click(function () {
  $("#header").toggleClass("active");
  $(this).toggleClass("active");
  $(".search2").fadeToggle();
})

$(".ham").click(function () {
  $(".mgnb-wrap").fadeIn();
});

$(".mgnb-close").click(function () {
  $(".mgnb-wrap").fadeOut();
});
