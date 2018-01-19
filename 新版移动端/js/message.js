  initWidth()
  function initWidth() {
    var w = document.body.clientWidth;
    $('main').width(w + 'px')
    $('.container').width(4 * w + 'px')
    $('.items').width(w + 'px')
  }
  $('main').on("touchend", function () {
    $('header input').blur()
  })
  $('header input').focus(function () {
    $('.fix').hide()
  })
  $('header input').blur(function () {
    $('.fix').show()
  })
  var scrollOne = new BScroll('main',{
    scrollX: true,
    momentum: false,
    click: true,
    probeType: 3,
    snap: {
      threshold: 0.3,
      speed: 400
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