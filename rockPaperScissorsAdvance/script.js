let userScore = 0;
let computerScore = 0;
let timeLeft = 15;
let timerId;

const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const userChoice_div = document.getElementById("userChoice");
const computerChoice_div = document.getElementById("computerChoice");
const resultText_p = document.getElementById("resultText");
const timer_span = document.getElementById("timer");
const resetButton = document.getElementById("reset");

const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").onclick = () => play("rock");
document.getElementById("paper").onclick = () => play("paper");
document.getElementById("scissors").onclick = () => play("scissors");
resetButton.onclick = resetGame;

function startTimer() {
  timeLeft = 15;
  timer_span.innerText = timeLeft;
  timerId = setInterval(() => {
    timeLeft--;
    timer_span.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerId);
      resultText_p.innerText = "زمان تمام شد!";
    }
  }, 1000);
}

function play(userChoice) {
  clearInterval(timerId);
  startTimer();

  const computerChoice = getComputerChoice();
  userChoice_div.innerText = getEmoji(userChoice);
  computerChoice_div.innerText = getEmoji(computerChoice);

  const result = getResult(userChoice, computerChoice);
  if (result === "win") {
    userScore++;
    resultText_p.innerText = "شما برنده شدید!";
  } else if (result === "lose") {
    computerScore++;
    resultText_p.innerText = "شما باختید!";
  } else {
    resultText_p.innerText = "مساوی!";
  }

  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getEmoji(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  return "✌️";
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "draw";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScore_span.innerText = userScore;
  computerScore_span.innerText = computerScore;
  userChoice_div.innerText = "";
  computerChoice_div.innerText = "";
  resultText_p.innerText = "";
  clearInterval(timerId);
  startTimer();
}

startTimer();
