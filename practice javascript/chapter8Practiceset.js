// document.getElementsByTagName("google").addEventListener("click",function(){
//     var url="https://www.google.com/search?q=javascript";
//     var win = window.open(url,"","width=500,height=500,scrollbars=yes,resizable=yes");
//     win.focus();
// } )

// setInterval(async function(){
//     let url="https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// },3000)

// const fetchContent=async (url)=>{
//     con =await fetch(url);
//     let a= await con.json()
//     return a;
// }

setInterval( function(){
    document.querySelector("#bulb").classList.toggle("bulb-container")
},300)