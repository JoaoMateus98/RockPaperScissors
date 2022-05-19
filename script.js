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

function getWord () {
    let word = prompt('Please enter rock, paper, or scissors').toLowerCase();
    while (word != "rock" && word != "paper" && word != "scissors") {
        console.log(`${word} is an invalid input.`);
        word = prompt('Please enter rock, paper, or scissors').toLowerCase();
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound (computerSelection) {
    let playerSelection = getWord();

    if (playerSelection === computerSelection){
        console.log("Draw!")
        return 0;
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' || playerSelection === 'Paper' && computerSelection === 'Scissors' || playerSelection === 'Scissors' && computerSelection === 'Rock'){
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return 1;
    } 
    else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return 2;
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let currentWinner = playRound(computerPlay());
        
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

