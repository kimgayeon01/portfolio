$(function () {
    AOS.init();

    function fixed() {
        const header = $('.header');
        const headerBg = $('.header-bg');

        $(window).on('scroll', headerFixed);

        function headerFixed() {
            let scroll = $(this).scrollTop();

            console.log(scroll);

            if (scroll > 150) {
                header.addClass('fixed');
                headerBg.addClass('bg-fixed');
                if (scroll > 460) {
                    header.addClass('bg');
                    headerBg.addClass('color');
                } else {
                    header.removeClass('bg');
                    headerBg.removeClass('color');
                }
            } else {
                header.removeClass('fixed');
                headerBg.removeClass('bg-fixed');
            }
        }
    }
    fixed();

    function gnbAll() {
        const gnb = $('.gnb');
        const bg = $('.header-bg');
        const gnbLast = $('.gnb li:last-child li:last-child a');
        const gnbFirst = $('.gnb > li:first-child > a');

        gnb.on('mouseenter keyup', showNav);
        gnb.on('mouseleave', hideNav);
        gnbLast.on('keydown', hideNavLast);
        gnbFirst.on('keydown', hideNavFirst);

        function showNav() {
            gnb.find('ul').stop().slideDown();
            bg.stop().slideDown();
        }

        function hideNav() {
            gnb.find('ul').stop().slideUp();
            bg.stop().slideUp();
        }

        function hideNavLast(e) {
            if (e.keyCode == 9) {
                hideNav();
            }
        }

        function hideNavFirst(e) {
            if (e.keyCode == 9 && e.shiftKey) {
                hideNav();
            }
        }
    }
    gnbAll();

    function locationTab() {
        const btn = $('.tab .btn-tab');

        btn.on('click', tabToggle);
        btn.on('click', otherHide);
        btn.on('click', arrowToggle);

        function tabToggle() {
            $(this).next().stop().slideToggle();
        }

        function otherHide() {
            $(this).parent().siblings().children('button').removeClass('active');
            $(this).parent().siblings().children('ul').stop().slideUp();
        }

        function arrowToggle() {
            $(this).toggleClass('active');
        }
    }
    locationTab();

    $('.menu').on('click', openMenu);
    function openMenu() {
        $('.megamenu__wrap').show();
        $('.dimmed').show();
    }
    $('.btn-close').on('click', closeMenu);
    function closeMenu() {
        $('.megamenu__wrap').hide();
        $('.dimmed').hide();
    }


    const swiper = new Swiper('.index-visual-slide', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
        autoplay: {
            delay: 13000,
            disableOnInteraction: false,
        },
    });


})