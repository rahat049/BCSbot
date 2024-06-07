const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["are you genious", "are you nerd", "are you intelligent"],
    ["i hate you", "i dont like you"],
    ["how are you", "how is life", "how are things", "how are you doing"],
    ["how is corona", "how is covid 19", "how is covid19 situation"],
    ["what are you doing", "what is going on", "what is up"],
    ["how old are you"],
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
  
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],
    ["i love you"],
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    ["bad", "bored", "tired"],
    ["help me", "tell me story", "tell me joke"],
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["what should i eat today"],
    ["bro"],
    ["what", "why", "how", "where", "when"],
    ["corona", "covid19", "coronavirus"],
    ["you are funny"],
    ["i dont know"],
    ["boring"],
    ["im tired"],
    ["books","book"],
    ["ethics"],
    ["bangladesh affairs"],
    ["international affairs"],
    ["bangla literature"],
    ["bangla grammar"],
    ["english literature"],
    ["english grammar"],
    ["geography"],
    
    ["math"],
    ["iq"],
    ["science"],
    ["computer & ict", "computer", "ict"],
    ["others"]
    
  ];
  const botReply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],
    ["Okay"],
    ["Yes I am! "],
    ["I'm sorry about that. But I like you dude."],
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],
    ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],
    ["I am always young."],
    ["I am just a bot", "I am a bot. What are you?"],
    ["Sabitha Kuppusamy"],
    ["I am nameless", "I don't have a name"],
    ["I love you too", "Me too"],
    ["Have you ever felt bad?", "Glad to hear it"],
    ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
    ["What about?", "Once upon a time..."],
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
    ["You're welcome"],
    ["Briyani", "Burger", "Sushi", "Pizza"],
    ["Dude!"],
    ["Yes?"],
    ["Please stay home"],
    ["Glad to hear it"],
    ["Say something interesting"],
    ["Sorry for that. Let's chat!"],
    ["Take some rest, Dude!"],
        ["Here is the books for BCS: <a href=\"https://drive.google.com/drive/folders/1x_4mYAOJOFqD4WXSuE-725x2J3y3U2F6?usp=sharing\"> BCS Books Google Drive Link</a>"],
        ["Materials for Ethics: <a href=\"https://drive.google.com/drive/folders/10szqOcqI17CNyY3S5wHMZQZj157eXLe7?usp=sharing\"> Ethics Google Drive Link</a>"],
        ["Materials for Bangladesh Affairs: <a href=\"https://drive.google.com/drive/folders/150e8sa8YqbeaPIBpd1A3eyrRix8F0dXM?usp=drive_link\"> Bangladesh Affairs Google Drive Link</a>"],
        ["Materials for International Affairs: <a href=\"https://drive.google.com/drive/folders/18uezPvvTV-mMhq4H77lPVBUdVsfWgEo1?usp=drive_link\"> International Affairs Google Drive Link</a>"],
        ["Materials for Bangla Literature: <a href=\"https://drive.google.com/drive/folders/1-EapNRMAdNYdJ9A6SR5rCkOI9hwWEbau?usp=sharing\"> Bangla Literature Google Drive Link</a>"],
        ["Materials for Bangla Grammar: <a href=\"https://drive.google.com/drive/folders/1-m4aAJHKvqiZd51ofGUb8MC0-JPa4cWA?usp=sharing\"> Bangla Grammar Google Drive Link</a>"],
        ["Materials for English Literature: <a href=\"https://drive.google.com/drive/folders/1-Iay7tUZgIGenVI4LclF8EVFVRy3VfvD?usp=sharing\"> English Literature Google Drive Link</a>"],
        ["Materials for English Grammar: <a href=\"https://drive.google.com/drive/folders/10XAMOdoKO9qU6bGQTEeYiVHIz-00dc5R?usp=sharing\"> English Grammar Google Drive Link</a>"],
        ["Materials for Geography: <a href=\"https://drive.google.com/drive/folders/11CiaEtuf38Y7VbMjZvgYToe_XmarlEuU?usp=sharing\"> Geography Google Drive Link</a>"],
        ["Materials for Math: <a href=\"https://drive.google.com/drive/folders/142dXxd3LaZILFmf_X033Xwcv9cF3QW2d?usp=drive_link\"> Math Google Drive Link</a>"],
        ["Materials for IQ: <a href=\"https://drive.google.com/drive/folders/10DI2bPHFUj5YhaLFiHdWSaudi65jYRDT?usp=sharing\"> IQ Google Drive Link</a>"],
        ["Materials for Science: <a href=\"https://drive.google.com/drive/folders/19jvF7hzwY2KsZPhfFtBGwExKOz-N4L1W?usp=drive_link\"> Science Google Drive Link</a>"],
        ["Materials for Computer & ICT: <a href=\"https://drive.google.com/drive/folders/1-0N6oij6JbiucqxKTCSwoSPgq_dUk7AO?usp=sharing\"> Computer & ICT Google Drive Link</a>"],
        ["Other Materials: <a href=\"https://drive.google.com/drive/folders/1-89YF5Vi7paXgAMogqiVxjSYbIUHciri?usp=sharing\"> Model Test</a> <br> <a href=\"https://drive.google.com/drive/folders/10zbXhIveWL1Y_8oYACPbAD8QT3Gn_Jvu?usp=sharing\"> QB Google Drive Link</a>"],
    
  ];
  
  const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
  ];
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] === string) {
          const items = replyArray[x]; // Use 'const' instead of 'let'
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }
