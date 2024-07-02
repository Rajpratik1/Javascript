const programming = ["js","c","rb","java","cpp"]
const values = programming.forEach((item)=>{
    console.log(item)
    return item
})

console.log(values)

//  ForEach nothing returns 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{
    // return num>4
// })
// console.log(newNums)

const newNums1 =[]

myNums.forEach((num)=>{
    if(num>4){
        newNums1.push(num)
    }
})
console.log(newNums1);

const book=[
    {
        title:'Book One' , genre:'Fiction',publish:1987, edition:2010
    },
    {
        title:'Book Two' , genre:'Math',publish:1989, edition:2000
    },
    {
        title:'Book Three' , genre:'Fiction',publish:1907, edition:2100
    },
    {
        title:'Book four' , genre:'Science',publish:1945, edition:1900
    },
    {
        title:'Book Five' , genre:'Zoology',publish:1987, edition:2010
    },
    {
        title:'Book Six' , genre:'Botony',publish:1582, edition: 2481
    },
    {
        title:'Book Seven' , genre:'Hindi',publish:1091, edition:1009
    },
    {
        title:'Book Eight' , genre:'Math',publish:1998, edition: 1652
    },
    {
        title:'Book Nine' , genre:'Music',publish: 1764, edition: 1709
    },
    {
        title:'Book Ten' , genre:'Botony',publish:1900, edition:1678
    },
]

let bookFilter = book.filter((namedo)=>namedo.genre === 'Math')

console.log(bookFilter)

bookFilter = book.filter((namedo)=>{
    return namedo.publish>=1100 && namedo.genre === 'Math'
})

console.log(bookFilter)