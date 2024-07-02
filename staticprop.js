class User{
    constructor(username){
        this.username = username
        console.log(`This is the ${username}`)
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
/* `console.log(hitesh.createId());` is calling the static method `createId()` on the `hitesh` object.
Since `createId()` is a static method, it can be called directly on the class itself or on an
instance of the class. In this case, it is being called on the `hitesh` object. The method returns
the string `"123"`, so the output of the `console.log()` statement will be `"123"`. */
console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email;
    }
}

const iphone =new Teacher ("iphone","iphone@.com")
console.log(iphone.logMe);