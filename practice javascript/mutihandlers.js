let p1=new Promise((resolve,reject)=>{
 alert("Hey I am resolved")
 setTimeout(()=>{
    resolve(1);
 },2000)
})

p1.then (()=>{
    console.log("congratulation this promise is now resolved")
})

p1.then(()=>{
    console.log("Hurrey")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (4)
        },6000)
    })
}).then ((value)=>{console.log(value)})