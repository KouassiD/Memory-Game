const deckObj = {
  luckOne: "img/luckeCard.png",
  palpatineOne: "img/palpatineCard.png",
  yodaOne: "img/yodaCard.png",
  vadorOne: "img/vadorCard.png",
  obiOne: "img/obiCard.png",
  maulOne: "img/maulCard.png",
  luckTwo: "img/luckeCard.png",
  palpatineTwo: "img/palpatineCard.png",
  yodaTwo: "img/yodaCard.png",
  vadorTwo: "img/vadorCard.png",
  obiTwo: "img/obiCard.png",
  maulTwo: "img/maulCard.png",
};

//We retrieve the object and convert it to an array, then we randomize the cards.
const deckVal = Object.values(deckObj).map(p => [p, Math.random()]).sort((deckObj, b) => deckObj[1] - b[1]).map(p => p[0]);

//For each click we display a random card
let imgs = document.getElementsByClassName("img");

for (let i = 0; i < imgs.length; i++) {
  const click = imgs[i];
  click.addEventListener('click', () => {
    click.src = deckVal[i];
  });
};

//We check if the player finds two pairs
//-----------------NOT FONCTIONALE-----------
//let step = 1;
//let p1, p2;
// switch (step) {
//   case 1:
//     if (e.target.tagName == 'IMG') {
//       e.target.src = e.target.src2;
//       p1 = e.target.src2;
//       step = 2;
//     }
//     break;
//   case 2:
//     if (e.target.tagName == 'IMG') {
//       e.target.src = e.target.src2;
//       p2 = e.target.src2;
//       step = 3;
//     }
//     case 3:
//       if (p1 === p2) {
//         console.log("same");
//       } else {
//         console.log("hop");
//         click.src = "img/backCard.png";
//       }
//       break;
// };
