import dishes from "./dishesObj";

let menu = document.createElement("div");
menu.classList.add("content");
menu.classList.add("menu");

let head1 = document.createElement("p");
head1.textContent = "Pawwneer's";
head1.classList.add("cursive", "golden");
menu.appendChild(head1);

let head2 = document.createElement("h1");
head2.textContent = "menu";
head2.classList.add("gray");
menu.appendChild(head2);

let headHR = document.createElement("hr");
headHR.classList.add("head-hr");
menu.appendChild(headHR);

dishes.forEach((dish) => {
  let menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  let menuHead = document.createElement("h2");
  menuHead.textContent = dish.title;
  menuHead.classList.add("golden");
  menuItem.appendChild(menuHead);

  let desc = document.createElement("p");
  desc.textContent = dish.description;
  desc.classList.add("gray");
  menuItem.appendChild(desc);

  let price = document.createElement("h2");
  price.textContent = `$ ${dish.price}`;
  price.classList.add("golden");
  menuItem.appendChild(price);

  let menuHR = document.createElement("hr");
  menuHR.classList.add("menu-hr");
  menuItem.appendChild(menuHR);

  menu.appendChild(menuItem);
});

export default menu;
