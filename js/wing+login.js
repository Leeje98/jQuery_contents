$(function () {
    let left_open = $('.inner_left_wing>.open')
    let left_closs = $('.inner_left_wing>.closs')
    
    $('.inner_left_wing>.open').click(function () {

        $('.left_wing').stop().animate({width:300}, 500)
        left_open.fadeOut(150)
        left_closs.fadeIn(150)
    })

    $('.inner_left_wing>.closs').click(function () {
        $('.left_wing').stop().animate({width:0}, 500)
        left_open.fadeIn(150)
        left_closs.fadeOut(150)
    })
    
}) //01


// $(function () {
//     let right_open = $('.inner_right_wing>.open')
//     let right_closs = $('.inner_right_wing>.closs')
    
//     $('.inner_right_wing>.open').click(function () {

//         $('.right_wing').stop().animate({right:0}, 500)
//         right_open.fadeOut(150)
//         right_closs.fadeIn(150)
//     })

//     $('.inner_right_wing>.closs').click(function () {
//         $('.right_wing').stop().animate({width:0}, 500)
//         right_open.fadeIn(150)
//         right_closs.fadeOut(150)
//     })
    
// }) //02


$(function () {
    $('.inner_right_wing>.open').click(function () {
        $('.right_wing').stop().animate({right:0}, 500)
        $('.inner_right_wing>.closs').fadeIn(150)
        $('.inner_right_wing>.open').fadeOut(150)
    })

    $('.inner_right_wing>.closs').click(function () {
        $('.right_wing').stop().animate({right:-300}, 500)
        $('.inner_right_wing>.open').fadeIn(150)
        $('.inner_right_wing>.closs').fadeOut(150)
    })

    
}) //02



$(function () {
    $(".login_box").click(function () {
        $(".filter").fadeIn(150)
        $(".login_window").delay(200).fadeIn(150)
    })

    $("button").click(function () {
        $(".filter").delay(150).fadeOut(250)
        $(".login_window").fadeOut(150)
    })
    
})