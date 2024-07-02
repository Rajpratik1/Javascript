var b=221;
let c=3434;
const d = 3434;

let how = function scope(){
    let c=121212;
    const hau =3256353;
    var v =52522;
    console.log(c + hau +v);
}

console.log(how());
console.log(how.d);
console.log(how.b);

//scope level and mini hoisting

function one(){
    const username1 ="hitesh"
    const username = "Pratik Raj";
    console.log(username1);
    function two(){
        const website = "youtube"
        console.log(website);
        console.log(username);
    }
    two();
}
 
one()

//  ++++++++++++ interesting  ++++++++++++

   // two types of function declaration are following below
function addone(num){
    return num+1
}
// console.log(addone(5))


//Tis type of function declaration is called as expression (below)
const addTwo = function (num){   
    return num+2
}
// console.log(addTwo(5))
// for above expession of function if we declare console before the function declaration than it will reflect error becaue value of the function is stored in variable then if we write console first then  declared varible will be not their so,their will we an error/*  */