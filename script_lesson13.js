// const fruites = document.querySelector('[data-type="fruites"]');
// const names = document.querySelector('[data-type="names"]');

// const lis = document.querySelectorAll("li:nth-child(even)");
// for (const li of lis) {
//   li.textContent = "(" + li.textContent + ")";
// }

// const li = document.querySelector("#lastName");
// const ul = li.closest("ul");
// console.log(ul);

// const lis = document.querySelectorAll("li");
// console.log(lis);
// const lastLi = document.querySelector("#lastName");
// lastLi.remove();
// console.log(lis);

// Удаление элементов

// const li = document.querySelector("#lastName");
// вставка вместе с контекстом
// const liCopy = li.cloneNode(true);
// li.remove();
// // элемент находиться в импиративной памяти li.parentElement => null
// console.log(li);

// Вставка элемента

// const ul = document.querySelector('[data-type="fruites"]')
// ul.appendChild(liCopy)

//Замена элементов
// const fruites = document.querySelector('[data-type="fruites"]');
// const names = document.querySelector('[data-type="names"]');

// const aleksey = document.querySelector("#aleksey");
// const apple = document.querySelector("#apple ");

// apple.remove();
// fruites.insertBefore(apple, fruites.firstElementChild);

// fruites.replaceChild(aleksey, apple);

// Виртуальный дом

// const fruites = document.querySelector('[data-type="fruites"]');
// const names = document.querySelector('[data-type="names"]');

// const aleksey = document.querySelector("#aleksey");
// const apple = document.querySelector("#apple");

// fruites.replaceChild(aleksey, apple);
// fruites.insertBefore(apple, fruites.firstElementChild);

// console.log(aleksey);

//Создание вертуального элемента

const ul = document.createElement("ul");
document.body.appendChild(ul);

console.log(ul);
const games = ["Sea Battle", "Sudoky", "Sapper"];

for (const game of games) {
  const li = document.createElement("li");
  li.textContent = game;
  ul.append(li);
}
// вставка копий массива
document.body.append(ul.cloneNode(true));
document.body.append(ul.cloneNode(true));
document.body.append(ul.cloneNode(true));
