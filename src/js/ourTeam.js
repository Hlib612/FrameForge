const slider = document.querySelector('#team-slider');
const items = document.querySelectorAll('.ourTeamDiv_slider_item');
const prevBtn = document.querySelector('#button-slider-previous');
const nextBtn = document.querySelector('#button-slider-next');

let currentIndex = 0;

function updateSlider() {
  const offset = -currentIndex * 100;
  slider.style.transform = `translateX(${offset}%)`;
  updateButtons();
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === items.length - 1;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex + 1;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex - 1;
    updateSlider();
  }
});

updateSlider();

