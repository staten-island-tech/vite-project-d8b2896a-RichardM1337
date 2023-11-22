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
    <p class="release">${i.release}</p>
    <p class="genre">${i.genre[0]}/${i.genre[1]}</p>
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
    createCard(gosling); // if value is blank, "All", it wnon't do anything.
  } else {
    filterMovies(event.target.value); // filter the movies by the value of the input
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
