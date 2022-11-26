// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a1 = 'hello world';
// let a2 = 'lorem ipsum';
// let a3 = 'javascript is cool';
// console.log(a1.length);
// console.log(a2.length);
// console.log(a3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let a1 = 'hello world';
// let a2 = 'lorem ipsum';
// let a3 = 'javascript is cool';
// console.log(a1.toUpperCase());
// console.log(a2.toUpperCase());
// console.log(a3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let a1 = 'HELLO WORLD';
// let a2 = 'LOREM IPSUM';
// let a3 = 'JAVASCRIPT IS COOL';
// console.log(a1.toLowerCase());
// console.log(a2.toLowerCase());
// console.log(a3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let opaStr = str.trim();
// console.log(opaStr);



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// function stringToarray (str) {
//     return str.split(" ");
// }
// console.log(stringToarray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map((number) => number.toString());
// console.log(map)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// let ascending = (a,b) => (a - b);
// let descending = (a,b) => (b - a);
// let sortNums = (arr,direction) => (arr.sort(direction));
// console.log(sortNums(nums, descending));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let aee = coursesAndDurationArray.sort( (a, b) => b.monthDuration - a.monthDuration);
// console.log(aee)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let aaa = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(aaa);


// описати колоду карт
let karaa = [
    {
        cardSuit: "черва",
        value: 6,
        color: "red"
    },
    {
        cardSuit: "черва",
        value: 7,
        color: "red"
    },
    {
        cardSuit: "черва",
        value: 8,
        color: "red"
    },
    {
        cardSuit: "черва",
        value: 9,
        color: "red"
    },
    {
        cardSuit: "черва",
        value: 10,
        color: "red"
    },
    {
        cardSuit: "черва",
        value: "валет",
        color: "red"
    },
    {
        cardSuit: "черва",
        value: "дама",
        color: "red"
    },
    {
        cardSuit: "черва",
        value: "король",
        color: "red"
    },
    {
        cardSuit: "черва",
        value: "туз",
        color: "red"
    },
    {
        cardSuit: "черва",
        value: "джокер",
        color: "red"
    },
    {
        cardSuit: "буба",
        value: 6,
        color: "red"
    },
    {
        cardSuit: "буба",
        value: 7,
        color: "red"
    },
    {
        cardSuit: "буба",
        value: 8,
        color: "red"
    },
    {
        cardSuit: "буба",
        value: 9,
        color: "red"
    },
    {
        cardSuit: "буба",
        value: 10,
        color: "red"
    },
    {
        cardSuit: "буба",
        value: "валет",
        color: "red"
    },
    {
        cardSuit: "буба",
        value: "дама",
        color: "red"
    },
    {
        cardSuit: "буба",
        value: "король",
        color: "red"
    },
    {
        cardSuit: "буба",
        value: "туз",
        color: "red"
    },
    {
        cardSuit: "буба",
        value: "джокер",
        color: "red"
    },
    {
        cardSuit: "хреста",
        value: 6,
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: 7,
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: 8,
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: 9,
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: 10,
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: "валет",
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: "дама",
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: "король",
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: "туз",
        color: "black"
    },
    {
        cardSuit: "хреста",
        value: "джокер",
        color: "black"
    },
    {
        cardSuit: "піка",
        value: 6,
        color: "black"
    },
    {
        cardSuit: "піка",
        value: 7,
        color: "black"
    },
    {
        cardSuit: "піка",
        value: 8,
        color: "black"
    },
    {
        cardSuit: "піка",
        value: 9,
        color: "black"
    },
    {
        cardSuit: "піка",
        value: 10,
        color: "black"
    },
    {
        cardSuit: "піка",
        value: "валет",
        color: "black"
    },
    {
        cardSuit: "піка",
        value: "дама",
        color: "black"
    },
    {
        cardSuit: "піка",
        value: "король",
        color: "black"
    },
    {
        cardSuit: "піка",
        value: "туз",
        color: "black"
    },
    {
        cardSuit: "піка",
        value: "джокер",
        color: "black"
    }
];

// - знайти піковий туз
// let pik = karaa.filter(value => value.cardSuit === "піка").filter(value => value.value === "туз");
// console.log(pik);

// - всі шістки
// let sist = karaa.filter(value => value.value === 6);
// console.log(sist);

// - всі червоні карти
// let red = karaa.filter(value => value.color === "red");
// console.log(red);

// - всі буби
// let bub = karaa.filter(value => value.cardSuit === "буба");
// console.log(bub);

// - всі трефи від 9 та більше
// let aaa = karaa.filter(value => value.cardSuit === "хреста").filter(value => value.value > 8 ||
//     value.value === "валет" || value.value === "дама" || value.value === "король" ||
//     value.value === "туз" || value.value === "джокер");
// console.log(aaa);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// console.log(karaa.reduce((previousValue, currentValue) => {
//     if (currentValue.cardSuit === "черва"){
//         previousValue.hearts.push(currentValue);
//     } else if (currentValue.cardSuit === "буба") {
//         previousValue.diamonds.push(currentValue);
//     } else if (currentValue.cardSuit === "піка") {
//         previousValue.spades.push(currentValue);
//     } else {
//         previousValue.clubs.push(currentValue);
//     }
//     return previousValue
// },{
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }));
