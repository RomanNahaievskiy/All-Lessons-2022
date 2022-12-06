"use strict";
console.log('====    JS Цикли FOR & WHILE   ====');
// Завдання 1
// Вивести в консоль числа від 1 до 5.
console.log('while');
let num = 1;
while (num < 6) {
    console.log(num);
    num++;
}
console.log('do{}while()');
num = 1;
do {
    console.log(num);
    num++;
} while (num < 6);
console.log('for(start;condition;step in body for start)');
for (num = 1; num < 6; num++) {
    console.log(num);
}
console.log('for{num++}');
for (num = 1; num < 6;) {
    console.log(num);
    num++;
}
console.log('for(let num = 1;num < 6;){num++}');
for (let num = 1; num < 6;) {
    console.log(num);
    num++;
}
// Завдання 2
// Останнє число буде 0 ?
//! Останнім буде число 1, тому , що в умові значення 0 повертає FALSE,
//!  що зупиняє виконання циклу
// Для того щоб вивести  по черзі від 8 до 0 включно, в умові потрібно прописати >=0
console.log('Завдання 2');
let numTwo = 8;
while (numTwo) {
    console.log(numTwo);
    numTwo--;
}
// Завдання 3
console.log('Завдання 3');
// Перезаписати  на while
for (let numThree = 0; numThree < 3; numThree++) {
    console.log(`Число: ${numThree}`);
}
console.log('Завдання 3 виконання');
let numThree = 0;
while (numThree < 3) {
    console.log(`Число: ${numThree}`);
    numThree++;
}
// Завдання 4
console.log('Завдання 4 виконання');
// Зупинити роботу циклу №1, коли size == 0
// Цикл №1
markOne: for (let numFour = 0; numFour < 2; numFour++) {
    // Цикл №2
    for (let size = 0; size < 3; size++) {
        if (size == 0) {
            break markOne;
        }
        console.log(size);
    }
}