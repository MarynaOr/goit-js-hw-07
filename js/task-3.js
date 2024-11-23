const input = document.getElementById("name-input");

const title = document.getElementById("name-output");

input.addEventListener("input", inpFoo);

function inpFoo(event) {
  if (input.value.trim() === "") {
    return "Anonymous";
  }
  title.textContent = input.value;
}

//
input.style.width = "360px";
input.style.height = "40px";
input.style.color = "#2e2f42";

const titleStyle = document.querySelector("h1");

titleStyle.style.fontWeight = "600";
titleStyle.style.fontSize = "24px";
titleStyle.style.lineHeight = "1.3";
titleStyle.style.letterSpacing = "0.04em";
titleStyle.style.color = "#2e2f42";
