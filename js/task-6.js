// Напиши скрипт створення й очищення колекції елементів з 
// наступним функціоналом.



// Є input, у який користувач вводить бажану кількість
//  елементів. Після натискання на кнопку Create має 
//  рендеритися (додаватися в DOM) колекція з
//   відповідною кількістю елементів і очищатися 
//   значення в інпуті. При повторному натисканні 
//   на кнопку Create поверх старої колекції має 
//   рендеритись нова. Після натискання на кнопку
//    Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба 
// провалідувати значення в input, воно має бути в межах
//  від 1 до 100 включно. Тільки якщо воно задоволяє умову,
//   мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію 
// createBoxes(amount), яка приймає один параметр — 
// число, що зберігає кількість елементів для рендеру.



// Функція має створювати стільки <div> елементів, скільки 
// вказано в параметрі amount. Усі ці <div> мають додаватися 
// за одну операцію у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від 
// попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.
//  Використовуй готову функцію getRandomHexColor() 
//  для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку
//  Destroy створи функцію destroyBoxes(), яка очищає 
//  вміст div#boxes, у такий спосіб видаляючи всі 
//  створені елементи.

const container = document.getElementById('controls')
const input = document.querySelector('input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxCon =document.getElementById('boxes')

btnCreate.addEventListener('click', createBtn)
btnDestroy.addEventListener('click', destroyBtn)

function createBtn (e) {
const amount = parseInt(input.value)
if(amount >= 1 && amount <= 100) {
  createBoxes(amount)
  // createBoxes
} else {
  alert('Введіть число від 1 до 100')
}

}

function createBoxes(amount) {
let boxEl = 30;
let elem = [];
for(let i = 0; i < amount; i++){
  const box = document.createElement('div');
  box.style.width = `${boxEl}px`;
  box.style.height = `${boxEl}px`;
 box.style.backgroundColor = getRandomHexColor();
 box.style.margin = '5px'
 elem.push(box);
boxEl += 10;

}
boxCon.style.display = 'flex';
boxCon.style.flexWrap = 'wrap';
boxCon.style.gap = '10px';
boxCon.append(...elem);
input.value = '';

}


function destroyBtn(event) {
  destroyBoxes();
}

function destroyBoxes(){
input.value = '';
boxCon.innerHTML = '';
return;
}




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}





// На що буде звертати увагу ментор при перевірці:

// Після кліку на кнопку Create, якщо в input значення поза
//  межами діапазону
//  1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes за одну 
// операцію додається така кількість різнокольорових 
// квадратів, яка вказана в input. Значення input 
// очищається
// Після повторного кліку на кнопку Create попередні
//  квадрати повністю прибираються і замість них 
//  додаються нові у кількості, що вказана в input.
//   Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон 
// випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px,
//  а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з
//  div#boxes мають видалятися



//
input.style.width = '150px'
input.style.border = '1px solid #808080';
input.style.borderRadius = '8px';
input.style.padding = '8px 72px 8px 12px';
input.style.height = '40px';
input.style.fontWeight = '400';
input.style.fontSize = '16px';
input.style.lineHeight = '1.5';
input.style.letterSpacing = '0.04em';
input.style.color = '#2e2f42';
//
btnCreate.style.backgroundColor = ' #4e75ff';
btnCreate.style.color = '#fff';
btnCreate.style.padding = ' 8px 16px';
btnCreate.style.width = '120px';
btnCreate.style.height = '40px';
btnCreate.style.borderRadius = '8px';
btnCreate.style.fontWeight = '500';
btnCreate.style.fontSize = '16px';
btnCreate.style.lineHeight = '1.5';
btnCreate.style.letterSpacing = '0.04em';
//
btnDestroy.style.backgroundColor = '#ff4e4e';
btnDestroy.style.color = '#fff';
btnDestroy.style.padding = ' 8px 16px';
btnDestroy.style.width = '120px';
btnDestroy.style.height = '40px';
btnDestroy.style.borderRadius = '8px';
btnDestroy.style.fontWeight = '500';
btnDestroy.style.fontSize = '16px';
btnDestroy.style.lineHeight = '1.5';
btnDestroy.style.letterSpacing = '0.04em';


