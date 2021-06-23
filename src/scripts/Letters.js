import { getSentLetters, completedLetter } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (click) => {
  if (click.target.id.startsWith("letter--")) {
    const [, letterId] = click.target.id.split("--");
    completedLetter(parseInt(letterId));
  }
});

export const SentLetters = () => {
  const sentLetters = getSentLetters(); // grab the local state of the requests data

  let html = `
        <ul>
            ${sentLetters
              .map((letterToList) => {
                return `<li>Dear ${letterToList.recipient} (${letterToList.recipientEmail}),

                This is a letter regarding ${letterToList.letterTopic} and I feel you need to read it.

                Sincerely, ${letterToList.author} (${letterToList.authorEmail})

                ${letterToList.dateSent}

                <button class="letter_friendly"
                id="letter--${letterToList.id}">
            Friendly
        </button></li>
                `;
              })
              .join("")}
        </ul>`;

  return html;
};
