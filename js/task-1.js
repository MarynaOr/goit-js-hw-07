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
