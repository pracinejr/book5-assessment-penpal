import { fetchLetters } from "./dataAccess.js";
import { PenPalSociety } from "./PenPal.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("stateChanged", (customEvent) => {
  render();
});

const render = () => {
  fetchLetters().then(() => {
    mainContainer.innerHTML = PenPalSociety();
  });
};

render();
