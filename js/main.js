$(function () {

  //fullpage-----
  $('#fullpage').fullpage({
    menu: '#myMenu',
    anchors: ['main', 'about', 'portfolio', 'contact'],

    navigation: true,
    navigationPosition: 'right',
  });

  // index portfolio tab-----
  function tab() {
    let tabNav = $('.portfolio-gnb button');

    tabNav.on('click', tabNavActive);

    function tabNavActive() {
      let tabIndex = $(this).parent().index();

      tabNav.removeClass('active');
      $(this).addClass('active');

      $(this).parents('.tab').children('.portfolio-list').removeClass('active').eq(tabIndex).addClass('active');
    }

  }
  tab();


  //portfolio-list swiper-----
  const swiper1 = new Swiper(".portfolio-list.all", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1281: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
  });
  const swiper2 = new Swiper(".portfolio-list.web", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1281: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
  });
  const swiper3 = new Swiper(".portfolio-list.mobile", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1281: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
  });
  const swiper4 = new Swiper(".portfolio-list.responsive", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1281: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
  });
  const swiper5 = new Swiper(".portfolio-list.more", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1281: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
  });
  const swiper6 = new Swiper(".portfolio-list.practice", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      1281: {
        slidesPerView: 3,
        centeredSlides: true,
      }
    },
  });


  // about me profile detail-----
  let btnMore = $('.btn-more');
  let btnClose = $('.about-profile .btn-close');

  btnMore.on('click', profileDetail)
  function profileDetail() {
    $('.about-profile').show();
    $('.dimmed').show();
    $('.header').hide();
  }

  btnClose.on('click', closeProfile)
  function closeProfile() {
    $('.about-profile').hide();
    $('.dimmed').hide();
    $('.header').show();
  }


  // portfolio detail-----
  let websiteDetail = $('.website .btn-detail');
  let kyungdongDetail = $('.kyungdong .btn-detail');
  let mobileWebDetail = $('.mobile-web .btn-detail');
  let korailDetail = $('.korail .btn-detail');
  let corporateWebDetail = $('.corporate-web .btn-detail');
  let hanjinDetail = $('.hanjin .btn-detail');
  let webAccessibilityDetail = $('.web-accessibility .btn-detail');
  let moreDetail = $('.detailed-page .btn-detail');
  let basicDetail = $('.basic-practice .btn-detail');
  let mobileDetail = $('.mobile-practice .btn-detail');
  let responsiveDetail = $('.responsive-practice .btn-detail');

  let popupClose = $('.btn-close');

  // 팝업창 열기
  websiteDetail.on('click', websitePopup)
  function websitePopup() {
    $('.popup.website').show();
    $('.header').hide();

    $('iframe').css('width', '1430');
    $('.device-footer').css('width', '1430');
    $('.device-header').css('width', '1430');
    $('.device').attr('name', 'btn-web');

  }

  kyungdongDetail.on('click', kyungdongPopup)
  function kyungdongPopup() {
    $('.popup.kyungdong').show();
    $('.header').hide();

    $('iframe').css('width', '1430');
    $('.device-footer').css('width', '1430');
    $('.device-header').css('width', '1430');
    $('.device').attr('name', 'btn-web');
  }

  mobileWebDetail.on('click', mobileWebPopup)
  function mobileWebPopup() {
    $('.popup.mobile-web').show();
    $('.header').hide();

    $('.mobile-web .btn-mobile').click(function () {
      $('.mobile-web iframe').css('width', '430');
      $('.mobile-web .device-footer').css('width', '430');
      $('.mobile-web .device-header').css('width', '430');
      $('.mobile-web .device').attr('name', 'btn-mobile');
    });

    $('.mobile-web .btn-web').click(function () {
      $('.mobile-web iframe').css('width', '1430');
      $('.mobile-web .device-footer').css('width', '1430');
      $('.mobile-web .device-header').css('width', '1430');
      $('.mobile-web .device').attr('name', 'btn-web');
    });

    $('.mobile-web iframe').css('width', '1430');
    $('.mobile-web .device-footer').css('width', '1430');
    $('.mobile-web .device-header').css('width', '1430');
    $('.mobile-web .device').attr('name', 'btn-web');
  }

  korailDetail.on('click', korailPopup)
  function korailPopup() {
    $('.popup.korail').show();
    $('.header').hide();

    $('.korail .btn-mobile').click(function () {
      $('.korail iframe').css('width', '430');
      $('.korail .device-footer').css('width', '430');
      $('.korail .device-header').css('width', '430');
      $('.korail .device').attr('name', 'btn-mobile');
    });

    $('.korail .btn-web').click(function () {
      $('.korail iframe').css('width', '1430');
      $('.korail .device-footer').css('width', '1430');
      $('.korail .device-header').css('width', '1430');
      $('.korail .device').attr('name', 'btn-web');
    });

    $('.korail iframe').css('width', '1430');
    $('.korail .device-footer').css('width', '1430');
    $('.korail .device-header').css('width', '1430');
    $('.korail .device').attr('name', 'btn-web');
  }

  corporateWebDetail.on('click', corporateWebPopup)
  function corporateWebPopup() {
    $('.popup.corporate-web').show();
    $('.header').hide();

    $('.corporate-web .btn-mobile').click(function () {
      $('.corporate-web iframe').css('width', '768');
      $('.corporate-web .device-footer').css('width', '768');
      $('.corporate-web .device-header').css('width', '768');
      $('.corporate-web .device').attr('name', 'btn-tablet');
    });

    $('.corporate-web .btn-web').click(function () {
      $('.corporate-web iframe').css('width', '1430');
      $('.corporate-web .device-footer').css('width', '1430');
      $('.corporate-web .device-header').css('width', '1430');
      $('.corporate-web .device').attr('name', 'btn-web');
    });

    $('.corporate-web iframe').css('width', '1430');
    $('.corporate-web .device-footer').css('width', '1430');
    $('.corporate-web .device-header').css('width', '1430');
    $('.corporate-web .device').attr('name', 'btn-web');
  }

  hanjinDetail.on('click', hanjinPopup)
  function hanjinPopup() {
    $('.popup.hanjin').show();
    $('.header').hide();

    $('.hanjin .btn-tablet').click(function () {
      $('.hanjin iframe').css('width', '800');
      $('.hanjin .device-footer').css('width', '800');
      $('.hanjin .device-header').css('width', '800');
      $('.hanjin .device').attr('name', 'btn-tablet');
    });

    $('.hanjin .btn-laptop').click(function () {
      $('.hanjin iframe').css('width', '980');
      $('.hanjin .device-footer').css('width', '980');
      $('.hanjin .device-header').css('width', '980');
      $('.hanjin .device').attr('name', 'btn-laptop');
    });

    $('.hanjin .btn-web').click(function () {
      $('.hanjin iframe').css('width', '1430');
      $('.hanjin .device-footer').css('width', '1430');
      $('.hanjin .device-header').css('width', '1430');
      $('.hanjin .device').attr('name', 'btn-web');
    });

    $('.hanjin iframe').css('width', '1430');
    $('.hanjin .device-footer').css('width', '1430');
    $('.hanjin .device-header').css('width', '1430');
    $('.hanjin .device').attr('name', 'btn-web');
  }

  webAccessibilityDetail.on('click', webAccessibilityPopup)
  function webAccessibilityPopup() {
    $('.popup.web-accessibility').show();
    $('.header').hide();

    $('iframe').css('width', '1430');
    $('.device-footer').css('width', '1430');
    $('.device-header').css('width', '1430');
    $('.device').attr('name', 'btn-web');
  }

  moreDetail.on('click', morePopup)
  function morePopup() {
    $('.popup.detailed-page').show();
    $('.header').hide();
  }

  mobileDetail.on('click', mobilePopup)
  function mobilePopup() {
    $('.popup.mobile-practice').show();
    $('.header').hide();

    $('iframe').css('width', '430');
    $('.device-footer').css('width', '430');
    $('.device-header').css('width', '430');
    $('.device').attr('name', 'btn-tablet');
  }

  basicDetail.on('click', basicPopup)
  function basicPopup() {
    $('.popup.basic-practice').show();
    $('.header').hide();

    $('iframe').css('width', '1400');
    $('.device-footer').css('width', '1400');
    $('.device-header').css('width', '1400');
    $('.device').attr('name', 'btn-web');
  }

  responsiveDetail.on('click', responsivePopup)
  function responsivePopup() {
    $('.popup.responsive-practice').show();
    $('.header').hide();

    $('.responsive-practice .btn-tablet').click(function () {
      $('.responsive-practice iframe').css('width', '700');
      $('.responsive-practice .device-footer').css('width', '700');
      $('.responsive-practice .device-header').css('width', '700');
      $('.responsive-practice .device').attr('name', 'btn-tablet');
    });

    $('.responsive-practice .btn-web').click(function () {
      $('.responsive-practice iframe').css('width', '1430');
      $('.responsive-practice .device-footer').css('width', '1430');
      $('.responsive-practice .device-header').css('width', '1430');
      $('.responsive-practice .device').attr('name', 'btn-web');
    });

    $('.responsive-practice iframe').css('width', '1430');
    $('.responsive-practice .device-footer').css('width', '1430');
    $('.responsive-practice .device-header').css('width', '1430');
    $('.responsive-practice .device').attr('name', 'btn-web');
  }
  // 팝업창 닫기
  popupClose.on('click', closePopup)
  function closePopup() {
    $('.popup.hanjin').hide();
    $('.popup.korail').hide();
    $('.popup.corporate-web').hide();
    $('.popup.mobile-web').hide();
    $('.popup.kyungdong').hide();
    $('.popup.website').hide();
    $('.popup.web-accessibility').hide();
    $('.popup.detailed-page').hide();
    $('.popup.mobile-practice').hide();
    $('.popup.responsive-practice').hide();
    $('.popup.basic-practice').hide();

    $('.header').show();
  }


  // portfolio-detail__gnb toggle-----
  function menu() {
    const btn = $('.btn-toggle');

    btn.on('click', menuToggle);
    btn.on('click', otherHide);
    btn.on('click', arrowRotate);

    function arrowRotate(){
      $(this).toggleClass('active');
  }

    function menuToggle() {
        $(this).next().stop().slideToggle();
    }

    function otherHide() {
        $(this).parent().siblings().children('button').removeClass('active');
        $(this).parent().siblings().children('ul').stop().slideUp();
    }
}
menu();
});


