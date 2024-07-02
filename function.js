function name1(){
    console.log("3"==="Boolean(11)")
}
// name()

function addtwonumbers(a,b){
    const c=a+b;
    return c
}
console.log(addtwonumbers(2,3))
console.log(2,3);

function loginUserMessage(name){
    return `${name} just logged in`
}
console.log(loginUserMessage("Pratik Raj"))

//++++++++++function with array and object+++++++++++

function calculateCarPrice(...num1){    // In function ( )...)is called as rest operator
    return num1
}
console.log(calculateCarPrice(200,300,400,5000))

const user={
    username : "Hitesh",
    price: 445
}
function handleObject(anyobject){
    console.log(` Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

const mynewArray = [ 200,2300,4966,77434,7434];
 function returnSecondValue(getArray){
    return getArray[1]
 }

console.log(returnSecondValue(mynewArray))