/* No jokenpo, escolhemos entre pedra, papel e tesoura. O computador faz o mesmo;
Comparamos as escolhas e decidimos se houve vitoria, derrota ou empate;
A regra: pedra vence de papel, papel vence de tesoura e tesoura vence de pedra;
Precisamos mostrar o resultado na tela e mostrar o placar com pontos atualizados */

const rock = document.getElementById("rock")

rock.addEventListener("click",() => {


console.log("You choose ROCK")


})

const paper = document.getElementById("paper")

paper.addEventListener("click",() => {

   console.log("You choose PAPER")

})

const scissors = document.getElementById("scissors")

scissors.addEventListener("click", () => {

    console.log("You choose SCISSORS")
})

