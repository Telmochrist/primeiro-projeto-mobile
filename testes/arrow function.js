
/* 
    function padrao -> function() {}

    arrow function -> const nomedafuncao = () => {}
*/


function sayMyName(name){
    return `Seu nome é ${name}`
}

const sum = (number1, number2) => number1 + number2

console.log(sayMyName('Telmo'))
console.log(sum(5, 10))