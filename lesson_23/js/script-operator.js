"use strict";
console.log('====     JS оператори     ====');
// Домашка №1

// Варіант № 1
let variantOne = '35' + -"22";
console.log(typeof variantOne);
console.log(variantOne);
// Варіант № 2
let variantTwo = '35' + "22"; // конкатенація
console.log(typeof variantTwo);
console.log(variantTwo);
//! Варіант № 3    Помилка,  так як унарний оператор Інкременція використаний у виразі із числом 22 , але Інкремент та декремент працюють ЛИШЕ  З ЗМІННИМИ.
let a = 22
let varianThree = '558' > a++;
// console.log(typeof varianThree);
console.log(varianThree);

//! Варіант № 4    МОЖЛИВА Логічна помилка (якщо це спеціально не задумано - так як приклад вирваний з контексту) . 
// Результат не зміниться через використання суфіксного типу запису інкремента , тому для  випадку миттєвого збільшення операнда на одиницю варто використати інкремент  префіксного типу запису.
let userCounter = 0;
let variantFour = userCounter++; // variantFour отримає значення попереднє значення userCounter [ 0 ] , втой же час userCounter збільшиться на одиницю. 
console.log(typeof variantFour);
console.log(variantFour);
console.log(`userCounter ${userCounter} variantFour: ${variantFour}`);
// Варіант № 5
let firstPart = !false && 11;
console.log(firstPart);
let secondPart = 18 && !'';
console.log(secondPart);
// Відповідно до пріорітетності операторів вираз можна прочитати так: ((NOT FALSE) AND 11) OR (18=>TRUE AND (NOT '')), 
// Знаючи , що числа > 0 в булевому значенні будуть TRUE , а також що  NOT FALSE === TRUE, а ще , що під час виконання Конюнкції буде повернено останнє значення, що повертає TRUE - Вираз матиме вигляд: (TRUE AND TRUEnum) OR (TRUEnum AND TRUE)
// В результаті  ми отримаємо  (TRUE AND [ TRUEnum ]) OR (TRUEnum AND TRUE) під час виконання логічног виразу: variantFive = !false && 11 || 18 && !'';
let variantFive = !false && 11 || 18 && !'';
console.log(typeof variantFive);
console.log(variantFive);
// Варіант № 6
// Змінній nameV присвоєно значення 0 , тобто число нуль , що не є null/undefinate , тому у виразі : let let variatnSix = nameV ?? "Без імені";  variatnSix отримає значення 0 тобто число нуль.
let nameV = 0;
let variatnSix = nameV ?? "Без імені";
console.log(variatnSix);