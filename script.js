'use strict';
import './dice-1.png';
import './dice-2.png';
import './dice-3.png';
import './dice-4.png';
import './dice-5.png';
import './dice-6.png';
var dice1Png = require('./dice-1.png');
var dice2Png = require('./dice-2.png');
var dice3Png = require('./dice-3.png');
var dice4Png = require('./dice-4.png');
var dice5Png = require('./dice-5.png');
var dice6Png = require('./dice-6.png');
var arr = [0, dice1Png, dice2Png, dice3Png, dice4Png, dice5Png, dice6Png];

// General
document.querySelector('.player--active');
document.querySelector('.btn--new').addEventListener('click', resetGame);
document.querySelector('.btn--roll').addEventListener('click', rollClick);
document.querySelector('.btn--hold').addEventListener('click', holdClick);
var diceImg = document.querySelector('.dice');
diceImg.classList.add('hidden');
// player--1
var playerOne = document.querySelector('.player--0');
var scorePlayerOne = document.querySelector('#score--0');
var currentPlayerOne = document.querySelector('#current--0');
// player--2
var playerTwo = document.querySelector('.player--1');
var scorePlayerTwo = document.querySelector('#score--1');
var currentPlayerTwo = document.querySelector('#current--1');

// start coding
function resetGame() {
  currentPlayerOne.textContent = 0;
  scorePlayerOne.textContent = 0;
  currentPlayerTwo.textContent = 0;
  scorePlayerTwo.textContent = 0;
  playerOne.style.backgroundColor = '#fff6';
  playerTwo.style.backgroundColor = '#333';
  document.querySelector('.btn--roll').disabled = false;
  document.querySelector('.btn--hold').disabled = false;

  if (!playerOne.classList.contains('player--active')) {
    playerOne.classList.add('player--active');
    playerTwo.classList.remove('player--active');
  }

  if (!diceImg.classList.contains('hidden')) diceImg.classList.add('hidden');
}
resetGame();

function rollClick() {
  if (diceImg.classList.contains('hidden')) diceImg.classList.remove('hidden');
  var rollDice = Math.trunc(Math.random() * 6 + 1);
  if (playerOne.classList.contains('player--active')) {
    diceImg.src = `${arr[rollDice]}`;
    // player 1
    if (rollDice === 1) {
      currentPlayerOne.textContent = 0;
      holdClick();
    } else {
      var total = Number(currentPlayerOne.textContent) + rollDice;
      currentPlayerOne.textContent = total;
    }
  } else {
    // player 2
    diceImg.src = `${arr[rollDice]}`;
    if (rollDice === 1) {
      currentPlayerTwo.textContent = 0;
      holdClick();
    } else {
      var total = Number(currentPlayerTwo.textContent) + rollDice;
      currentPlayerTwo.textContent = total;
    }
  }
}

function holdClick() {
  if (playerOne.classList.contains('player--active')) {
    var finalScore1 =
      Number(scorePlayerOne.textContent) + Number(currentPlayerOne.textContent);

    scorePlayerOne.textContent = finalScore1;
    if (Number(scorePlayerOne.textContent) >= 100) {
      disabledButton();
      playerOne.style.backgroundColor = '#2f2f2f';
      diceImg.classList.add('hidden');
    } else {
      currentPlayerOne.textContent = 0;
      playerOne.classList.remove('player--active');
      playerTwo.classList.add('player--active');
    }
  } else {
    var finalScore2 =
      Number(scorePlayerTwo.textContent) + Number(currentPlayerTwo.textContent);
    scorePlayerTwo.textContent = finalScore2;
    if (Number(scorePlayerTwo.textContent) >= 100) {
      disabledButton();
      playerOne.style.backgroundColor = '#2f2f2f';
      diceImg.classList.add('hidden');
    } else {
      currentPlayerTwo.textContent = 0;
      playerOne.classList.add('player--active');
      playerTwo.classList.remove('player--active');
    }
  }
}

function disabledButton() {
  document.querySelector('.btn--roll').disabled = true;
  document.querySelector('.btn--hold').disabled = true;
}

// classList.toggle() check if class exsist remove it and if not exist add it
// playerTwo.classList.toggle("player--active"); check on playerOne
// playerOne.classList.toggle('player--active');
