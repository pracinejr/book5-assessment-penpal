const applicationState = {
  sentLetter: [],
  writtenLetter: [],
};

const API = "http://localhost:8088";

export const fetchSentLetters = () => {
  return fetch(`${API}/sentLetters`)
    .then((response) => response.json())
    .then((sentLetter) => {
      applicationState.sentLetter = sentLetter;
    });
};

export const getSentLetters = () => {
  return applicationState.sentLetter.map((sentLetter) => ({
    ...sentLetters,
  }));
};

const mainContainer = document.querySelector("#container");

export const sendSentLetters = (userSentLetter) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userServiceRequest),
  };

  return fetch(`${API}/sentLetters`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

export const completedLetter = (id) => {
  return fetch(`${API}/sentLetters/${id}`, { method: "DELETE" }).then(() => {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  });
};
