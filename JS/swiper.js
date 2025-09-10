const swiper = new Swiper('.choose-us-feature', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    reverseDirection: true // Hii ndio inafanya right-to-left
    },
    spaceBetween: 20,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 1, //default slides per view
    grid: {
      rows: 1,
      fill: 'row',
    },
    breakpoints: {
      //screen width >= 320px and < 550px
      320: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
    },
});


const swiper2 = new Swiper('.about-our-company', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    reverseDirection: true // Hii ndio inafanya right-to-left
    },
    spaceBetween: 20,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 1, //default slides per view
    grid: {
        rows: 1,
        fill: 'row',
    },
    breakpoints: {
      //screen width >= 320px and < 550px
      320: {
       slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
});

const swiper3 = new Swiper('.ourTeam', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true // Hii ndio inafanya right-to-left
    },
    spaceBetween: 30,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 1, //default slides per view
    grid: {
        rows: 1,
        fill: 'row',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
});


const swiper4 = new Swiper('.services-project', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    reverseDirection: true // Hii ndio inafanya right-to-left
    },
    spaceBetween: 50,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 1, //default slides per view
    grid: {
        rows: 1,
        fill: 'row',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
      },
    },
});


/*const swiper5 = new Swiper('.chooselaki2', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    reverseDirection: true // Hii ndio inafanya right-to-left
    },
    spaceBetween: 20,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 1, //default slides per view
    grid: {
        rows: 1,
        fill: 'row',
    },
    breakpoints: {
      //screen width >= 320px and < 550px
      320: {
       slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
});
*/