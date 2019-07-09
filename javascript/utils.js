/**
 * @return {number}
 */
function generateNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

// TODO: Remove when server works
function checkGuess(player, guess) {
  let result;

  // Set result
  if (guess < randomNumber) {
    result = 'higher';
  } else if (guess > randomNumber) {
    result = 'lower';
  } else {
    result = 'Bingo!!!';
  }

  return JSON.parse('{"player": ' + player + ', "guess": "' + result + '"}');
}

// TODO: Enable when server works
// function checkGuess(player, guess) {
//   const url = 'https://www.drukzo.nl.joao.hlop.nl/challenge.php?player=' + player + '&guess=' + guess;
//   let xhr = new XMLHttpRequest();
//
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       return JSON.parse(xhr.responseText)
//     }
//   };
//
//   xhr.open("GET", url, true);
//   xhr.withCredentials = true;
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.send(null);
// }
