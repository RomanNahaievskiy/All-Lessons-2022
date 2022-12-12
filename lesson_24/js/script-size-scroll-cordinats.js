"use strict";
console.log('==== Розміри , прокрутка , координати ====');
//========================================================================================================================================================

//? Задача 1
//todo Дізнатися шиирину полоси прокрутки скролбара
let sizeScrollbar;
const pageElement = document.documentElement; // Звертаюся до html
const pageWidth = pageElement.clientWidth; // Дізнаюся доступну ширину робочої області
const windowWidht = window.innerWidth; // Дізнаюся ширину в'юпорта
sizeScrollbar = windowWidht - pageWidth;// Дізнаюся ширину скролбара= ширину в'юпорта - ширину робочої області
console.log(`Ширина скролбара`)
console.log(sizeScrollbar);
//========================================================================================================================================================

//? Задача 2
//todo Змусити браузар прокрутитися на 100px зверху через секунду після відкриття сторінки
let startScrollValue = 100; // задане значення
let windowScrollTop;
function setScrollBy(startScrollValue) {// створюю функцію для подальшого її виклику з часовою затримкою
    window.scrollBy(0, startScrollValue);// Прокручую вікно браузера на задане значення
    windowScrollTop = window.scrollY;// інформація щодо поточного прокуручування 
    console.log(windowScrollTop);
}
setTimeout(setScrollBy, 1000, startScrollValue);// встановлюю затримку виклику функції 1с, але це не достовірна 1 с.
//========================================================================================================================================================

//? Задача 3
//todo Отримайте координати різних трьох об'єктів
let objectHtml = document.documentElement;// звертаюся до html
let blockElement = objectHtml.querySelector('.page__block')// отримую перший блок в документі  з класом .page__block
let y = blockElement.offsetTop // !Отрмую координати- зсув по Х відносно його батьківського елемента !по тегах
let x = blockElement.offsetLeft // !Отрмую координати зсув по У відносно його батьківського елемента !по тегах
console.log(blockElement);
console.log(`положення відносно батьківського елементу вертикальне: ${y}px`);//1)
console.log(`положення відносно батьківського елементу горизонтальне: ${x}px`);//1)
let parentElementOfElement = blockElement.offsetParent// отримую батьківський елемент
console.log(`батьківський елемент .page__block :`);
console.log(parentElementOfElement);
console.log(`абсолютне положення батьківського елементa .page`);

