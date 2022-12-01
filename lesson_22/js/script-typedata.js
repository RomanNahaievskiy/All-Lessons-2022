"use strict";
console.log('====****====****====****====');
console.log('====  3 част. Тип даних ====');
console.log('Завдання - практика');
//! 1) використані подвійні лапки не дають змоги імплементувати/ включити/ змінну в рядковий тип. Потрібні обернені лапки!
let userAge = 30;
// let userInfo = "Фрілансер по життю ${userAge}";
let userInfo = `Фрілансер по життю ${userAge}`;
console.log(userInfo);
//! 2) Повернеться значення : Infinty / у відео цей варіаннт був коментований "Повернеться тип NaN", що є помилкою!
let userHeight = 176 / 0;
console.log(userHeight);
//! 3) Тип даних: Undefinate / у відео цей варіаннт був коментований "Повернеться тип даних Null", що є помилкою!
let userName1;
console.log(typeof userName1);
// 4) Ок
let userSize = "45" / "8";
console.log(typeof userSize);