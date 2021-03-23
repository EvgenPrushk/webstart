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

// Вызов функции после ее обьявления
(function IIFE(a, b, c) {
  console.log(a, b, c);
})(1, 2, 3);
//23-08