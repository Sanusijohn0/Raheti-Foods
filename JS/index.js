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
    name: "Jollof Rice",
    price: "6500",
    imgUrl: "img/food.jpg",
  },
  {
    id: 2,
    name: "Fried Rice",
    price: "9000",
    imgUrl: "img/food.jpg",
  },
  {
    id: 3,
    name: "0fada Rice",
    price: "1000",
    imgUrl: "img/food.jpg",
  },
  {
    id: 4,
    name: "Semo",
    price: "5000",
    imgUrl: "img/food.jpg",
  },
  {
    id: 5,
    name: "Amala & Ewedu",
    price: "7000",
    imgUrl: "img/food.jpg",
  },
  {
    id: 6,
    name: "Yam Porriage",
    price: "2000",
    imgUrl: "img/food.jpg",
  },
  {
    id: 7,
    name: "Fufu & Egusi",
    price: "10000",
    imgUrl: "img/food.jpg",
  },
  {
    id: 8,
    name: "Eba & Okra",
    price: 3000,
    imgUrl: "img/food.jpg",
  },
  {
    id: 9,
    name: "Amala & Efo",
    price: 3000,
    imgUrl: "img/food.jpg",
  },
  {
    id: 10,
    name: "Banga & Starch",
    price: 3000,
    imgUrl: "img/food.jpg",
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
  document.location.href = "index.html#order";
  setTimeout(() => {
    document.getElementById("searchbar").classList.remove("none");
  }, 2000);
});

const body = document.querySelector("main");
body.onclick = () => {
  document.getElementById("searchbar").classList.add("none");
};

body.addEventListener("scroll", () => {
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
