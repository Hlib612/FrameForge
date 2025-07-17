const inputs = document.querySelectorAll('.biggest-number-input');
const result = document.querySelector('.biggest-number-p');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const values = Array.from(inputs).map(el => Number(el.value));
    if (values.every(v => !isNaN(v) && el.value.trim() !== '')) {
      const max = Math.max(...values);
      result.textContent = `Найбільше число, яке ви ввели - ${max}`;
    }
  });
});
