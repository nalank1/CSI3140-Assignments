// for rolling one die
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

//for rolling dice
function rollDice() {
    const dice = [];
    for (let i = 0; i < 5; i++) {
        dice.push(rollDie());
    }
    return dice;
}