// // массив тип объекта в js
// const name0 = "ALeks";
// const name1 = "Maks";
// // ключ у объекта может быть числом, потому, что конвертируется в строку
// // представление массива: кличи (порядковые номера с 0) = индексы, плюс длина
// const names = {
//   length: 2,
//   0: name0,
//   1: name1,
// };
// names["0"]; // обращаемся к "ALeks"

// Массив это объект, ключ массива - это индекс,
// значение массива - это эдемент, св-во = это length
// Массивы однатипны

// const names = ["Aleks", "Maks", "Tot"];
// const ages = [29, 50, 70];
// const genders = ["male", "female"];

// // push - метод(функция), которая  добавляет элемент (несколь элементов) в конец массива
// names.push('Olga'); //["Aleks", "Maks", "Tot", 'Olga']
// names.push(['Olga', 'Maks']) ///["Aleks", "Maks", "Tot", 'Olga', Array(2)]

// // unshift - метод(функция), которая  добавляет элемент (несколь элементов) в начало массива

// // pop - метод(функция), которая  удаляет элемент (несколь элементов) в конце массива

// // shift - метод(функция), которая  удаляет элемент (несколь элементов) в начале массива

// изменять массив можно за счет изменения свойство length - это плохая практика

// ПЕРЕБОР МАСИВА

// const names = ["Aleks", "Maks", "Tot"];
// for (let i = 0; i < names.length; i++) {
//     // перебор по ключу + индекс + массив
//   console.log(names[i], i, names);

// }

// если во время перебора массива мне нужно только его значение, то лучше использовать for(of)
// for (const name of names) {
//     console.log(name); //"Aleks", "Maks", "Tot"
// }

// Пробегается не по значениям массива, а по его ключам
// for (const index in names) {
//     console.log(index); // 0, 1, 2  (типа строка)
// // }

// const user = {
//     name: 'Ales',
//     age: 35,
//     surname: 'Martov'
// }

// // Перебираем объект только с помощью for(in)
// for (const key in user) {
//     console.log(key); // name, age, surname
// }

// ЗАЦИКЛИВАНИЕ!!!!

// const array = [];
// array.push(array, array, array); // зацикливание, он ссылается сам на себя
// let users = [];
// const user1 = {
//     name: 'Ales',
//     age: 35,
//     surname: 'Martov',
//     skills: ['Программировать', "Записывать ролики", "Хорошо бегать"],
// }

// const user2 = {
//     name: 'Maks',
//     age: 22,
//     surname: 'Tatov',
//     skills: ['Зарабатывать деньги'],
// }
// // объекты передаются в users по ссылке
// users.push(user1, user2);

// const numbers = [99, 55, 22, 33, 12, 15, 17, 19, 33];
// const odd = [];
// const even = [];
// for (let i = 0; i < numbers.length; i++) {
//    const number = numbers[i]; // берем элемент
//     if (number % 2 === 0) {
//         even.push(number);
//     } else {
//         odd.push(number);
//     }

// }

// for (const number of numbers) {

//      if (number % 2 === 0) {
//          even.push(number);
//      } else {
//          odd.push(number);
//      }

//  }

// const numbers = [99, 55, 22, 33, 12, 15, 17, 19, 33];
// let sum = 0
// for (const number of numbers) {
//     sum += number;

// }

// console.log(sum / numbers.length);

// выводим все элементы массива в обратном порядке
// const numbers = [99, 55, 22, 33, 12, 15, 17, 19, 33];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);

// }

// Находим самое большое и самое маленькое число

//  const numbers = [99, 55, 22, 33, 12, 15, 17, 19, 33];

//  let min = Infinity;
//  let max = -Infinity;

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
//     if (number > max) {
//         max = number;
//     }
// }

// console.log(min, max);

const numbers1 = [99, 55, 22, 33, 12, 15, 17, 19, 33];
const numbers2 = [2, 5, 33, 77, 88, 19, 11, 55, 67];

const sum = [];

for (let i = 0; i < numbers1.length; i++) {
  sum.push(numbers1[i] + numbers2[i]);
}
console.log({sum, numbers1, numbers2});