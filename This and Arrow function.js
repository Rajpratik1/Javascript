const user ={
    username:"Pratik Raj",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
console.log(this)
// function chai(){
//     let username ="Pratik Raj"
//     console.log(this.username)
// }
// const chai= function(){
//     let username ="Pratik Raj"
//     console.log(this.username)
// }
// chai()

const chai1 =()=>{
    let username = "Pratik Raj"
    console.log(this)
}
chai1()

// basic format of arrow function is ()=>{}
// const addTwo = (num1,num2)=>(num1 + num2 )  // This type of return is called implicit return

const addTwo = ()=>({name:"Pratik Raj"})
console.log(addTwo().name)  