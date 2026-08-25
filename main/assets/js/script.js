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
function init() {}
// ------------------------------
// Start Game
// ------------------------------
function startGame() {}
// ------------------------------
// Select Random Word
// ------------------------------
function renderBlanks() {}
// ------------------------------
// Timer
// ------------------------------
function startTimer() {}
// ------------------------------
// Win Game
// ------------------------------
function winGame() {}
// ------------------------------
// Lose Game
// ------------------------------
function loseGame() {}
// ------------------------------
// Check Letter
// ------------------------------
function checkLetters(letter) {}
// ------------------------------
// Check Win Condition
// ------------------------------
function checkWin() {}
// ------------------------------
// Score Management
// ------------------------------
function saveScores() {}
function loadScores() {}
function updateScoreDisplay() {}

// ------------------------------
// Reset Score
// ------------------------------
function resetGame() {}
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
