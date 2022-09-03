function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors']
    let choice = choices[Math.floor(Math.random() * 3)];
    console.log(choice);
}

getComputerChoice();

/* 
    Game Pseudocode

    /function computerChoice
    select a choice between 'rock', 'paper', or 'scissors'
    return that value

 */ 