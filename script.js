const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg"
];

let currentImage = 0;

/* OPEN LIGHTBOX */

function openLightbox(index) {

  currentImage = index;

  const lightbox =
    document.getElementById("lightbox");

  const lightboxImage =
    document.getElementById("lightbox-image");

  lightbox.classList.add("active");

  lightboxImage.src = images[currentImage];

}

/* CLOSE LIGHTBOX */

function closeLightbox() {

  document
    .getElementById("lightbox")
    .classList.remove("active");

}

/* CHANGE IMAGE */

function changeSlide(direction) {

  const lightboxImage =
    document.getElementById("lightbox-image");

  /* ANIMATE OUT */

  lightboxImage.style.opacity = 0;

  lightboxImage.style.transform =
    "scale(0.92) translateY(10px)";

  setTimeout(() => {

    currentImage += direction;

    /* LOOP */

    if (currentImage < 0) {
      currentImage = images.length - 1;
    }

    if (currentImage >= images.length) {
      currentImage = 0;
    }

    /* CHANGE IMAGE */

    lightboxImage.src = images[currentImage];

    /* ANIMATE IN */

    lightboxImage.style.opacity = 1;

    lightboxImage.style.transform =
      "scale(1) translateY(0)";

  }, 180);

}

/* CLOSE WHEN CLICKING BACKGROUND */

document
  .getElementById("lightbox")
  .addEventListener("click", function(e) {

    if (e.target.id === "lightbox") {

      closeLightbox();

    }

});
