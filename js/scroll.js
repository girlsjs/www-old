(function () {

  function onLoad() {

  }

  function onScroll(e){
    var screenSize = window.screen.availWidth;

    if (screenSize < 960) {
      document.querySelector('header').style.height = ''
      document.querySelector('.logo').style.transform = ''
      return
    }

    var position = window.scrollY - 30;
    // var initialHeight = (screenSize < 1220) ? 80 : 100
    var initialHeight = 100;


    var diff = initialHeight - position
    diff = (diff < 50) ? 50 : diff

    var scale = diff / initialHeight;
    scale = (scale > 1) ? 1 : scale;

    // var additionalScale = (screenSize < 1220) ? 0.7 : 1.0
    // scale = scale * additionalScale

    var headerHeight = (diff > initialHeight) ? initialHeight : diff

    document.querySelector('header').style.height = headerHeight + 'px'
    document.querySelector('.logo').style.transform = 'scale('+ scale +', '+ scale +')'
  }

  window.addEventListener("DOMContentLoaded", onLoad)
  window.addEventListener("scroll", function () {
    setTimeout(onScroll, 50)
  })
}())
