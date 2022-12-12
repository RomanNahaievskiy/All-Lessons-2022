'use strict';


numTask(1);
// Завдання 1
//? Отримати в змінну елемент з атрибутом data-say-hi 1.1)
//? І прочитати значення цього атрибута- вивести в консоль 1.2)
// html
/* 
<div data-say-hi="yes">Привіт!</div>
*/

// Виконання №1 :
const sayHi = document.querySelector('[data-say-hi]'); //1.1)
console.log(sayHi)// 1.2)
console.log("значення атрибута [data-say-hi] : " + sayHi.dataset.sayHi)// 1.2)








numTask(2);
// Завдання 2
//? Отримати в змінну елемент з текстом Йончі

// html
/*
<ul>
    <li>Корчі</li>
    <li>Йончі</li>
</ul>
*/

// Виконання №2
// todo 2.1) отримати об'єкт з класом 2 завдання , для  ортримання коректної колекції li
// todo виконати пошук, перебрати колекцію, знайти там співпадіння 
// todo присвоїти його за допомогою textContent змінній someElement

let serchContent = 'Йончі' // ключ пошуку
let objectTwoTask = document.querySelector('.task-two'); //2.1) отримання об'єкту з класом 
// 2.2)
let someElementCol = objectTwoTask.querySelectorAll('li');// отримання колекції  елементів - тегів li із об'єкту "Завдання-2"
let someElement;// створення змінної для результату пошуку за ключем "Йончі" ТЕ ЩО МИ ШУКАЄМО
for (let item of someElementCol) {// перебір колекції з метою пошуку співпадінь з ключовим словом
    if (item.textContent === serchContent) {
        someElement = item;
    }
}
log(someElement);// вивід елементу в консоль










numTask(3);
// Завдання 3
//? Отримати в змінну колекцію елементів з класом like

// html
/*
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>
*/

//  Виконання №3
let varThreeElementsCol = document.querySelectorAll('.like')
log(varThreeElementsCol);








numTask(4);
// Завдання 4
//? Куди буде додано <li>Текст</li>

// html
/*
<ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
</ul> 
*/

// JS
/*
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
    'beforeend',
    '<li>Текст</li>'
)*/

// Виконання №4
// JS
//! const list = document.querySelectorAll('ul'); отримання колекції, варто отримати елемент (document.querySelector('ul'))
const listTaskFour = document.querySelector('ul'); /* варто отримати конкретний елемент , 
адже ul на сторінці багато, тому додано <li>Текст</li> буде  до першого ліпшого <ul>
*/
listTaskFour.insertAdjacentHTML( //! не працює з колекцією.
    'beforeend',
    '<li>Текст</li>'// Буде додано в кінець в середину об'єкта
)
log(listTaskFour);

