// Get user selection
function getPlayerChoice(){ 
    let playerSelection = prompt("Enter: Rock, Paper, or Scissors. ");
    return playerSelection = playerSelection.toLowerCase();
}

// select computer choice
function getComputerChoice(){
    const choices = ['rock','paper','scissors']
    let choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}

// compare player and computer choice and determine winner or tie
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

// play 5 rounds
function game(){
    let playerWin = 0;
    let computerWin = 0;
    let roundResult = '';

    for(let i = 0; i < 5 ; i++){
        roundResult = singleRound(getPlayerChoice(), getComputerChoice());
        if(roundResult === "Player Wins"){
            playerWin++;
        }
        else if(roundResult === 'Computer Wins'){
            computerWin++;
        }
    }

    if(playerWin > computerWin){
        console.log('Player won the battle.');
    }
    else if( playerWin < computerWin){
        console.log('Computer won the battle');
    }
    else{
        console.log('The battle rages on');
    }
}

game();