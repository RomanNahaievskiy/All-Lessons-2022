"use strict";
console.log('====    JS Цикли FOR & WHILE   ====');
// Завдання 1
// Вивести в консоль числа від 1 до 5.

// Завдання 2
// Останнє число буде 0 ?
// !Останнім буде число 1, тому , що в умові значення 0 повертає FALSE, що зупиняє виконання циклу
// Для того щоб вивести  по черзі від 8 до 0 включно, в умові потрібно прописати >=0
let numTwo = 8;
while (numTwo >= 0) {
    console.log(numTwo);
    numTwo--;
}
// Завдання 3
// Перезаписати  на while
// for (let numThree = 0; numThree < 3; numThree++) {
//     console.log(`Число: ${numThree}`);
// }
// Завдання 4
// Зупинити роботу циклу №1, коли size == 0
// Цикл №1
// for (let numFour = 0; numFour < 2; numFour++) {
    // Цикл №2
    // for (let size = 0; size < 3; size++) {
        // console.log(size);
    // }
// }