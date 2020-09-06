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
}

//On parcours le tableau d'objet
const deckVal = Object.values(deckObj).map(p => [p, Math.random()]).sort((deckObj, b) => deckObj[1] - b[1]).map(p => p[0]);
const decKeys = Object.keys(deckObj);
console.log(deckVal);
console.log(decKeys);

let imgs = document.getElementsByClassName("img");
console.log(imgs)

for (let i = 0; i < imgs.length; i++) {
  const click = imgs[i];
  click.addEventListener('click', () => {
    click.src = deckVal[i]
    console.log(click)
  })
}
