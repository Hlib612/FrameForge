const inputForYear = document.querySelector('.check_year_input');
const sendYearButton = document.querySelector('.check_year_submit_button');
const answer = document.querySelector('.check_year_responde');

let guestYear = 0;

const refreshGuestYear = event => {
  guestYear = Number(inputForYear.value);
};

inputForYear.addEventListener('change', refreshGuestYear);

const yearValidation = event => {
  event.preventDefault();
  if (guestYear % 400 == 0) {
    answer.textContent = 'Ви народилися у високоснй рік';
    answer.style.color = 'var(--dynamic-win-text-color)';
  } else if (guestYear.toString() === 'NaN') {
    answer.textContent = 'Введіть цифрами(1674)';
    answer.style.color = 'var(--buttons-background)';
  } else if (guestYear.toString().length != 4) {
    answer.textContent = 'Чотири цифри(1674)';
    answer.style.color = 'var(--buttons-background)';
  } else if (guestYear % 4 == 0 && guestYear % 100 != 0) {
    answer.textContent = 'Ви народилися у високоснй рік';
    answer.style.color = 'var(--dynamic-win-text-color)';
  } else {
    answer.textContent = 'Ви народилися не у високоснй рік';
    answer.style.color = 'var(--dynamic-lose-text-color)';
  }
};

sendYearButton.addEventListener('click', yearValidation);
