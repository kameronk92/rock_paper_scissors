console.log("what the fuck is up dennys");

function getComputerChoice(){
  const arr = ["rock", "paper", "scissors"];
  return  arr[Math.floor(Math.random() * arr.length)];
}

let computerChoice = getComputerChoice()

let userChoice = prompt("Please enter rock, paper or scissors ");

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
  }
  else if (computerChoice === "rock") {
    console.log("wow, you lost to a stupid bot");
  }
  else {
    console.log("tie. refresh to try again");
  }
}

function rockResult(computerChoice){
  console.log("the bot chose " + computerChoice)
  if (computerChoice === "scissors") {
    console.log("congrats, rock beats " + computerChoice);
  }
  else if (computerChoice === "paper") {
    console.log("wow, you lost to a stupid bot");
  }
  else {
    console.log("tie. refresh to try again");
  }
}

function paperResult(computerChoice){
  console.log("the bot chose " + computerChoice)
  if (computerChoice === "rock") {
    console.log("congrats, paper beats " + computerChoice);
  }
  else if (computerChoice === "scissors") {
    console.log("wow, you lost to a stupid bot");
  }
  else {
    console.log("tie. refresh to try again");
  }
}

result(computerChoice, userChoice)
console.log("refresh to try again")
