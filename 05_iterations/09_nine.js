const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`acc : ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 3)

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'java',
        price: 4999
    },
    {
        itemName: 'react-native',
        price: 1999
    },
    {
        itemName: 'kotlin',
        price: 2999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0)

console.log(priceToPay);