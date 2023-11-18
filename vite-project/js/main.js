import "../styles/style.css" assert { type: "css" }; // tells code to read as css and not js
import "../styles/background.css" assert { type: "css" };
import "../styles/variables.css" assert { type: "css" };
import { gosling } from "./gosling.js";
// images go in public folder, and can be freferred to globally
const DOMSelectors = {
  darkcheck: document.querySelector(".darktheme"),
  lightcheck: document.querySelector(".lighttheme"),
  movielist: document.querySelector(".movielist"),
  romance: document.querySelector(".romance"),
  cardresetter: document.querySelector(".reset"),
};

gosling.forEach((i) => {
  const card = document.createElement("div"); // creats div called card
  card.innerHTML = `<div class="innercard">
  <img src="${i.image}" class="movieimg" alt="${i.name}">
  <h1 class="name">${i.name}</h1>
  <p class="release"> released in ${i.release}</p>
  <p class="genre"> its genre is ${i.genre}</p>
  </div>`; // puts stuff
  DOMSelectors.movielist.appendChild(card); // adds it into this biiiig div called movie list for my liking nyehehehehe
  DOMSelectors.romance.addEventListener("click", function () {
    if (i.genre != "Romance") {
      card.style.display = "none";
    }
  });
  DOMSelectors.cardresetter.addEventListener("click", function () {
    card.style.display = "block";
  });
});

DOMSelectors.darkcheck.addEventListener("click", function () {
  let body = document.body;
  if (body.classList.contains("lighttheme")) {
    body.classList.remove("lighttheme");
  }
  body.classList.add("darktheme");
});
DOMSelectors.lightcheck.addEventListener("click", function () {
  let body = document.body;
  if (body.classList.contains("darktheme")) {
    body.classList.remove("darktheme");
  }
  body.classList.add("lighttheme");
});
