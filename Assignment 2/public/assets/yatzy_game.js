let dice = [1, 2, 3, 4, 5];
let keep = [false, false, false, false, false];
let roll_count = 0;
const max_rolls = 3;
const max_yatzys = 1;
let current_yatzys = 0;


function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
    if (roll_count >= max_rolls) {
        displayMessage("No remaining rolls!");
        return;
    }

    for (let i = 0; i < dice.length; i++) {
        if (!keep[i]) {
            dice[i] = rollDie();
        }
    }

    roll_count++;
    updateDice();
    updateRollCount();

    if (checkYatzy()) {
        if (current_yatzys < max_yatzys) {
            displayMessage("Yatzy!");
            current_yatzys++;
        } else {
            displayMessage("You already have a Yatzy!");
        }
    } else {
        displayMessage(":-(");
    }
}

function keepDie(i) {
    keep[i] = true;
    document.getElementById(`die${i + 1}`).classList.add('keep');
}

function reRollDie(i) {
    keep[i] = false;
    document.getElementById(`die${i + 1}`).classList.remove('keep');
}

function checkYatzy() {
    const firstDie = dice[0];
    return dice.every(die => die === firstDie);
}

function updateDice() {
    for (let i = 0; i < dice.length; i++) {
        document.getElementById(`die${i + 1}`).textContent = dice[i];
    }
}

function updateRollCount() {
    document.getElementById('roll-count').textContent = `Roll: ${roll_count}`;
}

function displayMessage(message) {
    document.getElementById('message').textContent = message;
}

document.getElementById('roll-button').addEventListener('click', rollDice);
for (let i = 0; i < 5; i++) {
    document.getElementById(`die${i + 1}`).addEventListener('click', () => toggleKeep(i));
}

function initializeGame() {
    roll_count = 0;
    current_yatzys = 0;
    dice = [1, 2, 3, 4, 5];
    keep = [false, false, false, false, false];
    updateDice();
    updateRollCount();
    displayMessage("Click 'Roll Dice' to start.");
}

initializeGame();
