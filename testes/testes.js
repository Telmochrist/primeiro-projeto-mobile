
const cart = [ 50, 150, 30, 15, 5]
let finalValueWidthDiscount = 0
let finalValue = 0

cart.forEach((price) => {
    finalValue += price
});

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result 
}

cart.forEach((value) => {
    if(value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWidthDiscount = finalValueWidthDiscount + (value - discount)
    } else {
        finalValueWidthDiscount += value
    }
});

console.log(`O valor final da compra foi de R$ ${finalValue.toFixed(2)}, 
porém você teve desconto e irá pagar apenas R$ ${finalValueWidthDiscount.toFixed(2)},
 você economizou R$ ${((finalValue - finalValueWidthDiscount).toFixed(2))}`)
