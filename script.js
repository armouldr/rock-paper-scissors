const dict = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return dict[index];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), 
                      playerSelection.charAt(0).toUpperCase());

    let playerSelectionInd = dict.indexOf(playerSelection);
    console.log(playerSelection);
    console.log(computerSelection)

    let computerSelectionInd = dict.indexOf(computerSelection);

    if (playerSelectionInd === -1 || computerSelectionInd === -1) {
        console.log(playerSelection);
        console.log(computerSelection);
        console.error("There is an error");
    }

    if (playerSelectionInd === computerSelectionInd) {
        return 0;

    } else if (computerSelectionInd === (playerSelectionInd + 1)%3) {
        return -1;

    } else {
        return 1;
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection, computerSelection;

    for(let i=0; i < 5; ++i) {

        playerSelection = prompt("Rock, paper or scissors ?");
        computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result === 1) {
            ++playerScore;
            console.log("You Won this round !");
        } else if (result === -1) {
            ++computerScore;
            console.log("You lose this round !");
        } else {
            console.log("This round's a tie !");
        }
    }
    displayScore(playerScore, computerScore);

}

function displayScore(playerScore, computerScore) {
    console.log("Final Score :");
    console.log(`Player : ${playerScore}`);
    console.log(`Player : ${computerScore}`);
}

game();