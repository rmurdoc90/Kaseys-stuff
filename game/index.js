let computerPoints = 0;
let playerPoints = 0;
const rockBtn = document.querySelector(`#rock`);
const paperBtn = document.querySelector(`#paper`);
const scissorsBtn = document.querySelector(`#scissors`);

let playerSelection;
let computerSelection;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  // console.log(randomNumber)
  if (randomNumber === 0) {
    return (computerSelection = "rock");
  } else if (randomNumber === 1) {
    return (computerSelection = "paper");
  } else {
    return (computerSelection = "scissors");
  }
}

function playRound() {
  let tieRound = `Tied round! You both chose ${computerSelection}. The score is currently (You - ${playerPoints}) (Computer - ${computerPoints})`;
  let loseRound = `You lose the round. You chose ${playerSelection} and the computer chose ${computerSelection} (You - ${playerPoints}) (Computer - ${
    computerPoints + 1
  })`;
  let winRound = `You win the round. You chose ${playerSelection} and the computer chose ${computerSelection} (You - ${
    playerPoints + 1
  }) (Computer - ${computerPoints})`;

  let wrongInput = `An improper input has been entered`;
  if (computerSelection === "paper") {
    if (playerSelection === "paper") {
      return alert(tieRound);
    } else if (playerSelection === "rock") {
      return alert(loseRound), ++computerPoints;
    } else if (playerSelection === "scissors") {
      return alert(winRound), ++playerPoints;
    } else {
      return alert(wrongInput);
    }
  } else if (computerSelection === "rock") {
    if (playerSelection === "paper") {
      return alert(winRound), ++playerPoints;
    } else if (playerSelection === "rock") {
      return alert(tieRound);
    } else if (playerSelection === "scissors") {
      return alert(loseRound), ++computerPoints;
    } else {
      return alert(wrongInput);
    }
  } else {
    if (playerSelection === "paper") {
      return alert(loseRound), ++computerPoints;
    } else if (playerSelection === "rock") {
      return alert(winRound), ++playerPoints;
    } else if (playerSelection === "scissors") {
      return alert(tieRound);
    } else {
      return alert("what");
    }
  }
}

rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  game();
});
paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  game();
});
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  game();
});

function game() {
  console.log(playerSelection);
  computerPlay();
  console.log(computerSelection);
  // console.log(computerPlay())
  playRound();
  console.log(playerPoints);
  console.log(computerPoints);
}
