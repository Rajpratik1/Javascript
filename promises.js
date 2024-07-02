// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls,cryptography, network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// });

// new promiseOne(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Pratik Raj",eamil:"rajpratik796@gmail.com"})
//     },1000)
// }).then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     let error = true;
//     setTimeout(function(){
//         if(!error){
//             resolve({username:"Pratik Raj",email:"rajpratik796@gmail.com"})
//         }else{
//             reject('ERROR: Something went wrong');
//         }
//     },1000)
// })

// // promiseFour.then((user)=>{
    // console.log(user);
    // return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected")
// })
// console.log(username);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Pratik Raj",email:"ritikraj@gmail.com"})
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

// async function consumePromiseFive(){
//     const response  =await promiseFive;
//     console.log(response);
// }
//this is also correct

async function consumePromiseFive(){
    try {
        const response  =await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
//this is also same as above.It depends on you what do you want to implement. 
consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//      const data = await response.json();
//      console.log(data);
//     } catch (error) {
//         console.log("E:"+error);
//     }
// }

// getAllUsers();



fetch('https://api.github.com/users/hiteshchaudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))