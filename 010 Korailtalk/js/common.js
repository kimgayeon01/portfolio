$(function () {
    AOS.init();
    
    function addList() {
        const btn = $('.btn-more');
        const list = $('.gallery-list-type3');

        btn.on('click', moreList);

        function moreList() {
            let listCount = list.children().length;

            // console.log(listCount);
            if (listCount < 15) {
                list.append(`
                    <li>
                        <a href="" class="gallery-list-type3__content">
                            <div class="gallery-list-type3__thumb">
                                <img src="images/img_thumb.png" alt="">
                            </div>
                            <p>(2023 여행가는 달) [대원]KTX 타고 떠나는 DMZ 연천&철원 기차여행(1박2일)</p>
                            <b>0원~</b>
                        </a>
                        <div class="calendar"><a href=""><span class="hide">캘린더</span></a></div>
                    </li>
                `);
                list.append(`
                <li>
                        <a href="" class="gallery-list-type3__content">
                            <div class="gallery-list-type3__thumb">
                                <img src="images/img_thumb.png" alt="">
                            </div>
                            <p>(2023 여행가는 달) [대원]KTX 타고 떠나는 DMZ 연천&철원 기차여행(1박2일)</p>
                            <b>0원~</b>
                        </a>
                        <div class="calendar"><a href=""><span class="hide">캘린더</span></a></div>
                    </li>
                `);
            }else{
                alert('더이상 게시물이 없습니다.');
            }
        }
    }
    addList();


    function select(){
        const selectBtn = $('.reservation__content button');
    
        selectBtn.on('click', listToggle);
        selectBtn.on('click', arrowRotate);
    
        function listToggle(){
            $(this).next().toggle();
        }
        function arrowRotate(){
            $(this).toggleClass('active');
        }
    }
    select();

    
    function ticketing(){
        const listBtn = $('.list-type3__btn');

        listBtn.on('click', listToggle);
        listBtn.on('click', arrowRotate);

        function listToggle(){
            $(this).next().toggle();
        }
        function arrowRotate(){
            $(this).toggleClass('active');
        }
    }
    ticketing();


    function tab(){
        let tabNav = $('.header2 button');
        const content = $('.tab-content');

        tabNav.on('click', tabNavActive);

        function tabNavActive(){
            let tabIndex = $(this).index();

            // console.log(tabIndex);

            tabNav.removeClass('active');
            $(this).addClass('active');

            content.removeClass('active');

            // $(this).parents('').children('.tab-content').removeClass('active').eq(tabIndex).addClass('active');
        }
    }
    tab();

    function tab2(){
        let tabNav = $('.fix-top2 a');

        tabNav.on('click', tabNavActive);

        function tabNavActive(){
            let tabIndex = $(this).parent().index();

            // console.log(tabIndex);

            tabNav.removeClass('active');
            $(this).addClass('active');
        }
    }
    tab2();

    function fixed(){
        const header = $('.header');

        $(window).on('scroll', headerFixed);

        function headerFixed(){
            let scroll = $(this).scrollTop();

            // console.log(scroll);

            if( scroll > 55){
                header.addClass('fixed');

            }else{
                header.removeClass('fixed');
            }
        }
    }
    fixed();

    function indexTab(){
        let tab = $('.tab-type1 button');

        tab.on('click', tabActive);

        function tabActive(){
            let tabIndex = $(this).parent().index();
    
            // console.log(tabIndex);
    
            tab.removeClass('active');
            $(this).addClass('active');

            $(this).parents('.tab-type1__wrap').children('.tab-type1__content').removeClass('active').eq(tabIndex).addClass('active');
        }
    }
    indexTab();

    function menu(){
        const btn = $('.btn-megamenu');

        btn.on('click', menuToggle);
        btn.on('click', btnToggle);

        function btnToggle(){
            $(this).toggleClass('active');
        }
        function menuToggle(){
            $(this).next().stop().slideToggle();
        }

    }
    menu();

    $('.btn-menu').on('click', openMenu);
    function openMenu(){
        $('.megamenu__wrap').show();
        $('body').addClass('body-overflow');
    }


    function popUp(){
        let btnClose = $('.notice .btn-blue');
    
        btnClose.on('click', closePopup);
        
        function closePopup(){
            $('.notice__wrap').hide();
        }
    }
    popUp();

    // function slideBtn(){
    //     const btnPrev = $('.btn-prev-white');
    //     const btnNext = $('.btn-next-white');

    //     btnPrev.on('click', hideBtn);
    //     btnNext.on('click', hideBtn);
    //     btnPrev.on('click', showBtn);
    //     btnNext.on('click', showBtn);

    //     function showBtn(){
    //         btnPrev.show();
    //     }

    // }
    // slideBtn();

    const swiper = new Swiper('.slide-content1', {
        navigation: {
            nextEl: ".btn-next-white.btn-slide1",
            prevEl: ".btn-prev-white.btn-slide1",
          },
      });
      
      const swiper2 = new Swiper('.slide-content2', {
        navigation: {
            nextEl: ".btn-next-white.btn-slide2",
            prevEl: ".btn-prev-white.btn-slide2",
          },
      });
      
      const swiper3 = new Swiper('.slide-content3', {
        navigation: {
            nextEl: ".btn-next-white.btn-slide3",
            prevEl: ".btn-prev-white.btn-slide3",
          },
      });

    const swiper4 = new Swiper('.slide', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
      });


    // // const minusBtn = $('.btn-minus');
    // const plusBtn = $('.btn-plus');  

    // // minusBtn.on('click', changeText);
    // plusBtn.on('click', changeText);

    // function changeText(){
    //     let result = $('.personnel b').text('2');
    // }


    const swiper5 = new Swiper('.slide-time', {
        slidesPerView: 8,
    });

    const swiper6 = new Swiper('.slide-date', {
        slidesPerView: 7.5,
    });

})