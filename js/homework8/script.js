// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1, "Roman", "apapa", "saasncncn@gmail.com", "+380747652863");
// let user2 = new User(2, "Igor", "hfjg", "sncncn@gmail.com", "+3807497652863");
// let user3 = new User(3, "Taras", "fas", "saasdsfsdncncn@gmail.com", "+380745567863");
// let user4 = new User(4, "Misha", "vsdsd", "sfsdfsdncncn@gmail.com", "+380740007863");
// let user5 = new User(5, "Oleg", "qwdas", "sahjgnfncncn@gmail.com", "+380740017863");
// let user6 = new User(6, "Olga", "nvcda", "saxcvbvcncncn@gmail.com", "+380740207863");
// let user7 = new User(7, "Nastiya", "fylbh", "sa,umyjntsdncncn@gmail.com", "+380740037863");
// let user8 = new User(8, "Sofia", "fgfdcv", "sadyubgfcn@gmail.com", "+380740407863");
// let user9 = new User(9, "Roman", "vcngfg", "verfsdscncn@gmail.com", "+380740507863");
// let user10 = new User(10, "Petro", "jhmngf", "soiuyvdncncn@gmail.com", "+380740607863");
//
// let users = [];
// users.push(user1, user2, user3, user4, user6, user5, user7, user8, user9, user10);
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(value => value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a, b) => b.id - a.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 = new Client(1, "Roman", "apapa", "saasncncn@gmail.com", "+380747652863", [1]);
// let client2 = new Client(2, "Igor", "hfjg", "sncncn@gmail.com", "+3807497652863", [1,2]);
// let client3 = new Client(3, "Taras", "fas", "saasdsfsdncncn@gmail.com", "+380745567863", [1,2,3,4,5]);
// let client4 = new Client(4, "Misha", "vsdsd", "sfsdfsdncncn@gmail.com", "+380740007863", [1,2]);
// let client5 = new Client(5, "Oleg", "qwdas", "sahjgnfncncn@gmail.com", "+380740017863", [1,2,3,4]);
// let client6 = new Client(6, "Olga", "nvcda", "saxcvbvcncncn@gmail.com", "+380740207863", [1,2]);
// let client7 = new Client(7, "Nastiya", "fylbh", "sa,umyjntsdncncn@gmail.com", "+380740037863", [1,2,3,4,5]);
// let client8 = new Client(8, "Sofia", "fgfdcv", "sadyubgfcn@gmail.com", "+380740407863", [1,2,3]);
// let client9 = new Client(9, "Roman", "vcngfg", "verfsdscncn@gmail.com", "+380740507863", [1,2]);
// let client10 = new Client(10, "Petro", "jhmngf", "soiuyvdncncn@gmail.com", "+380740607863", [1,2,3,4,5,6]);
//
// let clients = [];
// clients.push(client1, client2, client3, client4, client6, client5, client7, client8, client9, client10);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, maxSpeed, year, engine, producer) {
//     this.model = model;
//     this.maxSpeed = maxSpeed;
//     this.year = year;
//     this.engine = engine;
//     this.producer = producer;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`);
//     };
//
//     this.info = function () {
//         console.log(`
// Model -- ${this.model}
// Max Speed -- ${this.maxSpeed}
// Year -- ${this.year}
// Engine -- ${this.engine}
// Producer -- ${this.producer}`
//
//         );
//         if (this.driver){
//             console.log(`Driver -- ${this.driver.name}`)
//         }
//
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//
//     this.changeYear = function (newYear) {
//         this.year = newYear;
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let car1 = new Car("Jetta", 240,2013, 2, "Germany");
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(320);
// car1.changeYear(2019);
// car1.addDriver({name: "Roman"});
// car1.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     constructor(model, maxSpeed, year, engine, producer) {
//         this.model = model;
//         this.maxSpeed = maxSpeed;
//         this.year = year;
//         this.engine = engine;
//         this.producer = producer;
//     }
//         drive() {
//             console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//
//         info() {
//             console.log(`
// Model -- ${this.model}
// Max Speed -- ${this.maxSpeed}
// Year -- ${this.year}
// Engine -- ${this.engine}
// Producer -- ${this.producer}`
//
//             );
//             if (this.driver){
//                 console.log(`Driver -- ${this.driver.name}`)
//             }
//
//         };
//
//         increaseMaxSpeed(newSpeed) {
//             this.maxSpeed = newSpeed;
//         };
//
//         changeYear(newYear) {
//             this.year = newYear;
//         };
//
//         addDriver(driver) {
//             this.driver = driver;
//         };
//
// }
//
// let car1 = new Car("Jetta", 240,2013, 2, "Germany");
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(320);
// car1.changeYear(2019);
// car1.addDriver({name: "Roman"});
// car1.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// function Popel(name, age, foot){
//     this.name = name;
//     this.age = age;
//     this.foot = foot;
// }
// let opa1 = new Popel("Nastiya", 22, 37);
// let opa2 = new Popel("olia", 23, 36);
// let opa3 = new Popel("sofia", 21, 34);
// let opa4 = new Popel("lesia", 22, 35);
// let opa5 = new Popel("anya", 23, 38);
// let opa6 = new Popel("sofia", 21, 33);
// let opa7 = new Popel("lesia", 23, 34);
// let opa8 = new Popel("anya", 24, 35);
// let opa9 = new Popel("Nastiya", 21, 37);
// let opa10 = new Popel("olia", 20, 38);
//
// let popelArr = [];
// popelArr.push(opa1,opa2,opa3,opa4,opa5,opa6,opa7,opa8,opa9,opa10);
//
//
// class Prince {
//     constructor(name, age, tufla) {
//         this.name = name;
//         this.age = age;
//         this.tufla = tufla;
//     }
// }
//
// let prince1 = new Prince("andriy",25,36);
//
// function findtufla(arr, prince) {
//     for (const arrElement of arr) {
//         if (arrElement.foot === prince.tufla){
//             console.log(arrElement);
//         }
//     }
// }
//
// findtufla(popelArr, prince1);