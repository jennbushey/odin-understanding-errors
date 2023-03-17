const playerSelection = document.getElementById("myBtn")
playerSelection.addEventListener("click",playRound);

function getComputerChoice() {
    let choice = Math.random(); // generates random number between 0 and 1
    if (choice <= 1 / 3) {
        choice = "rock"; // rock if < 1/3
    } else if (choice <= 2 / 3) {
        choice = "paper"; // paper if between 1/3 and 2/3
    } else { choice = "scissors" } // scissors if >2/3
    return choice;
};

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(playerSelection,computerSelection);

    if (playerSelection === computerSelection) {
        //round++;
        //tie++;
        return alert("Tie game. We both guessed " + playerSelection + ".");
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        //round++;
        //win++;
        return alert("You win! " + playerSelection + " beats " + computerSelection + ".");
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        // round++;
        // win++;
        return alert("You win! " + playerSelection + " beats " + computerSelection + ".");
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        // round++;
        // win++;
        return alert("You win! " + playerSelection + " beats " + computerSelection + ".");
    }
    else {
        // round++;
        // lose++;
        return alert("You lose! " + computerSelection + " beats " + playerSelection + ".");
    }
}

/*
let round = 0;
let win = 0;
let lose = 0;
let tie = 0;
*/

    //for (let game = round; game < 1; game++){
    //const playerSelection = prompt("Please enter your Rock Paper Scissors choice: ");
    //if (!(playerSelection === "rock") && !(playerSelection === "paper") && !(playerSelection === "scissors")) {
    //    game--;
    //    continue;
    //}
    //const computerSelection = getComputerChoice();
    //alert(playRound(playerSelection, computerSelection));
    // }
    //alert("Final Score: " + win + " wins, " + lose + " losses, and " + tie + " tie games.")