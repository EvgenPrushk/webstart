//ЧИСТАЯ ФУНКЦИЯ

// function getSum(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }

//   return sum;
// }

// // НЕ ДЕТЕРМЕНИРОВАННАЯ ФУНКЦИЯ

// function getRandom(min, max) {
//   return min + Math.floor(Math.random() * (max - min + 1));
// }

// побочный эффект в виде мутации массива
// const array = [1,5,2,23,32,232,354]
// function getMax(array) {
//   array.sort((a, b) => b - a);
//   return array[0];
// }

// // побочный эффект в види мутации функции, изменение внешней count
// let counter = 0;
// function count() {
//         return counter++;
// }

// ЧистаЯ функция возвращает одинаковый результат впри одних аргументах и нет мутации

// РЕКУРСИЯ

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// расплачиваемся операционной памятью при РЕКУРСИЯ

// function factorial(n) {
//   if (n < 2) {
//     return 1;
//   }

//   return n * factorial(n - 1); // 5 * factorial(4)= 5*4 * factorial(3) = 5*4*3* factorial(2) = 5*4*3*2*1
// }

// ОПЕРАЦИОННАЯ РЕКУРСИЯ
// более сложный выход и более сложная логика
// function factorial(n, result = 1) {
//   if (n < 2) {
//     return result;
//   }

//   return factorial(n - 1, result * n);
// }

// ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// // принимаемая функция callback или handler
// function getSum(a, b, callback) {
//         callback(a + b);
// }
// //
// // getSum(5, 4, (sum) => console.log(sum));
// // callback =  function log
// // callback обычно передается последним
// getSum(5, 4, console.log);

// function getSummer(a, b) {
//   return function () {
//     return a + b;
//   };
// }
//  // тут две функции getSummer и беззымяная функция = getSum по ссылке
// const getSum = getSummer(4, 5);
// const rezult = getSum();

// console.log(rezult);

// function getSelf() {
//         return getSelf;
// }

// ДИКАРАТОРЫ

// function debounce(callback, timer) {
//   // флаг, который фиксирует происходит ли отсчте от предыдущего вызова функции
//   let flag = false;

// вызывает функцию, которая это callback использует со своей бизнес логикой
//   return function (...args) {
//     if (flag) {
//       clearTimeout(flag);
//     }
//     // ожидает, чтобы функция не вызывалась чаще чем время timer
//     flag = setTimeout(() => {
//       callback(...args);
//       flag = false;
//     }, timer);
//   };
// }

// const input = document.querySelector("input");
// input.addEventListener(
//   "keyup",
//   debounce((e) => {
//     console.log(e.target.value);
//   }, 500)
// );

// const button = document.querySelector("button");
// button.addEventListener(
//   "click",
//   debounce((e) => {
//     console.log("fired");
//   }, 1000)
// )

// МЕТОДЫ КЛАССА

//МУТИРУЮЩИЕ МЕТОДЫ = Изменяющие
const users = [
  {
    id: 1,
    name: "Ales",
    surname: "Bink",
    age: 77,
  },
  {
    id: 2,
    name: "Maik",
    surname: "Mall",
    age: 23,
  },
  {
    id: 3,
    name: "Ross",
    surname: "Milk",
    age: 24,
  },
];

// users.splice(1, 1);
// удалил
// {
//         id: 2,
//         name: "Maik",
//         surname: "Mall",
//         age: 23,
//       },

// измененый массив
// const users = [
//         {
//           id: 1,
//           name: "Ales",
//           surname: "Bink",
//           age: 77,
//         },
//         {
//           id: 3,
//           name: "Ross",
//           surname: "Milk",
//           age: 24,
//         },

// ];

// ПЕРЕБИРВЮЩИЕ МЕТОДЫ

//позволяеют найти элемент, который будет отвечать требованиям
// users.find(user => user.age === 23) //  выведет 2 элемент
// const maxAge = Math.max(...users.map((x) => x.age));

// ГЕНЕРИРУЮЩИЕ МЕТОДЫ
// // Не мутируют исходный массив
// // const names = user.map(user => user.name); ["Ales", "Maik", "Ross"]

// // const ages = users.map(user => user.age)  [77, 23, 24]

// // users.filter( x => x.age >22)
// // 0: {id: 1, name: "Ales", surname: "Bink", age: 77}
// // 1: {id: 2, name: "Maik", surname: "Mall", age: 23}
// // 2: {id: 3, name: "Ross", surname: "Milk", age: 24}

// //ДЛЯ ПОВЕРХНОСТНОГО КОПИРОВАНИЯ ИСПОЛЬЗУЕМ slice()
// // users.slice(); // ссылки будут разные на массив разные, но на объекты одинаковые

// // ЦЕПНОЙ СТИЛЬ ПРОГРАММИРОВАНИЯ

// // const names = users.map((x => x.name));
// // const shortNames = names.map((x) => x.slice(0, 3));
// // const call = users.map((x) => x.name).map((x) => x.slice(0, 3));
// // console.log(call);

// // ПОЛИФИЛЫ = не поддерживается из коробки
// console.log(
//   users.map((x) => x.name),
//   map(users, (x) => x.name)
// );

// // передаем
// // users принимает, как контекст this.
// // далее передаем callback and thisArg
// function map(array, callback, thisArg) {
//   // строчка для полифилов
//   callback = thisArg ? callback.bind(thisArg) : callback;

//   const rezult = [];
//   // пробегаемся по всем элементам массива
//   for (let i = 0; i < array.length; i++) {
//     // элемент - результат выполнения функции и элемента массива
//     // может принимать индекс элемента и лист аргумент(ссылку на массив)
//     const item = callback(array[i], i, array);
//     // отправляем результаты выполнения функции в результирующмй массив
//     rezult.push(item);
//   }

//   return rezult;
// }

// ПОЛЕЗНЫЕ ФУНКЦИИ (LODASH)

function chunk(array, size) {
  const rezult = [];
  let sum = [];
  for (let i = 0; i < array.length; i++) {
    sum.push(array[i]);
    if (sum.length >= size) {
      rezult.push(sum);
      sum = [];
    }
  }

  if (sum.length) {
    rezult.push(sum);
    sum = [];
  }

  return rezult;
}
console.log(

  chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
);
