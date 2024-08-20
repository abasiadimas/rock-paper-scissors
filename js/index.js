// Scores
let humanScore = 0;
let computerScore = 0;

// Creates randomly a choice for the computer
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random === 1) {
    console.log("rock");
  } else if (random === 2) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}

// Asking for a user input and stores this value
function getHumanChoice() {
  let userInput = "";

  while (
    userInput !== "rock" &&
    userInput !== "paper" &&
    userInput !== "scissors"
  ) {
    userInput = prompt("Rock, Paper, Scissors").trim().toLowerCase();
  }

  return userInput;
}

console.log(getHumanChoice());
