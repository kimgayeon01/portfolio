$(function(){
    // 팝업 버튼을 누르면 팝업이 열린다.
    // 팝업 버튼을 누르면 딤드가 열린다.
    $('.login__btn').on('click', loginPopup)
    function loginPopup(){
        $('.dialog').show();
        $('.dimmed').show();
    }


    // 팝업 닫기버튼을 누르면 팝업이 닫힌다.
    // 팝업 닫기버튼을 누르면 딤드가 닫힌다.
    let btnClose = $('.btn-close');
    let btnClose2 = $('.btn-yellow');

    btnClose.on('click', closePopup)
    function closePopup(){
        $('.dialog').hide();
        $('.dimmed').hide();
    }
    btnClose2.on('click', closePopup)
    function closePopup(){
        $('.dialog').hide();
        $('.dimmed').hide();
    }

    function tab(){
        const btn = $('.index-nav__mobile .btn-tab');

        btn.on('click', otherHide);
        btn.on('click', tabToggle);

        function tabToggle(){
            $(this).next().stop().slideToggle();
        }

        function otherHide(){
            $(this).parent().siblings().children('button').removeClass('active-tab');
            $(this).parent().siblings().children('ul').stop().slideUp();
        }
    }
    tab();

    function gnb(){
        const gnb = $('.header__gnb');
        const gnbList = $('.header__gnb >li');
        const bg = $('.header__box');
        const gnbLast = $('.header__gnb:last-child > li:last-child a');
        const gnbFirst = $('.header__gnb > li:first-child > a');

        gnb.on('mouseleave', hideNav);
        gnbList.on('mouseenter keyup', showNav);
        gnbLast.on('keydown', hideNavLast);
        gnbFirst.on('keydown', hideNavFirst);

        function showNav(){
            $(this).find('ul').show();
            $(this).siblings('li').children('ul').hide();
            bg.show();
        }

        function hideNav(){
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

})