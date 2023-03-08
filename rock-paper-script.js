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
    playerSelection = playerSelection.toLowerCase();

 
    if (playerSelection === computerSelection){
        round++;
        tie++;
        return "Tie game. We both guessed " + playerSelection + ".";
    } 
    else if ((playerSelection === "rock") && (computerSelection === "scissors")){
        round++;
        win++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } 
    else if ((playerSelection === "paper") && (computerSelection === "rock")){   
        round++;
        win++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")){
        round++;
        win++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    }
    else {
        round++;
        lose++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}


function game(){
    for (let game = round; game < 5; game++){
        const playerSelection = prompt("Please enter your Rock Paper Scissors choice: ");
        if (!(playerSelection === "rock") && !(playerSelection === "paper") && !(playerSelection === "scissors")){
            game--;
            continue;
        }
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection,computerSelection));    
    }
    alert("Final Score: " + win + " wins, " + lose + " losses, and " + tie + " tie games.")
}

let round = 0;
let win = 0;
let lose = 0;
let tie = 0;
game();