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
// console.log(obj3);

const user = [
    {
        id:1,
        email: "r@gamil.com"
    },
    {
        id:1,
        email: "r@gamil.com"
    },
    {
        id:1,
        email: "r@gamil.com"
    },
    {
        id:1,
        email: "r@gamil.com"
    },
    {
        id:1,
        email: "r@gamil.com"
    },
]


user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('age'));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstuctor: "hitesh"
}

// course.courseInstuctor

const {courseInstuctor : instructot} = course

// console.log(courseInstuctor);
console.log(instructot);

// const navbar = (company) => {

// }
// navbar(company = 'hitesh')

