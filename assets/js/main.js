const chatInput = document.querySelector("#chat-input");
const canvasArea = document.querySelector(".canvas-area");
const chatMsgArea = document.querySelector(".chat-msg-area");
const chatForm = document.querySelector("#asd");

const userMessage = "user-msg";
const botMessage = "bot-msg";

const randomize = (a) => {
  return Math.floor(Math.random() * a.length);
};

const createMessage = (value, msgType) => {
  const newElem = document.createElement("div");
  newElem.innerHTML = value;
  newElem.setAttribute("class", "chat-msg , " + msgType);
  chatMsgArea.append(newElem);
};

const mainFnc = chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value != "") {
    e.preventDefault();
    const textVal = chatInput.value;
    createMessage(textVal, userMessage);
    chatInput.value = "";
    textVal.toLowerCase().replace(/d/gi, "");
    execMsg(arg, res, textVal);
    scrollToMsg();
  }
});
const scrollToMsg = () => {
  const chatScrollLength = chatMsgArea.scrollHeight;
  chatMsgArea.scrollTo(0, chatScrollLength);
};
const execMsg = (req, res, input) => {
  let isSuccess = false;
  for (let a = 0; a < req.length; a++) {
    for (let b = 0; b < req[a].length; b++) {
      if (req[a][b] === input) {
        createMessage(res[a][randomize(res[a])], botMessage);
        isSuccess = true;
        break;
      }
    }
  }
  if (!isSuccess) {
    createMessage(err[randomize(err)], botMessage);
  }
};
