document.addEventListener("DOMContentLoaded", function () {
  const highscoresList = document.getElementById("highscores-list");
  const clearHighscoresBtn = document.getElementById("clear-highscores-btn");

  function loadHighScores() {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    highscores.sort(function (a, b) {
      return b.score - a.score;
    });

    highscoresList.innerHTML = "";

    highscores.forEach(function (score, index) {
      const listItem = document.createElement("li");

      listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
      highscoresList.appendChild(listItem);
    });
  }

  function clearHighScores() {
    localStorage.removeItem("highscores");

    loadHighScores();
  }

  clearHighscoresBtn.addEventListener("click", clearHighScores);

  loadHighScores();
});
