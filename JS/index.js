const hidden = document.getElementById("hidden-text");
const readMore = document.getElementById("readMore");
const navbarTogler = document.getElementById("navbar-toggler");

readMore.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
  document.querySelector(".fade-text").classList.toggle("show");
});

navbarTogler.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("transform");
  document.querySelectorAll("li").forEach((list) => {
    list.addEventListener("click", () => {
      document.querySelector("ul").classList.remove("transform");
    });
  });
});

//Menu items
const foods = [
  {
    id: 1,
    name: "jollof rice",
    price: "6500",
    imgUrl: "../img/food.jpg",
  },
  {
    id: 2,
    name: "fried rice",
    price: "9000",
    imgUrl: "../img/food.jpg",
  },
  {
    id: 3,
    name: "ofada rice",
    price: "1000",
    imgUrl: "../img/food.jpg",
  },
  {
    id: 4,
    name: "semo",
    price: "5000",
    imgUrl: "../img/food.jpg",
  },
  {
    id: 5,
    name: "amala & ewedu",
    price: "7000",
    imgUrl: "../img/food.jpg",
  },
  {
    id: 6,
    name: "yam Porriage",
    price: "2000",
    imgUrl: "../img/food.jpg",
  },
  {
    id: 7,
    name: "fufu & egusi",
    price: "10000",
    imgUrl: "../img/food.jpg",
  },
  {
    id: 8,
    name: "eba & okra",
    price: 3000,
    imgUrl: "../img/food.jpg",
  },
  {
    id: 9,
    name: "amala & efo",
    price: 3000,
    imgUrl: "../img/food.jpg",
  },
  {
    id: 10,
    name: "banga & starch",
    price: 3000,
    imgUrl: "../img/food.jpg",
  },
];

foods.forEach((food) => {
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("menu-card");
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  const foodImg = document.createElement("img");
  foodImg.src = `${food.imgUrl}`;
  foodImg.classList.add("food-img");
  const foodName = document.createElement("h4");
  foodName.classList.add("food-name");
  foodName.textContent = `${food.name}`;
  const foodprice = document.createElement("p");
  foodprice.classList.add("food-price");
  foodprice.textContent = ` N${food.price}`;
  const quantity = document.createElement("input");
  quantity.type = "number";
  quantity.placeholder = "quantity";
  quantity.classList.add("quantity");
  const button = document.createElement("button");
  button.textContent = "Order";
  button.classList.add("menu-button");

  foodContainer.appendChild(foodImg);
  foodContainer.appendChild(wrapper);
  wrapper.appendChild(foodName);
  wrapper.appendChild(foodprice);
  wrapper.appendChild(quantity);
  wrapper.appendChild(button);

  document.getElementById("menu-container").appendChild(foodContainer);
});

const search = document.getElementById("search");

search.addEventListener("click", () => {
  document.location.replace("index.html#order");
  document.getElementById("searchbar").classList.remove("none");
});

document.querySelector("body").addEventListener("scroll", () => {
  document.getElementById("searchbar").classList.add("none");
});

const input = document.querySelector("#search-input");
input.addEventListener("keyup", () => {
  const searchText = input.value;
  const FilteredArray = foods.filter((food) => {
    return food.name.includes(`${searchText}`);
  });
  document.getElementById("menu-container").innerHTML = "";
  FilteredArray.forEach((food) => {
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("menu-card");
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const foodImg = document.createElement("img");
    foodImg.src = `${food.imgUrl}`;
    foodImg.classList.add("food-img");
    const foodName = document.createElement("h4");
    foodName.classList.add("food-name");
    foodName.textContent = `${food.name}`;
    const foodprice = document.createElement("p");
    foodprice.classList.add("food-price");
    foodprice.textContent = ` N${food.price}`;
    const quantity = document.createElement("input");
    quantity.type = "number";
    quantity.placeholder = "quantity";
    quantity.classList.add("quantity");
    const button = document.createElement("button");
    button.textContent = "Order";
    button.classList.add("menu-button");

    foodContainer.appendChild(foodImg);
    foodContainer.appendChild(wrapper);
    wrapper.appendChild(foodName);
    wrapper.appendChild(foodprice);
    wrapper.appendChild(quantity);
    wrapper.appendChild(button);

    document.getElementById("menu-container").appendChild(foodContainer);
  });
});
