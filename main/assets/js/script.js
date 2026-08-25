// ==========================================
// Word Guess Game
// ==========================================

// ------------------------------
// DOM Elements
// ------------------------------
const wordBlank = document.querySelector(".word-blanks");
const winElement = document.querySelector(".win");
const loseElement = document.querySelector(".lose");
const timerElement = document.querySelector(".timer-count");
const startButton = document.querySelector(".start-button");
const resetButton = document.querySelector(".reset-button");
const gameStatus = document.querySelector(".game-status");

// ------------------------------
// Game State
// ------------------------------

let chosenWord = "";
let blanksLetter = [];

let timer = null;
let timerCount = 10;
let winCounter = 0;
let loseCounter = 0;
let gameActive = false;

const words = [
  "variable",
  "array",
  "modulus",
  "object",
  "function",
  "string",
  "boolean",
];

// ------------------------------
// Initialise Game
// ------------------------------
function init() {
  loadScores();
  updateScoreDisplay();

  timerElement.textContent = textContent;
  gameStatus.textContent = "Press Start to begin!";
}
// ------------------------------
// Start Game
// ------------------------------
function startGame() {
  clearInterval(timer);

  gameActive = true;
  timerCount = 10;

  startButton.disabled = true;

  timerElement.textContent = timerCount;
  gameStatus.textContent = "Guess a letter!";
  gameStatus.className = "alert alert-secondary text-center game-status";

  renderBlanks();

  startTimer();
}
// ------------------------------
// Select Random Word
// ------------------------------
function renderBlanks() {
  const randomIndex = Math.floor(Math.random() * words.length);
  chosenWord = words[randomIndex];
  blanksLetter = [];

  for (let i = 0; i < chosenWord.length; i++) {
    blanksLetter.push("_");
  }
  wordBlank.textContent = blanksLetter.join(" ");
}
// ------------------------------
// Timer
// ------------------------------
function startTimer() {
  timer = setInterval(() => {
    timerCount--;

    timerElement.textContent = timerCount;

    if (timerCount <= 0) {
      loseGame();
    }
  }, 1000);
}
// ------------------------------
// Win Game
// ------------------------------
function winGame() {
  clearInterval(timer);
  gameActive = false;
  winCounter++;
  wordBlank.textContent = "YOU WON! ";

  gameStatus.textContent = "Great job! you guessed the word.";
  gameStatus.className = "alert alert-success text-center game-status";

  startButton.disabled = false;

  saveScores();
  updateScoreDisplay();
}
// ------------------------------
// Lose Game
// ------------------------------
function loseGame() {
  clearInterval(timer);
  gameActive = false;
  loseCounter++;

  wordBlank.textContent = `GAME OVER - The word was "${chosenWord}".`;

  gameStatus.textContent = "Time's up!";
  gameStatus.className = "alert alert-danger text0center game-status";
  startButton.disabled = false;
  saveScores();
  updateScoreDisplay();
}
// ------------------------------
// Check Letter
// ------------------------------
function checkLetters(letter) {
  let letterFound = false;
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === letter) {
      blanksLetter[i] = letter;
      letterFound = true;
    }
  }
  if (letterFound) {
    wordBlank.textContent = blanksLetter.join(" ");
  }
  return letterFound;
}
// ------------------------------
// Check Win Condition
// ------------------------------
function checkWin() {
  chosenWord === blanksLetter.join("");
}
// ------------------------------
// Score Management
// ------------------------------
function saveScores() {
  localStorage.setItem("winCount", winCounter) || 0;
  localStorage.setItem("loseCounter", loseCounter) || 0;
}
function loadScores() {
  localStorage.getItem("winCount");
}
function updateScoreDisplay() {
  winElement.textContent = winCounter;
  loseElement.textContent = loseCounter;
}

// ------------------------------
// Reset Score
// ------------------------------
function resetGame() {
  winCounter = 0;
  loseCounter = 0;

  saveScores();
  updateScoreDisplay();

  gameStatus.textContent = "Score reset!";
  gameStatus.className = "alert alert-secondary text-center game-status";
}
// ------------------------------
// Keyboard Input
// ------------------------------
document.addEventListener("keydown", (event) => {
  if (!gameActive) {
    return;
  }
  const letterGuessed = event.key.toLowerCase();
  if (!/^[a-z]$/i.test(letterGuessed)) {
    return;
  }
  checkLetters(letterGuessed);

  if (checkWin()) {
    winGame();
  }
});
// ------------------------------
// Event Listeners
// ------------------------------
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);

// ------------------------------
// Start Application
// ------------------------------
init();
