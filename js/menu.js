(function () {

  function onClick(e) {
    e.preventDefault()

    var link = e.target
    var nextUrl = link.href.split('#')[1]

    var prev = document.querySelector('article.visible')

    if (prev.id === nextUrl) {
      return
    }

    prev.classList.remove('visible')

    var next = document.getElementById(nextUrl)
    next.classList.add('visible')
  }


  function onLoad() {
    var links = document.querySelectorAll('header nav a')
    links = Array.prototype.slice.call(links)

    links.forEach(function (link) {
      link.addEventListener("click", onClick)
    })
  }


  window.addEventListener("DOMContentLoaded", onLoad)
}())
