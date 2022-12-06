"use strict"
console.log('====     Числа JS    ====');




// Завдання 1
// Отримати  правильне значення округлення
let numberOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numberOne);
















// Завдання 2
// Отримати число 135.58 із рядка
let valueTwo = "135.58";
console.log(parseFloat(valueTwo));


















// Завдання 3
// Побудувати правильне умовне розгалуження
let valueThree = 58 + "Фрілансер"
if (isNaN(valueThree)) {
    console.log('Результат виразу NaN');
}









// Завдання 4
//  Знайти максимальне число 10, 58, 39, -150, 0
console.log(Math.max(10, 58, 39, -150, 0));











// Завдання 5
// Округлити число 58.858 до числа 58
let numOne = Math.floor(58.858);
console.log(numOne);