const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BEER",
    price: 499,
    colors: [
      {
        code: "black",
        img: "./img/ignyt/beer1main.png",
      }
    ],
  },
  {
    id: 2,
    title: "LIVE BBQ",
    price: 219,
    colors: [
      {
        code: "lightgray",
        img: "./img/ignyt/bbqm.png",
      }
    ],
  },
  {
    id: 3,
    title: "APPETIZERS",
    price: 189,
    colors: [
      {
        code: "lightgray",
        img: "./img/ignyt/appet.png",
      }
    ],
  },
  {
    id: 4,
    title: "SALADS",
    price: 165,
    colors: [
      {
        code: "black",
        img: "./img/ignyt/SALAD.png",
      }
    ],
  },
  {
    id: 5,
    title: "SPECIALS",
    price: 180,
    colors: [
      {
        code: "gray",
        img: "./img/ignyt/special.png",
      }
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "starting at " + choosenProduct.price + "!";
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

var image = document.getElementById("gallaryImg");
var images=["./img/ignyt/ignytlounge.jpg","./img/ignyt/ignyt1.jpg","./img/ignyt/ignyt2.jpg","./img/ignyt/ignyt3.jpg","./img/ignyt/ignytsitting.jpg","./img/ignyt/ignytsitting2.jpg"]
var indexx=0;
function updateimg() {
  image.src=images[indexx];
  indexx=(indexx+1)%images.length;
}
setInterval(updateimg,1000);
currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
