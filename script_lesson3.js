// сложение строк

const str3 = "hello world";
const str1 = " ";
const str2 = "Mappi";
const str = str1 + str2 + str3;

console.log(str);

//boolean

!true // false
!!true // true
true && true // true
false && false // false
true || true // true
true || false // true

true || true && (true || false) // textUnderlinePosition: 
1 + 2
2 - 3
10 * 2
12 % 7 // 5
5 ** 2 === 25;
100 ** 0.5 === 10;

Math.cos(Math.Pi) === - 1;
Math.cos(180) !== - 1; // угол в радианах

0.1 + 0.2 !== 0.3 // проблема счисления
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON // проблема счисления

// BigInt
100 + 100 // true
10n + 10n // true
10n + 10 // false

''.length // 0 - пустая строка
Infinity // бесконечно большое число
-Infinity // бесконечно малое число
1 / 'яюлоко' // NaN - не число
Infinity - Infinity = NaN
NaN + 1 = NaN
typeof NaN === 'number' 
NaN !== NaN //  не равен нечему
сonst a = 1/ 'яблоко';
isNaN(a); // textUnderlinePosition: 
object.is(NaN, NaN);
Infinity !== -Infinity // не равно
0 !== -0 // не равно

//** Приведение типов */
'123' + 4 // '1234'
4 + '123' // '1234'
Number(1) // 1
Number('1243') // 1243
String(123) // '123'
String(undefined) // 'undefined'
Boolean(0) // false
Boolean(1) // true
Boolean(-0) // false
Boolean(false) // false
Boolean(NaN) // false
Boolean(undefined) // false
Boolean(0n) // false
Boolean(null) // false
Boolean('') // false

//** Конвенртация в число */
Number(123) // 123
Number(123.123) // 123.123
Number(123.123f) // NaN
parseInt('123.123f') //123 - только целую часть
parseFloat('123.23 dddsdsd 222dd') //123.23

