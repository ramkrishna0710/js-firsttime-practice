let score = "33abc"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" -> 33
// "33abc" -> NaN
// true = 1 / false = 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 -> true / 0-> false 
// "" -> false
// "ramkrishna" -> true

let age = 21

let stringNumber = String(age)
// console.log(typeof(stringNumber));


// ******************  Operation  ***************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " ramkrishna"

// console.log(str1 + str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);
// console.log(+"");

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

