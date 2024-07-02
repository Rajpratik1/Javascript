const mySym = Symbol("key1")
const JsUser={
    name:"Pratik Raj",
    "Full Name":"Pratik Raj",
    age:22,
    email:"rajpratik79@gmail.com",
    isLoggedIn:false,
    [mySym]:"mykey1",  //here this line symbol
    LastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);  // This line is showing right declaration of object
console.log(typeof(JsUser["Full Name"]));
console.log(typeof mySym)
// console.log(JsUser [mySym])

JsUser.email="ritikrajphonebook.com"
Object.freeze(JsUser)  //It will freeze the all access of string into the object
JsUser.email = "ritikrajmicrosoft@gmail.com"
console.log(typeof JsUser.name)
console.log(JsUser["Full Name"]);
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greetingTwo);

JsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(JsUser);