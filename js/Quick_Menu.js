// $(function(){

//     let btn = $('.nav li')
//     let section = $('.contents section')
//     // 전역변수 : 프로그램이 켜지고 프로그램이 꺼질때까지 사용되는변수

//     $('.nav').css('top', $(window).height()/2-$('.nav').height()/2)
//     // 초기 좌표

//     $(window).scroll(function(){

//         let point = $(this).scrollTop() + $(this).height()/2-$('.nav').height()/2
//         $('.nav').stop().animate({top:point}, 500)

//         let sectionPoint = $(window).scrollTop()
//         section.each(function(){
//             //each : 이벤트를 반복적으로 실행할때 (반복메서드) 
//             // ㄴ--for와 같은 일을 하지만 횟수 제한이 없다 
//             // ㄴ--다시 이벤트를 실행할 수 있게 동작했던 이벤트 기록을 지워주는 역할

//             let target = $(this)
//             let i = target.index()

//             if(target.offset().top <= sectionPoint) {
//                 btn.removeClass('on');
//                 btn.eq(i).addClass('on');
//             }
//         }) // each_function

//     }) //window_scroll_event



//     btn.click(function(){

//         let target = $(this)
//         let i = target.index()

//         let targetSection = section.eq(i)
//         let point = targetSection.offset().top

//         $('html, body').stop().animate({scrollTop:point}, 500)

//     }) // .nav li_click event






// }) //jQuery_function








$(function(){

    let btn = $('.nav li')
    let section = $('.contents section')

    $(window).scroll(function(){

        let point = $(this).scrollTop() + $(this).height()/2-$('.nav').height()/2

        $('.nav').stop().animate({top:point}, 500)


        let sectionPoint = $(window).scrollTop()
        section.each(function(){

            let target = $(this)
            let i = target.index()

            if(target.offset().top <= sectionPoint) {

                btn.removeClass('on')
                btn.eq(i).addClass('on')
            }

        })

    })

    btn.click(function(){

        let target = $(this)
        let i = target.index()

        let targetSection = section.eq(i)
        let point = targetSection.offset().top

        $('html, body').stop().animate({scrollTop:point}, 500)



    })







})

































