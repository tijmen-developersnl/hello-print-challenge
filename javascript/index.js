let randomNumber;

window.onload = function () {
  randomNumber = setRandomNumber()
};

function setRandomNumber() {
  return Math.floor(Math.random() * Math.floor(100));
}

function guess(player) {
  const playerElement = document.getElementById(player);
  const resultElement = playerElement.querySelector('.game__result');
  const errorElement = playerElement.querySelector('.game__error');

  const guess = parseInt(playerElement.querySelector('.game__input').value);

  // Default hide error, only show if guess is invalid
  errorElement.style.display = "none";
  if (!isValid(guess)) {
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
    endGame();
  }
}

function isValid(guess) {
  const min = 1;
  const max = 100;

  return Number.isInteger(guess) && guess >= min && guess <= max;
}

function endGame() {
  Array.from(document.getElementsByClassName("game")).forEach(
    function (element) {
      element.getElementsByClassName("game__input")[0].disabled = true;
      element.getElementsByClassName("game__submit")[0].disabled = true;
    }
  );
}
