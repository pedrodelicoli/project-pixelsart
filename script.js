function setPaletteColor(event) {
  let x = event.target;
  let myPalettes = document.getElementsByClassName('color');
  for (let index = 0; index < myPalettes.length; index += 1){
    myPalettes[index].classList.remove('selected');
  }
  x.classList.add('selected');
}

function setPixelColor() {
  const selectedColor = document.getElementsByClassName('color selected');
  const pixels = document.querySelector('#pixel-board');

  pixels.addEventListener ('click', function(event) {
    if (selectedColor.length > 0) {
      const color = selectedColor[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    }
  });
}

function buttomClear() {
  const pixels = document.getElementsByClassName('pixel');
  const buttom = document.querySelector('#clear-board');
  const color = 'white';

  buttom.addEventListener ('click', function() {
    for (let index = 0; index < pixels.length; index += 1) {
      if (pixels[index].style.backgroundColor !== color) {
        pixels[index].style.backgroundColor = color;
      }
    }
  });
}

function colorPallete() {
  const colorPixel1 = document.getElementsByClassName('color')[0];
  colorPixel1.style.backgroundColor = 'black';
  const colorPixel = document.getElementsByClassName('color');
  for (let index = 1; index < colorPixel.length; index += 1) {
    colorPixel[index].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (colorPixel[index].backgroundColor === undefined) {
      colorPixel[index].style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  }
}

window.onload = function () {
  colorPallete()
  setPixelColor();
  buttomClear();
};
