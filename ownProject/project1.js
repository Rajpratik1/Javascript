//const click = document.querySelector('#color');


const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(const i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;
    const startChangingColor = function(){
        if(!intervalId){
            intervalId=setInterval(changeBgcolor,1000);
        }
    
        function changeBgcolor(){
        document.body.style.backgroundColor =randomColor();
        }
    };
    
    const stopChangingColor = function(){
        clearInterval(intervalId);
        intervalId = null;
    };
    
    document.querySelector('#color').addEventListener('click',startChangingColor);
    
    document.querySelector('#color').addEventListener('click',stopChangingColor);