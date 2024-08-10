const listOfAllDice = document.querySelector(".die");
const scoreInputs = document.querySelectorAll("#score-options input");
const scoreSpans = document.querySelectorAll("#score-options span");
const currentRound = document.getElementById("current-round");
const currentRoundRolls = document.getElementById("current-round-rolls");
const totalScore = document.getElementById("total-score");
const scoreHistory = document.getElementById("score-history");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const keepScoreBtn = document.getElementById("keep-score-btn");
const rulesBtn = document.getElementById("rules-btn");
const rulesContainer = document.querySelector(".rules-container");

let isModalShowing = false;

let diceValuesArr = [];

let rolls = 0;
let score = 0;
let total = 0;
let round = 1;

const rollDice = () => {
  diceValuesArr = [];
  for (let i = 0; i < 5; i++) {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomValue);
  }

  listOfAllDice.forEach((die, index) => {
    die.textContent = diceValuesArr[index];
  });
};

rollDiceBtn.addEventListener("click", () => {
  rollDice();
});

rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;
  rulesBtn.innerText = isModalShowing ? "Hide rules" : "Show rules";
  rulesContainer.style.display = isModalShowing ? "block" : "none";
});
