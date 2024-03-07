$(function(){

    let btnAlram = $('.alram');

    btnAlram.on('click', toggleAlram);

    function toggleAlram(){
        let popup = $('.alram-popup');
        popup.toggle();
    }

    // 팝업 버튼을 누르면 팝업이 열린다.
    // 팝업 버튼을 누르면 딤드가 열린다.
    $('.btn-open-popup').on('click', openPopup);
    function openPopup(){
        $('.popup').show();
        $('.dimmed').show();
    }

    $('.btn-submit').on('click', openSubmit);
    function openSubmit(){
        $('.submit-popup').show();
        $('.dimmed').show();
    }

    // 팝업 닫기버튼을 누르면 팝업이 닫힌다.
    // 팝업 닫기버튼을 누르면 딤드가 닫힌다.
    $('.btn-close-popup').on('click', closePopup);
    function closePopup(){
        $('.popup').hide();
        $('.dimmed').hide();
    }

    $('.btn-close-submit').on('click', closeSubmit);
    function closeSubmit(){
        $('.submit-popup').hide();
        $('.dimmed').hide();
    }

    $('.btn-close-check').on('click', closeSubmit);
    function closeSubmit(){
        $('.submit-popup').hide();
        $('.dimmed').hide();
    }


    function addList(){
        const btn = $('.btn-more');
        const list = $('.lounge-list');

        btn.on('click', moreList);

        function moreList(){
            let listCount = list.children().length;

            console.log(listCount);
            if(listCount < 20){
                list.append(` <li>
                <a href="">
                    <div class="thumb">
                        <img src="images/img_thumb.png" alt="">
                    </div>
                    <div class="badge-group">
                        <span class="badge orange">경영</span>
                        <span class="badge white">100</span>
                    </div>
                    <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
                    <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
                    <ul class="information">
                        <li>
                            <pre>형         태</pre> : 온라인/오프라인/온+오프라인
                        </li>
                        <li>
                            <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
                        </li>
                    </ul>
                    <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
                </a>
            </li>`);
                list.append(` <li>
                <a href="">
                    <div class="thumb">
                        <img src="images/img_thumb.png" alt="">
                    </div>
                    <div class="badge-group">
                        <span class="badge orange">경영</span>
                        <span class="badge white">100</span>
                    </div>
                    <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
                    <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
                    <ul class="information">
                        <li>
                            <pre>형         태</pre> : 온라인/오프라인/온+오프라인
                        </li>
                        <li>
                            <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
                        </li>
                    </ul>
                    <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
                </a>
            </li>`);
                list.append(` <li>
                <a href="">
                    <div class="thumb">
                        <img src="images/img_thumb.png" alt="">
                    </div>
                    <div class="badge-group">
                        <span class="badge orange">경영</span>
                        <span class="badge white">100</span>
                    </div>
                    <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
                    <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
                    <ul class="information">
                        <li>
                            <pre>형         태</pre> : 온라인/오프라인/온+오프라인
                        </li>
                        <li>
                            <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
                        </li>
                    </ul>
                    <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
                </a>
            </li>`);
                list.append(` <li>
                <a href="">
                    <div class="thumb">
                        <img src="images/img_thumb.png" alt="">
                    </div>
                    <div class="badge-group">
                        <span class="badge orange">경영</span>
                        <span class="badge white">100</span>
                    </div>
                    <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
                    <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
                    <ul class="information">
                        <li>
                            <pre>형         태</pre> : 온라인/오프라인/온+오프라인
                        </li>
                        <li>
                            <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
                        </li>
                    </ul>
                    <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
                </a>
            </li>`);
            }else{
                alert('더이상 게시물이 없습니다.');
            }
        }
    }
    addList();


    function fixed(){
        const header = $('.header');

        $(window).on('scroll', headerFixed);

        function headerFixed(){
            let scroll = $(this).scrollTop();

            console.log(scroll);

            if( scroll > 200){
                header.addClass('fixed');
                if( scroll > 900){
                    header.addClass('bg');
                    $('.idp').addClass('opacity');
                    $('.learning-lounge').addClass('opacity');
                }else{
                    header.removeClass('bg');
                    // $('.idp').removeClass('opacity');
                    // $('.learning-lounge').removeClass('opacity');
                }
            }else{
                header.removeClass('fixed');
            }
        }
    }
    fixed();
    


});