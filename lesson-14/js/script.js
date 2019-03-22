$(document).ready(function () {
  $('.main_btn').on('click', open);
  $('a[href="#sheldure"]').on('click', open);
  $('.close').on('click', close);
  // function open() {
  //   $('.overlay').fadeIn(1000);
  //   $('.modal').slideDown(1000);
  // }

  
  // function close() {
  //   $('.overlay').fadeOut(1000);
  //   $('.modal').slideUp(1000);
  // };
  function open() {
    $('.overlay').css({ 
      "left": "50%",
      "top":"50%",
      "transform": "translate(-50%, -50%)"
    });
    $('.overlay').show().css({'border-radius': "50%", "opacity": "0", "height": "400px", "width": "400px"}).animate({
      "border-radius": "0",
      "opacity": "1",
      "height": "100%",
      "width": "100%"
    }, 1000);

    $('.modal').show().css('margin-top', "-500px").animate({
      "margin-top": "5rem"
    }, 1000);
  };

  
  function close() {
    $.when($('.modal').css('margin-top', "5rem").animate({
        "margin-top": "-500px"
      }, 1000),
      $('.overlay').css('opacity', 1).animate({
        "opacity": "0"
      }, 1000))
      .then(function(){
        $('.overlay').hide();
        $('.modal').hide();
      });
  };
});