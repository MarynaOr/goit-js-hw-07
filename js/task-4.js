const form = document.querySelector(".login-form");

form.addEventListener("submit", formFun);

function formFun(e) {
  e.preventDefault();

  const elements = e.target.elements;

  if (!elements.email.value.trim() || !elements.password.value.trim()) {
    alert("All form fields must be filled in");
    return;
  }
  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(info);

  e.target.reset();
}

//
form.style.width = "408px";

form.style.display = "flex";
form.style.flexDirection = "column";

const label = document.querySelectorAll("label");

label.forEach((item) => {
  item.style.display = "flex";
  item.style.flexDirection = "column";
  item.style.width = "360px";
  item.style.fontWeight = "400";
  item.style.fontSize = "16px";
  item.style.lineHeight = "1.5";
  item.style.letterSpacing = "0.04em";
  item.style.color = "#2e2f42";
  item.style.marginBottom = "8px";
});

const input = document.querySelectorAll(".login-form input");
input.forEach((item) => {
  item.style.border = "1px solid #808080";
  item.style.borderRadius = "4px";
  item.style.width = "360px";
  item.style.height = "40px";
});

const btn = document.querySelector(".login-form button");
btn.style.marginTop = "16px";
btn.style.borderRadius = "8px";
btn.style.padding = "8px 16px";
btn.style.width = "86px";
btn.style.border = "none";
btn.style.backgroundColor = "#4e75ff";
btn.style.height = "40px";
btn.style.fontWeight = '500';
btn.style.fontSize = '16px';
btn.style.lineHeight = '1.5';
btn.style.letterSpacing = '0.04em';
btn.style.color = '#fff';



