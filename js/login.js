
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