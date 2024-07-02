function loadScript(src,callback){
    var script = document.createElement("script");
    script.src=src;
    script.onload = function(){
        console.log("loaded script with SRC:"+ src)
        callback(null,src);
    };
    script.onerror= function(){
        console.log("Error loading script with SRC:"+src);
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}
function hello(erro, src)
{
    if(error){
        console.log("error")
        return 
    }
    alert('Hello World');
}

function goodmorning(src){
    if(error){
        console.log("error")
        return 
    }
    alert('goodmorning'+ src);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",hello(), goodmorning())

// // This function dynamically loads a JavaScript file and executes a callback function after it's loaded.
// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function () {
//         console.log("Loaded script with SRC: " + src);
//         callback(); // Call the provided callback function after the script is loaded.
//     };
//     document.body.appendChild(script); // Append the script element to the body to initiate loading.
// }

// // This function displays an alert with the message "Hello World".
// function hello() {
//     alert('Hello World');
// }

// // This function displays an alert with the message "goodmorning".
// function goodmorning() {
//     alert('Good morning');
// }

// // Load the Bootstrap script and call the "hello" function after it's loaded.
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function(){
//     hello();
//     goodmorning();
// });
