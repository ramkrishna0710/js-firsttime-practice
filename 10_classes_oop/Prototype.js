// let myName = "Ram  "

// console.log(myName.trueLengh);

let myHeros = ['thor','spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present is in all objects.`);
    
}

Array.prototype.heyRam = function(){
    console.log(`Ram is a tall boy`);
    
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyRam()
// heroPower.heyRam()


// inheritance 

const User = {
    name: 'Ramkrishna',
    email: 'ram@google.com'
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupprot = {
    makeAssignmenst: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "RamkrishnaMandal     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUserName.trueLength()
"ramkrishnamandal".trueLength()