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
  return !(!Number.isInteger(guess) || guess <= 0 || guess > 100);
}

function endGame() {
  Array.from(document.getElementsByClassName("game")).forEach(
    function(element) {
      element.getElementsByClassName("input")[0].disabled = true;
      element.getElementsByClassName("submit")[0].disabled = true;
    }
  );
}

// HTTP GET Code
// function checkGuess(player, guess) {
//   const url = 'https://www.drukzo.nl.joao.hlop.nl/challenge.php?player=' + player + '&guess=' + guess;
//   let xhr = new XMLHttpRequest();
//
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       console.log(xhr.responseText);
//     }
//   };
//
//   xhr.open("GET", url, true);
//   xhr.withCredentials = true;
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.send(null);
// }
