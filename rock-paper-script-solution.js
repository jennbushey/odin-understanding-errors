//revised with help from internet https://www.youtube.com/watch?v=hQZtbEPLKJM


const choices = ["rock", "paper", "scissors"]; //global variable, an array with the game choices 
const winners = []; //global variable, an array with the winner of each round

startGame();

function startGame() {
    //play the game until someone wins 5 times
    console.log('game started');
    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', () => {
        if (button.id) playRound(button.id);
        console.log('click');
    }));
    document.querySelector('.reset').style.display = 'none';
};

function playRound(playerSelection) {
    //plays game
    let wins = checkOnWins();
    console.log(wins);
    if (wins >= 5) return;

    let computerSelection = getComputerChoice();
    let winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner); //winner is added to the winners array.
    scoreKeeper();
    showResults(playerSelection, computerSelection, winner);

    wins = checkOnWins();
    if (wins === 5) {
        //display end results
        finalResults();
    }
};

function getComputerChoice() {
    //gets computer choice of rock, paper, or scissors

    //explanation of shorter solution 
    //math.floor rounds down to whole number
    //math.random picks a random number
    //choices.length is 3
    //therefore returns 0, 1, or 2

    return choices[Math.floor(Math.random() * choices.length)]

    //my original solution
    // //let choice = Math.random(); // generates random number between 0 and 1
    //if (choice <= 1 / 3) {
    //   return choices[0];
    //} else if (choice <= 2 / 3) {
    //    return choices[1];
    //} else { choices[2] } // scissors if >2/3
    //return choice;
};

function checkWinner(playerSelection, computerSelection) {
    //returns results of rock, paper, scissors round
    if (playerSelection === computerSelection) {
        return "No one";
    }
    else if (((playerSelection === "rock") && (computerSelection === "scissors")) ||
        ((playerSelection === "paper") && (computerSelection === "rock")) ||
        ((playerSelection === "scissors") && (computerSelection === "paper"))) {
        return "Player";
    }
    else {
        return "Computer";
    };
};

function checkOnWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins);
};

function scoreKeeper() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    document.querySelector('.playerScore').textContent = `Player: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Computer: ${computerWins}`;

};

function showResults(playerSelection, computerSelection, winner) {
    //uses DOM to update html class to display results
    //console.log(playerSelection, computerSelection, winner);
    document.querySelector('.results').textContent = `-- Results --`;
    document.querySelector('.playerSelection').textContent = `You chose ${playerSelection}`;
    document.querySelector('.computerSelection').textContent = `The computer chose ${computerSelection}`;
    document.querySelector('.gameWinner').textContent = `${winner} wins this round.`;
};

function finalResults() {
    let playerWins = winners.filter((item) => item == "Player").length;
    if (playerWins === 5) {
        document.querySelector('.results').textContent = `-- Results --`;
        document.querySelector('.playerSelection').textContent = ``;
        document.querySelector('.computerSelection').textContent = ``;
        document.querySelector('.gameWinner').textContent = `Player won 5 times!`;
    } else {
        document.querySelector('.results').textContent = `-- Results --`;
        document.querySelector('.playerSelection').textContent = ``;
        document.querySelector('.computerSelection').textContent = ``;
        document.querySelector('.gameWinner').textContent = `Computer won 5 times.`;
    }
    document.querySelector('.reset').style.display = 'flex';
};

function resetGame() {
    // resets game on button
    console.log("game reset");
    winners.length =0;
    document.querySelector('.playerScore').textContent = `Player: 0`;
    document.querySelector('.computerScore').textContent = `Computer: 0`;
    document.querySelector('.results').textContent = ``;
    document.querySelector('.playerSelection').textContent = ``;
    document.querySelector('.computerSelection').textContent = ``;
    document.querySelector('.gameWinner').textContent = ``;
    startGame();
};