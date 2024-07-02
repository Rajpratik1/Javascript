let first=document.getElementById("first");
let a = first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
first.hasAttribute("hidden","true")
first.setAttribute("class","true Sachin")

first.removeAttribute("class")
console.log(first.attributes)