const topics = [
  { name: "Science", questions: () => scienceQuestions },
  { name: "History", questions: () => historyQuestions },
  { name: "Math", questions: () => mathQuestions },
  { name: "Geography", questions: () => geographyQuestions },
  { name: "Technology", questions: () => technologyQuestions },
  { name: "Business", questions: () => businessQuestions },
  { name: "Space", questions: () => spaceQuestions },
  { name: "Logic / IQ", questions: () => logicQuestions },
  { name: "World Facts", questions: () => worldFactsQuestions },
  { name: "Expert Mode", questions: () => expertQuestions }
];

const colors = [
  "#FF4D6D",
  "#4D96FF",
  "#6BCB77",
  "#FFD93D",
  "#9B5DE5",
  "#F15BB5",
  "#00BBF9",
  "#F77F00",
  "#00F5D4",
  "#FF006E"
];

const topicsDiv = document.getElementById("topics");
const title = document.querySelector("h1");
const subtitle = document.querySelector("p");

let currentQuestion = 0;
let score = 0;
let currentQuiz = [];
let currentTopic = "";
let recognition;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

async function speak(text, callback) {
  try {
    const response = await fetch("/.netlify/functions/elevenlabs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      throw new Error("ElevenLabs failed");
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);
    const audio = new Audio(audioUrl);

    audio.onended = function () {
      if (callback) {
        setTimeout(callback, 3000);
      }
    };

    audio.play();

  } catch (error) {
    console.log("Using browser voice backup:", error);

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;

    speech.onend = function () {
      if (callback) {
        setTimeout(callback, 3000);
      }
    };

    speechSynthesis.speak(speech);
  }
}

function startListening(question, options) {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) return;

  recognition =
    new SpeechRecognition();

    recognition.onstart = function() {
  console.log("Listening...");
};

recognition.onerror = function(event) {
  console.log("Speech Error:", event.error);
};

recognition.onend = function() {
  console.log("Stopped Listening");
};

  recognition.lang = "en-US";

  recognition.onresult =
    function(event) {

      const spoken =
        event.results[0][0]
        .transcript
        .toLowerCase();

      console.log(spoken);

      if (
        spoken.includes("red")
      ) {
        document.querySelectorAll(
          ".option-btn"
        )[0].click();
      }

      else if (
        spoken.includes("blue")
      ) {
        document.querySelectorAll(
          ".option-btn"
        )[1].click();
      }

      else if (
        spoken.includes("green")
      ) {
        document.querySelectorAll(
          ".option-btn"
        )[2].click();
      }

      else if (
        spoken.includes("yellow")
      ) {
        document.querySelectorAll(
          ".option-btn"
        )[3].click();
      }

    };

  recognition.start();
}

function loadTopics() {
  title.style.display = "block";
  subtitle.style.display = "block";
  topicsDiv.innerHTML = "";

  topics.forEach((topic, index) => {
    const button = document.createElement("button");

    button.className = "topic-btn";
    button.textContent = topic.name;
    button.style.backgroundColor = colors[index];

    button.onclick = function () {
      startQuiz(topic);
    };

    topicsDiv.appendChild(button);
  });
}

function startQuiz(topic) {
  currentQuestion = 0;
  score = 0;
  currentTopic = topic.name;

  let selectedQuestions;

  try {
    selectedQuestions = topic.questions();
  } catch {
    alert(currentTopic + " questions are not added yet.");
    return;
  }

  if (!selectedQuestions || selectedQuestions.length === 0) {
    alert(currentTopic + " questions are empty.");
    return;
  }

  currentQuiz = [...selectedQuestions];
  shuffleArray(currentQuiz);

  showQuestion();
}

function showQuestion() {
  title.style.display = "none";
  subtitle.style.display = "none";

  const question = currentQuiz[currentQuestion];

topicsDiv.innerHTML = `
  <div class="quiz-box quiz-layout">

    <div class="admiral-side">
      <img
        class="admiral-img-large"
        src="admiral-g.png"
        alt="Admiral G"
      >
    </div>

    <div class="question-side">
      <h2 class="question-number">
        ${currentTopic} — Question ${currentQuestion + 1}
      </h2>

      <h3 class="question">
        ${question.question}
      </h3>

      <div id="options"></div>

      <p class="score">
        Score: ${score}
      </p>
    </div>

  </div>
`;

  const optionsDiv = document.getElementById("options");

  const shuffledOptions = [...question.options];
  shuffleArray(shuffledOptions);

  setTimeout(() => {

speak(
  question.question +
  ". Red " +
  shuffledOptions[0] +
  ". Blue " +
  shuffledOptions[1] +
  ". Green " +
  shuffledOptions[2] +
  ". Yellow " +
  shuffledOptions[3],

  () => {
    startListening(
      question,
      shuffledOptions
    );
  }
);

}, 500);

  shuffledOptions.forEach((option) => {
    const button = document.createElement("button");

    button.className = "option-btn";
    button.textContent = option;

button.onclick = function () {

  const allButtons =
    document.querySelectorAll(
      ".option-btn"
    );

  allButtons.forEach((btn) => {

    btn.disabled = true;

    if (
      btn.textContent ===
      question.answer
    ) {

      btn.classList.add(
        "correct"
      );

    } else {

      btn.classList.add(
        "wrong"
      );

    }

  });

  if (
    option ===
    question.answer
  ) {

    score++;

    speak("Correct");

  } else {

    speak("Incorrect");

  }

  setTimeout(() => {

    currentQuestion++;

    if (
      currentQuestion <
      currentQuiz.length
    ) {

      showQuestion();

    } else {

      showResults();

    }

  }, 1500);

};
    optionsDiv.appendChild(button);

  });

}

function showResults() {
  title.style.display = "none";
  subtitle.style.display = "none";

  topicsDiv.innerHTML = `
    <div class="quiz-box">
      <h2 class="question-number">
        ${currentTopic} Complete!
      </h2>

      <h3 class="question">
        Score: ${score}/${currentQuiz.length}
      </h3>

      <button class="topic-btn" onclick="loadTopics()">
        Back To Topics
      </button>
    </div>
  `;
}

loadTopics();
