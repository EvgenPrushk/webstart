// if (condition) {
//     <Тело>
// }

if (true) {
    console.log('Истина');
} 

if (false) {                    // не чего не выполниться   
    console.log('Конец');
} 

if (Math.PI > 3) {                  
    console.log('Истина');
} else {
    console.log('Ложь');
}

// цепочка условий
const age = 30;
if (age < 18) {
    console.log('Ребенок');
} else  if (age < 25) {
    console.log('Подросток');
} else if (age < 50) {
    console.log('Взрослый мужчина');
}

userName = "Алексей"
switch(userName) {
    case "Алексей": 
    console.log('Алексей -  имя означает "защитник');
    break;
    case "Сергей":
    console.log('Сергей -  имя означает "высокий');
    break;
    case "Тимофей":
    console.log('Тимофей - имя означает "почитающий бога');
    break;
    default:
        console.log('я не знаю значение этого имени');
}

//** Тернарные операторы */

const age = 10;
let status = null;
if (age < 18) {
    status= 'child';
} else {
    status = 'adult';
}
console.log({age, status});
// использоваться для очень простых вещей
const status = age < 18 ? 'child' : 'adult';
// плохая практика, т.к вызывается функция
age < 18 ? console.log('child') : console.log('adult');

if (age < 18) {
    console.log('Ребенок');
} else  if (age < 25) {
    console.log('Подросток');
} else if (age < 50) {
    console.log('Взрослый мужчина');
}

console.log(
    age < 18
    ? 'Ребенок' 
    : age < 25 
    ? 'Подросток'
    : age < 50 
    ? 'Взрослый мужчина' 
    : 'У меня нет слов'
);

const age = 20;
if (18<= age && age <=25) {
    console.log('Hello');
}

>, <, >=, <=, !0 // операторы матиматически

5 === 5 // true
5 == 5 //true
'5' == 5 // true
'5' === 5 // false
NaN == NaN // false
100 !== 99 //true
'a' > "b" // false
'a' < "b" // true
'a'.charCodeAt(0) // 97
'b'.charCodeAt(0) // 98
'aa' < 'ab' // true


//** Modal Window */

alert('Hello'); // сообщает текст пользователю
confirm("Вам есть 18 лет?") // ок - true, cansel - false
prompt('Как Вас зовут?') // позволяет ввести ответ - функция позволяющая вести текст в виде строки

userName = prompt('Как тебя зовут', 'Алексей'); // вторым аргументом вставляется по умолчанию значение
switch(userName) {
    case "Алексей": 
    console.log('Алексей -  имя означает "защитник');
    break;
    case "Сергей":
    console.log('Сергей -  имя означает "высокий');
    break;
    case "Тимофей":
    console.log('Тимофей - имя означает "почитающий бога');
    break;
    default:
        console.log('я не знаю значение этого имени');
}

alert('Приветствую тебяя в нашем приложении');
const userName = prompt('Как тебя зовут', 'Алексей');
alert(userName + 'какое красивое имя!');
const answer = confirm("Вам все понравилось?");
if (answer) {
    alert(' Рады, что наш сервис Вам понравился')
} else {
    'Будем работать над ошибкой'
}

const number1 = parseFloat(prompt('Введите первое число:'));
const number2 = parseFloat(prompt('Введите второе число:'));
const operation = prompt('Введите операцию', 'сложение')
switch(userName) {
    case "сложение": 
    case "Cложение": 
    case "+": 
        alert(number1 + number2)
    break;
    case "умножение":
    case "Умножение":
    case "*":
    alert(number1 * number2)
    break;
    case "вычитание":
    case "Вычитание":
    case "-":
    alert(number1 - number2)
    break;
    case "деление":
    case "Деление":
    case "/":
        alert(number1 / number2)
    break
}
