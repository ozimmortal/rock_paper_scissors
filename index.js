console.log('Hello, world!');

const ruleButton = document.querySelector('.rule-btn');
const ruleDisplay = document.querySelector('.rule-display');
const closeRule = document.querySelector('#close');

let ruleVisible = false;

// Modal logic
ruleButton.addEventListener('click', () => {
  ruleDisplay.style.display = 'flex';
  ruleVisible = true;
});

closeRule.addEventListener('click', () => {
  ruleDisplay.style.display = 'none';
  ruleVisible = false;
});

// Game logic
const choices = ['rock', 'paper', 'scissors'];
const choiceImg = {
  rock: 'images/icon-rock.svg',
  paper: 'images/icon-paper.svg',
  scissors: 'images/icon-scissors.svg',
};
const choicesPick = document.querySelectorAll('.choice');
const choiceContainer = document.querySelector('.choice-container');
const resultContainer = document.querySelector('.result-container');
const userPickDisplay = document.querySelector('.choice-pick');
const housePickDisplay = document.querySelector('.house-pick');
const resultText = document.querySelector('#result');
const playButton = document.querySelector('#play-btn');
const scoreDisplay = document.querySelector('.score');

let userChoice = '';
let computerChoice = '';
let score = 0;

// User choice selection
choicesPick.forEach((choice) => {
  choice.addEventListener('click', () => {
    userChoice = choice.getAttribute('data-pick');
    playGame();
  });
});

function playGame() {
  // Generate computer choice
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update UI to show picks
  userPickDisplay.innerHTML = `
    <div>
      <img src="${choiceImg[userChoice]}" alt="${userChoice}">
    </div>
  `;
  userPickDisplay.id = userChoice[0];
  housePickDisplay.id = computerChoice[0];
  housePickDisplay.innerHTML = `
    <div>
      <img src="${choiceImg[computerChoice]}" alt="${computerChoice}">
    </div>
  `;

  if (userChoice === computerChoice) {
    resultText.innerText = 'DRAW';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText.innerText = 'YOU WIN';
    score++;
  } else {
    resultText.innerText = 'YOU LOSE';
    score--;
  }


  scoreDisplay.innerText = score;
  choiceContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
}

// Reset the game
playButton.addEventListener('click', () => {
  choiceContainer.style.display = 'flex';
  resultContainer.style.display = 'none';
  userPickDisplay.innerHTML = '';
  housePickDisplay.innerHTML = '';
});
