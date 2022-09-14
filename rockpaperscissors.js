console.log("Hello, World!");

const tie = "Tie!";
const playerWin = "Player wins!";
const computerWin = "Computer wins!";
const invalidSelection = "invalid";

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
    
   return invalidSelection; 
}

function game(numGames) {
    let score = 0;

    for (let i = 0; i < numGames; i++) {
        let playerSelection = prompt("What is your move?").toLowerCase();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === invalidSelection) {
            console.log("Please enter 'rock', 'paper', or 'scissors'");
            i--;
            continue;
        }

        console.log(roundResult);
        if (roundResult === playerWin) {
            score++;
        } 
        if (score > Math.floor(numGames / 2)) {
            console.log("You won the game!");
            return;
        }
    }

    console.log("The computer won the game!");
    return;
}

game(5);