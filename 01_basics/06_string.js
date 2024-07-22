const name = "ramkrishna"
const repoCount = 10

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //backtics

const gameName = new String('Ramkrishna_mandal_07')

// console.log(gameName.length);
// console.log(gameName.__proto__);


// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('i'));

// console.log(gameName.sub(2));
// console.log(gameName.strike());

const newString = gameName.substring(0,3)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "     ramkrishna    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://raja.com/ramkrishna%20mandal"
console.log(url.replace('%20', '-'));

console.log(url.includes('ram'))

console.log(gameName.split('_'));