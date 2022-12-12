'use strict';

// Завдання 1
// Отримати в змінну елемент з атрибутом data-say-hi 1.1)
//? І прочитати значення цього атрибута 1.2)
/* 
<div data-say-hy="yes">Привіт!</div>
let sayHi=document.querrySelector('[data-say-hy]') //1.1)

 */
// Завдання 2
// Отримати в змінну елемент з текстом Йончі
let serchContent = 'Йончі'
// todo 2.1) отримати о'єкт з класом 2 завдання , для подальшого ортримання коректної колекції елементів - тегів li
let objectTwoTask = document.querySelector('.task-two'); //отримання об'єкту з класом 
// 2.2)
let someElementCol = objectTwoTask.querySelectorAll('li');// отримання колекції  елементів - тегів li із об'єкту "Завдання-2"
// todo виконати пошук, перебрати колекцію, знайти там співпадіння та присвоїти його за допомогою textContent змінній someElementContent
let someElement;// створення змінної для результату пошуку за ключем "Йончі" ТЕ ЩО МИ ШУКАЄМО
let someElementIndex; // створення змінної для індексу шуканого елементу тобто його порядкового номеру у колекції.
//? Як зробити пошук у колекції тегів за вмістом тексту
// якщо колекця схожа на масив або список то його можна перебирати  по індексах?
// якщо порівнювати кожен вміст елементу із запитом , тоді ми отримажмо індекс а значить порядковий номер елементу по якому ми зможемо звертатися 
for (i = 0; i < someElementCol.length; i++) {
    if (someElementCol[i].textContent === serchContent) {
        someElementIndex = i;
    }
}
//? чи буде порядок елементів у колекції  ===  порядку елементів - тегів у структурі DOM 
someElement = querySelector(/*'результат пошуку'*/)
let someElementContent = someElement.textContent()
// html
/*
<ul>
    <li>Корчі</li>
    <li>Йончі</li>
</ul>
*/
// Завдання 3
// Отримати в змінну колекцію елементів з класом like
// html
/*
<div class="like"></div>
<div class="subscribe"></div>
<div class="like subscribe"></div>
*/
// Завдання 4
// Куди буде додано <li>Текст</li>

// JS
const list = document.querySelectorAll('ul');
list.insertAdjacentHTML(
    'beforeend',
    '<li>Текст</li>'
)
    // html
/*
<ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
</ul> 
*/