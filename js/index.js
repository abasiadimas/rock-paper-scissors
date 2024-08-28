const choices = document.querySelectorAll(".choice-btn");
const result = document.querySelector("#result");
const printUserScore = document.querySelector("#user-score");
const printComputerScore = document.querySelector("#computer-score");
const printRound = document.querySelector("#currentRound");
const iconDisplayDiv = document.querySelector("#icon-display");
const humanIconDisplay = document.querySelector("#humanIconDisplay");
const versusDisplay = document.querySelector("#versusDisplay");
const computerIconDisplay = document.querySelector("#computerIconDisplay");
const resetGame = document.querySelector("#play-again");

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

  printUserScore.textContent = 0;
  printComputerScore.textContent = 0;

  choices.forEach((choiche) => {
    choiche.addEventListener("click", function () {
      playRound(this.id);
    });
  });

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    printRound.textContent = `Round: ${round + 1}`;

    displayIcons(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
      result.textContent = "It's a tie";
    } else if (winningScenario(humanChoice, computerChoice)) {
      result.textContent = "Human wins";
      humanScore++;
      printUserScore.textContent = humanScore;
    } else {
      result.textContent = "Computer wins";
      computerScore++;
      printComputerScore.textContent = computerScore;
    }

    round++;

    if (humanScore === 5) {
      result.textContent = `Congratulations! You won the game with ${humanScore} - ${computerScore} score.`;
      result.setAttribute("style", "font-style: italic; color: green");
      printUserScore.style.color = "green";
      printComputerScore.style.color = "red";
      disableButtons();
      resetGame.style.display = "inline-block";
    } else if (computerScore === 5) {
      result.textContent = `Sorry! You lost the game with ${humanScore} - ${computerScore} score.`;
      result.setAttribute("style", "font-style: italic; color: red");
      printUserScore.style.color = "red";
      printComputerScore.style.color = "green";
      disableButtons();
      resetGame.style.display = "inline-block";
    }

    function displayIcons(humanChoice, computerChoice) {
      humanIconDisplay.innerHTML = "";
      computerIconDisplay.innerHTML = "";
      versusDisplay.innerHTML = "";

      const humanIcon = document.createElement("i");
      if (humanChoice === "rock") {
        humanIcon.classList.add(
          "fa-regular",
          "fa-hand-" + humanChoice,
          "fa-rotate-90"
        );
      } else if (humanChoice === "scissors") {
        humanIcon.classList.add(
          "fa-regular",
          "fa-hand-" + humanChoice,
          "flip-scissors"
        );
      } else {
        humanIcon.classList.add(
          "fa-regular",
          "fa-hand-" + humanChoice,
          "fa-rotate-90"
        );
      }
      humanIconDisplay.appendChild(humanIcon);

      const versus = document.createElement("span");
      versus.textContent = "vs";
      versusDisplay.appendChild(versus);

      const computerIcon = document.createElement("i");
      if (computerChoice === "rock") {
        computerIconDisplay.classList.add("fa-rotate-270");
        computerIcon.classList.add(
          "fa-regular",
          "fa-hand-" + computerChoice,
          "fa-flip-horizontal"
        );
      } else if (computerChoice === "paper") {
        computerIconDisplay.classList.add("fa-rotate-270");
        computerIcon.classList.add(
          "fa-regular",
          "fa-hand-" + computerChoice,
          "fa-flip-horizontal"
        );
      } else {
        computerIconDisplay.classList.remove("fa-rotate-270");
        computerIconDisplay.classList.add("fa-rotate-0");
        computerIcon.classList.add("fa-regular", "fa-hand-" + computerChoice);
      }
      computerIconDisplay.appendChild(computerIcon);
    }

    function disableButtons() {
      choices.forEach((button) => {
        button.disabled = true;
      });
    }

    function enableButtons() {
      choices.forEach((button) => {
        button.disabled = false;
      });
    }

    resetGame.addEventListener("click", function () {
      result.textContent = "";
      result.setAttribute("style", "font-style: normal; color: #333");
      printRound.textContent = "";
      humanIconDisplay.innerHTML = "";
      versusDisplay.innerHTML = "";
      computerIconDisplay.innerHTML = "";
      printUserScore.style.color = "#333";
      printComputerScore.style.color = "#333";
      humanScore = 0;
      computerScore = 0;
      round = 0;
      printUserScore.textContent = 0;
      printComputerScore.textContent = 0;
      resetGame.style.display = "none";
      enableButtons();
    });
  }
}

playGame();
