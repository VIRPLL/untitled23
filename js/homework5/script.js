// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function sum (a,b) {
//     let S = a * b;
//     return S;
// }
//
// console.log(sum(10,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function sum (a) {
//     let r = Math.pow(a,2);
//     let p = 3.14;
//     let S = p * r;
// }
// console.log(sum(7));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function sum (h,r) {
//     let p2 = Math.PI* 2 * 5;
//     let S = p2*(h+r);
//     return S
// }
// console.log(sum(10,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 4, 5];
// function sss (arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// sss(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf (text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraf("hello");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function liaa (text) {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// liaa("helo");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function table (text, row) {
//     document.write(`<ul>`);
//     for (let i = 0; i < row; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// table("hello", 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = ["hello", 1, 30, true, false];
// function arrTable (arr) {
//     document.write(`<ul>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`);
// }
// arrTable(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let arr = ["id", "name", "age"];
// function aaa (arr) {
//     for (const arrElement of arr) {
//         document.write(`<div style="border: 2px solid #000000; width: 100px;">${arrElement}</div>`);
//     }
// }
// aaa(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [100,-10,1,3,6,-110,12,-444,333];
// function low (arr) {
//     let min = 0;
//     for (const minElement of arr)
//         if (minElement < min) {
//             min = minElement
//     }
//     return min
// }
// console.log(low(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1,2,10,1,1];
// function sum (arr) {
//     let result = 0;
//     for (const arrElement of arr) {
//         result += arrElement;
//     }
//     return result
// }
// console.log(sum(arr));