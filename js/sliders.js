var isMobile = false;
$(document).ready(function () {
   if ($('body').width() <= 768) {
      isMobile = true;
   }
   if (isMobile) {
      $('.carousel-two').owlCarousel({
         loop: true,
         items: 1,
         autoplay: false,
         autoplayTimeout: 5000,
      });
   }
   if (!isMobile) {

   }
   $('.carousel-one').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,

   });

   $('.carousel-two').owlCarousel({
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,

   });

   $('.carousel-three').owlCarousel({
      loop: true,
      items: 2,
      margin: 25,
      nav: true,
      dots: false,
      slideBy: 2,
      navText: ["<img src=\"images/xdzfdsa.png\">", "<img src=\"images/next.png\">"],
      autoplay: false,
      autoplayTimeout: 5000,
      responsive: {
         0: {
            items: 1
         },
         768: {
            items: 2
         },
         992: {
            items: 3
         }
      }
   });
});