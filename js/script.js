

$(document).ready(function(){
    $('.testimonial-wrapper').slick({
        slidesToShow: 1,
  autoplay: true,
  centerMode: true,
  dots:false,
  dotscenterMode: true,
  prevArrow: '.back-left',
  nextArrow: '.back-right',
  centerPadding: "0px"
      });

  });
  


  $(document).ready(function(){
    $('.plan-wrapper').slick({
    slidesToShow: 3,
    // autoplay: true,
    centerMode: true,
    dots:true,
    dotscenterMode: true,
    prevArrow: '.pro-left',
    nextArrow: '.pro-right',
    centerPadding: "0px"
  });
  
  });



  $('.one').counterUp({
    delay: 10,
    time: 1000
});
