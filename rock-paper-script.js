
const btn1 = document.querySelector(".rock");
const btn2 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissors");
let playerSelection;

//console.log(btn1,btn2,btn3);

btn1.addEventListener('click', function (e) {
    playerSelection = "rock";
    //console.log(`I picked ${playerSelection}`);
    playRound(playerSelection);
});

btn2.addEventListener('click', function (e) {
    playerSelection = "paper";
    //console.log(`I picked ${playerSelection}`);
    playRound(playerSelection);
});

btn3.addEventListener('click', function (e) {
    playerSelection = "scissors";
    //console.log(`I picked ${playerSelection}`);
    playRound(playerSelection);
});

function getComputerChoice() {
    let choice = Math.random(); // generates random number between 0 and 1
    if (choice <= 1 / 3) {
        choice = "rock"; // rock if < 1/3
    } else if (choice <= 2 / 3) {
        choice = "paper"; // paper if between 1/3 and 2/3
    } else { choice = "scissors" } // scissors if >2/3
    //console.log(`Computer chooses ${choice}`);
    return choice;
};

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    //console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        return console.log("Tie game."), playerSelection, computerSelection;
    } 
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return console.log("You win!"), playerSelection, computerSelection;
    } 
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return console.log("You win!"), playerSelection, computerSelection;
    } 
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return console.log("You win!"), playerSelection, computerSelection;
    } 
    else {
        return console.log("You lose."), playerSelection, computerSelection;
    }
};

/*
    const rpsGame = document.querySelector('#rpsGame')


if (playerSelection === computerSelection) return {
round++;
//tie++;
//return alert("Tie game. We both guessed " + playerSelection + ".");
result = "Tie game."
/*const div = document.createElement('div');
div.classList.add('displayResults');
div.textContent = 'Tie Game.';
rpsGame.appendChild(div);
return result;
}
else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
round++;
win++;
//return alert("You win! " + playerSelection + " beats " + computerSelection + ".");
result = "You win!"
return result, playerSelection, computerSelection;
}
else if ((playerSelection === "paper") && (computerSelection === "rock")) {
round++;
win++;
//return alert("You win! " + playerSelection + " beats " + computerSelection + ".");
result = "You win!"
return result, playerSelection, computerSelection;
}
else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
round++;
win++;
//return alert("You win! " + playerSelection + " beats " + computerSelection + ".");
result = "You win!"
return result, playerSelection, computerSelection;
}
else {
round++;
lose++;
//return alert("You lose! " + computerSelection + " beats " + playerSelection + ".");
result = "You lose."
return result, playerSelection, computerSelection;
}

}
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

