
const btn1 = document.querySelector(".rock");
const btn2 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissors");
let playerSelection;


const container = document.querySelector('#rpsGame');
const displayResult = document.createElement('h3');

btn1.addEventListener('click', function (e) {
    playerSelection = "rock";
    //console.log(`I picked ${playerSelection}`);
    showResults(playRound(playerSelection));
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
    console.log(`Computer chooses ${choice}`);
    return choice;
};

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    //console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        return "Tie game.";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return "You win.";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return "You win.";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return "You win.";
    }
    else {
        return "You lose.";
    }
};

function showResults(result) {
    displayResult.classList.add('result');
    displayResult.textContent = result;
    rpsGame.appendChild(displayResult);
};