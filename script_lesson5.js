//** Условные операторы */
// for(<инициализация>, <условие>,<мутация>) {
//     <тело>
// }
// инициализация->условие-> (тело -> мутация -> условие) -> тело -> ... -> условие === false
// console.log('Начало');

// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }

// console.log('Конец');
// нисходящий цикл
// for (let i = 100; i >= 0; i--) {
  
//     console.log(i);
// }

// for (let i = 1; Math.abs(i) < 3 ** 10; i *= -3) {
//    console.log({i});
    
// }

//** Цикл в цикле */

// Задача простое число
// for (let n = 3; n <= 100; n++) {
//     let flag = true;
//     for (let a = 2; a < n; a++) {
//         if (n % a === 0) {
//             flag = false;           
//         }  
//      }
//      if (flag) {
//         console.log( n + ' - простое число' );
//      } else {
//         console.log( n + ' - составное число' );
//      }
    
// }

// Задача таблица умножения

// for (let y = 1; y <= 31; y++) {   
//     let row = '';
//     for (let x = 1; x <= 31; x++) {        
//         row += x * y + "\t";
//     }
//     console.log(row);    
// }
// let counter = 0;
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         for (let k = 0; k < 5; k++) {
//             counter++
//             console.log({i, j, k, counter});
//         }
//     }
    
// }

// Вывод чисел

// for (let n = 1; n < 10; n++) {
//     let str = '';
//     for (let i = 0; i < n; i++) {
//         str += n + ' ';       
//     }
//     console.log(str);
// }

//** Итерация */
// Задача простое число
// for (let n = 3; n <= 100; n++) {
//     let flag = true;
//     for (let a = 2; a < n; a++) {
//         if (n % a === 0) {
//             flag = false;   
//             break; // останавливаем цикл, который самый близкий       
//         }  
//      }
//      if (flag) {
//         console.log( n + ' - простое число' );
//      } else {
//         console.log( n + ' - составное число' );
//      }
    
// }

// for (let i = 0; i < 100; i++) {
//    if (i % 7 === 0) {
//        continue; // прекращает выполнения текущую итерацию
//    }
// console.log(i);
// }


mainLoop: for (let i = 0; i <= 6; i++) {
    for (let j = 0; j <= 5; j++) {
        for (let k = 0; k < 5; k++) {          
            console.log({i, j, k});
            if ( i * j * k >= 100) {
                break mainLoop; //  прекращает тот цикл, который первоначально помечен labal
            }
        }
    }
    
}
