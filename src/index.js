import "./style.scss";
import home from "./home";
import footer from "./footer";
import menu from "./menu";
import about from "./about";

let contentPage = home;

let body = document.querySelector("body");
body.classList.add("container");

let navbar = document.createElement("div");
navbar.classList.add("navbar");
let navItems = ["Home", "Menu", "About"];

function pageSelection(e) {
  let old = document.querySelector(".content");
  if (e.target.textContent === "Menu") {
    contentPage = menu;
    body.replaceChild(contentPage, old);
  } else if (e.target.textContent === "About") {
    contentPage = about;
    body.replaceChild(contentPage, old);
  } else {
    contentPage = home;
    body.replaceChild(contentPage, old);
  }
}

navItems.forEach((item) => {
  let navItemNode = document.createElement("div");
  navItemNode.addEventListener("click", pageSelection);
  navItemNode.textContent = item;
  navItemNode.classList.add("nav-item");
  navbar.appendChild(navItemNode);
});

body.appendChild(navbar);
body.appendChild(contentPage);
body.appendChild(footer);
