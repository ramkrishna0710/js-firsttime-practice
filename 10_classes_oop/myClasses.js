// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     userchnageUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ram = new User("Ram", "ram@gmail.com", "123")

// console.log(ram.encryptPassword());
// console.log(ram.userchnageUserName());

// =========== behind the scene ==========

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.changeUserName = function() {
    return `${this.username}abc`
}
User.prototype.encryptPassword = function() {
    return `${this.username.toUpperCase()}`
}

const rama = new User("Rama", "ram@gmail.com", "123")
console.log(rama.encryptPassword());
console.log(rama.changeUserName());
