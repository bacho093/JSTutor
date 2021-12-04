const selections = document.querySelectorAll('[data-selection]');
const score = document.querySelector('.score').children;
const players = document.querySelector('.players').children;
const result = document.querySelector('.result > p');

const options = [
  {
    name: 'rock',
    beats: 'scissor'
  },
  {
    name: 'paper',
    beats: 'rock'
  },
  {
    name: 'scissor',
    beats: 'paper'
  }
];

selections.forEach(function (e) {
  e.addEventListener('click', function() {
    const selection = e.dataset.selection;

    // Your Hand
    score[0].innerText = selection;

    // Computer Hand
    computerPlay(selection);
  });
});


let yourPoint = 0;
let compPoint = 0;

function computerPlay(selection) {
  const randomPlay = Math.floor(Math.random() * 3);
  const compSelection = selections[randomPlay].dataset.selection;
  score[1].innerText = compSelection;

  options.forEach(item => {
    if(compSelection == selection) {
      result.innerText = "It is a tie!";
    }
    if(compSelection == item.name && selection == item.beats) {
      compPoint++;
      players[1].children[0].innerHTML = compPoint;
      result.innerText = "Computer Won!"
    }
    if(selection == item.name && compSelection == item.beats) {
      yourPoint++;
      players[0].children[0].innerHTML = yourPoint;
      result.innerText = "You Won!"
    }
  })
}
