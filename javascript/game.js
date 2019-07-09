const min = 0;
const max = 100;
const randomNumber = generateNumber(min, max);

let playerOne;
let playerTwo;
let playerThree;

window.onload = function () {
  playerOne = new Game(1, document.getElementById('player-one'));
  playerTwo = new Game(2, document.getElementById('player-two'));
  playerThree = new Game(3, document.getElementById('player-three'));
};

function Game(player, gameContainer) {
  const titleElement = gameContainer.querySelector('.game__title');
  const inputElement = gameContainer.querySelector('.game__input');
  const resultElement = gameContainer.querySelector('.game__result');
  const errorElement = gameContainer.querySelector('.game__error');

  // Set variable values game.
  inputElement.min = min;
  inputElement.max = max;
  titleElement.innerHTML = 'Enter a number between ' + min + ' and ' + max + '.';
  errorElement.innerHTML = 'Please enter a number between the ' + min + ' and ' + max + '.';

  // Guess number and handle result
  this.guess = function () {
    const guess = parseInt(inputElement.value);
    if (!this.isGuessValid(guess)) {
      return;
    }

    const guessResponse = checkGuess(player, guess);
    if (!this.isCurrentPlayer(guessResponse)) {
      return;
    }

    this.setResult(guessResponse);
  };

  // Check if the guess is a number that falls between the min and max integer.
  this.isGuessValid = function (guess) {
    // Default hide error, only show if guess is invalid
    errorElement.style.display = "none";

    if (!Number.isInteger(guess) && guess >= min && guess <= max) {
      resultElement.innerHTML = "";
      errorElement.style.display = "block";
      return false;
    }

    return true;
  };

  // Check if the response it for the current player
  this.isCurrentPlayer = function (response) {
    return parseInt(response.player) === player;
  };

  this.setResult = function (response) {
    switch (response.guess) {
      case 'lower':
        resultElement.innerHTML = 'Lower';
        break;
      case 'higher':
        resultElement.innerHTML = 'Higher';
        break;
      case 'Bingo!!!':
        resultElement.innerHTML = 'Bingo!!!';
        this.endGame();
        break;
      default:
        break;
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
