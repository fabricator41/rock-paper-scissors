function getComputerChoice() {
  let deneme = Math.random();
  if (deneme < 0.33) {
    return "rock";
  } else if (deneme < 0.66 && deneme > 0.33) {
    return "paper";
  } else if (deneme > 0.66 && deneme < 1) {
    return "scissors";
  }
}

function playRound() {
  let playerSelection = prompt();
  let computerSelection = getComputerChoice();

  console.log(`Player selection is: ${playerSelection}`);
  console.log(`Computer selection is: ${computerSelection}`);

  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("It's a tie");
    return "It's a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("Player wins the round");
    return "player";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins the round");
    return "computer";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("It's a tie");
    return "It's a tie";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player wins the round");
    return "player";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins the round");
    return "computer";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("It's a tie");
    return "It's a tie";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer wins the round");
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player wins the round");
    return "player";
  }
}

function playGame() {
  let computerScore = 0;
  let playerScore = 0;
  let result = "";
  result = playRound();
  if (result === "computer") {
    computerScore++;
  } else if (result === "player") {
    playerScore++;
  }
  result = playRound();
  if (result === "computer") {
    computerScore++;
  } else if (result === "player") {
    playerScore++;
  }
  result = playRound();
  if (result === "computer") {
    computerScore++;
  } else if (result === "player") {
    playerScore++;
  }
  result = playRound();
  if (result === "computer") {
    computerScore++;
  } else if (result === "player") {
    playerScore++;
  }
  result = playRound();
  if (result === "computer") {
    computerScore++;
  } else if (result === "player") {
    playerScore++;
  }

  console.log(`Player score is ${playerScore}`);
  console.log(`Computer score is ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("winner is player");
  } else if (computerScore > playerScore) {
    console.log("winner is computer");
  } else {
    console.log("It's a tie");
  }
}

playGame();
