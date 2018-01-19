  var scrollOne = new BScroll('.scrollOne',{
    scrollY: true,
    click: true,
    probeType: 3
  })
  var scrollTwo = new BScroll('.scrollTwo',{
    scrollY: true,
    click: true,
    probeType: 3
  })

  // scrollTwo.on('pullingDown', function () {
  //   console.log('ok')
  // })
  $('.content').on('touchend', function () {
      $('header input').blur()
  })