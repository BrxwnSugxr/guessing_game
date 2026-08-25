![Badge](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML](https://img.shields.io/badge/HTML-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-purple)
![CSS](https://img.shields.io/badge/CSS-red)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

<h1 align="center">Word Guess Game</h1>

A browser-based word guessing game built with HTML, Bootstrap, CSS, and JavaScript. The player must identify a randomly selected JavaScript-related word by guessing its letters before the timer reaches zero.

The project focuses on applying core JavaScript concepts including DOM manipulation, event listeners, arrays, loops, functions, conditional logic, timers, localStorage, and application state.

The user interface was developed using Bootstrap to create a responsive layout while custom CSS was used to provide additional styling, accessibility features, responsive behaviour, and visual interactions.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
  - [Random Word Selection](#random-word-selection)
  - [Timed Gameplay](#timed-gameplay)
  - [Keyboard Input](#keyboard-input)
  - [Letter Matching](#letter-matching)
  - [Win and Loss Tracking](#win-and-loss-tracking)
  - [Reset Score](#reset-score)
  - [Responsive UI](#responsive-ui)
- [Technologies Used](#technologies-used)
- [Output](#output)
- [Installation](#installation)

## User Story
AS A user
I WANT to play a timed word guessing game
SO THAT I can test my knowledge and improve my JavaScript vocabulary


## Acceptance Criteria
GIVEN I want to play a word guessing game
WHEN I click the Start button
THEN a random word is selected and displayed as a series of blanks

WHEN the game begins
THEN a countdown timer starts

WHEN I press a letter key
THEN my guess is checked against the selected word

WHEN the letter exists in the selected word
THEN the corresponding blank is replaced with the correctly guessed letter

WHEN I correctly guess all letters in the word
THEN I win the game and the timer stops

WHEN the timer reaches zero
THEN I lose the game and the timer stops

WHEN I win a game
THEN my win count increases

WHEN I lose a game
THEN my loss count increases

WHEN I refresh the browser
THEN my previous win and loss scores remain available

WHEN I click Reset Score
THEN my win and loss counts are reset to zero


## Features

### Random Word Selection

A random JavaScript-related word is selected when a new game begins.

### Timed Gameplay

Each round starts with a countdown timer. The player must guess the selected word before the timer reaches zero.

### Keyboard Input

The game listens for keyboard events and checks whether the pressed key is a valid alphabetic character.

### Letter Matching

Correctly guessed letters are revealed in their corresponding positions.

For example:

```text
_ _ _ _ _ _ _ _

After correctly guessing a:

_ a _ _ _ _ _ _
```text

### Win and Loss Tracking

The application tracks the number of games won and lost.

Persistent Scores

Win and loss scores are stored using browser localStorage, allowing the scores to remain available after refreshing the page.

### Reset Score

The player can reset their accumulated wins and losses back to zero.

### Responsive UI

Bootstrap's responsive grid system is used to ensure the application works across desktop, tablet, and mobile screen sizes.

## Technologies Used
HTML5
CSS3
Bootstrap 5
JavaScript
Browser Web APIs
localStorage
JavaScript Concepts

This project was built to practise and demonstrate several core JavaScript concepts:

Variables
const and let
Arrays
Array methods
for loops
Functions
Function parameters
Return values
Conditional statements
Comparison operators
DOM selection
DOM manipulation
Template literals
Event listeners
Keyboard events
setInterval()
clearInterval()
Random number generation
Regular expressions
Application state
Browser localStorage
Video

## Output

When the application loads, the player is presented with the Word Guess Game interface.

The player begins a round by clicking the Start button.

A random JavaScript-related word is selected and represented by a series of blank spaces. A countdown timer begins at 10 seconds.

The player then enters letters using their keyboard.

If the selected letter exists within the word, the corresponding blank spaces are replaced with the correctly guessed letter.

_ _ _ _ _ _ _ _

After correctly guessing letters:

v a r _ a b l e

If all letters are correctly identified before the timer reaches zero, the player wins the round.

The application displays a winning message and increases the player's win count.

If the timer reaches zero before the word is completed, the player loses the round. The selected word is then revealed and the loss count increases.

The win and loss scores are stored using localStorage, allowing the scores to persist when the browser page is refreshed.

The Reset Score button allows the player to return both scores to zero.

## Installation

Clone the repository:

git clone YOUR-REPOSITORY-URL

Navigate to the project directory:

cd word-guess-game

Open index.html in your browser.

Alternatively, the application can be deployed using GitHub Pages.

Future Improvements

Potential future improvements include:

Adding a larger word database
Connecting the game to a words API
Adding difficulty levels
Increasing or decreasing the timer based on difficulty
Tracking previously guessed letters
Preventing duplicate guesses
Adding visual feedback for correct and incorrect guesses
Adding sound effects
Adding animations
Adding a high-score system
Adding additional game modes
Combining the game with other JavaScript challenges into a larger Brain Teaser application