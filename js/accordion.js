(function () {

  function accordionify() {
    var articles = document.querySelectorAll('article')

    articles.forEach(function (article) {
      var headerContainer = article.querySelector('.header-container')

      headerContainer.addEventListener('click', function () {
        // articles.forEach(function (a) {
        //   a.classList.remove('open')
        //   var c = a.querySelector('.content')
        //   c.style.height = null
        // })

        var content = article.querySelector('.content')
        var height = 0

        if (!article.classList.contains('open')) {
          content.querySelectorAll('section').forEach(function (s) {
            height += s.offsetHeight
          })
        }

        article.classList.toggle('open')
        content.style.height = height + 'px'
      })
    })
  }

  document.addEventListener('DOMContentLoaded', accordionify)
}())
