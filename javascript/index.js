const min = 0;
const max = 100;
const randomNumber = generateNumber(min, max);

let playerOne;
let playerTwo;
let playerThree;

window.onload = function () {
  playerOne = new Game(document.getElementById('player-one'));
  playerTwo = new Game(document.getElementById('player-two'));
  playerThree = new Game(document.getElementById('player-three'));
};

function Game(gameContainer) {
  const titleElement = gameContainer.querySelector('.game__title');
  const inputElement = gameContainer.querySelector('.game__input');
  const resultElement = gameContainer.querySelector('.game__result');
  const errorElement = gameContainer.querySelector('.game__error');

  // Set variable values game.
  inputElement.min = min;
  inputElement.max = max;
  titleElement.innerHTML = 'Enter a number between ' + min +  ' and ' + max + '.';
  errorElement.innerHTML = 'Please enter a number between the ' + min +  ' and ' + max + '.';

  // Guess number
  this.guess = function () {
    const guess = parseInt(inputElement.value);

    // Default hide error, only show if guess is invalid
    errorElement.style.display = "none";
    if (!isGuessValid(guess)) {
      resultElement.innerHTML = "";
      errorElement.style.display = "block";
      return;
    }

    // Set result
    if (guess < randomNumber) {
      resultElement.innerHTML = 'Higher';
    } else if (guess > randomNumber) {
      resultElement.innerHTML = 'Lower';
    } else {
      resultElement.innerHTML = 'Bingo!!!';
      this.endGame();
    }
  };

  // End the game for all players
  this.endGame = function () {
    Array.from(document.getElementsByClassName("game")).forEach(
      function (element) {
        element.getElementsByClassName("game__input")[0].disabled = true;
        element.getElementsByClassName("game__submit")[0].disabled = true;
      }
    );
  }
}

/**
 * @return {number}
 */
function generateNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

function isGuessValid(guess) {
  return Number.isInteger(guess) && guess >= min && guess <= max;
}
