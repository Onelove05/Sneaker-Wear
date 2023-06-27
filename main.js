$(document).ready(function(){
    $('.slick').slick({
      Infinity:true,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      dots:true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  });
  $(document).ready(function(){
    $('.section-body').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        autoplay: true,
        autoplaySpeed: 5000,
    });
  });

  $('.view-full-size').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-photo-thumbs'
  });
  $('.product-photo-thumbs').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.view-full-size',
    dots: true,
    focusOnSelect: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    autoplay:false,
    Infinity:false,
  });