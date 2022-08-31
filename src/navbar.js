let navbar = document.createElement("div");
navbar.classList.add("navbar");
let navItems = ["Home", "Menu", "About"];

navItems.forEach((item) => {
  let navItemNode = document.createElement("div");
  navItemNode.addEventListener("click", () => "whoop");
  navItemNode.textContent = item;
  navItemNode.classList.add("nav-item");
  navbar.appendChild(navItemNode);
});

export default navbar;
