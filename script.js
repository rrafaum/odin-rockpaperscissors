let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {

        result.textContent = `Draw! Computer choice: ${computerChoice} ---
            You: ${humanScore} | Computer: ${computerScore}`;

    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {

        humanScore++;
        result.textContent = `Computer choice: ${computerChoice} ---
            You: ${humanScore} | Computer: ${computerScore}`;

    } else {
        computerScore++;
        result.textContent = `Computer choice: ${computerChoice} ---
            You: ${humanScore} | Computer: ${computerScore}`;
    }
}

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.textContent;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        if (humanScore === 5) {
            result.textContent = `You win! ---
                    You: ${humanScore} | Computer: ${computerScore}`;
        } else if (computerScore === 5) {
            result.textContent = `Computer win! ---
                    You: ${humanScore} | Computer: ${computerScore}`
        }
    });
});

