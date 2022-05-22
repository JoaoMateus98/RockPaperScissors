// Written on May 19 2022 by Joaomateus Dos Santos

//Picks either rock paper or scissors based the random method.

const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultContainer = document.querySelector('.result-container');
const resultDisplay = document.querySelector('.result-display');
const buttons = document.querySelectorAll('.button-container');

let playerScore = 0;
let computerScore = 0;
let resetButtonPresent = false;

buttons.forEach((button) => button.addEventListener('click', getPlayerSelection));

function getPlayerSelection (event) {
    const playerSelection = event.srcElement.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function computerPlay () 
{
    let pick = '';

    const randomNum = Math.ceil(Math.random() * 3);

    switch (randomNum) 
    {
        case 1:
            pick = 'Rock';
            break;
        case 2:
            pick = 'Paper';
            break;
        case 3:
            pick = 'Scissors';
            break;
    }

    return pick;
}

// compares the computerSelection and playerSelection to see who wins
function playRound (playerSelection, computerSelection) 
{
    let roundResult = '';

    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection === computerSelection) {
            roundResult = 'Draw!';
        }
        else if (playerSelection === 'Rock' && computerSelection === 'Paper' || 
                 playerSelection === 'Paper' && computerSelection === 'Scissors' ||
                 playerSelection === 'Scissors' && computerSelection === 'Rock') {
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        } 
        else {
            roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        }
        updateUI (roundResult, playerScore, computerScore);
    }
}

function updateUI (roundResult, playerScore, computerScore) {
    playerScoreDisplay.textContent = playerScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();
    resultDisplay.textContent = roundResult;
    if (playerScore === 5 || computerScore === 5) {
       winner(playerScore, computerScore); 
    }
    
}

function winner (playerScore, computerScore) {

    if (playerScore < computerScore) {
        roundResult = 'You Lose!';
    }
    else {
        roundResult = 'You Win!';
    }
    if (!resetButtonPresent) {
        reset();
    }
}

function reset () {
    resetButtonPresent = true;
    const resetButton = document.createElement('button'); 
    
    resetButton.setAttribute('style', 'font-size: 32px; border: 1px solid rgb(160, 243, 65); background-color: rgb(160, 243, 65); border-radius: 8px; cursor: pointer;');
    resetButton.textContent = 'Play Again?';
    resultContainer.appendChild(resetButton);

    resetButton.addEventListener('click', function () {
        playerScore = 0;
        computerScore = 0;
        roundCounter = 0;
        roundResult = 'Press one of the buttons to play:';
        updateUI(roundResult, playerScore, computerScore);
        resetButtonPresent = false;
        resultContainer.removeChild(resetButton);
    });
}