// # Premitive  -> Call by vlaue

// 7 -> String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 183
const scoreValue = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('124')
const anotherId = Symbol('124')

console.log(id === anotherId);

const bigNumber = 321466822222n



// # Reference (Non-premitive)  -> Reference type

//Array, Objects, Functions

const crickter = ["DHONI","SACHIN","JADEJA"]

let myObj = {
    name : "Ramkrishna",
    age : 22
}

const myfunctuion = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber)


/*
    Undefined -> "undefined"
    Null -> "object"
    Boolean -> "boolean"
    Number -> "number"
    String -> "string"
    Object(native and does not implement[[call]]) -> "object"
    Object(native or host and does implement[[Call]]) -> "function"
    Object(host and does not implement[[Call]]) ->  Implement-defined expert may not be "undefined","boolean","number" or "string"

*/


//********************************** */

//Stack (Primitive), Heap (Non-Primitive)

let nickName = "Raja"
let anotherName = nickName
anotherName = "Ramkrishna"

console.log(nickName);
console.log(anotherName);

let userOne = {
    email : 'user@gmail.com',
    upi : 'user@ybl'
}

let userTwo = userOne

userTwo.email = "ramkrishna@google.com"

console.log(userOne.email);
console.log(userTwo.email);