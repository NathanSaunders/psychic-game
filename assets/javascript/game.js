var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var guessedLetters = [];
var letterToGuess = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

function updateGuessesLeft() {
  document.querySelector("#guesses-left").innerHTML =
    "Guesses Left: " + guessesLeft;
}

function updateGuessesSoFar() {
  document.querySelector("#guesses-so-far").innerHTML =
    "Your Guesses so far: " + guessedLetters.join(" ");
}

updateGuessesLeft();

var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];

  var computerGuess = letters[Math.floor(Math.random() * letters.length)];
};

document.onkeyup = function(event) {
  guessesLeft--;

  var letter = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();

  if (letter === computerGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    reset();
  } else if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    reset();
  }
};
