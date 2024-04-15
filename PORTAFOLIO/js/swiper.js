const swiper = new Swiper('.swiper-colores', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "custom",
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });