const loadscript =async(src)=>{
    return new Promise((resolve,reject)=>{
        let script= document.createElement("script")
        script.src=src
        script.onload =() =>{
            resolve(src)
        }
        document.head.append(script)
    })
}

// const main2 =async()=>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
//     console.log(new Date().getMilliseconds())
//     console.log(a)
// }
// main2()
// problem no 4
// let p=()=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("Please this is not acceptable"))
//     },3000)
// })
// }

// let a = async()=>
// {
//     try {
//         let c=await p()
//         console.log(c)
//     }
//     catch(err){
//         console.log("err")
//     }
// }
// a()

// Problem number4

let p1=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },2000)
    })
}
let p2=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },4000)
    })
}
let p3=async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        },5000)
    })
}

const run=async()=>{
    let a=p1
    let b=p2
    let c=p3
    let abc = await Promise.all([a,b,c])
    console.log(abc)
    console.timeEnd("run")
}
run()