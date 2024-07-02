const oops={
    name:"Pratik Raj",
    roll_no :"27600321001",
    address: "lakhna ,Patna",
    call :function (){
        console.log(this.name);
        console.log("My name is Pratik Raj.")
    }
}
// console.log(oops.name);
// console.log(oops.call());
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    //return this;
}

const userOne = new User("hitesh",12,true);
const userTwo = new User("Pratik Raj",14,false);

// console.log(userOne);
// console.log(userTwo);

// step:1 = we are creating new object using new keyword
// step:2 = Constructor function call due to new keyword
// step:3 = In this step all argument is inject in this keyword.
// step:4 = finally it reaches throgh function to us.

function Car(make,model,year){
    this.make=make;
    this.model=model;
    this.year= year;
}

const auto =new Car('Honda','Accord',1990);

console.log(auto instanceof Car);

console.log(auto instanceof Object);



