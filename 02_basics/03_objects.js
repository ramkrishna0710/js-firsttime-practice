// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ramkrishna",
    age: 21,
    "full name": "Ramkrishna Mandal",
    [mySym]: "mykey1",
    location: "Kolkata",
    email: "ram@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email = "ramkrishna@google.com"
// Object.freeze(JsUser)
JsUser.email = "ram@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());