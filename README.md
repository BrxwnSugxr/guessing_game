# JavaScript Games

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow)

<h1 align="center">JavaScript Games</h1>

A browser-based collection of interactive JavaScript games built to practise and demonstrate core front-end development concepts.

The project currently contains two games:

- **Word Guess Game**
- **Coding Quiz**

The games were developed using HTML, CSS, Bootstrap, and JavaScript, with browser Web APIs and localStorage used to provide interactive functionality and persistent game data.

The project is also being developed as a learning project, with future plans to introduce external APIs and explore AI-powered voice interaction.

---

## Table of Contents

- [JavaScript Games](#javascript-games)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
- [Games](#games)
  - [Word Guess Game](#word-guess-game)
    - [Gameplay](#gameplay)
    - [Example](#example)
  - [Coding Quiz](#coding-quiz)
    - [Gameplay](#gameplay-1)
  - [Installation](#installation)
  - [Future Improvements](#future-improvements)

---

## Overview

This project is a collection of browser-based JavaScript games designed to practise programming fundamentals while building increasingly interactive applications.

The project began as a Word Guess Game and has since been expanded to include a timed Coding Quiz.

The goal is to continue developing the project as JavaScript skills progress, eventually incorporating external APIs and exploring AI-powered features.

---

# Games

## Word Guess Game

A timed word guessing game where the player attempts to identify a randomly selected JavaScript-related word before the timer reaches zero.

### Gameplay

1. Click the Start button.
2. A random JavaScript-related word is selected.
3. The word is displayed as a series of blank spaces.
4. Enter letters using the keyboard.
5. Correct letters are revealed.
6. Complete the word before the timer reaches zero to win.
7. If the timer reaches zero, the round is lost.
8. Wins and losses are stored using localStorage.

### Example

```text
_ _ _ _ _ _ _ _

After correctly guessing letters:

v a r _ a b l e
```

## Coding Quiz

A timed JavaScript knowledge quiz.

Players answer a series of JavaScript-related questions before the timer reaches zero.

### Gameplay
Click Start Quiz.
The countdown timer begins.
A question and multiple-choice answers are displayed.
Select an answer.
Correct answers allow the player to continue.
Incorrect answers deduct time.
The quiz ends when all questions are completed or the timer reaches zero.
The final score can be saved to the high-score system.
High scores are stored using localStorage.
Features
Word Guess Game
Random JavaScript-related word selection
Timed gameplay
Keyboard input
Letter matching
Win and loss tracking
Persistent scores using localStorage
Reset score functionality
Responsive layout
Coding Quiz
Multiple-choice JavaScript questions
Countdown timer
Time penalties for incorrect answers
Correct and incorrect answer feedback
Final score calculation
High-score storage
High-score sorting
Reset high scores
Responsive layout
Shared Application Features
Responsive design
Bootstrap components and utilities
Custom CSS styling
CSS design tokens using :root
Browser Web APIs
DOM manipulation
Event-driven interactions
Persistent browser storage
Technologies Used
HTML5
CSS3
Bootstrap 5
JavaScript
Browser Web APIs
localStorage
Git
GitHub
JavaScript Concepts Practised

This project demonstrates a range of JavaScript fundamentals and browser development concepts.

JavaScript Fundamentals
let and const
Variables
Arrays
Objects
Array methods
Functions
Parameters
Return values
Conditional statements
Comparison operators
Logical operators
Loops
Template literals
Regular expressions
DOM Manipulation
getElementById()
querySelector()
createElement()
textContent
innerHTML
appendChild()
classList
DOM event handling
Events
Click events
Keyboard events
Form submission
DOMContentLoaded
Timers
setInterval()
clearInterval()
setTimeout()
Browser APIs
localStorage
Web APIs
Browser event system
Application State

The games maintain application state such as:

Current question
Remaining time
Game status
Player score
Wins and losses
High scores

## Installation

Clone the repository:

```bash
git clone YOUR-REPOSITORY-URL
```

Navigate to the project directory:

```bash
cd word-guess-game
```

Open `index.html` in your browser.

Alternatively, the application can be deployed using GitHub Pages.

## Future Improvements

The current project uses a combination of Bootstrap and custom CSS.

Future improvements will focus on creating a more consistent design system across both games.

Potential improvements include:

Consistent colour palette
Shared CSS variables
Improved typography
Consistent button styles
Improved spacing
Improved card design
Better visual hierarchy
Improved accessibility
Improved mobile experience
Shared navigation
Consistent feedback states

The objective is to make both games feel like part of one cohesive application.

External API Integration

The next stage of development will explore integrating external APIs.

Potential API functionality includes:

Connecting the Word Guess Game to a word API
Expanding the available word database
Dynamically retrieving words
Retrieving quiz questions from an API
Creating additional API-powered game modes

This will provide practical experience with:

fetch()
REST APIs
HTTP requests
JSON
Promises
async
await
API error handling
Loading states
Failed requests
AI and Voice Interaction

A future experimental feature will explore voice interaction within the Word Guess Game.

The goal is to investigate whether the player can provide guesses using their voice instead of relying entirely on keyboard input.

Potential technologies to investigate include:

Web Speech API
Speech recognition
Speech-to-text
AI APIs
Voice processing
Natural language processing

Potential gameplay flow:

Player Speaks
      ↓
Speech Recognition
      ↓
Convert Speech to Text
      ↓
Identify Letter / Guess
      ↓
Validate Guess
      ↓
Update Game

This feature is currently planned as an experiment.

Its implementation will depend on:

Browser compatibility
API availability
Accuracy
Privacy considerations
Implementation complexity
Cost of external AI services
