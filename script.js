const questions = [
  {
    question: "Which is larget animal in world?",
    answers: [
      { text: "Elephant", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asua", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
      { text: "Arabian", correct: false },
      { text: "Gobi", correct: false },
    ],
  },
  {
    question: "Which is the largest river in the world?",
    answers: [
      { text: "Amazon", correct: true },
      { text: "Nile", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    question: "Which is the largest ocean in the world?",
    answers: [
      { text: "Atlantic", correct: false },
      { text: "Indian", correct: false },
      { text: "Pacific", correct: true },
      { text: "Arctic", correct: false },
    ],
  },
  {
    question: "Which is the largest moon in the solar system?",
    answers: [
      { text: "Titan", correct: true },
      { text: "Ganymede", correct: false },
      { text: "Callisto", correct: false },
      { text: "Europa", correct: false },
    ],
  },
  {
    question: "Who developed the theory of relativity?",
    answers: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Stephen Hawking", correct: false },
    ],
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Ottawa", correct: true },
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
    ],
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mars", correct: true },
      { text: "Saturn", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  handleNextButton();
});

startQuiz();
