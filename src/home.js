let home = document.createElement("div");
home.classList.add("content");
home.classList.add("home");

let homeContainer = document.createElement("div");
homeContainer.classList.add("homeContainer");

let heading = document.createElement("h2");
heading.textContent = "Pawwneer's";
homeContainer.appendChild(heading);

let para1 = document.createElement("p");
para1.textContent = "Best indian food in Bel Air!";
homeContainer.appendChild(para1);

let img = document.createElement("img");
homeContainer.appendChild(img);

let para2 = document.createElement("p");
para2.textContent = "Visit us anytime (24*7)";
homeContainer.appendChild(para2);

home.appendChild(homeContainer);

export default home;
