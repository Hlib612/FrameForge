const enterFirstNumber = document.getElementById('first-num');
const enterSecondNumber = document.getElementById('second-num');
const resultNumber = document.getElementById('result-num');

let operator = null;

document.getElementById('plus-btn').addEventListener('click', () => {operator = '+'});
document.getElementById('multiply-btn').addEventListener('click', () => {operator = '-'});
document.getElementById('minus-btn').addEventListener('click', () => {operator = '*'});
document.getElementById('divide-btn').addEventListener('click', () => {operator = '/'});

const equalsButton = document.getElementById('equals-btn').addEventListener('click', () => {
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




