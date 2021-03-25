// function promptNumber(str) {
//   return Number(prompt(str));
// }
// const number1 = Number(prompt('Введите первое число:'))
// const number2 = Number(prompt('Введите второе  число:'))

// console.log(number1 + number2);

// СОЗДАНИЕ ФУНКЦИИ

// function getSum(a = 0, b = 0) {
//   console.log({ a, b });
//   return a + b;
// }

// const sum = getSum(5, 1, 2, 4, 5);
// console.log(sum);

// C использованием рест оператора

// function getSum(a = 0, b = 0) {
//   let sum = 0;
//   console.log(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//      sum += arguments[i];

//   }

//   return sum;
// }

// const sum = getSum(5, 1, 2, 4, 5);
// console.log(sum);

// все аргументы собираем в массива
// function getSum(...args) {
//   let sum = 0;
//   console.log(args);
//   for (let i = 0; i < args.length; i++) {
//      sum += args[i];

//   }

//   return sum;
// }

// const sum = getSum(5, 1, 2, 4, 5);
// console.log(sum);

// Для продвинутых пользователей

// function getSum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }

// const sum = getSum(5, 1, 2, 4, 5);
// console.log(sum);
// Функции - это объект
// function isSimple(n, a, b, ...args) {
//   console.log('Старт цикла');
//   for (let i = 2; i < n; i++) {
//     console.log({i});
//     if (n % i === 0) {
//       // после ретерна функция прекращается
//       return false;
//     }
//   }
//   console.log('Финиш цикла');

//   return true;
// }
// // премер ссылки на функцию(объект), т.к. обьекты передаются по ссылке
// const x = isSimple;
// // // плохая практика
// // isSimple = 5;
// const n = 15;
// const v = x(n);
// console.log(n, v);

// КАК ОБЪЯВЛЯЕТСЯ ФУНКЦИЯ, ВСПЛЫТИЕ
// const n = 15;
// const v = isSimple(n);
// console.log(n, v);
// function isSimple(n, a, b, ...args) {
//   console.log("Старт цикла");
//   for (let i = 2; i < n; i++) {
//     console.log({ i });
//     if (n % i === 0) {
//       // после ретерна функция прекращается
//       return false;
//     }
//   }
//   console.log("Финиш цикла");

//   return true;
// }

// // Вызов функции после ее обьявления - устаревший вариант
// (function IIFE(a, b, c) {
//   console.log(a, b, c);
// })(1, 2, 3);

// ЛЕНИВАЯ ФУНКЦИЯ

// можно не давать название
// const x = function isSimple(n, a, b, ...args) {
//   for (let i = 2; i < n; i++) {
//     console.log({ i });
//     if (n % i === 0) {
//       // после ретерна функция прекращается
//       return false;
//     }
//   }

//   return true;
// }
// const n = 15;
// const v = x(n);
// console.log(n, v);

// ОБЛАСТЬ ВИДИМОСТИ ФУНКЦИИ
// a();
// b();
// function a() {
//   b();
//   c();
//   // это b видна из тела функции а
//   function b () {
//     console.log('b2');
//   }
// }
// function b() {
//   console.log('b1');
// }
// function c() {
//   console.log('c1');
// }

// СТРАТЕГИЯ

// const array = [1, 22, 33, 223, 32354, 5, 2, 3, 23, 4, 5, 2, 2, 2, 4];
// const variant = confirm('хотите видеть четные числа?')
// const sort = variant ? getEven : getOdd;
// let sort = null;
// if (variant) {
//   sort = getEven;
// } else {
//   sort = getOdd;
// }

// const rezult = sort(array);
// console.log(rezult);

// function getOdd(array) {
//   const rezult = [];

//   for (const item of array) {
//     if (item % 2 !== 0) {
//       rezult.push(item);
//     }
//   }
//   return rezult;
// }

// function getEven(array) {
//   const rezult = [];

//   for (const item of array) {
//     if (item % 2 === 0) {
//       rezult.push(item);
//     }
//   }
//   return rezult;
// }

// КОНТЕКСТ

// const user = {
//   name: "Alex",
//   surname: 'Belov',
//   age: 34,
//   getFullname() {
//     //this ссылается на объект
//     return `${this.name} ${this.surname}`;
//   }
// }
// // function getFullname() {
// //   return `${this.name} ${this.surname}`;
// // }
// // создаем ссылку на функцию в объекте user
// // user.getFullname = getFullname;
// const getFullname = user.getFullname; // повторная ссылка на объект
// const fullname = getFullname();

// console.log({user, fullname});

// УПРАВЛЕНИЕ КОНТЕКСТОМ

// const user = {
//   name: "Alex",
//   surname: "Belov",
//   age: 34,
// };

// function getFullname() {
//   //this ссылается на объект
//   return `${this.name} ${this.surname}`;
// }
// // с помощью bind создаю новую функцию, которая ссылается на user
// const getFullnameUser = getFullname.bind(user, 1, 2, 3);

// const obj = {};

// // болеее низкий приоритет приявязки
// obj.getFullnameUser = getFullnameUser;

// const fullname = obj.getFullnameUser(4, 5, 6);
// console.log({ user, fullname });

// const user = {
//     name: "Alex",
//     surname: "Belov",
//     age: 34,
//   };

//   function getFullname() {
//     //this ссылается на объект
//     return `${this.name} ${this.surname}`;
//   }
//   // с помощью call создаем контекст и тут же вызываем функцию
//   const fullname = getFullname.call(user);

//   console.log({ user, fullname });

// const user = {
//     name: "Alex",
//     surname: "Belov",
//     age: 34,
//   };

//   function getFullname() {
//     //this ссылается на объект
//     return `${this.name} ${this.surname}`;
//   }
//   // с помощью call создаем контекст и тут же вызываем функцию, вторым аргументом передаем массив
//   const fullname = getFullname.apply(user, [1, 2, 3, 4]);

//   console.log({ user, fullname });

// СТРЕЛОЧНАЯ ФУНКЦИЯ
// если она возвращает результат, то кавычки можно опустить и если один аргумент, то можно опустить
const getSum = (...xs) => xs.reduce((a, b) => a + b, 0);
// нет свойство аргументом
// нет this, есть только родительский
console.log(getSum(11, 55, 44, 22, 33));
