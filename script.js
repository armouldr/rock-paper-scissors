const dict = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  return dict[index];
}

function playRound(playerSelection, computerSelection) {
  console.assert(playerSelection !== null);

  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.replace(
    playerSelection.charAt(0),
    playerSelection.charAt(0).toUpperCase()
  );

  let playerSelectionInd = dict.indexOf(playerSelection);

  let computerSelectionInd = dict.indexOf(computerSelection);

  if (playerSelectionInd === -1 || computerSelectionInd === -1) {
    console.log(playerSelection);
    console.log(computerSelection);
    console.error("There is an error");
  }

  if (playerSelectionInd === computerSelectionInd) {
    return 0;
  } else if (computerSelectionInd === (playerSelectionInd + 1) % 3) {
    return -1;
  } else {
    return 1;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection, computerSelection;
  let result;

  const buttons = Array.from(document.getElementsByClassName("but"));
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      if (run) {
        computerSelection = getComputerChoice();
        playerSelection = event.target.id;
        result = playRound(playerSelection, computerSelection);
        [playerScore, computerScore] = updateScore(
          playerScore,
          computerScore,
          result
        );
        displayScore(playerScore, computerScore);
      }
    });
  });
}

function updateScore(playerScore, computerScore, result) {
  const board = document.getElementById("result");
  if (result === 1) {
    ++playerScore;
    board.textContent = "You won this round !";
  } else if (result === -1) {
    ++computerScore;

    board.textContent = "You lose this round !";
  } else {
    board.textContent = "This round's a tie !";
  }
  if (playerScore >= 5 || computerScore >= 5) {
    run = false;

    if (playerScore > computerScore) {
      board.textContent = "The player wins !";
    } else {
      board.textContent = "Computer takes the win ! beep bip bop";
    }
  }
  return [playerScore, computerScore];
}

function displayScore(playerScore, computerScore) {
  const score = document.getElementById("score");
  score.textContent = "onche";
  score.textContent = `Player : ${playerScore}           Computer : ${computerScore}`;
}
let run = true;
game();
