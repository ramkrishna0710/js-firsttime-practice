const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, networkcall, cryptography

    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consume");
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
    
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve({username: "Ram", email:"ramexample@com"})
    }, 1000);
})

promiseThree.then(function(user){

    console.log(user);

})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Ram", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(err) {
    console.log(err);
})
.finally(() => console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }   
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> {
    console.log(error);
})