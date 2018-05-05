var alpabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = alpabet[Math.floor(Math.random() * alpabet.length)];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userGuesses = [];

var winsDOM = document.getElementById('wins');
var guessesLeftDOM = document.getElementById('gLeft');
var lossesDOM = document.getElementById('losses');
var userGuessesDOM = document.getElementById('userGuesses');

function reset() {
  computerChoice = alpabet[Math.floor(Math.random() * alpabet.length)];
  guessLeft = 9;
  guessesLeftDOM.innerHTML = guessLeft;
  userGuesses = [];
  userGuessesDOM.innerHTML = userGuesses 
}

document.addEventListener("keyup", function (event) {
  console.log(event.key);
  var userGuess = event.key;
  console.log(userGuess);
  if(userGuess === computerChoice){
    wins = wins + 1;
    reset();
    winsDOM.innerHTML = wins;
  }
  else if(userGuess !== computerChoice) {
    guessLeft = guessLeft - 1;
    guessesLeftDOM.innerHTML = guessLeft;

    userGuesses.push(userGuess)
    userGuessesDOM.innerHTML = userGuesses.join()

    if (guessLeft <= 0) {
      losses = losses + 1;
      reset();
      lossesDOM.innerHTML = losses;
    }
  }
})