console.log("Hello, World!");

const tie = "Tie!";
const playerWin = "Player wins!";
const computerWin = "Computer wins!";

function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);

    if (guess === 0) { return "rock"; }
    if (guess === 1) { return "paper"; }
    if (guess === 2) { return "scissors"; }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { return tie; }

    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            return playerWin;
        }

    if ((computerSelection === "rock" && playerSelection === "scissors") || 
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
            return computerWin;
        }
}

function game(numGames) {
    for (let i = 0; i < numGames; i++) {
        
    }
}