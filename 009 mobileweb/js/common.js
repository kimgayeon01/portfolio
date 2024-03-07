$(function(){

    $('.btn-menu-blue').on('click', openMenu);
    function openMenu(){
        $('.megamenu__wrap').show();
        $('body').addClass('body-overflow');
    }
    $('.btn-menu').on('click', openMenu);
    function openMenu(){
        $('.megamenu__wrap').show();
        $('body').addClass('body-overflow');
    }


    $('.btn-cancle').on('click', closeMenu);
    function closeMenu(){
        $('.megamenu__wrap').hide();
        $('body').removeClass('body-overflow');
    }


    let btnReply = $('.btn-reply');

    btnReply.on('click', toggleReply);

    function toggleReply(){
        let comment = $('.depth2');
        comment.toggle();
    }


    function tab(){
        let tabNav = $('.tab-type1 button');

        tabNav.on('click', tabNavActive);

        function tabNavActive(){
            let tabIndex = $(this).parent().index();

            console.log(tabIndex);

            tabNav.removeClass('active');
            $(this).addClass('active'); 

            $(this).parents('.tab').children('.tab-content').removeClass('active').eq(tabIndex).addClass('active');
        }
    }
    tab();

    function tab2(){
        let tabNav = $('.tab-type2 button');

        tabNav.on('click', tabNavActive)

        function tabNavActive(){
            let tabIndex = $(this).parent().index();

            tabNav.removeClass('active');
            $(this).addClass('active');

            $(this).parents('.tab2').children('.tab-content3').removeClass('active').eq(tabIndex).addClass('active');
        }
    }
    tab2();

    function tab3(){
        let indexTab = $('.tab-type3 button');

        indexTab.on('click', indexTabActive);

        function indexTabActive(){
            let tabIndex = $(this).parents().index();

            console.log(tabIndex);

            indexTab.removeClass('active');
            $(this).addClass('active');

            $(this).parents('.index-tab').children('.index-tab__content').removeClass('active').eq(tabIndex).addClass('active');

        }
    }
    tab3();

    function inputTab(){
        const radioTab = $('.sort input'); //input 선택
        const content = $('.tab-content2'); //탭내용

        radioTab.on('click', radioTabActive); //input클릭하면 radioTabActive 함수실행

        function radioTabActive(){ //radioTabActive 함수정의
            let index = $(this).index(); // 사용자가 클릭한 라디오 버튼이 몇번째 자식인지 변수 index에 저장한다
            let result = index / 2; // 변수 index의 결과값에 나누기 2를 한다

            console.log(result); // console 패널에 result 결과값을 확인한다

          content.removeClass('active'); // 탭내용에 클래스 active를 제거한다
          content.eq(result).addClass('active'); // 탭내용의 result 변수의 해당하는 n번째 자식에 클래스 active를 부여한다
        }
    }
    inputTab();


    const swiper = new Swiper('.index-visual-slide', {
        navigation: {
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
        },
    });

})