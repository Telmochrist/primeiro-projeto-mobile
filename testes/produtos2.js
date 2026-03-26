
const list = document.querySelector('ul')
const buttonMostrarTudo = document.querySelector('.mostrar-tudo')
const buttonMapear = document.querySelector('.mapear')
const buttonSomarTudo = document.querySelector('.somar-tudo')
const buttonFiltrar = document.querySelector('.filtrar')


function formatCurrency (value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}

function mostrarTudo(productArray) {
    let myLi = ''

    productArray.forEach(product => {
        myLi = myLi + `
        
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${formatCurrency(product.price)}</p>
        </li>
    `
    })
    list.innerHTML = myLi
}


function mapear() {
    const newPrices = menuOptions.map(product => ({
        ...product,
        price: product.price * 0.9,

    }))

    mostrarTudo(newPrices)

}

function somarTudo() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML= `
         <li>
            <p>A soma total do valor é de R$ ${formatCurrency(totalValue)}</p>
         </li>   
        `
}

function filtrar() {
    const veganos = menuOptions.filter((product) => product.vegan === true)
      
    mostrarTudo(veganos)

  
}




buttonMostrarTudo.addEventListener('click', () => mostrarTudo(menuOptions))
buttonMapear.addEventListener('click', mapear)
buttonSomarTudo.addEventListener('click', somarTudo)
buttonFiltrar.addEventListener('click', filtrar)