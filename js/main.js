// try with table
<<<<<<< HEAD
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

=======
const imgCard = [
  "img/palpatineCard.png",
  "img/luckeCard.png",
  "img/maulCard.png",
  "img/yodaCard.png",
  "img/vadorCard.png",
  "img/obiCard.png",
  "img/palpatineCard.png",
  "img/luckeCard.png",
  "img/maulCard.png",
  "img/yodaCard.png",
  "img/vadorCard.png",
  "img/obiCard.png"
]

let imgs = document.getElementsByClassName("img");
// for (let i = 0; i < imgs.length; i++) {
//   const keys = Object.keys(imgCard)
//   console.log(keys)
//   const rand = keys[Math.floor(Math.floor(Math.random() * keys.length - 1))]
//   console.log(rand)
//   const item = imgCard[rand]
//   console.log(item)
//   let img = imgs[i];
//   // console.log(imgs[i])
//   img.addEventListener('click', function () {
//     if (item) {
//       img.src = item
//     } else {
//       "non"
//     }
//     console.log(item)
//   })
// }


// console.log(imgs)
const rand = imgCard[Math.floor(Math.floor(Math.random() * imgCard.length)) + 1]

console.log(rand)

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];
  img.addEventListener('click', function () {
    if (rand === imgCard[0]) {
      img.src = imgCard[0]
    } else if (imgCard[i] === imgCard[1]) {
      img.src = imgCard[1]
    } else if (imgCard[i] === imgCard[2]) {
      img.src = imgCard[2]
    } else if (imgCard[i] === imgCard[3]) {
      img.src = imgCard[3]
    } else if (imgCard[i] === imgCard[4]) {
      img.src = imgCard[4]
    } else if (imgCard[i] === imgCard[5]) {
      img.src = imgCard[5]
    }
  });
>>>>>>> ff46647650e51f70e63110b36e5379e6ff82cafe
}
