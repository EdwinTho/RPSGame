//============Cache Variables=============
let playerScore = 0;
let computerScore = 0;
let result = "";
const buttons = document.querySelectorAll('button');

//============Functions=============
function computerPlay(items) {
    // An Arrray with a random output method for the return on this function
    items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection) {
    //We call the computer function to select a random selection
    const computerSelection = computerPlay();

    // A conditional statement to compare the results of the round
    if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'scissors' &&
        computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock') {
        //adding a point if player wins
            playerScore += 1;
        let playerPoint = document.getElementById('playerScore').innerHTML = playerScore;
        result = playerSelection + " beats " + computerSelection + "<br>";
        //If player reaches 5 points he wins and this result gets passed
        if (playerScore == 5) {
            result += "You won, the computer was no match! Refresh the page to play again." + "<br>";
            //We disable buttons by calling this function
            disableButtons()
        }
    } else if (playerSelection == computerSelection) {
        result = "You tied!" + "<br>";
    } else {
        // Adds points to computer 
        computerScore += 1;
        let computerPoint = document.getElementById('computerScore').innerHTML = computerScore;
        result = computerSelection + " beats " + playerSelection + "<br>";
        //If computer reaches 5 points then it wins 
        if (computerScore == 5) {
            result += "You lost to the computer. . . Refresh to try again!";
         //We disable buttons by calling this function
            disableButtons()
        }
    }
    document.getElementById('results').innerHTML = result;
    return
}

buttons.forEach(button => {
//This function allows us to return a value from a button on the front end
    button.addEventListener('click', function () {
        //We call the function playRound(button.value) so that each selection goes through evaluation 
        playRound(button.value);
    })
})


function disableButtons() {
//Simple disable button function after the game is over
    buttons.forEach(elem => {
        elem.disabled = true
    })
}
