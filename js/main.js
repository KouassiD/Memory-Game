// try with table

const heros = [
  "img/palpatineCard.png",
  "img/luckeCard.png",
  "img/maulCard.png",
  "img/yodaCard.png",
  "img/vadorCard.png",
  "img/obiCard.png"
]
console.log(heros)

let imgs = document.getElementsByClassName("img");
for (const img of imgs) {
  console.log(img)
  img.addEventListener('click', function () {

    console.log(heros[1])
    if (img) {
      this.src = heros[1]
    }


  })
}

// for (let i = 0; i < myImgs.length; i++) {
//   const imgList = myImgs[i];
//   imgList.addEventListener('click', function () {
//     if (imgList === myImgs[0]) {
//       this.src = myImgs[1]
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
