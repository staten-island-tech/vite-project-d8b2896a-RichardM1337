import "../styles/style.css" assert { type: "css" }; // tells code to read as css and not js
import "../styles/background.css" assert { type: "css" };
import "../styles/variables.css" assert { type: "css" };
import { gosling } from "./gosling.js";
// images go in public folder, and can be freferred to globally
const DOMSelectors = {
  themepicker: document.querySelector(".themepicker"),
  moviecontainer: document.querySelector(".moviecontainer"),
  genrelist: document.querySelector(".genreList"),
};

function createCard(arr) {
  DOMSelectors.moviecontainer.innerHTML = "";
  arr.forEach((i) => {
    const card = document.createElement("div"); // creats div called card
    card.classList.add("outercard");
    card.innerHTML = `<div class="innercard">
    <img src="${i.image}" class="movieimg" alt="${i.name}">
    <h1 class="name">${i.name}</h1>
    <p class="release"> ${i.release}</p>
    <p class="genre"> ${i.genre[0]}/${i.genre[1]}</p>
    </div>`; // puts stuff
    DOMSelectors.moviecontainer.appendChild(card);
  });
}

function filterMovies(userGenre) {
  const gosFilter = gosling.filter((movie) => movie.genre.includes(userGenre));
  createCard(gosFilter);
}
createCard(gosling);

DOMSelectors.genrelist.addEventListener("change", (event) => {
  if (event.target.value == "") {
    createCard(gosling);
  } else {
    filterMovies(event.target.value);
  }
});

/* CSS */
DOMSelectors.themepicker.addEventListener("change", function () {
  let body = document.body;
  if (this.value == "darktheme") {
    if (body.classList.contains("lighttheme")) {
      body.classList.remove("lighttheme");
    }
    body.classList.add("darktheme");
  }
  if (this.value == "lighttheme") {
    if (body.classList.contains("darktheme")) {
      body.classList.remove("darktheme");
    }
    body.classList.add("lighttheme");
  }
});

// OLD CODE
/*
import "../style/style.module.css";
import "../style/background.module.css";
import "../style/variables.module.css";
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
    */
// I hid the unwanted cards instead of reconstructing my array
