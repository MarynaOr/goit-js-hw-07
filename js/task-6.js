const container = document.getElementById("controls");
const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxCon = document.getElementById("boxes");

btnCreate.addEventListener("click", createBtn);
btnDestroy.addEventListener("click", destroyBtn);

function createBtn(e) {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    // createBoxes
  } else {
    alert("Введіть число від 1 до 100");
  }
}

function createBoxes(amount) {
  let boxEl = 30;
  let elem = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxEl}px`;
    box.style.height = `${boxEl}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    elem.push(box);
    boxEl += 10;
  }
  boxCon.style.display = "flex";
  boxCon.style.flexWrap = "wrap";
  boxCon.style.gap = "10px";
  boxCon.append(...elem);
  input.value = "";
}

function destroyBtn(event) {
  destroyBoxes();
}

function destroyBoxes() {
  input.value = "";
  boxCon.innerHTML = "";
  return;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//
input.style.width = "150px";
input.style.border = "1px solid #808080";
input.style.borderRadius = "8px";
input.style.padding = "8px 72px 8px 12px";
input.style.height = "40px";
input.style.fontWeight = "400";
input.style.fontSize = "16px";
input.style.lineHeight = "1.5";
input.style.letterSpacing = "0.04em";
input.style.color = "#2e2f42";
//
btnCreate.style.backgroundColor = " #4e75ff";
btnCreate.style.color = "#fff";
btnCreate.style.padding = " 8px 16px";
btnCreate.style.width = "120px";
btnCreate.style.height = "40px";
btnCreate.style.borderRadius = "8px";
btnCreate.style.fontWeight = "500";
btnCreate.style.fontSize = "16px";
btnCreate.style.lineHeight = "1.5";
btnCreate.style.letterSpacing = "0.04em";
//
btnDestroy.style.backgroundColor = "#ff4e4e";
btnDestroy.style.color = "#fff";
btnDestroy.style.padding = " 8px 16px";
btnDestroy.style.width = "120px";
btnDestroy.style.height = "40px";
btnDestroy.style.borderRadius = "8px";
btnDestroy.style.fontWeight = "500";
btnDestroy.style.fontSize = "16px";
btnDestroy.style.lineHeight = "1.5";
btnDestroy.style.letterSpacing = "0.04em";
