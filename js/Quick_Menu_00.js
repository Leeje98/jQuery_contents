$(function(){

    let btn = $('.nav li')
    let section = $('.contents section')
    // 전역변수

    $('.nav').css('top', $(window).height()/2-$('.nav').height()/2)
    // 초기좌표

    $(window).scroll(function(){

        let point = $(this).scrollTop() + $(this).height()/2-$('.nav').height()/2
        // --변수 point값 지정 / 여기서 this는 윈도우
        $('.nav').stop().animate({top:point}, 500)
        // .nav가 애니메이션 효과로 위에 변수 point로 지정해 놓은 위치로 움직인다
        // 여기서 애니메이션 시간 0으로 하면 nav가 화면의 움직이는 속도에 맞춰 딜레이 없이 움직인다


        let sectionPoint = $(window).scrollTop()
        section.each(function(){
//               //each : 이벤트를 반복적으로 실행할때 (반복메서드) 
//               // ㄴ--for와 같은 일을 하지만 횟수 제한이 없다 
//               // ㄴ--다시 이벤트를 실행할 수 있게 동작했던 이벤트 기록을 지워주는 역할

            let target = $(this)  // 여기서 this는 .contents section 
            let i = target.index() //  .contents section의 인덱스 번호 추출

            if(target.offset().top <= sectionPoint) { 
            // target의 offset(위치 좌표).top(높이)가 sectionPoint(위에 지정햇던 변수값)와 같거나 작다면,
            // <= 대신 ==(완벽히 일치할때)써도 됨

                btn.removeClass('on')  // 원래(전에)보던 페이지가 어디엿든, 원래 불 들어왔던 곳의 효과를 지우고
                btn.eq(i).addClass('on') // i(변수)값과 일치하는=(이동한 페이지(.contents section))=nav li에 불이 들어오게 해라
            }
        }) // 해당되는 페이지 nav 글자에 빨간색 불 들어오게 하기 / each_function

    }) //window_scroll_event

    btn.click(function(){

        let target = $(this) // 여기서 this는 .contents section 
        let i = target.index() //  .contents section의 인덱스 번호 추출

        let targetSection = section.eq(i)  // 섹션의 인덱스 번호 i로 추출
        let point = targetSection.offset().top // (위에 추출한 값 i)의 offset().top(윗부분 위치 좌표) point로 추출

        $('html, body').stop().animate({scrollTop:point}, 500)
        // ('html, body')중에 있는 다른 애니메이션들을 모두 멈추고 
        // scrollTop값(화면 위(top)의 좌표)을 i의 offset좌표값으로 적용 : 이동한 섹션의 탑값0을 윈도우 탑값0으로 맞춰라

    }) // .nav li를 클릭했을때 윈도우 번쩍(순간이동)이 아닌 스르륵 위치 이동 / .nav li_click event


}) //jQuery_function