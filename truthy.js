const userEmail = "rajpratik796@gmail.com"
if(true){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}
const userEmail1 = "rajpratik796@gmail.com"
if(userEmail1){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}
const userEmail2 = []
if(userEmail2){
    console.log("Got user email");
}
else{
    console.log("Don't have user email")
}

// falsy values

//  false , 0, -0, 0n(BigInt) ,"",null ,ndefined, NaN

// truthy values

//"0" ,'false' ," " ,[] ,{} ,function(){}

const emptyObj ={}
if(Object.keys(emptyObj).length ===0){
    console.log(emptyObj);
}

// Nullish Coalescing Operator (??) It is mainly focus on null and undefined

let val1;
// val1 = 5 ?? 10;
val2 = null ?? 10

// console.log(val1)
console.log(val2)

// ?? It check safety for value printing  

// val1 = undefined ?? 15

// console.log(val1)
val1 = null ?? null ?? 10
console.log(val1)

//terinary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("more than 80"):console.log("less than 80")