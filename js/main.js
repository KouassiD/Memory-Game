// try with table
const deckObj = {
  palpatineCard1: "img/palpatineCard.png",
  luckCard1: "img/luckeCard.png",
  maulCard1: "img/maulCard.png",
  yodaCard1: "img/yodaCard.png",
  vadorCard1: "img/vadorCard.png",
  obiCard1: "img/obiCard.png",
  palpatineCard2: "img/palpatineCard.png",
  luckCard2: "img/luckeCard.png",
  maulCard2: "img/maulCard.png",
  yodaCard2: "img/yodaCard.png",
  vadorCard2: "img/vadorCard.png",
  obiCard2: "img/obiCard.png"
};
//On parcours le tableau d'objet
const deckVal = Object.values(deckObj);
const decKeys = Object.keys(deckObj);
console.log(deckVal);
console.log(decKeys);

let imgs = document.getElementsByClassName("img");
for (let i = 0; i < imgs.length; i++) {
  const click = imgs[i];
  click.addEventListener('click', () => {
    if (deckVal[i] === deckVal[2] && [8]) {
      click.src = deckVal[2]
    } else if (deckVal[i] === deckVal[2] && [8]) {

    } {

    }
    console.log(click)
  })

}
