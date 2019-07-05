let randomNumber;

window.onload = function () {
  randomNumber = setRandomNumber()
};

function setRandomNumber() {
  return Math.floor(Math.random() * Math.floor(100));
}

function guess(player) {
  const playerElement = document.getElementById(player);
  const guess = parseInt(playerElement.querySelector('.input').value);

  // Default hide error, only show if guess is invalid
  const errorElement = playerElement.querySelector('.error');
  errorElement.style.display = "none";
  if (!isValid(guess)) {
    errorElement.style.display = "block";
    return;
  }

  const resultElement = playerElement.querySelector('.result');
  if (guess < randomNumber) {
    resultElement.innerHTML = 'Higher';
  } else if (guess > randomNumber) {
    resultElement.innerHTML = 'Lower';
  } else {
    resultElement.innerHTML = 'Bingo!';
    endGame();
  }
}

function isValid(guess) {
  const min = 1;
  const max = 100;

  return Number.isInteger(guess) || guess >= min || guess <= max;
}

function endGame() {
  Array.from(document.getElementsByClassName("game")).forEach(
    function(element) {
      element.getElementsByClassName("input")[0].disabled = true;
      element.getElementsByClassName("submit")[0].disabled = true;
    }
  );
}
