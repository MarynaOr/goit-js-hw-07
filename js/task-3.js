const input = document.getElementById("name-input");

const title = document.getElementById("name-output");

input.addEventListener("input", inpFoo);

function inpFoo(event) {
  if (input.value.trim() === "") {
    return "Anonymous";
  }
  title.textContent = input.value;
}
