
'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    const secretNumber = Math.trunc(Math.random() * 20 + 1);
    let score = 20;
});

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!'
    }

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "You are correct!!";
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }

    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "too high";
            score--;
            document.querySelector('.score').textContent = score;
        }

        else {
            document.querySelector('.message').textContent = "you lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }


    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "too low";
            score--;
            document.querySelector('.score').textContent = score;
        }

        else {
            document.querySelector('.message').textContent = "you lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }

});



