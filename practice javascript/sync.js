async function harry(){
    let gayaWeather= new Promise((resolve,reeject)=>{
    setTimeout(()=>{
        resolve("data 1")
    },1000)
})
let patnaWeather= new Promise((resolve,reeject)=>{
    setTimeout(()=>{
        resolve("data 1")
    },2000)
})
// gayaWeather.then(alert)
// patnaWeather.then(alert)

console.log("Fetching Patna weather Please wait ---")
let patna=await patnaWeather
console.log("Fetched gaya weather is" + patnaWeather)

console.log("Fetching Gaya weather Please wait ---")
let gaya =await gayaWeather
console.log("Fetched gaya weather is" + gayaWeather)
        return (patna,gaya)
}

const cherry= async  =>{
    console.log("Hey I am cherry and I an not waiting")
}

const main1 =async()=>{
console.log("Welcome to weather control room")
let a=await harry()
let b=await cherry()
 
}
main1 ()