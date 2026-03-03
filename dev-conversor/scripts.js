
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") 
   

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const valorToConvert = document.querySelector(".valor-to-convert")
    const valorConverted = document.querySelector(".valor")

    
    const dolarToday = 5.5
    const euroToday = 6.5
    const libraToday = 6.9
    const bitcoinToday = 343650.0

   

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

    if(currencySelect.value == "libra"){
        valorConverted.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        valorConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect.value == "real"){
        valorConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    }


    valorToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    


    if(currencySelect2.value == "dolar"){
        valorConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
    }

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

        if(currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra 1.png"
        }

        if(currencySelect.value == "bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyImage.src = "./assets/bitcoin 1.png"
        }

        if(currencySelect.value == "real") {
            currencyName.innerHTML = "Real"
            currencyImage.src = "./assets/brasil.png"
        }

         convertValues()      
    }    



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
