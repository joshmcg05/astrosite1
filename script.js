const slider = document.querySelector('.slider');

const scrollAmount = 344;

/* NEXT BUTTON */

document.querySelector('.next').addEventListener('click', () => {

  if (
    slider.scrollLeft + slider.clientWidth >=
    slider.scrollWidth - 10
  ) {

    slider.scrollTo({
      left: 0,
      behavior: 'smooth'
    });

  } else {

    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

  }

});

/* PREVIOUS BUTTON */

document.querySelector('.prev').addEventListener('click', () => {

  if (slider.scrollLeft <= 0) {

    slider.scrollTo({
      left: slider.scrollWidth,
      behavior: 'smooth'
    });

  } else {

    slider.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });

  }

});
