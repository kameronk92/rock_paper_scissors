console.log("what the fuck is up dennys");

let computerScore = 0

let userScore = 0

function turn() {
  // get choices
  let userChoice = prompt("Please enter rock, paper or scissors ");

  let computerChoice = getComputerChoice();

  // compare results
  result(computerChoice, userChoice)

  // report results
  console.log("computer score: " + computerScore)
  console.log("user score: " + userScore)

  turn()
}

function getComputerChoice(){
  const arr = ["rock", "paper", "scissors"];
  return  arr[Math.floor(Math.random() * arr.length)];
}

function result(computerChoice, userChoice) {
  if (userChoice === "scissors") {
    scissorsResult(computerChoice)
  } else if (userChoice === "rock") {
    rockResult(computerChoice)
  } else if (userChoice === "paper") {
    paperResult(computerChoice)
  } else {
    console.log("Invalid choice! Please choose rock, paper, or scissors.");
  }
}

function scissorsResult(computerChoice){
  console.log("the bot chose " + computerChoice)
  if (computerChoice === "paper") {
    console.log("congrats, scissor beats " + computerChoice);
    userScore++;
  }
  else if (computerChoice === "rock") {
    console.log("wow, you lost to a stupid bot");
    computerScore++;
  }
  else {
    console.log("tie.");
  }
}

function rockResult(computerChoice){
  console.log("the bot chose " + computerChoice)
  if (computerChoice === "scissors") {
    console.log("congrats, rock beats " + computerChoice);
    userScore++;
  }
  else if (computerChoice === "paper") {
    console.log("wow, you lost to a stupid bot");
    computerScore++;
  }
  else {
    console.log("tie.");
  }
}

function paperResult(computerChoice){
  console.log("the bot chose " + computerChoice)
  if (computerChoice === "rock") {
    console.log("congrats, paper beats " + computerChoice);
    userScore++;
  }
  else if (computerChoice === "scissors") {
    console.log("wow, you lost to a stupid bot");
    computerScore++;
  }
  else {
    console.log("tie.");
  }
}

turn()
