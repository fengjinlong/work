$(function () {

// 初始化
  var scrollOne = new BScroll('.scrollOne',{
    scrollY: true,
    tap: true,
    probeType: 3
  })
  var scrollTwo = new BScroll('.scrollTwo',{
    scrollY: true,
    click: true,
    probeType: 3
  })

  // 点击左侧
  $('.scrollOne li').on('tap', function () {
    var index = $('.scrollOne li').index($(this))
    var dom = '.list' + index
    if(!$(this).hasClass('active')){
      $('.scrollOne li.active').removeClass('active')
      $(this).addClass('active')
    }
    scrollToEle(dom)
  })

  // 右侧被滚动
  function scrollToEle (dom) {
    scrollTwo.scrollToElement(dom, 0)
  }

  // 获取右侧数组
  var ARR = getHeightArr ()
  function getHeightArr () {
    var arr = []
    var val = 0
    $('.lists .list').each(function () {
      val += $(this).height()
      arr.push(val)
    })
    return arr
  }

  // 右侧开始滑动
  rightSlide()
  function rightSlide () {
    var touch = {}
    $('.contwo').on('touchstart',function (e) {
      touch.page1X = e.touches[0].pageX
      touch.page1Y = e.touches[0].pageY
    })
    scrollTwo.on('scroll',function (pos) {
      touch.page2X = pos.x
      touch.page2Y = pos.y
      var x = Math.abs(touch.page2X-touch.page1X);
      var y = Math.abs(touch.page2Y-touch.page1Y);
      if(x > y){
          return
      }else{
          returnIndex(pos.y)
      }
    })
  }

  // 返回index
  function returnIndex (n) {
     n = Math.abs(n)
    for (var i=0; i<ARR.length-1; i++) {
        if(n <= ARR[0]) {
            leftToEle(0)
            return
        }
        if(n > ARR[i] && n <= ARR[i+1]){
            leftToEle(i+1)
            return
        }
        if(n >= ARR[ARR.length]){
            leftToEle(ARR.length)
            return
        }
    }
  }
  // 左侧被滚动
  function leftToEle (index) {
    var dom = '.li' + index
    scrollOne.scrollToElement(dom, 50)
    $('.scrollOne li.active').removeClass('active')
    $('.scrollOne li'+dom).addClass('active')
  }
})
