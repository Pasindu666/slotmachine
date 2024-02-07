// 1. Deposit the money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. give the user their winnings
// 7. Play again

const prompt = require("prompt-sync")();

//deposit the money

const deposit = () => {
    while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid input!! Please Try again")
    } else {
        return numberDepositAmount;
    }
}
};

//get number of lines

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines > 3 || numberOfLines <= 0) {
            console.log("Invalid input!! Please Try again")
        } else {
            return numberOfLines;
        }
    }
};

//get bet amount

const getBet = (balance, lines) => {
    while(true){
        const bet = prompt("Enter the bet amount per line: ");
        const  betAmount= parseFloat(bet);
    
        if (isNaN(betAmount) || betAmount <= 0 || betAmount > balance / lines) {
            console.log("Invalid input!! Please Try again")
        } else {
            return betAmount;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);