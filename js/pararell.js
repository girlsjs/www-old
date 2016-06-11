(function () {

  function scrollBackground() {
    console.log('o')
    var elements = document.querySelectorAll('.pararell-container')

    for (var i = 0; i < elements.length; i++) {
      var el = elements[i]
      var rect = el.getBoundingClientRect()
      el.style.backgroundPositionY = -rect.top + "px"

      var parent = el.parentElement
      var height = parent.getBoundingClientRect().height

      el.style.height = height + "px"
    }
  }

  window.addEventListener('scroll', scrollBackground)
  document.addEventListener('DOMContentLoaded', scrollBackground)
}())
