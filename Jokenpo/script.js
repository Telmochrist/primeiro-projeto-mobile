
const result = document.querySelector('.result')
const ganhosScore = document.querySelector('#ganhos')
const perdasScore = document.querySelector('#perdas')
const empatesScore = document.querySelector('#empates')

let ganhosScoreValue = 0
let perdasScoreValue = 0
let empatesScoreValue = 0



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        empatesScoreValue++
        empatesScore.innerHTML = empatesScoreValue
        result.innerHTML = "Deu empate!"

    } else if ((human === 'pedra' && machine === 'tesoura') ||
                (human === 'papel' && machine === 'pedra') ||
                (human === 'tesoura' && machine === 'papel'))
     {
        ganhosScoreValue++
        ganhosScore.innerHTML = ganhosScoreValue
        result.innerHTML = "Você ganhou!"

    } else {
        perdasScoreValue++
        perdasScore.innerHTML = perdasScoreValue
        result.innerHTML = "Você perdeu!"
    }
}

