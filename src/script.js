const result = document.querySelector('.result');
const dicePlayer1 = document.querySelector('.player1 img');
const dicePlayer2 = document.querySelector('.player2 img');
const playButton = document.querySelector('button');

function randomNumber() {
  return Math.floor(Math.random()*6 + 1)
};

function randomDice(){
  dice1 = randomNumber();
  dice2 = randomNumber();
  
  dicePlayer1.src = `/images/dice${dice1}.png`;
  dicePlayer2.src = `/images/dice${dice2}.png`;

  if (dice1 > dice2) {
    result.innerHTML = 'Player 1 WIN!!!';
  } else if (dice1 < dice2) {
    result.innerHTML = 'Player 2 WIN!!!';
  } else {
    result.innerHTML = 'DRAW';
  };

  
}

playButton.addEventListener("click", randomDice);