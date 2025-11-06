let timelineIndex = 1;
const bg = document.querySelector(".bg");

function timeline() {
  if (timelineIndex === 1) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/map.png)";
    }, 1500);
  }
  if (timelineIndex === 2) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/house.png)";
    }, 1000);
  }
  if (timelineIndex === 3) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/castle.png)";
    }, 1000);
  }
  if (timelineIndex === 4) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/castle2.png)";
    }, 1000);
  }
  if (timelineIndex === 5) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/sea.png)";
    }, 1000);
  }
  if (timelineIndex === 6) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/sea2.png)";
    }, 1000);
  }
  if (timelineIndex === 7) {
    setTimeout(() => {
      startBattle();
    }, 2000);
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/sea-blur.png)";
    }, 2000);
  }
  if (timelineIndex === 8) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/sea2.png)";
      document.querySelector(".question").classList.add("hidden");
      textBox.classList.add("hidden");
    }, 1000);
  }
  if (timelineIndex === 9) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "url(/img/sea.png)";
    }, 1000);
  }
  if (timelineIndex === 10) {
    transition();
    setTimeout(() => {
      bg.style.backgroundImage = "";
      setTimeout(() => {
        window.location.href = '/';
      }, 2500);
    }, 1000);
  }
}

setTimeout(() => {
  timeline();
}, 2000);

const dialogues = {

  // 0 — Pirate reacts to correct answers (10 riddles total)
  0: [
    { name: "Pirate", text: "Harrr! Ye got the first one right — pure luck, I say!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Blast me beard! Another right one?! Ye’re cheatin’ with them scholar tricks!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Me parrot fainted! Nobody’s supposed to get that right!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Shiver me sanity! Ye’ve got brains sharper than me cutlass!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Arrrgh! I’ll eat me hat if ye get another one!", img: "/img/pirate.png" },
    { name: "Pirate", text: "How in the seven seas—?! That was impossible!", img: "/img/pirate.png" },
    { name: "Pirate", text: "By Poseidon’s toenail, ye’re makin’ a fool o’ me crew!", img: "/img/pirate.png" },
    { name: "Pirate", text: "I can hear me ancestors cryin’ from Davy Jones’ locker!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Stop! Ye makin’ the ocean look dumb!", img: "/img/pirate.png" },
    { name: "Pirate", text: "Fine! Ye win, scholar! I’ll not mess with the brain of Olvindral again!", img: "/img/pirate.png" }
  ],

  // 1 — Prologue
  1: [
    { name: "Narrator", text: "Long ago, beyond the bright sea, stood two mighty kingdoms: Olvindral and Aletheas.", img: "" },
    { name: "Narrator", text: "Olvindral, a land of swords and honor — its banners touched the sky, its men fought for pride.", img: "" },
    { name: "Narrator", text: "Aletheas, across the ocean, treasured knowledge above all else. Their scholars were knights of reason, their libraries grander than castles.", img: "" },
    { name: "Narrator", text: "Peace balanced on the tip of parchment and blade — until the princess of Olvindral was taken by Aletheas.", img: "" },
    { name: "Narrator", text: "Whispers spoke of love, ambition, betrayal. But the truth was lost in the storm between their worlds.", img: "" },
    { name: "Narrator", text: "And when the king sought someone to face the island of knowledge itself, he called upon the one mind feared even by his own council.", img: "" },
    { name: "Narrator", text: "Nolan — the scholar who once debated an entire academy into silence, and called it a 'warm-up.'", img: "" }
  ],

  // 2 — Nolan’s introduction at home
  2: [
    { name: "Narrator", text: "Inside a small study, books towered like walls. Ink stained every surface — the battlefield of Nolan’s thoughts.", img: "" },
    { name: "Nolan", text: "If truth is the weight of knowledge, then ignorance must be lighter than air...", img: "/img/nolan.png" },
    { name: "Narrator", text: "A loud knock shook the door.", img: "" },
    { name: "Guard", text: "Sir Nolan! The king summons you immediately!", img: "/img/guard.png" },
    { name: "Nolan", text: "Oh. Either he wants advice or I’ve finally been outlawed for thinking too hard.", img: "/img/nolan.png" },
    { name: "Narrator", text: "Without another word, the guard led him through the stone halls of Olvindral Castle.", img: "" }
  ],

  // 3 — Nolan meets the King
  3: [
    { name: "King", text: "Nolan of the Scholars. I’ve heard your wisdom can tear apart empires.", img: "/img/king.png" },
    { name: "Nolan", text: "Only the weak ones, Your Majesty.", img: "/img/nolan.png" },
    { name: "King", text: "Our princess has been taken to Aletheas. We need her back — alive and unharmed.", img: "/img/king.png" },
    { name: "Nolan", text: "So you want me to... outsmart an entire nation of geniuses? I barely outsmarted breakfast this morning.", img: "/img/nolan.png" },
    { name: "King", text: "You are the only one who can speak their language — reason. Steel won’t break their walls, but words might.", img: "/img/king.png" },
    { name: "Nolan", text: "And what if they don’t listen to reason?", img: "/img/nolan.png" },
    { name: "King", text: "Then you’ll improvise. You leave at dawn. You won’t go alone.", img: "/img/king.png" },
    { name: "Nolan", text: "Ah. Reinforcements. That’s comforting.", img: "/img/nolan.png" },
    { name: "King", text: "You’ll take Bob.", img: "/img/king.png" },
    { name: "Nolan", text: "...Who?", img: "/img/nolan.png" },
    { name: "Narrator", text: "From behind a curtain, a strange man stumbled out — barefoot, holding half a loaf of bread and a pigeon feather.", img: "" }
    
  ],

  // 4 — Introduction of Bob (same event, separate scene)
  4: [
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Nolan", text: "He... speaks?", img: "/img/nolan.png" },
    { name: "King", text: "Only that. You’ll understand his value... in time.", img: "/img/king.png" },
    { name: "Narrator", text: "Bob poked a candle with his finger, burned himself, and nodded proudly.", img: "" },
    { name: "Nolan", text: "Your Majesty, I feel the need to clarify that I am a scholar, not a babysitter.", img: "/img/nolan.png" },
    { name: "King", text: "Consider it a test of patience. For the memes.", img: "/img/king.png" },
    { name: "Narrator", text: "Thus, the most dangerous mind in the kingdom was paired with the strangest man alive.", img: "" }
  ],

  // 5 — Voyage begins
  5: [
    { name: "Narrator", text: "Under a bright blue sky, Nolan and Bob sailed toward Aletheas.", img: "" },
    { name: "Nolan", text: "Don’t touch the compass, Bob.", img: "/img/nolan.png" },
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Narrator", text: "Bob licked the compass anyway, then stared at it like it revealed the secrets of the universe.", img: "" },
    { name: "Nolan", text: "Fantastic. Now it points to saliva.", img: "/img/nolan.png" },
    { name: "Narrator", text: "The sea sparkled, the breeze gentle. It could almost pass for peace — until chaos arrived on schedule.", img: "" }
  ],

  // 6 — Pirate encounter (chaotic, sunny)
  6: [
    { name: "Pirate", text: "AHOY THERE! WHO DARES CROSS THE SEA OF KNOWLEDGE?!", img: "/img/pirate.png" },
    { name: "Nolan", text: "The sea of... what?", img: "/img/nolan.png" },
    { name: "Pirate", text: "The Sea of KNOWLEDGE! We plunder wisdom, not gold!", img: "/img/pirate.png" },
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Narrator", text: "Bob saluted with a fish he somehow found on deck.", img: "" },
    { name: "Pirate", text: "A fine gesture! The lad’s got spirit!", img: "/img/pirate.png" },
    { name: "Nolan", text: "Please stop encouraging him.", img: "/img/nolan.png" },
    { name: "Pirate", text: "Ye two be funny folk. But rules are rules. I’ve got TEN riddles, and if ye fail even one, ye’ll swim home!", img: "/img/pirate.png" },
    { name: "Nolan", text: "And if I win?", img: "/img/nolan.png" },
    { name: "Pirate", text: "Then I’ll personally guide ye to Aletheas! Also… maybe cry a little.", img: "/img/pirate.png" },
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Narrator", text: "Bob tied a bucket to his own leg and started marching in circles. Nolan pretended not to see it.", img: "" },
    { name: "Pirate", text: "Alright, scholar! Let the battle of brains begin!", img: "/img/pirate.png" }
  ],

  // 7 — After defeating the pirates
  7: [
    { name: "Pirate", text: "ARRRGH! Ye beat me fair and square! I’ve been humiliated on me own deck!", img: "/img/pirate.png" },
    { name: "Nolan", text: "Knowledge sails faster than fear.", img: "/img/nolan.png" },
    { name: "Pirate", text: "Take the path of sunrise — ye’ll find Aletheas there. May the sea favor yer madness!", img: "/img/pirate.png" },
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Narrator", text: "Bob waved both arms, accidentally slapped himself, then bowed to the pirate ship.", img: "" },
    { name: "Nolan", text: "I think... he’s saying thank you?", img: "/img/nolan.png" },
    { name: "Narrator", text: "The pirate crew cheered as Nolan’s ship sailed away, leaving behind laughter and legend.", img: "" }
  ],

  // 8 — Sailing to Aletheas (final scene of part one)
  8: [
    { name: "Narrator", text: "The sea calmed again, as if the waves themselves applauded Nolan’s victory.", img: "" },
    { name: "Nolan", text: "Well, Bob… we survived pirates armed with riddles. That’s new.", img: "/img/nolan.png" },
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Narrator", text: "Bob stood at the edge of the boat, holding a rope like it was a flute, and tried to play it.", img: "" },
    { name: "Nolan", text: "That’s... not how sound works, Bob.", img: "/img/nolan.png" },
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Narrator", text: "He pointed to the horizon with one hand, the other still pretending to play his rope flute.", img: "" },
    { name: "Nolan", text: "Wait— that’s land.", img: "/img/nolan.png" },
    { name: "Narrator", text: "Through the mist of the sea, the white towers of Aletheas shimmered under the sun, tall and proud, like the mind that built them.", img: "" },
    { name: "Nolan", text: "The island of reason…", img: "/img/nolan.png" },
    { name: "Narrator", text: "Bob tossed the rope into the water, nodded as if he’d completed some great task, and then sneezed directly into the wind.", img: "" },
    { name: "Nolan", text: "You’re unbelievable.", img: "/img/nolan.png" },
    { name: "Bob", text: "Hohh... hooo....", img: "/img/bob.png" },
    { name: "Narrator", text: "As their ship sailed closer, the waves grew quieter — as if the ocean itself was holding its breath.", img: "" },
    { name: "Narrator", text: "Ahead of them lay knowledge, danger, and the truth behind the stolen princess.", img: "" },
    { name: "Narrator", text: "To be continued…", img: "" }
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
    question: "Which ancient civilization built the pyramids of Giza?",
    answers: [
      "A. The Romans",
      "B. The Egyptians",
      "C. The Greeks",
      "D. The Persians"
    ],
    rightAnswer: "B"
  },

  2: {
    question: "What color do you get when you mix red and blue?",
    answers: [
      "A. Green",
      "B. Purple",
      "C. Orange",
      "D. Brown"
    ],
    rightAnswer: "B"
  },

  3: {
    question: "Which Greek philosopher taught Alexander the Great?",
    answers: [
      "A. Socrates",
      "B. Plato",
      "C. Aristotle",
      "D. Pythagoras"
    ],
    rightAnswer: "C"
  },

  4: {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      "A. Iron",
      "B. Gold",
      "C. Diamond",
      "D. Granite"
    ],
    rightAnswer: "C"
  },

  5: {
    question: "Which planet is known as the Morning Star?",
    answers: [
      "A. Mars",
      "B. Venus",
      "C. Mercury",
      "D. Jupiter"
    ],
    rightAnswer: "B"
  },

  6: {
    question: "In medieval times, what was a blacksmith’s main work?",
    answers: [
      "A. Making bread",
      "B. Forging metal tools and weapons",
      "C. Farming the fields",
      "D. Painting walls"
    ],
    rightAnswer: "B"
  },

  7: {
    question: "Which animal was sacred in ancient Egypt?",
    answers: [
      "A. Dog",
      "B. Cat",
      "C. Cow",
      "D. Falcon"
    ],
    rightAnswer: "B"
  },

  8: {
    question: "Who is the legendary king associated with the Knights of the Round Table?",
    answers: [
      "A. King Arthur",
      "B. King Richard",
      "C. King George",
      "D. King Edward"
    ],
    rightAnswer: "A"
  },

  9: {
    question: "Which element did ancient alchemists try to turn into gold?",
    answers: [
      "A. Iron",
      "B. Copper",
      "C. Lead",
      "D. Silver"
    ],
    rightAnswer: "C"
  },

  10: {
    question: "Which ocean lies between Africa and Australia?",
    answers: [
      "A. Atlantic Ocean",
      "B. Arctic Ocean",
      "C. Pacific Ocean",
      "D. Indian Ocean"
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
  }, 3000);
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