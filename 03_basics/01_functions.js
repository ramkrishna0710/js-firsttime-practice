function sayMyName(){
    console.log('R');
    console.log('A');
    console.log('M');
    console.log('K');
    console.log('R');
    console.log('I');
    console.log('S');
    console.log('H');
    console.log('N');
    console.log('A');
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(3,5)

// console.log(`Result is ${result}`);

function loginUserMessage(username = 'ram'){
    if (username === undefined) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ram"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())