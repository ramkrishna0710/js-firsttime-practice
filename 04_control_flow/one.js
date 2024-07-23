const isUserLoggedIn =true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy course");
} else {
    console.log("not");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}