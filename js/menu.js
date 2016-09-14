(function () {

  function onClick(e) {
    e.preventDefault()

    var link = e.currentTarget
    var nextUrl = link.href.split('#')[1]

    var prev = document.querySelector('article.visible')

    if (prev.id === nextUrl) {
      return
    }

    prev.classList.remove('visible')
    var prevLink = document.querySelector('a[href="#' + prev.id + '"]')
    if (prevLink) {
      prevLink.classList.remove('active')
    }

    var next = document.getElementById(nextUrl)
    next.classList.add('visible')
    link.classList.add('active')
  }


  function onLoad() {
    var links = document.querySelectorAll('header nav a')
    links = Array.prototype.slice.call(links)
    links.push(document.querySelector(".logo"))

    links.forEach(function (link) {
      link.addEventListener("click", onClick)
    })
  }


  window.addEventListener("DOMContentLoaded", onLoad)
}())
