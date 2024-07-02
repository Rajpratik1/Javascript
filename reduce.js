const myNums =[1,2,3]

const myTotal = myNums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc+currval
},0)
// console.log(myTotal)

const shoppingCart =[
    {
    itemName:"js",
    price:2999
    },

    {
    itemName:"Java",
    price:6999
    },

    {
    itemName:"Web Development",
    price:10999
    },

    {
    itemName:"C",
    price:999
    },
    
    {
    itemName:"Data Science",
    price:18999 
    }
]

const total= shoppingCart.reduce((acc,item)=> acc + item.price,0) 

console.log(total)