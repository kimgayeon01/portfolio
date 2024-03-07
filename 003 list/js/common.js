$(function(){

    // list1 tab--------------------------------------------------------------------------
    function tab(){
        let tabNav = $('.list-type1 a');

        tabNav.on('click', tabNavActive);

        function tabNavActive(){
            let tabIndex = $(this).parent().index(); 
            //사용자가 클릭한 링크$(this)의 부모요소.parent()가 몇번째 형제.index()인지 알려줌

            console.log(tabIndex);

            tabNav.removeClass('active'); //모든 탭에 있는 클래스를 제거한다
            $(this).addClass('active'); //사용자가 클릭한 링크에 클래스 추가

            // 방법 1----------------------------------------------------------------------
            // $(this).parents('.tab').children('.tab-content').removeClass('active');
            // $(this).parents('.tab').children('.tab-content').eq(tabIndex).addClass('active');

            // 방법 2 -------------------------------------------------------------------------
            $(this).parents('.tab').children('.tab-content').removeClass('active').eq(tabIndex).addClass('active');

            // $(this) 사용자가 클릭한 링크
            // .parents('.tab') 조상부모 중에 .tab
            // .children('.tab-content') 자식 중에 .tab-content
            // .removeClass('active'); active 클래스만 제거
            // .eq(tabIndex) 몇번 째 있는지 확인 /  tabIndex 변수명 -> eq는 nth와 같은역할
            // .addClass('active'); active 클래스 추가
        }
    }
    tab();

    // list2----------------------------------------------
    function tab2(){
        let tabNav = $('.list-type2 a');

        tabNav.on('click', tabNavActive);

        function tabNavActive(){
            let tabIndex = $(this).parent().index(); 

            console.log(tabIndex);

            tabNav.removeClass('active');
            $(this).addClass('active');

            $(this).parents('.tab2').children('.tab2-content').removeClass('active').eq(tabIndex).addClass('active');
        }
    }
    tab2();

    // list13 FAQ-------------------------------------
    function faq(){
        const btn = $('.list-type13_1 .btn-question');

        btn.on('click', otherHide);
        btn.on('click', arrowToggle);
        btn.on('click', answerToggle);
        
        //버튼을 클릭하면 화살표가 회전한다.
        //버튼을 클릭하면 화살표가 제자리로 온다.
        function arrowToggle(){
            $(this).toggleClass('active');
        }
        
        //버튼을 클릭하면 답변이 열린다.
        //버튼을 클릭하면 답변이 닫힌다.
        function answerToggle(){
            $(this).next().stop().slideToggle();   
        }
        
        //버튼을 클릭하면 열려있던 다른 답변이 닫힌다.
        function otherHide(){
            // btn.removeClass('active');
            // btn.next().slideUp();
            $(this).parent().siblings().children('button').removeClass('active');
            $(this).parent().siblings().children('div').stop().slideUp();
        }
    }
    faq();



})