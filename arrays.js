//  ARRAYS

const myArr =[0,1,2,3,4,5,6,7,8,9,"Pratik_Raj"];
console.log(myArr[0])

//Array Methods

myArr.push(5556)
console.log(myArr)

myArr.pop()
console.log(myArr)
myArr.unshift(90)
console.log(myArr)
myArr.shift(90)
console.log(myArr)
console.log(myArr.includes(90));
console.log(myArr.indexOf(90));


const newArr = myArr.join()
console.log(myArr)
console.log(typeof(newArr))

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr);

const myn2 =myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)


console.log("Pratik Raj");
//+++++++++ HITESH CHAUDHRY+++++++++(Arr2)

const marvel_heros = ["Pratik","Ritik","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros); 
console.log(marvel_heros);
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heros]   //this operateor called spread operator 
console.log(all_new_heros)
const another_array = [1,2,3,[4,5],6,7,[6,7],[4,5]]
const real_another_array = another_array.flat(Infinity)   //  It is also used to write all element in one array 
console.log(real_another_array);

console.log(Array.isArray("PratikRaj")) // It is an array or not 
// console.log(Array.isString("PratikRaj"))
console.log(Array.from("PratikRaj"))
console.log(typeof(Array.from("PratikRaj")))
console.log(Array.from({name:"Pratik Raj"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));   //.of settles all given array into an array