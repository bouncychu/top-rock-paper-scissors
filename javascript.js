//Javascript for Rock Paper Scissors

//Write function that randomly returns output as rock paper or scissors

let computerSelection = function getComputerChoice () {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        computerChoice = "rock";
    }
    else if (computerChoice === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let playerSelection = function playerSelection() {
    let choice = prompt("Play rock, paper scissors against a computer! Type 'rock', 'paper' or 'scissors to select your choice. Best of 5 rounds wins!");
    choice = choice.toLowerCase();
    //Ensure that user is prompted to re-input their selection in case of typos
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("You have made a typo, please type 'rock', 'paper' or 'scissors' and hit enter!");
        choice = choice.toLowerCase();
    } 
    return choice;
}

//Write a function that plays a single round of rock paper scissors

function singleRound(playerSelection, computerSelection) {
    //while loop for when it's a tie
    while ((computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "scissors")) {
        if (computerSelection === "rock" && playerSelection === "rock") {
            alert("It's a tie, you both chose rock!");
            return ("tie");
        }
        else if (computerSelection === "paper" && playerSelection === "paper") {
            alert("It's a tie, you both chose paper!");
            return ("tie");
        }
        else {
            alert("It's a tie, you both chose rock!");
            return ("tie");
        }
    }

    //Compare and announce results if there is a winner
    if (computerSelection === "rock" && playerSelection === "paper") {
        result = "You win! Paper beats Rock : )";
        alert(result);
        return result;
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        result = "You lose! Scissors loses to rock!";
        alert(result);
        return result;
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        result = "You win! Scissors beats Paper! : )";
        alert(result);
        return result;
    }
    else if (computerSelection === "paper" && playerSelection === "rock") {
        result = "You lose! Rock loses to Paper";
        alert(result);
        return result;
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        result = "You win! Rock Beats Scissors!";
        alert(result);
        return result;
    }
    else if (computerSelection === "scissors" && playerSelection === "paper") {
        result = "You lose. Paper loses to Scissors.";
        alert(result);
        return result;
    }
}

function game() {
    //Initialize player score, computer score and the number of rounds played
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 0;
    
    //Keep playing single rounds until player or computer reaches a score of 5
    do {
        roundNumber++
        let round = singleRound(playerSelection(), computerSelection());
        //Add score to player if player wins
        if (round.includes("win") === true) {
            playerScore++;
            alert('Round ' + roundNumber + ' results - ' + 'player score is: ' + playerScore + ', computer score is: ' + computerScore);
            console.log('Round No.' + roundNumber + '- *PLAYER WON* ' + 'player score is: ' + playerScore + ', computer score is: ' + computerScore);
            //Ends game if computer wins best of 5 rounds and prompts user to refresh to restart game
            if (playerScore === 3) {
                alert("Congratulations! You have won best of 5 rounds. Refresh page to play again.");
                console.log("Player wins game. Computer loses.");
                return 0;
                }
        }
        //Add score to computer if computer wins
        else if (round.includes("lose") === true) {
            computerScore++;
            alert('Round ' + roundNumber + ' results - ' + 'player score is: ' + playerScore + ', computer score is: ' + computerScore);
            console.log('Round No.' + roundNumber + '- *COMPUTER WON* ' + 'player score is: ' + playerScore + ', computer score is: ' + computerScore)
            //Ends game if computer wins best of 5 rounds and prompts user to refresh to restart game
            if (computerScore === 3) {
                alert("Sorry computer has won best of 5 rounds. You Lose! Refresh page to try again.")
                console.log("Computer wins game. Player loses.");
                return 0;
            }
        }
        //Account for ties and updates round number
        else {
            alert('Round ' + roundNumber + ' results - ' + 'player score is: ' + playerScore + ', computer score is: ' + computerScore);
            console.log('Round No.' + roundNumber + '- *IT IS A TIE* ' + 'player score is: ' + playerScore + ', computer score is: ' + computerScore);
        }
    } while (roundNumber != 5);
    //Ends game after 5 rounds taking into account ties and announces results
    if (playerScore > computerScore) {
        alert("Congratulations! You won the best of 5 rounds against the computer! Refresh the page to try again!");
        console.log("Player wins game, computer loses.");
    }
    else if (playerScore < computerScore) {
        alert("Sorry computer has won best of 5 rounds. You Lose! Refresh page to try again.")
        console.log("Computer wins game. Player loses.");
    }
    else {
        alert ("It's a tie! Please refresh the page to play again.");
        console.log("It's a tie, nobody wins.")
    }
}

game();