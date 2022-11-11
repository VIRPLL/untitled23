// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const number of arr) {
//     document.write(`<div>${number}</div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let arr = [
//     {
//         id: 1,
//         name: "Roman"
//     },
//     {
//         id: 2,
//         name: "Oleg"
//     },
//     {
//         id: 3,
//         name: "Olga"
//     },
//     {
//         id: 4,
//         name: "Taras"
//     },
//     {
//         id: 5,
//         name: "Nastiya"
//     },
//     {
//         id: 6,
//         name: "Artur"
//     },
//     {
//         id: 7,
//         name: "Lesya"
//     },
//     {
//         id: 8,
//         name: "Stepan"
//     },
//     {
//         id: 9,
//         name: "Andriy"
//     },
//     {
//         id: 10,
//         name: "Homer"
//     }
// ];
// for (const arrElement of arr) {
//     document.write(`
// <div>
//     Id: ${arrElement.id},
//     Name: ${arrElement.name}
// </div>
// `);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let arr = [
//     {
//         id: 1,
//         name: "Roman"
//     },
//     {
//         id: 2,
//         name: "Oleg"
//     },
//     {
//         id: 3,
//         name: "Olga"
//     },
//     {
//         id: 4,
//         name: "Taras"
//     },
//     {
//         id: 5,
//         name: "Nastiya"
//     },
//     {
//         id: 6,
//         name: "Artur"
//     },
//     {
//         id: 7,
//         name: "Lesya"
//     },
//     {
//         id: 8,
//         name: "Stepan"
//     },
//     {
//         id: 9,
//         name: "Andriy"
//     },
//     {
//         id: 10,
//         name: "Homer"
//     },
//     {
//         id: 11,
//         name: "Roman"
//     },
//     {
//         id: 12,
//         name: "Oleg"
//     },
//     {
//         id: 13,
//         name: "Olga"
//     },
//     {
//         id: 14,
//         name: "Taras"
//     },
//     {
//         id: 15,
//         name: "Nastiya"
//     },
//     {
//         id: 16,
//         name: "Artur"
//     },
//     {
//         id: 17,
//         name: "Lesya"
//     },
//     {
//         id: 18,
//         name: "Stepan"
//     },
//     {
//         id: 19,
//         name: "Andriy"
//     },
//     {
//         id: 20,
//         name: "Homer"
//     }
// ];
// let i = 0;
// while (i<arr.length) {
//     let user = arr[i].id;
//     document.write(`<h1>${user}</h1>`);
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let arr = [
//     {
//         id: 1,
//         name: "Roman"
//     },
//     {
//         id: 2,
//         name: "Oleg"
//     },
//     {
//         id: 3,
//         name: "Olga"
//     },
//     {
//         id: 4,
//         name: "Taras"
//     },
//     {
//         id: 5,
//         name: "Nastiya"
//     },
//     {
//         id: 6,
//         name: "Artur"
//     },
//     {
//         id: 7,
//         name: "Lesya"
//     },
//     {
//         id: 8,
//         name: "Stepan"
//     },
//     {
//         id: 9,
//         name: "Andriy"
//     },
//     {
//         id: 10,
//         name: "Homer"
//     },
//     {
//         id: 11,
//         name: "Roman"
//     },
//     {
//         id: 12,
//         name: "Oleg"
//     },
//     {
//         id: 13,
//         name: "Olga"
//     },
//     {
//         id: 14,
//         name: "Taras"
//     },
//     {
//         id: 15,
//         name: "Nastiya"
//     },
//     {
//         id: 16,
//         name: "Artur"
//     },
//     {
//         id: 17,
//         name: "Lesya"
//     },
//     {
//         id: 18,
//         name: "Stepan"
//     },
//     {
//         id: 19,
//         name: "Andriy"
//     },
//     {
//         id: 20,
//         name: "Homer"
//     }
// ];
// let i = 0;
// while (i<arr.length) {
//     let userId = arr[i].id;
//     let userName = arr[i].name;
//     document.write(`<h1>${userId}</h1><div>${userName}</div>`);
//     i++
// }

//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`);
// for (const listOfItem of listOfItems) {
//     document.write(`<li>${listOfItem}</li>`);
// }
// document.write(`</ul>`);
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const product of products) {
//     document.write(`
//         <div class="product-card">
//             <h3 class="product-title">${product.title}.<br/> Price - ${product.price}</h3>
//             <img src="${product.image}" alt="product-image" class="product-image">
//         </div>
// `)
// }
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

//є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// for (const user of users) {
// //     if (user.status)
// //     document.write(`
// //     <div>
// //        <p>${user.name} - ${user.status}</p>
// //     </div>
// // `)
//
// //     if (!user.status)
// //     document.write(`
// //     <div>
// //        <p>${user.name} - ${user.status}</p>
// //     </div>
// // `)
// //
// //         if (user.age > 30)
// //     document.write(`
// //     <div>
// //        <p>${user.name} - ${user.age}</p>
// //     </div>
// // `)
// }
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років