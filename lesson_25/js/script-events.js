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
/*
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
*/
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
/*
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
*/

// Виринання подій (пріоритетність вкладеності)
// принцип наче зрозумілий  з середини на зовні , від того й "виринання"
//? (але не дуже зрозуміло стосовно "виринання" чого із чого. подія виринає з події? чи це подія виринає із елемента структури -DOM)
//? чи краще: подія, що застосована до дочірнього елемента буде виринати раніше аніж подія, яка застосована до батьківського елемента ,
//? і це не стосується всієї структури-DOM
//========================================================================================================================================================

// коли на html елементі відбувається подія, обробники подій спершу спрацьовують на цьому ж елементі
// потім на його батьківському елемнті, потім вище , і так далі по  DOM структурі ))

// event.stopPropagation(); - зупиняє виринання на поточному елементі (до поточного включно) Використовувати варто дуже обережно
// event.target -  повертає html об'єкт до якого застосовано обробник подій 
const block = document.querySelector('.block');
const blockInner = document.querySelector('.block__inner');
const blockInnerInner = document.querySelector('.block__inner-inner');

// block.addEventListener("click", function (event) {
//     console.log("Клік на блок!");

// });
// blockInner.addEventListener("click", function (event) {
//     console.log("Клік на блок другого рівня");
//     event.stopPropagation();
// });
// blockInnerInner.addEventListener("click", function (event) {
//     console.log("Клік на блок третього рівня");
// });

// Занурення подій
//========================================================================================================================================================
//?що таке занурення
//?занурення типу події в іншу подію
//

/*
виринання подій відбудеться лише після занурення
керувати зануренням можемо парпметром опцій обробника подій
"capture"
*/
/*
block.addEventListener("click", function (event) {
    console.log("Клік на блок!");

});
blockInner.addEventListener("click", function (event) {
    console.log("Клік на блок другого рівня");
    // event.stopPropagation();
}, { "capture": true });
blockInnerInner.addEventListener("click", function (event) {
    console.log("Клік на блок третього рівня");
});
*/
// Делолегування подій


const buttons = document.querySelectorAll('.button');
/*
buttons.forEach(buttonsItem => {
    buttonsItem.addEventListener("click", showConsole);// не сприяє продуктивності
});
*/
/*
function showConsole() {
    console.log(('Слава Україні'));
}

const eventsDelegation = document.querySelector('.events-delegation') //Отримую батьківський елемент 



eventsDelegation.addEventListener("click", function (event) { // додаю обробник подій для батьківського елемента
    if (event.target.closest('.button')) { //перевіряю де саме спрацювала подія (на об'єкті button або на батьківському елементі)
        showConsole();
    }
});
*/
// MENU

const menuBody = document.querySelector('.menu');
console.log(menuBody)
document.addEventListener("click", menu);

function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle('_active');
    }
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('_active');
    }
}

document.addEventListener("keyup", function (event) {
    if (event.code == "Escape") {
        menuBody.classList.remove('_active');
    }
});
