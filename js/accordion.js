(function () {

  function accordionify() {
    var articles = document.querySelectorAll('article')

    articles.forEach(function (article) {
      var header = article.querySelector('.header');

      header.addEventListener('click', function () {
        article.classList.toggle('open')
      })
    })
  }

  document.addEventListener('DOMContentLoaded', accordionify)
}())
