import "../style/style.css";
import "../style/background.css";
import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { gosling } from "./gosling.js";
// images go in public folder, and can be freferred to globally
const DOMSelectors = {
  theme1: document.querySelector(".theme1"),
  theme2: document.querySelector(".theme2"),
  movielist: document.querySelector(".movielist"),
  post2015: document.querySelector(".post2015"),
  dystopian: document.querySelector(".dystopian"),
};

gosling.forEach((i) => {
  const card = document.createElement("div"); // creats div called card
  card.innerHTML = `<div class="innercard">
<img src="${i.image}" class="movieimg">
<h1 class="name">${i.name}</h1>
<p class="release"> released in ${i.release}</p>
<p class="genre"> its genre is ${i.genre}</p>
</div>`; // puts stuff
  DOMSelectors.movielist.appendChild(card); // adds it into this biiiig div called movie list for my liking nyehehehehe
});

/*
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello tihis webiet </h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
 */
