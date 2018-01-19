$.fn.extend({
  dprchangefont: function () {
    $('.dprchangefont').each(function () {
      if(!$(this).hasClass('overchangefont')){
        var size = parseInt($(this).css('fontSize'))
        var dpr = parseInt($('html').attr('data-dpr'))
        if(dpr === 2){
          $(this).css({fontSize:size * 2 + 'px'})
        }else if(dpr === 3){
          $(this).css({fontSize:size * 3+'px'})
        }
        $(this).addClass('overchangefont')
      }
    })
  }
})
$.fn.dprchangefont()