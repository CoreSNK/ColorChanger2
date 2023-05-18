const CHANGER = document.querySelector("#changer");
const RESET = document.querySelector("#reset");
const FONTCHANGE = document.querySelector("#font");
const COLORS = ["#23ac21", "#ff23cb", "#1423ac", "rgb(0,85,225)", "#ffccdd"];
const FONTS = ["arial", "Montserrat", "Oswald", "roboto"];
const hexColorLetter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const hexColorNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


CHANGER.addEventListener("click", () => {
  const randomIdx = Math.floor(Math.random() * COLORS.length);
  document.body.style.background = COLORS[randomIdx];
});

FONTCHANGE.addEventListener("click", () => {
  const randomFont = Math.floor(Math.random() * FONTS.length);
  document.body.style.fontFamily = FONTS[randomFont];
});

RESET.addEventListener("click", () => {
  document.body.style.background = "#FFF";
  document.body.style.fontFamily = "arial";
});
