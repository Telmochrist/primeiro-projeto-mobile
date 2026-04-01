

const user = {
    nome: "Rodolfo",
    idade: 30, 
    filhos: null,
    hobbies: ["futebol", "codar", "viajar"],
    casado: true,
    empresas: {
        devclub: {
            fundada: 2021,
            colaboradores: 40
        },
        monsterapp: {
            fundada: 2023,
            colaboradores: 4
        },
        atlas: {
            fundada: 2023,
            colaboradores: 5
        },
        agendasua: {
            fundada: 2023,
            colaboradores: 4
        }
    }
}


const userJson = JSON.stringify(user)
console.log(userJson)