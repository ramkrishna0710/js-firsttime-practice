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
