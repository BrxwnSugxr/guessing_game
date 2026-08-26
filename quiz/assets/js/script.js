let currentQuestionIndex = 0;
let time = questions.length * 10;
let timerId;

const timerEl = document.getElementById("time");
const startBtn = document.getElementById("start-quiz-btn");
const quizBoxEl = document.querySelector(".quiz-box");

function startQuiz() {
  startBtn.style.display = "none";
  timerEl.textContent = time;
  timerId = setInterval(clockTick, 1000);

  showNextQuestion();
}

function showNextQuestion() {
  quizBoxEl.innerHTML = "";

  const question = questions[currentQuestionIndex];

  const questionTitle = document.createElement("h2");
  questionTitle.textContent = question.title;

  quizBoxEl.appendChild(questionTitle);
  question.choices.forEach(function (choice) {
    const button = document.createElement("button");

    button.className = "btn choice-btn";
    button.value = choice;
    button.textContent = choice;
    button.onclick = questionClick;

    quizBoxEl.appendChild(button);
  });
}

function questionClick() {
  const correct = questions[currentQuestionIndex].answer === this.value;

  if (!correct) {
    time -= 10;
    time = Math.max(time, 0);

    timerEl.textContent = time;

    displayAnswerFeedback("Wrong!");
  } else {
    displayAnswerFeedback("Correct!");
  }

  currentQuestionIndex++;

  if (time === 0 || currentQuestionIndex === questions.length) {
    setTimeout(endQuiz, 1000);
    return;
  }
  setTimeout(showNextQuestion, 1000);
}

function displayAnswerFeedback(message) {
  const feedbackEl = document.createElement("div");

  feedbackEl.className = "feedback";
  feedbackEl.textContent = message;

  quizBoxEl.appendChild(feedbackEl);

  setTimeout(function () {
    feedbackEl.remove();
  }, 1000);
}

function clockTick() {
  time--;

  if (time <= 0) {
    time = 0;
    timerEl.textContent = time;
    endQuiz();
    return;
  }
  timerEl.textContent = time;
}

function endQuiz() {
  clearInterval(timerId);
  quizBoxEl.innerHTML = `
    <h2> Your final score is ${time}.</h2>
    <form id="names-form">
        <label for="names">Enter initials:</label>
        <input
        type="text"
        id="names"
        name="names">
        <button type="submit">Submit</button>
    </form>
    `;

  document
    .getElementById("names-form")
    .addEventListener("submit", saveHighscore);
}

function saveHighscore(event) {
  event.preventDefault();

  let names = document.getElementById("names").value.time();

  if (!/^[A-Za-z-]+$/.test(names) || names === "-") {
    alert("name must contain only letters and hypnes.");
    return;
  }

  names = names
    .replace(/-+/g, "-")
    .split("-")
    .map(function (part) {
      return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    })
    .join("-");

  let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

  highscores.push({
    initials: names,
    score: time,
  });

  localStorage.setItem("highscores", JSON.stringify(highscores));

  window.location.href = "highscores.html";
}

startBtn.onclick = startQuiz;
