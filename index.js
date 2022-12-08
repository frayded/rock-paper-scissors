//Scoring, global for the result console.log accessibility
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let failInput = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Shall we play a game of rock, paper, scissors? Enter your choice!"
    ).toLowerCase();
    console.log("You choose " + playerSelection);

    function getComputerChoice() {
      const gameChoices = ["rock", "paper", "scissors"];
      let computerChoice = Math.floor(Math.random() * gameChoices.length);

      return gameChoices[computerChoice];
    }
    let computerSelection = getComputerChoice();
    console.log("Computer chooses " + computerSelection);

    function playRound(playerSelection, computerSelection) {
      if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
      ) {
        computerScore++;
        return "Uh oh! You lose this round!";
      } else if (
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors")
      ) {
        playerScore++;
        return "Yeay! You win this round!";
      } else if (
        (playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")
      ) {
        tieScore++;
        return "This round is a tie!";
      } else {
        failInput++;
        return "Please input the proper choice.";
      }
    }
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log(game());

console.log(
  "Game over, you won " +
    playerScore +
    " rounds, lose " +
    computerScore +
    " rounds, and tied for " +
    tieScore +
    " rounds!\n" +
    "Also, made " +
    failInput +
    " typos, just so you know."
);

// The following is the code for one round rock paper scissors game as instructed, I put the working code in the game function for less redundancy
/*
let playerSelection = prompt("Shall we play a game of rock, paper, scissors? Enter your choice!").toLowerCase();
        console.log("You choose " + playerSelection);


        function getComputerChoice() {
            const gameChoices = ["rock", "paper", "scissors"];
            let computerChoice = Math.floor(Math.random() * gameChoices.length);
        
            return gameChoices[computerChoice];
        }
        let computerSelection = getComputerChoice();
        console.log("Computer chooses " + computerSelection);


        function playRound(playerSelection, computerSelection) {
            if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
                computerScore++
                return "Uh oh! You lose this round!"
            } else if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors") {
                playerScore++
                return "Yeay! You win this round!"
            } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
                tieScore++
                return "This round is a tie!"
            } else {
                failInput++
                return "Please input the proper choice."
            }
        }
        console.log(playRound(playerSelection, computerSelection));
*/
