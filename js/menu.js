(function () {

  function onHashChange(e) {
    var id = e.newURL.split("#")[1];
    var pagePrefix = "page-";
    var nextUrl = pagePrefix + id;
    var prev = document.querySelector("article.visible");
    if (prev.id === nextUrl) {
      return;
    }
    var link = document.querySelector("a[href='#" + id + "']");
    var next = document.querySelector("#" + nextUrl);
    if (!link || ! next) {
      return;
    }
    prev.classList.remove("visible");
    var prevLink = document.querySelector("a[href='#" + prev.id.substr(pagePrefix.length) + "']");
    if (prevLink) {
      prevLink.classList.remove("active");
    }
    next.classList.add("visible");
    link.classList.add("active");
  }

  function onLoad() {
    window.addEventListener("hashchange", onHashChange);

    if (location.hash) {
      onHashChange({newURL: location.hash});
    }
  }


  window.addEventListener("DOMContentLoaded", onLoad)
}())
