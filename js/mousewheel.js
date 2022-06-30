$(function(){

    $('section').mousewheel(function(enent, delta){

        if(delta > 0) { // mouse를 위로 스크롤했다면
            let prev = $(this).prev().offset().top;
            $('html, body').stop().animate({scrollTop:prev}, 1500, 'easeOutBounce')
        } else if (delta < 0) {
            let next = $(this).next().offset().top
            $('html, body').stop().animate({scrollTop:next}, 1500, 'easeOutBounce')
        }                                                            // -- 속도조절로 통통튕겨 보이는 효과 -- 플러그인 사용  

    })  //mousewheel


})