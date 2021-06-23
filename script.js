// All HTML elements that will be changed through JS
let scores = document.getElementsByTagName("h2")
let blocks = document.getElementsByClassName("block")
let resultMessage = document.getElementById("resultMessage")
let playAgain = document.getElementById("startAgain")
let refreshScores = document.getElementById("scoreRefresh")

//  Player scores
let player1Score = 0
let player2Score = 0


// Creating array to easily count number of rounds played
let turnsPlayed = []
let i = 1

let currentPlayer = "X"


let player1Win = false
let player2Win = false

// Function to change player every round
const playerSwap = () => {
    if (currentPlayer == "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}

// FUnction to check win conditions + change scores + announce winner
const winnerCheck = () => {

    if ( (blocks[0].innerHTML === "X" && blocks[1].innerHTML === "X" && blocks[2].innerHTML === "X") || (blocks[3].innerHTML === "X" && blocks[4].innerHTML === "X" && blocks[5].innerHTML === "X") || (blocks[6].innerHTML === "X" && blocks[7].innerHTML === "X" && blocks[8].innerHTML === "X") || (blocks[0].innerHTML === "X" && blocks[3].innerHTML === "X" && blocks[6].innerHTML === "X") || (blocks[1].innerHTML === "X" && blocks[4].innerHTML === "X" && blocks[7].innerHTML === "X") || (blocks[2].innerHTML === "X" && blocks[5].innerHTML === "X" && blocks[8].innerHTML === "X") || (blocks[0].innerHTML === "X" && blocks[4].innerHTML === "X" && blocks[8].innerHTML === "X") || (blocks[2].innerHTML === "X" && blocks[4].innerHTML === "X" && blocks[6].innerHTML === "X")) {

        player1Win = true
        player1Score += 1
        resultMessage.innerHTML = "Player 1 wins"
        scores[0].innerHTML = player1Score


    } else if( (blocks[0].innerHTML === "O" && blocks[1].innerHTML === "O" && blocks[2].innerHTML === "O") || (blocks[3].innerHTML === "O" && blocks[4].innerHTML === "O" && blocks[5].innerHTML === "O") || (blocks[6].innerHTML === "O" && blocks[7].innerHTML === "O" && blocks[8].innerHTML === "O") || (blocks[0].innerHTML === "O" && blocks[3].innerHTML === "O" && blocks[6].innerHTML === "O") || (blocks[1].innerHTML === "O" && blocks[4].innerHTML === "O" && blocks[7].innerHTML === "O") || (blocks[2].innerHTML === "O" && blocks[5].innerHTML === "O" && blocks[8].innerHTML === "O") || (blocks[0].innerHTML === "O" && blocks[4].innerHTML === "O" && blocks[8].innerHTML === "O") || (blocks[2].innerHTML === "O" && blocks[4].innerHTML === "O" && blocks[6].innerHTML === "O")) {

        player2Win = true
        player2Score += 1
        resultMessage.innerHTML = "Player 2 wins"
        scores[1].innerHTML = player2Score

    } else if (turnsPlayed.length == 9) {
        resultMessage.innerHTML = "It's a draw. Play again?"
    }
}

//  Function to simply play again
const resetGame = () => {
    blocks[0].innerHTML = ""
    blocks[1].innerHTML = ""
    blocks[2].innerHTML = ""
    blocks[3].innerHTML = ""
    blocks[4].innerHTML = ""
    blocks[5].innerHTML = ""
    blocks[6].innerHTML = ""
    blocks[7].innerHTML = ""
    blocks[8].innerHTML = ""
    turnsPlayed = []
    currentPlayer = "X"
    resultMessage.innerHTML = ""
    i = 0
    player1Win = false
    player2Win = false
}
// Function to clear field and reset scores as well
const resetScores = () => {
    resetGame()
    player1Score = 0
    player2Score = 0
    scores[0].innerHTML = player1Score
    scores[1].innerHTML = player2Score
    resultMessage.innerHTML = ""
}
// Event to clear the field
playAgain.addEventListener("click", () =>
    resetGame()
)

// Event on button to restart completely
refreshScores.addEventListener("click", () => 
    resetScores()
)


// Making sure Scores are displayed at start as well
scores[0].innerHTML = player1Score
scores[1].innerHTML = player2Score

// Brute functions to recognise which block is clicked
blocks[0].addEventListener("click",  () =>{
    if (blocks[0].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[0].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[1].addEventListener("click",  () =>{
    if (blocks[1].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[1].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[2].addEventListener("click",  () =>{
    if (blocks[2].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[2].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[3].addEventListener("click",  () =>{
    if (blocks[3].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[3].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[4].addEventListener("click",  () =>{
    if (blocks[4].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[4].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[5].addEventListener("click",  () =>{
    if (blocks[5].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[5].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[6].addEventListener("click",  () =>{
    if (blocks[6].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[6].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[7].addEventListener("click",  () =>{
    if (blocks[7].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[7].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
blocks[8].addEventListener("click",  () =>{
    if (blocks[8].innerHTML == "" && (player1Win == false && player2Win == false)) {
        blocks[8].innerHTML = currentPlayer
        turnsPlayed.push(i)
        i++
        winnerCheck()
        playerSwap()
    }
})
