
// function togglerNavbar () {
   
//     const navbarToggler = document.getElementById("nigga")

//     var hasTestClass = navbarToggler.classList.contains('test')

//     if (hasTestClass) {
//         navbarToggler.classList.remove('test');
//     } else {
//         navbarToggler.classList.add('test');
//     }
// }

mobileOnlySlider("#introduction-slider", true, false, 991);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
}


// slider build 

$('.slider-template').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 676,
      settings: {
        slidesToShow: 1,
        dots: false,
        arrows: true,
      }
    },
  ]
});


  

