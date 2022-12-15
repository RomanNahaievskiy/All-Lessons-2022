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
const link = document.querySelector('.page__link')

// відслідковування завантаження сторінки 