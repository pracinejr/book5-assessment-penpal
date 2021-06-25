import {
  sendSentLetters,
  getAuthors,
  getRecipients,
  getTopics,
} from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitSentLetter") {
    // Get what the user typed into the form fields
    const userName = document.querySelector("input[name='authorName']").value;
    const userLetter = document.querySelector(
      "input[name='authorLetter']"
    ).value;
    const userTopic = document.querySelector("input[name='authorTopic']").value;
    const userRecipient = document.querySelector(
      "input[name='authorRecipient']"
    ).value;

    // Make an object out of the user input
    const dataToSendToAPI = {
      authorName: userName,
      authorLetter: userLetter,
      authorTopic: userTopic,
      authorRecipient: userRecipient,
    };

    // Send the data to the API for permanent storage
    sendSentLetters(dataToSendToAPI);
  }
});
// filter through authors to offer all available authors to select in the filteredAuthors.map

export const RequestForm = () => {
  const authors = getAuthors();
  const recipients = getRecipients();
  const topics = getTopics();

  let html = `
        <div class="field">
            <label class="label" for="authorName">Author</label>
            <selecet name="author_name_choice" id="author_name_choice">
            ${authors
              .map((author) => {
                return `<option value="${author.id}">${author.authorName}</option>`;
              })
              .join("")}
        </div>
        <div class="field">
            <label class="label" for="authorLetter">Letter</label>
            <textarea class="field" id"authorLetter" name="authorLetter" rows="15" columns="70"></textarea>
        </div>
        <div class="field">
            <label class="label" for="authorTopic">Topics</label>
            <input type="radio" value="author--${
              authorTopic.id
            }" name="authorTopic"/>
        </div>
        <div class="field">
            <label class="label" for="authorName">Author</label>
            <selecet name="author_name_choice" id="author_name_choice">
            ${recipients
              .map((recipient) => {
                return `<option value="${recipient.id}">${recipient.authorRecipient}</option>`;
              })
              .join("")}
        </div>
        

        <button class="button" id="sendLetter">Send Letter</button>
    `;

  return html;
};
