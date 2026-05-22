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

const lightboxImage =
  document.getElementById("lightbox-image");

lightboxImage.style.opacity = 0;

lightboxImage.style.transform =
  "scale(0.92)";

setTimeout(() => {

  currentImage += direction;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  lightboxImage.src = images[currentImage];

  lightboxImage.style.opacity = 1;

  lightboxImage.style.transform =
    "scale(1)";

}, 180);

/* CLOSE WHEN CLICKING BACKGROUND */

document
  .getElementById("lightbox")
  .addEventListener("click", function(e) {

    if (e.target.id === "lightbox") {
      closeLightbox();
    }

});
