let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const result = document.querySelector("#result");

rockbtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = rockbtn.id;
  result.textContent = `Player Score: ${playerScore}
  Computer Score: ${computerScore}`;
  result.textContent += " " + playRound(playerSelection, computerSelection);
});
paperbtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = paperbtn.id;
  result.textContent = `Player Score: ${playerScore}
  Computer Score: ${computerScore}`;
  result.textContent += " " + playRound(playerSelection, computerSelection);
});
scissorsbtn.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  playerSelection = scissorsbtn.id;
  result.textContent = `Player Score: ${playerScore}
  Computer Score: ${computerScore}`;
  result.textContent += " " + playRound(playerSelection, computerSelection);
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
