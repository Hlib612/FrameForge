const inputs = document.querySelectorAll('.input-field');
const result = document.querySelector('.calc-time-result');
const button = document.querySelector('.search-button'); 

button.addEventListener('click', () => {
  const totalSeconds = parseInt(inputs[0].value); 

  if (isNaN(totalSeconds) || totalSeconds < 0) {
    result.textContent = 'Введіть коректне число секунд.';
    return;
  }

  const days = Math.floor(totalSeconds / (3600 * 24));
  const remainingAfterDays = totalSeconds % (3600 * 24);

  const hours = Math.floor(remainingAfterDays / 3600);
  const minutes = Math.floor((remainingAfterDays % 3600) / 60);
  const seconds = remainingAfterDays % 60;

  const formatted = `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  result.textContent = formatted;
});
