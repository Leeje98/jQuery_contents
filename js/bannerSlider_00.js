$(function(){

    let eleWidth = $('.frame>ul>li').innerWidth() //padding을 포함한 width
    //  ele : 엘리먼트 : 요소 --- eleWidth:요소가로넓이
    let state = false   // li동작 상태를 관리하는 변수
    let playOn = false    // bannerslider의 동작 상태를 관리하는 변수
    //true 일때 동작에 변화가 있고 false일때 변화가 없는것.
      // 우리 눈에 보이는 것을 브라우저는 모르기때문에 제어를 위해 만든 변수일뿐이다
      // 마지막에 play를 걸어놓고 나왔기 때문에 기본선언을 false로 줬지만 기본상태는 true로 된것이다
    let direction = 'left'
    let bannerAuto //setInterval함수 제어를 위한 변수

    function play(){
        if(!playOn){ // true 일때 
            playOn=true
                          //ㄱsetInterval() : 무한반복 함수 
            bannerAuto = setInterval(function(){
                if(direction == 'right'){
                    $('.left').click() //left click_event 호출 -- //right click_event 호출
                } else {
                    $('.right').click() //right click_event 호출 -- //left click_event 호출
                }
            }, 2000) 
        }

        if(playOn) {
            $('.frame ul li a').mouseover(function(){
                //play 상태에서만 마우스오버 이벤트를 일으킬수 있다.
                stop()
            })
        }

    } //play()

    function stop() {
        if(playOn) {
            playOn = false
            clearInterval(bannerAuto) //setInterval함수를 멈춤
        }
        $(".frame>ul>li>a").mouseout(function(){ 
            play()
        })

        $(".frame>ul>li>a").click(function(){
            location.href
        })

    } //stop()



    

    function right() {
        stop()
        direction = 'left'
        $('.frame>ul').animate({left:eleWidth*-1},  500,
                     //animate에 사용할 속성은 기호나 단위를 사용할 수 없음 = -eleWidth
        function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'))
             //첫번째 li를 마지막 li뒤에 삽입
            $(this).css('left',0)
             //animate를 통해 밖으로 나간 ul를 원래 위치로 되돌림
            state = false
            play()
        })

    } //left

    function left() {
        stop()
        direction = 'right'
        $('.frame>ul>li:last').insertBefore($('.frame>ul>li:first'))
        //마지막 li를 첫번째 li앞에 삽입
        $('.frame>ul').css('left',eleWidth*-1); // ul을 마지막 li위치로 이동
        $('.frame>ul').animate({left:0},500, // 오른쪽으로 슬라이딩
        function(){
            state = false
                play()
            })
    } // right()


    $('.left').click(function () {
        if (!state) {
            state = true
            left()
        }
    }) //left click_event



    $('.right').click(function () {
        if (!state) {
            state = true;
            right();
        }
    }) //right click_event

    $('.stop').click(function () {
        stop()
    })

    $('.play').click(function () {
        play()
    })

    $('.play').click()  // 강제호출, 들어가자마자 실행되도록

    })

    



