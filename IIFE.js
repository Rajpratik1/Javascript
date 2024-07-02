/* The comment `// What is IIFE` is providing a brief explanation or heading for the subsequent code
block that explains what an IIFE (Immediately Invoked Function Expression) is. It serves as a way to
introduce the concept that will be discussed in the code snippet that follows. */
// What is IIFE
//  IIFE is used to remove pollution from global variable

//declaration of IIFE 

(function chai(){
    //It is named iife
    console.log(`DB CONNECTED`);
})();

(function chai1(){
    //It is also named iife
    console.log(`DB CONNECTED`);
})();

((PRATIKRAJ)=>{
    //It is unnamed iife
    console.log(`DB CONNECTED TWO ${PRATIKRAJ}`);
})("Blank")