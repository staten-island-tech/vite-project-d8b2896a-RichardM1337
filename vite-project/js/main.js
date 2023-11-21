import "../style/style.css";
import "../style/background.css";
import "../style/variables.css";
import { gosling } from "./gosling.js";
// images go in public folder, and can be freferred to globally
const DOMSelectors = {
  themepicker: document.querySelector(".themepicker"),
  movielist: document.querySelector(".movielist"),
  genrelist: document.querySelector(".genreList"),
};

function createCard(arr) {
  DOMSelectors.movielist.innerHTML = "";
  arr.forEach((i) => {
    const card = document.createElement("div"); // creats div called card
    card.innerHTML = `<div class="innercard">
    <img src="${i.image}" class="movieimg" alt="${i.name}">
    <h1 class="name">${i.name}</h1>
    <p class="release"> released in ${i.release}</p>
    <p class="genre"> its genre is ${i.genre}</p>
    </div>`; // puts stuff
    DOMSelectors.movielist.appendChild(card);
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
