const applicationState = {
  sentLetters: [],
  writtenLetters: [],
  authors: [],
  recipients: [],
  topics: [],
};

const API = "http://localhost:8088";
const mainContainer = document.querySelector("#container");

export const fetchExternalData = () => {
  return Promise.all([
    fetch(`${API}/sentLetters`),
    fetch(`${API}/writtenLetters`),
    fetch(`${API}/authors`),
    fetch(`${API}/recipients`),
    fetch(`${API}/topics`),
  ])
    .then((responses) => {
      return Promise.all(
        responses.map((response) => {
          return response.json();
        })
      );
    })
    .then((externalData) => {
      applicationState.sentLetters = externalData[0];
      applicationState.writtenLetters = externalData[1];
      applicationState.authors = externalData[2];
      applicationState.recipients = externalData[3];
      applicationState.topics = externalData[4];
    });
};

export const getSentLetters = () => {
  return applicationState.sentLetter.map((sentLetter) => ({
    ...sentLetters,
  }));
};

export const getWrittenLetters = () => {
  return applicationState.writtenLetter.map((writtenLetter) => ({
    ...writtenLetters,
  }));
};

export const getAuthors = () => {
  return applicationState.author.map((author) => ({
    ...authors,
  }));
};

export const getRecipients = () => {
  return applicationState.recipient.map((recipient) => ({
    ...recipients,
  }));
};

export const getTopics = () => {
  return applicationState.topic.map((topic) => ({
    ...topics,
  }));
};

export const setMessageSentLetters = (id) => {
  applicationState.orderState.sentLetterId = id;
};
export const setMessageWrittenLetters = (id) => {
  applicationState.orderState.writtenLetterId = id;
};
export const setMessageAuthors = (id) => {
  applicationState.orderState.authorId = id;
};
export const setMessageRecipients = (id) => {
  applicationState.orderState.recipientId = id;
};
export const setMessageTopics = (id) => {
  applicationState.orderState.topicId = id;
};

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
