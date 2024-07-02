const score = 500;
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(5))
console.log(typeof(balance))

const othernumber = 23.5666456787;
console.log(typeof(othernumber))
console.log(othernumber.toPrecision(3))

const num= 1000000000
console.log(num.toLocaleString())


//  ++++++++++++MATHS+++++++++++++++//
console.log(Math)
console.log(Math.abs(-45)) // Math.abs defines absolute value of -45 and gives +ve value
console.log(Math.round(5.67))  // math.round gives the round value of 5.67 either 5 if value is less than 5.5 or 6 if value is greater than 5.5
console.log(Math.ceil(4.6))  //mah.ceil defines gives upper value of given value
console.log(Math.floor(4.5))  // floor gives the ground value of given value
console.log(Math.min(4,5,565,76)) // minimum value of the all the given value
console.log(Math.max(4,5,565,76)) // minimum value of the all the given value
console.log(Math.random());  // It gives the random value between 0 - 1
console.log((Math.random()*10)+1); // it gives the value 
console.log(Math.floor(Math.random()*10)+1);

const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1))+min)