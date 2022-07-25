'use strict';

const numbers = document.querySelectorAll('#number');
const btn = document.getElementById('submit');

const beforeRat = document.querySelector('.before-rat');
const afterRat = document.querySelector('.after-rat');
const choice = document.getElementById('choice');

function updateActives() {
  numbers.forEach((number) => number.classList.remove('active'));
}

function switchDisplay() {
  beforeRat.classList.toggle('hide');
  afterRat.classList.toggle('hide');
}

let selectedRat = 0;

function submit() {
  let isChosen = false;
  let x = 0;

  numbers.forEach((number) => {
    x += 1;
    if (number.classList.contains('active')) {
      isChosen = true;
    }
  });
  if (isChosen) {
    switchDisplay();
  }

  choice.innerText = selectedRat;
}

numbers.forEach((number, i) => {
  number.addEventListener('click', () => {
    updateActives();
    number.classList.add('active');
    selectedRat = i + 1;
  });
});

btn.addEventListener('click', submit);
