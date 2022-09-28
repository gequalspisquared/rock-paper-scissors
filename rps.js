const pointsToWin = 5;

const tie = "Tie!";
const playerWin = "Player wins!";
const computerWin = "Computer wins!";
const invalidSelection = "invalid";
const scoreboard = document.querySelectorAll('.scoreboard > ul > li');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);

    if (guess === 0) { return "rock"; }
    if (guess === 1) { return "paper"; }
    if (guess === 2) { return "scissors"; }
}

function getRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { return tie; }

    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            return playerWin;
        }

    if ((computerSelection === "rock" && playerSelection === "scissors") || 
        (computerSelection === "paper" && playerSelection === "rock") ||
        (computerSelection === "scissors" && playerSelection === "paper")) {
            computerScore++;
            return computerWin;
        }
    
   return invalidSelection; 
}

function checkForWin() {
    let win = false;
    if (playerScore === pointsToWin) { win = true; alert(playerWin); }
    if (computerScore === pointsToWin) { win = true; alert(computerWin); } 

    if (win) { playerScore = 0; computerScore = 0; win = false; }
}

function updateScoreboard(winner, playerSelection, computerSelection) {
    let scoreboardPlayer = scoreboard[0];
    let scoreboardWinner = scoreboard[1];
    let scoreboardComputer = scoreboard[2];

    if (playerSelection) {
        scoreboardPlayer.textContent = playerSelection + ' : ' + 
                                       playerScore;
    }
    scoreboardWinner.textContent = winner;
    if (computerSelection) {
        scoreboardComputer.textContent = computerScore + ' : ' + 
                                         computerSelection;
    }
}

function playRound (playerSelection) {
    const computerSelection = getComputerChoice();
    const winner = getRoundWinner(playerSelection, computerSelection);
    checkForWin();
    updateScoreboard(winner, playerSelection, computerSelection);
    console.log("playerScore: " + playerScore + 
                " computerScore: " + computerScore);
}

updateScoreboard("Welcome!");
const options = document.querySelectorAll('.option');
options.forEach(option => option.addEventListener('click', function() {
    const playerSelection = option.getAttribute("data-option");
    playRound(playerSelection);
}));