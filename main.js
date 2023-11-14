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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  let lowerCaseComputerSelection = computerSelection.toLowerCase();

  if (playerSelection === lowerCaseComputerSelection) {
    return "It's a tie!";
  } else if (
    playerSelection === "rock" &&
    lowerCaseComputerSelection === "scissors"
  ) {
    playerScore++;
    return "Player Wins! Rock beats Scissors";
  } else if (
    playerSelection === "scissors" &&
    lowerCaseComputerSelection === "rock"
  ) {
    computerScore++;
    return "Computer Wins! Rock beats Scissors";
  } else if (
    playerSelection === "paper" &&
    lowerCaseComputerSelection === "rock"
  ) {
    playerScore++;
    return "Player Wins! Paper beats Rock";
  } else if (
    playerSelection === "rock" &&
    lowerCaseComputerSelection === "paper"
  ) {
    computerScore++;
    return "Computer Wins! Paper beats Rock";
  } else if (
    playerSelection === "scissors" &&
    lowerCaseComputerSelection === "paper"
  ) {
    playerScore++;
    return "Player Wins! Scissors beats Paper";
  } else if (
    playerSelection === "paper" &&
    lowerCaseComputerSelection === "scissors"
  ) {
    computerScore++;
    return "Computer Wins! Paper beats Rock";
  }
}

function game() {
  let playerSelection = prompt("Rock, Paper, Scissors?");
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Rock, Paper, Scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Rock, Paper, Scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Rock, Paper, Scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  playerSelection = prompt("Rock, Paper, Scissors?");
  computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  if (playerScore < computerScore) {
    console.log("Computer Wins the Game!");
  } else if (playerScore > computerScore) {
    console.log("Player wins the Game!");
  } else {
    console.log("The game is a Tie!");
  }
}

game();
