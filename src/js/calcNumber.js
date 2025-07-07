const enterFirstNumber = document.querySelector('#first-num');
const enterSecondNumber = document.querySelector('#second-num');
const resultNumber = document.querySelector('#result-num');

let operator = null;

document.querySelector('#plus-btn').addEventListener('click', () => {operator = '+'});
document.querySelector('#multiply-btn').addEventListener('click', () => {operator = '-'});
document.querySelector('#minus-btn').addEventListener('click', () => {operator = '*'});
document.querySelector('#divide-btn').addEventListener('click', () => {operator = '/'});

const equalsButton = document.querySelector('#equals-btn').addEventListener('click', () => {
  const num1 = parseFloat(enterFirstNumber.value);
  const num2 = parseFloat(enterSecondNumber.value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    resultNumber.value = 'Введіть два числа'
    return;
  }

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num1 == 0 || num2 === 0) {
        result = resultNumber.value = 'Ділення на 0 неможливе';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Оберіть дію';
  }

  resultNumber.value = result;
});




