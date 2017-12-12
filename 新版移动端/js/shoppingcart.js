$(function () {
  $('.edit').on('touchend', function () {
    if ($(this).text() === "编辑") {
      $(this).text('完成')
      $('.fixt').hide()
      $('.fixtt').show().addClass('animate')
      // 更换ico功能
      $('.lists .list .forpay').each(function () {
        initico($(this))
        $(this).hide()
      })
      $('.lists .list .fordel').each(function () {
        initico($(this))
        $(this).show()
      })
    } else {
      $(this).text('编辑')
      $('.fixtt').hide()
      $('.fixt').show().addClass('animate')
      // 更换ico功能
      $('.lists .list .forpay').each(function () {
        initico($(this))
        $(this).show()
      })
      $('.lists .list .fordel').each(function () {
        initico($(this))
        $(this).hide()
      })
    }
  })

  // 初始ico状态
  function initico (ico) {
    var isdel = ico.hasClass('fordel')
    if (isdel) {
      if (ico.hasClass('active')) {
        ico.removeClass('active')
      }
    } else {
      if (!ico.hasClass('active')) {
        ico.addClass('active')
      }
    }
  }

  // 更改ico的状态
  $('.lists .list .ico span').on('touchend', function () {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })

  // delete
  $('.fixtt .b').on('touchend', function () {
    $('.lists .list .fordel').each(function () {
      if ($(this).hasClass('active')) {
        $(this).parents('.list').slideUp('fast')
      }
    })
  })
})
