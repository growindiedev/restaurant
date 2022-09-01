let about = document.createElement("div");
about.classList.add("content");
about.classList.add("about");

let aboutContainer = document.createElement("div");
aboutContainer.classList.add("aboutContainer");

let phone = document.createElement("p");
phone.textContent = "Call us: 📞 123 456 789";
aboutContainer.appendChild(phone);

let address = document.createElement("p");
address.textContent =
  "🏠 5 Bel Air South Pkwy Ste  1615, Bel Air, MD 21015-6089";

aboutContainer.appendChild(address);

const container = document.createElement("div");
container.setAttribute("class", "map-container");
const display = document.createElement("div");
display.setAttribute("class", "map-display");
const frame = document.createElement("iframe");
frame.setAttribute("class", "map-frame");
frame.setAttribute(
  "src",
  "https://www.google.com/maps/embed/v1/search?q=tribe+red+deer&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
);
display.appendChild(frame);
container.appendChild(display);
aboutContainer.appendChild(container);

about.appendChild(aboutContainer);

export default about;
