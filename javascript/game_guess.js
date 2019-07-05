function checkGuess(player, guess) {
  const url = 'https://www.drukzo.nl.joao.hlop.nl/challenge.php?player=' + player + '&guess=' + guess;
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  };

  xhr.open("GET", url, true);
  xhr.withCredentials = true;
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(null);
}
