const chatInput = document.querySelector("#chat-input");
const canvasArea = document.querySelector(".canvas-area");
const chatMsgArea = document.querySelector(".chat-msg-area");

const randomize = (a) => {
  Math.floor(Math.random() * a.length);
};

const createMessage = (value) => {
  const newElem = document.createElement("div");
  newElem.textContent = value;
  newElem.setAttribute("class", "chat-msg");
  chatMsgArea.append(newElem);
};

const mainFnc = chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && chatInput.value !== "") {
    e.preventDefault();
    const textVal = chatInput.value;
    createMessage(textVal);
    chatInput.value = "";
    textVal.toLowerCase().replace(/d/gi, "");
    execMsg(arg, res, textVal);
  }
});

const execMsg = (req, res, input) => {
  for (let a = 0; a < req.length; a++) {
    for (let b = 0; b < req[a].length; b++) {
      if (req[a][b] === input) {
        let resOutput = res[a][randomize(b)];
      } else {
        let resErr = err[randomize(err)];
      }
    }
  }
};
