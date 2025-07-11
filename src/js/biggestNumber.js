
const inputs = document.querySelectorAll('.biggest-number-inputs');
const result = document.getElementById('result');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const values = Array.from(inputs).map(el => Number(el.value));
    if (values.every(v => !isNaN(v))) {
      const max = Math.max(...values);
      result.textContent = `Найбільше число, яке ви ввели – ${max}`;
    }
  });
});