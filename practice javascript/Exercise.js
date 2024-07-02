setInterval(()=>{
    let date =new Date();
    let option ={
        weekday:"long",year:"numeric",month:"short",
        day:"numeric",hour:"2-digit",minute:"2-digit"
    };
    let d=date.toLocaleTimeString("en-us",option);
    time.innerHTML=d
},1000)