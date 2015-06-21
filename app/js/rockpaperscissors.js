////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || 'getInput()';
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === "rock" && computerMove==="rock") {
        return 'tie'}
        else if (playerMove=== "paper" && computerMove==="paper") {
            return 'tie'}
        else if (playerMove=== "scissors" && computerMove==="scissors") {
            return 'tie'}
        else if (playerMove=== "rock" && computerMove==="scissors") {
            return 'playerWins'}
        else if (playerMove=== "paper" && computerMove=== "rock") {
            return 'playerWins'}
        else if (playerMove=== "scissors" && computerMove==="paper") {
            return 'playerWins'}
        else {
            return 'computerWins'}

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    function winnerIs(playerMove,ComputerMove) {
        if (winner == "playerMove") {
            console.log ("Player wins round");
            playerWins++;
        }
        else if (winner == "computerMove") {
            console.log ("Computer wins round");
            computerWins++;
        }
        else {
            console.log ("Tie");
        }
        console.log('Player chose ' + playerMove + ' and Computer chose ' + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins);
}

    return [playerWins, computerWins];
}

getWinner("scissors","rock");