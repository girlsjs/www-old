(function () {

  function resize() {
    var articles = document.querySelectorAll('article')
    var viewportHeight = window.innerHeight

    for (var i = 0; i < articles.length; i++) {
      var art = articles[i]
      var height = art.getBoundingClientRect().height

      if (height < viewportHeight) {
        art.style.height = viewportHeight + "px"
      }
    }
  }

  document.addEventListener('DOMContentLoaded', resize)
}())
