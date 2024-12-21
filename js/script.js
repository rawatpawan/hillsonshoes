$(document).ready(function() {


    // THiS JS IS USED OF SHOW AND HIDE MOBILE MENU

    $('#trigger-overlay').on('click', function(){
        $(".overlay").addClass('open');	
    });
    $('.overlay-close').on('click', function(){
        $(".overlay").removeClass('open');	
    });



    $('.productcarousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        "<img src='images/icons/leftarrow.png' alt='Left Arrow'>",
        "<img src='images/icons/rightarrow.png' alt='Right Arrow'>"
      ],
      autoplay:true,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 4,
        },
      },
    });


    $('.testimonialcarousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
          "<img src='images/icons/leftarrow.png' alt='Left Arrow'>",
          "<img src='images/icons/rightarrow.png' alt='Right Arrow'>"
        ],
        // autoplay:true,
        autoplayTimeout: 2500,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 1,
          },
          1024: {
            items: 2,
          },
        },
      });

});