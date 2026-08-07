function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Choose: Rock, Paper or Scissors', '');

    humanChoice = humanChoice.toUpperCase().slice(0,1)
    + humanChoice.toLowerCase().slice(1);

    return humanChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {

            console.log(`Draw! \nYour choice: ${humanChoice} | Computer choice: ${computerChoice}
                You: ${humanScore} | Computer: ${computerScore}`);

        } else if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ) {

            humanScore++;
            console.log(`Your win! \nYour choice: ${humanChoice} | Computer choice: ${computerChoice}
                You: ${humanScore} | Computer: ${computerScore}`);

        } else {
            computerScore++;
            console.log(`Your lost! \nYour choice: ${humanChoice} | Computer choice: ${computerChoice}
                You: ${humanScore} | Computer: ${computerScore}`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`You are the winner! Your score: ${humanScore}`)
    } else if (humanScore < computerScore) {
        console.log(`The computer is the winner! Computer score: ${computerScore}`)
    } else {
        console.log('Draw! No winners...')
    }
}

playGame();