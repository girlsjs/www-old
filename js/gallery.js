function openGallery(e) {
  var photos = [
    { url: "assets/foto/okladkowe.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-11.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-18.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-20.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-21.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-22.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-26.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-31.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-32.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-33.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-34.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-35.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-36.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-37.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-38.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-39.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-43.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-44.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-48.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-50.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-52.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-53.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-56.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-57.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-58.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-61.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-64.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-66.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-67.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-6.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-70.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-71.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-72.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-75.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-77.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-78.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-7.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-81.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-86.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-87.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-8.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-92.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-95.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/Girlsjs-98.jpg", caption: "Autorka: Anna Juszkiewicz" },
    { url: "assets/foto/IMG_3560_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3562_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3574_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3579_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3581_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3586_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3587_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3589_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3592_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3596_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3597_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3598_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3600_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3602_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3613_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3614_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3637_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3653_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3667_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3670_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3677_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3685_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3692_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3699_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3702_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3710_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3717_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3744_girlsjs.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" },
    { url: "assets/foto/IMG_3776_girlsjs_2.jpg", caption: "Autorka: Katarzyna Niedźwiedzka" }
  ];

  Lightview.show(photos, { controls: 'thumbnails', skin: 'light' });
  e.preventDefault();
  return false;
}


document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".gallery-open")

  for(var i=0; i<items.length; i++) {
    items[i].addEventListener("click", openGallery);
  }
});
