
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


  

