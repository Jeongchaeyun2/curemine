const banner_list = new Swiper('.banner_list', {
  autoplay: {//자동재생
    delay: 3000,//3초
    disableOnInteraction: false,
  },

  speed: 1000,
  loop: true, //기본값 false, 슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next", //다음
    prevEl: ".swiper-button-prev", //이전
  },
});

$(".gnb>li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

$(".pause").click(function () {
  banner_list.autoplay.stop();
  $(this).hide();
  $(".play").show();
});

$(".play").click(function () {
  banner_list.autoplay.start();
  $(this).hide();
  $(".pause").show();
});

const prd_list = new Swiper('.prd_list', {
  autoplay: {//자동재생
    delay: 3000,//3초
    disableOnInteraction: false,
  },

  slidesPerView: "3",
  spaceBetween: 90,

  breakpoints: {
    0: { //분기점 
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const new_img_list = new Swiper('.new_img_list', {
  autoplay: {//자동재생
    delay: 3000,//3초
    disableOnInteraction: false,
  },

  effect: "fade",
  speed: 1000,
});

const new_right_list = new Swiper('.new_right_list', {
  navigation: {
    nextEl: ".swiper-button-next", //다음
    prevEl: ".swiper-button-prev", //이전
  },
});

let itemWidth = $(".item_img").width();
$(".new_img").width(itemWidth);

$(window).resize(function () {
  let itemWidth = $(".item_img").width();
  $(".new_img").width(itemWidth);
});

const review_slide = new Swiper(".review_slide", {
  navigation: {
    nextEl: ".review-next", //다음
    prevEl: ".review-prev", //이전
  },
  slidesPerView: "3", // 한 슬라이드에 보여줄 갯수
  slidesPerGroup: 3,
  spaceBetween: 91, // 슬라이드 사이 여백

  breakpoints: {
    0: { //분기점 
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


let snsHeight = $(".ins_img").height();
$(".sns_left_img").height(snsHeight);

$(window).resize(function () {
  let snsHeight = $(".ins_img").height();
  $(".sns_left_img").height(snsHeight);
});

new_right_list.controller.control = new_img_list;
new_img_list.controller.control = new_right_list;
