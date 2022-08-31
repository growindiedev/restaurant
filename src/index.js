import "./style.scss";
import navbar from "./navbar";
import home from "./home";
import footer from "./footer";

let body = document.querySelector("body");
body.classList.add("container");

body.appendChild(navbar);
body.appendChild(home);
body.appendChild(footer);
// body.appendChild(footer);
