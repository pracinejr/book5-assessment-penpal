import { LetterForm } from "./LetterForm.js";
import { Letters } from "./Letters.js";

document.addEventListener("click", (event) => {
  const clickedItem = event.target;
  if (clickedItem.id === "sendLetterButton") {
    addRequestService();
  }
});

export const PenPalSociety = () => {
  return `
    <h1>Pen Pal Society</h1>
    
    <article class="
    <section class="letterForm">
        ${LetterForm()}
    </section>

    <section class="letters">
        <h2>Letters</h2>
        ${Letters()}
    </section>
    `;
};
