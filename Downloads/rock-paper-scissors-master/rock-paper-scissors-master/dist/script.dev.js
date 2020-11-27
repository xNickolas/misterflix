"use strict";

var buttons = document.querySelectorAll('.pick');
var scoreEl = document.getElementById('score');
var main = document.getElementById('main');
var selection = document.getElementById('selection');
var reset = document.getElementById('reset');
var user_select = document.getElementById('user_select');
var computer_select = document.getElementById('computer_select');
var winner = document.getElementById('winner'); //modal rules 

var openBtn = document.getElementById('open');
var closeBtn = document.getElementById('close');
var modal = document.getElementById('modal');
var choices = ['paper', 'scissors', 'rock'];
var score = 0;
var userChoice = undefined;
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    userChoice = button.getAttribute('data-choice');
    checkWinner();
  });
});
openBtn.addEventListener('click', function () {
  // show the selection | hide the main
  modal.style.display = 'flex';
});
closeBtn.addEventListener('click', function () {
  // show the selection | hide the main
  modal.style.display = 'none';
});
reset.addEventListener('click', function () {
  // show the selection | hide the main
  main.style.display = 'flex';
  selection.style.display = 'none';
});

function checkWinner() {
  var computerChoice = pickRandomChoice(); // update the view

  updateSelection(user_select, userChoice);
  updateSelection(computer_select, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    winner.innerHTML = 'draw';
  } else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
    //user won
    updateScore(1);
    winner.innerHTML = 'win';
  } else {
    //user lost
    updateScore(-1);
    winner.innerHTML = 'lose';
  } // show the selection | hide the main


  main.style.display = 'none';
  selection.style.display = 'flex';
}

function updateScore(value) {
  score += value;
  scoreEl.innerHTML = score;
}

function pickRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
  // class reset
  selectionEl.classList.remove('btn-paper');
  selectionEl.classList.remove('btn-rock');
  selectionEl.classList.remove('btn-scissors'); // update the img

  var img = selectionEl.querySelectorAll('img');
  selectionEl.classList.add("btn-".concat(choice));
  img.src = "./images/icon-".concat(choice, ".svg");
  img.alt = choice;
}