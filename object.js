const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const name in myObject){
    console.log(`${name} shortcut is for ${myObject[name]}`)
}

const programming = ["js","c","rb","java","cpp"]

for (const key in programming) {
    console.log(key);
}

const map =new Map();
map.set('In',"India")
map.set('USA',"United States Of America")
map.set('Fra',"France")
map.set('In',"India")

/* `console.log(JsUser["Full Name"]);` is accessing the value of the property with the key "Full Name"
in the JsUser object and logging it to the console. In this case, it will output "Pratik Raj" as the
value associated with the "Full Name" key in the JsUser object. */

console.log(map);
for (const key in map) {
    console.log(key[map])
}

const programming1 = ["js","c","rb","java","cpp"]

// This is forEach Loop
programming1.forEach( function (val){
    // console.log(val)
})

programming1.forEach((item) =>{  // this is callback function. It is run under the defined array
    // console.log(item);
})

function printMe(item){
    console.log(item)
}

programming1.forEach(printMe)

programming1.forEach((item,index,programming)=>{
    console.log(item,index,programming);
})

const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item1)=>{
    console.log(item1.languageFileName)
})