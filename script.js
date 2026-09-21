/* No jokenpo, escolhemos entre pedra, papel e tesoura. O computador faz o mesmo;
Comparamos as escolhas e decidimos se houve vitoria, derrota ou empate;
A regra: pedra vence de papel, papel vence de tesoura e tesoura vence de pedra;
Precisamos mostrar o resultado na tela e mostrar o placar com pontos atualizados */


const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const playerChoiceDisplay = document.getElementById("player-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const resultMessage = document.getElementById("result-message")
const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0

const handEmoji = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
}



const choices = ["rock", "paper", "scissors"]

const pickAHand = () => {
    const randomNumber = Math.floor(Math.random() * choices.length)

    return choices[randomNumber]
}

const play = (playerChoice) => {
    const computerChoice = pickAHand()

    playerChoiceDisplay.textContent = handEmoji[playerChoice]
    computerChoiceDisplay.textContent = handEmoji[computerChoice]

    resultMessage.classList.remove("win", "lose", "draw")

    resultMessage.classList.remove("animate")
    void resultMessage.offsetWidth
    resultMessage.classList.add("animate")


    if (playerChoice === computerChoice) {
        resultMessage.textContent = "DRAW"
        resultMessage.classList.add("draw")


    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        resultMessage.textContent = "YOU WIN"
        resultMessage.classList.add("win")
        playerScore++

    } else {
        resultMessage.textContent = "COMPUTER WINS"
        resultMessage.classList.add("lose")
        computerScore++

    }

console.log("Player score:", playerScore)
console.log("Computer score:", computerScore)

playerScoreDisplay.textContent = playerScore
computerScoreDisplay.textContent = computerScore

}




rock.addEventListener("click", () => {
    play("rock")
})

paper.addEventListener("click", () => {
    play("paper")
})

scissors.addEventListener("click", () => {
    play("scissors")
})








