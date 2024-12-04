//= include ../../../node_modules/jquery/dist/jquery.min.js
$('.nav__button').click(function () {
  $('.nav__list').css({
    transform: 'translateX(0)'
  });
  $('.box-header').css({
    transform: 'translateX(0)'
  });
});
$('.box-header').click(function () {
  $('.nav__list').css({
    transform: 'translateX(-100%)'
  });
  $('.box-header').css({
    transform: 'translateX(-200%)'
  });
});