
const cart = [
    { produto: 'Abobora', pricePerKg: 5, Kg: 1 },
    { produto: 'Pepino', pricePerKg: 3.55, Kg: 1.3 }, 
    { produto: 'Limão', pricePerKg: 1.2, Kg: 2 }, 
    { produto: 'Abacate', pricePerKg: 5.4, Kg: 1.67 },
    { produto: 'Morango', pricePerKg: 11.9, Kg: 3 }, 
]

const total = cart.reduce((acc, item) => {
    return acc + (item.pricePerKg * item.Kg)
}, 0)   

console.log((total).toFixed(2) )