// let name1 = "Алексей";
// let name2 = "Тимофей";
// let surname1 = "Danchin";
// let surname2 = "Прагин";
// let age1 = 20;
// let age2 = 22;
// let gender1 = "male";
// let gender2 = "male";
// объект
// const person1 = {
//   // ключ(всегда строка) - значение(примитив) = поле (свойство)
//   // ключ (всегда строка) - значение(функция) = поле (метод)
//   name: "Алексей",
//   surname: "Danchin",
//   age: " 20",
//   gender: "male",
//   getFullName() {}, // метод
// };

// const person2 = {
//   // ключ- значение
//   name: "Тимофей",
//   surname: "Прагин",
//   age: " 22",
//   gender: "male",
// };

//Ссылочная природа в javascript

// const x = 5;
// // объект храниться по ссылке
// const person1 = {
//   // ключ(всегда строка) - значение(примитив) = поле (свойство)
//   // ключ (всегда строка) - значение(функция) = поле (метод)
//   name: "Алексей",
//   surname: "Danchin",
//   age: " 20",
//   gender: "male",
//   getFullName() {}, // метод
// };
// // объект 2 храниться по ссылке
// const person2 = {
//   // ключ- значение
//   name: "Тимофей",
//   surname: "Прагин",
//   age: " 22",
//   gender: "male",
// };
// // в brother храниться ссылка на объект person2
// person1.brother = person2;
// person2.brother = person1;
// // присвоение примитивов происходит по значению, а присвоение объектов по ссылке

// // примеры структуры
// //зацикливание
// const car = {
//     enginge: 'v8',
//     speed: 120,
//     driver: {
//         name: 'Evgen',
//         surname: 'Prushak',
//         car: null, // будет ошибка инциализции т.к. объект еще не создан
//     },

// }
// // car.driver.car = car; // зацикливание объекта на себя

// // Присовоение переменной и синтаксический сахар

// let name = "Evgen";
// let surname = "prushak";
// let age = 22;
// let gender = "male";

// const user = {
//     // имя и имся поля совпадает, тогда можно опустить : 
//     name,
//     surname,
//     age,
//     gender,
// }
// // ключ это страка и справа
// user['name'] //Evgen