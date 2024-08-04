class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const ram = new Teacher("chai", "chai@123", "123")

ram.addCourse()
ram.logMe()

const masalaChai = new User("Masal Chai")
masalaChai.addCourse()

console.log(ram instanceof Teacher);
console.log(ram instanceof User);
