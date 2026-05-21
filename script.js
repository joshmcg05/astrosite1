const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.slider img');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

const imageWidth = 308;

/* SET ACTIVE IMAGE */

function updateActiveImage() {

  images.forEach(img => img.classList.remove('active'));

  images[currentIndex].classList.add('active');

}

/* MOVE SLIDER */

function moveSlider() {

  slider.scrollTo({
    left: currentIndex * imageWidth,
    behavior: 'smooth'
  });

  updateActiveImage();

}

/* NEXT */

nextBtn.addEventListener('click', () => {

  currentIndex++;

  if (currentIndex >= images.length - 6) {

    currentIndex = 0;

    slider.scrollTo({
      left: 0,
      behavior: 'auto'
    });

  }

  moveSlider();

});

/* PREV */

prevBtn.addEventListener('click', () => {

  currentIndex--;

  if (currentIndex < 0) {

    currentIndex = 5;

  }

  moveSlider();

});

/* INITIAL */

updateActiveImage();
