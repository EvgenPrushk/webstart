// while (Условие) {
// тело цикло
// }
// i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
//
// for (let i = 0; i <=1; i++) {
// console.log(i);
//
// }
//
// let x = 100;
// let y = 0;
// while (x > y) {
//   console.log({ x, y });
//   x--;
//   y++;
// }
// let number = parseInt(prompt("Введите число"));
// while (number > 0) {
//   const d = number % 10;
//   number = parseInt(number / 10);
//   console.log(d);
// }
//
// do {
// Тело цикло
// } while (Условие)
// let sum = 0;
// do {
//   sum += parseInt(prompt("Введите чилсло"));
// } while (sum <= 100);
// console.log(sum);
//
// for 99%
// while 1%

// for (let i = 0; i < 10; i++) {
// console.log(i);
//
// }
//
// let i = 0;
//
// while (i < 10) {
// console.log(i);
// i++;
// }

// let x = 100;
// let y = 0;
// while (x > y) {
//   console.log({ x, y });
//   x--;
//   y++;
// }

// for (let x = 100, y = 0; x > y; x--, y++) {
//   console.log({ x, y });
// }

// while (true) {
//
// }
//
// for (;true;) {
//
// }
// let n = 0;
// while (true) {
//   const x = parseInt(prompt("Введите число"));
//   n++;
//   if (x === 0) {
// break;
//   }
//
// }
// console.log(n);
// let x = 0;
// mainLoop: while (x < 10) {
//   let y = 0;
//   while (y < 10) {
    // console.log({ x, y });
    // y++;
    // if (x > 3 && x < y) {
    //   break mainLoop;
    // }
//   }
//   x++;
// }

// Блокировка потока

console.log('Start');
// модальные окта блокируют поток и не используются в продакшене
console.log(prompt('Как Вас зовут'));
console.log('Finish');