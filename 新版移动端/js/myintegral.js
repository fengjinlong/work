$(function () {
  var scrollOne = new BScroll('.contentt',{
    scrollY: true,
    click: true,
    probeType: 3
  })
  var scrollTwo = new BScroll('.contentt2',{
    scrollY: true,
    click: true,
    probeType: 3
  })

  var BGHEIGHT = {}
  BGHEIGHT.height = $('.bg').height()

  scrollOne.on('scroll', function (pos) {
    bgscale(pos.y)
  })
  scrollTwo.on('scroll', function (pos) {
    bgscale(pos.y)
  })
  function Brefresh () {
    scrollOne.refresh()
    scrollTwo.refresh()
  }
  $('.choosespan span').on('touchend', function () {
    $('.choosespan span.active').removeClass('active')
    $(this).addClass('active')
    var index = $('.choosespan span').index($(this))
    if (index === 0) {
      $('.contentt').hide()
      $('.contentt2').show()
      Brefresh()
      $.fn.dprchangefont()
    }else if(index === 1){
      $('.contentt').show()
      $('.contentt2').hide()
      Brefresh()
      $.fn.dprchangefont()
    }
  })
  function bgscale (val) {
    if (val > 0) {
      var scale = val / BGHEIGHT.height + 1
      var height = BGHEIGHT.height * scale
      $('.bg').css({transform: 'scale('+scale+')'})
      $('.bg').addClass('ztop')
    } else {
      $('.bg').removeClass('ztop')
    }

  }
  $.fn.dprchangefont()
})
