const cricketHeros = ["Sachin","Dhoni","Virat"]
const footballHeros = ["Messi","Neymar","Ronaldo"]

// cricketHeros.push(footballHeros)

// console.log(cricketHeros);
// console.log(cricketHeros[3][2]);

// const allHeros = cricketHeros.concat(footballHeros)
// console.log(allHeros);

const allNewHeros = [...cricketHeros, ...footballHeros]
// console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotheArray = another_array.flat(Infinity)

// console.log(realAnotheArray);

// console.log(Array.isArray("Ramkrishna"))
// console.log(Array.from("Ramkrishna"))        
// console.log(Array.from({name: "ramkrishna"})) // intersting

let score1 = 100     
let score2 = 200     
let score3 = 300     

console.log(Array.of(score1, score2, score3));