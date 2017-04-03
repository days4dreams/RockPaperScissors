//Let's Play Rock, Paper, Scissors!

var userChoice;
var computerChoice;
var winner;
var playerRunningTotal;
var computerRunningTotal;
//Global Variables

function getPlayerMove() {
  userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  return userChoice;
}
//ask the player to choose an option; assign variable of userChoice the value returned from the prompt


console.log("Player chose " + getPlayerMove());
//call the functions to test and lets player know what they selected

function getComputerMove () {
  randomNumber = Math.random();
  if (randomNumber < .33){
    computerChoice = "rock";
  }
  else if (randomNumber < .66){
    computerChoice = "paper";
  }
  else computerChoice = "scissors";
  return computerChoice;
}
//function generates a random number using math.random and assigns it a paper rock scissor value using third possibilities 

console.log("The computer chose " + getComputerMove());
//tells the player the outcome of the computers move

function getWinner (playerMove, computerMove) {
  if (playerMove == computerMove){
    winner = "tie";
  }
  else if (playerMove == "rock" && computerMove == "paper") {
    winner = "computer";}
  else if (playerMove == "rock" && computerMove == "scissors"){
    winner = "player";}
  else if (playerMove == "paper" && computerMove == "rock") {
    winner = "player";}
  else if (playerMove == "paper" && computerMove == "scissors"){
    winner = "computer";}
  else if (playerMove == "scissors" && computerMove == "paper"){
    winner = "player";}
  else winner = "computer";
  return winner;
}
//outlines potential inputs from both sides and sets the winner accordingly

getWinner("rock","paper");
//test getWinner function with some dummy arguements
console.log ("The winner is " + winner);

  function playToFive() {
  console.log("Let's play Rock Paper Scissors");
  playerRunningTotal = 0;
  computerRunningTotal = 0;
//function sets totals to 0, then starts the game

  while (playerRunningTotal < 5 && computerRunningTotal < 5) {
//create a while loop to instruct app to run until either player or computer total reaches 5
    userChoice = getPlayerMove();
//call the function to ask a player to submit move
    computerChoice = getComputerMove();
//call the function to generate computers move
    winner = getWinner(userChoice, computerChoice);
//push the arguments of choice to the function to determine winner

    if (winner === "player") {
      playerRunningTotal++;
    } else if (winner === "computer") {
      computerRunningTotal++;
    }
// if else statement adds a point to either player or computers total

    alert("Player chose " + userChoice + " while Computer chose " + computerChoice + "! \nThe score is Player "+ playerRunningTotal + ", Computer " + computerRunningTotal + ".");
  }
//reminders player of choice and presents running total back
}

playToFive();
// calls function, begins loop 

if (computerRunningTotal = 5){
    console.log("Our winner is... Computer!")
}
else console.log("Our winner is... Player!")
