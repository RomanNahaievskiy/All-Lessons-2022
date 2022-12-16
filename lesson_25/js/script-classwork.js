"use strict";// врубаю строгу училку
function log(ithem) {
    console.log(ithem);
}
function test(ithem) {
    console.log(`test :${ithem} /type : ${typeof ithem} /lenght : ${ithem.lenght} `);
}
//!Клонування елементу
//! cloneNode() - клонує сам об'єкт
//! cloneNode(true) - клонує об'єкт із всім вмістом

const block = document.querySelector('.block');
const blockClone = block.cloneNode();
test(blockClone);
log(blockClone);
const blockCloneTrue = block.cloneNode(true);
test(blockCloneTrue);
log(blockCloneTrue);

//! Видалення об'єкту
//! object.remove();  - видаляє об'єкт із класом object із html 
const blockTwo = document.querySelector('.block-two');
blockTwo.remove();


//========================================================================================================================================================

//! СТИЛІ ТА КЛАСИ 

//! className - перезапис класу
//! classlist - додавання класу до уже існуючих класів

const blockThree = document.querySelector('.block-three');
blockThree.className = "page__h-three"; // className - перезапис класу

const sectionOne = document.querySelector('.page__section-one');
const sectionTwo = document.querySelector('.page__section-two');
const sectionThree = document.querySelector('.page__section-three');
// додаємо вказаний клас
// object.classList.add('class-name');
// видаляємо вказаний клас
// object.classList.remove('class-name');
// додати обраний клас, якщо нема і видалити обраний клас , якщо є 
// object.classList.toggle('class-name');
// перевіряє чи є вказаний клас
// object.classList.contains('class-name');

sectionOne.classList.add('section');// додаємо вказаний клас
sectionOne.classList.remove('page__section-one'); // видаляємо вказаний клас
sectionTwo.classList.add('section');// додаємо вказаний клас
sectionTwo.classList.remove('page__section-two');// видаляємо вказаний клас
sectionThree.classList.add('section');// додаємо вказаний клас
sectionThree.classList.remove('page__section-three');// видаляємо вказаний клас
log(sectionOne.classList.contains('page__section-one')); //gеревіряємо чи є вказаний клас
log(sectionOne.classList.contains('section')); //gеревіряємо чи є вказаний клас
// можливо використовувати у розгалуженнях / функціях?
if (!sectionThree.classList.contains('page__section-three')) {
    //code
    log('класу не має ');
}


//! Керування стилями з JS

sectionOne.style.backgroundColor = "#B8860B";
sectionOne.style.paddingTop = "2rem";
sectionOne.style.paddingBottom = "2rem";
sectionTwo.style.backgroundColor = "#DAA520";
sectionTwo.style.paddingTop = "2rem";
sectionTwo.style.paddingBottom = "2rem";
// sectionThree.style.backgroundColor = "#0737f7";
// sectionThree.style.paddingTop = "2rem";
// sectionThree.style.paddingBottom = "2rem";
const sectionFour = document.querySelector('.page__section-four')
sectionFour.style.paddingTop = "2rem";
sectionFour.style.paddingBottom = "2rem";
sectionFour.style.backgroundColor = "#BDB76B";
// універсальні лапки дозволяють інтегрувати інші дані.
function rem(value) {
    return value * 16;
}
let multyplyPix = 1.2;
let fontSize = rem(1) + multyplyPix;
sectionTwo.style.fontSize = `${fontSize}px`;
// sectionTwo.style.fontSize = ''; // встановлення по замовчуванню коли передаємо пустий рядок.

// Перезапис стилів
sectionThree.style.cssText = `
    background-color: #EEE8AA;
    padding: 2rem 0rem;
    color: #fff;
`;// не варто злоупотребляти
sectionThree.style.color = `#f70`// Переаписуємо значення колір

//! Отримання стилів (його значення)
// getComputedStyle(element) - отримати вичислені стилі element в пікселях
const sectionOneStyle = getComputedStyle(sectionOne);
log(sectionOneStyle);// виводимо в консоль колекцію усіх стилів
const paddingTopSecOne = sectionOneStyle.paddingTop;
const fzSecOne = sectionOneStyle.fontSize;
log(paddingTopSecOne); // виводимо в консоль значення властивості padding-top об'єкта sectionOne із змінної sectionOneStyle , що містить всі стилі.
log(fzSecOne);// отримані стилі кажуть що розмір шрифту 14px, хоча вказав 1rem
// ! це значить що в моєму браузері чомусь значення шрифта по замовчуванню не 16 а 14 і я нічого не міняв

//========================================================================================================================================================

//! Робота з атрибутами
//  перевіряємо навність атибута
//! object.hasAttribute('name');
//  отримуємо значення атибута
//! object.getAttribute('name');
// Встановлюємо значення атрбута
//! object.setAttribute('name','value');
// Видалення атрибута
//! object.removeAttribute('name');

// для backend розробників дані краще опрацьовувати з html через data-атрибути
// тому дані котрі будуть змінюватися краще вивести в data атрибути
//!DATA атрибути завжди повертають рядок
//? для переведення значень в числові можна використовувати parseInt або унарний оператор [ + ]
const speed = +sectionTwo.dataset.animationSpeed;
log(speed);
sectionThree.dataset.someAttr = 'someValue'// додаємо атрибут data-some-attr до об'єкту sectionThree
log(sectionThree.hasAttribute('data-some-attr'));// перевіримо наш доданий атрибут , але пишемо повністю назву

// атрибут hidden типу аналог css - > display: none;
//! object.hidden = true;
//! object.hidden = false;

// sectionTwo.hidden = true; - прибирає з верстки



//========================================================================================================================================================
// РОЗМІРИ І КООРДИНАТИ 2 ЧАСТИНА
// розміри вікна браузера із полосами прокрутки
// об'єкт window
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
console.log(windowWidth);
console.log(windowHeight);

// розміри робочої області в браузері
// об'єкт body
// 
const mainElement = document.documentElement;
const windowClientWidth = mainElement.clientWidth;
const windowClientHeight = mainElement.clientHeight;
console.log(windowClientWidth);
console.log(windowClientHeight);

// кілкість прокручених пікселів
// об'єкт window
const windowScrollTop = window.scrollY;
const windowScrollLeft = window.scrollX;
console.log(windowScrollTop);
console.log(windowScrollLeft);

// керування прокруткою
// scrollBy - прокрутка відносно поточного положення.
window.scrollBy(0, 50);
console.log(window.scrollY);

// scrollTo -прокрутка відносо початку документа
window.scrollTo({
    top: 50,//прокрутити від початку документа на 500 пікселів
    left: 0,// прокрутити відносно лівого краю на 0 пікскелів
    behavior: "smooth"//тип поведінки під час прокруттки 
});

// elem.scrollIntoView() - прокрутка до об'єкта - працює при певній події 
const testBlock = document.querySelector('.test-block');

// todo створитиподію в html
function scrollToTestBlock() {
    testBlock.scrollIntoView({
        //"start","center", "end" або "nearest" за замовчуванням "center"
        block: "center",
        inline: "center",
        behavior: "smooth"//тип поведінки під час прокруттки 
    });
}

// Позиція об'єкта відносно кого він позиціонований
// offsetParent - батьківський об'єкт (у якого position відмінни від static)
console.log(testBlock.offsetParent)
// offsetLeft & offsetTop

console.log(testBlock.offsetTop);
console.log(testBlock.offsetLeft);

// Розміри - загальні розміри
// offsetWidth & offsetHeight
console.log(testBlock.offsetWidth);
console.log(testBlock.offsetHeight);

// Координати об'єкта
// getBoundingClientRect() - відносна вікна браузера
console.log(testBlock.getBoundingClientRect());
console.log(testBlock.getBoundingClientRect().top);
console.log(testBlock.getBoundingClientRect().left);

// Отримання jб'кта по координатах  document.elementFromPoint(x, y);

const elem = document.elementFromPoint(100, 100);
console.log(elem);
// intersection Observer
// https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API


// ПОДІЇ EVENTS
// Синтаксис події
const link = document.querySelector('.page__link.link');

link.onclick = function () { // додавання однієї - єдиної  події (неможливо додати кілька подій)
    // code
    console.log('Виконання коду після настання події onclick');
}
link.onclick = null;
// прослуховувач подій (може додавати кілька подій одночасно)
// elem/document.addEventListner("Ім'я події", func , options); -
// elem/document.addEventListner("Ім'я події", ()=>{ code }, options); -


//! події навантажуть систему 




/*!

link.addEventListener("click", () => {
    console.log('123');
});
//&
link.removeEventListener("click", () => {
    console.log('123');
});
//! для видалення події не спрацює ,
// так як видалення вимагає таку ж функцію, ( а не тотожну ), 
// а такий запис не може послатися на вище записану функцію,
// бо вона не збережена в змінну тут відбувається призначення нової функції,
// що !== одне і те ж!


*/
/*
// додаткові параметри, які будуть знімати подію автоматично
const options = {
    "capture": false,//фаза на якій повинен спрацювати обробник події
    "once": false,// якщо true , тоді обробник буде автоматично виделений 
    // після виконання
    "passive": false //  якщо true , то вказує що обробник ніколи не викликає 
    // preventDefault() який вимикає дію за замовчуванням тега на який підключається
}
link.addEventListener("click", linkAction, options);
function linkAction(event) {
    console.log('321');
    link.removeEventListener("click", linkAction);
    //! link.removeEventListener("click", linkAction()); - Рекурсія (infinity : until browser die)
}
options = {
    "capture": false,//фаза на якій повинен спрацювати обробник події
    "once": true,// якщо true , тоді обробник буде автоматично виделений 
    // після виконання
    "passive": false //  якщо true , то вказує що обробник ніколи не викликає 
    // preventDefault() який вимикає дію за замовчуванням тега на який підключається
}
*/



function linkActionTwo(event) {
    if (link.dataset.google === "false") {
        console.log('preventDefault');
        event.preventDefault();// відключаємо дію за замовчування
    }
}
link.addEventListener("click", linkActionTwo);

// Додавання події до кожного елементу колекціїї через перебір масиву for each 2:11

const links = document.querySelectorAll('.page__link');// отримую колекцію елементів з класом page__link
// перебираю отриману колекцію методом for Each
links.forEach(link => {
    link.addEventListener("click", func)//навішую на кожен елемент масиву подію
    console.log('addEventListner');
});// даний метод також не дуже актуальний так як надто багато подій , які навантажують систему

function func() {
    console.log(` коли ЗП ?`);
}

// Делегування подій
//1)вішаю прослушку на увесь документ.
document.addEventListener("click", active,);
//2) створюю функцію, яка розпізнає (тип. клас. атрибут) елемента , щоб виконати з ним дію

function active(event) {
    const targetItem = event.target; // створюю константу , якій присвоюється об'єкт на який клацає користувач.
    // далі можна написати багато розгалужень перевірок за типом/ класом . атрибутом
    if (targetItem.closest('.link')) { // якщо натиснутий користувачем об'єкт має клас link ,
        // або цей клас у найближчого його батьківського елемента
        // ...code
    }

    if (targetItem.closest('.classname')) { // якщо натиснутий користувачем об'єкт має клас classname ,
        // або цей клас у найближчого його батьківського елемента
        // ...code
    }
}
// тип події 
// console.log(event.type);
// об'єкт на якому стоворив обробник 
// console.log(event.target);
// Об'єкт до якого призначений обробник
// console.log(eventCurrenttarget);
// положення курсора по вісі х горизонтальна відносно вікна браузера
// console.log(event.clientX);
// положення курсора по вісі Y вертикальна відносно вікна браузера
// console.log(event.clientY); 
// положення курсора по вісі X горизонтальна відносно документа
// console.log(event.pageX); 
// положення курсора по вісі Y вертикальна відносно документа
// console.log(event.pageY); 
//  Усі деталі події
//  console.log(event);


//  ОНОВНІ ПОДІЇ
/*
Основні події миші (не всі)- click, mouseenter- наведення миші  типу hover, mouseleave- забирання миші типу відсутність hover..., mousemoove

 
*/
const mouseBlock = document.querySelector('.mouse'); // отримали у змінну об'єкт
const ball = document.querySelector('.mouse__ball');// отримати м'яч


mouseBlock.addEventListener('mouseenter', mouseAction);  // додали прослуховування події за типом введення миші
mouseBlock.addEventListener('mouseleave', mouseAction);  // додали прослуховування події за типом введення миші
mouseBlock.addEventListener('mousemove', mouseAction);  // додали прослуховування події за типом введення миші

function mouseAction(event) {
    if (event.type === "mouseenter") {
        // code in hover код при наведенні

    }
    if (event.type === "mouseleave") {
        // code ...   код при переведені 

    }
    if (event.type === "mousemove") {// постійно відпрацьовує
        // code ...   код при переведені 
        ball.style.cssText = `
        top : ${event.pageY - 14}px;
        left : ${event.pageX - 14}px;
        `;
        console.log(`its work`)
    }
}

//Scroll
// працює на window

window.addEventListener('scroll', wScroll); // призначаю вікну 
// браузера обробник подій типу скрол з функцією wScroll

function wScroll(e) { // опис функції wScroll
    console.log(scrollY);
    console.log(sectionThree.getBoundingClientRect().top);
}


//! відслідковування завантаження сторінки 
window.addEventListener("DOMContentLoaded", domLoaded); // призначаю вікну
// браузера обробник подій типу DOMContentLoaded 
// з функцією domLoadet 

// Такий підхід дозволить коректно працювати із dom-структурою
function domLoaded(e) {// декларування та опис функції domLoadet
    console.log('Ура html сторінка завантажена але зовнішні ресурси (підключаємі img / style )ще можуть бути не завантаженими');
}

window.addEventListener("load", pageLoaded); // призначаю вікну браузера 
// обробник подій типу load із функцією pageLoadet

function pageLoaded(e) { // декларування та опис функції pageLoadet
    console.log('Ура вся сторінка завантажена разом із зображеннями та файлами стилів')

}

//  Приклад з анімацією ? коли сторінка повністю завантажена

window.addEventListener("load", successLoadedPage);
function successLoadedPage(e) {
    document.documentElement.classList.add("loaded");// додаю клас до body
}
