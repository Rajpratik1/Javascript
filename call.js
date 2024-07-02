function Setusername(username){
    //
    this.username =username;
    console.log();
}

function createUser(username,email,password){
    /* `Setusername.call(this,username);` is invoking the `Setusername` function with the `this`
    context set to the current object (the object being created by the `createUser` constructor
    function) and passing the `username` argument. This allows the `Setusername` function to set the
    `username` property of the current object. */
    Setusername.call(this,username);
    this.email=email;
    this.password = password; 
}    

const name = new createUser("Pratik Raj","rajpratik@google.com",1234)

console.log(name);