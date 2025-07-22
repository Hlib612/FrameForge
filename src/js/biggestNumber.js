// const inputs = document.querySelectorAll('.biggest-number-input');
// const result = document.querySelector('.biggest-number-p');

// inputs.forEach(input => {
//   input.addEventListener('input', () => {
//     const values = Array.from(inputs).map(el => Number(el.value));
//     if (values.every(v => !isNaN(v) && el.value.trim() !== '')) {
//       const max = Math.max(...values);
//       result.textContent = `Найбільше число, яке ви ввели - ${max}`;
//     }
//   });
// });

// const inputs = document.querySelectorAll('.biggest-number-input');
// const inputs1 = document.querySelector('#num1');
// const inputs2 = document.querySelector('#num2');
// const inputs3 = document.querySelector('#num3');
// const result = document.querySelector('.biggest-number-p');
// const check_button = document.querySelector('.biggest-number-check_button');

// let num1 = 0;
// let num2 = 0;
// let num3 = 0;

// const findBisggestNumber = event =>{

//     num1 = inputs1;
//   num2 = inputs2;
//   num3 = inputs3;
//   console.log(num1);
//   console.log(num2);
//   console.log(num3);

//   if(inputs1.value > inputs2.value & inputs1.value > inputs3.value){
//     result.textContent = `Найбільше число, яке ви ввели - ${inputs1.value}`;
//   } else if (inputs2.value > inputs1.value & inputs2.value > inputs3.value){
//     result.textContent = `Найбільше число, яке ви ввели - ${inputs2.value}`;
//   } else if(inputs3.value > inputs1.value & inputs3.value > inputs2.value){
//     result.textContent = `Найбільше число, яке ви ввели - ${inputs3.value}`;
//   } else{
//     result.textContent = `Упс ви зробили щось не так`;
//   }
// }



// // const refresh = event => {
// //   num1 = inputs1;
// //   num2 = inputs2;
// //   num3 = inputs3;
// //   console.log(num1);
// //   console.log(num2);
// //   console.log(num3);
// // }

// // check_button.addEventListener('click' , refresh)
// check_button.addEventListener('click' , findBisggestNumber)


const inputs1 = document.querySelector('#num1');
const inputs2 = document.querySelector('#num2');
const inputs3 = document.querySelector('#num3');
const result = document.querySelector('.biggest-number-p');
const check_button = document.querySelector('.biggest-number-check-button');

const findBiggestNumber = (event) => {
    let num1 = parseFloat(inputs1.value);
    let num2 = parseFloat(inputs2.value);
    let num3 = parseFloat(inputs3.value);

    console.log(num1);
    console.log(num2);
    console.log(num3);

    if (num1 > num2 && num1 > num3) {
        result.textContent = `Найбільше число, яке ви ввели - ${num1}`;
    } else if (num2 > num1 && num2 > num3) {
        result.textContent = `Найбільше число, яке ви ввели - ${num2}`;
    } else if (num3 > num1 && num3 > num2) {
        result.textContent = `Найбільше число, яке ви ввели - ${num3}`;
    } else {
        result.textContent = 'Усі числа рівні або виникла помилка.';
    }
};

check_button.addEventListener('click', findBiggestNumber);