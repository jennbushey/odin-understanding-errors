
const btn1 = document.querySelector(".rock");
const btn2 = document.querySelector(".paper");
const btn3 = document.querySelector(".scissors");
let playerSelection;
let score;
score = [];
let win = 0;
let lose = 0;
let x;

const container = document.querySelector('#rpsGame');
const displayResult = document.createElement('h3');

btn1.addEventListener('click', function (e) {
    playerSelection = "rock";
    playRound(playerSelection);
});

btn2.addEventListener('click', function (e) {
    playerSelection = "paper";
    playRound(playerSelection);
});

btn3.addEventListener('click', function (e) {
    playerSelection = "scissors";
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
    if ((win < 5) && (lose < 5)) {
        if (playerSelection === computerSelection) {
            showResults(["Tie game.", win, lose]);
            return;
        }
        else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
            win++;
            showResults(["Tie game.", win, lose]);
            return ["You win.", win, lose];
        }
        else if ((playerSelection === "paper") && (computerSelection === "rock")) {
            win++;
            showResults(["Tie game.", win, lose]);
            return ["You win.", win, lose];
        }
        else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
            win++;
            showResults(["Tie game.", win, lose]);
            return ["You win.", win, lose];
        }
        else {
            lose++;
            showResults(["Tie game.", win, lose]);
            return ["You lose.", win, lose];
        }

    } else if (win === 5) {
        endGame();
        return winner(`Player Wins! Final score ${win} : ${lose}`);
    } else {
        endGame();
        return winner(`Computer Wins! Final score ${win} : ${lose}`);
    }

};

function showResults(result) {
    displayResult.classList.add('result');
    displayResult.textContent = result[0] + " Score: " + result[1] + " : " + result[2];
    rpsGame.appendChild(displayResult);
};

function winner(x) {
    displayResult.classList.add('winner');
    displayResult.textContent = x;
    rpsGame.appendChild(displayResult);
};

function endGame() {
    btn1.removeEventListener('click', function (e) { });
    btn2.removeEventListener('click', function (e) { });
    btn3.removeEventListener('click', function (e) { });
};