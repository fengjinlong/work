  // 初始化
  initWidth()
  function initWidth() {
    var w = document.body.clientWidth;
    $('.scrollx').width(w + 'px')
    $('.touchlist').width(w + 'px')
    $('.ad').width(w + 'px')
    $('.tit').width(w + 'px')
    $('.touchscroll').width(5 * w + 'px')
  }
  var scrollOne = new BScroll('.scrollx',{
    scrollX: true,
    momentum: false,
    click: true,
    probeType: 3,
    snap: {
      threshold: 0.3,
      speed: 400
      // stepY: 780
    }
  })
  scrollOne.on('scrollEnd', function (pos) {
    var index = scrollOne.getCurrentPage().pageX
    $('nav a.active').removeClass('active')
    $('nav a').eq(index).addClass('active')
  })
  $('nav a').on('touchend', function () {
    if (!$(this).hasClass('active')) {
      var index = $('nav a').index($(this))
      $('nav a.active').removeClass('active')
      $(this).addClass('active')
      scrollOne.goToPage(index,0,300)
    }
  })
