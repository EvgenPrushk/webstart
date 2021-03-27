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

function debounce(callback, timer) {
  // флаг, который фиксирует происходит ли отсчте от предыдущего вызова функции
  let flag = false;
  return function (...args) {
    if (flag) {
      clearTimeout(flag);
    }
    flag = setTimeout(() => {
      callback(...args);
      flag = false;
    }, timer);
  };
}

const button = document.querySelector("button");
button.addEventListener(
  "click",
  debounce((e) => {
    console.log("fired");
  }, 1000)
);
