const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const input3 = document.querySelector('#num3');
const result = document.querySelector('.biggest-number-p');

function findMaxNumber() {
       
        const num1 = parseFloat(input1.value) || 0;
        const num2 = parseFloat(input2.value) || 0;
        const num3 = parseFloat(input3.value) || 0;
        
       
        const maxNumber = Math.max(num1, num2, num3);
        
       
        result.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
    }
    
    // На всі інпути одна функція 
    input1.addEventListener('input', findMaxNumber);
    input2.addEventListener('input', findMaxNumber);
    input3.addEventListener('input', findMaxNumber);
