$(function(){

    let list = $('.list_num a')
    let li = $('.banner_box').find('li')
    let i = 0
    let playOn = false
    let rollAuto

    li.hide()
    list.click(function(){

        let index = list.index(this) // let index = $(this).index() : 둘중 아무거나써도 뜻은 같음
        if(list.state) {  // list.state : 현재 상황이 뭔가 눌러져서 실행되고 있는 상황이라면 : 거짓이 아닐경우
            stop()
            imgOff(list.state)    // 전에 상황  -- 회색으로 빠껴져야 함
            imgOn(this)           // 지금 막 바뀐 상황  -- 빨강으로 바껴야 함
            $(li.state).hide()     // hide : 안보여지게
            $(li[index]).show()    // show : 보여지게
            i = index
            play()

            // 반복 동작 상태
        } else{
            imgOn(this)
            $(li[index]).show()
            play()
        }
        list.state=this
        li.state=li[index]
        return false

    }) // click_event

    $(".left").click(function(){ 
        i--;  // left 버튼을 누를때마다 1씩 작은 인덱스 숫자를 가진 화면이 나타나다가
        if(i < 0) { // 인덱스 숫자가 0보다 작아지면
            i = list.length-1  // list.length:리스트전체개수--전체개수의-1:마지막li의 인덱스값
        }
        list[i].click()
    })

    $(".right").click(function(){  
        i++;  // left 버튼을 누를때마다 1씩 큰 인덱스 숫자를 가진 화면이 나타나다가
        if(i > list.length-1){  // 인덱스 숫자가 리스트 전체 개수의 수보다 커지면
          i=0;  // 인덱스 숫자가 0인 페이지:첫 페이지
        } 
        list[i].click()
      })  //.right 를 클릭할때 이벤트 

    $('.stop').click(function(){
        stop()
    })

    $('.play').click(function(){
        play()
    })

    function play() {
        if(!playOn) {
            playOn = true
            rollAuto = setInterval(function(){
                $('.right').click()
            }, 2000)
        }
    }  // play()

    function stop() {
        if(playOn) {
            playOn = false
            clearInterval(rollAuto)
        }
    }  // stop()

    function imgOn(t) {
        $(t).find('img').attr('src', $(t).find('img').attr('src').replace('off','on'))
        // 받은 t(this)의 img태그를 찾아 src부분의       off 로 되어잇는 것을 on으로 변경함
        // $('.frame li img').attr('src', $('.frame li img').replace() )
    }

    function imgOff(t) {
        $(t).find('img').attr('src', $(t).find('img').attr('src').replace('on','off'))
        
    }

    list[0].click()  // 강제호출, 들어가자마자 실행되도록  -- 기준선언은 false로 했지만 이 명령으로 인해 기본상태 true로 가지게 됨


})