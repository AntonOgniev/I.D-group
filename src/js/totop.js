const vh = window.innerHeight; //получаю высоту области просмортра
$(function () {
   $(window).scroll(function () {  // scroll запускает функцию при прокрутке на странице
    if ($(this).scrollTop() > vh) { // при прокрутке вниз более высоты видимости fadeIn - плавное появление кнопки
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, window); // по клику возвращает в позицию 0 для scrollTop
  });
});