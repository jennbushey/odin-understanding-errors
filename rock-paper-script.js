function getComputerChoice () {
    let choice = Math.random();
    if (choice <= 1/3) {
        choice = "rock";
    } else if (choice <= 2/3) {
        choice = "paper";
    } else {choice = "scissors"}
    return choice;
};


function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "Tie game. We both guessed " + playerSelection + ".";
    } 
    else if ((playerSelection == "rock") && (computerSelection == "scissors")){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } 
    else if ((playerSelection == "paper") && (computerSelection == "rock")){   
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
    else {return "You lose! " + computerSelection + " beats " + playerSelection + "."};
}


function game(){

}


let playerSelection = "rock" //prompt("Please enter your Rock Paper Scissors choice: ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));