const btn = document.querySelector(".change-color");

const body = document.querySelector("body");

const span = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//
const paragraf = document.querySelector(".widget p");

paragraf.style.fontWeight = "400";
paragraf.style.fontSize = "16px";
paragraf.style.lineHeight = "1.5";

paragraf.style.color = "#2e2f42";
paragraf.style.letterSpacing = "0.04em";

btn.style.marginTop = "16px";
btn.style.borderRadius = "8px";
btn.style.padding = "8px 16px";
btn.style.width = "148px";
btn.style.height = "40px";
btn.style.backgroundColor = "#4e75ff";
btn.style.border = "none";
