// rock paper scissors game

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("computerDisplay");
const resDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let compScore = 0;


function playGame(playerChoice) {
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === compChoice) {
        result = "IT'S A TIE";
    }
    else {
        switch (playerChoice) {
            case "rock":
                result = (compChoice === "paper") ? "YOU LOSE" : "YOU WIN";
                break;
            case "paper":
                result = (compChoice === "scissors") ? "YOU LOSE" : "YOU WIN";
                break;
            case "scissors":
                result = (compChoice === "rock") ? "YOU LOSE" : "YOU WIN";
                break;
        }

    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    compDisplay.textContent = `COMPUTER: ${compChoice}`;
    resDisplay.textContent = result;

    resDisplay.classList.remove("green-txt", "red-txt");
    switch (result) {
        case "YOU WIN":
            resDisplay.classList.add("green-txt");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE":
            resDisplay.classList.add("red-txt");
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
    }
}
