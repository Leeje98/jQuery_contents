$(function(){

    $(window).scroll(function(){
        // ㄴ이벤트를 일으키는 대상, 이벤트 종류부터 생각할것

        if($(window).scrollTop() >= 200) {
            $('nav').addClass('fixed')
        } else {
            $('nav').removeClass('fixed')
        }  //  window가 200px 이상일때 fixed라는 클래스명을 부여하고 그렇지 않으면 부여했던 클래스명을 지워라


        if($(this).scrollTop() >= 200) {
            $('.top').fadeIn('fast')
        } else {
            $('.top').fadeOut('fast')
        }



    }) // window_scroll_event

    
    $('.top').click(function(e){
        e.preventDefault()  // a의 고유기능 삭제

        // $('html, body').stop().animate({
        //     scrollTop : 0
        // }, 1000)
        
        //  --- 플러그인 없이 사용하는 방법
        // ('html, body') -- 화면전체
        // stop() 전에 진행중인 애니메이션이 있다면 그것들을 중단하고 | 애니메이트 앞에 무조건 붙인다
        // animate({scrollTop : 0}, 1000)  --- scrollTop이 0이 될때까지(맨위) 1초 동안 애니메이션해라

    // 플러그인 사용ㄱㄱ
    //    $(window).scrollTo({top:0, left:0}, 500)  // 좌표를 사용하는 방법
    $(window).scrollTo(this.hash || 0, 1000)        // 해시태그를 사용하는 방법
       //  ㄴ--- 윈도우를 객체의 해시태그 또는 좌표 0으로 1초동안 가게 하라


    }) // topbtn_click_event




}) // jQuery_function