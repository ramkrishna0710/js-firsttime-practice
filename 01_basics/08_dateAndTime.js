// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

let myCreatedDate = new Date(2003,0,1)
// console.log(myCreatedDate.toDateString());

// let myNewCreatedDate = new Date(2003,0,1, 5, 3)
let myNewCreatedDate = new Date("01-01-2003")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myNewCreatedDate.getTime());

// console.log(Math.round(Date.now()/1000));

let newDate = new Date()

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'getTime'
})