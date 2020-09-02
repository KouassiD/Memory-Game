// try with table
const imgCard = [{
    palpatine: "img/palpatineCard.png",
    luck: "img/luckeCard.png",
    maul: "img/maulCard.png",
    yoda: "img/yodaCard.png",
    vador: "img/vadorCard.png",
    obiOne: "img/obiCard.png"
  },
  {
    paaaalpatine: "img/palpatineCard.png",
    luck: "img/luckeCard.png",
    maul: "img/maulCard.png",
    yoda: "img/yodaCard.png",
    vador: "img/vadorCard.png",
    obiOne: "img/obiCard.png"
  },
]
const arrayCard = () => {
  for (const deckL of imgCard) {
    for (const i in deckL) {
      const elem = deckL[i];
      console.log(elem)
      return elem
    }
  }
}

const deckList = arrayCard()

console.log(deckList)
let imgs = document.getElementsByClassName("img");
// console.log(imgs)

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];
  console.log(imgs[i])
  img.addEventListener('click', function () {
    if (imgCard[i] === imgCard[0]) {
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
}

// -- -- -- -- -- --valide-- -- -- --
// if (deckCard == imgCard[1] && [7]) {
//   this.src = imgCard[1]
// } else if (deckCard == imgCard[2] && [8]) {
//   this.src = imgCard[2]
// } else if (deckCard == imgCard[3] && [9]) {
//   this.src = imgCard[3]
// } else if (deckCard == imgCard[4] && [10]) {
//   this.src = imgCard[4]
// } else if (deckCard == imgCard[0] && [6]) {
//   this.src = imgCard[0]
// } else if (deckCard == imgCard[5] && [11]) {
//   this.src = imgCard[5]
// }
// // console.log(deckCard)
// })
// }


//VALIDE

// let img = document.getElementsByClassName("img");
// for (let i = 0; i < img.length; i++) {
//   const imgList = img[i];
//   imgList.addEventListener('click', function () {
//     if (imgList === img[0]) {
//       this.src = "../img/obiCard.png"
//     } else if (imgList === img[1]) {
//       this.src = "https://nsa40.casimages.com/img/2020/09/01/20090109364996352.png"
//     } else if (imgList === img[2]) {
//       this.src = "https://nsa40.casimages.com/img/2020/09/01//200901095641415463.png"
//     } else if (imgList === img[3]) {
//       this.src = "https://nsa40.casimages.com/img/2020/09/01//200901100800480275.png"
//     } else if (imgList === img[5]) {
//       this.src = "https://nsa40.casimages.com/img/2020/09/01//20090110242914684.png"
//     } else {
//       this.src = "https://nsa40.casimages.com/img/2020/09/01//200901102309956810.png"
//     }
//   })
// }






// this.src = "https://nsa40.casimages.com/img/2020/09/01/20090109364996352.png" //palpa
// this.src = "https://nsa40.casimages.com/img/2020/09/01//200901095641415463.png" // luck
// this.src = "https://nsa40.casimages.com/img/2020/09/01//200901100800480275.png" // maul
// this.src = "https://nsa40.casimages.com/img/2020/09/01//20090110242914684.png" // yoda
// this.src = "https://nsa40.casimages.com/img/2020/09/01//200901102309956810.png" // vador
// this.src = "https://nsa40.casimages.com/img/2020/09/01//200901102158903696.png" // Obi
