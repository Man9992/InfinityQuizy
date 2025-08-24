const questions = [
  { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { question: "What is the capital of France?", options: ["Berlin", "Paris", "London"], answer: "Paris" },
  { question: "Which is the largest planet?", options: ["Mars", "Jupiter", "Earth"], answer: "Jupiter" },
  { question: "What is HTML?", options: ["Programming Language", "Markup Language", "Database"], answer: "Markup Language" },
  { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System"], answer: "Cascading Style Sheets" }
];

let currentQuestion = 0;
let score = 0;
let wrong = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  if (!q) {
    showResult();
    return;
  }
  document.getElementById("question").innerText = q.question;
  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(opt);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.answer) {
    score++;
  } else {
    wrong++;
  }
  currentQuestion++;
  showQuestion();
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");
  document.getElementById("score").innerText =
    `✅ Correct: ${score} | ❌ Wrong: ${wrong}`;
}

document.getElementById("next-btn").onclick = () => {
  currentQuestion++;
  showQuestion();
};

startQuiz();