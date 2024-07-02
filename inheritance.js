class User{
    constructor(username){
        this.username = username
        console.log(`This is the ${username}`)
    }
    
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        // this.username = username;
        /* The `super(username)` statement in the `Teacher` class is calling the constructor of the
        parent class (`User`) and passing the `username` parameter to it. This is necessary because
        the `User` class has its own constructor that initializes the `username` property. By
        calling `super(username)`, the `Teacher` class is able to inherit the `username` property
        from the `User` class and set it for instances of the `Teacher` class. */
        super(username)
        this.email=email;
        this.password=password;
}
    addCourse(){
        console.log(`A new course was added by${this.username}`);
    }
}

const chai = new Teacher("chai","chai@gmail.com","123")
// console.log(chai)
chai.addCourse()

const mchai = new User("masalaChai");
mchai.logMe()
// mchai.constructor()

console.log(chai instanceof User);