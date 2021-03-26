// ОТЛАДЧИКИ
// const n = 10;
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum += i;
// }

// console.log({sum});

// for (let i = 2; i <= 5; i++) {
//   console.log(isSimple(i) ? `${i}простое число` : `${i}составное  число`);
// }

// function isSimple(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// ГЛОБАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ

// const user = getUser("alex", "baits");
// function getUser(name, surname) {
//   const user = {};

//   user.name = name;
//   user.surname = surname;

//   return user;
// }

// const user = getUser("alex", "baits");
// console.log(user.getFullname());
// function getUser(name, surname) {
//   const user = {};

//   const getFullname = () => `${name} ${surname}`;
//   user.name = name;
//   user.surname = surname;
//   user.getFullname = getFullname;
//   return user;
// }
// const array = [];
// for (let i = 0; i < 10; i++) {
//     // когда мы входим в новую область видимости, то она создается
//     // по которой сохраняется ссылка через клажур
//     //
//    array.push(() => console.log(i));

// }

// console.log(array);

// ПРОБЛЕМЫ VAR

// let a = 100;
// console.log(a);
// {
//     // эта уже не та переменная, она находиться в другой области видимости
//   let a = "apple";
//   console.log(a);
// }

// // a =500;
// console.log(a);

// var x = 'Alex';
// console.log(x);
// {
//     // константа с другой областью видимости и существует только там
//     var x = 'Sergei'; // var игнорирует область видимости, кроме функции

//     console.log(x);
// }

// console.log(x);

for (var i = 0; i < 5; i++) {
   
        {setTimeout(() => console.log(i), 100);}
        console.log(i);
    
  
}
