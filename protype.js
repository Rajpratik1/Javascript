// let myName = "hitesh       ";
let myChannel="chai"
// console.log(myName.trim().length)
console.log(myChannel.trueLength);

let myHeros = ["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(this.spiderman);
    }
}

// heroPower.getSpiderPower()
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh=function(){
    console.log(`Hey! How are you ?`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

//inheritance

const user= {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

/* The line `Teacher.__proto__= User` is setting the prototype of the `Teacher` object to be the `User`
object. This means that any properties or methods that are not found in the `Teacher` object will be
looked up in the `User` object. It establishes a prototype chain where `Teacher` inherits properties
and methods from `User`. */
Teacher.__proto__= user

//modern syntax

/* The line `// Object.setPrototypeOf(TeachingSupport,Teacher)` is setting the prototype of the
`TeachingSupport` object to be the `Teacher` object. This means that any properties or methods that
are not found in the `TeachingSupport` object will be looked up in the `Teacher` object. It
establishes a prototype chain where `TeachingSupport` inherits properties and methods from
`Teacher`. */
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername ="ChaiAurCode"

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()