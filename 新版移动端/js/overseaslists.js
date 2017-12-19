$(function () {
  $("img.lazy").lazyload({effect: "fadeIn"});

  $(".choose div").eq(0).on('touchend', function () {
    if ($(this).hasClass('active')) {
      $(this).find('span').toggleClass('rotate')
      $('.all').slideToggle()
    }
  })
  $(".choose div").eq(1).on('touchend', function () {
    
    if ($(this).hasClass('active')) {
      if ($(".choose div").eq(1).find('a span').eq(0).hasClass('addred')) {
        secrem()
      } else {
        secadd()
      }
    } else {
      secadd()
    }
  })

  $('.all').on('click',function () {
    $('.all').slideUp()
    $(".choose div").eq(0).find('span').removeClass('rotate')

  })
  $('.all').on('touchmove',function (e) {
    e.preventDefault()
  })

  $(".choose div").on('touchend', function () {
    if ($(".choose div").index($(this)) != 0) {
      firstrem()
    } else {
      firstadd()
    }
    if ($(".choose div").index($(this)) != 1) {
      secremall()
    }
    
    if (!$(this).hasClass('active')) {
      $(".choose div.active").removeClass('active')
      $(this).addClass('active')
    }
  })

  $('.all .hidden .comdiv').on('touchend', function () {
    var text = $(this).find('.dprchangefont').text()
    $(".choose .text span").eq(0).text(text)
  })



  function firstrem () {
    $(".choose div").eq(0).find('span').addClass('remove')
  }
  function firstadd () {
    $(".choose div").eq(0).find('span').removeClass('remove')
  }
  function secrem () {
    $(".choose div").eq(1).find('a span').eq(0).removeClass('addred')
    $(".choose div").eq(1).find('a span').eq(1).addClass('addred')
  }
  function secadd () {
    $(".choose div").eq(1).find('a span').eq(0).addClass('addred')
    $(".choose div").eq(1).find('a span').eq(1).removeClass('addred')
  }
  function secremall () {
    $(".choose div").eq(1).find('a span.addred').removeClass('addred')
  }
})
