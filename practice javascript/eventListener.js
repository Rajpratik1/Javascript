let b = prompt('What is your favorite number?');

let z=function(e){
    alert("Hello")
}

let y=function(e){
    alert("Hello 323")
}

let x=function(e){
    alert("Hello")
}

button.addEventListener('click', x)

button.addEventListener('click', y)

button.addEventListener('click', z)

if (b==2){
    button.removeEventListener('click', x)}