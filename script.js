function getHumanChoice(){
    let userInput = prompt("Choose rock, paper, or scissors:").toLowerCase();
    return userInput;
};
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert(`It's a tie! Both chose ${humanChoice}.`);
    return 'tie';
  }
  else if ((humanChoice === "rock" && computerChoice === "scissors") ||
           (humanChoice === "paper" && computerChoice === "rock") ||
           (humanChoice === "scissors" && computerChoice === "paper")) {
    alert(`You win! ${humanChoice} beats ${computerChoice}.`);
    return 'human';
  } else {
    alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return 'computer';
  }
}

  while(humanScore < 5 && computerScore < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("Human:", humanSelection);
    console.log("Computer:", computerSelection);

    const result = playRound(humanSelection, computerSelection);

    if(result == 'human'){
        humanScore++;
    }
    else if (result == 'computer'){
        computerScore++;
    }
    alert(`Score : You ${humanScore} - Computer ${computerScore}`);
  }

  if(humanScore == 5){
    alert("You Win The Game!!");
  }
  else{
    alert("Nice Try");
  }
}

playGame();