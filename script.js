function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
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
    const humanChoice = prompt('Choose: Rock, Paper or Scissors', '');

    return humanChoice;
}