const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  // Math.floor(3.9) = 3
  // Math.ceil(3.9) = 4
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom() + 1;
  paintImage(randomNumber);
}

init();
