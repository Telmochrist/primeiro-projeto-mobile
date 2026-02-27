/*
    string -> textos

*/

    const texto1 = "textos com aspas duplas"
    const texto2 = 'textos com aspas simples'
    const texto3 = `textos com crase`

    console.log(texto1)
    console.log(texto2)
    console.log(texto3)


    // template literals ou template string

    const myAge = 40
    const myCar = 'Audi'

    const myString = ` Minha idade é ${myAge}, to ficando velho. Mas pelo menos to andando de ${myCar}. `

    console.log(myString)


    /*
        4.Object -> objetos
    */

        const telmo = {
            name: "Telmo",
            age: "42",
            address: {
                street: "rua da fila",
                number: 0,
                city: "Pelotas",
                state: "RS",
                country: "brasil"
            } 
        }
            /*para alterar ex.--> telmo.address.number = 5
                                console.log (telmo) */

        console.log (telmo.address)


        /*5.null e undefined    
        */

        const user = {
            nome: "Telmo",
            idade: 42,
            id: null
        }

        console.log(user.id)


        /* 6.array--> pode colocar objetos, numeros, etc. 
        ele tem a posição começando do 0.
        */

        const users = [20, 30, 490]
        
        users[1] = 350

        console.log(users)

        /* if
            else

        */
       const notaDoAluno = 4
       const notaDeCorte = 5

       if(notaDoAluno > notaDeCorte){
        console.log("Parabens! Você foi APROVADO(A)")
       }
       else{
        console.log("Você foi REPROVADO(A)!!")
       }

       /* function 
            trecho de codigo que é executado
            SOMENTE quando solicitado/for chamado
        */

            const variavel = "abacate"

            console.log(variavel)

            function nomeDaTela() {

                console.log("Telmo")
            }

            nomeDaTela()