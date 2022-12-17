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
button.onclick = function () { // для об'єкта призначаємо обробник подій , який відслідковує клік
    console.log('click !'); // та виконує цю функцію
}

// інший спосіб :

button.onclick = nameFunction; // для об'єкта призначаємо обробник подій із функцією (пишемо без дужок ()),
//  який відслідковує клік та виконує призначену функцію

// декларування/оголошення та опис фнкції
function nameFunction() {
    console.log('implementation some code in this function');
}
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
