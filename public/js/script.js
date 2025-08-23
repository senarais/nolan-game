const dialogue = [
  { id: 1, name: "Alice", text: "Hey there! I didn’t expect to see you here." },
  { id: 2, name: "Bob", text: "Surprise! I was just passing by and thought I’d check in." },
  { id: 3, name: "Alice", text: "Well, it’s good timing. I was about to head out for some coffee." },
  { id: 4, name: "Bob", text: "Perfect! Mind if I join you?" },
  { id: 5, name: "Narrator", text: "Alice smiled, glad to have some company." }
];

let dialogueIndex = 0;
const textElement = document.querySelector(".text");
const nameElement = document.querySelector(".name");
const textboxElement = document.querySelector(".textbox-name");

let isTyping = false;
let typingTimeout;
let fullText = "";

function textTypingEffect(element, text, i = 0) {
  isTyping = true;
  fullText = text;

  return new Promise((resolve) => {
    const textSound = new Audio("/audio/text-blip.mp3");
    document.addEventListener("click", nextDialogue);
    document.addEventListener("keydown", nextDialogue);

    if (i === 0) {
      element.textContent = ""; // clear old text
    }

    element.textContent += text[i];
    textSound.volume = 0.3;
    textSound.play();

    if (i === text.length - 1) {
      isTyping = false;
      resolve();
      return;
    }

    typingTimeout = setTimeout(() => {
      textTypingEffect(element, text, i + 1).then(resolve);
    }, 20);
  });
}

async function showDialogue() {
  if (dialogueIndex < dialogue.length) {
    const dialogueDisplay = dialogue[dialogueIndex].text;
    const nameDisplay = dialogue[dialogueIndex].name;
    
    if (nameDisplay === "Narrator"){
      textboxElement.classList.add("hidden");
    } else {
      textboxElement.classList.remove("hidden");
      nameElement.textContent = nameDisplay;
    }

    await textTypingEffect(textElement, dialogueDisplay);
  }
}

// First line
showDialogue();

function nextDialogue(event) {
  if (event.type === "keydown") {
    if (event.code !== "Space" && event.code !== "Enter") {
      return; // abaikan tombol lain
    }
  }
  document.removeEventListener("click", nextDialogue);
  document.removeEventListener("keydown", nextDialogue);
  skipDialogue();
}

function skipDialogue() {
  if (isTyping) {
    // kalau masih ngetik → langsung tampilkan teks penuh
    clearTimeout(typingTimeout);
    textElement.textContent = fullText;
    isTyping = false;

    // pasang lagi listener supaya bisa lanjut
    document.addEventListener("click", nextDialogue);
    document.addEventListener("keydown", nextDialogue);
  } else {
    // kalau sudah penuh → lanjut ke berikutnya
    dialogueIndex++;
    showDialogue();
  }
}
