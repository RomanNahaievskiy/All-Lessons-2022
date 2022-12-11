'use strict';

// Завдання 1
// Отримати в змінну елемент з атрибутом data-say-hi
// І прочитати значення цього атрибута
/* 
<div data-say-hy="yes">Привіт!</div>
 */
// Завдання 2
// Отримати в змінну елемент з текстом Йончі
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