(function () {

  function onClick(e) {
    e.preventDefault()

    var link = e.currentTarget
    var id = link.href.split('#')[1]
    var pagePrefix = 'page-'
    var nextUrl = pagePrefix + id

    var prev = document.querySelector('article.visible')

    if (prev.id === nextUrl) {
      return
    }

    prev.classList.remove('visible')
    var prevLink = document.querySelector('a[href="#' + prev.id.substr(pagePrefix.length) + '"]')
    if (prevLink) {
      prevLink.classList.remove('active')
    }

    var next = document.getElementById(nextUrl)
    next.classList.add('visible')
    link.classList.add('active')
    location.hash = id
  }


  function onLoad() {
    var links = document.querySelectorAll('header nav a')
    links = Array.prototype.slice.call(links)
    links.push(document.querySelector(".logo"))

    links.forEach(function (link) {
      link.addEventListener("click", onClick)
    })
    if (location.hash) {
      document.querySelector('a[href="' + location.hash + '"]').click();
    }
  }


  window.addEventListener("DOMContentLoaded", onLoad)
}())
