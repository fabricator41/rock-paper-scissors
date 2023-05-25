const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

const result = document.getElementById('result');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const roundWinner = document.createElement('p');
const computerScore = document.createElement('p');
const playerScore = document.createElement('p');
const winner = document.getElementById('winner');

function getComputerChoice() {
  let deneme = Math.random();
  if (deneme < 0.33) {
    return 'rock';
  } else if (deneme < 0.66 && deneme > 0.33) {
    return 'paper';
  } else if (deneme > 0.66 && deneme < 1) {
    return 'scissors';
  }
}

let computer = 0;
let player = 0;
let gameResult = ``;

function playRound() {
  let playerSelection = this.id;
  let computerSelection = getComputerChoice();

  para1.textContent = `Player selection is: ${playerSelection}`;
  result.appendChild(para1);
  para2.textContent = `Computer selection is: ${computerSelection}`;
  result.appendChild(para2);

  if (playerSelection === 'rock' && computerSelection === 'rock') {
    roundWinner.textContent = `It's a tie`;
    result.appendChild(roundWinner);
    console.log("It's a tie");
    player += 0;
    computer += 0;
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    roundWinner.textContent = `Player wins the round`;
    result.appendChild(roundWinner);
    player++;
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    roundWinner.textContent = `Computer wins the round`;
    console.log('Computer wins the round');
    computer++;
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    roundWinner.textContent = `It's a tie`;
    result.appendChild(roundWinner);
    console.log("It's a tie");
    player += 0;
    computer += 0;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    roundWinner.textContent = `Player wins the round`;
    result.appendChild(roundWinner);
    console.log('Player wins the round');
    player++;
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    roundWinner.textContent = `Computer wins the round`;
    result.appendChild(roundWinner);
    console.log('Computer wins the round');
    computer++;
  } else if (
    playerSelection === 'scissors' &&
    computerSelection === 'scissors'
  ) {
    roundWinner.textContent = `It's a tie`;
    result.appendChild(roundWinner);
    console.log("It's a tie");
    player += 0;
    computer += 0;
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    roundWinner.textContent = `Computer wins the round`;
    result.appendChild(roundWinner);
    console.log('Computer wins the round');
    computer++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    roundWinner.textContent = `Player wins the round`;
    result.appendChild(roundWinner);
    console.log('Player wins the round');
    player++;
  }

  computerScore.textContent = `Computer score is: ${computer}`;
  playerScore.textContent = `Player score is: ${player}`;

  result.appendChild(computerScore);
  result.appendChild(playerScore);

  if (computer === 5 && player < 5) {
    gameResult = `The winner is computer`;
    winner.textContent = gameResult;
  } else if (player === 5 && computer < 5) {
    gameResult = `The winner is player`;
    winner.textContent = gameResult;
  }
}
