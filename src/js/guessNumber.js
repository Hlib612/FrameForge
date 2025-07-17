const guestNumberInput = document.querySelector('.gues_mumber_input');
const responde = document.querySelector('.gues_mumber_responde');
const sendButton = document.querySelector('.gues_mumber_submit_button');
const refreshButton = document.querySelector('.gues_mumber_reaset_button');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomInt(1, 10);
console.log(randomInt);

let guestNumberValue = 0;

const updateValue = event => {
  guestNumberValue = guestNumberInput.value;
  return console.log(Number(guestNumberInput.value));
};

const refreshPage = event => {
location.reload();
};

console.log(Number(guestNumberInput.value));
console.log(Number(guestNumberInput.value).toString());

const check = event => {
  event.preventDefault();
  if (Number(guestNumberInput.value) === randomInt) {
    responde.textContent = `Вітаю, ви вгадали число! ${randomInt} `;
    responde.style.color = "var(--dynamic-win-text-color)";
  } else if (Number(guestNumberInput.value).toString() === 'NaN') {
    responde.textContent = 'Будь ласка введіть число - number';
    responde.style.color = "#003d99ff";
  } else if (Number(guestNumberInput.value) === 0) {
    responde.textContent = 'Введіть число';
  } else if (
    Number(guestNumberInput.value) > 10 ||
    Number(guestNumberInput.value) < 1
  ) {
    responde.textContent = 'Від 1 до 10';
    responde.style.color = "#590381ff";
  } else {
    responde.textContent = `Ви програли, комп’ютер загадав ${randomInt} `;
    responde.style.color = "var(--dynamic-lose-text-color)";
  }
};
guestNumberInput.addEventListener('change', updateValue);
sendButton.addEventListener('click', check);
refreshButton.addEventListener('click' , refreshPage);
