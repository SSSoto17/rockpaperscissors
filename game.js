"use strict";

// BUTTONS

const rock = document.querySelector("button.rock");
const paper = document.querySelector("button.paper");
const scissors = document.querySelector("button.scissors");
const resultWin = document.getElementById("win");
const resultLose = document.getElementById("lose");
const resultDraw = document.getElementById("draw");
const players = document.querySelectorAll(".player");

// VARIABLES

let playerChoice;
let pcChoice;
let result;

// GENERATE A RANDOM NUMBER FOR PC

function RanNum(max) {
  return Math.ceil(Math.random() * max);
}

// DETERMINE CHOICE

function choice(num) {
  let choice;
  if (num === 1) {
    return (choice = "rock");
  } else if (num === 2) {
    return (choice = "paper");
  } else if (num === 3) {
    return (choice = "scissors");
  }
}

// RESET

function reset() {
  resultWin.classList.add("hidden");
  resultLose.classList.add("hidden");
  resultDraw.classList.add("hidden");
  players.forEach((e) => {
    e.classList = "";
    e.classList.add("player");
  });
}

// GAME FUNCTIONS

function gameStart() {
  pcChoice = choice(RanNum(3));
  players.forEach((e) => {
    e.classList.add("shake");
    e.addEventListener("animationend", gameResult);
  });
}

function gameResult() {
  if (playerChoice === pcChoice) {
    result = "draw";
    resultDraw.classList.remove("hidden");
  } else if (
    (playerChoice === "rock" && pcChoice === "scissors") ||
    (playerChoice === "paper" && pcChoice === "rock") ||
    (playerChoice === "scissors" && pcChoice === "paper")
  ) {
    result = "win";
    resultWin.classList.remove("hidden");
  } else if (
    (playerChoice === "rock" && pcChoice === "paper") ||
    (playerChoice === "paper" && pcChoice === "scissors") ||
    (playerChoice === "scissors" && pcChoice === "rock")
  ) {
    result = "lose";
    resultLose.classList.remove("hidden");
  }

  // PLAYER HANDS
  players[0].classList.add(playerChoice);
  players[1].classList.add(pcChoice);
  players.forEach((e) => {
    e.classList.remove("shake");
  });
}

// EVENT LISTENERS

rock.addEventListener("click", () => {
  reset();
  playerChoice = choice(1);
  gameStart();
});

paper.addEventListener("click", () => {
  reset();
  playerChoice = choice(2);
  gameStart();
});

scissors.addEventListener("click", () => {
  reset();
  playerChoice = choice(3);
  gameStart();
});
