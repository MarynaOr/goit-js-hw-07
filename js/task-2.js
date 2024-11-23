const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const list = document.querySelector(".gallery");

const newElList = list.insertAdjacentHTML("beforeend", createMarkup(images));

function createMarkup(arr) {
  return arr
    .map(
      (item) => `
  <li>
  <img src='${item.url}' alt='${item.alt}' class='card-img' width='360px' height='240px'
  >

  </li>
  `
    )
    .join("");
}

//
list.style.display = "flex";
list.style.flexWrap = "wrap";
list.style.justifyContent = "center";
list.style.rowGap = "48px";
list.style.columnGap = "24px";
list.style.width = "calc((100% -96px) / 3";
