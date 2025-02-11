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
  },
  {
    id: 2,
    name: "Fried Rice",
    price: "9000",
  },
  {
    id: 3,
    name: "Ofada Rice",
    price: "1000",
  },
  {
    id: 4,
    name: "Semo",
    price: "5000",
  },
  {
    id: 5,
    name: "Amala",
    price: "7000",
  },
];

foods.forEach((food) => {
  const foodContainer = document.createElement("div");
  foodContainer.classList.add("food-container");

  const foodName = document.createElement("h4");
  foodName.classList.add("food-name");
  foodName.textContent = `${food.name}`;
  const foodprice = document.createElement("p");
  foodprice.classList.add("food-price");
  foodprice.textContent = `Price: N${food.price}`;
  const quuantity = document.createElement("input");
  quuantity.setAttribute.type = "number";
  quuantity.setAttribute.placeholder = "quantity";
  quuantity.classList.add("quantity");
  const button = document.createElement("button");
  button.textContent = "Order";
  button.classList.add("menu-button");

  foodContainer.appendChild(foodName);
  foodContainer.appendChild(foodprice);
  foodContainer.appendChild(quuantity);
  foodContainer.appendChild(button);

  document.getElementById("menu-container").appendChild(foodContainer);
});
