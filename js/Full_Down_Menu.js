$(function () {


    $('.lnb01').mouseover(function () {
        $(".list01").css("height", "500px");
    });

    $('.lnb01').mouseleave(function () {
        $(".list01").css("height", "0px");
    });


}) // 01


// $(function(){

//     $(function () {
//         $('.lnb01').mouseover(function () {
//             $(".lnb01").css("height", "600px");
//         });

//         $('.lnb01').mouseleave(function () {
//             $(".lnb01").css("height", "52px");
//         });
        
//     });


// })  // 01



// $(function(){

//     let list = $('.lnb01 .list01')
//     let lnb = $('lnb01')

//     lnb.mouseenter(function(){
//         lnb.stop().animate({
//             height : 450
//         }, 200)
//     })

//     lnb.mouseleave(function(){
//         lnb.stop().animate({
//             height:50
//         }, 200)
//     })

//     lnb.mouseleave(function(){
//         lnb.stop().animate({
//             height : 50
//         }, 200)
//     })


// }) // 01


$(function(){
    $('.btn02_1').click(function(){
        $('.list02').css('height','400px')

        $('.btn02_1').removeClass('on')
        $('.btn02_2').addClass('on')
    })


    $('.btn02_2').click(function(){
        $('.list02').css('height','0px')

        $('.btn02_2').removeClass('on')
        $('.btn02_1').addClass('on')
    })


})  // 02