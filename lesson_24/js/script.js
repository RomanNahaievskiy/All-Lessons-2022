"use strict" // Врубаємо Строгий режим.
console.log('====   Вчимо JS    ====\n====    Урок 24    ====\n----   Опрацювання уроку    ----');

// МАСИВИ
let someArray = [10, 20, 5];
console.log(typeof someArray);
console.log(someArray);
console.log(someArray.length);
console.log('====  масив  ====');
let usersNames = ["Рома", "Вадим", "Аліна"];
console.log(usersNames);
console.log(usersNames[0]);
// Перебір масиву циклом for 
console.log('====  масив перебір циклом  ====');
for (let i = 0; i < usersNames.length; i++) {
    console.log(usersNames[i]);
}
console.log('====  масив перебір методом forEach ====');
// Метод перебору масиву (стрілочна функція) (element (ЖЕКА FLS:"Краще елемент назвати в однині типу : userName, а масив даних в множині (ось вам користуйтеся)") - не потрібно оголошувати , елемент набуває тих же значень що і вище описаний масив із індексом usersNames[i]  )
usersNames.forEach(element => {
    console.log(element);
});
console.log('====  масив перебір методом + index ====');
usersNames.forEach((element, index) => {
    console.log(index);
    console.log(element);
});
console.log('====  масив додавання елементу методом push в кінець масиву====');
usersNames.push("Жека");
console.log(usersNames);
console.log('====  масив пошук ====');
console.log(usersNames.includes("Жека"));

console.log('====  масив додавання елемента в умовному розгалуженні ====');
if (!usersNames.includes(10)) {// інвертована умова повертає TRUE (де перевіряється чи є в масиві 10?)
    usersNames.push(10);
    console.log(usersNames)
}
console.log('====  масив  чи це масив перевірка  isArray ====');
console.log(Array.isArray(usersNames));
console.log('====  масив сортування чисел sort ====');
let arrTwo = [8, 22, 1];
console.log(arrTwo.sort()); // Порядок сортування за замовчуванням є зростаючим, побудованим на основі перетворення елементів у рядки, а потім порівняння їхніх послідовностей значень одиниць коду UTF-16.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function compareNumer(a, b) {
    // console.log(`Порівнюємо ${a} і ${b}`);
    //     if (a > b) return 1;
    //     if (a == b) return 0;
    //     if (a < b) return -1;

    return a - b;
}
console.log(arrTwo.sort(compareNumer));
//? compareNumeric - це якась стандартна функція ? - ці назву ми змінюємо - все працює. ! compareFn(a,b)
//? Яким чином функція отримує аргументи із масиву? - !a і b є аргументами порівняння параметру
//? Яким чином .sort виконує сортування .sort(тут записується умова ?)!- тут записується виклик або  сама рядкова функція порівняння чисел
// console.log(arrTwo.sort());
//? що тоді буде якщо в умові вказати зворотній порядок?
// console.log(arrTwo.sort());
console.log("====  масив елементи об`єднуютья в рядок .join ====");
let usersNamesStr = usersNames.join(';'); // в дужках ми обираємо розділювач
console.log(usersNamesStr);

// Функції https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
console.log('Functions')
// оголоошення функції
/* function ім'я(парметри) {
    !тіло функції
}
ім'я повинно бути зрозумілим  що робить функція
*/
function showMessage() {
    console.log('Повідомлення');
}

// виклик функції
showMessage();

const numOne = 10;
const numTwo = 20;

function sumNum(a, b) {
    return a + b;// return повертає результат
}
console.log(sumNum(numOne, numTwo));
//  Область видимості працює і для функцій. Ящо змінна створена в тілі функцї, то її буде невидно за її межами.
// змінна може містити функцію. таке присвоєння буде мати назву вункціональний вираз.
// стрілочні функції мають інший синтаксис let somArrowFunc=(text)=>console.log(text); і її неможливо записати її в кідлька рядок
// Функція може мати параметр із значенням  за замовчуванням

let somArrowFunc = (text = "Здрастье!") => console.log(text);
somArrowFunc('Привіт');
somArrowFunc();


// ==================== DOM =========================== )DOOM  або Dominic Toretto


// WINDOW
let wWidht = window.innerWidth;  // ширина вікна в'юпорта
let wHeight = window.innerHeight;  // висота  вікна в'юпорта

// Navigator 
console.log(navigator.userAgent);//інформація про машину +браузер клієнта
if (navigator.userAgent.includes('Chrome')) {
    console.log('Chrome Browser');
} else if (navigator.userAgent.includes('Firefox')) {
    console.log('Firefox Browser');
}
// Location - доступ до адресного рядка

console.log(location.href);
// location.href = 'https://google.com'--- перенаправлення користувача

// Alert
// alert('Увага повідомлення');
// Confirm
// let confirmAnswer = confirm("Очікування підтвердження") Поверне TRUE або FALSE залежно від вибору клієнта
// Prompt
// let promptAnswer=prompt("Запитання"); - поверне рядок, якщо так  або null, якщо ні

// Documetnm Object Model
// Об'єктна модель документа (cheat codes) - чіти )) 
// !важливо не змінювати назви змінних
const htmlElement = document.documentElement;// отримати увесь html код 
const headElement = document.head; // отримати тег head
const bodyElement = document.body; // отримати тег body
const firstfChildNode = bodyElement.firstfChildNode; // отримати перший дочірній елемент body який не очевидний якийсь відступ табуляція
const lastChildNode = bodyElement.lastfChildNode; // отримати останній дочірній елемент body який не очевидний якийсь відступ табуляція

const firstChild = bodyElement.firstElementChild; //отримати перший дочірній елемент
const lastfChild = bodyElement.lastElementChild; //отримати останній дочірній елемент важливо не змінювати назви змінних

const childNodes = bodyElement.children; //усі дочірні елементи (колекція) схоже на масив, але не всі методи масивів працюють з колекціями  
console.log(childNodes);
console.log(' за допомогою циклу for...of');
for (let childNode of childNodes) {
    console.log(childNode);
}
// або циклом for
console.log(' за допомогою циклу for');
for (let i = 0; i < childNodes.length; ++i) {
    console.log(childNodes[i]);
}


// навігація до батьківських та сусідніх елементів
// const bodyElement=document.body // перший етап - обов'язковий
const previusSibiling = bodyElement.previousElementSibling; // отримати <head></head>
console.log(previusSibiling); // очікуємо <head></>
const nextSibiling = bodyElement.nextElementSibling;// отримати наступний <tag></tag>
console.log(nextSibiling); // очікуємо null
const parentElement = bodyElement.parentElement;// отримати батьківський <tag></tag>
console.log(parentElement); // очікуємо увесь батьківський <html></html>

//!!! навігація  (Пошук та отримання двільного елементу)
const someObject = document.querySelector('.js');// Пошук та отримання двільного елементу в document дужках вказуємо css селектор Пошук зупиняється після знайденого першого елементу, змінній присвоюється один результат
console.log(someObject);

const someObjects = document.querySelectorAll('.ok')// отримати [Статичну колекцію] список всіх знайжених елементів на сторінці
console.log(someObjects);
someObjects.forEach(someObject => { console.log(someObject); })

// зміна css властивостей із js
someObjects.forEach(someObject => {
    someObject.style.color = 'yellowgreen';
})
// Пошук у будь-якому об'єкті
const list = document.querySelector('.list');// Пошук та отримання двільного елементу (в  дужках вказуємо css селектор) Пошук зупиняється після знайденого першого елементу, змінній присвоюється один результат
const listItem = list.querySelectorAll('.list__item');//Отримання всіх елементів з класом .list__item
console.log(listItem);

//Closest
// Пошук батьківського об'єкту
// перевірка наявності батьківського об'єкту
// перевірка й самого об'єкта , чи є селектор у самого об'єкта

const pageSection = document.querySelector('.page__section');
const isSelectorParent = pageSection.closest('.page');

if (isSelectorParent) {
    console.log('так є');
} else {
    console.log('ні, не має');
}


// Зміна документу

//innerHTML - отримати вміст об'єкту включно з тегами
//textContent - отримати текст об'єкту  без тегів (ігноруючи теги)
