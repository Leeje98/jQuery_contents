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

