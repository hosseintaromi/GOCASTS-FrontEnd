document.addEventListener("DOMContentLoaded", () => {
  const choices = ["✊", "✋", "✌️"];
  const resultText = document.getElementById("resultText");
  const userChoiceDiv = document.getElementById("userChoice");
  const computerChoiceDiv = document.getElementById("computerChoice");

  document
    .getElementById("rock")
    .addEventListener("click", () => playGame("✊"));
  document
    .getElementById("paper")
    .addEventListener("click", () => playGame("✋"));
  document
    .getElementById("scissors")
    .addEventListener("click", () => playGame("✌️"));

  function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(userChoice, computerChoice);
    userChoiceDiv.textContent = userChoice;
    computerChoiceDiv.textContent = computerChoice;
    resultText.textContent = result;
    if (result === "شما برنده شدید!") {
      resultText.textContent += " 😊";
    } else if (result === "شما باختید!") {
      resultText.textContent += " 😢";
    }
  }

  function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "مساوی!";
    } else if (
      (userChoice === "✊" && computerChoice === "✌️") ||
      (userChoice === "✋" && computerChoice === "✊") ||
      (userChoice === "✌️" && computerChoice === "✋")
    ) {
      return "شما برنده شدید!";
    } else {
      return "شما باختید!";
    }
  }
});
