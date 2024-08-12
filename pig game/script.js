'use strict';

const randomNumber = Math.trunc((Math.random() * 6) + 1);
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const playerOneCurrent = document.querySelector('#current--0');
const playerTwoCurrent = document.querySelector('#current--1');
playerOneCurrent.textContent = 0;
playerTwoCurrent.textContent = 0;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerOneScore = document.querySelector('#score--0');
const playerTwoScore = document.querySelector('#score--1');
playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//DICE IMAGE 
btnRoll.addEventListener('click', () => {
    if (playing) {
        const randomNumber = Math.trunc((Math.random() * 6) + 1);
        dice.classList.remove('hidden');
        dice.src = `dice-${randomNumber}.png`;

        if (randomNumber !== 1) {
            currentScore = randomNumber + currentScore;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }

        else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', () => {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }

        else {
            switchPlayer();
        }
    }
});




