
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")    

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const valorToConvert = document.querySelector(".valor-to-convert")
    const valorConverted = document.querySelector(".valor")

    
    const dolarToday = 5.5
    const euroToday = 6.5

   

    if(currencySelect.value == "dolar"){
        valorConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }
    
    if(currencySelect.value == "euro"){
        valorConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

    }


    valorToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")

        if(currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dolar"
            currencyImage.src = "./assets/Eua.png"
        }

        if(currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/Euro.png"
        }

         convertValues()      
    }    



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
