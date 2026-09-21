/* No jokenpo, escolhemos entre pedra, papel e tesoura. O computador faz o mesmo;
Comparamos as escolhas e decidimos se houve vitoria, derrota ou empate;
A regra: pedra vence de papel, papel vence de tesoura e tesoura vence de pedra;
Precisamos mostrar o resultado na tela e mostrar o placar com pontos atualizados */


const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const choices = ["rock", "paper", "scissors"]

const pickAHand = () => {
    const randomNumber = Math.floor(Math.random() * choices.length)

    return choices[randomNumber]
}

const play = (playerChoice) => {
    const computerChoice = pickAHand()

    console.log(playerChoice, computerChoice)
    

    if (playerChoice === computerChoice) {
        console.log("DRAW")
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("YOU WIN")
    } else {
        console.log("COMPUTER WINS")
    }
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



