  $(function () {
    var scrollOne = new BScroll('.scrollOne',{
      scrollY: true,
      click: true,
      probeType: 3
    })
    var scrollTwo = new BScroll('.scrollTwo',{
      scrollY: true,
      click: true,
      probeType: 3,
      startY: 0
    })
    var scrollThree = new BScroll('.scrollThree',{
      scrollY: true,
      tap: true,
      probeType: 3
    })
    $('.content').on('touchend', function () {
      $('header input').blur()
    })
    // 左侧滑动
    leftSlide()
    function leftSlide () {
      var touch = {}
      $('.titname').on('touchstart', function (e) {
        touch.touchX1 = e.touches[0].pageX
        touch.touchY1 = e.touches[0].pageY
      })
      scrollTwo.on('scroll', function (pos) {
        fixedDiv(pos.y)
        touch.touchX2 = pos.x
        touch.touchY2 = pos.y
        var x = Math.abs(touch.touchX2 - touch.touchX1)
        var y = Math.abs(touch.touchY2 - touch.touchY1)
        if (x > y) {
          return
        } else {
          // 把 pos.y 传个rightToEle
          rightIndex(pos.y)
        }
      })
    }
    
    function dtpfunction () {
      var n = 0.5;
      var dpr = parseInt(window.devicePixelRatio)
      switch (dpr) {
        case 2:
          n = 0.5;
          break;
        case 3:
          n = 0.333;
          break;
      }
      return n;
    }
    var DPR = dtpfunction()
    var VAL = 50 * DPR
    var LI_HEIGHT = 30 * DPR

    function fixedDiv (n) {
      if (n>0) {
        // 向下拉
        $('.fixedtit').css({transform: 'translate3d(0,0px,0)'}).find('h1').text('A')
        $('.fixedtit').hide()
      } else {
        // 向上拉
        $('.fixedtit').show()
        var y = Math.abs(n)
        for (var i=0; i<ARR.length;i++) {
          if(y > ARR[i]-VAL && y < ARR[i]){
            var valy = n + ARR[i]
            valy = valy-VAL
            if (Math.abs(valy) && Math.abs(valy) <= VAL) {
              $('.fixedtit').css({transform: 'translate3d(0,'+valy+'px,0)'})
            }else{
              $('.fixedtit').css({transform: 'translate3d(0,'+VAL+'px,0)'})
            }
          }else if(y > ARR[i] && y < ARR[i+1]){
            var str = $('.titname .lists h2').eq(i+1).text()
            $('.fixedtit').css({transform: 'translate3d(0,0px,0)'}).find('h1').text(str)
          }
        }
      }
    }
    // 获取左侧数组
    var ARR = funarr()
    function funarr () {
      var arr = []
      var val = 0
      $('.titname li').each(function () {
        val += $(this).height()
        arr.push(val)
      })
      return arr
    }
    // 左侧滚动到的索引
    function rightIndex (num) {
      num = Math.abs(num)
      for (var i=0; i<ARR.length; i++) {
        if (num <= ARR[0]) {
          $('.fixedtit').find('h1').text('A')
          rightToEle(0)
          return
        }
        if (num > ARR[i] && num <= ARR[i+1]) {
          rightToEle(i+1)
          return
        }
        if (num >= ARR[ARR.length]) {
          rightToEle(ARR.length)
          return
        }
      }
    }
    // 右侧激活到元素
    function rightToEle (index) {
      var $dom = $('.titcont li').eq(index)
      if (!$dom.hasClass('active')) {
        $('.titcont li.active').removeClass('active')
        $dom.addClass('active')
      }
    }
    // 点击字母
    $('.titcont li').on('tap', function () {
      var index = $('.titcont li').index($(this)) + 1
      var domleft = '.scrollTwo ul li:nth-child('+index+')'
      // 点击字母对应fixedtit值变化
      runFixedtit(index)
      if(!$(this).hasClass('active')){
        $('.titcont li.active').removeClass('active')
        $(this).addClass('active')
      }
      scrollTwo.scrollToElement(domleft, 0)
    })
    // 在字母上面滑动
    f()
    function f () {
      var ARRM = {}
      ARRM.startIndex = $('.titcont li').index($('.titcont li.active'))
      $('.titcont li').on('touchstart', function (e) {
        var index = $('.titcont li').index($(this)) + 1
        var domleft = '.scrollTwo ul li:nth-child('+index+')'
      if(!$(this).hasClass('active')){
        $('.titcont li.active').removeClass('active')
        $(this).addClass('active')
      }
      ARRM.startIndex = $('.titcont li').index($('.titcont li.active'))
      scrollTwo.scrollToElement(domleft, 0)
        ARRM.y1 = e.touches[0].pageY
      })
      $('.titcont').on('touchmove', function (e) {
        ARRM.y2 = e.touches[0].pageY
        var data = (ARRM.y2 - ARRM.y1) / LI_HEIGHT | 0

        var indexL = ARRM.startIndex + data
        if(indexL > 27){
          indexL = 26
        }
        var indexL = indexL + 1
        var dom = '.scrollTwo ul li:nth-child('+indexL+')'
        scrollTwo.scrollToElement(dom, 0)
        // 滑动字母对应fixedtit值变化
        runFixedtit(indexL)
        // 字母调转
        jump(ARRM,data)
      })
    }

    function runFixedtit (i) {
      if(i < 0){
        i = 1
      }
      var str = $('.titname .lists h2').eq(i - 1).text()
      $('.fixedtit h1').text(str)
    }
    function jump (ARRM,n) {
      var actindex = ARRM.startIndex + n
      if (actindex >= 0 && actindex <= 26) {
        $('.titcont li.active').removeClass('active')
        $('.titcont li').eq(actindex).addClass('active')
      } else if (actindex < 0) {
        $('.titcont li.active').removeClass('active')
        $('.titcont li').eq(0).addClass('active')
      } else if(actindex > 26) {
        $('.titcont li.active').removeClass('active')
        $('.titcont li').eq(26).addClass('active')
      } else {
        return
      }
    }
  })
