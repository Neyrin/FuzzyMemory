const cardsArray = [{
   'id' : 'brown',
   'img' : 'Images/invader.png',
},
{
   'id' : 'yellow',
   'img' : 'Images/invader1.png',
},
{
   'id' : 'pink',
   'img' : 'Images/invader2.png',
},
{
   'id' : 'mint',
   'img' : 'Images/invader3.png',
},
{
   'id' : 'purple',
   'img' : 'Images/invader4.png',
},
{
   'id' : 'turquoise',
   'img' : 'Images/invader5.png',
},
{
   'id' : 'orange',
   'img' : 'Images/invader6.png',
},
{
   'id' : 'green',
   'img' : 'Images/invader7.png',
},
];
let gameBoard = cardsArray
.concat(cardsArray)
.sort(() => 0.5 - Math.random());;


function startGame(gameBoard) {
const deck = document.getElementById("deck");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
deck.appendChild(grid);

gameBoard.forEach(item => {
   const card = document.createElement('div');
   card.classList.add('card');
   card.dataset.name = item.id;

   const back = document.createElement('div');
   back.classList.add('back');

   const front = document.createElement('div');
   front.classList.add('front');
   card.style.backgroundImage = `url(${item.img})`;


   grid.appendChild(card);
   card.appendChild(back);
   card.appendChild(front);
});

/* vv Flips cards, check for match, if matched add class "disabled", if not matched flips cards back vv */
const cards = document.querySelectorAll('.card');

let selected = false;
let lockBoard = false;
let firstGuess, secondGuess;

/* Flip two cards and send in to compare function */
function flipCard() {
   if (lockBoard) return;
   if (this === firstGuess) return;

  this.classList.add('active');
   if (!selected) {
      selected = true;
      firstGuess = this;
      return;
   }

   secondGuess = this;

   checkMatch()
   }

/* Compare chosen set of cards according to name */
function checkMatch() {
   if (firstGuess.dataset.name === secondGuess.dataset.name) {
      disableCards();
      return;
   }

   restoreCards();
}

/* If set does match disable cards and reset board */
function disableCards() {
   firstGuess.removeEventListener('click', flipCard);
   firstGuess.classList.add('disabled');
   secondGuess.removeEventListener('click', flipCard);
   secondGuess.classList.add('disabled');

   resetBoard();
}

/* If compard set does not match, flip cards back to original state and reset previous selection*/
function restoreCards() {
      lockBoard = true;
   setTimeout(() => {
      firstGuess.classList.remove('active');
      secondGuess.classList.remove('active');
      resetBoard();
   }, 1500);

}

/* Resets board from previous selection to allow all cards (not matched/disabled cards) to be selected again */
function resetBoard() {
   [selected, lockBoard] = [false, false];
   [firstGuess, secondGuess] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));
/* ^^ Flips cards, check for match, if matched add class "disabled", if not matched flips cards back ^^ */

};
/* Initial load in window */
window.addEventListener("load", () => {
   startGame(gameBoard);
});

/* Restart game function that resets all classes */
function restartGame() {
   var game = document.getElementById("deck");
   while (game.firstChild) {
      game.removeChild(game.firstChild);
}
/* Reshuffles the cards */
   let gameBoard = cardsArray
   .concat(cardsArray)
   .sort(() => 0.5 - Math.random());;
   
/* Calls the function wich creates the grid and cards */
   startGame(gameBoard);
};
