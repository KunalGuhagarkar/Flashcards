const questions = [
    "What does HTML stand for?",
    "Which CSS property is used to change the text color of an element?",
    "Inside which HTML element do we put the JavaScript file?",
    "What is the purpose of the semantic &lt;article&gt; HTML tag?",
    "How do you declare a constant variable in JavaScript?",
];

const answers = [
    "HyperText Markup Language",
    "color",
    "<script>",
    "It specifies independent, self-contained content that could make sense on its own.",
    "const",
];

const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const questionNumber = document.querySelector(".question-number-text");

const question = document.querySelector(".question-text");

const prevQuestionBtn = document.querySelector(".prev");
const nextQuestionBtn = document.querySelector(".next");
const showAnswerBtn = document.querySelector(".showAnswer");

let toggle = true;

document.addEventListener("DOMContentLoaded", () => {
    question.innerHTML = `<h3>${questions[0]}</h3>`;
    questionNumber.innerText = `${currentQuestion + 1} of ${questions.length}`;
});

let currentQuestion = 0;

nextQuestionBtn.addEventListener("click", () => {
    currentQuestion < questions.length - 1 && currentQuestion++;
    question.innerHTML = `<h3>${questions[currentQuestion]}</h3>`;
    toggle = true;
    questionNumber.innerText = `${currentQuestion + 1} of ${questions.length}`;
    showAnswerBtn.innerText = "Show Answer";
    progressText.innerText = `${(currentQuestion / (questions.length - 1)) * 100}%`;
    progressBar.style.width = `${(currentQuestion / (questions.length - 1)) * 100}%`;
});

prevQuestionBtn.addEventListener("click", () => {
    currentQuestion > 0 && currentQuestion--;
    question.innerHTML = `<h3>${questions[currentQuestion]}</h3>`;
    toggle = true;
    questionNumber.innerText = `${currentQuestion + 1} of ${questions.length}`;
    showAnswerBtn.innerText = "Show Answer";
    progressText.innerText = `${(currentQuestion / (questions.length - 1)) * 100}%`;
    progressBar.style.width = `${(currentQuestion / (questions.length - 1)) * 100}%`;
});

showAnswerBtn.addEventListener("click", () => {
    if (toggle) {
        showAnswerBtn.innerText = "Show Question";
        question.innerText = answers[currentQuestion];
        toggle = !toggle;
    } else {
        showAnswerBtn.innerText = "Show Answer";
        question.innerHTML = `<h3>${questions[currentQuestion]}</h3>`;
        toggle = !toggle;
    }
});
