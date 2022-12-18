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
// event.default() 
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


// const buttons = document.querySelectorAll('.button');
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
/*
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
*/
// ОСНОВІ ПОДІЇ МИШІ / КЛАВІАТУРИ
//========================================================================================================================================================
// 1) прості
// 2) комплексні

// 1)
//  Прості події найчастіше використовуються
// mousedown / mouseup - кнопка нажата / відпущена (нед елементом)
// mouseover /mouseout - курсор миші "заходить" / "виходить" з території елемента
//      (relatedTarget)-відносна ціль (для mouseover - звідки курсор прийшов/ для mouseout - куди курсор пішов)
//      Суперсила: делегування подій всередині елемента !))
// mouseenter / mouseleave - все як у попередньому варіанті але без relatedTarget (тобто без Виринання подій всередині елементу, до якого застосовується подія)
// mousemove - кожен рух курсора генерує цю подію
// contextmenu - виклик контекстного меню з ПКМ або клавіатури

//2)
// click - подія викликається при (mousedown, а після mouseup)
// dbclick - подвійний клік 2х(mousedown, а після mouseup)

// КЛАВІАТУРА
// keydown - при натисканні клавіші
// keyup - при відпусканні клавіші

// деталі події event.key / event.code

/* приклад
document.addEventListener("keydown", function (event) {
    console.log(`натиснуто ${event.code} (${event.key})`);
});
document.addEventListener("keyup", function (event) {
    console.log(`віджато ${event.code} (${event.key})`);
});
*/
// відслідковування наотиснутої клавіші(event.code). введеного символу(event.key)
// (event.repeat[true або false]- відслідковуємо чи не зажата кнопка)- автоповтор 
/* приклад
document.addEventListener("keydown", function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        console.log(`натиснуто ${event.code} (${event.key})`);
        console.log(`Охрана,  отмена!`);
    }
});
*/

// поле вводу
const txtItem = document.querySelector('.textarea__item');// отримуємо елемент
const txtItemLimit = txtItem.getAttribute('maxlength');// отримуємо ліміт вводу із атрибуту maxlength
const txtCounter = document.querySelector('.textarea__counter span'); // отримуємо елемент , в який внесемо показники залишку символів
txtCounter.innerHTML = txtItemLimit; // виводимо в html в спан  макс кількість символів

txtItem.addEventListener("keyup", txtSetCounter);
// фікс для зажатих клавіш
txtItem.addEventListener("keydown", function (event) {
    if (event.repeat) {
        txtSetCounter();
    }
});
//
function txtSetCounter() {
    const txtCounerResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = txtCounerResult;
}





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

//  додаємо функцію закривання меню по клавіші (esc)
document.addEventListener("keyup", function (event) {
    if (event.code === 'Escape');
    menuBody.classList.remove('_active');
})

// ПОДІЇ ПРИ СКРОЛІ
//========================================================================================================================================================
// 
window.addEventListener("scroll", function (event) {
    // кількість прокручкених піксеелів по вертикалі
    // scrollY або застарілий (pageYOffset)
    // кількість прокручкених піксеелів по горизонталі
    // scrollX або застарілий (pageXOffset)

    console.log(`${scrollY}px`);
});

// відміна прокрутки
/*
    неможливо відмінити прокрутку використовуючи event.preventDefault();
    в обробнику "scroll", так як він спрацьовує після того як прокрутка
    відбулася.

    Але можна відмінити прокрутку використовуючи event.preventDefault();
    на події , яка викликає прокрутку, наприклад на події "keydown" для
    клавіш PageUp та PageDown.

    Способів ініціювати прокрутку багато, а щоб відмінити найбільш
    надійним буде - використовувати CSS , overflow:hidden;.
*/

// ПОДІЇ ЗАВАНТАЖЕННЯ СТОРІНКИ
//========================================================================================================================================================
/*
    1) DOMContntLoadet - браузер повністю завантажив HTML,
        було побудоване DOM-дерево , але зовнішні ресурси , ще можливо не завантажилися
        (<img> файли css стилі )
    2) load - браузер повністю завантажив HTML та зовнішні ресурси (<img> файли css стилі ).
    3) beforeunload / unload - користувач покидає сторінку.
*/

/*
    document.redyState - стан завантаження

    є три можливих значення:
    "loading" - документ завантажується
    "interactive" - документ був повнісю прочитаний
    "complete" - документ повністю прочитаний і всі елементи , такі як
    картинки та стилі  були також завантажені.

*/
// Подія DOMContntLoadet спрацюовує на об'єкті document - тобто на HTML
// document.addEventListener("DOMContentLoaded", redyDom);

// Подія load спрацюовує на об'єкті window - тобто на в'юпорті користувача
// window.addEventListener("load", redyLoad);
// function redyDom() {
//     const image = document.querySelector('.image');
//     console.log(document.readyState);
//     console.log('DOM завантажено');
//     console.log(image.offsetWidth);
// }
// function redyLoad() {
//     console.log(document.readyState);
//     const image = document.querySelector('.image');
//     console.log('сторінку завантажено');
//     console.log(image.offsetWidth);
// }

// beforeunload спрацбовує на об'єкті window
window.addEventListener("beforeunload", beforeUnLoad);

function beforeUnLoad(event) {
    // відмінюємо подію по замовчуванню
    event.preventDefault();
    // Crome вимвгає ланих для повернення із функції
    event.returnValue = '';
}

// unload спрацбовує на об'єкті window
window.addEventListener("unload", function (event) {
    // відправка статистики 
    // navigator.sendBeacon(url, data);
    // https://u3c.github.io.beacon/
})