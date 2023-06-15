const btn = document.querySelector('#changer');
const color = document.querySelector('.color');

const setBg = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  const randomColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
  console.log(randomColor);
}

changer.addEventListener('click', setBg);
setBg();

