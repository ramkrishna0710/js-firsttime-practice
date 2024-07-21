const accountId = 42031
let accountEmail = "ram@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState
// accountId = 124   // not allowed 

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

accountEmail = "ramkrishna@gmail.com"
accountPassword = "145623"
accountCity = "Baruipur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])