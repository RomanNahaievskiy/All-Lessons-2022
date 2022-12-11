"use strict" // строгий режим ВКЛ
console.log('====    Завданя масиви JS    ====');
function test(i = 'Немає даних для перевірки') {
    console.log(`test : ${i} type : ${typeof i} length : ${i.length} `);
}

// МАСИВИ
// Завдання №1
numTask(1)
let arr = ['Іван', 'Микита', 'Оля',];
test(arr);//перевірка
let newArr = arr;
newArr.push('Петро');
test(newArr);//перевірка
console.log(arr.length);
//Що буде виведено в консоль 

// Відповідь :
/*
    В консоль буде виведено довжину новоствореної змінної newArr,
    якій присвоєно масив (поки ще з 3 елементами).
    команда newArr.push('Петро'); додасть +1 елемент в кінець масиву.
    команда console.log(arr.length); виведе в консоль довжину масиву: 4 
*/







// Завдання №2
numTask(2);
/*
1) Створіть масив users з елементами "Іван" та  "Микита" . //!
2) Додайте "Оля" в кінець. //!
3) Замініть значення "Микита" на "Петро".
    3.1 перевірити чи має масив елемент із значенням "Микита"
    3.2 отримати індекс шуканого елемента
    3.3 замінити елемент 
4) Ваш код для пошуку повинен працювати для масивів із будь якою довжиною.//! тепер з будь якими змінними та видаляє усі співпадіння
5) Видаліть перший елемент масиву та покажіть його.
6) Вставте "Стефанія" та "Рома" на початок масиву
*/
let users = ['Іван', 'Микита', 'Іван', 'Іван', 'Іван', 'Микита', 'Микита'];//1)
users.push('Оля');//2)
let removedUser = 'Микита';
let newInsteadUser = 'Петро';
let removedUserIndex = users.indexOf(removedUser);
let startUsersLenght = users.length;// для коректного перебору масиву


for (let i = 0; i < users.length; i++) {
    console.log(users.indexOf(removedUser, i)); // отримати всі співпадіння пошуку за запитом.
}

// todo : створити перебір всього масиву ? якщо потрібно видалити та замінити вcіх Микит, скільки б їх не було у масиві.
// за допомогою for

if (users.includes(removedUser)) {
    for (let index = 0; index < startUsersLenght; index++) {
        let element = users[index];
        let equal = element === removedUser;//чи відповідає  елемент запиту
        if (equal) { //якщо відповідає
            delete users[index]; //видалити вміст елементу
            users[index] = newInsteadUser; //вставити новий вміст елементу
        }
    }
    let countElements = 0;// стіорюємо лічильник для перевірки дійсних значень  типу валідація масиву
    // test(users);
    for (let index = 0; index < users.length; index++) {
        let element = users[index];
        if (element) {// якщо елемент у масиві присутній додаємо +1 в лічильник
            countElements++;
        }
    }
    // users.sort();//відсортувати , щоб потім скоротити пусті/ недійсні значення 
    // test(countElements);// Довжину списку варто вкоротити до дійсної кількості елементів.
    // users.length = countElements;
    test(users);
} else {
    console.log(`Немає збігів за вашим запитом :[${removedUser}]`);
}
// за допомогою forEach
// array.forEach(element => {

// });

// if (users.includes(removedUser)) {   // якщо масив містьть хоч 1 елемент "Микита" , тоді ;


//     removedUser = users.splice(removedUserIndex, 1);
//     test(removedUser);

// } else {
//     console.log(`Немає збігів за вашим запитом :[${removedUser}]`);
// }
// users.includes('Микита')






// Завдання №3
// Завдання №4