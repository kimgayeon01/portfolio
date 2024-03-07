$(function () {
    AOS.init();

    function footerGnb() {
        const footerBtn = $('.footer__gnb__list button')

        footerBtn.on('click', listToggle);

        function listToggle() {
            $(this).next().toggle();
        }
    }
    footerGnb();

    function tab() {
        const btn = $('.list-type3 li .btn-tab');

        btn.on('click', otherHide);
        btn.on('click', tabToggle);

        function tabToggle() {
            $(this).next().stop().slideToggle();
        }

        function otherHide() {
            $(this).parent().siblings().children('button').removeClass('active-tab');
            $(this).parent().siblings().children('ul').stop().slideUp();
        }
    }
    tab();


    function gnb() {
        const gnb = $('.header__gnb');
        const gnbList = $('.header__gnb > li');
        const bg = $('.header__box');
        const gnbLast = $('.header__gnb li:last-child li:last-child a');
        const gnbFirst = $('.header__gnb > li:first-child > a');

        gnb.on('mouseleave', hideNav);
        gnbList.on('mouseenter keyup', showNav);
        gnbLast.on('keydown', hideNavLast);
        gnbFirst.on('keydown', hideNavFirst);

        function showNav() {
            $(this).find('ul').show();
            $(this).siblings('li').children('ul').hide();
            bg.show();
        }

        function hideNav() {
            gnbList.find('ul').hide();
            bg.hide();
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
    gnb();

    $('.header__responsive__menu').on('click', openMenu);
    function openMenu() {
        $('.megamenu').show();
        $('.dimmed').show();
        $('body').addClass('body-overflow');
    }

    $('.btn-menu-close').on('click', closeMenu);
    function closeMenu() {
        $('.megamenu').hide();
        $('.dimmed').hide();
        $('body').removeClass('body-overflow');
    }

    function menu() {
        const btn = $('.btn-megamenu');

        btn.on('click', menuToggle);
        btn.on('click', otherHide);
        btn.on('click', btnToggle);

        function btnToggle() {
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

    function menuTab() {
        const btn = $('.list-type3-2 button');

        btn.on('click', menuToggle);

        function menuToggle() {
            $(this).next().stop().slideToggle();
        }
    }
    menuTab();

    const swiper = new Swiper('.ad-slide', {
        pagination: {
            el: ".pagination",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    $('.btn-pause').click(function () {
        swiper.autoplay.stop();
        $('.btn-pause').hide();
        $('.btn-play').show();
    });
    $('.btn-play').click(function () {
        swiper.autoplay.start();
        $('.btn-play').hide();
        $('.btn-pause').show();
    });


    const swiper2 = new Swiper('.main__information__bottom', {
        navigation: {
            nextEl: ".btn-main-next",
            prevEl: ".btn-main-prev",
        },
    });

})