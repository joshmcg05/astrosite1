const slider = document.querySelector('.slider');

document.querySelector('.next').addEventListener('click', () => {
  slider.scrollBy({
    left: 400,
    behavior: 'smooth'
  });
});

document.querySelector('.prev').addEventListener('click', () => {
  slider.scrollBy({
    left: -400,
    behavior: 'smooth'
  });
});