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
4) Ваш код для пошуку повинен працювати для масивів із будь якою довжиною.
5) Видаліть перший елемент масиву та покажіть його.
6) Вставте "Стефанія" та "Рома" на початок масиву
*/
let users = ['Іван', 'Микита',];//1)
users.push('Оля');//2)
// створення змінних для подальших операцій
let removeUser = 'Микита'; // значення  елементу , який потрібно замінити
let newInsteadUser = 'Петро';// значення  елементу , на який потрібно замінити
let startUsersLenght = users.length;// змінна для коректного перебору масиву

// todo : створити перебір всього масиву ? якщо потрібно видалити та замінити вcіх Микит, скільки б їх не було у масиві.
// 3)&&4) Варіант 1
console.log(`Знайти ${removeUser}  та замінити на ${newInsteadUser}  в  масиві :  [${users}] варіант 1`);
if (users.includes(removeUser)) {//3.1)
    for (let i = 0; i < users.length; i++) {
        if (users.indexOf(removeUser, i) === 1) {//3.2 отримати всі співпадіння пошуку за запитом. users.indexOf(removedUser, i)якщо так то  отримаємо 1 інакше -1
            users.splice(i, 1, newInsteadUser);//3.3 замінити елемент
            console.log(`видаляю користувача ${users[i]} з індексом ${i} та замінюю на ${removeUser}`);
        } else {
            console.log(`Немає збігів за вашим запитом :[${removeUser}] по індексу ${i}`);
        }
    }
} else {
    console.log(`Немає збігів за вашим запитом :[${removeUser}]`);
}



// 3)&&4) Варіант 2 
/*
console.log(`Знайти ${removeUser}  та замінити на ${newInsteadUser}  в  масиві :  [${users}] - варіант 2`);
if (users.includes(removeUser)) {
    for (let index = 0; index < startUsersLenght; index++) {
        let element = users[index];
        let equal = element === removeUser;//чи відповідає  елемент запиту
        if (equal) { //якщо відповідає
            delete users[index]; //видалити вміст елементу
            console.log(` Видаляю ім'я користувача ${element} з елементу з індексом ${index}`);
            users[index] = newInsteadUser; //вставити новий вміст елементу
            console.log(` Додаю нове ім'я користувача ${newInsteadUser} в елемент з індексом ${index}`);
        }
    }

    // якщо лише видаляти таким чином, то потім потрібно привести масив до порядку шляхом сортування та вкорочення значень
    // Подальший код це реалізовує таким чином:
    let countElementsAr = 0;// стіорюємо лічильник для перевірки дійсних значень  типу валідація масиву
    for (let index = 0; index < users.length; index++) {
        let element = users[index];
        if (element) {// якщо елемент у масиві присутній додаємо +1 в лічильник
            countElementsAr++;
        }
    }
    // users.sort();//відсортувати , щоб потім скоротити пусті/ недійсні значення - зміниться полядок елементів: дійсні значення займуть перші місця.
    // test(countElements);// Довжину списку варто вкоротити до дійсної кількості елементів.
    // users.length = countElementsAr;
    // test(users);
} else {
    console.log(`Немає збігів за вашим запитом :[${removedUser}]`);
}*/
// 5)
console.log(users.shift());
// 6)
users.unshift('Стефанія', "Рома");
test(users)





// Завдання №3
numTask(3);
// Видалити елемент "Микита" та вивести його в змінну
users = ['Іван', 'Микита', 'Оля']
let removedUser = users.splice(1, 1);
test(removedUser);

// Завдання №4
numTask(4);
// Зробити з рядка Ваня Іштван Оля масив
let str = "Ваня,Іштван,Оля";
let newArrFromString = str.split(',');
test(newArrFromString);