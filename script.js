const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg"
];

let currentImage = 0;

function openLightbox(index) {

  currentImage = index;

  document
    .getElementById("lightbox")
    .classList.add("active");

  document
    .getElementById("lightbox-image")
    .src = images[currentImage];

}

function closeLightbox() {

  document
    .getElementById("lightbox")
    .classList.remove("active");

}

function changeSlide(direction) {

  currentImage += direction;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  document
    .getElementById("lightbox-image")
    .src = images[currentImage];

}

/* CLOSE WHEN CLICKING BACKGROUND */

document
  .getElementById("lightbox")
  .addEventListener("click", function(e) {

    if (e.target.id === "lightbox") {
      closeLightbox();
    }

});
