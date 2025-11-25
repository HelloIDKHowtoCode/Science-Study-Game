<!-- Science Study Game: Astronomy + Biology -->
const questions = [
  // Astronomy Questions
  { question: "Which planets are terrestrial?", answers: ["Mercury, Venus, Earth, Mars", "Jupiter, Saturn", "Uranus, Neptune", "Mars, Jupiter"], correct: 0 },
  { question: "Which planets are gas giants?", answers: ["Mercury, Venus", "Jupiter, Saturn", "Uranus, Neptune", "Earth, Mars"], correct: 1 },
  { question: "Where is the asteroid belt?", answers: ["Between Earth and Mars", "Between Mars and Jupiter", "Beyond Neptune", "Near Venus"], correct: 1 },
  { question: "What is a comet?", answers: ["A rocky body in asteroid belt", "Icy body with glowing tail", "A meteor burning in atmosphere", "A moon orbiting a planet"], correct: 1 },
  { question: "What causes tides on Earth?", answers: ["Earth's tilt", "Moon's gravity", "Sun's rotation", "Meteor impacts"], correct: 1 },
  { question: "What is a lunar eclipse?", answers: ["Moon passes into Earth's shadow", "Earth passes into Moon's shadow", "Sun is blocked by Moon", "Moon appears crescent"], correct: 0 },
  { question: "How long does the Moon take to orbit Earth?", answers: ["24 hours", "7 days", "29.5 days", "365 days"], correct: 2 },
  { question: "Why do we have seasons?", answers: ["Earth's distance from Sun", "Earth's tilt of 23.5°", "Moon's orbit", "Sunspots"], correct: 1 },

  // Biology Questions
  { question: "What are the 7 needs of living things?", answers: ["Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition", "Movement, Growth, Photosynthesis, Nutrition, Excretion, Sensitivity, Respiration", "Reproduction, Nutrition, Sunlight, Water, Growth, Excretion, Respiration", "Movement, Respiration, Growth, Reproduction, Nutrition, Water, Oxygen"], correct: 0 },
  { question: "Which is a biotic factor?", answers: ["Sunlight", "Water", "Temperature", "Plants"], correct: 3 },
  { question: "Which is an abiotic factor?", answers: ["Bacteria", "Animals", "Soil", "Fungi"], correct: 2 },
  { question: "Which type of symbiosis benefits both organisms?", answers: ["Mutualism", "Commensalism", "Parasitism", "Predation"], correct: 0 },
  { question: "Which kingdom includes multicellular, heterotrophic organisms?", answers: ["Animalia", "Protista", "Fungi", "Monera"], correct: 0 },
  { question: "Which kingdom is mostly single-celled eukaryotes?", answers: ["Animalia", "Fungi", "Protista", "Plantae"], correct: 2 },
  { question: "What are mangroves?", answers: ["Desert plants", "Coastal ecosystems with salt-tolerant trees", "Freshwater fish", "Mountain shrubs"], correct: 1 },
  { question: "What is a food web?", answers: ["Single energy path", "Many interconnected food chains", "Only producers and consumers", "A type of symbiosis"], correct: 1 }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(i);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === questions[currentQuestion].correct) score++;
  currentQuestion++;
  if (currentQuestion < questions.length) showQuestion();
  else showScore();
}

function showScore() {
  document.getElementById("quiz-container").style.display = "none";
  scoreContainer.style.display = "block";
  scoreEl.textContent = `${score} / ${questions.length}`;
}

nextBtn.onclick = () => showQuestion();
restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  scoreContainer.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
};

// Start the game
showQuestion();
