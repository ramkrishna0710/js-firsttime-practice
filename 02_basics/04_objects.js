// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ram"
tinderUser.age = 21

// console.log(tinderUser);

const regularUser = {
    email: "ram@gmail.com",
    fullname: {
        userFullName:{
            firstname: "ramkrishna",
            lastname: "mandal"
        }
    }
}

// console.log(regularUser.fullname?.userFullName?.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const user = [
    {
        id:1,
        email: "r@gamil.com"
    }
]