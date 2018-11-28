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
let gameGrid = cardsArray.concat(cardsArray) .sort(() => 0.5 - Math.random());;

const deck = document.getElementById("deck");

const grid = document.createElement("section");
grid.setAttribute("class", "grid");

deck.appendChild(grid);

gameGrid.forEach(item => {
   const card = document.createElement('div');
   card.classList.add('card');
   card.dataset.name = item.id;
   card.style.backgroundImage = `url(${item.img})`;

  const front = document.createElement('div');
  front.classList.add('card');

  const back = document.createElement('div');
  back.classList.add('card');
  back.style.backgroundImage = `url(Images/space-invaders.png)`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});
