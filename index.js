let playerSelection = prompt("Shall we play a game of rock, paper, scissors? Enter your choice!").toLowerCase();
console.log(playerSelection);

function getComputerChoice() {
    const gameChoices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * gameChoices.length);

    return gameChoices[computerChoice];
}
let computerSelection = getComputerChoice();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return "Uh oh! You lose this round!"
    } else if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors") {
        return "Yeay! You win this round!"
    } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
        return "This round is a tie!"
    } else {
        return "Please input the proper choice."
    }
}

console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Shall we play a game of rock, paper, scissors? Enter your choice!").toLowerCase();
        console.log(playerSelection);


        function getComputerChoice() {
            const gameChoices = ["rock", "paper", "scissors"];
            let computerChoice = Math.floor(Math.random() * gameChoices.length);
        
            return gameChoices[computerChoice];
        }
        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        function playRound(playerSelection, computerSelection) {
            if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
                return "Uh oh! You lose this round!"
            } else if (playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "scissors") {
                return "Yeay! You win this round!"
            } else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors") {
                return "This round is a tie!"
            } else {
                return "Please input the proper choice."
            }
        }
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());