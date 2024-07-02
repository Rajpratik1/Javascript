let p=fetch("https://api.weather.gov/ ")
p.then((response)=>{
    console.log(response.status)
    console.log(response.headers)
    console.log(response.ok)
    return response.json()
}).then((value1)=>{
    console.log(value1)
})