// let promise = new Promise(function(resolve,reject){
//     alert("Hello")
//     resolve(54)
// })
// console.log("Hello One")
// setTimeout(function(){
//     console.log("Hello Two in 2 seconds")
// },2000)
// console.log("My name is "+"Hello Three")
// console.log(promise)

//syntax of promise
let p=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am resolved")
        // resolve(true)
        resolve(true)
    },3000)
})

let p1=new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promise and I am rejected")
        // resolve(true)
        reject(new Error("I am an error"))
    },3000)
})

p.then((value) =>{
    console.log(value)
})

p1.catch((error)=>{
    console.log("Some error  catches in p1")
})
console.log(p,p1) 