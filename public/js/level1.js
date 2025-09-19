let timelineIndex = 1;

function timeline() {
  if (timelineIndex === 1) {
    showDialogue();
  }
  if (timelineIndex === 2) {
    showDialogue();
  }
  if (timelineIndex === 3) {
    setTimeout(() => {
      startBattle();
    }, 2000);
  }
  if (timelineIndex === 4) {
    showDialogue();
  }
}

setTimeout(() => {
  timeline();
}, 2000);

const dialogues = {
  1: [
    { name: "Narrator", text: "Bob and Alice meet at the park, the sun shining brightly.", img: "" },
    { name: "Bob", text: "Glad you made it, Alice! Ready for today’s adventure?", img: "/img/nolan.png" },
    { name: "Narrator", text: "Bob shows a small, worn-out map with odd markings.", img: "" },
    { name: "Alice", text: "That looks mysterious… are we hunting treasure?", img: "/img/eliza.png" }
  ],

  2: [
    { name: "Narrator", text: "They sit on a bench, studying the strange map.", img: "" },
    { name: "Bob", text: "See this mark? Could be a cave… or maybe snacks.", img: "/img/nolan.png" },
    { name: "Alice", text: "If it’s snacks, I’m first in line.", img: "/img/eliza.png" },
    { name: "Narrator", text: "They laugh, folding the map carefully before heading off.", img: "" }
  ],

  3: [
    { name: "Narrator", text: "Walking deeper into the park, Bob balances on a stone wall.", img: "" },
    { name: "Alice", text: "Careful! You’ll trip showing off like that.", img: "/img/eliza.png" },
    { name: "Bob", text: "Relax, I’ve got perfect balance… mostly.", img: "/img/nolan.png" },
    { name: "Narrator", text: "He hops down, and Alice claps at his silly stunt.", img: "" }
  ],

  4: [
    { name: "Narrator", text: "They stop near a huge oak tree, just like on the map.", img: "" },
    { name: "Alice", text: "This has to be our first clue.", img: "/img/eliza.png" },
    { name: "Bob", text: "Only one way to find out!", img: "/img/nolan.png" },
    { name: "Narrator", text: "They circle the tree and spot a small wooden box half-buried.", img: "" }
  ],

  5: [
    { name: "Narrator", text: "Inside the box is a folded note with a short riddle.", img: "" },
    { name: "Bob", text: "Looks like we need to count steps from the fountain.", img: "/img/nolan.png" },
    { name: "Alice", text: "Alright, let’s walk it out together.", img: "/img/eliza.png" },
    { name: "Narrator", text: "They count aloud, stopping at a spot marked on the ground.", img: "" }
  ],

  6: [
    { name: "Narrator", text: "Bob kneels down, pointing at the mark carved into the pavement.", img: "" },
    { name: "Bob", text: "Definitely another clue.", img: "/img/nolan.png" },
    { name: "Alice", text: "Or just a very artistic scratch.", img: "/img/eliza.png" },
    { name: "Narrator", text: "They laugh, snapping a photo before marking it on the map.", img: "" }
  ],

  7: [
    { name: "Narrator", text: "The sun sets as the park grows quiet around them.", img: "" },
    { name: "Alice", text: "That was actually really fun.", img: "/img/eliza.png" },
    { name: "Bob", text: "Yeah. Who knew a map could make the day so exciting?", img: "/img/nolan.png" },
    { name: "Narrator", text: "They sit back on the bench, smiling at the small adventure.", img: "" }
  ],

  8: [
    { name: "Pirate", text: "Haharr! Enough with the child's play! Let's see if ye have the wits for a real pirate's riddle!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Blast it! A lucky guess, ye scurvy dog! But ye'll not be gettin' past this next one!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Shiver me timbers! How'd a landlubber like you figure that out?! This is me final trick!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Arrrgh! Curses! The treasure is yours... for now. But this captain will sail again!", img: "/img/pirate.png" }
  ]
};





let dialogueIndex = 0;
const textElement = document.querySelector(".text");
const nameElement = document.querySelector(".name");
const imgElement = document.querySelector(".textbox img");
const textboxElement = document.querySelector(".textbox-name");
const textBox = document.querySelector(".textbox");

let currentDialogue = 1;
let isTyping = false;
let typingTimeout;
let fullText = "";
let savedCurrentDialogue;

function textTypingEffect(element, text, i = 0) {
  isTyping = true;
  fullText = text;

  return new Promise((resolve) => {
    const textSound = new Audio("/audio/text-blip.mp3");

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
  // Battle Dialogues

  if (battleStarted === true && savedCurrentDialogue === undefined) {
    savedCurrentDialogue = currentDialogue;
    currentDialogue = 8;
  }

  if (battleStarted === false && savedCurrentDialogue !== undefined) {
    savedCurrentDialogue++;
    currentDialogue = savedCurrentDialogue;
  }

  if (dialogueIndex < dialogues[currentDialogue].length) {
    const dialogueDisplay = dialogues[currentDialogue][dialogueIndex].text;
    const nameDisplay = dialogues[currentDialogue][dialogueIndex].name;
    const imgDisplay = dialogues[currentDialogue][dialogueIndex].img;
    
    textBox.classList.remove("hidden");

    if (nameDisplay === "Narrator"){
      textboxElement.classList.add("hidden");
      imgElement.src = imgDisplay;
    } else {
      textboxElement.classList.remove("hidden");
      nameElement.textContent = nameDisplay;
      imgElement.src = imgDisplay;
    }

    
    document.addEventListener("click", nextDialogue);
    document.addEventListener("keydown", nextDialogue);
    await textTypingEffect(textElement, dialogueDisplay);
  } else {
    dialogueIndex = 0;
    currentDialogue++;
    timelineIndex++;
    textBox.classList.add("hidden");
    timeline();
  }
}

// First line
textBox.classList.add("hidden");
// setTimeout(() => {
//   textBox.classList.remove("hidden");
//   showDialogue();
// }, 2000);

function nextDialogue(event) {
  if (event.type === "keydown") {
    if (event.code !== "Space" && event.code !== "Enter") {
      return; // abaikan tombol lain
    }
    event.preventDefault();
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
    return;
  } 
  if (battleStarted) {
    dialogueIndex++;
    showQuestion();
  } else if (battleStarted === false) {
    // kalau sudah penuh → lanjut ke berikutnya
    dialogueIndex++;
    showDialogue();
  }
}




const questions = {
  1: {
    question: "What is the capital of France?",
    answers: [
      "A. Madrid",
      "B. Berlin",
      "C. Paris",
      "D. Rome"
    ],
    rightAnswer: "C"
  },

  2: {
    question: "Which planet is known as the Red Planet?",
    answers: [
      "A. Venus",
      "B. Mars",
      "C. Jupiter",
      "D. Saturn"
    ],
    rightAnswer: "B"
  },

  3: {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      "A. Charles Dickens",
      "B. William Shakespeare",
      "C. Mark Twain",
      "D. Jane Austen"
    ],
    rightAnswer: "B"
  },

  4: {
    question: "Which is the largest ocean on Earth?",
    answers: [
      "A. Atlantic Ocean",
      "B. Indian Ocean",
      "C. Arctic Ocean",
      "D. Pacific Ocean"
    ],
    rightAnswer: "D"
  }
};

const totalQuestions = Object.keys(questions).length;
let currentQuestion = 1;
let questionCurrentTime = 10;
let questionTimeout;
let battleStarted = false;
const timeText = document.querySelector(".clock-icon p");
const answerElement = document.querySelectorAll(".question-container button");
const clockTick = new Audio("/audio/clock-tick.mp3");


function showQuestion() {
  if (currentQuestion > totalQuestions) {
    battleStarted = false;
    dialogueIndex = 0;
    timelineIndex++;
    timeline();
    return;
  }

  const questionElement = document.querySelector(".question p");
  const questionText = questions[currentQuestion].question;
  const answerText = questions[currentQuestion].answers;

  textBox.classList.add("hidden");

  for (let i = 0; i < answerText.length; i++) {
    answerElement[i].textContent = answerText[i];
  }

  answerElement.forEach(button => {
    button.addEventListener("click", handleButton);
  });

  timeText.textContent = questionCurrentTime;
  questionElement.textContent = questionText;
  questionTimeout = setTimeout(() => {
    if (questionCurrentTime == 0) {
      checkAnswer();
    } 
    else if (questionCurrentTime > 0) {
      questionCurrentTime--;
      timeText.textContent = questionCurrentTime;
      clockTick.play();
      showQuestion();
    }
  }, 1000);
  document.querySelector(".question").classList.remove("hidden");
}

function nextQuestion() {
  dialogueIndex++;
  showQuestion();
}




function checkAnswer(answer) {
  const rightAnswer = questions[currentQuestion].rightAnswer;

  if (!answer) {
    // berarti waktu habis / gak ada jawaban
    const wrongAudio = new Audio("/audio/wrong-answer.mp3");
    wrongAudio.play();

    clearTimeout(questionTimeout);
    questionCurrentTime = 10;
    timeText.textContent = questionCurrentTime;
    answerElement.forEach(button => {
      button.removeEventListener("click", handleButton);
    });
    clockTick.pause();
    clockTick.currentTime = 0;

    setTimeout(() => {
      showQuestion();
    }, 2000);

    return; // stop supaya gak error
  }

  const userAnswer = answer.value;
  const answerContainer = answer.parentElement;

  if (userAnswer !== rightAnswer) {
    answerContainer.style.backgroundColor = "#ff5757";
    const wrongAudio = new Audio("/audio/wrong-answer.mp3");
    wrongAudio.play();

    clearTimeout(questionTimeout);
    questionCurrentTime = 10;
    timeText.textContent = questionCurrentTime;
    answerElement.forEach(button => {
      button.removeEventListener("click", handleButton);
    });
    clockTick.pause();
    clockTick.currentTime = 0;
    setTimeout(() => {
      answerContainer.style.backgroundColor = "";
      showQuestion();
    }, 2000);
  }

  if (rightAnswer === userAnswer) {
    answerContainer.style.backgroundColor = "#48ae51";
    const correctAudio = new Audio("/audio/right-answer.mp3");
    correctAudio.play();
    clearTimeout(questionTimeout);
    questionCurrentTime = 10;
    timeText.textContent = questionCurrentTime;
    answerElement.forEach(button => {
      button.removeEventListener("click", handleButton);
    });
    clockTick.pause();
    clockTick.currentTime = 0;
    currentQuestion++;
    setTimeout(() => {
      answerContainer.style.backgroundColor = "";
      showDialogue();
    }, 1000);

  }
}

function startBattle() {
  battleStarted = true;
  const battle = document.querySelector(".battleStart");
  const battleStartAudio = new Audio("/audio/battle-start.mp3");

  battleStartAudio.play();

  battle.classList.remove("hidden"); // reset animasi kalau sudah ada
  battle.classList.remove("battleTransition"); // reset animasi kalau sudah ada
  void battle.offsetWidth;                     // hack biar animasi bisa replay
  battle.classList.add("battleTransition");

  setTimeout(() => {
    battle.classList.add("hidden");
    showQuestion();
  }, 2000);
} 
// setTimeout(() => {
//   startBattle();
// }, 2000);

function handleButton() {
  checkAnswer(this);
}