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

sectionOne.style.backgroundColor = "#f73707";
sectionOne.style.paddingTop = "2rem";
sectionOne.style.paddingBottom = "2rem";
sectionTwo.style.backgroundColor = "#37f707";
sectionTwo.style.paddingTop = "2rem";
sectionTwo.style.paddingBottom = "2rem";
// sectionThree.style.backgroundColor = "#0737f7";
// sectionThree.style.paddingTop = "2rem";
// sectionThree.style.paddingBottom = "2rem";

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
    background-color: #232323;
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


//! Робота з атрибутами
//  перевіряємо навність атибута
//! object.hasAttribute('name');
//  отримуємо значення атибута
//! object.getAttribute('name');
// Встановлюємо значення атрбута
//! object.setAttribute('name','value');
// Видалення атрибута
//! object.removeAttribute('name');

