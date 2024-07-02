// for of loop

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

//  means in forof loop all element of arr store in num and print one by one

const greetings = "Hello World!"
for (const iterator of greetings) {
    // console.log(`Each char is ${iterator}`)
}

// Maps
// It is a object.which hold key-value pair
// It is generally known as unique values. 
const map =new Map();
map.set('In',"India")
map.set('USA',"United States Of America")
map.set('Fra',"France")
map.set('In',"India")

// console.log(map)
// console.log(typeof map)  // It return object 
for (const  [key,value]  of map) {
    // console.log(key,':-',value);
}

const myObject ={
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,':-',value)
}