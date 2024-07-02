function multiple5(num){
    return num*5;
}

multiple5.power =2

console.log(multiple5(5));
console.log(typeof(this));
// console.log(multiple5.power);
console.log(multiple5.prototype);

function createUser (username,score){
    this.username=username;
    this.score=score;
    console.log(this)
}

createUser.prototype.increment=function(){
    /* The line `this.score++;` is incrementing the `score` property of the current object by 1. It is shorthand for `this.score = this.score + 1;`. This line is part of the `increment` method defined on the `createUser` prototype, which is used to increase the score of a user object by 1. */
    this.score++;
    console.log(this);
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

tea.printMe()
chai.printMe()
tea.increment()
chai.increment()

console.log(createUser.prototype);

/*  Here what happens behind the schenes when the new keyword is used;

A new object is created : The new keyword intitates the creation as a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.This means  that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor. Javascript assumes this.
*/