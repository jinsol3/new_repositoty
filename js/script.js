$(document).ready(function () {
  console.log("제이쿼리 로드 완료");

  var button_clicked = false;

  $(".box-btn").on("click", function () {
    if (button_clicked == false) {
      $(".box").addClass("clicked");
      button_clicked = true;
    } else {
      $(".box").removeClass("clicked");
      button_clicked = false;
    }
  });

  $(".cat_img").on("mouseenter", function () {
    $(".cat_img").attr("src", "week5/asset/cat_2.png");
    $(".cat_img").css("width", "400px");
  });

  $(".cat_img").on("mouseleave", function () {
    $(".cat_img").attr("src", "week5/asset/cat_1.png");
    $(".cat_img").css("width", "200px");
  });
});

//   // class 이름 box-btn을 클릭했을 때, .box의 background-color을 pink로 바꿔라.
//   // 그리고 두번째 버튼을 클릭했을 때, .box의 background-color를 다시 blue로 바꿔라.
// $(".box-btn").on("click", fuction (){
//     $(".box").addClass("clicked");
// });

// $(".box-btn2").on("click", fuction (){
//     $(".box").removeClass("clicked");
// });

// $(".box-btn").on("click", fuction(){
//     $(".box").toggleClass("clicked");
// });

// $(document).ready(fuction () {
//     console.log("제이쿼리 로드 완료");

// class명이 box로 할당된 요소들의 css 속성을 변화시켜라 혹은 적용해라
// $("선택지").css("속성", "값");
// $(".box").css("width", "100px");
// $(".box").css("height", "100px");
// $(".box").css("backgrouond-color", "blue");
// $(".box").css("border-radius", "16px");
// $(".box").css("text-align", "center");
// $(".box").css("margin", "40px");
// $(".box").css("color", "white");

// var a = $(".box");

// $(a).css("width", "100px");
// $(a).css("height", "100px");
// $(a).css("backgrouond-color", "blue");
// $(a).css("border-radius", "16px");
// $(a).css("text-align", "center");
// $(a).css("margin", "40px");
// $(a).css("color", "white");

//     console.log(a);

//     $(".box-btn").on("click",fuction(){
//         $(".box").css("background-color", "yellow");
//     });

//     $(".box").on("mouseenter", function(){
//         $(".box").css("border-rarius", "24px");
//     });

//     $(".box").on("mouseleave", function(){
//         $(".box").css("border-rarius", "8px");
//     })
// });
