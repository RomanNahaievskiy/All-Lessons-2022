"use strict"
console.log('==== JS Операції з string ====');










// Завдання 1
// Чи правильний запис ?
let fls = "фрілансер";
let textOne = 'Привіт! Я ${fls}';
// ! Вирішення (потрібно використати зворотні лапки)
let textOneSolution = `Привіт! Я ${fls}`;














// Завдання 2
// Отримати символ "н" рядка:
let textTwo = 'фрілансер';
// ! Вирішення (потрібно 1) знайти  відповідність 2) вивести в змінну)
let textTwoSolution = textTwo;
let i;
if (textTwo.includes('н')) {
    i = textTwo.indexOf('н');
} else {
    console.log('немає такої літери у цьому рядку');
}
console.log(textTwoSolution[i]);
// або методом slice
console.log(textTwoSolution.slice(i, ++i));
// або методом slice якщо нам відомий порядковий номер
console.log(textTwoSolution.slice(5, 6));






// Завдання 3
// Правильно?
let textThree = 123 + "456";
// ! Очікуємо 123456 рядкового типу , так як бінариний + не конвертує в числовий тип даних
// ! відбувається конкатенація (складання)
console.log(textThree, typeof textThree);
// Але всеж можна отримати суму чисел, якщо до рядкa додати унарний оператор +
textThree = 123 + +"456";
console.log(textThree, typeof textThree);








// Завдання 4
// Отримати рядок у верхньому регістрі
let textFour = 'фрілансер';
// Вирішення
console.log(textFour.toUpperCase());








// Завдання 5
// Отримати фрагмент рядка "лан" із :
let textFive = 'фрілансер';
// Вирішення : 1) перевірити чи включає в себе змінна цей фрагмент методом includes 
// 2) отримати порядкові номери шуканих символів 3) присвоїти в змінну та вивести 
// або методом слайс , якщо відомі порядкові номери (індекси шуканих елементів+ 
// пам'ятаємо ,
//  що край(закінчення) діапазону не включається у результат тому +1 )
console.log(textFour.slice(3, 6));
// =======================Кудлатимо Бабайку JS==============================================================
let textFiveSolution;
let partOfString = 'лан';
if (textFour.includes(partOfString)) {
    let sizePartOfString = partOfString.length;
    // console.log(sizePartOfString, typeof sizePartOfString);- ПЕРЕВІРКА
    let startNumIndex = textFour.indexOf(partOfString[0]);
    // console.log(startNumIndex); -ПЕРЕВІРКА
    let endNumIndex = textFour.indexOf(partOfString[--sizePartOfString]);
    // -- ПОТРІБЕН ЗАМІСТЬ -1 ДЛЯ ВИКОРИСТАННЯ ДОВЖИНИ ШУКАНОГО РЯДКА В 
    // ЯКОСТІ ПОРЯДКОВОГО НОМЕРА  ДЛЯ ВИЗНАЧЕННЯ КРАЙНЬОГО ШУКАНОГО СИМВОЛА У МАСИВІ,
    //  ДЕ ПОРЯДКОВІ НОМЕРИ ТОБТО ІНДЕКСИ РОЗПОЧИНАЮТЬСЯ З 0 ТОБТО З НУЛЬОВОЇ ПОИЦІЇ.
    // console.log(endNumIndex); -ПЕРЕВІРКА
    textFiveSolution = textFour.slice(startNumIndex, ++endNumIndex);// ++ ПОТРІБЕН 
    //  ЗАМІСТЬ +1 ДЛЯ (ВИРІШЕННЯ) МЕТОДУ СЛАЙС, КОТРИЙ НЕ ВКЛЮЧАЄ ОСТАННІЙ 
    // ЕЛЕМЕНТ ВИБРАНОГО ДІАПАЗОНУ МАСИВУ
    console.log(textFiveSolution);
} else { console.log('За вашим запитом не знайшлося жодного результату'); }


// невдала спроба
// let numIndex = ''; ? можливо конкатенація створить змінну рядковоготипу  , яку потім можна буде конвертувати у число?
// console.log(partOfString.length);
// if (textFour.includes(partOfString)) {
//     for (let i = 0; i < partOfString.length;) {
//         numIndex + textFour.indexOf(partOfString[i]);   ? не вистачає знань для конвертаціїї типів даних та створення масивів з додаваннями елементів
//         console.log(numIndex);
//         i++;
//     }
// }





// Завдання 6
// Який результат очікується у консолі?
let textSix = 'фрілансер';
console.log(textSix.includes('лан', 4));
// ! Четвірка після коми вказує методу з якої позиціїї (індексу) починати пошук .
// ! Так як метод повертає булевий тип , то в разі неспівпадіння ми отримаємо FALSE
// ! console.log(textSix[4]); поверне "а" як підтвердження , що у масиві індексування
// ! розпочинається з 0, на це варто зважати під час роботи з масивами
