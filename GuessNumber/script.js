'use strict';

/* DEFINE CONSTANCE */
const MIN_NUM = 1;
const MAX_NUM = 20;
const INITIAL_SCORE = 20;

const ranNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let secretNumber = ranNum(MIN_NUM, MAX_NUM);
let score = INITIAL_SCORE; // 数据来源不要依靠于 DOM
let hightScore = 0;

const displayMessage = mesg => {
  document.querySelector('.message').textContent = mesg;
};

const displayNumber = num => {
  document.querySelector('.number').textContent = num;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

/* Listener */

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value); // value 获取 input 的值, 也可以设置值

  if (!guess) displayMessage('⛔ No Number!');
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber); // 设置文本

    document.querySelector('body').style.backgroundColor = '#60b347'; // 改变的 css 实际写在 inline
    document.querySelector('.number').style.width = '30rem';

    hightScore = Math.max(score, hightScore);
    console.log(hightScore);
    document.querySelector('.highscore').textContent = hightScore;
  } else {
    score--;
    displayScore(score <= 0 ? 0 : score);

    displayMessage(guess > secretNumber ? 'Too Big!' : 'Too Small!');

    if (score <= 0) displayMessage('You lost the game!');
  }
});

// reset
document.querySelector('.again').addEventListener('click', () => {
  score = INITIAL_SCORE;
  displayScore(score);
  secretNumber = ranNum(MIN_NUM, MAX_NUM);
  displayNumber('?');
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
