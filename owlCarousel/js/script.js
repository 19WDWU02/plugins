$(document).ready(function(){


  $("#owl1").owlCarousel({
      items: 2,
      loop: true,
      center: true,
      autoplay: true,
      nav: true,
      dots: true,
      stagePadding: 0,
      margin: 100,
      lazyLoad: true
  });

  $("#owl2").owlCarousel({
      items: 4,
      loop: true,
      center: false,
      autoplay: true
  });

  $("#owl3").owlCarousel({
      items: 1,
      loop: true,
      center: true,
      autoplay: true
  });

  $("#owl4").owlCarousel({
      items: 5,
      loop: true,
      center: true,
      autoplay: true
  });



});
