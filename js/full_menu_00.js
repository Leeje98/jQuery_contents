// $(function(){

//     // const:상수:절대 변하지 않는 값
//     const lnbLi = $('.lnb>li')
//     const ul = $('.lnb>li>ul')
//     const headerMin = $('.innerHeader').height()
//     const headerMax = ul.innerHeight() + headerMin
//     let state = false  //브라우저는 감지능력이 없어서 상태변수 넣어줘야한다

//     lnbLi.mouseenter(function(){

//         if(!state) {
//             $('.innerHeader').stop().animate({
//                 height : headerMax
//             }, 150,
//             function(){
//                 ul.stop().fadeIn(150)
//             })
//             state = true  //상태변화는 미리 써주지 않는다 상태변화를 쓰고 마지막에 기입
//                           //상태가 일어나는 것 반대:상태가 끝났을때를 펄스로 넣어줘야 하기 때문에 여기선 트루로 넣어준다
//         }
//         $(this).find('ul').addClass('on')

//     }) //mouseenter_event


//     lnbLi.mouseleave(function(){

//         $(this).find('ul').removeClass('on')

//     }) //mouseleave_event

//     $('.header').mouseleave(function(){

//         ul.stop().fadeOut(150, function(){
//             $('.innerHeader').stop().animate({
//                 height : headerMin
//             }, 150)
//         })

//         state = false

//     }) //header_mouseleave


//     $('.lnb li a').focus(function(){

//         $('innerHeader').stop().animate({
//             height : headerMax
//         }, 150)
//         ul.stop().fadeIn(150)

//     }) .blur(function(){
//         $('innerHeader').stop().animate({
//             height : headerMin
//         }, 150)
//         ul.stop().fadeOut(150)
//     }) //focus_event



// })







$(function(){

    const lnbLi = $('.lnb>li')
    const ul = $('.lnb>li>ul')
    const headerMin = $('.innerHeader').height()
    const headerMax = ul.innerHeight() + headerMin
                      // ㄴ-- innerHeight: 내부높이+패딩값
                      // 내려올 창 높이값 + 원래 보이는 lnb 높이값
    let state = false

    lnbLi.mouseenter(function(){

        if(!state) {
            $('.innerHeader').stop().animate({
                height : headerMax
            }, 150,
            function(){
                ul.stop().fadeIn(150)
                          // fadeIn : 안보이던것을 서서히 보이게 하는효과
            })
            state = true
        }
        $(this).find('ul').addClass('on')

    }) //mouseenter_event

    lnbLi.mouseleave(function(){

        $(this).find('ul').removeClass('on')

    }) //mouseleave_event

    $('.header').mouseleave(function(){

        ul.stop().fadeOut(150, function(){
            $('.innerHeader').stop().animate({
                height : headerMin
            }, 150)
        })

        state = false

    }) //header_mouseleave


    $('.inb li a').focus(function(){

        $('innerHeader').stop().animate({
            height : headerMax
        }, 150)
        ul.stop().fadeIn(150)

    }) .blur(function(){
        //ㄴ-- blur : 포커스가 다른 요소로 이동되었을때 이벤트 발생
        $('innerHeader').stop().animate({
            height : headerMin
        }, 150)
        ul.stop().fadeOut(150)
    })


    



})