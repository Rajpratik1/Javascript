const name ="hitesh"
const repoCount =50

// cosnsole.log(name+ repoCount + "Value") This is old method to concate
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-name')
console.log(gameName[0])
console.log(gameName.indexOf('t'))
console.log(gameName.charAt (4))
const newString = gameName.substring(0,4)
console.log(newString)
const anotherString =gameName.slice(-8,5)
console.log(anotherString)
const anotherString1 =gameName.slice(-4,8)
console.log(anotherString1)

const url = "https://hitesh.com/hitesh%20chaudhry"
console.log(url.replace('hitesh','pratik'),url.replace('chaudhry','raj'))
console.log(url.includes('name'))
console.log(gameName.split('-'))
const number =5452524525252n;
console.log(typeof number)
console.log(number.length)
console.log("3" === 3)
