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

  // 0 — Pirate reacts to correct answers (7 riddles total)
  0: [
    { name: "Pirate", text: "Harrr! Not bad for a land scholar! But that was just the warm-up!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Blimey! Another right answer?! Ye must have Neptune whisperin’ in yer ear!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Curses! Even me parrot couldn’t solve that one! But try this, smarty boots!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Shiver me brain cells! Ye cracked it again!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Arrrgh! No way a scholar beats a pirate at wit! Yet here ye are!", img: "/img/pirate.png" },
    { name: "Pirate", text: "By the tides, ye’re a devil of logic, ain’t ye?", img: "/img/pirate.png" },
    { name: "Pirate", text: "Enough! Ye’ve bested me, scholar. The sea bows to yer wisdom… for now.", img: "/img/pirate.png" }
  ],

  // 1 — Intro: narrator opens the world
  1: [
    { name: "Narrator", text: "Long ago, across the restless sea, stood two kingdoms—Olvindral and Aletheas.", img: "" },
    { name: "Narrator", text: "Olvindral, a land of castles and men. Aletheas, an island where knowledge was worshiped above gold or gods.", img: "" },
    { name: "Narrator", text: "But peace shattered when the princess of Olvindral was taken away... by the very scholars of Aletheas.", img: "" },
    { name: "Narrator", text: "Some say it was love. Others, ambition. Whatever the reason, the king of Olvindral would not stand idle.", img: "" }
  ],

  // 2 — Nolan’s introduction at home
  2: [
    { name: "Narrator", text: "In a quiet corner of Olvindral, a scholar named Nolan studied beneath candlelight.", img: "" },
    { name: "Narrator", text: "His room overflowed with books, maps, and ink-stained notes of forgotten wisdom.", img: "" },
    { name: "Nolan", text: "If the velocity of thought were measurable...", img: "/img/nolan.png" },
    { name: "Narrator", text: "Before he could finish his mumbling, a loud knock shook the wooden door.", img: "" },
    { name: "Guard", text: "Sir Nolan! The king summons you at once!", img: "/img/guard.png" },
    { name: "Nolan", text: "Huh? The king? Did someone misread the address?", img: "/img/nolan.png" },
    { name: "Narrator", text: "He sighed, closed his book, and followed the guard toward the castle.", img: "" }
  ],

  // 3 — Nolan meets the king
  3: [
    { name: "King", text: "Nolan of the Scholars. Our princess has been taken across the sea—to Aletheas.", img: "/img/king.png" },
    { name: "Nolan", text: "I heard the rumors... but why summon me, Your Majesty?", img: "/img/nolan.png" },
    { name: "King", text: "Because Aletheas values intellect above all. If anyone can speak their language of reason—it’s you.", img: "/img/king.png" },
    { name: "Nolan", text: "So I am to bring her back?", img: "/img/nolan.png" },
    { name: "King", text: "Aye. You’ll sail at dawn. And you won’t go alone.", img: "/img/king.png" },
    { name: "Nolan", text: "Oh, good. Who shall accompany me—an army? a strategist?", img: "/img/nolan.png" },
    { name: "King", text: "No. You’ll take Bob.", img: "/img/king.png" },
    { name: "Nolan", text: "Who?", img: "/img/nolan.png" },
    { name: "Narrator", text: "A man appeared from behind the curtain, chewing on bread, completely unaware of the tension.", img: "" },
    { name: "Bob", text: "Hey. I’m Bob. I once fought a goose and lost.", img: "/img/bob.png" },
    { name: "Nolan", text: "Your Majesty, with all due respect—why him?", img: "/img/nolan.png" },
    { name: "King", text: "For the memes.", img: "/img/king.png" },
    { name: "Narrator", text: "The hall fell silent. Nolan closed his eyes and accepted his fate.", img: "" }
  ],

  // 4 — The voyage begins
  4: [
    { name: "Narrator", text: "By dawn, Nolan and Bob boarded a small ship bound for Aletheas.", img: "" },
    { name: "Nolan", text: "Keep your hands off the compass, Bob.", img: "/img/nolan.png" },
    { name: "Bob", text: "Relax, I was just wondering if it floats.", img: "/img/bob.png" },
    { name: "Narrator", text: "The sea was calm, the horizon endless. For a moment, it almost felt peaceful.", img: "" },
    { name: "Narrator", text: "Until dark clouds rolled in... and shadows emerged from the mist.", img: "" },
    { name: "Pirate", text: "Ahoy! You sail through the waters of the pirates! Prepare to be boarded!", img: "/img/pirate.png" },
    { name: "Bob", text: "Oh no, I left my sword at home.", img: "/img/bob.png" },
    { name: "Nolan", text: "You own a sword?", img: "/img/nolan.png" },
    { name: "Pirate", text: "No need for steel, scholar. We fight with the mind. Answer me riddles, or sink!", img: "/img/pirate.png" },
    { name: "Narrator", text: "And thus began the battle of knowledge upon the open sea...", img: "" }
  ],

  // 5 — After defeating the pirates
  5: [
    { name: "Pirate", text: "Arrrgh! No mortal bests a pirate! Ye truly be a master o’ the mind.", img: "/img/pirate.png" },
    { name: "Nolan", text: "Knowledge sails farther than any ship.", img: "/img/nolan.png" },
    { name: "Pirate", text: "Heh. Spoken like a true scholar. Follow the rising sun, and ye’ll find Aletheas.", img: "/img/pirate.png" },
    { name: "Narrator", text: "The pirates saluted as Nolan’s ship sailed away, the storm giving way to calm waters once more.", img: "" },
    { name: "Bob", text: "So… do pirates always do math before attacking?", img: "/img/bob.png" },
    { name: "Nolan", text: "Apparently.", img: "/img/nolan.png" },
    { name: "Narrator", text: "The two sailed onward, unaware of the darker truths waiting across the sea.", img: "" }
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
    currentDialogue = 0;
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
    question: "What is the largest planet in our solar system?",
    answers: [
      "A. Earth",
      "B. Mars",
      "C. Jupiter",
      "D. Neptune"
    ],
    rightAnswer: "C"
  },

  2: {
    question: "Which animal is known as the King of the Jungle?",
    answers: [
      "A. Tiger",
      "B. Lion",
      "C. Elephant",
      "D. Bear"
    ],
    rightAnswer: "B"
  },

  3: {
    question: "What color do you get when you mix blue and yellow?",
    answers: [
      "A. Purple",
      "B. Green",
      "C. Orange",
      "D. Brown"
    ],
    rightAnswer: "B"
  },

  4: {
    question: "How many continents are there on Earth?",
    answers: [
      "A. Five",
      "B. Six",
      "C. Seven",
      "D. Eight"
    ],
    rightAnswer: "C"
  },

  5: {
    question: "Which metal is liquid at room temperature?",
    answers: [
      "A. Iron",
      "B. Mercury",
      "C. Silver",
      "D. Copper"
    ],
    rightAnswer: "B"
  },

  6: {
    question: "Which gas do plants absorb from the atmosphere?",
    answers: [
      "A. Oxygen",
      "B. Nitrogen",
      "C. Carbon Dioxide",
      "D. Hydrogen"
    ],
    rightAnswer: "C"
  },

  7: {
    question: "What is the fastest land animal?",
    answers: [
      "A. Cheetah",
      "B. Horse",
      "C. Leopard",
      "D. Falcon"
    ],
    rightAnswer: "A"
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
    currentDialogue = savedCurrentDialogue;
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
    dialogueIndex = 0;
    currentQuestion = 1;


    setTimeout(() => {
      gameOver();
    }, 400);

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
    dialogueIndex = 0;
    currentQuestion = 1;

    
    setTimeout(() => {
      answerContainer.style.backgroundColor = "";
      gameOver();
    }, 400);
    return;
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
  const bg = document.querySelector(".bg");


  battleStartAudio.play();

  battle.classList.remove("hidden"); // reset animasi kalau sudah ada
  battle.classList.remove("battleTransition"); // reset animasi kalau sudah ada
  void battle.offsetWidth;                     // hack biar animasi bisa replay
  bg.style.backgroundImage = "url(/img/map-blur.png)";
  battle.classList.add("battleTransition");

  setTimeout(() => {
    battle.classList.add("hidden");
    showQuestion();
  }, 2000);
} 
// setTimeout(() => {
//   startBattle();
// }, 2000);

function transition() {
  const transition = document.querySelector(".transition");
  const transitionAudio = new Audio("/audio/transition.mp3");

  transitionAudio.play();

  transition.classList.remove("hidden"); // reset animasi kalau sudah ada
  transition.classList.remove("battleTransition"); // reset animasi kalau sudah ada
  void transition.offsetWidth;                     // hack biar animasi bisa replay
  transition.classList.add("battleTransition");

  setTimeout(() => {
    transition.classList.add("hidden");
    showDialogue();
  }, 2000);
}

const gameOverContainer = document.querySelector(".gameover");
const restartButton = document.querySelector(".gameover a");
function gameOver() {
  gameOverContainer.classList.remove("hidden");
  restartButton.addEventListener("click", restartGame);
}

function restartGame() {
  // setTimeout(() => {
  //   gameOverContainer.classList.add("hidden");
  //   timeline();
  // }, 1000);
  gameOverContainer.classList.add("hidden");
  document.querySelector(".question").classList.add("hidden");
  timeline();
}

function handleButton() {
  checkAnswer(this);
}