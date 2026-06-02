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

/* ==========================
   CAROUSEL
========================== */

const track =
    document.getElementById("slider-track");

const prev =
    document.querySelector(".slider-prev");

const next =
    document.querySelector(".slider-next");

let currentX = 0;

let speed = 0.35;

let pauseUntil = 0;

/* image width + gap */

const step = 348;

/* animate */

function animateCarousel() {

    const now = Date.now();

    if (now > pauseUntil) {

        currentX -= speed;

    }

    const halfWidth =
        track.scrollWidth / 2;

    if (Math.abs(currentX) >= halfWidth) {

        currentX += halfWidth;

    }

    track.style.transform =
        `translateX(${currentX}px)`;

    updateFocus();

    requestAnimationFrame(
        animateCarousel
    );

}

animateCarousel();

/* focus image */

function updateFocus() {

    const images =
        track.querySelectorAll("img");

    const center =
        window.innerWidth / 2;

    let closest = null;

    let smallestDistance = Infinity;

    images.forEach(img => {

        const rect =
            img.getBoundingClientRect();

        const imageCenter =
            rect.left + rect.width / 2;

        const distance =
            Math.abs(
                center - imageCenter
            );

        img.classList.remove(
            "focused"
        );

        if (
            distance <
            smallestDistance
        ) {

            smallestDistance =
                distance;

            closest = img;

        }

    });

    if (closest) {

        closest.classList.add(
            "focused"
        );

    }

}

/* smooth move */

function moveCarousel(direction) {

    pauseUntil =
        Date.now() + 5000;

    const start =
        currentX;

    const end =
        currentX +
        direction * step;

    const duration =
        700;

    const startTime =
        performance.now();

    function animate(time) {

        const progress =
            Math.min(
                (time - startTime)
                / duration,
                1
            );

        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );

        currentX =
            start +
            (end - start)
            * eased;

        if (progress < 1) {

            requestAnimationFrame(
                animate
            );

        }

    }

    requestAnimationFrame(
        animate
    );

}

next.addEventListener(
    "click",
    () => moveCarousel(-1)
);

prev.addEventListener(
    "click",
    () => moveCarousel(1)
);

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

/* =========================
   SLIDER MANUAL CONTROLS
========================= */

const sliderTrack =
  document.getElementById("slider-track");

const prevArrow =
  document.querySelector(".slider-prev");

const nextArrow =
  document.querySelector(".slider-next");

let autoScrollPaused = false;

let pauseTimeout;

/* STOP CSS ANIMATION */

function pauseAutoScroll() {

  sliderTrack.style.animationPlayState =
    "paused";

}

/* RESUME */

function resumeAutoScroll() {

  sliderTrack.style.animationPlayState =
    "running";

}

/* MANUAL MOVE */

function manualSlide(direction) {

  pauseAutoScroll();

  clearTimeout(pauseTimeout);

  const currentTransform =
    getComputedStyle(sliderTrack).transform;

  let matrix =
    new DOMMatrix(currentTransform);

  let currentX = matrix.m41;

  currentX += direction * 360;

  sliderTrack.style.animation = "none";

  sliderTrack.style.transform =
    `translateX(${currentX}px)`;

  /* RESUME AFTER 5s */

  pauseTimeout = setTimeout(() => {

    sliderTrack.style.animation =
      "autoScroll 45s linear infinite";

  }, 5000);

}

/* BUTTONS */

nextArrow.addEventListener("click", () => {

  manualSlide(-1);

});

prevArrow.addEventListener("click", () => {

  manualSlide(1);

});
