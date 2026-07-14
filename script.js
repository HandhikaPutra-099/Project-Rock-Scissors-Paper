let humanScore = 0;
let computerScore = 0;

const humanScoreEl = document.getElementById("human-score");
const computerScoreEl = document.getElementById("computer-score");
const winnerEl = document.getElementById("winner");
const humanChoiceEl = document.getElementById("human-choice");
const computerChoiceEl = document.getElementById("computer-choice");
document.getElementById("reset").addEventListener("click", resetGame);


document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors");
});


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function playRound(humanChoice) {

    
    if (humanScore === 5 || computerScore === 5) {
        return;
    }

    const computerChoice = getComputerChoice();

    humanChoiceEl.textContent = `You chose: ${humanChoice}`;
    computerChoiceEl.textContent = `Computer chose: ${computerChoice}`;

    if (humanChoice === computerChoice) {
        winnerEl.textContent = "🤝 It's a Tie!";
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        winnerEl.textContent = `🎉 You Win! ${humanChoice} beats ${computerChoice}`;
    }

    else {
        computerScore++;
        winnerEl.textContent = `💀 You Lose! ${computerChoice} beats ${humanChoice}`;
    }

    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;

    if (humanScore === 5) {
        winnerEl.textContent = "🏆 You Win The Game!";
    }

    if (computerScore === 5) {
        winnerEl.textContent = "💻 Computer Wins The Game!";
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;

    humanChoiceEl.textContent = "";
    computerChoiceEl.textContent = "";

    winnerEl.textContent = "Choose Rock, Paper, or Scissors!";
}
