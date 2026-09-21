/* No jokenpo, escolhemos entre pedra, papel e tesoura. O computador faz o mesmo;
Comparamos as escolhas e decidimos se houve vitoria, derrota ou empate;
A regra: pedra vence de papel, papel vence de tesoura e tesoura vence de pedra;
Precisamos mostrar o resultado na tela e mostrar o placar com pontos atualizados */




const rock = document.getElementById("rock")

rock.addEventListener("click",() => {
    playerChoice = "rock"

    const computerChoice = pickAHand()

console.log("You choose ROCK")
console.log("The computer choose " + computerChoice)

})

const paper = document.getElementById("paper")

paper.addEventListener("click",() => {
    playerChoice = "paper"

    const computerChoice = pickAHand()


   console.log("You choose PAPER")
   console.log("The computer choose " + computerChoice)

})

const scissors = document.getElementById("scissors")

scissors.addEventListener("click", () => {
    playerChoice = "scissors"

    const computerChoice = pickAHand()

    console.log("You choose SCISSORS")
    console.log("The computer choose " + computerChoice)
})

 const choices = ["rock", "paper", "scissors"]

const pickAHand = () => {
    const randomNumber = Math.floor(Math.random() * choices.length)

    return choices[randomNumber]
}

console.log(pickAHand())

const play = (playerChoice) => {
    const computerChoice = pickAHand()

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


