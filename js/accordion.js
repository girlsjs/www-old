(function () {

  function accordionify() {
    var articles = document.querySelectorAll('article')

    Array.prototype.forEach.call(articles, function (article) {
      var headerContainer = article.querySelector('.header-container')

      headerContainer.addEventListener('click', function () {
        var content = article.querySelector('.content')
        var height = 0

        if (!article.classList.contains('open')) {
          Array.prototype.forEach.call(content.querySelectorAll('section'), function (s) {
            height += s.offsetHeight
          })
        }

        content.style.height = height + 'px'
        article.classList.toggle('open')
      })
    })
  }

  document.addEventListener('DOMContentLoaded', accordionify)
}())
