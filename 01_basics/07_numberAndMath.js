const score = 700

const balance = new Number(100)
// console.log(balance);

// Number.MAX_VALUE

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const otherNumber = 26.57333
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));  // Indian format

// +++++++++++++++++  MATHS  +++++++++++++++++++

// console.log(Math.abs(-478));
// console.log(Math.round(-478.26));
// console.log(Math.ceil(5.3));
// console.log(Math.floor(5.3));
// console.log(Math.sqrt(64));
// console.log(Math.min(64,58,99,22,33));
// console.log(Math.max(64,58,99,22,33));

// console.log(Math.random());  //0 to 1
// console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min)