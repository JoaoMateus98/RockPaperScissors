// captilizes the first letter of any word
function captilize (word){
    word = word.toLowerCase();
    word = word.replace(word[0], word[0].toUpperCase());
    return word;
}

function checkSpelling (word) {
    word = word.toLowerCase();

    if (word === 'rock' || word === 'paper' || word === 'scissors') {
        return word;
    }
    else {
        let newWord = prompt(`${word} is not a valid input. Please use: rock, paper, scissors`);
        checkSpelling(newWord);
    }
}

function computerPlay () {
    let pick = '';

    const randomNum = Math.ceil(Math.random() * 3);

    switch (randomNum) {
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


//uses a random number generator to pick for computer
function playRound (playerSelection, computerSelection) {
    let originalPlayer = captilize(playerSelection);
    let originalComp = computerSelection;

    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        console.log("Draw!")
        return 0;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log(`You lose! ${originalComp} beats ${originalPlayer}`)
        return 1;
    } 
    else {
        console.log(`You win! ${originalPlayer} beats ${originalComp}`)
        return 2;
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please enter a rock, paper, or scissors: ');

        let currentWinner = playRound(checkSpelling(playerSelection), computerPlay());
        
        switch (currentWinner) {
            case 1:
                computerScore += 1;
                break;
            case 2:
                playerScore += 1;
                break;
            default:
                break;
        }

        console.log(`You have ${playerScore} points and the computer has ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log('You\'re the winner!');
    }
    else if (playerScore < computerScore){
        console.log('You lose!');
    }
    else {
        console.log('It\'s a draw');
    }
}

game();

