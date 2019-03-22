$(document).ready(function () {
  $('.main_btn').on('click', open);
  $('a[href="#sheldure"]').on('click', open);
  $('.close').on('click', close);
  function open() {
    $('.overlay').fadeIn(1000);
    $('.modal').slideDown(1000);
  }

  
  function close() {
    $('.overlay').fadeOut(1000);
    $('.modal').slideUp(1000);
  };
  // function open() {
  //   $('.overlay').show().css('opacity', 0).animate({
  //     opacity: 1
  //   }, 1000);
  //   $('.modal').show().css('margin-top', "-500px").animate({
  //     "margin-top": "5rem"
  //   }, 1000);
  // };

  
  // function close() {
  //   $.when($('.modal').css('margin-top', "5rem").animate({
  //       "margin-top": "-500px"
  //     }, 1000),
  //     $('.overlay').css('opacity', 1).animate({
  //       "opacity": "0"
  //     }, 1000))
  //     .then(function(){
  //       $('.overlay').hide();
  //       $('.modal').hide();
  //     });
  // };
});