const player1Input = document.getElementById('player1Input');
const startGameBtn = document.getElementById('startGameBtn');
const player2Input = document.getElementById('player2Input');
const submitGuessBtn = document.getElementById('submitGuessBtn');
const guessMessage = document.getElementById('guessMessage');
const attemptsLeft = document.getElementById('attemptsLeft');

let secretNumber;
let attempts = 5;

startGameBtn.addEventListener('click', () => {
    secretNumber = parseInt(player1Input.value);
    player1Input.value = ''; // Clear input field
    player2Input.disabled = false;
    submitGuessBtn.disabled = false;
    guessMessage.textContent = '';
    attempts = 5;
    attemptsLeft.textContent = `Attempts Left: ${attempts}`;
});

submitGuessBtn.addEventListener('click', () => {
    const guess = parseInt(player2Input.value);
    player2Input.value = ''; // Clear input field

    attempts--;
    attemptsLeft.textContent = `Attempts Left: ${attempts}`;

    if (guess === secretNumber) {
        guessMessage.textContent = 'Congratulations! You guessed the number!';
        submitGuessBtn.disabled = true;
        player2Input.disabled = true;
    } else {
        guessMessage.classList.add('wrong-guess');
        guessMessage.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
        guessMessage.classList.remove('wrong-guess'); // Remove after a brief delay for visual feedback

        if (attempts === 0) {
            guessMessage.textContent = 'Game over! You ran out of attempts.';
            submitGuessBtn.disabled = true;
            player2Input.disabled = true;
        }
    }
});