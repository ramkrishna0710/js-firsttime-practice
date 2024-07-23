const user = {
    username: "ramkrishna",
    price: 999,

    welcomeMesage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMesage()
// user.username = "Riya"
// user.welcomeMesage()

// console.log(this);

// function chai(){
//     let username = "ramkrishna"
//     console.log(this);
// }

// chai()

// const chai = function(){
//     let username = "ramkrishna"
//     console.log(this);
// }
// chai()

// const chai = () => {
//     let username = "ramkrishna"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 * num2
// }

// const addTwo = (num1, num2) => num1 * num2

// const addTwo = (num1, num2) => (num1 * num2)

const addTwo = (num1, num2) => ({username : "ram"})

console.log(addTwo(2, 5));

