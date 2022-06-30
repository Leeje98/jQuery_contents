$(function(){

    $('.lnb a').click(function(e){
        e.preventDefault()  //a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우(a의 고유기능 삭제)

        $(window).scrollTo(this.hash || 0, 1000)
    })

})