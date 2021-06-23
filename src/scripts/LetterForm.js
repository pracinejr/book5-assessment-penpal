import { sendSentLetters } from "./dataAccess.js";

const mainContainer = document.querySelector("#container");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitSentLetter") {
    // Get what the user typed into the form fields
    const userName = document.querySelector("input[name='partyName']").value;
    const userChild = document.querySelector("input[name='partyChild']").value;
    const userKidsAtParty = document.querySelector(
      "input[name='partyKidsAtParty']"
    ).value;
    const userAddress = document.querySelector(
      "input[name='partyAddress']"
    ).value;
    const userPartyDate = document.querySelector(
      "input[name='partyDate']"
    ).value;
    const userPartyLength = document.querySelector(
      "input[name='partyLength']"
    ).value;

    // Make an object out of the user input
    const dataToSendToAPI = {
      parentName: userName,
      ChildName: userChild,
      kidsAtParty: userKidsAtParty,
      address: userAddress,
      partyDate: userPartyDate,
      partyLength: userPartyLength,
    };

    // Send the data to the API for permanent storage
    sendSentLetters(dataToSendToAPI);
  }
});

export const RequestForm = () => {
  let html = `
        <div class="field">
            <label class="label" for="partyName">Parent Name</label>
            <input type="text" name="partyName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyChild">Child Name</label>
            <input type="text" name="partyChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyKidsAtParty">Number of Kids Attending Party</label>
            <input type="number" name="partyKidsAtParty" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Party Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date of the Party</label>
            <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
          <label class="label" for="partyLength">Length of Party in hrs</label>
          <input type="number" name="partyLength" class="input" />
        </div>

        <button class="button" id="submitServiceRequest">Submit Request</button>
    `;

  return html;
};
