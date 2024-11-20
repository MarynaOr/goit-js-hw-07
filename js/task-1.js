const categories = document.getElementById("categories");
const result = () => {
  return `number of categories: ${categories.children.length}`;
};
console.log(result());

const list = document.querySelectorAll(".item");

const title = document.querySelectorAll("h2");

list.forEach((item, index) => {
  const listEl = item.querySelector("ul").children.length;

  console.log(`Category: ${title[index].textContent} `);
  console.log(`element: ${listEl}`);
});


//
list.forEach(item => {
  item.style.display = 'flex';
  item.style.flexDirection = 'column';
  item.style.maxWidth = '392px';
  item.style.backgroundColor = ' #f6f6fe';
  item.style.borderRadius = '8px';
  item.style.padding = '16px';
  // item.style.marginBottom = '16px';



})
//
title.forEach(item => {
item.style.fontWeight = '600';
item.style.fontSize = '24px';
item.style.lineHeight = '1.3';
item.style.letterSpacing = '0.04em';
item.style.color = '#2e2f42';
item.style.display = 'flex';
item.style.margin = '0';
})
//
const ul = document.querySelectorAll('.item>ul>li')
ul.forEach(item => {
item.style.border = '1px solid #808080';
item.style.borderRadius = '4px';
item.style.maxWidth = '360px';
item.style.height = '40px';
item.style.margin = '8px';
item.style.display = 'flex';
item.style.alignItems = 'center';
item.style.paddingLeft = '16px';


item.style.fontWeight = '400';
item.style.fontSize = '16px';
item.style.lineHeight = '1.5';
item.style.letterSpacing = '0.04em';
item.style.color = '#2e2f42';
// item.style. = '';
// item.style. = '';



})
//
const li = document.querySelectorAll('.item>ul')
li.forEach(item => {

item.style.padding = '0';





})















