$(function () {
    // 根据data-dpr更改字体
    function f(ele) {
        var size = parseInt(ele.css('fontSize'))
        var dpr = parseInt($('html').attr('data-dpr'))
        if(dpr === 2){
            ele.css({fontSize:size * 2 + 'px'})
        }else if(dpr === 3){
            ele.css({fontSize:size * 3+'px'})
        }
    }
    $('.dprchangefont').each(function () {
        f($(this))
    })
})