$(function(){

    $('section').mousewheel(function(enent, delta){

        if(delta > 0) { // mouse를 위로 스크롤했다면
            let prev = $(this).prev().offset().top
            // (this)현재 (prev)이전의 section(섹션) 탑값
            $('html, body').stop().animate({scrollTop:prev}, 1000)
            // ('html, body')중에 있는 다른 애니메이션들을 모두 멈추고 
            // prev 를 scrollTop(탑0)해라
        } else if (delta < 0) { // 위가 아닌 밑으로 스크롤했다면
            let next = $(this).next().offset().top
            // (this)현재 (next)다음의 section(섹션) 탑값
            $('html, boby').stop().animate({scrollTop:next}, 1000)
            // ('html, body')중에 있는 다른 애니메이션들을 모두 멈추고 
            // next 를 scrollTop(탑0)해라
        }

    })//mousewheel

})