function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

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

function winningScenario(player1, player2) {
  return (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  );
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`Round: ${round + 1}`);
    console.log(
      `Human: [${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      }] vs Computer: [${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }]`
    );
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (winningScenario(humanChoice, computerChoice)) {
      console.log("Human wins!");
      humanScore++;
    } else {
      console.log("Computer wins!");
      computerScore++;
    }

    console.log(" ");
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(" ");
    round++;
  }

  for (let round = 0; round < 5; round++) {
    if (
      round === 4 &&
      (humanScore === computerScore ||
        Math.abs(humanScore - computerScore) === 1)
    ) {
      console.log("Last round! Choose wisely...");
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    } else {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      playRound(humanSelection, computerSelection);
    }
  }

  if (humanScore > computerScore) {
    console.log(
      `Congratulations! You won the game with ${humanScore} - ${computerScore} score!`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Pfff! You lost the game with ${humanScore} - ${computerScore} score!`
    );
  } else {
    console.log(`It's a tie game with ${humanScore} - ${computerScore} score!`);
  }
}

playGame();
