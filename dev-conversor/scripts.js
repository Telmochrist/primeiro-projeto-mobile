
const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const valorToConvert = document.querySelector(".valor-to-convert")
    const valorConverted = document.querySelector(".valor")

    const dolarToday = 5.5

    const convertedValue = inputCurrencyValue / dolarToday

    valorToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    valorConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    
 


}

convertButton.addEventListener("click", convertValues)
