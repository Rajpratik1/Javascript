const gameName = new String('hiteshc')
console.log(gameName)
console.log(gameName.__proto__); // It return prototype of string  {}
console.log(gameName.length);   // It return length mof variable
console.log(gameName.charAt(5));    // It return the character at asking position
console.log(gameName.toUpperCase());    // It converts all the variable value in uppecase 
console.log(gameName.indexOf('s'))     // It gives the value at where s is positioned
console.log(typeof(gameName))    //   It gives the typeof value stored in variable
/* The code `const newName = gameName.substring(-4 ,4)` is attempting to extract a substring from the
`gameName` string starting at index -4 and ending at index 4. However, in JavaScript, if the start
index provided to the `substring` method is negative, it is treated as 0. So, in this case,
`gameName.substring(-4 ,4)` will actually return the substring starting from index 0 to index 4 of
the `gameName` string. */
const newName = gameName.substring(-4 ,4)   // It return the value from 0 to 3 
console.log(newName)
const newName1 = gameName.slice(0,4)    // It return the cahracter from 0 to 3
console.log(newName1)
const date = new Date();   
const templateLiteral = `The current date is ${date}`;    //It is template literal which is used to embed express
console.log(templateLiteral)
console.log(typeof(templateLiteral))    // It will return String because template Literal is the type of template litral and template litral return string
const anotherSring =newName.slice(-8,4);
console.log(anotherSring)
const newStringOne = "Pratik Raj"
console.log(newStringOne)
console.log(newStringOne.trim())  //It generally remove white space

const newUrl = "https:\\pratikraj.com\\%30\\Pratik-raj";
console.log(newUrl)
console.log(newUrl.replace('%30','Ritik Raj'))  // replace is used to replace some character into some location
console.log(newUrl.includes('pratikraj'))    // includes generally checks it is there or not
console.log(newStringOne.split('R'))   // split generally split the whole value from where the given character is present