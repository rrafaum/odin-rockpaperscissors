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

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

playRound(humanChoice, computerChoice);