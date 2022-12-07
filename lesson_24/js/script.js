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
console.log(arrTwo.sort());

function compareNumeric(a, b) {
    console.log(`Порівнюємо ${a} і ${b}`);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    //return a - b;
}
console.log(arrTwo.sort(compareNumeric));
