let playerSelection = prompt("Enter: Rock, Paper, or Scissors. ");
playerSelection = playerSelection.toLowerCase();

function getComputerChoice(){
    const choices = ['rock','paper','scissors']
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

function singleRound(playerSelection, getComputerChoice){
    let result = '';
    console.log('Player Choice: ' + playerSelection);
    console.log('Computer Choice: ' + getComputerChoice);
    if(playerSelection === getComputerChoice){
        return result = 'No Winner. It\'s a tie';
    }
    else if(playerSelection === 'rock'){
        if(getComputerChoice === 'paper'){
            return result = 'Computer Wins';
        }
        else{
            return result = 'Player Wins';
        }
    }
    else if(playerSelection === 'paper'){
        if(getComputerChoice === 'rock'){
            return result = 'Player Wins';
        }
        else{
            return result = 'Computer Wins';
        }
    }
    else if(playerSelection === 'scissors'){
        if(getComputerChoice === 'rock'){
            return result = 'Computer Wins';
        }
        else{
            return result = 'Player Wins';
        }
    }
}


console.log(singleRound(playerSelection, getComputerChoice()));



// getComputerChoice();

/* 
    Game Pseudocode

    /function computerChoice
    select a choice between 'rock', 'paper', or 'scissors'
    return that value

 */ 