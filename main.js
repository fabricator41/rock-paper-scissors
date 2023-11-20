let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const result = document.querySelector("#result");

const compChoice = document.querySelector("#computer-choice");
const playChoice = document.querySelector("#player-choice");
const compScore = document.querySelector("#computer-score");
const playScore = document.querySelector("#player-score");

rockbtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  compChoice.textContent = computerSelection;
  playerSelection = rockbtn.id;
  playChoice.textContent = playerSelection;
  result.textContent = playRound(playerSelection, computerSelection);
  playScore.textContent = `${playerScore}`;
  compScore.textContent = `${computerScore}`;
});
paperbtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  compChoice.textContent = computerSelection;
  playerSelection = paperbtn.id;
  playChoice.textContent = playerSelection;
  result.textContent = playRound(playerSelection, computerSelection);
  playScore.textContent = `${playerScore}`;
  compScore.textContent = `${computerScore}`;
});
scissorsbtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  compChoice.textContent = computerSelection;
  playerSelection = scissorsbtn.id;
  playChoice.textContent = playerSelection;
  result.textContent = playRound(playerSelection, computerSelection);
  playScore.textContent = `${playerScore}`;
  compScore.textContent = `${computerScore}`;
});

function getComputerChoice() {
  let computerChoice = "";
  let randomChoice = Math.random();
  if (randomChoice <= 0.33) {
    computerChoice = "rock";
  } else if (randomChoice <= 0.66 && randomChoice > 0.33) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerScore === 5) return "GAME WINNER IS PLAYER";
  if (computerScore === 5) return "GAME WINNER IS COMPUTER";
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Player Wins! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "Computer Wins! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Player Wins! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "Computer Wins! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Player Wins! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Computer Wins! Paper beats Rock";
  }
}
