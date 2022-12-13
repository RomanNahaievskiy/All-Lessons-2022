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
let y = blockElement.offsetTop // !Отрмую розмір зсув по Х відносно його батьківського елемента !по тегах
let x = blockElement.offsetLeft // !Отрмую розмір зсув по У відносно його батьківського елемента !по тегах
console.log(blockElement);
console.log(`положення відносно батьківського елементу вертикальне: ${y}px`);//1) Не зовсім координати
console.log(`положення відносно батьківського елементу горизонтальне: ${x}px`);//1) Не зовсім координати більше розмір зсуву
let parentElementOfElement = blockElement.offsetParent// отримую батьківський елемент
console.log(`батьківський елемент .page__block :`);
console.log(parentElementOfElement);
console.log(`абсолютне положення батьківського елементa .page`);

let blockElementCordn = objectHtml.getBoundingClientRect()// Отримую координати відносно в'юпорта
console.log(blockElementCordn);//вивожу в консоль
x = objectHtml.getBoundingClientRect().left;// Отримую координати х (по горизонталі) відносно в'юпорта
y = objectHtml.getBoundingClientRect().top;// Отримую координати y (по вертикалі) відносно в'юпорта
console.log(x, y);//вивожу в консоль


// Отримую координати відносно документа шляхом додавання лічильника пікселів прокрутки по вісі у або/ і по вісі х
let blockElementTwo = objectHtml.querySelector('.list__item')// Отримую перший блок в документі  з класом .list__item
let blockElementCordnTwo = blockElementTwo.getBoundingClientRect();// Отримую його координати відносно в'юпорта
x = blockElementTwo.getBoundingClientRect().left;// Отримую координати х (по горизонталі) відносно в'юпорта
y = blockElementTwo.getBoundingClientRect().top;// Отримую координати y (по вертикалі) відносно в'юпорта
console.log(x, y);//вивожу в консоль
let xP = x + window.scrollX;
let yP = y + window.scrollY;
console.log(xP, yP);//вивожу в консоль
//========================================================================================================================================================
//=================================Використав функцію==============================================================================================================
function getCord(element) {
    x = element.getBoundingClientRect().left;// Отримую координати х (по горизонталі) відносно в'юпорта
    y = element.getBoundingClientRect().top;// Отримую координати y (по вертикалі) відносно в'юпорта
    console.log(x, y);//вивожу в консоль
    let xP = x + window.scrollX;
    let yP = y + window.scrollY;
    console.log(xP, yP);//вивожу в консоль
}

//========================================================================================================================================================

// +1 отримую координати сусіднього тегу нижче по коду
let blockElementThree = blockElementTwo.nextElementSibling;// Отримав елемент 
getCord(blockElementThree); // віддав в функцію


// +2 Отримую елемент
let blockElementFour = objectHtml.querySelector('.list-last');
getCord(blockElementFour);