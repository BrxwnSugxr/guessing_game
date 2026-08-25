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

  renderBlanks();

  startTimer();
}
// ------------------------------
// Select Random Word
// ------------------------------
function renderBlanks() {
  const randomIndex = Math.floor(Math.random() * words.length);
  words.length = 7;
  chosenWord = words[randomIndex];
  blanksLetter = [];

  for (let i = 0; i < chosenWord.length; i++) {
    blanksLetter.push("_");
    wordBlank.textContent = blanksLetter.join(" ");
  }
}
// ------------------------------
// Timer
// ------------------------------
function startTimer() {
  setInterval();
  timer = setInterval(() => {
    clearInterval(timer);
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      loseGame();
    }
  });
}
// ------------------------------
// Win Game
// ------------------------------
function winGame() {
  checkWin();
  clearInterval(timer);
  gameActive = false;
  winCounter++;
  wordBlank.textContent = "YOU WON! ";
  startButton.disabled = false;
  saveScores();
  updateScoreDisplay();
}
// ------------------------------
// Lose Game
// ------------------------------
function loseGame() {
  let letterFound = false;
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === letter) {
      blanksLetter[i] = letter;
      wordBlank.textContent = blanksLetter.join(" ");
    }
  }
  loseCounter++;
  wordBlank.textContent = `GAME OVER - The word was "${chosenWord}".`;
}
// ------------------------------
// Check Letter
// ------------------------------
function checkLetters(letter) {}
// ------------------------------
// Check Win Condition
// ------------------------------
function checkWin() {
  blanksLetter.join("");
  chosenWord === blanksLetter.join("");
}
// ------------------------------
// Score Management
// ------------------------------
function saveScores() {
  localStorage.setItem("winCount", winCounter);
  localStorage.setItem("loseCounter", loseCounter);
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
}
// ------------------------------
// Keyboard Input
// ------------------------------

// ------------------------------
// Event Listeners
// ------------------------------

// ------------------------------
// Start Application
// ------------------------------
init();
