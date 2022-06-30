// $(function(){

//     let tab = $('.tab li')
//     let sheet = $('.tab_sheet div')

//     tab.click(function(){

//         let target = $(this)
//         let i = target.index()

//         tab.removeClass('on')
//         tab.eq(i).addClass('on')

//         sheet.removeClass('on_sheet')
//         sheet.eq(i).addClass('on_sheet')



//     })


// })


// 밑으로 한번 더 복습


$(function(){

    let tab = $('.tab li')
    let sheet = $('.tab_sheet div')

    tab.cilk(function(){

        let target = $(this)
        let i = target.index()

        tab.removerClass('on')
        tab.eq(i).addClass('on')

        sheet.removerClass('on_sheet')
        sheet.eq(i).addClass('on_sheet')



    })

   



})