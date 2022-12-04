"use strict";
console.log('====       Вчимо JS       ====');
console.log('----  Опрацювання уроку   ----');
// довжина рядка ;
let someString = `- Привіт , JS , почнемо?`;
console.log(`    #- довжина рядка : " ${someString}"`);
console.log('    #- ' + someString.length + ` символи`);
// масив [];
console.log(`    #- виведення [0] елемента масиву someString:[${someString[0]}]`);
// регістр;
console.log(`    #- форматування рядка:"${someString}" в верхній регістр: "${someString.toUpperCase()}"`);
console.log(`    #- форматування рядка:"${someString}" в нижній регістр: "${someString.toLowerCase()}"`);
let stringLowerCase = someString;
console.log(`    #- форматування окремого символу із масиву :"${stringLowerCase}"  "${someString[2].toUpperCase()}"`);
// пошук методи includes startWith endWith
console.log(`    #- пошук в масиві [${someString}], що відповідає критерію : "JS" (регістр має значення), якщо співпадіння є то повертає TRUE інакше FALSE`);
console.log(someString.includes('JS'));
console.log('    #- startWith & endWith працюють схожим чином , але відповідно спочатку та скінція масиву');
// отримання частини рядка
console.log(`    #-  отримання частини рядка [${someString}] методом slise(start,end) end вказує на закінчення діапазону, але не включає останній елемент.`);
let someNewString = someString.slice(0, 13);
console.log(`${someNewString}  ${someString[23]}`);
// Пошук та заміна replace
console.log('    #- пошук та заміна здійснюється методом replace("ЗНАЙТИ","ЗАМІНИТИ")');
someNewString = someString.replace('Привіт', 'JS JS JS');
console.log(someNewString);
// Основні методи чисел
console.log(`    #- Основні методи чисел`);
let intNum = 20; // ціле чсло
let floatNum = 20.1; //не ціле число
// округлення в меншу сторону
console.log(`    #- Округлення змінної floatnum = ${floatNum} в меншу сторону методом: Math.floor(floatNum)`);
console.log(Math.floor(floatNum));
// округлення в більшу сторону
console.log(`    #- Округлення змінної floatnum = ${floatNum} в більшу сторону методом: Math.ceil(floatNum)`);
console.log(Math.ceil(floatNum));
// округлення до ближчого цілого
console.log(`    #- Округлення змінної floatnum = ${floatNum} до ближчого цілого методом: Math.round(floatNum)`);
console.log(Math.floor(floatNum));
// модуль числа math.abs
let negativeNum = -20;
console.log(`    #- модуль числа змінної negative  = ${negativeNum} методом: Math.abs(negativeNum)`);
console.log(Math.floor(floatNum));
// генератор рандомних чисел Math.random()
console.log(`    #- генератор рандомних чисел : Math.random()`);
let randomNum1 = Math.random();
let randomNum2 = Math.random();
let randomNum3 = Math.random();
console.log(randomNum1, randomNum2, randomNum3);
// статистичні методи - функцію Math.max() & Math.min()
console.log(`    #- статистичні методи - функції Math.max() & Math.min()`);
console.log('    #- Ілюстація Math.max() ->');
console.log(Math.max(randomNum1, randomNum2, randomNum3));
console.log('    #- Ілюстація Math.min() ->');
console.log(Math.min(randomNum1, randomNum2, randomNum3));
// парсинг цілої частина числа ->  parceInt ;парсинг числа із плаваючою комою ->  parceFloat;
// парсинги працють із зворотніми лапками - "витягюючи з рядка число))"
console.log('    #- Ілюстація parseInt(intNum) ->');
console.log(parseInt(intNum));
console.log('    #- Ілюстація parseInt(floatNum) ->');
console.log(parseInt(floatNum));
console.log('    #- Ілюстація parseFloat(intNum) ->');
console.log(parseFloat(intNum))
console.log('    #- Ілюстація parseFloat(floatNum) ->');
console.log(parseFloat(floatNum));
console.log('    #- Ілюстація parse працює із зворотніми лапками - змінна someVar = `123.9 iodfpso` містить символи чисел та літер , але парсер вибиратиме лише числа , при умові , що рядок не розпочинається з текстового симфола тобто літери інакше NaN');
let someVar = `123.9 iodfpso`;
let someVarTextFirst = `iodfpso 123.9 iodfpso`;
console.log(someVar)
console.log(typeof someVar)
let parseVarInt = parseInt(someVar);
let parseVarFloat = parseFloat(someVar);
console.log('    #- Ілюстація parseInt(someVar) ->');
console.log(parseVarInt);
console.log(typeof parseVarInt);
console.log('    #- Ілюстація parseFloat(someVar) ->');
console.log(parseVarFloat);
console.log(typeof parseVarFloat);
console.log('   #- Ілюстація parse працює із зворотніми лапками - змінна someVarTextFirst = `iodfpso 123.9 iodfpso` містить символи чисел та літер , але парсер вибиратиме лише числа , при умові , що рядок не розпочинається з текстового симфола тобто літери інакше NaN');
console.log(parseInt(someVarTextFirst));
// основні оператори 
console.log('    #- Основні оператори');
console.log('    #- Ілюстрація роботи оператору (-) мінус . він може автоматично перетворювати тип даних із рядкового в числовий , але при умові відсутності текстових символів');
let varOne = 10;
let varTwo = 5;
// переназначення
varOne = '10' //!?можливість закоментувати для експеременту
varTwo = '3' //!? можливість закоментувати для експеременту
console.log(`    #- varOne = ${varOne} ${typeof varOne}. varTwo = ${varTwo}  ${typeof varTwo}`);
console.log('    #- let varSumm = varOne - varTwo;');
let varDiff = varOne - varTwo;
console.log('    #- typeof varSumm');
console.log(typeof varDiff);
console.log(varDiff);
// оператор ділення
console.log('    #- Оператор ділення виконання стейтменту: let varDiv = varOne / varTwo; ');
let varDiv = varOne / varTwo;
console.log('    #- typeof varDiv');
console.log(typeof varDiv);
console.log(varDiv);
// оператор множення
console.log('    #- Оператор множення виконання стейтменту: let varMultiple = varOne * varTwo; ');
let varMultiple = varOne * varTwo;
console.log('    #- typeof varMultiple');
console.log(typeof varMultiple);
console.log(varMultiple);
// взяття залишку від ділення
console.log('    #- Оператор взяття залишку від ділення виконання стейтменту: let varMultiple = varOne * varTwo; ');
let varRestDiv = varOne % varTwo;
console.log('    #- typeof varRestDiv ');
console.log(typeof varRestDiv);
console.log(varRestDiv);
// Бінарний оператор додавання (складання/з'єднання) (+) не переводить тип даних  може скласти  різні типи даних якщо додати рядок до числа
console.log('    #- оператор додавання (складання) (+) не переводить тип даних  може скласти  різні типи даних якщо додати рядок до числа');
console.log('    #- виконання стейтменту let varAdditional = varOne + varTwo;');
let varAdditional = varOne + varTwo;
console.log(varAdditional);
console.log(typeof varAdditional);
// Унарний оператор додавання може перетворити рядковий тип в числовий якщо там не текст
console.log('    #- Унарний оператор додавання пріорітетніший за бінарний (+) і може перетворити рядковий тип в числовий якщо там не текст')
console.log('    #- виконання let someNum = "5"; let result = +someNum + randomNum1;')
let someNum = "5";
let result = +someNum + randomNum1;
console.log(result);
console.log(typeof result);
// Інкремкнт & Декркмент - Миттєве додавання & віднімання
console.log('    #- Інкремкнт & Декркмент - Миттєве додавання & віднімання 1 (працює з змінною):  ++var --var');
console.log('    #- є кілька варіантів запису: Префіксний (++var) та суфіксний (var++)- виконання суфіксного запису відбудеться в наступному стейтменті- це може стати причиною плутанини.');
console.log(randomNum1);
result = randomNum1++;//!ТАК НЕ ПРАЦЮЄ
console.log(result++);//ТАК ПРАЦЮЄ
console.log(++result);//ТАК ПРАЦЮЄ
console.log('    #- !!! JS використовує алгебраїчну пріорітетність  [+ -унарний] ->  [( )] ->  [* /] -> [+ -] ');

//оператори порівняння 
//-[ < ] менше
//-[ <= ] менше дорівнює може конвертувати з рядкового типу в числовий 
//-[ >= ] більше дорівнює може конвертувати з рядкового типу в числовий 
//-[ = ] оператор присвоєння
// [ == ] не строге дорівнює може конвертувати з рядкового типу в числовий 
//-[ === ] строге дорівнює не переводить  тип даних 
//-[ != ] не строге не дорівнює ?може конвертувати з рядкового типу в числовий ?
//-[ !== ] строге не дорівнює 
// ? пріоритетність операторів порівняння . () Пріоритет №0 визначають пріорітетність
result = 10 < 5;
console.log(result)
// ! тут потрібна практика
// логічні оператори порівняння
//-[ ! ] НЕ логічне заперечення Пріоритет № 1
//-[ && ] І/ТА логічне додавання  конюнкція FALSE якщо одне із значень хибне (===0) Пріоритет № 2
//-[ || ] АБО логічне віднімання дизюнкція FALSE якщо обидва значення хибні (===0) Пріоритет № 3
// ! тут потрібна практика
// Умовне розгалуження
// if(умова){1 набір команд, якщо TRUE} -> неповне розгалуження.
// if(умова){1 набір команд, якщо TRUE}else{2 набір команд, якщо FALSE} -> повне розгалуження.
// if(умова1){1 набір команд, якщо умова1 === TRUE}else if(умова2){2 набір команд, якщо умова1 === FALSE && умова2 === TRUE }else{3 набір команд, якщо умова1 === FALSE && умова2 === FALSE} -> вкладене розгалуження.
// ! тут потрібна практика
