let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function resetScore() {
  userScore = 0;
  computerScore = 0;
  updateScore();
  result_p.innerHTML = ""; // Optional: clear result message
}

function updateScore() {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  document.getElementById('score-display').textContent = `${userScore}:${computerScore}`;
}

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(userChoice)} beats ${convert(computerChoice)}. You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convert(computerChoice)} beats ${convert(userChoice)}. You lose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = `${convert(userChoice)} equals ${convert(computerChoice)}. It's a draw!`;
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
}

main();