"use strict"//Сторогий режимчик

/*
Відслідковувати  події допомагають спеціальні обробники подій

Будь-якій події можна призначити обробника, тобто функцію , 
яка спрацює образу ж після настання модії.
Сама завдяки обробникам подій JavaScript може відслідковувати події 
та взаємодіяти із діями користувача

існує кілька способів призначити обробника події
*/

// Використання DOM об'єкта 

const button = document.querySelector('.button'); // отримуємо в змінну об'єкт, 
// з яким будемо взаємодіяти.

/*
button.onclick = function () { // для об'єкта призначаємо обробник подій , який відслідковує клік
    console.log('click !'); // та виконує цю функцію
}
*/
// інший спосіб :
/*
button.onclick = nameFunction; // для об'єкта призначаємо обробник подій із функцією (пишемо без дужок ()),
//  який відслідковує клік та виконує призначену функцію
*/

/*
// декларування/оголошення та опис фнкції
function nameFunction() {
    console.log('implementation some code in this function');
}
*/
//! такі способи призначення обробника подій не дають можливості одночасниго призначення кількохх обробників
/*
button.onclick = function () {
    console.log('click');
}
button.onclick = function () {
    console.log('clack =( !!');
}
*/
// addEventListner & removeEventListner

/*
цей основний спосіб призначення\видалення обробника подій може оперувати багатьма подіями одночасно

element.addEventListner(event, handler[, options]);

*/


// button.addEventListener('click', function (e) {
//     console.log('click ?');
// });
// button.addEventListener('click', function (e) {
//     console.log('clack =) !');
// });


// або інший варіант запису , де буде використана вже оголошена , чи пізніше оголошена функція
function consoleClick() {
    console.log('click ?');
}

button.addEventListener("click", consoleClick);
button.addEventListener("click", consoleClack);

// Видалення обробника

function consoleClack() {
    console.log('clack =) !');
    button.removeEventListener("click", consoleClack);
}

// додаткові опції , їх можна прописати рядком образу під час призначенння  обробника
const options = {
    "capture": false, // фаза - (докладніше про "Занурення" та "Виринання"), на котрій спрацює обробник
    "once": false, // true  - обробник буде видалений після першого виконання
    "passive": false // true - обробник ніколи не викличе preventDefault()
}
/*
button.addEventListener("click", consoleClack,options);
або
button.addEventListener("click", consoleClack, { "capture": false, "once": false, "passive": false});
*/

// об'єкт події
//========================================================================================================================================================

/*
для того , щоб добре та якісно опрацювати подію, 
можуть знадобитися деталі конкретної події , що відбулася.
Не просто якийсь "Клік" чи "Натискання клавіші", а й інші ,
наприклад координати вказівника миші , яка саме клавіша натиснута , і так далі..
Коли відбувається подія , браузер створює об'єкт події:  event , 
записує в нього всі деталі і передає його в якості аргумента (event) функції обробника
*/
function showConsPrOfObj(event) {
    console.log(event.type); // тип події , яка відбулася
    console.log(event.target); // об'єкт html на якому відбулася дана подія
    console.log(event.currentTarget); // об'єкт html на якому (безпосередньо) відбулася дана подія
    console.log(event.clientX); // позиція курсора по вісі x
    console.log(event.clientY); // позиція курсора по вісі y
    // всі деталі події
    console.log(event)
}
button.addEventListener("click", showConsPrOfObj);
button.addEventListener("mousemove", showConsPrOfObj);
button.addEventListener("mousemove", showConsPrOfObj);


// Виринання подій (пріоритетність вкладеності)
//========================================================================================================================================================

// коли на html елементі відбувається подія, обробники подій спершу спрацьовують на цьому ж елементі
// потім на його батьківському елемнті, потім вище , і так далі по  DOM структурі ))

// event.stopPropagation(); - зупиняє виринання на поточному елементі (до поточного включно) Використовувати варто дуже обережно
// event.target -  повертає html об'єкт до якого застосовано обробник подій 
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

block.addEventListener("click", function (event) {
    console.log("Клік на блок!");

});
blockInner.addEventListener("click", function (event) {
    console.log("Клік на блок другого рівня");
    event.stopPropagation();
});
blockInnerInner.addEventListener("click", function (event) {
    console.log("Клік на блок третього рівня");
});

// Занурення подій
//========================================================================================================================================================

/*
виринання подій відбудеться лише після занурення
керувати зануренням можемо парпметром опцій обробника подій
"capture"
*/