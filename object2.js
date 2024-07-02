const tinderUser = new Object();
// const tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;
console.log(tinderUser);
// console.log(typeof tinderUser);

const regularUser = {
    email: "rajpratik796@gmail.com",
    fullname:{
        userfullname: "Pratik Raj",
        fist_name: "Pratik",
        LastName: "raj"
    }
}

// console.log(regularUser.email)
// console.log(regularUser.fullname.userfullname)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj5 = new Object();
// const obj3 ={obj1,obj2}
// const obj3 =Object.assign(obj1,obj2)
// console.log(obj3)
const obj4 =Object.assign({},obj1,obj2,obj5)  //{} is empty object and we are storing abj1 and abj2 into that empty object({}). This method can also be used to store all defined variable under the curly braces. 
// console.log(obj3)
console.log(obj4)
const obj6 = {...obj1,...obj2};  // This operator is called spread Operator.
console.log(obj6);

const users = [
    {
        id:64644,
        emailId: "rajpratik796@gmail.com"
    },
    {
        id:64644,
        emailId: "rajpratik796@gmail.com"
    },
    {
        id:64644,
        emailId: "rajpratik796@gmail.com"
    }
]

console.log(typeof(users));
users[1].emailId;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //This method is used to get the all keys in array format
// console.log(Object.values(tinderUser));  // This method is used to get the all values in array format
// console.log(Object.entries(tinderUser));  //This method is used to get all entries in array format
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //this property is used to check that the given element is present or not



//+++++++++Object DeStructuring

const course ={
    coursename:"js in Hindi",
    prince: "999",
    courseInstructor:"Hitesh"
}
//course .courseInstructor
const {courseInstructor:instructor} = course
console.log(course.courseInstructor)
console.log(instructor);
 
// const navbar =(company)=>{
      
// }

// navbar(company= "hitesh")  //This is generally doing  destructuring 
